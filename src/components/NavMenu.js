import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../styles/CSS/main.css';
import CommunityIcon from "./CommunityIcon";



function NavMenu({ }) {


    const topics = [
        { id: 1, name: 'Houseplants', slug: 'houseplants' },
        { id: 2, name: 'Science', slug: 'science' },
        { id: 3, name: 'Web Dev', slug: 'webdev' },
        { id: 4, name: 'Programming', slug: 'programming' },
        { id: 5, name: 'Maps', slug: 'MapPorn' },
        { id: 6, name: 'Sims 4', slug: 'sims4' },
        { id: 7, name: 'Thrift Store Hauls', slug: 'thriftstorehauls' },
        { id: 8, name: 'Pop culture chat', slug: 'popculturechat' },
        { id: 9, name: 'Acotar', slug: 'acotar' },
        { id: 10, name: 'Swimming', slug: 'swimming' },
    ]

    const location = useLocation();
    const checkActive = (topic) => {
        console.log('checking active');
        if (topic === 'popular' && location.pathname == '/r/popular') {
            return true;
        } else if (location.pathname == `/r/${topic.slug}`) {
            return true;
        }
    }


    return (
        <>
            <div className='menu-container' >
                <div className="menu-section">
                    <div className="section-title-container ">
                        <div className="section-title">
                            {checkActive('popular') ? (
                                <>
                                    <div className="navMenu-popular navMenu-popular-active">
                                        <NavLink to={`/r/popular`} className="navMenu-active navLink">
                                            Popular
                                        </NavLink>
                                    </div>
                                </>) : (
                                <>
                                <div className="navMenu-popular">
                                    <NavLink to={`/r/popular`} className=" navLink" >
                                        Popular
                                    </NavLink>
                                    </div>
                                </>)}

                        </div>
                    </div>
                </div>
                <div className="menu-section">
                    <div className="section-title-container">
                        <p className="section-title">
                            TOPICS
                        </p>
                    </div>
                    <ul className="styled-list">
                        {topics.map((topic) => (
                            <li key={topic.id} >
                                {checkActive(topic) ? (
                                    <>
                                        <NavLink to={`/r/${topic.slug}`} className="navMenu-active navLink" >
                                            {topic.name}
                                        </NavLink>
                                    </>) : (
                                    <>
                                        <NavLink to={`/r/${topic.slug}`} className=" navLink">
                                            {topic.name}
                                        </NavLink>
                                    </>)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavMenu;