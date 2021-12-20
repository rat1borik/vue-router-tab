(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{456:function(t,e,r){"use strict";r.r(e);var a=r(31),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"移除-routertab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移除-routertab"}},[t._v("#")]),t._v(" 移除 RouterTab")]),t._v(" "),r("p",[t._v("相对于单页应用，多页签框架为用户同时处理多个业务时的跨页操作带来了更好的体验，但这也使得我们要处理更多的页面交互场景，代码相对会更加复杂。")]),t._v(" "),r("p",[t._v("如果你的项目不再需要使用 RouterTab，你可以通过下面的步骤来移除 RouterTab。")]),t._v(" "),r("h2",{attrs:{id:"一、替换-this-tabs-调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、替换-this-tabs-调用"}},[t._v("#")]),t._v(" 一、替换 "),r("code",[t._v("this.$tabs")]),t._v(" 调用")]),t._v(" "),r("p",[t._v("批量查找 "),r("code",[t._v("$tabs")]),t._v(" 全局调用，参考下表使用替换方案。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("方法")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("替换方案")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("$tabs.open")])]),t._v(" "),r("td",[t._v("全新打开页签")]),t._v(" "),r("td",[r("code",[t._v("$router.push(path)")])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("$tabs.close")])]),t._v(" "),r("td",[t._v("关闭页签并跳转新页面")]),t._v(" "),r("td",[r("code",[t._v("$router.replace(path)")])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("$tabs.refresh")]),r("br"),r("code",[t._v("$tabs.refreshAll")])]),t._v(" "),r("td",[t._v("刷新页签")]),t._v(" "),r("td",[t._v("组件内部提供刷新数据方法")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("$tabs.reset")])]),t._v(" "),r("td",[t._v("重置页签，回到默认或指定页")]),t._v(" "),r("td",[r("code",[t._v("$router.replace(path)")])])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("$tabs.openIframe")]),r("br"),r("code",[t._v("$tabs.closeIframe")]),r("br"),r("code",[t._v("$tabs.refreshIframe")])]),t._v(" "),r("td",[t._v("iframe 页签相关方法")]),t._v(" "),r("td",[t._v("需要添加全局 iframe 路由用于嵌入页面，并封装方法用于操作 iframe 页面")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("beforePageLeave")])]),t._v(" "),r("td",[t._v("页面离开确认")]),t._v(" "),r("td",[r("code",[t._v("beforeRouteLeave(to, from, next)")]),r("br"),t._v("参考："),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-Router 组件内的守卫"),r("OutboundLink")],1)])])])]),t._v(" "),r("h2",{attrs:{id:"二、去除-router-tab-组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、去除-router-tab-组件"}},[t._v("#")]),t._v(" 二、去除 "),r("code",[t._v("<router-tab>")]),t._v(" 组件")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("使用 "),r("code",[t._v("<router-view>")]),t._v(" 替换布局框架组件内的 "),r("code",[t._v("<router-tab>")])])]),t._v(" "),r("li",[r("p",[t._v("参考 "),r("RouterLink",{attrs:{to:"/zh/guide/essentials/"}},[t._v("入门")]),t._v(" 说明移除相关代码：")],1),t._v(" "),r("ol",[r("li",[r("p",[t._v("入口文件移除 RouterTab 安装代码")])]),t._v(" "),r("li",[r("p",[t._v("路由配置文件移除 RouterTab 内置路由和页签相关配置")])])])]),t._v(" "),r("li",[r("p",[t._v("移除 RouterTab 依赖")]),t._v(" "),r("p",[t._v("推荐使用 yarn：")]),t._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" remove vue-router-tab\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("你也可以用 npm：")]),t._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" uninstall vue-router-tab\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])])]),t._v(" "),r("h2",{attrs:{id:"三、调整页面交互方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、调整页面交互方式"}},[t._v("#")]),t._v(" 三、调整页面交互方式")]),t._v(" "),r("p",[t._v("使用单页方式，意味着不再支持跨页操作")]),t._v(" "),r("p",[t._v("你需要将原来切换页签操作的流程，更改为单页内部的操作，可以使用例如弹窗、抽屉、子页面等交互方式。")])])}),[],!1,null,null,null);e.default=v.exports}}]);