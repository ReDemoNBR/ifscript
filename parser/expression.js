const semverHandler = require("./semver-handler");
const basicHandler = require("./basic-handler");
const strictHandler = require("./strict-handler");
const dateHandler = require("./date-handler");
const validationHandler = require("./validation-handler");
const length = require("./length");

const {NOT, LENGTH} = require("./tokens");


// precedence
// NOT, VALIDATION_OPERATORS, SPECIAL_OPERATORS, STRICT_OPERATORS, BASIC_OPERATORS


function handler(value, expression) {
    expression = expression.trim();
    
    // handle multiple NOTs
    expression = expression.replace(new RegExp(`^((?:${NOT})+)`), (exp, match)=>NOT.repeat(match.length%2));
    if (!expression) return false;

    // check if it is a NEGATION expression
    if (expression.startsWith(NOT)) return !handler(value, expression.substring(NOT.length));
    if (validationHandler.is(expression)) return validationHandler(value, expression);
    if (semverHandler.is(expression)) return semverHandler(value, expression);
    if (expression.startsWith(LENGTH)) return length(value, expression);
    if (dateHandler.is(value)) return dateHandler(value, expression);
    if (strictHandler.is(expression)) return strictHandler(value, expression);
    return basicHandler(value, expression);
}

module.exports = handler;