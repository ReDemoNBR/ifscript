const test = require("./test");

let codes = ["~~ tree", "~~tree"];
let list = [
    ["tree", true],
    ["TREE", false],
    ["Tree", false],
    ["trEE", false],
    ["TRee", false],
    ["trees", true],
    ["Trees", false],
    ["Small tree", true],
    ["Big Tree", false],
    ["TREEHOUSE", false]
];
test(list, codes);