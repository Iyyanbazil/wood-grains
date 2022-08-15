import {configureStore,createSlice,combineReducer} from "@reduxjs/toolkit"
import { NavActions } from "./navbarSlice";
import {CartAcions} from "./cartSlice"
import { loadAction } from "./loadingSlice";
import NavSlice from "./navbarSlice";
import productSlice from "./productSlice";
import CartSlice from './cartSlice'
import LoadingSlice from "./loadingSlice";
const store =configureStore({
    reducer:{
Search:NavSlice.reducer,
product:productSlice.reducer,
count:CartSlice.reducer,
load:LoadingSlice.reducer,
    }
})
export default store;

