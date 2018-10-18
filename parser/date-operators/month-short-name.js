const {format} = Intl.DateTimeFormat("en-US", {month: "short", timeZone: "UTC"});

module.exports = (value, expression) => format(value).toLowerCase() === expression.toLowerCase();