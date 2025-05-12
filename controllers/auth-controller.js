import { Users } from "../models/user_model.js";
import bcrypt from "bcryptjs";

// POST /signup
export const signup = async (req, res) => {
    console.log("Inside signup controller");

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const existingUser = await Users.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await Users.create({
            email,
            password: hashedPassword,
        });

        console.log("User created:", newUser.email);

        return res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: newUser.id,
                email: newUser.email,
            }
        });
    } catch (error) {
        console.error("Signup error:", error.message);
        console.error(error.stack);  // Logs the full error stack
        return res.status(500).json({ message: "Internal server error." });
    }
};

// POST /signin
export const signin = async (req, res) => {
    console.log("Inside signin controller");

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(403).json({ message: "Invalid email or password." });
        }

        return res.status(200).json({
            message: "Login successful.",
            user: {
                id: user.id,
                email: user.email,
                processingData: user.processingData || null
            }
        });
    } catch (error) {
        console.error("Signin error:", error.message);
        console.error(error.stack);  // Logs the full error stack
        return res.status(500).json({ message: "Internal server error." });
    }
};

// POST /savedata
export const saveData = async (req, res) => {
    console.log("Inside saveData controller");

    try {
        const { email, processingData } = req.body;

        if (!email || !processingData) {
            return res.status(400).json({ message: "Email and processingData are required." });
        }

        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        user.processingData = processingData;
        await user.save();

        return res.status(200).json({
            message: "Processing data saved successfully.",
            user: {
                id: user.id,
                email: user.email,
                processingData: user.processingData
            }
        });
    } catch (error) {
        console.error("SaveData error:", error.message);
        console.error(error.stack);  // Logs the full error stack
        return res.status(500).json({ message: "Internal server error." });
    }
};
