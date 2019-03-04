import React, { FC } from 'react';
import { TripsTable } from './TripsTable';
import { Vehicle } from '../Models/Vehicle';

interface Props {
    vehicle: Vehicle;
}

export const TripsCard: FC<Props> = ({ vehicle }) => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Trips</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <TripsTable trips={vehicle.trips}/>
                </div>
            </div>
        </div>
    );
};
