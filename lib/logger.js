var winston = require('winston');

module.exports = function() {
  var myLogTransports = [];

  if (process.env.NODE_ENV === 'production') {
    myLogTransports.push(new (winston.transports.Console)({ level: 'info' }));
  }
  else {
    myLogTransports.push(new (winston.transports.Console)({ level: 'debug' }));
  }

  var logger = new (winston.Logger)({
    transports: myLogTransports,
  });
  return logger;
}
