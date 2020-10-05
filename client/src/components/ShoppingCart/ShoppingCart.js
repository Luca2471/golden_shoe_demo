import React from "react";
import "./ShoppingCart.scss";
import Footer from "../Footer/Footer";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const costs = cart.map((product) => product.price);

  return (
    <div>
      {cart &&
        cart.map((product, index) => (
          <div key={product._id}>
            {product.brand}
            {product.img}
            {product.model}
            <button onClick={() => removeFromCart(index)}>remove item</button>
          </div>
        ))}
      <div>grand total: {costs.length > 0 && costs.reduce(reducer)} </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
