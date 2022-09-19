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

  return (
  <>
  <Header/>
  
  <Services all={all}/>
  <Trending all={all} />
  {/* <NewArrival/> */}
  <AllProduct all={all}/>
  <Footer/>
  </>
  )
}

export default Home