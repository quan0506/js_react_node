// JSON (JavaScript Object Notation): Hiểu về định dạng JSON và cách sử dụng nó để trao đổi dữ liệu giữa client và server.

// JSON (JavaScript Object Notation) là một định dạng nhẹ để biểu diễn các giá trị, trao đổi dữ liệu, thường được sử dụng giữa client và server. 
// JSON sử dụng cú pháp tương tự JavaScript object, giúp dễ dàng đọc và ghi dữ liệu trong nhiều ngôn ngữ lập trình khác nhau.
// Cú pháp của JSON:

// Dữ liệu được biểu diễn dưới dạng cặp "key: value".
// Key luôn là chuỗi (string).
// Value có thể là: chuỗi (string), số (number), boolean (true/false), mảng (array), object (đối tượng), hoặc null.
// Ví dụ JSON:

{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Physics", "Computer Science"],
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
// Sử dụng JSON trong JavaScript
//  Chuyển đổi objects JS sang JSON:
 
const persons = { name: "John", age: 30 };
const jsonStrings = JSON.stringify(persons); // Chuyển đối tượng thành chuỗi JSON
console.log(jsonStrings)


// Chuyển đổi JSON sang đối tượng JavaScript:
 
const jsonString = '{"name": "John", "age": 30}';
const person = JSON.parse(jsonString); // Chuyển chuỗi JSON thành đối tượng
console.log(person)

// *** AJAX là một kỹ thuật Làm việc với XMLHttpRequest hoặc Fetch API  để thực hiện các yêu cầu HTTP 
// (như GET, POST, PUT, DELETE) tới server mà không cần tải lại trang, giúp ứng dụng web tương tác tốt hơn với người dùng.

// Hiện tại thường dùng Fetch API hoặc XMLHttpRequest để thực hiện các yêu cầu AJAX. 
// Cả hai đều có thể được dùng để lấy dữ liệu từ server hoặc gửi dữ liệu lên server.

// ==> Fetch API là soltuion hiện đại, đơn giản và dễ dùng để làm việc với các yêu cầu HTTP không đồng bộ 
// Đây là một lựa chọn tốt thay thế cho XMLHttpRequest.

// Syntax Fetch API:
fetch('https://api.example.com/data')
  .then(response => response.json()) // Chuyển đổi phản hồi thành JSON
  .then(data => console.log(data))    // Xử lý dữ liệu
  .catch(error => console.error('Error:', error)); // Bắt lỗi nếu có
 
const data = { name: "John", age: 30 };

fetch('https://api.example.com/users', { // Ví dụ với method POST (gửi dữ liệu lên server):
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // Chuyển đối tượng thành JSON để gửi
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));

// ==> XMLHttpRequest là cách tiếp cận cũ hơn để thực hiện AJAX, nhưng vẫn còn được sử dụng trong một số ứng dụng.
 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = JSON.parse(xhr.responseText); // Chuyển đổi phản hồi thành JSON
    console.log(data);
  }
};
xhr.send();

// *** Điểm khác biệt giữa Fetch API và XMLHttpRequest:
// => Fetch API có cú pháp đơn giản và ngắn gọn hơn, hỗ trợ Promise giúp dễ quản lý các thao tác bất đồng bộ.
// => XMLHttpRequest cũ hơn và phức tạp hơn nhưng vẫn hữu ích trong một số trường hợp, đặc biệt nếu bạn cần quản lý các yêu cầu phức tạp hơn.

// => chuyện gì thực sự diễn ra khi chúng ta gõ một địa chỉ trang web lên trình duyệt và nhấn Enter?
// Đầu tiên, trình duyệt sẽ tìm kiếm địa chỉ IP của server ứng với tên miền, sau đó là mở kết nối TCP đến server thông qua cổng 80 - cổng mặc định của giao thức HTTP. 
// Nếu server tồn tại và chấp nhận kết nối, trình duyệt sẽ gửi yêu cầu dạng GET đến server để lấy thông tin trang web. 
// Tiếp theo, server phản hồi lại trình duyệt theo đúng kết nối đó. Và cuối cùng, trình duyệt xử lý thông tin phản hồi và hiển thị nó lên trang web.
// Quá trình này được thực hiện hoàn toàn dựa trên trình duyệt. Tuy nhiên, bài viết này sẽ hướng dẫn bạn gửi yêu cầu HTTP đến server bằng JavaScript thông qua đối tượng XMLHttpRequest. 
//  HTTP (HyperText Transfer Protocol): giao thức truyền tải siêu văn bản, là một trong năm chuẩn về mạng Internet, được dùng để liên hệ thông tin giữa máy cung cấp dịch vụ (Web server) và máy sử dụng dịch vụ (Web client). 
// HTTP là một giao thức sử dụng bộ giao thức TCP/IP.

// => HTTP hỗ trợ các method request sau:

// GET: method này dùng để lấy thông tin từ server sử dụng URI. Và method GET chỉ nên dùng để lấy thông tin mà không có ảnh hưởng khác tới dữ liệu.
// HEAD: tương tự như GET, nhưng method này chỉ dùng để lấy thông tin dòng trạng thái và phần tiêu đề (header).
// POST: method này dùng để gửi dữ liệu từ client lên server, ví dụ: thông tin khách hàng, file,...
// PUT: dùng để thay thế dữ liệu hiện tại trên server bằng một dữ liệu mới được tải lên (upload dữ liệu)
// DELETE: xoá dữ liệu trên server sử dụng URI.
// CONNECT: thiết lập một kênh truyền đến server sử dụng URI.
// OPTIONS: miêu tả các tuỳ chọn giao tiếp đến tài nguyên trên server.
// TRACE: thực hiện một bài test lặp lại vòng lặp thông báo với đường dẫn đến tài nguyên đích trên server.

// => Status code là một số nguyên gồm 3 chữ số, dùng để phân loại phản hồi được gửi về từ server.
// 1xx: (100, 101) : Nó có nghĩa là yêu cầu đã được chấp nhận và tiến trình sẽ được tiếp tục.
// 2xx: (200 - 206) : Nó có nghĩa là hành động đã được nhận, hiểu và thực hiện thành công.
// 3xx: (300 - 307) : Nó có nghĩa là phải thực hiện thêm hành động để hoàn thành yêu cầu.
// 4xx: (400 - 417 ) : Nó có nghĩa là yêu cầu bị sai cú pháp hay là không thể được hoàn thành.
// 5xx: (500 - 505) : Nó có nghĩa là server không thể thực hiện được yêu cầu.

// => Gửi HTTP request sử dụng XMLHttpRequest
// Vì lý do an toàn nên server sẽ chặn các request từ các tên miền khác với "tên miền của server". 
// Do đó, sẽ không thể thực hiện gửi HTTP request đến server sử dụng XMLHttpRequest từ localhost.
// Sử dụng server chuyên dùng để test HTTP request tại: https://httpbin.org/
 
const req = new XMLHttpRequest(); // create new object XMLHttpRequest:
req.open("GET", "https://httpbin.org/get", false); // method request GET
// sử dụng method open để cấu hình cho request.
// Thuộc tính đầu tiên là tên kiểu request: GET, HEAD, POST, PUT, DELETE,...
// Thuộc tính tiếp theo là địa chỉ URL mà mình muốn gửi request đến.
// Thuộc tính cuối cùng là đối số kiểu bool, với giá trị false ý nghĩa là request kiểu đồng bộ (đợi cho đến khi nhận được kết quả phản hồi response) và giá trị true ý nghĩa là request kiểu bất đồng bộ (không đợi kết quả trả về mà sẽ tiếp tục thực hiện lệnh phía dưới, kết quả trả về sẽ được xử lý trong hàm callback).
req.send(null);
// request mới được configuration. Để send request to server, sẽ sử dụng method send GET với đối số là body của request (null).

console.log(req.status); // Kết quả trả về là 200, chứng tỏ request thành công.
console.log(req.responseText); // nội dung phản hồi từ server. tùy tình huống kết quả trả về là một chuỗi JSON.
 
200
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.8,vi;q=0.6",
    "Connection": "close",
    "Host": "httpbin.org",
    "Origin": "null",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
  },
  "origin": "183.81.50.73",
  "url": "https://httpbin.org/get"
}

// nhiều trường hợp phải chèn thêm header cho request thì server mới chấp nhận => có thể use method setRequestHeader : 
XMLHttpRequest.setRequestHeader(header, value);
 
req.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); //  để config request use body kiểu JSON, có thể set header "Content-Type"

// => Sử dụng XMLHttpRequest với phương thức POST

const req1 = new XMLHttpRequest();
req1.open("POST", "https://httpbin.org/post", false);
req1.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//  use method setRequestHeader để config content-type là JSON. When send request, thay vì gửi null thì ở đây mình send đi một object JSON.
const jsonBody = {
  name: "Thaycacac",
  url: "kungfutech.edu.vn",
};
req1.send(jsonBody);

console.log(req1.status);
console.log(req1.responseText);

200
  {
    "args": {},
    "data": "[object Object]",
    "files": {},
    "form": {},
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.8,vi;q=0.6",
      "Connection": "close",
      "Content-Length": "15",
      "Content-Type": "application/json; charset=UTF-8",
      "Host": "httpbin.org",
      "Origin": "null",
      "User-Agent": "...."
    },
    "json": null,
    "origin": "183.81.50.73",
    "url": "https://httpbin.org/post"
    }

// => XMLHttpRequest với request bất đồng bộ
// các ví dụ trên mới chỉ sử dụng request đồng bộ. Việc sử dụng request đồng bộ dẫn đến chương trình bị dừng lại để chờ cho đến khi có thông tin phản hồi từ server.
// Nếu như server bị lỗi, hoặc việc xử lý request mất nhiều thời gian, điều này dẫn đến chương trình sẽ bị dừng hoạt động, trang web sẽ bị đơ.
// ==> nên sử dụng request bất đồng bộ.để cấu hình request là bất đồng bộ, chỉ cần truyền vào true ở thuộc tính thứ 3 của method open. 
// Cần phải đăng ký sự kiện load và truyền vào hàm callback - hàm này được thực hiện khi có thông tin phản hồi từ server.

const req2 = new XMLHttpRequest();
req2.open("GET", "https://httpbin.org/get", true);
req2.addEventListener("load", function () {
  console.log(req2.status);
  console.log(req2.responseText);
});
req2.send(null);
console.log("Sent");
 
Sent
200
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.8,vi;q=0.6",
    "Connection": "close",
    "Host": "httpbin.org",
    "Origin": "null",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
  },
  "origin": "183.81.50.73",
  "url": "https://httpbin.org/get"
}
// dòng lệnh console.log('Sent') được thực hiện ngay sau lệnh req.send(null). 
// Và 2 câu lệnh console.log(req.status); console.log(req.responseText); chỉ được thực hiện khi có thông tin phản hồi về từ server. 
// Đó chính là cách thức hoạt động của XMLHttpRequest bất đồng bộ.
// có thể đăng ký sự kiện error để xử lý trường hợp request bị lỗi:

const req = new XMLHttpRequest();
req.open("GET", "https://httpbin.org/get", true);
req.addEventListener("load", function () {
  console.log(req.status);
  console.log(req.responseText);
});
req.addEventListener("error", function () {
  console.log("Error occurred!");
});
req.send(null);
console.log("Sent");