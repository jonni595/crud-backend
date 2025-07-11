import express from "express";

import {
  createProduct,
  getProducts,
  getProductByID,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductByID);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export { router as productRouter };
