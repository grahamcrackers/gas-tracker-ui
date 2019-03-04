import React, { FC, InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    isHorizontal?: boolean;
}

export const FieldInput: FC<FieldInputProps> = ({
    name,
    label,
    isHorizontal,
    ...props
}) => {
    return (
        <div className={`field ${isHorizontal && 'is-horizontal'}`}>
            {label && <label className="label">{label}</label>}
            <div className="control">
                <Field name={name} className="input" type="text" {...props} />
            </div>
            <ErrorMessage name={name} />
        </div>
    );
};
