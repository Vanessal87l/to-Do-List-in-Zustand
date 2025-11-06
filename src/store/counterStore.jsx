    import { configureStore,createSlice } from '@reduxjs/toolkit'
    const counterSlice=createSlice({
  name:"counter",
  initialState:{count:0},
  reducers:{
    plus:(state)=>{
      state.count++
    },
    minus:(state)=>{
     if(state.count>0){
         state.count-- 
     }},  
  },
  restart:(state)=>{
    state.count=0
  },
  holagan:(state,action)=>{
    state.value+=action.payload
  }});
export const {plus,minus,restart,holagan}=counterSlice.actions;
export const store=configureStore({reducer:{
    counter:counterSlice.reducer}});