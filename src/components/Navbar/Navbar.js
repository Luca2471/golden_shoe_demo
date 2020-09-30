import React from "react";
import "./Navbar.scss";
import { Search, ShoppingCart, Person } from "@material-ui/icons";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">Golden Shoe</div>
        <div className="search-container">
          <div className="search-icon">
            <Search />
          </div>
          <input
            className="search-box"
            placeholder="Search"
            type="text"
          ></input>
        </div>
        <div className="links-container">
          <ul>
            <li href="#">Men</li>
            <li href="#">Women</li>
          </ul>
          <div className="nav-icons-container">
            <div className="nav-icon">
              <ShoppingCart />
            </div>
            <div className="nav-icon">
              <Person />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
