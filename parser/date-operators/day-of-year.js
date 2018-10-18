const genericCompare = require("./generic-compare");

module.exports = (value, expression, op="=") => {
    let dayOfYear = Array.from(Array(value.getUTCMonth()), (v, index)=>new Date(value.getUTCFullYear(), index+1, 0).getUTCDate())
        .reduce((sum, daysOfMonth)=>sum+daysOfMonth)+value.getUTCDate();
    return genericCompare(dayOfYear, expression, op);
};