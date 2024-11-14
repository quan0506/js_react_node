#### 3. Quản lý trạng thái (State Management) là cách bạn quản lý và chia sẻ trạng thái (state) giữa các component trong ứng dụng. Khi app trở nên phức tạp và các component có nhu cầu chia sẻ nhiều dữ liệu với nhau, việc quản lý state cũng cần tổ chức tốt hơn để duy trì tính dễ đọc, hiệu quả và tránh các lỗi tiềm ẩn. Context API là một công cụ hữu ích để quản lý state khi các component không có quan hệ cha-con trực tiếp.

### Context API: Quản lý trạng thái cho các component không có quan hệ cha-con, thường sử dụng cho các project nhỏ.

* Context API rất phù hợp khi:
- có nhiều comp cần truy cập vào cùng một dữ liệu hoặc trạng thái.
- Các comp cần dữ liệu đó không có mối quan hệ cha-con trực tiếp, hoặc nằm cách xa nhau trong cây comp.
- Độ phức tạp của ứng dụng không đủ lớn để cần đến các thư viện quản lý state phức tạp như Redux.

* Cách tạo và sử dụng Context API
- Bước 1: Tạo Context sử dụng createContext. Context sẽ giúp save state và provide state này cho mọi comp cần dùng.

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    UserContext được tạo ra và sử dụng làm một nơi để lưu trữ user và setUser.
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider là component bọc (wrapper component) mà bạn sẽ dùng để bao bọc các component con cần truy cập vào UserContext. Điều này cho phép các component con truy cập vào dữ liệu user qua value={{ user, setUser }}.

- Bước 2: Bao bọc ứng dụng với Provider trong App.js bằng UserProvider để provide data cho chúng.

import React from 'react';
import { UserProvider } from './UserContext';
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <UserProvider>
      <Header />
      <Profile />
    </UserProvider>
  );
}

export default App;
Khi bọc UserProvider xung quanh Header và Profile, chúng sẽ có quyền truy cập vào user mà không cần truyền props xuống từng cấp.

- Bước 3: Sử dụng dữ liệu Context trong các component con
Bất cứ component nào bên trong UserProvider đều có thể truy cập vào dữ liệu user bằng cách sử dụng useContext.

* Những lưu ý khi sử dụng Context API
- Dễ dàng tái sử dụng dữ liệu: Context API cho phép chia sẻ dữ liệu giữa nhiều comp, tránh việc phải truyền props xuống nhiều cấp.
- Không nên lạm dụng Context: Context không được thiết kế để thay thế hoàn toàn cho props hoặc các method quản lý state khác. Trong các dự án phức tạp hơn với nhiều loại state khác nhau, bạn có thể cần các thư viện quản lý state như Redux.
- Tối ưu hóa hiệu suất: Khi state trong Context thay đổi, tất cả các component con sử dụng Context đó sẽ render lại. Để tối ưu, hãy dùng memo hoặc React.memo() trong các component hoặc hook riêng biệt để tránh render không cần thiết.

### Redux hoặc Zustand: Đối với project lớn, học về Redux (bao gồm Redux Toolkit) để quản lý state toàn cục một cách tối ưu và hiệu quả. Redux Thunk hoặc Redux Saga: Hỗ trợ xử lý các tác vụ bất đồng bộ khi sử dụng Redux.

- Redux hỗ trợ quản lý trạng thái toàn cục trong ứng dụng một cách chặt chẽ và dự đoán được. Nó giúp lưu trữ dữ liệu ở một nơi chung gọi là Store. Bất kỳ component nào cũng có thể truy cập vào dữ liệu này mà không cần phải truyền props qua nhiều cấp.

- Redux Toolkit là công cụ được cung cấp chính thức từ Redux, giúp đơn giản hóa các thiết lập của Redux truyền thống. Toolkit bao gồm:

configureStore - Để tạo store với các thiết lập mặc định.
createSlice - Để tạo reducer và action dễ dàng.
createAsyncThunk - Để xử lý các tác vụ bất đồng bộ.

* Cấu trúc Redux với Redux Toolkit
- Tạo Slice là nơi khai báo state, reducer, và các action liên quan đến một phần của state.
 
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

- Tạo Store
Dùng configureStore để tạo store và kết hợp các slice.

// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

- Cung cấp Store cho app : Sử dụng Provider từ react-redux để cung cấp store cho toàn bộ ứng dụng.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

- Sử dụng state và dispatch action
Trong các component, sử dụng useSelector để truy cập vào state và useDispatch để dispatch các action.
 
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;

5. Xử lý bất đồng bộ với createAsyncThunk giúp xử lý các tác vụ bất đồng bộ (như gọi API) và tự động quản lý ba trạng thái: pending, fulfilled, và rejected.

 
// features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    const response = await axios.get(`/api/user/${userId}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => { state.status = 'failed'; });
  },
});

export default userSlice.reducer;