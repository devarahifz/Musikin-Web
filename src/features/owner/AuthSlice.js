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
    async (owner, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(owner);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.owner);
        }
    }
);

// Login owner
export const login = createAsyncThunk(
    "auth/login",
    async (owner, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(owner);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.owner);
        }
    }
);

// Logout owner
export const logout = createAsyncThunk(
    "auth/logout",
    async (owner, { rejectWithValue }) => {
        try {
            const response = await AuthService.logout(owner);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.owner);
        }
    }
);

// Get owner by id
export const getOwnerById = createAsyncThunk(
    "auth/getOwnerById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await AuthService.getOwnerById(id);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.owner);
        }
    }
);

// Update owner
export const updateOwner = createAsyncThunk(
    "auth/updateOwner",
    async ({id, owner}, thunkAPI) => {
        try {
            const token = thunkAPI.getState().authOwner?.owner?.data?.token;
            const response = await AuthService.updateOwner(id, owner, token);
            console.log(token)
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.owner);
        }
    }
);

// Update owner password
export const updateOwnerPassword = createAsyncThunk(
    "auth/updateOwnerPassword",
    async ({id, owner}, thunkAPI) => {
        try {
            const token = JSON.parse(localStorage.getItem("owner")).data.token;
            const response = await AuthService.updateOwnerPassword(id, owner, token);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.owner);
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
            state.owner = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.owner = null;
            })    
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.owner = action.payload;
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
                state.owner = action.payload;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(getOwnerById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getOwnerById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.owner = action.payload;
            })
            .addCase(getOwnerById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateOwner.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateOwner.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.owner = action.payload;
            })
            .addCase(updateOwner.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateOwnerPassword.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateOwnerPassword.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.owner = action.payload;
            })
            .addCase(updateOwnerPassword.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;