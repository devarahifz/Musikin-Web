import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

// Get admin from local storage
const admin = JSON.parse(localStorage.getItem("admin"));

// Initial state
const initialState = {
  admin: admin,
  status: "idle",
  error: null
};

// Register admin
export const register = createAsyncThunk(
  "auth/register",
  async (admin, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(admin);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.admin);
    }
  }
);

// Login admin
export const login = createAsyncThunk(
  "auth/login",
  async (admin, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(admin);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.admin);
    }
  }
);

// Logout admin
export const logout = createAsyncThunk(
  "auth/logout",
  async (admin, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout(admin);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.admin);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(register.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.admin = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    // Login
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.admin = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    // Logout
    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "succeeded";
      state.admin = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;