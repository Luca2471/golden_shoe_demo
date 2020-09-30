import React from "react";
import "./Footer.scss";
import { Call, Email } from "@material-ui/icons";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-links-container">
        <div className="footer-block one">
          <h2>Pages</h2>
          <ul className="footer-ul">
            <li className="footer-links" href="#">
              Men
            </li>
            <li className="footer-links" href="#">
              Women
            </li>
            <li className="footer-links" href="#">
              Your Account
            </li>
            <li className="footer-links" href="#">
              Your Orders
            </li>
          </ul>
        </div>
        <div className="footer-block two">
          <h2>Our Socials</h2>
          <ul className="footer-ul">
            <li className="footer-links" href="#">
              Facebook
            </li>
            <li className="footer-links" href="#">
              Instagram
            </li>
            <li className="footer-links" href="#">
              Twitter
            </li>
          </ul>
        </div>
        <div className="footer-block three">
          <h2>Contact Us</h2>
          <p> Mon-Fri 9am - 5pm</p>
          <div className="footer-icon">
            <Call />
            <p>+44 0800 1234 5789</p>
          </div>
          <div className="footer-icon">
            <Email />
            <p>help@goldenshoe.com</p>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>© Golden Shoe 2020</p>
      </div>
    </section>
  );
};

export default Footer;
