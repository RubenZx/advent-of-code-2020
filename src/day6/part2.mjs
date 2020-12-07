import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

let groups = [],
    numberOfYes = 0;
data.forEach((element) => {
    if (element !== "") {
        groups.push(new Set(element.split("")));
    } else {
        const firstArray = groups[0];
        const intersection = new Set(
            [...firstArray].filter((x) => {
                let res = true;
                for (let i = 0; i < groups.length; i++)
                    res = res && groups[i].has(x);
                return res;
            })
        );
        numberOfYes += intersection.size;
        groups = [];
    }
});

console.log({ numberOfYes });
