var path = require('path');
module.exports = {
  context: path.join(__dirname, '../assets/js'),
  entry: {
    homepage: "./homepage.jsx",
    login: "./login.jsx",
    plans: "./plans.jsx",
    app: "./app.jsx"
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)$/, loader: "url?limit=100"},
      { test: /\.(woff|woff2)$/, loader: "url?limit=10000"},
      { test: /\.(ttf|eot|svg)$/, loader: "file"},
      { test: /\.html$/, loader: "html"}
    ]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"],
    root: path.join(__dirname, '../public/js')
  }
};
