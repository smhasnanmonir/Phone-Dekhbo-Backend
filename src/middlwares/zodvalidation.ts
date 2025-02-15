import { NextFunction, Request, Response } from "express";
import { z, ZodSchema } from "zod";

// Define a generic Zod schema validator middleware
const zodSchemaValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body.data);
      next();
    } catch (e: unknown) {
      if (e instanceof z.ZodError) {
        res.status(400).json({ error: e.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};

export default zodSchemaValidator;
