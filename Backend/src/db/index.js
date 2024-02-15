import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.BASE_DB_Name}`);
        console.log(`[connectDB] MongoDB connected successfully!!`)
    } catch (error) {
        console.log(`[connectDB] MongoDB connection failed: [ ${error} ]`)
        // process.exit(1)
        throw error
    }
}

export default connectDB

