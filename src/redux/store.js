import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleReducer";
import mailReducer from "./mailReducer";
import threadReducer from "./threadReducer";

const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        mail: mailReducer,
        thread: threadReducer
    }
})

export default store