// const admin = await prisma.admin.create({
//   data: {
//     username: "admin123",
//     name: "Admin User",
//     email: "admin@example.com",
//     password: "securepassword", // In real applications, ensure this is hashed
//     role: "ADMIN",
//     image: "https://example.com/admin-profile.jpg",
//     blogs: {
//       create: [
//         {
//           title: "New Phone Releases",
//           content: "Details about the latest phone releases in 2025.",
//         },
//       ],
//     },
//   },
// });

// // Create a User
// const user = await prisma.user.create({
//   data: {
//     username: "user123",
//     name: "Regular User",
//     email: "user@example.com",
//     password: "userpassword", // Ensure this is hashed in real-world apps
//     role: "USER",
//     image: "https://example.com/user-profile.jpg",
//   },
// });

// // Create a Phone with specs, pros, cons, ratings, and comments
// const phone = await prisma.phone.create({
//   data: {
//     status: "released",
//     brand: "Apple",
//     model: "iPhone 13 Pro",
//     image: "https://example.com/iphone13pro.jpg",
//     releaseDate: new Date("2021-09-24"),
//     price: 999.99,
//     specs: {
//       create: {
//         network: "5G",
//         dimensions: "146.7 x 71.5 x 7.7 mm",
//         weight: 204,
//         build: "Stainless steel frame, Ceramic Shield front",
//         sim: "Dual SIM (Nano-SIM and eSIM)",
//         displayType: "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision",
//         displaySize: 6.1,
//         resolution: "1170 x 2532 pixels",
//         os: "iOS 15",
//         chipset: "Apple A15 Bionic",
//         cpu: "Hexa-core",
//         gpu: "Apple GPU (5-core graphics)",
//         memoryInternal: "128GB 6GB RAM",
//         memoryExternal: null,
//         mainCamera: "Triple 12 MP",
//         selfieCamera: "12 MP",
//         sound: "Stereo speakers",
//         wlan: "Wi-Fi 802.11 a/b/g/n/ac/6",
//         bluetooth: "5.0",
//         gps: "Yes, with A-GPS, GLONASS, GALILEO, QZSS",
//         nfc: true,
//         usb: "Lightning, USB 2.0",
//         battery: "Li-Ion 3095 mAh, non-removable",
//         charging: "wired",
//         colors: "Graphite, Gold, Silver, Sierra Blue",
//         pros: {
//           create: [{ detail: ["Excellent camera", "Fast performance"] }],
//         },
//         cons: {
//           create: [{ detail: ["Expensive", "No Touch ID"] }],
//         },
//         ratings: {
//           create: [{ rating: ["4.8", "4.5", "5.0"] }],
//         },
//         comments: {
//           create: [
//             {
//               content: "Amazing phone with superb camera quality!",
//               user: { connect: { id: user.id } },
//             },
//           ],
//         },
//       },
//     },
//   },
// });

// console.log({ admin, user, phone });
