const {valid} = require("semver");

module.exports = value => Boolean(valid(value));