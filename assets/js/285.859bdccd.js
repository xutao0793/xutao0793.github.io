(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{851:function(v,_,e){"use strict";e.r(_);var l=e(0),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"es面向对象知识目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es面向对象知识目录","aria-hidden":"true"}},[v._v("#")]),v._v(" ES面向对象知识目录")]),v._v(" "),e("p",[v._v("JS语言和宿主的基础设施由对象来提供，并且 JavaScript 程序即是一系列互相通讯的对象集合。")]),v._v(" "),e("h2",{attrs:{id:"es中理解对象概念的四个维度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es中理解对象概念的四个维度","aria-hidden":"true"}},[v._v("#")]),v._v(" ES中理解对象概念的四个维度")]),v._v(" "),e("p",[v._v("解读JS对象核心概念的四个维度：")]),v._v(" "),e("ul",[e("li",[v._v("单一对象(实例对象）：属性类型、属性描述符、属性操作（获取、遍历、删除）、对象保护（不可扩展、封闭、冻结）")]),v._v(" "),e("li",[v._v("构造函数：主要作用作为实例工厂用来创建对象实例\n"),e("ul",[e("li",[v._v("普通函数调用：类型转换，主要是原始值类型的构造函数")]),v._v(" "),e("li",[v._v("new调用：创造实例对象")])])]),v._v(" "),e("li",[v._v("原型和原型链：实例对象原型、构造函数原型、原生原型、纯对象")]),v._v(" "),e("li",[v._v("构造函数实现面向对象的核心概念")]),v._v(" "),e("li",[v._v("class实现面向对象的核心概念")])]),v._v(" "),e("h3",{attrs:{id:"面向对象核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象核心概念","aria-hidden":"true"}},[v._v("#")]),v._v(" 面向对象核心概念")]),v._v(" "),e("blockquote",[e("p",[v._v("OOP: Object Oriented Programming")])]),v._v(" "),e("ul",[e("li",[v._v("对象： 对象是最核心概念，在JS中一切实现都依赖于对象")]),v._v(" "),e("li",[v._v("类：   类抽象了对象的共同特征")]),v._v(" "),e("li",[v._v("封装： 封装实现了数据隐藏和数据访问权限的设置，比如私有属性的保护。")]),v._v(" "),e("li",[v._v("继承： 继承非常优雅地实现了代码的重用。")]),v._v(" "),e("li",[v._v("多态： 通过函数的重载或方法的覆写实现自定义行为")]),v._v(" "),e("li",[v._v("聚合： 功能实现的最小化")])]),v._v(" "),e("blockquote",[e("p",[v._v("继承是ES中面向对象概念中最重要的。"),e("br"),v._v("构造函数实现面向对象的继承：实例属性继承、原型属性继承、组合继承、construcor属性重写"),e("br"),v._v("\nClass类实现面向对象的继承："),e("code",[v._v("extends / super")])])]),v._v(" "),e("h2",{attrs:{id:"es-基于原型的面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es-基于原型的面向对象","aria-hidden":"true"}},[v._v("#")]),v._v(" ES 基于原型的面向对象")]),v._v(" "),e("ul",[e("li",[v._v("原型与原型对象\n"),e("ul",[e("li",[v._v("对象原型"),e("code",[v._v("[[prototype]]")])]),v._v(" "),e("li",[v._v("构造函数原型"),e("code",[v._v("F.prototype")])]),v._v(" "),e("li",[v._v("原生原型"),e("code",[v._v("Object.prototype")])]),v._v(" "),e("li",[v._v("纯对象"),e("code",[v._v("Object.create(null)")])])])]),v._v(" "),e("li",[v._v("构造函数实现面向对象")]),v._v(" "),e("li",[v._v("class实现面向对象")])]),v._v(" "),e("h2",{attrs:{id:"es-对象操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es-对象操作","aria-hidden":"true"}},[v._v("#")]),v._v(" ES 对象操作")]),v._v(" "),e("ul",[e("li",[v._v("对象创建\n"),e("ul",[e("li",[v._v("字面量形式")]),v._v(" "),e("li",[v._v("通过 Object.create()")]),v._v(" "),e("li",[v._v("通过构造函数 new + Function")]),v._v(" "),e("li",[v._v("通过类 new + Class")])])]),v._v(" "),e("li",[v._v("对象属性\n"),e("ul",[e("li",[v._v("属性分类\n"),e("ul",[e("li",[v._v("数据属性")]),v._v(" "),e("li",[v._v("访问器属性")]),v._v(" "),e("li",[v._v("内部属性")])])]),v._v(" "),e("li",[v._v("属性描述符：设置对象属性的可操作性\n"),e("ul",[e("li",[v._v("是否只读 writable")]),v._v(" "),e("li",[v._v("是否能枚举 enumerable")]),v._v(" "),e("li",[v._v("是否能删除或是否可配置 configurable")])])]),v._v(" "),e("li",[v._v("属性定义\n"),e("ul",[e("li",[v._v("点.")]),v._v(" "),e("li",[v._v("中括号[]")]),v._v(" "),e("li",[v._v("Object.defineProperty() / Object.defineProperties()")])])]),v._v(" "),e("li",[v._v("属性操作\n"),e("ul",[e("li",[v._v("操作对象属性\n"),e("ul",[e("li",[v._v("获取属性")]),v._v(" "),e("li",[v._v("遍历属性")]),v._v(" "),e("li",[v._v("删除属性")])])]),v._v(" "),e("li",[v._v("操作整个对象\n"),e("ul",[e("li",[v._v("阻止扩展对象")]),v._v(" "),e("li",[v._v("封闭对象")]),v._v(" "),e("li",[v._v("冻结对象")])])])])])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);