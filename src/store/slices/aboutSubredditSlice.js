// This slice will handle the state related to 
// fetching and managing the about data for a subreddit.

import { createSlice } from '@reduxjs/toolkit';
import { fetchAboutSubreddit } from '../thunks'; 

const aboutSubredditSlice = createSlice({
    name: 'aboutSubreddit',
    initialState: {
      dataAbout: [],
      loadingAbout: false,
      errorAbout: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAboutSubreddit.pending, (state) => {
          state.loadingAbout = true;
          state.errorAbout = null;
        })
        .addCase(fetchAboutSubreddit.fulfilled, (state, action) => {
          state.dataAbout = action.payload;
          state.loadingAbout = false;
        })
        .addCase(fetchAboutSubreddit.rejected, (state, action) => {
          state.loadingAbout = false;
          state.errorAbout = action.error.message;
        });
    },
  });
  
  export default aboutSubredditSlice.reducer;