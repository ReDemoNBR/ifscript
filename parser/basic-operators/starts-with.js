module.exports = (value, expression) => new RegExp(`^${String.raw`${expression}`}`, "i").test(value);
