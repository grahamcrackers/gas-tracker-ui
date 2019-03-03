import axios, { AxiosPromise } from 'axios';
import { TRACKER_API } from './endpoints';
import { Vehicle } from '../Models/Vehicle';

export const getVehicles = (): AxiosPromise<Vehicle[]> => {
    return axios.get(`${TRACKER_API}/vehicles`);
};

export const getVehicle = (id: number): AxiosPromise<Vehicle> => {
    return axios.get(`${TRACKER_API}/vehicles/${id}`);
};

export const addVehicle = (vehicle: Vehicle): AxiosPromise<Vehicle> => {
    return axios.post(`${TRACKER_API}/vehicles`, vehicle);
};

export const updateVehicle = (vehicle: Vehicle): AxiosPromise<Vehicle> => {
    return axios.put(`${TRACKER_API}/vehicles`, vehicle);
};

export const deleteVehicle = (id: number): AxiosPromise => {
    return axios.delete(`${TRACKER_API}/vehicles/${id}`);
};
