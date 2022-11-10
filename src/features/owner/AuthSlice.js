import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

// Get owner from local storage
const owner = JSON.parse(localStorage.getItem("owner"));

// Initial state
const initialState = {
    owner: owner,
    status: "idle",
    error: null
};

// Register owner
export const register = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Login owner
export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Logout owner
export const logout = createAsyncThunk(
    "auth/logout",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AuthService.logout(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Auth slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.status = "loading";
        },
        [register.fulfilled]: (state, action) => {
            state.status = "idle";
            state.owner = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.status = "idle";
            state.error = action.payload;
        },
        [login.pending]: (state, action) => {
            state.status = "loading";
        },
        [login.fulfilled]: (state, action) => {
            state.status = "idle";
            state.owner = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.status = "idle";
            state.error = action.payload;
        },
        [logout.pending]: (state, action) => {
            state.status = "loading";
        },
        [logout.fulfilled]: (state, action) => {
            state.status = "idle";
            state.owner = null;
        },
        [logout.rejected]: (state, action) => {
            state.status = "idle";
            state.error = action.payload;
        }
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;