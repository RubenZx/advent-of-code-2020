import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

const binaryDecode = (code, start, end, lowerHalfLetter) => {
    code.forEach((r) => {
        if (r === lowerHalfLetter) {
            end -= Math.round((end - start) / 2);
        } else {
            start += Math.floor((end - start) / 2) + 1;
        }
    });
    return start;
};

let higherId = 0;
data.forEach((code) => {
    const rowCode = code.substr(0, 7);
    const colCode = code.substr(7);

    const row = binaryDecode([...rowCode], 0, 127, "F");
    const col = binaryDecode([...colCode], 0, 7, "L");

    const seatId = row * 8 + col;
    if (seatId > higherId) higherId = seatId;
});

console.log({ higherId });
