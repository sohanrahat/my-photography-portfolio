import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav>
                <Navbar />
            </nav>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;