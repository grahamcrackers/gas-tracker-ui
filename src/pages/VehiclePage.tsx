import { AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getVehicle } from '../api/vehicles';
import { IRouteParams } from '../Models/interfaces/IRouteParams';
import { Vehicle } from '../Models/Vehicle';
import { TripsCard } from '../components/TripsCard';

interface Props extends RouteComponentProps<IRouteParams> {}

export const VehiclePage: FC<Props> = ({ match }) => {
    const { vehicleId } = match.params; // From React Router

    const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);

    useEffect(() => {
        getVehicle(vehicleId ? +vehicleId : 0).then(({ data }: AxiosResponse) =>
            setVehicle(data)
        );
    }, []);

    return (
        <section id="vehiclePage" className="section">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    <div className="tile is-child">
                        <TripsCard vehicle={vehicle} />
                    </div>
                </div>
            </div>
        </section>
    );
};
