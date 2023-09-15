import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "./reducers/mangasReducer";
import authReducer from './reducers/authReducer';

export const store = configureStore({
    reducer: {
        mangasReducer,
        authReducer
    }
})