"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Language {
    _code;
    _path;
    static unserialize(data) {
        return new Language(data._code, data._path);
    }
    constructor(_code, _path) {
        this._code = _code;
        this._path = _path;
    }
    get code() {
        return this._code;
    }
    get path() {
        return this._path;
    }
}
exports.default = Language;
