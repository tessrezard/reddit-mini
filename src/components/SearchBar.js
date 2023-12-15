import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the magnifying-glass icon from react-icons
import '../styles/CSS/layout/header.css';


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
            <div className='searchBarContainer'>
                <form onSubmit={handleSubmit} className='searchBar'>
                    <button type="submit" className='searchButton'>
                        <FaSearch /> {/* Magnifying-glass icon */}
                    </button>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        className='searchInput'
                    />
                    
                </form>
            </div>
        </>


    );
};

export default SearchBar;