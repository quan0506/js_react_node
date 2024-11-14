### JSX là gì
JSX là open syntax của JS cho phép viết code giống HTML trong react nhưng, thuận tiện để build UI vì có thể mô tả giao diện sẽ trông như thế nào trong JS

React có thể hoạt động mà ko cần tới cú pháp JSX, vì đã có sẵn 1 func giúp tạo ra phần view

function App() {
  return (
    <div className="app">
      <h1>Hello, World!</h1> => in ra hello world
    </div>
  );
}

import React from "react";

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement("h1", {}, "Hello, World!")
    => cũng in ra hello world nhưng phức tạp hơn
  );
}

tuy 2 ví dụ cho result giống nhau, cách viết thứ 2 khó hơn và khó bảo trì vì vậy nên dùng JSX trong các dự án reactjs

Reactjs khác HTML ở các điểm sau :
- Single parent root: Các comp trong React cần phải return 1 thẻ bao ngoài duy nhất trong 1 array, ko thể trả nhiều hơn 2 thẻ return
- className thay vì class 
- style nhận 1 giá trị là object thay vì syntax CSS thông thường
- Các thuộc tính HTML đc đổi tên theo kiểu camelCase
- Đối với các đoạn JSX nằm trên nhiều dòng, JSX cần phải đc bọc bên trong ngoặc tròn ()
- comp do chúng ta viết buộc phải đc dử dụng ở dạng viết hoa

Render giá trị JS với JSX 
JSX cho phép chúng ta có thể output các value JS trực tiếp vào bên trong dấu {} :

const App = () => {
  const randomAge = Math.floor(Math.random() * 10);
  const imgSrc =
    "https://example/image";

  return (
    <div>
      Hello, my name is MindX. I'm {randomAge} years old.
      <img src={imgSrc} />
    </div>
  );
};

JSX với styling gồm 2 kiều style với file css bên ngoài , sử dụng HTML class và id hoặc là Inline Style

 cách 1 import file.css vào trong jsx 

cách 2 đối với kiểu inline style :
- style trong JSX nhận 1 giá trị object (key-value)
- các key CSS đc viết dưới dạng camelCase
- các value CSS có cấu trúc string hoặc number

const App = () => {
  return (
    <div style={{ backgroundColor: "yellow", fontSize: 18 }}>Hello, World!</div>
  );
};

- Với các value nhận giá trị CSS là số, đơn vị cần đc sử dụng là px, nếu muốn dùng đv khác thì cần chuyển thành string và thêm đơn vị sau giá trị đó

- Các quy tắc JSX 
- trả về 1 phần tử gốc duy nhất, để trả về nhiều phần tử trong 1 thành phần, cần bọc chúng trong 1 thẻ cha duy nhất, có thể là thẻ div hoặc dùng cum <> </> thay thế (còn đc gọi là fragment)

- đóng tất cả các thẻ : các thẻ tự đóng như <img> thành <img /> và các thẻ bọc đc viết đầy đủ ví dụ như <li>text</li>

### Render element trong React
- Muốn truyền properties vào trong JSX thì đặt trong dấu ngoặc kép hoặc ngoặc đơn, nếu ko có thể sử dụng value từ JS bằng cách dùng {}

import React from "react";

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

- Sử dụng hàm để truyền vào JSX: bất kỳ biểu thức JS nào cũng sẽ hoạt động trong dấu ngoặc nhon, bao gồm cả việc gọi hàm
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return <h1>List job Cho Ngày {formatDate(today)}</h1>;
}

- Sử dụng CSS để truyền vào JSX: CSS nội tuyến hay Inline style (ko bắt buộc, hạn chế dùng và nên dùng import file css)
- Nếu cần kiểu nội tuyến thì truyền 1 object cho properties style

import React from "react";

export default function TodoList() {
  return (
    <ul
      style={{
        backgroundColor: "black", 
        color: "pink",
      }}
    >
      <li> Cải thiện videophone</li>
      <li> Chuẩn bị bài giảng về aeronautics</li>
      <li> Làm việc trên động cơ chạy bằng cồn</li>
    </ul>
  );
}

# => Tổng kết : Các properties JSX trong {} đc truyền dưới dạng chuỗi, các {} cho phép đưa logic hoặc variableJS trong markup . Chúng hoạt động bên trong nội dung thẻ JSX hoặc ngay sau dấu = trong properties. {{ }} ko phải là cú pháp đặc biệt mà chỉ là 1 object JS trong dấu {} JSX

### Components trong Reactjs 
- comp là những thành phần giao diện (UI - User Interface) đc định nghĩa độc lập, có thể tái sử dụng và tách biệt với nhau 
=> Có thể hiểu comp là 1 func tronng JS, nhận bất kì input nào (props) và trả về các React elements thể hiện những gì đc hiển thị trên chrome

- Các bước tạo comp trong React
export default function Profile() {
  return <img src="https://example.image.jpg" alt="Katherine Johnson" />;
}

B1 : xuất comp : tiền tố export defaul cho phép đánh dấu hàm chính trong 1 tệp để sau đó bạn có thể nhập nó từ các tệp khác
B2 : định nghĩa func : định nghĩa 1 hàm JS vs tên Profile
B3 : thêm mã markup 

return (
  <div>
    <img src="https://example.img.jpg" alt="Katherine Johnson" />
  </div>
);

- Cách sử dụng comp trong react
Có thể lồng vào các comp khác nhau 

function Profile() {
  return <img src="https://example.img.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section> => tag html đc đề cập
      <h1>Các nhà khoa học tuyệt vời</h1>
      <Profile /> // bắt đầu bằng chữ viết hoa, sử dụng comp ở trong có thẻ img
    </section> 
  );
}
- Lồng và tổ chức các comp : có thể chứa nhiều comp trong cùng 1 file và ko nên lồng định nghĩa 1 comp trong 1 comp khác => nên định nghĩa mọi comp ở mức độ cao nhất

- có 2 loại comp chính là Functional Component là Các hàm Js đơn giản trả về JSX và nên dùng nhờ cú pháp đơn giản và hỗ trợ hooks

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Greeting

và Class Components là các lớp JS mở rộng từ React.Component

### Prop và cách truyền prop vào component trong React
- Prop là parameter value của các comp trong React và là khái niệm cực kì quan trọng
=> Đơn giản hơn , props trong React chính là properties trong HTML. khác biệt ở chỗ có thể tự định nghĩa thay vì đc định nghĩa sẵn trong html

const App = () => {
  const x = 1;
  const y = 2;
  return (
    <div>
      <Sum a={x} b={y} />
    </div>
  )
}
const Sum = (props) => {
  console.log(props) // {a: 1, b: 2}
  return <div>The value is: {props.a + props.b}</div>
}

- Props là phương tiện lưu chuyển dữ liệu bên trong React, có thể nhận value thuộc all data type trong JS
- Do tự định nghĩa nên ko hiểu đc các thuộc tính HTMl nên cần phải gán lại cho tag HTMl ứng bên trong comp
- Props là read-only hay ko thể thay đổi value props bên trong 1 component

const App = () => {
  return (
    <div>
      <NameCard className="name-card" id="alice" />
    </div>
  )
}

const NameCard = (props) => {
  return (
    <div className={props.className}>
      <div id={props.id}>Name: Alice</div>
    </div>
  )
}

- Truyền props vào 1 component trong React
B1 : truyền props từ comp cha vào comp con

export default function Profile() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}

B2 : Đọc props bên trong comp con bằng cách liệt kê tên của chúng

function Avatar({ person, size }) {
}

function ChildComponent(props) {
  return <p>Message: {props.message}</p>;
}

function ParentComponent() {
  return <ChildComponent message="Hello from Parent!" />;
}

### Rendering có điều kiện trong React
- Trong React, có thể điều khiển logic điều kiện bằng JS
- Có thể trả về biểu thức JSX dựa trên 1 đk bằng lệnh ìf
- Có thể gán 1 phần JSX vào biến và sau đó bao gồm nó trong JSX khác bằng cách sử dụng {}
- Trong JSX, {condition ? <A /> : <B />} có nghĩa là nếu condition, hiển thị <A /> , nếu ko thì hiển thị <B />
- {condition && <A />} có nghĩa là nếu condition hiển thị <A /> ngược lại thì không hiển thị gì

### Rendering list trong React
- Hiển thị dữ liệu từ mảng 
B1 : đưa dữ liệu vào 1 array

const people = [
  "Creola Katherine Johnson: nhà toán học",
  "Mario José Molina-Pasquel Henríquez: nhà hóa học",
  "Mohammad Abdus Salam: nhà vật lý",
  "Percy Lavon Julian: nhà hóa học",
  "Subrahmanyan Chandrasekhar: nhà thiên văn học",
];

B2: Sử dụng map() để tạo ra các mảng mới của các phần từ trong JSX ví dụ như listItems : 

const listItems = people.map((person) => <li>{person}</li>);

B3: Trả về listItems từ thành phần React trong 1 thẻ <ul>

return <ul>{listItems}</ul>;

kết quả
<ul>
  <li>Creola Katherine Johnson: nhà toán học</li>
  <li>Mario José Molina-Pasquel Henríquez: nhà hóa học</li>
  <li>Mohammad Abdus Salam: nhà vật lý</li>
  <li>Percy Lavon Julian: nhà hóa học</li>
  <li>Subrahmanyan Chandrasekhar: nhà thiên văn học</li>
</ul>

## Lọc các thành phần từ mảng
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "nhà toán học",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "nhà hóa học",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "nhà vật lý",
  }
];

B1: tạo 1 array bằng cách gọi filter() trên people vs đk person.professtion === 'nha hóa học'

B2: Sử dụng map() để tạo ra 1 mảng mới của các thành phần từ jSX 
const listItems = chemists.map((person) => (
  <li>
    <p>
      <b>{person.name}:</b> {person.profession}
    </p>
  </li>
));

B3 : trả về listItems từ thành phần React 
return <ul>{listItems}</ul>

## Key trong react
- key là value props đặc biệt trong React, đc sử dụng làm định danh cho các phần tử trong 1 mảng các phần tử comp
- key cho phép react dễ dàng nhận biết đc phần tử nào bị thay đổi, đc thêm hay xóa điều
- Nếu ko xác định key hoặc sử dụng 1 khóa key không duy nhất, React có thể gặp khó khăn trong việc xác định sự thay đổi và cập nhật DateTimeFormat
- Tạo khóa key dựa trên chỉ số của mảng thường dẫn đến các lỗi khó xác định và khó hiểu

### Pure component 
- ko thay đổi bất kì object hoặc variable nào tồn tại trước khi nó đc gọi
- cùng đầu vào thì luôn trả về 1 result
- Sử dụng Pure component trong react

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

Khi truyền drinkers={2} nó sẽ luôn trả về jSX chứa 2 cốc nước
Khi truyền drinkers={4} nó sẽ luôn trả về JSX chứa 4 cốc nước

- Cách sử dụng pure component không đúng cách
- Các component chỉ nên trả vè JSX của nó, ko làm thay đổi bất kì object hoặc variable nào tồn tại trước quá trình Render

let guest = 0; // biến ở ngoài hàm

function Cup() {
  guest = guest + 1; // thay đổi biến đã tồn tại
  return <h2>Tea cup for guest #{guest}</h2>;
}

