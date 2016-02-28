'use strict';

let React = require('app/backend/helpers/react.js');

exports.setup = function (app) {
    app.get('/', function (req, res) {
        return React.sendReact(req, res, 'home/home');
    });
};
