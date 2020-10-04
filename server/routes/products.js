const express = require("express");
const router = express.Router();
const Product = require("../models/product");

const getProduct = async (req, res, next) => {
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
};

// Get all shoes
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/men", async (req, res) => {
  try {
    const products = await Product.find({ gender: "Male" });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/men/:id", getProduct, async (req, res) => {
  try {
    res.json(res.product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/women", async (req, res) => {
  try {
    const products = await Product.find({ gender: "Female" });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/women/:id", getProduct, async (req, res) => {
  try {
    res.json(res.product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one shoe
router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

//Create shoe
router.post("/", async (req, res) => {
  const product = new Product({
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    colour: req.body.colour,
    size: req.body.size,
    img: req.body.img,
    stock: req.body.stock,
    gender: req.body.gender,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

//Update shoe
router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.brand != null) {
    res.product.brand = req.body.brand;
  }
  if (req.body.model != null) {
    res.product.model = req.body.model;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.colour != null) {
    res.product.colour = req.body.colour;
  }
  if (req.body.size != null) {
    res.product.size = req.body.size;
  }
  if (req.body.img != null) {
    res.product.img = req.body.img;
  }
  if (req.body.stock != null) {
    res.product.stock = req.body.stock;
  }
  if (req.body.gender != null) {
    res.product.gender = req.body.gender;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete shoe by id
router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.deleteOne();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete all shoes

router.delete("/", async (req, res) => {
  try {
    await Product.deleteMany();
    res.json({ message: "All Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
