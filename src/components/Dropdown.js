import React from "react";
import NavMenu from "./NavMenu";
import '../styles/CSS/layout/header.css';

const Dropdown = ({ closeDropdown }) => {

    const handleClick = () => {
        closeDropdown(prev => !prev);
    };



    return (
        <div onClick={handleClick} className="dropdown-menu-page">
            <div >
                <NavMenu/>
            </div>
        </div>
    );
};

export default Dropdown;
