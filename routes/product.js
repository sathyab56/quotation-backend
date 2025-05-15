import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product_controller.js'; // use consistent file

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);      // use only this POST handler
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

