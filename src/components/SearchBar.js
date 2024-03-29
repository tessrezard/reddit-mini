import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // magnifying-glass icon
import '../styles/CSS/layout/header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router


const SearchBar = () => {
    const navigate = useNavigate(); // Access the navigate function from React Router
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        window.scrollTo(0, 0);
        e.preventDefault();
        if (query){
            const validQuery = query.replace(/\//g, '_');
            navigate(`/search/${validQuery}`);
        }
        setQuery('');


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