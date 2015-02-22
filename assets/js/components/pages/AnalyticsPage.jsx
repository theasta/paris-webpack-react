var React = require('react');
var { Col } = require('react-bootstrap');

var Chart = require('../analytics/Chart');

module.exports = React.createClass({
  render: function() {
    return (
      <Col>
        <Chart />
      </Col>
    );
  }
});