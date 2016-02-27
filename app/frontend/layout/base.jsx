'use strict';

module.exports = React.createClass({
    displayName: 'BaseLayout',

    renderBootstrap() {
        var bootstrapScript =  'var element = React.createElement(window.component);' +
            'ReactDOM.render(element, document.getElementById("react-page"));';
        return <script dangerouslySetInnerHTML={{__html: bootstrapScript}}></script>;
    },

    renderMetaViewport() {
        var content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
        return <meta name="viewport" content={content} />;
    },

    render() {
        return (
            <html>
                <head>
                    <title>Smells Like CupCakin'</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="description" content="Smells Like CupCakin'" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.28.3/react-bootstrap.min.js"></script>
                    <link rel="stylesheet" crossOrigin="anonymous"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"></link>
                    {this.renderMetaViewport()}
                </head>
                <body>
                    <div id="react-page"></div>
                    <script src="/jsx/home/home.js"></script>
                    {this.renderBootstrap()}
                </body>
            </html>
        );
    }
});
