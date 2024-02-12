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
                    <div className='wholeContainer'>
                        <nav className='wide-nav'>
                            <NavMenu />
                        </nav>
                        <div className='mainContainer'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
};

export default Root;