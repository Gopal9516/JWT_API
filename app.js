import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'




const app=express()
const port=process.env.port

//CORS policy
app.use(cors())

//JSON
app.use(express.json())


//Load Routes
app.use("/api/user",userRoutes)

const db="mongodb://localhost:27017/JWTSigninSignup";
const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log("mongoDB connected");
    }
    catch(err){
        console.log(err.message);
    }
}
connectDB();



app.listen(port,()=>{
    console.log(`Server listening at http://loclahost:${port}`)

})