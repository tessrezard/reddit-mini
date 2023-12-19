
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubredditPosts, getSubreddits, getPostComments } from '../app/API';

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async () => {
  try {
    const subreddits = await getSubreddits();
    return subreddits;
  } catch (error) {
    throw error;
  }
});

export const fetchSubredditPosts = createAsyncThunk('subredditPosts/fetchSubredditPosts', async (subreddit) => {
  try {
    const posts = await getSubredditPosts(subreddit);
    return posts;
  } catch (error) {
    throw error;
  }
});

export const fetchPostComments = createAsyncThunk('postComments/fetchPostComments', async (permalink) => {
  try {
    const comments = await getPostComments(permalink);
    return comments;
  } catch (error) {
    throw error;
  }
});