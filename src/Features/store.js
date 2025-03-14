import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice"
import MenuReducer from "./Menu/MenuSlice"

const store = configureStore({
    reducer : {
Auth : AuthReducer,
Menu : MenuReducer,
    }
})

export default store