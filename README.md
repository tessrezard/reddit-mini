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

- The recurring error: 429 (Too Many Requests), No 'Access-Control-Allow-Origin' header is present on the requested resource\
The JSON API has a rate limit for requests, which I am coming up against when I am using the website too much or too quickly. 
I don't know how to fix this yet but I am looking into it.
