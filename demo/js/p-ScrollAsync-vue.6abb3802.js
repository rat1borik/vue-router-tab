(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-ScrollAsync-vue","p-ScrollPosition-vue"],{"5b65":function(t,l,n){},"838e":function(t,l,n){"use strict";n.r(l);var e,s,i=n("fabb"),a={name:"ScrollAsync",extends:i["default"],activated:function(){var t=this;this.list=[],this.loading=!0,setTimeout((function(){t.list=new Array(100),t.loading=!1,t.$emit("page-loaded")}),1e3*Math.random())}},c=a,o=n("2877"),r=Object(o["a"])(c,e,s,!1,null,null,null);l["default"]=r.exports},c16a:function(t,l,n){"use strict";n("5b65")},fabb:function(t,l,n){"use strict";n.r(l);var e=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"scroll-page"},[n("div",{staticClass:"custom-scroller"},[t.loading?n("div",{staticClass:"page-loading"},[t._v("加载中...")]):t._e(),t._l(t.list,(function(l,e){return n("p",{key:e},[t._v(" 这里是滚动内容的第 "),n("strong",[t._v(t._s(e+1))]),t._v(" 行 ")])}))],2),t.multi?n("div",{staticClass:"custom-scroller-1"},t._l(t.list,(function(l,e){return n("p",{key:e},[t._v(" 这里是滚动内容的第 "),n("strong",[t._v(t._s(e+1))]),t._v(" 行 ")])})),0):t._e()])},s=[],i={name:"ScrollPosition",pageScroller:".custom-scroller",data:function(){return{loading:!1,list:new Array(100),multi:!1}}},a=i,c=(n("c16a"),n("2877")),o=Object(c["a"])(a,e,s,!1,null,"e4269cce",null);l["default"]=o.exports}}]);
//# sourceMappingURL=p-ScrollAsync-vue.6abb3802.js.map