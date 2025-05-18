import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`bg-blue-800 rounded py-2 px-6 font-bold ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
