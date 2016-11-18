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

    this.expandedForSearch = []

    this.dragAllowed = true

    this.labelKey    = props.labelKey || 'label'

    this.state = {
      expandedItems : [],
      toBeHidden    : [],
      dragging      : false
    }

    // we store an internal flat tree, so we don't have to do any tree recursion change various state
    this.flatTree = props.content ? this.getFlatTree(props.content, [], props.uniqueKey) : []

    // we store an internal copy of the branching tree, so we can latency compensate updates
    this.tree      = props.content   || {}

    this.searchKey = props.searchKey || 'label'

    this.canDragChildInto = props.canDragChildInto ? props.canDragChildInto : () => true

    this.setCanDragChildInto(props)

  }

  // ——————————————————————————————•——————————————————————————————
  setCanDragChildInto (props) {
    this.canDragChildInto = props.canDragChildInto ? props.canDragChildInto : () => true
  }

  // ——————————————————————————————•——————————————————————————————
  componentWillReceiveProps (nextProps) {

    if (nextProps.content) {
      this.flatTree = this.getFlatTree(nextProps.content, [], nextProps.uniqueKey)
      this.tree     = nextProps.content
    }

    this.setCanDragChildInto(nextProps)
  }

  // ——————————————————————————————•——————————————————————————————
  recursiveFilter (obj, searchTerm, searchKey, expandedForSearchOverride) {

    const uniqueKey = this.props.uniqueKey

    this.expandedForSearch = []

    let expandedForSearch = []

    function filterChildren (node) {
      let newNode = Object.assign({}, node)
      let expanded = false;
      if (!newNode[searchKey]) { return false }

      if (newNode.children) {

        newNode.children = newNode.children.map((child) => {
          return filterChildren(child)
        }).filter((child) => {
          return child !== false
        });
      }

      if (newNode.children && newNode.children.length > 0) {
        expanded = true
      }

      if (!newNode[searchKey] || newNode[searchKey].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        expanded = true
      }

      if (expanded === true) {
        expandedForSearch.push(newNode[uniqueKey])
        return newNode
      } else {
        return false
      }
    }

    if (!obj.children) {return obj}
    if (!searchTerm || searchTerm === '') { return obj }
    if (!searchKey  || searchKey  === '') { return obj }

    const newobj = filterChildren(obj)

    this.expandedForSearch = expandedForSearchOverride ? expandedForSearchOverride : expandedForSearch

    return newobj
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

    const open = this.state.expandedItems.includes(uniqueValue) || this.expandedForSearch.includes(uniqueValue)
    // const expandedItems = this.state.expandedItems

    let expandedItems, expandedSearchItems = null

    if (open) {

      console.log('its open', uniqueValue)

      expandedItems = this.state.expandedItems.filter(item => item !== uniqueValue)

      console.log(this.state.expandedItems.length, expandedItems.length)

      // if we're closing a node, make sure it's not in the expanded for search list!
      expandedSearchItems = this.expandedForSearch.filter(item => item !== uniqueValue)

      console.log(this.expandedForSearch.length, expandedSearchItems.length)

    } else {

      // console.log('time to open a child set', +new Date())
      expandedItems = this.state.expandedItems.concat([uniqueValue])

    }

    if (expandedSearchItems !== null) {
      console.log('resetting expanded search items')
      this.expandedForSearch = expandedSearchItems
    }

    this.state.expandedItems = expandedItems

    this.updateFlatTree(true)

    this.forceUpdate()

  }

  // ——————————————————————————————•——————————————————————————————
  doSearch (searchTerm, immediately = false) {

    if (!immediately) {

      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {

        this.searchTerm = searchTerm

        this.updateFlatTree()

        this.forceUpdate()

      }, 330)

    } else {

      this.searchTerm = searchTerm
      this.updateFlatTree()

      this.forceUpdate()
    }

  }


  // Make an array of tree nodes
  // ——————————————————————————————•——————————————————————————————
  getFlatTree (tree, expandedItems, uniqueKey) {

    // console.log('getting flat tree', +new Date())

    const toBeHidden = this.state.toBeHidden

    let   flatTree   = []

    expandedItems = expandedItems.concat(this.expandedForSearch)

    const currentDragChildKey = this.currentDragChildKey

    function pushChildToFlatTree (child, level = 0, willLeave = false) {

      // const childElement = getElementForChild(child, level)

      const node = Object.assign(child, {__level: level, __willLeave: willLeave})

      flatTree.push(node)

      if (!child.children) { return }

      const expanded = (expandedItems.includes(child[uniqueKey]))

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

  // update the internal tree
  // ——————————————————————————————•——————————————————————————————
  updateFlatTree (ignoreFilters = false) {

    const tree = ignoreFilters ? this.recursiveFilter(this.tree, this.searchTerm, this.searchKey, this.expandedForSearch) : this.recursiveFilter(this.tree, this.searchTerm, this.searchKey)

    this.flatTree = this.getFlatTree(tree, this.state.expandedItems, this.props.uniqueKey)

  }

  // simulate a drag & drop move operation
  // (latency compensation for external actions, or work-in-progress for a save action)
  // ——————————————————————————————•——————————————————————————————
  pruneAndReattach (childNode, newParentId, position = 'into', target) {

    const uniqueKey   = this.props.uniqueKey

    const childUnique = childNode[uniqueKey]

    let successfulOps = 0

    let newChildIndex = 0

    const checkAndPruneOrAdd = (node) => {

      if (!node.children && node[uniqueKey] === newParentId) {
        node.children = [childNode]
        return
      }

      if (!node.children) { return } // nothing more to do with this node

      if (node[uniqueKey] === newParentId) {

        // if we're just moving the node within the same child-set, remove the old instance
        if (childNode.__parent === newParentId) {
          const currentChildIndex = node.children.indexOf(childNode)
          node.children.splice(currentChildIndex, 1)
        }

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

        // add the new instance
        // remove the private keys from the childNode
        Object.keys(childNode).filter(key => key.includes('__')).forEach(key => delete childNode[key])

        node.children.splice(newChildIndex, 0, childNode)

        successfulOps++

      } else {

        let childrenLength = node.children.length

        node.children = node.children.filter(child => child[uniqueKey] !== childUnique)

        if (childrenLength > node.children.length) {
          successfulOps++
        }

      }

      if (successfulOps < 2) { // we don't need to keep recursing once we've pruned AND added
        node.children.forEach( child => checkAndPruneOrAdd(child) )
      }

    }

    checkAndPruneOrAdd(this.tree)

    this.updateFlatTree()

    return newChildIndex
    // TODO — remake the tree given event info
  }

  // get the child entry for a tree node
  // ——————————————————————————————•——————————————————————————————
  getElementForChild (node) {

    const uniqueKey = this.props.uniqueKey

    if (!node[uniqueKey]) {return [] }

    const level = node.__level

    const styleObj = {
      paddingLeft : level * 20
    }

    const classList = []

    classList.push('node')

    if (node.children && level !== 0) {
      classList.push('expandable')
    }

    const expandedItems = this.state.expandedItems.concat(this.expandedForSearch)

    if (expandedItems.includes(node[uniqueKey]) && this.state.toBeHidden !== node[uniqueKey]) {
      classList.push('expanded')
    }

    if (level <= 1) { classList.push('top-level') } else {
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

    let label = node[this.labelKey]

    if (this.searchTerm && node[this.labelKey].includes(this.searchTerm)) {

      label = []
      const labelFrags = node[this.labelKey].split(this.searchTerm)
      labelFrags.forEach( (frag, index) => {
        label.push(frag)
        if (index + 1 < labelFrags.length) {
          label.push((<span key={index} className="search-result-highlight">{this.searchTerm}</span>))
        }
      })

    }

    // id there is an iconClass, stick an icon at the beginning of the label
    if (node.iconClass) {
      label = [(<i className={node.iconClass} ></i>)].concat(label)
    }

    // if this is the root node, we can't drag it, otherwise, defer to whether or not the tree is locked
    const locked = node.__level === 0 ? true : this.props.locked

    const listItem = (<li
      draggable   = { locked ? false : true }
      data-unique = { node[uniqueKey] }
      style       = { styleObj }
      key         = { node[uniqueKey] }
      className   = { classList.join(' ') }
    >

      { node.children && node.children.length && level !== 0 ? expandButton : null }

      { node.href ? <a href={node.href}>{label}</a> : label }

      { this.props.handleContextMenu && !this.state.dragging && !node.hideContextMenuButton ? contextButton : null }

    </li>)

    const renamer = this.props.editingChild === node[uniqueKey] ?
      (<li
        className = "node input-node"
        key       = {node[uniqueKey]}
       >
        <input
          type         = "text"
          placeholder  = {'please enter a name'}
          defaultValue = {node[this.labelKey]}
          onBlur       = {(e) => this.props.handleRename(node[uniqueKey], e.target.value)}
        />
       </li>) :
      null

    return renamer || listItem

  }


  // ——————————————————————————————•——————————————————————————————
  //  from current drag state, infer drop output
  // ——————————————————————————————•——————————————————————————————
  getChildParentTargetNodes () {

      const dropTargetNode = this.flatTree.filter(node => node[this.props.uniqueKey] === this.currentDropTargetIdentifier)[0]
      const dragChildNode  = this.flatTree.filter(node => node[this.props.uniqueKey] === this.currentDragChildKey)[0]

      if (!dropTargetNode || !dragChildNode) { return [null, null, null]}

      let newParentId

      if (this.currentDropLocation === 'into' || dropTargetNode.__level === 0) {
        newParentId = this.currentDropTargetIdentifier
      } else {
        newParentId = dropTargetNode.__parent
      }

      const newParentNode = this.flatTree.filter(node => node[this.props.uniqueKey] === newParentId)[0]

      return [dragChildNode, newParentNode, dropTargetNode]
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
        const clientRect = e.target.getBoundingClientRect() 
        this.props.handleContextMenu(contextNodeId, clientRect)
      }

      if (e.target.nodeName === 'BUTTON' && e.target.dataset.type === 'expander') {
        this.toggleExpanded(e.target.dataset.unique)
      }

    }


    // ——————————————————————————————•——————————————————————————————
    //  DRAGSTART
    // ——————————————————————————————•——————————————————————————————
    const dragstart = (e) => {

      this.state.dragging = true
      this.currentDragChildKey = e.target.dataset.unique

      this.updateFlatTree()

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

      this.currentDropLocation = dropLocation

      const [dragChildNode, newParentNode] = this.getChildParentTargetNodes()

      // TODO — are we allowed to drop here? or not?
      //        consult a callback prop to decide!
      if (this.canDragChildInto(dragChildNode, newParentNode)) {
        e.dataTransfer.dropEffect = 'move'
        this.dragAllowed = true
        e.preventDefault()
      } else {
        e.dataTransfer.dropEffect = 'none'
        this.dragAllowed = false
      }


      if (previous.dropLocation !== this.currentDropLocation || previous.dropTarget !== this.currentDropTargetIdentifier) {
        this.forceUpdate()
      }

    }

    // ——————————————————————————————•——————————————————————————————
    //  DROP
    // ——————————————————————————————•——————————————————————————————
    const drop = (e) => {

      // TODO — this should never get called if the drop isn't viable

      e.preventDefault()

      const [dragChildNode, newParentNode] = this.getChildParentTargetNodes()

      if (!this.canDragChildInto(dragChildNode, newParentNode)) {
        console.error(`shouldn't be able to drop here`)
      }

      const newIndex = this.pruneAndReattach(dragChildNode, newParentNode[this.props.uniqueKey], this.currentDropLocation, this.currentDropTargetIdentifier)

      const moveDefinition = {
        childId : this.currentDragChildKey,
        into    : newParentNode[this.props.uniqueKey],
        from    : dragChildNode.__parent,
        atIndex : newIndex
      }

      if (this.props.childMoved) {
        this.props.childMoved(moveDefinition)
      } else {
        console.warn(`
          moved ${moveDefinition.childId} 
          from ${moveDefinition.from},
          into ${moveDefinition.into} 
          at index ${moveDefinition.atIndex},
          but you haven't passed in a 'childMoved' callback,
          so this event might not have any effect in your app
        `)
      }

      // if we've dropped into a closed target,
      if (!this.state.expandedItems.includes(this.currentDropTargetIdentifier) && this.currentDropLocation === 'into') {
        this.state.expandedItems.push(this.currentDropTargetIdentifier) // no need to call setState — it'll get called in the dragend handler
      }

    }


    // ——————————————————————————————•——————————————————————————————
    //  DRAGEND
    // ——————————————————————————————•——————————————————————————————
    const dragend = (e) => {


      dragOverCount = 0

      this.currentDragChildKey = null
      this.currentDropTargetIdentifier = null
      this.currentDropLocation = null
      this.updateFlatTree()

      this.setState({
        dragging: false
      })


    }


    const elements    = flatContent.map(child => this.getElementForChild(child))


    return (
      <div>
        {this.state.dragging ? `currently dragging` : `not currently dragging`} <br />
        {this.state.showContextMenuForNode ? `context menu node id: ${this.state.showContextMenuForNode}` : `no current context menu node`}<br />
      <input onKeyUp={(e) => this.doSearch(e.target.value) } placeholder="Search 🔍"/>
      <ol
        className   = {`react-large-tree dragging-${this.state.dragging} drag-allowed-${this.dragAllowed}`}
        onDrop      = {drop}
        onDragOver  = {dragover}
        onDragStart = {dragstart}
        onDragEnd   = {dragend}
        onClick     = {handleClick}
      >

        {elements.length ? elements : 'nothing to see here'}

      </ol>
      </div>
    )

  }

}

export default ReactLargeTree;