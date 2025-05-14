import express from "express";
import "dotenv/config";
import cors from "cors";
import { configs } from "./configs/env.js";
import bodyParser from "body-parser";
import defaultrouter from "./routes/routes.js";
import { sequelize } from "./configs/db.js";

const app = express();

// ✅ List of allowed origins
const allowedOrigins = [
  "https://quotation-frontend-mocha.vercel.app", // Vercel frontend
  "http://localhost:8000",                        // Local development
  "http://localhost:3000"
];

// ✅ Robust CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl, mobile apps)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies/auth headers
  })
);

// ✅ JSON body parsing
app.use(bodyParser.json());

// ✅ Log server startup
console.log("The app is running...");

// ✅ Routes
app.use("/", defaultrouter);

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Resource not found",
  });
});

// ✅ Start server
const port = configs.port || process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`✅ Server is running on port: ${port}`);
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error.message);
  }
});

export default app;
