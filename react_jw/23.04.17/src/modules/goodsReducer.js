import {createSlice} from '@reduxjs/toolkit';

const initialState={
    stock:10,
    goods:1
}
export const stockGoodsValue =() =>{
    return initialState
  }
export const counterSlice = createSlice({
    name:"counter", //이 리듀서의 이름
    initialState,
    reducers:{ //함수로 바뀐 것이 중요한 특징, 기존처럼 유니크한 이름이 아니여도됌
        increment:(state) => {
            state.stock -=1
            state.goods +=1
            
        },
        decrement:(state) =>{
            state.stock +=1
            state.goods -=1
            
        }
    }
})
console.log(counterSlice)
export const{increment, decrement} = counterSlice.actions
export default counterSlice.reducer