webpackJsonp([12],{1007:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return 1*e<10?"0"+e:e}function a(e,t){var n=new Date(t),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e}function u(e){var t=new Date;if("today"===e)return t.setHours(0),t.setMinutes(0),t.setSeconds(0),[(0,v.default)(t),(0,v.default)(t.getTime()+86399e3)];if("week"===e){var n=t.getDay();t.setHours(0),t.setMinutes(0),t.setSeconds(0),0===n?n=6:n-=1;var r=t.getTime()-864e5*n;return[(0,v.default)(r),(0,v.default)(r+604799e3)]}if("month"===e){var a=t.getFullYear(),u=t.getMonth(),i=(0,v.default)(t).add(1,"months"),l=i.year(),c=i.month();return[(0,v.default)(a+"-"+o(u+1)+"-01 00:00:00"),(0,v.default)((0,v.default)(l+"-"+o(c+1)+"-01 00:00:00").valueOf()-1e3)]}if("year"===e){var f=t.getFullYear();return[(0,v.default)(f+"-01-01 00:00:00"),(0,v.default)(f+"-12-31 23:59:59")]}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return e.forEach(function(e){var r=e;r.path=(t+"/"+(r.path||"")).replace(/\/+/g,"/"),r.exact=!0,r.children&&!r.component?n.push.apply(n,(0,h.default)(i(r.children,r.path))):(r.children&&r.component&&(r.exact=!1),n.push(r))}),n}function l(e){var t=["\u89d2","\u5206"],n=["\u96f6","\u58f9","\u8d30","\u53c1","\u8086","\u4f0d","\u9646","\u67d2","\u634c","\u7396"],r=[["\u5143","\u4e07","\u4ebf"],["","\u62fe","\u4f70","\u4edf"]],o=Math.abs(e),a="";t.forEach(function(e,t){a+=(n[Math.floor(10*o*Math.pow(10,t))%10]+e).replace(/\u96f6./,"")}),a=a||"\u6574",o=Math.floor(o);for(var u=0;u<r[0].length&&o>0;u+=1){for(var i="",l=0;l<r[1].length&&o>0;l+=1)i=n[o%10]+r[1][l]+i,o=Math.floor(o/10);a=i.replace(/(\u96f6.)*\u96f6$/,"").replace(/^$/,"\u96f6")+r[0][u]+a}return a.replace(/(\u96f6.)*\u96f6\u5143/,"\u5143").replace(/(\u96f6.)+/g,"\u96f6").replace(/^\u6574$/,"\u96f6\u5143\u6574")}function c(e,t){e===t&&console.warn("Two path are equal!");var n=e.split("/"),r=t.split("/");return r.every(function(e,t){return e===n[t]})?1:n.every(function(e,t){return e===r[t]})?2:3}function f(e,t){var n=(0,p.default)(t).filter(function(t){return 0===t.indexOf(e)&&t!==e});n=n.map(function(t){return t.replace(e,"")});var r=[];r.push(n[0]);for(var o=1;o<n.length;o+=1)!function(e){var t=!1;t=r.every(function(t){return 3===c(t,n[e])}),r=r.filter(function(t){return 1!==c(t,n[e])}),t&&r.push(n[e])}(o);return r.map(function(r){var o=!n.some(function(e){return e!==r&&1===c(e,r)});return{key:""+e+r,path:""+e+r,component:t[""+e+r].component,exact:o}})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(301),p=r(s),d=n(776),h=r(d);t.fixedZero=o,t.dateFtt=a,t.getTimeDistance=u,t.getPlainNode=i,t.digitUppercase=l,t.getRoutes=f;var m=n(186),v=r(m)},1158:function(e,t,n){"use strict";function r(e){var t=e[e.length-1];if(t)return t.title}function o(e){var t=e||"";t!==document.title&&(document.title=t)}function a(){}var u=n(3),i=n(6),l=n(1159);a.prototype=Object.create(u.Component.prototype),a.displayName="DocumentTitle",a.propTypes={title:i.string.isRequired},a.prototype.render=function(){return this.props.children?u.Children.only(this.props.children):null},e.exports=l(r,o)(a)},1159:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function p(){h=e(d.map(function(e){return e.props})),m.canUseDOM?t(h):n&&(h=n(h))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var d=[],h=void 0,m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.createElement(i,this.props)},t}(l.Component);return m.displayName="SideEffect("+r(i)+")",m.canUseDOM=f.canUseDOM,m}}var l=n(3),c=r(l),f=r(n(1160)),s=r(n(791));e.exports=i},1160:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0!==(r=function(){return a}.call(t,n,t,e))&&(e.exports=r)}()},1234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=r(o),u=n(94),i=r(u),l=n(1235),c=r(l);t.default=function(e){var t=e.className,n=e.links,r=e.copyright,o=(0,i.default)(c.default.globalFooter,t);return a.default.createElement("div",{className:o},n&&a.default.createElement("div",{className:c.default.links},n.map(function(e){return a.default.createElement("a",{key:e.title,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),r&&a.default.createElement("div",{className:c.default.copyright},r))},e.exports=t.default},1235:function(e,t){e.exports={globalFooter:"globalFooter___3DBsQ",links:"links___6ev0g",copyright:"copyright___2RCkh"}},1236:function(e,t,n){e.exports=n.p+"static/logo.a555897d.png"},1473:function(e,t){e.exports={container:"container___13qaB",top:"top___15P5h",header:"header___wZzTk",logo:"logo___3ETkL",title:"title___1S-Sy",desc:"desc___2SfO0",footer:"footer___1_Jtj"}},760:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(769),a=r(o),u=n(63),i=r(u),l=n(66),c=r(l),f=n(64),s=r(f),p=n(65),d=r(p),h=n(3),m=r(h),v=n(185),y=n(1158),g=r(y),_=n(1234),w=r(_),E=n(1473),b=r(E),M=n(1236),x=r(M),k=n(1007),O=m.default.createElement("div",null,"Hi, net Presents"),j=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"getPageTitle",value:function(){var e=this.props,t=e.routerData,n=e.location,r=n.pathname,o="Hi, net";return t[r]&&t[r].name&&(o=t[r].name+" - Hi, net"),o}},{key:"render",value:function(){var e=this.props,t=e.routerData,n=e.match;return m.default.createElement(g.default,{title:this.getPageTitle()},m.default.createElement("div",{className:b.default.container},m.default.createElement("div",{className:b.default.top},m.default.createElement("div",{className:b.default.header},m.default.createElement(v.Link,{to:"/"},m.default.createElement("img",{alt:"logo",className:b.default.logo,src:x.default}),m.default.createElement("span",{className:b.default.title},"Hi, net"))),m.default.createElement("div",{className:b.default.desc},"Calculate the world")),(0,k.getRoutes)(n.path,t).map(function(e){return m.default.createElement(v.Route,{key:e.key,path:e.path,component:e.component,exact:e.exact})}),m.default.createElement(w.default,{className:b.default.footer,copyright:O})))}}]),t}(m.default.PureComponent);t.default=j,e.exports=t.default},769:function(e,t,n){e.exports={default:n(303),__esModule:!0}},776:function(e,t,n){"use strict";t.__esModule=!0;var r=n(810),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,o.default)(e)}},791:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),u=Object.keys(t);if(a.length!==u.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!i(c))return!1;var f=e[c],s=t[c];if(!1===(o=n?n.call(r,f,s,c):void 0)||void 0===o&&f!==s)return!1}return!0}},810:function(e,t,n){e.exports={default:n(302),__esModule:!0}}});