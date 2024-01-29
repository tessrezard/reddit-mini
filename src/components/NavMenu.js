import React, { useEffect, useRef } from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/main.css';



function NavMenu({ closeDropdown }) {
    const dropdownRef = useRef(null);


    const topics = [
        { id: 1, name: 'Technology', slug: 'technology' },
        { id: 2, name: 'Science', slug: 'science' },
        { id: 3, name: 'Programming', slug: 'programming' },
        { id: 4, name: 'Houseplants', slug: 'houseplants' },
        { id: 5, name: 'Maps', slug: 'MapPorn' },
        { id: 6, name: 'React', slug: 'react' },
        { id: 7, name: 'Today I Learned', slug: 'todayilearned' },
        { id: 8, name: 'Pop culture chat', slug: 'popculturechat' },
        { id: 9, name: 'Acotar', slug: 'acotar' },
        { id: 10, name: 'Swimming', slug: 'swimming' },



    ]

    return (
        <>
            <div className='menu-container' >
                <div className="menu-section">
                    <div className="section-title-container">
                        <p className="section-title">
                            <NavLink to={`/r/popular`} activeclassname="active">
                                Popular
                            </NavLink>
                        </p>
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
                            <li key={topic.id}>
                                <NavLink to={`/r/${topic.slug}`} activeclassname="active">
                                    {topic.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>

    )
}

export default NavMenu;