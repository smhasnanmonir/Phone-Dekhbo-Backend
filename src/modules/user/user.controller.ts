import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.services";
import tryCatch from "../../shared/tryCatch";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const createUserController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const result = await userService.userCreateService(req.body.data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched!",
      data: result,
    });
  }
);

export const userController = {
  createUserController,
};
