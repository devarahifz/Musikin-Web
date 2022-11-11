import { configureStore } from "@reduxjs/toolkit";
import authOwnerReducer from "../features/owner/AuthSlice";
import authUserReducer from "../features/user/AuthSlice";
import gigReducer from "../features/gig/GigSlice";

export const store = configureStore({
    reducer: {
        authOwner: authOwnerReducer,
        authUser: authUserReducer,
        gig: gigReducer
    }
});