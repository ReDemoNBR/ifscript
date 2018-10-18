const test = require("./test");

let codes = ["@v 3.4.1", "@v3.4.1"];
let list = [
    ["3.4.1", true],
    ["3.4.0", false],
    ["3.4.2", false],
    ["4.4.1", false],
    ["foo", false],
    ["3.4.1.0", false],
    ["3.4.1.1", false],
    ["3.4", false]
];
test(list, codes);

let codes2 = ["@v >= 3.4.1", "@v >=3.4.1", "@v>= 3.4.1", "@v>=3.4.1"];
let list2 = [
    ["3.4.1", true],
    ["3.4.0", false],
    ["3.4.2", true],
    ["4.4.1", true],
    ["foo", false],
    ["3.4.1.0", false],
    ["3.4.1.1", false],
    ["3.4", false]
];
test(list2, codes2);