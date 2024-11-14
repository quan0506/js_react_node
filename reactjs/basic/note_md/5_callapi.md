### 5. Gọi API và làm việc với dữ liệu
Fetch API hoặc Axios: Gọi API và làm việc với dữ liệu bên ngoài.
Xử lý bất đồng bộ với async/await: Quản lý các yêu cầu API và xử lý lỗi.
Sử dụng useEffect để gọi API khi component được tải hoặc khi các giá trị phụ thuộc thay đổi.

* Sử dụng Fetch API
- Fetch API là một phương pháp tích hợp trong JS để call API và get data. Để use Fetch API, có thể thực hiện request HTTP bằng cách sử dụng hàm fetch và xử lý kết quả với then hoặc async/await.

import React, { useEffect, useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Hàm async để gọi API
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  // Gọi fetchData khi component được tải
  useEffect(() => {
    fetchData();
  }, []);

    fetchData: Là một hàm async sử dụng fetch để lấy dữ liệu từ API, xử lý lỗi bằng cách kiểm tra response.ok.
    useEffect: Được dùng để gọi fetchData khi component được tải.

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;

- Sử dụng Axios là thư viện phổ biến cho việc call API vì nó đơn giản hóa quy trình và có tính năng hỗ trợ xử lý lỗi và dữ liệu JSON tự động. 

Ví dụ sử dụng Axios với async/await và xử lý lỗi
 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Hàm async để gọi API bằng Axios
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      Axios: Thực hiện yêu cầu bằng axios.get, giúp đơn giản hóa quy trình so với fetch.
    } catch (err) {
      setError(err.message);
    }
  };

  // Gọi fetchData khi component được tải
  useEffect(() => {
    fetchData();
    fetchData: Hàm async gọi API bằng Axios, với lỗi được bắt qua catch.
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;

- Sử dụng useEffect để gọi API khi component được tải
useEffect giúp gọi API khi component được tải hoặc khi một giá trị phụ thuộc thay đổi. Tham số thứ hai của useEffect là một mảng dependencies, giúp quyết định khi nào hàm sẽ chạy lại. Khi mảng dependencies rỗng ([]), API chỉ được gọi một lần khi component tải lần đầu.
 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      setPosts(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Gọi API khi component tải hoặc khi userId thay đổi
  useEffect(() => {
    fetchPosts();
  }, [userId]);
  useEffect có dependency [userId], nghĩa là mỗi khi userId thay đổi, fetchPosts sẽ được gọi lại.
  fetchPosts thực hiện yêu cầu API và cập nhật dữ liệu posts dựa trên userId.

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User {userId} Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;

