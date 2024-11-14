import './product.css';

const Product = ({ title, url, price }) => {
  console.log(title, url, price);

  return (
    <div>
      <img className='product_img' src={url}  />
      <div className='product_title'>{title}</div>
      <div> From {price}</div>
    </div>
  );
};

export default Product;
