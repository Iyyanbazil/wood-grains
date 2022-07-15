import React from 'react'
import Header from './header'
import Services from './Services'
import Trending from './trending'
import AllProduct from './allProducts'
import Footer from './footer'
import {useEffect,useState} from 'react'
import axios from "axios"
const Home = () => {
const [AllProducts, setAllProducts] = useState([])
useEffect(() => {
  const data= axios.get("http://localhost:8000/").then((res)=>{
   console.log(res.data);
   setAllProducts(res.data)
  })

 }, [])
  return (
  <>
  <Header/>
  <Services/>
  <Trending all={AllProducts} />
  <AllProduct all={AllProducts}/>
  <Footer/>
  </>
  )
}

export default Home