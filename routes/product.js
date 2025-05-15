// routes/product.js
import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product-controller.js';

const router = express.Router();

router.get('/', getProducts);        // GET /api/products
router.post('/', createProduct);     // POST /api/products
router.put('/:id', updateProduct);   // PUT /api/products/:id
router.delete('/:id', deleteProduct);// DELETE /api/products/:id

export default router;
