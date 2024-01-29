
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubredditPosts, getSubreddits, getPostComments, getSearch } from '../app/API';

// export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async () => {
//   try {
//     const subreddits = await getSubreddits();
//     return subreddits;
//   } catch (error) {
//     throw error;
//   }
// });

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


export const fetchSearch = createAsyncThunk('search/fetchSearch', async (term) => {
  try {
    const results = await getSearch(term);
    console.log('results', results);
    return results;
  } catch (error) {
    throw error;
  }
});