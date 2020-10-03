import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import Home from "./Home/Home";
import Men from "./Men/Men";
import Product from "./Product/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Women from "./Women/Women";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route path="/:gender/:id" component={Product} />
      </Switch>
    </Router>
  );
};

export default App;
