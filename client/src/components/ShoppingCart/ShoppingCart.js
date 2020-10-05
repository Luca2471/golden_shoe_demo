import React from "react";
import "./ShoppingCart.scss";
import Footer from "../Footer/Footer";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const costs = cart.map((product) => product.price);

  return (
    <section className="main-container">
      <h1 className="cart-title">Your basket</h1>
      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-item-grouped">
            {cart &&
              cart.map((product, index) => (
                <div key={product._id} className="cart-items">
                  <div className="item-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="item-details">
                    <h1>{product.brand}</h1>
                    <p>{product.model}</p>
                    <p>Size: {product.size[0]}</p>
                    <p>£{product.price}</p>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="cart-footer">
          <div className="total-container">
            <div className="total">
              Total: £{costs.length > 0 && costs.reduce(reducer)}
            </div>
            <div className="checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ShoppingCart;
