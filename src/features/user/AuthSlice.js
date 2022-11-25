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

// Get user by id
export const getUserById = createAsyncThunk(
    "auth/getUserById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await AuthService.getUserById(id);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.user);
        }
    }
);

// Update user
export const updateUser = createAsyncThunk(
    "auth/updateUser",
    async ({id, user}, thunkAPI) => {
        try {
            const token = thunkAPI.getState().authUser?.user?.data?.token;
            const response = await AuthService.updateUser(id, user, token);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.user);
        }
    }
);

// Update user password
export const updateUserPassword = createAsyncThunk(
    "auth/updateUserPassword",
    async ({id, user}, thunkAPI) => {
        try {
            const token = JSON.parse(localStorage.getItem("user")).data.token;
            const response = await AuthService.updateUserPassword(id, user, token);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.user);
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
            .addCase(logout.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(getUserById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateUserPassword.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateUserPassword.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(updateUserPassword.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;