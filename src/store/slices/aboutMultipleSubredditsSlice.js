// This slice will handle the state related to 
// fetching and managing the about data for MULTIPLE subreddits, notably used in PopularHeader.

import { createSlice } from '@reduxjs/toolkit';
import { fetchAboutMultipleSubreddits } from '../thunks';


const multipleSubredditsSlice = createSlice({
  name: 'aboutMultipleSubreddits',
  initialState: {
    data: [],  // Use an array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutMultipleSubreddits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutMultipleSubreddits.fulfilled, (state, action) => {
        state.data = action.payload; // Set the data to the payload array
        state.loading = false;
      })
      .addCase(fetchAboutMultipleSubreddits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default multipleSubredditsSlice.reducer;
