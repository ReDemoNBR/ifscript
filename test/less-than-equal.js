const test = require("./test");

let codes = ["<= 42", "<=42"];
let list = [
    ["55", false],
    ["42.55", false],
    ["42", true],
    ["-42", true],
    ["-100", true],
    ["-15", true],
    ["hello", false],
    ["TREE", false],
    ["100+55", true]
];
test(list, codes);
