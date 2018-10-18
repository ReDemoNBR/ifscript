const test = require("./test");

let codes = ["##", "## ", "## this text is completely ignored", "##this text is completely ignored"];
let list = [
    ["123", true],
    ["123.45", true],
    [".123", true],
    ["0.123", true],
    ["123.", true],
    ["123.0", true],
    ["123..0", false],
    ["123.0.1", false],
    ["foo", false],
    ["tree", false]
];
test(list, codes);
