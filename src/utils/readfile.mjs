import * as fs from 'fs';

const readFile = (path) => {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    return [...data];
}

export default readFile

