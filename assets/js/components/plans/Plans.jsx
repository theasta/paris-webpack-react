var React = require('react');
var { Col } = require('react-bootstrap');
var Plan = require('./Plan');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Col md={4}>
          <Plan price="10" title="Bronze" accounts="1" storage="10" bsStyle="info" />
        </Col>
        <Col md={4}>
          <Plan price="20" title="Silver" accounts="3" storage="100" bsStyle="primary" />
        </Col>
        <Col md={4}>
          <Plan price="30" title="Gold" accounts="Unlimited" storage="500" bsStyle="success" />
        </Col>
      </div>
    );
  }
});