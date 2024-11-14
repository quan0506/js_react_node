// *** Hiểu về Prototype và Prototypal Inheritance trong Js

// Trong JS, prototype là một cơ chế để share method và properties giữa các object mà không cần phải copy chúng vào từng object cụ thể. 
// Js không có các class như trong Java hay C++, thay vào đó, nó dùng Prototype để tạo các mối quan hệ giữa các object, giúp thực hiện Prototypal Inheritance.

// Prototype là gì? Trong Js, mỗi hàm (function) đều có một properties là prototype, và properties này được sử dụng để tạo nên các properties và method có thể chia sẻ cho các đối tượng khác được tạo ra từ hàm đó. Một cách dễ hiểu:

// Khi một object được tạo từ một hàm tạo (constructor function), nó sẽ nhận được một liên kết đến prototype của hàm tạo đó.
// Mọi object trong JS đều có một properties __proto__, đây là liên kết tới prototype của hàm tạo đã tạo ra nó.

// Prototypal Inheritance (Kế thừa Prototypal) là quá trình mà một đối tượng có thể truy cập các properties và method của một đối tượng khác thông qua properties __proto__ của mình. 
// Khi truy cập một properties/method không có trong đối tượng, Js sẽ tìm kiếm theo chuỗi __proto__ cho đến khi tìm thấy properties/method đó hoặc không tìm thấy.
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Dog');
dog.speak(); // "Dog makes a noise."

// Trong ví dụ này: Animal là một hàm tạo.
// speak là method được định nghĩa trong Animal.prototype, 
// vì vậy mọi đối tượng được tạo từ Animal (như dog) đều có thể truy cập vào speak.

// => Ưu điểm của Prototypal Inheritance
// Cho phép tạo ra các object chia sẻ hành vi chung mà không sao chép mã lệnh.
// Linh hoạt hơn so với kế thừa theo class truyền thống, dễ dàng tạo ra các object linh hoạt.
// Tối ưu hóa tài nguyên và tiết kiệm bộ nhớ, vì các method chung chỉ được lưu một lần trong prototype.
// => Nhược điểm
// Dễ gây nhầm lẫn cho những người mới học JS vì hệ thống này khác biệt so với kế thừa theo class của các ngôn ngữ truyền thống.
// Khi số lượng cấp độ kế thừa tăng lên, việc tìm kiếm properties trong chuỗi prototype sẽ gây ra ảnh hưởng hiệu suất.

// 2. Ứng dụng Prototypal Inheritance trong React và Node.js

// Trong React dựa trên Js, các khái niệm về Prototype và Prototypal Inheritance vẫn tồn tại, 
// nhưng thường không trực tiếp làm việc với chúng trong React do React sử dụng JSX và class component hoặc function component hiện đại.
// Tuy nhiên, một số ví dụ về việc sử dụng Prototypal Inheritance có thể thấy rõ trong cấu trúc component React:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('Dog');
dog1.speak(); // "Dog barks."

// Kế thừa dựa trên prototype được áp dụng ở đây khi Dog kế thừa từ Animal. Khi gọi dog.speak(), method speak của Dog ghi đè method speak của Animal.
// Trong functional component với Hook, Khi làm việc với các function component và hook trong React, chúng ta thường ít dùng tới prototypal inheritance trực tiếp. 
// Tuy nhiên, khi sử dụng context, HOC (Higher-Order Components), hoặc custom hooks, có thể áp dụng các nguyên tắc tương tự để chia sẻ hành vi giữa các component mà không lặp lại mã.

// Trong Node.js, các object và func tạo có thể được thiết kế với Prototypal Inheritance để tối ưu hóa mã.
// Ví dụ, giả sử có một service cần share các method chung cho các loại object khác nhau:

function Service() {}

Service.prototype.log = function(message) {
    console.log(message);
};

function UserService() {
    Service.call(this);
}

UserService.prototype = Object.create(Service.prototype);
UserService.prototype.constructor = UserService;

const userService = new UserService();
userService.log("User service logging"); // "User service logging"
// Ở đây:UserService kế thừa từ Service và có thể truy cập method log của Service.

// Trong JS, methods có thể được thêm vào prototype của một hàm tạo (constructor function) để chia sẻ giữa các object được tạo từ hàm đó. 
// Điều này giúp tránh việc phải copy các method vào từng object mới, tiết kiệm bộ nhớ và dễ bảo trì mã hơn.

// 1. method với Prototype
// Khi create constructor func trong JS, mỗi OBject mới được tạo từ hàm đó sẽ kế thừa các properties và method từ prototype của nó. 
// Để add method vào prototype của hàm tạo, có thể gán nó cho properties prototype.methodName.
function ConstructorFunction() {
    this.property = "value";
}

// Thêm method vào prototype
ConstructorFunction.prototype.methodName = function() {
    console.log("Hello from method!");
};

// 2. Ví dụ với Prototype
// Giả sử có object Person với các properties như name và age, và muốn tạo một method introduce để các Person có thể giới thiệu bản thân.
// Khởi tạo hàm tạo Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Thêm method introduce vào prototype của Person
Person.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Tạo đối tượng mới từ Person
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.introduce(); // "Hello, my name is Alice and I am 25 years old."
person2.introduce(); // "Hello, my name is Bob and I am 30 years old."
// Trong ví dụ này: introduce được định nghĩa trong Person.prototype, nên mọi object Person (như person1 và person2) đều có thể truy cập vào method introduce mà không cần sao chép nó vào từng object.
// Việc share method giúp tiết kiệm bộ nhớ, vì introduce chỉ được lưu một lần trong prototype của Person.

// 3. Tạo nhiều method trên Prototype
// có thể thêm nhiều method vào prototype của một hàm tạo. Ví dụ, mở rộng Person với các method introduce và celebrateBirthday:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Thêm method introduce vào prototype
Person.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Thêm method celebrateBirthday vào prototype
Person.prototype.celebrateBirthday = function() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
};

const person3 = new Person("Charlie", 28);

person3.introduce(); 
person3.celebrateBirthday(); 
person3.introduce(); 
// introduce và celebrateBirthday đều được chia sẻ cho tất cả các object Person.
// celebrateBirthday thay đổi properties age của object Person khi được gọi.

// 4. Kiểm tra method trên Prototype
// có thể sử dụng hasOwnProperty để kiểm tra xem một method có thuộc prototype của object hay không.

console.log(person3.hasOwnProperty('introduce')); // false (do thuộc prototype)
console.log(Person.prototype.hasOwnProperty('introduce')); // true
