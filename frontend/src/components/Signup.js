import React,{useState} from "react";
import "./signup.css";
import axios from "axios"
import API from "./API"
import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const Signup = () => {
  const [user, setuser] = useState({
    Fname:"",
    Lname:"",
    email:"",
    password:"",
    Cpassword:"",
  })
  const [spinner,setspinner]=useState(false)

  const setData=(e)=>{
    const {name,value}=e.target;
    setuser({...user,
      [name]:value
    })
    console.log(user);
  }
  const handleSubmit =async()=>{
    setspinner(true)
    if(user.Fname==="" || user.Lname==="" || user.email==="" || user.password==="" || user.Cpassword===""  ){
      setspinner(false)
      alert("Please fill the form completel")
    }
    if(user.Fname!="" || user.Lname!="" || user.email!="" || user.password!="" || user.Cpassword!=""  ){
   if(user.Cpassword!="" && user.password!=""){
    if(user.password!=user.Cpassword){
      setspinner(false)
      alert("password not matched")
    } else{
      const res= await axios.post(`${API}sign`,user)
        if(res){
          setspinner(false)
          console.log(res)
          if(res.data.msg==="user exist"){
            alert("user exist")
          }
          if(res.data.msg==="done"){
            window.location.href="/login"
          }
        }
      }
     
    }
   }
  }
  
   
  
  return (
    <>
    <div className={spinner ? ("active-spinner-sign"):("disable-spinner-sign")}>
    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
</Button>{' '}
    </div>
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
       
        <section className="sign-login-div">
          <button className="login-btn-sign" onClick={handleSubmit}>Create</button>
          <Link to="/login" className="already-account">already have account?</Link>
        </section>
      </div>
      {/* <section className="login-or-div-sign">
        <p>OR</p>
        <button className="sign-btn-google">
           SignUp with <FcGoogle className="login-google" />
        </button>
      </section> */}
    </div>
    </>
  );
  
};

export default Signup;
