// Lập trình hướng đối tượng (OOP)
// Hiểu về các khái niệm cơ bản của OOP như: class, constructor, inheritance (kế thừa), encapsulation, polymorphism,
// cách JavaScript hỗ trợ lập trình hướng đối tượng.
// Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một trong những khái niệm quan trọng trong lập trình, và JS cũng hỗ trợ lập trình hướng đối tượng. 

// 1. Object (Đối tượng)
// Object là nền tảng của OOP. Trong JS, Object là một tập hợp các thuộc tính (properties) và phương thức (methods).
// Mỗi thuộc tính là một cặp khóa-giá trị, và phương thức là một thuộc tính mà giá trị là một hàm gắn bó với object đó

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("The car is starting");
  }
};

console.log(car.brand);  // "Toyota"
car.start();             // "The car is starting"

// 2. Constructor Function (Hàm khởi tạo)
// Hàm khởi tạo (Constructor) là phương thức đặc biệt để tạo ra các object giống như khuôn mẫu (template) cho các object mới.
// Bạn có thể định nghĩa một hàm khởi tạo sử dụng từ khóa function và sau đó sử dụng từ khóa new để tạo đối tượng mới.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.start = function() {
    console.log(this.brand + " " + this.model + " is starting");
  };
}

const car1 = new Car("Honda", "Civic", 2021);
const car2 = new Car("Toyota", "Camry", 2019);

car1.start();  // "Honda Civic is starting"
car2.start();  // "Toyota Camry is starting"

// 3. Class (Lớp)
// ES6 giới thiệu cú pháp lớp (class) để định nghĩa các object.giúp mã trở nên dễ đọc và maintenance hơn so với sử dụng hàm khởi tạo.
// Lớp là khuôn mẫu để tạo ra các object có properties và method giống nhau
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  }
}

const car1 = new Car("Tesla", "Model S", 2022);
car1.start();  // "Tesla Model S is starting"

// 4. Encapsulation (Tính đóng gói)
// Tính đóng gói là việc ẩn giấu thông tin nội bộ của một object và chỉ cho phép truy cập hoặc sửa đổi thông qua các method public. hay các method để thao tác với các properties của object đó
// Trong JS, ta có thể sử dụng dấu _ (underscore) để biểu thị các properties riêng tư (không hoàn toàn là thuộc tính private, chỉ là quy ước) hoặc sử dụng # để tạo thuộc tính thực sự private . 
class Car {
  #engineStatus = false;

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    this.#engineStatus = true;
    console.log(`${this.brand} ${this.model} is starting`);
  }

  isEngineRunning() {
    return this.#engineStatus;
  }
}

const car1 = new Car("Ford", "Mustang", 2023);
car1.start();
console.log(car1.isEngineRunning());  // true

// 5. Inheritance (Tính kế thừa)
// Kế thừa cho phép một class con kế thừa các properties và method từ class cha.
// Trong JS,có thể sử dụng từ khóa extends để kế thừa từ một class khác và từ khóa super() để call constructor của class cha.

class Vehicle {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }

  describe() {
    console.log(`This is a ${this.brand} ${this.type}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super("car", brand);  // Gọi constructor của lớp cha
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  }
}

const myCar = new Car("BMW", "X5", 2021);
myCar.describe();  // "This is a BMW car"
myCar.start();     // "BMW X5 is starting"

// 6. Polymorphism (Tính đa hình)
// Cho phép Object của các class != nhau có thể đc xử lý theo cùng 1 cách thông quan interface chung, thường là thông qua kế thừa hoặc giao diện
// Đa hình là khả năng của các phương thức cùng tên hoạt động khác nhau dựa trên đối tượng gọi nó.
// Trong JS, tính đa hình chủ yếu xuất hiện qua việc (method overriding) = ghi đè phương thức 
class Animal {
  sound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("The cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => animal.sound());
// "The animal makes a sound"
// "The dog barks"
// "The cat meows"

// 7. Abstraction (Tính trừu tượng)
// Trừu tượng là quá trình ẩn đi những chi tiết không cần thiết và chỉ hiển thị những thông tin quan trọng.
// Trong JS, không có hỗ trợ trừu tượng trực tiếp như trong các ngôn ngữ khác (ví dụ Java có từ khóa abstract), nhưng ta có thể tạo các lớp cơ bản và bắt buộc các lớp con phải triển khai các method cần thiết.
// Abtraction có thể đc thực hiện = cách dùng các method hoặc class cha cung cấp interface cho các class con

class Vehicle {
  start() {
    throw new Error("Method 'start()' must be implemented");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting");
  }
}

const myCar = new Car();
myCar.start();  // "Car is starting"


// Summary => 
// Object: Tập hợp các thuộc tính và phương thức.
// Constructor Function: Hàm dùng để tạo đối tượng mới.
// Class: Cú pháp mới để định nghĩa các đối tượng.
// Encapsulation: Đóng gói thông tin, ẩn chi tiết bên trong đối tượng.
// Inheritance: Cho phép kế thừa từ lớp cha.
// Polymorphism: Cho phép phương thức có cùng tên hoạt động khác nhau.
// Abstraction: Ẩn chi tiết không cần thiết và chỉ hiện thông tin quan trọng.
// OOP trong JavaScript giúp viết mã có tính cấu trúc, dễ mở rộng và bảo trì hơn.











