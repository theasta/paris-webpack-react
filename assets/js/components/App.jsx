var React = require('react');
var { RouteHandler } = require('react-router');
var { Grid, Row } = require('react-bootstrap');
var ParisApp = require('./shared/AppWrapper.jsx');

var attractionActions = require('../actions/attractionActionCreators');
attractionActions.loadAll();

module.exports = React.createClass({
  render: function() {
    return (
    <ParisApp loggedin>
      <Grid>
        <Row>
          <RouteHandler/>
        </Row>
      </Grid>
    </ParisApp>
    );
  }
});