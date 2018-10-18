const test = require("./test");

let codes = [">= 42", ">=42"];
let list = [
    ["55", true],
    ["42.55", true],
    ["42", true],
    ["-100", false],
    ["-15", false],
    ["hello", true],
    ["TREE", true],
    ["100+55", false]
];
test(list, codes);
