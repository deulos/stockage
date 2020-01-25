(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto my-5",attrs:{id:"app"}},[r("div",{staticClass:"flex"},[r("add-item",{ref:"add",attrs:{item:t.add}}),r("button",{staticClass:"border bg-blue-500 px-4 py-1 ml-4",on:{click:function(e){return t.addArticle()}}},[t._v(" Add ")])],1),r("div",{staticClass:"flex -mx-10 mt-5"},[r("div",{staticClass:"w-1/2 px-10"},[r("items-list",{attrs:{items:t.articles}})],1),r("div",{staticClass:"w-1/2 px-10"},[r("items-list",{attrs:{items:t.articlesByGroup}})],1)])])},a=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("4de4"),r("c740"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("ade3")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",[t._v(" Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"py-1 border w-20",attrs:{type:"text"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})]),r("label",{staticClass:"ml-4"},[t._v(" Group: "),r("input-number",{staticClass:"py-1 border w-20",model:{value:t.item.group,callback:function(e){t.$set(t.item,"group",t._n(e))},expression:"item.group"}})],1),r("label",{staticClass:"ml-4"},[t._v(" Price: "),r("currency-input",{staticClass:"py-1 border w-20",attrs:{"distraction-free":!1},model:{value:t.item.price,callback:function(e){t.$set(t.item,"price",e)},expression:"item.price"}})],1)])},s=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("input",{attrs:{type:"text"},domProps:{value:t.value},on:{keydown:t.checkKey,input:function(e){return t.$emit("input",e.target.value)}}})},l=[],p=(r("a9e3"),/Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right|Home|Shift|Alt/),d={name:"InputNumber",props:{maxlength:[Number],value:[String,Number]},data:function(){return{chars:/[0-9]/}},methods:{checkKey:function(t){!this.chars||p.test(t.key)||this.chars.test(t.key)||t.preventDefault()}}},f=d,m=r("2877"),b=Object(m["a"])(f,u,l,!1,null,null,null),h=b.exports,v={name:"AddItem",components:{InputNumber:h},props:{item:{type:Object,required:!0}},methods:{reset:function(){this.item.name=void 0,this.item.group=void 0,this.item.price=void 0}}},y=v,g=Object(m["a"])(y,c,s,!1,null,null,null),w=g.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[t._m(0),t._l(t.items,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.group))]),r("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")])])}))],2)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"text-xl text-left"},[r("th",{staticClass:"font-normal pr-10"},[t._v("Name")]),r("th",{staticClass:"font-normal pr-10"},[t._v("Group")]),r("th",{staticClass:"font-normal text-center"},[t._v("Price")])])}],_={name:"ItemsList",props:{items:{type:Array,required:!0}}},j=_,A=Object(m["a"])(j,O,x,!1,null,null,null),C=A.exports,P=r("d4ec"),k=function t(e,r,n){Object(P["a"])(this,t),this.name=e,this.group=r,this.price=n},S=(r("a15b"),r("bee2")),E=function(){function t(e){Object(P["a"])(this,t),this.articles=[],this.group=this.id=e}return Object(S["a"])(t,[{key:"addArticle",value:function(t){this.articles.push(t)}},{key:"name",get:function(){var t={},e=!0,r=!1,n=void 0;try{for(var i,a=this.articles[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;t[o.name]=!0}}catch(c){r=!0,n=c}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}return Object.keys(t).join(", ")}},{key:"price",get:function(){var t=0;return this.articles.forEach((function(e){return t+=e.price})),t}}]),t}();function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={name:"App",components:{AddItem:w,ItemsList:C},data:function(){return{add:{},articles:[]}},computed:{articlesByGroup:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var i,a=this.articles[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value,c=this.getGroup(o.group,t),s=c.index,u=c.group;u.addArticle(o),t[s]||(t[s]=u)}}catch(l){r=!0,n=l}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}return t.sort((function(t,e){return t.id>e.id}))}},created:function(){this.articles=[new k("AA",1,100),new k("BB",1,50),new k("CC",2,75),new k("AA",1,20),new k("AA",0,100),new k("BB",2,75),new k("CC",2,80),new k("AA",0,20)]},methods:{addArticle:function(){var t=D({},this.add),e=t.name,r=t.group,n=t.price;e&&r&&n&&(this.articles.push(new k(e,r,n)),this.$refs.add.reset())},getGroup:function(t,e){var r=-1;return 0!==t&&(r=e.findIndex((function(e){return e.id===t}))),-1===r?{index:e.length,group:new E(t)}:{index:r,group:e[r]}}}},I=B,N=Object(m["a"])(I,i,a,!1,null,null,null),G=N.exports,L=r("17c3"),M=r.n(L),T=r("d413");r("9c9e");n["a"].config.productionTip=!1,n["a"].use(M.a,{symbol:"€",thousandsSeparator:".",fractionCount:2,fractionSeparator:",",symbolPosition:"back",symbolSpacing:!0}),n["a"].use(T["a"],{globalOptions:{currency:"EUR",locale:"de-DE"}}),new n["a"]({render:function(t){return t(G)}}).$mount("#app")},"9c9e":function(t,e,r){}});
//# sourceMappingURL=app.31770241.js.map