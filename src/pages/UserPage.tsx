import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../Models/Users';
import { getUser } from '../api/users';
import { IRouteParams } from '../Models/interfaces/IRouteParams';
import { UserCard } from '../components/UserCard';
import { AddVehicleForm } from '../components/Forms/AddVehicleForm';
import { Vehicle } from '../Models/Vehicle';
import { VehicleCard } from '../components/VehicleCard';

interface Props extends RouteComponentProps<IRouteParams> {}

export const UserPage: FC<Props> = ({ match }) => {
    const { params } = match; // From React Router
    const [showForm, toggleForm] = useState(false);
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        vehicles: [{make: 'Jeep'}] as Vehicle[]
    } as User);

    useEffect(() => {
        const { userId } = params;
        getUser(userId ? +userId : 0).then(({ data }) => setUser(data));
    }, []);

    return (
        <section id="userPage" className="section">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    <div className="tile is-child">
                        <UserCard
                            user={user}
                            toggleForm={() => toggleForm(!showForm)}
                        />
                    </div>
                    {showForm && (
                        <div className="tile is-child box">
                            <AddVehicleForm userId={user.userId} />
                        </div>
                    )}
                    {user.vehicles.length > 0 &&
                        user.vehicles.map(vehicle => <div className="tile is-child box">
                            <VehicleCard vehicle={vehicle} />
                        </div>)}
                </div>
            </div>
        </section>
    );
};
