import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubredditPosts, fetchAboutSubreddit, fetchAboutMultipleSubreddits } from '../store/thunks';
import Post from '../components/Post'
import '../styles/CSS/main.css';
import SubredditHeader from '../components/SubredditHeader';
import PopularHeader from "../components/PopularHeader";
import Loading from "../components/Loading";

function Subreddit() {
    const { subreddit } = useParams();

    const navigate = useNavigate();

    const handleLinkClick = (post) => {
        // Use navigate to append the new route to the existing URL
        const modifiedTitle = post.title.replace(/\s/g, '_').replace(/\//g, '_').toLowerCase();
        try {
            navigate(`../comments/${modifiedTitle}`, { state: { post: post } });
        } catch (error) {
            return <div>Error: {error}</div>;
        }
    };


    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.subredditPosts);
    const { dataAbout } = useSelector((state) => state.aboutSubreddit);
    const { dataAboutMultiple } = useSelector((state) => state.aboutMultipleSubreddits);

    const isPopular = subreddit === 'popular';

    // if regular subreddit
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            if (!isPopular) {
                try {
                    dispatch(fetchSubredditPosts(subreddit));
                    dispatch(fetchAboutSubreddit(subreddit));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else if (isPopular) {
                try {
                    dispatch(fetchSubredditPosts(subreddit));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [dispatch, subreddit]);




    let subredditsArr = [];
    for (let n in data) {
        subredditsArr.push(data[n].subreddit)
    }
    // console.log(subredditsArr);


    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            if (isPopular && data) {
                try {
                    dispatch(fetchAboutMultipleSubreddits(subredditsArr));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [dispatch, data]);




    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            <div className="subreddit-page-container">
                {isPopular ?
                    (
                        <>
                            <PopularHeader />
                        </>
                    ) : (
                        <>
                            <SubredditHeader subreddit={dataAbout} />
                        </>
                    )
                }

                {isPopular ?
                    (
                        <>
                            <ul className='subreddit-ul' style={{ listStyle: 'none' }}>
                                {data.map((post, index) => (
                                    <li key={post.id}>
                                        <div onClick={() => handleLinkClick(post)} >
                                            <Post post={post} aboutSubreddit={dataAboutMultiple[index]} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className='subreddit-ul' style={{ listStyle: 'none' }}>
                                {data.map((post) => (
                                    <li key={post.id}>
                                        <div onClick={() => handleLinkClick(post)} >
                                            <Post post={post} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
                }

            </div>
        </>
    );
};

export default Subreddit;




