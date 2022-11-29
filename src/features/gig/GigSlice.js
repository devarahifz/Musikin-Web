import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GigService from "./GigService";

// Initial state
const initialState = {
  gig: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ""
};

// Get all gigs
export const getAllGigs = createAsyncThunk(
  "gig/getAllGigs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GigService.getAllGigs();
      return response;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
        return rejectWithValue(message);
      }
    }
    );
    
// Get gig by id
export const getGigById = createAsyncThunk(
  "gig/getGigById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await GigService.getGigById(id);
      return response;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();

        return rejectWithValue(message);
      }
  }
);
    
// Create new gig
export const createGig = createAsyncThunk(
  "gig/createGig",
  async (gig, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authOwner?.owner?.data?.token;
      const id = thunkAPI.getState().authOwner?.owner?.data?.id;
      
      return await GigService.createGig(gig, token, id);
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
  "gig/updateGig",
  async ({id, gig}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authOwner?.owner?.data?.token;
      const response = await GigService.updateGig(id, gig, token);
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
  "gig/deleteGig",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authOwner?.owner?.data?.token;
      const response = await GigService.deleteGig(id, token);
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

// Get all gigs by owner id
export const getAllGigsByOwnerId = createAsyncThunk(
  "gig/getAllGigsByOwnerId",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authOwner?.owner?.data?.token;
      id = thunkAPI.getState().authOwner?.owner?.data?.id;
      const response = await GigService.getAllGigsByOwnerId(id, token);
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


// Gig slice
export const gigSlice = createSlice({
  name: "gig",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGigs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllGigs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gig = action.payload;
      })
      .addCase(getAllGigs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getGigById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGigById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gig = action.payload;
      })
      .addCase(getGigById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createGig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.gig.gigs.push(action.payload);
      })
      .addCase(createGig.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateGig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.gig.gigs.push(action.payload);
      })
      .addCase(updateGig.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGig.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gig = state.gig.gig.filter((gig) => gig.id !== action.payload);
      })  
      .addCase(deleteGig.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllGigsByOwnerId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllGigsByOwnerId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gig = action.payload;
      })
      .addCase(getAllGigsByOwnerId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = gigSlice.actions;
export default gigSlice.reducer;