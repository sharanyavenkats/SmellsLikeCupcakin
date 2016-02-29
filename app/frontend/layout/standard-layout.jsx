'use strict';

import Header from 'app/frontend/layout/header.jsx';

/**
 * Standard layout mixin.
 */
module.exports = {
    statics: {
        getLayoutOptions() {
            var options = this.layoutOptions;
            return {
                scripts: _.union([
                    '/lib/jquery/dist/jquery.js',
                    '/lib/lodash/lodash.js',
                    '/lib/react/react-with-addons.js',
                    '/lib/react/react-dom.js',
                    '/lib/react/react-dom-server.js',
                    '/lib/react-bootstrap/react-bootstrap.js'
                ], options.scripts),
                styles: options.styles || [],
                title: options.title
            }
        }
    },

    // Renders the standard layout
    render() {
        return (
            <div className="standard-layout">
                <Header />
                <div className="container">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
};
