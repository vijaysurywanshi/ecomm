import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";

dotenv.config();

connectDB();

const PORT =process.env.PORT || 8000

const app= express();


app.use(express.json());

app.use(morgan("dev"));

app.get('/',(req,res)=>{
    res.send("Hello World ")
})

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))