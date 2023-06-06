import { combineReducers } from "@reduxjs/toolkit";
import recipes from "./recipes.slice";

const rootReducer = combineReducers({
    recipes,
})

export default rootReducer;