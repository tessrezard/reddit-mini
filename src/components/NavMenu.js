import React from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/main.css';



function NavMenu() {


    const topics = [
        { id: 1, name: 'Technology', slug: 'technology' },
        { id: 2, name: 'Science', slug: 'science' },
        { id: 3, name: 'Programming', slug: 'programming' },
        { id: 3, name: 'Acotar', slug: 'acotar' },
        { id: 3, name: 'Maps', slug: 'MapPorn' },

    ]
    return (
        <>
            <div className='menu-container'>
            <div className="menu-section">
                <div className="section-title-container">
                    <p className="section-title">
                        Popular
                    </p>
                </div>
            </div>
                <div className="menu-section">
                <div className="section-title-container">
                    <p className="section-title">
                        Topics
                    </p>
                </div>
                <ul className="styled-list">
                    {topics.map((topic) => (
                        <li key={topic.id}>
                            <NavLink to={`/topic/${topic.slug}`} activeClassName="active">
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