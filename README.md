# react large tree

## A (hopefully) Simple Sortable Tree Component, for *Very Large Trees*

### contents
1. design goals
2. use
    1. data
    2. flags
    3. events
    4. callbacks
3. integration

### 1. Design goals

It's easy to build Tree components that are very complex and heavy. One of the first principles here to avoid that is to output the simplest DOM possible. That means keeping the DOM relatively flat, removing hidden elements from the DOM, and avoiding unnecessary divs, spans, etc. 

Eventually we hope to let you pass your own render methods in. If we get there, we suggest you try to keep your render methods the same way — so "This person's name is [name] and their age is [age]!" should render as `This person's name is Jones, and their age is 31!` not `<span>This person's name is</span><span> </span><span>Jones</span><span> </span><span>and their age is</span><span> </span>31</span><span><span>!</span>` 

### 2. Use


### 3. Integration

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
