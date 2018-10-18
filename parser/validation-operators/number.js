const numberRegex = /^\d+(\.\d*)?$|^\d?\.\d+$/;

module.exports = value => numberRegex.test(value.trim());