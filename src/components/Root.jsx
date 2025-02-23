import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='bg-slate-300'>
            <nav className=''>
                <NavBar></NavBar>
            </nav>
            <main>
            <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;