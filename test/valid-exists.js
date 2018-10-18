const test = require("./test");

let codes = ["::", ":: ", ":: ignored", "::ignored", ": > 0", ":>0", ": >0", ":> 0"];
let list = [
    ["2018-08-03T21:03:09Z", true],
    ["0", true],
    [null, false],
    [undefined, false],
    ["", false],
    ["  ", false],
    ["3.111.2719.181", true],
];
test(list, codes);
