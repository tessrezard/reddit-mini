import React from 'react';

export const API_ROOT = 'https://www.reddit.com';
export const SUBREDDITS_ENDPOINT = `${API_ROOT}/subreddits.json`;

//GET LIST OF SUBREDDITS / (TOPICS)

export const getSubreddits = async () => {
    try {
      const response = await fetch(SUBREDDITS_ENDPOINT);
      if (!response.ok) {
        throw new Error(`Error fetching subreddits: ${response.statusText}`);
      }
      const json = await response.json();
      return json.data.children.map((subreddit) => subreddit.data);
    } catch (error) {
      console.error('Error fetching subreddits:', error);
      throw error;
    }
  };




//GET POSTS for subreddit/topic

export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error(`Error fetching data for ${subreddit}: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error(`Error fetching data for ${subreddit}:`, error);
    throw error;
  }
};

//GET COMMENTS for post 
// (post + comments = thread)

export const getPostComments = async (permalink) => {
  try {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    if (!response.ok) {
      throw new Error(`Error fetching comments for ${permalink}: ${response.statusText}`);
    }
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  } catch (error) {
    console.error(`Error fetching comments for ${permalink}:`, error);
    throw error;
  }
};



//////// 
  //SEARCH FROM SEARCH TERM

  export const getSearch = async (term) => {
    try {
      const response = await fetch(`${API_ROOT}/search.json?q=${term}`);
      if (!response.ok) {
        throw new Error(`Error fetching data for ${term}: ${response.statusText}`);
      }
      const json = await response.json();
      console.log('json', json.data.children.map((post) => post.data));
      return json.data.children.map((post) => post.data);
    } catch (error) {
      console.error(`Error fetching data for ${term}:`, error);
      throw error;
    }

  };



//GET ABOUT SUBREDDIT

export const getAboutSubreddit = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}/r/${subreddit}/about.json`);
    if (!response.ok) {
      throw new Error(`Error fetching data for ${subreddit}: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data;

  } catch (error) {
    console.error(`Error fetching the 'about' data for ${subreddit}:`, error);
    throw error;
  }
};
