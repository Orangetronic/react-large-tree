import React from 'react';
import './react-large-tree.scss';



export default React.createClass({

  getInitialState: function () {
    return {
      expandedItems: []
    }
  },

  toggleExpanded: function (uniqueValue) {

    console.log(uniqueValue)

    console.log(this.state)

    const index = this.state.expandedItems.indexOf(uniqueValue)

    let expandedItems = this.state.expandedItems

    if (index > -1) {

      this.setState({ expandedItems: expandedItems.filter(item => item != uniqueValue) })

    } else {

      this.setState({ expandedItems: expandedItems.concat([uniqueValue]) })

    }
  },

  getFlatTree: function (tree, expandedItems, uniqueKey) {

    const toggleExpanded = this.toggleExpanded

    console.log("expanded items", expandedItems)

    let flatTreeElements = []

    function getElementForChild  (node, level = 0) {

      // if (level != 0) console.log(level, node)

      const styleObj = {
        paddingLeft: level * 10,
        textDecoration: node.children ? "underline" : "none",
        cursor: node.children ? "pointer" : "default"
      }

      return <li
        style   = {styleObj} 
        key     = {node[uniqueKey]}
        onClick = {node.children ? () => { console.log(node); toggleExpanded(node[uniqueKey]) } : null} 
      >
        {node.label}
      </li>
    }

    function pushChildToFlatTree (child, level = 0) {

      const childElement = getElementForChild(child, level)
      flatTreeElements.push(childElement)

      const expanded = (child.children && expandedItems.indexOf(child[uniqueKey]) != -1 ) 

      if ( level === 0 || expanded) {
        pushChildrenToFlatTree(child, level + 1)
      }

    }

    function pushChildrenToFlatTree (parent, level) {

      if (!parent.children || parent.children.length === 0) return

      const __parent = parent[uniqueKey]

      for (const child of parent.children) {

        child.__parent = __parent

        pushChildToFlatTree(child, level)

      }

    }

    pushChildToFlatTree(content)

    return flatTreeElements  

  },

  render: function() {

    const contentTree = this.props.content

    if (!contentTree) {
      console.warn("react large tree expected a 'content' prop")
      return null
    }

    let flatContent = this.getFlatTree(contentTree, this.state.expandedItems, "_id")

    console.log(flatContent)

    return  <ol className="react-large-tree">
              {flatContent}
            </ol>;
  }
});
