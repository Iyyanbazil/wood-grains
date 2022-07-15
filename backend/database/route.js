
const express=require("express")
const Proute=express.Router()

// const controller=require("./controller")
const {show}=require("./controller")
Proute.get("/",show)
module.exports=Proute