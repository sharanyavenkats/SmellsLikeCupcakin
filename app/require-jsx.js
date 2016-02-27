var babel = require('babel-core');

module.exports = {
    /**
    * Configures .jsx for require().
    */
    setup: function() {
        // define how to transform jsx files with ReactTools
        require.extensions['.jsx'] = function(module, filename) {
            try {
                var babelOptions = {
                  presets: ['es2015', 'react']
                };
                var src = babel.transformFileSync(filename, babelOptions);
                module._compile(src.code, filename);
            } catch(e) {
                console.error('failed to convert jsx file: ' + filename);
                throw e;
            }
        };
    }
};
