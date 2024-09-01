import { createSlice } from "@reduxjs/toolkit";

const threadReducer = createSlice({
    name: "thread",
    initialState: {},
    reducers: {
        insertThreadData : (state,action ) => {
            return state = {...action.payload} 
        }
    }
})

export const {insertThreadData} = threadReducer.actions;

export default threadReducer.reducer;