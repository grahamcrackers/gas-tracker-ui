import React, { FC } from 'react';
import { UsersCard } from '../components/UsersCard';
import { AddUserForm } from '../components/Forms/AddUserForm/index';

export const HomePage: FC = () => {
    return (
        <div id="homePage">
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
