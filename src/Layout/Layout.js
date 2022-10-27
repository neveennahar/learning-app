import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div>
            <Header />

            {/* dynamic content goes here */}

            <div className="w-[95%] md:w-[90%] mx-auto">
                <Outlet />
            </div>

        </div>
    );
};

export default Layout;
