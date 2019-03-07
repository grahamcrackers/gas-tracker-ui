import { Trip } from "./Trip";

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  vin?: string;
  userId: number;
  trips: Trip[];
}
