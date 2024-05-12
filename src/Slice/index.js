import {createSlice,configureStore} from "@reduxjs/toolkit"


const initialState={count:0}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count+=action.payload
        },
        decrement:(state,action)=>{
            state.count-=action.payload
        }
    }
})

export const {increment,decrement}=counterSlice.actions

const store=configureStore({reducer:{counter:counterSlice.reducer}})

export default store