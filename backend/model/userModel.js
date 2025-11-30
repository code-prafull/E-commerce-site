import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true , minimize:false})

// Add indexes for better performance
userSchema.index({ email: 1 });

const User = mongoose.model("User",userSchema)

export default User