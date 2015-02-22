var React = require('react');
var { Navigation } = require('react-router');
var { Row, Col, Well } = require('react-bootstrap');
var attractionStore = require('../../stores/attractionStore');
var attractionActions = require('../../actions/attractionActionCreators');


module.exports = React.createClass({
  mixins: [ Navigation ],
  getInitialState: function () {
    return {};
  },
  componentDidMount: function() {
    attractionStore.addChangeListener(this._onChange);
    attractionActions.loadOne(this.props.attractionId);
  },
  componentWillUnmount: function() {
    attractionStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState(this.getStateFromStore());
  },
  /* ----- ----- */
  getStateFromStore: function () {
    return attractionStore.getById(this.props.attractionId);
  },
  render: function () {
    if (this.state.name == undefined) {
      return(<div/>);
    }
    var picture = require('./images/' + this.state.picture);
    return (
      <div>
        <h2>{this.state.name}</h2>
        <Col xs={14} md={9}>
          <Row>
            <h4>{this.state.type}</h4>
          {this.state.description}
            <p><a href={this.state.link}>Wikipedia</a></p>
          </Row>
        </Col>
        <Col xs={4} md={3}>
          <img src={picture} alt={this.state.name}/>
          <div dangerouslySetInnerHTML={{__html: this.state.credits}} />
        </Col>
      </div>
    );
  }
});
