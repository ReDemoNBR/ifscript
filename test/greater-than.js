const test = require("./test");

let codes = ["> 42", ">42"];
let list = [
    ["55", true],
    ["42.55", true],
    ["42", false],
    ["-100", false],
    ["-15", false],
    ["hello", true],
    ["TREE", true],
    ["100+55", false]
];
test(list, codes);

let codes2 = ["> tree", ">tree"];
let list2 = [
    ["55", false],
    ["42.55", false],
    ["42", false],
    ["-42", false],
    ["-100", false],
    ["-15", false],
    ["tree", false],
    ["TREE", false],
    ["trees", true],
    ["zylon", true],
    ["foo", false],
];

test(list2, codes2);