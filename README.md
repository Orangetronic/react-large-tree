# react large tree

Get the AMD module located at `react-large-tree.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactLargeTree': 'react-large-tree'
  }
});

require(['react', 'ReactLargeTree'], function(React, ReactLargeTree) {

  React.render(React.createElement(ReactLargeTree), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
