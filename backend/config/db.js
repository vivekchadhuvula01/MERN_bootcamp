import mongoose from "mongoose";

export const connectDB = async (url) => {
    try {
     const connection = await mongoose.connect(url);
        console.log("connection succeeded..!")
    }
    catch (error){
        process.exit(1);
        console.log(error);
    }
}