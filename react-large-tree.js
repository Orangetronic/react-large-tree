!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.ReactLargeTree=t(require("React")):e.ReactLargeTree=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";e.exports=r(26)},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(57)("wks"),o=r(60),a=r(8).Symbol;e.exports=function(e){return n[e]||(n[e]=a&&a[e]||(a||o)("Symbol."+e))}},function(e,t){e.exports={}},function(e,t,r){var n=r(8),o=r(2),a=r(14),i="prototype",u=function(e,t,r){var c,l,s,d=e&u.F,f=e&u.G,p=e&u.S,h=e&u.P,g=e&u.B,v=e&u.W,m=f?o:o[t]||(o[t]={}),y=f?n:p?n[t]:(n[t]||{})[i];f&&(r=t);for(c in r)l=!d&&y&&c in y,l&&c in m||(s=l?y[c]:r[c],m[c]=f&&"function"!=typeof y[c]?r[c]:g&&l?a(s,n):v&&y[c]==s?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[i]=e[i],t}(s):h&&"function"==typeof s?a(Function.call,s):s,h&&((m[i]||(m[i]={}))[c]=s))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,e.exports=u},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(1),o=r(20);e.exports=r(50)?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){e.exports={"default":r(40),__esModule:!0}},function(e,t,r){var n=r(17);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(13),o=r(3)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:a?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(48);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(13);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){"use strict";var n=r(53),o=r(5),a=r(55),i=r(9),u=r(15),c=r(4),l=r(51),s=r(21),d=r(1).getProto,f=r(3)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",g="keys",v="values",m=function(){return this};e.exports=function(e,t,r,y,x,b,_){l(r,t,y);var w,T,k=function(e){if(!p&&e in E)return E[e];switch(e){case g:return function(){return new r(this,e)};case v:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",O=x==v,D=!1,E=e.prototype,I=E[f]||E[h]||x&&E[x],j=I||k(x);if(I){var S=d(j.call(new e));s(S,C,!0),!n&&u(E,h)&&i(S,f,m),O&&I.name!==v&&(D=!0,j=function(){return I.call(this)})}if(n&&!_||!p&&!D&&E[f]||i(E,f,j),c[t]=j,c[C]=m,x)if(w={values:O?j:k(v),keys:b?j:k(g),entries:O?k("entries"):j},_)for(T in w)T in E||a(E,T,w[T]);else o(o.P+o.F*(p||D),t,w);return w}},function(e,t,r){var n=r(5),o=r(2),a=r(7);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(1).setDesc,o=r(15),a=r(3)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t,r){var n=r(16),o=r(6);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(6);e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict";var n=r(58)(!0);r(18)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){r(64);var n=r(4);n.NodeList=n.HTMLCollection=n.Array},function(e,t,r){"use strict";var n=r(36)["default"],o=r(37)["default"],a=r(35)["default"],i=r(34)["default"],u=r(39)["default"],c=r(28)["default"],l=r(10)["default"],s=r(32)["default"],d=r(38)["default"];Object.defineProperty(t,"__esModule",{value:!0});var f=r(73),p=d(f);r(72);var h=function(e){function t(e){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.expandedForSearch=[],this.dragAllowed=!0,this.labelKey=e.labelKey||"label",this.state={expandedItems:[],toBeHidden:[],dragging:!1},this.flatTree=e.content?this.getFlatTree(e.content,[],e.uniqueKey):[],this.tree=e.content||{},this.canDragChildInto=e.canDragChildInto?e.canDragChildInto:function(){return!0},this.setCanDragChildInto(e)}return o(t,e),a(t,[{key:"setCanDragChildInto",value:function(e){this.canDragChildInto=e.canDragChildInto?e.canDragChildInto:function(){return!0}}},{key:"componentWillReceiveProps",value:function(e){e.content&&(this.flatTree=this.getFlatTree(e.content,this.state.expandedItems,e.uniqueKey),this.tree=e.content),this.setCanDragChildInto(e)}},{key:"recursiveFilter",value:function(e,t,r){function n(e){var r=c({},e),u=!1;return r[o]?(r.children&&(r.children=r.children.map(function(e){return n(e)}).filter(function(e){return e!==!1})),r.children&&r.children.length>0&&(u=!0),(!r[o]||r[o].toLowerCase().includes(t.toLowerCase()))&&(u=!0),u===!0?(i.push(r[a]),r):!1):(console.log("node doesn't have searchkey",r,r[o]),!1)}var o=this.labelKey||"label",a=this.props.uniqueKey;this.expandedForSearch=[];var i=[];if(console.log(o,t),!e.children)return e;if(!t||""===t)return e;var u=n(e);return this.expandedForSearch=r?r:i,u}},{key:"shouldComponentUpdate",value:function(e,t){return e.hasOwnProperty("content")?!0:t.hasOwnProperty("dragging")?!0:t.hasOwnProperty("toBeHidden")?!0:t.hasOwnProperty("expandedItems")?!0:void 0}},{key:"toggleExpanded",value:function(e){var t=this.state.expandedItems.includes(e)||this.expandedForSearch.includes(e),r=void 0,n=null;t?(r=this.state.expandedItems.filter(function(t){return t!==e}),n=this.expandedForSearch.filter(function(t){return t!==e})):r=this.state.expandedItems.concat([e]),null!==n&&(this.expandedForSearch=n),this.state.expandedItems=r,this.updateFlatTree(!0),this.forceUpdate()}},{key:"doSearch",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];r?(this.searchTerm=e,this.updateFlatTree(),this.forceUpdate()):(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){t.searchTerm=e,t.updateFlatTree(),t.forceUpdate()},330))}},{key:"getFlatTree",value:function(e,t,r){function n(e){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],a=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],l=c(e,{__level:n,__willLeave:a});if(i.push(l),e.children){var s=t.includes(e[r]);(0===n||s&&l[r]!==u)&&o(e,n+1,a)}}function o(e,t){var o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];if(e[r]===a&&(o=!0),e.children&&0!==e.children.length){var i=e[r],u=!0,c=!1,s=void 0;try{for(var d,f=l(e.children);!(u=(d=f.next()).done);u=!0){var p=d.value;p.__parent=i,n(p,t,o)}}catch(h){c=!0,s=h}finally{try{!u&&f["return"]&&f["return"]()}finally{if(c)throw s}}}}var a=this.state.toBeHidden,i=[];t=t.concat(this.expandedForSearch);var u=this.currentDragChildKey;return n(e),i}},{key:"updateFlatTree",value:function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],t=(this.searchKey||this.labelKey,e?this.recursiveFilter(this.tree,this.searchTerm,this.expandedForSearch):this.recursiveFilter(this.tree,this.searchTerm));this.flatTree=this.getFlatTree(t,this.state.expandedItems,this.props.uniqueKey)}},{key:"pruneAndReattach",value:function(e,t,r,n){void 0===r&&(r="into");var o=this.props.uniqueKey,a=e[o],i=0,u=0,c=function l(c){if(!c.children&&c[o]===t)return void(c.children=[e]);if(c.children){if(c[o]===t){if(e.__parent===t){var d=c.children.indexOf(e);c.children.splice(d,1)}switch(r){case"before":u=c.children.map(function(e){return e[o]}).indexOf(n);break;case"after":u=c.children.map(function(e){return e[o]}).indexOf(n)+1;break;default:u=0}s(e).filter(function(e){return e.includes("__")}).forEach(function(t){return delete e[t]}),c.children.splice(u,0,e),i++}else{var f=c.children.length;c.children=c.children.filter(function(e){return e[o]!==a}),f>c.children.length&&i++}2>i&&c.children.forEach(function(e){return l(e)})}};return c(this.tree),this.updateFlatTree(),u}},{key:"getElementForChild",value:function(e){var t=this,r=this.props.uniqueKey;if(!e[r])return[];var n=e.__level,o={paddingLeft:20*n},a=[];a.push("node"),e.children&&0!==n&&a.push("expandable");var i=this.state.expandedItems.concat(this.expandedForSearch);i.includes(e[r])&&this.state.toBeHidden!==e[r]&&a.push("expanded"),1>=n?a.push("top-level"):a.push("sub-level"),e.__willLeave===!0&&a.push("will-leave"),e[r]===this.currentDropTargetIdentifier&&a.push("target drop-"+this.currentDropLocation),this.state.showContextMenuForNode===e[r]&&a.push("context-active");var u=p["default"].createElement("button",{className:"context-button","data-unique":e[r],"data-type":"context-menu-trigger"},p["default"].createElement("svg",{width:"15px",height:"100%",viewBox:"0 0 3 5",version:"1.1"},p["default"].createElement("g",{id:"dots"},p["default"].createElement("circle",{id:"dot-3",cx:"1.2",cy:"1.001",r:"0.36"}),p["default"].createElement("circle",{id:"dot-2",cx:"1.2",cy:"2.405",r:"0.36"}),p["default"].createElement("circle",{id:"dot-1",cx:"1.2",cy:"3.799",r:"0.36"})))),c=p["default"].createElement("button",{className:"expand-button","data-unique":e[r],"data-type":"expander"},p["default"].createElement("i",null,"›")),l=e[this.labelKey];this.searchTerm&&e[this.labelKey].includes(this.searchTerm)&&!function(){l=[];var r=e[t.labelKey].split(t.searchTerm);r.forEach(function(e,n){l.push(e),n+1<r.length&&l.push(p["default"].createElement("span",{key:n,className:"search-result-highlight"},t.searchTerm))})}(),e.iconClass&&(l=[p["default"].createElement("i",{className:e.iconClass})].concat(l));var s=0===e.__level?!0:this.props.locked,d=p["default"].createElement("li",{draggable:s?!1:!0,"data-unique":e[r],style:o,key:e[r],className:a.join(" ")},e.children&&e.children.length&&0!==n?c:null,e.href?p["default"].createElement("a",{href:e.href},l):l,!this.props.handleContextMenu||this.state.dragging||e.hideContextMenuButton?null:u),f=this.props.editingChild===e[r]?p["default"].createElement("li",{className:"node input-node",key:e[r]},p["default"].createElement("input",{type:"text",placeholder:"please enter a name",defaultValue:e[this.labelKey],onBlur:function(n){return t.props.handleRename(e[r],n.target.value)}})):null;return f||d}},{key:"getChildParentTargetNodes",value:function(){var e=this,t=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===e.currentDropTargetIdentifier})[0],r=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===e.currentDragChildKey})[0];if(!t||!r)return[null,null,null];var n=void 0;n="into"===this.currentDropLocation||0===t.__level?this.currentDropTargetIdentifier:t.__parent;var o=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===n})[0];return[r,o,t]}},{key:"render",value:function(){var e=this,t=this.tree;if(!t)return console.warn("react large tree expected a 'content' prop"),"";var r=this.flatTree,n=function(t){if("BUTTON"===t.target.nodeName&&"context-menu-trigger"===t.target.dataset.type){var r=t.target.dataset.unique,n=t.target.getBoundingClientRect();e.props.handleContextMenu(r,n)}"BUTTON"===t.target.nodeName&&"expander"===t.target.dataset.type&&e.toggleExpanded(t.target.dataset.unique)},o=function(t){e.state.dragging=!0,e.currentDragChildKey=t.target.dataset.unique,e.updateFlatTree(),e.forceUpdate(),t.dataTransfer.dropEffect="move",t.dataTransfer.setData("text",t.target.dataset.unique)},a=0,i=function(t){if(a++,t.target||"LI"===t.target.nodeName){var r=t.target,n=r.dataset.unique,o={dropTarget:e.currentDropTargetIdentifier,dropLocation:e.currentDropLocation};e.currentDropTargetIdentifier=n;var i=t.clientY,c=t.target.getBoundingClientRect(),l=void 0;l=i<c.top+c.height/3?"before":i>c.bottom-c.height/3?"after":"into",e.currentDropLocation=l;var s=e.getChildParentTargetNodes(),d=u(s,2),f=d[0],p=d[1];e.canDragChildInto(f,p)?(t.dataTransfer.dropEffect="move",e.dragAllowed=!0,t.preventDefault()):(t.dataTransfer.dropEffect="none",e.dragAllowed=!1),(o.dropLocation!==e.currentDropLocation||o.dropTarget!==e.currentDropTargetIdentifier)&&e.forceUpdate()}},c=function(t){t.preventDefault();var r=e.getChildParentTargetNodes(),n=u(r,2),o=n[0],a=n[1];e.canDragChildInto(o,a)||console.error("shouldn't be able to drop here");var i=o.__parent,c=e.pruneAndReattach(o,a[e.props.uniqueKey],e.currentDropLocation,e.currentDropTargetIdentifier),l={childId:e.currentDragChildKey,into:a[e.props.uniqueKey],from:i,atIndex:c};e.props.childMoved?e.props.childMoved(l):console.warn("\n          moved "+l.childId+" \n          from "+l.from+",\n          into "+l.into+" \n          at index "+l.atIndex+",\n          but you haven't passed in a 'childMoved' callback,\n          so this event might not have any effect in your app\n        "),e.state.expandedItems.includes(e.currentDropTargetIdentifier)||"into"!==e.currentDropLocation||e.state.expandedItems.push(e.currentDropTargetIdentifier)},l=function(t){a=0,e.currentDragChildKey=null,e.currentDropTargetIdentifier=null,e.currentDropLocation=null,e.updateFlatTree(),e.setState({dragging:!1})},s=r.map(function(t){return e.getElementForChild(t)});return p["default"].createElement("div",null,this.state.dragging?"currently dragging":"not currently dragging"," ",p["default"].createElement("br",null),this.state.showContextMenuForNode?"context menu node id: "+this.state.showContextMenuForNode:"no current context menu node",p["default"].createElement("br",null),p["default"].createElement("input",{onKeyUp:function(t){return e.doSearch(t.target.value)},placeholder:"Search 🔍"}),p["default"].createElement("ol",{className:"react-large-tree dragging-"+this.state.dragging+" drag-allowed-"+this.dragAllowed,onDrop:c,onDragOver:i,onDragStart:o,onDragEnd:l,onClick:n},s.length?s:"nothing to see here"))}}]),t}(p["default"].Component);t["default"]=h,e.exports=t["default"]},function(e,t,r){e.exports={"default":r(41),__esModule:!0}},function(e,t,r){e.exports={"default":r(42),__esModule:!0}},function(e,t,r){e.exports={"default":r(43),__esModule:!0}},function(e,t,r){e.exports={"default":r(44),__esModule:!0}},function(e,t,r){e.exports={"default":r(45),__esModule:!0}},function(e,t,r){e.exports={"default":r(46),__esModule:!0}},function(e,t,r){e.exports={"default":r(47),__esModule:!0}},function(e,t){"use strict";t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.__esModule=!0},function(e,t,r){"use strict";var n=r(30)["default"];t["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t.__esModule=!0},function(e,t,r){"use strict";var n=r(31)["default"];t["default"]=function(e,t,r){for(var o=!0;o;){var a=e,i=t,u=r;o=!1,null===a&&(a=Function.prototype);var c=n(a,i);if(void 0!==c){if("value"in c)return c.value;var l=c.get;return void 0===l?void 0:l.call(u)}var s=Object.getPrototypeOf(a);if(null===s)return void 0;e=s,t=i,r=u,o=!0,c=s=void 0}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(29)["default"],o=r(33)["default"];t["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o?o(e,t):e.__proto__=t)},t.__esModule=!0},function(e,t){"use strict";t["default"]=function(e){return e&&e.__esModule?e:{"default":e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(10)["default"],o=r(27)["default"];t["default"]=function(){function e(e,t){var r=[],o=!0,a=!1,i=void 0;try{for(var u,c=n(e);!(o=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);o=!0);}catch(l){a=!0,i=l}finally{try{!o&&c["return"]&&c["return"]()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(o(Object(t)))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t.__esModule=!0},function(e,t,r){r(25),r(24),e.exports=r(62)},function(e,t,r){r(25),r(24),e.exports=r(63)},function(e,t,r){r(65),e.exports=r(2).Object.assign},function(e,t,r){var n=r(1);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){var n=r(1);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t,r){var n=r(1);r(66),e.exports=function(e,t){return n.getDesc(e,t)}},function(e,t,r){r(67),e.exports=r(2).Object.keys},function(e,t,r){r(68),e.exports=r(2).Object.setPrototypeOf},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,r){e.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict";var n=r(1),o=r(20),a=r(21),i={};r(9)(i,r(3)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n.create(i,{next:o(1,r)}),a(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t){e.exports=!0},function(e,t,r){var n=r(1),o=r(23),a=r(16);e.exports=r(7)(function(){var e=Object.assign,t={},r={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(e){r[e]=e}),7!=e({},t)[n]||Object.keys(e({},r)).join("")!=o})?function(e,t){for(var r=o(e),i=arguments,u=i.length,c=1,l=n.getKeys,s=n.getSymbols,d=n.isEnum;u>c;)for(var f,p=a(i[c++]),h=s?l(p).concat(s(p)):l(p),g=h.length,v=0;g>v;)d.call(p,f=h[v++])&&(r[f]=p[f]);return r}:Object.assign},function(e,t,r){e.exports=r(9)},function(e,t,r){var n=r(1).getDesc,o=r(17),a=r(11),i=function(e,t){if(a(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=r(14)(Function.call,n(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:o(e,r),e}}({},!1):void 0),check:i}},function(e,t,r){var n=r(8),o="__core-js_shared__",a=n[o]||(n[o]={});e.exports=function(e){return a[e]||(a[e]={})}},function(e,t,r){var n=r(59),o=r(6);e.exports=function(e){return function(t,r){var a,i,u=String(o(t)),c=n(r),l=u.length;return 0>c||c>=l?e?"":void 0:(a=u.charCodeAt(c),55296>a||a>56319||c+1===l||(i=u.charCodeAt(c+1))<56320||i>57343?e?u.charAt(c):a:e?u.slice(c,c+2):(a-55296<<10)+(i-56320)+65536)}}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(12),o=r(3)("iterator"),a=r(4);e.exports=r(2).getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||a[n(e)]:void 0}},function(e,t,r){var n=r(11),o=r(61);e.exports=r(2).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},function(e,t,r){var n=r(12),o=r(3)("iterator"),a=r(4);e.exports=r(2).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(n(t))}},function(e,t,r){"use strict";var n=r(49),o=r(52),a=r(4),i=r(22);e.exports=r(18)(Array,"Array",function(e,t){this._t=i(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(e,t,r){var n=r(5);n(n.S+n.F,"Object",{assign:r(54)})},function(e,t,r){var n=r(22);r(19)("getOwnPropertyDescriptor",function(e){return function(t,r){return e(n(t),r)}})},function(e,t,r){var n=r(23);r(19)("keys",function(e){return function(t){return e(n(t))}})},function(e,t,r){var n=r(5);n(n.S,"Object",{setPrototypeOf:r(56).set})},function(e,t,r){t=e.exports=r(70)(),t.push([e.id,'.react-large-tree{font-family:inherit;font-family:monospace;line-height:1.6em;background:navy;padding:0;color:#fff;max-width:350px;overflow:hidden;transition:all .2s}.react-large-tree .node{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;height:5rem;line-height:5rem;background:#00004d}.react-large-tree .node a{color:#fff}.react-large-tree .node.top-level{background:navy}.react-large-tree .node.sub-level{transform:translate3d(-1350px,0,0);animation:scoot-in;animation-duration:.2s;animation-iteration-count:1;animation-fill-mode:forwards}.react-large-tree .node.will-leave{transform:translate3d(0,0,0);animation:scoot-out;animation-duration:.2s;animation-iteration-count:1;animation-fill-mode:forwards}.react-large-tree .node input{display:inline-block;width:100%;height:5rem;line-height:5rem;outline:0;border:none;font-family:monospace;margin:0;font-size:inherit;background:inherit;color:inherit;padding:0}.react-large-tree .node input::selection{color:#000;background:#ff1493}.react-large-tree .node.drop-into{background:#1a1aff}.react-large-tree .node.drop-before{box-shadow:inset 0 4px 0 #fff}.react-large-tree .node.drop-after{box-shadow:inset 0 -4px 0 #fff}.react-large-tree .node:hover{background:blue;color:#fff}.react-large-tree .node:before{content:"";display:inline-block;color:transparent;margin-right:.5em}.react-large-tree.dragging-true .node:hover{background:teal;box-shadow:inset 0 0 4px #fff}.react-large-tree.dragging-true .node a,.react-large-tree.dragging-true .node button{pointer-events:none}.react-large-tree .context-menu{background:#fff;color:navy;min-height:4em;border-left:4px solid navy;padding-left:.5em}.react-large-tree .expandable.expanded.top-level{box-shadow:inset 0 -1px 0 #fff}.react-large-tree .expandable.expanded:before{transform:rotate(90deg)}.react-large-tree .expand-button{background:none;border:none;color:#fff;margin:0;padding:0;margin-left:-1.5em;height:100%;width:1.5em}.react-large-tree .expand-button i{display:block;transition:transform .2s ease-out;font-style:normal;pointer-events:none}.react-large-tree .expand-button:hover i{transform:rotate(50deg)}.react-large-tree .expand-button:focus{box-shadow:none;outline:0}.react-large-tree .expanded .expand-button i{transform:rotate(90deg)}.react-large-tree .expanded .expand-button:hover i{transform:rotate(50deg)}.react-large-tree .example-enter{opacity:.01}.react-large-tree .example-enter.example-enter-active{opacity:1;transition:opacity .5s ease-in}.react-large-tree .example-leave{opacity:1}.react-large-tree .example-leave.example-leave-active{opacity:.01;transition:opacity .3s ease-in}.react-large-tree .context-button{float:right;background:none;border:none;padding:none;margin:none;margin-right:-2px;height:100%;transition:all .3s ease-in-out}.react-large-tree .context-button:focus{outline:0;box-shadow:none}.react-large-tree .context-button:hover{background:#fff}.react-large-tree .context-button:hover circle{fill:#00008b}.react-large-tree .context-button svg{fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;pointer-events:none}.react-large-tree .context-button circle{fill:#ddd}.react-large-tree .context-active .context-button{background:#fff}.react-large-tree .context-active .context-button circle{fill:#00008b}.react-large-tree .context-active .context-button:hover{background:transparent}.react-large-tree .context-active .context-button:hover circle{fill:#ddd}.react-large-tree .search-result-highlight{background:#ff0;color:navy}.react-large-tree .node[draggable]{cursor:move;cursor:-webkit-grab}.react-large-tree .node[draggable] a,.react-large-tree .node[draggable] button{cursor:pointer}.react-large-tree.dragging-true,.react-large-tree.dragging-true *{cursor:move;cursor:-webkit-grabbing}.react-large-tree.dragging-true.drag-allowed-false,.react-large-tree.dragging-true.drag-allowed-false *{cursor:not-allowed}.react-large-tree.drag-allowed-false .node.drop-into{background:#f99}.react-large-tree.drag-allowed-false .node.drop-before{box-shadow:inset 0 4px 0 red}.react-large-tree.drag-allowed-false .node.drop-after{box-shadow:inset 0 -4px 0 red}@keyframes scoot-in{0%{transform:translate3d(-1350px,0,0)}to{transform:translate3d(0,0,0)}}@keyframes scoot-out{0%{transform:translate3d(0,0,0)}to{transform:translate3d(-1350px,0,0)}}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(u(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(u(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],u=o[2],c=o[3],l={css:i,media:u,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function u(e,t){var r,n,o;if(t.singleton){var u=v++;r=g||(g=a()),n=c.bind(null,r,u,!1),o=c.bind(null,r,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=i(),n=s.bind(null,r),o=function(){r.parentNode.removeChild(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(),n=l.bind(null,r),o=function(){r.parentNode.removeChild(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var r=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function s(e,t){var r=t.css,n=(t.media,t.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var u=r[i],c=d[u.id];c.refs--,a.push(c)}if(e){var l=o(e);n(l,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete d[c.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(69);"string"==typeof n&&(n=[[e.id,n,""]]);r(71)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=React}])});