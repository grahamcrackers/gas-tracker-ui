import React, { FC } from 'react';

interface Props {
    handleReset(): void;
    dirty: boolean;
    isSubmitting: boolean;
}

export const FormResetButton: FC<Props> = ({
    handleReset,
    dirty,
    isSubmitting
}) => {
    return (
        <button
            className="button is-text"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
        >
            Reset
        </button>
    );
};
