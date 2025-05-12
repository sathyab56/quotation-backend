import { Sequelize } from "sequelize";
import { configs } from "./env.js";

export const sequelize = new Sequelize(configs.db_name, configs.db_user, configs.db_password, {
    host: configs.db_host,
    dialect: "postgres",
    logging: false
})

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
        await sequelize.sync({ alter:true });
        console.log("Database synced successfully");
    } catch (error) {
        console.log("Unable to connect database:", error);
    }
};

authenticate();