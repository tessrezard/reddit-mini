import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../store/thunks';
import { NavLink } from "react-router-dom";
import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'

const Home = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.subreddits);
  // NOTE: useSelector is a hook from React Redux library. Takes whole state and gets subreddits slice
  // NOTE: using destructuring assignment to get properties of slice

  const isItHome = (subreddit) => subreddit.title === 'Home';

  useEffect(() => {
    // Dispatch the async thunk action when the component mounts
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log('data.community_icon', data.community_icon);
  // console.log('data.icon_img', data.icon_img);
  // console.log('data.title', data.title);

  return (
    <div>
      <h1>Explore Subreddits </h1>


      <ul>
        {data
          .filter(subreddit => !isItHome(subreddit))
          .map((subreddit) => (
            <li key={subreddit.id}>
              <NavLink to={`/r/${subreddit.url.slice(3)}`}>
                <div className='home-link'>
                  <div className="home-subreddit-community-icon">
                    <CommunityIcon subreddit={subreddit} />
                  </div>

                  <p>{subreddit.title}</p>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};


export default Home;

// "https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png?width=256&amp;s=c0afcd1490e52c1641a698b5453570b7bec50b11"

// "https://styles.redditmedia.com/t5_12967t/styles/communityIcon_rh7ocpigb9t51.png?width=256&amp;s=fc8ce762012139f5f4bb3fe341ec1676e175e7b3"

// icon
// "https://b.thumbs.redditmedia.com/MDQjKWvNW82SfYXHbA9eFY1O-AFyT-4tpqWOWl3Xo-s.png"
// comunity icom 
// "https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png?width=256&amp;s=c0afcd1490e52c1641a698b5453570b7bec50b11"


