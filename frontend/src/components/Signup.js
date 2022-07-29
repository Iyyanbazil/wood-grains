import React,{useState} from "react";
import "./signup.css";
import axios from "axios"
import API from "./API"
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  const [user, setuser] = useState({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    Cpassword:"",
  })

  const setData=(e)=>{
    const {name,value}=e.target;
    setuser({...user,
      [name]:value
    })
    console.log(user);
  }
  const handleSubmit =async()=>{
    if(user.Fname==="" || user.Lname==="" || user.email==="" || user.password==="" || user.Cpassword===""  ){
      alert("Please fill the form completel")
    }
    if(user.Fname!="" || user.Lname!="" || user.email!="" || user.password!="" || user.Cpassword!=""  ){
   if(user.Cpassword!="" && user.password!=""){
    if(user.password!=user.Cpassword){
      alert("password not matched")
    } else{
      axios.post(`${API}sign`,user).then((res)=>{
        console.log(res);
      })
      window.location.pathname="/login"
    }
   }
  }
  
   
  }
  return (
    <div className="sign-background">
      <div className="email-pass-div-sign">
        <h3 className="login-main-head">Create Account</h3>
        <section className="Fname-section">
          <label for="fname" className="fname-label">
            First Name
          </label>
          <input id="fname" placeholder="John" name="Fname" value={user.Fname} onChange={(e)=>setData(e)}/>
          <label for="Lname" className="Lname-label">
            Last Name
          </label>
          <input id="Lname" placeholder="Smith" name="Lname" value={user.Lname} onChange={(e)=>setData(e)} />
        </section>
        <section className="Lname-section">
        
        </section>
        <section className="email-section">
          <label for="email"  className="email-label">
            Email
          </label>
          <input id="email" placeholder="Example@abc.com" name="email" value={user.email} onChange={(e)=>setData(e)} />
        </section>
        <section className="password-section">
          <label className="password-label">Password</label>
          <input id="password" type="password" placeholder="12345678" name="password" value={user.password} onChange={(e)=>setData(e)} />
        </section>
        <section className="confirm-password-section">
          <label className="password-label">Confirm Password</label>
          <input id="password" type="password" placeholder="12345678" name="Cpassword" value={user.Cpassword} onChange={(e)=>setData(e)} />
        </section>
       
        <section className="login-login-div">
          <button className="login-btn" onClick={handleSubmit}>Create</button>
        </section>
      </div>
      <section className="login-or-div-sign">
        <p>OR</p>
        <button className="login-btn-google">
           with <FcGoogle className="login-google" />
        </button>
      </section>
    </div>
  );
};

export default Signup;
