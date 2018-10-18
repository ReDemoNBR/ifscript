const genericCompare = require("./generic-compare");

module.exports = (value, expression, op="=") => {
    value %= 12;
    value = value || 12; // hour 01..12
    return genericCompare(value, expression, op);
};