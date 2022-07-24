import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import {FcGoogle} from "react-icons/fc"
const Login = () => {
    const [login, setlogin] = useState({
        email:"",
        password:"",
    })
    const [currentUser,setcurrentUser]=useState({})
   
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
            // axios.post("http://localhost:8000/login",login).then((res)=>{
            //     console.log(res.data);
            //     window.localStorage.setItem("user",JSON.stringify(res.data))
               
            // })
            const res=await axios.post("https://wood-grains.herokuapp.com/login",login)
            console.log(res.data);
            window.localStorage.setItem("user",JSON.stringify(res.data))
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
        <div className="email-pass-div">
            <h1>{currentUser.Fname}</h1>
            <h3 className='login-main-head'>Login Account</h3>
            <section className='email-section'>
        <label for="email" className='email-label'>Email</label>
        <input id="email" name="email" value={login.email} onChange={(e)=>handleChange(e)} placeholder='Example@abc.com' />
        </section>
        <section className='email-section'>

        <label  className='password-label'>Password</label>
        <input id="password" name="password" value={login.password} onChange={(e)=>handleChange(e)}  type="password" placeholder="12345678"/>
        </section>
        <section className='login-forget-pass'>
            <p>Forgot Password?</p>
        </section>
        <section className='login-login-div'>
            <button className='login-btn' onClick={handleSubmit}>Login</button>
        </section>
       
        </div>
        <section className='login-or-div'>
            <p>OR</p>
            <button className='login-btn-google' >Login with <FcGoogle className='login-google'/></button>
        </section>
   
        </>
  )
}

export default Login