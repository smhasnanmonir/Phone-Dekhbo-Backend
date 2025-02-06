import express from "express";
import { phoneController } from "./phone.controller";

const router = express.Router();

router.get("/get-phones", phoneController.getPhonesFromDBController);
router.post("/insert-phones", phoneController.insertPhoneIntoDBController);

export const phoneRouter = router;
