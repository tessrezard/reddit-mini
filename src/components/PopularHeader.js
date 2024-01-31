import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutSubreddit } from '../store/thunks';
import PopularPinned from "./PopularPinned";

const PopularHeader = () => {

    const pinned = [
        { id: 1, name: 'Houseplants', slug: 'houseplants' },
        { id: 2, name: 'Movies', slug: 'movies' },
        { id: 3, name: 'Music', slug: 'music' }
    ]



    return (
        <>
            
            {/* <div className='popHead-section-container'>
            {pinned.map((subreddit) => (
                    <div key={subreddit.slug}>
                        <Link to={`/r/${subreddit.slug}`} >
                        <PopularPinned subreddit={subreddit} />
                        </Link>
                    </div>
                ))}
                
            </div> */}
        </>
    );
};

export default PopularHeader;