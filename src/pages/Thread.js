import React, { useRef, useEffect, useState, Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { fetchPostComments } from '../store/thunks';
import { fetchPostComments, fetchAboutSubreddit } from '../store/thunks';
import '../styles/CSS/main.css';
import Comment from "../components/Comment";
import he from 'he'; // Import the HTML entity decoding library
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon
import Loading from "../components/Loading";
import LeadImage from "../components/LeadImage";
import CommunityIcon from '../components/CommunityIcon';


function Thread() {

    const location = useLocation();

    const post = location.state?.post || '';

    const permalink = post.permalink;

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.postComments);

    const { dataAbout } = useSelector((state) => state.aboutSubreddit);


    // FOR FLAIR TAGS
    //they categorize the posts
    const flairBackgroundColor = post.link_flair_background_color;
    //adjust text color to background
    let flairTextColor = post.link_flair_text_color === 'light' ? '#fff' : '#000';


    // FOR SELF TEXT / TEXT PREVIEW
    // from data, parse encoded html (to keep formatting)
    // using he library :)
    const htmlString = post.selftext_html
    let decodedHtmlString;
    if (htmlString) {
        decodedHtmlString = he.decode(htmlString);
    }
    const selfTextPreview = useRef(null);


    // FOR  POST TITLE
    let postTitle = he.decode(post?.title || '');



    useEffect(() => {
        try {
            dispatch(fetchPostComments(he.decode(permalink)));
            dispatch(fetchAboutSubreddit(post.subreddit));
        } catch (error) {
            return <div>Error: {error}</div>;
        }
        window.scrollTo(0, 0);
    }, [dispatch, permalink]);


    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            <div className='thread-page-container'>


                <div className='post-layout-container'>
                    <div className='thread-post-container'>

                        <div className='post-header'>
                            <Link to={`/r/${post.subreddit}`} className='post-subreddit-container' >
                                <div className='post-subreddit-icon'>
                                    <CommunityIcon subreddit={dataAbout} />
                                </div>
                                <p className='post-subreddit-name'>
                                    r/{post.subreddit}
                                </p>
                            </Link>


                            <p>
                                u/{post.author}
                            </p>
                        </div>

                        <div className='post-main'>

                            <p className='post-title'>
                                {postTitle}
                            </p>

                            <p className='flair' style={{ backgroundColor: flairBackgroundColor, color: flairTextColor }}>
                                {post.link_flair_text}
                            </p>

                            <div ref={selfTextPreview} >
                                <div dangerouslySetInnerHTML={{ __html: decodedHtmlString }} />
                            </div>

                            <div>
                                <LeadImage post={post} />
                            </div>

                            <div className='post-bubbles'>

                                <div className='post-ups-bubble'>
                                    <p className='ups-icon'>
                                        ⇧
                                    </p>
                                    <p className='ups-number'>
                                        {post.ups}
                                    </p>
                                    <p className='ups-icon'>
                                        ⇩
                                    </p>
                                </div>
                                <div className='post-comments-bubble'>
                                    <FaComment className='comment-icon' />
                                    {post.num_comments}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>




                <div className='thread-comments-container'>
                    <ul style={{ listStyle: 'none' }}>
                        {data.map((comment) => (
                            <li key={comment.id} >
                                <Comment comment={comment} />
                            </li>

                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Thread;