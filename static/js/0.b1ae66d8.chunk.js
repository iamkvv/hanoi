webpackJsonp([0,1,2,3,4,5,6,7],{150:function(e,t,n){"use strict";(function(e){function n(e){return parseFloat(e)||0}function r(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return t.reduce(function(t,r){return t+n(e["border-"+r+"-width"])},0)}function i(e){for(var t=["top","right","bottom","left"],r={},i=0,o=t;i<o.length;i+=1){var a=o[i],s=e["padding-"+a];r[a]=n(s)}return r}function o(e){var t=e.getBBox();return u(0,0,t.width,t.height)}function a(e){var t=e.clientWidth,o=e.clientHeight;if(!t&&!o)return x;var a=w(e).getComputedStyle(e),l=i(a),c=l.left+l.right,d=l.top+l.bottom,f=n(a.width),p=n(a.height);if("border-box"===a.boxSizing&&(Math.round(f+c)!==t&&(f-=r(a,"left","right")+c),Math.round(p+d)!==o&&(p-=r(a,"top","bottom")+d)),!s(e)){var h=Math.round(f+c)-t,m=Math.round(p+d)-o;1!==Math.abs(h)&&(f-=h),1!==Math.abs(m)&&(p-=m)}return u(l.left,l.top,f,p)}function s(e){return e===w(e).document.documentElement}function l(e){return f?E(e)?o(e):a(e):x}function c(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return _(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function u(e,t,n,r){return{x:e,y:t,width:n,height:r}}var d=function(){function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return"undefined"!==typeof Map?Map:function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){var n=this;void 0===t&&(t=null);for(var r=0,i=n.__entries__;r<i.length;r+=1){var o=i[r];e.call(t,o[1],o[0])}},Object.defineProperties(t.prototype,n),t}()}(),f="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,p=function(){return"undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")()}(),h=function(){return"function"===typeof requestAnimationFrame?requestAnimationFrame.bind(p):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),m=2,v=function(e,t){function n(){o&&(o=!1,e()),a&&i()}function r(){h(n)}function i(){var e=Date.now();if(o){if(e-s<m)return;a=!0}else o=!0,a=!1,setTimeout(r,t);s=e}var o=!1,a=!1,s=0;return i},b=["top","right","bottom","left","width","height","size","weight"],g="undefined"!==typeof MutationObserver,y=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=v(this.refresh.bind(this),20)};y.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},y.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},y.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},y.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},y.prototype.connect_=function(){f&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},y.prototype.disconnect_=function(){f&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},y.prototype.onTransitionEnd_=function(e){var t=e.propertyName;void 0===t&&(t=""),b.some(function(e){return!!~t.indexOf(e)})&&this.refresh()},y.getInstance=function(){return this.instance_||(this.instance_=new y),this.instance_},y.instance_=null;var _=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n+=1){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},w=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||p},x=u(0,0,0,0),E=function(){return"undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof w(e).SVGGraphicsElement}:function(e){return e instanceof w(e).SVGElement&&"function"===typeof e.getBBox}}(),O=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=u(0,0,0,0),this.target=e};O.prototype.isActive=function(){var e=l(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},O.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var C=function(e,t){var n=c(t);_(this,{target:e,contentRect:n})},S=function(e,t,n){if(this.activeObservations_=[],this.observations_=new d,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n};S.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof w(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new O(e)),this.controller_.addObserver(this),this.controller_.refresh())}},S.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof w(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},S.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},S.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},S.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new C(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},S.prototype.clearActive=function(){this.activeObservations_.splice(0)},S.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!==typeof WeakMap?new WeakMap:new d,M=function(e){if(!(this instanceof M))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=y.getInstance(),n=new S(e,t,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){M.prototype[e]=function(){return(t=k.get(this))[e].apply(t,arguments);var t}});var T=function(){return"undefined"!==typeof p.ResizeObserver?p.ResizeObserver:M}();t.a=T}).call(t,n(2))},41:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=n.n(a),l=n(42),c=n.n(l),u=n(40),d=n.n(u),f=n(150),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){var e,n,o,a;r(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.ro=new f.a(function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value,l=s.contentRect,c=l.left,u=l.top,d=l.width,f=l.height;console.log("Element:",s.target),console.log("Element's size: "+d+"px x "+f+"px"),console.log("Element's paddings: "+u+"px ; "+c+"px")}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}),a=n,i(o,a)}return o(t,e),p(t,[{key:"componentDidMount",value:function(){this.ro.observe(c.a.findDOMNode(this))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.style,r=(e.children,e.onpanelclick),i=e.id;return s.a.createElement("div",{id:i,onClick:r,className:t.pegpanel,style:n},s.a.createElement("div",{className:t.lpan}),s.a.createElement("div",{className:t.rpan}))}}]),t}(s.a.Component),m={rpan:{borderLeft:"2px solid #55b4fa",width:"50%"},lpan:{borderRight:"2px solid blue",width:"50%"},pegpanel:{display:"flex",justifyContent:"center",width:"100%",borderRadius:15,height:"101%",backgroundColor:"#e5fdff",zIndex:0,opacity:1,cursor:"pointer",pointerEvents:"auto","&:hover":{opacity:.91,backgroundColor:"#49fefe"}}};t.default=d()(m)(h)},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s=function(e){var t=e.classes,n=e.children,r=e.style;return i.a.createElement("div",{style:r,className:t.blin},n)},l={blin:{backgroundColor:function(e){return e.bcolor},width:function(e){return e.bwidth},borderRadius:5,height:25,textAlign:"center",zIndex:2,pointerEvents:"none"}};t.default=a()(l)(s)},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s={bllabel:{marginBottom:2,letterSpacing:1},rangewrapper:{display:"flex",flexDirection:"column",width:150,margin:"5px auto",padding:"0 5px"},blcounts:{display:"flex",flexDirection:"row",width:175,"& div":{fontSize:"9px",width:38,textAlign:"left"}},inputcounts:{width:150,margin:0,padding:0}},l=function(e){var t=e.classes,n=e.blinCount,r=e.onChangeCount,o=e.isStarted;return i.a.createElement("div",null,i.a.createElement("div",{className:t.rangewrapper},i.a.createElement("div",{className:t.bllabel},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0438\u0441\u043a\u043e\u0432:"),i.a.createElement("div",null,i.a.createElement("input",{disabled:o,className:t.inputcounts,type:"range",onChange:r,value:n,min:3,max:7})),i.a.createElement("div",null,i.a.createElement("div",{className:t.blcounts},i.a.createElement("div",null,"3"),i.a.createElement("div",null,"4"),i.a.createElement("div",null,"5"),i.a.createElement("div",null,"6"),i.a.createElement("div",null,"7")))))};t.default=a()(s)(l)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s={infocontainer:{color:"green",fontWeight:"bold","@media  (min-width:600px)":{width:150,margin:"15px auto 0px auto",borderTop:"1px solid silver",paddingTop:10},"@media  (max-width:600px)":{marginTop:"12px",marginLeft:"10px","&  div":{marginBottom:15}}},win:{"@media  (min-width:600px)":{textAlign:"center",fontSize:45,margin:0},"@media  (max-width:600px)":{fontSize:26,marginTop:-35,marginLeft:70}}},l=function(e){var t=Math.floor(e/60);return"\u0412\u0440\u0435\u043c\u044f: "+t+" \u043c\u0438\u043d. "+(e-60*t)+" \u0441\u0435\u043a."},c=function(e,t){return"H"===e?i.a.createElement("p",{className:t},"\ud83c\udfc5"):i.a.createElement("p",{className:t},"\ud83d\udc4c")},u=function(e){var t=e.classes,n=e.isStarted,r=e.time,o=e.moves,a=e.isWin,s=e.mode;return n?i.a.createElement("div",{className:t.infocontainer},i.a.createElement("div",null," ",l(r)," "),i.a.createElement("div",null," \u0425\u043e\u0434\u044b:\xa0\xa0 ",o," "),a?c(s,t.win):null):null};t.default=a()(s)(u)},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s=n(41),l={numpeg:{textAlign:"center",gridRow:"2/2",gridColumn:function(e){return e.num},color:"blue",border:"1px solid blue",borderRadius:20,height:20,width:20,fontSize:14,lineHeight:"20px",alignSelf:"center"}},c=function(e){var t=e.classes,n=e.children;return i.a.createElement("div",{className:t.numpeg},n)},u=a()(l)(c),d=function(e){var t=e.classes,n=e.children,r=e.onpanelclick;return i.a.createElement("div",{className:t.towergrid},[1,2,3].map(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{num:e},e),i.a.createElement(s.default,{id:e,onpanelclick:r,style:{gridArea:"3 / "+e+" / 11 / "+(e+1)}}))}),i.a.createElement("p",{className:t.instruct},"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0443 \u043d\u0430 2-\u0439 \u0441\u0442\u0435\u0440\u0436\u0435\u043d\u044c. \u0411\u043e\u043b\u044c\u0448\u0438\u0439 \u0434\u0438\u0441\u043a \u043d\u0435\u043b\u044c\u0437\u044f \u043a\u043b\u0430\u0441\u0442\u044c \u043d\u0430 \u043c\u0435\u043d\u044c\u0448\u0438\u0439."),n)},f={towergrid:{display:"grid",position:"relative",alignContent:"end",justifyItems:"center",gridAutoFlow:"column","@media  (min-width:600px)":{gridTemplateRows:"20px 25px 70px  repeat(7,25px) 55px",gridTemplateColumns:"repeat(3,1fr) minmax(170px, 1fr)"},"@media  (max-width:600px)":{gridTemplateRows:"80px 25px 70px  repeat(7,25px) 55px",gridTemplateColumns:"repeat(3,1fr)"},gridGap:"2px 10px",backgroundColor:"#f5f5f5",padding:20,width:"auto",minWidth:500,color:"white"},instruct:{borderTop:"1px solid silver",alignSelf:"stretch",paddingTop:10,color:"green",fontSize:16,gridArea:"11 / 1 / 12 / 6"}},p=a()(f);t.default=p(d)},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s={btncontainer:{"@media  (min-width:600px)":{width:150,margin:"15px auto 0px auto",borderTop:"1px solid silver",paddingTop:10},"@media  (max-width:600px)":{marginTop:"10px","& > button":{display:"block",marginBottom:"9px"}},"& > button":{width:67,marginRight:8,backgroundImage:"linear-gradient(to bottom, #82c4f2, #0a5be4)",borderRadius:28,color:"#ffffff",fontSize:12,letterSpacing:"1px",padding:"0px 8px 2px 8px",border:"1px solid silver",cursor:"pointer"},"& > button:hover":{background:"#3cb0fd",backgroundImage:"linear-gradient(to bottom, #3cb0fd, #3498db)"},"& > button:disabled":{cursor:"default",color:"lightgray"}}},l=function(e){var t=e.classes,n=e.onStart,r=e.onRestart;return i.a.createElement("div",{className:t.btncontainer},i.a.createElement("button",{onClick:n},"\u0421\u0442\u0430\u0440\u0442"),i.a.createElement("button",{onClick:r},"\u0421\u0442\u043e\u043f"))};t.default=a()(s)(l)},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),a=n.n(o),s={modecontainer:{"@media  (min-width:600px)":{width:150,margin:"15px auto 0px auto",borderTop:"1px solid silver",paddingTop:10,"& label input":{margin:"2px 2px",cursor:"pointer"},"& label":{cursor:"pointer",marginRight:10},"& label div":{display:"inline-block",marginRight:10}},"@media  (max-width:600px)":{width:"auto",margin:"6px 16px","& label":{display:"block",cursor:"pointer"},"& label  input":{margin:"3px 3px 3px 0"},"& label div":{display:"inline-block",width:"55px"}},"& > label > input:before":{content:'""',width:12,height:12,display:"block",zIndex:0,borderRadius:20,position:"relative"},"& > label > input:hover:before":{border:"2px solid blue",opacity:.5,top:-2,left:-2}}},l=function(e){var t=e.classes,n=e.data,r=e.onChange,o=e.mode,a=e.isStarted;return i.a.createElement("div",{className:t.modecontainer},i.a.createElement("div",{style:{letterSpacing:"1px"}},"\u0420\u0435\u0436\u0438\u043c:"),n.map(function(e){return i.a.createElement("label",null,i.a.createElement("div",{style:{}},e.label),i.a.createElement("input",{disabled:a,onChange:r,checked:e.value===o,type:"radio",value:e.value}))}))};t.default=a()(s)(l)},51:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=n.n(s),c=n(42),u=(n.n(c),n(40)),d=n.n(u),f=n(46),p=n(43),h=n(44),m=n(47),v=n(48),b=n(45),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y={mancontainer:{display:"flex",flexDirection:"column",gridArea:"2 / 4 / 11 / 5",width:"100%",padding:"5px 0px",border:"1px solid blue",borderRadius:15,color:"blue",fontSize:"12px",backgroundColor:"#ffe1e1",boxShadow:"3px 3px #d2c5c5","@media  (min-width:600px)":{flexDirection:"column",gridArea:"2 / 4 / 11 / 5"},"@media  (max-width:600px)":{flexDirection:"row",gridArea:"1 / 1 / 2 / 4",height:65}}},_=["violet","indigo","blue","green","yellow","orange","red"],w=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.n=0,n.stout=[],n.onStart=function(e){n.setState({isStarted:!0},function(){var e=setInterval(function(){n.setState(function(t,n){return{tid:e,time:t.time+1}})},1e3)}),"A"===n.state.mode&&n.solveHanoi(n.state.currBlinCount,1,2)},n.onRestart=function(e){for(var t=n.state.currBlinCount,r=0;r<n.stout.length;r++)clearTimeout(n.stout[r]);n.setState({time:0,moves:0,isStarted:!1,isWin:!1,blins:n.props.allBlins.slice(7-t).map(function(e){return Object.assign({},e)})}),clearInterval(n.state.tid),n.n=0},n.onChangeMode=function(e){n.setState({mode:e.target.value})},n.onChangeCount=function(e){var t=Number(e.target.value);n.setState({currBlinCount:t},function(){n.setState({blins:n.props.allBlins.slice(7-t).map(function(e){return Object.assign({},e)})})})},n.checkWin=function(){var e=n.state,t=e.blins,r=e.currBlinCount;if(t.filter(function(e){return 2===e.col&&null!=e.row}).length===r){n.setState(function(e,t){return{isWin:!0}}),clearInterval(n.state.tid);for(var i=0;i<n.stout.length;i++)clearTimeout(n.stout[i])}},n.onPanelClick=function(e){if(n.state.isStarted&&!n.state.isWin&&"A"!==n.state.mode){var t=!1,i=n.state.blins,o=Number(e.target.parentElement.id);if(0!=o){var a=n.state.blins.map(function(e){return Object.assign({},e)}),s=i.filter(function(e){return e.col===o&&null!=e.row}),l=Math.min.apply(Math,r(s.map(function(e){return e.size}))),c=i.some(function(e){return!0===e.active}),u=i.findIndex(function(e){return!0===e.active});if(s.length||c){if(s.length>0&&!c){var d=i.findIndex(function(e){return e.col===o&&e.size===l});a[d]=Object.assign({},a[d],{active:!0,row:null})}else if(!s.length&&c)a[u]=Object.assign({},a[u],{col:o,row:7,active:!1}),t=!0;else if(s.length>0&&c){if(l<a[u].size)return;a[u]=Object.assign({},a[u],{col:o,active:!1,row:7-s.length}),t=!0}else alert("??");t?(n.setState(function(e,t){return{blins:a,moves:e.moves+1}}),setTimeout(function(){n.checkWin()},0)):n.setState({blins:a})}}}},n.newArr=function(e,t,n){try{var i=e.blins.filter(function(e){return e.col===t&&null!=e.row}),o=e.blins.filter(function(e){return e.col===n&&null!=e.row}),a=Math.min.apply(Math,r(i.map(function(e){return e.size}))),s=e.blins.findIndex(function(e,n,r){return e.col===t&&e.size===a});Object.assign(e.blins[s],{col:n},{row:7-o.length});return e.blins}catch(e){console.log(e)}},n.moveBlin2=function(e,t,r){n.stout.push(setTimeout(function(){console.log("???",n.state.time," <===  T",e," -> ",t),n.setState(function(r,i){return{moves:r.moves+1,blins:n.newArr(r,e,t)}}),n.checkWin()},r))},n.moveDisk=function(e,t){setTimeout(function(){console.log("moveDisk: ",e+" -> "+t)},2e3)},n.solveHanoi=function(e,t,n){if(!(e<1)){var r=3-(t-1)-(n-1)+1;console.log("solveHanoi--",e," --| "+t+" -- "+n+" -- "+r),this.solveHanoi(e-1,t,r),this.n=this.n+500,this.moveBlin2(t,n,this.n),console.log("solveHanoi--22 =",e," --| "+t+" -- "+n+" -- "+r),this.solveHanoi(e-1,r,n)}},n.state={isStarted:!1,time:0,tid:null,moves:0,mode:"H",currBlinCount:e.startblinCount,rangedisabled:!1,blins:e.allBlins.slice(7-e.startblinCount).map(function(e){return Object.assign({},e)}),isWin:!1},n.onRestart=n.onRestart.bind(n),n.onStart=n.onStart.bind(n),n.onPanelClick=n.onPanelClick.bind(n),n.checkWin=n.checkWin.bind(n),n.moveDisk=n.moveDisk.bind(n),n}return a(t,e),g(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.state.tid);for(var e=0;e<this.stout.length;e++)clearTimeout(this.stout[e])}},{key:"render",value:function(){var e=this.state,t=(e.blins,e.currBlinCount),n=e.rangedisabled,r=e.mode,i=e.time,o=e.moves,a=e.isStarted,s=e.isWin,c=this.props.classes;return l.a.createElement(f.default,{onpanelclick:this.onPanelClick,rowcount:7},this.state.blins.map(function(e,t){return l.a.createElement(p.default,{bcolor:e.color,bwidth:100-10*(7-t)+"%",style:{gridColumn:e.col,gridRow:e.active?3:e.row+3}},t+1)}),l.a.createElement("div",{className:c.mancontainer},l.a.createElement(h.default,{isStarted:a,blinCount:t,disabled:n,onChangeCount:this.onChangeCount}),l.a.createElement(v.default,{onChange:this.onChangeMode,mode:r,isStarted:a,data:[{label:"\u0410\u0432\u0442\u043e",value:"A"},{label:"\u0412\u0440\u0443\u0447\u043d\u0443\u044e",value:"H"}]}),l.a.createElement(m.default,{onStart:this.onStart,onRestart:this.onRestart}),l.a.createElement(b.default,{time:i,moves:o,isStarted:a,isWin:s,mode:r})))}}]),t}(l.a.Component);w.defaultProps={allBlins:function(){for(var e=[],t=0;t<7;t++){var n=Object.assign({},{active:!1,size:t,col:1,row:t+1,color:_[t]});e.push(n)}return e}(),startblinCount:5},t.default=d()(y)(w)}});
//# sourceMappingURL=0.b1ae66d8.chunk.js.map