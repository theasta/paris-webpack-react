var React = require('react');
var { Panel } = require('react-bootstrap');
var SignupButton = require('../shared/SignupButton');

module.exports = React.createClass({
  render: function () {
    var signupButton = (
      <SignupButton />
    );
    return (
    <Panel header={this.props.title} {...this.props} footer={signupButton}>
      <div>
        <h1>${this.props.price}<span className="subscript">/mo</span></h1>
        <small>1 month FREE trial</small>
      </div>
      <table className="table">
        <tr>
          <td>{this.props.accounts} Account</td>
        </tr>
        <tr className="active">
          <td>
            Upload your own photos - {this.props.storage}MB Storage
          </td>
        </tr>
      </table>
    </Panel>
    );
  }
});