# react large tree

## A (hopefully) Simple Sortable Tree Component, for *Very Large Trees*

### contents
1. design goals
2. use
3. integration

### 1. Design goals

This is an attempt to build a tree-component that can render up to thousands of nodes with drag and drop support for reorganisation. For simplicity, this component does not (yet) implement internal infinite scrolling… so there will be a performance bottleneck above a certain number of nodes. We've tested it into the tens of thousands and it's okay. It breaks down with hundreds of thousands of nodes… 

One of the first principles here is to output the simplest DOM possible. That means keeping the DOM relatively flat, removing hidden elements from the DOM, and avoiding unnecessary divs, spans, etc. 


### 2. Usage

This component expects a `content` prop, with a tree object, a bit like this:

```
const content = {
  label: 'home',
  children: [
    { label: 'first child' },
    { label: 'second child' },
    { 
      label: 'third child',
      children: [
        { label: 'first sub-child' },
        { label: 'second sub-child' }
      ]
    }
  ]
}
```

Children can be nested as deeply as you like. Each child should have some unique property. At some point I'll write an extension that can decorate your tree with unique props internally if you don't supply one, but for now, some unique property on each child pls!

Children with an `href` property will be rendered as a link.

Children with an `iconClass` property will be rendered with an `<i class="[iconClass]"></i>` element.

DOM output is a flat structure, as this makes for speedier updates with very large lists of content. 

so the following simple use case would provide the following output:
```
import ReactLargeTree from `react-large-tree`


//your component etc.
//.
//.

//inside your render function:

const content = {
  label: 'home',
  children: [
    {
      label: 'page 1',
      href : '/page-1',
      iconClass: 'page'
    }
  ]
}

// in this case the labels are all unique, so we supply label as the uniqueKey
<ReactLargeTree content={content} uniqueKey="label" /> 

```

```
<ol>
  <li>Home</li>
  <li><i class="page"></i><a href="/page-1">page 1</a></li>
</ol>
```

#### What else can it do?

*react-large-tree* supports the following props:

```
<ReactLargeTree
  content={content}
  canDragChildInto={(childNode, parentNode) => true || false }  
  locked: false
  uniqueKey= "_id"
  editingChild="myUniqueKey"
  handleRename= (nodeId, newName) => console.log(nodeId, newName)
  handleContextMenu= (nodeId, position)  => console.log(nodeId, position),
/>
```

1. `Content` is the tree object (required)
2. `canDragChildInto` is a callback that receives the new parent and child nodes, so you can disallow some drag operations. If you don't supply a callback, all drag operations are allowed
3. `locked` switches drag and drop off completely if `true`
4. `uniqueKey` is the key for a property that should be unique for every node
5. `editingChild` should be a value that matches a `child[uniqueKey]`. An input will be rendered in place of that node
6. `handleRename` is a callback that will fire when the editingChild input blurs. I'd probably remove the `editingChild` prop when that happens if I were you
7. `handleContextMenu` fires when somebody clicks the context button on a given node, so you can render a contextual menu, or perform some kind of action. A future release of this component will include a default set of contextual actions (cut, paste, delete, rename).



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

*NOTE* I haven't written any tests yet because I am a bit useless. 
