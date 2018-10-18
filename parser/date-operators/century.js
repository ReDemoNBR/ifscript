const genericCompare = require("./generic-compare");

module.exports = (value, expression, ineqOp) => genericCompare(value/100>>0, expression, ineqOp);