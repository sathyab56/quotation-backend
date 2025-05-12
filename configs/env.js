import dotenv from "dotenv";
dotenv.config();

export const configs = {
  port: process.env.PORT || 10000,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  db_port: process.env.DB_PORT || 5432,
};
