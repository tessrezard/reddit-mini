import { combineReducers } from '@reduxjs/toolkit';
import subredditsReducer from './slices/subredditSlice';
import subredditPostsReducer from './slices/subredditPostsSlice';
import postCommentsReducer from './slices/postCommentsSlice';
import searchReducer from './slices/searchSlice';
import aboutSubredditReducer from './slices/aboutSubredditSlice';
import aboutMultipleSubredditsReducer from './slices/aboutMultipleSubredditsSlice';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  subredditPosts: subredditPostsReducer,
  postComments: postCommentsReducer,
  search: searchReducer,
  aboutSubreddit: aboutSubredditReducer,
  aboutMultipleSubreddits: aboutMultipleSubredditsReducer,
});

export default rootReducer;