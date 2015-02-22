var React = require('react');
var { Row } = require('react-bootstrap');


require('./Footer.css');



module.exports = React.createClass({
  render: function () {
    return (
      <Row>
        <footer className="footer">
          <p>"<a href="http://commons.wikimedia.org/wiki/File:Pont_des_Arts,_Paris.jpg#mediaviewer/File:Pont_des_Arts,_Paris.jpg">Pont des Arts, Paris</a>" by <a href="//commons.wikimedia.org/wiki/User:Benh" title="User:Benh">Benh LIEU SONG</a> - <span>Own work</span>. Licensed under <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>
          <p>Icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></p>
        </footer>
      </Row>
    );
  }
});