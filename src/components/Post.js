import React, { useState } from 'react';
import '../styles/CSS/main.css';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon
import he from 'he'; // Import the HTML entity decoding library


const Post = ({ post }) => {

    const permaLink = post.permaLink;
    const image = post.url;

    //this is for the flairs tags that categorize the posts
    const flairBackgroundColor = post.link_flair_background_color;
    //adjust text color to background
    let flairTextColor = post.link_flair_text_color === 'light' ? '#fff' : '#000';


    //create preview of the post's text (cut down text if too long) 
    const htmlString = post.selftext_html
    let decodedHtmlString;
    if (htmlString) {
        decodedHtmlString = he.decode(htmlString);

    }



    let selftext = post.selftext;
    if (selftext.length > 800) {
        console.log(post.title)
        console.log(selftext.length)
    }

    return (
        <>
            {/* <Link to={permaLink}> */}
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
                        <div className='self-text-preview-wrapper'>
                            <div dangerouslySetInnerHTML={{ __html: decodedHtmlString }} />
                        </div>

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