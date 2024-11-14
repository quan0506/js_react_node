// *** Biến và kiểu dữ liệu (Variables and Data Types): Hiểu về var, let, const, 
// và các kiểu dữ liệu cơ bản như string, number, boolean, null, undefined, object, array.

// -> Biến (variables) là tên biểu tượng cho giá trị (value) và giá trị (value) của variables có thể thay đổi trong code
// -> Cách khai báo biến : let <tên biến>; và giá trị gán cho biến "language" sử dụng toán tử gán =
let language;
language = "C++";
console.log(language);

// let language = "Java"; -> cách viết khác, gán trực tiếp khi khai báo biến
// console.log(language);

// -> Nếu khai báo nhiều biến, có thể dùng dấu , để ngăn cách hoặc khai báo mỗi biến 1 dòng

let room = "A8",
subject = "C";

// let room = "A8",
// let subject = "C",

// -> Cách thay đổi giá trị value của biến số variables
let team = "man city"; // khai báo và gán variable ban đầu
console.log(team);

team = "man dan"; // thay đồi giá trị ban đầu
console.log(team)

// -> Có thể gán giá trị của biến này cho biến khác
let language1 = "Javascript";

let language2;
language2 = language1;
console.log(language2);
console.log(language1);

// Quy tắc đặt tên biến trong javascript và chuẩn hóa đặt tên biến 
// Các khái niệm liên quan camelCase, keywords , reserved words

// ** Các lỗi liên quan đến biến trong JS
// Khai báo 1 biến nhiều lần
// let x = "abc";
// let x = "xyz";
// ->Lỗi xuất hiện Uncaught SyntaxError : Identifier ...
// Gán value cho var trước khi khai báo

// -> Hằng trong Javascript là giá trị không đổi
// const <tên hằng> = <giá trị của hằng>;

const pii = 3.14159 // -> ví dụ
console.log(pii)

// ** Việc khai báo, đặt tên của hằng tương tự như với biến
// Một số lỗi có thể gặp khi sử dụng hằng

const pi; // Không gán giá trị khi khởi tạo = Uncaught SyntaxError : Missing initializer
pii = 100 // thay đổi giá trị của hằng mặc dù trước đó đã có giá trị = Uncaught TypeError : Assignment to constant

// *** Kiểu dữ liệu (Data Types) trong JavaScript là cách phân loại dữ liệu để ide hiểu về data type chúng đang dùng
// Tùy ngôn ngữ mà có phải chỉ rõ biến đó thuộc kiểu dữ liệu gì nhưng với JS là ko cần thiết
 let a = 999;
 console.log(a); // ưu điểm  : data type linh động giúp code linh hoạt hơn

 // ** Cú pháp in ra kiểu dữ liệu
 console.log(typeof variable) // variable là dữ liệu đã đc khai báo

 a = "Hi bro";
 console.log(a); // nhược điểm : nếu như nhiều code thì khó kiểm toán => tính toán sai

 // Các kiểu dữ liệu nguyên thủy (value ko đổi) bao gồm : bool, null, undefined, number, bigInt, string, symbol
 // Kiểu dữ liệu tham chiếu (tập hợp các thuôc tính (Key) và giá trị(value), tùy theo số key mà số value thay đổi) : object

// Boolean là kiểu dữ liệu logic chỉ bao gồm 2 giá trị true hoặc fale 
let isWebLoaded =  true;
console.log(isWebLoaded);

let isProgramRunning = false;
console.log(isProgramRunning);

// Null là kiểu dữ liệu đặc biệt, chỉ có giá trị null có thể hiểu là không có hoặc không biết giá trị
let nvalue = null;
console.log(nvalue)

// Undefined tương tự như null là giá trị đặc biệt , chỉ có giá trị undefined có thể hiểu là giá trị chưa đc gán
let uvalue = undefined;
console.log(uvalue)

// KHác nhau cơ bản của null và undefined
// -> Null là kiểu dữ liệu được gán cho biến, thường được hiểu là không biết, không có
// -> Undefined là giá trị mặc định của biến sau khai báo mà không phải gán giá trị cho biến
// -> có thể chủ động gán giá trị undefined cho biến, nhưng ko đúng ý nghĩa của kiểu undefined nên ko nên dùng cách này

let nuvalue = "abc";
console.log(nuvalue)

nuvalue = undefined // ko nên
console.log(nuvalue)

nuvalue = null; // nên
console.log(nuvalue)

// Number là kiểu dữ liệu dạng số.ko có cú pháp đặc biệt. Trong JS có 2 loại số : số nguyên và số thực
let n1 = 66; // số nguyên dương
let n2 = -66; // số nguyên âm
let n3 = 3.14; // số thực dương
let n4 = -3.14; // số thực âm
let n5 = 2e3; // => 2*10^3 = 2000
let n6 = 2e-3; // => 2*10^(-3) = 0.002
let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3

// Ngoài các loại số trên, còn 3 số đặc biệt là Infinity, -Infinity và NaN
// NaN (Not a Number) được dùng để đại diện cho những trường hợp tính sai hay phép tính có kết quả ko xác định

// BigInt ít khi đc sử dụng, biểu diễn giá trị cực lớn hoặc cực nhỏ của number
// Để biểu diễn kiểu BigInt cần thêm n phía sau 
const reallyBigNumber = 12345678987n;
console.log(reallyBigNumber); // 12345678987n

// String là kiểu dữ liệu để biểu diễn chữ văn bản text có thể biểu diễn bằng cách dùng "" '' ``
const stg1 = "String Js 1";
console.log(stg1)
console.log(typeof stg1)
// -> Trong "" không có kí tự nào thì gọi là empty string

// Symbol là kiểu dữ liệu nguyên thủy để tạo ra các giá trị duy nhất (unique value) và bất biến (immutable) thường làm key trong object

// Object là kiểu dữ liệu tham chiếu là tập hợp các cặp key(có dạng string hoặc symbol)-value(có data type bất kì)

// Cách xác định kiểu dữ liệu của biến - có 2 cú pháp  : dạng hàm - typeof(x) hoặc dạng toán tử - typeof x
// -> console.log(typeof(tên biến))

// Chuyển đổi kiểu dữ liệu trong JavaScript
// Chuyển sang String => Dùng hàm String(value) -> kết quả trả về là "...."
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// CHuyển sang Number => Dùng hàm Number(value)
// Number(null) = 0
// Number(undefined) = NaN
// Number(true) = 1
// Number(false) = 0
// Number("empty string") = 0
// Number("string") = NaN
// Number(" string number") = number

console.log(Number(" "));
console.log(Number(null));
console.log(Number(true) );
console.log(Number(false) );
console.log(Number("Hi bro"));
console.log(Number("99"));
console.log(Number(undefined));

// Chuyển sang Boolean => Dùng hàm Boolean(value)
// Boolean(số 0 , empty string, null, undefined, NaN ) => false,  còn lại là true
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(10));
console.log(Boolean("hi bro"));

// *** Toán tử (Operators): Các toán tử số học, so sánh, logic, gán, toán tử ba ngôi.
// Toán Tử là công cụ thao tác với dữ liệu, các đổi tương mà toán tử thao tác là toán hạng
// Toán tử 1 ngôi (unary - có 1 toán hạng) , 2 ngôi(binary - có 2 toán hạng) , 3 ngôi(ternary), đa ngôi (n-ary > 3 toán hạng)

// Toán tử số học thực hiện + - * / %(chia lấy dư) **(lũy thừa số mũ)
// Nếu toán tử số học có tring thì tự động chuyển kiểu dữ liệu thành number, nếu không chuyển được thì kq là đoạn string được tự động ghép hoặc NaN
console.log(7 + 3);
console.log('7' + 3);
console.log(7 - 3);
console.log(7 / 3);
console.log(7 ** 3);
console.log(7 * 3);
console.log('7a' + 3);
console.log('7a' % 3);

// Toán tử ghép string Nếu 1 trong 2 toán hạng là string thì chuyển cái còn lại về string rồi ghép chuỗi
console.log("hi" + 'bro');
console.log("hi" + 2);
console.log("hi" + false);

// Toán tử chuyển đổi kiểu dữ liệu thành number(+) -> + là unary thì + sẽ chuyển đổi toán hạng còn lại sang Number
// Không ảnh hưởng đến số
console.log(+1); // 1
// Chuyển đổi các kiểu dữ liệu khác thành số
console.log(+true); // 1
console.log(+false); // 0
console.log(+"abc"); // NaN
console.log(+""); // 0
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+{ x: 1 }); // NaN
console.log(+'99')

// Toán tử gán dùng để gán giá trị cho 1 biến hoặc hằng
// có thể gán giá trị cho biến bằng kết quả của 1 biểu thức hay gán cùng giá trị cho nhiều biến trên cùng dòng
let x1 = 5;
const mess = "hi";

let sum1 = x1 + 2+ 4 -3
console.log(sum1)

let x2, x3, x4;
x1 = x2 = x3 = x4 = 5;
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// Toán tử ++ và --

// Toán tử bitwise là toán tử áp dụng trên đối tượng bit bao gồm AND & ; OR | ; NOT ~ ; XOR ^ ; dịch trái << ; dịch phải >>
// Toán tử bitwise ít đc dùng trong lập trình

// Toán tử dấu phẩy => cho phép thực hiện 1 vài biểu thức cách nhau bằng dấu , tuy nhiên kết quả chỉ lấy ở biểu thức cuối cùng
let x = 3;
let y = ((x = x+3), x+4);
console.log(x)
console.log(y)

// -> Giải thích  x= x+3 thực hiện trước sau đó gán lại và in ra x, y được in ra là kết quả của x mới
let x = 3
x = x+3
let y = x+4
console.log(x)
console.log(y)

// Toán tử so sánh trong JS dùng để so sánh giá trị các toán hạng với nhau
// < , > , <= ,>= , bằng ko nghiêm ngặt == và bằng nghiêm ngặt === , khác ko nghiêm ngặt != và khác nghiêm ngặt !==
// => Tránh nhầm lẫn với toán tử gán có 1 dấu =  , toán tử so sánh có 2 hoặc 3 =
// => Kết quả của phép so sánh luôn là kiểu boolean  true or false
console.log(5 > 6); // false 
console.log(5 < 6); // true 
console.log(5 >= 6); // false 
console.log(5 <= 6); // true 
console.log(5 == 6); // false 
console.log(5 === 6); // false 
console.log(5 != 6); // true 
console.log(5 !== 6); // true 

// So sánh String trong Javascript- so ánh từng chữ cái 1 từ trái qua phải

// So sánh khác kiểu dữ liệu trong JS => js sẽ tự động chuyển toán hạng  sang number rồi so sánh
console.log("5" > 4); // true
console.log("01" == 1); // true
console.log("11" == 1); // false

// So sánh bằng nghiêm ngặt, JS sẽ không thực hiện chuyển đổi kiểu dữ liệu, hai giá trị khác kiểu dữ liệu thì luôn khác nhau
console.log("" == 0); // so sánh bằng không nghiêm ngặt

console.log("" === 0); // so sáng bằng nghiêm ngặt
// => Để tránh sai sót trong JS, nên sử dụng toán tử so sánh nghiêm ngặt === và !==

// So sánh null và undefined
// => null và undefined bằng nhau khi sử dụng toán tử == và luôn các giá trị còn lại
// Không nên sử dụng các toán tử >, <, >=, <= với null và undefined. Nếu các biến có thể bằng null/undefined thì nên check r xử lý
// Khi các biến khác null/undefined thì mới thực hiện so sánh

// Thứ tự ưu tiên của các toán tử so sánh là giống nhau và thứ tự thực hiện từ trái sang phải

// Toán tử logic là toán tử dùng 2 hay nhiều biểu thức, dùng check để kiếm tra logic, kết quả phụ thuộc vào giá trị của từng biểu thức và loại toán tử logic
// chỉ áp dụng cho kiểu dữ liệu bool và kết quả trả về cũng là giá trị boolean
// -> Những value khi chuyển về kiểu boolean có value true gọi là truthy
// -> Những value khi chuyển về kiểu boolean có value false gọi là falsy
// -> Hàm Boolean() dùng để chuyển value về kiểu boolean

// Toán từ logic trong JS
// - Toán tử OR || trả về giá trị true nếu có ít nhất 1 trong 2 toán hạng là true và ngược lại trả về false
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 

// Quy trình xử lý toán tử OR || sẽ tìm và trả về giá trị truthy đầu tiên
// Quy trình xử lý toán tử OR thực hiện từ trái snag phải
// * Lần lượt chuyển mỗi toán hạng về boolean. Nếu true thì trả về value gốc của toán hạng đó và dừng lại
// * Nếu false thì tiếp tục thực hiện với toán hạng tiếp theo
// * Nếu ko có truthy nào thì kq trả về là value của toán hạng cuối cùng

// - Toán tử AND && sẽ trả về true nếu cả 2 toán hạng là true và ngược lại sẽ trả về false
console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 
// Toán tử AND sẽ tìm và trả về giá trị falsy đầu tiên. 
// Nếu không có falsy nào thì kq sẽ là value của toán hạng cuối cùng.

// * Thứ tự thực hiện từ trái sang phải.
// * Lần lượt chuyển mỗi toán hạng về kiểu boolean. Nếu false thì trả về giá trị gốc của toán hạng đó và dừng lại.
// * Nếu kết quả là true thì tiếp tục thực hiện với toán hạng tiếp theo.
// * Nếu không có giá trị falsy nào thì kết quả trả về là giá trị của toán hạng cuối cùng.

// Toán tử NOT ! sẽ trả về true nếu toán hạng là false và ngược lại
console.log(!true); 
console.log(!false); 

// Quy trình xử lý toán tử NOT, chuyển giá trị về toán hạng bool là true hoặc false
// Sau đó trả về giá trị ngược lại

// Thứ tự thực hiện
// -> So với các toán tử đã học thì toán tử logic có độ ưu tiên thấp hơn
// -> trong toán tử logic thì NOT có độ ưu tiên max, sau đó đển AND và cuối cùng là OR

// *** Câu điều kiện (Conditional Statements): Sử dụng if, else if, else, và toán tử ba ngôi để đưa ra quyết định.
// if(...) kiểm tra đk trong ngoặc, nếu true thì thực thi lệnh(có thể trong dấu ngoặc nhọn)
const x = 2;
if(x % 2 === 0) {
    console.log("even number");
    console.log("nice");
}

// else(...) dùng để thực thi khối lệnh nếu đk trong if là falsy
const a =3;
if(a%2 === 0){
    console.log("even number");
}else{
    console.log("odd number")
} 

// switch case là cấu trúc rẽ nhánh dùng để xác định list case(trường hợp) và khối lệnh tương ứng
// Khi value đang xét === với case nào khi code của case đó được chạy

switch(x) {
    case 'value1':  // if (x === 'value1')
      // code
      [break]
    case 'value2':  // if (x === 'value2')
      // code
      [break]
    default:
      // code
      [break]
  }

// trong đó x đc kiểm tra === với value1 , value2,...
// Khi check đc value thỏa mãn thì code từ case đó thực hiện đến break gần nhât => end switch case
// ko có case nào thỏa mãn thì khối lệnh default đc thực thi và break là ko bắt buộc, nếu ko có break thì code sau case 5 đc chạy

const x = 2 + 3;

switch (x) {
  case 4:
    console.log("Less than");
    break;
  case 5:
    console.log("Equal");
    break;
  case 6:
    console.log("Greater than");
    break;
  default:
    console.log("Don't know the answer");
}

//switch và case đều có thể chứa biểu thức ko nhất thiết là biến variable hay hằng constant
let x = "3";
let v = 0;

switch (x - 1) {
  case v + 1:
    console.log("case 1");
    break;
  case v + 2:
    console.log("case 2");
    break;
  default:
    console.log("default");
}

// Nhóm các case, nếu code trong các case giống nhau thì có thể gộp các case này lại với nhau và bỏ break
const n = 5;

switch (n-1){
    case 2:
    case 3:
        console.log("sai");
        break;
    case 4:
        console.log("nice");
        break;
    case 5:
        console.log("no");
        break;
    default:
        console.log("bye");
}

// Toán tử rẽ nhánh ? trong JS giúp đơn giản câu đk if else
// => const result = conddition ? value1 : value2;
// đây là toán tử 3 ngôi gồm condition : đk cần check, value1 là value trả về nếu đk true, value2 là value trả về nếu đk false
const age = 24;
const enoughAge = age <18 ? false :true;
console.log(enoughAge)
// or 
const age = 24;
const enoughAge = age >=18 ;
console.log(enoughAge)

// Thay thế nhiều mệnh để if else = các toán tử ?
const ages =24;

// if(ages <18){
//     console.log("Too young");
// }else if(ages >50){
//     console.log("old");
// }else{
//     console.log("nice");
// }

const zin = (ages<18) ? "Young" : (ages >50) ? "Old" : "nice";
console.log(zin)
// Toán tử ? thường dùng để gán value cho 1 biến dựa trên đk, nên dùng ? để code rõ ràng, dễ hiểu

// Toán tử ?? Nullisg Coalescing là toán tử 2 ngôi, trả về value null hoặc undefined đầu tiên
// ?? có độ ưu tiên cao hơn = và ? nhưng độ ưu tiên thấp hơn các toán tử còn lại và ko đc dùng cùng với || và &&

// *** Vòng lặp (Loops): Hiểu cách sử dụng for, while, do...while để lặp qua các phần tử.
// Vòng lặp for (for loops) được sử dụng khi bạn biết rõ số lần lặp hoặc khi bạn muốn lặp qua một mảng hoặc đối tượng với số lần xác định.
for (khởi_tạo; điều_kiện; cập_nhật) { 
    // code được thực thi trong mỗi vòng lặp
}

// khởi_tạo: set first value cho biến điều khiển vòng lặp.
// điều_kiện: condition is checked before each loop. If (true), loop will countinue; if (false), loop end.
// cập_nhật: Thay đổi giá trị của biến điều khiển sau mỗi lần lặp (thường là tăng ++ hoặc giảm --).

for(let xn = 0; xn < 6; xn++){
    console.log('lặp lần thứ', + xn)
}

// Vòng lặp while (while loops) được sử dụng khi bạn muốn lặp đi lặp lại một đoạn mã cho đến khi điều kiện trở nên sai. 
// Điều kiện của vòng lặp được kiểm tra trước khi thực hiện vòng lặp, nghĩa là nếu điều kiện sai ngay từ đầu, vòng lặp sẽ không thực hiện lần nào.
while (điều_kiện) { // điều_kiện:có thể là biểu thức hoặc biến đc check trước mỗi lần lặp. Nếu đúng, vòng lặp tiếp tục, nếu sai vòng lặp dừng lại.
    // code được thực thi nếu điều kiện đúng
}

let countl = 1;
while (countl <=3){
    console.log(countl);
    countl++
}

// Khởi tạo value countl = 1
// Kiểm tra điều kiện nếu count <=3 đúng thì ghi ra số count
// Tiếp tục tăng countl thêm 1, bắt đầu kiểm tra lại, nếu đúng thì in ra countl
// Đến khi count <= 3 thì dừng lại
// nếu ko có countl++ thì giá trị value = 1 luôn đúng vs condition => vòng lặp vô hạn

// do...while (do while loops) rất giống với while, khác biệt là nó luôn thực thi ít nhất một lần ngay cả khi điều kiện sai ngay từ đầu, 
// vì điều kiện được kiểm tra sau khi vòng lặp đã thực hiện.
do {
    // code được thực thi ít nhất một lần
} while (điều_kiện);
// điều_kiện: Được kiểm tra sau mỗi lần lặp. Nếu điều kiện đúng, vòng lặp tiếp tục; nếu không, vòng lặp dừng.

let count2 = 3;

do{
    console.log(count2);
    count2++;
} while (count2 <=7);

// Các vòng lặp lồng nhau (Nested Loops): có thể lồng các vòng lặp với nhau để xử lý các cấu trúc dữ liệu phức tạp hơn, như ma trận (mảng hai chiều).
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// break: Dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
// continue: Dùng để bỏ qua phần còn lại của vòng lặp hiện tại và bắt đầu vòng lặp tiếp theo.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
      break; // Thoát khỏi vòng lặp khi i là 3
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
      continue; // Bỏ qua vòng lặp hiện tại khi i là 3
  }
  console.log(i);
}

// *** Hàm (Functions): Khai báo hàm với function, arrow function, và hiểu về tham số, giá trị trả về.

// Hàm (Functions) trong JS là một khối mã thực hiện một tác vụ cụ thể. Một hàm có thể nhận tham số, xử lý dữ liệu và trả về kết quả.
// Hàm có thể đc tái sử dụng và dùng đc ở nhiều nới, giúp code ngắn gọn, dễ phát triển

function tên_hàm(tham_số_1, tham_số_2, ...) {
    // mã lệnh thực hiện
    return giá_trị_trả_về;
}
// tên_hàm: Tên hàm, có thể được gọi ở bất kỳ đâu trong chương trình.
// tham_số_1, tham_số_2,(parameters)...: Danh sách các tham số (tùy chọn) mà hàm sẽ nhận vào.
// return: Giá trị mà hàm sẽ trả về (nếu có). Nếu không có return, hàm mặc định sẽ trả về undefined.
function tich2so(a,b){
    return a*b;
}
let kq1 = tich2so(2,3)
console.log(kq1) 

console.log(tich2so(3,4))

function displaymessa(){ // Các hàm ko có tham số hay giá trị return trả về
    console.log("suprise!!!");
}
displaymessa();

// biến ngoài hàm hay biến cục bộ hay biến địa phương là Biến được khai báo trong thân hàm thì đc gọi 
function sayHello() {
    const message = 'Hello bro' // biến cục bộ
    console.log(message);
}
  
sayHello() ;
  
console.log(message); // khi truy cập vào các biến cục bộ ở ngoài hàm thì có lỗi 

// Biến ngoài hàm có thể thay đổi giá trị trong thân hàm, nếu trong hàm có biến trùng tên thì biến ngoài hàm bị bỏ qua
// Biến toàn cục :Một biến được khai báo có thể được sử dụng và thay đổi giá trị ở mọi nơi trong code. nên hạn chế sử dụng biến toàn cục.

// truyền tham số vào hàm : được dùng trong TH sử dụng value bên ngoài vào trong thân hàm
function sayHi(message){
    console.log(message)
}

sayHi("1234!!!")
sayHi("ádfsdg")
// KHi truyển tham số vào hàm(-object là kiểu dữ liệu tham chiếu), func luôn thực hiện copy data mà ko làm thay đổi value biến bên ngoài

// Giá trị tham số mặc định là undefined đối với hàm có tham sồ mà ko truyền giá trị khi gọi hàm
// Return trong JS có thể đặt trong thân hàm, khi gặp return thì hàm dừng lại và trả về giá trị sau return

// Cách đặt tên hàm và sự phát sinh của hàm trong chương trình
// Pure function(hàm thuần khiết) và non-pure function(hàm ko thuần khiết)
// Pure function là hàm ko phụ thuộc vào yếu tố bên ngoài (biến toàn cục hay môi trường code) là 1 hàm tốt dễ bảo trì 
function pureFunc(number, factor) {
    return number * factor
  }
  
  let ret = pureFunc(2, 10)
  console.log(ret) // 20

// Biểu thức hàm (Function Expressions) là hàm được định nghĩa dưới dạng 1 biểu thức, hàm này sẽ đc lưu vào biến và gọi qua biến đó
const tên_biến = function(tham_số_1, tham_số_2, ...) {
    // mã lệnh thực hiện
    return giá_trị_trả_về;
};

const nhan2so = function(a,b){
    return a*b;
}

let kq2 = nhan2so(3,4)
console.log(kq2);

// Đặc điểm của function expression: Có thể gán nó cho 1 biến khác vì biểu thức hàm cũng là 1 giá trị

// *** Hàm callback hay hàm gọi lại là hàm được truyền vào 1 hàm khác làm đối số và đc gọi lại sau khi hàm ban đầu hoàn thành công việc của nó
function ask(question, handleYes, handleNo) {
    const answer = confirm(question);
    if (answer) {
        handleYes(); // hàm được gọi nếu câu trả lời là yes
    } else {
        handleNo(); //  hàm đc gọi nếu trả lời là no
    }
}

function handleYes() {
    console.log("choose Yes!");
}

function handleNo() {
    console.log("choose No!");
}

ask("Continue Program?", handleYes, handleNo);

// Giải thích : hàm confirm bật ra một hộp thoại hỏi  "...?".
// Nếu người dùng chọn OK thì giá trị answer là true và hàm handleYes được gọi và ngược lại
// hai tham số handleYes và handleNo gọi là hàm callback 

// Function declaration được xử lý trước khi code chạy đến đó,có phạm vi trong block,có thể gọi hàm ở bất kỳ đâu trong block.
// Function expression được tạo ra tại thời điểm chương trình chạy đến vị trí khởi tạo hàm. Nên bạn chỉ gọi được hàm sau khi đã khởi tạo.

// Hàm mũi tên (Arrow Function) là hàm sử dụng kí tự => để khai báo hàm, giúp việc khai báo hàm trở nên ngắn gọn hơn.
const tên_biến = (tham_số_1, tham_số_2, ...) => {
    // mã lệnh thực hiện
    return giá_trị_trả_về;
};
let func = (arg1, arg2,..., argN) => expression; // cách viết khác của arrow function

// Arrow function trên nhận vào danh sách tham số (arg1, arg2,..., argN), thành phần expression được xử lý và trả về giá trị của expression.
// Trường hợp có dấu {}, bạn cần sử dụng thêm từ khóa return để trả về giá trị của hàm.
// Arrow function có thể được sử dụng giống như function expression.

let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
let welcome = isVietnamese
  ? () => console.log("Chào bạn!")
  : () => console.log("Hello!");
welcome();
// sử dụng arrow function làm hàm callback:
function ask(question, handleYes, handleNo) {
  const answer = confirm(question);
  if (answer) {
    handleYes();
  } else {
    handleNo();
  }
}

ask(
  "Bạn muốn tiếp tục thực hiện chương trình không?",
  () => console.log("Bạn đã chọn Yes!"),
  () => console.log("Bạn đã chọn No!")
);


// Đối tượng (Objects): Hiểu về object, properties và method. Hiểu cách truy cập access và change value của properties trong object.
// Object là tập hợp các key và value với key là thuộc tính, value là giá trị tương ứng của thuộc tính
// {
//     key1: value1, trong đó key1, key2,... là tên các thuộc tính, có kiểu dữ liệu string hoặc symbol
//     key2: value2, value 1, value2,... là giá trị tương ứng của các thuộc tính và có thể có bất kỳ kiểu dữ liệu nào
//     ..., các cặp key-value được ngăn cách nhau bởi dấu phẩy
// }

let myComputer = {
    type: "laptop",
    brand: "Sony",
    os: "Windows 7",
    'graphic Card': "NVIDIA",
};

// có 2 cách lấy giá trị của 1 thuộc tính trong object: sử dụng toán tử ., phía sau là tên thuộc tính hoặc toán tử [],bên trong là tên thuộc tính
console.log(myComputer.type)
console.log(myComputer.brand)
console.log(myComputer["graphic Card"])

// Update JS object
// Update value object bằng cách truy cập vào object và gán giá trị cho thuộc tính đó
myComputer.type = "laptopxxx"
myComputer["graphic Card"] = "NVIDIAA"

console.log("New type " + myComputer.type)
console.log("New card " + myComputer["graphic Card"])

// Add key for object
myComputer.status = "sleep",
console.log(myComputer.status)

delete myComputer.status // xóa 1 thuộc tính trong Object
// Khi xóa 1 key trong object thì value của key vừa xóa trở thành undefined

// toán tử [] trong object JS : JS cho phép truy cập vào thuộc tính của giá trị là biến hoặc biểu thức
// value của key đc tính toán thời gian chạy runtime
let myComputer = {
    type: "laptop",
    brand: "Sony",
    "operating system": "Windows 7",
    "graphic card": "NVIDIA",
  };
  
  // sử dụng biến
  let operatingSystem = "operating system";
  console.log(myComputer[operatingSystem]); // Windows 7
  // sử dụng biểu thức
  console.log(myComputer["graphic" + " " + "card"]); // NVIDIA

// Khởi tạo thuộc tính runtime cho object bằng toán tử []
let t = "type"; // tạo 2 biến và gán giá trị
const operatingSystem = "operating system";

let myComputer = {
  [t]: "laptop",// truyền 2 giá trị làm key và thêm value cho các key tương ứng
  brand: "Sony",
  [operatingSystem]: "Windows 7",
  ["graphic" + " " + "card"]: "NVIDIA",
};

console.log(myComputer.type); 
console.log(myComputer["operating system"]); 

// ** Cú pháp rút gọn thuộc tính khi tạo object
// ** giới hạn về tên thuộc tính của object trong JS
// ** Cách kiểm tra tính tồn tại của thuộc tính
let user = {
    name: undefined,
  };
  
console.log("name" in user); 
console.log("age" in user); 
// trong ví dụ trên trong object có tồn tại name với value = undefined và không tồn tại age
// toán tử in với tên thuộc tính ở bên trái, thường đặt trong cặp dấu '', kq trả về là true(tồn tại) hoặc false(ko tồn tại)

// Cách duyệt tất cả các thuộc tính của object sử dụng vòng lặp for ...in 
let myComputer = {
    type: "laptop",
    brand: "Sony",
    "operating system": "Windows 7",
    "graphic card": "NVIDIA",
  };
  
  for (let prop in myComputer) { // prop sẽ chạy hết tất cả các thuộc tính của object
    console.log(prop, ":", myComputer[prop]);
  }
  
// ** thứ tự các thuộc tính của Object trong JS
// Một số đổi tượng có sẵn trong JS
// => Arguments là biến số dặc biệt được thêm vào bên trong phạm vi hàm, có thuộc tính length để xác định số lượng tham số truyền vào
// arguments là đối tượng dạng mảng (ko phải mảng thật sự) chứa tất cả các đối số đc truyền vào hàm, có thể duyệt qua nó bằng chỉ số như mảng

function maxof(){
    let max = -1; // khởi tạo giá trị để ss với các đối số đc truyền vào hàm

    for(let i = 0; i < arguments.length; i++){ 
        if(arguments[i] >max) max = arguments[i]; 
        // mỗi lần lặp sẽ ss giá trị với phần tử hiện tại arguments[i] với giá trị của max
        // nếu lớn hơn max thì max =  giá trị hiện tại
    }

    return max;
}

console.log(maxof(1,3,6,7,4,9))

// *** Đồi tượng Math phục vụ cho tính toán số học, giảm bớt thời gian như .min(gtnn); .max(gtln); .sqrt(căn bậc hai); .abs(giá trị tuyệt đối)
// Đồi tượng Global : Object lớn nhất chính là window. Mọi biến global đều thuộc đổi tượng này
var xg =6;
console.log("xg" in window);
console.log(window.xg)

// *** So sánh 2 object trong Javascript
// Object lưu trữ dữ liệu theo kiểu tham chiếu, khi gán 1 object cho 1 biến, tức là biến đó đang lưu địa chỉ trong bộ nhớ của object

// Vì vậy, việc so sánh 2 object trong JavaScript là dựa trên địa chỉ của object.

// So sánh object bằng tham chiếu: sử dụng toán tử ==, === hoặc hàm Object.is.
// So sánh object qua giá trị cách thủ công: so sánh giá trị từng thuộc tính giữa hai object.
// So sánh nông (shallow equality): duyệt tất cả các thuộc tính trong mỗi object để so sánh giá trị tương ứng theo một cấp độ.
// So sánh sâu (deep equality): duyệt tất cả các thuộc tính trong mỗi object theo tất cả các cấp độ (sử dụng thuật toán đệ quy) để so sánh giá trị ứng với các thuộc tính.
let user1 = {
    name:"john",
};

let user2 = {
    name:'alce',
}; 

function sayHello(){
    console.log(this.name);
}

user1.sayHi = sayHello;
user2.sayHi = sayHello;
user1.sayHi();
user2.sayHi();

// Mảng (Arrays): Làm việc với mảng, các phương thức như map(), filter(), reduce(), forEach(), find(),...
// Mảng trong JS là một list có thứ tự, trong đó mỗi phần tử có một chỉ mục (index) bắt đầu từ 0.
let fruitu = ['apple', 'banana', 'orange']; // Sử dụng dấu ngoặc vuông []
let fruito = new Array('pineapple', 'coconut', 'ichigo'); // Sử dụng từ khóa new Array():
console.log(fruito)

// Giá trị thuộc array có thể thuộc bất kì loại kiểu dữ liệu nào và method .length dể đưa ra chiều dài
let arr = [
  "a", 
  1,
  null, 
  undefined, 
  { x: 1 }, 
  function () {
    console.log("hello");
  },
];

// length có giá trị là độ dài mảng = chỉ số max và length tăng giảm tương ứng khi thêm/ xóa ptu trong array
// có thể thay đổi giá trị trực tiếp length. Nếu length bị giảm đi => array bị ngắn lại
console.log(arr.length)
// giá trị tại chỉ số 4 là object { x: 1}
console.log(arr[4].x); // 
// giá trị tại chỉ số 5 là hàm
arr[5](); // hello

// Duyệt và in ra tất cả các phần tử trong mảng
for(let i =0; i < arr.length; i++){
  console.log(arr[i])
}

let letters = ["a", "b", "c"];

for (let value of letters) { // vòng lặp for of không quan tâm đến chỉ số , dùng for in không sai nhưng có vấn đề
  console.log(value);
}

// Thêm phần tử vào mảng với push(): 
let fruita = ['apple', 'banana'];
fruita.push('orange'); // mặc định thêm vào cuối mảng

// unshift(): Thêm phần tử vào đầu mảng.
let fruitb = ['banana', 'orange'];
fruitb.unshift('apple');  

// pop(): Xóa phần tử cuối cùng của mảng.
let fruitc = ['apple', 'banana', 'orange'];
fruits.pop(); 
console.log(fruitc) 

// shift(): Xóa phần tử đầu tiên của mảng.
let fruite = ['apple', 'banana', 'orange'];
console.log(fruite.shift());  

// có thể truy cập phần tử trong mảng thông qua chỉ mục (index).
let fruitf = ['apple', 'banana', 'orange'];
console.log(fruitf[1]);  

// Dùng for loop Duyệt qua các phần tử trong mảng
let fruitk = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruitk.length; i++) {
    console.log(fruits[i]);
}

// forEach(): là method đc sử dụng để duyệt qua từng phần tử trong mảng , thực hiện 1 hàm cho mỗi phần tử
array.forEach(function(currentValue, index, array) {
  // hành động với từng phần tử
});

// currentValue: Giá trị của phần tử hiện tại đang được duyệt qua.
// index (không bắt buộc): Chỉ mục (vị trí) của phần tử hiện tại trong mảng.
// array (không bắt buộc): Mảng gốc mà phương thức forEach đang được gọi.

const fruit1 = ['apple', 'banana', 'orange'];
fruit1.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});

// Không trả về giá trị: forEach không thể dừng hoặc thoát ra giữa chừng, nó sẽ chạy qua toàn bộ mảng.
// Không trả về mảng mới: Nếu bạn cần một mảng mới dựa trên các phần tử trong mảng gốc, bạn nên sử dụng map.

// find(): Tìm phần tử đầu tiên thỏa mãn điều kiện.
let number1 = [1, 2, 3, 4, 5];
let found = number1.find(number => number > 3);  

// findIndex(): Tìm chỉ mục của phần tử đầu tiên thỏa mãn điều kiện.
let number2 = [1, 2, 3, 4, 5];
let index1 = number2.findIndex(number => number > 3);  

// filter(): Lọc các phần tử thỏa mãn điều kiện.
let number3 = [1, 2, 3, 4, 5];
let filtered = number3.filter(number => number > 3);  

// Chuyển đổi và xử lý mảng vói map(): Tạo một mảng mới bằng cách áp dụng một hàm cho từng phần tử của mảng cũ.
let number4 = [1, 2, 3];
let doubled = number4.map(number => number * 2);  

// reduce(): Tính toán một giá trị duy nhất dựa trên tất cả các phần tử trong mảng.
let number5 = [1, 2, 3, 4];
let sum = number5.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

// Kiểm tra phần tử trong mảng includes(): Kiểm tra xem một phần tử có tồn tại trong mảng hay không.
let fruit6 = ['apple', 'banana', 'orange'];
console.log(fruit6.includes('banana'));
console.log(fruit6.includes('durian'))

// some(): Kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện hay không.
let number7 = [1, 2, 3, 4, 5];
let hasNumberGreaterThan3 = number7.some(number => number > 3);  
console.log(hasNumberGreaterThan3)
console.log(number7.some(number => number > 5))

// every(): Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện hay không.
let number8 = [1, 2, 3, 4, 5];
let allNumbersGreaterThan0 = number8.every(number => number > 0);  // true
console.log(allNumbersGreaterThan0)

// Sắp xếp mảng sort(): Sắp xếp các phần tử trong mảng. -- Mặc định sắp xếp dưới dạng chuỗi.
let fruit9 = ['banana', 'apple', 'orange'];
console.log(fruit9.sort());  // ['apple', 'banana', 'orange']

// Sắp xếp số:
let numberq = [4, 2, 5, 1, 3];
console.log(numberq.sort((a, b) => a - b));
  // [1, 2, 3, 4, 5]

// reverse(): Đảo ngược thứ tự các phần tử.
let numbere = [1, 2, 3, 4, 5];
console.log(numbere.reverse());  // [5, 4, 3, 2, 1]

// Tách và nối mảng slice(): Trích xuất một phần của mảng mà không thay đổi mảng gốc.
let fruiti = ['apple', 'banana', 'orange', 'grape'];
let citrus = fruiti.slice(1, 3);  // ['banana', 'orange']
console.log(citrus)

// splice(): Thêm, xóa hoặc thay thế các phần tử trong mảng (thay đổi mảng gốc).
arr.splice(start[, deleteCount, elem1,..., elemN]); //cú pháp

let fruitz = ['apple', 'banana', 'orange'];
console.log(fruitz.splice(1, 1, 'grape'));  

// concat(): Nối hai hoặc nhiều mảng lại với nhau.
let arr1 = [1, 2];
let arr2 = [3, 4];
let result1 = arr1.concat(arr2); 
console.log(result1)

// Phương thức khác của mảng join(): Nối tất cả các phần tử của mảng thành một chuỗi.
let fruitm = ['apple', 'banana', 'orange'];
let resultm = fruitm.join(', ');  // 'apple, banana, orange'
console.log(resultm)

// indexOf(): Trả về chỉ mục của phần tử đầu tiên khớp, nếu không tìm thấy trả về -1.
let fruitl = ['apple', 'banana', 'orange'];
let indexl = fruitl.indexOf('banana');  
console.log(indexl)

// lastIndexOf(): Tương tự như indexOf, nhưng tìm kiếm từ cuối mảng.
let numbers = [1, 2, 3, 1, 2];
let index = numbers.lastIndexOf(1); 

