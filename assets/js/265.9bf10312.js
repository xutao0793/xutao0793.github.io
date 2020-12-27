(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{829:function(t,v,_){"use strict";_.r(v);var e=_(0),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"object"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object")]),t._v(" "),_("ul",[_("li",[t._v("作为纯函数 "),_("code",[t._v("Object()")])]),t._v(" "),_("li",[t._v("作为构造函数创建实例对象 "),_("code",[t._v("new Object()")])]),t._v(" "),_("li",[t._v("作为函数对象 "),_("code",[t._v("Object")])]),t._v(" "),_("li",[t._v("原型对象 "),_("code",[t._v("Object.prototype")])])]),t._v(" "),_("h2",{attrs:{id:"对象api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象api","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象API")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法")]),t._v(" "),_("th",[t._v("作用")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("Object.defineProperty(obj,prop)")])]),t._v(" "),_("td",[t._v("定义属性")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.defineProperties(obj,props)")])]),t._v(" "),_("td",[t._v("批量定义属性")]),t._v(" "),_("td",[_("code",[t._v("props")]),t._v("是对象形式")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.getOwnPropertyDescriptor(obj,prop)")])]),t._v(" "),_("td",[t._v("获取对象指定属性的描述符")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.getOwnPropertyDescriptors()")])]),t._v(" "),_("td",[t._v("获取对象所有属性的描述符")]),t._v(" "),_("td",[t._v("返回值是嵌套对象")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.preventExtensions(obj)")])]),t._v(" "),_("td",[t._v("对象不可扩展,即对象自身不能添加属性了,")]),t._v(" "),_("td",[t._v("但属性仍可以删除,对象原型上可以添加属性")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.isExtensible(obj)")])]),t._v(" "),_("td",[t._v("判断对象是否可添加属性")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.seal()")])]),t._v(" "),_("td",[t._v("封闭对象,即对象变得不可扩展且不可配置")]),t._v(" "),_("td",[t._v("实际上会在一个现有对象上调用 object.preventExtensions(),并且把对象所有现有属性标记为"),_("code",[t._v("[[configurable]] = false")]),t._v(".密封对象主要表现为不能添加属性,原有属性也不可删除了.")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.isSealed(obj)")])]),t._v(" "),_("td",[t._v("判断对象是否是封闭的")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.freeze(obj)")])]),t._v(" "),_("td",[t._v("冻结对象")]),t._v(" "),_("td",[t._v("即"),_("code",[t._v("[[writable]]")]),t._v(" "),_("code",[t._v("[[configurable]]")]),t._v("为"),_("code",[t._v("false")]),t._v(",表现为属性值不能修改,删除,不能添加属性,不能重写属性描述符等,但原有属性可以检举遍历,但不能修改"),_("code",[t._v("[[enumerable]]")]),t._v("的值了")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.isFrozen(obj)")])]),t._v(" "),_("td",[t._v("判断对象是否冻结的")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.prototype.hasOwnProperty(obj,prop)")])]),t._v(" "),_("td",[t._v("判断该属性是否是对象自身属性")]),t._v(" "),_("td",[t._v("常用于区别属性是对象的还是对象原型的")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("属性与属性值相关(key-value)")])]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.getOwnPropertyNames(obj)")])]),t._v(" "),_("td",[t._v("自身可枚举和不可枚举属性，但不包括 Symbol 类型的属性")]),t._v(" "),_("td",[t._v("返回值是属性的数组")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.getOwnPropertySymbols(obj)")])]),t._v(" "),_("td",[t._v("自身 Symbol 类型的属性")]),t._v(" "),_("td",[t._v("Symbol 类型属性的数组")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.keys(obj)")])]),t._v(" "),_("td",[t._v("自身可枚举的属性和 symbol 类型属性,不包括不可枚举的属性")]),t._v(" "),_("td",[t._v("区别于 for-in 可遍历对象原型上的属性")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.values(obj)")])]),t._v(" "),_("td",[t._v("自身可枚举的属性值和 symbol 类型属性值,不包括不可枚举的属性值")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.entries(obj)")])]),t._v(" "),_("td",[t._v("自身属性以[k,v]嵌套数组返回")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.assign(target_obj, ...source)")])]),t._v(" "),_("td",[t._v("自身属性合并,同名的会被覆盖")]),t._v(" "),_("td",[t._v("返回全并后目标对象")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.is(val1,val2)")])]),t._v(" "),_("td",[t._v("判断两个值是否相等")]),t._v(" "),_("td",[t._v("不进行隐式转换,深度相等, "),_("code",[t._v("==")]),t._v("会做隐式转换后才比较, "),_("code",[t._v("===")]),t._v("会对"),_("code",[t._v("+0")]),t._v("等于"),_("code",[t._v("-0")]),t._v(", "),_("code",[t._v("NaN")]),t._v("不等于"),_("code",[t._v("NaN")])])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("原型 prototype 操作相关")])]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.create(proto)")])]),t._v(" "),_("td",[t._v("创建一个新对象,以"),_("code",[t._v("proto")]),t._v("作为它的原型对象")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.getPrototypeOf(obj)")])]),t._v(" "),_("td",[t._v("返回给定对象的原型对象")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.setPrototypeOf(obj, prototype)")])]),t._v(" "),_("td",[t._v("将"),_("code",[t._v("obj")]),t._v("的原型对象设置为"),_("code",[t._v("prototype")])]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Object.prototype.isPrototypeOf(object)")])]),t._v(" "),_("td",[t._v("检查对象"),_("code",[t._v("object")]),t._v("是否存在于另一个对象的原型链上。")]),t._v(" "),_("td",[_("code",[t._v("prototypeObj.isPrototypeOf(object)")])])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);