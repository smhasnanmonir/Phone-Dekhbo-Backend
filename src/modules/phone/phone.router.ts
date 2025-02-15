import express, { NextFunction, Request, Response } from "express";
import { phoneController } from "./phone.controller";
import zodSchemaValidator from "../../middlwares/zodvalidation";
import { phoneZodSchema } from "./phone.zodschema";
import auth from "../../middlwares/auth";

const router = express.Router();

router.get(
  "/get-phones", // @ts-ignore
  auth("ADMIN"),
  phoneController.getPhonesFromDBController
);

router.post(
  "/insert-phones",
  zodSchemaValidator(phoneZodSchema.insertPhoneSchema),
  phoneController.insertPhoneIntoDBController
);

export const phoneRouter = router;
