import prisma from "../../shared/prisma";
import generateSlug from "../../shared/slug-generator";
import { PhoneCreateInput } from "./phone.iterface";

const getPhonesFromDBService = async () => {
  const phones = await prisma.phone.findMany({
    include: {
      specs: {},
    },
  });
  return phones;
};

const insertPhoneIntoDBService = async (props: PhoneCreateInput) => {
  const slug = generateSlug(props.model);
  const result = await prisma.$transaction(async (transactionClient) => {
    const phone = await transactionClient.phone.create({
      data: {
        status: props.status,
        brand: props.brand,
        model: props.model,
        image: props.image,
        releaseDate: props.releaseDate,
        price: props.price,
        slug: slug, // Add the slug to the database
      },
    });

    await transactionClient.spec.create({
      data: {
        phoneId: phone.id,
        network: props.specs.network,
        dimensions: props.specs.dimensions,
        weight: props.specs.weight,
        build: props.specs.build,
        sim: props.specs.sim,
        displayType: props.specs.displayType,
        displaySize: props.specs.displaySize,
        resolution: props.specs.resolution,
        os: props.specs.os,
        chipset: props.specs.chipset,
        cpu: props.specs.cpu,
        gpu: props.specs.gpu,
        memoryInternal: props.specs.memoryInternal,
        memoryExternal: props.specs.memoryExternal ?? null,
        mainCamera: props.specs.mainCamera,
        selfieCamera: props.specs.selfieCamera,
        sound: props.specs.sound,
        wlan: props.specs.wlan,
        bluetooth: props.specs.bluetooth,
        gps: props.specs.gps,
        nfc: props.specs.nfc,
        usb: props.specs.usb,
        battery: props.specs.battery,
        charging: props.specs.charging,
        colors: props.specs.colors,
        pros: props.specs.pros,
        cons: props.specs.cons,
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

export const phoneServices = {
  getPhonesFromDBService,
  insertPhoneIntoDBService,
};
