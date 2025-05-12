import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.js";

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processingData: {
        type: DataTypes.JSONB,
        allowNull:true
    }
}, {
    tableName: "user_credentials",
    timestamps: true
});