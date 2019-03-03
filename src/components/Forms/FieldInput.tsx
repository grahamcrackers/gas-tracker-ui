import React, { FC, InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    name: string;
    label?: string;
}

export const FieldInput: FC<FieldInputProps> = ({ name, label, ...props }) => {
    
    return (
        <div className="field">
            {(label) && <label className="label">{label}</label>}
            <div className="control">
                <Field
                    name={name}
                    className="input"
                    type="text"
                    {...props}
                />
            </div>
            <ErrorMessage name={name} />
        </div>
    );
};
