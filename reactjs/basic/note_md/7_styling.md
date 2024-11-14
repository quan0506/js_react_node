### 7. CSS và Styling
* CSS Modules là một cách viết CSS riêng biệt cho từng comp trong React, giúp tránh xung đột về kiểu dáng. Khi use CSS Modules, các lớp CSS được tạo ra sẽ có tên duy nhất, nên không thể bị ghi đè bởi các CSS từ comp khác.

- B1 : Tạo một file .module.css (ví dụ: Button.module.css):
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

- B2 : Import vào file jsx 

import React from 'react';
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click me</button>;
  Với styles.button, tên lớp CSS trở thành duy nhất, không bị xung đột với các thành phần khác.
}

export default Button;

* Styled-Components là một thư viện trong React cho phép viết CSS trực tiếp trong JS. Với Styled-Components, bạn có thể tạo các component có kiểu dáng riêng mà không cần tạo file CSS riêng.

B1 : Cách sử dụng Styled-Components - Cài đặt thư viện:
npm install styled-components

B2 : Tạo styled component:

import React from 'react';
import styled from 'styled-components';

// Tạo một button styled component
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: darkblue;
  }
`;

Bằng cách use Styled-Components, có thể viết CSS ngay trong JS với syntax CSS quen thuộc và dễ quản lý.

function App() {
  return <Button>Click me</Button>;
}

export default App;


* TailwindCSS hoặc Bootstrap là các framework CSS giúp tăng tốc độ phát triển giao diện với các lớp CSS có sẵn.

- B1 : Sử dụng TailwindCSS - Cài đặt TailwindCSS:
npm install -D tailwindcss
npx tailwindcss init

- B2 : Thêm cấu hình trong file tailwind.config.js và import Tailwind vào file CSS chính:

/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

- B3 : Sử dụng các lớp Tailwind trong component:

// App.js
import React from 'react';

function App() {
  return <button className="bg-blue-500 text-white py-2 px-4 rounded">Click me</button>;
}

export default App;

- B1 : Sử dụng Bootstrap = Cài đặt Bootstrap: 
npm install bootstrap

- B2 : Import Bootstrap vào project của bạn (thường là trong index.js hoặc App.js):
Sử dụng các lớp Bootstrap trong component:

// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <button className="btn btn-primary">Click me</button>;
}

export default App;


* Framer Motion hoặc React Spring là hai thư viện phổ biến để tạo hiệu ứng chuyển động cho giao diện.

- Sử dụng Framer Motion là thư viện mạnh mẽ và dễ sử dụng để tạo animation cho các component trong React.

B1 : Cài đặt Framer Motion - npm install framer-motion

B2 : Sử dụng Framer Motion để tạo animation:
import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, world!</h1>
    </motion.div>
    motion.div có thể được sử dụng như một div bình thường, nhưng cho phép thêm các thuộc tính animation như initial, animate, và transition.
  );
}

export default App;

- Sử dụng React Spring giúp tạo các hiệu ứng chuyển động mượt mà với API linh hoạt.

B1 : Cài đặt React Spring:
npm install @react-spring/web

B2 : Tạo animation với React Spring:

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  React Spring cung cấp hook useSpring để định nghĩa animation và trả về properties animation cho một element, giúp bạn tạo các hiệu ứng động trên comp.

  return <animated.div style={styles}><h1>Hello, world!</h1></animated.div>;
}

export default App;








