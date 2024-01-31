import React, { useEffect } from "react";
import '../styles/CSS/main.css';
import CommunityIcon from '../components/CommunityIcon.js'
import default_community_icon from '../images/default-community-icon.png'; // Replace with the actual path
import he from 'he'; // Import the HTML entity decoding library
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutSubreddit } from '../store/thunks';

const PopularPinned = ({subreddit}) => {

    //SO FAR THIS IS REALLY REALLY NOT WORKING AND CAUSING  SOME BIG BUGS SO DEFINITLY WORK ON THIS
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.aboutSubreddit);



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



    useEffect(() => {
        const fetchData = async () => {
                try {
                         dispatch(fetchAboutSubreddit(subreddit.slug));
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } 
        fetchData();
    }, [dispatch]);

    return (
        <>
            
            <div className='popHead-section-container'>
                <div>
                    <img/>
                    <p>r/{subreddit.slug}</p>

                </div>
                
            </div>
        </>
    );
};

export default PopularPinned;