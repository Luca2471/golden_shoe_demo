import React from "react";
import "./Navbar.scss";
import { Search, ShoppingCart, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="router-link"> <div className="logo">Golden Shoe </div></Link>
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
            <Link to="/men" className="router-link">
              <li>Men</li>
            </Link>
            <Link to="/women" className="router-link">
              <li>Women</li>
            </Link>
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
