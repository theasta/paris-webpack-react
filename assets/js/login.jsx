var React = require('react');
var ParisApp = require('./components/shared/AppWrapper');

var Form = require('./components/login/Login');
var { Grid, Row } = require('react-bootstrap');

React.render(
  <ParisApp>
    <Grid>
      <Row>
        <Form />
      </Row>
    </Grid>
  </ParisApp>
  ,document.body);