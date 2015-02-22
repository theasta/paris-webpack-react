var React = require('react');

var ParisApp = require('./components/shared/AppWrapper');

var Jumbo = require('./components/homepage/Jumbo');
var { Grid, Row } = require('react-bootstrap');
var HeadingItem = require('./components/homepage/HeadingItem');

var iconNotreDame = require('./components/homepage/images/paris6.svg');
var iconEiffelTower = require('./components/homepage/images/paris8.svg');
var iconCastle = require('./components/homepage/images/paris.svg');

React.render(
  <ParisApp>
    <Grid>
      <Row>
        <Jumbo />
      </Row>
      <Row>
        <HeadingItem title="Best of Paris" icon={iconEiffelTower}/>
        <HeadingItem title="Monuments" icon={iconEiffelTower}/>
        <HeadingItem title="Kids Attractions" icon={iconCastle}/>
      </Row>
    </Grid>
  </ParisApp>
  ,document.body);
