
const express=require("express")
const app=express()
let cors = require('cors');
// let bodyParser = require('body-parser');
app.use(cors());

// app.use(express.bodyParser({limit: '50mb'}));
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
const Port=8000;
const connectDb=require("./database/connection")
const Proute=require("./database/route")
// app.get("/",(req,res)=>{
//      res.send({msg:"iam base route did it"})
// })
app.use("/",Proute)
app.listen(Port,()=>{
    console.log(`Server is running on Port ${Port}`)
})
connectDb()