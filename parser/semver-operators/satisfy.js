const {satisfies: satisfy, valid} = require("semver");

module.exports = (value, expression) => {
    expression = expression.trim();
    if (!valid(value)) return false;
    return satisfy(value, expression);
};