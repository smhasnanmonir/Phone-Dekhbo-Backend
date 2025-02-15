import { Router } from "express";
import { userController } from "./user.controller";
import isUserExist from "../../middlwares/isUserExists";

const router = Router();

router.get("/get-users", userController.createUserController);
router.post("/create-user", userController.createUserController);

export const userRouter = router;
