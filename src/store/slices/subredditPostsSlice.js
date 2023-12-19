// This slice will handle the state related to 
// fetching and managing posts for a specific subreddit.


import { createSlice } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../thunks'; // Import the corresponding thunk

const subredditPostsSlice = createSlice({
  name: 'subredditPosts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubredditPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubredditPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubredditPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subredditPostsSlice.reducer;