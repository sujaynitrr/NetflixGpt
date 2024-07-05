import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice= createSlice({
    name:'gptSearch',
    initialState:{
        isToggleShow:false
    },
    reducers:{
        addShowToggle:(state)=>{
            state.isToggleShow = !state.isToggleShow
        }
    }
})

export const {addShowToggle} = gptSearchSlice.actions
export default gptSearchSlice.reducer