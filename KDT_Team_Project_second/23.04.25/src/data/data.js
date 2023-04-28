import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    contentsData:[],
    btnCount:false,
    id:[]
}

const dataSet = createSlice({
    name: 'dataSet',
    initialState,
    reducers: {
        // 장바구니 활성화 비활성화
        addCartbtn1: (state, action) => {
            state.btnCount = !state.btnCount
        },
        // 컨텐츠 데이터 가져오기
        contentGet:(state, action) => {
            state.contentsData = action.payload
        },
        // 특정 컨텐츠 누를 시 해당하는 Id 가져오기
        compareID:(state, action) => {
            state.id = action.payload
        }
    }
})


export const { addCartbtn1, contentGet, compareID } = dataSet.actions;
export default dataSet.reducer;