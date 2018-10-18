const test = require("./test");

let codes = ["$ tree", "$tree"];
let list = [
    ["tree", true], 
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", false],
    ["Trees", false],
    ["Small tree", true],
    ["Big Tree", true],
    ["TREEHOUSE", false]
];
test(list, codes);