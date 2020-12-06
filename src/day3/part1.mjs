import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from '../utils/readfile.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + '/input.txt');

let right = 0, deep = 0, totalTrees = 0
data.forEach(row => {
    // checks if can continue in the row o start with the pattern again
    if (right + 3 < row.length) {
        right += 3
    } else {
        right += 3 - row.length
    }
    deep += 1

    // if deep is not out of bounds and there is a tree => totalTrees++
    if (deep < data.length && data[deep][right] === '#') {
        totalTrees++
    }
})

console.log({ totalTrees })

