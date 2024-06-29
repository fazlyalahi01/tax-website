import React from 'react';

interface OutlineButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 border-2 border-blue-500 text-black font-medium text-sm rounded transition  ease-in-out hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-primary hover:text-white duration-500"
        >
            {children}
        </button>
    );
};

export default OutlineButton;