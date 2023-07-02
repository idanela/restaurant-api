import express from 'express';
import mongoose from 'mongoose';
import baseRouter from './routers';
const app = express();
app.use(express.json())
app.use('/',baseRouter)
mongoose.connect('mongodb://127.0.0.1:27017/restaurants').then(()=>console.log("connected to DB")).catch(console.error);
app.listen(5000,()=>
{
    console.log("listen on port 5000")
})