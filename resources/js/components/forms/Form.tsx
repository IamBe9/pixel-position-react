import React, { ReactNode } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    className?: string;
    method?: string;
}

const Form: React.FC<FormProps> = ({ children, className = '', method = 'GET', ...props }) => {
    return (
        <form
            className={`max-w-2xl mx-auto space-y-6 ${className}`}
            method={method}
            {...props}
        >
            {children}
        </form>
    );
};

export default Form;
