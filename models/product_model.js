import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.js";

export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "company"
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "product_name"
  },
  regularPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "regular_price"
  },
  specialPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "special_price"
  },
  transportIncluded: {
    type: DataTypes.STRING,
    defaultValue: "Yes",
    field: "transport"
  },
  purchaseGST: {
    type: DataTypes.STRING,
    defaultValue: "5",
    field: "purchase_gst"
  },
  transportPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "transport_price"
  },
  distributorPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "distributor_price"
  },
  specialSalePrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "special_sale"
  },
  institutionalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "institutional"
  },
  b2cPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "b2c"
  },
  mrpPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "mrp"
  },
  saleGST: {
    type: DataTypes.STRING,
    defaultValue: "5",
    field: "sale_gst"
  },
  priceType: {
    type: DataTypes.STRING,
    defaultValue: "regular",
    field: "price_type"
  },
  salePrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    field: "sale_price"
  }
}, {
  tableName: "products",
  timestamps: false
});
