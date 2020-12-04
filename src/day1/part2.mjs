import * as fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from 'url';

// read the file
const __dirname = dirname(fileURLToPath(import.meta.url));
const data = fs.readFileSync(__dirname + "/input.txt", 'utf8').split('\n');

let e1, e2, e3, stop = false
for (let i = 0; i < data.length && !stop; i++) {
    e1 = +data[i];
    for (let j = 0; j < data.length && !stop; j++) {
        e2 = +data[j];
        e3 = data.find((e3) => e1 + e2 + +e3 === 2020);
        if (e3) { stop = true }
    }
}

console.log(e3 * e1 * e2)