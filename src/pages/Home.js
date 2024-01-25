import React , { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../store/thunks';
import { NavLink} from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.subreddits);
  // NOTE: useSelector is a hook from React Redux library. Takes whole state and gets subbredits slice
  // NOTE: using destructuring assignment to get properties of slice
  console.log('data', data);
  

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
  
    return (
      <div>
        <h1>Subreddits</h1>

        <ul>
          {data.map((subreddit) => (
            <li key={subreddit.id}>
                                <NavLink to={`/r/${subreddit.url.slice(3)}`} >
                                    {subreddit.title}
                                </NavLink>
                            </li>          ))}
        </ul>
      </div>
    );
  };


export default Home;