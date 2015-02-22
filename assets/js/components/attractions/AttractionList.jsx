var React = require('react');
var AttractionListItem = require('./AttractionListItem');
var attractionStore = require('../../stores/attractionStore');
var PaginatorMixin = require('../../mixins/PaginatorMixin');
var paginationConf = require('../../constants/pagination');

module.exports = React.createClass({
    mixins: [
        PaginatorMixin
    ],
    getDefaultProps: function() {
        return paginationConf;
    },
    getInitialState: function() {
        return this.getStateFromStore();
    },
    _onChange: function () {
        this.setState(this.getStateFromStore());
    },
    componentDidMount: function() {
        attractionStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        attractionStore.removeChangeListener(this._onChange);
    },
    getStateFromStore: function () {
        return {
            attractions: attractionStore.getAll()
        };
    },
    render: function () {
        var ListItems = this.paginateItems(this.state.attractions).map(function (attraction) {
            return (
                <AttractionListItem
                    key={attraction.id}
                    attraction={attraction}
                />
            );
        });
        return (
            <ul className="thumbnails list-inline">
                {ListItems}
            </ul>
        );
    }
});