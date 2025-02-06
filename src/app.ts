import express, { Application, Request, Response } from "express";
import cors from "cors";
import { phoneRouter } from "./modules/phone/phone.router";
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "The Phone Dekhbo server is running",
  });
});

app.use("/api/v1", phoneRouter);

export default app;
