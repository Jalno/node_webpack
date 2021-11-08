import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import Language from "./Language";
import Module from "./Module";
import Package from "./Package";
export default class Front {
    constructor(_package, _name) {
        this._package = _package;
        this._name = _name;
        this.entriesTypes = ["css", "less", "scss", "sass", "js", "ts", "tsx"];
        this.async = initDependencies();
        this._path = _package.path + "/" + _name;
    }
    static unserialize(data) {
        return new Front(Package.unserialize(data._package), data._name);
    }
    Promise() { }
}
void  > {
    const: theme = await, this: .getTheme(),
    if() { } };
!theme || !theme.hasOwnProperty("assets");
{
    return;
}
const packagejson = this._path + "/package.json";
let packages = {}, as = any;
if (await)
    promisify(fs.exists)(packagejson);
{
    packages = JSON.parse(await, promisify(fs.readFile)(packagejson, "UTF8"));
}
if (!packages.hasOwnProperty("dependencies")) {
    packages.dependencies = {};
}
let hasChange = false;
for (const asset of theme.assets)
    as;
IAsset[];
{
    if (asset.type === "package") {
        const firstAt = asset.name.indexOf("@");
        if (firstAt !== -1) {
            const packageDesc = ((firstAt === 0) ? asset.name.substr(1) : asset.name).split("@", 2);
            asset.name = (firstAt === 0 ? "@" : "") + packageDesc[0];
            if (packageDesc.length === 1) {
                asset.version = packageDesc[1];
            }
        }
        if (packages.dependencies[asset.name] === undefined) {
            packages.dependencies[asset.name] = asset.version ? asset.version : "latest";
            hasChange = true;
        }
        else if (asset.version && packages.dependencies[asset.name] !== asset.version) {
            packages.dependencies[asset.name] = asset.version;
            hasChange = true;
        }
    }
}
if (hasChange) {
    await;
    promisify(fs.writeFile)(packagejson, JSON.stringify(packages, null, 2), "utf8");
}
async;
getModules();
Promise < Module[] > {
    const: node_modules = this._path + "/node_modules",
    const: json = this._path + "/package.json",
    const: exists = promisify(fs.exists),
    const: readFile = promisify(fs.readFile),
    if() { } };
!await;
exists(node_modules) ||
    !await;
exists(json);
{
    return [];
}
const packages = JSON.parse(await, readFile(json, "UTF8"));
const assets = [];
for (const name in packages.dependencies) {
    if (packages.dependencies[name] !== undefined) {
        const path = node_modules + "/" + name + "/package.json";
        if (await)
            exists(path);
        {
            const node = JSON.parse(await, readFile(path, "UTF8"));
            if (packages.dependencies[name] === "latest") {
                packages.dependencies[name] = "^" + node.version;
            }
            assets.push(new Module(name, node.version, node.hasOwnProperty("main") ? node.main : "index.js", packages.dependencies[name], this));
        }
    }
}
return assets;
async;
getEntries();
Promise < IEntries > {
    const: theme = await, this: .getTheme(),
    if() { } };
!theme;
{
    return;
}
const entries = [];
if (theme.hasOwnProperty("assets")) {
    for (const asset of theme.assets)
        as;
    IAsset[];
    {
        if (this.entriesTypes.indexOf(asset.type) > -1 && asset.file !== undefined) {
            entries.push(this._path + "/" + asset.file);
        }
    }
}
return {
    name: theme.name,
    entries: entries,
};
async;
getTheme();
Promise < any > {
    const: themeJson = this._path + "/theme.json",
    if() { } };
!await;
promisify(fs.exists)(themeJson);
{
    return;
}
return JSON.parse(await, promisify(fs.readFile)(themeJson, "UTF8"));
async;
clean(filePath = "");
Promise < void  > {
    if() { } };
!filePath;
{
    filePath = path.resolve(this._path, "node_modules");
}
if (!await)
    promisify(fs.exists)(filePath);
{
    return;
}
const unlink = promisify(fs.unlink);
if (!(await))
    promisify(fs.lstat)(filePath);
isDirectory();
{
    return await;
    unlink(filePath);
}
const files = await, promisify = (fs.readdir)(filePath, {
    withFileTypes: true,
});
if (files.length > 0) {
    const promises = [];
    for (const file of files) {
        const fpath = path.resolve(filePath, file.name);
        if (file.isDirectory()) {
            promises.push(this.clean(fpath));
        }
        else {
            promises.push(unlink(fpath));
        }
    }
    await;
    Promise.all(promises);
}
return promisify(fs.rmdir)(filePath);
async;
getLangs();
Promise < Language[] > {
    const: file = await, this: .getTheme(),
    if() { } };
!file.hasOwnProperty("languages");
{
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
name();
{
    return this._name;
}
get;
path();
{
    return this._path;
}
get;
package();
{
    return this._package;
}
