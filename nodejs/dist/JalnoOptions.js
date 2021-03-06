"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
const Utils_1 = require("./Utils");
class JalnoOptions {
    static load(options) {
        if (options === undefined) {
            options = {};
        }
        if (options.php === undefined) {
            options.php = "php";
        }
        return new Promise((resolve, reject) => {
            const jalnoOptions = new JalnoOptions();
            const jalno = child_process.exec(`${options.php} index.php --process=packages/node_webpack/processes/GetJalnoOptions@getAvailableLangs`, {
                cwd: (0, Utils_1.getJalnoIndexDir)(),
            });
            jalno.stdout.on("data", (data) => {
                try {
                    jalnoOptions.availableLangs = JSON.parse(data);
                }
                catch (e) { }
                resolve(jalnoOptions);
            });
            jalno.on("error", reject);
        });
    }
    availableLangs;
    constructor() {
    }
}
exports.default = JalnoOptions;
