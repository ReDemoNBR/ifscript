const {STRICT_OPERATORS} = require("./tokens");
const {regex} = require("./escape");
const {contains, equals, endsWith, startsWith} = require("./strict-operators");
const opRegex = regex(STRICT_OPERATORS);

module.exports = (value, expression) => {
    expression = expression.trim();
    if (!expression) return false;
    let op = opRegex.exec(expression);
    op = op && op[1];
    if (op) expression = expression.substring(op.length).trim();
    switch (op) {
    case STRICT_OPERATORS.CONTAINS: return contains(value, expression);
    case STRICT_OPERATORS.EQUALS: return equals(value, expression);
    case STRICT_OPERATORS.STARTS_WITH: return startsWith(value, expression);
    case STRICT_OPERATORS.ENDS_WITH: return endsWith(value, expression);
    default: throw Error("Strict operator not detected");
    }
};

module.exports.is = expression => opRegex.test(expression);
