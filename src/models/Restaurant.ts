import mongoose from "mongoose";

const restaurantScehma = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    rating:
    {
        type:Number,
        required:true,
        min:1,
        max:5
    }
})

export default  mongoose.model('restaurant',restaurantScehma);