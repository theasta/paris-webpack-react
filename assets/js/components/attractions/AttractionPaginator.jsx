var React = require('react');
var Paginator = require('../paginator/Paginator');
var wineStore = require('../../stores/attractionStore');

module.exports = React.createClass({
    getInitialState: function() {
        return this.getStateFromStore();
    },
    _onChange: function () {
        this.setState(this.getStateFromStore());
    },
    getStateFromStore: function () {
        return {
            totalItems: wineStore.getTotalCount()
        };
    },
    componentDidMount: function() {
        wineStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        wineStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return (
            <Paginator {... this.props} totalItems={this.state.totalItems} />
        );
    }
});