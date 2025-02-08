interface PhoneSpecs {
  network: string;
  body: {
    dimensions: string;
    weight: number;
    build: string;
    sim: string;
  };
  display: {
    displayType: string;
    size: number;
    resolution: string;
    protection: string;
    features?: string;
    contrastRatio?: string;
    brightness?: string;
    colors?: string;
    aspectRatio?: string;
  };
  os: string;
  chipset: {
    manufacturer: string;
    model: string;
    architecture: string;
    coprocessor?: string;
    gpu: string;
  };
  memory: {
    internal: string;
    external: string;
  };
  camera: {
    main: string;
    ultrawide: string;
    telephoto: string;
    photo: string;
    video: string;
    features?: string;
    lens?: string;
    other?: string;
  };
  sound: {
    speakerType: string;
    noiseCancellation: string;
    microphone?: string;
    audioFeatures?: string;
  };
  connection: {
    wifi: string;
    bluetooth: string;
    nfc: string;
    usb: string;
  };
  ports: {
    headphoneJack: string;
    chargingType: string;
  };
  battery: {
    capacity: string;
    fastCharge: string;
    chargingTime: string;
    dischargingTime: string;
  };
  pros: string[];
  cons: string[];
  colors: string;
  ratings: {
    display: string;
    battery: string;
    design: string;
    performance: string;
    camera: string;
  };
}

interface InsertPhoneProps {
  status: Status;
  brand: string;
  model: string;
  image: string;
  releaseDate: string;
  price: number;
  specs: PhoneSpecs;
}

enum Status {
  released = "released",
  upcoming = "upcoming",
}

export { InsertPhoneProps, PhoneSpecs };
