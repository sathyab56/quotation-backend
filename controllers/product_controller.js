// controllers/product_controller.js

import { Product } from '../models/product_model.js';

// GET /products - Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// POST /products - Create a new product
export const createProduct = async (req, res) => {
  console.log("✅ Hit createProduct with data:", req.body);
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    console.error("❌ Error in createProduct:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
};


// DELETE /products/:id - Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

// PUT /products/:id - Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
};

