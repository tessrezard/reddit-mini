import React from 'react';
import '../styles/CSS/main.css';
import he from 'he'; // Import the HTML entity decoding library
import Carousel from './Carousel';


const LeadImage = ({ post }) => {

    // ORDER OF PREFERENCE : 
    //  post.url 
    //  post.media_metadata works (for several images usually)
    //  post.thumbnail

    // -------------------------------------
    // FOR URL IMAGE 
    let urlImg;
    if (post.url) {
        if (post.url.endsWith('.jpeg') || post.url.endsWith('.jpg') || post.url.endsWith('.png')) {
            urlImg = post.url;
        }
    }

    // -------------------------------------
    // FOR CAROUSSEL 
    let mediaImgArr = [];
    let mediaImg;
    if (post.media_metadata) {
        const mediaObj = post.media_metadata;
        const keys = Object.keys(mediaObj)
        for (let i = 0; i < keys.length; i++) {
            const value = mediaObj[keys[i]].s?.u;
            try {
                mediaImg = he.decode(value);
                mediaImgArr.push(mediaImg);
            } catch (error) {
                mediaImg = '';
                mediaImgArr.push('');
            }
        }
    }


    // -------------------------------------
    // FOR THUMBNAIL 
    let thumbnailImg;
    if (post.thumbnail) {
        if (post.thumbnail.endsWith('.jpeg') || post.thumbnail.endsWith('.jpg') || post.thumbnail.endsWith('.png')) {
            thumbnailImg = post.thumbnail;
        }
    }


    // -------------------------------------
    // FOR VIDEO
    let whatKindOfVideo;
    let iframeHTML;
    let dash_url;
    let hls_url;
    let fallback_url;
    let scrubber_media_url;

    const isVideo = post.post_hint?.includes('video');

    if (isVideo) {
        whatKindOfVideo = post.post_hint;
        if (whatKindOfVideo === 'rich:video') {
            if (post.media_embed.content) {
                iframeHTML = he.decode(post.media_embed.content);
                iframeHTML = iframeHTML.replace(/width="\d+"/, 'width="100%"').replace(/height="\d+"/, 'height="100%"');
            }
        } else if (whatKindOfVideo === 'hosted:video') {
            if (post.media.reddit_video) {
                dash_url = post.media.reddit_video.hash_url;
                hls_url = post.media.reddit_video.hsl_url;
                fallback_url = post.media.reddit_video.fallback_url;
                scrubber_media_url = post.media.reddit_video.scrubber_media_url;
            }

        }
    }

    const selectedVideoUrl = dash_url || hls_url || fallback_url || scrubber_media_url;





    // --------------------------------------------------------------------------
    // options : 

    const LeadImage = ({ src, alt, className }) => (
        <img src={src} alt={alt} className={className} />
    );

    const ThumbnailImage = ({ src, alt, className }) => (
        <img src={src} alt={alt} className={className} />
    );

    const SingleImage = ({ src, alt, className }) => (
        <img src={src} alt={alt} className={className} />
    );

    const VideoRich = ({ className }) => (
        <div dangerouslySetInnerHTML={{ __html: iframeHTML }} className={className} />
    );


    const VideoHosted = ({ className }) => (
        <video
            controls
            type='video/mp4'
            className={className}
            width="100%"
            height="100%"
            loading='lazy'
            allow=" fullscreen; encrypted-media; picture-in-picture;"
        >
            <source src={selectedVideoUrl}/>
        </video>
    );


    // pick the right option: 

    const LeadMedia = ({ urlImg, mediaImgArr, thumbnailImg, post }) => {
        if (urlImg) {
            return <LeadImage src={urlImg} alt={post.title} className="lead-img" />;
        }

        if (mediaImgArr.length > 1) {
            return <Carousel mediaArr={mediaImgArr} post={post} />;
        }

        if (mediaImgArr.length === 1) {
            return <SingleImage src={mediaImgArr[0]} alt={post.title} className="lead-img" />;
        }

        if (isVideo) {
            if (whatKindOfVideo === 'rich:video') {
                return <VideoRich className='lead-video' />;
            } else if (whatKindOfVideo === 'hosted:video') {
                return <VideoHosted className='lead-video-hosted' />
            }
        }



        if (thumbnailImg) {
            return <ThumbnailImage src={thumbnailImg} alt={post.title} className="thumbnail-img" />;
        }

        return null; // No image or thumbnail provided
    };

    return (
        <>
            <LeadMedia urlImg={urlImg} mediaImgArr={mediaImgArr} thumbnailImg={thumbnailImg} post={post} />
        </>
    );
};

export default LeadImage;





