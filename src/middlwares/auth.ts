import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../helper/decodeToken";
import { JwtPayload } from "jsonwebtoken";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    console.log(roles);
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: No token provided.",
        });
      }
      const token = req.headers.authorization;
      console.log(token);
      const decoded = decodeToken(token, "messi2024") as JwtPayload;

      //error if not decoded

      if (!decoded) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: Invalid or expired token.",
        });
      }

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You are not authorized to access this resource.",
        });
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
