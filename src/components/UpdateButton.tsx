import React, { FC } from 'react';

interface Props {
    handleClick(): Promise<void>;
}

export const UpdateButton: FC<Props> = ({ handleClick }) => {
    return (
        <a
            className="button is-primary is-outlined is-small"
            onClick={() => handleClick()}
        >
            <span>Update</span>
            <span className="icon is-small">
                <i className="fas fa-user-edit" />
            </span>
        </a>
    );
};
