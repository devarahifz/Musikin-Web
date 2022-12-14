import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminService from "./AdminService";

// Initial state
const initialState = {
  admin: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ""
};

// Get all users
export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
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

// Get user by id
export const getUserById = createAsyncThunk(
  "admin/getUserById",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.getUserById(id, token);
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

// Update user
export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({id, user}, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.updateUser(id, user, token);
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

// Delete user
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.deleteUser(id, token);
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

// Get all owners
export const getAllOwners = createAsyncThunk(
  "admin/getAllOwners",
  async (thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.getAllOwners(token);
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

// Get owner by id
export const getOwnerById = createAsyncThunk(
  "admin/getOwnerById",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.getOwnerById(id, token);
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

// Update owner
export const updateOwner = createAsyncThunk(
  "admin/updateOwner",
  async ({id, owner}, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.updateOwner(id, owner, token);
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

// Delete owner
export const deleteOwner = createAsyncThunk(
  "admin/deleteOwner",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.deleteOwner(id, token);
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

// Get all gigs
export const getAllGigs = createAsyncThunk(
  "admin/getAllGigs",
  async (thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.getAllGigs(token);
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

// Get gig by id
export const getGigById = createAsyncThunk(
  "admin/getGigById",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.getGigById(id, token);
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

// Update gig
export const updateGig = createAsyncThunk(
  "admin/updateGig",
  async ({id, gig}, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.updateGig(id, gig, token);
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

// Delete gig
export const deleteGig = createAsyncThunk(
  "admin/deleteGig",
  async (id, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("admin")).data.token;
      const response = await AdminService.deleteGig(id, token);
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
    // Users
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
    // Owners
      .addCase(getAllOwners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOwners.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getAllOwners.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getOwnerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOwnerById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getOwnerById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(updateOwner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOwner.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(updateOwner.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(deleteOwner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOwner.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(deleteOwner.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
    // Gigs
      .addCase(getAllGigs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllGigs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getAllGigs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getGigById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGigById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(getGigById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(updateGig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGig.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(updateGig.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(deleteGig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGig.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = payload;
      })
      .addCase(deleteGig.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
  }
});

export const { reset } = adminSlice.actions;

export default adminSlice.reducer;