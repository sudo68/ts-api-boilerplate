import dotenv from "dotenv";
dotenv.config();
import sequelize from "./config/database";
import app from "./app";
import "./models";

const PORT = process.env.PORT || 3000;
const SERVER = process.env.SERVER_URL || "http://localhost";

async function startServer(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        console.log("Registered Models in Sequelize:", Object.keys(sequelize.models));

        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");

        app.listen(PORT, () => {
            console.log(`Server running on ${SERVER}:${PORT}`);
        });
    } catch (error) {
        console.error("Error syncing database:", error);
    }
}

startServer();