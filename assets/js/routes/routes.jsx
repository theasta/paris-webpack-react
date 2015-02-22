var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var App = require('../components/App');
var ListPage = require('../components/pages/ListPage');
var ItemPage = require('../components/pages/ItemPage');
var AnalyticsPage;

if (CODE_SPLITTING) {
  AnalyticsPage = require('react-router-proxy!../components/pages/AnalyticsPage');
} else {
  AnalyticsPage = require('../components/pages/AnalyticsPage');
}

module.exports = (
  <Route handler={App} path="/">
    <DefaultRoute name="attractions" handler={ListPage} />
    <Route name="attraction" path="/attractions/:id" handler={ItemPage} />
    <Route name="analytics" path="/analytics/" handler={AnalyticsPage} />
  </Route>
);