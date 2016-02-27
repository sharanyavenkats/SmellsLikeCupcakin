'use strict';

require('./app/require-jsx').setup();
var express = require('express'),
    app = express(),
    routing = require('./app/routing.js'),
    env = process.env.NODE_ENV || 'development';

var isDevelopment = 'development' === env;

app.set('port', process.env.PORT || 9000);
app.use(express.static('app/public'));

if (isDevelopment) {
    var port = app.get('port');
    app.locals.IS_DEV = true;
    console.info('Express server running on port: ' + port);
}

// setup routing file
routing.setup(app);

// Set up the port
app.listen(port);
