import React, { useEffect, useState } from "react";
import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library

const PopularPinned = ({ subreddit }) => {

    const [loading, setLoading] = useState(true);


    //GET BANNER COLOR
    let bannerBackgroundColor = subreddit?.banner_background_color || 'rgb(203, 203, 203)';


    //GET BANNER IMAGE
    let bannerImg = subreddit?.banner_background_image || subreddit?.banner_img || '';

    let banner = he.decode(bannerImg) ?? '';


    //GET NAME
    let subredditName = subreddit?.display_name || '';



    useEffect(() => {
        if (subreddit) {
            setLoading(false);
        }
    }, [subreddit]);

    if (loading) {
        return <div></div>;
    }


    return (
        <>
            <div className='popHead-section-container'>
                <div className="popHead-card">

                    <div style={{ backgroundColor: bannerBackgroundColor }} className="popHead-banner" >
                        {banner ? (<img
                            className='popHead-banner-img'
                            src={banner}
                            alt="Subreddit banner"
                        />) : (<></>)}
                    </div>
                    <div className="popHead-overlay">
                        <div className="popHead-info">
                            <div className="popHead-community-icon" >
                                <CommunityIcon subreddit={subreddit} />
                            </div>
                            <p className="popHead-name">r/{subredditName}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default PopularPinned;