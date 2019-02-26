import React, { FC } from 'react';
import { UsersCard } from '../components/UsersCard';
import { AddUserForm } from '../components/Forms/AddUserForm';

export const HomePage: FC = () => {
    return (
        <section className="section">
            <UsersCard />
            <AddUserForm />
        </section>
    );
};
