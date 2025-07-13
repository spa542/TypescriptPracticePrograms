"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = debug;
exports.info = info;
exports.error = error;
const IdGenerator_1 = require("./lib/IdGenerator");
function log(level, message, logProps) {
    process.stdout.write(`[${level}] ${message}\n`);
    if (logProps) {
        if (logProps.withId) {
            process.stdout.write(`logId: ${(0, IdGenerator_1.generateRandomString)()}\n`);
        }
        if (logProps.withDate) {
            process.stdout.write(`logDate: ${new Date().toISOString()}\n`);
        }
        if (logProps.note) {
            process.stdout.write(`logNote: ${logProps.note}\n`);
        }
    }
}
function debug(message, logProps) {
    log('debug', message, logProps);
}
function info(message, logProps) {
    log('info', message, logProps);
}
function error(message, logProps) {
    log('error', message, logProps);
}
