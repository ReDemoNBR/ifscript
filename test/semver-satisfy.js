const test = require("./test");

let codes = ["@s ~2.5", "@s~2.5"];
let list = [
    ["1.0.0", false],
    ["1.7.2", false],
    ["1.2.3", false],
    ["2.4.0", false],
    ["2.0.3", false],
    ["2.5.0", true],
    ["2.5.7", true],
    ["5.3.1", false],
    ["7.2.3", false],
    ["7.5.0", false],
];
test(list, codes);

let codes2 = ["@s 1.x || >=2.5.0 || 5.0.0 - 7.2.3", "@s1.x || >=2.5.0 || 5.0.0 - 7.2.3"];
let list2 = [
    ["1.0.0", true],
    ["1.7.2", true],
    ["1.2.3", true],
    ["2.4.0", false],
    ["2.0.3", false],
    ["2.5.0", true],
    ["2.5.7", true],
    ["5.3.1", true],
    ["7.2.3", true],
    ["7.5.0", true],
];
test(list2, codes2);
