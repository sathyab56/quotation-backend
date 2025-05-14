// routes.js
import { Router } from "express";
import { checkHealth } from "../controllers/common-controller.js";
import { saveData, signin, signup } from "../controllers/auth-controller.js";

const router = Router();

// Health check route
router.get("/health", checkHealth);

// Auth routes
router.post("/signup", signup);
router.post("/signin", signin);

// Save data route
router.post("/savedata", saveData);

export default router;
