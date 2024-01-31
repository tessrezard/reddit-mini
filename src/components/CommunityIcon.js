

import React, { useState } from 'react';
import '../styles/CSS/main.css';
import default_community_icon from '../images/default-community-icon.png';
import he from 'he'; // HTML entity decoding library

const CommunityIcon = ({ subreddit }) => {


    const [imageError, setImageError] = useState(false);
    const communityIconUrl = subreddit.icon_img || subreddit.community_icon;
    let icon;
     try {
        icon = he.decode(communityIconUrl);
      } catch (error) {
        // console.error('Error decoding HTML entities:', error);
        // Handle the error, provide a default value, or take appropriate action
        icon = default_community_icon;
      }
      

    const handleImageError = () => {
        setImageError(true);
    };

    if (!communityIconUrl || imageError) {
        // Handle case where no valid image URL is available or image failed to load
        return <img className='community-icon' src={default_community_icon} alt="Default Community Icon" />;
    }


    return (
        <>
            <img
                className='community-icon'
                src={icon}
                alt="Community Icon"
                onError={handleImageError}
            />

        </>
    );
};

export default CommunityIcon;


