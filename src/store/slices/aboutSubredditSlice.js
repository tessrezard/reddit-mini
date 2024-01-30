// This slice will handle the state related to 
// fetching and managing a list of subreddits.

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