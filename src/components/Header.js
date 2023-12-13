import React from "react";
import { NavLink, Link, useLocation, Navigate } from "react-router-dom";



function Header() {

    //basic redirect to home page
    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/home'/>
    }

    return (
        <>
            <header style={{backgroundColor: 'green'}}>
                <h1> REDDIT MINI </h1>
            </header>

        </>
    )
}

export default Header;