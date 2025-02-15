"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const zodvalidation_1 = __importDefault(require("../../middlwares/zodvalidation"));
const auth_zodschema_1 = require("./auth.zodschema");
const router = (0, express_1.Router)();
router.post("/user-login", (0, zodvalidation_1.default)(auth_zodschema_1.authZodSchema.loginZodSchema), auth_controller_1.userAuthController.userLoginController);
router.get("/cookie", auth_controller_1.userAuthController.userCookieController);
exports.authRouter = router;
