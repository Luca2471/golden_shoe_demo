import React, { useEffect, useState } from "react";
import "./Women.scss";
import Footer from "../Footer/Footer";
import axios from "axios";
import FilterMenu from "../FilterMenu/FilterMenu";
import ProductCard from "../ProductCard/ProductCard";

const Women = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    const WOMEN_SHOES_API = "http://localhost:4000/women/";

    const getWomensShoesData = async () => {
      try {
        const res = await axios.get(WOMEN_SHOES_API);
        setShoeData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getWomensShoesData();
  }, []);

  return (
    <>
      <section className="category-container">
        <div className="category-title">
          <h1>Women&apos;s Shoes</h1>
        </div>
        <FilterMenu />
        <div className="shoes-container">
          {shoeData &&
            shoeData.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} gender={"women"} />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Women;
