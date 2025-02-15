"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.get("/get-users", user_controller_1.userController.createUserController);
router.post("/create-user", user_controller_1.userController.createUserController);
exports.userRouter = router;
