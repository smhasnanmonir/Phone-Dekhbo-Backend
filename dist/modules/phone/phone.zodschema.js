"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneZodSchema = void 0;
const zod_1 = require("zod");
// Define the Zod schema for PhoneSpecs
const phoneSpecsSchema = zod_1.z.object({
    network: zod_1.z.string(),
    body: zod_1.z.object({
        dimensions: zod_1.z.string(),
        weight: zod_1.z.number(),
        build: zod_1.z.string(),
        sim: zod_1.z.string(),
    }),
    display: zod_1.z.object({
        displayType: zod_1.z.string(),
        size: zod_1.z.number(),
        resolution: zod_1.z.string(),
        protection: zod_1.z.string(),
        features: zod_1.z.string().optional(),
        contrastRatio: zod_1.z.string().optional(),
        brightness: zod_1.z.string().optional(),
        colors: zod_1.z.string().optional(),
        aspectRatio: zod_1.z.string().optional(),
    }),
    os: zod_1.z.string(),
    chipset: zod_1.z.object({
        manufacturer: zod_1.z.string(),
        model: zod_1.z.string(),
        architecture: zod_1.z.string(),
        coprocessor: zod_1.z.string().optional(),
        gpu: zod_1.z.string(),
    }),
    memory: zod_1.z.object({
        internal: zod_1.z.string(),
        external: zod_1.z.string(),
    }),
    camera: zod_1.z.object({
        main: zod_1.z.string(),
        ultrawide: zod_1.z.string(),
        telephoto: zod_1.z.string(),
        photo: zod_1.z.string(),
        video: zod_1.z.string(),
        features: zod_1.z.string().optional(),
        lens: zod_1.z.string().optional(),
        other: zod_1.z.string().optional(),
    }),
    sound: zod_1.z.object({
        speakerType: zod_1.z.string(),
        noiseCancellation: zod_1.z.string(),
        microphone: zod_1.z.string().optional(),
        audioFeatures: zod_1.z.string().optional(),
    }),
    connection: zod_1.z.object({
        wifi: zod_1.z.string(),
        bluetooth: zod_1.z.string(),
        nfc: zod_1.z.string(),
        usb: zod_1.z.string(),
    }),
    ports: zod_1.z.object({
        headphoneJack: zod_1.z.string(),
        chargingType: zod_1.z.string(),
    }),
    battery: zod_1.z.object({
        capacity: zod_1.z.string(),
        fastCharge: zod_1.z.string(),
        chargingTime: zod_1.z.string(),
        dischargingTime: zod_1.z.string(),
    }),
    pros: zod_1.z.array(zod_1.z.string()),
    cons: zod_1.z.array(zod_1.z.string()),
    colors: zod_1.z.string(),
    ratings: zod_1.z.object({
        display: zod_1.z.string(),
        battery: zod_1.z.string(),
        design: zod_1.z.string(),
        performance: zod_1.z.string(),
        camera: zod_1.z.string(),
    }),
});
// Define the Zod schema for InsertPhoneProps
const insertPhoneSchema = zod_1.z.object({
    status: zod_1.z.enum(["released", "upcoming"]),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    image: zod_1.z.string(),
    releaseDate: zod_1.z.string(),
    price: zod_1.z.number(),
    specs: phoneSpecsSchema,
});
exports.phoneZodSchema = {
    insertPhoneSchema,
};
