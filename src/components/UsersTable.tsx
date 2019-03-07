import React, { FC, useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../api/users';
import { User } from '../Models/Users';
import { DeleteButton } from './DeleteButton';
import { UpdateButton } from './UpdateButton';
import { NavLink } from 'react-router-dom';

export const UsersTable: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            console.log(data);
            setUsers(data);
        });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {users.map(
                    ({
                        id,
                        firstName,
                        lastName,
                        username,
                        email
                    }: User) => (
                        <tr key={id}>
                            <td><NavLink to={`/users/${id}`}>{id}</NavLink></td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>
                                <UpdateButton
                                    handleClick={() => 
                                        updateUser({
                                            id,
                                            firstName,
                                            lastName,
                                            username,
                                            email
                                        } as User).then(response => {})
                                    }
                                />
                            </td>
                            <td>
                                <DeleteButton
                                    handleClick={() =>
                                        deleteUser(id).then(response => {
                                            console.log(response.status);
                                            const newUsers = users.filter(
                                                user => user.id !== id
                                            );
                                            console.log(newUsers);
                                            setUsers(newUsers);
                                        })
                                    }
                                />
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
};
