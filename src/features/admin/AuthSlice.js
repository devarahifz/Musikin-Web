import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

// Get admin from local storage
const authAdmin = JSON.parse(localStorage.getItem("admin"));

// Initial state
const initialState = {
  authAdmin: authAdmin,
  status: "idle",
  error: null
};

// Register admin
export const register = createAsyncThunk(
  "admin/register",
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
  "admin/login",
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
  "admin/logout",
  async (admin, { rejectWithValue }) => {
    try {
      const response = await AuthService.logout(admin);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.admin);
    }
  }
);

// Admin slice
const authSlice = createSlice({
  name: "authAdmin",
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