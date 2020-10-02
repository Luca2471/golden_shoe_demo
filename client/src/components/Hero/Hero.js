import React from "react";
import "./Hero.scss";
import NikeShoesOne from "../../images/nike-shoes-one.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-img">
        <div className="left-hero">
          <div className="hero-title">
            <h1>STYLE AND COMFORT</h1>
          </div>
          <div className="hero-p">
            <p>The latest from Nike&apos;s catalogue available now</p>
          </div>
          <div className="hero-button">
            <button>
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
        <img src={NikeShoesOne} alt="" />
      </div>
    </section>
  );
};

export default Hero;
