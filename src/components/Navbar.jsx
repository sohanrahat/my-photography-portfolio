import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[60px] px-4 md:px-6 relative" style={{ backgroundColor: 'rgba(235,234,230,1)' }}>
            <div className="text-[11px] md:text-[13px] font-bold tracking-wider text-black font-mono uppercase">
                SOHAN RAHAT
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
                <NavLink to="/about-me" className={({ isActive }) => `text-[10px] text-black font-mono uppercase tracking-wider hover:underline hover:underline-offset-4 ${isActive ? 'underline underline-offset-4' : ''}`}>
                    ABOUT ME
                </NavLink>
                <NavLink to="/collections" className={({ isActive }) => `text-[10px] text-black font-mono uppercase tracking-wider hover:underline hover:underline-offset-4 ${isActive ? 'underline underline-offset-4' : ''}`}>
                    COLLECTIONS
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `text-[10px] text-black font-mono uppercase tracking-wider hover:underline hover:underline-offset-4 ${isActive ? 'underline underline-offset-4' : ''}`}>
                    CONTACT
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => `text-[10px] text-black font-mono uppercase tracking-wider hover:underline hover:underline-offset-4 ${isActive ? 'underline underline-offset-4' : ''}`}>
                    BLOG
                </NavLink>
            </div>
            <div className="md:hidden">
                <button className="text-[10px] text-black font-mono uppercase tracking-wider">
                    MENU
                </button>
            </div>
        </nav>
    );
};

export default Navbar;