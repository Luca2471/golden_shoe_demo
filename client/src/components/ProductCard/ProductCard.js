import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ shoe, gender }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <Link to={`/${gender}/${shoe.id}`}>
          <img src={shoe.url} alt="" />
        </Link>
      </div>
      <div className="details-container">
        <div className="shoe-title">
          <h2>{shoe.brand}</h2>
          <p>{shoe.model}</p>
          <p className="shoe-price">£{shoe.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
