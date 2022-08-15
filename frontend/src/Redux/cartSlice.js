import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import API from '../components/API'
const CartSlice=createSlice ({
    name:"count",
    initialState:{count:0},
    reducers:{
       
        setCount (state,action){
            state.count=action.payload
        }
        
    }
})
export const CartActions=CartSlice.actions
export default CartSlice