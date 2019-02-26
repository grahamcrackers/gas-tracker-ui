import { Trip } from "./Trip";

export interface Vehicle {
  vehicleId: number;
  make: string;
  model: string;
  vin: string;
  userId: number;
  trips: Trip[];
}
