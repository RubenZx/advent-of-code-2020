import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = readFile(__dirname + "/input.txt");

const colors = new Set(),
    map = new Map();
input.forEach((element) => {
    const parserElement = element
        .split(/contain|bag[s]*|,|\./)
        .map((item) => item.trim())
        .filter((item) => item !== "");

    colors.add(parserElement[0]);
    map.set(`${parserElement[0]}`, parserElement.slice(1));
});

const containsShinyGold = (color) => {
    if (color === "shiny gold") return true;
    if (!map.has(color)) return false;

    const bagsWithin = map.get(color);
    for (const bag of bagsWithin) {
        if (containsShinyGold(bag.substring(2))) return true;
    }
    return false;
};

let bags = 0;
colors.forEach((color) => {
    if (containsShinyGold(color) && color !== "shiny gold") bags++;
});

console.log({ bags });