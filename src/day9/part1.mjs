import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

let start = 0,
    end = 25,
    exit = undefined;
while (!exit) {
    let found = false;
    const actual = +data[end];
    const preamble = data.slice(start, end);
    for (const first of preamble) {
        for (const second of preamble) {
            if (first !== second && +first + +second === actual) found = true;
        }
    }
    // didn't found any elements that sum is the actual elemenet
    if (!found) exit = actual;
    start++;
    end++;
}

console.log({ element: exit });
