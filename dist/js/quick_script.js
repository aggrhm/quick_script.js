/*!
 * History API JavaScript Library v4.1.13
 *
 * Support: IE6+, FF3+, Opera 9+, Safari, Chrome and other
 *
 * Copyright 2011-2014, Dmitrii Pakhtinov ( spb.piksel@gmail.com )
 *
 * http://spb-piksel.ru/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Update: 2014-06-29 20:56
 */
(function(P){"function"===typeof define&&define.amd?define("object"!==typeof document||"loading"!==document.readyState?[]:"html5-history-api",P):P()})(function(){var j=!0,k=null,m=!1;function Q(a,b){var c=e.history!==n;c&&(e.history=n);a.apply(n,b);c&&(e.history=l)}function J(){}function h(a,b,c){if(a!=k&&""!==a&&!b){var b=h(),d=g.getElementsByTagName("base")[0];!c&&d&&d.getAttribute("href")&&(d.href=d.href,b=h(d.href,k,j));c=b.e;d=b.h;a=""+a;a=/^(?:\w+\:)?\/\//.test(a)?0===a.indexOf("/")?d+a:a:d+"//"+b.g+(0===a.indexOf("/")?a:0===a.indexOf("?")?c+a:0===a.indexOf("#")?c+b.f+a:c.replace(/[^\/]+$/g,"")+a)}else if(a=b?a:f.href,!s||c)a=a.replace(/^[^#]*/,"")||"#",a=f.protocol.replace(/:.*$|$/,
":")+"//"+f.host+i.basepath+a.replace(RegExp("^#[/]?(?:"+i.type+")?"),"");R.href=a;var a=/(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/.exec(R.href),b=a[2]+(a[3]?":"+a[3]:""),c=a[4]||"/",d=a[5]||"",e="#"===a[6]?"":a[6]||"",p=c+d+e,v=c.replace(RegExp("^"+i.basepath,"i"),i.type)+d;return{a:a[1]+"//"+b+p,h:a[1],g:b,i:a[2],k:a[3]||"",e:c,f:d,b:e,c:p,j:v,d:v+e}}function aa(){var a;try{a=e.sessionStorage,a.setItem(E+"t","1"),a.removeItem(E+"t")}catch(b){a=
{getItem:function(a){a=g.cookie.split(a+"=");return 1<a.length&&a.pop().split(";").shift()||"null"},setItem:function(a){var b={};if(b[f.href]=l.state)g.cookie=a+"="+t.stringify(b)}}}try{q=t.parse(a.getItem(E))||{}}catch(c){q={}}w(x+"unload",function(){a.setItem(E,t.stringify(q))},m)}function y(a,b,c,d){var f=0;c||(c={set:J},f=1);var g=!c.set,v=!c.get,K={configurable:j,set:function(){g=1},get:function(){v=1}};try{C(a,b,K),a[b]=a[b],C(a,b,c)}catch(ha){}if(!g||!v)if(a.__defineGetter__&&(a.__defineGetter__(b,
K.get),a.__defineSetter__(b,K.set),a[b]=a[b],c.get&&a.__defineGetter__(b,c.get),c.set&&a.__defineSetter__(b,c.set)),!g||!v){if(f)return m;if(a===e){try{var ba=a[b];a[b]=k}catch(ia){}if("execScript"in e)e.execScript("Public "+b,"VBScript"),e.execScript("var "+b+";","JavaScript");else try{C(a,b,{value:J})}catch(l){}a[b]=ba}else try{try{var h=F.create(a);C(F.getPrototypeOf(h)===a?h:a,b,c);for(var i in a)"function"===typeof a[i]&&(h[i]=a[i].bind(a));try{d.call(h,h,a)}catch(n){}a=h}catch(o){C(a.constructor.prototype,
b,c)}}catch(q){return m}}return a}function ca(a,b,c){c=c||{};a=a===L?f:a;c.set=c.set||function(c){a[b]=c};c.get=c.get||function(){return a[b]};return c}function G(a,b){var c=(""+("string"===typeof a?a:a.type)).replace(/^on/,""),d=z[c];if(d){b="string"===typeof a?b:a;if(b.target==k)for(var f=["target","currentTarget","srcElement","type"];a=f.pop();)b=y(b,a,{get:"type"===a?function(){return c}:function(){return e}});(("popstate"===c?e.onpopstate:e.onhashchange)||J).call(e,b);for(var f=0,g=d.length;f<
g;f++)d[f].call(e,b);return j}return da(a,b)}function S(){var a=g.createEvent?g.createEvent("Event"):g.createEventObject();a.initEvent?a.initEvent("popstate",m,m):a.type="popstate";a.state=l.state;G(a)}function u(a,b,c,e){s?A=f.href:(0===o&&(o=2),b=h(b,2===o&&-1!==(""+b).indexOf("#")),b.c!==h().c&&(A=e,c?f.replace("#"+b.d):f.hash=b.d));!H&&a&&(q[f.href]=a);D=m}function M(a){var b=A;A=f.href;if(b){T!==f.href&&S();var a=a||e.event,b=h(b,j),c=h();a.oldURL||(a.oldURL=b.a,a.newURL=c.a);b.b!==c.b&&G(a)}}
function U(a){setTimeout(function(){w("popstate",function(a){T=f.href;H||(a=y(a,"state",{get:function(){return l.state}}));G(a)},m)},0);!s&&a!==j&&"location"in l&&(V(r.hash),D&&(D=m,S()))}function ea(a){var a=a||e.event,b;a:{for(b=a.target||a.srcElement;b;){if("A"===b.nodeName)break a;b=b.parentNode}b=void 0}var c="defaultPrevented"in a?a.defaultPrevented:a.returnValue===m;b&&"A"===b.nodeName&&!c&&(c=h(),b=h(b.getAttribute("href",2)),c.a.split("#").shift()===b.a.split("#").shift()&&b.b&&(c.b!==b.b&&
(r.hash=b.b),V(b.b),a.preventDefault?a.preventDefault():a.returnValue=m))}function V(a){var b=g.getElementById(a=(a||"").replace(/^#/,""));b&&b.id===a&&"A"===b.nodeName&&(a=b.getBoundingClientRect(),e.scrollTo(I.scrollLeft||0,a.top+(I.scrollTop||0)-(I.clientTop||0)))}function fa(){function a(a){var b=[],d="VBHistoryClass"+(new Date).getTime()+c++,f=["Class "+d],g;for(g in a)if(a.hasOwnProperty(g)){var h=a[g];h&&(h.get||h.set)?(h.get&&f.push("Public "+("_"===g?"Default ":"")+"Property Get ["+g+"]",
"Call VBCVal([(accessors)].["+g+"].get.call(me),["+g+"])","End Property"),h.set&&f.push("Public Property Let ["+g+"](val)",h="Call [(accessors)].["+g+"].set.call(me,val)\nEnd Property","Public Property Set ["+g+"](val)",h)):(b.push(g),f.push("Public ["+g+"]"))}f.push("Private [(accessors)]","Private Sub Class_Initialize()","Set [(accessors)]="+d+"FactoryJS()","End Sub","End Class","Function "+d+"Factory()","Set "+d+"Factory=New "+d,"End Function");e.execScript(f.join("\n"),"VBScript");e[d+"FactoryJS"]=
function(){return a};d=e[d+"Factory"]();for(f=0;f<b.length;f++)d[b[f]]=a[b[f]];return d}function b(a){var b=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return b.test(a)?'"'+a.replace(b,function(a){return a in c?c[a]:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}var c=e.eval&&eval("/*@cc_on 1;@*/");if(c&&
!(g.documentMode&&7<g.documentMode)){var d=y,i=h().a,p=g.createElement("iframe");p.src="javascript:true;";p=I.firstChild.appendChild(p).contentWindow;e.execScript("Public history\nFunction VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function","VBScript");r={_:{get:L.toString}};l={back:n.back,forward:n.forward,go:n.go,emulate:k,_:{get:function(){return"[object History]"}}};t={parse:function(a){try{return(new Function("","return "+a))()}catch(b){return k}},stringify:function(a){var c=
(typeof a).charCodeAt(2);if(114===c)a=b(a);else if(109===c)a=isFinite(a)?""+a:"null";else if(111===c||108===c)a=""+a;else if(106===c)if(a){var d=(c="[object Array]"===F.prototype.toString.call(a))?"[":"{";if(c)for(var e=0;e<a.length;e++)d+=(0==e?"":",")+t.stringify(a[e]);else for(e in a)a.hasOwnProperty(e)&&(d+=(1==d.length?"":",")+b(e)+":"+t.stringify(a[e]));a=d+(c?"]":"}")}else a="null";else a="void 0";return a}};u=function(a,b,c,d,e){var g=p.document;0===o&&(o=2);b=h(b,2===o&&-1!==(""+b).indexOf("#"));
D=m;if(b.c===h().c&&!e)a&&(q[f.href]=a);else{A=d;if(c)p.lfirst?(history.back(),u(a,b.a,0,d,1)):f.replace("#"+b.d);else if(b.a!=i||e)p.lfirst?e&&(e=0,a=q[f.href]):(p.lfirst=1,u(a,i,0,d,1)),g.open(),g.write('<script>lfirst=1;parent.location.hash="'+b.d.replace(/"/g,'\\"')+'";<\/script>'),g.close();!e&&a&&(q[f.href]=a)}};y=function(b,c,f,g){d.apply(this,arguments)||(b===r?r[c]=f:b===l?(l[c]=f,"state"===c&&(r=a(r),e.history=l=a(l),e.execScript("var history = window.history;","JavaScript"))):b[c]=f.get&&
f.get());return b};setInterval(function(){var a=h().a;if(a!=i){var b=g.createEventObject();b.oldURL=i;b.newURL=i=a;b.type="hashchange";M(b)}},100);e.JSON=t}}var e=("object"===typeof window?window:this)||{};if(!e.history||"emulate"in e.history)return e.history;var g=e.document,I=g.documentElement,F=e.Object,t=e.JSON,f=e.location,n=e.history,l=n,N=n.pushState,W=n.replaceState,s=!!N,H="state"in n,C=F.defineProperty,r=y({},"t")?{}:g.createElement("a"),x="",O=e.addEventListener?"addEventListener":(x="on")&&
"attachEvent",X=e.removeEventListener?"removeEventListener":"detachEvent",Y=e.dispatchEvent?"dispatchEvent":"fireEvent",w=e[O],Z=e[X],da=e[Y],i={basepath:"/",redirect:0,type:"/"},E="__historyAPI__",R=g.createElement("a"),A=f.href,T="",D=m,o=0,q={},z={},B=g.title,ga={onhashchange:k,onpopstate:k},$={setup:function(a,b,c){i.basepath=(""+(a==k?i.basepath:a)).replace(/(?:^|\/)[^\/]*$/,"/");i.type=b==k?i.type:b;i.redirect=c==k?i.redirect:!!c},redirect:function(a,b){l.setup(b,a);b=i.basepath;if(e.top==e.self){var c=
h(k,m,j).c,d=f.pathname+f.search;s?(d=d.replace(/([^\/])$/,"$1/"),c!=b&&RegExp("^"+b+"$","i").test(d)&&f.replace(c)):d!=b&&(d=d.replace(/([^\/])\?/,"$1/?"),RegExp("^"+b,"i").test(d)&&f.replace(b+"#"+d.replace(RegExp("^"+b,"i"),i.type)+f.hash))}},pushState:function(a,b,c){var d=g.title;B!=k&&(g.title=B);N&&Q(N,arguments);u(a,c);g.title=d;B=b},replaceState:function(a,b,c){var d=g.title;B!=k&&(g.title=B);delete q[f.href];W&&Q(W,arguments);u(a,c,j);g.title=d;B=b},location:{set:function(a){0===o&&(o=1);
e.location=a},get:function(){0===o&&(o=1);return s?f:r}},state:{get:function(){return q[f.href]||k}}},L={assign:function(a){0===(""+a).indexOf("#")?u(k,a):f.assign(a)},reload:function(){f.reload()},replace:function(a){0===(""+a).indexOf("#")?u(k,a,j):f.replace(a)},toString:function(){return this.href},href:{get:function(){return h().a}},protocol:k,host:k,hostname:k,port:k,pathname:{get:function(){return h().e}},search:{get:function(){return h().f}},hash:{set:function(a){u(k,(""+a).replace(/^(#|)/,
"#"),m,A)},get:function(){return h().b}}};if(function(){var a=g.getElementsByTagName("script"),a=(a[a.length-1]||{}).src||"";(-1!==a.indexOf("?")?a.split("?").pop():"").replace(/(\w+)(?:=([^&]*))?/g,function(a,b,c){i[b]=(c||"").replace(/^(0|false)$/,"")});fa();w(x+"hashchange",M,m);var b=[L,r,ga,e,$,l];H&&delete $.state;for(var c=0;c<b.length;c+=2)for(var d in b[c])if(b[c].hasOwnProperty(d))if("function"===typeof b[c][d])b[c+1][d]=b[c][d];else{a=ca(b[c],d,b[c][d]);if(!y(b[c+1],d,a,function(a,d){if(d===
l)e.history=l=b[c+1]=a}))return Z(x+"hashchange",M,m),m;b[c+1]===e&&(z[d]=z[d.substr(2)]=[])}l.setup();i.redirect&&l.redirect();!H&&t&&aa();if(!s)g[O](x+"click",ea,m);"complete"===g.readyState?U(j):(!s&&h().c!==i.basepath&&(D=j),w(x+"load",U,m));return j}())return l.emulate=!s,e[O]=function(a,b,c){a in z?z[a].push(b):3<arguments.length?w(a,b,c,arguments[3]):w(a,b,c)},e[X]=function(a,b,c){var d=z[a];if(d)for(a=d.length;a--;){if(d[a]===b){d.splice(a,1);break}}else Z(a,b,c)},e[Y]=G,l});
/*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(p){var y=this||(0,eval)("this"),w=y.document,M=y.navigator,u=y.jQuery,E=y.JSON;(function(p){"function"===typeof define&&define.amd?define(["exports","require"],p):"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):p(y.ko={})})(function(N,O){function J(a,d){return null===a||typeof a in Q?a===d:!1}function R(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function S(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function K(b,d,c,e){a.d[b]={init:function(b,k,h,l,g){var m,x;a.w(function(){var q=a.a.c(k()),n=!c!==!q,r=!x;if(r||d||n!==m)r&&a.Z.oa()&&(x=a.a.la(a.e.childNodes(b),!0)),n?(r||a.e.T(b,a.a.la(x)),a.Ja(e?e(g,q):g,b)):a.e.ma(b),m=n},null,{q:b});return{controlsDescendantBindings:!0}}};a.h.ka[b]=!1;a.e.R[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,d){for(var c=b.split("."),e=a,f=0;f<c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};a.D=function(a,d,c){a[d]=c};a.version="3.3.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}function e(b,c,g,d){var e=b[c].match(m)||[];a.a.o(g.match(m),function(b){a.a.ga(e,b,d)});b[c]=e.join(" ")}var f={__proto__:[]}instanceof Array,k={},h={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(k,function(a,b){if(b.length)for(var c=0,g=b.length;c<g;c++)h[b[c]]=a});var l={propertychange:!0},g=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}(),m=/\S+/g;return{Bb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var c=0,g=a.length;c<g;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,
b);for(var c=0,g=a.length;c<g;c++)if(a[c]===b)return c;return-1},vb:function(a,b,c){for(var g=0,d=a.length;g<d;g++)if(b.call(c,a[g],g))return a[g];return null},ya:function(b,c){var g=a.a.m(b,c);0<g?b.splice(g,1):0===g&&b.shift()},wb:function(b){b=b||[];for(var c=[],g=0,d=b.length;g<d;g++)0>a.a.m(c,b[g])&&c.push(b[g]);return c},Ka:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)c.push(b(a[g],g));return c},xa:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)b(a[g],g)&&c.push(a[g]);
return c},ia:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,g=b.length;c<g;c++)a.push(b[c]);return a},ga:function(b,c,g){var d=a.a.m(a.a.cb(b),c);0>d?g&&b.push(c):g||b.splice(d,1)},za:f,extend:d,Fa:c,Ga:f?c:d,A:b,pa:function(a,b){if(!a)return a;var c={},g;for(g in a)a.hasOwnProperty(g)&&(c[g]=b(a[g],g,a));return c},Ra:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Jb:function(b){b=a.a.O(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),g=0,d=b.length;g<
d;g++)c.appendChild(a.S(b[g]));return c},la:function(b,c){for(var g=0,d=b.length,e=[];g<d;g++){var m=b[g].cloneNode(!0);e.push(c?a.S(m):m)}return e},T:function(b,c){a.a.Ra(b);if(c)for(var g=0,d=c.length;g<d;g++)b.appendChild(c[g])},Qb:function(b,c){var g=b.nodeType?[b]:b;if(0<g.length){for(var d=g[0],e=d.parentNode,m=0,f=c.length;m<f;m++)e.insertBefore(c[m],d);m=0;for(f=g.length;m<f;m++)a.removeNode(g[m])}},na:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==
b;)a.splice(0,1);if(1<a.length){var c=a[0],g=a[a.length-1];for(a.length=0;c!==g;)if(a.push(c),c=c.nextSibling,!c)return;a.push(g)}}return a},Sb:function(a,b){7>g?a.setAttribute("selected",b):a.selected=b},ib:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Dc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},jc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?
a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Qa:function(b){return a.a.jc(b,b.ownerDocument.documentElement)},tb:function(b){return!!a.a.vb(b,a.a.Qa)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var m=g&&l[c];if(!m&&u)u(b).bind(c,d);else if(m||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var e=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,e);a.a.C.fa(b,
function(){b.detachEvent(f,e)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},qa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var g;"input"===a.a.v(b)&&b.type&&"click"==c.toLowerCase()?(g=b.type,g="checkbox"==g||"radio"==g):g=!1;if(u&&!g)u(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)g=w.createEvent(h[c]||"HTMLEvents"),g.initEvent(c,
!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(g);else throw Error("The supplied element doesn't support dispatchEvent");else if(g&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.F(b)?b():b},cb:function(b){return a.F(b)?b.B():b},Ia:function(b,c,g){var d;c&&("object"===typeof b.classList?(d=b.classList[g?"add":"remove"],a.a.o(c.match(m),function(a){d.call(b.classList,a)})):"string"===
typeof b.className.baseVal?e(b.className,"baseVal",c,g):e(b,"className",c,g))},Ha:function(b,c){var g=a.a.c(c);if(null===g||g===p)g="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.T(b,[b.ownerDocument.createTextNode(g)]):d.data=g;a.a.mc(b)},Rb:function(a,b){a.name=b;if(7>=g)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},mc:function(a){9<=g&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},kc:function(a){if(g){var b=a.style.width;
a.style.width=0;a.style.width=b}},Bc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var g=[],d=b;d<=c;d++)g.push(d);return g},O:function(a){for(var b=[],c=0,g=a.length;c<g;c++)b.push(a[c]);return b},Hc:6===g,Ic:7===g,M:g,Db:function(b,c){for(var g=a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},m=[],e=g.length-1;0<=e;e--)d(g[e])&&m.push(g[e]);return m},yc:function(b){return"string"==
typeof b&&(b=a.a.ib(b))?E&&E.parse?E.parse(b):(new Function("return "+b))():null},jb:function(b,c,g){if(!E||!E.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return E.stringify(a.a.c(b),c,g)},zc:function(c,g,d){d=d||{};var m=d.params||{},e=d.includeFields||this.Bb,f=c;if("object"==typeof c&&"form"===a.a.v(c))for(var f=c.action,
l=e.length-1;0<=l;l--)for(var k=a.a.Db(c,e[l]),h=k.length-1;0<=h;h--)m[k[h].name]=k[h].value;g=a.a.c(g);var s=w.createElement("form");s.style.display="none";s.action=f;s.method="post";for(var p in g)c=w.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.jb(a.a.c(g[p])),s.appendChild(c);b(m,function(a,b){var c=w.createElement("input");c.type="hidden";c.name=a;c.value=b;s.appendChild(c)});w.body.appendChild(s);d.submitter?d.submitter(s):s.submit();setTimeout(function(){s.parentNode.removeChild(s)},
0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.o);a.b("utils.arrayFirst",a.a.vb);a.b("utils.arrayFilter",a.a.xa);a.b("utils.arrayGetDistinctValues",a.a.wb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Ka);a.b("utils.arrayPushAll",a.a.ia);a.b("utils.arrayRemoveItem",a.a.ya);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Bb);a.b("utils.getFormFields",a.a.Db);a.b("utils.peekObservable",a.a.cb);a.b("utils.postJson",a.a.zc);a.b("utils.parseJson",a.a.yc);a.b("utils.registerEventHandler",
a.a.n);a.b("utils.stringifyJson",a.a.jb);a.b("utils.range",a.a.Bc);a.b("utils.toggleDomNodeCssClass",a.a.Ia);a.b("utils.triggerEvent",a.a.qa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.ga);a.b("utils.setTextContent",a.a.Ha);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=this;if(1===arguments.length)return function(){return d.apply(a,arguments)};var c=Array.prototype.slice.call(arguments,1);return function(){var e=
c.slice(0);e.push.apply(e,arguments);return d.apply(a,e)}});a.a.f=new function(){function a(b,k){var h=b[c];if(!h||"null"===h||!e[h]){if(!k)return p;h=b[c]="ko"+d++;e[h]={}}return e[h]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},I:function(){return d++ +c}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);
a.a.C=new function(){function b(b,d){var e=a.a.f.get(b,c);e===p&&d&&(e=[],a.a.f.set(b,c,e));return e}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](c);a.a.f.clear(c);a.a.C.cleanExternalData(c);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.f.I(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{fa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Pb:function(d,e){var f=b(d,!1);f&&(a.a.ya(f,
e),0==f.length&&a.a.f.set(d,c,p))},S:function(b){if(e[b.nodeType]&&(d(b),f[b.nodeType])){var c=[];a.a.ia(c,b.getElementsByTagName("*"));for(var l=0,g=c.length;l<g;l++)d(c[l])}return b},removeNode:function(b){a.S(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};a.S=a.a.C.S;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.S);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.C.fa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.Pb);(function(){a.a.ca=function(b,d){var c;if(u)if(u.parseHTML)c=u.parseHTML(b,d)||[];else{if((c=u.clean([b],d))&&c[0]){for(var e=c[0];e.parentNode&&11!==e.parentNode.nodeType;)e=e.parentNode;e.parentNode&&e.parentNode.removeChild(e)}}else{(e=d)||(e=w);c=e.parentWindow||e.defaultView||y;var f=a.a.ib(b).toLowerCase(),e=e.createElement("div"),f=f.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!f.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!f.indexOf("<td")||!f.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""],k="ignored<div>"+f[1]+b+f[2]+"</div>";for("function"==typeof c.innerShiv?e.appendChild(c.innerShiv(k)):e.innerHTML=k;f[0]--;)e=e.lastChild;c=a.a.O(e.lastChild.childNodes)}return c};a.a.gb=function(b,d){a.a.Ra(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),u)u(b).html(d);else for(var c=a.a.ca(d,b.ownerDocument),e=0;e<c.length;e++)b.appendChild(c[e])}})();
a.b("utils.parseHtmlFragment",a.a.ca);a.b("utils.setHtml",a.a.gb);a.H=function(){function b(c,d){if(c)if(8==c.nodeType){var f=a.H.Lb(c.nodeValue);null!=f&&d.push({ic:c,wc:f})}else if(1==c.nodeType)for(var f=0,k=c.childNodes,h=k.length;f<h;f++)b(k[f],d)}var d={};return{$a:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
d[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Wb:function(a,b){var f=d[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete d[a]}},Xb:function(c,d){var f=[];b(c,f);for(var k=0,h=f.length;k<h;k++){var l=f[k].ic,g=[l];d&&a.a.ia(g,d);a.H.Wb(f[k].wc,g);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},Lb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.H);
a.b("memoization.memoize",a.H.$a);a.b("memoization.unmemoize",a.H.Wb);a.b("memoization.parseMemoText",a.H.Lb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.H.Xb);a.Sa={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,f;"number"==typeof d?c=d:(c=d.timeout,e=d.method);f="notifyWhenChangesStop"==e?S:R;a.Za(function(a){return f(a,c)})},notify:function(a,d){a.equalityComparer=
"always"==d?null:J}};var Q={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Sa);a.Ub=function(b,d,c){this.da=b;this.La=d;this.hc=c;this.Gb=!1;a.D(this,"dispose",this.p)};a.Ub.prototype.p=function(){this.Gb=!0;this.hc()};a.Q=function(){a.a.Ga(this,a.Q.fn);this.G={};this.rb=1};var z={U:function(b,d,c){var e=this;c=c||"change";var f=new a.Ub(e,d?b.bind(d):b,function(){a.a.ya(e.G[c],f);e.ua&&e.ua(c)});e.ja&&e.ja(c);e.G[c]||(e.G[c]=[]);e.G[c].push(f);return f},notifySubscribers:function(b,
d){d=d||"change";"change"===d&&this.Yb();if(this.Ba(d))try{a.k.xb();for(var c=this.G[d].slice(0),e=0,f;f=c[e];++e)f.Gb||f.La(b)}finally{a.k.end()}},Aa:function(){return this.rb},pc:function(a){return this.Aa()!==a},Yb:function(){++this.rb},Za:function(b){var d=this,c=a.F(d),e,f,k;d.ta||(d.ta=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&"change"!==b?"beforeChange"===b?d.pb(a):d.ta(a,b):d.qb(a)});var h=b(function(){c&&k===d&&(k=d());e=!1;d.Wa(f,k)&&d.ta(f=k)});d.qb=function(a){e=!0;k=a;
h()};d.pb=function(a){e||(f=a,d.ta(a,"beforeChange"))}},Ba:function(a){return this.G[a]&&this.G[a].length},nc:function(b){if(b)return this.G[b]&&this.G[b].length||0;var d=0;a.a.A(this.G,function(a,b){d+=b.length});return d},Wa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.A(b,function(b,e){var f=a.Sa[b];"function"==typeof f&&(d=f(d,e)||d)});return d}};a.D(z,"subscribe",z.U);a.D(z,"extend",z.extend);a.D(z,"getSubscriptionsCount",z.nc);
a.a.za&&a.a.Fa(z,Function.prototype);a.Q.fn=z;a.Hb=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.Q);a.b("isSubscribable",a.Hb);a.Z=a.k=function(){function b(a){c.push(e);e=a}function d(){e=c.pop()}var c=[],e,f=0;return{xb:b,end:d,Ob:function(b){if(e){if(!a.Hb(b))throw Error("Only subscribable things can act as dependencies");e.La(b,b.ac||(b.ac=++f))}},u:function(a,c,e){try{return b(),a.apply(c,e||[])}finally{d()}},oa:function(){if(e)return e.w.oa()},
Ca:function(){if(e)return e.Ca}}}();a.b("computedContext",a.Z);a.b("computedContext.getDependenciesCount",a.Z.oa);a.b("computedContext.isInitial",a.Z.Ca);a.b("computedContext.isSleeping",a.Z.Jc);a.b("ignoreDependencies",a.Gc=a.k.u);a.r=function(b){function d(){if(0<arguments.length)return d.Wa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Ob(d);return c}var c=b;a.Q.call(d);a.a.Ga(d,a.r.fn);d.B=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,
"beforeChange")};a.D(d,"peek",d.B);a.D(d,"valueHasMutated",d.W);a.D(d,"valueWillMutate",d.X);return d};a.r.fn={equalityComparer:J};var H=a.r.Ac="__ko_proto__";a.r.fn[H]=a.r;a.a.za&&a.a.Fa(a.r.fn,a.Q.fn);a.Ta=function(b,d){return null===b||b===p||b[H]===p?!1:b[H]===d?!0:a.Ta(b[H],d)};a.F=function(b){return a.Ta(b,a.r)};a.Da=function(b){return"function"==typeof b&&b[H]===a.r||"function"==typeof b&&b[H]===a.j&&b.qc?!0:!1};a.b("observable",a.r);a.b("isObservable",a.F);a.b("isWriteableObservable",a.Da);
a.b("isWritableObservable",a.Da);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.r(b);a.a.Ga(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var d=this.B(),c=[],e="function"!=typeof b||a.F(b)?function(a){return a===b}:b,f=0;f<d.length;f++){var k=d[f];e(k)&&(0===c.length&&this.X(),c.push(k),d.splice(f,1),f--)}c.length&&this.W();return c},
removeAll:function(b){if(b===p){var d=this.B(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.B(),c="function"!=typeof b||a.F(b)?function(a){return a===b}:b;this.X();for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,
b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.B()[c]=d,this.W())}};a.a.o("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.B();this.X();this.yb(a,b,arguments);a=a[b].apply(a,arguments);this.W();return a}});a.a.o(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.za&&a.a.Fa(a.ba.fn,a.r.fn);a.b("observableArray",a.ba);a.Sa.trackArrayChanges=function(b){function d(){if(!c){c=!0;var g=
b.notifySubscribers;b.notifySubscribers=function(a,b){b&&"change"!==b||++k;return g.apply(this,arguments)};var d=[].concat(b.B()||[]);e=null;f=b.U(function(c){c=[].concat(c||[]);if(b.Ba("arrayChange")){var g;if(!e||1<k)e=a.a.Ma(d,c,{sparse:!0});g=e}d=c;e=null;k=0;g&&g.length&&b.notifySubscribers(g,"arrayChange")})}}if(!b.yb){var c=!1,e=null,f,k=0,h=b.ja,l=b.ua;b.ja=function(a){h&&h.call(b,a);"arrayChange"===a&&d()};b.ua=function(a){l&&l.call(b,a);"arrayChange"!==a||b.Ba("arrayChange")||(f.p(),c=!1)};
b.yb=function(b,d,f){function l(a,b,c){return h[h.length]={status:a,value:b,index:c}}if(c&&!k){var h=[],r=b.length,v=f.length,t=0;switch(d){case "push":t=r;case "unshift":for(d=0;d<v;d++)l("added",f[d],t+d);break;case "pop":t=r-1;case "shift":r&&l("deleted",b[t],t);break;case "splice":d=Math.min(Math.max(0,0>f[0]?r+f[0]:f[0]),r);for(var r=1===v?r:Math.min(d+(f[1]||0),r),v=d+v-2,t=Math.max(r,v),G=[],A=[],p=2;d<t;++d,++p)d<r&&A.push(l("deleted",b[d],d)),d<v&&G.push(l("added",f[p],d));a.a.Cb(A,G);break;
default:return}e=h}}}};a.w=a.j=function(b,d,c){function e(a,b,c){if(I&&b===g)throw Error("A 'pure' computed must not be called recursively");B[a]=c;c.sa=F++;c.ea=b.Aa()}function f(){var a,b;for(a in B)if(B.hasOwnProperty(a)&&(b=B[a],b.da.pc(b.ea)))return!0}function k(){!s&&B&&a.a.A(B,function(a,b){b.p&&b.p()});B=null;F=0;G=!0;s=r=!1}function h(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(z),z=setTimeout(function(){l(!0)},a)):g.nb?g.nb():l(!0)}function l(b){if(!v&&!G){if(y&&y()){if(!t){w();return}}else t=
!1;v=!0;try{var c=B,m=F,f=I?p:!F;a.k.xb({La:function(a,b){G||(m&&c[b]?(e(b,a,c[b]),delete c[b],--m):B[b]||e(b,a,s?{da:a}:a.U(h)))},w:g,Ca:f});B={};F=0;try{var l=d?A.call(d):A()}finally{a.k.end(),m&&!s&&a.a.A(c,function(a,b){b.p&&b.p()}),r=!1}g.Wa(n,l)&&(s||q(n,"beforeChange"),n=l,s?g.Yb():b&&q(n));f&&q(n,"awake")}finally{v=!1}F||w()}}function g(){if(0<arguments.length){if("function"===typeof C)C.apply(d,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.k.Ob(g);(r||s&&f())&&l();return n}function m(){(r&&!F||s&&f())&&l();return n}function x(){return r||0<F}function q(a,b){g.notifySubscribers(a,b)}var n,r=!0,v=!1,t=!1,G=!1,A=b,I=!1,s=!1;A&&"object"==typeof A?(c=A,A=c.read):(c=c||{},A||(A=c.read));if("function"!=typeof A)throw Error("Pass a function that returns the value of the ko.computed");var C=c.write,D=c.disposeWhenNodeIsRemoved||c.q||null,u=c.disposeWhen||c.Pa,y=u,w=k,B={},F=0,z=null;d||(d=c.owner);a.Q.call(g);a.a.Ga(g,a.j.fn);
g.B=m;g.oa=function(){return F};g.qc="function"===typeof C;g.p=function(){w()};g.$=x;var T=g.Za;g.Za=function(a){T.call(g,a);g.nb=function(){g.pb(n);r=!0;g.qb(g)}};c.pure?(s=I=!0,g.ja=function(b){if(!G&&s&&"change"==b){s=!1;if(r||f())B=null,F=0,r=!0,l();else{var c=[];a.a.A(B,function(a,b){c[b.sa]=a});a.a.o(c,function(a,b){var c=B[a],g=c.da.U(h);g.sa=b;g.ea=c.ea;B[a]=g})}G||q(n,"awake")}},g.ua=function(b){G||"change"!=b||g.Ba("change")||(a.a.A(B,function(a,b){b.p&&(B[a]={da:b.da,sa:b.sa,ea:b.ea},b.p())}),
s=!0,q(p,"asleep"))},g.bc=g.Aa,g.Aa=function(){s&&(r||f())&&l();return g.bc()}):c.deferEvaluation&&(g.ja=function(a){"change"!=a&&"beforeChange"!=a||m()});a.D(g,"peek",g.B);a.D(g,"dispose",g.p);a.D(g,"isActive",g.$);a.D(g,"getDependenciesCount",g.oa);D&&(t=!0,D.nodeType&&(y=function(){return!a.a.Qa(D)||u&&u()}));s||c.deferEvaluation||l();D&&x()&&D.nodeType&&(w=function(){a.a.C.Pb(D,w);k()},a.a.C.fa(D,w));return g};a.sc=function(b){return a.Ta(b,a.j)};z=a.r.Ac;a.j[z]=a.r;a.j.fn={equalityComparer:J};
a.j.fn[z]=a.j;a.a.za&&a.a.Fa(a.j.fn,a.Q.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.sc);a.Nb=function(b,d){if("function"===typeof b)return a.w(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.w(b,d)};a.b("pureComputed",a.Nb);(function(){function b(a,f,k){k=k||new c;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};k.save(a,h);d(a,function(c){var g=
f(a[c]);switch(typeof g){case "boolean":case "number":case "string":case "function":h[c]=g;break;case "object":case "undefined":var d=k.get(g);h[c]=d!==p?d:b(g,f,k)}});return h}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.mb=[]}a.Vb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.F(b)&&
10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Vb(b);return a.a.jb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.mb[d]=c:(this.keys.push(b),this.mb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.mb[b]:p}}})();a.b("toJS",a.Vb);a.b("toJSON",a.toJSON);(function(){a.i={s:function(b){switch(a.a.v(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.ab):7>=a.a.M?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?
b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex]):p;default:return b.value}},Y:function(b,d,c){switch(a.a.v(b)){case "option":switch(typeof d){case "string":a.a.f.set(b,a.d.options.ab,p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.f.set(b,a.d.options.ab,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,f=0,k=b.options.length,
h;f<k;++f)if(h=a.i.s(b.options[f]),h==d||""==h&&d===p){e=f;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.s);a.b("selectExtensions.writeValue",a.i.Y);a.h=function(){function b(b){b=a.a.ib(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),x,h=[],n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){c.push(x&&h.length?{key:x,
value:h.join("")}:{unknown:x||h.join("")});x=n=0;h=[];continue}}else if(58===t){if(!n&&!x&&1===h.length){x=h.pop();continue}}else 47===t&&r&&1<v.length?(t=d[r-1].match(f))&&!k[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/"):40===t||123===t||91===t?++n:41===t||125===t||93===t?--n:x||h.length||34!==t&&39!==t||(v=v.slice(1,-1));h.push(v)}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
"g"),f=/[\])"'A-Za-z0-9_$]+$/,k={"in":1,"return":1,"typeof":1},h={};return{ka:[],V:h,bb:b,Ea:function(e,g){function m(b,g){var e;if(!r){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(g=l.preprocess(g,b,m)))return;if(l=h[b])e=g,0<=a.a.m(d,e)?e=!1:(l=e.match(c),e=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:e),l=e;l&&k.push("'"+b+"':function(_z){"+e+"=_z}")}n&&(g="function(){return "+g+" }");f.push("'"+b+"':"+g)}g=g||{};var f=[],k=[],n=g.valueAccessors,r=g.bindingParams,v="string"===typeof e?b(e):e;
a.a.o(v,function(a){m(a.key||a.unknown,a.value)});k.length&&m("_ko_property_writers","{"+k.join(",")+" }");return f.join(",")},vc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},ra:function(b,c,d,e,f){if(b&&a.F(b))!a.Da(b)||f&&b.B()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ka);a.b("expressionRewriting.parseObjectLiteral",a.h.bb);a.b("expressionRewriting.preProcessBindings",
a.h.Ea);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ea);(function(){function b(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a,c){for(var e=a,f=1,l=[];e=e.nextSibling;){if(d(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,
b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,k=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.e={R:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ma:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Ra(c)},T:function(c,d){if(b(c)){a.e.ma(c);for(var e=c.nextSibling,
f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.T(c,d)},Mb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Fb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.Mb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&
d(a.nextSibling)?null:a.nextSibling},oc:b,Fc:function(a){return(a=(f?a.text:a.nodeValue).match(k))?a[1]:null},Kb:function(c){if(l[a.a.v(c)]){var m=c.firstChild;if(m){do if(1===m.nodeType){var f;f=m.firstChild;var h=null;if(f){do if(h)h.push(f);else if(b(f)){var k=e(f,!0);k?f=k:h=[f]}else d(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=m.nextSibling,k=0;k<f.length;k++)h?c.insertBefore(f[k],h):c.appendChild(f[k])}while(m=m.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",
a.e.R);a.b("virtualElements.emptyNode",a.e.ma);a.b("virtualElements.insertAfter",a.e.Fb);a.b("virtualElements.prepend",a.e.Mb);a.b("virtualElements.setDomNodeChildren",a.e.T);(function(){a.L=function(){this.ec={}};a.a.extend(a.L.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.e.oc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,
d,b):null;return a.g.sb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.sb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Fc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var f=this.ec,k=b+(e&&e.valueAccessors||""),h;if(!(h=f[k])){var l,g="with($context){with($data||{}){return{"+a.h.Ea(b,e)+"}}}";l=new Function("$context",
"$element",g);h=f[k]=l}return h(d,c)}catch(m){throw m.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+m.message,m;}}});a.L.instance=new a.L})();a.b("bindingProvider",a.L);(function(){function b(a){return function(){return a}}function d(a){return a()}function c(b){return a.a.pa(a.k.u(b),function(a,c){return function(){return b()[c]}})}function e(d,g,e){return"function"===typeof d?c(d.bind(null,g,e)):a.a.pa(d,b)}function f(a,b){return c(this.getBindings.bind(this,a,b))}function k(b,
c,d){var g,e=a.e.firstChild(c),f=a.L.instance,m=f.preprocessNode;if(m){for(;g=e;)e=a.e.nextSibling(g),m.call(f,g);e=a.e.firstChild(c)}for(;g=e;)e=a.e.nextSibling(g),h(b,g,d)}function h(b,c,d){var e=!0,f=1===c.nodeType;f&&a.e.Kb(c);if(f&&d||a.L.instance.nodeHasBindings(c))e=g(c,null,b,d).shouldBindDescendants;e&&!x[a.a.v(c)]&&k(b,c,!f)}function l(b){var c=[],d={},g=[];a.a.A(b,function I(e){if(!d[e]){var f=a.getBindingHandler(e);f&&(f.after&&(g.push(e),a.a.o(f.after,function(c){if(b[c]){if(-1!==a.a.m(g,
c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+g.join(", "));I(c)}}),g.length--),c.push({key:e,Eb:f}));d[e]=!0}});return c}function g(b,c,g,e){var m=a.a.f.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,q,!0)}!m&&e&&a.Tb(b,g);var h;if(c&&"function"!==typeof c)h=c;else{var k=a.L.instance,x=k.getBindingAccessors||f,n=a.j(function(){(h=c?c(g,b):x.call(k,b,g))&&g.K&&g.K();return h},null,{q:b});
h&&n.$()||(n=null)}var u;if(h){var w=n?function(a){return function(){return d(n()[a])}}:function(a){return h[a]},y=function(){return a.a.pa(n?n():h,d)};y.get=function(a){return h[a]&&d(w(a))};y.has=function(a){return a in h};e=l(h);a.a.o(e,function(c){var d=c.Eb.init,e=c.Eb.update,f=c.key;if(8===b.nodeType&&!a.e.R[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.k.u(function(){var a=d(b,w(f),y,g.$data,g);if(a&&a.controlsDescendantBindings){if(u!==
p)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.j(function(){e(b,w(f),y,g.$data,g)},null,{q:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+h[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===p}}function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var x={script:!0,textarea:!0};a.getBindingHandler=function(b){return a.d[b]};
a.N=function(b,c,d,g){var e=this,f="function"==typeof b&&!a.F(b),m,l=a.j(function(){var m=f?b():b,h=a.a.c(m);c?(c.K&&c.K(),a.a.extend(e,c),l&&(e.K=l)):(e.$parents=[],e.$root=h,e.ko=a);e.$rawData=m;e.$data=h;d&&(e[d]=h);g&&g(e,c,h);return e.$data},null,{Pa:function(){return m&&!a.a.tb(m)},q:!0});l.$()&&(e.K=l,l.equalityComparer=null,m=[],l.Zb=function(b){m.push(b);a.a.C.fa(b,function(b){a.a.ya(m,b);m.length||(l.p(),e.K=l=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,
c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.K||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.f.I(),n=a.a.f.I();a.Tb=function(b,c){if(2==arguments.length)a.a.f.set(b,n,c),c.K&&c.K.Zb(b);else return a.a.f.get(b,n)};a.va=function(b,c,d){1===b.nodeType&&a.e.Kb(b);return g(b,c,m(d),!0)};a.cc=function(b,
c,d){d=m(d);return a.va(b,e(c,d,b),d)};a.Ja=function(a,b){1!==b.nodeType&&8!==b.nodeType||k(m(a),b,!0)};a.ub=function(a,b){!u&&y.jQuery&&(u=y.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(m(a),b,!0)};a.Oa=function(b){switch(b.nodeType){case 1:case 8:var c=a.Tb(b);if(c)return c;if(b.parentNode)return a.Oa(b.parentNode)}return p};a.gc=function(b){return(b=a.Oa(b))?
b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.ub);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingAccessorsToNode",a.va);a.b("applyBindingsToNode",a.cc);a.b("contextFor",a.Oa);a.b("dataFor",a.gc)})();(function(b){function d(d,e){var g=f.hasOwnProperty(d)?f[d]:b,m;g?g.U(e):(g=f[d]=new a.Q,g.U(e),c(d,function(a,b){var c=!(!b||!b.synchronous);k[d]={definition:a,tc:c};delete f[d];m||c?g.notifySubscribers(a):setTimeout(function(){g.notifySubscribers(a)},0)}),m=!0)}function c(a,b){e("getConfig",
[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,g,f){f||(f=a.g.loaders.slice(0));var k=f.shift();if(k){var q=k[c];if(q){var n=!1;if(q.apply(k,d.concat(function(a){n?g(null):null!==a?g(a):e(c,d,g,f)}))!==b&&(n=!0,!k.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,g,f)}else g(null)}var f={},k={};a.g={get:function(c,e){var g=k.hasOwnProperty(c)?k[c]:
b;g?g.tc?a.k.u(function(){e(g.definition)}):setTimeout(function(){e(g.definition)},0):d(c,e)},zb:function(a){delete k[a]},ob:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.zb)})();(function(){function b(b,c,d,e){function k(){0===--v&&e(h)}var h={},v=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.ob("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?f(c,d,function(c){a.g.ob("loadViewModel",[b,c],function(a){h[l]=a;k()})}):
k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[l])c(b[l]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.v(b)){case "script":return a.a.ca(b.text);case "textarea":return a.a.ca(b.value);case "template":if(e(b.content))return a.a.la(b.content.childNodes)}return a.a.la(b.childNodes)}function e(a){return y.DocumentFragment?a instanceof
DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||y.require?(O||y.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function k(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Xa(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.Xa=function(a){return a in h};a.g.Ec=function(b){delete h[b];a.g.zb(b)};a.g.Ab={getConfig:function(a,
b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,c,d){var e=k(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=k(b);if("string"===typeof d)f(a.a.ca(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.O(d.childNodes));else if(d.element)if(d=d.element,y.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var l=w.getElementById(d);l?f(c(l)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(k(a),b,c)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.Xa);a.b("components.unregister",a.g.Ec);a.b("components.defaultLoader",a.g.Ab);a.g.loaders.push(a.g.Ab);a.g.$b=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=d.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.pa(f,function(d){return a.w(d,null,{q:b})}),k=a.a.pa(f,function(d){var e=d.B();return d.$()?a.w({read:function(){return a.a.c(d())},
write:a.Da(e)&&function(a){d()(a)},q:b}):e});k.hasOwnProperty("$raw")||(k.$raw=f);return k}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.v(b);return a.g.Xa(b)&&b};a.g.sb=function(c,d,f,k){if(1===d.nodeType){var h=a.g.getComponentNameForNode(d);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(d,f)};c.component=k?function(){return l}:l}}return c};var d=new a.L;9>a.a.M&&(a.g.register=function(a){return function(b){w.createElement(b);
return a.apply(this,arguments)}}(a.g.register),w.createDocumentFragment=function(b){return function(){var d=b(),f=a.g.$b,k;for(k in f)f.hasOwnProperty(k)&&d.createElement(k);return d}}(w.createDocumentFragment))})();(function(b){function d(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.la(c);a.e.T(d,b)}function c(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,k,h,l,g){function m(){var a=x&&
x.dispose;"function"===typeof a&&a.call(x);q=null}var x,q,n=a.a.O(a.e.childNodes(f));a.a.C.fa(f,m);a.w(function(){var l=a.a.c(k()),h,t;"string"===typeof l?h=l:(h=a.a.c(l.name),t=a.a.c(l.params));if(!h)throw Error("No component name specified");var p=q=++e;a.g.get(h,function(e){if(q===p){m();if(!e)throw Error("Unknown component '"+h+"'");d(h,e,f);var l=c(e,f,n,t);e=g.createChildContext(l,b,function(a){a.$component=l;a.$componentTemplateNodes=n});x=l;a.Ja(e,f)}})},null,{q:f});return{controlsDescendantBindings:!0}}};
a.e.R.component=!0})();var P={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.A(c,function(c,d){d=a.a.c(d);var k=!1===d||null===d||d===p;k&&b.removeAttribute(c);8>=a.a.M&&c in P?(c=P[c],k?b.removeAttribute(c):b[c]=d):k||b.setAttribute(c,d.toString());"name"===c&&a.a.Rb(b,k?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,f=x?k():e;if(!a.Z.Ca()&&(!l||e)){var h=a.k.u(d);g?m!==f?(e&&(a.a.ga(h,
f,!0),a.a.ga(h,m,!1)),m=f):a.a.ga(h,f,e):a.h.ra(h,c,"checked",f,!0)}}function f(){var c=a.a.c(d());b.checked=g?0<=a.a.m(c,k()):h?c:k()===c}var k=a.Nb(function(){return c.has("checkedValue")?a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var g=h&&a.a.c(d())instanceof Array,m=g?k():p,x=l||g;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.w(e,null,{q:b});a.a.n(b,"click",e);a.w(f,null,{q:b})}}};a.h.V.checked=!0;a.d.checkedValue=
{update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());null!==c&&"object"==typeof c?a.a.A(c,function(c,d){d=a.a.c(d);a.a.Ia(b,c,d)}):(c=String(c||""),a.a.Ia(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ia(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,
e,f){var k=d()||{};a.a.A(k,function(h){"string"==typeof h&&a.a.n(b,h,function(b){var g,m=d()[h];if(m){try{var k=a.a.O(arguments);e=f.$data;k.unshift(e);g=m.apply(e,k)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===c.get(h+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ib:function(b){return function(){var d=b(),c=a.a.cb(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.P.Va};a.a.c(d);return{foreach:c.data,as:c.as,
includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.P.Va}}},init:function(b,d){return a.d.template.init(b,a.d.foreach.Ib(d))},update:function(b,d,c,e,f){return a.d.template.update(b,a.d.foreach.Ib(d),c,e,f)}};a.h.ka.foreach=!1;a.e.R.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(m){g=
f.body}e=g===b}f=d();a.h.ra(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),k=e.bind(null,!1);a.a.n(b,"focus",f);a.a.n(b,"focusin",f);a.a.n(b,"blur",k);a.a.n(b,"focusout",k)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.u(a.a.qa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.gb(b,d())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,d){return a.createChildContext(d)});var L={};a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.xa(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function k(d,e){if(r&&
m)a.i.Y(b,a.a.c(c.get("value")),!0);else if(n.length){var g=0<=a.a.m(n,a.i.s(e[0]));a.a.Sb(e[0],g);r&&!g&&a.k.u(a.a.qa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,g=a.a.c(d()),m=c.get("valueAllowUnset")&&c.has("value"),x=c.get("optionsIncludeDestroyed");d={};var q,n=[];m||(h?n=a.a.Ka(e(),a.i.s):0<=b.selectedIndex&&n.push(a.i.s(b.options[b.selectedIndex])));g&&("undefined"==typeof g.length&&(g=[g]),q=a.a.xa(g,function(b){return x||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&
(g=a.a.c(c.get("optionsCaption")),null!==g&&g!==p&&q.unshift(L)));var r=!1;d.beforeRemove=function(a){b.removeChild(a)};g=k;c.has("optionsAfterRender")&&"function"==typeof c.get("optionsAfterRender")&&(g=function(b,d){k(0,d);a.k.u(c.get("optionsAfterRender"),null,[d[0],b!==L?b:p])});a.a.fb(b,q,function(d,e,g){g.length&&(n=!m&&g[0].selected?[a.i.s(g[0])]:[],r=!0);e=b.ownerDocument.createElement("option");d===L?(a.a.Ha(e,c.get("optionsCaption")),a.i.Y(e,p)):(g=f(d,c.get("optionsValue"),d),a.i.Y(e,a.a.c(g)),
d=f(d,c.get("optionsText"),g),a.a.Ha(e,d));return[e]},d,g);a.k.u(function(){m?a.i.Y(b,a.a.c(c.get("value")),!0):(h?n.length&&e().length<n.length:n.length&&0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex])!==n[0]:n.length||0<=b.selectedIndex)&&a.a.qa(b,"change")});a.a.kc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.ab=a.a.f.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),f=[];a.a.o(b.getElementsByTagName("option"),
function(b){b.selected&&f.push(a.i.s(b))});a.h.ra(e,c,"selectedOptions",f)})},update:function(b,d){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.o(b.getElementsByTagName("option"),function(b){var d=0<=a.a.m(c,a.i.s(b));a.a.Sb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.A(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,
d,c,e,f){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(f.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.Ha(b,d())}};a.e.R.text=!0;(function(){if(y&&y.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=y.opera&&y.opera.version&&parseInt(y.opera.version()),c=y.navigator.userAgent,
e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.M)var k=a.a.f.I(),h=a.a.f.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.f.get(c,h))&&c(b)},g=function(b,c){var d=b.ownerDocument;a.a.f.get(d,k)||(a.a.f.set(d,k,!0),a.a.n(d,"selectionchange",l));a.a.f.set(b,h,c)};a.d.textInput={init:function(b,c,l){function h(c,d){a.a.n(b,c,d)}function k(){var d=a.a.c(c());if(null===d||d===p)d="";w!==p&&d===w?setTimeout(k,4):b.value!==d&&(u=d,b.value=d)}function v(){A||
(w=b.value,A=setTimeout(t,4))}function t(){clearTimeout(A);w=A=p;var d=b.value;u!==d&&(u=d,a.h.ra(c(),l,"textInput",d))}var u=b.value,A,w;10>a.a.M?(h("propertychange",function(a){"value"===a.propertyName&&t()}),8==a.a.M&&(h("keyup",t),h("keydown",t)),8<=a.a.M&&(g(b,t),h("dragend",v))):(h("input",t),5>e&&"textarea"===a.a.v(b)?(h("keydown",v),h("paste",v),h("cut",v)):11>d?h("keydown",v):4>f&&(h("DOMAutoComplete",t),h("dragdrop",t),h("drop",t)));h("change",t);a.w(k,null,{q:b})}};a.h.V.textInput=!0;a.d.textinput=
{preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.fc;a.a.Rb(b,c)}}};a.d.uniqueName.fc=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=c.get("valueUpdate"),k=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ia(e,f),e=a.a.wb(e));var l=function(){h=null;k=!1;var e=d(),g=a.i.s(b);a.h.ra(e,c,"value",g)};!a.a.M||"input"!=
b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){k=!0}),a.a.n(b,"focus",function(){k=!1}),a.a.n(b,"blur",function(){k&&l()}));a.a.o(e,function(c){var d=l;a.a.Dc(c,"after")&&(d=function(){h=a.i.s(b);setTimeout(l,0)},c=c.substring(5));a.a.n(b,c,d)});var g=function(){var e=a.a.c(d()),f=a.i.s(b);if(null!==h&&e===h)setTimeout(g,0);else if(e!==f)if("select"===a.a.v(b)){var l=c.get("valueAllowUnset"),
f=function(){a.i.Y(b,e,l)};f();l||e===a.i.s(b)?setTimeout(f,0):a.k.u(a.a.qa,null,[b,"change"])}else a.i.Y(b,e)};a.w(g,null,{q:b})}else a.va(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,f,k){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,f,k)}}})("click");a.J=function(){};a.J.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.J.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.J.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||w;var c=d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.t.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.t.ha(b);throw Error("Unknown template type: "+b);};a.J.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,d,c,e)};a.J.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.J.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.J);a.kb=function(){function b(b,c,d,h){b=a.h.bb(b);for(var l=a.h.ka,g=0;g<b.length;g++){var m=b[g].key;if(l.hasOwnProperty(m)){var x=l[m];if("function"===typeof x){if(m=
x(b[g].value))throw Error(m);}else if(!x)throw Error("This template engine does not support the '"+m+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ea(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{lc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kb.xc(b,c)},d)},xc:function(a,f){return a.replace(d,function(a,c,d,e,m){return b(m,c,d,f)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},dc:function(b,c){return a.H.$a(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.va(l,b,h)})}}}();a.b("__tr_ambtns",a.kb.dc);(function(){a.t={};a.t.l=function(a){this.l=a};a.t.l.prototype.text=function(){var b=a.a.v(this.l),b="script"===b?"text":
"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.gb(this.l,d):this.l[b]=d};var b=a.a.f.I()+"_";a.t.l.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.l,b+c);a.a.f.set(this.l,b+c,arguments[1])};var d=a.a.f.I();a.t.ha=function(a){this.l=a};a.t.ha.prototype=new a.t.l;a.t.ha.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.l,d)||{};b.lb===p&&b.Na&&(b.lb=b.Na.innerHTML);return b.lb}a.a.f.set(this.l,
d,{lb:arguments[0]})};a.t.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.l,d)||{}).Na;a.a.f.set(this.l,d,{Na:arguments[0]})};a.b("templateSources",a.t);a.b("templateSources.domElement",a.t.l);a.b("templateSources.anonymousTemplate",a.t.ha)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,k=a.L.instance,r=k.preprocessNode;if(r){b(e,f,function(a,
b){var c=a.previousSibling,d=r.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.na(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.H.Xb(b,[d])});a.a.na(c,h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var n=(b&&c(b)||f||{}).ownerDocument,r=q.templateEngine||k;a.kb.lc(f,r,n);f=r.renderTemplate(f,h,q,n);if("number"!=
typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.e.T(b,f);n=!0;break;case "replaceNode":a.a.Qb(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(d(f,h),q.afterRender&&a.k.u(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.F(b)?b():"function"===typeof b?b(c,d):b}var k;a.hb=function(b){if(b!=p&&!(b instanceof a.J))throw Error("templateEngine must inherit from ko.templateEngine");
k=b};a.eb=function(b,d,h,x,q){h=h||{};if((h.templateEngine||k)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(x){var n=c(x);return a.j(function(){var k=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=f(b,k.$data,k),k=e(x,q,p,k,h);"replaceNode"==q&&(x=k,n=c(x))},null,{Pa:function(){return!n||!a.a.Qa(n)},q:n&&"replaceNode"==q?n.parentNode:n})}return a.H.$a(function(c){a.eb(b,d,h,c,"replaceNode")})};a.Cc=function(b,c,h,k,q){function n(a,b){d(b,v);h.afterRender&&
h.afterRender(b,a);v=null}function r(a,c){v=q.createChildContext(a,h.as,function(a){a.$index=c});var d=f(b,a,v);return e(null,"ignoreTargetNode",d,v,h)}var v;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.xa(b,function(b){return h.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.u(a.a.fb,null,[k,b,r,h,n])},null,{q:k})};var h=a.a.f.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.e.ma(b);else{if("nodes"in d){if(d=
d.nodes||[],a.F(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.e.childNodes(b);d=a.a.Jb(d);(new a.t.ha(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var k=c(),r;c=a.a.c(k);d=!0;e=null;"string"==typeof c?c={}:(k=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),r=a.a.c(c.data));"foreach"in c?e=a.Cc(k||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(r,c.as):f,e=a.eb(k||b,f,c,b)):a.e.ma(b);f=
e;(r=a.a.f.get(b,h))&&"function"==typeof r.p&&r.p();a.a.f.set(b,h,f&&f.$()?f:p)}};a.h.ka.template=function(b){b=a.h.bb(b);return 1==b.length&&b[0].unknown||a.h.vc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.R.template=!0})();a.b("setTemplateEngine",a.hb);a.b("renderTemplate",a.eb);a.a.Cb=function(a,d,c){if(a.length&&d.length){var e,f,k,h,l;for(e=f=0;(!c||e<c)&&(h=a[f]);++f){for(k=0;l=d[k];++k)if(h.value===l.value){h.moved=l.index;l.moved=
h.index;d.splice(k,1);e=k=0;break}e+=k}}};a.a.Ma=function(){function b(b,c,e,f,k){var h=Math.min,l=Math.max,g=[],m,p=b.length,q,n=c.length,r=n-p||1,v=p+n+1,t,u,w;for(m=0;m<=p;m++)for(u=t,g.push(t=[]),w=h(n,m+r),q=l(0,m-1);q<=w;q++)t[q]=q?m?b[m-1]===c[q-1]?u[q-1]:h(u[q]||v,t[q-1]||v)+1:q+1:m+1;h=[];l=[];r=[];m=p;for(q=n;m||q;)n=g[m][q]-1,q&&n===g[m][q-1]?l.push(h[h.length]={status:e,value:c[--q],index:q}):m&&n===g[m-1][q]?r.push(h[h.length]={status:f,value:b[--m],index:m}):(--q,--m,k.sparse||h.push({status:"retained",
value:c[q]}));a.a.Cb(l,r,10*p);return h.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Ma);(function(){function b(b,d,f,k,h){var l=[],g=a.j(function(){var g=d(f,h,a.a.na(l,b))||[];0<l.length&&(a.a.Qb(l,g),k&&a.k.u(k,null,[f,g,h]));l.length=0;a.a.ia(l,g)},null,{q:b,Pa:function(){return!a.a.tb(l)}});return{aa:l,j:g.$()?g:p}}var d=a.a.f.I();
a.a.fb=function(c,e,f,k,h){function l(b,d){s=u[d];t!==d&&(z[b]=s);s.Ua(t++);a.a.na(s.aa,c);r.push(s);y.push(s)}function g(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.o(c[d].aa,function(a){b(a,d,c[d].wa)})}e=e||[];k=k||{};var m=a.a.f.get(c,d)===p,u=a.a.f.get(c,d)||[],q=a.a.Ka(u,function(a){return a.wa}),n=a.a.Ma(q,e,k.dontLimitMoves),r=[],v=0,t=0,w=[],y=[];e=[];for(var z=[],q=[],s,C=0,D,E;D=n[C];C++)switch(E=D.moved,D.status){case "deleted":E===p&&(s=u[v],s.j&&s.j.p(),w.push.apply(w,a.a.na(s.aa,
c)),k.beforeRemove&&(e[C]=s,y.push(s)));v++;break;case "retained":l(C,v++);break;case "added":E!==p?l(C,E):(s={wa:D.value,Ua:a.r(t++)},r.push(s),y.push(s),m||(q[C]=s))}g(k.beforeMove,z);a.a.o(w,k.beforeRemove?a.S:a.removeNode);for(var C=0,m=a.e.firstChild(c),H;s=y[C];C++){s.aa||a.a.extend(s,b(c,f,s.wa,h,s.Ua));for(v=0;n=s.aa[v];m=n.nextSibling,H=n,v++)n!==m&&a.e.Fb(c,n,H);!s.rc&&h&&(h(s.wa,s.aa,s.Ua),s.rc=!0)}g(k.beforeRemove,e);g(k.afterMove,z);g(k.afterAdd,q);a.a.f.set(c,d,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.fb);a.P=function(){this.allowTemplateRewriting=!1};a.P.prototype=new a.J;a.P.prototype.renderTemplateSource=function(b,d,c,e){if(d=(9>a.a.M?0:b.nodes)?b.nodes():null)return a.a.O(d.cloneNode(!0).childNodes);b=b.text();return a.a.ca(b,e)};a.P.Va=new a.P;a.hb(a.P.Va);a.b("nativeTemplateEngine",a.P);(function(){a.Ya=function(){var a=this.uc=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,
e,f,k){k=k||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(k.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ya.prototype=new a.J;var b=new a.Ya;0<b.uc&&a.hb(b);a.b("jqueryTmplTemplateEngine",a.Ya)})()})})();})();

/**
 * @license Knockout.Punches
 * Enhanced binding syntaxes for Knockout 3+
 * (c) Michael Best
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 * Version 0.5.1
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['knockout'], factory);
    } else if (typeof module === "object") {
        // CommonJS module
        var ko = require("knockout");
        factory(ko);
    } else {
        // Browser globals
        factory(window.ko);
    }
}(function(ko) {

// Add a preprocess function to a binding handler.
function addBindingPreprocessor(bindingKeyOrHandler, preprocessFn) {
    return chainPreprocessor(getOrCreateHandler(bindingKeyOrHandler), 'preprocess', preprocessFn);
}

// These utility functions are separated out because they're also used by
// preprocessBindingProperty

// Get the binding handler or create a new, empty one
function getOrCreateHandler(bindingKeyOrHandler) {
    return typeof bindingKeyOrHandler === 'object' ? bindingKeyOrHandler :
        (ko.getBindingHandler(bindingKeyOrHandler) || (ko.bindingHandlers[bindingKeyOrHandler] = {}));
}
// Add a preprocess function
function chainPreprocessor(obj, prop, fn) {
    if (obj[prop]) {
        // If the handler already has a preprocess function, chain the new
        // one after the existing one. If the previous function in the chain
        // returns a falsy value (to remove the binding), the chain ends. This
        // method allows each function to modify and return the binding value.
        var previousFn = obj[prop];
        obj[prop] = function(value, binding, addBinding) {
            value = previousFn.call(this, value, binding, addBinding);
            if (value)
                return fn.call(this, value, binding, addBinding);
        };
    } else {
        obj[prop] = fn;
    }
    return obj;
}

// Add a preprocessNode function to the binding provider. If a
// function already exists, chain the new one after it. This calls
// each function in the chain until one modifies the node. This
// method allows only one function to modify the node.
function addNodePreprocessor(preprocessFn) {
    var provider = ko.bindingProvider.instance;
    if (provider.preprocessNode) {
        var previousPreprocessFn = provider.preprocessNode;
        provider.preprocessNode = function(node) {
            var newNodes = previousPreprocessFn.call(this, node);
            if (!newNodes)
                newNodes = preprocessFn.call(this, node);
            return newNodes;
        };
    } else {
        provider.preprocessNode = preprocessFn;
    }
}

function addBindingHandlerCreator(matchRegex, callbackFn) {
    var oldGetHandler = ko.getBindingHandler;
    ko.getBindingHandler = function(bindingKey) {
        var match;
        return oldGetHandler(bindingKey) || ((match = bindingKey.match(matchRegex)) && callbackFn(match, bindingKey));
    };
}

// Create shortcuts to commonly used ko functions
var ko_unwrap = ko.unwrap;

// Create "punches" object and export utility functions
var ko_punches = ko.punches = {
    utils: {
        addBindingPreprocessor: addBindingPreprocessor,
        addNodePreprocessor: addNodePreprocessor,
        addBindingHandlerCreator: addBindingHandlerCreator,

        // previous names retained for backwards compitibility
        setBindingPreprocessor: addBindingPreprocessor,
        setNodePreprocessor: addNodePreprocessor
    }
};

ko_punches.enableAll = function () {
    // Enable interpolation markup
    enableInterpolationMarkup();
    enableAttributeInterpolationMarkup();

    // Enable auto-namspacing of attr, css, event, and style
    enableAutoNamespacedSyntax('attr');
    enableAutoNamespacedSyntax('css');
    enableAutoNamespacedSyntax('event');
    enableAutoNamespacedSyntax('style');

    // Make sure that Knockout knows to bind checked after attr.value (see #40)
    ko.bindingHandlers.checked.after.push('attr.value');

    // Enable filter syntax for text, html, and attr
    enableTextFilter('text');
    enableTextFilter('html');
    addDefaultNamespacedBindingPreprocessor('attr', filterPreprocessor);

    // Enable wrapped callbacks for click, submit, event, optionsAfterRender, and template options
    enableWrappedCallback('click');
    enableWrappedCallback('submit');
    enableWrappedCallback('optionsAfterRender');
    addDefaultNamespacedBindingPreprocessor('event', wrappedCallbackPreprocessor);
    addBindingPropertyPreprocessor('template', 'beforeRemove', wrappedCallbackPreprocessor);
    addBindingPropertyPreprocessor('template', 'afterAdd', wrappedCallbackPreprocessor);
    addBindingPropertyPreprocessor('template', 'afterRender', wrappedCallbackPreprocessor);
};
// Convert input in the form of `expression | filter1 | filter2:arg1:arg2` to a function call format
// with filters accessed as ko.filters.filter1, etc.
function filterPreprocessor(input) {
    // Check if the input contains any | characters; if not, just return
    if (input.indexOf('|') === -1)
        return input;

    // Split the input into tokens, in which | and : are individual tokens, quoted strings are ignored, and all tokens are space-trimmed
    var tokens = input.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\|\||[|:]|[^\s|:"'][^|:"']*[^\s|:"']|[^\s|:"']/g);
    if (tokens && tokens.length > 1) {
        // Append a line so that we don't need a separate code block to deal with the last item
        tokens.push('|');
        input = tokens[0];
        var lastToken, token, inFilters = false, nextIsFilter = false;
        for (var i = 1, token; token = tokens[i]; ++i) {
            if (token === '|') {
                if (inFilters) {
                    if (lastToken === ':')
                        input += "undefined";
                    input += ')';
                }
                nextIsFilter = true;
                inFilters = true;
            } else {
                if (nextIsFilter) {
                    input = "ko.filters['" + token + "'](" + input;
                } else if (inFilters && token === ':') {
                    if (lastToken === ':')
                        input += "undefined";
                    input += ",";
                } else {
                    input += token;
                }
                nextIsFilter = false;
            }
            lastToken = token;
        }
    }
    return input;
}

// Set the filter preprocessor for a specific binding
function enableTextFilter(bindingKeyOrHandler) {
    addBindingPreprocessor(bindingKeyOrHandler, filterPreprocessor);
}

var filters = {};

// Convert value to uppercase
filters.uppercase = function(value) {
    return String.prototype.toUpperCase.call(ko_unwrap(value));
};

// Convert value to lowercase
filters.lowercase = function(value) {
    return String.prototype.toLowerCase.call(ko_unwrap(value));
};

// Return default value if the input value is empty or null
filters['default'] = function (value, defaultValue) {
    value = ko_unwrap(value);
    if (typeof value === "function") {
        return value;
    }
    if (typeof value === "string") {
        return trim(value) === '' ? defaultValue : value;
    }
    return value == null || value.length == 0 ? defaultValue : value;
};

// Return the value with the search string replaced with the replacement string
filters.replace = function(value, search, replace) {
    return String.prototype.replace.call(ko_unwrap(value), search, replace);
};

filters.fit = function(value, length, replacement, trimWhere) {
    value = ko_unwrap(value);
    if (length && ('' + value).length > length) {
        replacement = '' + (replacement || '...');
        length = length - replacement.length;
        value = '' + value;
        switch (trimWhere) {
            case 'left':
                return replacement + value.slice(-length);
            case 'middle':
                var leftLen = Math.ceil(length / 2);
                return value.substr(0, leftLen) + replacement + value.slice(leftLen-length);
            default:
                return value.substr(0, length) + replacement;
        }
    } else {
        return value;
    }
};

// Convert a model object to JSON
filters.json = function(rootObject, space, replacer) {     // replacer and space are optional
    return ko.toJSON(rootObject, replacer, space);
};

// Format a number using the browser's toLocaleString
filters.number = function(value) {
    return (+ko_unwrap(value)).toLocaleString();
};

// Export the filters object for general access
ko.filters = filters;

// Export the preprocessor functions
ko_punches.textFilter = {
    preprocessor: filterPreprocessor,
    enableForBinding: enableTextFilter
};
// Support dynamically-created, namespaced bindings. The binding key syntax is
// "namespace.binding". Within a certain namespace, we can dynamically create the
// handler for any binding. This is particularly useful for bindings that work
// the same way, but just set a different named value, such as for element
// attributes or CSS classes.
var namespacedBindingMatch = /([^\.]+)\.(.+)/, namespaceDivider = '.';
addBindingHandlerCreator(namespacedBindingMatch, function (match, bindingKey) {
    var namespace = match[1],
        namespaceHandler = ko.bindingHandlers[namespace];
    if (namespaceHandler) {
        var bindingName = match[2],
            handlerFn = namespaceHandler.getNamespacedHandler || defaultGetNamespacedHandler,
            handler = handlerFn.call(namespaceHandler, bindingName, namespace, bindingKey);
        ko.bindingHandlers[bindingKey] = handler;
        return handler;
    }
});

// Knockout's built-in bindings "attr", "event", "css" and "style" include the idea of
// namespaces, representing it using a single binding that takes an object map of names
// to values. This default handler translates a binding of "namespacedName: value"
// to "namespace: {name: value}" to automatically support those built-in bindings.
function defaultGetNamespacedHandler(name, namespace, namespacedName) {
    var handler = ko.utils.extend({}, this);
    function setHandlerFunction(funcName) {
        if (handler[funcName]) {
            handler[funcName] = function(element, valueAccessor) {
                function subValueAccessor() {
                    var result = {};
                    result[name] = valueAccessor();
                    return result;
                }
                var args = Array.prototype.slice.call(arguments, 0);
                args[1] = subValueAccessor;
                return ko.bindingHandlers[namespace][funcName].apply(this, args);
            };
        }
    }
    // Set new init and update functions that wrap the originals
    setHandlerFunction('init');
    setHandlerFunction('update');
    // Clear any preprocess function since preprocessing of the new binding would need to be different
    if (handler.preprocess)
        handler.preprocess = null;
    if (ko.virtualElements.allowedBindings[namespace])
        ko.virtualElements.allowedBindings[namespacedName] = true;
    return handler;
}

// Adds a preprocess function for every generated namespace.x binding. This can
// be called multiple times for the same binding, and the preprocess functions will
// be chained. If the binding has a custom getNamespacedHandler method, make sure that
// it's set before this function is used.
function addDefaultNamespacedBindingPreprocessor(namespace, preprocessFn) {
    var handler = ko.getBindingHandler(namespace);
    if (handler) {
        var previousHandlerFn = handler.getNamespacedHandler || defaultGetNamespacedHandler;
        handler.getNamespacedHandler = function() {
            return addBindingPreprocessor(previousHandlerFn.apply(this, arguments), preprocessFn);
        };
    }
}

function autoNamespacedPreprocessor(value, binding, addBinding) {
    if (value.charAt(0) !== "{")
        return value;

    // Handle two-level binding specified as "binding: {key: value}" by parsing inner
    // object and converting to "binding.key: value"
    var subBindings = ko.expressionRewriting.parseObjectLiteral(value);
    ko.utils.arrayForEach(subBindings, function(keyValue) {
        addBinding(binding + namespaceDivider + keyValue.key, keyValue.value);
    });
}

// Set the namespaced preprocessor for a specific binding
function enableAutoNamespacedSyntax(bindingKeyOrHandler) {
    addBindingPreprocessor(bindingKeyOrHandler, autoNamespacedPreprocessor);
}

// Export the preprocessor functions
ko_punches.namespacedBinding = {
    defaultGetHandler: defaultGetNamespacedHandler,
    setDefaultBindingPreprocessor: addDefaultNamespacedBindingPreprocessor,    // for backwards compat.
    addDefaultBindingPreprocessor: addDefaultNamespacedBindingPreprocessor,
    preprocessor: autoNamespacedPreprocessor,
    enableForBinding: enableAutoNamespacedSyntax
};
// Wrap a callback function in an anonymous function so that it is called with the appropriate
// "this" value.
function wrappedCallbackPreprocessor(val) {
    // Matches either an isolated identifier or something ending with a property accessor
    if (/^([$_a-z][$\w]*|.+(\.\s*[$_a-z][$\w]*|\[.+\]))$/i.test(val)) {
        return 'function(_x,_y,_z){return(' + val + ')(_x,_y,_z);}';
    } else {
        return val;
    }
}

// Set the wrappedCallback preprocessor for a specific binding
function enableWrappedCallback(bindingKeyOrHandler) {
    addBindingPreprocessor(bindingKeyOrHandler, wrappedCallbackPreprocessor);
}

// Export the preprocessor functions
ko_punches.wrappedCallback = {
    preprocessor: wrappedCallbackPreprocessor,
    enableForBinding: enableWrappedCallback
};
// Attach a preprocess function to a specific property of a binding. This allows you to
// preprocess binding "options" using the same preprocess functions that work for bindings.
function addBindingPropertyPreprocessor(bindingKeyOrHandler, property, preprocessFn) {
    var handler = getOrCreateHandler(bindingKeyOrHandler);
    if (!handler._propertyPreprocessors) {
        // Initialize the binding preprocessor
        chainPreprocessor(handler, 'preprocess', propertyPreprocessor);
        handler._propertyPreprocessors = {};
    }
    // Add the property preprocess function
    chainPreprocessor(handler._propertyPreprocessors, property, preprocessFn);
}

// In order to preprocess a binding property, we have to preprocess the binding itself.
// This preprocess function splits up the binding value and runs each property's preprocess
// function if it's set.
function propertyPreprocessor(value, binding, addBinding) {
    if (value.charAt(0) !== "{")
        return value;

    var subBindings = ko.expressionRewriting.parseObjectLiteral(value),
        resultStrings = [],
        propertyPreprocessors = this._propertyPreprocessors || {};
    ko.utils.arrayForEach(subBindings, function(keyValue) {
        var prop = keyValue.key, propVal = keyValue.value;
        if (propertyPreprocessors[prop]) {
            propVal = propertyPreprocessors[prop](propVal, prop, addBinding);
        }
        if (propVal) {
            resultStrings.push("'" + prop + "':" + propVal);
        }
    });
    return "{" + resultStrings.join(",") + "}";
}

// Export the preprocessor functions
ko_punches.preprocessBindingProperty = {
    setPreprocessor: addBindingPropertyPreprocessor,     // for backwards compat.
    addPreprocessor: addBindingPropertyPreprocessor
};
// Wrap an expression in an anonymous function so that it is called when the event happens
function makeExpressionCallbackPreprocessor(args) {
    return function expressionCallbackPreprocessor(val) {
        return 'function('+args+'){return(' + val + ');}';
    };
}

var eventExpressionPreprocessor = makeExpressionCallbackPreprocessor("$data,$event");

// Set the expressionCallback preprocessor for a specific binding
function enableExpressionCallback(bindingKeyOrHandler, args) {
    var args = Array.prototype.slice.call(arguments, 1).join();
    addBindingPreprocessor(bindingKeyOrHandler, makeExpressionCallbackPreprocessor(args));
}

// Export the preprocessor functions
ko_punches.expressionCallback = {
    makePreprocessor: makeExpressionCallbackPreprocessor,
    eventPreprocessor: eventExpressionPreprocessor,
    enableForBinding: enableExpressionCallback
};

// Create an "on" namespace for events to use the expression method
ko.bindingHandlers.on = {
    getNamespacedHandler: function(eventName) {
        var handler = ko.getBindingHandler('event' + namespaceDivider + eventName);
        return addBindingPreprocessor(handler, eventExpressionPreprocessor);
    }
};
// Performance comparison at http://jsperf.com/markup-interpolation-comparison
function parseInterpolationMarkup(textToParse, outerTextCallback, expressionCallback) {
    function innerParse(text) {
        var innerMatch = text.match(/^([\s\S]*)}}([\s\S]*?)\{\{([\s\S]*)$/);
        if (innerMatch) {
            innerParse(innerMatch[1]);
            outerTextCallback(innerMatch[2]);
            expressionCallback(innerMatch[3]);
        } else {
            expressionCallback(text);
        }
    }
    var outerMatch = textToParse.match(/^([\s\S]*?)\{\{([\s\S]*)}}([\s\S]*)$/);
    if (outerMatch) {
        outerTextCallback(outerMatch[1]);
        innerParse(outerMatch[2]);
        outerTextCallback(outerMatch[3]);
    }
}

function trim(string) {
    return string == null ? '' :
        string.trim ?
            string.trim() :
            string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
}

function interpolationMarkupPreprocessor(node) {
    // only needs to work with text nodes
    if (node.nodeType === 3 && node.nodeValue && node.nodeValue.indexOf('{{') !== -1 && (node.parentNode || {}).nodeName != "TEXTAREA") {
        var nodes = [];
        function addTextNode(text) {
            if (text)
                nodes.push(document.createTextNode(text));
        }
        function wrapExpr(expressionText) {
            if (expressionText)
                nodes.push.apply(nodes, ko_punches_interpolationMarkup.wrapExpression(expressionText, node));
        }
        parseInterpolationMarkup(node.nodeValue, addTextNode, wrapExpr)

        if (nodes.length) {
            if (node.parentNode) {
                for (var i = 0, n = nodes.length, parent = node.parentNode; i < n; ++i) {
                    parent.insertBefore(nodes[i], node);
                }
                parent.removeChild(node);
            }
            return nodes;
        }
    }
}

if (!ko.virtualElements.allowedBindings.html) {
    // Virtual html binding
    // SO Question: http://stackoverflow.com/a/15348139
    var overridden = ko.bindingHandlers.html.update;
    ko.bindingHandlers.html.update = function (element, valueAccessor) {
        if (element.nodeType === 8) {
            var html = ko_unwrap(valueAccessor());
            if (html != null) {
                var parsedNodes = ko.utils.parseHtmlFragment('' + html);
                ko.virtualElements.setDomNodeChildren(element, parsedNodes);
            } else {
                ko.virtualElements.emptyNode(element);
            }
        } else {
            overridden(element, valueAccessor);
        }
    };
    ko.virtualElements.allowedBindings.html = true;
}

function wrapExpression(expressionText, node) {
    var ownerDocument = node ? node.ownerDocument : document,
        closeComment = true,
        binding,
        expressionText = trim(expressionText),
        firstChar = expressionText[0],
        lastChar = expressionText[expressionText.length - 1],
        result = [],
        matches;

    if (firstChar === '#') {
        if (lastChar === '/') {
            binding = expressionText.slice(1, -1);
        } else {
            binding = expressionText.slice(1);
            closeComment = false;
        }
        if (matches = binding.match(/^([^,"'{}()\/:[\]\s]+)\s+([^\s:].*)/)) {
            binding = matches[1] + ':' + matches[2];
        }
    } else if (firstChar === '/') {
        // replace only with a closing comment
    } else if (firstChar === '{' && lastChar === '}') {
        binding = "html:" + trim(expressionText.slice(1, -1));
    } else {
        binding = "text:" + trim(expressionText);
    }

    if (binding)
        result.push(ownerDocument.createComment("ko " + binding));
    if (closeComment)
        result.push(ownerDocument.createComment("/ko"));
    return result;
};

function enableInterpolationMarkup() {
    addNodePreprocessor(interpolationMarkupPreprocessor);
}

// Export the preprocessor functions
var ko_punches_interpolationMarkup = ko_punches.interpolationMarkup = {
    preprocessor: interpolationMarkupPreprocessor,
    enable: enableInterpolationMarkup,
    wrapExpression: wrapExpression
};


var dataBind = 'data-bind';
function attributeInterpolationMarkerPreprocessor(node) {
    if (node.nodeType === 1 && node.attributes.length) {
        var dataBindAttribute = node.getAttribute(dataBind);
        for (var attrs = ko.utils.arrayPushAll([], node.attributes), n = attrs.length, i = 0; i < n; ++i) {
            var attr = attrs[i];
            if (attr.specified && attr.name != dataBind && attr.value.indexOf('{{') !== -1) {
                var parts = [], attrValue = '';
                function addText(text) {
                    if (text)
                        parts.push('"' + text.replace(/"/g, '\\"') + '"');
                }
                function addExpr(expressionText) {
                    if (expressionText) {
                        attrValue = expressionText;
                        parts.push('ko.unwrap(' + expressionText + ')');
                    }
                }
                parseInterpolationMarkup(attr.value, addText, addExpr);

                if (parts.length > 1) {
                    attrValue = '""+' + parts.join('+');
                }

                if (attrValue) {
                    var attrName = attr.name.toLowerCase();
                    var attrBinding = ko_punches_attributeInterpolationMarkup.attributeBinding(attrName, attrValue, node) || attributeBinding(attrName, attrValue, node);
                    if (!dataBindAttribute) {
                        dataBindAttribute = attrBinding
                    } else {
                        dataBindAttribute += ',' + attrBinding;
                    }
                    node.setAttribute(dataBind, dataBindAttribute);
                    // Using removeAttribute instead of removeAttributeNode because IE clears the
                    // class if you use removeAttributeNode to remove the id.
                    node.removeAttribute(attr.name);
                }
            }
        }
    }
}

function attributeBinding(name, value, node) {
    if (ko.getBindingHandler(name)) {
        return name + ':' + value;
    } else {
        return 'attr.' + name + ':' + value;
    }
}

function enableAttributeInterpolationMarkup() {
    addNodePreprocessor(attributeInterpolationMarkerPreprocessor);
}

var ko_punches_attributeInterpolationMarkup = ko_punches.attributeInterpolationMarkup = {
    preprocessor: attributeInterpolationMarkerPreprocessor,
    enable: enableAttributeInterpolationMarkup,
    attributeBinding: attributeBinding
};

    return ko_punches;
}));

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};


;(function(win){
	var store = {},
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.17'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}
	store.forEach = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		function ieKeyFix(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=0, attr; attr=attributes[i]; i++) {
				storage.removeAttribute(attr.name)
			}
			storage.save(localStorageName)
		})
		store.getAll = function(storage) {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled

	if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
	else if (typeof define === 'function' && define.amd) { define(store) }
	else { win.store = store }

})(Function('return this')());

(function() {
  window.QuickScript = window.QS = {};

  QuickScript.utils = {
    buildOptions: function(hash) {
      var key, ret, val;
      ret = [];
      for (key in hash) {
        val = hash[key];
        ret.push({
          value: key,
          text: val
        });
      }
      return ret;
    },
    renderToString: function(tmpl, vm) {
      var $el, html;
      $el = $("<div data-bind='template: " + tmpl + "'>");
      $el.koBind(vm);
      html = $el[0].innerHTML;
      $el.koClean();
      return html;
    },
    pluralize: function(count, single, plural) {
      if (count === 1) {
        return count + " " + single;
      } else {
        return count + " " + plural;
      }
    },
    isFunction: function(fn) {
      return typeof fn === 'function';
    },
    isRegularObject: function(obj) {
      return obj.constructor === Object;
    },
    uuid: function() {
      return Math.random().toString().substring(2);
    },
    linkify: function(text) {
      var exp;
      exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      return text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
    },
    toUSDString: function(amt) {
      var amt_usd;
      amt_usd = amt / 100.0;
      return "$ " + (amt_usd.toFixed(2));
    },
    getMouseCoords: function(ev, type, opts) {
      var coords, ts;
      type || (type = 'absolute');
      coords = null;
      if ((ev.originalEvent.offsetX != null) && (ev.originalEvent.offsetY != null)) {
        coords = {
          x: ev.originalEvent.offsetX,
          y: ev.originalEvent.offsetY
        };
      } else {
        coords = {
          x: ev.originalEvent.layerX,
          y: ev.originalEvent.layerY
        };
      }
      if (type === 'relative') {
        ts = {
          w: ev.currentTarget.offsetWidth,
          h: ev.currentTarget.offsetHeight
        };
        return {
          x: (coords.x / ts.w) * 100,
          y: (coords.y / ts.h) * 100
        };
      } else {
        return coords;
      }
    },
    elementContainsPoint: function(el, point) {
      var in_x, in_y, rect;
      rect = QS.utils.getElementPosition(el);
      in_x = (point.x >= rect.left) && (point.x <= rect.left + rect.width);
      in_y = (point.y >= rect.top) && (point.y <= rect.top + rect.height);
      return in_x && in_y;
    },
    getElementPosition: function(el) {
      var ret;
      ret = $(el).offset();
      ret.width = el.offsetWidth;
      ret.height = el.offsetHeight;
      return ret;
    },
    isBlank: function(val) {
      if (val == null) {
        return true;
      }
      return val === "";
    },
    isPresent: function(val) {
      return !QS.utils.isBlank(val);
    },
    objectToArray: function(obj) {
      var key, ret, val;
      return ret = (function() {
        var results;
        results = [];
        for (key in obj) {
          val = obj[key];
          results.push({
            'key': key,
            'value': val
          });
        }
        return results;
      })();
    },
    preventDefault: (function(_this) {
      return function(view, ev) {
        return typeof ev.preventDefault === "function" ? ev.preventDefault() : void 0;
      };
    })(this),
    getURLPath: (function(_this) {
      return function(url) {
        var i, j, ms, x;
        ms = [];
        i = url.indexOf("?");
        if (i !== -1) {
          ms.push(i);
        }
        j = url.indexOf("#");
        if (j !== -1) {
          ms.push(j);
        }
        if (ms.length === 0) {
          return url;
        } else {
          x = Math.min.apply(null, ms);
          return url.substring(0, x);
        }
      };
    })(this),
    getURLParams: (function(_this) {
      return function(url) {
        var i, k, kv, len, pair, ref, ret, str;
        i = url.indexOf("?");
        if (i === -1) {
          return {};
        }
        str = url.substring(i + 1);
        ret = {};
        ref = str.split("&");
        for (k = 0, len = ref.length; k < len; k++) {
          pair = ref[k];
          kv = pair.split("=");
          if (!QS.utils.isBlank(kv[0])) {
            ret[kv[0]] = unescape(kv[1]);
          }
        }
        return ret;
      };
    })(this),
    prepareAPIParam: (function(_this) {
      return function(val, opts) {
        opts || (opts = {
          allowArrays: true
        });
        if (val instanceof File) {
          return val;
        } else if ((val instanceof Array) && opts.allowArrays === true) {
          return val;
        } else if (val === null) {
          return '';
        } else if (typeof val === 'object') {
          return JSON.stringify(val);
        } else {
          return val;
        }
      };
    })(this),
    prepareAPIData: (function(_this) {
      return function(data, opts) {
        var key, ret, val;
        if (data == null) {
          return null;
        }
        ret = {};
        for (key in data) {
          val = data[key];
          ret[key] = QS.utils.prepareAPIParam(val, opts);
        }
        return ret;
      };
    })(this),
    imageContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff'],
    isContentTypeImage: function(content_type) {
      if (content_type == null) {
        return false;
      }
      return QS.utils.imageContentTypes.includes(content_type.toLowerCase());
    }
  };

  QuickScript.log = function(msg, lvl) {
    lvl || (lvl = 1);
    if (QS.debug === true && lvl <= QS.log_level) {
      return console.log(msg);
    }
  };

  QuickScript.debug || (QuickScript.debug = true);

  QuickScript.log_level || (QuickScript.log_level = 5);

  QuickScript.start_time = Date.now();

  QuickScript.time = function() {
    var now;
    now = Date.now();
    return (now - QS.start_time) / 1000.0;
  };

  QuickScript.includeEventable = function(self) {
    self.prototype.handle = function(ev, callback, opts) {
      var base, cbs;
      if (opts == null) {
        opts = {};
      }
      this._events || (this._events = {});
      (base = this._events)[ev] || (base[ev] = []);
      cbs = this._events[ev];
      opts.callback = callback;
      opts.dispose = function() {
        return cbs.remove(opts);
      };
      cbs.push(opts);
      return opts;
    };
    self.prototype.trigger = function(ev, data) {
      var cbs, k, l, len, len1, opts, rems, results;
      QS.log("EVENTABLE::TRIGGER : " + ev, 5);
      this._events || (this._events = {});
      cbs = this._events[ev] || [];
      rems = [];
      for (k = 0, len = cbs.length; k < len; k++) {
        opts = cbs[k];
        opts.callback(data);
        if (opts.once === true) {
          rems.push(opts);
        }
      }
      results = [];
      for (l = 0, len1 = rems.length; l < len1; l++) {
        opts = rems[l];
        results.push(cbs.remove(opts));
      }
      return results;
    };
    return self.prototype.removeHandler = function(ev, evo) {
      var cbs, k, l, len, len1, opts, rems, results;
      this._events || (this._events = {});
      cbs = this._events[ev] || [];
      rems = [];
      for (k = 0, len = cbs.length; k < len; k++) {
        opts = cbs[k];
        if (opts === evo) {
          rems.push(opts);
        }
      }
      results = [];
      for (l = 0, len1 = rems.length; l < len1; l++) {
        opts = rems[l];
        results.push(cbs.remove(opts));
      }
      return results;
    };
  };

  QuickScript.install = function(scope) {
    var cns, install_class, k, l, len, len1, name, others, results;
    cns = ['Application', 'View', 'Model', 'FileModel', 'Collection', 'ViewCollection', 'Host', 'ModelAdapter', 'AccountAdapter', 'LocalStore'];
    others = ['PageTimer', 'Notifier', 'AuthToken', 'TimeLength', 'SelectOpts', 'SupportManager', 'AssetsLibrary'];
    install_class = function(name) {
      return scope[name] = QuickScript[name];
    };
    for (k = 0, len = cns.length; k < len; k++) {
      name = cns[k];
      install_class(name);
    }
    results = [];
    for (l = 0, len1 = others.length; l < len1; l++) {
      name = others[l];
      results.push(install_class(name));
    }
    return results;
  };

  QuickScript.STATES = {};

  QuickScript.STATES.READY = 1;

  QuickScript.STATES.LOADING = 2;

  QuickScript.STATES.SAVING = 3;

  QuickScript.STATES.EDITING = 4;

  QuickScript.STATES.INSERTING = 5;

  QuickScript.STATES.APPENDING = 6;

  QuickScript.STATES.UPDATING = 7;

  QS.SupportManager = (function() {
    function SupportManager() {}

    return SupportManager;

  })();

  QS.SupportManager.hasFormData = function() {
    return window.FormData != null;
  };

  QS.SupportManager.canUpload = function() {
    return QS.SupportManager.hasFormData();
  };

  if (QS.SupportManager.hasFormData()) {
    QuickScript.ajax = function(opts) {
      var aval, data, first, k, key, len, ref, ref1, ref2, req, url, val;
      data = new FormData();
      req = new XMLHttpRequest();
      url = opts.url;
      if (opts.async == null) {
        opts.async = true;
      }
      opts.data || (opts.data = {});
      opts.method || (opts.method = opts.type || 'POST');
      if (opts.method === "GET") {
        url = url + "?";
        first = true;
        ref = opts.data;
        for (key in ref) {
          val = ref[key];
          if (val instanceof Array) {
            for (k = 0, len = val.length; k < len; k++) {
              aval = val[k];
              url = url + ("" + key + (escape('[]')) + "=" + (escape(aval)) + "&");
            }
          } else {
            url = url + (key + "=" + (escape(val)) + "&");
          }
        }
        url = url.substring(0, url.length - 1);
      } else {
        ref1 = opts.data;
        for (key in ref1) {
          val = ref1[key];
          data.append(key, val);
        }
      }
      req.onreadystatechange = function(ev) {
        var error, resp;
        if (req.readyState === 4) {
          if (opts.loading != null) {
            opts.loading(false);
          }
          try {
            resp = JSON.parse(req.responseText);
          } catch (error) {
            resp = req.responseText;
          }
          if (req.status === 200) {
            return opts.success(resp, req.status);
          } else {
            if (opts.error != null) {
              return opts.error(resp, req.status);
            }
          }
        }
      };
      if (opts.progress != null) {
        req.upload.addEventListener('progress', function(ev) {
          return opts.progress(ev, Math.floor(ev.loaded / ev.total * 100));
        });
      }
      req.open(opts.method, url, opts.async);
      ref2 = opts.headers;
      for (key in ref2) {
        val = ref2[key];
        if (val != null) {
          req.setRequestHeader(key, val);
        }
      }
      req.withCredentials = true;
      if (opts.loading != null) {
        opts.loading(true);
      }
      if (opts.method === "GET") {
        req.send();
      } else {
        req.send(data);
      }
      return req;
    };
  } else {
    QuickScript.ajax = function(opts) {
      var aval, data_s, k, key, len, ref, ref1, req, url, val;
      req = new XMLHttpRequest();
      url = opts.url;
      if (opts.async == null) {
        opts.async = true;
      }
      opts.method || (opts.method = opts.type || 'POST');
      data_s = '';
      ref = opts.data;
      for (key in ref) {
        val = ref[key];
        if (val instanceof Array) {
          for (k = 0, len = val.length; k < len; k++) {
            aval = val[k];
            data_s = data_s + ("" + key + (escape('[]')) + "=" + (escape(aval)) + "&");
          }
        } else {
          data_s = data_s + (key + "=" + (escape(val)) + "&");
        }
      }
      data_s = data_s.substring(0, data_s.length - 1);
      if (opts.method === "GET") {
        url = url + "?" + data_s;
      }
      req.onreadystatechange = function(ev) {
        var error, resp;
        if (req.readyState === 4) {
          if (opts.loading != null) {
            opts.loading(false);
          }
          try {
            resp = JSON.parse(req.responseText);
          } catch (error) {
            resp = req.responseText;
          }
          if (req.status === 200) {
            return opts.success(resp, req.status);
          } else {
            if (opts.error != null) {
              return opts.error(resp, req.status);
            }
          }
        }
      };

      /*
      		req.upload.addEventListener('error', opts.error) if opts.error?
      		if opts.progress?
      			req.upload.addEventListener 'progress', (ev)->
      				opts.progress(ev, Math.floor( ev.loaded / ev.total * 100 ))
       */
      req.open(opts.method, url, opts.async);
      ref1 = opts.headers;
      for (key in ref1) {
        val = ref1[key];
        if (val != null) {
          req.setRequestHeader(key, val);
        }
      }
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.withCredentials = true;
      if (opts.loading != null) {
        opts.loading(true);
      }
      req.send(data_s);
      return req;
    };
  }

}).call(this);

(function() {
  var cropImage, fadeInElement, link_to, link_to_rel, link_to_span, loadScript, timeFromUnix,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Array.prototype.indexAt = function(val) {
    var i, j, ref;
    for (i = j = 0, ref = this.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (this[i] === val) {
        return i;
      }
    }
    return -1;
  };

  Array.prototype.includes = function(val) {
    return this.indexAt(val) !== -1;
  };

  Array.prototype.itemAt = function(val) {
    return this.slice(val)[0];
  };

  Array.prototype.pushOnce = function(item) {
    if (!this.includes(item)) {
      return this.push(item);
    }
  };

  Array.prototype.remove = function(item) {
    var idx;
    idx = this.indexOf(item);
    if (idx > -1) {
      return this.splice(idx, 1);
    }
  };

  Array.prototype.first = function() {
    return this[0];
  };

  Array.prototype.last = function() {
    return this[this.length - 1];
  };

  Array.prototype.findAndMap = function(params, field, def) {
    var res, result;
    res = this.filter(function(itm) {
      var key, val;
      for (key in params) {
        val = params[key];
        if (itm[key] !== val) {
          return false;
        }
      }
      return true;
    });
    result = res[0];
    if (result != null) {
      if (typeof field === 'function') {
        return field(result);
      } else if (typeof field === 'string') {
        return result[field];
      } else {
        return result;
      }
    } else {
      return def;
    }
  };

  Array.prototype.unique = function() {
    var arr, el, j, len;
    arr = [];
    for (j = 0, len = this.length; j < len; j++) {
      el = this[j];
      if (arr.indexOf(el) === -1) {
        arr.push(el);
      }
    }
    return arr;
  };

  Date.from_utc = function(utc) {
    return new Date(utc * 1000);
  };

  Date.from_now = function() {
    return new Date();
  };

  Date.from_str = function(str) {
    var d;
    str = "" + str;
    d = new Date();
    d.setYear(+(str.substring(0, 4)));
    d.setMonth(+(str.substring(4, 6)) - 1);
    d.setDate(+(str.substring(6, 8)));
    d.remove_time();
    return d;
  };

  Date.now_utc = function() {
    return Math.round((new Date()).getTime() / 1000.0);
  };

  Date.prototype.to_utc = function() {
    return Math.round(this.getTime() / 1000.0);
  };

  Date.prototype.remove_time = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
  };

  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

  String.prototype.includes = function(str) {
    return this.indexOf(str) !== -1;
  };

  String.prototype.truncate = function(val) {
    var ret;
    ret = this.substring(0, val);
    if (this.length > val) {
      ret = ret + "...";
    }
    return ret;
  };

  String.prototype.rjust = function(length, char) {
    var ret;
    ret = this;
    while (ret.length < length) {
      ret = char + ret;
    }
    return ret;
  };

  History.getRelativeUrl = function() {
    var url;
    url = History.getState().url;
    return "/" + (url.replace(History.getRootUrl(), ''));
  };

  QS.SelectOpts = (function() {
    function SelectOpts() {
      this.find = bind(this.find, this);
      this.add = bind(this.add, this);
      this.options = [];
    }

    SelectOpts.prototype.add = function(val, str) {
      this.options.push({
        val: val.toString(),
        str: str
      });
      return this;
    };

    SelectOpts.prototype.find = function(val) {
      var j, len, obj, ref;
      ref = this.options;
      for (j = 0, len = ref.length; j < len; j++) {
        obj = ref[j];
        if (obj.val === val.toString()) {
          return obj.str;
        }
      }
      return "";
    };

    return SelectOpts;

  })();

  QS.PageTimer = (function() {
    function PageTimer(func, time, self) {
      this.increasePollTime = bind(this.increasePollTime, this);
      this.getFrequency = bind(this.getFrequency, this);
      this.setFrequency = bind(this.setFrequency, this);
      this.isRunning = bind(this.isRunning, this);
      this.stop = bind(this.stop, this);
      this.start = bind(this.start, this);
      this.self = self || this;
      this.callback = func.bind(self);
      this.frequency = time * 1000;
      this.t_id = -1;
    }

    PageTimer.prototype.start = function(opts) {
      if (opts == null) {
        opts = {
          run_now: false
        };
      }
      if (this.t_id !== -1) {
        return;
      }
      this.t_id = setInterval(this.callback, this.frequency);
      if (opts.run_now === true) {
        return this.callback();
      }
    };

    PageTimer.prototype.stop = function() {
      clearInterval(this.t_id);
      return this.t_id = -1;
    };

    PageTimer.prototype.isRunning = function() {
      return this.t_id !== -1;
    };

    PageTimer.prototype.setFrequency = function(time) {
      this.stop();
      this.frequency = time * 1000;
      return this.start();
    };

    PageTimer.prototype.getFrequency = function() {
      return this.frequency / 1000;
    };

    PageTimer.prototype.increasePollTime = function() {
      return this.setFrequency(this.getFrequency() + (this.getFrequency() % 5 === 0 ? 9 : 1));
    };

    return PageTimer;

  })();

  QS.Notifier = (function() {
    function Notifier() {
      this.popup = null;
      this.tid = null;
      this.nids = [];
    }

    Notifier.prototype.hasSupport = function() {
      if (window.webkitNotifications) {
        return true;
      } else {
        return false;
      }
    };

    Notifier.prototype.hasPermission = function() {
      return window.webkitNotifications.checkPermission() === 0;
    };

    Notifier.prototype.requestPermission = function(cb) {
      return window.webkitNotifications.requestPermission(function() {
        if (cb) {
          return cb(window.webkitNotifications.checkPermission() === 0);
        }
      });
    };

    Notifier.prototype.notify = function(icon, title, body, opts) {
      var delay, nid, stay;
      if (this.hasSupport() && this.hasPermission() && !this.isActive()) {
        if (opts == null) {
          opts = {};
        }
        stay = opts["stay"];
        delay = opts["delay"];
        nid = opts["nid"];
        if ((nid != null)) {
          if (this.nids.includes(nid)) {
            return false;
          } else {
            this.nids.pushOnce(nid);
          }
        }
        this.popup = window.webkitNotifications.createNotification(icon, title, body);
        if ((stay == null) || !stay) {
          this.popup.ondisplay = function() {
            return setTimeout('notifier.Hide()', 5000);
          };
        }
        if ((delay != null)) {
          this.tid = setTimeout('notifier.popup.show()', delay * 1000);
        } else {
          this.popup.show();
        }
        return true;
      }
      return false;
    };

    Notifier.prototype.hide = function() {
      if (this.popup !== null) {
        this.popup.cancel();
        this.popup = null;
      }
      if (this.tid !== null) {
        clearTimeout(this.tid);
        return this.tid = null;
      }
    };

    Notifier.prototype.isActive = function() {
      if (this.popup !== null) {
        return true;
      } else {
        return false;
      }
    };

    return Notifier;

  })();

  QS.TimeLength = (function() {
    function TimeLength(date1, date2) {
      this.date1 = date1;
      this.date2 = date2;
      if (this.date2 == null) {
        this.date2 = new Date();
      }
    }

    TimeLength.prototype.seconds = function() {
      return Math.floor((this.date2.getTime() - this.date1.getTime()) / 1000);
    };

    TimeLength.prototype.minutes = function() {
      return Math.floor(this.seconds() / 60);
    };

    TimeLength.prototype.hours = function() {
      return Math.floor(this.seconds() / (60 * 60));
    };

    TimeLength.prototype.days = function() {
      return Math.floor(this.seconds() / (24 * 60 * 60));
    };

    TimeLength.prototype.weeks = function() {
      return Math.floor(this.seconds() / (24 * 60 * 60 * 7));
    };

    TimeLength.prototype.months = function() {
      return Math.floor(this.seconds() / (24 * 60 * 60 * 31));
    };

    TimeLength.prototype.years = function() {
      return Math.floor(this.seconds() / (24 * 60 * 60 * 365));
    };

    TimeLength.prototype.toString = function() {
      var attr, str, val;
      val = 0;
      str = "";
      if (this.years() > 0) {
        val = this.years();
        str = "year";
      } else if (this.months() > 0) {
        val = this.months();
        str = "month";
      } else if (this.weeks() > 0) {
        val = this.weeks();
        str = "week";
      } else if (this.days() > 0) {
        val = this.days();
        str = "day";
      } else if (this.hours() > 0) {
        val = this.hours();
        str = "hour";
      } else if (this.minutes() > 0) {
        val = this.minutes();
        str = "minute";
      } else if (this.seconds() > 0) {
        val = this.seconds();
        str = "second";
      } else {
        val = 0;
        str = "seconds";
      }
      attr = str + (val > 1 ? "s" : "");
      return val + " " + attr;
    };

    return TimeLength;

  })();

  QS.TimeLength.DAY = 86400;

  QS.TimeLength.YEAR = 31536000;

  QS.AuthToken = (function() {
    function AuthToken(data) {
      var key, ref, val;
      this.data = data;
      this.toJSON = bind(this.toJSON, this);
      this.is_expired = bind(this.is_expired, this);
      this.timeLeft = bind(this.timeLeft, this);
      ref = this.data;
      for (key in ref) {
        val = ref[key];
        this[key] = val;
      }
      if (this.data.received_at == null) {
        this.received_at = this.data.received_at = Date.now_utc();
      }
      if (this.data.expires_at == null) {
        this.expires_at = this.data.expires_at = this.received_at + this.expires_in;
      }
    }

    AuthToken.prototype.timeLeft = function() {
      return this.expires_at - Date.now_utc();
    };

    AuthToken.prototype.is_expired = function() {
      if (this.expires_at == null) {
        return true;
      }
      return this.timeLeft() <= 0;
    };

    AuthToken.prototype.toJSON = function() {
      return JSON.stringify(this.data);
    };

    return AuthToken;

  })();

  QS.AssetsLibrary = {};

  if (window.console == null) {
    window.console = {
      log: function() {}
    };
  }

  loadScript = function(u, d) {
    var ref;
    d = (ref = typeof d !== 'undefined') != null ? ref : {
      d: ""
    };
    return $.ajax({
      type: "POST",
      url: u,
      data: d,
      dataType: "script"
    });
  };

  timeFromUnix = function(tm) {
    var date;
    date = new Date(tm * 1000);
    return date.toLocaleTimeString();
  };

  cropImage = function(img_url, img_width, img_height) {
    return $('<div>').css({
      background: 'url(' + img_url + ')',
      backgroundSize: 'cover',
      'background-position': 'center',
      backgroundColor: '#FFF',
      width: img_width,
      height: img_height,
      display: 'inline-block'
    });
  };

  link_to = function(text, url) {
    return $('<a>').attr('href', url).html(text);
  };

  link_to_rel = function(text, url) {
    return $('<a>').attr('href', "#" + url).html(text);
  };

  link_to_span = function(text) {
    return $('<span>').addClass('clickable').html(text);
  };

  fadeInElement = function(elem) {
    return $(elem).hide().fadeIn();
  };

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  QS.Model = (function() {
    Model.prototype.init = function() {};

    Model.prototype.extend = function() {};

    function Model(data, collection, opts) {
      this.absorb = bind(this.absorb, this);
      this.revert = bind(this.revert, this);
      this.checkDirty = bind(this.checkDirty, this);
      this.toClone = bind(this.toClone, this);
      this.getClass = bind(this.getClass, this);
      this.toJSON = bind(this.toJSON, this);
      this.toAPIParam = bind(this.toAPIParam, this);
      this.toAPI = bind(this.toAPI, this);
      this.toJS = bind(this.toJS, this);
      this.removeFromCollection = bind(this.removeFromCollection, this);
      this["delete"] = bind(this["delete"], this);
      this.reloadOpts = bind(this.reloadOpts, this);
      this._uuid = QS.utils.uuid();
      this.fields = [];
      this.submodels = {};
      this.is_submodel = false;
      this.addFields(['id'], '');
      this.adapter = this.initAdapter != null ? this.initAdapter() : null;
      this.collection = collection;
      this.db_state = ko.observable({});
      this.errors = ko.observable({});
      this.errors.extend({
        errors: true
      });
      this.model_state = ko.observable(0);
      this.save_progress = ko.observable(0);
      if (opts != null) {
        this.is_submodel = opts.is_submodel;
      }
      this.extend();
      this.init();
      this.addComputed('is_ready', function() {
        return this.model_state() === ko.modelStates.READY;
      });
      this.addComputed('is_loading', {
        read: function() {
          return this.model_state() === ko.modelStates.LOADING;
        },
        write: function(val) {
          if (val === true) {
            return this.model_state(ko.modelStates.LOADING);
          } else {
            return this.model_state(ko.modelStates.READY);
          }
        }
      });
      this.addComputed('is_saving', {
        read: function() {
          return this.model_state() === ko.modelStates.SAVING;
        },
        write: function(val) {
          if (val === true) {
            return this.model_state(ko.modelStates.SAVING);
          } else {
            return this.model_state(ko.modelStates.READY);
          }
        }
      });
      this.addComputed('is_editing', function() {
        return this.model_state() === ko.modelStates.EDITING;
      });
      this.addComputed('is_new', function() {
        return this.id() === '';
      });
      this.addComputed('is_dirty', function() {
        return JSON.stringify(this.db_state()) !== JSON.stringify(this.toJS());
      });
      this.addComputed('has_errors', function() {
        return this.errors.any();
      });
      this.handleData(data || {});
    }

    Model.prototype.addFields = function(fields, def_val) {
      return ko.addFields(fields, def_val, this);
    };

    Model.prototype.addComputed = function(field, fn_opts) {
      return ko.addComputed(field, fn_opts, this);
    };

    Model.prototype.addSubModel = function(field_name, class_name, nested) {
      nested || (nested = false);
      if (nested === true || this.is_submodel === false) {
        ko.addSubModel(field_name, class_name, this);
      }
      if (typeof field_name === "string") {
        return this.submodels[field_name] = class_name;
      }
    };

    Model.prototype.handleData = function(data) {
      if (data != null) {
        ko.absorbModel(data, this);
      }
      this.model_state(ko.modelStates.READY);
      return this.db_state(this.toJS());
    };

    Model.prototype.load = function(opts, callback) {
      this.adapter.load({
        data: opts,
        success: (function(_this) {
          return function(resp) {
            var ret_data;
            ret_data = opts.fields != null ? ko.copyObject(resp.data, opts.fields) : resp.data;
            _this.handleData(ret_data);
            if (callback != null) {
              return callback(resp);
            }
          };
        })(this)
      });
      return this.model_state(ko.modelStates.LOADING);
    };

    Model.prototype.reloadFields = function(fields, callback) {
      var opts;
      opts = this.reloadOpts();
      opts['fields'] = fields;
      return this.load(opts, callback);
    };

    Model.prototype.reload = function(callback) {
      var opts;
      opts = this.reloadOpts();
      return this.load(opts, callback);
    };

    Model.prototype.reloadOpts = function() {
      return {
        id: this.id()
      };
    };

    Model.prototype.save = function(fields, callback) {
      var opts;
      QS.log("Saving fields " + fields);
      if (this.model_state() !== ko.modelStates.READY) {
        QS.log("Save postponed.");
        return;
      }
      if (fields instanceof Array) {
        opts = this.toAPI(fields);
      } else {
        opts = fields;
      }
      opts['id'] = this.id();
      this.adapter.save({
        data: opts,
        progress: (function(_this) {
          return function(ev, prog) {
            return _this.save_progress(prog);
          };
        })(this),
        callback: (function(_this) {
          return function(resp, status) {
            _this.handleData(resp.data);
            return typeof callback === "function" ? callback(resp, status) : void 0;
          };
        })(this)
      });
      return this.model_state(ko.modelStates.SAVING);
    };

    Model.prototype.reset = function() {
      this.id('');
      this.init();
      this.db_state(this.toJS());
      this.save_progress(0);
      return this.model_state(ko.modelStates.READY);
    };

    Model.prototype["delete"] = function(fields, callback) {
      var opts;
      fields || (fields = ['id']);
      if (this.model_state() !== ko.modelStates.READY) {
        QS.log("Delete postponed.");
        return;
      }
      opts = this.toJS(fields);
      opts['id'] = this.id();
      this.adapter["delete"]({
        data: opts,
        success: (function(_this) {
          return function(resp) {
            _this.handleData(resp.data);
            if ((resp.meta === 200) && (_this.collection != null)) {
              _this.collection.handleItemDelete(resp.data);
            }
            return typeof callback === "function" ? callback(resp) : void 0;
          };
        })(this),
        error: (function(_this) {
          return function(resp) {
            QS.log("Delete error encountered");
            _this.model_state(ko.modelStates.READY);
            return typeof callback === "function" ? callback(resp) : void 0;
          };
        })(this)
      });
      return this.model_state(ko.modelStates.SAVING);
    };

    Model.prototype.removeFromCollection = function() {
      if (this.collection != null) {
        return this.collection.removeItemById(this.id());
      }
    };

    Model.prototype.toJS = function(flds) {
      var j, len, obj, prop;
      flds || (flds = this.fields);
      obj = {};
      for (j = 0, len = flds.length; j < len; j++) {
        prop = flds[j];
        if (typeof this[prop].toJS === 'function') {
          obj[prop] = this[prop].toJS();
        } else {
          obj[prop] = this[prop]();
        }
      }
      return obj;
    };

    Model.prototype.toAPI = function(flds) {
      var j, len, obj, prop, val;
      flds || (flds = this.fields);
      obj = {};
      for (j = 0, len = flds.length; j < len; j++) {
        prop = flds[j];
        val = null;
        if (typeof this[prop].toAPI === 'function') {
          val = this[prop].toAPI();
        } else if (typeof this[prop].toJS === 'function') {
          val = this[prop].toJS();
        } else {
          val = this[prop]();
        }
        obj[prop] = val;
      }
      return QS.utils.prepareAPIData(obj);
    };

    Model.prototype.toAPIParam = function(flds) {
      return QS.utils.prepareAPIParam(this.toAPI(flds));
    };

    Model.prototype.toJSON = function(flds) {
      return JSON.stringify(this.toJS(flds));
    };

    Model.prototype.getClass = function() {
      return this.constructor;
    };

    Model.prototype.toClone = function() {
      var m;
      m = new (this.getClass());
      m.absorb(this);
      return m;
    };

    Model.prototype.checkDirty = function(prop) {
      return this.db_state()[prop] !== this[prop]();
    };

    Model.prototype.revert = function() {
      return this.handleData(this.db_state());
    };

    Model.prototype.absorb = function(model) {
      this.reset();
      return this.handleData(model.toJS());
    };

    return Model;

  })();

  QS.Model.includeCollection = function(self) {
    self || (self = this);
    return self.Collection = (function(superClass) {
      extend(_Class, superClass);

      function _Class(opts) {
        _Class.__super__.constructor.call(this, opts);
        this.adapter || (this.adapter = self.Adapter);
        this.model = self;
      }

      return _Class;

    })(QS.Collection);
  };

  QS.Model.includeViewCollection = function(self) {
    self || (self = this);
    return self.Collection = (function(superClass) {
      extend(_Class, superClass);

      function _Class(opts) {
        _Class.__super__.constructor.call(this, opts);
        this.adapter = self.Adapter;
        this.model = self;
      }

      return _Class;

    })(QS.ViewCollection);
  };

  QS.Model.includeAdapter = function(adapter, self) {
    self || (self = this);
    if ((adapter.save == null) && (adapter.load == null)) {
      adapter.type || (adapter.type = QS.ModelAdapter);
      adapter = new adapter.type(adapter);
    }
    self.Adapter = adapter;
    return self.prototype.initAdapter = ((function(_this) {
      return function() {
        return adapter;
      };
    })(this));
  };

  QS.FileModel = (function(superClass) {
    extend(FileModel, superClass);

    function FileModel() {
      this.toAPIParam = bind(this.toAPIParam, this);
      this.toAPI = bind(this.toAPI, this);
      this.toJS = bind(this.toJS, this);
      this.reset = bind(this.reset, this);
      return FileModel.__super__.constructor.apply(this, arguments);
    }

    FileModel.prototype.extend = function() {
      this.input = {};
      this.input.source = ko.observable(null);
      this.input.source_type = ko.pureComputed(function() {
        var source;
        source = this.input.source();
        if (!source) {
          return null;
        }
        return source.type;
      }, this);
      this.input.url = ko.computed({
        read: function() {
          var source;
          source = this.input.source();
          if ((source == null) || source.type !== 'url') {
            return null;
          }
          return source.data;
        },
        write: function(val) {
          return this.input.source({
            type: 'url',
            data: val
          });
        },
        owner: this
      });
      this.input.has_url = ko.computed(function() {
        return !QS.utils.isBlank(this.input.url());
      }, this);
      this.input.files = ko.observable([]);
      this.input.file = ko.computed(function() {
        if (this.input.files().length > 0) {
          return this.input.files()[0];
        } else {
          return null;
        }
      }, this);
      this.input.has_file = ko.computed(function() {
        return this.input.file() != null;
      }, this);
      this.input.file_uri = ko.observable('');
      this.input.files.subscribe((function(_this) {
        return function(val) {
          var reader;
          if (val.length > 0 && (typeof FileReader !== "undefined" && FileReader !== null)) {
            _this.input.file_uri('');
            reader = new FileReader();
            reader.onloadend = function(ev) {
              QS.log('input loaded');
              return _this.input.file_uri(ev.target.result);
            };
            return reader.readAsDataURL(val[0]);
          }
        };
      })(this), this);
      this.input.filename = ko.computed(function() {
        if (this.input.has_file()) {
          return this.input.file().name;
        } else {
          return "";
        }
      }, this);
      this.input.display_uri = ko.computed(function() {
        var fd;
        if (this.input.has_file()) {
          return this.input.file_uri();
        } else {
          fd = this.input.source();
          if (fd != null) {
            return fd.data;
          } else {
            return null;
          }
        }
      }, this);
      this.input.is_present = ko.computed(function() {
        return QS.utils.isPresent(this.input.source()) || this.input.has_file();
      }, this);
      this.input.present = this.input.is_present;
      this.input.is_image = ko.computed(function() {
        if (this.input.has_file() && (this.input.file().type != null)) {
          return QS.utils.isContentTypeImage(this.input.file().type);
        } else if (this.input.has_url()) {
          return /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(this.input.url());
        } else if (this.input.source_type() === 'base64') {
          return QS.utils.isContentTypeImage(this.input.source().content_type);
        } else {
          return false;
        }
      }, this);
      this.input.loadSource = (function(_this) {
        return function(src) {
          if (src.type === 'base64') {
            src.content_type = src.data.split(',')[0].split(':')[1].split(';')[0];
          }
          _this.input.source(src);
          return src;
        };
      })(this);
      this.input.clear = (function(_this) {
        return function() {
          _this.input.source(null);
          return _this.input.files([]);
        };
      })(this);
      this.input.reset = this.input.clear;
      this.input.handleData = (function(_this) {
        return function(data) {
          if (data == null) {
            return;
          }
          _this.input.files(data.files);
          return _this.input.source(data.source);
        };
      })(this);
      this.input.toJS = (function(_this) {
        return function() {
          var ret;
          ret = {};
          ret.files = _this.input.files();
          ret.source = _this.input.source();
          return ret;
        };
      })(this);
      return this.input.toAPI = (function(_this) {
        return function() {
          if (_this.input.has_file()) {
            return _this.input.file();
          } else if (_this.input.source() !== null) {
            return _this.input.source();
          } else {
            return null;
          }
        };
      })(this);
    };

    FileModel.prototype.reset = function() {
      FileModel.__super__.reset.call(this);
      return this.input.clear();
    };

    FileModel.prototype.toJS = function() {
      var ret;
      ret = FileModel.__super__.toJS.call(this);
      ret.input = this.input.toJS();
      return ret;
    };

    FileModel.prototype.toAPI = function() {
      return this.input.toAPI();
    };

    FileModel.prototype.toAPIParam = function() {
      return QS.utils.prepareAPIParam(this.toAPI());
    };

    return FileModel;

  })(QS.Model);

  QS.Collection = (function() {
    Collection.prototype.init = function() {};

    function Collection(opts) {
      this.toAPIParam = bind(this.toAPIParam, this);
      this.toAPI = bind(this.toAPI, this);
      this.toJS = bind(this.toJS, this);
      this.absorb = bind(this.absorb, this);
      this.length = bind(this.length, this);
      this.hasItems = bind(this.hasItems, this);
      this.toggleSort = bind(this.toggleSort, this);
      this.updateScope = bind(this.updateScope, this);
      this.prevPage = bind(this.prevPage, this);
      this.nextPage = bind(this.nextPage, this);
      this.getScopedItems = bind(this.getScopedItems, this);
      this.getFilteredItems = bind(this.getFilteredItems, this);
      this.addNamedSort = bind(this.addNamedSort, this);
      this.addNamedFilter = bind(this.addNamedFilter, this);
      this.handleItemDelete = bind(this.handleItemDelete, this);
      this.handleItemData = bind(this.handleItemData, this);
      this.handleData = bind(this.handleData, this);
      this.update = bind(this.update, this);
      this.load = bind(this.load, this);
      this.setScope = bind(this.setScope, this);
      this.extend = bind(this.extend, this);
      var key, val;
      this.opts = {};
      for (key in opts) {
        val = opts[key];
        this.opts[key] = val;
      }
      this.events = {};
      this._reqid = 0;
      this.scope = ko.observable(this.opts.scope || {});
      this.items = ko.observableArray([]);
      this.page = ko.observable(1);
      this.limit = ko.observable(this.opts.limit || 100);
      this.title = ko.observable(this.opts.title || 'Collection');
      this.count = ko.observable(0);
      this.extra_params = ko.observable(this.opts.extra_params || {});
      this.model = this.opts.model || QS.Model;
      this.adapter = this.opts.adapter;
      this.adapter_endpoint = this.opts.adapter_endpoint || 'index';
      this.model_state = ko.observable(0);
      this.named_filters = {};
      this.named_sorts = {};
      this.scoped_items = ko.pureComputed((function(_this) {
        return function() {
          return _this.getScopedItems();
        };
      })(this));
      this.is_ready = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.READY;
      }, this);
      this.is_loading = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.LOADING;
      }, this);
      this.is_updating = ko.dependentObservable(function() {
        return this.model_state() !== ko.modelStates.READY;
      }, this);
      this.is_appending = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.APPENDING;
      }, this);
      this.is_inserting = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.INSERTING;
      }, this);
      this.loadOptions = ko.dependentObservable(function() {
        opts = this.extra_params();
        opts['scope'] = this.scope();
        opts['limit'] = this.limit();
        opts['page'] = this.page();
        return opts;
      }, this);
      this.scope = ko.intercepter(this.scope, function(obs, prev, curr) {
        return obs(curr);
      }, this);
      this.hasItems = ko.pureComputed(function() {
        return this.items().length > 0;
      }, this);
      this.has_items = ko.pureComputed(function() {
        return this.items().length > 0;
      }, this);
      this.is_empty = ko.pureComputed(function() {
        return this.items().length === 0;
      }, this);
      this.length = ko.pureComputed(function() {
        return this.items().length;
      }, this);
      this.extend(opts);
      this.init();
    }

    Collection.prototype.extend = function(opts) {};

    Collection.prototype.setScope = function(scp, args) {
      var opts;
      opts = args;
      opts.unshift(scp);
      return this.scope(opts);
    };

    Collection.prototype._load = function(scope, op, load_opts) {
      var opts, reqid;
      op || (op = QS.Collection.REPLACE);
      if (load_opts.overwrite_request === false) {
        reqid = this._reqid;
      } else {
        reqid = ++this._reqid;
      }
      opts = this.loadOptions();
      if (load_opts.data != null) {
        $.extend(opts, load_opts.data);
      }
      opts.scope = scope instanceof Array ? scope : JSON.stringify(scope);
      this.adapter[this.adapter_endpoint]({
        data: opts,
        success: (function(_this) {
          return function(resp) {
            if (_this._reqid !== reqid) {
              QS.log('Collection request has been preempted');
              return;
            }
            _this.handleData(resp.data, op);
            if (resp.count != null) {
              _this.count(resp.count);
            }
            if (load_opts.callback != null) {
              load_opts.callback(resp);
            }
            if (_this.events.onchange != null) {
              return _this.events.onchange();
            }
          };
        })(this)
      });
      if (op === QS.Collection.REPLACE) {
        this.model_state(ko.modelStates.LOADING);
      }
      if (op === QS.Collection.UPDATE) {
        return this.model_state(ko.modelStates.UPDATING);
      } else if (op === QS.Collection.APPEND) {
        return this.model_state(ko.modelStates.APPENDING);
      } else if (op === QS.Collection.INSERT) {
        return this.model_state(ko.modelStates.INSERTING);
      }
    };

    Collection.prototype.load = function(scope, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      if (!((opts.reset != null) && !opts.reset)) {
        this.reset();
      }
      if (opts.page != null) {
        this.page(opts.page);
      }
      if (opts.limit != null) {
        this.limit(opts.limit);
      }
      if (scope != null) {
        this.scope(scope);
      }
      return this._load(this.scope(), QS.Collection.REPLACE, opts);
    };

    Collection.prototype.update = function(opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(this.scope(), QS.Collection.UPDATE, opts);
    };

    Collection.prototype.insert = function(scope, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(scope, QS.Collection.INSERT, opts);
    };

    Collection.prototype.append = function(scope, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(scope, QS.Collection.APPEND, opts);
    };

    Collection.prototype.appendNextPage = function(opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      this.page(this.page() + 1);
      return this._load(this.scope(), QS.Collection.APPEND, opts);
    };

    Collection.prototype.handleData = function(data, op) {
      var c_el, c_id, curr_a, curr_len, id_h, idx, item, itm, j, k, l, leftovers, len, len1, max_len, model, models, new_a, new_len, r_el, r_id, ref, same_itm;
      if (data == null) {
        return;
      }
      models = [];
      op || (op = QS.Collection.UPDATE);
      curr_a = this.items();
      id_h = {};
      for (j = 0, len = curr_a.length; j < len; j++) {
        itm = curr_a[j];
        id_h[itm.id()] = itm;
      }
      if (op === QS.Collection.UPDATE) {
        curr_len = this.items().length;
        new_a = data;
        new_len = data.length;
        max_len = Math.max(curr_len, new_len);
        if (max_len > 0) {
          for (idx = k = ref = max_len - 1; ref <= 0 ? k <= 0 : k >= 0; idx = ref <= 0 ? ++k : --k) {
            c_el = curr_a[idx];
            c_id = c_el != null ? c_el.id() : null;
            r_el = new_a[idx];
            r_id = r_el != null ? r_el.id : null;
            if (c_id === r_id) {
              c_el.handleData(r_el);
            } else if (r_id === null) {
              curr_a.splice(idx, 1);
            } else {
              same_itm = id_h[r_id];
              if (same_itm != null) {
                curr_a[idx] = same_itm;
                curr_a[idx].handleData(r_el);
              } else {
                curr_a[idx] = new this.model(r_el, this);
              }
            }
          }
        }
        this.items.valueHasMutated();
      } else if (op === QS.Collection.REPLACE) {
        models = (function() {
          var l, len1, results;
          results = [];
          for (l = 0, len1 = data.length; l < len1; l++) {
            item = data[l];
            results.push(new this.model(item, this));
          }
          return results;
        }).call(this);
        this.items(models);
      } else {
        leftovers = [];
        for (idx = l = 0, len1 = data.length; l < len1; idx = ++l) {
          item = data[idx];
          same_itm = id_h[item.id];
          if (same_itm != null) {
            same_itm.handleData(item);
          } else {
            model = new this.model(item, this);
            leftovers.push(model);
          }
        }
        if (op === QS.Collection.INSERT) {
          if (leftovers.length > 0) {
            this.items(leftovers.concat(this.items()));
          }
        } else if (op === QS.Collection.APPEND) {
          if (leftovers.length > 0) {
            this.items(this.items().concat(leftovers));
          }
        }
      }
      return this.model_state(ko.modelStates.READY);
    };

    Collection.prototype.handleItemData = function(data, opts) {
      var do_append, item;
      if (opts == null) {
        opts = {};
      }
      do_append = opts.do_append || opts.append || false;
      item = this.getItemById(data.id);
      if (item != null) {
        item.handleData(data);
      }
      if ((item == null) && do_append === true) {
        item = new this.model(data, this);
        this.addItem(item);
      }
      return item;
    };

    Collection.prototype.handleItemDelete = function(data) {
      return this.removeItemById(data.id);
    };

    Collection.prototype.addNamedFilter = function(name, fn, opts) {
      if (opts == null) {
        opts = {
          store: false
        };
      }
      this.named_filters[name] = fn;
      if (opts.store === true) {
        return this["filter_" + name] = ko.pureComputed(function() {
          return this.items().filter(fn);
        }, this);
      }
    };

    Collection.prototype.addNamedSort = function(name, fn) {
      this.named_sorts[name] = fn;
      return this["sort_" + name] = ko.pureComputed(function() {
        return this.items().sort(fn);
      }, this);
    };

    Collection.prototype.getFilteredItems = function(filter) {
      var fa, fo, fsv, items, sort;
      fo = ko.unwrap(filter);
      fsv = fo.select || [];
      sort = fo.sort || null;
      fa = fsv instanceof Array ? fsv : [fsv];
      items = this.items().filter((function(_this) {
        return function(el) {
          var filt, filt_fn, j, len, ret;
          ret = true;
          for (j = 0, len = fa.length; j < len; j++) {
            filt = fa[j];
            filt_fn = _this.named_filters[filt];
            ret = ret && filt_fn(el);
          }
          return ret;
        };
      })(this));
      if (sort !== null) {
        items = items.sort(this.named_sorts[sort]);
      }
      return items;
    };

    Collection.prototype.getScopedItems = function(scope) {
      var items, sort_asc, sort_key;
      scope || (scope = this.scope());
      items = this.items().filter((function(_this) {
        return function(el) {
          var filt, filt_fn, params, ret;
          ret = true;
          for (filt in scope) {
            params = scope[filt];
            if (filt === 'sort') {
              continue;
            }
            filt_fn = _this.named_filters[filt];
            if (filt_fn == null) {
              continue;
            }
            ret = ret && filt_fn.call(_this, el, params);
          }
          return ret;
        };
      })(this));
      if (scope.sort != null) {
        sort_key = scope.sort[0];
        sort_asc = scope.sort[1];
        items = items.sort(function(m1, m2) {
          var val;
          if (m1 === m2) {
            return 0;
          }
          val = m1[sort_key]() < m2[sort_key]() ? -1 : 1;
          if (sort_asc === false) {
            return val * -1;
          } else {
            return val;
          }
        });
      }
      return items;
    };

    Collection.prototype.nextPage = function() {
      this.page(this.page() + 1);
      return this.update();
    };

    Collection.prototype.prevPage = function() {
      this.page(this.page() - 1);
      return this.update();
    };

    Collection.prototype.updateScope = function(scope, opts) {
      var cs, do_replace, do_update, ns;
      if (opts == null) {
        opts = {};
      }
      if (!(opts.replace === true || opts.clear === true)) {
        do_replace = false;
      }
      if (opts.do_update !== false) {
        do_update = true;
      }
      if (do_replace) {
        this.scope(scope);
      } else {
        cs = this.scope();
        ns = $.extend({}, cs, scope);
        this.scope(ns);
      }
      if (opts.page != null) {
        this.page(opts.page);
      }
      if (do_update === true) {
        return this.update();
      }
    };

    Collection.prototype.toggleSort = function(field, opts) {
      var csort, ns, scope;
      if (opts == null) {
        opts = {};
      }
      ns = {};
      scope = this.scope();
      csort = scope.sort;
      if ((csort == null) || csort[0] !== field) {
        ns.sort = [field, true];
      } else {
        ns.sort = [field, !csort[1]];
      }
      return this.updateScope(ns, opts);
    };

    Collection.prototype.hasItems = function() {
      return this.items().length > 0;
    };

    Collection.prototype.length = function() {
      return this.items().length;
    };

    Collection.prototype.addItem = function(item, notify) {
      notify || (notify = true);
      item.collection = this;
      this.items().push(item);
      if (notify) {
        this.items.valueHasMutated();
      }
      return item;
    };

    Collection.prototype.addItemData = function(data) {
      var item;
      item = new this.model(data, this);
      return this.addItem(item);
    };

    Collection.prototype.removeItem = function(idx, notify) {
      notify || (notify = true);
      this.items().splice(idx, 1);
      if (notify) {
        return this.items.valueHasMutated();
      }
    };

    Collection.prototype.moveItem = function(from, to, notify) {
      notify || (notify = true);
      this.items().splice(to, 0, this.items().splice(from, 1)[0]);
      if (notify) {
        return this.items.valueHasMutated();
      }
    };

    Collection.prototype.getItemById = function(id) {
      var list, ret;
      list = this.items().filter(((function(_this) {
        return function(item) {
          return item.id() === id;
        };
      })(this)));
      return ret = list.length > 0 ? list[0] : null;
    };

    Collection.prototype.getIndexById = function(id) {
      var idx, item, j, len, ref;
      idx = 0;
      ref = this.items();
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        if (item.id() === id) {
          return idx;
        }
        idx = idx + 1;
      }
      return null;
    };

    Collection.prototype.removeDuplicates = function() {
      var ids;
      ids = [];
      return this.items().forEach((function(_this) {
        return function(item, idx, array) {
          if (ids.includes(item.id())) {
            return _this.items.splice(idx, 1);
          } else {
            return ids.push(item.id());
          }
        };
      })(this));
    };

    Collection.prototype.removeIf = function(callback) {
      return this.items().forEach((function(_this) {
        return function(item, idx, array) {
          if (callback(item, idx)) {
            return _this.items.splice(idx, 1);
          }
        };
      })(this));
    };

    Collection.prototype.removeItemById = function(id) {
      return this.removeIf((function(_this) {
        return function(item) {
          return item.id() === id;
        };
      })(this));
    };

    Collection.prototype.reset = function() {
      this.clear();
      this._reqid = 0;
      this.page(1);
      return this.scope({});
    };

    Collection.prototype.clear = function() {
      return this.items([]);
    };

    Collection.prototype.absorb = function(model) {
      this.reset();
      return this.handleData(model.toJS());
    };

    Collection.prototype.toJS = function() {
      var item, j, len, objs, ref;
      objs = [];
      ref = this.items();
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        objs.push(item.toJS());
      }
      return objs;
    };

    Collection.prototype.toAPI = function() {
      var item, j, len, objs, ref;
      objs = [];
      ref = this.items();
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        objs.push(item.toAPI());
      }
      return objs;
    };

    Collection.prototype.toAPIParam = function() {
      return QS.utils.prepareAPIParam(this.toAPI());
    };

    return Collection;

  })();

  QS.Collection.REPLACE = 0;

  QS.Collection.INSERT = 1;

  QS.Collection.APPEND = 2;

  QS.Collection.UPDATE = 3;

  QS.ViewCollection = (function(superClass) {
    extend(ViewCollection, superClass);

    function ViewCollection() {
      this.computeFilteredViews = bind(this.computeFilteredViews, this);
      this.addViewSort = bind(this.addViewSort, this);
      this.addViewFilter = bind(this.addViewFilter, this);
      this.setView = bind(this.setView, this);
      this.updateViews = bind(this.updateViews, this);
      return ViewCollection.__super__.constructor.apply(this, arguments);
    }

    ViewCollection.prototype.extend = function(opts) {
      ViewCollection.__super__.extend.call(this);
      this.views = ko.observableArray([]);
      this.view_model = this.opts.view || QS.View;
      this.view_owner = this.opts.view_owner || null;
      this.named_view_filters = {};
      this.named_view_sorts = {};
      this.view_filter = ko.observable({});
      this.template = ko.observable(this.opts.template);
      this.filtered_views = this.computeFilteredViews(this.view_filter);
      return this.items.subscribe(this.updateViews);
    };

    ViewCollection.prototype.updateViews = function(items) {
      var ca, cm, idx, j, max_len, mh, ra, ref, rm, same_view, view_cls, view_name, view_owner;
      view_cls = this.view_model;
      view_owner = this.view_owner;
      ra = items;
      ca = this.views();
      max_len = Math.max(ra.length, ca.length);
      mh = {};
      ca.forEach(function(view) {
        return mh[view.model._uuid] = view;
      });
      if (max_len > 0) {
        for (idx = j = ref = max_len - 1; ref <= 0 ? j <= 0 : j >= 0; idx = ref <= 0 ? ++j : --j) {
          rm = ra[idx];
          cm = ca[idx] != null ? ca[idx].model : null;
          if (rm == null) {
            ca.splice(idx, 1);
          } else {
            view_name = "view-" + (rm.id());
            same_view = mh[rm._uuid];
            if (same_view != null) {
              ca[idx] = same_view;
            } else {
              ca[idx] = new view_cls(view_name, view_owner, rm);
            }
          }
        }
      }
      return this.views.valueHasMutated();
    };

    ViewCollection.prototype.setView = function(view_model, view_owner) {
      this.views([]);
      this.view_model = view_model;
      this.view_owner = view_owner;
      return this.updateViews(this.items());
    };

    ViewCollection.prototype.addViewFilter = function(name, fn) {
      this.named_view_filters[name] = fn;
      return this["views_" + name] = ko.computed(function() {
        return this.views().filter(fn);
      }, this);
    };

    ViewCollection.prototype.addViewSort = function(name, fn) {
      return this.named_view_sorts[name] = fn;
    };

    ViewCollection.prototype.computeFilteredViews = function(filter) {
      return ko.computed(function() {
        var fa, fo, fsv, sort, views;
        fo = ko.unwrap(filter);
        fsv = fo.select || [];
        sort = fo.sort || null;
        fa = fsv instanceof Array ? fsv : [fsv];
        views = this.views().filter((function(_this) {
          return function(el) {
            var filt, filt_fn, j, len, ret;
            ret = true;
            for (j = 0, len = fa.length; j < len; j++) {
              filt = fa[j];
              filt_fn = _this.named_view_filters[filt];
              ret = ret && filt_fn(el);
            }
            return ret;
          };
        })(this));
        if (sort !== null) {
          views = views.sort(this.named_view_sorts[sort]);
        }
        return views;
      }, this);
    };

    ViewCollection.prototype.getViewById = function(id) {
      var list, ret;
      list = this.views().filter(((function(_this) {
        return function(view) {
          return view.model.id() === id;
        };
      })(this)));
      return ret = list.length > 0 ? list[0] : null;
    };

    ViewCollection.prototype.nthViews = function(n, offset) {
      return this.views().filter(function(el, i) {
        return (i - offset) % n === 0;
      });
    };

    ViewCollection.prototype.getTemplate = function() {
      return this.template();
    };

    return ViewCollection;

  })(QS.Collection);

  QS.View = (function() {
    QuickScript.includeEventable(View);

    View.prototype.init = function() {};

    function View(name1, owner1, model1, opts1) {
      this.name = name1;
      this.owner = owner1;
      this.model = model1;
      this.opts = opts1;
      this.toAPIParam = bind(this.toAPIParam, this);
      this.toAPI = bind(this.toAPI, this);
      this.ensure = bind(this.ensure, this);
      this.afterRender = bind(this.afterRender, this);
      this.template = bind(this.template, this);
      this.validate_fields = bind(this.validate_fields, this);
      this.validate_for = bind(this.validate_for, this);
      this.addFields = bind(this.addFields, this);
      this.reload = bind(this.reload, this);
      this.disposeLater = bind(this.disposeLater, this);
      if (this.owner != null) {
        this.app = this.owner.app;
      }
      this.views = ko.observableArray([]);
      this.views.name_map = {};
      this.events = {};
      this.opts || (this.opts = {});
      this.disposables = [];
      this.fields = [];
      if (this.opts.element != null) {
        this.element = this.opts.element;
      }
      if (this.opts.templateID != null) {
        this.templateID = this.opts.templateID;
      }
      if (this.opts.model != null) {
        this.model = this.opts.model;
      }
      this.view_name = ko.computed(function() {
        return this.templateID;
      }, this);
      this.is_visible = ko.observable(false);
      this.is_loading = ko.observable(false);
      this.is_saving = ko.observable(false);
      this.error = ko.observable('');
      this.has_error = ko.pureComputed(function() {
        return QS.utils.isPresent(this.error());
      }, this);
      this.view = null;
      this.task = ko.observable(null);
      this.prev_task = ko.observable(null);
      this.selected_view = ko.pureComputed((function(_this) {
        return function() {
          var task;
          task = _this.task();
          return _this.views.name_map[task] || null;
        };
      })(this));
      this.layout_attr = ko.observable({});
      this.transition = {
        type: 'fade',
        opts: {
          'slide_pos': ko.observable(0),
          'slide_index': ko.observable(0)
        }
      };
      this.transition.has_slide_css = (function(_this) {
        return function(css, idx) {
          var base;
          return typeof (base = _this.transition.opts['slide_css' + css]()).includes === "function" ? base.includes(idx) : void 0;
        };
      })(this);
      this.init();
      this.setupViewBox();
    }

    View.prototype.show = function() {
      this.is_visible(true);
      if (this.onShown != null) {
        return this.onShown();
      }
    };

    View.prototype.hide = function() {
      var j, len, ref, view;
      ref = this.views();
      for (j = 0, len = ref.length; j < len; j++) {
        view = ref[j];
        view.hide();
      }
      this.is_visible(false);
      this.view = null;
      this.task(null);
      if (this.onHidden != null) {
        return this.onHidden();
      }
    };

    View.prototype.dispose = function() {
      var d, j, k, len, len1, ref, ref1, view;
      ref = this.views();
      for (j = 0, len = ref.length; j < len; j++) {
        view = ref[j];
        view.dispose();
      }
      ref1 = this.disposables;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        d = ref1[k];
        d.dispose();
      }
      return this.disposables = [];
    };

    View.prototype.disposeLater = function() {
      var ds;
      ds = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      this.disposables.push.apply(this.disposables, ds);
      return this.disposables;
    };

    View.prototype.setupViewBox = function() {
      if (this.transition.type === 'slide') {
        return this.task.subscribe((function(_this) {
          return function(val) {
            var idx, new_el, old_el, old_idx, opts;
            return;
            opts = _this.transition.opts;
            if (val !== null) {
              idx = _this.getViewBoxIndex(val);
              old_idx = opts.slide_index();
              new_el = $(_this.element).find('.slide-item-' + idx);
              old_el = $(_this.element).find('.slide-item-' + old_idx);
              if (idx > old_idx) {
                new_el.addClass('next');
                if (new_el[0] != null) {
                  new_el[0].offsetWidth;
                }
                new_el.addClass('left');
                old_el.addClass('left');
              } else {
                new_el.addClass('prev');
                if (new_el[0] != null) {
                  new_el[0].offsetWidth;
                }
                new_el.addClass('right');
                old_el.addClass('right');
              }
              setTimeout(function() {
                new_el.removeClass('next left prev right');
                old_el.removeClass('active next left prev right');
                return new_el.addClass('active');
              }, 600);
              return opts.slide_index(idx);
            }
          };
        })(this));
      }
    };

    View.prototype.load = function() {};

    View.prototype.reload = function() {
      return this.load.apply(this, arguments);
    };

    View.prototype.addView = function(name, view_class, opts) {
      var view;
      if (opts == null) {
        opts = {};
      }
      if (this.views.name_map[name] != null) {
        return;
      }
      if (typeof opts === 'string') {
        opts = {
          templateID: opts
        };
      }
      view = new view_class(name, this, opts.model, opts);
      this.views.push(view);
      this.views[name] = this.views.name_map[name] = view;
      this["is_task_" + name] = ko.computed(function() {
        return this.task() === name;
      }, this);
      this["select_task_" + name] = (function(_this) {
        return function() {
          return _this.selectView(name);
        };
      })(this);
      return view;
    };

    View.prototype.addFields = function(fields, def) {
      return ko.addFields(fields, def, this);
    };

    View.prototype.addComputed = function(field, fn_opts) {
      return ko.addComputed(field, fn_opts, this);
    };

    View.prototype.validate_for = function(field, fn, msg) {
      return ko.validate_for(field, fn, msg, this);
    };

    View.prototype.validate_fields = function(fields, fn) {
      return ko.validate_fields(fields, fn, this);
    };

    View.prototype.viewCount = function() {
      return this.views().length;
    };

    View.prototype.viewList = function() {
      return this.views();
    };

    View.prototype.selectView = function(view_name) {
      var args, last_view, view;
      args = Array.prototype.slice.call(arguments);
      last_view = this.view;
      view = this.views.name_map[view_name];
      if (last_view !== view) {
        QS.log("View [" + view.name + "] selected.", 2);
        if (last_view != null) {
          last_view.hide();
        }
        return setTimeout((function(_this) {
          return function() {
            view.load.apply(view, args.slice(1));
            window.onbeforeunload = view.events.before_unload;
            view.show();
            _this.view = view;
            _this.prev_task(_this.task());
            return _this.task(view.name);
          };
        })(this), 50);
      } else {
        this.view.reload.apply(this.view, args.slice(1));
        if (view.is_visible() !== true) {
          return view.show();
        }
      }
    };

    View.prototype.template = function() {
      return {
        name: this.templateID,
        data: this
      };
    };

    View.prototype.isTask = function(task) {
      return this.task() === task;
    };

    View.prototype.getViewTemplateID = function(view) {
      return view.templateID;
    };

    View.prototype.getViewBoxTemplate = function(view) {
      switch (view.transition.type) {
        case 'slide':
          return 'viewbox-slide';
        default:
          return 'viewbox';
      }
    };

    View.prototype.getViewBoxIndex = function(view_name) {
      var view;
      view = this.views.name_map[view_name];
      return arr.indexAt(view);
    };

    View.prototype.getViewByIndex = function(idx) {
      return this.views()[idx];
    };

    View.prototype.afterRender = function() {
      if (this.transition.type === 'slide') {
        return;
        return setTimeout((function(_this) {
          return function() {
            var idx, new_el;
            idx = _this.getViewBoxIndex(_this.task());
            new_el = $(_this.element).find('.slide-item-' + idx);
            return new_el.addClass('active');
          };
        })(this), 500);
      }
    };

    View.prototype.ensure = function(key, fn) {
      this._ensure_fns || (this._ensure_fns = {});
      if (fn != null) {
        return this._ensure_fns[key] = fn;
      } else {
        if ((fn = this._ensure_fns[key]) !== true) {
          fn();
          return this._ensure_fns[key] = true;
        }
      }
    };

    View.prototype.toAPI = function(flds) {
      var j, len, obj, prop, val;
      flds || (flds = this.fields);
      obj = {};
      for (j = 0, len = flds.length; j < len; j++) {
        prop = flds[j];
        val = null;
        if (typeof this[prop].toAPI === 'function') {
          val = this[prop].toAPI();
        } else if (typeof this[prop].toJS === 'function') {
          val = this[prop].toJS();
        } else {
          val = this[prop]();
        }
        obj[prop] = QS.utils.prepareAPIParam(val);
      }
      return obj;
    };

    View.prototype.toAPIParam = function(flds) {
      return QS.utils.prepareAPIParam(this.toAPI(flds));
    };

    return View;

  })();

  QS.View.registerComponent = function(name, template_opts, view_class) {
    var is_sync, topts;
    view_class || (view_class = this);
    QS.registered_components || (QS.registered_components = {});
    if (typeof template_opts === 'string') {
      topts = {
        template_id: template_opts
      };
    } else {
      topts = template_opts;
    }
    topts.loader = 'QuickScript';
    is_sync = topts.synchronous || false;
    QS.registered_components[name] = {
      template_opts: topts,
      view_class: view_class
    };
    return ko.components.register(name, {
      viewModel: {
        createViewModel: function(params, componentInfo) {
          var context, model, new_view, new_view_class, owner, vn;
          context = ko.contextFor(componentInfo.element);
          new_view = null;
          new_view_class = view_class;
          if (params.view != null) {
            if (typeof params.view === 'function') {
              new_view_class = params.view;
            } else {
              new_view = params.view;
            }
          }
          if (new_view == null) {
            model = params.model;
            owner = params.owner || context['$view'] || context['$parent'] || context['$root'];
            vn = model != null ? name + "-" + (typeof model.id === "function" ? model.id() : void 0) : name;
            params.element = componentInfo != null ? componentInfo.element : void 0;
            new_view = new new_view_class(vn, owner, model, params);
          } else {
            new_view.element = componentInfo != null ? componentInfo.element : void 0;
          }
          return new_view;
        }
      },
      template: topts,
      synchronous: is_sync
    });
  };

  QS.View.registerComponent('view-element', {
    html: "<!-- ko template : {nodes : $componentTemplateNodes} -->\n<!-- /ko -->"
  });

  QS.Host = (function() {
    function Host(url) {
      this.resumeRequests = bind(this.resumeRequests, this);
      this.pauseRequests = bind(this.pauseRequests, this);
      this.executeRequest = bind(this.executeRequest, this);
      this.executeQueuedRequests = bind(this.executeQueuedRequests, this);
      this.request = bind(this.request, this);
      this.url = url;
      this.headers = {};
      this.requests = [];
      this.state = QS.Host.READY;
      this.before_request = null;
      this.process_request = function(req) {
        return req;
      };
      this.process_response = function(resp, status) {
        return resp;
      };
    }

    Host.prototype.request = function(req) {
      req.headers || (req.headers = {});
      if (typeof this.before_request === "function") {
        this.before_request(req);
      }
      if (this.state === QS.Host.PAUSED) {
        this.requests.push(req);
        return typeof req.loading === "function" ? req.loading(true) : void 0;
      } else {
        return this.executeRequest(req);
      }
    };

    Host.prototype.executeQueuedRequests = function() {
      var req, results;
      results = [];
      while (this.requests.length > 0) {
        req = this.requests.shift();
        results.push(this.executeRequest(req));
      }
      return results;
    };

    Host.prototype.executeRequest = function(req) {
      var base, callback_fn, key, ref, resp_fn, val;
      req = this.process_request(req);
      resp_fn = req.callback || req.success;
      callback_fn = (function(_this) {
        return function(resp, status) {
          resp = _this.process_response(resp, status);
          return typeof resp_fn === "function" ? resp_fn(resp, status) : void 0;
        };
      })(this);
      if ((req.type == null) && (req.method == null)) {
        req.type = req.method = 'POST';
      }
      req.url = this.url + req.url;
      req.success = callback_fn;
      if (req.error == null) {
        req.error = callback_fn;
      }
      ref = this.headers;
      for (key in ref) {
        val = ref[key];
        (base = req.headers)[key] || (base[key] = val);
      }
      return QS.ajax(req);
    };

    Host.prototype.pauseRequests = function() {
      return this.state = QS.Host.PAUSED;
    };

    Host.prototype.resumeRequests = function() {
      this.state = QS.Host.READY;
      return this.executeQueuedRequests();
    };

    return Host;

  })();

  QS.Host.READY = 1;

  QS.Host.PAUSED = 2;

  QS.Host.process_api_response = function(resp, status) {
    if (typeof resp === "string") {
      return resp = {
        success: false,
        meta: status,
        error: 'An error occurred.',
        data: resp
      };
    } else {
      return resp;
    }
  };

  QS.ModelAdapter = (function() {
    function ModelAdapter(opts) {
      this.add_endpoint = bind(this.add_endpoint, this);
      var prop, val;
      this.save_url = null;
      this.load_url = null;
      this.index_url = null;
      this.host = QS.ModelAdapter.host;
      this.notifier = null;
      this.event_scope = null;
      for (prop in opts) {
        val = opts[prop];
        this[prop] = val;
      }
    }

    ModelAdapter.prototype.setNotifier = function(notif, scope) {
      this.notifier = notif;
      return this.event_scope = scope;
    };

    ModelAdapter.prototype.load = function(opts) {
      opts.type = 'GET';
      opts.url = this.load_url;
      if (opts.data != null) {
        opts.data["_cv"] = Date.now();
      }
      opts.event_name = "updated";
      return this.send(opts);
    };

    ModelAdapter.prototype.index = function(opts) {
      opts.type = 'GET';
      opts.url = this.index_url || this.load_url;
      if (opts.data != null) {
        opts.data["_cv"] = Date.now();
      }
      return this.send(opts);
    };

    ModelAdapter.prototype.save_old = function(opts) {
      return $.ajax({
        type: 'POST',
        url: this.host + this.save_url,
        data: opts.data,
        success: opts.success,
        error: opts.error
      });
    };

    ModelAdapter.prototype.save = function(opts) {
      opts.url = this.save_url;
      opts.event_name = "updated";
      return this.send(opts);
    };

    ModelAdapter.prototype.send = function(opts) {
      return this.host.request(opts);
    };

    ModelAdapter.prototype["delete"] = function(opts) {
      opts.type = 'DELETE';
      opts.url = this.save_url;
      opts.event_name = "deleted";
      return this.send(opts);
    };

    ModelAdapter.prototype.add_method = function(fn_name, fn) {
      return this[fn_name] = fn.bind(this);
    };

    ModelAdapter.prototype.route_method = function(fn_name, url, http_m) {
      http_m || (http_m = 'POST');
      return this.add_method(fn_name, function(opts) {
        opts.url = url;
        opts.type = http_m;
        return this.send(opts);
      });
    };

    ModelAdapter.prototype.add_endpoint = function() {
      return this.route_method.apply(this, arguments);
    };

    return ModelAdapter;

  })();

  QS.ModelAdapter.host = new QS.Host("/api/");

  QS.AccountAdapter = (function() {
    function AccountAdapter(opts) {
      var prop, val;
      this.login_url = "/account/login";
      this.logout_url = "/account/logout";
      this.register_url = "/account/register";
      this.enter_code_url = "/account/enter_code";
      this.reset_url = "/account/reset";
      this.activate_url = "/account/activate";
      this.save_url = "/account/save";
      this.load_url = "/account";
      this.login_key = "email";
      this.password_key = "password";
      this.host = QS.ModelAdapter.host;
      for (prop in opts) {
        val = opts[prop];
        this[prop] = val;
      }
    }

    AccountAdapter.prototype.login = function(opts) {
      opts.url = this.login_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.logout = function(opts) {
      opts.url = this.logout_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.register = function(opts) {
      opts.url = this.register_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.sendInviteCode = function(opts) {
      opts.url = this.enter_code_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.save = function(opts) {
      opts.url = this.save_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.load = function(opts) {
      opts || (opts = {});
      opts.type = 'GET';
      opts.url = this.load_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.resetPassword = function(login, opts) {
      opts.data = {};
      opts.data[this.login_key] = login;
      opts.url = this.reset_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.activate = function(token, opts) {
      opts.data = {
        token: token
      };
      opts.url = this.activate_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.send = function(opts) {
      return this.host.request(opts);
    };

    AccountAdapter.prototype["delete"] = function(opts) {
      opts.type = 'DELETE';
      opts.url = this.save_url;
      return this.send(opts);
    };

    AccountAdapter.prototype.add_method = function(fn_name, fn) {
      return this[fn_name] = fn.bind(this);
    };

    AccountAdapter.prototype.route_method = function(fn_name, url, http_m) {
      http_m || (http_m = 'POST');
      return this.add_method(fn_name, function(opts) {
        opts.url = url;
        opts.type = http_m;
        return this.send(opts);
      });
    };

    return AccountAdapter;

  })();

  QS.LocalStore = {
    store: window.store,
    cache: {},
    isEnabled: function() {
      return !QS.LocalStore.store.disabled;
    },
    set: function(key, val) {
      if (QS.LocalStore.isEnabled()) {
        return QS.LocalStore.store.set(key, val);
      } else {
        console.log("LocalStore:: An attempt to write to the local store was ignored because the store is not enabled.");
        return QS.LocalStore.cache[key] = val;
      }
    },
    get: function(key) {
      if (QS.LocalStore.isEnabled()) {
        return QS.LocalStore.store.get(key);
      } else {
        console.log("LocalStore:: An attempt to read from the local store was ignored because the store is not enabled.");
        return QS.LocalStore.cache[key];
      }
    },
    remove: function(key) {
      if (QS.LocalStore.isEnabled()) {
        return QS.LocalStore.store.remove(key);
      } else {
        console.log("LocalStore:: An attempt to remove from the local store was ignored because the store is not enabled.");
        return QS.LocalStore.cache[key] = null;
      }
    }
  };

  QS.Application = (function(superClass) {
    extend(Application, superClass);

    function Application(opts) {
      this.updateWindowBounds = bind(this.updateWindowBounds, this);
      this.bindToBody = bind(this.bindToBody, this);
      this.host = bind(this.host, this);
      this.getUserToken = bind(this.getUserToken, this);
      this.app = this;
      this.opts = opts;
      this.location = window.history.location || window.location;
      this.path = ko.observable(null);
      this.previous_path = ko.observable(null);
      this.path_anchor = ko.observable('');
      this.path_params = ko.observable({});
      this.path_parts = [];
      this.title = ko.observable('');
      this.redirect_on_login = ko.observable(null);
      this.auth_method = this.opts.auth_method || 'session';
      this.redirect_on_login(QS.LocalStore.get('app.redirect_on_login'));
      this.redirect_on_login.subscribe((function(_this) {
        return function(val) {
          return QS.LocalStore.set('app.redirect_on_login', val);
        };
      })(this));
      this.configure();
      this.account_model || (this.account_model = this.opts.account_model || QS.Model);
      this.current_user = new this.account_model();
      this.current_user_token = ko.observable(null);
      this.window_bounds = ko.observable({
        scrollTop: 0,
        width: 0,
        height: 0
      }).extend({
        rateLimit: 100
      });
      this.is_logged_in = ko.computed(function() {
        if (this.auth_method === 'session') {
          return !this.current_user.is_new();
        } else if (this.auth_method === 'token') {
          return this.current_user_token() != null;
        } else {
          return false;
        }
      }, this);
      this.is_logged_in.subscribe((function(_this) {
        return function(val) {
          var rol;
          if (val === true) {
            if ((rol = _this.redirect_on_login()) != null) {
              _this.redirectTo(rol);
              _this.redirect_on_login(null);
            }
            return _this.app.trigger('app.logged_in');
          } else {
            return _this.app.trigger('app.logged_out');
          }
        };
      })(this));
      $(window).on('scroll resize', (function(_this) {
        return function() {
          return _this.updateWindowBounds();
        };
      })(this));
      this.updateWindowBounds();
      Application.__super__.constructor.call(this, 'app', null, null, this.opts);
    }

    Application.prototype.configure = function() {};

    Application.prototype.route = function() {
      var path;
      path = this.location.pathname;
      QS.log("Loading path '" + path + "'");
      if (this.opts.update_title !== false) {
        this.setTitle(this.name, true);
      }
      this.previous_path(this.path());
      this.path_parts = path.split('/');
      if (this.path_parts[this.path_parts.length - 1] !== '') {
        this.path_parts.push('');
      }
      this.path(path);
      this.path_params(QS.utils.getURLParams(this.location.href));
      this.path_anchor(this.location.hash.substring(1));
      this.handlePath(path);
      return this.app.trigger('path.changed', path);
    };

    Application.prototype.handlePath = function(path) {};

    Application.prototype.setUser = function(data) {
      QS.log(data, 2);
      if (data != null) {
        return this.current_user.handleData(data);
      } else {
        return this.current_user.reset();
      }
    };

    Application.prototype.setUserToken = function(data) {
      var token;
      QS.log(data, 2);
      if (data != null) {
        token = new QS.AuthToken(data);
        QS.LocalStore.set('app.current_user_token', token.data);
        return this.current_user_token(token);
      } else {
        QS.LocalStore.set('app.current_user_token', null);
        return this.current_user_token(null);
      }
    };

    Application.prototype.getUserToken = function() {
      var data, old_token, token;
      data = QS.LocalStore.get('app.current_user_token');
      token = data != null ? new QS.AuthToken(data) : null;
      old_token = this.current_user_token();
      if ((token != null) && (old_token != null)) {
        if (token.access_token !== old_token.access_token) {
          this.current_user_token(token);
        }
      } else if (token !== old_token) {
        this.current_user_token(token);
      }
      return token;
    };

    Application.prototype.loadUser = function(adapter) {
      return adapter.load({
        loading: this.is_loading,
        callback: (function(_this) {
          return function(resp) {
            if (resp.meta === 200) {
              _this.setUser(resp.data);
            }
            return _this.route();
          };
        })(this)
      });
    };

    Application.prototype.updateUser = function(adapter) {
      return adapter.load({
        callback: (function(_this) {
          return function(resp) {
            if (resp.meta === 200) {
              return _this.setUser(resp.data);
            }
          };
        })(this)
      });
    };

    Application.prototype.redirectTo = function(path, replace, opts) {
      opts || (opts = {});
      return setTimeout((function(_this) {
        return function() {
          if (opts.on_login != null) {
            _this.redirect_on_login(opts.on_login);
          }
          if ((replace != null) && replace === true) {
            history.replaceState(null, null, path);
          } else {
            history.pushState(null, null, path);
          }
          return _this.route();
        };
      })(this), 100);
    };

    Application.prototype.loginTo = function(path, opts) {
      opts || (opts = {});
      if (this.redirect_on_login() == null) {
        this.redirect_on_login(path);
      }
      if (opts.user != null) {
        this.setUser(opts.user);
      }
      if (opts.token != null) {
        return this.setUserToken(opts.token);
      }
    };

    Application.prototype.logoutTo = function(path, opts) {
      var cp;
      if (opts == null) {
        opts = {};
      }
      cp = this.app.path();
      this.setUser(null);
      this.setUserToken(null);
      if (opts.save_path === true) {
        this.setRedirectOnLogin(cp);
      }
      return this.redirectTo(path);
    };

    Application.prototype.setRedirectOnLogin = function(path, opts) {
      var rol;
      if (opts == null) {
        opts = {};
      }
      if (opts.force == null) {
        opts.force = true;
      }
      rol = this.redirect_on_login();
      if (opts.force === false && (rol != null)) {
        return rol;
      }
      this.redirect_on_login(path);
      return path;
    };

    Application.prototype.runLater = function(callback) {
      return setTimeout(callback, 10);
    };

    Application.prototype.host = function() {
      return window.location.host;
    };

    Application.prototype.setTitle = function(title, setFull) {
      this.title(title);
      setFull = setFull || false;
      if (setFull) {
        return $('title').text(title);
      } else {
        return $('title').text(this.name + " - " + title);
      }
    };

    Application.prototype.bindToBody = function() {
      var app;
      $('body').koBind(this);
      this.afterRender();
      app = this;
      return $('body').on('click', 'a', function() {
        var path;
        if (this.getAttribute("global") === "true" || QS.utils.isPresent(this.download)) {
          return true;
        } else if ((this.origin === window.location.origin) && (app.opts.handle_links !== false)) {
          app.redirectTo(this.href);
          return false;
        } else if ((path = this.getAttribute('path')) != null) {
          app.redirectTo(path);
          return true;
        } else {
          return true;
        }
      });
    };

    Application.prototype.updateWindowBounds = function() {
      var $window, ret;
      $window = $(window);
      ret = {
        scrollTop: $window.scrollTop(),
        width: $window.width(),
        height: $window.height()
      };
      return this.window_bounds(ret);
    };

    return Application;

  })(QS.View);

  QuickScript.initialize = function(opts) {
    var app;
    QuickScript.initKO();
    app = new opts.app_class(opts);
    window.onpopstate = function() {
      return app.route();
    };
    app.bindToBody();
    app.route();
    return app;
  };

}).call(this);

(function() {
  QuickScript.initKO = function() {
    var JSTTemplateSource, templateEngine;
    ko.punches.enableAll();
    ko.bindingHandlers.viewbox = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        return ko.applyBindingsToNode(element, {
          template: 'viewbox'
        }, bindingContext);
      }
    };
    ko.bindingHandlers.fadeVisible = {
      init: function(element, valueAccessor) {
        var shouldDisplay;
        shouldDisplay = ko.unwrap(valueAccessor());
        if (shouldDisplay) {
          return $(element).show();
        } else {
          return $(element).hide();
        }
      },
      update: function(element, valueAccessor, bindingsAccessor) {
        var $el, bopts, def_opts, fadeInSpeed, fadeOutSpeed, shouldDisplay;
        bopts = bindingsAccessor();
        def_opts = ko.bindingHandlers.fadeVisible.defaults;
        fadeInSpeed = bopts.fadeInSpeed || def_opts.fadeInSpeed;
        fadeOutSpeed = bopts.fadeOutSpeed || def_opts.fadeOutSpeed;
        shouldDisplay = ko.unwrap(valueAccessor());
        $el = $(element);
        if (shouldDisplay) {
          return $el.fadeIn(fadeInSpeed);
        } else {
          if (fadeOutSpeed != null) {
            return $el.fadeOut(fadeOutSpeed);
          } else {
            return $el.hide();
          }
        }
      },
      defaults: {
        fadeInSpeed: 'slow',
        fadeOutSpeed: null
      }
    };
    ko.bindingHandlers.slideVisible = {
      init: function(element, valueAccessor) {
        var shouldDisplay;
        shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
        if (shouldDisplay) {
          return $(element).show();
        } else {
          return $(element).hide();
        }
      },
      update: function(element, valueAccessor) {
        var shouldDisplay;
        shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
        if (shouldDisplay) {
          return $(element).slideDown('slow');
        } else {
          return $(element).slideUp();
        }
      }
    };
    ko.bindingHandlers.visibleWithText = {
      update: function(element, valueAccessor) {
        var text;
        text = ko.unwrap(valueAccessor());
        $(element).text(text);
        if ((text != null) && text.length > 0) {
          return $(element).show();
        } else {
          return $(element).hide();
        }
      }
    };
    ko.bindingHandlers.dim = {
      init: function(element, valueAccessor) {
        var shouldDim;
        shouldDim = ko.utils.unwrapObservable(valueAccessor());
        if (shouldDim) {
          return $(element).css({
            opacity: 0.3
          });
        } else {
          return $(element).css({
            opacity: 1.0
          });
        }
      },
      update: function(element, valueAccessor) {
        var shouldDim;
        shouldDim = ko.utils.unwrapObservable(valueAccessor());
        if (shouldDim) {
          return $(element).animate({
            opacity: 0.3
          });
        } else {
          return $(element).animate({
            opacity: 1.0
          });
        }
      }
    };
    ko.bindingHandlers.buttonStatus = {
      update: function(element, valueAccessor) {
        var opts, txt;
        opts = ko.utils.unwrapObservable(valueAccessor());
        if (opts[0]) {
          $(element).html(opts[2]);
          return $(element).attr('disabled', 'true');
        } else {
          if (opts[3] != null) {
            txt = "<i class='" + opts[3] + "'></i> " + opts[1];
          } else {
            txt = opts[1];
          }
          $(element).html(txt);
          return $(element).removeAttr('disabled');
        }
      }
    };
    ko.bindingHandlers.listStatus = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var opts;
        opts = ko.utils.unwrapObservable(valueAccessor());
        if (opts instanceof Array) {
          opts = {
            collection: opts[0],
            empty_str: opts[1],
            loading_str: opts[2],
            list: opts[3] || opts[0].items
          };
        }
        return ko.computed(function() {
          if (opts.collection.is_loading()) {
            if (opts.loading_img != null) {
              $(element).html("<img src='" + opts.loading_img + "'/>");
            } else {
              $(element).html(opts.loading_str);
            }
            return $(element).show('fast');
          } else {
            if (opts.list().length > 0) {
              return $(element).hide('fast');
            } else {
              $(element).show();
              return $(element).html(opts.empty_str);
            }
          }
        }, viewModel);
      }
    };
    ko.bindingHandlers.loading = {
      init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $el, html, loading_obs, loading_text;
        $el = $(element);
        loading_obs = ko.observable(false);
        loading_text = allBindings.get('loadingText') || '';
        bindingContext.$loadingObservable = loading_obs;
        html = "{{#if : $loadingObservable }}\n<i class='" + ko.bindingHandlers.loading.icon_class + "'/> " + loading_text + "\n{{/if }}\n{{#ifnot : $loadingObservable }}\n" + ($el.html()) + "\n{{/ifnot }}";
        return $el.html(html);
      },
      update: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var $el, is_loading;
        $el = $(element);
        is_loading = ko.unwrap(valueAccessor());
        bindingContext.$loadingObservable(is_loading);
        if (is_loading) {
          return $el.attr('disabled', 'true');
        } else {
          return $el.removeAttr('disabled');
        }
      },
      icon_class: 'fa fa-circle-o-notch fa-spin'
    };
    ko.bindingHandlers.handleEnter = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return $(element).keypress(function(ev) {
          var action, val;
          if (ev.keyCode === 13 && !ev.shiftKey) {
            action = valueAccessor();
            val = bindingsAccessor().value || bindingsAccessor().textInput;
            val($(element).val());
            action.call(viewModel);
            if (bindingsAccessor().handleEnterShouldBlur != null) {
              $(element).blur();
            }
            return false;
          }
        });
      }
    };
    ko.bindingHandlers.handleTab = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return $(element).keydown(function(ev) {
          var action, val;
          if (ev.keyCode === 9 && !ev.shiftKey) {
            action = valueAccessor();
            val = bindingsAccessor().value;
            val($(element).val());
            action.call(viewModel);
            return false;
          }
        });
      }
    };
    ko.bindingHandlers.selected = {
      update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var selected;
        selected = ko.utils.unwrapObservable(valueAccessor());
        if (selected) {
          return element.select();
        }
      }
    };
    ko.bindingHandlers.touchstart = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return element.addEventListener('touchstart', valueAccessor().bind(viewModel));
      }
    };
    ko.bindingHandlers.validate = {
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var err_css, ok_css, opts, test_fn;
        opts = valueAccessor();
        test_fn = bindingsAccessor().value.is_valid;
        err_css = 'field_invalid';
        ok_css = 'field_valid';
        if (test_fn()) {
          $(element).removeClass(err_css);
          return $(element).addClass(ok_css);
        } else {
          $(element).removeClass(ok_css);
          return $(element).addClass(err_css);
        }
      }
    };
    ko.bindingHandlers.allowChars = {
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var reg;
        reg = new RegExp(valueAccessor(), 'g');
        return $(element).keyup(function(ev) {
          if (this.value.match(reg)) {
            return this.value = this.value.replace(reg, '');
          }
        });
      }
    };
    ko.bindingHandlers.cropImage = {
      update: function(element, valueAccessor) {
        var opts;
        opts = valueAccessor();
        if (opts[0] != null) {
          return $(element).css({
            backgroundImage: 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
            backgroundSize: 'cover',
            'background-position': 'center',
            width: opts[1],
            height: opts[2],
            display: 'inline-block'
          });
        }
      }
    };
    ko.bindingHandlers.containImage = {
      update: function(element, valueAccessor) {
        var opts;
        opts = valueAccessor();
        if (opts[0] != null) {
          return $(element).css({
            backgroundImage: 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
            backgroundSize: 'contain',
            'background-position': 'center',
            backgroundRepeat: 'no-repeat',
            width: opts[1],
            height: opts[2],
            display: 'inline-block'
          });
        }
      }
    };
    ko.bindingHandlers.fadeInImage = {
      update: function(element, valueAccessor) {
        var img, src;
        src = ko.utils.unwrapObservable(valueAccessor());
        $(element).css({
          opacity: 0
        });
        img = new Image();
        img.onload = function() {
          $(element).animate({
            opacity: 1.0
          }, 1000);
          if (element.tagName === "IMG") {
            return element.src = src;
          }
        };
        return img.src = src;
      }
    };
    ko.bindingHandlers.onImageLoad = {
      init: function(element, valueAccessor) {
        return element.onload = function() {
          return valueAccessor()(element);
        };
      }
    };
    ko.bindingHandlers.preloadImage = {
      init: function(element, valueAccessor) {
        var img, opts;
        opts = valueAccessor();
        img = new Image();
        img.onload = function() {
          return opts.after(element);
        };
        return img.src = opts.src;
      }
    };
    ko.bindingHandlers.toggleHover = {
      init: function(element, valueAccessor, allBindingsAccessor) {
        $(element).on('mouseover', function() {
          return valueAccessor()(true);
        });
        return $(element).on('mouseout', function() {
          return valueAccessor()(false);
        });
      }
    };
    ko.bindingHandlers.checkedInt = {
      init: function(element, valueAccessor, allBindingsAccessor) {
        var interceptor, observable;
        observable = valueAccessor();
        interceptor = ko.computed({
          read: function() {
            return observable().toString();
          },
          write: function(newValue) {
            return observable(+newValue);
          },
          owner: this
        });
        return ko.applyBindingsToNode(element, {
          checked: interceptor
        });
      }
    };
    ko.bindingHandlers.untabbable = {
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        if (valueAccessor()) {
          return $(element).find('iframe, input, textarea, a, iframe').attr('tabIndex', -1);
        } else {
          return $(element).find('input, textarea, a, iframe').removeAttr('tabIndex');
        }
      }
    };
    ko.bindingHandlers.carousel = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return setTimeout(function() {
          var idx, new_el;
          idx = viewModel.getViewBoxIndex(viewModel.task());
          return new_el = $(element).find('.slide-item-' + idx).first();
        }, 0);
      },
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var opts;
        opts = viewModel.transition.opts;
        if (viewModel.task() !== null) {
          return setTimeout(function() {
            var idx, new_el, old_el, old_idx;
            idx = viewModel.getViewBoxIndex(viewModel.task());
            console.log(viewModel.name + ': updating slider to ' + idx);
            old_idx = opts.slide_index();
            new_el = $(element).find('.slide-item-' + idx).first();
            old_el = $(element).find('.slide-item-' + old_idx).first();
            if (idx > old_idx) {
              new_el.addClass('next');
              if (new_el[0] != null) {
                new_el[0].offsetWidth;
              }
              old_el.addClass('left');
              new_el.addClass('left');
            } else {
              new_el.addClass('prev');
              if (new_el[0] != null) {
                new_el[0].offsetWidth;
              }
              old_el.addClass('right');
              new_el.addClass('right');
            }
            setTimeout(function() {
              new_el.removeClass('next left prev right');
              old_el.removeClass('next left prev right');
              old_el.removeClass('active');
              return new_el.addClass('active');
            }, 600);
            return opts.slide_index(idx);
          }, 0);
        }
      }
    };
    ko.bindingHandlers.formError = {
      update: function(element, valueAccessor) {
        var $el, error;
        error = ko.unwrap(valueAccessor());
        $el = $(element);
        $el.removeClass('has-error');
        $el.find('.help-block-error').remove();
        if (error != null) {
          $el.addClass('has-error');
          return $el.append("<div class='help-block help-block-error'>" + error + "</div>");
        }
      }
    };
    ko.bindingHandlers.bindelem = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var el_str, val;
        val = valueAccessor();
        if (val === true) {
          el_str = "element";
        } else {
          el_str = val;
        }
        viewModel[el_str] = element;
        return setTimeout(function() {
          return typeof viewModel.onElementBound === "function" ? viewModel.onElementBound(el_str, element) : void 0;
        }, 50);
      }
    };
    ko.bindingHandlers.jsfileupload = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var model;
        model = valueAccessor();
        $(element).fileupload(model.input.options);
        $(element).change(function(evt) {
          return model.input.files(evt.target.files);
        });
        model.fileupload = $(element).fileupload.bind($(element));
        return model.selectFile = function() {
          return $(element).click();
        };
      }
    };
    ko.bindingHandlers.fileupload = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var model;
        model = valueAccessor();
        $(element).change(function(evt) {
          return model.input.files(evt.target.files);
        });
        return model.selectFile = function() {
          return $(element).click();
        };
      }
    };
    ko.bindingHandlers.filedrop = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var $el, dest;
        $el = $(element);
        dest = valueAccessor();
        $el.on('dragover', function(ev) {
          ev.preventDefault();
          return ev.originalEvent.dataTransfer.dropEffect = 'copy';
        });
        return $el.on('drop', function(ev) {
          var files;
          ev.stopPropagation();
          ev.preventDefault();
          files = ev.originalEvent.dataTransfer.files;
          QS.log("I got here");
          if ((dest.input != null) && (dest.input.files != null)) {
            QS.log("I got here too");
            return dest.input.files(files);
          } else {
            return typeof dest === "function" ? dest(files, {
              event: ev,
              view: viewModel,
              element: element
            }) : void 0;
          }
        });
      }
    };
    ko.bindingHandlers.jqtabs = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        $(element).addClass('ui-tabs ui-widget ui-widget-content ui-corner-all');
        $(element).children('ul').first().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all');
        $(element).children('ul').first().children('li').addClass('ui-state-default ui-corner-top');
        $(element).children('div').addClass('ui-tabs-panel ui-widget-content ui-corner-bottom');
        return $(element).children('ul').first().find('li a').each(function(idx, el) {
          var tab_id;
          tab_id = $(el).parent()[0].id;
          return $(el).click(function() {
            return valueAccessor()(tab_id);
          });
        });
      },
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var sel_tab;
        sel_tab = ko.utils.unwrapObservable(valueAccessor());
        $(element).children('ul').first().children('li').removeClass('ui-tabs-selected ui-state-active');
        $(element).children('ul').first().children("li#" + sel_tab).addClass('ui-tabs-selected ui-state-active');
        $(element).children('div').addClass('ui-tabs-hide');
        return $(element).children("div#" + sel_tab).removeClass('ui-tabs-hide');
      }
    };
    ko.bindingHandlers.tabs = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return $(element).children('li').each(function(idx, el) {
          var tab_id;
          tab_id = $(el)[0].id;
          return $(el).click(function() {
            return valueAccessor()(tab_id);
          });
        });
      },
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var sel_tab;
        sel_tab = ko.utils.unwrapObservable(valueAccessor());
        $(element).children('li').removeClass('active');
        return $(element).children("li#" + sel_tab).addClass('active');
      }
    };
    ko.bindingHandlers.tab_views = {
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var sel_tab;
        sel_tab = ko.utils.unwrapObservable(valueAccessor());
        $(element).children('div').addClass('hidden').removeClass('active');
        return $(element).children("div#" + sel_tab).addClass('active').removeClass('hidden');
      }
    };
    ko.bindingHandlers.tabpanes = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var $el, $panes, click_db, i, j, len, len1, pane, pane_data, str, tab_obs, visible_db;
        $el = $(element);
        $panes = $el.children('pane');
        pane_data = $panes.toArray().map(function(p) {
          var $p;
          $p = $(p);
          return {
            title: $p.attr('title'),
            key: $p.attr('data-key'),
            html: p.innerHTML,
            visible: $p.attr('data-visible')
          };
        });
        tab_obs = valueAccessor();
        if (viewModel[tab_obs] == null) {
          viewModel[tab_obs] = ko.observable(pane_data[0].key);
        }
        str = "<div class='tabbable'><ul class='nav nav-tabs'>";
        for (i = 0, len = pane_data.length; i < len; i++) {
          pane = pane_data[i];
          click_db = "click : function(){" + tab_obs + "('" + pane.key + "');}";
          visible_db = pane.visible != null ? ", visible : " + pane.visible : "";
          str += "<li data-bind=\"css : {active : " + tab_obs + "() == '" + pane.key + "'}\"><a href='' data-bind=\"" + click_db + visible_db + "\">" + pane.title + "</a></li>";
        }
        str += "</ul>";
        str += "<div class='tab-content'>";
        for (j = 0, len1 = pane_data.length; j < len1; j++) {
          pane = pane_data[j];
          str += "<div class='tab-pane' data-bind=\"css : {active : " + tab_obs + "() == '" + pane.key + "'}\">" + pane.html + "</div>";
        }
        str += "</div></div>";
        return element.innerHTML = str;
      }
    };
    ko.bindingHandlers.calendar = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var opts;
        console.log('calendar init');
        $(element).fullCalendar('destroy');
        opts = $.extend({}, ko.utils.unwrapObservable(valueAccessor()));
        $(element).fullCalendar(opts);
        return viewModel.calendar = $(element).fullCalendar.bind($(element));
      }
    };
    ko.bindingHandlers.center = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var fn;
        fn = function() {
          return setTimeout(function() {
            return $(element).center();
          }, 1);
        };
        viewModel.task.subscribe(fn);
        return viewModel.is_visible.subscribe(fn);
      }
    };
    ko.bindingHandlers.placeholder = {
      init: function(element, valueAccessor) {
        var fn;
        fn = function() {
          if ($(element).val().length > 0) {
            return $(element).siblings('label').hide();
          } else {
            return $(element).siblings('label').show();
          }
        };
        return $(element).on('blur change keyup', fn);
      },
      update: function(element, valueAccessor) {
        if ($(element).val().length > 0) {
          return $(element).siblings('label').hide();
        } else {
          return $(element).siblings('label').show();
        }
      }
    };
    ko.bindingHandlers.linkify = {
      update: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var text;
        text = ko.utils.unwrapObservable(valueAccessor());
        return $(element).html(QS.utils.linkify(text));
      }
    };
    ko.bindingHandlers.radioClick = {
      init: function(element, valueAccessor) {
        var obs, val;
        obs = valueAccessor()[0];
        val = valueAccessor()[1];
        return $(element).click(function() {
          obs(val);
          return false;
        });
      },
      update: function(element, valueAccessor) {
        var obs, val;
        obs = valueAccessor()[0];
        val = valueAccessor()[1];
        if (obs() === val) {
          return $(element).addClass('active');
        } else {
          return $(element).removeClass('active');
        }
      }
    };
    ko.bindingHandlers.viewComponents = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var $el, $tpl, bc, data, feopts, name, node, opts, owner, params, tpl, tpl_name, view;
        $el = $(element);
        opts = valueAccessor();
        name = opts.name;
        data = opts.data;
        owner = opts.owner || viewModel;
        view = opts.view || QS.View;
        params = opts.params || {};
        params.owner || (params.owner = owner);
        feopts = opts.foreach || {};
        feopts.data = data;
        if (!ko.components.isRegistered(name)) {
          tpl = ((function() {
            var i, len, ref, results;
            ref = ko.virtualElements.childNodes(element);
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              node = ref[i];
              results.push(node.outerHTML);
            }
            return results;
          })()).join(" ");
          tpl_name = "component-" + name;
          ko.addTemplate(tpl_name, tpl);
          view.registerComponent(name, tpl_name);
        }
        bc = {};
        bc.$componentOwner = owner;
        bc.$componentCollectionData = data;
        bc.$componentCollectionParams = params;
        bc.$componentParamsForContext = function(context) {
          return $.extend({
            model: context.$data
          }, context.$componentCollectionParams);
        };
        $tpl = $("<!-- ko component : {name: '" + name + "', params: $componentParamsForContext($context)} --> <!-- /ko -->");
        ko.virtualElements.setDomNodeChildren(element, $tpl);
        ko.applyBindingsToNode(element, {
          foreach: feopts
        }, bindingContext.extend(bc));
        return {
          controlsDescendantBindings: true
        };
      }
    };
    ko.virtualElements.allowedBindings.viewComponents = true;
    ko.bindingHandlers.withView = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var child_context, model, owner, view, view_class, view_options;
        view_class = valueAccessor();
        view_options = bindingsAccessor().withViewOptions || bindingsAccessor().viewOptions || {};
        view_options.element = element;
        view_options.model || (view_options.model = bindingsAccessor().withViewModel);
        view_options.owner || (view_options.owner = bindingsAccessor().withViewOwner);
        owner = view_options.owner || bindingContext['$view'] || bindingContext['$parent'] || bindingContext['$root'];
        model = view_options.model;
        view = new view_class("view", owner, model, view_options);
        child_context = bindingContext.createChildContext(view);
        child_context.$view = view;
        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          return typeof view.dispose === "function" ? view.dispose() : void 0;
        });
        ko.applyBindingsToDescendants(child_context, element);
        return {
          controlsDescendantBindings: true
        };
      }
    };
    ko.virtualElements.allowedBindings.withView = true;
    ko.bindingHandlers.updateContext = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var prop, props, results, val;
        props = valueAccessor();
        if (typeof props === "string") {
          return bindingContext[props] = viewModel;
        } else {
          results = [];
          for (prop in props) {
            val = props[prop];
            results.push(bindingContext[prop] = val);
          }
          return results;
        }
      }
    };
    ko.bindingHandlers.context = ko.bindingHandlers.updateContext;
    ko.bindingHandlers.scopeAs = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var new_context, prop, vr;
        prop = valueAccessor();
        vr = {};
        vr[prop] = viewModel;
        new_context = bindingContext.extend(vr);
        ko.applyBindingsToDescendants(new_context, element);
        return {
          controlsDescendantBindings: true
        };
      }
    };
    ko.virtualElements.allowedBindings.scopeAs = true;
    ko.extenders.usd = function(target) {
      target.usd = ko.computed({
        read: function() {
          if (target() == null) {
            return null;
          }
          return target() / 100.0;
        },
        write: function(val) {
          return target(val * 100.0);
        }
      });
      target.usd_str = ko.computed({
        read: function() {
          if (target() == null) {
            return "$ -";
          }
          return "$ " + (target.usd().toFixed(2));
        },
        deferEvaluation: true
      });
      return target;
    };
    ko.extenders.date = function(target) {
      target.date = ko.computed({
        read: function() {
          return Date.from_utc(target());
        },
        deferEvaluation: true,
        pure: true
      });
      target.date_str = ko.computed({
        read: function() {
          return target.date().format('mmm d, yyyy');
        },
        deferEvaluation: true,
        pure: true
      });
      target.ago_str = ko.computed({
        read: function() {
          return ((new TimeLength(target.date())).toString()) + " ago";
        },
        deferEvaluation: true,
        pure: true
      });
      target.moment = ko.computed({
        read: function() {
          return moment.unix(target());
        },
        deferEvaluation: true,
        pure: true
      });
      return target;
    };
    ko.extenders.errors = function(target) {
      target.has = function(field) {
        return target()[field] != null;
      };
      target["for"] = function(field) {
        if (target()[field] != null) {
          return target()[field][0];
        } else {
          return null;
        }
      };
      target.any = ko.pureComputed(function() {
        return !jQuery.isEmptyObject(target());
      });
      return target;
    };
    ko.extenders.editable = function(target) {
      target.is_editing = ko.observable(false);
      target.edited = ko.observable();
      target.startEdit = function() {
        target.edited(target());
        return target.is_editing(true);
      };
      target.cancelEdit = function() {
        target.edited(target());
        return target.is_editing(false);
      };
      target.commitEdit = function() {
        target(target.edited());
        return target.is_editing(false);
      };
      return target;
    };
    ko.punches.utils.setNodePreprocessor(function(node) {
      var click_db, iref;
      if (node.nodeType === 1 && node.nodeName === "A" && node.getAttribute('iref') !== null) {
        iref = node.getAttribute('iref');
        click_db = "click : function() { App.redirectTo('" + iref + "'); }";
        return ko.utils.appendNodeDataBind(node, click_db);
      }
    });
    ko.components.loaders.unshift({
      loadTemplate: function(name, config, callback) {
        var applyStyles, el, errorCallback, html, jst, tid;
        errorCallback = function(msg) {
          throw new Error("Component '" + name + "': " + msg + ".");
        };
        applyStyles = function(el) {
          var $el, props, ref, sel;
          if (config.style != null) {
            if (typeof config.style === 'string') {
              $('head').append("<style>" + config.style + "</style>");
              return callback(el);
            } else {
              $el = $(el);
              ref = config.style;
              for (sel in ref) {
                props = ref[sel];
                $el.filter(sel).add($el.find(sel)).css(props);
              }
              return callback($el.toArray());
            }
          } else {
            return callback(el);
          }
        };
        if ((config.template_id != null) || typeof config.element === 'string') {
          tid = config.template_id || config.element;
          if ((typeof JST !== "undefined" && JST !== null) && ((jst = JST[tid]) != null)) {
            return applyStyles(ko.utils.parseHtmlFragment(jst()));
          } else if ((el = document.getElementById(tid)) != null) {
            return applyStyles(ko.utils.parseHtmlFragment(el.text));
          } else {
            return errorCallback("Template with id '" + tid + "' not found");
          }
        } else if (config.html != null) {
          return applyStyles(ko.utils.parseHtmlFragment(config.html));
        } else if (config.haml != null) {
          if (typeof Haml === "undefined" || Haml === null) {
            errorCallback("You must include haml-js for haml support");
          }
          html = Haml.render(config.haml.replace(/\t/g, "  "));
          return applyStyles(ko.utils.parseHtmlFragment(html));
        } else {
          return errorCallback("You must specify an element id or a markup");
        }
      }
    });
    JSTTemplateSource = (function() {
      function JSTTemplateSource(name) {
        this.name = name;
      }

      JSTTemplateSource.prototype.text = function(val) {
        if (arguments.length === 0) {
          return JST[this.name]();
        } else {
          return JST[this.name] = val;
        }
      };

      JSTTemplateSource.prototype.data = function(key, val) {
        var jst;
        jst = JST[this.name];
        if (jst == null) {
          throw new Error("JST template not found.");
        }
        jst.data || (jst.data = {});
        if (arguments.length > 1) {
          return jst.data[key] = val;
        } else {
          return jst.data[key];
        }
      };

      return JSTTemplateSource;

    })();
    ko.templateSources.jst = JSTTemplateSource;
    templateEngine = new ko.nativeTemplateEngine();
    templateEngine.makeTemplateSource = function(template, templateDocument) {
      var elem, jst;
      if (typeof template === "string") {
        templateDocument = templateDocument || document;
        if ((typeof JST !== "undefined" && JST !== null) && (jst = JST[template])) {
          if (jst != null) {
            return new ko.templateSources.jst(template);
          }
        }
        if ((elem = templateDocument.getElementById(template))) {
          return new ko.templateSources.domElement(elem);
        }
        throw new Error("Cannot find template with ID " + template);
      } else if (template.nodeType === 1 || template.nodeType === 8) {
        return new ko.templateSources.anonymousTemplate(template);
      } else {
        throw new Error("Unknown template type: " + template);
      }
    };
    ko.setTemplateEngine(templateEngine);
    ko.utils.appendNodeDataBind = function(node, bind) {
      var db;
      db = node.getAttribute('data-bind');
      if (db != null) {
        return node.setAttribute('data-bind', db + ", " + bind);
      } else {
        return node.setAttribute('data-bind', bind);
      }
    };
    ko.absorbModel = function(data, self) {
      var prop, results, val;
      results = [];
      for (prop in data) {
        val = data[prop];
        if (typeof val === "function") {
          continue;
        }
        if (self[prop] == null) {
          if ((self.submodels != null) && (self.submodels[prop] != null)) {
            ko.addSubModel(prop, self.submodels[prop], self);
            self[prop].handleData(val);
          } else {
            ko.addField(prop, val, self);
          }
        } else if (typeof self[prop].handleData === "function") {
          self[prop].handleData(val);
        } else {
          self[prop](val);
        }
        results.push(self.fields.pushOnce(prop));
      }
      return results;
    };
    ko.addFields = function(fields, val, self) {
      var i, len, prop, results;
      results = [];
      for (i = 0, len = fields.length; i < len; i++) {
        prop = fields[i];
        results.push(ko.addField(prop, val, self));
      }
      return results;
    };
    ko.addField = function(field, val, valid_fn, self) {
      if (self == null) {
        self = valid_fn;
        valid_fn = null;
      }
      if (typeof self[field] !== "function") {
        if (val instanceof Array) {
          self[field] = ko.observableArray();
        } else {
          self[field] = ko.observable(val);
        }
        if (valid_fn != null) {
          self[field + "_valid"] = ko.computed((function() {
            return (valid_fn.bind(self))(self[field]());
          }), self);
        }
      } else {
        self[field](val);
      }
      if (typeof field === "string") {
        return self.fields.pushOnce(field);
      }
    };
    ko.addComputed = function(field, fn_opts, self) {
      var opts;
      opts = {};
      if (QS.utils.isFunction(fn_opts)) {
        opts = {
          read: fn_opts,
          pure: true
        };
      } else {
        opts = fn_opts;
      }
      opts.owner = self;
      opts.deferEvaluation = true;
      if (opts.pure == null) {
        opts.pure = true;
      }
      return self[field] = ko.computed(opts, self);
    };
    ko.validate_for = function(field, fn, msg, self) {
      if (self.validations == null) {
        self.validations = {};
      }
      if (self.validations[field] == null) {
        self.validations[field] = [];
      }
      self.validations[field].push({
        test: fn.bind(self),
        msg: msg
      });
      if (self[field].is_valid == null) {
        return self[field].is_valid = ko.computed(function() {
          var i, len, ref, val_obj, valid;
          valid = true;
          ref = self.validations[field];
          for (i = 0, len = ref.length; i < len; i++) {
            val_obj = ref[i];
            valid && (valid = val_obj.test(self[field]()));
          }
          return valid;
        }, self);
      }
    };
    ko.validate_fields = function(fields, fn, self) {
      var field, i, j, len, len1, msgs, ref, val_obj;
      msgs = [];
      for (i = 0, len = fields.length; i < len; i++) {
        field = fields[i];
        ref = self.validations[field];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          val_obj = ref[j];
          if (!val_obj.test(self[field]())) {
            msgs.push(val_obj.msg);
          }
        }
      }
      return fn(msgs);
    };
    ko.addSubModel = function(field, model, self) {
      if (self[field] != null) {
        self[field].reset();
      } else {
        self[field] = new model({}, self, {
          is_submodel: true
        });
      }
      if (typeof field === "string") {
        return self.fields.pushOnce(field);
      }
    };
    ko.intercepter = function(observable, write_fn, self) {
      var underlying_observable;
      underlying_observable = observable;
      return ko.dependentObservable({
        read: underlying_observable,
        write: function(val) {
          if (val !== underlying_observable()) {
            return write_fn.call(self, underlying_observable, underlying_observable(), val);
          }
        }
      });
    };
    ko.dirtyFlag = function(root, isInitiallyDirty) {
      var _initialState, _isInitiallyDirty, result;
      result = function() {};
      _initialState = ko.observable(ko.toJSON(root));
      _isInitiallyDirty = ko.observable(isInitiallyDirty);
      result.isDirty = ko.dependentObservable(function() {
        return _isInitiallyDirty() || (_initialState() !== ko.toJSON(root));
      });
      result.reset = function() {
        _initialState(ko.toJSON(root));
        return _isInitiallyDirty(false);
      };
      return result;
    };
    ko.copyObject = function(obj, fields) {
      var i, len, prop, ret;
      ret = {};
      for (i = 0, len = fields.length; i < len; i++) {
        prop = fields[i];
        ret[prop] = obj[prop];
      }
      return ret;
    };
    ko.addTemplate = function(templateName, templateMarkup) {
      window.JST || (window.JST = {});
      return window.JST[templateName] = function() {
        return templateMarkup;
      };
    };
    ko.modelStates = {};
    ko.modelStates.READY = 1;
    ko.modelStates.LOADING = 2;
    ko.modelStates.SAVING = 3;
    ko.modelStates.EDITING = 4;
    ko.modelStates.INSERTING = 5;
    ko.modelStates.APPENDING = 6;
    ko.modelStates.UPDATING = 7;
    ko.editors = {};
    jQuery.fn.extend({
      to_s: function() {
        return $('<div>').append(this.clone()).remove().html();
      },
      center: function() {
        this.css("position", "absolute");
        this.css("top", (($(window).height() - this.outerHeight(true)) / 2) + $(window).scrollTop() + "px");
        this.css("left", (($(window).width() - this.outerWidth(true)) / 2) + $(window).scrollLeft() + "px");
        return this;
      },
      koBind: function(viewModel) {
        return this.each(function() {
          $(this).koClean();
          return ko.applyBindings(viewModel, this);
        });
      },
      koClean: function() {
        return this.each(function() {
          return ko.cleanNode(this);
        });
      }
    });
    ko.addTemplate("viewbox", "<div data-bind='foreach : {data: views(), as: \"$view\"}'>\n	<div data-bind=\"fadeVisible : is_visible(), template : { name : getViewTemplateID, afterRender : afterRender, if : is_visible() }, attr : { id : templateID, 'class' : templateID }, bindelem : true\"></div>\n</div>");
    return ko.addTemplate("viewbox-slide", "<div class=\"view-slider\" data-bind=\"style : {width : transition.opts.width + 'px', height : transition.opts.height + 'px'}, carousel : task\">\n	<div data-bind='foreach : views()'>\n		<div class=\"slide-item\" data-bind=\"template : { name : getViewTemplateID }, attr : {id : templateID, class : 'slide-item slide-item-' + $index()}, css : {}, style : {width : owner.transition.opts.width + 'px', height : owner.transition.opts.height + 'px'}, bindelem : true\"></div>\n	</div>\n</div>");
  };

}).call(this);
