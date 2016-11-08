import React from 'react/addons';
import ReactLargeTree from '../lib/react-large-tree.jsx';

describe('ReactLargeTree', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactLargeTree/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-large-tree');
  });
});
