import graphqlDataProvider, {
  GraphQLClient,
  liveProvider as graphqlLiveProvider,
} from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetch-wrapper";
import { createClient } from "graphql-ws";
// import library and func

// defines url
export const API_BASE_URL = "https://api.crm.refine.dev";
export const API_URL = `${API_BASE_URL}/graphql`;
export const WS_URL = "wss://api.crm.refine.dev/graphql";

export const client = new GraphQLClient(API_URL, {
  // tạo graphQL để send query và change dữ liệu(mutations) to server GraphQL
  fetch: (url: string, options: RequestInit) => {
    // dùng fetchWrapper để send yêu cầu HTTP để thêm xác thực và xử lý lỗi cách đồng nhất
    try {
      // xử lý lỗi
      return fetchWrapper(url, options);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

export const wsClient = // tạo websocket client(chỉ đc tạo khi app chạy trên trình duyệt)
  typeof window !== "undefined"
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
          // Lấy token từ localStorage.
          const accessToken = localStorage.getItem("access_token");

          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              // create WebSocket client to handle live updates or subscriptions từ server GraphQL
            },
          };
        },
      })
    : undefined; // Trả về undefined nếu không phải trình duyệt:

export const dataProvider = graphqlDataProvider(client);
// Use graphqlDataProvider với client để handle query and change data GraphQL.
export const liveProvider = wsClient
  ? graphqlLiveProvider(wsClient) // wsClient tồn tại, tạo liveProvider để hỗ trợ live updates qua WebSocket.
  : undefined; // nếu ko , liveProvider là undefined

//   Tóm tắt kiến thức áp dụng:
// GraphQL API Integration:
// Sử dụng graphqlDataProvider để giao tiếp với GraphQL server.
// Xử lý queries và mutations qua một client được cấu hình tùy chỉnh.

// WebSocket Live Updates:
// Tích hợp live updates hoặc subscriptions qua graphqlLiveProvider và graphql-ws.

// Custom Fetch Handling:
// Xử lý xác thực (Authentication) và lỗi (Error Handling) qua lớp bọc fetchWrapper.

// Kiến thức JavaScript:
// typeof window !== "undefined": Kiểm tra môi trường thực thi (trình duyệt hay không).
// localStorage: Quản lý token xác thực.

// Ant Design:
// Sử dụng thông báo từ antd để hiển thị lỗi khi xảy ra vấn đề.
