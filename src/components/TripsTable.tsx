import React, { FC } from 'react';
import { Trip } from '../Models/Trip';

export const TripsTable: FC<{ trips: Trip[] }> = ({ trips }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Odometer</th>
                    <th>Trip Meter</th>
                    <th>Gallons</th>
                    <th>Fuel Cost</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {trips.map(
                    ({
                        vehicleId,
                        date,
                        tripMeter,
                        totalGallons,
                        totalFuelCost
                    }: Trip) => (
                        <tr key={vehicleId}>
                            <td>{vehicleId}</td>
                            <td>{date}</td>
                            <td>{tripMeter}</td>
                            <td>{totalGallons}</td>
                            <td>{totalFuelCost}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
};
