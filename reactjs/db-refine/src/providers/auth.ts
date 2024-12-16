import type { AuthProvider } from "@refinedev/core";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { User } from "@/graphql/schema.types";
import { API_URL, dataProvider } from "./data";

/**
 * For demo purposes and to make it easier to test the app, you can use the following credentials:
 */
// acc login default include email and password 
export const authCredentials = {
  email: "quanphamm0506@gmail.com", 
  password: "demodemo",
};

export const authProvider: AuthProvider = {
  // object chứa các method auth, config theo chuẩn AuthProvider từ @refinedev/core.
  login: async ({ email }) => {
    try {
      const { data } = await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          variables: { email },
          rawQuery: `
                mutation Login($email: String!) {
                    login(loginInput: {
                      email: $email
                    }) {
                      accessToken,
                    }
                  }
                `,

          // variables: { email, password }, // Thêm password
        },
      });

      localStorage.setItem("access_token", data.login.accessToken);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (e) {
      const error = e as Error;

      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Login failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },
  // gửi mutation Login vs param email , yêu cầu sercer trả về token truy cập(access token)
  // Lưu access token trong local storage
  // Handle result , return status success và redirect to page / if success
  // if error, return  detail error notification

  logout: async () => {
    localStorage.removeItem("access_token");

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  // delete access token from local storage
  // return success status and redirect to / page

  onError: async (error) => {
    if (error.statusCode === "UNAUTHENTICATED") {
      return {
        logout: true,
      };
    }

    return { error };
  },
  // if error have UNAUTHENTICATED , yêu cầu đăng xuất ({ logout: true }).
  // if error, return  detail error notification

  check: async () => {
    try {
      await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          rawQuery: `
                    query Me {
                        me {
                          name
                        }
                      }
                `,
        },
      });

      return {
        authenticated: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },
  // send query ME  to API để xác minh người dùng hiện tại.
    // if success, return { authenticated: true }. 
    // if failed, redirect to /login.
  
    getIdentity: async () => {
    const accessToken = localStorage.getItem("access_token");

    try {
      const { data } = await dataProvider.custom<{ me: User }>({
        url: API_URL,
        method: "post",
        headers: accessToken
          ? {
              Authorization: `Bearer ${accessToken}`,
            }
          : {},
        meta: {
          rawQuery: `
                    query Me {
                        me {
                            id,
                            name,
                            email,
                            phone,
                            jobTitle,
                            timezone
                            avatarUrl
                        }
                      }
                `,
        },
      });

      return data.me;
    } catch (error) {
      return undefined;
    }
  },
  // Get detailed information about the current user
  // get access_token from localStorage.
  // send GraphQL (query Me) to API get informtion id, name, email, v.v.
  // if error, return undefined.
};


// Tổng Kết
// Đăng nhập (login): Gửi mutation để nhận token, lưu vào localStorage.
// Đăng xuất (logout): Xóa token khỏi localStorage.
// Kiểm tra trạng thái (check): Xác minh người dùng có đang đăng nhập không.
// Lấy danh tính (getIdentity): Lấy thông tin chi tiết của người dùng hiện tại.
// Xử lý lỗi (onError): Phản hồi khi xảy ra lỗi xác thực.