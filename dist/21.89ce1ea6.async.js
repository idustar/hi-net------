webpackJsonp([21],{1153:function(e,r,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.query500=r.query403=r.query404=void 0;var n=t(183),a=u(n),c=t(314),s=u(c),f=(r.query404=function(){var e=(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/404"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),r.query403=function(){var e=(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/403"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),r.query500=function(){var e=(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/500"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t(315)),i=u(f)},735:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=t(183),n=function(e){return e&&e.__esModule?e:{default:e}}(u),a=t(1153);r.default={namespace:"error",state:{error:"",isloading:!1},effects:{query403:n.default.mark(function e(r,t){var u=t.call,c=t.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a.query403);case 2:return e.next=4,c({type:"trigger",payload:"403"});case 4:case"end":return e.stop()}},e,this)}),query500:n.default.mark(function e(r,t){var u=t.call,c=t.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a.query500);case 2:return e.next=4,c({type:"trigger",payload:"500"});case 4:case"end":return e.stop()}},e,this)}),query404:n.default.mark(function e(r,t){var u=t.call,c=t.put;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a.query404);case 2:return e.next=4,c({type:"trigger",payload:"404"});case 4:case"end":return e.stop()}},e,this)})},reducers:{trigger:function(e,r){return{error:r.payload}}}},e.exports=r.default}});