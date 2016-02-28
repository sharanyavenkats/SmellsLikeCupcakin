'use strict';

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
                    '/lib/react/react-dom-server.js'
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
                <div className="container-wrapper">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
};
