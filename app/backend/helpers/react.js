'use strict';

let ReactJS = require('react'),
    ReactDOM = require('react-dom'),
    ReactDOMServer = require('react-dom/server'),
    ReactBootstrap = require('react-bootstrap'),
    React = exports;

React.sendReact = function(req, res, filename) {
    // expose global libraries
    global.React = ReactJS;
    global.ReactDOM = ReactDOM;
    global.ReactDOMServer = ReactDOMServer;
    global.ReactBootstrap = ReactBootstrap;
    global._ = require('lodash');
    global.window = {};

    var PageComponent = require('../../frontend/pages/' + filename + '-index.jsx'),
        layoutOptions = PageComponent.getLayoutOptions(),
        BaseLayout = require('../../frontend/layout/base.jsx'),
        baseElement = ReactJS.createElement(BaseLayout, {
            component: PageComponent,
            filename: filename
        }),
      result = ReactDOMServer.renderToStaticMarkup(baseElement);

    // render page content
    result = '<!doctype html>' + result;
    res.send(result);
}
