import { configureStore } from "@reduxjs/toolkit";
import authOwnerReducer from "../features/owner/AuthSlice";
import authUserReducer from "../features/user/AuthSlice";
import gigReducer from "../features/gig/GigSlice";
import applicationReducer from "../features/application/ApplicationSlice";
import authAdminReducer from "../features/admin/AuthSlice";

export const store = configureStore({
    reducer: {
        authOwner: authOwnerReducer,
        authUser: authUserReducer,
        authAdmin: authAdminReducer,
        gig: gigReducer,
        application: applicationReducer
    }
});