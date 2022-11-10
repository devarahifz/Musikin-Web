import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/owner/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});