/* eslint-disable import/no-anonymous-default-export */
import {request,response} from "express"
import crypto from "crypto"
import mongoose from "mongoose"

const db =require("../Database/User.model").default;


export default function(req=request,res=response){
    if(req.method==="GET"){
        var ip=  req.socket.remoteAddress || null
        var  userAgent=req.headers['user-agent']
        res.json({
            people_ip: ip,
            Agent: userAgent,
            Content_Present:"No",
            Date:Date.now()
        })
    }
    else if(req.method==="POST"){
        var password=req.body.password;
        console.clear()
        var hashedpassword=crypto.scryptSync(password,"salt",10).toString("hex")
        console.log(hashedpassword)
        // upload.single('file')
        mongoose.connect(process.env.DB_URI,{
            retryReads:true,
            retryWrites:true,
            autoCreate:true
        }).then((data)=>{
            console.log("mongodb connected successfully")
        }).catch((err)=>{
            console.log(err)
        })

        var User=db.User;
        var newUser=new User({
            email: req.body.email,
            username:req.body.username,
            password:hashedpassword,
            confirmpassword:req.body.confirmpassword,
            dob:req.body.DOB,
            profileimage:req.body.selectfile
        })
        newUser.save().then(savedUser => {
            // console.log('User saved:', savedUser);
            return res.status(200).json({
                User_saved:savedUser,
                flash_success:true,
                user_redirect:true
            })
            // Handle success
        })
        .catch(error => {
            // console.error('Error saving user:', error);
            return res.status(403).json({
                User_saved:false,
                flash_success:false,
                user_redirect:false,
                error:error
            })
            // Handle error
        });
        
    }
}
