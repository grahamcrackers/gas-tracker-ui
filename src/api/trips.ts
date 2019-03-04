import axios, { AxiosPromise } from 'axios';
import { Trip } from '../Models/Trip';
import { TRACKER_API } from './endpoints';

export const getTrips = (): AxiosPromise<Trip[]> => {
    return axios.get(`${TRACKER_API}/trips`);
};

export const getTrip = (id: number): AxiosPromise<Trip> => {
    return axios.get(`${TRACKER_API}/trips/${id}`);
};

export const addTrip = (trip: Trip): AxiosPromise<Trip> => {
    return axios.post(`${TRACKER_API}/trips`, trip);
};

export const updateTrip = (trip: Trip): AxiosPromise<Trip> => {
    return axios.put(`${TRACKER_API}/trips`, trip);
};

export const deleteTrip = (id: number): AxiosPromise => {
    return axios.delete(`${TRACKER_API}/trips/${id}`);
};
