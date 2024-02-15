import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`[index] Server is running at http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error(`[index] Failed to start the server due to MongoDB error: { ${error} }`);
        process.exit(1)
    }
};


startServer();
