import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts } from '../store/thunks';


function Subreddit({ subreddit }) {
    const { topic } = useParams('topic');

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subredditPosts);

    useEffect(() => {
        dispatch(fetchSubredditPosts(topic));
    }, [dispatch, topic]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>

            <>
                <div style={{ backgroundColor: 'aqua' }}>
                    <h1> {topic}</h1>
                </div>
            </>
            <h1>Posts for {subreddit}</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Subreddit;




