const test = require("./test");

let codes = [": 4", ":4"];
let list = [
    ["tree", true],
    ["TREE", true],
    ["Tree", true],
    ["trEE", true],
    ["TRee", true],
    ["trees", false],
    ["Trees", false],
    ["Small tree", false],
    ["Big Tree", false],
    ["TREEHOUSE", false]
];

test(list, codes);

let codes2 = [": >= 6", ": >=6", ":>= 6", ":>=6"];
let list2 = [
    ["tree", false],
    ["TREE", false],
    ["Tree", false],
    ["trEE", false],
    ["TRee", false],
    ["trees", false],
    ["Trees", false],
    ["Small tree", true],
    ["Big Tree", true],
    ["TREEHOUSE", true]
];
test(list2, codes2);