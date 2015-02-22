var React = require('react');
var Router = require('react-router');
var AttractionItem = require('../attractions/AttractionItem');

module.exports = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var attractionId = this.getParams().id;
    return <AttractionItem attractionId={attractionId} />;
  }
});