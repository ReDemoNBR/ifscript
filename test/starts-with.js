const test = require("./test");

let codes = ["^ tree", "^tree"];
let list = [
    ["tree", true],
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", true],
    ["Trees", true],
    ["Small tree", false],
    ["Big Tree", false],
    ["TREEHOUSE", true]
];
test(list, codes);