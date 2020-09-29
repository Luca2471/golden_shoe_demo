import React from "react";
import "./Navbar.scss";
import {Search, ShoppingCart} from "@material-ui/icons";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">Golden Shoe</div>
        <div className="search-container">
          <input
            className="search-box"
            placeholder="Search"
            type="text"
          ></input>
          <div className="search-icon">
            <Search />
          </div>
        </div>
        <div className="links-container">
          <ul>
            <li href="#">Men</li>
            <li href="#">Women</li>
          </ul>
          <div className="nav-icons-container">
            <ShoppingCart />
           </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
