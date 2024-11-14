// 2. Kiến thức nâng cao về Js
// ES6+ Syntax: Hiểu về các tính năng mới của ES6 và các phiên bản sau như:
// *** Destructuring assignment: Phân rã object/array là tính năng (cú pháp) cho phép lấy values từ object/array và gán chúng vào các biến mới.
// Việc lấy ra dữ liệu này chỉ copy mà không làm thay đổi cấu trúc object hay array

// Destructuring với Array: Giúp bạn lấy giá trị từ mảng theo thứ tự và gán vào các biến.
const numbers = [1, 2, 3]; // khai báo và gán luôn giá trị 
const [first1, second, third] = numbers;
console.log(first1);  
console.log(second); 

// có thể tách việc khai báo và gán giá trị như sau :
let firstName1, lastName1;
[firstName1, lastName1] = ["David", "Walsh"];
console.log(firstName1, lastName1)

// gán value theo thứ tự index từ trái qua phải ==>
let arri3 = ["David", "Walsh"];
let firstName2, lastName2;

firstName2 = arri3[0];
lastName2 = arri3[1]

console.log(firstName2, lastName2)
// Nếu như số phần tử ở phía trái > vế phải thì thành phần thừa ra có giá trị undefined

// ** Khai báo giá trị default cho giá trị mặc định, sử dụng toán tử gán =
let [firstName, lastName="Anonymous"] =["David"]; // lastName = default value = Anonymous
console.log(firstName, lastName)

// ** Bỏ qua 1 số phần tử trong mảng : có thể chứa nhiều phần tử và chỉ muốn lấy ra một vài giá trị trong đó thì có thể sử dụng toán tử dấu phẩy
// các phần tử còn lại ở vế phải được bỏ qua
let [title,,, color2] = ["window", 3,4, "#fff"];

// ** Gán các giá trị còn lại của mảng cho 1 biến khác
// lấy ra 1 phần tử và các phần tử còn lại được gán cho biến còn lại bằng cú pháp  spread ...
let [titles, ...others2] = ["window", 300, 400, "#000"];
/*
 * title = "window"
 * others = [300, 400, "#000"]
 */

// Destructuring với Object: Giúp bạn lấy các thuộc tính từ object và gán chúng vào các biến có cùng tên thuộc tính.
const persona = { name: 'John', age: 30 };
const { namea, agea } = person;
console.log(namea); 
console.log(agea);   // 30
// Phân rã với giá trị mặc định: gán default value nếu không có value được cung cấp.

// Khai báo cho default value, sử dụng toán tử gán = 
let {firstNamea, lastNamea = "Anonymous"} = {firstName:'Daivd'};
console.log(firstName, lastName)
/*
 * firstName = David
 * lastName = Anonymous vì vế phải không có lastName
 */

// Gán tên mới cho biến khi attribute muốn thực hiện destructuring assignment ở object quá dài hoặc trùng với biến
let {firstName:fn, lastName : ln} ={ // đặt tên mới cho biến
  firstName:"Leo", // lấy value của firstName rồi gán value đó cho biến fn
  lastName:"Messi" // lấy value của lastName rồi gán value đó cho biến ln
}
console.log(fn,ln)

// Gán các value còn lại của Object cho 1 biến khác tương tự như với mảng

// Destructuring với Object và Array lồng nhau
let options = {
  size:{
    width:100,
    height:200,
  },
  items:["Cake","Donut"],
  extra: true, // trường này không destruct
}

let {
  size : {width, height},
  items : [items1, item2],
  title1 = "Menu",
} = options

console.log(options)

// *** Template Literals (TL): Xâu chuỗi với dấu ` (hay Template Strings) cho phép bạn tạo các chuỗi linh hoạt với cú pháp thuận tiện hơn, 
// giúp chèn biến và biểu thức trực tiếp vào chuỗi mà không cần phải sử dụng phép nối chuỗi +

// TL được đặt giữa dấu ``  khác với "" và '' bên trong TL có thể sử dụng cú pháp ${expression} để chèn value hoặc biểu thức JS
const name1 = "dbbb";
const age1 = 25;

// Template literal
const gressting =  `hello, i am ${name1} and ${age1} years old`;
console.log(gressting)

// Tính năng (feature) của Template Literals
// 1. Interpolating (Chèn biến và biểu thức vào chuối)
const x11 =10;
const  y = 20;

const sumx11y = `${x11} + ${y} = ${x11+y}`;
console.log(sumx11y)
 
// 2.Multi-line strings (Cho phép tạo chuối nhiều dòng mà không cần kí tự đặc biệt)
const multiLineString = `This is
a string
that spans
multiple lines.`;
console.log(multiLineString);

// 3. Expression interpolation (Chèn biểu thức tính toán hoặc gọi hàm trực tiếp)
const x1 = 5;
const x2 = 7;

console.log(`result is : ${x1 * x2}`)

// 4. Tagged Templates : Cho phép xử lí TL với 1 hàm tag sử dụng như khi dịch chuỗi, xử lý an ninh cho SQL hay HTML
function tag(strings, ...values) {
  console.log(strings);  // ["Hello ", " world ", ""]
  console.log(values);   // ["beautiful", "!"]
}

tag `Hello ${'beautiful'} world ${'!'}`;

// Ưu điểm của Template Literals
// -- Dễ đọc, ngắn gọn hơn so với việc phải nối chuỗi với dấu +
// -- Thay đổi value trong TL dễ dàng và trực quan hơn khi update logic
// -- Hỗ trợ tạo nhiều dòng mà ko phải dùng kí tự \n
 

// *** Default Parameters: feature cho phép gán default value cho các parameter của hàm trong 
// case không có value nào được truyền vào khi hàm được gọi và lúc này default value được sử dụng
// giúp giảm thiểu các lỗi và giúp mã trở nên dễ đọc hơn

// syntax của default parameters : assign default value cho parameter khi định nghĩa hàm
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());        // (do không truyền tham số )
console.log(greet('John')); // nếu ko truyền tham số name trong hàm greet , default value "Guest" will be used

// thứ tự tham số: Parameters có default value thường được đặt ở cuối list parameters, nếu ko có thể dẫn đến lỗi ko truyển đủ giá trị
function sum(a, b=10){
  return a+b;
}

console.log(sum(5)) // đã có giá trị của 1 tham số thì chỉ cần truyền thêm giá trị của tham số còn lại

// Biểu thức phực tạp làm default value, default value có thể là result của các biểu thức phức tạp gồm phép toán hay gọi hàm
function randomNumber() {
  return Math.random() * 10;
}

function generateNumber(number = randomNumber()) {
  console.log(number);
}

generateNumber();  // In ra một số ngẫu nhiên

// Với các hàm không có default parameters. Trước khi có default parameter, cần dùng logic thủ công để check và assign default value
function greet(name) {
  name = name || "Guest";  // Nếu name là falsy, gán giá trị "Guest"
  console.log(`Hello, ${name}!`);
}

greet();
greet("haaland");

// Kết hợp với ES6 Destructuring
// Có thể kết hợp default parameter với destructuring để cung cấp giá trị mặc định cho các thuộc tính ko đc truyền vào
function displayUser({name= "Acc", age=19} ={}){
  console.log(`Name:${name} , Age:${age}`);
}

displayUser();
displayUser({name:"lili"});
displayUser({name:"lili", age:25});

// Áp dụng trong Reactjs: có thể dùng default parameters để provide default value cho các hàm xử lý event hoặc component
// Thường được sử dụng khi không chắc chắn value nào được truyền vào
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
      <div>
          <Greeting />           {/* Sử dụng giá trị mặc định là "Guest" */}
          <Greeting name="John" /> {/* Sử dụng giá trị "John" */}
      </div>
  );
}

// Lợi ích, ưu điểm của Default Parameters
// 1. Giảm thiểu lỗi 
// 2. Tăng tính dễ đọc của mã
// 3. Linh hoạt hơn

// *** Rest/Spread Operator: (...) để sao chép mảng, đối tượng và thu thập tham số.
// Rest/Spread Operator (...) là một toán tử mạnh mẽ trong ES6, có hai cách sử dụng chính:
// Rest (thu thập tham số) và Spread (sao chép hoặc mở rộng mảng/đối tượng).
// được biểu diễn bằng dấu ba chấm ...  Chúng giúp làm việc với các mảng, đối tượng dễ dàng hơn và giảm bớt sự phức tạp của code


// Spread Operator: Dùng để sao chép hoặc mở rộng kết hợp objects => Spread trong Array đưcọ dùng để copy kết hợp hoặc truyền các phần tử
 
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // Sao chép Array arr1
console.log(arr2);  

const arr3= [3, 4];
const combinedArr = [...arr1, ...arr3]; // Kết hợp 2 Array
console.log(combinedArr);  

// => Spread trong Object cũng đc dùng để sao chép hoặc kết hợp các thuộc tính
const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1 };  // Sao chép objects
console.log(obj2);  

const obj3 = { gender: 'male' };
const combinedObj = { ...obj1, ...obj3 }; // Kết hợp 2 Objects
console.log(combinedObj);  

// Rest Operator: Dùng để thu thập (gom) các đối số (tham số hay phần từ) còn lại thành array hoặc objects trong hàm hoặc destructuring.
// Thường đc dùng trong khai báo hàm để xử lý các tham số ko xác định hoặc khi cần lấy các giá trị còn lại
// Rest Function: Khi không biết trước số tham số sẽ được truyền , có thể dùng Rest Operator để thu thập tất cả các tham số còn lại thành một mảng.
function sum(...numbers) {
  return numbers.reduce(
    (total, num) => total + num, 0
  );
}

console.log(sum(1, 2, 3));  
console.log(sum(5, 10, 15)); 

// Rest trong Objects: Thu thập phần còn lại của array hoặc objects sau khi đã tách các phần cụ thể.
const [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest); 

const { name, ...others } = { name: 'John', age: 30, job: 'Developer' };
console.log(name);
console.log(others); 

// => Ứng dụng của rest & Spread trong Reactjs 
// Khi làm việc với các component, Spread Operator dùng để truyền tất cả các props vào trong 1 component con
const Button1 = (props) => <button>{props.label}</button>;
const buttonProps = { label: 'Click me', className: 'btn' };

<Button {...buttonProps} />; // Truyền tất cả props

// Rest Operator có thể sử dụng để tách các props cần thiết và gom các props còn lại
const Button2 = ({ label, ...rest }) => (
  <button {...rest}>{label}</button>
);

// Sử dụng Button với các props
<Button label="Click me" className="btn" onClick={() => alert('Clicked')} />;

// Spread với State và Object
const [user, setUser] = useState({ name: 'John', age: 25 });

setUser({ ...user, age: 26 }); // Cập nhật tuổi mà không làm mất dữ liệu khác

// Khi nào nên sử dụng
// Use Spread khi bạn cần sao chép, kết hợp mảng hoặc đối tượng.
// Use Rest khi cần gom các giá trị còn lại vào 1 array hoặc object, đặc biệt hữu ích khi làm việc với các func có nhiều tham số không xác định trước.

// *** Modules (Import/Export): Import và export các modules Js.
// JS Modules cho phép tách mã thành các phần nhỏ và tái sử dụng dễ dàng, code dễ manage hơn, giảm bớt conflict giữa các value, và dễ maintenance 
// JS ES6+ giới thiệu các tính năng để hỗ trợ import/export modules một cách chính thức.
// ==> Cấu trúc modules trong Js
// Mỗi file Js có thể xem là 1 modules. trong 1 modules khai báo value, func, class object và có thể được export từ modules đó để use trong các modules khác.

// Có hai cách để export trong Js: => Named Export: Xuất từng phần tử riêng biệt và => Default Export: Xuất một đối tượng hoặc hàm chính từ modules.
// => Named Export (Xuất danh định) có thể export nhiều variable, function hoặc class cùng lúc
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
export class Calculator {
  subtract(a, b) {
    return a - b;
  }
  // export pi, function add và class Calculator và có thể được import riêng lẻ ở bất kì modules nào khác
}

// => Default Export (Xuất mặc định) đc dùng khi muốn export 1 object chính hoặc 1 feature chính của modules
// 1 modules chỉ có thể có 1 default export
export default function log(message) {
  console.log(message); // log là default export, có thể import vào modules khác mà ko cần tên chính xác
}

// Import Modules 
// => Import Named export, cần sử dụng đúng tên như khi export
// main.js
import { PI, add, Calculator } from './math.js';

console.log(PI); // 3.14
console.log(add(2, 3)); // 5
const calc = new Calculator();
console.log(calc.subtract(10, 5)); // 5

// Có thể import từng phần tử hoặc tất cả từ modules use syntax : 
import * as math from './math.js';
console.log(math.PI); // 3.14
console.log(math.add(2, 3)); // 5

// => Import Default Export , có thể sử dụng bất kỳ tên nào mà ko cần đúng như tên ban đầu
import logMessage from './logger.js';
logMessage('Hello World'); // In ra: Hello World

// Có thể import cả named export và default export từ cùng 1 modules
import logMessage, { PI, add } from './math.js';

logMessage('Hello'); // Gọi default export
console.log(PI); // Gọi named export

// ** Re-export : trong 1 vài case, b có thể muốn xuất lại module mà đã import ở 1 module khác
// Giúp xây dựng 1 module tập hợp
// ** Dynamic Import (Import Động) cho phép tải mô đun vào thời điểm thực thi bằng cách sử dụng hàm import()
// Dynamic Import trả về 1 promise , khi module được tải thành công thì có thể truy cập vào các export của nó
// ** Lợi ích của Modules - Encapsulation: Đóng gói - Reusability : Tái sử dụng - Maintainability : Dễ bảo trì

// *** Closures: Hiểu về closures trong Js, phạm vi của biến, và cách closures hoạt động.
// Closures là kn quan trọng trong JS, ảnh hưởng lớn đến cách biến hoạt động trong scope (phạm vi) và cách quản lý bộ nhớ
// ** Closures là hàm(func) có thể ghi nhớ ngữ cảnh khi nó được tạo ra, ngay cả khi nó đc thực thi bên ngoài phạm vi hay 1 ngữ cảnh khác
// Closures có thể truy cập các biến từ phạm vi(scope) bên ngoài của nó ngay cả khi phạm vi đó kết thúc

function createCounter() {
  let count = 0; // Biến local trong createCounter

  return function() { // Hàm trả về là closure
      count++;
      return count;
  };
  // func createCounter trả về 1 func con có khả năng truy cập vào biến count từ phạm vi của createCounter, mặc dù func success
}

const counter1 = createCounter(); // Mỗi lần gọi createCounter tạo ra 1 closure mới với biến count riêng biệt, tăng lên, cho phép save state
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1

// Phạm vi của biến gồm 3 loại phạm vi chính
// - Global scope: phạm vi toàn cục biến đc khai báo ở ngoài mọi hàm, có thể truy cập ở bất cứ đâu trong code
// - Function scope : biến đc khai báo trong hàm, chỉ có thể truy cập trong hàm đó
// - Block Scope : biến đc khai báo với let hoặc const trong 1 khối {} , chỉ có thể truy cập trong khối đó

// Closures hoạt động bằng cách giữ tham chiếu đến phạm vi của hàm cha tại thời điểm mà nó được tạo. 
// Do đó, khi một hàm con được trả về từ một hàm cha, nó sẽ "đóng gói" các biến trong phạm vi của hàm cha đó.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
      console.log(`Outer variable: ${outerVariable}`);
      console.log(`Inner variable: ${innerVariable}`);
  };
}
const newFunction = outerFunction("outer");
newFunction("inner"); 
//innerFunction có quyền truy cập vào outerVariable thông qua closure, ngay cả khi outerFunction đã thực hiện xong

// Ứng dụng của Closures trong Reactjs : 
// - Khi cần save hay theo dõi state hoặc value mà ko cần dùng state. giúp tránh tạo các biến toàn cục và giảm phụ thuộc vào state giúp tăng hiệu suất
// - Khi gọi hàm trong các sự kiện event
// - Xử lý các variable và value ko đổi trong suốt vòng đời của component

// *** Hoisting: Hiểu về cơ chế hoisting trong Js.
// Hoisting là một cơ chế trong JS, trong đó các khai báo biến và hàm được "đưa lên" đầu phạm vi của chúng trước khi bất kỳ dòng mã nào trong phạm vi đó được thực thi. 
// Hiểu cơ chế này rất quan trọng khi làm việc với Js vì nó có thể ảnh hưởng đến cách các biến và hàm hoạt động trong chương trình của bạn.

// ** Hoisting Biến (Variable Hoisting): Các biến được khai báo bằng var sẽ được đưa lên đầu phạm vi, nhưng chúng sẽ có giá trị undefined cho đến khi giá trị được gán.
// Vòng đời của biến trong JS bao gồm các giai đoạn sau:
// 1. Khai báo
// 2. Khởi tạo giá trị mặc định
// 3. Gán một giá trị cho biến được khởi tạo

// => Với var : Được hoisted nhưng có giá trị undefined trước khi được gán.
var x;        // x được hoisted với giá trị undefined
console.log(x); // ko có bug nhưng x chưa đc gán value,do JS đưa khai báo var x lên đầu ,nên giá trị ban đầu là undefined
x = 5;         // gán giá trị cho x
console.log(x); // 5

// => Với let và const :  Cũng được hoisted nhưng nằm trong "Temporal Dead Zone" (TDZ), nếu truy cập trước khi gán variable sẽ gây ra lỗi.
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;

// ** Hoisting Hàm (Function Hoisting): Các hàm được khai báo bằng function sẽ được đưa lên đầu phạm vi và có thể sử dụng trước khi khai báo.
// Trong JS thì Func declarations(khai báo hàm) có thuộc tính hoisting còn Func expression (biểu thức hàm) thì ko

console.log(sayHello()); // "Hello, world!"

function sayHello() {
  return "Hello, world!";
}
// hàm sayHello được hoisted lên đầu phạm vi, vì vậy bạn có thể gọi nó trước khi khai báo.
// ** Trong React, hoisting thường xuất hiện khi sử dụng các hàm và biến trong các hàm component.
function MyComponent() {
  console.log(hello()); // "Hello from React!"

  function hello() {
    return "Hello from React!";
  }

  return <div>{hello()}</div>;
}
// nếu khai báo các hàm bên trong component, JS vẫn hoisted các hàm này, giúp bạn có thể gọi chúng ngay sau khai báo component.
//  khi sử dụng React hooks, hoisting có thể gây ra lỗi nếu bạn gọi useState hoặc useEffect không đúng thứ tự hoặc ngoài hàm component vì hoisting không áp dụng cho các hook.

function MyComponent() {
  console.log(counter); // undefined
  var counter = 0;
  return <div>{counter}</div>;
}
// Do hoisting của var, counter được xác định nhưng variable ban đầu là undefined có thể gây lỗi hoặc hành vi không mong muốn trong component 
// Trong ReactJS, nên hạn chế sử dụng var, vì let và const giúp đảm bảo an toàn trong phạm vi và tránh các vấn đề về hoisting.

// *** This: Hiểu về ngữ cảnh của this trong các tình huống khác nhau (hàm, phương thức, arrow functions).
// This là từ khóa đặc biệt và là khái niệm quan trọng nhưng cũng dễ nhầm lẫn.Tùy theo bỗi cảnh(context) this sẽ trỏ đến object khác nhau
// This chính là bối cảnh(context) của nơi mà hàm chứa từ this được gọi
// Hiểu rõ this sẽ giúp bạn tránh được các lỗi logic khó tìm khi làm việc với JS

// 1. This trong Global Context : ngữ cảnh toàn cục
// TRong phạm vi toàn cục global, this trỏ tới object toàn cục, như là window trong trình duyệt hoặc global trong Nodejs
console.log(this); // Trong trình duyệt sẽ in ra đối tượng window

// Nếu gán thuộc tính cho this trong global context : JS sẽ thêm thuộc tính vào global object như sau :
this.color = "Red";
console.log(window.color) // ??

// 2. This trong Function : có thể gọi hàm theo các cách sau : gọi hàm thông thường, gọi method, gọi hàm khởi tạo, gọi hàm gián tiếp
// 2.1 This trong lời gọi hàm thông thường
function run(){ // non-strict mode : chế độ ko nghiêm ngặt
  console.log(this === window);
}

run(); // Khi gọi run(), this tham chiếu đến global object là window trên Chorme và Global trên Nodejs
// Tương đương với
window.run()

function showThis() {
  console.log(this);
}

// Gọi trực tiếp
showThis(); // Trong strict mode là `undefined`, nếu không là `window` trong trình duyệt

// chế độ nghiêm ngặt : strict mode
"use strict"; // Khai báo strict mode 
function run(){
  console.log(this === undefined);// true
  // Để hạn chế hành vi ko rõ ràng, lời gọi hàm như v sẽ đc JS đặt giá trị this thành undefined
}

run();

// 2.2 This trong gọi method
// Khi call method in object , JS sẽ đặt this co object has method
let person1 ={
  name:"quan1",
  getName : function(){
    return this.name; // this in method getName() tham chiếu đến object person1
    // return person1.name
  },
  age:20
};

console.log(person1.getName())

// 2.3 This trong lời gọi hàm Khởi tạo
// KHi dùng this trong constructor function của 1 lớp class, this đại diện cho đối tượng mới đc tạo
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const person = new Person('Alice');
person.greet(); // Kết quả: "Alice"

// 2.4 tHis trong lời gọi hàm gián tiếp
// 

// 3. This trong Arrow Functions: Hàm mũi tên
// Arrow func ko có bối cảnh thực thi hay ko có this của riêng nó, this đc kế thừa từ context bên ngoài mà nó được khai báo
let getThis = ()=> this;
console.log(getThis() === window); // value this được đặt thành đối tượng toàn cục, tức là window trong chrome

// Vì arrow func ko có this của triêng nó nên xác định 1 method bằng arrow func sẽ có bug
const person2 = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // `this` không trỏ tới `person`, mà trỏ tới ngữ cảnh bên ngoài
  }
};

person2.greet(); // Kết quả: `undefined` vì `this` không trỏ tới `person`

// 4. This trong sự kiện (DOM Event Handler)
//  sử dụng this trong một sự kiện DOM, this trỏ tới phần tử DOM mà sự kiện được gắn vào.
{/* <button id="myButton">Click me</button>

<script>
document.getElementById('myButton').addEventListener('click', function() {
  console.log(this); // Trỏ tới phần tử `button`
});
</script> */}

// 5. This trong callback của hàm setTimeout
// this trong hàm ẩn danh(anonymous function) luôn là global
// ko thể tham chiếu tới chính function trong callback của setTimeout vì nó là hàm ẩn danh
var a1 =10;
setTimeout(function () {
  // hàm ẩn danh 
  var a1 = 20;
  console.log(this.a1);
},1000);  

// ** Trong Reactjs, this chủ yếu được dùng trong các component class để truy cập các thuộc tính và phương thức của component


