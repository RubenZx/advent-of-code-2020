import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

const encryptionWeakness = (data, num) => {
    let sum = 0,
        i = 0,
        j = 0,
        found = false,
        candidates = [];
    while (!found) {
        const element = +data[i];
        if (element + sum <= num) {
            i++;
            candidates.push(element);
            sum += element;
            if (sum === num) found = true;
        } else {
            j++;
            i = j;
            sum = 0;
            candidates = [];
        }
    }
    return Math.min(...candidates) + Math.max(...candidates);
};

console.log({ weakness: encryptionWeakness(data, 257342611) });