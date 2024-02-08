/* eslint-disable no-unused-vars */
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice" //counterSlice.reducer dedik bu sayede buraya import ettik

export const store = configureStore({
    reducer:{
        counter : counterReducer
    }
}) 