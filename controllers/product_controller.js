import { Product } from "../model/product_model.js"; // ✅ Correct path

export const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body); // ✅ stores in DB
    res.status(201).json({ message: "Product added", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.update(req.body, { where: { id } });
    const updatedProduct = await Product.findByPk(id);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCount = await Product.destroy({ where: { id } });
    if (deletedCount) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
