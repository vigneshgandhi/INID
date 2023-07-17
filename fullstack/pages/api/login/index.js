
import mongoose from "mongoose";
import Crypto from "crypto"
import User from "../Database/User.model"
import {MongoClient} from "mongodb"
import { request,response } from "express";
import { clear, log } from "console";
import { data } from "autoprefixer";

var user=User.User

async function check_blocked_user(email){
    clear()
    const client=new MongoClient(process.env.DB_URI)
    const dbName='local'
    await client.connect()
    console.log("db connected")
    const db=client.db(dbName)
    const name=process.env.block_user
    const collection=db.collection(name)
    try{
        log(name)
        const data=await collection.findOne({ $or: [{ email: email }, { username: email }] })
        log(data)
        if(data===null){
            log("if conditon")
            return null
        }
        else{
            log("else con")
            return data
        }
    }
    catch(err){
        log(err)
    }
}

async function block_user(data){
    clear()
    const client=new MongoClient(process.env.DB_URI)
    const dbName='local'
    await client.connect()
    console.log("db connected")
    const db=client.db(dbName)
    const name=process.env.block_user
    const collection=db.collection(name)
    try{
        await db.collection(name).insertOne(data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('Document inserted',result)
            }
        })
    }
    catch(err){
        return err
    }
}

export default async function handler(req=request,res=response){
    if(req.method==="GET"){
        var ip=req.socket.remoteAddress||null;
        res.json({
            user_ip:req.headers['forwarded'] || ip,
            user_agent:req.headers['user-agent'],
            data_ready_for_api:"yes",
            check_alpha_db:"true",
            blocked_status:"nope"
        })       
    }
    else if(req.method==="POST"){
        const {email,password}=req.body
        var totalAttempt=3
        var attempt=req.body.attemptnumber
        const db=mongoose.connection.db;
        const collections=process.env.block_user
        log(collections)
        // log(await check_blocked_user(email))
        const usersblockedalready=await check_blocked_user(email)
        // console.log(usersblockedalready+" post function")
        if(attempt<=totalAttempt && usersblockedalready===null){
            // console.log(req.body)
            try{
                mongoose.connect(process.env.DB_URI,{autoIndex:true})
                const data=await user.findOne({$or:[
                    {email:email},
                    {username:email}
                ]})
                console.log(data)
                const hashedgiven=Crypto.scryptSync(password,'salt',10).toString("hex")
                console.log(hashedgiven)
                if(data==null){
                    res.json({
                        error:"no users found"
                    })
                }
                else{
                    if(data.password===hashedgiven){
                        res.json({
                            user_found:{
                                data
                            }
                        })
                    }
                    else{
                        var ip=req.socket.remoteAddress || null
                        res.status(403).json({
                            user_found:"yes",
                            password_mismatch:true,
                            Attempt: req.body.attemptnumber
                        })
                    }
                }
            }
            catch(error){
                console.log(error)
                res.json(error)
            }
        }
        else{
            try{
                mongoose.connect(process.env.DB_URI,{autoIndex:true})
                const db=mongoose.connection.db;
                const collections=process.env.block_user
                const data=await user.findOne({$or:[
                    {email:email},
                    {username:email}
                ]})
                
                if(usersblockedalready===null){
                    block_user(data)
                }
                else{
                    log("user already blocked")
                }
            }
            catch(err){
                console.log(err);
            }
            finally{
                res.status(401).json({
                    try_again:"tommorow",
                    blocked_status:"today",
                    account_lock_time:"3hours"
                })
            }
        }
    }
}