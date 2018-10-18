const {format} = Intl.DateTimeFormat("en-US", {month: "long", timeZone: "UTC"});

module.exports = (value, expression) => format(value).toLowerCase() === expression.toLowerCase();