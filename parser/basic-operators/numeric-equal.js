module.exports = (value, expression) => {
    if (isNaN(value) || isNaN(expression)) return false;
    return Number(value) == Number(expression);
};