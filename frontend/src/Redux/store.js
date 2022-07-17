import {configureStore,createSlice,combineReducer} from "@reduxjs/toolkit"
import { NavActions } from "./navbarSlice";
import NavSlice from "./navbarSlice";
import productSlice from "./productSlice";
const store =configureStore({
    reducer:{
Search:NavSlice.reducer,
product:productSlice.reducer,
    }
})
export default store;

