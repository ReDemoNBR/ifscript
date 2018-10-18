module.exports = value => {
    if (typeof value==="number") return true;
    return Boolean(value) && value.trim().length > 0;
};