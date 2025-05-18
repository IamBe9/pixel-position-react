import React, { ReactNode } from 'react';
import Field from './Field';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    name: string;
    children: ReactNode;
    className?: string;
    errors?: Record<string, string>;
}

const Select: React.FC<SelectProps> = ({ label, name, children, className = '', errors, ...props }) => {
    return (
        <Field label={label} name={name} errors={errors}>
            <select
                id={name}
                name={name}
                className={`rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full ${className}`}
                {...props}
            >
                {children}
            </select>
        </Field>
    );
};

export default Select;
