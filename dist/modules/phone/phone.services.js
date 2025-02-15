"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const slug_generator_1 = __importDefault(require("../../shared/slug-generator"));
const getPhonesFromDBService = () => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield prisma_1.default.phone.findMany({
        include: {
            specs: {},
        },
    });
    return phones;
});
const insertPhoneIntoDBService = (props) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(props);
    const slugGenerator = (0, slug_generator_1.default)(props.model);
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const phone = yield transactionClient.phone.create({
            data: {
                status: props.status,
                brand: props.brand,
                model: props.model,
                image: props.image,
                releaseDate: props.releaseDate,
                price: props.price,
                slug: slugGenerator, // Add the slug to the database
            },
        });
        yield transactionClient.spec.create({
            data: {
                phoneId: phone.id,
                network: props.specs.network,
                body: {
                    dimensions: props.specs.body.dimensions,
                    weight: props.specs.body.weight,
                    build: props.specs.body.build,
                    sim: props.specs.body.sim,
                },
                display: {
                    displayType: props.specs.display.displayType,
                    size: props.specs.display.size,
                    resolution: props.specs.display.resolution,
                    protection: props.specs.display.protection,
                    features: props.specs.display.features,
                    contrastRatio: props.specs.display.contrastRatio,
                    brightness: props.specs.display.brightness,
                    colors: props.specs.display.colors,
                    aspectRatio: props.specs.display.aspectRatio,
                },
                os: props.specs.os,
                chipset: {
                    manufacturer: props.specs.chipset.manufacturer,
                    model: props.specs.chipset.model,
                    architecture: props.specs.chipset.architecture,
                    coprocessor: props.specs.chipset.coprocessor,
                    gpu: props.specs.chipset.gpu,
                },
                memory: {
                    internal: props.specs.memory.internal,
                    external: props.specs.memory.external,
                },
                camera: {
                    main: props.specs.camera.main,
                    ultrawide: props.specs.camera.ultrawide,
                    telephoto: props.specs.camera.telephoto,
                    photo: props.specs.camera.photo,
                    video: props.specs.camera.video,
                    features: props.specs.camera.features,
                    lens: props.specs.camera.lens,
                    other: props.specs.camera.other,
                },
                sound: {
                    speakerType: props.specs.sound.speakerType,
                    noiseCancellation: props.specs.sound.noiseCancellation,
                    microphone: props.specs.sound.microphone,
                    audioFeatures: props.specs.sound.audioFeatures,
                },
                connection: {
                    wlan: props.specs.connection.wifi,
                    bluetooth: props.specs.connection.bluetooth,
                    nfc: props.specs.connection.nfc,
                    usb: props.specs.connection.usb,
                },
                ports: {
                    headphoneJack: props.specs.ports.headphoneJack,
                    chargingType: props.specs.ports.chargingType,
                },
                battery: {
                    capacity: props.specs.battery.capacity,
                    fastCharge: props.specs.battery.fastCharge,
                    chargingTime: props.specs.battery.chargingTime,
                    dischargingTime: props.specs.battery.dischargingTime,
                },
                pros: props.specs.pros,
                cons: props.specs.cons,
                colors: props.specs.colors,
                ratings: {
                    display: props.specs.ratings.display,
                    battery: props.specs.ratings.battery,
                    design: props.specs.ratings.design,
                    performance: props.specs.ratings.performance,
                    camera: props.specs.ratings.camera,
                },
            },
        });
        return phone;
    }));
    return result;
});
exports.phoneServices = {
    getPhonesFromDBService,
    insertPhoneIntoDBService,
};
