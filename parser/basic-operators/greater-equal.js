module.exports = (value, expression) => {
    if (isNaN(value) || isNaN(expression)) return value.toLowerCase() >= expression.toLowerCase();
    return Number(value) >= Number(expression);
};