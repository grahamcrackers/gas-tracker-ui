import React, { FC } from 'react';
import { UsersTable } from './UsersTable';
import { User } from '../Models/Users';
import { UserDropdown } from './UserDropdown';

interface Props {
    user: User;
    toggleForm(): void;
}

export const UserCard: FC<Props> = ({ user, toggleForm }) => {
    const { firstName, lastName } = user;

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{`${firstName} ${lastName}`}</p>
                <UserDropdown toggleForm={toggleForm}/>
            </header>
        </div>
    );
};
