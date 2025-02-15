import { Request, RequestHandler, Response } from "express";
import tryCatch from "../../shared/tryCatch";
import sendResponse from "../../shared/sendResponse";
import { userAuthServices } from "./auth.services";
import httpStatus from "http-status";

const userLoginController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const result = await userAuthServices.userLoginService(req.body.data);

    let refreshToken = "";

    if (result?.refreshToken) {
      refreshToken = result.refreshToken;
    }

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
    });

    if (result) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "user data fetched.",
        data: {
          email: result.email,
          role: result.role,
          accessToken: result.accessToken,
        },
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Wrong Email or password.",
        data: result,
      });
    }
  }
);

const userCookieController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    const result = await userAuthServices.userCookieService(refreshToken);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "user data fetched.",
      data: result,
    });
  }
);

export const userAuthController = {
  userLoginController,
  userCookieController,
};
