import {createSlice} from "@reduxjs/toolkit"

const LoadingSlice= createSlice({
    name:"load",
    initialState:{load:"false"},
    reducers:{
        change(state,action){
            state.load=action.payload
        }
    }
}
)
export const loadAction=LoadingSlice.actions
export default LoadingSlice