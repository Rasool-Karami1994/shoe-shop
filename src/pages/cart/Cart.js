import { useCartContext } from "../../context/CartProvider";
import "./Cart.css";
import cartEmptyImg from "../../assets/img/cart-empty2.PNG";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const redirector = () => {
    navigate("/");
  };
  //destructure cart from datas recived by useCartContext hook
  const { cart } = useCartContext();
  // console.log(cart);
  if (!cart.length) {
    return (
      <div className="cart-empty-container">
        <button onClick={redirector} className="back-button">
          <IoIosArrowBack />
        </button>
        <div className="cart-empty-card">
          <img
            src={cartEmptyImg}
            alt="empty cart"
            className="empty-cart-img"
          ></img>
          <h2 className="empty-cart-h2">
            Your cart is empty <span>{" : )"}</span>
          </h2>
          <button className="empty-cart-btn" onClick={redirector}>
            Go to shopping
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <button onClick={redirector} className="back-button">
          <IoIosArrowBack />
        </button>
        <section className="cart-list-container">
          <div className="cart-Delivery-box">
            <h4>Free Delivery for Members</h4>
            <p>
              Become a member to get fast and free delivery{" "}
              <span>
                <a href="/">JoinUs</a>
              </span>{" "}
              or{" "}
              <span>
                <a href="/">SignIn</a>
              </span>
            </p>
          </div>
          {cart.map((item) => (
            <div className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img"
              ></img>
              <div>
                <p className="cart-item-name">{item.name}</p>
                <div className="cart-item-control">
                  <div className="cart-item-qnt-control">
                    <button
                      className={
                        item.quantity === 1
                          ? "cart-control-red"
                          : "cart-control-icons"
                      }
                    >
                      <MdKeyboardArrowDown />
                    </button>
                    <p>{item.quantity}</p>
                    <button className="cart-control-icons">
                      <MdKeyboardArrowUp />
                    </button>
                  </div>
                  <button className="cart-control-red">
                    <MdDelete />
                  </button>
                </div>
              </div>
              <p className="cart-item-price">$ {item.offPrice}</p>
            </div>
          ))}
        </section>
        <section className="cart-summery-container">
          <div className="cart-summery">
            <h4>Summary</h4>
            <div>
              <p>Price</p>
              <span>$ 0</span>
            </div>
            <div>
              <p>off</p>
              <span>$ 0</span>
            </div>
            <div className="cart-summeery-text">
              <p>Total</p>
              <span>$ 0</span>
            </div>
            <button>Checkout</button>
          </div>
        </section>
      </div>
    );
  }
};

export default Cart;

//   <section className="cart-items-list-container" key={item.id}>
//     <div className="cart-items">
//       <img src={item.image} alt={item.name}></img>
//       <div>
//         <p>{item.name}</p>
//         <div>
//           <button>+</button>
//           <p>{item.quantity}</p>
//           <button>-</button>
//         </div>
//         <button>delete</button>
//       </div>
//       <p>{item.offPrice}</p>
//     </div>
//   </section>

//   <section className="cart-summery-container">
//     <div className="Cart-summery">
//       <h4>Summary</h4>
//       <p>
//         Price <span>{item.price}</span>
//       </p>
//       <p>
//         {" "}
//         Off <span>{item.off}</span>
//       </p>
//       <p>
//         Total <span>{item.offPrice}</span>
//       </p>
//       <button>Checkout</button>
//     </div>
//   </section>
// </> */
