const {format} = Intl.DateTimeFormat("en-US", {weekday: "long", timeZone: "UTC"});

module.exports = (value, expression) => format(value).toLowerCase() === expression.toLowerCase();