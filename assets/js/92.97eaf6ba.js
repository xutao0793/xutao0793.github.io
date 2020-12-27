(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{611:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npx-包运行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npx-包运行命令","aria-hidden":"true"}},[s._v("#")]),s._v(" npx 包运行命令")]),s._v(" "),t("p",[s._v("npx 是一种在 npm 中的安装工具，Node 自带 npm 模块，在 npm 5.2.0 的时候发现会买一送一，自动安装了 npx，所以可以直接使用 npx 命令。")]),s._v(" "),t("p",[s._v("那么它解决了什么问题？")]),s._v(" "),t("p",[s._v("在以前，我们很多 cli 工具都是需要全局安装，然后才可以在命令行窗口直接使用。比如全局安装"),t("code",[s._v("npm i -g typescript")]),s._v("后可以直接使用"),t("code",[s._v("tsc")]),s._v("命令。")]),s._v(" "),t("p",[s._v("但是全局安装占用空间，并且很多时候我们只是使用一次，并不需要全局安装，或者很多全局安装后很少使用。另外在团队协作中还有版本不一致的问题。")]),s._v(" "),t("p",[s._v("另外，如果我们本地项目安装了某些工具模块，如果想使用命令行运行一次查看，我们要像如下一样输入一长串命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("node-modules/.bin/tsc --version\n")])])]),t("p",[s._v("或者在 package.json 的 script 字段配置一条命令：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tsc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("所以在以前如果想用某个模块自带的命令，只能有两种办法：")]),s._v(" "),t("ul",[t("li",[s._v("全局安装使用")]),s._v(" "),t("li",[s._v("输入一长串路径命令：如"),t("code",[s._v("node-modules/.bin/tsc --version")])])]),s._v(" "),t("p",[s._v("那 npx 就是能解决以上两个问题，并且如果都没安装某个模块，想想临时使用它的命令，npx 也会帮你临时下载使用。")]),s._v(" "),t("p",[t("strong",[s._v("语法：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npx <command>\n")])])]),t("p",[s._v("使用 npx 时，它会做以下事件：")]),s._v(" "),t("ul",[t("li",[s._v("会到当前目录下的 node_modules/.bin 路径查找命令，如果没有就到环境变量$PATH 里面查找全局命令，检查命令是否存在，存在就使用。")]),s._v(" "),t("li",[s._v("没找到就临时下载最新版本到一个临时目录，完成命令要求，使用完之后不会在你的本机或者项目留下任何东西。")])]),s._v(" "),t("p",[t("strong",[s._v("参数：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--no-install      强制使用本地模块\n--ignore-existing 强制下载远程模块\n")])])]),t("p",[s._v("如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install 参数。如果本地不存在该模块，就会报错。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ npx --no-install tsc\n")])])]),t("p",[s._v("反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing 参数。比如，本地已经全局安装了 create-react-app，但还是想使用远程模块，就用这个参数。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ npx --ignore-existing tsc\n")])])]),t("p",[t("strong",[s._v("参考链接：")])]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/02/npx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰：npx 使用教程"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);