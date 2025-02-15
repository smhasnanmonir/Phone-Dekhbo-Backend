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
exports.userService = void 0;
const isUserExists_1 = __importDefault(require("../../middlwares/isUserExists"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userCreateService = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = process.env.SALT;
    const hashedPassword = yield bcrypt_1.default.hash(props.password, Number(salt));
    if (yield (0, isUserExists_1.default)(props.email)) {
        throw new Error("User already exists!");
    }
    const result = yield prisma_1.default.user.create({
        data: {
            username: props.username,
            name: props.name,
            email: props.email,
            password: hashedPassword,
            role: props.role,
            image: props.image,
        },
    });
    return result;
});
exports.userService = {
    userCreateService,
};
