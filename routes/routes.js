// routes.js
import { Router } from "express";
import { checkHealth } from "../controllers/common-controller.js";
import { saveData, signin, signup } from "../controllers/auth-controller.js";
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product_controller.js'; // use consistent file

const router = Router();

// Health check route
router.get("/health", checkHealth);

// Auth routes
router.post("/signup", signup);
router.post("/signin", signin);
router.get('/get', getProducts);
router.post('/products', createProduct);      // use only this POST handler
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


// Save data route
router.post("/savedata", saveData);

export default router;
