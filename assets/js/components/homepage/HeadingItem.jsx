var React = require('react');

var { Col, Button } = require('react-bootstrap');
var SignupButton = require('../shared/SignupButton');

require('./HeadingItem.css');

module.exports = React.createClass({
  render: function () {
    return (
      <Col md={4} className="headingItem">

        <h2><img src={this.props.icon} className="-icon"/> {this.props.title}</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p>
          <SignupButton />
        </p>
      </Col>
    );
  }
});