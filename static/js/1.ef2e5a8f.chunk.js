webpackJsonp([1,2],{150:function(e,t,n){"use strict";(function(e){function n(e){return parseFloat(e)||0}function r(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return t.reduce(function(t,r){return t+n(e["border-"+r+"-width"])},0)}function i(e){for(var t=["top","right","bottom","left"],r={},i=0,o=t;i<o.length;i+=1){var s=o[i],a=e["padding-"+s];r[s]=n(a)}return r}function o(e){var t=e.getBBox();return h(0,0,t.width,t.height)}function s(e){var t=e.clientWidth,o=e.clientHeight;if(!t&&!o)return E;var s=w(e).getComputedStyle(e),c=i(s),u=c.left+c.right,f=c.top+c.bottom,d=n(s.width),l=n(s.height);if("border-box"===s.boxSizing&&(Math.round(d+u)!==t&&(d-=r(s,"left","right")+u),Math.round(l+f)!==o&&(l-=r(s,"top","bottom")+f)),!a(e)){var p=Math.round(d+u)-t,v=Math.round(l+f)-o;1!==Math.abs(p)&&(d-=p),1!==Math.abs(v)&&(l-=v)}return h(c.left,c.top,d,l)}function a(e){return e===w(e).document.documentElement}function c(e){return d?O(e)?o(e):s(e):E}function u(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return g(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function h(e,t,n,r){return{x:e,y:t,width:n,height:r}}var f=function(){function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return"undefined"!==typeof Map?Map:function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){var n=this;void 0===t&&(t=null);for(var r=0,i=n.__entries__;r<i.length;r+=1){var o=i[r];e.call(t,o[1],o[0])}},Object.defineProperties(t.prototype,n),t}()}(),d="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,l=function(){return"undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")()}(),p=function(){return"function"===typeof requestAnimationFrame?requestAnimationFrame.bind(l):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),v=2,b=function(e,t){function n(){o&&(o=!1,e()),s&&i()}function r(){p(n)}function i(){var e=Date.now();if(o){if(e-a<v)return;s=!0}else o=!0,s=!1,setTimeout(r,t);a=e}var o=!1,s=!1,a=0;return i},_=["top","right","bottom","left","width","height","size","weight"],m="undefined"!==typeof MutationObserver,y=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b(this.refresh.bind(this),20)};y.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},y.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},y.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},y.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},y.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),m?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},y.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},y.prototype.onTransitionEnd_=function(e){var t=e.propertyName;void 0===t&&(t=""),_.some(function(e){return!!~t.indexOf(e)})&&this.refresh()},y.getInstance=function(){return this.instance_||(this.instance_=new y),this.instance_},y.instance_=null;var g=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n+=1){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},w=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||l},E=h(0,0,0,0),O=function(){return"undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof w(e).SVGGraphicsElement}:function(e){return e instanceof w(e).SVGElement&&"function"===typeof e.getBBox}}(),x=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=h(0,0,0,0),this.target=e};x.prototype.isActive=function(){var e=c(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},x.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var M=function(e,t){var n=u(t);g(this,{target:e,contentRect:n})},A=function(e,t,n){if(this.activeObservations_=[],this.observations_=new f,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n};A.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof w(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new x(e)),this.controller_.addObserver(this),this.controller_.refresh())}},A.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof w(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},A.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},A.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},A.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new M(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},A.prototype.clearActive=function(){this.activeObservations_.splice(0)},A.prototype.hasActive=function(){return this.activeObservations_.length>0};var T="undefined"!==typeof WeakMap?new WeakMap:new f,R=function(e){if(!(this instanceof R))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=y.getInstance(),n=new A(e,t,this);T.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){R.prototype[e]=function(){return(t=T.get(this))[e].apply(t,arguments);var t}});var k=function(){return"undefined"!==typeof l.ResizeObserver?l.ResizeObserver:R}();t.a=k}).call(t,n(2))},41:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n.n(s),c=n(42),u=n.n(c),h=n(40),f=n.n(h),d=n(150),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){var e,n,o,s;r(this,t);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.ro=new d.a(function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var a=o.value,c=a.contentRect,u=c.left,h=c.top,f=c.width,d=c.height;console.log("Element:",a.target),console.log("Element's size: "+f+"px x "+d+"px"),console.log("Element's paddings: "+h+"px ; "+u+"px")}}catch(e){r=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}}),s=n,i(o,s)}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.ro.observe(u.a.findDOMNode(this))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.style,r=(e.children,e.onpanelclick),i=e.id;return a.a.createElement("div",{id:i,onClick:r,className:t.pegpanel,style:n},a.a.createElement("div",{className:t.lpan}),a.a.createElement("div",{className:t.rpan}))}}]),t}(a.a.Component),v={rpan:{borderLeft:"2px solid #55b4fa",width:"50%"},lpan:{borderRight:"2px solid blue",width:"50%"},pegpanel:{display:"flex",justifyContent:"center",width:"100%",borderRadius:15,height:"101%",backgroundColor:"#e5fdff",zIndex:0,opacity:1,cursor:"pointer",pointerEvents:"auto","&:hover":{opacity:.91,backgroundColor:"#49fefe"}}};t.default=f()(v)(p)},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(40),s=n.n(o),a=n(41),c={numpeg:{textAlign:"center",gridRow:"2/2",gridColumn:function(e){return e.num},color:"blue",border:"1px solid blue",borderRadius:20,height:20,width:20,fontSize:14,lineHeight:"20px",alignSelf:"center"}},u=function(e){var t=e.classes,n=e.children;return i.a.createElement("div",{className:t.numpeg},n)},h=s()(c)(u),f=function(e){var t=e.classes,n=e.children,r=e.onpanelclick;return i.a.createElement("div",{className:t.towergrid},[1,2,3].map(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{num:e},e),i.a.createElement(a.default,{id:e,onpanelclick:r,style:{gridArea:"3 / "+e+" / 11 / "+(e+1)}}))}),i.a.createElement("p",{className:t.instruct},"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0443 \u043d\u0430 2-\u0439 \u0441\u0442\u0435\u0440\u0436\u0435\u043d\u044c. \u0411\u043e\u043b\u044c\u0448\u0438\u0439 \u0434\u0438\u0441\u043a \u043d\u0435\u043b\u044c\u0437\u044f \u043a\u043b\u0430\u0441\u0442\u044c \u043d\u0430 \u043c\u0435\u043d\u044c\u0448\u0438\u0439."),n)},d={towergrid:{display:"grid",position:"relative",alignContent:"end",justifyItems:"center",gridAutoFlow:"column","@media  (min-width:600px)":{gridTemplateRows:"20px 25px 70px  repeat(7,25px) 55px",gridTemplateColumns:"repeat(3,1fr) minmax(170px, 1fr)"},"@media  (max-width:600px)":{gridTemplateRows:"80px 25px 70px  repeat(7,25px) 55px",gridTemplateColumns:"repeat(3,1fr)"},gridGap:"2px 10px",backgroundColor:"#f5f5f5",padding:20,width:"auto",minWidth:500,color:"white"},instruct:{borderTop:"1px solid silver",alignSelf:"stretch",paddingTop:10,color:"green",fontSize:16,gridArea:"11 / 1 / 12 / 6"}},l=s()(d);t.default=l(f)}});
//# sourceMappingURL=1.ef2e5a8f.chunk.js.map