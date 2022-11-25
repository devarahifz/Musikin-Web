import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApplicationService from "./ApplicationService";

// Initial state
const initialState = {
  application: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ""
};

// Get all applications
export const getAllApplications = createAsyncThunk(
  "application/getAllApplications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApplicationService.getAllApplications();
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

// Get application by id
export const getApplicationById = createAsyncThunk(
  "application/getApplicationById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApplicationService.getApplicationById(id);
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

// Create new application
export const createApplication = createAsyncThunk(
  "application/createApplication",
  async (application, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authUser?.user?.data?.token;
      const id = thunkAPI.getState().authUser?.user?.data?.id;
      const photo = thunkAPI.getState().authUser?.user?.data?.photo;
      const gigId = thunkAPI.getState().gig?.gig?.gig?.id;
      // console.log(gigId)
      // console.log(id)
      // console.log(token)
      console.log("user foto:"+photo)
      
      return await ApplicationService.createApplication(application, token, id, gigId, photo);
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

// Update application
export const updateApplication = createAsyncThunk(
  "application/updateApplication",
  async ({id, application}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authUser?.user?.data?.token;
      return await ApplicationService.updateApplication(application, token, id);
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

// Update application status
export const updateApplicationStatus = createAsyncThunk(
  "application/updateApplicationStatus",
  async ({id, application}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authOwner?.owner?.data?.token;
      console.log(id)
      // const id = thunkAPI.getState().application?.application?.gigs?.id
      console.log(token)
      const response = await ApplicationService.updateApplicationStatus(id, application, token);
      return response
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

// Delete application
export const deleteApplication = createAsyncThunk(
  "application/deleteApplication",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authUser?.user?.data?.token;
      return await ApplicationService.deleteApplication(id, token);
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

// Application slice
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application = action.payload;
      })
      .addCase(getAllApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getApplicationById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApplicationById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application = action.payload;
      })
      .addCase(getApplicationById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createApplication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application.push(action.payload);
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateApplication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateApplication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application = action.payload;
      })
      .addCase(updateApplication.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateApplicationStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.application = action.payload;
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteApplication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application = state.application.filter((application) => application.id !== action.payload);
      })
      .addCase(deleteApplication.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = applicationSlice.actions;
export default applicationSlice.reducer;