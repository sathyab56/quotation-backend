import bcrypt from 'bcryptjs';
import { Users } from "../models/user_model.js";

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

        // Don't hash password here! Let the model's beforeCreate hook do it
        const newUser = await Users.create({ email, password });

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
        return res.status(500).json({ message: "Internal server error." });
    }
};




// POST /signin
export const signin = async (req, res) => {
    console.log("Inside signin controller");

    try {
        const { email, password } = req.body;
        console.log("Stored hash:", user.password);
        console.log("Entered plain password:", password);


        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
           return res.status(401).json({ message: "Invalid credentials" });
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
