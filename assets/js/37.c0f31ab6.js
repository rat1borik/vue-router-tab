(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{436:function(t,v,_){"use strict";_.r(v);var e=_(31),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"api-routertab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api-routertab"}},[t._v("#")]),t._v(" API - RouterTab")]),t._v(" "),_("h2",{attrs:{id:"router-tab-配置参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#router-tab-配置参数"}},[t._v("#")]),t._v(" "),_("code",[t._v("<router-tab>")]),t._v(" 配置参数")]),t._v(" "),_("h3",{attrs:{id:"tabs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tabs"}},[t._v("#")]),t._v(" tabs")]),t._v(" "),_("p",[_("strong",[t._v("初始页签数据")]),t._v("，进入页面时默认显示的页签。相同 "),_("code",[t._v("key")]),t._v(" 的页签只保留第一个")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Array <String | Object>")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("tabs 子元素类型为 "),_("code",[t._v("String")]),t._v(" 时，应配置为要打开页面的 "),_("code",[t._v("fullPath")]),t._v(" ，页签的标题、图标、提示等信息会从对应页面的 "),_("code",[t._v("router")]),t._v(" 配置中获取")])]),t._v(" "),_("li",[_("p",[t._v("tabs 子元素类型为 "),_("code",[t._v("Object")]),t._v(" 时:")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("to: 页签路由地址，跟 "),_("code",[t._v("router.push")]),t._v(" 的 "),_("code",[t._v("location")]),t._v(" 参数一致，可以为 "),_("code",[t._v("fullPath")]),t._v("，也可以为 "),_("code",[t._v("location")]),t._v(" 对象 - "),_("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),_("OutboundLink")],1)])]),t._v(" "),_("li",[_("p",[t._v("title: 页签标题，如果页面有设置 "),_("code",[t._v("routeTab.title")]),t._v(" 动态标题，可在此设置最终的动态标题值，以免与默认从 "),_("code",[t._v("router")]),t._v(" 获取的标题不一致")])]),t._v(" "),_("li",[_("p",[t._v("closable: 页签是否允许关闭，默认为 "),_("code",[t._v("true")])])])])])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("[]")])])])]),t._v(" "),_("h3",{attrs:{id:"restore"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[t._v("#")]),t._v(" restore")]),t._v(" "),_("p",[_("strong",[t._v("是否在浏览器刷新后恢复页签")])]),t._v(" "),_("p",[t._v("开启后，浏览器刷新后将会还原刷新前的页签")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean | String")])]),t._v(" "),_("ul",[_("li",[t._v("类型为 "),_("code",[t._v("String")]),t._v(" 且不为空字符串时，RouterTab 会拼接该值作为 SessionStorage 的 key 来本地存储页签信息")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("false")])])])]),t._v(" "),_("h3",{attrs:{id:"restore-watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#restore-watch"}},[t._v("#")]),t._v(" restore-watch")]),t._v(" "),_("p",[_("strong",[t._v("是否监听 "),_("code",[t._v("restore")]),t._v(" 参数自动恢复页签")])]),t._v(" "),_("p",[t._v("开启后，RouterTab 会监听 "),_("code",[t._v("restore")]),t._v(" 选项，改变后自动恢复本地存储的对应页签")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("false")])])])]),t._v(" "),_("h3",{attrs:{id:"default-page"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#default-page"}},[t._v("#")]),t._v(" default-page")]),t._v(" "),_("p",[_("strong",[t._v("默认页面")]),t._v("，最后一个页签关闭或者页签重置后跳转的默认地址。")]),t._v(" "),_("p",[t._v("程序会自动获取页签父路由地址为默认页面。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String | Object")]),t._v(" location 地址")])]),t._v(" "),_("li",[_("p",[t._v("默认值: 页签组件父路由地址。")])])]),t._v(" "),_("h3",{attrs:{id:"tab-transition"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tab-transition"}},[t._v("#")]),t._v(" tab-transition")]),t._v(" "),_("p",[_("strong",[t._v("页签过渡效果")]),t._v("，新增和关闭页签时的过渡。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String | Object")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型为 "),_("code",[t._v("String")]),t._v(" 时，应配置为 "),_("code",[t._v("transition.name")])])]),t._v(" "),_("li",[_("p",[t._v("类型为 "),_("code",[t._v("Object")]),t._v(" 时，配置参考: "),_("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue - transition"),_("OutboundLink")],1)])])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("'router-tab-zoom'")])])])]),t._v(" "),_("h3",{attrs:{id:"page-transition"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#page-transition"}},[t._v("#")]),t._v(" page-transition")]),t._v(" "),_("p",[t._v("页面过渡效果。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String | Object")])]),t._v(" "),_("p",[t._v("同 "),_("a",{attrs:{href:"#tab-transition"}},[_("code",[t._v("tab-transition")])])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("{ name: 'router-tab-swap', mode: 'out-in' }")])])])]),t._v(" "),_("h3",{attrs:{id:"page-scroller"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#page-scroller"}},[t._v("#")]),t._v(" page-scroller")]),t._v(" "),_("p",[t._v("全局"),_("strong",[t._v("滚动元素选择器")]),t._v("，设置后已缓存的页签重新激活时将会还原滚动位置。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("'.router-tab__container'")])])])]),t._v(" "),_("h3",{attrs:{id:"contextmenu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#contextmenu"}},[t._v("#")]),t._v(" contextmenu")]),t._v(" "),_("p",[t._v("自定义"),_("strong",[t._v("右键菜单")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean | Array <String | Object>")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("设置为 "),_("code",[t._v("false")]),t._v(" 时禁用右键菜单")])]),t._v(" "),_("li",[_("p",[t._v("设置为数组时可自定义右键菜单")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("数组中菜单项类型为 "),_("code",[t._v("String")]),t._v(" 时，为内置菜单项")])]),t._v(" "),_("li",[_("p",[t._v("数组中菜单项类型为 "),_("code",[t._v("Object")]),t._v(" 时，如果 "),_("code",[t._v("id")]),t._v(" 与内置菜单项匹配，则扩展内置菜单；否则为自定义菜单")])])])])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("true")])])])]),t._v(" "),_("p",[_("strong",[t._v("菜单项配置")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必需")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("id")]),t._v(" "),_("td",[t._v("id")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✅")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("名称")]),t._v(" "),_("td",[_("code",[t._v("String | Function(context)")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✅")])]),t._v(" "),_("tr",[_("td",[t._v("icon")]),t._v(" "),_("td",[t._v("图标")]),t._v(" "),_("td",[_("code",[t._v("String | Function(context)")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("tips")]),t._v(" "),_("td",[t._v("提示")]),t._v(" "),_("td",[_("code",[t._v("String | Function(context)")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("class")]),t._v(" "),_("td",[t._v("class")]),t._v(" "),_("td",[_("code",[t._v("String | Array | Object | Function(context)")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("visible")]),t._v(" "),_("td",[t._v("是否可见")]),t._v(" "),_("td",[_("code",[t._v("Function(context) => String")])]),t._v(" "),_("td",[_("code",[t._v("true")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("enable")]),t._v(" "),_("td",[t._v("是否启用")]),t._v(" "),_("td",[_("code",[t._v("Function(context) => String")])]),t._v(" "),_("td",[_("code",[t._v("true")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("handler")]),t._v(" "),_("td",[t._v("菜单触发方法")]),t._v(" "),_("td",[_("code",[t._v("Function(context)")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✅")])])])]),t._v(" "),_("p",[t._v("菜单项动态参数 "),_("code",[t._v("context")]),t._v(" 说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("$tabs")]),t._v(" "),_("td",[t._v("RouterTab 组件实例")])]),t._v(" "),_("tr",[_("td",[t._v("$menu")]),t._v(" "),_("td",[t._v("菜单项组件实例")])]),t._v(" "),_("tr",[_("td",[t._v("target")]),t._v(" "),_("td",[t._v("右键操作的页签项实例")])]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("右键相关数据")])])])]),t._v(" "),_("h3",{attrs:{id:"dragsort"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dragsort"}},[t._v("#")]),t._v(" dragsort")]),t._v(" "),_("p",[t._v("是否支持页签拖拽排序")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("true")])])])]),t._v(" "),_("h3",{attrs:{id:"append"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#append"}},[t._v("#")]),t._v(" append")]),t._v(" "),_("p",[t._v("新页签插入位置")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String")])])]),t._v(" "),_("li",[_("p",[t._v("可选值: "),_("code",[t._v("'last'")]),t._v(" 末尾、"),_("code",[t._v("'next'")]),t._v(" 下一个")])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("'last'")])])])]),t._v(" "),_("h3",{attrs:{id:"keep-last-tab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#keep-last-tab"}},[t._v("#")]),t._v(" keep-last-tab")]),t._v(" "),_("p",[t._v("是否保留最后一个页签不被关闭")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("true")])])])]),t._v(" "),_("h3",{attrs:{id:"keep-alive"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),_("p",[t._v("默认是否缓存页签，可通过路由 "),_("code",[t._v("meta.keepAlive")]),t._v(" 重置")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("true")])])])]),t._v(" "),_("h3",{attrs:{id:"max-alive"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#max-alive"}},[t._v("#")]),t._v(" max-alive")]),t._v(" "),_("p",[t._v("最大缓存数，"),_("code",[t._v("0")]),t._v(" 则不限制")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Number")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("0")])])])]),t._v(" "),_("h3",{attrs:{id:"reuse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reuse"}},[t._v("#")]),t._v(" reuse")]),t._v(" "),_("p",[t._v("是否复用路由组件，可通过路由 "),_("code",[t._v("meta.reuse")]),t._v(" 重置")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Boolean")])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("false")])])])]),t._v(" "),_("h3",{attrs:{id:"i18n"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#i18n"}},[t._v("#")]),t._v(" i18n")]),t._v(" "),_("p",[t._v("页签国际化转换")]),t._v(" "),_("p",[_("code",[t._v("function(key: string, params: []): string")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("Function")])])]),t._v(" "),_("li",[_("p",[t._v("参数:")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("{String} [key]")]),t._v(": 国际化字段 "),_("code",[t._v("key")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("{Array} [params]")]),t._v(" 国际化字段参数列表")])])])]),t._v(" "),_("li",[_("p",[t._v("返回: "),_("code",[t._v("String")]),t._v(" 国际化转换后的字符串")])])]),t._v(" "),_("h3",{attrs:{id:"lang"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),_("p",[t._v("组件语言")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("类型: "),_("code",[t._v("String | Object")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("如果类型为 "),_("code",[t._v("String")]),t._v("，可以设置为内置的语言 "),_("code",[t._v("'zh'")]),t._v(" 和 "),_("code",[t._v("'en'")])])]),t._v(" "),_("li",[_("p",[t._v("如果类型为 "),_("code",[t._v("Object")]),t._v("，可设置自定义的语言")])])])]),t._v(" "),_("li",[_("p",[t._v("默认值: "),_("code",[t._v("'auto'")]),t._v("。 根据浏览器语言自动识别组件语言")])])]),t._v(" "),_("h2",{attrs:{id:"routertab-实例属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例属性"}},[t._v("#")]),t._v(" RouterTab 实例属性")]),t._v(" "),_("p",[t._v("在组件内部可通过 "),_("code",[t._v("this.$tabs.[prop]")]),t._v(" 访问")]),t._v(" "),_("h3",{attrs:{id:"routertab-items"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-items"}},[t._v("#")]),t._v(" routerTab.items")]),t._v(" "),_("p",[t._v("所有的页签数据")]),t._v(" "),_("h3",{attrs:{id:"routertab-activetab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activetab"}},[t._v("#")]),t._v(" routerTab.activeTab")]),t._v(" "),_("p",[t._v("当前激活的页签数据")]),t._v(" "),_("h3",{attrs:{id:"routertab-activetabid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activetabid"}},[t._v("#")]),t._v(" routerTab.activeTabId")]),t._v(" "),_("p",[t._v("当前激活的页签 id")]),t._v(" "),_("h2",{attrs:{id:"routertab-实例方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例方法"}},[t._v("#")]),t._v(" RouterTab 实例方法")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("在 Vue 实例内部，您可以通过 "),_("code",[t._v("this.$tabs")]),t._v(" 来访问路由页签实例。例如: 调用 "),_("code",[t._v("this.$tabs.close()")]),t._v(" 来关闭当前页签。")])]),t._v(" "),_("h3",{attrs:{id:"routertab-open"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-open"}},[t._v("#")]),t._v(" routerTab.open")]),t._v(" "),_("p",[t._v("打开指定地址的页签（默认为全新打开）")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String | Object} [path]")]),t._v(" 要打开的路由地址 - "),_("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [isReplace = false]")]),t._v(" 是否 "),_("code",[t._v("$router.replace")]),t._v(" 方式打开")]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [refresh = true]")]),t._v(" 是否全新打开（会清理之前的页签页面缓存）")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-close"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-close"}},[t._v("#")]),t._v(" routerTab.close")]),t._v(" "),_("p",[t._v("关闭指定页签")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("调用:")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("this.$tabs.close({id, path, match, force, to, refresh})")])]),t._v(" "),_("li",[_("code",[t._v("this.$tabs.close(path, to)")])])])]),t._v(" "),_("li",[_("p",[t._v("参数:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("{String} [id]")]),t._v(" 通过页签 "),_("code",[t._v("id")]),t._v(" 关闭")]),t._v(" "),_("li",[_("code",[t._v("{location} [path]")]),t._v(" 通过路由路径关闭页签，如果未配置 "),_("code",[t._v("id")]),t._v(" 和 "),_("code",[t._v("path")]),t._v(" 则关闭当前页签")]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [match = true]")]),t._v(" "),_("code",[t._v("path")]),t._v(" 方式关闭时，是否匹配 "),_("code",[t._v("path")]),t._v(" 完整路径")]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [force = true]")]),t._v(" 是否强制关闭")]),t._v(" "),_("li",[_("code",[t._v("{location} to")]),t._v(" 关闭后跳转的地址，为 "),_("code",[t._v("null")]),t._v(" 则不跳转")]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [refresh = false]")]),t._v(" 是否全新打开跳转地址")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-refresh"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refresh"}},[t._v("#")]),t._v(" routerTab.refresh")]),t._v(" "),_("p",[t._v("刷新指定路由地址的页签")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{location} [path]")]),t._v(" 路由地址 - "),_("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [match = true]")]),t._v(" 是否全匹配（匹配 fullPath 去除 hash 部分）")]),t._v(" "),_("li",[_("code",[t._v("{Boolean} [force = true]")]),t._v(" 是否强制刷新")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-refreshall"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshall"}},[t._v("#")]),t._v(" routerTab.refreshAll")]),t._v(" "),_("p",[t._v("刷新所有页签")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{Boolean} [force = false]")]),t._v(" 如果 "),_("code",[t._v("force")]),t._v(" 为 "),_("code",[t._v("true")]),t._v("，则忽略页面组件的 "),_("code",[t._v("beforePageLeave")]),t._v(" 配置，强制刷新所有页签")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-reset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-reset"}},[t._v("#")]),t._v(" routerTab.reset")]),t._v(" "),_("p",[t._v("重置页签到初始状态")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{location} [to]")]),t._v(" 重置后跳转的地址，默认为 "),_("code",[t._v("default-page")])])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-openiframe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-openiframe"}},[t._v("#")]),t._v(" routerTab.openIframe")]),t._v(" "),_("p",[t._v("打开 Iframe 页签")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String} [src]")]),t._v(" 要打开的 Iframe 页签链接")]),t._v(" "),_("li",[_("code",[t._v("{String} [title]")]),t._v(" 页签标题")]),t._v(" "),_("li",[_("code",[t._v("{String} [icon]")]),t._v(" 页签图标")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-closeiframe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-closeiframe"}},[t._v("#")]),t._v(" routerTab.closeIframe")]),t._v(" "),_("p",[t._v("关闭 Iframe 页签")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String} [src]")]),t._v(" 要关闭的 Iframe 页签链接")])])])]),t._v(" "),_("h3",{attrs:{id:"routertab-refreshiframe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshiframe"}},[t._v("#")]),t._v(" routerTab.refreshIframe")]),t._v(" "),_("p",[t._v("刷新 Iframe 页签")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String} [src]")]),t._v(" 要刷新的 Iframe 页签链接")])])])]),t._v(" "),_("h2",{attrs:{id:"routertab-事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-事件"}},[t._v("#")]),t._v(" RouterTab 事件")]),t._v(" "),_("h3",{attrs:{id:"iframe-mounted"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#iframe-mounted"}},[t._v("#")]),t._v(" iframe-mounted")]),t._v(" "),_("p",[t._v("iframe 节点挂载就绪")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String} [url]")]),t._v(" iframe 的链接地址")]),t._v(" "),_("li",[_("code",[t._v("{HTMLIFrameElement} [iframe]")]),t._v(" iframe 节点")])])])]),t._v(" "),_("h3",{attrs:{id:"iframe-loaded"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#iframe-loaded"}},[t._v("#")]),t._v(" iframe-loaded")]),t._v(" "),_("p",[t._v("iframe 内容加载成功")]),t._v(" "),_("ul",[_("li",[t._v("参数:\n"),_("ul",[_("li",[_("code",[t._v("{String} [url]")]),t._v(" iframe 的链接地址")]),t._v(" "),_("li",[_("code",[t._v("{HTMLIFrameElement} [iframe]")]),t._v(" iframe 节点")])])])]),t._v(" "),_("h2",{attrs:{id:"routertab-插槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routertab-插槽"}},[t._v("#")]),t._v(" RouterTab 插槽")]),t._v(" "),_("p",[t._v("RouterTab 支持通过以下插槽个性化页签组件：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("插槽名称")]),t._v(" "),_("th",[t._v("作用域")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("default")])]),t._v(" "),_("td",[_("code",[t._v("tab")])]),t._v(" "),_("td",[t._v("页签项")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("start")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("页签栏开始")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("end")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("页签栏结束")])])])]),t._v(" "),_("h2",{attrs:{id:"route-meta-路由元信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#route-meta-路由元信息"}},[t._v("#")]),t._v(" Route.meta 路由元信息")]),t._v(" "),_("p",[t._v("通过路由的 "),_("code",[t._v("meta")]),t._v(" 信息，我们可以配置路由页签的标题、图标、提示和缓存规则")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("路由 key")]),t._v(" "),_("td",[_("code",[t._v("String | Function")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("用于页签 id 和组件缓存 key"),_("br"),t._v("内置 "),_("code",[t._v("path")]),t._v(" "),_("code",[t._v("fullPath")]),t._v(" 两种规则")])]),t._v(" "),_("tr",[_("td",[t._v("keepAlive")]),t._v(" "),_("td",[t._v("是否缓存")]),t._v(" "),_("td",[_("code",[t._v("Boolean")])]),t._v(" "),_("td",[_("code",[t._v("true")])]),t._v(" "),_("td",[t._v("如果不缓存，每次进入页面将重新创建实例")])]),t._v(" "),_("tr",[_("td",[t._v("reuse")]),t._v(" "),_("td",[t._v("是否复用组件")]),t._v(" "),_("td",[_("code",[t._v("Boolean")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("相同页签规则下，同一个路由的 "),_("code",[t._v("params")]),t._v(" 或 "),_("code",[t._v("query")]),t._v(" 更改后是否复用之前的组件")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("页签标题")]),t._v(" "),_("td",[_("code",[t._v("String | Array")])]),t._v(" "),_("td",[_("code",[t._v("'无标题'")])]),t._v(" "),_("td",[t._v("支持国际化"),_("br"),t._v("参考: "),_("RouterLink",{attrs:{to:"/zh/guide/custom/i18n.html"}},[t._v("教程 - 多语言支持")])],1)]),t._v(" "),_("tr",[_("td",[t._v("tips")]),t._v(" "),_("td",[t._v("鼠标悬浮提示")]),t._v(" "),_("td",[_("code",[t._v("String | Array")])]),t._v(" "),_("td",[t._v("和标题一致")]),t._v(" "),_("td",[t._v("支持国际化"),_("br"),t._v("参考: "),_("RouterLink",{attrs:{to:"/zh/guide/custom/i18n.html"}},[t._v("教程 - 多语言支持")])],1)]),t._v(" "),_("tr",[_("td",[t._v("icon")]),t._v(" "),_("td",[t._v("图标")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("tabClass")]),t._v(" "),_("td",[t._v("页签 class")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("closable")]),t._v(" "),_("td",[t._v("是否可关闭")]),t._v(" "),_("td",[_("code",[t._v("Boolean")])]),t._v(" "),_("td",[_("code",[t._v("true")])]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("h2",{attrs:{id:"扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[_("code",[t._v("pageComp")]),t._v(": 页面组件选项")]),t._v(" "),_("p",[_("code",[t._v("vm")]),t._v(": Vue 组件实例")]),t._v(" "),_("p",[_("code",[t._v("pageVm")]),t._v(": 通过 RouterTab 加载的页面组件实例")])]),t._v(" "),_("h3",{attrs:{id:"pagecomp-beforepageleave"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pagecomp-beforepageleave"}},[t._v("#")]),t._v(" "),_("code",[t._v("pageComp.beforePageLeave")])]),t._v(" "),_("p",[t._v("页面离开确认。")]),t._v(" "),_("p",[t._v("页面组件选项，与 "),_("code",[t._v("data")]),t._v(", "),_("code",[t._v("methods")]),t._v(" 等选项并列配置")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("参数:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("{Object} tab")]),t._v(" 页签信息")]),t._v(" "),_("li",[_("code",[t._v("{String} type")]),t._v(" 离开类型:\n"),_("ul",[_("li",[_("code",[t._v("close")]),t._v(": 页签关闭")]),t._v(" "),_("li",[_("code",[t._v("refresh")]),t._v(": 页签刷新")]),t._v(" "),_("li",[_("code",[t._v("replace")]),t._v(": 页签被替换")]),t._v(" "),_("li",[_("code",[t._v("leave")]),t._v(": 路由离开")]),t._v(" "),_("li",[_("code",[t._v("unload")]),t._v(": 浏览器刷新或者关闭")])])])])]),t._v(" "),_("li",[_("p",[t._v("返回值类型：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("{String}")]),t._v(" 离开类型为 "),_("code",[t._v("unload")]),t._v(" 时，浏览器离开提示消息")]),t._v(" "),_("li",[_("code",[t._v("{Promise}")]),t._v(" 其他类型，"),_("code",[t._v("resolve")]),t._v(" 离开，"),_("code",[t._v("reject")]),t._v(" 阻止离开")])])])]),t._v(" "),_("h3",{attrs:{id:"pagecomp-pagescroller"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pagecomp-pagescroller"}},[t._v("#")]),t._v(" "),_("code",[t._v("pageComp.pageScroller")])]),t._v(" "),_("p",[t._v("页面内部"),_("strong",[t._v("滚动元素选择器")]),t._v("，设置后已缓存的页签重新激活时将会还原滚动位置。")]),t._v(" "),_("p",[t._v("值为数组时可应用页面内的多个滚动条。")]),t._v(" "),_("ul",[_("li",[t._v("类型: "),_("code",[t._v("String | Array")])])]),t._v(" "),_("h3",{attrs:{id:"vm-tabs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vm-tabs"}},[t._v("#")]),t._v(" "),_("code",[t._v("vm.$tabs")])]),t._v(" "),_("p",[t._v("RouterTab 实例")]),t._v(" "),_("p",[t._v("为了方便调用，RouterTab 将实例挂载在 "),_("code",[t._v("Vue.prototype")]),t._v(" 上。因此，在所有 Vue 组件内部，您都可以通过 "),_("code",[t._v("this.$tabs")]),t._v(" 来访问路由页签实例")]),t._v(" "),_("h3",{attrs:{id:"pagevm-routetab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pagevm-routetab"}},[t._v("#")]),t._v(" "),_("code",[t._v("pageVm.routeTab")])]),t._v(" "),_("p",[t._v("路由页签配置")]),t._v(" "),_("p",[t._v("RouterTab 通过监听页面组件的 "),_("code",[t._v("this.routeTab")]),t._v(" 来更新页面对应页签的标题、图标、提示")])])}),[],!1,null,null,null);v.default=a.exports}}]);