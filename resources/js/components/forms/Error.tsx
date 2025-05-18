import React from 'react';

interface ErrorProps {
    error?: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return error ? (
        <p className="text-sm text-red-500 mt-1">{error}</p>
    ) : null;
};

export default Error;
