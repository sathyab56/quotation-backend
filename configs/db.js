import { Sequelize } from "sequelize";
import { configs } from "./env.js";

export const sequelize = new Sequelize(
  configs.db_name,
  configs.db_user,
  configs.db_password,
  {
    host: configs.db_host,
    dialect: "postgres",
    port: configs.db_port,
    logging: false,
  }
);
