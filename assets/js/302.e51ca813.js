(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{879:function(t,v,a){"use strict";a.r(v);var _=a(0),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"表单元素-form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单元素-form","aria-hidden":"true"}},[t._v("#")]),t._v(" 表单元素 form")]),t._v(" "),a("ul",[a("li",[t._v("认识表单form")]),t._v(" "),a("li",[t._v("表表单的各类元素和属性")]),t._v(" "),a("li",[t._v("表单的校验")]),t._v(" "),a("li",[t._v("表单数据的提交和用JS提交表单数据")]),t._v(" "),a("li",[t._v("使用CSS样式化表单和一些高级CSS技巧")]),t._v(" "),a("li",[t._v("自定义一个表单组件")])]),t._v(" "),a("h2",{attrs:{id:"认识表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识表单","aria-hidden":"true"}},[t._v("#")]),t._v(" 认识表单")]),t._v(" "),a("p",[t._v("前面讲的所有HTML元素都是从服务端获取数据在用户终端展示，而HTML表单及其相关元素则是反向，收集客户端输入的数据发送给服务端。所以HTML表单是用户和应用程序进行交互的主要入口。")]),t._v(" "),a("p",[t._v("HTML表单是由一个或多个输入的小部件组成。这些小部件即可做为form的子元素，也可在form元素之外作为单独的HTML元素，通常这些小部件能够清楚地指示用户输入表单所需的内容。在web设计中，表单设计所涉及的用户体验考虑是非常多的，具体可以查看相关UI设计或用户体验资源。")]),t._v(" "),a("p",[t._v("一个表单内容基本包含在"),a("code",[t._v("<form></form>")]),t._v("元素之内。最常用的表单控件包括"),a("code",[t._v("input")]),t._v(" "),a("code",[t._v("label")]),t._v(" "),a("code",[t._v("botton")]),t._v(" "),a("code",[t._v("select")]),t._v(" "),a("code",[t._v("option")]),t._v("等。")]),t._v(" "),a("p",[t._v("其中"),a("code",[t._v("input")]),t._v("元素是所有HTML元素中最强大也最复杂的，目前"),a("code",[t._v("input")]),t._v("元素"),a("code",[t._v("type")]),t._v("特性有22个值表示22种不同UI效果的输入控件。input元素有大量 type 属性和 attribute 属性，之间相互组合。很多 attribute 属性只在特定的几个 type 类型上有效。")]),t._v(" "),a("ul",[a("li",[t._v("form\n"),a("ul",[a("li",[t._v("label")]),t._v(" "),a("li",[t._v("button")]),t._v(" "),a("li",[t._v("textarea")]),t._v(" "),a("li",[t._v("select")]),t._v(" "),a("li",[t._v("option")]),t._v(" "),a("li",[t._v("optgroup")]),t._v(" "),a("li",[t._v("fieldset")]),t._v(" "),a("li",[t._v("legend")]),t._v(" "),a("li",[t._v("datalist  -html5新增")]),t._v(" "),a("li",[t._v("keygen    -html5新增")]),t._v(" "),a("li",[t._v("output    -html5新增")]),t._v(" "),a("li",[t._v("input\n"),a("ul",[a("li",[t._v("text      --默认值")]),t._v(" "),a("li",[t._v("password")]),t._v(" "),a("li",[t._v("radio")]),t._v(" "),a("li",[t._v("checkbox")]),t._v(" "),a("li",[t._v("range")]),t._v(" "),a("li",[t._v("file")]),t._v(" "),a("li",[t._v("button")]),t._v(" "),a("li",[t._v("reset")]),t._v(" "),a("li",[t._v("submit")]),t._v(" "),a("li",[t._v("image")]),t._v(" "),a("li",[t._v("hidden")]),t._v(" "),a("li",[t._v("search    -html5新增")]),t._v(" "),a("li",[t._v("number    -html5新增")]),t._v(" "),a("li",[t._v("color     -html5新增")]),t._v(" "),a("li",[t._v("tel       -html5新增")]),t._v(" "),a("li",[t._v("email     -html5新增")]),t._v(" "),a("li",[t._v("url       -html5新增")]),t._v(" "),a("li",[t._v("time      -html5新增")]),t._v(" "),a("li",[t._v("date      -html5新增")]),t._v(" "),a("li",[t._v("datetime-local    -html5新增")]),t._v(" "),a("li",[t._v("month     -html5新增")]),t._v(" "),a("li",[t._v("week      -html5新增")])])])])])]),t._v(" "),a("h2",{attrs:{id:"form-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-元素","aria-hidden":"true"}},[t._v("#")]),t._v(" form 元素")]),t._v(" "),a("p",[t._v("form元素是一个表单包裹元素，它的特性主要与表单数据提交的HTTP请求相关，除了HTML元素的全局属性外，还包括：")]),t._v(" "),a("ul",[a("li",[t._v("action: 表单数据提交的URL")]),t._v(" "),a("li",[t._v("method：表单数据提交HTTP方法，只支持"),a("code",[t._v("GET / POST")])]),t._v(" "),a("li",[t._v("enctype: 表单数据提交的编码格式，只在"),a("code",[t._v('method="POST"')]),t._v("有用。值类型包括"),a("code",[t._v("application/x-www-form-urlencoded")]),t._v("(默认值) / "),a("code",[t._v("multipart/form-data")]),t._v(" / "),a("code",[t._v("text/plain")])]),t._v(" "),a("li",[t._v("accept-charset: 表单数据的字符集，默认是表单所在文档html的字符集")]),t._v(" "),a("li",[t._v("name: 表单名称，要求唯一性")]),t._v(" "),a("li",[t._v("target：对action URL返回值打开页面方式，值与超链接a元素一样")]),t._v(" "),a("li",[t._v("autocomplete：on/off 是否启用表单的input框输入自动完成功能，HTML5新增")]),t._v(" "),a("li",[t._v("novalidate：表单提交时不进行验证，HTML5新增")])]),t._v(" "),a("p",[t._v("表单元素的HTTP请求发送，默认绑定在"),a("code",[t._v("type=submit")]),t._v("的"),a("code",[t._v("input")]),t._v("或"),a("code",[t._v("button")]),t._v("子元素上或者在JS中调用form对象的sumbit方法"),a("code",[t._v("form.submit()")]),t._v("。如果要劫持form表单自动提交HTTP请求的行为，可以通过监听form元素的"),a("code",[t._v("submit")]),t._v("事件，然后阻止目标元素的默认行为，使用自定义方法。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里使用常规的元素获取方式，但实际上获取表单元素方式有多种，包括DOM对象中特定的form元素API")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" form "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myForm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...然后接管表单的提交事件")]),t._v("\nform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"submit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止表单元素的默认发送行为")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);