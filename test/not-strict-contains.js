const test = require("./test");

let codes = ["! ~~ tree", "! ~~tree", "!~~ tree", "!~~tree"];
let list = [
    ["tree", false],
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", false],
    ["Trees", true],
    ["Small tree", false],
    ["Big Tree", true],
    ["TREEHOUSE", true]
];
test(list, codes);