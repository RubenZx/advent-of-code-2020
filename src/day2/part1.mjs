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
    const [min, max] = numbers.split("-");

    // find the occurences of the letter and checks if it's correct
    const nLetters = pass.match(new RegExp(`${letter}`, 'g'));
    if (nLetters && nLetters.length >= min && nLetters.length <= max) {
        ++validPasswords;
    }
})

console.log({ validPasswords })