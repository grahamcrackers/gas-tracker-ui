import axios, { AxiosPromise } from "axios";
import { TRACKER_API } from "./endpoints";
import { User } from "../Models/Users";

export const getUsers = (): AxiosPromise<User[]> => {
  return axios.get(`${TRACKER_API}/users/all`);
};

export const getUser = (id: number): AxiosPromise<User> => {
    return axios.get(`${TRACKER_API}/users/${id}`)
}
