import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../Models/Users';
import { getUser, getUserVehicles } from '../api/users';
import { IRouteParams } from '../Models/interfaces/IRouteParams';
import { UserCard } from '../components/UserCard';
import { AddVehicleForm } from '../components/Forms/AddVehicleForm';
import { Vehicle } from '../Models/Vehicle';
import { VehicleCard } from '../components/VehicleCard';
import { addVehicle } from '../api/vehicles';

interface Props extends RouteComponentProps<IRouteParams> {}

export const UserPage: FC<Props> = ({ match }) => {
    const { userId } = match.params; // From React Router
    const [showForm, toggleForm] = useState(false);
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        vehicles: [{ make: 'Jeep' }] as Vehicle[]
    } as User);

    useEffect(() => {
        getUserVehicles(userId ? +userId : 0).then(({ data }) => setUser(data));
    }, []);

    const handleVehicleAdd = (values: any, setSubmitting: (submitting: false) => void) => {
        const newVehicle: Vehicle = { ...values };
        newVehicle.userId = (userId) ? +userId : 0;

        addVehicle(newVehicle).then(({ data }) => {
            setSubmitting(false);
            toggleForm(false);
            let vehicles = (user.vehicles && user.vehicles.length > 0) ? user.vehicles : [];
            let updated: User = { ...user, vehicles: [...vehicles, data]};
            setUser(updated);
        });
    }

    return (
        <div id="userPage">
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
                            <AddVehicleForm handleSubmit={handleVehicleAdd} />
                        </div>
                    )}
                    {user.vehicles && user.vehicles.length > 0 &&
                        user.vehicles.map(vehicle => (
                            <div className="tile is-child box">
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
