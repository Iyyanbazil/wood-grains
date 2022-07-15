import React from 'react'
import { useEffect,useState } from 'react'
import axios, { Axios } from 'axios'

const Test = () => {
  const [all, setall] = useState([])
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
   <button onClick={getAll}>show</button>
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