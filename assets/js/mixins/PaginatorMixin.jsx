var React = require('react');

module.exports = {
    propTypes: {
        totalItems: React.PropTypes.number,
        perPage: React.PropTypes.number,
        page: React.PropTypes.number
    },
    paginateItems: function (items) {
        var page = this.props.page;
        var perPage = this.props.perPage;
        var startPos = (page - 1) * perPage;
        var endPos = Math.min(startPos + perPage, items.length);
        return items.slice(startPos, endPos);
    },
    paginatePages: function (cb) {
        var minPage = 1;
        var maxPage = Math.ceil(this.props.totalItems / this.props.perPage);
        
        var pages = [];
        for (var i = minPage; i <= maxPage; i++) {
            pages.push(cb.call(this, i));
        }
        return pages;
    }
};