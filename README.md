# Paris - Sample Application build with React and Webpack

## Installation

```
https://github.com/theasta/paris-webpack-react.git
cd paris-webpack-react
npm install
```

## Demos

### Demo 1 - webpack watch


1. Build and start watching files with Webpack: `npm run webpack-dev`
2. Spin up the node.js backend server: `node server/server.js`
3. Go to http://localhost:3000
4. Open homepage.jsx and replace `iconEiffelTower` in `<HeadingItem title="Monuments" icon={iconEiffelTower}/>` (line 21) by `iconNotreDame`
5. In your terminal, you can see the homepage bundle was re-emitted. Nothing changed for the other ones.
6. Reload the homepage. The second eiffel tower icon has been replaced by a Notre Dame icon.

Exit the webpack task

### Demo 2 - Common Chunks

app.js  1884285       0  [emitted]  app
homepage.js  1132531       1  [emitted]  homepage
plans.js  1124744       2  [emitted]  plans
login.js  1124834       3  [emitted]  login

1. `npm run webpack-stats`
2. Check at the root of the repository. A stats.json file has been generated.
3. Open http://webpack.github.io/analyse/ , click on choose file and browse to the stats.json file
4. Go to the hints section. You can see a lot of files are shared across the 4 bundles. You can also see that the Signup.jsx is shared by only 2 bundles.
5. Open webpack-dev.config.js
6. Set the commonsChunk property to true
7. `npm run webpack-dev`

A new bundle has been created: common.js. It contains all the files common to the 4 bundles

8. Edit the webpack task
9. Uncomment the commonschunkMin attribute in webpack-dev.config.js. It tells webpack that every module that is shared by at least 2 bundles has to be sent to the common bundle.
10. `npm run webpack-dev`

The plans and homepage bundles are now smaller. The Signup.jsx has been moved to common.js

Exit the webpack task


Exit the webpack-dev-task

### Demo 3 - Code Splitting

1. Open webpack-dev.config.js
2. Set the CODE_SPLITTING to true. This will set a variable CODE_SPLITTING that acts like a feature flag. This variable is used in routes.jsx
3. `npm run webpack-dev`
4. Open Chrome's network panel
5. Go to http://localhost:3000/app. Two javascript files are loaded: common.js and app.js
6. Click on the Analytics button in the navigation bar at the top.
7. The analytics bundle (section_0.js) is loaded asynchronously and appears in the network panel.


Exit the webpack-dev task and spin down the node.js backend server.

### Demo 4 - Assets Versioning

Let's pretend we are releasing to production and uploading our static assets to a CDN

1. `npm run build`
2. Go to http://localhost:3000
3. Open the network panel and reload the page
4. All the assets are versioned: css, js and even images and fonts. Images referenced in CSS have also been versioned.

Note: The publicPath option in the webpack configuration lets you set the path to your CDN.

Exit the npm task

### Demo 5 - webpack-dev-server and Hot Module Replacement

1. `npm run webpack-dev-server`
2. `node server/server-dev-server.js`
3. Go to http://localhost:3000
4. Open homepage.jsx, replace "Best of Paris" by "Best of Paname". Save the file. 
On save, the browser reloads automatically the homepage and your change is applied.
5. Go to http://localhost:3000/app
6. Open AttractionListItem.jsx and replace "<h4>{this.props.attraction.name}</h4>" by "<h4>Visit {this.props.attraction.name}</h4>". 
This time, on save, your change is reflected right away without a page reload.
7. It also works with any file that is required with Webpack. Make a change to AttractionListItem.css and it will be applied right away too.
