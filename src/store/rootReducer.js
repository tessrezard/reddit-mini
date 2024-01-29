import { combineReducers } from '@reduxjs/toolkit';
import subredditsReducer from './slices/subredditSlice';
import subredditPostsReducer from './slices/subredditPostsSlice';
import postCommentsReducer from './slices/postCommentsSlice';
import searchReducer from './slices/searchSlice';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  subredditPosts: subredditPostsReducer,
  postComments: postCommentsReducer,
  search: searchReducer,
});

export default rootReducer;