import React, { useEffect, useState } from "react";
import "./Product.scss";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});

  let { id, gender } = useParams();

  useEffect(() => {
    const PRODUCT_FETCH = `http://localhost:3001/products/${gender}/${id}`;

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

  const GetProductAvailability = () => {
    if (product.stock === 0) {
      return (
        <div className="stock out-of-stock">
          Out of Stock
          <p>We're not sure when this item will next be in stock.</p>
        </div>
      );
    } else if (product.stock < 3) {
      return (
        <div className="stock low-stock">
          Low Stock <p>Limited stock available.</p>
        </div>
      );
    } else {
      return (
        <div className="stock in-stock">
          In stock
          <p>Order before 22:00 for gauranteed next day delivery!</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2>{product.brand}</h2>
            <p>{product.model}</p>
            <p className="product-price">£{product.price}</p>
            <p className="product-colour">Colour: {product.colour}</p>
            <div className="product-stock">
              <GetProductAvailability />
            </div>
            <button className="add-item-bskt">Add to Basket</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
