import React from 'react';
import '../styles/CSS/main.css';
import he from 'he'; // Import the HTML entity decoding library

const LeadImage = ({ post }) => {

    // ORDER OF PREFERENCE : 
    //  post.url 
    //  post.media_metadata works (for several images usually)
    //  post.thumbnail

    let urlImg;
    let mediaImgArr = [];
    let thumbnailImg;

    if (post.url) {
        if (post.url.endsWith('.jpeg') || post.url.endsWith('.jpg') || post.url.endsWith('.png')) {
            urlImg = post.url;
        }
    }

    let mediaImg;
    if (post.media_metadata) {
        const mediaObj = post.media_metadata;
        const keys = Object.keys(mediaObj)
        for (let i = 0; i < keys.length; i++) {
            const value = mediaObj[keys[i]].s.u;
            try {
                mediaImg = he.decode(value);
                mediaImgArr.push(mediaImg);
            } catch (error) {
                // console.error('Error decoding HTML entities:', error);
                mediaImg = '';
                mediaImgArr.push('');
            }
        }
    }


    if (post.thumbnail) {
        if (post.thumbnail.endsWith('.jpeg') || post.thumbnail.endsWith('.jpg') || post.thumbnail.endsWith('.png')) {
            thumbnailImg = post.thumbnail;
        }
    }


    return (
        <>
            {urlImg ?
                (<>
                    <img src={urlImg} alt={post.title} className='lead-img' />
                </>)
                :
                (<>
                {mediaImgArr.length > 0 ?
                (
                    <>
                        <img src={mediaImgArr[0]} alt={post.title} className='lead-img' />
                    </>) : (
                    <>
                    {thumbnailImg ?
                        <>
                            <img src={thumbnailImg} alt={post.title} className='thumbnail-img' />
                        </>
                        :
                        <>
                        </>
                    }
                    </>)}
                   
                </>)}
                
        </>
    );
};

export default LeadImage;


