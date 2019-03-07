import { Vehicle } from "./Vehicle";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  vehicles?: Vehicle[];
}
