import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://71762234026:vishnu0704@cluster0.nhygu.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}