import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/CSS/main.css';



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

    return (
        <>
            <div className='menu-container' >
                <div className="menu-section">
                    <div className="section-title-container">
                        <p className="section-title">
                            <NavLink to={`/r/popular`} >
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
                            <li key={topic.id} >
                                <NavLink to={`/r/${topic.slug}`} >
                                    <div className="navLink" >{topic.name}</div>
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