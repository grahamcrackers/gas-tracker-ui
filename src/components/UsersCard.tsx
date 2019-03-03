import React, { FC } from 'react';
import { UsersTable } from './UsersTable';

export const UsersCard: FC = () => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Users</p>
                <a
                    href="#"
                    className="card-header-icon"
                    aria-label="more options"
                >
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <UsersTable />
                </div>
            </div>
        </div>
    );
};
