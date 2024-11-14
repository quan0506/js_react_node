// Lập trình bất đồng bộ == asynchronous programming & Lập trình đồng bộ == synchronous programming


// *** Promises và async/await: Làm việc với lập trình bất đồng bộ (asynchronous programming). Promise, xử lý các tác vụ bất đồng bộ với async/await.
// Xử lý đồng bộ là thực hiện job A, đợi A xong thì sẽ thực hiện B, đợi B xong thì mới xong, nghĩa là time hoàn thành job là tổng time hoàn thành của job A và job B
// Đồng thời không thể thực hiện thêm 1 hành động nào khác ==> làm giảm hiệu năng và trải nghiệm người dùng

// Xử lý đa luồng (multi-thread) : mỗi job tốn time sẽ được thực hiện trên 1 thread riêng biệt mà ko can thiệp vào thread chính
// có thể thực hiện các cv tốn time mà vẫn có thể bắt các sự kiện ở thread chính
// Thời gian để hoàn thành job chỉ bằng time hoàn thành của A hoặc B. Cái nào thực hiện xong trước sẽ đợi cái còn lại hoàn thành thì job end

// Xử lý bất đồng bộ : khi bắt đầu thực hiện A, program tiếp tục thực hiện B mà ko đợi A end
// Việc cần làm là cung cấp 1 method để program thực hiện khi A hoặc B end
// Cơ chế thực hiện việc này trong JS có thể dùng callback , promise hoặc Async/await

// ** Callback là 1 function đc truyền vào như 1 đối số cho 1 hàm khác và được gọi khi 1 tác vụ bất đồng bộ hoàn tất
// Khi định nghĩ 1 function thực hiện task tốn thời gian, cần truyền thêm tham số vào hàm đóng vai trò là hàm call back
// Khi hành động start r khi nó end,hàm callback sẽ đc gọi ngay sau đó

function fetchData(callback) { // func fetchData nhận vào 1 tham số là callback là hàm sẽ đc gọi khi dữ liệu đã sẵn sàng
setTimeout(() => {
    const data = { name: 'Alice', age: 25 };
    callback(data);
}, 2000); // func setTimeout đc dùng để giả lập 1 tác vụ tốn thời gian bằng cách trì hoãn 2s, 
// sau 2s setTimeout sẽ chạy func callback với data là object
}

function displayData(data) {
console.log(data); // hàm displayData in ra data
}

fetchData(displayData); // hàm fetch data thực thi và 2s sau gọi hàm display để hiển thị dữ liệu lên console

// EXample
function doAsync(url, onSuccess, onError) { // hàm doAsync thực hiện yêu cầu HTTP GET tới url đc truyền vào
const xhr = new XMLHttpRequest();
xhr.open("GET", url); // mở yêu cầu GET tới url chỉ định
xhr.onload = () => onSuccess(xhr.responseText); // là func callback , đọi gọi khi request success(khi xhr.onload run) và nhận đc data phản hồi xhr.responseText
xhr.onerror = () => onError(xhr.statusText); // là func callback, được call khi có bug xảy ra trong quá trình requeet (khi xhr.onerror run) 
xhr.send(); // send request to server
}

doAsync(
"https://something.com", // yêu cầu HTTP đc thực hiện đến url này
(value) => {
    // xử lý khi yêu cầu success , onSuccess sẽ xử lý data phản hồi
},
(error) => {
    //xử lý khi yêu cầu failed, onError sẽ xử lý bug
}
);

// => doAsync cung cấp một cách tiếp cận đơn giản để thực hiện yêu cầu HTTP bất đồng bộ và cho phép xử lý success or failed với các callback.

// Callback hell là các callback lồng nhau quá nhiều làm cho các code khó đọc và khó bảo trì mặc dù call back là cách tiếp cận đơn giản nhưng dễ xảy ra call back hell
getData(function(data) { // getData: func lấy dữ liệu và gọi hàm processData khi có dữ liệu (data).
processData(data, function(processedData) { // processData: Hàm xử lý dữ liệu (data) và gọi hàm saveData sau khi xử lý xong (processedData).
    saveData(processedData, function(response) {
        console.log('Success!'); // saveData: Hàm lưu trữ dữ liệu đã xử lý và sau khi hoàn thành sẽ gọi một hàm callback để in "Success!".
    });
});
});


//** Promise có default syntax là 
let promise = new Promise(function (resolve, reject) {
// Code here
});

// Hàm được truyền vào new Promise là executor
// Ban đầu Promise có trạng thái(state) là pending và result value là undefined
// Khi executor end job, nó sẽ gọi đến 1 trong 2 hàm đc truyền vào
// resolve(value) : xác định rằng job đã thực hiện thành công,state chuyển thành resolved, result là value
// reject(error) : xác định có bug xảy ra, state chuyển thành rejected, kết quả là error


const myPromise = new Promise((resolve, reject) => { // myPromise: Promise mới được tạo ra, mô phỏng thao tác bất đồng bộ bằng setTimeout.
setTimeout(() => {
    const success = true; 
    if (success) {
        resolve('Dữ liệu đã lấy thành công!'); // sau 2s , if true => end Promise
    } else {
        reject('Lỗi xảy ra!');// failed, in thông báo , end Promise with state reject
    }
}, 2000);
});

myPromise // gọi myPromise, dùng .then() để xử lý result success và .catch() để xử lý lỗi nếu có.
.then(result => {
    console.log(result); 
})
.catch(error => {
    console.log(error);  
});

// Chaining(chuổi) Promise cho phép kết nối (chain) Các thao tác lại với nhau
fetchData()// thao tác đầu tiên đc thực hiện và trả về 1 promise, .then() trong chain sẽ thực hiện func tiếp theo
    .then(processData) // nhận data từ fetchData và trả về Promise mới
    .then(saveData) // nhận data từ processData và trả về 1 Promise khác 
    .then(response => { // Khi promise trong chuối thực thi thành công .then() cuối cùng sẽ hiển thị response
        console.log('Success:', response);
    })
    .catch(error => { // .catch() sẽ xử lý lỗi trong bất kỳ phần nào trong chain
        console.error('Error:', error);
    });


function doAsync(url) { // Hàm doAsync được xây dựng để trả về một Promise khi thực hiện một yêu cầu HTTP GET tới url với XMLHttpRequest.
return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText); // Trong xhr.onload, nếu request success, resolve sẽ được gọi với data phản hồi xhr.responseText. 
    xhr.onerror = () => reject(xhr.statusText);// Nếu có lỗi xảy ra, reject sẽ được gọi với xhr.statusText.
    xhr.send();
});
}

// Usage:
doAsync("https://something.com") // gọi doAsync, ta sử dụng .then() để xử lý kết quả thành công và .catch() để xử lý lỗi.
.then((value) => {
    // 'value' is corresponding with 'xhr.responseText' = value chữa dữ liệu từ xhr.responseText
})
.catch((error) => {
    // 'error' is corresponding with 'xhr.statusText' =  error chứa thông báo lỗi từ xhr.statusText
});

// Promise giúp xử lý các tác vụ bất đồng bộ mà không cần callback lồng nhau, làm code dễ đọc hơn.

// ** Async/Await là cú pháp mới hơn của es7,8, giúp làm việc với Promise dễ hơn và code giống lập trình đồng bộ mặc dù vẫn là bất đồng bộ
// async: Đánh dấu một hàm là bất đồng bộ và nó sẽ tự động trả về một Promise.
// await: Tạm dừng việc thực thi cho đến khi Promise được giải quyết (resolve) hoặc bị từ chối (reject).

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Alice', age: 25 };
            resolve(data);
        }, 2000);
        // fetchData: Đây là một hàm trả về một Promise, mô phỏng thao tác bất đồng bộ bằng setTimeout trong 2 giây.
        // Sau 2 giây, resolve được gọi với dữ liệu { name: 'Alice', age: 25 }.
    });
}

async function displayData() { // Hàm displayData được khai báo với từ khóa async, cho phép sử dụng await bên trong nó.
    try {
        const data = await fetchData(); // await dừng việc thực thi hàm cho đến khi fetchData hoàn thành và trả về dữ liệu. Nếu fetchData thành công, dữ liệu sẽ được gán cho biến data. 
        console.log(data);
    } catch (error) {
        console.error('Error:', error); // try...catch: Đoạn mã này giúp xử lý lỗi. Nếu có lỗi xảy ra trong quá trình thực thi fetchData, lỗi sẽ được bắt và in ra thông qua catch.
    }
}

displayData();

// Lợi ích của async/await:
// Code dễ đọc hơn: Không có callback lồng nhau hoặc chaining dài dòng.
// Xử lý bug dễ dàng: Sử dụng try/catch cho phép bắt lỗi như khi làm việc với mã đồng bộ.

// Phối hợp nhiều promise với async/await: Đôi khi bạn muốn thực thi nhiều Promise đồng thời, có thể dùng Promise.all() với await.
async function fetchMultipleData() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        //  Promise.all chờ tất cả các Promise trong mảng hoàn thành. Nếu all success, nó trả về một mảng kết quả của các Promise (ở đây là data1 và data2).
        // fetchData1() và fetchData2() là các hàm trả về Promise (tương tự như fetchData ở trên).        
        //  result : mảng [data1, data2], chứa dữ liệu từ fetchData1 và fetchData2.
        console.log('Data 1:', data1);
        console.log('Data 2:', data2);
    } catch (error) {
        console.error('Error fetching data:', error);
        // try...catch: Nếu bất kỳ Promise nào trong Promise.all bị lỗi, catch sẽ xử lý lỗi.
    }
}

fetchMultipleData();


// *** Event Loop và Callback Queue: Cách JavaScript xử lý các tác vụ đồng thời với cơ chế event loop.
// Event Loop là cơ chế xử lý bất đồng bộ quan trong trong JS cho phép nó thực thi các tác vụ ko đồng bộ theo cách tuần tự mà ko cần dùng đến đa luồng

// JS là một ngôn ngữ đơn luồng (single-threaded),là nó chỉ có một luồng xử lý duy nhất để thực thi mã. 
// nhờ cơ chế Event Loop, JS có thể xử lý các tác vụ bất đồng bộ như xử lý data từ API, truy cập file hệ thống, và quản lý các event như click chuột hay input mà không cần đợi các tác vụ này hoàn thành.

// Event Loop đảm bảo JS tiếp tục code và xử lý các tác vụ bất đồng bộ sau khi các tác vụ đồng bộ hoàn thành,nhờ chu trình như sau:

// ** Call Stack: 
// - Là nơi chứa các hàm, các tác vụ synchronous đang được thực thi theo thứ tự LIFO (Last In, First Out). \
// - Mỗi khi func đc gọi, nó đc đẩy vào Call Stack và khi success thì sẽ bị loại khỏi call Stack

// ** Callback Queue (Queue of Messages): 
// - Là nơi chứa các hàm callback của các tác vụ bất đồng bộ (như setTimeout, fetch, DOM event) và chờ đc thực thi.
// - Các tác vụ trong callback Queue sẽ đc chuyển vào Call Stack khi Call Stack trống

// Event Loop: 
// - Là cơ chế Theo dõi, đảm bảo trạng thái của Call Stack và Callback Queue. 
// Khi Call Stack trống (không còn tác vụ đồng bộ nào), Event Loop sẽ chuyển các hàm từ Callback Queue vào Call Stack để thực thi.

// => Cách hoạt động tổng quan của Event Loop
// 1. Các tác vụ đồng bộ được đưa vào và thực thi trực tiếp trên Call Stack.
// 2. Các tác vụ bất đồng bộ (như setTimeout, I/O, hoặc HTTP request) được chuyển đến Web APIs (các module hỗ trợ tác vụ bất đồng bộ).
// 3. Khi một tác vụ bất đồng bộ success, callback của nó sẽ được đưa vào Callback Queue.
// 4. Event Loop kiểm tra Call Stack và khi Call Stack trống, nó sẽ lấy callback từ Callback Queue vào Call Stack để thực thi.

console.log("Start");

setTimeout(() => {
    console.log("This is from the callback queue (asynchronous)");
}, 1000);

console.log("End");

// console.log("Start") được đưa vào Call Stack và thực thi ngay lập tức và " Start" được log ngay lập tức
// setTimeout là func bất đồng bộ được đưa vào Call Stack, tạo ra một hẹn giờ (timer), rồi hàm chính setTimeout rời khỏi Call Stack.
// console.log("End") được thực thi tiếp theo.
// Khi hẹn giờ 1 giây hoàn thành, callback của setTimeout được đẩy vào Callback Queue.
// Event Loop phát hiện Call Stack trống nên đẩy callback từ Callback Queue lên Call Stack và thực thi console.log("This is from the callback queue (asynchronous)").


// ** Trong ReactJS, ReactJS dựa vào Event Loop để cập nhật giao diện người dùng (UI) một cách hiệu quả:
// Asynchronous State Updates: Trong React, các thay đổi trạng thái (useState) hoặc hiệu ứng (useEffect) thường là bất đồng bộ, điều này cho phép React quản lý việc cập nhật UI mà không gây chậm trễ cho các phần còn lại của ứng dụng.
// Promises trong Fetch API: Khi React lấy dữ liệu từ API (bằng cách sử dụng fetch hoặc axios), các Promise sẽ xử lý kết quả bất đồng bộ, cho phép React cập nhật UI khi dữ liệu đã sẵn sàng mà không ngắt quá trình render.

import { useState, useEffect } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Fetched Data:</h1>
            {data ? data.map(item => <p key={item.id}>{item.title}</p>) : "Loading..."}
        </div>
    );
}

// Promise do fetch trả về sẽ hoàn thành bất đồng bộ, và khi dữ liệu đến, Event Loop sẽ đẩy callback vào Call Stack để cập nhật UI.