(this.webpackJsonp=this.webpackJsonp||[]).push([[14,16,17,27],{100:function(t,n,e){"use strict";var r=e(101),i=e(40),o=e(85),s={};e(7)(s,e(13)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(s,{next:i(1,e)}),o(t,n+" Iterator")}},101:function(t,n,e){var r=e(5),i=e(102),o=e(84),s=e(79)("IE_PROTO"),u=function(){},a=function(){var t,n=e(43)("iframe"),r=o.length;for(n.style.display="none",e(104).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[s]=t):e=a(),void 0===n?e:i(e,n)}},102:function(t,n,e){var r=e(35),i=e(5),o=e(80);t.exports=e(11)?Object.defineProperties:function(t,n){i(t);for(var e,s=o(n),u=s.length,a=0;u>a;)r.f(t,e=s[a++],n[e]);return t}},103:function(t,n,e){var r=e(34),i=e(77),o=e(83)(!1),s=e(79)("IE_PROTO");t.exports=function(t,n){var e,u=i(t),a=0,c=[];for(e in u)e!=s&&r(u,e)&&c.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~o(c,e)||c.push(e));return c}},104:function(t,n,e){var r=e(3).document;t.exports=r&&r.documentElement},105:function(t,n,e){var r=e(34),i=e(33),o=e(79)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},106:function(t,n,e){var r=e(5),i=e(41),o=e(13)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||null==(e=r(s)[o])?n:i(e)}},107:function(t,n,e){var r=e(30),i=e(12),o=e(6);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*o((function(){e(1)})),"Object",s)}},108:function(t,n,e){var r=e(30),i=e(6),o=e(8),s=/"/g,u=function(t,n,e,r){var i=String(o(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(s,"&quot;")+'"'),u+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),r(r.P+r.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},109:function(t,n,e){var r=e(30);r(r.S,"Array",{isArray:e(82)})},110:function(t,n,e){"use strict";var r=e(30),i=e(76)(0),o=e(75)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},111:function(t,n,e){"use strict";var r=e(86),i=e(5),o=e(106),s=e(36),u=e(31),a=e(37),c=e(17),l=e(6),f=Math.min,p=[].push,h=!l((function(){RegExp(4294967295,"y")}));e(38)("split",2,(function(t,n,e,l){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,s,u,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,l+"g");(o=c.call(v,i))&&!((s=v.lastIndex)>f&&(a.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(a,o.slice(1)),u=o[0].length,f=s,a.length>=h));)v.lastIndex===o.index&&v.lastIndex++;return f===i.length?!u&&v.test("")||a.push(""):a.push(i.slice(f)),a.length>h?a.slice(0,h):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):v.call(String(i),e,r)},function(t,n){var r=l(v,t,this,n,v!==e);if(r.done)return r.value;var c=i(t),p=String(this),d=o(c,RegExp),g=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),x=new d(h?c:"^(?:"+c.source+")",m),y=void 0===n?4294967295:n>>>0;if(0===y)return[];if(0===p.length)return null===a(x,p)?[p]:[];for(var b=0,k=0,O=[];k<p.length;){x.lastIndex=h?k:0;var S,L=a(x,h?p:p.slice(k));if(null===L||(S=f(u(x.lastIndex+(h?0:k)),p.length))===b)k=s(p,k,g);else{if(O.push(p.slice(b,k)),O.length===y)return O;for(var _=1;_<=L.length-1;_++)if(O.push(L[_]),O.length===y)return O;k=b=S}}return O.push(p.slice(b)),O}]}))},112:function(t,n,e){"use strict";var r=e(5),i=e(31),o=e(36),s=e(37);e(38)("match",1,(function(t,n,e,u){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=u(e,t,this);if(n.done)return n.value;var a=r(t),c=String(this);if(!a.global)return s(a,c);var l=a.unicode;a.lastIndex=0;for(var f,p=[],h=0;null!==(f=s(a,c));){var v=String(f[0]);p[h]=v,""===v&&(a.lastIndex=o(c,i(a.lastIndex),l)),h++}return 0===h?null:p}]}))},113:function(t,n,e){var r=e(33),i=e(80);e(107)("keys",(function(){return function(t){return i(r(t))}}))},114:function(t,n,e){"use strict";e(108)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},120:function(t,n,e){"use strict";e.r(n);e(92),e(113),e(93),e(114);var r=e(87),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.a)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link}},methods:{isExternal:r.e,isMailto:r.f,isTel:r.g}},o=e(2),s=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer nofollow"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);n.default=s.exports},123:function(t,n,e){"use strict";e.r(n);e(88);var r=e(87),i={components:{NavLink:e(120).default},computed:{nav:function(){return this.$site.themeConfig.nav||[]},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.h)(t),{items:(t.items||[]).map(r.h)})}))}},methods:{isActive:r.d}},o=e(2),s=Object(o.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return this.userLinks.length?n("b-nav",[this._l(this.userLinks,(function(t){return n("li",{key:t.link},[n("NavLink",{attrs:{item:t}})],1)})),this._v(" "),n("li",[n("NavLink",{attrs:{item:{text:"Kontakt",link:"/kontakt"}}})],1)],2):this._e()}),[],!1,null,null,null);n.default=s.exports},145:function(t,n,e){"use strict";e.r(n);var r=e(2),i=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout-sidebar-button",on:{click:function(n){return t.$emit("toggle-sidebar")}}},[e("div",{staticClass:"icon menu-icon"},[e("svg",{staticClass:"menu-icon__bottom",attrs:{viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:"15",height:"15"}},[e("g",{attrs:{transform:"translate(904.92214,-879.1482)"}},[e("path",{attrs:{d:"\n        m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n        -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n        0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n        -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n        -174.68583 0.6895,0 26.281,25.03215 56.8701,\n        55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n        -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n        -104.0616 -231.873,-231.248 z\n      "}})])]),t._v(" "),e("svg",{staticClass:"menu-icon__top",attrs:{viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:"15",height:"15"}},[e("g",{attrs:{transform:"translate(904.92214,-879.1482)"}},[e("path",{attrs:{d:"\n        m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n        -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n        0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n        -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n        -174.68583 0.6895,0 26.281,25.03215 56.8701,\n        55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n        -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n        -104.0616 -231.873,-231.248 z\n      "}})])])])])}),[],!1,null,null,null);n.default=i.exports},232:function(t,n,e){"use strict";e.r(n);var r=e(145);var i={components:{NavLinks:e(123).default,SidebarButton:r.default},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},o=e(2),s=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(n){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[!1!==t.$site.themeConfig.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);n.default=s.exports},75:function(t,n,e){"use strict";var r=e(6);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},76:function(t,n,e){var r=e(39),i=e(81),o=e(33),s=e(31),u=e(89);t.exports=function(t,n){var e=1==t,a=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=n||u;return function(n,u,v){for(var d,g,m=o(n),x=i(m),y=r(u,v,3),b=s(x.length),k=0,O=e?h(n,b):a?h(n,0):void 0;b>k;k++)if((p||k in x)&&(g=y(d=x[k],k,m),t))if(e)O[k]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return k;case 2:O.push(d)}else if(l)return!1;return f?-1:c||l?l:O}}},77:function(t,n,e){var r=e(81),i=e(8);t.exports=function(t){return r(i(t))}},78:function(t,n){t.exports={}},79:function(t,n,e){var r=e(15)("keys"),i=e(16);t.exports=function(t){return r[t]||(r[t]=i(t))}},80:function(t,n,e){var r=e(103),i=e(84);t.exports=Object.keys||function(t){return r(t,i)}},81:function(t,n,e){var r=e(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},82:function(t,n,e){var r=e(32);t.exports=Array.isArray||function(t){return"Array"==r(t)}},83:function(t,n,e){var r=e(77),i=e(31),o=e(91);t.exports=function(t){return function(n,e,s){var u,a=r(n),c=i(a.length),l=o(s,c);if(t&&e!=e){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}}},84:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},85:function(t,n,e){var r=e(35).f,i=e(34),o=e(13)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},86:function(t,n,e){var r=e(9),i=e(32),o=e(13)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},87:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"e",(function(){return a})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return l})),e.d(n,"a",(function(){return f})),e.d(n,"d",(function(){return p})),e.d(n,"i",(function(){return v})),e.d(n,"b",(function(){return d})),e.d(n,"h",(function(){return g}));e(96),e(109),e(95),e(92),e(110),e(88),e(111),e(112),e(44);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function a(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;var n=t.match(r),e=n?n[0]:"",i=u(t);return o.test(i)?t:i+".html"+e}function p(t,n){var e=t.hash,i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function h(t,n,e){e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var u=o[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=u(n),i=0;i<t.length;i++)if(u(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(n)});return console.log(t,n),console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function v(t,n,e,r){var i=e.pages,o=e.themeConfig,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){var n=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}(t);var u=s.sidebar||o.sidebar;if(u){var a=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(e))return{base:e,config:n[e]};var r;return{}}(n,u),c=a.base,l=a.config;return l?l.map((function(t){return function t(n,e,r,i){if("string"==typeof n)return h(e,n,r);if(Array.isArray(n))return Object.assign(h(e,n[0],r),{title:n[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var o=n.children||[];return{type:"group",title:n.title,children:o.map((function(n){return t(n,e,r,!0)})),collapsable:!1!==n.collapsable}}(t,i,c)})):[]}return[]}function d(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},88:function(t,n,e){"use strict";var r=e(30),i=e(76)(1);r(r.P+r.F*!e(75)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},89:function(t,n,e){var r=e(90);t.exports=function(t,n){return new(r(t))(n)}},90:function(t,n,e){var r=e(9),i=e(82),o=e(13)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},91:function(t,n,e){var r=e(10),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},92:function(t,n,e){for(var r=e(97),i=e(80),o=e(14),s=e(3),u=e(7),a=e(78),c=e(13),l=c("iterator"),f=c("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(h),d=0;d<v.length;d++){var g,m=v[d],x=h[m],y=s[m],b=y&&y.prototype;if(b&&(b[l]||u(b,l,p),b[f]||u(b,f,m),a[m]=p,x))for(g in r)b[g]||o(b,g,r[g],!0)}},93:function(t,n,e){"use strict";var r=e(30),i=e(76)(3);r(r.P+r.F*!e(75)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},94:function(t,n,e){"use strict";var r=e(42),i=e(30),o=e(14),s=e(7),u=e(78),a=e(100),c=e(85),l=e(105),f=e(13)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,g,m){a(e,n,v);var x,y,b,k=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",S="values"==d,L=!1,_=t.prototype,A=_[f]||_["@@iterator"]||d&&_[d],C=A||k(d),j=d?S?k("entries"):C:void 0,T="Array"==n&&_.entries||A;if(T&&(b=l(T.call(new t)))!==Object.prototype&&b.next&&(c(b,O,!0),r||"function"==typeof b[f]||s(b,f,h)),S&&A&&"values"!==A.name&&(L=!0,C=function(){return A.call(this)}),r&&!m||!p&&!L&&_[f]||s(_,f,C),u[n]=C,u[O]=h,d)if(x={values:S?C:k("values"),keys:g?C:k("keys"),entries:j},m)for(y in x)y in _||o(_,y,x[y]);else i(i.P+i.F*(p||L),n,x);return x}},95:function(t,n,e){"use strict";var r=e(30),i=e(76)(2);r(r.P+r.F*!e(75)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},96:function(t,n,e){"use strict";var r=e(30),i=e(83)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!e(75)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},97:function(t,n,e){"use strict";var r=e(98),i=e(99),o=e(78),s=e(77);t.exports=e(94)(Array,"Array",(function(t,n){this._t=s(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},98:function(t,n,e){var r=e(13)("unscopables"),i=Array.prototype;null==i[r]&&e(7)(i,r,{}),t.exports=function(t){i[r][t]=!0}},99:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}}}]);