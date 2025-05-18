import React, { ReactNode } from 'react';
import Label from './Label';
import Error from './Error';

interface FieldProps {
    label?: string;
    name: string;
    children: ReactNode;
    errors?: Record<string, string>;
}

const Field: React.FC<FieldProps> = ({ label, name, children, errors = {} }) => {
    return (
        <div>
            {label && <Label name={name} label={label} />}
            <div className="mt-1">
                {children}
                <Error error={errors[name]} />
            </div>
        </div>
    );
};

export default Field;
