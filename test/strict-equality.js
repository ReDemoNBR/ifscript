const test = require("./test");

let codes = ["== tree", "==tree"];
let list = [
    ["tree", true],
    ["TREE", false],
    ["Tree", false],
    ["trEE", false],
    ["TRee", false],
    ["trees", false],
    ["Trees", false]
];
test(list, codes);