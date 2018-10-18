const {freeze} = Object;

// COMBINERS
const COMB = ";";
const MODE = {
    ANY: "?",
    EVERY: "&" //default
};

// MODIFIERS
const NOT = "!";

// BASIC OPERATORS
const INEQUALITY_OPERATOR = {
    GREATER: ">",
    GREATER_EQUAL: ">=",
    LESS: "<",
    LESS_EQUAL: "<="
};
const BASIC_OPERATOR = {
    EQUALS: "=",
    CONTAINS: "~",
    STARTS_WITH: "^",
    ENDS_WITH: "$",
    NUMERIC_EQUAL: "#", // numerical comparison (ex: 014.00 equals 14)
};
Object.assign(BASIC_OPERATOR, INEQUALITY_OPERATOR); // COMMON_OPERATOR inherits INEQUALITY_OPERATOR tokens, which are case insensitive

// case sensitive versions of basic operators
const STRICT_OPERATORS = {
    EQUALS: "==",
    CONTAINS: "~~",
    STARTS_WITH: "^^",
    ENDS_WITH: "$$"
};

const VALIDATION_OPERATORS = {
    EXISTS: "::",
    DATE: "%%",
    NUMERIC: "##",
    SEMVER: "@@"
};

// SPECIAL OPERATORS
const DATE_PREFIX = "%";
const DATE_OPERATOR = {
    WEEK_DAY_SHORT_NAME: "a",
    WEEK_DAY_NAME: "A",
    MONTH_SHORT_NAME: "b",
    MONTH_NAME: "B",
    CENTURY: "C",
    DAY_OF_MONTH: "d",
    HOUR_24: "H",
    MONTH_SHORT_NAME_ALIAS: "h",
    HOUR_12: "I",
    DAY_OF_YEAR: "j",
    MONTH: "m",
    MINUTE: "M",
    AMPM_UPPER: "p",
    AMPM_LOWER: "P",
    UNIX_SECONDS: "s",
    SECONDS: "S",
    DAY_OF_WEEK: "w",
    SHORT_YEAR: "y",
    FULL_YEAR: "Y",
    TIMEZONE: "z",
    TIMEZONE_NAME: "Z"
};
const SEMVER_PREFIX = "@";
const SEMVER_OPERATOR = {
    COERCE: "c",
    NO_COERCE: "v",
    SATISFY: "s"
};
const LENGTH = ":";


module.exports = freeze({
    MODE: freeze(MODE),
    INEQUALITY_OPERATOR: freeze(INEQUALITY_OPERATOR),
    BASIC_OPERATOR: freeze(BASIC_OPERATOR),
    STRICT_OPERATORS: freeze(STRICT_OPERATORS),
    VALIDATION_OPERATORS: freeze(VALIDATION_OPERATORS),
    DATE_OPERATOR: freeze(DATE_OPERATOR),
    SEMVER_OPERATOR: freeze(SEMVER_OPERATOR),
    DATE_PREFIX, COMB, NOT, SEMVER_PREFIX, LENGTH
});
