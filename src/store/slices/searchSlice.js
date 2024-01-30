//This slice will handle a search from a search term 


import { createSlice } from '@reduxjs/toolkit';
import { fetchSearch } from '../thunks'; // Import the corresponding thunk

const searchSlice= createSlice({
  name: 'search',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;