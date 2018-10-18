const [moment, {tz: {zone}}] = [require("moment"), require("moment-timezone")];
const {regex, prefixedRegex} = require("./escape");

const {DATE_PREFIX, DATE_OPERATOR, INEQUALITY_OPERATOR} = require("./tokens");
const dateRegex = prefixedRegex(DATE_PREFIX, DATE_OPERATOR);
const ineqRegex = regex(INEQUALITY_OPERATOR);

const {
    century,
    dayOfMonth,
    hour24,
    hour12,
    dayOfYear,
    month,
    minute,
    unixSeconds,
    seconds,
    dayOfWeek,
    shortYear,
    fullYear,
    timezone,
    weekdayShortName,
    weekdayName,
    monthShortName,
    monthName,
    ampm,
    // timezoneName
} = require("./date-operators");

const isoFormats = [
    "YYYY-MM-DDTHH:mm:ssZ",
    "YYYY-MM-DDTHH:mm:ss.SSSZ"
];
const isDate = value => !Number(value) && (isoFormats.some(iso=>moment(value, iso, true).isValid()) || Boolean(zone(value)));

module.exports = (value, expression) => {
    let dateOp = dateRegex.exec(expression);
    dateOp = dateOp && dateOp[1];
    expression = expression.substring(DATE_PREFIX.length).trim();
    if (dateOp) expression = expression.substring(dateOp.length).trim();
    let ineqOp = ineqRegex.exec(expression);
    ineqOp = ineqOp && ineqOp[1];
    if (ineqOp) expression = expression.substring(ineqOp.length).trim();
    else ineqOp = "=";
    let date = new Date(value);
    if (!expression) return false;
    else if (!isDate(value) && (!date || !date.valueOf())) return false;
    switch(dateOp){
    case DATE_OPERATOR.CENTURY: return century(date.getUTCFullYear(), expression, ineqOp);
    case DATE_OPERATOR.DAY_OF_MONTH: return dayOfMonth(date.getUTCDate(), expression, ineqOp);
    case DATE_OPERATOR.HOUR_24: return hour24(date.getUTCHours(), expression, ineqOp);
    case DATE_OPERATOR.HOUR_12: return hour12(date.getUTCHours(), expression, ineqOp);
    case DATE_OPERATOR.DAY_OF_YEAR: return dayOfYear(date, expression, ineqOp);
    case DATE_OPERATOR.MONTH: return month(date.getUTCMonth()+1, expression, ineqOp);
    case DATE_OPERATOR.MINUTE: return minute(date.getUTCMinutes(), expression, ineqOp);
    case DATE_OPERATOR.UNIX_SECONDS: return unixSeconds(Math.floor(date.getTime()/1000), expression, ineqOp);
    case DATE_OPERATOR.SECONDS: return seconds(date.getUTCSeconds(), expression, ineqOp);
    case DATE_OPERATOR.DAY_OF_WEEK: return dayOfWeek(date.getUTCDay(), expression, ineqOp);
    case DATE_OPERATOR.SHORT_YEAR: return shortYear(date.getUTCFullYear(), expression, ineqOp);
    case DATE_OPERATOR.FULL_YEAR: return fullYear(date.getUTCFullYear(), expression, ineqOp);
    case DATE_OPERATOR.TIMEZONE: return timezone(value, expression, ineqOp);
    // no suppport for inequality operators
    case DATE_OPERATOR.WEEK_DAY_SHORT_NAME: return weekdayShortName(date, expression);
    case DATE_OPERATOR.WEEK_DAY_NAME: return weekdayName(date, expression);
    case DATE_OPERATOR.MONTH_SHORT_NAME:
    case DATE_OPERATOR.MONTH_SHORT_NAME_ALIAS: return monthShortName(date, expression);
    case DATE_OPERATOR.MONTH_NAME: return monthName(date, expression);
    case DATE_OPERATOR.AMPM_UPPER:
    case DATE_OPERATOR.AMPM_LOWER: return ampm(date.getUTCHours(), expression);
    // case DATE_OPERATOR.TIMEZONE_NAME: return timezoneName(date, expression, ineqOp);
    default: throw Error("Date operator not detected");
    }

};

module.exports.isoFormats = isoFormats;

module.exports.is = isDate;