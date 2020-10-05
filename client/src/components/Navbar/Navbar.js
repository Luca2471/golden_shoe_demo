import React from "react";
import "./Navbar.scss";
import { Search, ShoppingCart, Person } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          {" "}
          <div className="logo">Golden Shoe </div>
        </NavLink>
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
            <NavLink to="/shipping-and-returns" activeClassName="nav-active">
              <li>Shipping & Returns</li>
            </NavLink>
            <NavLink to="/men" activeClassName="nav-active">
              <li>Men</li>
            </NavLink>
            <NavLink to="/women" activeClassName="nav-active">
              <li>Women</li>
            </NavLink>
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
