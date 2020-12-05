import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from '../utils/readfile.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + '/input.txt');

let validPasswords = 0
data.forEach((element) => {
    // first take the data that is necesary
    const [code, pass] = element.split(':');
    pass.slice(1);
    const [numbers, letter] = code.split(" ");
    const [pos1, pos2] = numbers.split("-");

    // find the occurences of the letter and checks if it's correct
    if (pass[pos1] === letter && pass[pos2] !== letter || pass[pos1] !== letter && pass[pos2] === letter) {
        ++validPasswords;
    }
})

console.log({ validPasswords })