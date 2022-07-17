import { createSlice } from "@reduxjs/toolkit";

const NavSlice=createSlice({
    name:"Search",
    initialState:{Search:""},
    reducers:{
           setValue(state,action){
            state.Search=action.payload;
           }
    }
})

export const NavActions=NavSlice.actions;
export default NavSlice