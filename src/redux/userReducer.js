import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: false,
    reducers: {
        login : (state, action) => {
            return state = action.payload
        }
    }
})

export const {login} = userReducer.actions;

export default userReducer.reducer;