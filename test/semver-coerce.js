const test = require("./test");

let codes = ["@c 69.0.3497.100", "@c69.0.3497.100"];
let list = [
    ["69.0.3497.100", true],
    ["69.0.3497.92", true],
    ["69.0.3497", true],
    ["69.0.3497.tree", true],
    ["69.0.3496", false],
    ["69.0.3498", false],
    ["68.0.3497", false],
    ["70.0.3497", false],
    ["foo", false]
];
test(list, codes);

let codes2 = ["@c > 69.0.3497.92", "@c >69.0.3497.92", "@c> 69.0.3497.92", "@c>69.0.3497.92"];
let list2 = [
    ["69.0.3497.100", false],
    ["69.0.3497.92", false],
    ["69.0.3497", false],
    ["69.0.3497.tree", false],
    ["69.0.3496", false],
    ["69.0.3498", true],
    ["68.0.3497", false],
    ["70.0.3497", true],
    ["foo", false]
];
test(list2, codes2);