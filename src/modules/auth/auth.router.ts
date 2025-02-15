import { Router } from "express";
import { userAuthController } from "./auth.controller";
import zodSchemaValidator from "../../middlwares/zodvalidation";
import { authZodSchema } from "./auth.zodschema";

const router = Router();

router.post(
  "/user-login",
  zodSchemaValidator(authZodSchema.loginZodSchema),
  userAuthController.userLoginController
);
router.post("/cookie", userAuthController.userLoginController);

export const authRouter = router;
