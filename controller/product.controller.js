import Product from "../models/product.model.js";
import { validateProduct } from "../utils/validate-product.js";

// Create a product
export const createProduct = async (req, res) => {
  try {
    const { error, data } = validateProduct(req.body);
    if (error)
      return res
        .status(400)
        .send(error.issues.map((err) => err.message).join(", "));

    const product = new Product(data);
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View list of Products

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort("name");
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// View product by ID

export const getProductByID = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update Product

export const updateProduct = async (req, res) => {
  const { error, data } = validateProduct(req.body);
  try {
    if (error)
      return res
        .status(400)
        .send(error.issues.map((err) => err.message).join(", "));

    if (!req.params.id) return res.status(400).send("Product ID is required");

    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: data },
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!product) return res.status(400).send("This product does not exist");

    res.status(200).json({
      message: "Product deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
