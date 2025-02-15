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
exports.phoneController = void 0;
const phone_services_1 = require("./phone.services");
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
exports.phoneController = {
    getPhonesFromDBController,
    insertPhoneIntoDBController,
};
