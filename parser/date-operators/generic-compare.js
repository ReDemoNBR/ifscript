module.exports = (value, expression, op="=") => {
    [expression, value] = [Number(expression), Number(value)];
    if (isNaN(expression)) return false;
    switch(op) {
    case ">=": return value >= expression;
    case ">": return value > expression;
    case "<=": return value <= expression;
    case "<": return value < expression;
    case "=":
    case "==":
    case "===": return value === expression;
    default: return false;
    }
};