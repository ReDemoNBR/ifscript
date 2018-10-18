const test = require("./test");

let codes = ["@@", "@@ ", "@@ this text is completely ignored", "@@this text is completely ignored"];
let list = [
    ["3.4.1", true],
    ["3.4.0", true],
    ["3.4.2", true],
    ["4.4.1", true],
    ["foo", false],
    ["3.4.1.0", false],
    ["3.4.1.1", false],
    ["3.4", false]
];
test(list, codes);
