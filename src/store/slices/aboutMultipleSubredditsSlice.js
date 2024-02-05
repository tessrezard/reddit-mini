// This slice will handle the state related to 
// fetching and managing the about data for MULTIPLE subreddits, notably used in PopularHeader.

import { createSlice } from '@reduxjs/toolkit';
import { fetchAboutMultipleSubreddits } from '../thunks';


const multipleSubredditsSlice = createSlice({
  name: 'aboutMultipleSubreddits',
  initialState: {
    dataAboutMultiple: [],  // Use an array
    loadingAboutMultiple: false,
    errorAboutMultiple: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutMultipleSubreddits.pending, (state) => {
        state.loadingAboutMultiple = true;
        state.errorAboutMultiple = null;
      })
      .addCase(fetchAboutMultipleSubreddits.fulfilled, (state, action) => {
        state.dataAboutMultiple = action.payload; // Set the data to the payload array
        state.loadingAboutMultiple = false;
      })
      .addCase(fetchAboutMultipleSubreddits.rejected, (state, action) => {
        state.loadingAboutMultiple = false;
        state.errorAboutMultiple = action.error.message;
      });
  },
});

export default multipleSubredditsSlice.reducer;
