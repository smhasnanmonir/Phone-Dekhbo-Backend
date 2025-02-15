import express from "express";
import { phoneController } from "./phone.controller";
import zodSchemaValidator from "../../middlwares/zodvalidation";
import { phoneZodSchema } from "./phone.zodschema";

const router = express.Router();

router.get("/get-phones", phoneController.getPhonesFromDBController);
router.post(
  "/insert-phones",
  zodSchemaValidator(phoneZodSchema.insertPhoneSchema),
  phoneController.insertPhoneIntoDBController
);

export const phoneRouter = router;
