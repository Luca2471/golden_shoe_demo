import React from "react";
import "./FilterMenu.scss";

const FilterMenu = () => {
  return (
    <section className="filters-container">
      <div className="filter-choice">
        <label className="label-title">
          <h2>Colour</h2>
        </label>
        <select>
          <option value="White">White</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="filter-choice">
        <label className="label-title">
          <h2>Brand</h2>
        </label>
        <select>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
        </select>
      </div>
      <div className="filter-choice">
        <label className="label-title">
          <h2>Size</h2>
        </label>
        <select>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
          <option value="nine">9</option>
          <option value="ten">10</option>
          <option value="eleven">11</option>
          <option value="twelve">12</option>
        </select>
      </div>
      <div className="filter-choice">
        <label className="label-title">
          <h2>Price</h2>
        </label>
        <select>
          <option value="fifty">£0 - £50</option>
          <option value="hundred">£50 - £100</option>
          <option value="hundred-plus">£100+</option>
        </select>
      </div>
    </section>
  );
};

export default FilterMenu;
