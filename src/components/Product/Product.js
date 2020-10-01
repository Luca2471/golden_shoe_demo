import React, { useEffect, useState } from "react";
import "./Product.scss";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});

  let { id, gender } = useParams();

  useEffect(() => {
    const PRODUCT_FETCH = `http://localhost:4000/${gender}/${id}`;

    const getProduct = async () => {
      try {
        const res = await axios.get(PRODUCT_FETCH);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id, gender]);

  return (
    <div>
      <img src={product.url} alt="" />
      <Footer />;
    </div>
  );
};

export default Product;
