var React = require('react');
var { Jumbotron, Button, Grid } =  require('react-bootstrap');

require('./Jumbo.css');

module.exports = React.createClass({
  render: function () {
    return (
      <Jumbotron className="welcome">
        <Grid>
          <h1>Welcome To Paris</h1>
          <p>Sed convallis viverra mauris, eget sollicitudin nibh consectetur nec. Maecenas arcu enim, tincidunt in pharetra et, convallis eu dui. Phasellus mollis libero quis risus finibus faucibus.</p>
          <Button href="/login" bsStyle="primary" bsSize="large">Login »</Button>
        </Grid>
      </Jumbotron>
    );
  }
});