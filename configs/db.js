import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize({
  host: process.env.DB_HOST,                // Database host (127.0.0.1 for local)
  port: parseInt(process.env.DB_PORT),      // Convert DB_PORT to integer
  dialect: 'postgres',                     // PostgreSQL database
  username: process.env.DB_USER,           // Database user
  password: process.env.DB_PASSWORD,       // Database password
  database: process.env.DB_NAME,           // Database name
});

export { sequelize };
