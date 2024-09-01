import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleReducer";
import mailReducer from "./mailReducer";
import threadReducer from "./threadReducer";
import userReducer from "./userReducer";

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        mail: mailReducer,
        thread: threadReducer,
        user: userReducer
    }
})

export default store