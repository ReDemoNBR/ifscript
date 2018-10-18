const moment = require("moment"); 
const {isoFormats} = require("../date-handler");

module.exports = value => isoFormats.some(iso=>moment(value, iso, true).isValid());