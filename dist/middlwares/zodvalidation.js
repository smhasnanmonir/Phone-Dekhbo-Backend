"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define a generic Zod schema validator middleware
const zodSchemaValidator = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body.data);
            next();
        }
        catch (e) {
            if (e instanceof zod_1.z.ZodError) {
                res.status(400).json({ error: e.errors });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    };
};
exports.default = zodSchemaValidator;
