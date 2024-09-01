import { createSlice } from "@reduxjs/toolkit";

const toogleReducer = createSlice({
    name: "toggle",
    initialState: true,
    reducers: {
        toggling : (state ) => {
            return state = !state
        }
    }
})

export const {toggling} = toogleReducer.actions;

export default toogleReducer.reducer;