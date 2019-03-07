import React, { FC } from 'react';
import { Vehicle } from '../Models/Vehicle';
import { NavLink } from 'react-router-dom';

interface Props {
    vehicle: Vehicle;
}

export const VehicleCard: FC<Props> = ({ vehicle }) => {
    const { make, model } = vehicle;

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    <NavLink
                        to={`/users/${vehicle.userId}/vehicles/${vehicle.id}`}
                    >{`${make} ${model}`}</NavLink>
                </p>
            </header>
            <div className="card-content">
                <p className="title">Title</p>
                <p className="subtitle">Subtitle</p>
            </div>
        </div>
    );
};
