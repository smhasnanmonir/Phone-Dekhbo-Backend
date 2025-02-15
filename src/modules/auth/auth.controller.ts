import { Request, RequestHandler, Response } from "express";
import tryCatch from "../../shared/tryCatch";
import sendResponse from "../../shared/sendResponse";
import { userAuthServices } from "./auth.services";

const userLoginController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const result = await userAuthServices.userLoginService(req.body.data);
  }
);

export const userAuthController = {
  userLoginController,
};
