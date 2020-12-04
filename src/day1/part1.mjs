import * as fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from 'url';

// read the file
const __dirname = dirname(fileURLToPath(import.meta.url));
const data = fs.readFileSync(__dirname + "/input.txt", 'utf8').split('\n');

let found = false, value, element;
for (let i = 0; i < data.length && !found; i++) {
    element = data[i]; // take the i-element
    // find the element that sum 2020 with the rest
    value = data.find((value) => +value + +element === 2020);
    if (value) { found = true } // if found => stop
}

console.log({ value, element, prod: value * element })