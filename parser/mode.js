const expressionTester = require("./expression");
const {MODE: {ANY, EVERY}, COMB} = require("./tokens");

function any(value, expressions) {
    return expressions.some(expression=>expressionTester(value, expression.trim()));
}

function every(value, expressions) {
    return expressions.every(expression=>expressionTester(value, expression.trim()));
}

function splitExpressions(text) {
    return text.split(COMB).reduce((expressions, expression)=>{
        expression = expression.trim();
        if (expression && !expressions.includes(expression)) expressions.push(expression);
        return expressions;
    }, []);
}

module.exports = (value, text) => {
    text = text.trim();
    if (!text) return false;
    if (text.startsWith(ANY)) return any(value, splitExpressions(text.substring(ANY.length)));
    else if (text.startsWith(EVERY)) return every(value, splitExpressions(text.substring(EVERY.length)));
    else return every(value, splitExpressions(text));
};