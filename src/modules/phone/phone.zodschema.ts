import { z } from "zod";

// Define the Zod schema for PhoneSpecs
const phoneSpecsSchema = z.object({
  network: z.string(),
  body: z.object({
    dimensions: z.string(),
    weight: z.number(),
    build: z.string(),
    sim: z.string(),
  }),
  display: z.object({
    displayType: z.string(),
    size: z.number(),
    resolution: z.string(),
    protection: z.string(),
    features: z.string().optional(),
    contrastRatio: z.string().optional(),
    brightness: z.string().optional(),
    colors: z.string().optional(),
    aspectRatio: z.string().optional(),
  }),
  os: z.string(),
  chipset: z.object({
    manufacturer: z.string(),
    model: z.string(),
    architecture: z.string(),
    coprocessor: z.string().optional(),
    gpu: z.string(),
  }),
  memory: z.object({
    internal: z.string(),
    external: z.string(),
  }),
  camera: z.object({
    main: z.string(),
    ultrawide: z.string(),
    telephoto: z.string(),
    photo: z.string(),
    video: z.string(),
    features: z.string().optional(),
    lens: z.string().optional(),
    other: z.string().optional(),
  }),
  sound: z.object({
    speakerType: z.string(),
    noiseCancellation: z.string(),
    microphone: z.string().optional(),
    audioFeatures: z.string().optional(),
  }),
  connection: z.object({
    wifi: z.string(),
    bluetooth: z.string(),
    nfc: z.string(),
    usb: z.string(),
  }),
  ports: z.object({
    headphoneJack: z.string(),
    chargingType: z.string(),
  }),
  battery: z.object({
    capacity: z.string(),
    fastCharge: z.string(),
    chargingTime: z.string(),
    dischargingTime: z.string(),
  }),
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  colors: z.string(),
  ratings: z.object({
    display: z.string(),
    battery: z.string(),
    design: z.string(),
    performance: z.string(),
    camera: z.string(),
  }),
});

// Define the Zod schema for InsertPhoneProps
const insertPhoneSchema = z.object({
  status: z.enum(["released", "upcoming"]),
  brand: z.string(),
  model: z.string(),
  image: z.string(),
  releaseDate: z.string(),
  price: z.number(),
  specs: phoneSpecsSchema,
});

export const phoneZodSchema = {
  insertPhoneSchema,
};
