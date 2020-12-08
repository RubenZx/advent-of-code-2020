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

    const actualColor = parserElement[0];
    colors.add(actualColor);
    parserElement.shift();

    map.set(
        `${actualColor}`,
        parserElement.map((element) => {
            if (element === "no other") return { q: 0, bag: element };
            return { q: +element[0], bag: element.slice(2) };
        })
    );
});

const sumBags = (firstBag) => {
    if (firstBag.q == 0) return 0;

    let tot = 1;
    const bagsWithin = map.get(firstBag.bag);
    for (const bag of bagsWithin) tot += bag.q * sumBags(bag);
    return tot;
};

console.log({ individualBags: sumBags({ q: 1, bag: "shiny gold" }) - 1 });
