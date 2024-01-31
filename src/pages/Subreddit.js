import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts, fetchAboutSubreddit } from '../store/thunks';
import Post from '../components/Post'
import '../styles/CSS/main.css';
import SubredditHeader from '../components/SubredditHeader'
import Loading from "../components/Loading";
import he from 'he'; // Import the HTML entity decoding library

function Subreddit() {
    const { subreddit } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to append the new route to the existing URL
        console.log(post.title);
        let decoded = he.decode(post.title);
        console.log(decoded);
        const modifiedTitle = post.title.replace(/\s/g, '_').replace(/\//g, '_').toLowerCase();
        console.log(post.url);
        try {
            navigate(`../comments/${modifiedTitle}`, { state: { post: post } });
        } catch (error) {
            return <div>Error: {error}</div>;
        }
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
        return <Loading />;
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
                        <SubredditHeader subreddit={dataAbout} />
                    </>)
            }

            <ul className='subreddit-ul' style={{ listStyle: 'none' }}>
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




