const genericCompare = require("./generic-compare");

module.exports = (value, expression, op="=") => {
    expression = new Date(expression).getTime();
    if (!expression.valueOf()) return false;
    return genericCompare(value, expression.getTime(), op);
};