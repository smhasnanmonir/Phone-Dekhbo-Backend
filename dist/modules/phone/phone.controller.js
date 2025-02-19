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
exports.phoneController = void 0;
const phone_services_1 = require("./phone.services");
const tryCatch_1 = __importDefault(require("../../shared/tryCatch"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const getPhonesFromDBController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield phone_services_1.phoneServices.getPhonesFromDBService();
        res.status(200).json({
            success: true,
            message: "Data retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving data",
        });
    }
});
const insertPhoneIntoDBController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const result = yield phone_services_1.phoneServices.insertPhoneIntoDBService(req.body.data);
        res.status(200).json({
            success: true,
            message: "Phone inserted into the database successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error inserting phone into the database",
            data: error.message,
        });
    }
});
const getPhoneFromSlugFromDBController = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = req.params.slug;
    const result = yield phone_services_1.phoneServices.getPhoneFromSlugFromDBService(slug);
    if (result != null) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Phone Data fetched successfully",
            data: result,
        });
    }
    else {
        res.status(500).json({
            success: false,
            message: "No match data found after searching it wih slug.",
            data: "No phone found",
        });
    }
}));
const getLatestPhoneFromDBController = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = req.params.slug;
    const result = yield phone_services_1.phoneServices.getLatestPhoneFromDBService();
    if (result != null) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Phone Data fetched successfully",
            data: result,
        });
    }
    else {
        res.status(500).json({
            success: false,
            message: "No match data found after searching it wih slug.",
            data: "No phone found",
        });
    }
}));
exports.phoneController = {
    getPhonesFromDBController,
    insertPhoneIntoDBController,
    getPhoneFromSlugFromDBController,
    getLatestPhoneFromDBController,
};
