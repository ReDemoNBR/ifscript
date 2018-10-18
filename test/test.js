const {equal} = require("assert");
const MonicoCompare = require("../");

module.exports = (testEntries, codes)=>{
    testEntries.forEach(testEntry=>codes.forEach(code=>{
        try {
            equal(MonicoCompare(testEntry[0], code), testEntry[1]);
            console.info(`OK => "${testEntry[0]}" | "${code}" must be ${testEntry[1]}`);
        } catch (e) {
            console.info(`FAIL => "${testEntry[0]}" | "${code}" must be ${testEntry[1]}`);
            throw e;
        }
    }));
};