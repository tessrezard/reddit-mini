import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the magnifying-glass icon from react-icons
import styles from '../styles/CSS/layout/header.module.css';


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <>
            <div className={styles.searchBarContainer}>
                <form onSubmit={handleSubmit} className={styles.searchBar}>
                    <button type="submit" className={styles.searchButton}>
                        <FaSearch /> {/* Magnifying-glass icon */}
                    </button>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        className={styles.searchInput}
                    />
                    
                </form>
            </div>
        </>


    );
};

export default SearchBar;