module.exports = (value, expression) => {
    return (value < 12 && "am" || "pm") === expression.toLowerCase();
};