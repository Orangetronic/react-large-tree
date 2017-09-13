exports.ReactLargeTree=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";e.exports=r(42)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){var n=r(78)("wks"),o=r(40),a=r(13).Symbol;e.exports=function(e){return n[e]||(n[e]=a&&a[e]||(a||o)("Symbol."+e))}},function(e,t,r){var n=r(13),o=r(1),a=r(6),i="prototype",u=function(e,t,r){var c,s,l,f=e&u.F,d=e&u.G,p=e&u.S,h=e&u.P,g=e&u.B,v=e&u.W,y=d?o:o[t]||(o[t]={}),m=d?n:p?n[t]:(n[t]||{})[i];d&&(r=t);for(c in r)s=!f&&m&&c in m,s&&c in y||(l=s?m[c]:r[c],y[c]=d&&"function"!=typeof m[c]?r[c]:g&&s?a(l,n):v&&m[c]==l?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[i]=e[i],t}(l):h&&"function"==typeof l?a(Function.call,l):l,h&&((y[i]||(y[i]={}))[c]=l))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,e.exports=u},function(e,t){e.exports={}},function(e,t,r){var n=r(70);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(2),o=r(33);e.exports=r(11)?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){"use strict";var n=r(79)(!0);r(19)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){var n=r(14);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){e.exports=!r(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){r(83);var n=r(5);n.NodeList=n.HTMLCollection=n.Array},function(e,t,r){var n=r(24),o=r(3)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:a?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t,r){var n=r(6),o=r(30),a=r(29),i=r(9),u=r(39),c=r(22);e.exports=function(e,t,r,s){var l,f,d,p=c(e),h=n(r,s,t?2:1),g=0;if("function"!=typeof p)throw TypeError(e+" is not iterable!");if(a(p))for(l=u(e.length);l>g;g++)t?h(i(f=e[g])[0],f[1]):h(e[g]);else for(d=p.call(e);!(f=d.next()).done;)o(d,h,f.value,t)}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){"use strict";var n=r(74),o=r(4),a=r(35),i=r(7),u=r(18),c=r(5),s=r(72),l=r(20),f=r(2).getProto,d=r(3)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",g="keys",v="values",y=function(){return this};e.exports=function(e,t,r,m,x,b,_){s(r,t,m);var w,k,T=function(e){if(!p&&e in I)return I[e];switch(e){case g:return function(){return new r(this,e)};case v:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",O=x==v,E=!1,I=e.prototype,D=I[d]||I[h]||x&&I[x],S=D||T(x);if(D){var M=f(S.call(new e));l(M,C,!0),!n&&u(I,h)&&i(M,d,y),O&&D.name!==v&&(E=!0,S=function(){return D.call(this)})}if(n&&!_||!p&&!E&&I[d]||i(I,d,S),c[t]=S,c[C]=y,x)if(w={values:O?S:T(v),keys:b?S:T(g),entries:O?T("entries"):S},_)for(k in w)k in I||a(I,k,w[k]);else o(o.P+o.F*(p||E),t,w);return w}},function(e,t,r){var n=r(2).setDesc,o=r(18),a=r(3)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t,r){var n=r(10);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(16),o=r(3)("iterator"),a=r(5);e.exports=r(1).getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||a[n(e)]:void 0}},function(e,t,r){e.exports={"default":r(60),__esModule:!0}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){"use strict";var n=r(2),o=r(7),a=r(34),i=r(6),u=r(36),c=r(10),s=r(17),l=r(19),f=r(31),d=r(40)("id"),p=r(18),h=r(14),g=r(77),v=r(11),y=Object.isExtensible||h,m=v?"_s":"size",x=0,b=function(e,t){if(!h(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!p(e,d)){if(!y(e))return"F";if(!t)return"E";o(e,d,++x)}return"O"+e[d]},_=function(e,t){var r,n=b(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,o){var l=e(function(e,a){u(e,l,t),e._i=n.create(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=a&&s(a,r,e[o],e)});return a(l.prototype,{clear:function(){for(var e=this,t=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete t[r.i];e._f=e._l=void 0,e[m]=0},"delete":function(e){var t=this,r=_(t,e);if(r){var n=r.n,o=r.p;delete t._i[r.i],r.r=!0,o&&(o.n=n),n&&(n.p=o),t._f==r&&(t._f=n),t._l==r&&(t._l=o),t[m]--}return!!r},forEach:function(e){for(var t,r=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(r(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!_(this,e)}}),v&&n.setDesc(l.prototype,"size",{get:function(){return c(this[m])}}),l},def:function(e,t,r){var n,o,a=_(e,t);return a?a.v=r:(e._l=a={i:o=b(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=a),n&&(n.n=a),e[m]++,"F"!==o&&(e._i[o]=a)),e},getEntry:_,setStrong:function(e,t,r){l(e,t,function(e,t){this._t=e,this._k=t,this._l=void 0},function(){for(var e=this,t=e._k,r=e._l;r&&r.r;)r=r.p;return e._t&&(e._l=r=r?r.n:e._t._f)?"keys"==t?f(0,r.k):"values"==t?f(0,r.v):f(0,[r.k,r.v]):(e._t=void 0,f(1))},r?"entries":"values",!r,!0),g(t)}}},function(e,t,r){var n=r(17),o=r(16);e.exports=function(e){return function(){if(o(this)!=e)throw TypeError(e+"#toJSON isn't generic");var t=[];return n(this,!1,t.push,t),t}}},function(e,t,r){"use strict";var n=r(2),o=r(13),a=r(4),i=r(12),u=r(7),c=r(34),s=r(17),l=r(36),f=r(14),d=r(20),p=r(11);e.exports=function(e,t,r,h,g,v){var y=o[e],m=y,x=g?"set":"add",b=m&&m.prototype,_={};return p&&"function"==typeof m&&(v||b.forEach&&!i(function(){(new m).entries().next()}))?(m=t(function(t,r){l(t,m,e),t._c=new y,void 0!=r&&s(r,g,t[x],t)}),n.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","),function(e){var t="add"==e||"set"==e;e in b&&(!v||"clear"!=e)&&u(m.prototype,e,function(r,n){if(!t&&v&&!f(r))return"get"==e?void 0:!1;var o=this._c[e](0===r?0:r,n);return t?this:o})}),"size"in b&&n.setDesc(m.prototype,"size",{get:function(){return this._c.size}})):(m=h.getConstructor(t,e,g,x),c(m.prototype,r)),d(m,e),_[e]=m,a(a.G+a.W+a.F,_),v||h.setStrong(m,e,g),m}},function(e,t,r){var n=r(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(5),o=r(3)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||a[o]===e)}},function(e,t,r){var n=r(9);e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(a){var i=e["return"];throw void 0!==i&&n(i.call(e)),a}}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){var n=r(4),o=r(1),a=r(12);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(35);e.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},function(e,t,r){e.exports=r(7)},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(28),o=r(10);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(37),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){},function(e,t,r){"use strict";var n=r(55)["default"],o=r(56)["default"],a=r(54)["default"],i=r(53)["default"],u=r(58)["default"],c=r(52)["default"],s=r(43)["default"],l=r(46)["default"],f=r(45)["default"],d=r(23)["default"],p=r(50)["default"],h=r(57)["default"];Object.defineProperty(t,"__esModule",{value:!0});var g=r(96),v=h(g);r(95);var y=function(e){function t(e){i(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.uniqueId=e.id||"react-large-tree-"+Math.random()+"-"+Math.random()+"-"+Math.random(),this.expandedForSearch=[],this.dragAllowed=!0,this.labelKey=e.labelKey||"label",this.state={expandedItems:[],toBeHidden:[],dragging:!1},this.flatTree=e.content?this.getFlatTree(e.content,[],e.uniqueKey):[],this.tree=e.content||{},this.canDragChildInto=e.canDragChildInto?e.canDragChildInto:function(){return!0},this.setCanDragChildInto(e)}return o(t,e),a(t,[{key:"setCanDragChildInto",value:function(e){this.canDragChildInto=e.canDragChildInto?e.canDragChildInto:function(){return!0}}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.editingChild){var r=e.content||this.tree,n=this.getPathToChild(r,e.editingChild);n?!function(){var e=new c(t.state.expandedItems);n.forEach(function(t){return e.add(t)}),t.state.expandedItems=s(e)}():console.warn("Tried to expand the tree to reveal the editing child, but couldn't find it")}e.content&&(this.flatTree=this.getFlatTree(e.content,this.state.expandedItems,e.uniqueKey),this.tree=e.content),this.setCanDragChildInto(e)}},{key:"getPathToChild",value:function(e,t){function r(e){var i=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return a++,o?void 0:e[n]===t?void(o=i):void!function(){var t=[].concat(i).concat([e[n]]);e.children&&e.children.length&&e.children.forEach(function(e){r(e,t)})}()}var n=this.props.uniqueKey,o=null,a=0;return r(e),o}},{key:"recursiveFilter",value:function(e,t,r){function n(e){var r=l({},e),u=!1;return r[o]?(r.children&&(r.children=r.children.map(function(e){return n(e)}).filter(function(e){return e!==!1})),r.children&&r.children.length>0&&(u=!0),(!r[o]||r[o].toLowerCase().includes(t.toLowerCase()))&&(u=!0),u===!0?(i.push(r[a]),r):!1):(console.warn("you're trying to search, but there's a node in your tree that's missing the "+o+" property"),!1)}var o=this.labelKey||"label",a=this.props.uniqueKey;this.expandedForSearch=[];var i=[];if(!e.children)return e;if(!t||""===t)return e;var u=n(e);return this.expandedForSearch=r?r:i,u}},{key:"shouldComponentUpdate",value:function(e,t){return e.hasOwnProperty("editingChild")||e.hasOwnProperty("content")||t.hasOwnProperty("dragging")||t.hasOwnProperty("toBeHidden")||t.hasOwnProperty("expandedItems")?!0:void 0}},{key:"toggleExpanded",value:function(e){var t=this.state.expandedItems.includes(e)||this.expandedForSearch.includes(e),r=void 0,n=null;t?(r=this.state.expandedItems.filter(function(t){return t!==e}),n=this.expandedForSearch.filter(function(t){return t!==e})):r=this.state.expandedItems.concat([e]),null!==n&&(this.expandedForSearch=n),this.state.expandedItems=r,this.updateFlatTree(!0),this.forceUpdate()}},{key:"doSearch",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];r?(this.searchTerm=e,this.updateFlatTree(),this.forceUpdate()):(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){t.searchTerm=e,t.updateFlatTree(),t.forceUpdate()},330))}},{key:"getFlatTree",value:function(e,t,r){function n(e){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],a=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],c=l(e,{__level:n,__willLeave:a});if(i.set(c[r],c),e.children){var s=t.includes(e[r]);(0===n||s&&c[r]!==u)&&o(e,n+1,a)}}function o(e,t){var o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];if(e[r]===a&&(o=!0),e.children&&0!==e.children.length){var i=e[r],u=!0,c=!1,s=void 0;try{for(var l,f=d(e.children);!(u=(l=f.next()).done);u=!0){var p=l.value;p.__parent=i,n(p,t,o)}}catch(h){c=!0,s=h}finally{try{!u&&f["return"]&&f["return"]()}finally{if(c)throw s}}}}var a=this.state.toBeHidden,i=new f;t=t.concat(this.expandedForSearch);var u=this.currentDragChildKey;return n(e),i.size?s(i.values()):[]}},{key:"updateFlatTree",value:function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],t=e?this.recursiveFilter(this.tree,this.searchTerm,this.expandedForSearch):this.recursiveFilter(this.tree,this.searchTerm);this.flatTree=this.getFlatTree(t,this.state.expandedItems,this.props.uniqueKey)}},{key:"pruneAndReattach",value:function(e,t,r,n){void 0===r&&(r="into");var o=this.props.uniqueKey,a=e[o],i=0,u=0,c=function s(c){if(!c.children&&c[o]===t)return void(c.children=[e]);if(c.children){if(c[o]===t){if(e.__parent===t){var l=c.children.indexOf(e);c.children.splice(l,1)}switch(r){case"before":u=c.children.map(function(e){return e[o]}).indexOf(n);break;case"after":u=c.children.map(function(e){return e[o]}).indexOf(n)+1;break;default:u=0}p(e).filter(function(e){return e.includes("__")}).forEach(function(t){return delete e[t]}),c.children.splice(u,0,e),i++}else{var f=c.children.length;c.children=c.children.filter(function(e){return e[o]!==a}),f>c.children.length&&i++}2>i&&c.children.forEach(function(e){return s(e)})}};return c(this.tree),this.updateFlatTree(),u}},{key:"getElementForChild",value:function(e){var t=this,r=this.props.uniqueKey;if(!e[r])return[];var n=e.__level,o={paddingLeft:20*n},a=[];a.push("node"),e.children&&0!==n&&a.push("expandable");var i=this.state.expandedItems.concat(this.expandedForSearch);i.includes(e[r])&&this.state.toBeHidden!==e[r]&&e.children&&e.children.length&&a.push("expanded"),1>=n?a.push("top-level"):a.push("sub-level"),e.__willLeave===!0&&a.push("will-leave"),e[r]===this.currentDropTargetIdentifier&&a.push("target drop-"+this.currentDropLocation),this.state.showContextMenuForNode===e[r]&&a.push("context-active"),this.props.nodesToHighlight&&this.props.nodesToHighlight.includes(e[r])&&a.push("highlight");var u=v["default"].createElement("button",{key:e[r]+"-context-button",className:"context-button","data-unique":e[r],"data-type":"context-menu-trigger"},v["default"].createElement("svg",{width:"15px",height:"100%",viewBox:"0 0 3 5",version:"1.1"},v["default"].createElement("g",{id:"dots"},v["default"].createElement("circle",{id:"dot-3",cx:"1.2",cy:"1.001",r:"0.36"}),v["default"].createElement("circle",{id:"dot-2",cx:"1.2",cy:"2.405",r:"0.36"}),v["default"].createElement("circle",{id:"dot-1",cx:"1.2",cy:"3.799",r:"0.36"})))),c=v["default"].createElement("button",{key:e[r]+"-expand-button",className:"expand-button","data-unique":e[r],"data-type":"expander"},v["default"].createElement("i",null,"›")),s=e[this.labelKey];if(this.searchTerm&&e[this.labelKey].includes(this.searchTerm)&&!function(){s=[];var n=e[t.labelKey].split(t.searchTerm);n.forEach(function(o,a){s.push(o),a+1<n.length&&s.push(v["default"].createElement("span",{key:e[r]+"-frag-"+a,className:"search-result-highlight"},t.searchTerm))})}(),e.iconClass){var l=v["default"].createElement("i",{className:"__user-icon "+e.iconClass,key:e[r]+"-user-icon"});s=[l].concat(v["default"].createElement("span",{key:e[r]+"-label"},"label"))}var f=0===e.__level?!0:this.props.locked,d=v["default"].createElement("li",{draggable:f?!1:!0,"data-unique":e[r],style:o,key:e[r],className:a.join(" ")},e.children&&e.children.length&&0!==n?c:null,e.href?v["default"].createElement("a",{href:e.href},s):s,this.props.handleContextMenu&&!e.hideContextMenuButton?u:null),p=this.props.editingChild===e[r]?v["default"].createElement("li",{className:"node input-node",key:e[r]},e.iconClass?icon:null,v["default"].createElement("input",{key:e[r]+"input",type:"text",placeholder:"please enter a name",autoFocus:!0,defaultValue:e[this.labelKey],onKeyUp:function(n){13===n.keyCode&&t.props.handleRename(e[r],n.target.value)},onBlur:function(n){return t.props.handleRename(e[r],n.target.value)}})):null;return p||d}},{key:"getChildParentTargetNodes",value:function(){var e=this,t=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===e.currentDropTargetIdentifier})[0],r=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===e.currentDragChildKey})[0];if(!t||!r)return[null,null,null];var n=void 0;n="into"===this.currentDropLocation||0===t.__level?this.currentDropTargetIdentifier:t.__parent;var o=this.flatTree.filter(function(t){return t[e.props.uniqueKey]===n})[0];return[r,o,t]}},{key:"render",value:function(){var e=this,t=this.tree;if(!t)return console.warn("react large tree expected a 'content' prop"),null;var r=this.flatTree;if(!r||!r.length)return null;var n=function(t){"BUTTON"===t.target.nodeName&&"context-menu-trigger"===t.target.dataset.type&&!function(){var r=t.target.dataset.unique,n=e.flatTree.filter(function(t){return t[e.props.uniqueKey]===r})[0],o=t.target.getBoundingClientRect();e.props.handleContextMenu(n,o)}(),"BUTTON"===t.target.nodeName&&"expander"===t.target.dataset.type&&e.toggleExpanded(t.target.dataset.unique)},o=function(t){e.state.dragging=!0,e.currentDragChildKey=t.target.dataset.unique,e.updateFlatTree(),e.forceUpdate(),t.dataTransfer.dropEffect="move",t.dataTransfer.setData("text",t.target.dataset.unique)},a=function(t){if(t.target||"LI"===t.target.nodeName){var r=t.target,n=r.dataset.unique,o={dropTarget:e.currentDropTargetIdentifier,dropLocation:e.currentDropLocation};e.currentDropTargetIdentifier=n;var a=t.clientY,i=t.target.getBoundingClientRect(),c=e.getChildParentTargetNodes(),s=u(c,3),l=s[0],f=s[1],d=s[2],p=void 0;p=a<i.top+i.height/3?"before":a>i.bottom-i.height/3?"after":"into";var h=0===d.__level,g=l[e.props.uniqueKey]===f[e.props.uniqueKey];e.currentDropLocation=h?"after":p,!g&&e.canDragChildInto(l,f)?(t.dataTransfer.dropEffect="move",e.dragAllowed=!0,t.preventDefault()):(t.dataTransfer.dropEffect="none",e.dragAllowed=!1),(o.dropLocation!==e.currentDropLocation||o.dropTarget!==e.currentDropTargetIdentifier)&&e.forceUpdate()}},i=function(t){var r=e.getChildParentTargetNodes(),n=u(r,2),o=n[0],a=n[1];if(!o[e.props.uniqueKey===a[e.props.uniqueKey]]){if(t.preventDefault(),!e.canDragChildInto(o,a))return void console.error("shouldn't be able to drop here");var i=o.__parent,c=e.pruneAndReattach(o,a[e.props.uniqueKey],e.currentDropLocation,e.currentDropTargetIdentifier),s={childId:e.currentDragChildKey,into:a[e.props.uniqueKey],from:i,atIndex:c>=0?c:0};e.props.childMoved?e.props.childMoved(s):console.warn("\n          moved "+s.childId+"\n          from "+s.from+",\n          into "+s.into+"\n          at index "+s.atIndex+",\n          but you haven't passed in a 'childMoved' callback,\n          so this event might not have any effect in your app\n        "),e.state.expandedItems.includes(e.currentDropTargetIdentifier)||"into"!==e.currentDropLocation||e.state.expandedItems.push(e.currentDropTargetIdentifier)}},c=function(){e.currentDragChildKey=null,e.currentDropTargetIdentifier=null,e.currentDropLocation=null,e.updateFlatTree(),e.setState({dragging:!1})},s=r.length?r.filter(function(t){return t[e.props.uniqueKey]}).map(function(t){return e.getElementForChild(t)}):null,l=s&&s.length?v["default"].createElement("ol",{key:this.uniqueId+"-main-list",className:"react-large-tree dragging-"+this.state.dragging+" drag-allowed-"+this.dragAllowed,onDrop:i,onDragOver:a,onDragStart:o,onDragEnd:c,onClick:n},s):v["default"].createElement("span",{key:this.uniqueId+"-empty-results-message"},"No Items Present"),f=v["default"].createElement("div",{id:this.uniqueId,key:"react-large-tree-"+this.uniqueId},v["default"].createElement("input",{className:"tree-searcher",onKeyUp:function(t){return e.doSearch(t.target.value)},placeholder:this.props.searchPlaceholder||"Search 🔍",key:this.uniqueId+"-search-input"}),l);return f}}]),t}(v["default"].Component);t["default"]=y,e.exports=t["default"]},function(e,t,r){e.exports={"default":r(59),__esModule:!0}},function(e,t,r){e.exports={"default":r(61),__esModule:!0}},function(e,t,r){e.exports={"default":r(62),__esModule:!0}},function(e,t,r){e.exports={"default":r(63),__esModule:!0}},function(e,t,r){e.exports={"default":r(64),__esModule:!0}},function(e,t,r){e.exports={"default":r(65),__esModule:!0}},function(e,t,r){e.exports={"default":r(66),__esModule:!0}},function(e,t,r){e.exports={"default":r(67),__esModule:!0}},function(e,t,r){e.exports={"default":r(68),__esModule:!0}},function(e,t,r){e.exports={"default":r(69),__esModule:!0}},function(e,t){"use strict";t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.__esModule=!0},function(e,t,r){"use strict";var n=r(48)["default"];t["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t.__esModule=!0},function(e,t,r){"use strict";var n=r(49)["default"];t["default"]=function(e,t,r){for(var o=!0;o;){var a=e,i=t,u=r;o=!1,null===a&&(a=Function.prototype);var c=n(a,i);if(void 0!==c){if("value"in c)return c.value;var s=c.get;return void 0===s?void 0:s.call(u)}var l=Object.getPrototypeOf(a);if(null===l)return void 0;e=l,t=i,r=u,o=!0,c=l=void 0}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(47)["default"],o=r(51)["default"];t["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o?o(e,t):e.__proto__=t)},t.__esModule=!0},function(e,t){"use strict";t["default"]=function(e){return e&&e.__esModule?e:{"default":e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(23)["default"],o=r(44)["default"];t["default"]=function(){function e(e,t){var r=[],o=!0,a=!1,i=void 0;try{for(var u,c=n(e);!(o=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);o=!0);}catch(s){a=!0,i=s}finally{try{!o&&c["return"]&&c["return"]()}finally{if(a)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(o(Object(t)))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t.__esModule=!0},function(e,t,r){r(8),r(82),e.exports=r(1).Array.from},function(e,t,r){r(15),r(8),e.exports=r(80)},function(e,t,r){r(15),r(8),e.exports=r(81)},function(e,t,r){r(41),r(8),r(15),r(84),r(90),e.exports=r(1).Map},function(e,t,r){r(85),e.exports=r(1).Object.assign},function(e,t,r){var n=r(2);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){var n=r(2);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t,r){var n=r(2);r(86),e.exports=function(e,t){return n.getDesc(e,t)}},function(e,t,r){r(87),e.exports=r(1).Object.keys},function(e,t,r){r(88),e.exports=r(1).Object.setPrototypeOf},function(e,t,r){r(41),r(8),r(15),r(89),r(91),e.exports=r(1).Set},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,r){"use strict";var n=r(2),o=r(33),a=r(20),i={};r(7)(i,r(3)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n.create(i,{next:o(1,r)}),a(e,t+" Iterator")}},function(e,t,r){var n=r(3)("iterator"),o=!1;try{var a=[7][n]();a["return"]=function(){o=!0},Array.from(a,function(){throw 2})}catch(i){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a=[7],i=a[n]();i.next=function(){return{done:r=!0}},a[n]=function(){return i},e(a)}catch(u){}return r}},function(e,t){e.exports=!0},function(e,t,r){var n=r(2),o=r(21),a=r(28);e.exports=r(12)(function(){var e=Object.assign,t={},r={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(e){r[e]=e}),7!=e({},t)[n]||Object.keys(e({},r)).join("")!=o})?function(e,t){for(var r=o(e),i=arguments,u=i.length,c=1,s=n.getKeys,l=n.getSymbols,f=n.isEnum;u>c;)for(var d,p=a(i[c++]),h=l?s(p).concat(l(p)):s(p),g=h.length,v=0;g>v;)f.call(p,d=h[v++])&&(r[d]=p[d]);return r}:Object.assign},function(e,t,r){var n=r(2).getDesc,o=r(14),a=r(9),i=function(e,t){if(a(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=r(6)(Function.call,n(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:o(e,r),e}}({},!1):void 0),check:i}},function(e,t,r){"use strict";var n=r(1),o=r(2),a=r(11),i=r(3)("species");e.exports=function(e){var t=n[e];a&&t&&!t[i]&&o.setDesc(t,i,{configurable:!0,get:function(){return this}})}},function(e,t,r){var n=r(13),o="__core-js_shared__",a=n[o]||(n[o]={});e.exports=function(e){return a[e]||(a[e]={})}},function(e,t,r){var n=r(37),o=r(10);e.exports=function(e){return function(t,r){var a,i,u=String(o(t)),c=n(r),s=u.length;return 0>c||c>=s?e?"":void 0:(a=u.charCodeAt(c),55296>a||a>56319||c+1===s||(i=u.charCodeAt(c+1))<56320||i>57343?e?u.charAt(c):a:e?u.slice(c,c+2):(a-55296<<10)+(i-56320)+65536)}}},function(e,t,r){var n=r(9),o=r(22);e.exports=r(1).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},function(e,t,r){var n=r(16),o=r(3)("iterator"),a=r(5);e.exports=r(1).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(n(t))}},function(e,t,r){"use strict";var n=r(6),o=r(4),a=r(21),i=r(30),u=r(29),c=r(39),s=r(22);o(o.S+o.F*!r(73)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,l,f=a(e),d="function"==typeof this?this:Array,p=arguments,h=p.length,g=h>1?p[1]:void 0,v=void 0!==g,y=0,m=s(f);if(v&&(g=n(g,h>2?p[2]:void 0,2)),void 0==m||d==Array&&u(m))for(t=c(f.length),r=new d(t);t>y;y++)r[y]=v?g(f[y],y):f[y];else for(l=m.call(f),r=new d;!(o=l.next()).done;y++)r[y]=v?i(l,g,[o.value,y],!0):o.value;return r.length=y,r}})},function(e,t,r){"use strict";var n=r(71),o=r(31),a=r(5),i=r(38);e.exports=r(19)(Array,"Array",function(e,t){this._t=i(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(e,t,r){"use strict";var n=r(25);r(27)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=n.getEntry(this,e);return t&&t.v},set:function(e,t){return n.def(this,0===e?0:e,t)}},n,!0)},function(e,t,r){var n=r(4);n(n.S+n.F,"Object",{assign:r(75)})},function(e,t,r){var n=r(38);r(32)("getOwnPropertyDescriptor",function(e){return function(t,r){return e(n(t),r)}})},function(e,t,r){var n=r(21);r(32)("keys",function(e){return function(t){return e(n(t))}})},function(e,t,r){var n=r(4);n(n.S,"Object",{setPrototypeOf:r(76).set})},function(e,t,r){"use strict";var n=r(25);r(27)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return n.def(this,e=0===e?0:e,e)}},n)},function(e,t,r){var n=r(4);n(n.P,"Map",{toJSON:r(26)("Map")})},function(e,t,r){var n=r(4);n(n.P,"Set",{toJSON:r(26)("Set")})},function(e,t,r){t=e.exports=r(93)(),t.push([e.id,'.react-large-tree{color:#fff;background:navy;padding:0;max-width:330px;overflow:hidden;transition:all .2s}.react-large-tree .node{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;height:5rem;line-height:5rem;background:#00004d;transform:translate3d(0,0,0);padding-right:2em}.react-large-tree .node a{color:#fff}.react-large-tree .node.top-level{background:navy}.react-large-tree .node.sub-level{transform:translate3d(-1350px,0,0);animation:scoot-in;animation-duration:.2s;animation-iteration-count:1;animation-fill-mode:forwards}.react-large-tree .node.will-leave{transform:translate3d(0,0,0);animation:scoot-out;animation-duration:.2s;animation-iteration-count:1;animation-fill-mode:forwards}.react-large-tree .node input{display:inline-block;width:100%;height:5rem;line-height:5rem;outline:0;border:none;margin:0;font-size:inherit;background:inherit;color:inherit;padding:0}.react-large-tree .node input::selection{color:#000;background:#ff0}.react-large-tree .node i.__user-icon{margin-right:.5em;opacity:.3}.react-large-tree .node.drop-into{background:#1a1aff}.react-large-tree .node.drop-before{box-shadow:inset 0 4px 0 #fff}.react-large-tree .node.drop-after{box-shadow:inset 0 -4px 0 #fff}.react-large-tree .node:hover{background:#0000cd;color:#fff}.react-large-tree .node:before{content:"";display:inline-block;color:transparent;margin-right:.5em}.react-large-tree.dragging-true .node:hover{background:teal;box-shadow:inset 0 0 4px #fff}.react-large-tree.dragging-true .node a,.react-large-tree.dragging-true .node button{pointer-events:none}.react-large-tree .context-menu{background:#fff;color:navy;min-height:4em;border-left:4px solid navy;padding-left:.5em}.react-large-tree .expandable.expanded.top-level{box-shadow:inset 0 -1px 0 #fff}.react-large-tree .expandable.expanded:before{transform:rotate(90deg)}.react-large-tree .expand-button{background:none;border:none;color:#fff;margin:0;padding:0;margin-left:-1.5em;height:100%;width:1.5em}.react-large-tree .expand-button i{display:block;transition:transform .2s ease-out;font-style:normal;pointer-events:none}.react-large-tree .expand-button:hover i{transform:rotate(50deg)}.react-large-tree .expand-button:focus{box-shadow:none;outline:0}.react-large-tree .expanded .expand-button i{transform:rotate(90deg)}.react-large-tree .expanded .expand-button:hover i{transform:rotate(50deg)}.react-large-tree .example-enter{opacity:.01}.react-large-tree .example-enter.example-enter-active{opacity:1;transition:opacity .5s ease-in}.react-large-tree .example-leave{opacity:1}.react-large-tree .example-leave.example-leave-active{opacity:.01;transition:opacity .3s ease-in}.react-large-tree .context-button{position:absolute;top:0;right:0;background:none;border:none;padding:none;margin:none;margin-right:-2px;height:5rem;z-index:10;transition:all .3s ease-in-out}.react-large-tree .context-button:focus{outline:0;box-shadow:none}.react-large-tree .context-button:hover{background:#fff}.react-large-tree .context-button:hover circle{fill:navy}.react-large-tree .context-button svg{fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;pointer-events:none}.react-large-tree .context-button circle{fill:#fff}.react-large-tree .context-active .context-button{background:#fff}.react-large-tree .context-active .context-button circle{fill:navy}.react-large-tree .context-active .context-button:hover{background:transparent}.react-large-tree .context-active .context-button:hover circle{fill:#fff}.react-large-tree .search-result-highlight{box-shadow:0 3px 0 0 #ff0}.react-large-tree .node[draggable=true]{cursor:move;cursor:-webkit-grab}.react-large-tree .node[draggable=true] a,.react-large-tree .node[draggable=true] button{cursor:pointer}.react-large-tree.dragging-true,.react-large-tree.dragging-true *{cursor:move;cursor:-webkit-grabbing}.react-large-tree.dragging-true.drag-allowed-false,.react-large-tree.dragging-true.drag-allowed-false *{cursor:not-allowed}.react-large-tree.drag-allowed-false .node.drop-into{background:#f99}.react-large-tree.drag-allowed-false .node.drop-before{box-shadow:inset 0 4px 0 red}.react-large-tree.drag-allowed-false .node.drop-after{box-shadow:inset 0 -4px 0 red}@keyframes scoot-in{0%{transform:translate3d(-1350px,0,0)}to{transform:translate3d(0,0,0)}}@keyframes scoot-out{0%{transform:translate3d(0,0,0)}to{transform:translate3d(-1350px,0,0)}}',""]);
},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=f[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(u(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(u(n.parts[a],t));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],u=o[2],c=o[3],s={css:i,media:u,sourceMap:c};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function a(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function u(e,t){var r,n,o;if(t.singleton){var u=v++;r=g||(g=a()),n=c.bind(null,r,u,!1),o=c.bind(null,r,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=i(),n=l.bind(null,r),o=function(){r.parentNode.removeChild(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(),n=s.bind(null,r),o=function(){r.parentNode.removeChild(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var r=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function l(e,t){var r=t.css,n=(t.media,t.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var u=r[i],c=f[u.id];c.refs--,a.push(c)}if(e){var s=o(e);n(s,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(92);"string"==typeof n&&(n=[[e.id,n,""]]);r(94)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=React}]);