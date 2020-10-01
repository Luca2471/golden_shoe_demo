import React, { useEffect, useState } from "react";
import "./Men.scss";
import Footer from "../Footer/Footer";
import axios from "axios";
import FilterMenu from "../FilterMenu/FilterMenu";

const MENS_SHOES_API = "http://localhost:4000/men";

const Men = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    try {
      axios.get(MENS_SHOES_API).then((res) => setShoeData(res));
    } catch (err) {
      console.log(err);
    }
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
