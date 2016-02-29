'use strict';

import StandardLayout from 'app/frontend/layout/standard-layout.jsx';

module.exports = React.createClass({
    mixins: [StandardLayout],

    statics: {
        layoutOptions: {
            title: 'Home'
        }
    },

    renderContent() {
        return (
            <div> HomeContent </div>
        );
    }
});
