const {VALIDATION_OPERATORS} = require("./tokens");
const {exists, date, number, semver} = require("./validation-operators");
const opRegex = require("./escape").regex(VALIDATION_OPERATORS);


module.exports = (value, expression) => {
    let op = opRegex.exec(expression.trim());
    op = op && op[1];
    switch (op) {
    case VALIDATION_OPERATORS.EXISTS: return exists(value);
    case VALIDATION_OPERATORS.DATE: return date(value);
    case VALIDATION_OPERATORS.NUMERIC: return number(value);
    case VALIDATION_OPERATORS.SEMVER: return semver(value);
    default: throw Error("Validation operator not detected");
    }
};

module.exports.is = value => opRegex.test(value);