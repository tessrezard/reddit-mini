import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutPinnedSubreddits } from '../store/thunks';
import PopularPinned from "./PopularPinned";

const PopularHeader = () => {

    const pinned = [
        { id: 0, slug: 'houseplants' },
        { id: 1, slug: 'movies' },
        { id: 2, slug: 'webdev' },
        { id: 3, slug: 'music' },
        { id: 4, slug: 'dataisbeautiful'},
        { id: 5, slug: 'mapporn'},
    ]

    const dispatch = useDispatch();

    const { dataAboutPinned, loadingAboutPinned, errorAboutPinned } = useSelector((state) => state.aboutPinnedSubreddits);

    
    useEffect(() => {
        const fetchData = async () => {
            const pinnedSubreddits = ['houseplants', 'movies', 'webdev', 'music', 'dataisbeautiful', 'mapporn'];
                try {
                    dispatch(fetchAboutPinnedSubreddits(pinnedSubreddits));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } 
        fetchData();
    }, [dispatch]);

    if (loadingAboutPinned) {
        return <></>;
      }
    
      if (errorAboutPinned) {
        return <></>;
      }


    return (
        <>
            <div className='popHead-section-container'>
            {pinned.map((pin) => (
                    <div key={pin.slug}>
                        <Link to={`/r/${pin.slug}`} >
                             <PopularPinned subreddit={dataAboutPinned[pin.id]} />
                        </Link>
                    </div>
                ))}

            </div>
        </>
    );
};


export default PopularHeader;