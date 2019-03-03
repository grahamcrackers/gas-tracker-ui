import React, { FC } from 'react';

interface Props {
    handleClick(): Promise<void>;
}

export const DeleteButton: FC<Props> = ({ handleClick }) => {
    return (
        <a
            className="button is-small is-danger is-outlined"
            onClick={() => handleClick()}
        >
            <span>Delete</span>
            <span className="icon is-small">
                <i className="fas fa-times" />
            </span>
        </a>
    );
};
