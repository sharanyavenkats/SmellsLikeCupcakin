'use strict';

module.exports = React.createClass({
    getInitialState() {
        return {username: 'Sharanya'};
    },

    onClick() {
        console.log(this.state.username);
    },

    render() {
        return (<div onClick={this.onClick.bind(this)}>{this.state.username}</div>);
    }
});
