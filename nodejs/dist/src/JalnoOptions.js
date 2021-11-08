import * as child_process from "child_process";
import * as path from "path";
export default class JalnoOptions {
    constructor() {
    }
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
                cwd: path.resolve(__dirname, "..", "..", "..", "..", "..", "public"),
            });
            jalno.stdout.on("data", (data) => {
                console.log(data);
                process.exit();
                try {
                    jalnoOptions.availableLangs = JSON.parse(data);
                }
                catch (e) { }
                resolve(jalnoOptions);
            });
        });
    }
}
