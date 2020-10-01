import React, { useEffect, useState } from "react";
import "./Men.scss";
import Footer from "../Footer/Footer";
import axios from "axios";
import FilterMenu from "../FilterMenu/FilterMenu";
import ProductCard from "../ProductCard/ProductCard";

const Men = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    const MEN_SHOES_API = "http://localhost:4000/men/";

    const getMensShoesData = async () => {
      try {
        const res = await axios.get(MEN_SHOES_API);
        setShoeData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMensShoesData();
  }, []);

  return (
    <>
      <section className="category-container">
        <div className="category-title">
          <h1>Men&apos;s Shoes</h1>
        </div>
        <FilterMenu />
        <div className="shoes-container">
          {shoeData &&
            shoeData.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} gender={"men"} />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Men;
