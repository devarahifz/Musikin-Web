import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "./AdminService";

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
  "admin/register",
  async (admin, { rejectWithValue }) => {
    try {
      const response = await AdminService.register(admin);
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
      const response = await AdminService.login(admin);
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
      const response = await AdminService.logout(admin);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.admin);
    }
  }
);

// Get all users
export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin?.admin?.token;
      const response = await AdminService.getAllUsers(token);
      return response;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();

        return thunkAPI.rejectWithValue(message);
    }
  }
);


// Admin slice
const adminSlice = createSlice({
  name: "admin",
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

    // Get all users
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.admin = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;