import React, { useRef, useEffect, useState } from 'react';
import '../styles/CSS/main.css';
import LeadImage from "../components/LeadImage";
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon
import he from 'he'; // Import the HTML entity decoding library


const Post = ({ post }) => {

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
    }, []);



    // ----------------------------------------------------------------

    return (
        <>
            <div className='post-layout-container'>
                <div className='post-container'>

                    <div className='post-header'>
                        <p className='subreddit-name'>
                            r/{post.subreddit}
                        </p>
                        <p className='author-name'>
                            u/{post.author}
                        </p>
                    </div>

                    <div className='post-main'>

                        <p className='post-title'>
                            {post.title}
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
                        
                        <LeadImage post={post}/>

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