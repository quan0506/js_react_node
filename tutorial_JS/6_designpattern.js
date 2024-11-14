// Design patterns là các giải pháp mẫu giúp giải quyết các vấn đề phổ biến trong lập trình.
// Chúng giúp code dễ hiểu, dễ bảo trì và tái sử dụng hơn. 

// 1. Module Pattern:  Tạo ra các mô-đun riêng biệt, bảo vệ các biến, phương thức bên trong mô-đun và chỉ cung cấp các phương thức cần thiết ra ngoài. 
// Điều này giúp tránh việc trùng lặp tên biến và phương thức khi phát triển các ứng dụng lớn.
const MyModule = (function () {
    let privateVar = "I'm private";

    function privateFunction() {
        console.log(privateVar);
    }

    return {
        publicMethod: function () {
            privateFunction();
        }
    };
})();

MyModule.publicMethod();  // Output: "I'm private"

// 2. Singleton Pattern: Đảm bảo chỉ có một instance duy nhất của một class được tạo ra trong suốt vòng đời của ứng dụng. 
// Singleton rất hữu ích khi chỉ cần một đối tượng để quản lý trạng thái toàn cục, ví dụ: kết nối tới cơ sở dữ liệu.
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { data: "I am the instance" };
    }

    return {
        getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true

// 3. Factory Pattern: Cung cấp một giao diện để tạo đối tượng mà không cần xác định rõ lớp cụ thể. 
// Factory Pattern đặc biệt hữu ích khi chúng ta cần tạo ra nhiều đối tượng với cùng một cấu trúc nhưng với các đặc điểm khác nhau.
function Car(type) {
    this.type = type;
    this.drive = function () {
        console.log(`Driving a ${this.type} car`);
    };
}

function CarFactory() {
    this.createCar = function (type) {
        return new Car(type);
    };
}

const factory = new CarFactory();
const car1 = factory.createCar("SUV");
const car2 = factory.createCar("Sedan");

car1.drive(); // Output: Driving a SUV car
car2.drive(); // Output: Driving a Sedan car

// 4. Observer Pattern: Dùng để theo dõi trạng thái của đối tượng. 
// Khi một đối tượng (subject) thay đổi trạng thái, tất cả các observer sẽ nhận được thông báo và cập nhật trạng thái của mình theo. 
// Đây là một pattern thường dùng trong các hệ thống phát triển ứng dụng thời gian thực như: thông báo, chat, hay cập nhật giá sản phẩm.
function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (observer) {
        this.observers.push(observer);
    },
    unsubscribe: function (observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    },
    notify: function (message) {
        this.observers.forEach(observer => observer(message));
    }
};

const newsFeed = new Subject();

function user1Update(message) {
    console.log(`User 1 received message: ${message}`);
}

newsFeed.subscribe(user1Update);
newsFeed.notify("New post available!"); // Output: User 1 received message: New post available!

// 5. Prototype Pattern: Dùng để tạo ra các đối tượng mới dựa trên một đối tượng mẫu (prototype) có sẵn. 
// Prototype Pattern giúp tiết kiệm bộ nhớ và là nền tảng của cách hoạt động của Object.create trong JavaScript.
const carPrototype = {
    drive: function () {
        console.log(`Driving a ${this.type} car`);
    }
};

function Car(type) {
    let car = Object.create(carPrototype);
    car.type = type;
    return car;
}

const car3 = Car("SUV");
car1.drive(); // Output: Driving a SUV car

// 6. Decorator Pattern : Cho phép thêm các hành vi (behavior) vào đối tượng mà không thay đổi mã nguồn của lớp đó. 
// Decorator Pattern giúp mở rộng tính năng của đối tượng một cách linh hoạt, đặc biệt là khi bạn muốn thêm hoặc bớt các tính năng mà không cần sửa mã gốc.
function Car() {
    this.cost = function () {
        return 20000;
    };
}

function addNavigation(car) {
    car.hasNavigation = true;
    const originalCost = car.cost();
    car.cost = function () {
        return originalCost + 3000;
    };
}

const myCar = new Car();
addNavigation(myCar);

console.log(myCar.cost()); // Output: 23000
console.log(myCar.hasNavigation); // Output: true

// 7. Command Pattern: Cho phép đóng gói các yêu cầu hoặc hành động vào trong một đối tượng, giúp việc thực thi các hành động được linh hoạt và dễ kiểm soát hơn. 
// Command Pattern rất hữu ích khi bạn muốn lưu lại lịch sử các hành động, như trong một trình soạn thảo văn bản (với undo/redo).
function Command() {
    this.execute = function () {};
    this.undo = function () {};
}

function Light() {
    this.state = "off";
    this.on = function () {
        this.state = "on";
        console.log("Light is on");
    };
    this.off = function () {
        this.state = "off";
        console.log("Light is off");
    };
}

function LightOnCommand(light) {
    Command.call(this);
    this.light = light;
    this.execute = function () {
        this.light.on();
    };
    this.undo = function () {
        this.light.off();
    };
}

const myLight = new Light();
const lightOn = new LightOnCommand(myLight);

lightOn.execute(); // Output: Light is on
lightOn.undo();    // Output: Light is off


// ==> SUMARY
// Các design pattern giúp tổ chức và viết mã dễ bảo trì, mở rộng. 
// Trong JS, các pattern đều rất hữu ích khi phát triển các ứng dụng có quy mô lớn, yêu cầu mở rộng và linh hoạt cao.