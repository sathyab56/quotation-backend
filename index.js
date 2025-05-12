import express from "express";
import "dotenv/config";
import cors from 'cors';
import { configs } from "./configs/env.js";   // Ensure this file imports correctly
import bodyParser from "body-parser";
import defaultrouter from "./routes/routes.js";
import { sequelize } from "./configs/db.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log("The app is running");
app.use("/", defaultrouter);

app.use((req, res) => {
    res.status(404).json({
        error: "Resource not found"
    });
});

// Use the port from the .env file or fallback to 3000
const port = configs.port || process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server is started on port: ${port}`);
    
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});

export default app;
