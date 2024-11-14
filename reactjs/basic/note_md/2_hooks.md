### sự kiện (event) là một phần quan trọng, giúp app trở nên tương tác hơn bằng cách cho phép user kích hoạt các action khi tương tác với giao diện. React hỗ trợ event tương tự như HTML, nhưng với các cú pháp và cách sử dụng khác nhau.

* 1. Syntax event trong React, các event thường được viết bằng camelCase (ví dụ: onClick, onChange), khác với HTML là v

Thay vì truyền một chuỗi cho properties event như HTML, truyền func  Js cho thuộc tính sự kiện trong React.
Ví dụ:
 
<button onClick={handleClick}>Click me</button>

* 2. Cách xử lý sự kiện trong React: cần tạo một hàm và gắn nó vào thuộc tính sự kiện trong JSX. Khi sự kiện xảy ra, hàm sẽ được gọi.

function App() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default App;

* 3. event phổ biến trong React và chi tiết
- onClick: Xảy ra khi người dùng nhấp chuột vào một phần tử.

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  khi nhấn vào button click me thì log ra button clicked
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default App;

- onChange: Xảy ra khi nội dung của một input thay đổi.
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  Sử dụng cho các input (như input, textarea, select) để nhận biết khi người dùng nhập hoặc thay đổi giá trị.

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Input value: {value}</p>
    </div>
  );
}

export default App;

- onSubmit: Use cho form để xử lý khi được gửi. đi kèm với prevent (ngăn chặn) default action của form bằng event.preventDefault().
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

- onKeyDown: Xảy ra khi use xử lý thao tác nhấn phím bất kỳ.

function App() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert("Enter key pressed!");
    }
  };

  return <input type="text" onKeyDown={handleKeyDown} />;
}

export default App;

- onMouseEnter: Xảy ra khi con trỏ chuột di chuyển vào một phần tử, dùng cho các effect khi hover chuột.

function App() {
  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      Hover over this text
    </div>
  );
}

export default App;

- onFocus: Xảy ra khi phần tử nhận được focus (thường dùng cho input) và onBlur: kích hoạt khi phần tử mất focus.
 
function App() {
  const handleFocus = () => {
    console.log("Input focused!");
  };

  const handleBlur = () => {
    console.log("Input blurred!");
  };

  return (
    <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
  );
}

export default App;

* 4. Truyền parameter cho hàm xử lý event dùng arrow function (() =>) trong React.

function App() {
  const showAlert = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => showAlert("Hello, this is an alert!")}>
      Click me
    </button>
  );
}

export default App;

### Hooks trong ReactJS là các hàm đặc biệt giúp bạn sử dụng các tính năng của React (như state và lifecycle methods) trong các function components mà không cần dùng đến class components. 

### State là một khái niệm quan trọng dùng để lưu trữ và quản lý dữ liệu thay đổi trong một component. Khi state của một component thay đổi, React will auto uodate lại interface, tạo ra trải nghiệm tương tác mượt mà cho user.

- State thường được dùng để lưu trữ các dữ liệu mà ứng dụng của bạn có thể thay đổi hoặc cập nhật, như trạng thái đăng nhập, danh sách sản phẩm trong giỏ hàng, thông tin người dùng nhập vào...

* 1. Khởi tạo State trong React
Trong các Functional Component, bạn sử dụng useState - một hook được cung cấp bởi React để khai báo và sử dụng state.
 
const [state, setState] = useState(initialValue);
state: Biến chứa giá trị của state.
setState: Hàm dùng để cập nhật giá trị mới cho state.
initialValue: Giá trị ban đầu của state.
 
import React, { useState } from 'react';

function Counter() { count is the value of state
  const [count, setCount] = useState(0); 
  setCount is the function to update count.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
Khi nhấn vào nút, setCount(count + 1) sẽ tăng giá trị của count lên 1 và React sẽ tự động cập nhật lại giao diện để hiển thị giá trị mới.
    </div>
  );
}

export default Counter;

* 2. Quản lý State với useState Hook
useState có thể chứa mọi data type như số, chuỗi, array hoặc object. Khi state change, React sẽ re-render() (render lại) comp đó.

import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  => todos là một array chứa list task

  const addTodo = () => {
    setTodos([...todos, "New Task"]);
  };
  => Hàm addTodo dùng setTodos([...todos, "New Task"]) add new task to array todos.

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;

### useEffect: Quản lý Tác vụ phụ và Vòng đời cho phép thực hiện các tác vụ phụ (side-effects) trong Functional Comp, 
chẳng hạn như lấy dữ liệu, đăng ký sự kiện, hoặc tương tác với DOM. useEffect có thể thay thế cho các method life cycle như componentDidMount, componentDidUpdate, và componentWillUnmount trong Class Comp.

Cách sử dụng cơ bản
 
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component đã được render hoặc count đã thay đổi");
  }, [count]); // Mảng phụ thuộc [count]

  return (
    <div>
      <p>Số lần click: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>
    </div>
  );
}

=> Không có mảng phụ thuộc: useEffect sẽ chạy sau mỗi lần render.
 
useEffect(() => {
  console.log("Render lần nào cũng chạy");
});

=> Mảng phụ thuộc trống: useEffect sẽ chỉ chạy một lần khi component mount.
 
useEffect(() => {
  console.log("Chỉ chạy một lần khi component mount");
}, []);

=> Dọn dẹp: Để dọn dẹp tác vụ (như xóa sự kiện hoặc dọn dẹp tài nguyên), trả về một hàm trong useEffect.
 
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Đang chạy...");
  }, 1000);

  return () => clearInterval(timer); // Dọn dẹp khi component unmount
}, []);

###  useContext: Truyền Dữ liệu Toàn cục cho phép sử dụng dữ liệu từ một Context mà không cần truyền props xuống từng cấp con. 
- Context rất hữu ích cho các giá trị toàn cục như ngôn ngữ, theme, hoặc dữ liệu người dùng.
- useContext sẽ lấy giá trị từ UserContext và giúp component ChildComponent nhận dữ liệu mà không cần truyền props.

import React, { createContext, useContext } from 'react';

// Tạo Context
const UserContext = createContext();

function ParentComponent() {
  const user = { name: 'John Doe', age: 25 };

  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  );
}

function ChildComponent() {
  const user = useContext(UserContext);

  return <p>Tên người dùng: {user.name}</p>;
}

### useRef: Tham chiếu Trực tiếp tới DOM và Lưu trữ Biến Không Cần Re-render
useRef tạo ra một tham chiếu không mất đi khi component render lại. useRef thường được sử dụng để truy cập trực tiếp đến phần tử DOM hoặc lưu trữ một giá trị không cần trigger render.

Ví dụ 1: Truy cập DOM
 
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Truy cập vào input và gọi focus
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
      <button onClick={focusInput}>Focus vào input</button>
    </div>
  );
}
Ví dụ 2: Lưu giá trị không cần re-render
 
import React, { useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = () => {
    countRef.current += 1;
    console.log("Giá trị lưu trong ref:", countRef.current); // Không trigger render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>
      <button onClick={increment}>Tăng countRef</button>
    </div>
  );
}

### useReducer: Quản lý State Phức tạp là hook dùng để quản lý state phức tạp khi có nhiều trạng thái hoặc cập nhật phức tạp. 
useReducer nhận vào một reducer và một state ban đầu, thường được sử dụng thay thế cho useState trong các trường hợp phức tạp.
 
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  reducer nhận vào state hiện tại và action để trả về state mới.
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  dispatch được sử dụng để gửi action để cập nhật state.
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
    </div>
  );
}


### Custom Hooks là các hàm giúp tái sử dụng logic giữa các comp trong app. 
Một custom hook chỉ đơn giản là một hàm  Js sử dụng các hook khác (như useState, useEffect, …) để tạo logic có thể tái sử dụng.

Ví dụ: Custom Hook useFetch
 
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Sử dụng trong component
function DataComponent() {
  const { data, loading } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}
Tạo Custom Hook cho Form Input
 
import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
}

function FormComponent() {
  const name = useInput('');
  const email = useInput('');

  return (
    <div>
      <input type="text" placeholder="Name" {...name} />
      <input type="email" placeholder="Email" {...email} />
      <p>Name: {name.value}</p>
      <p>Email: {email.value}</p>
    </div>
  );
}

### 3. Cập nhật State đúng cách

Khi state của comp là array or object, không nên change trực tiếp mà nên tạo ra một bản sao của dữ liệu hiện tại rồi update lên đó, giúp tránh các lỗi không mong muốn và tuân thủ tính bất biến (immutability) trong React.

import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });
  user là object với hai Properties: name và age.

  const updateAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };
  Hàm updateAge sử dụng setUser để tạo ra một bản sao của user với age add 1.

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}

export default UserProfile;

* 4. State và Render lại Comp: khi state thay đổi, React sẽ render lại (re-render) comp để hiển thị các thay đổi mới nhất lên giao diện. giúp bạn không phải quản lý quá nhiều công việc cập nhật giao diện thủ công.

* 5. State trong Class Component, state được khai báo khác so với Functional Component và useState.
 
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    => this.state chứa các giá trị của state.
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    => this.setState() là func update state trong Class Comp
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;

* 6. Sử dụng State trong các trường hợp khác nhau
import React, { useState } from 'react'; => Ví dụ: Form với State

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  => setName và setEmail được dùng để update value name và email khi user nhập vào form.

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default SignUpForm;
 
import React, { useState } from 'react'; => Button vs state

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  isOn là state ban đầu của nút (có giá trị false).

  const toggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  func toggle sẽ đảo ngược state của isOn khi nhấn nút, giúp user có thể tạo các nút bật/tắt đơn giản.

  return (
    <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default ToggleButton;

* 7. Các lưu ý quan trọng khi làm việc với State
- Bất biến (Immutability): Không nên thay đổi trực tiếp state (như dùng state.push()), mà nên tạo một bản sao mới rồi cập nhật lại.
- Asynchronous State Updates: Cập nhật state không phải lúc nào cũng diễn ra ngay lập tức mà có thể bất đồng bộ. Để xử lý trường hợp này, sử dụng hàm callback trong setState.
- Tối ưu hóa render: Không nên cập nhật state quá thường xuyên vì sẽ làm component render lại nhiều lần, dẫn đến giảm hiệu suất ứng dụng.

### Cơ chế render trong Reactjs
* 1. K/n Render trong React là quá trình React update lại ui user interface theo change của data (state, props) trong các comp.
Mỗi khi state hoặc props của comp thay đổi, React sẽ tự động tính toán lại giao diện để phản ánh những thay đổi đó.

* 2. Cơ chế Render và Re-render
- Render lần đầu: Mỗi component sẽ được render ít nhất một lần khi app được tải lên.
- Re-render: Khi state hoặc props của một comp change, React sẽ thực hiện re-render để update lại giao diện.
React có thể thực hiện lại render theo hai kiểu:
- Render từ trên xuống (Top-down): Khi một comp cha re-render, các comp con cũng sẽ re-render.
- Render dựa trên sự thay đổi cụ thể: Nếu state hoặc props của comp không thay đổi, React sẽ không cần render lại.

* 3. Virtual DOM và Render trong React
- Virtual DOM (DOM ảo) là một bản sao nhẹ của DOM thật, được React use để theo dõi (monitor) change của ui.
- Khi có thay đổi (state hoặc props change), React update Virtual DOM trước.
- So sánh (diffing): React so sánh Virtual DOM với phiên bản trước đó để tìm sự khác biệt.
- Update DOM thật: Chỉ những phần khác biệt sẽ được cập nhật trên DOM thật, giúp tối ưu hiệu suất và tránh việc update ui

* 4. Quá trình Render của React
Quá trình render của React có thể được chia thành các bước chính như sau:
- Khởi tạo comp: Comp được tạo ra và React run func render để xây dựng giao diện ban đầu.
- Xử lý và cập nhật state/props: Khi có sự thay đổi từ state hoặc props, React sẽ tính toán lại để xem phần nào cần cập nhật.
- So sánh với Virtual DOM: React so sánh Virtual DOM hiện tại và Virtual DOM trước đó (còn gọi là diffing).
- Cập nhật DOM thật: React chỉ cập nhật DOM thật với những phần thay đổi, giúp tiết kiệm hiệu suất.

* 5. Kiểm soát Render trong React có thể kiểm soát việc render để tối ưu hóa hiệu suất bằng các kỹ thuật sau:

a) Sử dụng React.memo là một Higher Order Component (HOC) giúp ghi nhớ kết quả render của Functional Comp. Nếu props của comp ko change, React.memo sẽ tránh render lại comp đó. 

import React, { memo } from 'react';

const ChildComponent = memo((props) => {
  console.log("Child component rendered");
  return <div>{props.data}</div>;
  => ChildComponent sẽ chỉ render lại khi props.data thay đổi.
});

export default ChildComponent;

b) Sử dụng shouldComponentUpdate trong Class Component
- shouldComponentUpdate là một method vòng đời ((life cycle)) giúp kiểm soát xem comp có cần render lại khi state hoặc props thay đổi không.có thể trả về true để render lại hoặc false để ngăn comp render.

import React, { Component } from 'react';

class ChildComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    return <div>{this.props.data}</div>;
  }
}

export default ChildComponent;

c) Sử dụng useCallback và useMemo để tối ưu hóa trong Functional Component
- useCallback: Dùng để ghi nhớ (memoize) một hàm, giúp tránh việc tạo lại hàm không cần thiết khi comp re-render.

import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <button onClick={handleClick}>Click me</button>;
}

export default ParentComponent;

- useMemo: Dùng để ghi nhớ (memoize) một giá trị phức tạp, giúp tránh tính toán lại khi không cần thiết.
 
import React, { useState, useMemo } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => {
    return count * 2; // Giả sử tính toán phức tạp
  }, [count]);

  return <div>{computedValue}</div>;
}

export default ParentComponent;

* 6. Key trong Render List: Khi render list, React yêu cầu một key duy nhất cho mỗi item trong list để monitor các item hiệu quả hơn khi có sự thay đổi, React xác định phần tử nào được thêm, cập nhật hoặc xóa, giảm số lượng re-render không cần thiết.  
 
const items = ["Item1", "Item2", "Item3"];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

* 7. Vòng đời của Component và Render
Vòng đời của comp ảnh hưởng đến cách React xử lý render và re-render. Đối với Class Comp, có một số method life cycle liên quan đến render như:

- componentDidMount: Gọi sau khi comp render lần đầu. Phù hợp cho việc lấy dữ liệu (fetch data).
- componentDidUpdate: Gọi sau khi comp re-render.
- componentWillUnmount: Gọi trước khi compo bị xóa khỏi ui. Thường dùng để dọn dẹp tài nguyên, hủy các kết nối…
Đối với Functional Comp, sử dụng useEffect để quản lý các tác vụ tương đương
 
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((response) => setData(response));

    return () => {
      // cleanup code here
    };
  }, []);

  return <div>{data}</div>;
}

* 8. Lưu ý và Tối ưu hóa
- Không update state/props không cần thiết: Tránh update state/props khi không cần để giảm số lượng render.
- Use các hook tối ưu hóa như useCallback và useMemo cho các tính toán phức tạp hoặc hàm không cần tái tạo mỗi lần render.
- Lazy loading (Tải chậm) cho các comp không cần thiết phải render ngay lập tức khi tải trang.


















