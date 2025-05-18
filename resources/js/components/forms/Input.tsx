import React from 'react';
import Field from './Field';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    type?: string;
    value?: string;
    className?: string;
    errors?: Record<string, string>;
}

const Input: React.FC<InputProps> = ({ label, name, type = 'text', value = '', className = '', errors, ...props }) => {
    return (
        <Field label={label} name={name} errors={errors}>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                className={`rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full ${className}`}
                {...props}
            />
        </Field>
    );
};

export default Input;
