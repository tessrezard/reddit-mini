import React from "react";
import { NavLink, Link, useLocation, Navigate } from "react-router-dom";
import SearchBar from './SearchBar'; // Adjust the import path as needed
import styles from '../styles/CSS/layout/header.module.css';


function Header() {

    //basic redirect to home page
    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to='/home' />
    }


    const handleSearch = (query) => {
        // Implement your search logic here
        console.log('Search query:', query);
        // You can perform actions like fetching data based on the search query
    };

    return (
        <>
            <header >
                <div className={styles.headerContainer}>
                    <h1> REDDIT MINI </h1>
                    <SearchBar onSearch={handleSearch} />
                </div>

            </header>

        </>
    )
}

export default Header;