import axios, { AxiosPromise } from 'axios';
import { TRACKER_API } from './endpoints';
import { User } from '../Models/Users';

export const getUsers = (): AxiosPromise<User[]> => {
    return axios.get(`${TRACKER_API}/users`);
};

export const getUser = (id: number): AxiosPromise<User> => {
    return axios.get(`${TRACKER_API}/users/${id}`);
};

export const getUserVehicles = (id: number): AxiosPromise<User> => {
    return axios.get(`${TRACKER_API}/users/${id}/vehicles`);
};

export const addUser = (user: User): AxiosPromise => {
    return axios.post(`${TRACKER_API}/users`, user);
};

export const updateUser = (user: User): AxiosPromise => {
    return axios.put(`${TRACKER_API}/users`, user);
}

export const deleteUser = (id: number): AxiosPromise => {
    return axios.delete(`${TRACKER_API}/users/${id}`);
}
