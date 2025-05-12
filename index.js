import express from "express";
import "dotenv/config";
import cors from 'cors'
import { configs } from "./configs/env.js";
import bodyParser from "body-parser";
import defaultrouter from "./routes/routes.js";
import { sequelize } from "./configs/db.js";
import { Users } from "./models/user_model.js";



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

app.listen(configs.port, async () => {
    console.log(`Server is started on port:${configs.port}`)
    await sequelize.authenticate();
});


export default app
