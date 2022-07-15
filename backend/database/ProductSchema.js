// import mongoose from 'mongoose'
const mongoose=require("mongoose")
 const ProductSchema= new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    img:String,
    trending:Boolean,

 })

 const Product=mongoose.model("Product",ProductSchema);
 module.exports=Product