import React from 'react'
import Header from './header'
import Services from './Services'
import Trending from './trending'
import AllProduct from './allProducts'
import Footer from './footer'
import {useEffect,useState} from 'react'
import axios from "axios"
import{useSelector,useDispatch} from "react-redux"
import { productActions } from '../Redux/productSlice'
const Home = ({all}) => {

  return (
  <>
  <Header/>
  <Services/>
  <Trending all={all} />
  <AllProduct all={all}/>
  <Footer/>
  </>
  )
}

export default Home