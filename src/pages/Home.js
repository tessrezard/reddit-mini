import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../store/thunks';
import { NavLink } from "react-router-dom";
import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import Loading from "../components/Loading";

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
        return <Loading/>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


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
