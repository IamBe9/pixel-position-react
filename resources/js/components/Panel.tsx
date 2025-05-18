import React, { ReactNode } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`p-4 bg-white/5 rounded-xl border border-transparent hover:border-blue-800 group transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Panel;
