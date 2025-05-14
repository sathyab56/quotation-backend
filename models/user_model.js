import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.js";
import bcrypt from "bcryptjs"; // Ensure to install bcryptjs

export const Users = sequelize.define("Users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensures email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  processingData: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        // Hash password before saving to database
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
},

  },
});

