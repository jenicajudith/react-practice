import {configureStore} from "@reduxjs/toolkit";
import Send from "./Createslice";
const Store=configureStore({
    devTools:false, //updation would be visible in browser

    reducer:{
       Send:Send
    }
})

export default Store;