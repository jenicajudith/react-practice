import { createSlice } from "@reduxjs/toolkit";

const Send=createSlice({
    name:"updateword",
    initialState:{
        word:[]

    },
    reducers:{
        add(state,action){
            state.word.push(action.payload);
        }

    }
})

export const {add}=Send.actions;
export default Send.reducer;