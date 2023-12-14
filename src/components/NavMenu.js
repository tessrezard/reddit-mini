import React from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";



function NavMenu() {

    //basic redirect to home page
    const location = useLocation();
    const topics = [
        { id: 1, name: 'Technology', slug: 'technology' },
        { id: 2, name: 'Science', slug: 'science' },
        { id: 3, name: 'Programming', slug: 'programming' },
        { id: 3, name: 'Acotar', slug: 'acotar' },
        { id: 3, name: 'Maps', slug: 'MapPorn' },

    ]
    return (
        <>
            <ul>
                {topics.map((topic) => (
                <li key={topic.id}>
                    <NavLink to={`/topic/${topic.slug}`} activeClassName="active">
                    {topic.name}
                    </NavLink>
                </li>
                ))}
            </ul>
        </>

    )
}

export default NavMenu;