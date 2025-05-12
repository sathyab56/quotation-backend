import { Router } from "express";
import { checkHealth } from "../controllers/common-controller.js";
import { saveData, signin, signup } from "../controllers/auth-controller.js";


export const defaultrouter = Router();


defaultrouter.get("/health", checkHealth);
defaultrouter.post("/signup", signup);
defaultrouter.post("/signin", signin);
defaultrouter.post("/savedata", saveData);


export default defaultrouter