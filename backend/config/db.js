import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        console.log("MongoDB URL:", process.env.MONGODB_URL);
        
        // Remove deprecated options
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB connection error:", error);
        console.log("Error details:", {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        
        // Try to provide more specific error information
        if (error.name === 'MongooseServerSelectionError') {
            console.log("This usually means:");
            console.log("1. The MongoDB URL is incorrect");
            console.log("2. The database server is not accessible");
            console.log("3. Network/firewall issues");
            console.log("4. Authentication failed");
            console.log("For Render deployment, ensure your MongoDB Atlas cluster has IP whitelist configured for 0.0.0.0/0");
        }
    }
    
}

export default connectDb;