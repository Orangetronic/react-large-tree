import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './react-large-tree.scss';



export default React.createClass({

  getInitialState: function () {
    return {
      expandedItems: []
    }
  },

  toggleExpanded: function (uniqueValue) {

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

    let flatTree = []

    

    function pushChildToFlatTree (child, level = 0) {

      
      // const childElement = getElementForChild(child, level)

      const node = Object.assign(child, {__level: level})

      flatTree.push(node)

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

    return flatTree  

  },

  getElementForChild: function (node) {

    const uniqueKey = this.props.uniqueKey

    const level = node.__level
    // if (level != 0) console.log(level, node)

    const styleObj = {
      paddingLeft: level * 10,
      // textDecoration: node.children ? "underline" : "none",
      cursor: node.children ? "pointer" : "default"
    }

    let className = "node"

    if (node.children && level != 0) {
      className += " expandable"
    }

    if (this.state.expandedItems.includes(node[uniqueKey])) {
      className += " expanded"
    }

    if (level <= 1) { className += " top-level" }

    return <li
      style     = {styleObj} 
      key       = {node[uniqueKey]}
      onClick   = {node.children ? () => { this.toggleExpanded(node[uniqueKey]) } : null}
      className = {className} 
    >
      {node.label}
    </li>

  },

  render: function() {

    const contentTree = this.props.content

    if (!contentTree) {
      console.warn("react large tree expected a 'content' prop")
      return ""
    }

    let flatContent = this.getFlatTree(contentTree, this.state.expandedItems, "_id")

    return  <ol className="react-large-tree">
              
                {flatContent.map(child => this.getElementForChild(child))}
              
            </ol>;

    



  }
});
