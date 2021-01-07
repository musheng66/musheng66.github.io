(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{365:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("前后端分离模式下 CAS 单点登录实现方案调研。\n")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("前段时间一直在调研的前后端分离单点登录认证方案终于以 Demo 的形式实现了（基于会话的 CAS 认证方式），期间如其他前后端开发者们一样——踩过不少坑。\n此方案仅作为调研，借以了解 CAS 的一些原理，现在此处记录一下相关情况以备日后查阅。")]),t._v(" "),e("h2",{attrs:{id:"知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),e("p",[t._v("开始之前需要先了解一些相关的知识与概念，包括单点登录，CAS，前后端分离等。")]),t._v(" "),e("h3",{attrs:{id:"前后端分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),e("p",[t._v("前后端分离已在互联网项目开发业界进行了广泛应用，通过前端应用与后端服务的分布式部署可以有效进行解耦，将数据与展现彻底分离，既保证了数据安全，也给了前端开发充分的自由。")]),t._v(" "),e("p",[t._v("前后端分离最常见的实现方式之一是前端 HTML 页面通过 AJAX 调用后端的 RESTFUL API 接口并使用 JSON 数据进行交互（这种方式也为单点登录方案的实现挖了个大坑）。")]),t._v(" "),e("h3",{attrs:{id:"单点登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单点登录"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),e("p",[t._v("单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一。SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。")]),t._v(" "),e("h3",{attrs:{id:"cas认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas认证"}},[t._v("#")]),t._v(" CAS认证")]),t._v(" "),e("p",[t._v("此处借用了一张图来展示认证协议过程：")]),t._v(" "),e("img",{attrs:{src:"/img/webfe/sso/sso1.png"}}),t._v(" "),e("p",[t._v("下面介绍一下认证流程。常用的认证流程有两个：其一是用户登录，二是已登录用户访问客户端资源。")]),t._v(" "),e("h4",{attrs:{id:"用户登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户登录"}},[t._v("#")]),t._v(" 用户登录")]),t._v(" "),e("ol",[e("li",[t._v("用户通过浏览器发送请求访问 CAS Client 资源")]),t._v(" "),e("li",[t._v("CAS Client 发现用户请求中未包含 ST 票据，将浏览器重定向到 CAS Server，此时 URL 中会携带名为 service 的参数，参数值是用户要访问的客户端资源地址")]),t._v(" "),e("li",[t._v("CAS Server 对访问的用户是否携带 TGC 进行验证，若未携带则跳转到 CAS 统一的登录页面")]),t._v(" "),e("li",[t._v("用户登录后，CAS Server 将浏览器重定向到之前 service 参数值指向的客户端地址（URL 的最后会增加 st 参数，CAS Client 可将 ST 保存起来），同时生成 TGC 写入浏览器中")]),t._v(" "),e("li",[t._v("由于此次重定向携带了 ST，CAS Client 会向 CAS Server 发送验证请求")]),t._v(" "),e("li",[t._v("CAS Server 验证通过，用户可以正常访问资源")]),t._v(" "),e("li",[t._v("此时浏览器已与 CAS Client 建立会话，若 CAS Client 保存了 ST，后续请求通过会话即可调取 ST 并与 CAS Server 进行验证")])]),t._v(" "),e("h4",{attrs:{id:"已登录用户访问其他资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#已登录用户访问其他资源"}},[t._v("#")]),t._v(" 已登录用户访问其他资源")]),t._v(" "),e("ol",[e("li",[t._v("用户访问未建立会话的 CAS Client 资源")]),t._v(" "),e("li",[t._v("CAS Client 需要 ST 进行验证，将浏览器重定向到 CAS Server")]),t._v(" "),e("li",[t._v("用户访问 CAS Server，CAS Server 发现用户有 TGT，签发一个 ST，返回给用户浏览器并重定向到 CAS Client")]),t._v(" "),e("li",[t._v("CAS Client 发现有 ST 去 CAS Server（CAS Client 可将 ST 保存起来） 验证，验证通过后，允许用户访问资源")]),t._v(" "),e("li",[t._v("此时浏览器已与 CAS Client 建立会话，若 CAS Client 保存了 ST，后续请求通过会话即可调取 ST 并与 CAS Server 进行验证")])]),t._v(" "),e("h4",{attrs:{id:"cas-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas-server"}},[t._v("#")]),t._v(" CAS Server")]),t._v(" "),e("p",[t._v("CAS Server（CAS服务端）负责完成对用户的认证工作，完成与浏览器端的用户认证和CAS客户端的票据验证。")]),t._v(" "),e("h4",{attrs:{id:"cas-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas-client"}},[t._v("#")]),t._v(" CAS Client")]),t._v(" "),e("p",[t._v("CAS Client（CAS客户端）负责处理对受保护资源的访问请求，需要对请求方进行身份认证时，重定向到 CAS Server 进行认证。\nCAS Client 与受保护的客户端应用部署在一起，以 Filter  方式保护受保护的资源。")]),t._v(" "),e("h4",{attrs:{id:"ticket-grangting-ticket（tgt）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ticket-grangting-ticket（tgt）"}},[t._v("#")]),t._v(" Ticket Grangting Ticket（TGT）")]),t._v(" "),e("p",[t._v("TGT 是 CAS 为用户签发的登录票据，拥有了 TGT，用户就可以证明自己在CAS成功登录过。\nTGT 封装了 Cookie 值以及此 Cookie 值对应的用户信息。用户在 CAS 认证成功后，CAS 生成 cookie（叫TGC），写入浏览器，同时生成一个 TGT 对象，放入自己的缓存，TGT 对象的 ID 就是 cookie 的值。\n当 HTTP 再次请求到来时，如果传过来的有 CAS 生成的 cookie，则 CAS 以此 cookie 值为 key 查询缓存中有无 TGT，如果有，说明用户之前登录过，如果没有，则用户需要重新登录。")]),t._v(" "),e("h4",{attrs:{id:"ticket-granting-cookie（tgc）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ticket-granting-cookie（tgc）"}},[t._v("#")]),t._v(" Ticket-granting cookie（TGC）")]),t._v(" "),e("p",[t._v("存放用户身份认证凭证的 cookie，在浏览器和 CAS Server 间通讯时使用，并且只能基于安全通道传输（Https），是 CAS Server 用来明确用户身份的凭证。")]),t._v(" "),e("h4",{attrs:{id:"service-ticket（st）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-ticket（st）"}},[t._v("#")]),t._v(" Service ticket（ST）")]),t._v(" "),e("p",[t._v("服务票据，服务的惟一标识码 , 由 CAS Server 发出（ Http 传送），用户访问 Service 时，Service 发现用户没有 ST，则要求用户去 CAS 获取 ST。")]),t._v(" "),e("h2",{attrs:{id:"存在的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[t._v("#")]),t._v(" 存在的问题")]),t._v(" "),e("h3",{attrs:{id:"xmlhttprequest-请求与-302-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xmlhttprequest-请求与-302-状态码"}},[t._v("#")]),t._v(" XMLHttpRequest 请求与 302 状态码")]),t._v(" "),e("p",[t._v("对于前后端分离架构常用的 XMLHttpRequest（Ajax、Axios 等库都是对它的封装） 请求方式来说，基于浏览器会话的传统项目常见的 302 状态码无疑是一道深坑。第一次见到那个跨域的错误时，我很诧异，以为是自己的代码写的有问题，直到我调试了全部代码之后，发现根本捕获不到 302 状态。")]),t._v(" "),e("p",[t._v("后来我终于在"),e("a",{attrs:{href:"https://stackoverflow.com/questions/15996779/cannot-handle-302-redirect-in-ajax-and-why/15996968#15996968",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("找到了原因：")]),t._v(" "),e("blockquote",[e("p",[t._v("You can't handle redirects with XHR callbacks because the browser takes care of them automatically. You will only get back what at the redirected location.")])]),t._v(" "),e("p",[t._v("浏览器会自动优先处理重定向请求，只会返回重定向地址给出的结果。这必然会导致 302 状态码无法返回前端被捕获，而是会被浏览器直接跳转，我们最终只能得到从当前地址访问重定向地址后可能产生的跨域错误。")]),t._v(" "),e("h3",{attrs:{id:"四方认证与ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四方认证与ajax"}},[t._v("#")]),t._v(" 四方认证与Ajax")]),t._v(" "),e("p",[t._v("前文已经介绍了 CAS 认证的过程，可以看出一般 CAS 的认证都是基于会话（即浏览器与服务器之间的 Session），因此终端、CAS 客户端与 CAS 服务端会组成一个三方的认证系统。登录之后的浏览器会在 CAS Server 的域名下存放 cookie，用于浏览器和 CAS Server 之间验证是否登录；而在访问 CAS Client 资源时则会在 Client 的域名下存放一个 cookie，用于下次访问资源时调取 ST 与 CAS Server 进行验证。")]),t._v(" "),e("p",[t._v("现在问题出现了。当前端与后端分离时，原本的 CAS Client 就不再是一方了，而是变成了两方，于是三方认证也成了四方认证。\n如果是单纯的变成了两方也并没有离开 CAS 的认证框架，无非是多一个 CAS Client 罢了，然而前端常用的 Ajax 请求恰好无法处理 CAS 中最常见的重定向操作。这样一来，包括首次登录、登录成功后返回 ST、认证登录等一系列的逻辑似乎都没有办法继续进行了。")]),t._v(" "),e("h3",{attrs:{id:"微服务架构下的认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构下的认证"}},[t._v("#")]),t._v(" 微服务架构下的认证")]),t._v(" "),e("p",[t._v("另一个尚未解决的问题就是微服务架构带来的认证问题。对于前端访问多个 CAS Client 时需要携带 ST 的需求，目前尚未设计出较好的解决方案，此问题还有待后续研究。")]),t._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("前面的问题网上出现了众多解决办法，在此处仅记录我自己实现的确实可行的一个设计方案。")]),t._v(" "),e("h3",{attrs:{id:"整体流程设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体流程设计"}},[t._v("#")]),t._v(" 整体流程设计")]),t._v(" "),e("p",[t._v("这里记录一下整体的设计流程：")]),t._v(" "),e("ol",[e("li",[t._v("浏览器访问子系统 A 前端页面，前端向 Client 获取用户信息")]),t._v(" "),e("li",[t._v("Client 发现请求中没有会话ID，返回 401 及用于跳转页面的 Controller 的地址")]),t._v(" "),e("li",[t._v("前端发现 401，将浏览器重定向到 CAS Server 的登录页，后面带上 service 参数，service 即为 Client 回传的 Controller 地址，同时向其中传入一个 url 参数，用于返回前端页面")]),t._v(" "),e("li",[t._v("CAS Server 登录，登录成功后根据 service 参数返回 Client 中的 Controller")]),t._v(" "),e("li",[t._v("Client 接收 url 参数，同时将 JSESSIONID 拼在 url 最后，通过跳转回传给前端")]),t._v(" "),e("li",[t._v("前端接收 JSESSIONID 并存放在其自身域的 cookie 中，后续请求均携带 cookie")]),t._v(" "),e("li",[t._v("另一子系统 B 前端访问 Client2 时，Client2 发现无会话，同样返回 401")]),t._v(" "),e("li",[t._v("前端跳转 CAS Server 进行登录认证（携带 service 及 url 两个参数），CAS 发现已登录，直接跳转回到 service 中")]),t._v(" "),e("li",[t._v("Client2 根据 url 跳转回前端 B，并在地址栏增加 JSESSIONID 参数")]),t._v(" "),e("li",[t._v("前端 B 接收 JSESSIONID 并存放在 B 域的 cookie 中，后续请求均携带 cookie")])]),t._v(" "),e("h3",{attrs:{id:"后端（cas-client-客户端）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端（cas-client-客户端）"}},[t._v("#")]),t._v(" 后端（CAS Client 客户端）")]),t._v(" "),e("h4",{attrs:{id:"_1-跳转页面的-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-跳转页面的-controller"}},[t._v("#")]),t._v(" 1.跳转页面的 Controller")]),t._v(" "),e("p",[t._v("首先后端需要增加一个专门用来跳转页面的 Controller，只需能实现根据传入的参数（要跳转的URL）跳转到对应的页面即可。这个跳转的作用主要在于认证通过后返回前端页面，并建立会话，同时需要将会话的 JSESSIONID 放在 URL 中。")]),t._v(" "),e("h4",{attrs:{id:"_2-重定向改为返回-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-重定向改为返回-json"}},[t._v("#")]),t._v(" 2.重定向改为返回 JSON")]),t._v(" "),e("p",[t._v("在尽量减少侵入的原则下，不对 CAS 本身的代码进行修改，而是在认证过滤之前增加一个自定义的过滤器，将原有的返回 302 重定向状态改为返回 JSON 数据。返回的数据应包括 CAS Client 中已定义的跳转 Controller 地址，用于认证通过后返回到跳转页面的方法并跳回前端页面。")]),t._v(" "),e("h3",{attrs:{id:"前端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),e("h4",{attrs:{id:"_1-处理未登录状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理未登录状态码"}},[t._v("#")]),t._v(" 1.处理未登录状态码")]),t._v(" "),e("p",[t._v("前端可以封装一个发送请求并接收返回值的组件，用于拦截所有的返回结果。与后端约定判断返回的状态码，若需要跳转 CAS Server，则保存当前浏览器地址，向 CAS Server 发送 service 参数，其值为 Client 中跳转页面用的 Controller 地址并向其传入返回前端页面的参数：url。")]),t._v(" "),e("p",[t._v("以 axios 封装的组件为例：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'401'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前浏览器地址，用于后端回调")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" href "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returnData 存放了用于跳转页面的 Controller 地址，最后 url 参数中是要返回的前端地址")]),t._v("\n      window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://cas.server.com:8443/cas/login?service='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?url='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("href"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"_2-获取并保存-client-返回的-jsessionid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取并保存-client-返回的-jsessionid"}},[t._v("#")]),t._v(" 2.获取并保存 Client 返回的 JSESSIONID")]),t._v(" "),e("p",[t._v("登录认证成功后，Client 返回前端时在浏览器地址中会携带 JSESSIONID 参数，前端获取后需要手动存放在 cookie 中，下次请求 Client 资源时将自动携带，Client 获取到 JSESSIONID 后即可取得会话并进行认证。\n以 vue-router 的导航钩子为例：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由导航钩子函数中可进行处理")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSESSIONID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Cookies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JSESSIONID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSESSIONID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去掉浏览器地址栏中的 JSESSIONID 参数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSESSIONID")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"实施"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实施"}},[t._v("#")]),t._v(" 实施")]),t._v(" "),e("p",[t._v("在开发过程中也存在一些具体的坑，此处只记录遇到并解决的坑以及留下的坑。")]),t._v(" "),e("h3",{attrs:{id:"遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),e("h4",{attrs:{id:"每次访问-cas-server-生成不同的-jsessionid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每次访问-cas-server-生成不同的-jsessionid"}},[t._v("#")]),t._v(" 每次访问 CAS Server 生成不同的 JSESSIONID")]),t._v(" "),e("p",[t._v("开发期间发现了 CAS Server 登录后无法保存登录状态的问题，即下次访问 CAS Server 时仍然会被认为未登录，而跳转登录页。经仔细排查发现每次访问 CAS Server 时都会生成不同的 JSESSIONID，即每次访问都会创建新的会话。\n此时应排查 Request 中是否携带了 cookie（其中包含 JSESSIONID），若未携带，如果使用axios封装了请求组件，可以加上配置：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("p",[t._v("若发现 Request 中已携带了 cookie，而 JSESSIONID 仍然会变，可尝试为 CAS Server 设置一个域名解决问题。")]),t._v(" "),e("h4",{attrs:{id:"多个窗口访问不同子系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个窗口访问不同子系统"}},[t._v("#")]),t._v(" 多个窗口访问不同子系统")]),t._v(" "),e("p",[t._v("对于同一个平台下的多个子系统，如果都采用前后端分离的方式，打通了 Client1 的登录认证之后，如何让 Client2 不需要登录直接访问呢？")]),t._v(" "),e("p",[t._v("此处常见的解决办法之一是前端通过 iframe 手动将 JSESSIONID 写入每个子系统域下的 cookie 中。子系统每次调用接口时只需将自己保存的 JSESSIONID 带上，即可保证认证通过。")]),t._v(" "),e("h2",{attrs:{id:"存在的缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在的缺陷"}},[t._v("#")]),t._v(" 存在的缺陷")]),t._v(" "),e("h3",{attrs:{id:"前端只能访问单一的-cas-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端只能访问单一的-cas-client"}},[t._v("#")]),t._v(" 前端只能访问单一的 CAS Client")]),t._v(" "),e("p",[t._v("由于采用了会话机制，目前实现的版本一个前端只能访问对应的一个 CAS Client 资源，对于在同一个前端访问微服务架构多个服务的情况尚未有解决方案。因此只能设计成每个前端访问自己对应的后端。")]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("通过此次调研，基本可以认为基于会话的单点登录认证不适用于前后端分离架构。大部分前后端分离架构最终实现单点登录都是通过共享 session，这在严格意义上说或许不能算是完善的单点登录解决方案。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("h3",{attrs:{id:"调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/sinat_28527463/article/details/103580441",target:"_blank",rel:"noopener noreferrer"}},[t._v("同事博客"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"cas原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas原理"}},[t._v("#")]),t._v(" CAS原理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/tudou1223/p/9018423.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cas单点登录认证原理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/8daeb20abb84",target:"_blank",rel:"noopener noreferrer"}},[t._v("cas登录认证"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/Anumbrella/article/details/89069445",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAS单点登录(十一)——单点退出"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/anumbrella/article/details/80821486",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAS单点登录(一)——初识SSO"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"前后端分离-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离-2"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/fuzhongmin05/article/details/81591072",target:"_blank",rel:"noopener noreferrer"}},[t._v("前后端分离架构概述"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_26769513/article/details/102835031",target:"_blank",rel:"noopener noreferrer"}},[t._v("前后端分离或AJAX下的CAS-SSO跨域流程分析"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_21251983/article/details/87631991",target:"_blank",rel:"noopener noreferrer"}},[t._v("前后端分离的项目集成CAS"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"cas-restful"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cas-restful"}},[t._v("#")]),t._v(" CAS Restful")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://apereo.github.io/cas/6.1.x/protocol/REST-Protocol.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST Protocol"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/cn_yh/article/details/77962467",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Apereo Cas 5.1.3的Restful接口实现SSO及TGC分析"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/yelllowcong/article/details/79290916",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAS之5.2x版本之REST验证ticket（跨系统访问资源）"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[t._v("#")]),t._v(" OAuth")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0 的一个简单解释"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0 的四种方式"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);