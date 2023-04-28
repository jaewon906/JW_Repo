import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stock: 10,
    goods: 10,
}

const counter = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.stock -=1
            state.goods +=1
            console.log("+")
        },
        decrement:(state)=>{
            state.stock +=1
            state.goods -=1
            console.log("-")
        }
    }
})

export const{increment, decrement} = counter.actions
export default counter.reducer;
