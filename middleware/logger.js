const moment = require("moment");

const logger = (inRequest, inResponse, next) => {
  console.log(`${inRequest.protocol}://${inRequest.get('host')}${inRequest.originalUrl}: ${moment().format()}`);
  next();
}

module.exports = logger;