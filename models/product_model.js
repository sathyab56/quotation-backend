import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.js";

export const Product = sequelize.define("Product", {
  company: DataTypes.STRING,
  product_name: { type: DataTypes.STRING },
  regular_price: DataTypes.FLOAT,
  special_price: DataTypes.FLOAT,
  transport: DataTypes.FLOAT,
  purchase_gst: DataTypes.FLOAT,
  purchase_price: DataTypes.FLOAT,
  distributor_price: DataTypes.FLOAT,
  special_sale: DataTypes.FLOAT,
  institutional: DataTypes.FLOAT,
  b2c: DataTypes.FLOAT,
  mrp: DataTypes.FLOAT,
  sale_gst: DataTypes.FLOAT,
  sale_price: DataTypes.FLOAT,
  price_type: DataTypes.STRING
}, {
  tableName: "products",
  timestamps: false
});

