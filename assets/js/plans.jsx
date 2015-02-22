var React = require('react');

var ParisApp = require('./components/shared/AppWrapper');

var { Grid, Row } = require('react-bootstrap');

var Plans = require('./components/plans/Plans');

React.render(
  <ParisApp>
    <Grid>
      <Row>
        <Plans />
      </Row>
    </Grid>
  </ParisApp>
  ,document.body);