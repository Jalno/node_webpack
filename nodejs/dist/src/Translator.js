import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import Language from "./Language";
export default class Translator {
    static addLang(code, file) {
        Translator._langs.push(new Language(code, file));
    }
}
Translator.async = exportFile(activeLanguages ?  : string[]);
{
    const langs = {};
    for (const lang of Translator._langs) {
        if (activeLanguages !== undefined && activeLanguages.indexOf(lang.code) === -1) {
            continue;
        }
        if (langs[lang.code] === undefined) {
            langs[lang.code] = [];
        }
        langs[lang.code].push(lang.path);
    }
    let TranslatorDotTs = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translator = (function () {
	function Translator() {
	}
	Translator.init = function () {
		window.jalno = {
			translator: {},
		};`;
    for (const code in langs) {
        if (langs[code] !== undefined) {
            TranslatorDotTs += `\n\t\twindow.jalno.translator["${code}"] = [];`;
            for (const langPath of langs[code]) {
                TranslatorDotTs += `\n\t\twindow.jalno.translator.${code}.push(require("${langPath}"));`;
            }
        }
    }
    TranslatorDotTs += `\n\t};
	Translator.init();
}());
exports.default = Translator`;
    const directory = path.dirname(Translator.filePath);
    if (!await)
        promisify(fs.exists)(directory);
    {
        await;
        promisify(fs.mkdir)(directory, { recursive: true });
    }
    return promisify(fs.writeFile)(Translator.filePath, TranslatorDotTs, "utf8");
}
get;
langs();
{
    return Translator._langs;
}
get;
filePath();
{
    return path.resolve("..", "..", "assets", "js", "Translator.js");
}
_langs: Language[] = [];
