import React from 'react';
import './react-large-tree.scss';

//
//
//
//
//
//

class ReactLargeTree extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      expandedItems: [],
      toBeHidden: []
    }

    // this.state.flatTree = props.content ? this.getFlatTree(props.content, [], props.uniqueKey) : []

  }

  shouldComponentUpdate (nextProps, nextState) {

    if (nextProps.hasOwnProperty('content'))             { return true }
    if (nextState.hasOwnProperty('toBeHidden'))          { return true }
    if (nextState.hasOwnProperty('expandedItems'))       { return true }
    if (nextState.hasOwnProperty('currentDropLocation')) { return true }
    if (nextState.hasOwnProperty('currentDropTarget'))   { return true }

  }


  toggleExpanded (uniqueValue) {

    const index = this.state.expandedItems.indexOf(uniqueValue)
    const expandedItems = this.state.expandedItems

    if (index > -1) {

      console.log('time to close a child-set', +new Date())

      this.setState({toBeHidden: uniqueValue})

      setTimeout(() => {
        console.log('time to remove a child-set', +new Date())

        this.setState({
          expandedItems: expandedItems.filter(item => item !== uniqueValue),
          toBeHidden: null
        })

      }, 350)

    } else {

      console.log('time to open a child set', +new Date())

      this.setState({
        expandedItems: expandedItems.concat([uniqueValue]),
        toBeHidden: null
      })

    }
  }


  // Make an array of tree nodes
  // ------------------------------------------------------------------
  getFlatTree (tree, expandedItems, uniqueKey) {

    console.log('getting flat tree', +new Date())

    const toBeHidden = this.state.toBeHidden

    let flatTree = []

    function pushChildToFlatTree (child, level = 0, willLeave = false) {


      // const childElement = getElementForChild(child, level)

      const node = Object.assign(child, {__level: level, __willLeave: willLeave})

      flatTree.push(node)

      const expanded = (child.children && expandedItems.indexOf(child[uniqueKey]) != -1 ) 

      if ( level === 0 || expanded) {
        pushChildrenToFlatTree(child, level + 1, willLeave)
      }

    }

    function pushChildrenToFlatTree (parent, level, willLeave = false) {

      if (parent[uniqueKey] === toBeHidden) {
        willLeave = true
      }

      if (!parent.children || parent.children.length === 0) { return }

      const __parent = parent[uniqueKey]

      for (const child of parent.children) {

        child.__parent = __parent

        pushChildToFlatTree(child, level, willLeave)

      }

    }

    pushChildToFlatTree(tree)

    console.log('got flat tree', +new Date())

    return flatTree

  }

  // get the child entry for a tree node
  // ------------------------------------------------------------------
  getElementForChild (node) {

    const uniqueKey = this.props.uniqueKey

    const level = node.__level
    // if (level != 0) console.log(level, node)

    const styleObj = {
      paddingLeft: level * 10,
      // textDecoration: node.children ? "underline" : "none",
      cursor: node.children ? 'pointer' : 'default'
    }

    let className = 'node'

    if (node.children && level !== 0) {
      className += ' expandable'
    }

    if (this.state.expandedItems.includes(node[uniqueKey])) {
      className += ' expanded'
    }


    if (level <= 1) {
      className += ' top-level'
    } else {
      className += ' sub-level'
    }

    if (node.__willLeave === true) {
      className += ' will-leave'
    }

    if (node[uniqueKey] === this.state.currentDropTarget) {

      // console.log('found the current drop target')

      className += `target drop-${this.state.currentDropLocation}`

    }

    // const dragstart = (e) => {
    //   // e.preventDefault()

    //   this.currentDragChild = node

    //   e.dataTransfer.dropEffect = 'move';
    //   e.dataTransfer.setData('text', node[uniqueKey]);

    //   // console.log(e, this.currentDragChild)

    // }

    // const dragstop = (e) => {

    //   e.preventDefault()

    //   // console.log(e, this.currentDragChild)

    //   this.currentDragChild = null

    //   this.setState({
    //     currentDropLocation: null,
    //     currentDropTarget: null
    //   })

    // }

    // const dragover = (e) => {

    //   e.preventDefault()

    //   // console.log(e)
    //   const mouseY     = e.clientY
    //   const clientRect = e.currentTarget.getBoundingClientRect()

    //   let dropLocation

    //   if (mouseY < (clientRect.top + (clientRect.height / 3)) ) {
    //     dropLocation = 'before'
    //   } else if (mouseY > (clientRect.bottom - (clientRect.height / 3)) ) {
    //     dropLocation = 'after'
    //   } else {
    //     dropLocation = 'into'
    //   }

    //   // console.log(e.clientY, e.currentTarget.getBoundingClientRect())

    //   // this event could fire a few times in the same place, so don't update state if we don't need to
    //   if (this.state.currentDropTarget !== node[uniqueKey] && this.state.currentDropLocation !== dropLocation) {

    //     // console.log('setting a new drop location')

    //     this.setState({
    //       currentDropTarget: node[uniqueKey],
    //       currentDropLocation: dropLocation
    //     })
    //   }

    //   e.dataTransfer.dropEffect = 'move'

    // }

    // const ondrop = (e) => {

    //   e.preventDefault()

    //   /*

    //     TODO: if a dropAllowedCallback is provided, check that first
    //           update internal state with the move we've just performed?
    //           fire an external event

    //   */

    //   console.log('dropping', this.currentDragChild.label)
    //   console.log('into', node.label)

    // }

    return (<li
      draggable   = { true }
      // onDragStart = { dragstart }
      // onDragEnd   = { dragstop }
      // onDrop      = { ondrop }
      // onDragOver  = { dragover }
      style       = { styleObj }
      key         = { node[uniqueKey] }
      onClick     = { node.children ? () => { console.log('child set toggle button hit'); this.toggleExpanded(node[uniqueKey]) } : null }
      className   = { className }
    >
      {node.label}
    </li>)

  }

  // render the whole shebang
  // ------------------------------------------------------------------
  render () {

    const contentTree = this.props.content

    if (!contentTree) {
      console.warn('react large tree expected a \'content\' prop')
      return ''
    }

    // let flatContent = this.getFlatTree(contentTree, this.state.expandedItems, '_id')

    const flatContent = this.getFlatTree(this.props.content, this.state.expandedItems, this.props.uniqueKey)

    console.log('building element array', +new Date())
    const elements    = flatContent.map(child => this.getElementForChild(child))
    console.log('built element array', +new Date())

    return (
      <ol className="react-large-tree">

        {elements}

      </ol>
    )

  }

}

export default ReactLargeTree;