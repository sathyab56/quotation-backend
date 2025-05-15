import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product-controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct); // make sure updateProduct exists
router.get("/test", (req, res) => {
  res.json({ message: "✅ /products/test route is working" });
});

export default router; // ✅ Exporting as ES module
