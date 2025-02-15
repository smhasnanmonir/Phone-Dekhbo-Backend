"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateSlug = (phoneName) => {
    return phoneName
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, "") // Remove non-alphanumeric characters (except hyphen)
        .replace(/\-\-+/g, "-") // Replace multiple hyphens with one
        .replace(/^-+/, "") // Remove hyphen from the beginning
        .replace(/-+$/, ""); // Remove hyphen from the end
};
exports.default = generateSlug;
