const {SEMVER_PREFIX, SEMVER_OPERATOR} = require("./tokens");

const {
    coerce,
    noCoerce,
    satisfy
} = require("./semver-operators");

const semverRegex = require("./escape").prefixedRegex(SEMVER_PREFIX, SEMVER_OPERATOR);

module.exports = (value, expression) => {
    expression = expression.trim();
    let op = semverRegex.exec(expression);
    op = op && op[1];
    if (op) expression = expression.substring(SEMVER_PREFIX.length + op.length).trim();
    switch (op) {
    case SEMVER_OPERATOR.COERCE: return coerce(value, expression);
    case SEMVER_OPERATOR.NO_COERCE: return noCoerce(value, expression);
    case SEMVER_OPERATOR.SATISFY: return satisfy(value, expression);
    }
};

module.exports.is = value => semverRegex.test(value);