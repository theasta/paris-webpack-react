var React = require('react');
var { Input } = require('react-bootstrap');

require('./Login.css');

module.exports = React.createClass({
  render: function () {
    return (
      <form className="form-signin" action="/app">
        <legend>Please sign in</legend>
        <Input type="email" label='Email Address' placeholder="Email address"/>
        <Input type="password" label='Password' placeholder="Password" />
        <Input type="checkbox" label="Remember me" readOnly />
        <Input type="submit" bsStyle="primary" bsSize="large" block value="Sign In" />
      </form>
    );
  }
});
