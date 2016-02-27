'use strict';

var ReactJS = require('react'),
    ReactDOM = require('react-dom'),
    ReactDOMServer = require('react-dom/server'),
    ReactBootstrap = require('react-bootstrap');

exports.setup = function (app) {
    app.get('/', function (req, res) {
        // expose global libraries
        global.React = ReactJS;
        global.ReactDOM = ReactDOM;
        global.ReactDOMServer = ReactDOMServer;
        global.ReactBootstrap = ReactBootstrap;
        global.window = {};

        var PageComponent = require('./frontend/pages/home/home-index.jsx'),
            BaseLayout = require('./frontend/layout/base.jsx'),
            baseElement = ReactJS.createElement(BaseLayout, {
                component: PageComponent,
                filename: 'home'
            }),
          result = ReactDOMServer.renderToStaticMarkup(baseElement);

        // render page content
        result = '<!doctype html>' + result;
        res.send(result);
    });
};
