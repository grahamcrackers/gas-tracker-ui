import React, { FC } from 'react';
import { UsersCard } from '../components/UsersCard';
import { AddUserForm } from '../components/Forms/AddUserForm';

export const UsersPage: FC = () => {
    return (
        <div id="usersPage">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    <div className="tile is-child">
                        <UsersCard />
                    </div>
                    <div className="tile is-child box">
                        <AddUserForm />
                    </div>
                </div>
            </div>
        </div>
    );
};
