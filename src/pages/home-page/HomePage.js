import "./HomePage.css";
import * as data from "../../data";
const HomePage = () => {
  return (
    <section className="products-list-container">
      {data.products.map((product) => (
        <div className="product-container">
          <span className="products-off">${product.discount}</span>
          <div className="product-card">
            <img
              className="product-img"
              src={product.image}
              alt="product-img"
            ></img>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button className="products-btn">Add to cart</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomePage;
