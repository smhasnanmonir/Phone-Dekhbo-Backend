import { Request, Response } from "express";
import { phoneServices } from "./phone.services";

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

export const phoneController = {
  getPhonesFromDBController,
  insertPhoneIntoDBController,
};
