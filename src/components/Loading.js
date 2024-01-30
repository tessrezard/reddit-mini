
import React from 'react';
import '../styles/CSS/main.css';

const Loading = () => {

    return (
        <>
            <div className='loading-page-container'>
                <div class="loading-container">
                    <div class="loading-text">
                        Loading
                    </div>
                    <div class="dots-container">
                        <div class="dot-one"></div>
                        <div class="dot-two"></div>
                        <div class="dot-three"></div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Loading;