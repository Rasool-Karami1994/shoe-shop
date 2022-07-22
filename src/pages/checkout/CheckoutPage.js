import "./CheckoutPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };

  const { cart, total } = useCartContext();
  // if (!cart.length) {
  //   redirector();
  // } else {
  return (
    <div className="checkout-card-container">
      <button onClick={redirector} className="back-button">
        <IoIosArrowBack />
      </button>
      <div className="checkout-card">
        <div className="checkout-content-first">
          {cart.map((item) => (
            <div className="checkout-cart-item" key={item.id}>
              <div>
                <span className="checkout-badge">{item.quantity}</span>
                <img src={item.image} alt={item.name}></img>
              </div>
              <p>{item.name}</p>
              <p>$ {item.offPrice}</p>
            </div>
          ))}
        </div>
        <div className="checkout-content-second">
          <div>
            <p>Subtotal</p>
            <span>$ {total}</span>
          </div>
          <div>
            <p>Shipping</p>
            <span>$ 8</span>
          </div>
        </div>
        <div className="checkout-content-third">
          <p>Total</p>
          <span>$ {8 + total} </span>
        </div>
        <button className="place-order-btn" onClick={() => navigate("/signup")}>
          Place Order
        </button>
      </div>
    </div>
  );
};
// };

export default CheckoutPage;
