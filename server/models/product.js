const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  size: {
    type: [Number],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productsSchema);
