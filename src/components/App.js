import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import Home from "./Home/Home";
import Men from "./Men/Men"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/men" component={Men} />

      </Switch>
    </Router>
  );
};

export default App;
