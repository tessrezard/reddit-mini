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

    // const handleBurgerClick = () => {
    //     setDropdownVisible(prev => !prev);
    // }
    // console.log('isDropdownVisible', isDropdownVisible);

    const handleSearch = (query) => {
        // Implement your search logic here
        console.log('Search query:', query);
        // You can perform actions like fetching data based on the search query
    };

    return (
        <>
            <header >
                <div className='headerContainer'>

                    <Burger active={activeBurger} setActive={setActiveBurger} />
                    <div className="reddit-mini-logo">
                    <div className="logo-tail"/>

                        <div className="logo-circle"> 
                         {/* <div className="bear"> 🐻‍❄️</div> */}
                        </div>
                        
                    </div>
                    <p className='title'> reddit mini </p>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </header>
            <div>
                {activeBurger ?
                    <Dropdown /> : <></>
                }
            </div>
        </>
    )
}

export default Header;