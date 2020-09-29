import React from "react";
import "./Hero.scss";
// import NikeShoesOne from "../../images/nike-shoes-one.jpg";
import NikeShoesTwo from "../../images/nike-shoes-two.jpg";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-img">
          <div className="left-hero">
            <div className="hero-title">
              <h1>STYLE AND COMFORT</h1>
            </div>
            <div className="hero-p">
              <p>The latest from Nike's catalogue available now</p>
            </div>
            <div className="hero-button">
              <button>
                <p>SHOP NOW</p>
              </button>
            </div>
          </div>
          <img src={NikeShoesTwo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
