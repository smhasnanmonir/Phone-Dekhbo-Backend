import { NextFunction, Request, Response } from "express";
import { phoneZodSchema } from "../modules/phone/phone.zodschema";
import { z } from "zod";

const zodSchemaValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    phoneZodSchema.insertPhoneSchema.parse(req.body.data);
    next();
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      res.status(400).json({ error: e.errors });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export default zodSchemaValidator;
