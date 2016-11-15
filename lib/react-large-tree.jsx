import React from 'react';
import './react-large-tree.scss';

/*

  Design goals:
  keep the DOM as flat & simple as possible
  delegate events to the root node. all of em
  use forceUpdate and internal properties for display changes that happen on user input
  fire sensible events
  flexible, to different use cases, but opinionated enough not to open any perf black holes

*/

class ReactLargeTree extends React.Component {

  // ——————————————————————————————•——————————————————————————————
  constructor (props) {
    super(props)

    this.state = {
      expandedItems: [],
      toBeHidden: [],
      dragging: false
    }

    // we store an internal flat tree, so we don't have to do any tree recursion change various state
    this.flatTree = props.content ? this.getFlatTree(props.content, [], props.uniqueKey) : []

    // we store an internal copy of the branching tree, so we can latency compensate updates
    this.tree     = props.content || {}

  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.content) {
      this.flatTree = this.getFlatTree(nextProps.content, [], nextProps.uniqueKey)
      this.tree     = nextProps.content
    }
  }

  // ——————————————————————————————•——————————————————————————————
  shouldComponentUpdate (nextProps, nextState) {

    if (nextProps.hasOwnProperty('content'))             { return true }
    if (nextState.hasOwnProperty('dragging'))            { return true }
    if (nextState.hasOwnProperty('toBeHidden'))          { return true }
    if (nextState.hasOwnProperty('expandedItems'))       { return true }

  }

  // ——————————————————————————————•——————————————————————————————
  toggleExpanded (uniqueValue) {

    const index = this.state.expandedItems.indexOf(uniqueValue)
    // const expandedItems = this.state.expandedItems

    if (index > -1) {

      // console.log('time to close a child-set', +new Date())

      const expandedItems = this.state.expandedItems.filter(item => item !== uniqueValue)

      this.setState({toBeHidden: uniqueValue})

      setTimeout(() => {
        // console.log('time to remove a child-set', +new Date())
        this.flatTree = this.getFlatTree(this.tree, expandedItems, this.props.uniqueKey)

        this.setState({
          expandedItems: expandedItems,
          toBeHidden: null
        })

      }, 250)

    } else {

      // console.log('time to open a child set', +new Date())
      const expandedItems = this.state.expandedItems.concat([uniqueValue])

      this.flatTree = this.getFlatTree(this.tree, expandedItems, this.props.uniqueKey)

      this.setState({
        expandedItems: expandedItems,
        toBeHidden: null
      })

    }
  }


  // Make an array of tree nodes
  // ——————————————————————————————•——————————————————————————————
  getFlatTree (tree, expandedItems, uniqueKey) {

    // console.log('getting flat tree', +new Date())

    const toBeHidden = this.state.toBeHidden

    let flatTree = []

    const currentDragChildKey = this.currentDragChildKey

    function pushChildToFlatTree (child, level = 0, willLeave = false) {

      // const childElement = getElementForChild(child, level)

      const node = Object.assign(child, {__level: level, __willLeave: willLeave})

      flatTree.push(node)

      const expanded = (child.children && expandedItems.indexOf(child[uniqueKey]) != -1 ) 

      if ( level === 0 || expanded && node[uniqueKey] !== currentDragChildKey ) {
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

    // console.log('got flat tree', +new Date())

    return flatTree

  }

  // ——————————————————————————————•——————————————————————————————
  updateTree () {
    this.flatTree = this.getFlatTree(this.tree, this.state.expandedItems, this.props.uniqueKey)
  }

  // ——————————————————————————————•——————————————————————————————
  pruneAndReattach (childNode, newParentId, position = 'into', target) {

    console.log(childNode)

    const uniqueKey   = this.props.uniqueKey

    const childUnique = childNode[uniqueKey]

    let successfulOps = 0

    let newChildIndex = 0

    const checkAndPruneOrAdd = (node) => {

      if (!node.children && node[uniqueKey] === newParentId) {
        node.children = [childNode]
        return
      }

      if (!node.children) { return } // nothing to do with this node

      if (node[uniqueKey] === newParentId) {

        switch (position) {
          case 'before':
            newChildIndex = node.children.map(child => child[uniqueKey]).indexOf(target)
            break
          case 'after':
            newChildIndex = node.children.map(child => child[uniqueKey]).indexOf(target) + 1
            break
          default:
            newChildIndex = 0
        }

        

        // if we're just moving the node within the same child-set, remove the old instance
        if (childNode.__parent === newParentId) {
          const currentChildIndex = node.children.indexOf(childNode)
          node.children.splice(currentChildIndex, 1)
        }

        // add the new instance
        node.children.splice(newChildIndex, 0, childNode)

        successfulOps++

      } else {

        let childrenLength = node.children.length

        node.children = node.children.filter(child => child[uniqueKey] !== childUnique)

        if (childrenLength > node.children.length) { successfulOps++ }

      }

      if (successfulOps < 2) { // once we've pruned AND added, we can stop recursing
        node.children.forEach((child) => {checkAndPruneOrAdd(child)})
      }

    }

    checkAndPruneOrAdd(this.tree)

    this.updateTree()

    return newChildIndex
    // TODO — remake the tree given event info
  }

  // get the child entry for a tree node
  // ——————————————————————————————•——————————————————————————————
  getElementForChild (node) {

    const uniqueKey = this.props.uniqueKey

    const level = node.__level
    // if (level != 0) console.log(level, node)

    const styleObj = {
      paddingLeft: level * 10,
      // textDecoration: node.children ? "underline" : "none",
      cursor: node.children ? 'pointer' : 'default'
    }

    const classList = []

    classList.push('node')

    if (node.children && level !== 0) {
      classList.push('expandable')
    }

    if (this.state.expandedItems.includes(node[uniqueKey]) && this.state.toBeHidden !== node[uniqueKey]) {
      classList.push('expanded')
    }

    if (level <= 1) {
      classList.push('top-level')
    } else {
      classList.push('sub-level')
    }

    if (node.__willLeave === true) {
      classList.push('will-leave')
    }

    if (node[uniqueKey] === this.currentDropTargetIdentifier) {
      classList.push( `target drop-${this.currentDropLocation}`)
    }

    if (this.state.showContextMenuForNode === node[uniqueKey]) {
      classList.push('context-active')
    }

    const contextButton = (<button
        className="context-button"
        data-unique={node[uniqueKey]}
        data-type="context-menu-trigger"
      >
        <svg width="15px" height="100%" viewBox="0 0 3 5" version="1.1">
          <g id="dots">
            <circle id="dot-3" cx="1.2" cy="1.001" r="0.36"/>
            <circle id="dot-2" cx="1.2" cy="2.405" r="0.36"/>
            <circle id="dot-1" cx="1.2" cy="3.799" r="0.36"/>
          </g>
        </svg>
      </button>)

    const expandButton = (<button
      className   = "expand-button"
      data-unique = {node[uniqueKey]}
      data-type   = "expander"
    ><i>&rsaquo;</i></button>)

    const listItem = (<li
      draggable   = { true }
      data-unique = { node[uniqueKey] }
      style       = { styleObj }
      key         = { node[uniqueKey] }
      className   = { classList.join(' ') }
    >

      { node.children && level !== 0 ? expandButton : null }

      { node.href ? <a href={node.href}>{node.label}</a> : node.label }

      { this.props.contextMenu && !this.state.dragging ? contextButton : null}

    </li>)

    const contextMenu = this.state.showContextMenuForNode === node[uniqueKey] ? (<li className="context-menu" key="context-menu">
      HAHA BRILLIANT
      {this.props.contextMenu}
    </li>) : null

    return [listItem, contextMenu]


  }

  // render the whole shebang
  // ——————————————————————————————•——————————————————————————————
  render () {

    const contentTree = this.tree

    if (!contentTree) {
      console.warn('react large tree expected a \'content\' prop')
      return ''
    }


    const flatContent = this.flatTree

    // ——————————————————————————————•——————————————————————————————
    //  CLICKS
    // ——————————————————————————————•——————————————————————————————
    const handleClick = (e) => {

      if (e.target.nodeName === 'BUTTON' && e.target.dataset.type === 'context-menu-trigger') {
        const contextNodeId = e.target.dataset.unique
        if (this.state.showContextMenuForNode === contextNodeId) {
          this.setState({
            showContextMenuForNode: null
          })
        } else {
          this.setState({
            showContextMenuForNode: contextNodeId
          })
        }
      }

      if (e.target.nodeName === 'BUTTON' && e.target.dataset.type === 'expander') {
        this.toggleExpanded(e.target.dataset.unique)
      }

    }


    // ——————————————————————————————•——————————————————————————————
    //  DRAGSTART
    // ——————————————————————————————•——————————————————————————————
    const dragstart = (e) => {

      console.log('drag started')

      this.state.dragging = true
      this.currentDragChildKey = e.target.dataset.unique

      this.updateTree()

      this.forceUpdate()

      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.setData('text', e.target.dataset.unique);

    }



    let dragOverCount = 0

    // ——————————————————————————————•——————————————————————————————
    //  DRAGOVER
    // ——————————————————————————————•——————————————————————————————
    const dragover = (e) => {

      dragOverCount++

      // DANGER — this event fires A LOT, be careful with it.

      if (!e.target && e.target.nodeName !== 'LI') {
        return
      }

      e.preventDefault()

      const target       = e.target
      const targetUnique = target.dataset.unique

      const previous = {
        dropTarget: this.currentDropTargetIdentifier,
        dropLocation: this.currentDropLocation
      }

      this.currentDropTargetIdentifier = targetUnique

      const mouseY     = e.clientY
      const clientRect = e.target.getBoundingClientRect()

      let dropLocation

      if (mouseY < (clientRect.top + (clientRect.height / 3)) ) {
        dropLocation = 'before'
      } else if (mouseY > (clientRect.bottom - (clientRect.height / 3)) ) {
        dropLocation = 'after'
      } else {
        dropLocation = 'into'
      }

      // TODO — are we allowed to drop here? or not?
      //        consult a callback prop to decide!
      e.dataTransfer.dropEffect = 'move'

      this.currentDropLocation = dropLocation

      if (previous.dropLocation !== this.currentDropLocation || previous.dropTarget !== this.currentDropTargetIdentifier) {
        this.forceUpdate()
      }

    }

    // ——————————————————————————————•——————————————————————————————
    //  DROP
    // ——————————————————————————————•——————————————————————————————
    const drop = (e) => {

      // TODO — this should never get called if the drop isn't viable

      console.log("dropped")
      e.preventDefault()

      const dropTargetNode = flatContent.filter(node => node[this.props.uniqueKey] === this.currentDropTargetIdentifier)[0]
      const dragChildNode  = flatContent.filter(node => node[this.props.uniqueKey] === this.currentDragChildKey)[0]

      if (!dropTargetNode || !dragChildNode) { return }

      console.log('drop', dragChildNode)
      console.log(this.currentDropLocation, dropTargetNode)

      console.log(flatContent.indexOf(dragChildNode), flatContent.indexOf(dropTargetNode))

      // console.log(e, e.target["data-unique"])

      // console.log(this.currentDragChild[this.props.uniqueKey])
      // pruneAndReattach (childNode, newParentId, position = 'into', target) {
      let newParentId

      if (this.currentDropLocation === 'into') {
        newParentId = this.currentDropTargetIdentifier
      } else {
        newParentId = dragChildNode.__parent
      }

      const newIndex = this.pruneAndReattach(dragChildNode, newParentId, this.currentDropLocation, this.currentDropTargetIdentifier)

      if (!this.state.expandedItems.includes(this.currentDropTargetIdentifier) && this.currentDropLocation === 'into') {
        this.state.expandedItems.push(this.currentDropTargetIdentifier) // no need to call setState — it'll get called in the dragend handler
      }

    }




    // ——————————————————————————————•——————————————————————————————
    //  DRAGEND
    // ——————————————————————————————•——————————————————————————————
    const dragend = (e) => {

      // e.preventDefault()

      console.log('drag ended', e)

      console.log(`dragover fired ${dragOverCount} times`)

      dragOverCount = 0

      this.currentDragChildKey = null
      this.currentDropTargetIdentifier = null
      this.currentDropLocation = null
      this.updateTree()

      this.setState({
        dragging: false
      })


    }


    const elements    = flatContent.map(child => this.getElementForChild(child))

    return (
      <div>
        {this.state.dragging ? `currently dragging` : `not currently dragging`} <br />
        {this.state.showContextMenuForNode ? `context menu node id: ${this.state.showContextMenuForNode}` : `no current context menu node`}
      <ol
        className   = {`react-large-tree dragging-${this.state.dragging}`}
        onDrop      = {drop}
        onDragOver  = {dragover}
        onDragStart = {dragstart}
        onDragEnd   = {dragend}
        onClick     = {handleClick}
      >

        {elements}

      </ol>
      </div>
    )

  }

}

export default ReactLargeTree;