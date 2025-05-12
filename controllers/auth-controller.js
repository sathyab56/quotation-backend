import { Users } from "../models/user_model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
    console.log("inside signup")
    try {
        const { email, password } = req?.body;
        console.log("email", email);
        console.log("password", password);
        if (! email|| !password ) {
            return res.status(400).json({
                "message": "Email and password are required fields"
            })
        };
        const exisitngUser = await Users.findOne({ where:{ email:email } })
        if (exisitngUser) {
            return res.status(400).json({
                "message":"Email is already registered"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        // console.log("Print Hashed password", hash);
      
        const result = await Users.create({ "email": email, "password": hash })
        console.log(result)
        res.status(201).json({
            message: "User created successfully",
            user: result
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "message": `An error occured ${error}`,
        })
    }
}

export const signin = async (req, res) => {
    try {
        console.log("inside signin")
        const { email, password } = req.body;
        console.log("email", email);
        console.log("password", password);
        if (!email || !password) {
            return res.status(400).json({
                "message": "Email and password are required fields"
            })
        };

        const data = await Users.findOne({ where: { email: email.trim() } })
        if (!data) {
            return res.status(404).json({
                "message": "User not found"
            });
        }
        console.log(data);
        const savedPassword = data.dataValues.password
        console.log(savedPassword)
        const result = await bcrypt.compare(password, savedPassword)
        console.log("The result is",result)
        if (!result) {
            return res.status(403).json({
                "error": "Invalid email or password"
            })
        } else {
            return res.status(200).json({
                "message": "Login successful",
                "details":data
            });
        }
    } catch (error) {
        res.status(500).json({ "error": "Internal server error" }
        )
    }
}

export const saveData = async (req, res) => {
    try {
        const { email, processingData } = req.body;

        if (!email || !processingData) {
            return res.status(400).json({
                message: "Email and processingData are required",
            });
        }

        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        user.processingData = processingData;
        await user.save();

        return res.status(200).json({
            message: "Processing data updated successfully",
            user,
        });
    } catch (error) {
        console.error("Error updating processing data:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};