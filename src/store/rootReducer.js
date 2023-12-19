import { combineReducers } from '@reduxjs/toolkit';
import subredditsReducer from './slices/subredditSlice';
import subredditPostsReducer from './slices/subredditPostsSlice';
import postCommentsReducer from './slices/postCommentsSlice';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  subredditPosts: subredditPostsReducer,
  postComments: postCommentsReducer,
});

export default rootReducer;