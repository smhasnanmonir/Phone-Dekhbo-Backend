"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const decodeToken_1 = require("../helper/decodeToken");
const auth = (...roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
            const decoded = (0, decodeToken_1.decodeToken)(token, "messi2024");
            console.log(decoded === null || decoded === void 0 ? void 0 : decoded.role);
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden: You are not authorized to access this resource.",
                });
            }
            next();
        }
        catch (err) {
            next(err);
        }
    });
};
exports.default = auth;
