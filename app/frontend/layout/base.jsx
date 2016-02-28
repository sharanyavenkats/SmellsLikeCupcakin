'use strict';

module.exports = React.createClass({
    displayName: 'BaseLayout',

    renderBootstrap() {
        var bootstrapScript =  'var element = React.createElement(window.component);' +
            'ReactDOM.render(element, document.getElementById("react-page"));';
        return <script dangerouslySetInnerHTML={{__html: bootstrapScript}}></script>;
    },

    renderScripts(options) {
        return _.map(options.scripts, function(script) {
            return <script key={script} src={script}></script>;
        }, this);
    },

    renderStyles(options) {
        return _.map(options.styles, function(style) {
            return <link rel="stylesheet" key={style} href={style} />;
        }, this);
    },

    renderMetaViewport() {
        var content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
        return <meta name="viewport" content={content} />;
    },

    renderTitle(options) {
        let title = options.title;
        if (title) {
            return title + ' - Smells Like Cupcakin\'';
        } else {
            return 'Smells Like Cupcakin\'';
        }
    },

    render() {
        const options = this.props.component.getLayoutOptions(),
              filename = this.props.filename;

        return (
            <html>
                <head>
                    <title>{this.renderTitle(options)}</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="description" content="Smells Like CupCakin'" />
                    {this.renderMetaViewport()}

                    {/*<link ref="shortcut icon" type="image/x-icon" href="/img/favicon.ico"/>*/}
                    <link rel="stylesheet" crossOrigin="anonymous"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" />
                    {this.renderStyles(options)}
                </head>
                <body>
                    <div id="react-page"></div>
                    {this.renderScripts(options)}
                    <script src={'/jsx/' + filename + '.js'}></script>
                    {this.renderBootstrap()}
                </body>
            </html>
        );
    }
});
