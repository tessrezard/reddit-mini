import React from 'react';
import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library

const SubredditHeader = ({ subreddit }) => {

    //GET COMMUNITY ICON
    const communityIconUrl = subreddit.icon_img || subreddit.community_icon;
    let icon;
    try {
        icon = he.decode(communityIconUrl);
    } catch (error) {
        // console.error('Error decoding HTML entities:', error);
        // Handle the error, provide a default value, or take appropriate action
        icon = default_community_icon;
    }


    //GET BANNER COLOR
    let banner_background_color = 'rgb(203, 203, 203)'
    if (subreddit.banner_background_color) {
        banner_background_color = subreddit.banner_background_color;
    }

    //GET BANNER IMAGE
    let banner_img = subreddit.banner_background_image || subreddit.banner_img;
    let banner;
    try {
        banner = he.decode(banner_img);
    } catch (error) {
        // console.error('Error decoding HTML entities:', error);
        // Handle the error, provide a default value, or take appropriate action
        banner = '';
    }


    return (
        <>
            <div className='subreddit-header-container'>

                <div className="subreddit-header" >
                </div>

                <div className="subreddit-banner" style={{ backgroundColor: banner_background_color }}>
                    {banner ? (<img
                        className='banner-img'
                        src={banner}
                        alt="Subreddit banner"
                    />) : (<></>)}
                </div>
                
                <div className='subreddit-header-icon-and-name'>
                    <div className="subreddit-header-community-icon">
                        <CommunityIcon className="subreddit-icon" subreddit={subreddit} />
                    </div>
                    <h1 className="subreddit-name">r/{subreddit.display_name}</h1>
                </div>

                <div className="subreddit-bio">
                    <p className="subreddit-bio-title">{subreddit.title}</p>
                    <p>{subreddit.public_description}</p>
                </div>

            </div>

        </>
    );
};

export default SubredditHeader;


