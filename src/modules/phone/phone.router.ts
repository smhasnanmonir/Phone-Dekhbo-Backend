import express from "express";
import { phoneController } from "./phone.controller";
import zodSchemaValidator from "../../middlwares/zodvalidation";

const router = express.Router();

router.get("/get-phones", phoneController.getPhonesFromDBController);
router.post(
  "/insert-phones",
  zodSchemaValidator,
  phoneController.insertPhoneIntoDBController
);

export const phoneRouter = router;
