let os = require('os'),
    rooms = require('roomsjs'),
    roomdb = require('rooms.db'),
    bodyParser = require('body-parser'),
    port = (process.env.PORT || 8081),
    logger = require('./utils/log.js').logger,
    log = require('./utils/log.js'),
    isLocalHost = log.isLocalHost();

// create express server if needed
let express = require('express'),
    app = express().use(express.static(__dirname + '/public'));

// will overcome the No Access-Control-Allow-Origin header error
let allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create server
let server = require('http').createServer(app).listen(port, function () {
    logger.info('Listening on http://' + os.hostname() + ':' + port);
});

// services
roomdb.setServices('services/', app, 'get');

logger.info('hostname: ' + os.hostname());
let roomsSettingsJSON;

logger.info('*** Listening *** :: ' + os.hostname() + ', localhost: ' + isLocalHost);
roomsSettingsJSON = (isLocalHost) ? require('./roomsdb-local.json') : require('./roomsdb.json');

roomdb.connectToDatabase('mongodb', 'mongodb://' + roomsSettingsJSON.environment.host + '/YourSite', { useNewUrlParser: true, useUnifiedTopology: true });

// set rooms
rooms = new rooms({
    isdebug : true,
    transporter : {
        type: 'engine.io',
        server : server
    },
    roomdb : roomdb
});

process.on('uncaughtException', function (err) {
    logger.error('uncaughtException: ' + err);
});
