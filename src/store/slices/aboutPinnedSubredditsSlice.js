// This slice will handle the state related to 
// fetching and managing the about data for MULTIPLE subreddits, notably used in PopularHeader.

import { createSlice } from '@reduxjs/toolkit';
import { fetchAboutPinnedSubreddits } from '../thunks';


const pinnedSubredditsSlice = createSlice({
  name: 'aboutPinnedSubreddits',
  initialState: {
    dataAboutPinned: [],  // Use an array
    loadingAboutPinned: false,
    errorAboutPinned: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutPinnedSubreddits.pending, (state) => {
        state.loadingAboutPinned = true;
        state.errorAboutPinned = null;
      })
      .addCase(fetchAboutPinnedSubreddits.fulfilled, (state, action) => {
        state.dataAboutPinned = action.payload; // Set the data to the payload array
        state.loadingAboutPinned = false;
      })
      .addCase(fetchAboutPinnedSubreddits.rejected, (state, action) => {
        state.loadingAboutPinned = false;
        state.errorAboutPinned = action.error.message;
      });
  },
});

export default pinnedSubredditsSlice.reducer;
