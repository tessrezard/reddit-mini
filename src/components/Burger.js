import React from "react";
import styles from '../styles/CSS/layout/header.module.css';

// BergMenu is the menu that appears when Berger is clicked on mobile screens
// Styled components for the button and animations

function Burger({ active, setActive }) {


    const handleClick = () => {
        setActive(prev => !prev);
    };
    console.log('active', active);


    return (
        <>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: "center" }}>
                <div className={`${styles.burgerContainer} ${active ? styles.active : ''}`} onClick={handleClick}>
                    <div className={styles.burgerBars}>
                        <div className={styles.burgerBar} />
                        <div className={styles.burgerBar} />
                        <div className={styles.burgerBar} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Burger;
