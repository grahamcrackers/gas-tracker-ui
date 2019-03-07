import { Vehicle } from "./Vehicle";

export interface Trip {
  id: number;
  date: string;
  odometer: number;
  tripMeter: number;
  totalGallons: number;
  totalFuelCost: number;
  costPerGallon: number;
  milesPerGallon: number;
  costPerMile: number;
  vehicleId: number;
}
