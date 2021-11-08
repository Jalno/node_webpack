"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackagesDir = exports.getJalnoIndexDir = exports.getJalnoPath = exports.isComposerPackage = exports.getPWD = void 0;
const path_1 = require("path");
function getPWD() {
    return (process.env.PWD !== undefined) ? process.env.PWD : __dirname;
}
exports.getPWD = getPWD;
function isComposerPackage() {
    return getPWD().indexOf("/packages/") === -1;
}
exports.isComposerPackage = isComposerPackage;
function getJalnoPath() {
    const currentPath = getPWD();
    if (isComposerPackage()) {
        return (0, path_1.resolve)(currentPath, "..", "..", "..", "..");
    }
    return currentPath;
}
exports.getJalnoPath = getJalnoPath;
function getJalnoIndexDir() {
    return getJalnoPath();
}
exports.getJalnoIndexDir = getJalnoIndexDir;
function getPackagesDir() {
    return (0, path_1.join)(getJalnoPath(), isComposerPackage() ? "vendor" : "packages");
}
exports.getPackagesDir = getPackagesDir;
