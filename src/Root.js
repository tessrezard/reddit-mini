import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
const Root = () => {
  return (
    <>
    <div style={{backgroundColor: 'pink'}}>

    </div>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;