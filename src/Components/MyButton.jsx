import React from 'react';

const MyButton = ({ children }) => {
    return (
        <button className="relative px-6 py-3 font-bold text-black rounded-lg group">
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-lime-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-lime-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative font-bold">{children}</span>
        </button>
    );
};

export default MyButton;