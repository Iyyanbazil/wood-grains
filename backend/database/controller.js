const Product=require("./ProductSchema")
const User=require("./userSchema")
 const show=async(req,res)=>{
    const all= await Product.find({})
    res.json(all)
    // res.json({msg:"i am msg"})
  // console.log();
}
const sign=async(req,res)=>{
  const {Fname,Lname,email,password,Cpassword}=req.body
  User.findOne({email:email},(err,user)=>{
    if(user){
      res.send("user exist")
      console.log("user exist")
    }else{
      User.create({
        Fname:Fname,
        Lname:Lname,
        email:email,
        password:password,
        Cpassword:Cpassword,
      })
      // const user= new User(
      //   {    
      //   Fname,
      //   Lname,
      //   email,
      //   password,
      //   Cpassword,}
      //   )
      //   user.save()
        }
     console.log(user)
    }
  )
  
  // const all=await User.insertOne({user})
  // User.Save()
  // res.json(user);
  // console.log(req.body);
}

const login=async (req,res)=>{
  const {email,password}=req.body
  const data=User.findOne({email:email},(err,user)=>{
    if(user){
      if(user.password===password){
        res.json(user)
        console.log(user);
        // res.json(user)
      }else{
        res.send("incorrect password")
        
        console.log("incorrect password");
      }
    }else{
      res.json({msg:"No such user exist"})
      console.log(" no such user exist");
    }
  })
}
module.exports={
    show,
    sign,
    login
}