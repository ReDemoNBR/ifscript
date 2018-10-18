const test = require("./test");

let codes = ["%%", "%% ", "%% ignored text", "%%ignored text"];
let list = [
    ["2018-08-03T21:03:09Z", true],
    ["2018-08-03T21:03:09.897Z", true],
    ["2018-08-03T21:03:09.897", false],
    ["2018-08-03T21:03:09", false],
    ["2018-08-03T21:03Z", false],
    ["2018-08-03 21:03:09Z", false]
];
test(list, codes);
