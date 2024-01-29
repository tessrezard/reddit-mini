// import React, { useRef, useEffect, useState } from 'react';
// import '../styles/CSS/main.css';


// const CommunityIcon = ({ subreddit }) => {


//     // ----------------------------------------------------------------
//     // FIND IMAGE
//     let community_icon;
//     if (subreddit.icon_img){
//         community_icon = subreddit.community_icon;
//     }
//     console.log( 'subreddit.title', subreddit.title);
//     console.log( 'subreddit.img_icon', subreddit.icon_img);
//     console.log( 'subreddit.community_icon', subreddit.community_icon);


//     // console.log('data.community_icon', data.community_icon);
//     // console.log('data.icon_img', data.icon_img);
//     // console.log('data.title', data.title);

//     // ----------------------------------------------------------------



//     // ----------------------------------------------------------------

//     return (
//         <>
//             <img src={`${subreddit.icon_img}`}/>
//             <img src={`${subreddit.community_icon}`}/>

//         </>
//     );
// };

// export default CommunityIcon;



// import React from 'react';
// import '../styles/CSS/main.css';

// const CommunityIcon = ({ subreddit }) => {
//     let community_icon;

//     if (subreddit.icon_img) {
//         community_icon = subreddit.community_icon;
//     }

//     console.log('subreddit.title', subreddit.title);
//     console.log('subreddit.icon_img', subreddit.icon_img);
//     console.log('subreddit.community_icon', subreddit.community_icon);

//     return (
//         <>
//             {subreddit.icon_img && (
//                 <img className='community-icon' src={`${subreddit.icon_img}`} alt="Icon from icon_img" />
//             )}

//             {subreddit.community_icon && (
//                 <img className='community-icon' src={`${community_icon}`} alt="Icon from community_icon" />
//             )}
//         </>
//     );
// };

// export default CommunityIcon;


// import React from 'react';
// import '../styles/CSS/main.css';

// const CommunityIcon = ({ subreddit }) => {
//     let communityIconUrl;

//     if (subreddit.icon_img) {
//         communityIconUrl = subreddit.icon_img;
//     } else if (subreddit.community_icon) {
//         communityIconUrl = subreddit.community_icon;
//     }

//     console.log('subreddit.title', subreddit.title);
//     console.log('subreddit.icon_img', subreddit.icon_img);
//     console.log('subreddit.community_icon', subreddit.community_icon);

//     return (
//         <>
//             {communityIconUrl && (
//                 <img className='community-icon' src={`${communityIconUrl}`} alt="Community Icon" />
//             )}
//         </>
//     );
// };

// export default CommunityIcon;



import React, { useState } from 'react';
import '../styles/CSS/main.css';
import defaultImage from '../images/default-community-icon.png'; // Replace with the actual path

const CommunityIcon = ({ subreddit }) => {
    const [imageError, setImageError] = useState(false);
    const communityIconUrl = subreddit.icon_img || subreddit.community_icon;

    console.log('subreddit.title', subreddit.title);
    console.log('subreddit.icon_img', subreddit.icon_img);
    console.log('subreddit.community_icon', subreddit.community_icon);

    const handleImageError = () => {
        setImageError(true);
    };

    if (!communityIconUrl || imageError) {
        // Handle the case where no valid image URL is available or image failed to load
        return <img className='community-icon' src={defaultImage} alt="Default Community Icon" />;
    }

    return (
        <>
            <img
                className='community-icon'
                src={communityIconUrl}
                alt="Community Icon"
                onError={handleImageError}
            />
            
        </>
    );
};

export default CommunityIcon;

