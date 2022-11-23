import React from 'react'
import Header from './header'
import Services from './Services'
import Trending from './trending'
import AllProduct from './allProducts'
import NewArrival from './NewArrival'
import Footer from './footer'
import {useEffect,useState} from 'react'
import axios from "axios"
import{useSelector,useDispatch} from "react-redux"
import { productActions } from '../Redux/productSlice'

import "./Home.css"
const Home = ({all}) => {
  const [namer,setnamer]=useState({})
  const [notify,setnotify]=useState(false)
useEffect(() => {
  const loger=window.localStorage.getItem("islogin")
  const newloger=JSON.parse(loger)
  if(newloger){
    const name=window.localStorage.getItem("user")
    
    if(name){
setnamer(JSON.parse(name))

setnotify(true)
    }
  }
setInterval(() => {
  setnotify(false)
}, 3000);
 
},[])





  return (
  <>
  <Header/>
  <p className={notify ? ("login-notify"):("not-notify")}>Login as <b> {namer.Fname}</b></p>
  <Services all={all}/>
  <Trending all={all} />
  {/* <NewArrival/> */}
  <AllProduct all={all}/>
  <Footer/>
  </>
  )
}

export default Home