const test = require("./test");

let codes = ["# 3.14", "#3.14" , "# 03.14", "#03.14", "# 3.1400", "#3.1400", "# 003.1400", "#003.1400"];
let list = [
    ["3.14", true],
    ["03.14000", true],
    ["00003.14", true],
    ["3.140000", true],
    ["3.1415", false],
    ["3.014", false],
    ["3", false],
    ["314/100", false]
];
test(list, codes);