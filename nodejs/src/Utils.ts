import { join, resolve } from "path";

export function getPWD() {
	return (process.env.PWD !== undefined) ? process.env.PWD : __dirname;
}
export function isComposerPackage() {
	return getPWD().indexOf("/packages/") === -1;
}
export function getJalnoPath() {
	const currentPath = getPWD();
	if (isComposerPackage()) {
		return resolve(currentPath, "..", "..", "..", "..");
	}
	return currentPath;
}
export function getJalnoIndexDir() {
	return getJalnoPath();
}
export function getPackagesDir() {
	return join(getJalnoPath(), isComposerPackage() ? "vendor" : "packages");
}