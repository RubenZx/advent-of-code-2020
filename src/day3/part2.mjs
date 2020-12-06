import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

let options = [
    { rightSum: 1, deepSum: 1, rightCont: 0, deepCont: 0, totalTrees: 0 },
    { rightSum: 3, deepSum: 1, rightCont: 0, deepCont: 0, totalTrees: 0 },
    { rightSum: 5, deepSum: 1, rightCont: 0, deepCont: 0, totalTrees: 0 },
    { rightSum: 7, deepSum: 1, rightCont: 0, deepCont: 0, totalTrees: 0 },
    { rightSum: 1, deepSum: 2, rightCont: 0, deepCont: 0, totalTrees: 0 },
];

data.forEach((row) => {
    options.forEach((opt) => {
        // checks if can continue in the row o start with the pattern again
        opt.rightCont +=
            opt.rightCont + opt.rightSum < row.length
                ? opt.rightSum
                : opt.rightSum - row.length;

        opt.deepCont += opt.deepSum;

        // if deep is not out of bounds and there is a tree => totalTrees++
        if (
            opt.deepCont < data.length &&
            data[opt.deepCont][opt.rightCont] === "#"
        ) {
            opt.totalTrees++;
        }
    });
});

console.log({
    result: options.reduce((prod, { totalTrees }) => prod * totalTrees, 1),
});
