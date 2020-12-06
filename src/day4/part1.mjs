import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

let passport = {},
    validPassports = 0;
data.forEach((element) => {
    if (element !== "") {
        const splittedElement = element.split(" ");
        splittedElement.forEach((e) => {
            const [key, value] = e.split(":");
            // don't take 'cid' as key because it's optional
            if (key !== "cid") passport[`${key}`] = value;
        });
    } else {
        // if the number of keys is 7 (will be the 7 required keys) => validPassports++
        if (Object.keys(passport).length === 7) validPassports++;
        passport = {};
    }
});

console.log({ validPassports });
