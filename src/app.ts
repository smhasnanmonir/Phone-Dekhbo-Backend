import express, { Application, Request, Response } from "express";
import cors from "cors";
import { phoneRouter } from "./modules/phone/phone.router";
import limiter from "./middlwares/ratelimiter";
import { userRouter } from "./modules/user/user.router";
import { authRouter } from "./modules/auth/auth.router";
import cookieParser from "cookie-parser";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(limiter);

app.get("/", (req, res) => {
  res.send({
    message: "The Phone Dekhbo server is running",
  });
});

app.use("/api/v1", phoneRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", authRouter);

// app.get("/get-ip", (req, res) => {
//   const clientIP =
//     req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//   console.log("Client IP:", clientIP);
//   res.send({
//     message: "IP fetched successfully",
//     data: clientIP,
//   });
// });

export default app;
