import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts } from '../store/thunks';
import Post from '../components/Post'

function Subreddit({ subreddit }) {
    const { topic } = useParams('topic');

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subredditPosts);

    console.log('data: ', data);

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
            <h1>Posts for {topic}</h1>
            <ul style={{listStyle: 'none'}}>
                {data.map((post) => (
                    <>
                    <li key={post.id} >
                    <Post post={post}/>
                    </li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Subreddit;




