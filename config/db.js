import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhaveshmalviya335:1235@cluster0.jfhzft5.mongodb.net/food-del').then(()=>console.log("DB connected"));
}