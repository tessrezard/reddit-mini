# Reddit Mini
[Reddit Mini](https://reddit-mini-tr.netlify.app/) is live at https://reddit-mini-tr.netlify.app/ 

As this project is front-end-focused, I use be the unofficial JSON API which doesn’t need a backend; it allows you to make requests for read-only Reddit data directly from the browser. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main Technologies: 

React\
Redux toolkit\
React Router\
Sass


## structure and naming concentions in relation to reddit: 

A subreddit is a collection of posts relating to a subject.
If you click on a post, you will go to it's thread.
The thread is the post and the comments related to it. 




## Issues to resolve: 
- I am stuck on how to get the audio to work for 'hosted:video' type of videos (in LeadImage).
    This seems to be a common issue with the reddit API, which will require significant attention to solve. The Reddit API returns the audio and video separately. I will need to find a way to merge of overlay them. 
- The recurring error: 429 (Too Many Requests), No 'Access-Control-Allow-Origin' header is present on the requested resource.\
    I think I have resolved this, but I'm uncertain : I implemented caching in local storage for the 'about subreddit' data to reduce API calls, clearing local storage when it is full, and starting again. This was just a quick fix but I have not encountered this problem since. 
