import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

// Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

// Initial state
const initialState = {
    user: user,
    status: "idle",
    error: null
};

// Register user
export const register = createAsyncThunk(
    "auth/register",
    async (user, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(user);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.user);
        }
    }
);

// Login user
export const login = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(user);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.user);
        }
    }
);

// Logout user
export const logout = createAsyncThunk(
    "auth/logout",
    async (user, { rejectWithValue }) => {
        try {
            const response = await AuthService.logout(user);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.user);
        }
    }
);

// Auth slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
            state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
            })    
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(logout.pending, (state) => {
                state.status = "loading";
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;