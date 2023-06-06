import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/index"

export const store = configureStore({
    reducer,
    devTools: true,
})