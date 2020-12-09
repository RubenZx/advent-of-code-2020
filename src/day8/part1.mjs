import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

const data = input.map((d) => {
    const [instruction, value] = d.split(" ");
    return { instruction, value, nJumps: 0 };
});

let acc = 0,
    stop = false,
    index = 0;
while (!stop) {
    const inst = data[index];
    inst.nJumps++;
    data[index] = inst;

    if (inst.instruction === "acc") {
        acc += +inst.value;
        index++;
    } else if (inst.instruction === "jmp") {
        index += +inst.value;
    } else {
        index++;
    }

    if (inst.nJumps > 1) stop = true;
}

console.log({ accumulator: acc - 1 });
