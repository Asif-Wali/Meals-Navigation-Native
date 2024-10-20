import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./liked";
export const store =configureStore({
    reducer: {
        likedMeals: likedReducer
    },

})
