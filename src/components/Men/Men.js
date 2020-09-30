import React, { useEffect, useState } from "react";
import "./Men.scss";
import Footer from "../Footer/Footer";
import axios from "axios";
import FilterMenu from "../FilterMenu/FilterMenu";

const Men = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/men")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="category-container">
        <div className="category-title">
          <h1>Men's Shoes</h1>
        </div>
        <FilterMenu />
        <div className="shoes-container"></div>
      </section>

      <Footer />
    </>
  );
};

export default Men;
