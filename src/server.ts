import dotenv from "dotenv";
dotenv.config();
import sequelize from "@/config/db.config";
import app from "@/app";
import "@/models";

const PORT = process.env.PORT || 3000;
const SERVER = process.env.SERVER_URL || "http://localhost";

(async function (): Promise<void> {
    try {
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");

        app.listen(PORT, function () {
            console.log(`Server running on ${SERVER}:${PORT}`);
        });
    } catch (error) {
        console.error("Error syncing database:", error);
    }
})();
