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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const isUserExists_1 = __importDefault(require("../../middlwares/isUserExists"));
const generateToken_1 = require("../../helper/generateToken");
const decodeToken_1 = require("../../helper/decodeToken");
const userLoginService = (props) => __awaiter(void 0, void 0, void 0, function* () {
    // un-hashing password
    const salt = process.env.SALT;
    const pass = props.password;
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: props.email,
        },
    });
    // check if the password is correct or not.
    const isCorrectPassword = yield bcrypt_1.default.compare(props.password, user.password);
    const accessToken = (0, generateToken_1.generateToken)(user.email, user.role, 15000, "messi2024");
    const refreshToken = (0, generateToken_1.generateToken)(user.email, user.role, 150000, "messi20244");
    if (isCorrectPassword) {
        return {
            email: user.email,
            role: user.role,
            accessToken,
            refreshToken,
        };
    }
});
const userCookieService = (props) => __awaiter(void 0, void 0, void 0, function* () {
    let decoded;
    try {
        decoded = (0, decodeToken_1.decodeToken)(props, "messi20244");
    }
    catch (err) {
        return "You are not authorized to access.";
    }
    const result = yield (0, isUserExists_1.default)(decoded === null || decoded === void 0 ? void 0 : decoded.email);
    if (!result) {
        throw new Error("User not found");
    }
    const user = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: decoded.email,
        },
    });
    const accessToken = (0, generateToken_1.generateToken)(user.email, user.role, 15000, "messi2024");
    return {
        accessToken,
    };
});
exports.userAuthServices = {
    userLoginService,
    userCookieService,
};
