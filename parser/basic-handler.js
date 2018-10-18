const {BASIC_OPERATOR} = require("./tokens");
const {
    equals,
    contains,
    startsWith,
    endsWith,
    numericEqual,
    greaterEqual,
    greater,
    lessEqual,
    less
} = require("./basic-operators");

const opRegex = require("./escape").regex(BASIC_OPERATOR);

module.exports = (value, expression) => {
    let op = opRegex.exec(expression);
    op = op && op[1];
    if (op) expression = expression.substring(op.length).trim();
    if (!expression) return false;
    switch(op) {
    case BASIC_OPERATOR.CONTAINS: return contains(value, expression);
    case BASIC_OPERATOR.STARTS_WITH: return startsWith(value, expression);
    case BASIC_OPERATOR.ENDS_WITH: return endsWith(value, expression);
    case BASIC_OPERATOR.NUMERIC_EQUAL: return numericEqual(value, expression);
    case BASIC_OPERATOR.GREATER_EQUAL: return greaterEqual(value, expression);
    case BASIC_OPERATOR.GREATER: return greater(value, expression);
    case BASIC_OPERATOR.LESS_EQUAL: return lessEqual(value, expression);
    case BASIC_OPERATOR.LESS: return less(value, expression);
    case BASIC_OPERATOR.EQUALS:
    default: return equals(value, expression);
    }
};