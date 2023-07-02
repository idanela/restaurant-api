import mongoose from "mongoose";
const schema = mongoose.Schema;

const dishesSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    price:
    {
        type:Number,
        required: true
    },
    restaurant:
    {
            type: schema.Types.ObjectId,
            ref: 'restaurant',
            required:true
    }
})

export default mongoose.model('dish',dishesSchema);