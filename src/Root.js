import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles/CSS/main.css'
import Header from './components/Header';
import NavMenu from './components/NavMenu';
const Root = () => {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    {/* this nav is for wide screens */}
                    <nav className={styles.wideNav}>
                        <NavMenu/>
                    </nav>
                    <Outlet />
                </main>
            </div>

        </>
    );
};

export default Root;