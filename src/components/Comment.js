import React from 'react';
import '../styles/CSS/main.css';
import he from 'he'; // Import the HTML entity decoding library




const Comment = ({ comment }) => {



    // ----------------------------------------------------------------
    // TO PARSE BODY HTML
    // from data, parse encoded html (to keep formatting)
    // using he library :)
    const htmlString = comment.body_html
    let decodedHtmlString;
    if (htmlString) {
        decodedHtmlString = he.decode(htmlString);
    }

    return (
        <>
            <div className='comment-container'>
                <div className='comment-header'>
                    <p className='comment-author-name'>
                        u/{comment.author}
                    </p>
                </div>



                <div className='comment-body'>

                    <div className='self-text-preview-wrapper'>
                        <div dangerouslySetInnerHTML={{ __html: decodedHtmlString }} />
                    </div>

                    <div className='comment-ups'>
                        <p className='comment-ups-icon'>
                            ⇧
                        </p>
                        <p className='comment-ups-number'>
                            {comment.ups}
                        </p>
                        <p className='comment-ups-icon'>
                            ⇩
                        </p>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Comment;