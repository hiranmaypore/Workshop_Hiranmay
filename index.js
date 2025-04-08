const fs = require("fs");
const textIn = fs.readFileSync("./data/text-in.txt","utf-8");
fs.writeFileSync('./data/text-out.txt',`this is a new line\n ${textIn}\nCreated On: ${Date.now()}`);
console.log(textIn);