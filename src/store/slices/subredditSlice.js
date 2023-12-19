// This slice will handle the state related to 
// fetching and managing a list of subreddits.

import { createSlice } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../thunks'; // Import the corresponding thunk

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;