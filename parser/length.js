const {INEQUALITY_OPERATOR, LENGTH} = require("./tokens");
const ineqRegex = new RegExp(`^(${Object.values(INEQUALITY_OPERATOR).sort((a,b)=>b.length-a.length).join("|")})`);

module.exports = (value, expression) => {
    expression = expression.trim().substring(LENGTH.length).trim();
    if (!expression) return false;
    let ineqOperator = ineqRegex.exec(expression);
    ineqOperator = ineqOperator && ineqOperator[1];
    value = value && value.trim().length;
    if (!ineqOperator) return value===Number(expression);
    expression = Number(expression.substring(ineqOperator.length).trim());
    switch(ineqOperator) {
    case INEQUALITY_OPERATOR.GREATER: return value>expression;
    case INEQUALITY_OPERATOR.GREATER_EQUAL: return value>=expression;
    case INEQUALITY_OPERATOR.LESS: return value<expression;
    case INEQUALITY_OPERATOR.LESS_EQUAL: return value<=expression;
    default: throw Error("Length operator not detected");
    }
};