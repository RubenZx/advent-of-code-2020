import * as fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from 'url';

// read the file
const __dirname = dirname(fileURLToPath(import.meta.url));
const initialData = fs.readFileSync(__dirname + "/input.txt", 'utf8').split('\n');

let found = false, value, element;
for (let i = 0; i < initialData.length && !found; i++) {
    const data = [...initialData]
    element = data[i]; // take the i-element
    data.splice(i, 1); // remove from data

    // find the element that sum 2020 with the rest
    value = data.find((value) => +value + +element === 2020);
    found = value ? true : false; // if found => stop, else => continue
}

console.log({ value, element, prod: value * element })