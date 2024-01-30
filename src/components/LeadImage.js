import React, { useState } from 'react';
import '../styles/CSS/main.css';
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library

const LeadImage = ({ post }) => {



    // FIND LEAD IMAGE

    // ORDER OF PREFERENCE : 
    //  post.url 
    //  post.media_metadata works (for several images usually)
    //  post.thumbnail

    let urlImg;
    let thumbnailImg;
    let mediaImgArr = [];

    if (post.url) {
        if (post.url.endsWith('.jpeg') || post.url.endsWith('.jpg') || post.url.endsWith('.png')) {
            urlImg = post.url;
        }
    }

    let mediaImg;
    if (post.media_metadata) {
        const mediaObj = post.media_metadata;
        console.log(mediaObj);
        const keys = Object.keys(mediaObj)
        console.log('keys', keys);
        console.log(keys[0])
        for (let i = 0; i < keys.length; i++) {
            const value = mediaObj[keys[i]].s.u;
            console.log('value', value);
            try {
                mediaImg = he.decode(value);
                mediaImgArr.push(mediaImg);
            } catch (error) {
                // console.error('Error decoding HTML entities:', error);
                // Handle the error, provide a default value
                mediaImg = '';
                mediaImgArr.push('');
            }
        }
    }


    console.log('mediaImgArr', mediaImgArr);



    if (post.thumbnail) {
        if (post.thumbnail.endsWith('.jpeg') || post.thumbnail.endsWith('.jpg') || post.thumbnail.endsWith('.png')) {
            thumbnailImg = post.thumbnail;
        }
    }




    return (
        <>
            {urlImg ?
                (<>
                    {/* <img src={leadImg} alt="Post Image" className='lead-img' /> */}
                    <img src={urlImg} alt="Post Image" className='lead-img' />
                </>)
                :
                (<>
                {mediaImgArr.length > 0 ?
                (
                    <>
                        <img src={mediaImgArr[0]} alt="Post Image" className='lead-img' />

                    </>) : (
                    <>
                    {thumbnailImg ?
                        <>
                            <img src={thumbnailImg} alt="Thumbnail Image" className='thumbnail-img' />
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


