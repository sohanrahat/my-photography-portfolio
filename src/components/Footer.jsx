import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center h-[60px] px-6" style={{ backgroundColor: 'rgba(235,234,230,1)' }}>
            <a href="https://instagram.com" className="text-[10px] text-black font-mono uppercase tracking-wider hover:underline">
                INSTAGRAM
            </a>
            <div className="flex gap-8">
                <Link to="/about-me" className="text-[10px] text-black font-mono uppercase tracking-wider hover:underline">
                    ABOUT ME
                </Link>
                <Link to="/blog" className="text-[10px] text-black font-mono uppercase tracking-wider hover:underline">
                    BLOG
                </Link>
                <Link to="/contact" className="text-[10px] text-black font-mono uppercase tracking-wider hover:underline">
                    CONTACT
                </Link>
            </div>
        </footer>
    );
};

export default Footer;