
const express=require("express")
const app=express()
let cors = require('cors');
// let bodyParser = require('body-parser');
app.use(cors());
require("dotenv").config();
// app.use(express.bodyParser({limit: '50mb'}));
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}));
// app.use(cors({credentials: true, origin: 'https://wood-grains.herokuapp.com'}))
const Port=process.env.PORT;
const connectDb=require("./database/connection")
const Proute=require("./database/route")
// const Croute=require("./database/cartRoute")
// app.search("port",Port)
// app.get("/",(req,res)=>{
//      res.send({msg:"iam base route did it"})
// })

// *********** add Node serverjs in package.json for heroku ********
app.use("/",Proute)
// app.use("/",Croute)
app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on Port ${Port}`)
})
connectDb()