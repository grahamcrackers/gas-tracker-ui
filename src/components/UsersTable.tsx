import React, { FC, useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import { User } from '../Models/Users';

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
                </tr>
            </thead>
            <tbody>
                {users.map(
                    ({
                        userId,
                        firstName,
                        lastName,
                        username,
                        email
                    }: User) => (
                        <tr key={userId}>
                            <td>{userId}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
};
