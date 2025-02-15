"use strict";
// jwt.verify(props, "messi20244") as JwtPayload;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const decodeToken = (props, secret) => {
    return jsonwebtoken_1.default.verify(props, secret);
};
exports.decodeToken = decodeToken;
