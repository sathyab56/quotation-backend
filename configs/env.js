import dotenv from 'dotenv';

// Load the .env file
dotenv.config();

// Export the port from .env
export const configs = {
  port: process.env.PORT,  // Read PORT from .env
};
