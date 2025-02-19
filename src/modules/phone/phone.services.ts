import prisma from "../../shared/prisma";
import generateSlug from "../../shared/slug-generator";

import { InsertPhoneProps } from "./phone.iterface";

const getPhonesFromDBService = async () => {
  const phones = await prisma.phone.findMany({
    include: {
      specs: {},
    },
  });
  return phones;
};

const insertPhoneIntoDBService = async (props: InsertPhoneProps) => {
  console.log(props);
  const slugGenerator = generateSlug(props.model);
  const result = await prisma.$transaction(async (transactionClient) => {
    const phone = await transactionClient.phone.create({
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

    await transactionClient.spec.create({
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
  });

  return result;
};

const getPhoneFromSlugFromDBService = async (props: string) => {
  const result = await prisma.phone.findUnique({
    where: {
      slug: props,
    },
    include: {
      specs: {},
    },
  });
  return result;
};

export const phoneServices = {
  getPhonesFromDBService,
  insertPhoneIntoDBService,
  getPhoneFromSlugFromDBService,
};
