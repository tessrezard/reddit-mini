//This slice will handle the state related to 
// fetching and managing comments for a specific post.


import { createSlice } from '@reduxjs/toolkit';
import { fetchPostComments } from '../thunks'; // Import the corresponding thunk

const postCommentsSlice = createSlice({
  name: 'postComments',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postCommentsSlice.reducer;