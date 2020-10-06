import React from "react";
import "./ShoppingCart.scss";
import Footer from "../Footer/Footer";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const NextDayDeliveryDate = () => {
    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return tomorrow.toDateString();
  };

  const StandardDeliveryDate = () => {
    let currentDayThree = new Date();
    let currentDayFive = new Date();
    currentDayThree.setDate(new Date().getDate() + 3);
    currentDayFive.setDate(new Date().getDate() + 5);
    return `${currentDayThree.toDateString()} - ${currentDayFive.toDateString()}`;
  };

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
          <div className="delivery-container">
            <div className="delivery-options">
              <div className="delivery-input">
                <input
                  type="radio"
                  value="Next Day Delivery"
                  name="delivery"
                ></input>
                <label>Next Day Delivery</label>
                {cart.length > 0 ? (
                  <NextDayDeliveryDate />
                ) : (
                  "No items in basket"
                )}
              </div>
              <div className="delivery-input">
                <input
                  type="radio"
                  value="Standard Delivery"
                  name="delivery"
                ></input>
                <label>Standard Delivery</label>
                {cart.length > 0 ? (
                  <StandardDeliveryDate />
                ) : (
                  "No items in basket"
                )}
              </div>
            </div>
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
