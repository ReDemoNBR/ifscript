const {cmp: compare} = require("semver");

module.exports = (value, expression, op="=") => compare(value, op || "=", expression);