var React = require('react');
var Router = require('react-router');
var { Col } = require('react-bootstrap');
var AttractionList = require('../attractions/AttractionList');
var AttractionPaginator = require('../attractions/AttractionPaginator');

module.exports = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var page = +this.getQuery().page || 1;
    return (
      <Col>
        <AttractionList page={page}/>
        <AttractionPaginator page={page} to="attractions"></AttractionPaginator>
      </Col>
    );

  }
});