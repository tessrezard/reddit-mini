import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts } from '../store/thunks';
import Post from '../components/Post'

function Subreddit() {
    const { subreddit } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to append the new route to the existing URL
        navigate(`../comments/${post.title.replace(/\s/g, '_')}`, { state: { post: post } });
    };


    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subredditPosts);

    useEffect(() => {
        dispatch(fetchSubredditPosts(subreddit));
    }, [dispatch, subreddit]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>

            <>
                <div style={{ backgroundColor: 'plum' }}>
                    <h1> {subreddit}</h1>
                </div>
            </>
            <h1>Posts for {subreddit}</h1>
            <ul style={{ listStyle: 'none' }}>
                {data.map((post) => (
                    <>
                        <div onClick={() => handleLinkClick(post)}>
                            <Post post={post} />
                        </div>

                    </>

                ))}
            </ul>
        </div>
    );
};

export default Subreddit;




