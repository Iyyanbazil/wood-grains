const Product=require("./ProductSchema")

 const show=async(req,res)=>{
    const all= await Product.find({})
    res.json(all)
    // res.json({msg:"i am msg"})
  // console.log();
}
module.exports={
    show,
}