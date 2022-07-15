

MONGO_URI=`mongodb+srv://ayyanbazil:ayyanbazil123@cluster0.nbywq.mongodb.net/?retryWrites=true&w=majority`
const mongoose=require("mongoose")

 const connectDb=async(url)=>{
await mongoose.connect(MONGO_URI).then(()=>{
    console.log("connected to database");
})

}
module.exports=connectDb