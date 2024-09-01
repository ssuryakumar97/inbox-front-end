import { createSlice } from "@reduxjs/toolkit";

const mailReducer = createSlice({
    name: "mail",
    initialState: [],
    reducers: {
        insertData : (state,action ) => {
            return state = [...action.payload] 
        }
    }
})

export const {insertData} = mailReducer.actions;

export default mailReducer.reducer;