import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import '../styles/CSS/main.css';
import LeadImage from "../components/LeadImage";
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon
import he from 'he'; // Import the HTML entity decoding library
import { useSelector } from 'react-redux';
import CommunityIcon from '../components/CommunityIcon';


const Post = ({ post, aboutSubreddit }) => {



    // const aboutThisSubreddit = () => (aboutSubreddit ? aboutSubreddit : dataAbout);

    
    const { dataAbout } = useSelector((state) => state.aboutSubreddit);

    let aboutThisSubreddit;
    if (aboutSubreddit) {
        // console.log('aboutSubreddit', aboutSubreddit);
        aboutThisSubreddit = aboutSubreddit;
    } else {
        aboutThisSubreddit = dataAbout;

    }
    // ----------------------------------------------------------------
    // FOR FLAIR TAGS
    //they categorize the posts
    const flairBackgroundColor = post.link_flair_background_color;
    //adjust text color to background
    let flairTextColor = post.link_flair_text_color === 'light' ? '#fff' : '#000';


    // ----------------------------------------------------------------
    // FOR SELF TEXT / TEXT PREVIEW
    // parse encoded html
    // using he library
    const htmlString = post.selftext_html
    let decodedHtmlString;
    if (htmlString) {
        decodedHtmlString = he.decode(htmlString);
    }
    const selfTextPreview = useRef(null);
    const [shouldShowOverlay, setShouldShowOverlay] = useState(false);


    // ----------------------------------------------------------------
    // FOR TEXT OVERLAY
    useEffect(() => {
        // if self text long, use overlay so that text fades at the bottom
        const containerHeight = selfTextPreview.current.clientHeight;
        if (containerHeight > 250) {
            setShouldShowOverlay(true);
        } else {
            setShouldShowOverlay(false);
        }
        try {
            // dispatch(fetchAboutSubreddit(post.subreddit));
        } catch (error) {
            return <div>Error: {error}</div>;
        }
    }, [post]);
    

    // ----------------------------------------------------------------
    // FOR  POST TITLE
    let postTitle = he.decode(post?.title || '');

    return (
        <>
            <div className='post-layout-container'>
                <div className='post-container'>

                    <div className='post-header'>
                    <Link to={`/r/${post.subreddit}`} className='post-subreddit-container' >
                                <div className='post-subreddit-icon'>
                                    <CommunityIcon subreddit={aboutThisSubreddit} />
                                </div>
                                <p className='post-subreddit-name'>
                                    r/{post.subreddit}
                                </p>
                            </Link>
                        <p className='author-name'>
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

                        <div ref={selfTextPreview} className='self-text-preview-wrapper'>
                            <div dangerouslySetInnerHTML={{ __html: decodedHtmlString }} />
                            {shouldShowOverlay ? (<div id="overlay"></div>) : <></>}
                        </div>

                        {shouldShowOverlay ?
                            (
                                <>
                                    <div className='see-whole-post'> See whole Post </div>
                                </>
                            )
                            : <></>}

                        <LeadImage post={post} />

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
        </>


    );
};

export default Post;