import React , { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../store/thunks';


const Home = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subreddits);
  
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
            <li key={subreddit.id}>{subreddit.title}</li>
          ))}
        </ul>
      </div>
    );
  };

//     return (
//         <>
//             <div style={{backgroundColor: 'plum'}}>
//                 <h1>Home</h1>
//             </div>
//         </>
//     );
// };

export default Home;