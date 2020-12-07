import { dirname } from "path";
import { fileURLToPath } from "url";
import readFile from "../utils/readfile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFile(__dirname + "/input.txt");

// regexs and options to valid a passport
const hairColorRe = /#((\d|[a-f]){6})/;
const eclOptions = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
const validPassport = ({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => {
    if (+byr < 1920 || +byr > 2002) return false;
    if (+iyr < 2010 || +iyr > 2020) return false;
    if (+eyr < 2020 || +eyr > 2030) return false;

    if (hgt.includes("cm")) {
        const [number, _m] = hgt.split("cm");
        if (+number < 150 || +number > 193) return false;
    } else if (hgt.includes("in")) {
        const [number, _m] = hgt.split("in");
        if (+number < 59 || +number > 76) return false;
    } else {
        return false;
    }

    if (!hairColorRe.test(hcl)) return false;
    if (pid.length !== 9) return false;
    if (!eclOptions.some((opt) => opt === ecl)) return false;

    return true;
};

let passport = {},
    validPassports = 0;
data.forEach((element) => {
    if (element !== "") {
        const splittedElement = element.split(" ");
        splittedElement.forEach((e) => {
            const [key, value] = e.split(":");
            // don't take 'cid' as key because it's optional
            if (key !== "cid") passport[`${key}`] = value;
        });
    } else {
        // checks if the 7 fields are present an if the passport is valid
        if (Object.keys(passport).length === 7 && validPassport(passport))
            validPassports++;
        passport = {};
    }
});

console.log({ validPassports });
