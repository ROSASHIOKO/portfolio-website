import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-700 border-t border-gray-600">
            <div className="container mx-auto p-6 flex justify-center items-center">
                <p className="text-black text-sm md:text-base text-center">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;