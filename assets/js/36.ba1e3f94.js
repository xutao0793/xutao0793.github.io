(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{326:function(t,a,s){t.exports=s.p+"assets/img/vue-ssr.d2ab5f62.jpg"},327:function(t,a,s){t.exports=s.p+"assets/img/vue-csr-ssr.58c49f84.png"},800:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ssr-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssr-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" SSR 概述")]),t._v(" "),n("ul",[n("li",[t._v("什么是 SSR、解决什么问题、优缺点、相关概念")])]),t._v(" "),n("h2",{attrs:{id:"什么是-ssr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssr","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 SSR")]),t._v(" "),n("p",[t._v("SSR（Server-Side Rendering）服务端渲染，在服务端生成的整个页面的 HTML，当客户端请求时直接返回给浏览器显示。")]),t._v(" "),n("blockquote",[n("p",[t._v("事实上，SSR 并不是什么新奇的概念，在前后端分离开发之前很长的一段时间里都是以服务端渲染为主（JSP、PHP），直接在服务端生成完整的 HTML 页面后吐给浏览器显示。")])]),t._v(" "),n("ul",[n("li",[t._v("回到最初的 web 静态页面，提前写好的整个 HTML 页面部署在服务器上，前端请求后直接吐出；")]),t._v(" "),n("li",[t._v("再到服务端使用模板引擎，预定好页面模板，根据前端请求所需求的数据注入模板渲染成页面吐给前端显示；")]),t._v(" "),n("li",[t._v("再到前端 ajax 时代，由前端请求数据，注入到页面而不刷新页面请求；")]),t._v(" "),n("li",[t._v("再到前端 SPA 时代，页面数据和 HTML 渲染全部由前端 js 完成；")]),t._v(" "),n("li",[t._v("再到现在 SSR 同构方案，虽然跟以前的服务器直出页面类似，但仍有一些区别。")])]),t._v(" "),n("p",[t._v('那作为 Vue SSR 主要是指将原来由客户端程序渲染的组件，转移到在服务器端渲染成 HTML 字符串，然后将它直接发送到浏览器，最后再由客户端将这些静态标记（HTML部分片段）"激活"为客户端上完全可交互的应用程序。')]),t._v(" "),n("h2",{attrs:{id:"解决了什么问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决了什么问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决了什么问题")]),t._v(" "),n("p",[t._v("解决了什么问题？或者说为什么要使用服务端渲染？")]),t._v(" "),n("p",[t._v("SSR 要解决的问题，也就是目前 SPA 应用普遍存在的两个问题：")]),t._v(" "),n("ul",[n("li",[t._v("SEO 不友好")]),t._v(" "),n("li",[t._v("白屏时间过长")])]),t._v(" "),n("h3",{attrs:{id:"_1-ssr-可以让页面有更好的-seo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssr-可以让页面有更好的-seo","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. SSR 可以让页面有更好的 SEO")]),t._v(" "),n("p",[n("strong",[t._v("SEO")]),t._v("（Search Engine Optimization，搜索引擎优化）是一种利用搜索引擎规则，提高网站在搜索引擎内自然排名的技术。对大多数搜索引擎，不识别JavaScript 内容，只识别 HTML 内容。")]),t._v(" "),n("p",[t._v("但是，看看在现代 SPA （Single-Page Application，单页应用程序）页面，浏览器请求时返回的 HTML 页面时什么样子的？body 元素内用于页面视图的是一个空元素"),n("code",[t._v('<div id="app"></div>')]),t._v("，所以这样的页面并不能让搜索引擎识别到有关页面的更多信息。但使用 SSR 技术返回的页面却是包含完整内容的 THML 页面，所以 SSR 有利于 SEO。")]),t._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"E:\\blog\\docs\\FE-Framework\\Vue\\image\\vue-html.png",alt:"image-20201108200117451"}}),t._v(" "),n("h3",{attrs:{id:"_2-ssr-可以缩短白屏时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssr-可以缩短白屏时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. SSR 可以缩短白屏时间")]),t._v(" "),n("p",[t._v("现代 SPA 应用的渲染模式也称为 CSR （Client Side Render，客户端渲染），渲染过程全部交给浏览器进行处理，服务器不参与任何渲染。页面初始加载的HTML文档中无内容，需要下载执行JS文件，由浏览器动态生成页面，并通过JS进行页面交互事件与状态管理。")]),t._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"E:\\blog\\docs\\FE-Framework\\Vue\\image\\vue-csr.jpg",alt:"img"}}),t._v(" "),n("p",[t._v("对比下 SSR 渲染过程")]),t._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:s(326),alt:"vue-ssr"}}),t._v(" "),n("p",[t._v("用一张更直观图展示 SSR 相对 CSR 对首屏显示的优势")]),t._v(" "),n("p",[n("img",{attrs:{src:s(327),alt:"vue-csr-ssr"}})]),t._v(" "),n("p",[t._v("所以 SSR 能更好的解决上述两个问题，这也正是 SSR 优点，主要体现在以下三个方面：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("网络链路快：")]),t._v(" "),n("ul",[n("li",[t._v("省去了客户端二次请求数据的网络传输开销：由服务端发出接口请求，将返回数据随 HTML 响应内容一次性传递到客户端，比 CSR 二次请求更快。")]),t._v(" "),n("li",[t._v("服务端网络传输速度更快（可以有更大带宽）、通信路径更短（可以同机房部署）、通信效率也更高（可以走 RPC）")])])]),t._v(" "),n("li",[n("p",[t._v("内容呈现快：")]),t._v(" "),n("ul",[n("li",[t._v("首屏加载时间（FCP）更快：客户端拿到这种 HTML 只能立即渲染出一页空白，二次请求的数据回来之后才能呈现出有意义的内容，而 SSR 返回的 HTML 是有内容（数据）的，客户端能够立刻渲染出有意义的首屏内容（First Contentful Paint）。同时，静态的 HTML 文档让流式文档解析（streaming document parsing）等浏览器优化机制也能发挥其作用。")])])]),t._v(" "),n("li",[n("p",[t._v("可访问性高：即利于 SEO")])])]),t._v(" "),n("h3",{attrs:{id:"ssr-缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssr-缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" SSR 缺点")]),t._v(" "),n("blockquote",[n("p",[t._v("参考"),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/270149478",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSR 它到底香不香？细数 SSR 的利与弊"),n("OutboundLink")],1)])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("服务的稳定性和性能要求")]),t._v(" "),n("p",[t._v("与客户端程序相比，服务端程序对稳定性和性能的要求严苛得多，因此面临"),n("strong",[t._v("后端专业性问题")]),t._v("，Demo 级的 SSR 可能并不难，但高可用的 SSR 服务却绝非易事，如何应对大流量/高并发，如何识别故障，如何降级/快速恢复，哪些环节需要加缓存，缓存如何更新……")])]),t._v(" "),n("li",[n("p",[t._v("工程设施不完善")]),t._v(" "),n("p",[t._v("SSR 最核心的部分是渲染服务，但除此之外还要考虑一整套工程设施，包括本地开发套件（校验 + 构建 + 预览/HMR + 调试）和发布流程（版本管理），但目前这些都不完善。")])]),t._v(" "),n("li",[n("p",[t._v("hydration 的性能损耗")]),t._v(" "),n("p",[t._v("客户端接到 SSR 响应之后，为了支持（基于 JavaScript 的）交互功能，仍然需要创建出组件树，与 SSR 渲染的 HTML 关联起来，并绑定相关的 DOM 事件，让页面变得可交互，这个过程称为 "),n("strong",[t._v("hydration")]),t._v("（客户端激活）。")]),t._v(" "),n("p",[n("strong",[t._v("hydration 所需加载、执行的 JavaScript 代码不见得比 CSR 模式少多少")]),t._v("，这部分工作在客户端执行，受限于用户设备的性能，在较差的设备下可能会造成可感知的不可交互时间：")]),t._v(" "),n("ul",[n("li",[t._v("CSR：可交互但是没有数据（还在异步请求数据，可能会持续很长）")]),t._v(" "),n("li",[t._v("SSR：有数据但是不可交互（拉到 JS 后开始 hydrate 的过程，能看到内容但是不可交互，但一般不会持续很长，受限于网络情况）")])]),t._v(" "),n("p",[t._v("所以在富交互的场景下，SSR 不一定比 CSR 的用户体验更好。")])]),t._v(" "),n("li",[n("p",[t._v("数据请求问题")]),t._v(" "),n("p",[t._v("服务端同步渲染要求先发请求，拿到数据后才开始渲染组件，那么就会面临 3 个问题：")]),t._v(" "),n("ul",[n("li",[t._v("数据依赖要从业务组件中剥离出来")]),t._v(" "),n("li",[t._v("缺失客户端公参（包括 cookie 等客户端会默认带上的 header 请求授权信息）")]),t._v(" "),n("li",[t._v("两边数据协议不同：服务端可能有更高效的通信方式，比如 RPC")])]),t._v(" "),n("p",[t._v("目前主流的 CSR 模式下，数据依赖与业务组件存在紧耦合，要由服务端发起的数据请求全都掺杂在组件生命周期函数中，"),n("strong",[t._v("剥离数据依赖意味着需要同时改造 CSR 代码")]),t._v("。")]),t._v(" "),n("p",[t._v("另外，公参、数据协议等差异对代码复用、可维护性也提出了一些新的挑战，比如，在客户端到SSR服务器的请求中，客户端是携带有cookie数据的。但是在SSR服务器请求后端接口的过程中，却是没有相应的cookie数据的。因此在SSR服务器进行接口请求的时候，我们需要手动拿到客户端的cookie传给后端服务器。")])]),t._v(" "),n("li",[n("p",[t._v("应用场景")]),t._v(" "),n("p",[t._v("无论首屏加载性能还是可访问性，都是对"),n("strong",[t._v("内容密集型")]),t._v("页面才有意义，而对于"),n("strong",[t._v("交互密集型")]),t._v("的页面，SSR 所能提前渲染的内容不多，对用户意义不大，SEO 的必要性也值得商榷。因此，"),n("strong",[t._v("SSR 适用于偏静态的内容展示场景")]),t._v("，典型的，商品详情、攻略、文章等图文混排的场景。所以说不一定非要 100% SSR，根据具体的应用场景，或者渲染特定页面，甚至只渲染个页面框架，CSR 也可以是不错的选择。")])]),t._v(" "),n("li",[n("p",[t._v("Vue SSR 路由模式只能是 history 方式。")]),t._v(" "),n("p",[t._v("vue有两种路由模式，一种是hash模式，比如 "),n("code",[t._v("www.test.com#/hash")]),t._v("这种；还有一种是history模式，比如 "),n("code",[t._v("www.test.com/historya")]),t._v("这种。因为hash模式的路由提交不到服务器上，因此ssr的路由需要采用history的方式。")])])]),t._v(" "),n("h2",{attrs:{id:"扩展内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展内容")]),t._v(" "),n("h3",{attrs:{id:"相关概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关概念")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("SEO")]),t._v(": 搜索引擎优化（Search Engine Optimization）。是一种利用搜索引擎规则，提高网站在搜索引擎内自然排名的技术。对大多数搜索引擎，不识别JavaScript 内容，只识别 HTML 内容。")]),t._v(" "),n("li",[n("strong",[t._v("SPA")]),t._v("：单页面应用（single page application）。动态重写当前的页面来与用户交互，而不需要重新加载整个页面。单页应用做到了前后端分离，后端只负责处理数据提供接口，页面逻辑和页面渲染都交给了前端。CSR、SSR、Prerender 都是基于 SPA。")]),t._v(" "),n("li",[n("strong",[t._v("CSR")]),t._v("：客户端渲染(Client Side Render)。渲染过程全部交给浏览器进行处理，服务器不参与任何渲染。页面初始加载的HTML文档中无内容，需要下载执行JS文件，由浏览器动态生成页面，并通过JS进行页面交互事件与状态管理。")]),t._v(" "),n("li",[n("strong",[t._v("SSR")]),t._v("：服务端渲染(Server Side Render)。DOM树在服务端生成，而后返回给前端。即当前页面的内容是服务器生成好一次性给到浏览器的进行渲染的。")]),t._v(" "),n("li",[n("strong",[t._v("Prerender")]),t._v("：预渲染。打包的阶段就预先渲染页面，所以在请求到 index.html时 就已经是渲染过的内容，适用于纯静态的页面。")]),t._v(" "),n("li",[n("strong",[t._v("同构")]),t._v("：客户端渲染和服务器端渲染的结合，在服务器端执行一次，用于实现服务器端渲染（首屏直出），在客户端再执行一次，用于接管页面交互(绑定事件)，核心解决SEO和首屏渲染慢的问题。采用同构思想的框架："),n("code",[t._v("Nuxt.js")]),t._v("（基于Vue）、"),n("code",[t._v("Next.js")]),t._v("（基于React）。")])]),t._v(" "),n("h3",{attrs:{id:"页面性能指标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面性能指标","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面性能指标")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TTFB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("首字节"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nresponseStart 网络请求 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 服务端处理时间 的整体预估，用来评估整个网络链路 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 服务端处理的效率\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DCL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Dom Ready"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DOMContentLoadedEventEnd\n整体"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" Tree 解析完成的标识"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("解析全部完成，已生成 Render Tree 等待 Paint 出去\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("首次绘制时间"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("paint \n任何和开始不一样的渲染都算"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("即首次绘制开始时间，也是白屏的开始时间点\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FCP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("首次有内容绘制"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" First Contentful Paint \n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" 第一个内容 Paint 上去 一般来说"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FP")]),t._v(" 和 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FCP")]),t._v(" 差距非常的小\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FMP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("首次有意义的绘制"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" First Meaningful Paint \n根据业务不同"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 说的是页面最重要部分的渲染"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("这个很难评估"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 因为每个业务都不同\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LCP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("最大内容绘制"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Largest Contentful Paint \n占地儿最大的绘制出来了"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 说明用户看到首屏内容是当前最有效的\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TTI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可交互时间"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Time to Interactive\n表示网页第一次 完全达到可交互状态 的时间点。可交互状态指的是页面上的"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),t._v("组件是可以交互的（可以响应按钮的点击或在文本框输入文字等）"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TTI")]),t._v("很重要，因为"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TTI")]),t._v("可以让我们了解我们的产品需要多久可以真正达到“可用”的状态。\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("页面完成加载时间"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 所有资源结束 onLoadEvent \n例如js css资源，js里可能会再去请求 图片和css资源，要等到这些请求返回，才算结束\n")])])]),n("p",[n("img",{attrs:{src:"E:%5Cblog%5Cdocs%5CFE-Framework%5CVue%5Cimage%5Cpage-kpi.jpg",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"E:%5Cblog%5Cdocs%5CFE-Framework%5CVue%5Cimage%5Cpage-kpi-chrome-devtools-perf.jpg",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue SSR 指南"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/138356519",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS核心理论之《SPA、CSR、SSR、Prerender原理浅析》"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/90746589",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务端渲染(SSR)"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/270149478",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSR 它到底香不香？细数 SSR 的利与弊"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/142635124",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能指标"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/98880815",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web性能领域常见的专业术语"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);