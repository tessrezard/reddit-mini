import React from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/main.css';



function NavMenu() {


    const topics = [
        { id: 1, name: 'Technology', slug: 'technology' },
        { id: 2, name: 'Science', slug: 'science' },
        { id: 3, name: 'Programming', slug: 'programming' },
        { id: 4, name: 'Acotar', slug: 'acotar' },
        { id: 5, name: 'Maps', slug: 'MapPorn' },

    ]
    return (
        <>
            <div className='menu-container'>
                <div className="menu-section">
                    <div className="section-title-container">
                        <p className="section-title">
                            <NavLink to={`/topic/popular`} activeclassname="active">
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
                                <NavLink to={`/topic/${topic.slug}`} activeclassname="active">
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