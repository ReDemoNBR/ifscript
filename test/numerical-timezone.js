const test = require("./test");

let codes = ["%z 01:00", "%z +01:00", "%z 0100", "%z +0100", "%z01:00", "%z+01:00", "%z0100", "%z+0100"];
let list = [
    ["America/New_York", false],
    // ["Europe/Copenhagen", true], // test removed due to DST changes
    // ["Europe/London", false], // test removed due to DST changes
    ["America/Los_Angeles", false],
    ["Asia/Tokyo", false],
    ["America/Sao_Paulo", false],
    ["Etc/GMT", false],
    ["Etc/GMT-1", true],
    ["Etc/GMT+1", false]
];
test(list, codes);
let codes2 = [
    "%z < 00:00", "%z < +00:00", "%z < 0000", "%z < +0000",
    "%z <00:00", "%z <+00:00", "%z <0000", "%z <+0000",
    "%z< 00:00", "%z< +00:00", "%z< 0000", "%z< +0000",
    "%z<00:00", "%z<+00:00", "%z<0000", "%z<+0000"
];
let list2 = [
    ["America/New_York", true],
    ["Europe/Copenhagen", false],
    ["Europe/London", false],
    ["America/Los_Angeles", true],
    ["Asia/Tokyo", false],
    ["America/Sao_Paulo", true],
    ["Etc/GMT", false],
    ["Etc/GMT-1", false],
    ["Etc/GMT+1", true]
];
test(list2, codes2);