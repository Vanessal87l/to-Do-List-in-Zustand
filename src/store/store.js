import { configureStore }   from "@reduxjs/toolkit";
import counterReducer from "./counterStore.jsx";

export const store =configureStore({
    reducer:{
        counter:counterReducer,
    },
});