const {tz: {zone}} = require("moment-timezone");
const genericCompare = require("./generic-compare");

module.exports = (value, expression, op="=") => {
    let offsetMinutes = zone(value).parse(Date.now());
    let timezoneNumeric = `${String(Math.floor(Math.abs(offsetMinutes)/60)).padStart(2, 0)}${String(offsetMinutes%60).padStart(2, 0)}`;
    if (offsetMinutes>=0) timezoneNumeric = `-${timezoneNumeric}`;
    timezoneNumeric = timezoneNumeric.padEnd(/-|\+/.test(timezoneNumeric) && 5 || 4, 0);
    expression = expression.replace(/:/g, "");
    expression = expression.padEnd(/-|\+/.test(expression) && 5 || 4, 0);
    return genericCompare(timezoneNumeric, expression, op);
};