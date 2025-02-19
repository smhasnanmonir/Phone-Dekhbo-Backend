"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneRouter = void 0;
const express_1 = __importDefault(require("express"));
const phone_controller_1 = require("./phone.controller");
const zodvalidation_1 = __importDefault(require("../../middlwares/zodvalidation"));
const phone_zodschema_1 = require("./phone.zodschema");
const router = express_1.default.Router();
router.get("/get-phones", // @ts-ignore
phone_controller_1.phoneController.getPhonesFromDBController);
router.post("/insert-phones", (0, zodvalidation_1.default)(phone_zodschema_1.phoneZodSchema.insertPhoneSchema), phone_controller_1.phoneController.insertPhoneIntoDBController);
router.get("/get-phone-slug/:slug", phone_controller_1.phoneController.getPhoneFromSlugFromDBController);
router.get("/get-latest-phone-home", phone_controller_1.phoneController.getLatestPhoneFromDBController);
exports.phoneRouter = router;
