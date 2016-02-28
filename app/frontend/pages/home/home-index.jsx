'use strict';

import StandardLayout from 'app/frontend/layout/standard-layout.jsx';

module.exports = React.createClass({
    mixins: [StandardLayout],

    statics: {
        layoutOptions: {
            title: 'Home'
        }
    },

    getInitialState() {
        return {username: 'Sharanya'};
    },

    onClick() {
        console.log(this.state.username);
    },

    renderContent() {
        return (<div onClick={this.onClick}>{this.state.username}</div>);
    }
});
