const {coerce} = require("semver");
const compare = require("./compare");
const {INEQUALITY_OPERATOR} = require("../tokens");
const escape = require("../escape");

const ineqOpRegex = new RegExp(`^(${Object.values(INEQUALITY_OPERATOR).sort((a,b)=>b.length-a.length).map(escape).join("|")})`);

module.exports = (value, expression) => {
    expression = expression.trim();
    let op = ineqOpRegex.exec(expression);
    op = op && op[1];
    if (op) expression = expression.substring(op.length).trim();
    [value, expression] = [coerce(value), coerce(expression)];
    if (!value || !expression) return false;
    return compare(value, expression, op || "=");
};