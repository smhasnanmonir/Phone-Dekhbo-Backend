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
exports.userAuthController = void 0;
const tryCatch_1 = __importDefault(require("../../shared/tryCatch"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const auth_services_1 = require("./auth.services");
const http_status_1 = __importDefault(require("http-status"));
const userLoginController = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.userAuthServices.userLoginService(req.body.data);
    let refreshToken = "";
    if (result === null || result === void 0 ? void 0 : result.refreshToken) {
        refreshToken = result.refreshToken;
    }
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
    });
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "user data fetched.",
            data: {
                email: result.email,
                role: result.role,
                accessToken: result.accessToken,
            },
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "Wrong Email or password.",
            data: result,
        });
    }
}));
const userCookieController = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_services_1.userAuthServices.userCookieService(refreshToken);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "user data fetched.",
        data: result,
    });
}));
exports.userAuthController = {
    userLoginController,
    userCookieController,
};
