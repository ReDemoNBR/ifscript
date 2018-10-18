const specialChars = /[.*+?^${}()|[\]\\]/g;
const sort = (a, b) => b.length - a.length;
const treatTokens = tokens => Object.values(tokens).sort(sort).map(escape).join("|");

const escape = module.exports = value => Array.from(value, char=>char.replace(specialChars, "\\$&")).join("");

module.exports.regex = tokens => new RegExp(`^(${treatTokens(tokens)})`);
module.exports.prefixedRegex = (prefix, tokens) => new RegExp(`^${prefix}(${treatTokens(tokens)})`);