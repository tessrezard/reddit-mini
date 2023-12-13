import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles/CSS/main.css'
import Header from './components/Header';
const Root = () => {
    return (
        <>
            <div style={{ backgroundColor: 'pink' }}>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </>
    );
};

export default Root;