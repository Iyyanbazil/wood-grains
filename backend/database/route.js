
const express=require("express")
const Proute=express.Router()

// const controller=require("./controller")
const {show,sign,login}=require("./controller")
Proute.get("/",show)

// route for login
Proute.post("/sign",sign)
Proute.post("/login",login)
module.exports=Proute