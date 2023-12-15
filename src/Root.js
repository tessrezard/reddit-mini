import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/CSS/main.css'
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
                    <div className='mainContainer'>
                        {/* this nav is for wide screens */}
                        <nav className='wide-nav'>
                            <NavMenu />
                        </nav>
                        <Outlet />
                    </div>

                </main>
            </div>

        </>
    );
};

export default Root;