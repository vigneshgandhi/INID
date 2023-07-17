/* eslint-disable import/no-anonymous-default-export */
import mongoose from "mongoose";
import process from "process"
var Schema=mongoose.Schema

// const DBC=process.env.DB_URI;

if(!mongoose.models.User){
    const userSchema=new Schema({
        email:{type:String,unique:true,required:true},
        username:{type:String,unique:true,required:true},
        password:{type:String,unique:true,required:true},
        confirmpassword:{type:String,unique:true,required:true},
        DOB:{type:Date,required:true},
        profileimage:{type:String,required:false,unique:false},
        createdAt:{type:Date,default:Date.now()}
    })
    mongoose.model("User",userSchema)
}
// var User1=console.log("im here")
const User= mongoose.models.User || mongoose.model("User",userSchema);

export default {User};