import mongoose from "mongoose"
export const connectDB=async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("MONGOBD CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log(`Error connecting database ${error}`);
        process.exit(1);// 1 means error with failure
    }
}