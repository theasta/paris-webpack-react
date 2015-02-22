var React = require('react');
var { Link } = require('react-router');
var { Glyphicon } = require('react-bootstrap');

require('./AttractionListItem.css');

module.exports = React.createClass({
  propTypes: {
    attraction: React.PropTypes.object.isRequired
  },
  render: function () {
    var picture = require('./images/'+ this.props.attraction.picture);
    return (
      <li>
        <Link to="attraction" params={this.props.attraction} className="thumbnail">
          <img src={picture} alt={this.props.attraction.name} />
          <h4>{this.props.attraction.name}</h4>
        </Link>
      </li>
    );
  }
});
