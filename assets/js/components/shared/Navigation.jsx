var React = require('react');
var { Nav, Navbar, NavItem, DropdownButton, MenuItem, Button } =  require('react-bootstrap');
var { NavItemLink } = require('react-router-bootstrap');

module.exports = React.createClass({
  render: function () {
    var brand = (
      <a href="/" className="navbar-brand">Paris Tourist Attractions</a>
    );
    return (
      <Navbar brand={brand} inverse toggleNavKey={1}>
        <Nav>
          { this.props.loggedin ? <NavItemLink to="attractions">Attractions</NavItemLink> : null }
          { this.props.loggedin ? <NavItemLink to="analytics">Analytics</NavItemLink> : null }
        </Nav>
        <Nav right eventKey={1}>
          <NavItem pullRight href="/plans">Pricing</NavItem>
          <DropdownButton title="Resources">
            <MenuItem href="http://webpack.github.io/" target="blank">Webpack</MenuItem>
          </DropdownButton>
          <li>
            <p className="navbar-btn">
              { this.props.loggedin ? <Button href="/" bsStyle="primary">Logout</Button> : <Button href="/login" bsStyle="primary">Login</Button> }
            </p>
          </li>
        </Nav>
      </Navbar>
    );
  }
});