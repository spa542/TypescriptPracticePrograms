"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = generateRandomString;
const uuid_1 = require("uuid");
function generateRandomString() {
    const randomString = (0, uuid_1.v4)();
    return randomString;
}
