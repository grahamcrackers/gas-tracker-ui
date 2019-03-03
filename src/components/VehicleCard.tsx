import React, { FC } from 'react';
import { Vehicle } from '../Models/Vehicle';

interface Props {
    vehicle: Vehicle;
}

export const VehicleCard: FC<Props> = ({ vehicle }) => {
    const { make, model } = vehicle;

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{`${make} ${model}`}</p>
            </header>
            <div className="card-content">
                <p className="title">
                    “There are two hard things in computer science: cache
                    invalidation, naming things, and off-by-one errors.”
                </p>
                <p className="subtitle">Jeff Atwood</p>
            </div>
        </div>
    );
};
