import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.BASE_DB_Name}`);
        console.log(`MongoDB connected successfully! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`*****MongoDB connection failed: ${error}`)
        process.exit(1)
    }
}

export default connectDB

