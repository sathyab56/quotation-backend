import { DataTypes } from "sequelize";
import { sequelize } from "../configs/db.js";

export const Product = sequelize.define("Product", {
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regularPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  specialPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  transportIncluded: {
    type: DataTypes.STRING, // Can be 'Yes' or 'No'
    defaultValue: 'Yes',
  },
  purchaseGST: {
    type: DataTypes.STRING,
    defaultValue: '5',
  },
  transportPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  distributorPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  specialSalePrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  institutionalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  b2cPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  mrpPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  saleGST: {
    type: DataTypes.STRING,
    defaultValue: '5',
  },
  priceType: {
    type: DataTypes.STRING,
    defaultValue: 'regular',
  }
});
