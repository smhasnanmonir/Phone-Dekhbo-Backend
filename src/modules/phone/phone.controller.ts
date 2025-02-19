import { Request, RequestHandler, Response } from "express";
import { phoneServices } from "./phone.services";
import tryCatch from "../../shared/tryCatch";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const getPhonesFromDBController = async (req: Request, res: Response) => {
  try {
    const result = await phoneServices.getPhonesFromDBService();
    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving data",
    });
  }
};

const insertPhoneIntoDBController = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await phoneServices.insertPhoneIntoDBService(req.body.data);
    res.status(200).json({
      success: true,
      message: "Phone inserted into the database successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error inserting phone into the database",
      data: error.message,
    });
  }
};

const getPhoneFromSlugFromDBController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const slug: string = req.params.slug;
    const result = await phoneServices.getPhoneFromSlugFromDBService(slug);
    if (result != null) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Phone Data fetched successfully",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "No match data found after searching it wih slug.",
        data: "No phone found",
      });
    }
  }
);

const getLatestPhoneFromDBController: RequestHandler = tryCatch(
  async (req: Request, res: Response) => {
    const slug: string = req.params.slug;
    const result = await phoneServices.getLatestPhoneFromDBService();
    if (result != null) {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Phone Data fetched successfully",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "No match data found after searching it wih slug.",
        data: "No phone found",
      });
    }
  }
);

export const phoneController = {
  getPhonesFromDBController,
  insertPhoneIntoDBController,
  getPhoneFromSlugFromDBController,
  getLatestPhoneFromDBController,
};
