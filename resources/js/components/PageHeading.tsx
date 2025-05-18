import React, { ReactNode } from 'react';

interface PageHeadingProps {
    children: ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({ children }) => {
    return (
        <h1 className="font-bold text-center text-4xl mb-8">{children}</h1>
    );
};

export default PageHeading;
