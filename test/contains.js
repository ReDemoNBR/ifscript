const test = require("./test");

let codes = ["~ tree", "~tree"];
let list = [
    ["tree", true],
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", true],
    ["Trees", true],
    ["Small tree", true],
    ["Big Tree", true],
    ["TREEHOUSE", true]
];

test(list, codes);