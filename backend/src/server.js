import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app=express();

// middleware
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json())
app.use(rateLimiter);
//👆 this middleware will parse JSON bodies : req.body


app.use("/api/notes",notesRoutes);

const PORT=process.env.PORT||5001;



connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log("Server started on PORT: ",PORT);
    });
});