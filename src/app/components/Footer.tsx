import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-700 border-t border-gray-600">
            <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
                <span className="text-white font-bold text-lg">
                    LOGO
                </span>
                <p className="text-gray-300 text-sm md:text-base">
                    © {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
