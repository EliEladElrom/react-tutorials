function isLocalHost() {
    let os = require('os');
    return ( os.hostname().indexOf('185.203.171.57') > -1 || os.hostname().toString().indexOf('MacBook') > -1 );
}

let url = !(isLocalHost) ? '/home/ubuntu/www/logs' : 'logs';
const winston = require('winston');
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: url + '/server-error.log', level: 'error' }),
        new winston.transports.File({ filename: url + '/server.log' })
    ]
});
logger.add(new winston.transports.Console());

if (typeof exports !== 'undefined' ) {
    exports.logger = logger;
    exports.isLocalHost = isLocalHost;
}