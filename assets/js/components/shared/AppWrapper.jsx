var React = require('react');

require('./BootstrapCss');
var Navigation = require('./Navigation');
var { Grid } = require('react-bootstrap');

var Footer = require('./Footer');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation loggedin={this.props.loggedin}/>
        {this.props.children}
        <Grid>
          <Footer />
        </Grid>
      </div>
    );
  }
});