import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import {FcGoogle} from "react-icons/fc"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import API from "./API"
const Login = () => {
    const [login, setlogin] = useState({
        email:"",
        password:"",
    })
    const [currentUser,setcurrentUser]=useState({})
   const [isLogin, setisLogin] = useState("false")
   const [spinner,setspinner]=useState(false)
    const handleChange=(e)=>{
      const {value,name}=e.target
      setlogin({
        ...login,
        [name]:value
      })
      console.log(login);
    }
    const handleSubmit= async()=>{
        setspinner(true)
        if(login.email==="" || login.password===""){
            setspinner(false)
            alert("Fill the required field")
        }else{
            setisLogin("true")
            const res=await axios.post(`${API}login`,login)
            console.log(res.data);
            window.localStorage.setItem("user",JSON.stringify(res.data))
            if(res.data.msg!=="No such user exist"){
                setspinner(false)
                window.localStorage.setItem("islogin","true")
            }
           
            if(res.data.msg==="No such user exist"){
                setspinner(false)
                alert("No such user")
                 window.localStorage.setItem("islogin","false")
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
   <div className={spinner ? ("active-spinner-login"):("disable-spinner-login")}>
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
        <Link to="/sign" className='new-login'>New? Sign up</Link>
        {/* <section className='login-or-div'>
            <p>OR</p>
            <button className='login-btn-google-acc' >Login with <FcGoogle className='login-google'/></button>
        </section> */}
        </div>
        
   </div>
   
        
        
   
        </>
  )
}

export default Login