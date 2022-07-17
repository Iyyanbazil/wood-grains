import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const productSlice=createSlice({
    name:"products",
    initialState:{products:[]},
    reducers:{
        getAll(state,action){
             axios.get("http://localhost:8000/").then((res)=>{
            state.products=res.data;
           
//    setAllProducts(res.data)
  })
 
        }
    }
})
export const productActions=productSlice.actions;
export default productSlice