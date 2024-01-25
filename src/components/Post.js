import React, { useRef, useEffect, useState } from 'react';
import '../styles/CSS/main.css';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon
import he from 'he'; // Import the HTML entity decoding library


const Post = ({ post }) => {


    // FOR THUMBNAIL 
    const thumbnail = post.thumbnail;

    if (thumbnail.startsWith('https')){

    }
    // FOR IMAGE POST
    const image = post.url;



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
    const [shouldShowOverlay, setShouldShowOverlay] = useState(false);
    
    
    useEffect(() => {
        //if self text long, use overlay so that text fades at the bottom
        const containerHeight = selfTextPreview.current.clientHeight;
        if (containerHeight > 250) {
            setShouldShowOverlay(true);
        } else {
            setShouldShowOverlay(false);
        }
    }, []);


    return (
        <>
            {/* <Link to={permaLink}> */}
            {/* <Link to={`../comments/${post.id}/`}> */}

            <div className='post-layout-container'>
                <div className='post-container'>
                    <div className='post-header'>
                        <p>
                            r/{post.subreddit}  
                        </p>
                        <p>
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
                        <FaComment className='comment-icon' />
                        {post.num_comments}
                        {/* styles={{height: {post[thumbnail_height]}}} */}
                        {{ image } ?
                            (<img src={post.url} style={{ width: 100, height: 100 }} alt="Post Image" />) :
                            <></>
                        }
                        <img src={post.thumbnail} alt="Thumbnail Image" />
                    </div>

                </div>
            </div>
            {/* </Link> */}
        </>


    );
};

export default Post;