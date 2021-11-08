import * as path from "path";
import Front from "./Front";
import Language from "./Language";
export default class Package {
    constructor(_dir, _name) {
        this._dir = _dir;
        this._name = _name;
        this.async = getFrontends();
        this._path = this._dir + "/" + this._name;
    }
    static unserialize(data) {
        return new Package(data._dir, data._name);
    }
    Promise() { }
}
 > {
    const: packagejson = this._path + "/" + "package.json",
    const: data = await, promisify(fs, readFile) { } }(packagejson, "utf8");
const file = JSON.parse(data);
if (!file.hasOwnProperty("frontend")) {
    return [];
}
if (typeof file.frontend === "string") {
    file.frontend = [file.frontend];
}
const fronts = [];
for (const front of file.frontend) {
    fronts.push(new Front(this, front));
}
return fronts;
async;
getLangs();
Promise < Language[] > {
    const: packagejson = this._path + "/" + "package.json",
    const: data = await, promisify(fs, readFile) { } }(packagejson, "utf8");
const file = JSON.parse(data);
if (!file.hasOwnProperty("languages")) {
    return [];
}
const langs = [];
for (const code in file.languages) {
    if (file.languages[code]) {
        langs.push(new Language(code, path.join(this._path, file.languages[code])));
    }
}
return langs;
get;
path();
{
    return this._path;
}
get;
name();
{
    return this._name;
}
