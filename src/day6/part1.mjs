import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

let set = new Set(),
    numberOfYes = 0;
data.forEach((element) => {
    if (element !== "") {
        const splittedElement = element.split("");
        splittedElement.forEach((item) => set.add(item));
    } else {
        numberOfYes += set.size;
        set.clear();
    }
});

console.log({ numberOfYes });
