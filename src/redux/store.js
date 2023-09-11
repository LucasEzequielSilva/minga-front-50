import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "./reducers/mangasReducer";

export const store = configureStore({
    reducer: {
        mangasReducer
    }
})