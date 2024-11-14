#### 4. Routing trong React
* BrowserRouter và HashRouter: Cách thức điều hướng.

- BrowserRouter sử dụng HTML5 History API để tạo URL thân thiện mà không có dấu #, là loại phổ biến nhất cho các app React vì nó thân thiện với SEO.

// App.js
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Các Routes sẽ đặt ở đây */}
      </div>
    </BrowserRouter>
  );
}

export default App;

- HashRouter sử dụng ký hiệu # trong URL (ví dụ: http://example.com/#/about), thường được dùng khi không có quyền kiểm soát server, vì URL sau # không được gửi đến server.

// App.js
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Các Routes sẽ đặt ở đây */}
      </div>
    </HashRouter>
  );
}

export default App;

* Routes và Route: Định nghĩa các đường dẫn. giúp định nghĩa các đường dẫn của ứng dụng. Bên trong Routes, mỗi Route sẽ đại diện cho một trang hoặc một component dựa trên đường dẫn URL.

// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
         / sẽ hiển thị component Home.
        <Route path="/about" element={<About />} />
        /about sẽ hiển thị component About.
      </Routes>
    </BrowserRouter>
  );
}

export default App;

* Link và NavLink: Điều hướng mà không cần tải lại trang.

- Link là thành phần để tạo liên kết mà không tải lại trang. Thay vì sử dụng <a href="">, bạn dùng <Link to="">.

// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

- NavLink tương tự như Link, nhưng cung cấp thêm class cho link khi nó được active (đường dẫn hiện tại trùng với URL).


// Navbar.js
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    khi ở trang /about, link đến About sẽ tự động có thêm class "active", giúp dễ dàng tùy chỉnh giao diện.
    </nav>
  );
}

export default Navbar;

* useNavigate và useParams: Điều hướng và lấy tham số từ URL.

- useNavigate là hook dùng để điều hướng user từ component này sang component khác khi xảy ra một sự kiện (như bấm nút).

// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;

- useParams giúp lấy tham số từ URL, thường được dùng trong các route động.

// Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product ID: {productId}</h1>
    </div>
  );
}

export default Product;

Với cấu hình route sau:
<Route path="/product/:productId" element={<Product />} />
Nếu bạn truy cập vào /product/123, component Product sẽ hiển thị Product ID: 123.
