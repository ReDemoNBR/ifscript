const test = require("./test");

let codes = ["tree", "= tree", "=tree"];
let list = [
    ["tree", true],
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", false],
    ["Trees", false]
];
test(list, codes);