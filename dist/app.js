"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const phone_router_1 = require("./modules/phone/phone.router");
const ratelimiter_1 = __importDefault(require("./middlwares/ratelimiter"));
const user_router_1 = require("./modules/user/user.router");
const auth_router_1 = require("./modules/auth/auth.router");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(ratelimiter_1.default);
app.get("/", (req, res) => {
    res.send({
        message: "The Phone Dekhbo server is running",
    });
});
app.use("/api/v1", phone_router_1.phoneRouter);
app.use("/api/v1", user_router_1.userRouter);
app.use("/api/v1", auth_router_1.authRouter);
// app.get("/get-ip", (req, res) => {
//   const clientIP =
//     req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//   console.log("Client IP:", clientIP);
//   res.send({
//     message: "IP fetched successfully",
//     data: clientIP,
//   });
// });
exports.default = app;
