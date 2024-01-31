import React, { useState }  from "react";
import {Link, useLocation, Navigate } from "react-router-dom";
import '../styles/CSS/layout/header.css';
import SearchBar from './SearchBar'; // Adjust the import path as needed
import Burger from './Burger';
import Dropdown from "./Dropdown";

function Header() {

    const [activeBurger, setActiveBurger] = useState(false);

    //basic redirect to home page
    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/r/popular' />
    }

      
    return (
        <>
            <header >
                <div className='headerContainer'>

                    <Burger active={activeBurger} setActive={setActiveBurger} />
                    <div className="reddit-mini-logo">
                    <div className="logo-tail"/>

                        <Link to={`/`}className="logo-circle"/> 
                        
                    </div>
                    <p className='title'> reddit mini </p>
                    <SearchBar/>
                </div>
            </header>
            <div >
                {activeBurger ?
                    <Dropdown  closeDropdown={setActiveBurger} /> : <></>
                }
            </div>
        </>
    )
}

export default Header;