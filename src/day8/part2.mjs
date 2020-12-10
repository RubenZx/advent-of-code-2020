import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

const initialData = input.map((d) => {
    const [instruction, value] = d.split(" ");
    return { instruction, value };
});

const handhelt = (data) => {
    let acc = 0,
        index = 0,
        executed = new Set();
    while (!executed.has(index) && index < data.length) {
        executed.add(index);
        const inst = data[index];
        if (inst.instruction === "acc") {
            acc += +inst.value;
            index++;
        } else if (inst.instruction === "jmp") {
            index += +inst.value;
        } else {
            index++;
        }
    }
    return { acc: acc, index };
};

let res,
    stop = false,
    data = [...initialData];
for (let i = 0; i < data.length && !stop; i++) {
    if (data[i].instruction !== "acc") {
        // swap operation
        data[i] = {
            ...data[i],
            instruction: data[i].instruction === "nop" ? "jmp" : "nop",
        };

        res = handhelt(data);
        // if with the swap find the end, that instruction was the error
        if (res.index === data.length) stop = true;
        else data = [...initialData];
    }
}

console.log(res);
