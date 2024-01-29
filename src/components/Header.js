import React from "react";
import { NavLink, Link, useLocation, Navigate } from "react-router-dom";
import SearchBar from './SearchBar'; // Adjust the import path as needed
import '../styles/CSS/layout/header.css';

import Burger from './Burger';
import { useState } from "react";
import Dropdown from "./Dropdown";

function Header() {

    const [activeBurger, setActiveBurger] = useState(false);

    //basic redirect to home page
    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/home' />
    }




      
    return (
        <>
            <header >
                <div className='headerContainer'>

                    <Burger active={activeBurger} setActive={setActiveBurger} />
                    <div className="reddit-mini-logo">
                    <div className="logo-tail"/>

                        <Link to={`/`}className="logo-circle"> 
                         {/* <div className="bear"> 🐻‍❄️</div> */}
                        </Link>
                        
                    </div>
                    <p className='title'> reddit mini </p>
                    <SearchBar/>
                </div>
            </header>
            <div>
                {activeBurger ?
                    <Dropdown  closeDropdown={setActiveBurger} /> : <></>
                }
            </div>
        </>
    )
}

export default Header;