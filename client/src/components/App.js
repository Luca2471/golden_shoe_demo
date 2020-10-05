import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Product from "./Product/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Women from "./Women/Women";
import ShippingAndReturns from "./Logistics/ShippingAndReturns";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart.splice(index, 1);
    const newCart = cart.filter((product) => product !== itemToRemove[0]);
    setCart(newCart);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route
          path="/:gender/:id"
          component={() => <Product addToCart={addToCart} />}
        />
        <Route
          exact
          path="/shipping-and-returns"
          component={ShippingAndReturns}
        />
        <Route
          exact
          path="/cart"
          component={() => (
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
