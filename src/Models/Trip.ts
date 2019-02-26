export interface Trip {
  tripId: number;
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
