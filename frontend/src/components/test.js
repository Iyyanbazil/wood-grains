import React from 'react'
import { useEffect,useState } from 'react'
import axios, { Axios } from 'axios'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { NavActions } from '../Redux/navbarSlice'

const Test = () => {
  const [all, setall] = useState([])
  const Search = useSelector((state) => state.Search.Search);
  const dispatch=useDispatch()
const getAll=async()=>{
 const data=await axios.get("http://localhost:8000/")
//  console.log(data.data.msg);
console.log(data);
setall(data.data)
console.log(all);
} 
  return (
   <>
   <h1>i am all</h1>
   <p>{Search}</p>
   <button onClick={()=>dispatch(NavActions.getValue())}>show</button>
   {all.map((elem)=>{
    return(
    <h2>{elem.name}</h2>
    )
  })}

   {/* {All.map((elem)=>{
    return(
    <h1>{elem.name}</h1>
    )
   })} */}
   </>
  )
}


export default Test