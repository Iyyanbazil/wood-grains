import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import {FcGoogle} from "react-icons/fc"
import API from "./API"
const Login = () => {
    const [login, setlogin] = useState({
        email:"",
        password:"",
    })
    const [currentUser,setcurrentUser]=useState({})
   const [isLogin, setisLogin] = useState("false")
    const handleChange=(e)=>{
      const {value,name}=e.target
      setlogin({
        ...login,
        [name]:value
      })
      console.log(login);
    }
    const handleSubmit= async()=>{
        if(login.email==="" || login.password===""){
            alert("Fill the required field")
        }else{
            setisLogin("true")
            // axios.post("http://localhost:8000/login",login).then((res)=>{
            //     console.log(res.data);
            //     window.localStorage.setItem("user",JSON.stringify(res.data))
               
            // })
            const res=await axios.post(`${API}login`,login)
            console.log(res.data);
            window.localStorage.setItem("user",JSON.stringify(res.data))
            
            window.localStorage.setItem("islogin","true")
            if(res.data.msg==="No such user exist"){
                alert("No such user")
            }else{
                window.location.pathname="/"
            }
        }
     
        window.localStorage.getItem("user")
        if(currentUser!=" no such user exist"){
            // window.location.pathname="/"
        }
        // console.log(login);
    }
  return (
   <>
   <div className='login-main-grid-div'>
    <div>
        <img src="./images/loginBanner.gif"className="login-banner" />
    </div>
   <div className="email-pass-div">
            {/* <h1>{currentUser.Fname}</h1>
            <p>{isLogin}</p> */}
            <h3 className='login-main-head-acc'>Login Account</h3>
            <section className='email-section'>
        <label for="email" className='email-label'>Email</label>
        <input id="email-login" name="email" value={login.email} onChange={(e)=>handleChange(e)} placeholder='Example@abc.com' />
        </section>
        <section className='email-section'>

        <label  className='password-label'>Password</label>
        <input id="password-login" name="password" value={login.password} onChange={(e)=>handleChange(e)}  type="password" placeholder="12345678"/>
        </section>
        <section className='login-forget-pass'>
            <p>Forgot Password?</p>
        </section>
        <section className='login-login-div-account'>
            <button className='login-btn-account' onClick={()=>{handleSubmit()}}>Login</button>
        </section>
        <section className='login-or-div'>
            <p>OR</p>
            <button className='login-btn-google-acc' >Login with <FcGoogle className='login-google'/></button>
        </section>
        </div>
        
   </div>
   
        
        
   
        </>
  )
}

export default Login