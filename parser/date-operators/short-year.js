const genericCompare = require("./generic-compare");

module.exports = (value, expression, op="=") => {
    value %= 100;
    return genericCompare(value, expression, op);
};