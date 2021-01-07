(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{370:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("基于 Vue 和 OAuth 2.0 的前后端分离单点登录实现方案调研。\n")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("上一篇中记录了第一次进行前后端分离架构下的 CAS 单点登录调研方案，最终还是存在一些问题，经过和同事的讨论，我们决定重新设计一套实现方案。继续调研后，我们改变了思路，决定使用 OAuth 2.0 协议实现登录，现在此处记录一下相关情况以备日后查阅。")]),t._v(" "),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("p",[t._v("关于 OAuth 2.0，网上相关的资料非常丰富，在此不再详述。我们只需要知道本方案需要用到的是通过基于 OAuth 2.0 协议开发的认证服务获取授权 token 来实现登录认证即可。")]),t._v(" "),a("h2",{attrs:{id:"两套方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两套方案"}},[t._v("#")]),t._v(" 两套方案")]),t._v(" "),a("p",[t._v("关于这类解决方案网上应该有很多，在这里主要记录一下我们调研过的两套方案。这两套方案的核心都是一句话：token 共享，即需要让多个子系统共享登录状态。")]),t._v(" "),a("h2",{attrs:{id:"解决方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案一"}},[t._v("#")]),t._v(" 解决方案一")]),t._v(" "),a("p",[t._v("这是我们基于 OAuth 认证做出的第一个能实现单点登录功能的方案。思路主要是利用 iframe 进行 token 的共享，借以实现子系统登录状态的同步。")]),t._v(" "),a("h3",{attrs:{id:"整体流程设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程设计"}},[t._v("#")]),t._v(" 整体流程设计")]),t._v(" "),a("ol",[a("li",[t._v("浏览器访问子系统 A 前端页面，前端向 A 后端发送请求")]),t._v(" "),a("li",[t._v("请求 A 后端资源时发现未登录返回对应的状态码（如：401）或 JSON 数据")]),t._v(" "),a("li",[t._v("前端发现未登录，将浏览器重定向到 passport 登录页，后面带上 client 参数，用于登录后返回当前页面")]),t._v(" "),a("li",[t._v("passport 登录页记录 client 参数，登录成功后跳转到中转页面，中转页面包含所有子系统 iframe 页面")]),t._v(" "),a("li",[t._v("在中转页中对每个子系统页面通过 postMessage 方法传入 token")]),t._v(" "),a("li",[t._v("子系统监听并接收传入的 token，存入本域下")]),t._v(" "),a("li",[t._v("中转页面设置好 token 后根据传入的 client 参数进行跳转")]),t._v(" "),a("li",[t._v("浏览器访问子系统 B 前端页面，前端向 B 后端发送请求")]),t._v(" "),a("li",[t._v("请求 B 后端资源时发现请求中携带 token，判断为已登录")])]),t._v(" "),a("h3",{attrs:{id:"前端实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端实现"}},[t._v("#")]),t._v(" 前端实现")]),t._v(" "),a("h4",{attrs:{id:"_1-创建用于登录的-passport-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建用于登录的-passport-项目"}},[t._v("#")]),t._v(" 1.创建用于登录的 passport 项目")]),t._v(" "),a("p",[t._v("此前端应包含登录页以及登录成功后的中转页面，在中转页面中可使用隐藏的 iframe 引入子系统的某一页面（用于在子系统域下存入 token）。\n向 iframe 中设置 token 的部分代码，使用 postMessage 方式实现：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clientElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待 iframe 加载完成")]),t._v("\n  clientElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clientElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setToken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-子系统白名单页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-子系统白名单页面"}},[t._v("#")]),t._v(" 2.子系统白名单页面")]),t._v(" "),a("p",[t._v("每个子系统都需要有一个专门用于登录后 iframe 引入的白名单页面，此页面只用于登录后设置 token，页面中需包含设置 token 的代码：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receiveMsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 处理推送信息，存放 token\n     * @param event\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receiveMsg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setToken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-处理未登录状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-处理未登录状态码"}},[t._v("#")]),t._v(" 3.处理未登录状态码")]),t._v(" "),a("p",[t._v("前端可以封装一个发送请求并接收返回值的组件，用于拦截所有的返回结果。\n与后端约定判断返回的状态码，若需登录，则保存当前浏览器地址，向登录页跳转，并带上要回跳的当前页面地址。")]),t._v(" "),a("p",[t._v("以 axios 封装请求的组件为例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 200 状态码及 JSON 数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前浏览器地址，用于登录后返回")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// redirectURL 可存放登录页地址")]),t._v("\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://passport.server.com:8080/#/login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?client='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 401 状态码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (error.response.status === 401) {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  const href = window.location.href")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  window.location.href = response.data.redirectURL || 'http://passport.server.com:8080/#/login' + '?client=' + encodeURIComponent(href)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),a("h4",{attrs:{id:"_1-多个-iframe-需要完全加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-多个-iframe-需要完全加载"}},[t._v("#")]),t._v(" 1.多个 iframe 需要完全加载")]),t._v(" "),a("p",[t._v("中转页面需要等所有 iframe 都加载完并设置好 token 才可进行下一步跳转。此处只能用 vue 监听一个计数器，根据计数器判断是否设置完成。")]),t._v(" "),a("h3",{attrs:{id:"存在的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在的缺陷"}},[t._v("#")]),t._v(" 存在的缺陷")]),t._v(" "),a("h4",{attrs:{id:"_1-前端中转页面等待时间长"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端中转页面等待时间长"}},[t._v("#")]),t._v(" 1.前端中转页面等待时间长")]),t._v(" "),a("p",[t._v("由于需要等待子系统页面加载完成才能设置 token，子系统越多需要等待的时间就越长。因此每个子系统中将被 iframe 引入的页面最好尽量简单，以减少加载时间。")]),t._v(" "),a("h2",{attrs:{id:"解决方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案二"}},[t._v("#")]),t._v(" 解决方案二")]),t._v(" "),a("p",[t._v("此方案是在后续和同事讨论中产生的。主要是利用统一认证系统的前端来实现类似 CAS Server 的功能，以对携带应用标识的子系统返回 token 的方式共享登录状态。")]),t._v(" "),a("h3",{attrs:{id:"整体流程设计-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程设计-2"}},[t._v("#")]),t._v(" 整体流程设计")]),t._v(" "),a("ol",[a("li",[t._v("浏览器访问子系统 A 前端页面，前端向 A 后端发送请求")]),t._v(" "),a("li",[t._v("请求 A 后端资源时发现未登录返回对应的状态码（如：401）或 JSON 数据")]),t._v(" "),a("li",[t._v("A 前端发现未登录，将浏览器重定向到 passport 登录页，并带上两个参数：client（当前页面 url），以及 application（应用标识）")]),t._v(" "),a("li",[t._v("passport 登录页记录 client 以及 application，用户进行登录")]),t._v(" "),a("li",[t._v("登录成功后获取用户信息（用以验证 token 是否有效）")]),t._v(" "),a("li",[t._v("验证 token 成功后判断：若存在 client 参数，并且 application 标识正确，则将 token 放入 client 的链接末尾进行跳转，若不需要跳转则访问门户页面")]),t._v(" "),a("li",[t._v("子系统 A 路由监听并接收传入的 token，存入子系统域下，至此子系统 A 登录成功")]),t._v(" "),a("li",[t._v("浏览器访问子系统 B 前端页面，前端向 B 后端发送请求")]),t._v(" "),a("li",[t._v("B 后端发现未登录，返回未登录状态码（如：401）或 JSON 数据")]),t._v(" "),a("li",[t._v("B 前端发现未登录，将浏览器重定向到 passport 登录页，并带上两个参数：client（当前页面 url），以及 application（应用标识）")]),t._v(" "),a("li",[t._v("passport 登录页判断已登录，获取用户信息（验证 token 是否有效）")]),t._v(" "),a("li",[t._v("token 有效，判断是否需要根据 client 跳转，若需跳转，验证 application 标识，验证成功后将 token 放入链接末尾传递给子系统 B；不需跳转，访问门户页面")]),t._v(" "),a("li",[t._v("token 失效，清除登录信息，跳转登录页面重新登录")])]),t._v(" "),a("h3",{attrs:{id:"前端实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端实现-2"}},[t._v("#")]),t._v(" 前端实现")]),t._v(" "),a("h4",{attrs:{id:"_1-创建用于登录的-passport-项目-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建用于登录的-passport-项目-2"}},[t._v("#")]),t._v(" 1.创建用于登录的 passport 项目")]),t._v(" "),a("p",[t._v("此前端应包含登录页以及门户页面，门户页面中可在跳转每个子系统时动态增加 token 参数，将登录后的有效 token 传递给每个子系统。")]),t._v(" "),a("h4",{attrs:{id:"_2-处理未登录状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-处理未登录状态码"}},[t._v("#")]),t._v(" 2.处理未登录状态码")]),t._v(" "),a("p",[t._v("前端可以封装一个发送请求并接收返回值的组件，用于拦截所有的返回结果。\n与后端约定判断返回的状态码，若需登录，则保存当前浏览器地址，向登录页跳转，并带上要回跳的当前页面地址，以及当前子系统的应用标识以供统一认证系统验证。")]),t._v(" "),a("p",[t._v("以 axios 封装请求的组件为例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 200 状态码及 JSON 数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'401'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前浏览器地址，用于登录后返回")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://passport.server.com:8080/#/login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?application=clientA&client='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 401 状态码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (error.response.status === 401) {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  const href = window.location.href")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  window.location.href = 'http://passport.server.com:8080/#/login' + '?application=clientA&client=' + encodeURIComponent(href)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("此方案绕过了 iframe 方案中可能产生的各种性能、权限或兼容性问题，将可控的 passport 前端作为中心控制模块，所有登录相关逻辑集中在此，使整个登录方案实现时更加灵活高效，集成子系统时更为方便，后续调研中将主要测试此方案。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上就是本次调研得出的两个方案，其实我更倾向于称这两个方案为统一认证登录方案而非单点登录方案。说到底，它们并非传统意义上的单点登录，而是实现了单点登录功能（单点登录/登出等）的方案。\n实现的过程有些投机取巧，并不优雅，但也算实用，后续工作学习中我也会继续思考和调研。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("h3",{attrs:{id:"oauth-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0"}},[t._v("#")]),t._v(" OAuth 2.0")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解OAuth 2.0"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0 的一个简单解释"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0 的四种方式"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);