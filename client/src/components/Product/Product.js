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
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={product.url} alt="" />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2>{product.brand}</h2>
            <p>{product.model}</p>
            <p className="product-price">£{product.price}</p>
            <p className="product-colour">Colour: {product.colour}</p>
            <button className="add-item-bskt">Add to Basket</button>
            {/* <select>
              {product && product.map((size) => console.log(size))}
            </select> */}
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Product;
