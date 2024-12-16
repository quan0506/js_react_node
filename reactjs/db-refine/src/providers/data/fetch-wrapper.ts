import { message as antMessage } from "antd";
// module display notification(error, failed, success) from ant design library
import { GraphQLFormattedError } from "graphql";
// data type defines error structure return from GraphQL.

// define 'error'
type Error = {
  message: string; // content
  statusCode: string; // status code 2xx 4xx 5xx
};

const customFetch = async (url: string, options: RequestInit) => {
  const accessToken = localStorage.getItem("access_token");
  // access token lưu trong local storage được lấy ra để gửi kèm trong headers của request 
  const headers = options.headers as Record<string, string>;
  // header changed to object để dễ dàng sửa đổi và gắn thêm thông tin mới
  
  
  return await fetch(url, {
    ...options, // kế thừa các tùy chọn gốc từ param input
    headers: {
      ...headers,
      Authorization: headers?.Authorization || `Bearer ${accessToken}`,
      // nếu đã có header .Authorization thì giữ nguyên, nếu không thêm Bearer ${accessToken}
      "Content-Type": "application/json", // định nghĩa mọi loại dữ liệu là Json
      "Apollo-Require-Preflight": "true", // header của Apollp GraphQL để yêu cầu check trước khi gửi mutation 
    },
  });
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
  const response = await customFetch(url, options);
  const responseClone = response.clone();
  // send request HTTP with customFetch
  // create responseClone để handle JSON mà không làm mất content gốc

  let body: any;
  try {
    body = await responseClone.json(); // change response to json
  } catch (e) {
    body = null; // if error, body = null
  }

  const error = getGraphQlErrors(body); // use getGraphQlErrors to check and get error 

  if (error) {
    antMessage.error(error.message); // display error notification use antMessage
    throw error; // throw error to stop the process
  }

  return response;
};

const getGraphQlErrors = (
  body: Record<"errors", GraphQLFormattedError[] | undefined>
): Error | null => {
  // nếu không có content trong response (body = null), trả về lỗi "unknown error"
  if (!body) {
    return {
      message: "Unknown error",
      statusCode: "Internal_server_error",
    };
  }

  const { errors } = body; // dữ liệu lỗi từ phản hồi GranphQL lấy ra

  if (errors && errors.length > 0) {
    const messages = errors.map((err) => err.message).join("; ");
    const code = errors[0]?.extensions?.code || "500";

    return {
      message: messages || JSON.stringify(errors),
      statusCode: code.toString(),
    };
  }
  // nếu có lỗi thì ghép tất cả thành chuỗi messages, lấy mã lỗi đàu tiên từ extensions.code hoặc mặc định là 500
  // trả về thông tin lỗi dạng error

  return null; // trả về phản hồi nếu ko có lỗi
};


    // Mục đích:
    // Quản lý lỗi GraphQL.
    // Tự động thêm token xác thực.
    // Hiển thị thông báo lỗi nếu xảy ra vấn đề.

    // Luồng hoạt động:
    // Gửi yêu cầu HTTP thông qua customFetch.
    // Kiểm tra và chuẩn hóa lỗi GraphQL (nếu có).
    // Hiển thị lỗi và dừng tiến trình khi cần.
    // Trả về phản hồi nếu không có lỗi.