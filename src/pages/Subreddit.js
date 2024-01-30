import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts, fetchAboutSubreddit } from '../store/thunks';
import Post from '../components/Post'
import '../styles/CSS/main.css';
import SubredditHeader from '../components/SubredditHeader'


function Subreddit() {
    const { subreddit } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to append the new route to the existing URL
        navigate(`../comments/${post.title.replace(/\s/g, '_')}`, { state: { post: post } });
    };


    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subredditPosts);
    const { dataAbout, loadingAbout, errorAbout } = useSelector((state) => state.aboutSubreddit);

    let isPopular;
    if (subreddit === 'popular') {
        isPopular = true
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
              dispatch(fetchSubredditPosts(subreddit));
              dispatch(fetchAboutSubreddit(subreddit));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();

    }, [dispatch, subreddit]);

    
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="subreddit-page-container">
            {isPopular ?
                (<></>)
                : 
                (
                <>
                <SubredditHeader subreddit={dataAbout}/>
                

                </>)
            }

            <ul style={{ listStyle: 'none' }}>
                {data.map((post) => (
                    <div onClick={() => handleLinkClick(post)} key={post.id}>
                        <Post post={post} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Subreddit;




