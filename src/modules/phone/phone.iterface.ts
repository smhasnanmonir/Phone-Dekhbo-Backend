import { ChargingType, status } from "@prisma/client";

interface Ratings {
  display: string;
  battery: string;
  design: string;
  performance: string;
  camera: string;
}

interface Specs {
  network: string;
  dimensions: string;
  weight: number;
  build: string;
  sim: string;
  displayType: string;
  displaySize: number;
  resolution: string;
  os: string;
  chipset: string;
  cpu: string;
  gpu: string;
  memoryInternal: string;
  memoryExternal: string | null;
  mainCamera: string;
  selfieCamera: string;
  sound: string;
  wlan: string;
  bluetooth: string;
  gps: string;
  nfc: string;
  usb: string;
  battery: string;
  charging: ChargingType;
  colors: string;
  pros: string[];
  cons: string[];
  ratings: Ratings;
}

export interface PhoneCreateInput {
  status: status;
  brand: string;
  model: string;
  image: string;
  releaseDate: string; // Use ISO 8601 format
  price: number;
  specs: Specs;
}
