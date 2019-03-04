import React, { FC } from 'react';

interface Props {
    isSubmitting: boolean;
}

export const FormSubmitButton: FC<Props> = ({ isSubmitting }) => {
    return (
        <button
            type="submit"
            className={`button is-link ${isSubmitting && 'is-loading'}`}
        >
            Submit
        </button>
    );
};
