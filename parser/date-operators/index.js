const genericCompare = require("./generic-compare");

module.exports = {
    century: require("./century"),
    dayOfMonth: genericCompare,
    hour24: genericCompare,
    hour12: require("./hour12"),
    dayOfYear: require("./day-of-year"),
    month: genericCompare,
    minute: genericCompare,
    unixSeconds: genericCompare,
    seconds: genericCompare,
    dayOfWeek: genericCompare,
    shortYear: require("./short-year"),
    fullYear: genericCompare,
    timezone: require("./timezone"),
    weekdayShortName: require("./weekday-short-name"),
    weekdayName: require("./weekday-name"),
    monthShortName: require("./month-short-name"),
    monthName: require("./month-name"),
    ampm: require("./ampm"),
    iso: require("./iso")
};