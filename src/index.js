import mongoose from "mongoose";
import connectDb from "./db/index.js";
import dotenv from 'dotenv';
import {app} from './app.js'
dotenv.config();

connectDb()
.then(()=>{
    const port = process.env.PORT || 5000;
    
    app.listen(process.env.PORT || 8000, () => {
        console.log("server is running");
        
    });
})
.catch((err)=>{
    console.log("MONGO DB coneection failed !!", err);
    
})