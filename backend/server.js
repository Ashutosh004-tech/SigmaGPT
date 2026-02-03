import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatRoutes from "../backend/routers/chat.js"


dotenv.config();
const app = express();
app.use(express.json());
app.use("/api",chatRoutes);

// Database Connection
const connectDb = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Connected!');
  }catch(err){
    console.log("Error", err);
  }
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


//Server Listen
app.listen(8080, () => {
  console.log("Server Started");
  connectDb();
});

