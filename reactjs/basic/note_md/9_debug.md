### 9. Kiến thức về DevTools và Debugging

Console và Debugger: Sử dụng console.log() và debugger để tìm lỗi trong mã.
Redux DevTools: Xem và kiểm soát trạng thái khi sử dụng Redux.

* 1. React Developer Tools là một tiện ích mở rộng giúp bạn kiểm tra, phân tích, và tối ưu hóa các component trong ứng dụng React. Bạn có thể xem cấu trúc của từng component, các props, state, và hiểu cách mà các component tương tác với nhau.

- Sử dụng: Sau khi cài đặt, mở code React và nhấn F12 (hoặc Inspect). Ở tab mới "Comp," bạn sẽ thấy cấu trúc của các component React. Các chức năng chính:

- Xem cấu trúc comp: Cấu trúc comp được hiển thị dưới dạng cây. Bạn có thể nhấp vào từng component để xem chi tiết.
- Check Props và State: Mỗi comp sẽ hiển thị các props và state hiện tại, giúp dễ dàng monitor data
- Highlight Updates: React DevTools có thể highlight các comp mỗi khi chúng được update, giúp phát hiện các lần render không cần thiết.
- Profiler: Đo thời gian render của từng component để tối ưu hóa hiệu suất.

* 2. Console và Debugger là hai công cụ chính để kiểm tra và sửa lỗi trong mã JavaScript, và rất hữu ích khi phát triển ứng dụng React.

- console.log() giúp hiển thị thông tin hoặc giá trị biến trong Console của trình duyệt. giúp xác định state của các biến tại một thời điểm nhất định trong mã.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    console.log("Previous count:", count); // In ra giá trị hiện tại
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      Khi nhấn nút Increment, console.log() sẽ in ra giá trị trước đó của count giúp bạn dễ dàng theo dõi trạng thái của state.
    </div>
  );
}

export default Counter;

- Debugger giúp tạm dừng mã tại một điểm nhất định để kiểm tra biến và trạng thái hiện tại của mã. Khi gặp debugger, mã sẽ tạm dừng và có thể check từng dòng bằng cách sử dụng trình duyệt.

function handleIncrement() {
  debugger; // Tạm dừng mã tại đây
  setCount(count + 1);
}

Khi mã chạy tới debugger, nó sẽ dừng lại ở điểm này trong Console. Bạn có thể xem các giá trị biến và kiểm tra các thay đổi từng dòng mã.

* 3. Redux DevTools là tool hỗ trợ trong việc kiểm tra, giám sát và điều chỉnh các state khi sử dụng Redux. Nó giúp monitor actions, state trước và sau khi mỗi action được thực hiện.

- Tích hợp Redux DevTools vào Redux store:

import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

- Sử dụng Redux DevTools mở DevTools và vào tab Redux. có thể thấy các action đã được gọi và các thay đổi trong state sau mỗi action.

1. Tạo một reducer và action đơn giản:

// counterReducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;

2. Tạo store và kết nối với Redux DevTools:

import { createStore } from 'redux';
import counterReducer from './counterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(counterReducer, composeWithDevTools());

export default store;

3. Dispatch các action và quan sát trên Redux DevTools:

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;

Trong Redux DevTools, bạn sẽ thấy các hành động INCREMENT và DECREMENT khi nhấn nút, cùng với trạng thái count trước và sau mỗi hành động.