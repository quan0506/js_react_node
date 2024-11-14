// Kiến thức về DOM và BOM
// DOM Manipulation: Hiểu cách truy cập và thay đổi nội dung HTML với các phương thức 
// ==> getElementById(), querySelector(), createElement(), appendChild(), và các sự kiện DOM (click, submit, v.v.).

// *** DOM (Document Object Model) là một giao diện lập trình định nghĩa cấu trúc cho các tài liệu HTML và XML dưới dạng cây phân cấp
// Các element của page như html tag, attribute,content đc coi như object trong DOM giúp dev có thể truy cập, thao tác với element này thông qua JS. 
// DOM đại diện tài liệu dưới dạng cây, với mỗi phần tử của trang web như <div>, <p>, <button>, v.v., là một node (nút) trong cây này.
// DOM Manipulation (Tương tác với DOM) là cách bạn sử dụng JavaScript để thay đổi nội dung, cấu trúc, hoặc kiểu của trang web.

// Các thành phần của DOM:
// Document : Đại diện cho toàn bộ tài liệu HTML
// Element ; mỖi thẻ HTML như <div>, <p>, <a> trong trang web
// Attribute : các thuộc tính của thẻ trong html như id, class, src
// text nội dung văn bản giữa các thẻ trong html

// Một số phương thức phổ biến ==> Truy xuất phần tử, dùng các phương thức như
let element = document.getElementById("myElement"); // Lấy phần tử dựa trên ID.
 
let element = document.getElementsByTagName('tagName'); // trả về list các

let element = document.querySelector(".myClass"); // querySelector(): Lấy phần tử dựa trên selector (có thể là class, tag, ID). Truy cập phần tử với class myClass
 
let newElement = document.createElement("div"); // createElement(): Tạo một phần tử HTML mới.

newElement.innerText = "This is a new div!"; // innerText: Chỉ thay đổi văn bản trong phần tử đó.

newElement.innerHTML = "new content"; //innerHTML: Lấy hoặc thay đổi nội dung HTML của một phần tử.

newElement.setAttribute('class','new-class') // thay đổi thuộc tính
 
document.body.appendChild(newElement); // appendChild(): Thêm một phần tử vào cây DOM.

// Add or Delete phần tử:
const newElement = document.createElement('div');
document.body.appendChild(newElement); // Add phần tử
document.body.removeChild(newElement); // Xóa phần tử

// DOM trong Reactjs
// Trong Reactjs, thay vì thao tác trực tiếp với DOM, Reactjs dùng Virtual DOM để tối ưu hóa quá trình update ux ui;
// Virtual DOM là bản sao ảo của DOM thật, đc sử dụng để so sánh sự khác biệt giữa DOM hiện tại và DOM mới
// Sau đó chỉ cập nhật những thay đổi cần thiết trên DOM thật => tăng hiệu suất làm việc với giao diện lớn

function App() {
  return <h1>Hello World</h1>; // ví dụ về DOM trong React
}

// React quản lí DOM thông quan ReactDOM.render() để render content vào DOM thật:
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// Sự kiện DOM (DOM Event) là những tương tác hoặc hành động mà người dùng thực hiện trên một trang web, như nhấn nút, nhập văn bản, di chuyển chuột, tải trang, v.v. 
// Khi một sự kiện xảy ra, trình duyệt sẽ "kích hoạt"  1 event handler hoặc event listener (bộ xử lý sự kiện),
//  bạn có thể sử dụng JS để phản hồi bằng cách thực hiện các hành động tương ứng (như hiển thị thông báo, thay đổi nội dung trang, gửi dữ liệu,...).

// Các loại sự kiện phổ biến trong DOM
// ==> Sự kiện chuột (Mouse Events):
// click: Xảy ra khi người dùng nhấp vào một phần tử.
// dblclick: Xảy ra khi người dùng nhấp đúp chuột.
// mousedown: được gọi khi bạn nhấn chuột xuống
// mouseup: được gọi khi bạn nhả chuột ra
// mousemove: được gọi khi bạn nhấn và kéo chuột

// ==> Sự kiện bàn phím (keyboard events):
// keydown: Xảy ra khi người dùng nhấn một phím trên bàn phím.
// keyup: Xảy ra khi người dùng nhả phím.
// keypress : khi ng dùng nhấn 1 phím kí tự, không dùng cho phím điều khiển như Shift Ctrl

// ==> Sự kiện form (form events):
//submit: Xảy ra khi người dùng gửi biểu mấu
// focus: Xảy ra khi một trường (input) được lấy nét(or nhận tiêu điểm) (được người dùng chọn).
// blur: Xảy ra khi trường đó mất nét (or mất tiêu điểm) (người dùng chuyển sang phần tử khác).
// change : Khi nội dung của input biểu mẫu thay đổi 

// ==> Sự kiện cửa sổ (Window events):
// load: Xảy ra khi toàn bộ nội dung của trang web đã được tải xong.
// resize: Xảy ra khi người dùng thay đổi kích thước của cửa sổ trình duyệt.
// scroll : Khi người dùng cuộn trang

// ==> Sự kiện tài liệu (Documents Events)
// DOMContentLoaded : khi doc HTML đc tải và phân tích xong trc khi source như img đc load đủ
// load : Khi toàn bộ doc và source như img được tải đầy đủ
// unload : Khi web được gỡ khỏi trình duyệt

// Để xử lý sự kiện, bạn có thể gán Event Listener (bộ lắng nghe sự kiện) vào phần tử DOM. Có 3 cách chính để gán sự kiện trong JavaScript:
// 1. Sử dụng thuộc tính HTML
// Có thể gán event trực tiếp trong attribute HTML, nhưng cách này không được khuyến khích vì nó trộn lẫn JavaScript với HTML:
<button onclick="alert('Button clicked!')">Click me</button>

// 2. Sử dụng thuộc tính DOM
// Bạn có thể gán sự kiện thông qua thuộc tính của đối tượng DOM. Cách này dễ đọc và tách biệt mã JavaScript khỏi HTML:
const button = document.getElementById('myButton');
button.onclick = function() {
  alert('Button clicked!');
};

// 3. Sử dụng phương thức addEventListener()
// là cách tốt nhất và linh hoạt nhất để gán event. cho phép gán nhiều event cho cùng một phần tử và dễ dàng gỡ bỏ các sự kiện này nếu cần:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});
// Ngoài ra, bạn có thể loại bỏ bộ lắng nghe sự kiện bằng phương thức removeEventListener:
button.removeEventListener('click', myFunction);

// ** Đối tượng Event trong DOM
// Khi event được kích hoạt, nó tạo ra một đối tượng Event, chứa thông tin về sự kiện và phần tử mà sự kiện xảy ra. 
// Bạn có thể truy cập đối tượng Event thông qua tham số trong hàm xử lý sự kiện.
button.addEventListener('click', function(event) {
  console.log(event);  // Đối tượng Event chứa thông tin sự kiện
  console.log(event.target);  // Phần tử mà sự kiện xảy ra
});

// Một số thuộc tính quan trọng của đối tượng Event:
event.target; // Phần tử mà sự kiện được kích hoạt.
event.type; // Loại sự kiện (click, keydown, ...).
event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện (ví dụ: ngăn không cho form được submit).
event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên các phần tử cha (ngăn chặn "event bubbling").

// ** Event Bubbling và Event Capturing là hai cơ chế xử lý sự kiện trong DOM:
//  Event Capturing (Giai đoạn bắt): bắt đầu từ phần tử gốc của DOM (thường là document) và đi xuống qua từng phần tử con cho đến phần tử đích (phần tử mà sự kiện được kích hoạt).
// Khi sử dụng capturing, event được xử lý từ ngoài vào trong, tức là từ phần tử cha đến phần tử con.
// Để lắng nghe sự kiện ở giai đoạn capturing, bạn cần đặt true làm tham số thứ ba khi gọi addEventListener, như sau:
element.addEventListener('click', function() {
    console.log('Event Capturing');
}, true);  // 'true' là để lắng nghe sự kiện ở giai đoạn capturing

// Event Bubbling (Giai đoạn nổi bọt) Ngược lại với capturing, bubbling bắt đầu từ phần tử đích (nơi sự kiện được kích hoạt) và đi ngược lên từng phần tử cha, cho đến khi tới phần tử gốc (thường là document).
// Giai đoạn bubbling giúp các sự kiện có thể được xử lý từ trong ra ngoài, tức là từ phần tử con đến phần tử cha.
// là hành vi mặc định của sự kiện trong DOM, nên khi sử dụng addEventListener, nếu không truyền tham số thứ ba hoặc đặt nó là false, sự kiện sẽ được xử lý ở giai đoạn bubbling.
element.addEventListener('click', function() {
    console.log('Event Bubbling');
}, false);  // 'false' hoặc bỏ qua để lắng nghe sự kiện ở giai đoạn bubbling
element.addEventListener('click', handler, true);  // Capturing
element.addEventListener('click', handler, false);  // Bubbling (mặc định)

// OR
<div id="parent">
    <button id="child">Click me</button>
</div>

document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent Clicked');
}, true); // capturing

document.getElementById('child').addEventListener('click', function() {
    console.log('Child Clicked');
}, false); // bubbling
// Khi nhấn vào button:
// - Sự kiện capturing sẽ kích hoạt từ div#parent trước.
// - Tiếp đó là sự kiện bubbling được kích hoạt ở button#child.

// Event Handling: Hiểu về việc xử lý sự kiện trong JavaScript, cách sử dụng addEventListener().
// Event Handling (xử lý sự kiện) là quá trình xử lý các sự kiện (event) khi người dùng tương tác với các phần tử trên trang web, như nhấp chuột, di chuột, gõ phím, hoặc tải trang. 

// 1. Event và Event Handling
// Event (Sự kiện): Là những hành động hoặc tương tác do người dùng hoặc trình duyệt gây ra. Ví dụ:
// Nhấp chuột vào nút: click
// Di chuột qua một phần tử: mouseover
// Nhập liệu trong ô văn bản: input
// Tải xong trang web: load
// Event Handling (Xử lý sự kiện): Là quá trình bắt và xử lý sự kiện khi chúng xảy ra. 
// JS cho phép định nghĩa các hàm được gọi là Event Handler để thực hiện các hành động khi sự kiện được kích hoạt.

// 2. method addEventListener()
// addEventListener() là một method phổ biến trong JS dùng để đăng ký hàm xử lý sự kiện (event handler) cho một phần tử cụ thể. Cú pháp:
element.addEventListener(event, function, useCapture);
// element: Phần tử DOM mà bạn muốn gán sự kiện.
// event: Loại sự kiện mà bạn muốn lắng nghe (vd: click, mouseover, keyup, ...).
// function: Hàm sẽ được gọi khi sự kiện xảy ra. Bạn có thể truyền một hàm hoặc một hàm ẩn danh (anonymous function).
// useCapture: Tùy chọn ( true hoặc false) xác định cách event được xử lý trong giai đoạn bắt (capture) hoặc bong bóng (bubble). Giá trị mặc định là false (bong bóng).

// 3. Ví dụ về addEventListener()
// Example 1: Thêm sự kiện click cho một nút
<button id="myButton">Click me</button>
// Dùng addEventListener() để lắng nghe sự kiện click và thực hiện một hành động:
// Lấy phần tử nút bằng id
const button = document.getElementById("myButton");
// Gắn sự kiện click cho nút
button.addEventListener("click", function() {
    alert("Bạn đã nhấp vào nút!");
});
// Khi người dùng nhấp vào nút này, một hộp thoại alert sẽ xuất hiện với thông báo "Bạn đã nhấp vào nút!".

// Example 2: Add event mouseover và mouseout cho một phần tử thay đổi màu nền của một ô div khi user di chuột vào và trở lại màu ban đầu khi di chuột ra khỏi ô đó.
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightblue;">
    Di chuột vào đây
</div>
// Lấy phần tử div
const div = document.getElementById("myDiv");
// Thêm sự kiện mouseover
div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "yellow";
});
// Thêm sự kiện mouseout
div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "lightblue";
});
// Khi người dùng di chuột vào phần tử div, màu nền sẽ đổi sang màu vàng.
// Khi người dùng di chuột ra khỏi phần tử div, màu nền sẽ trở lại màu xanh nhạt.

// Example 3: Sử dụng hàm riêng để xử lý sự kiện, Để giúp mã dễ đọc và maintenance, có thể tách hàm xử lý sự kiện khỏi addEventListener().
// Định nghĩa hàm xử lý sự kiện
function handleClick() {
    console.log("Nút đã được nhấp!");
}
// Gắn hàm xử lý sự kiện vào nút
button.addEventListener("click", handleClick);
// Trong ví dụ này, hàm handleClick được gọi mỗi khi sự kiện click xảy ra trên button.

// Example 4. Giai đoạn Bắt (Capture) và Bong Bóng (Bubble) :Mỗi sự kiện trong JavaScript đi qua hai giai đoạn chính:
// Capture (Bắt): Sự kiện đi từ các phần tử cha đến phần tử con.
// Bubble (Bong Bóng): Sự kiện đi từ phần tử con lên các phần tử cha.
// Ví dụ, với cấu trúc HTML có nhiều cấp:

<div id="outerDiv">
    <div id="innerDiv">
        <button id="myButton">Nhấp vào tôi</button>
    </div>
</div>
// Khi người dùng nhấp vào nút, sự kiện click sẽ bắt đầu từ outerDiv (giai đoạn bắt), đi qua innerDiv, rồi đến myButton (phần tử đích), sau đó "bong bóng" ngược lại lên innerDiv và outerDiv.
// Bạn có thể kiểm soát giai đoạn bằng tham số useCapture trong addEventListener():

outerDiv.addEventListener("click", function() {
    console.log("Outer Div");
}, true); // Giai đoạn bắt

innerDiv.addEventListener("click", function() {
    console.log("Inner Div");
}, false); // Giai đoạn bong bóng
// Nếu useCapture là true, hàm xử lý sự kiện sẽ thực thi trong giai đoạn bắt.
// Nếu useCapture là false (mặc định), hàm xử lý sẽ thực thi trong giai đoạn bong bóng.

// Example 5. Loại bỏ Event Listener với removeEventListener()
// Khi không cần sự kiện nữa, bạn có thể loại bỏ nó để tiết kiệm tài nguyên:
button.removeEventListener("click", handleClick);
// Func được truyền vào removeEventListener() phải giống chính xác với func được truyền vào addEventListener().


// BOM (Browser Object Model): Sử dụng các đối tượng như window, location, history, navigator.
// BOM (Browser Object Model - Mô hình đối tượng trình duyệt) là tập hợp các đối tượng JS cho phép bạn tương tác với trình duyệt. 
// BOM cung cấp các object và method để truy cập, điều khiển các tính năng của trình duyệt mà không phải là nội dung trang web, chẳng hạn như cửa sổ, thanh điều hướng, lịch sử, và vị trí của trang web. 
// Các đối tượng chính trong BOM bao gồm window, location, history, và navigator.

// 1. Đối tượng window (Cửa sổ) là object global trong BOM, đại diện cho cửa sổ trình duyệt hiện tại. Nó bao gồm nhiều attribute và method để thao tác với cửa sổ.
// Hiển thị một hộp thoại cảnh báo
window.alert("Xin chào!");

// Mở một cửa sổ mới
let newWindow = window.open("https://example.com", "_blank", "width=600,height=400");

// Đóng cửa sổ mới
newWindow.close();

// Thực hiện tác vụ sau một khoảng thời gian (2000ms)
setTimeout(function() {
    alert("Hello after 2 seconds");
}, 2000);

// Lấy chiều rộng và chiều cao của cửa sổ hiện tại
console.log("Chiều rộng: " + window.innerWidth);
console.log("Chiều cao: " + window.innerHeight);
// 2. Đối tượng location (Vị trí)
// location chứa thông tin về URL hiện tại của cửa sổ và có thể được dùng để điều hướng đến một URL mới.

// In ra URL hiện tại
console.log(window.location.href);

// Điều hướng đến trang khác
window.location.href = "https://example.com";

// Tải lại trang
window.location.reload();

// Lấy thông tin tên miền (hostname)
console.log(window.location.hostname);

// Lấy đường dẫn (path) của trang
console.log(window.location.pathname);
// 3. Đối tượng history (Lịch sử)
// history cho phép bạn truy cập vào lịch sử duyệt web của người dùng. Tuy nhiên, do vấn đề bảo mật, bạn không thể xem toàn bộ lịch sử của người dùng mà chỉ có thể điều hướng tiến hoặc lùi.

// Quay lại một trang
window.history.back();

// Đi tới trang tiếp theo
window.history.forward();

// Đi tới trang trước đó hai trang
window.history.go(-2);

// Kiểm tra chiều dài của lịch sử
console.log("Lịch sử duyệt web có " + window.history.length + " mục.");
// 4. Đối tượng navigator (Điều hướng)
// navigator chứa thông tin về trình duyệt của người dùng và hệ thống, như tên trình duyệt, phiên bản, và ngôn ngữ.

// Lấy tên của trình duyệt
console.log("Tên trình duyệt: " + window.navigator.appName);

// Lấy mã trình duyệt
console.log("Mã trình duyệt: " + window.navigator.appCodeName);

// Kiểm tra nếu trình duyệt trực tuyến
console.log("Trình duyệt đang trực tuyến: " + window.navigator.onLine);

// Lấy thông tin hệ điều hành
console.log("Nền tảng: " + window.navigator.platform);

// Kiểm tra ngôn ngữ của trình duyệt
console.log("Ngôn ngữ trình duyệt: " + window.navigator.language);