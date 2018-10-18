const {format} = Intl.DateTimeFormat("en-US", {weekday: "short", timeZone: "UTC"});

module.exports = (value, expression) => format(value).toLowerCase() === expression.toLowerCase();