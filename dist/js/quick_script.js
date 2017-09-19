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
 * Knockout JavaScript library v3.4.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),u=x.document,M=x.navigator,v=x.jQuery,F=x.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in T?a===c:!1}function U(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function V(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function W(a,
c){c&&c!==I?"beforeChange"===c?this.Kb(a):this.Ha(a,c):this.Lb(a)}function X(a,c){null!==c&&c.k&&c.k()}function Y(a,c){var d=this.Hc,e=d[s];e.R||(this.lb&&this.Ma[c]?(d.Pb(c,a,this.Ma[c]),this.Ma[c]=null,--this.lb):e.r[c]||d.Pb(c,a,e.s?{ia:a}:d.uc(a)))}function K(b,c,d,e){a.d[b]={init:function(b,g,k,l,m){var h,r;a.m(function(){var q=a.a.c(g()),p=!d!==!q,A=!r;if(A||c||p!==h)A&&a.va.Aa()&&(r=a.a.ua(a.f.childNodes(b),!0)),p?(A||a.f.da(b,a.a.ua(r)),a.eb(e?e(m,q):m,b)):a.f.xa(b),h=p},null,{i:b});return{controlsDescendantBindings:!0}}};
a.h.ta[b]=!1;a.f.Z[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.G=function(a,c,d){a[c]=d};a.version="3.4.0";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var h=b[c].match(r)||
[];a.a.q(d.match(r),function(b){a.a.pa(h,b,e)});b[c]=h.join(" ")}var f={__proto__:[]}instanceof Array,g="function"===typeof Symbol,k={},l={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(k,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},h=u&&function(){for(var a=3,b=u.createElement("div"),c=
b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),r=/\S+/g;return{cc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],q:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Sb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];
return null},La:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Tb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},fb:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ka:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ra:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},pa:function(b,c,d){var e=
a.a.o(a.a.zb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},ka:f,extend:c,Xa:d,Ya:f?d:c,D:b,Ca:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},ob:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},jc:function(b){b=a.a.V(b);for(var c=(b[0]&&b[0].ownerDocument||u).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.$(b[d]));return c},ua:function(b,c){for(var d=0,e=b.length,h=[];d<e;d++){var m=b[d].cloneNode(!0);h.push(c?a.$(m):m)}return h},
da:function(b,c){a.a.ob(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},qc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],h=e.parentNode,m=0,l=c.length;m<l;m++)h.insertBefore(c[m],e);m=0;for(l=d.length;m<l;m++)a.removeNode(d[m])}},za:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),
c=c.nextSibling;a.push(d)}}return a},sc:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},$a:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},nd:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Mc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=
b;)a=a.parentNode;return!!a},nb:function(b){return a.a.Mc(b,b.ownerDocument.documentElement)},Qb:function(b){return!!a.a.Sb(b,a.a.nb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Wb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Wb(b),c)},$b:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},p:function(b,c,d){var e=a.a.Wb(d);d=h&&m[c];if(a.options.useOnlyNativeEvents||
d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var l=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,l);a.a.F.oa(b,function(){b.detachEvent(f,l)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else v(b).bind(c,e)},Da:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.A(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==
d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof u.createEvent)if("function"==typeof b.dispatchEvent)d=u.createEvent(l[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},c:function(b){return a.H(b)?
b():b},zb:function(b){return a.H(b)?b.t():b},bb:function(b,c,d){var h;c&&("object"===typeof b.classList?(h=b.classList[d?"add":"remove"],a.a.q(c.match(r),function(a){h.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Za:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.da(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Rc(b)},rc:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(u.createElement("<input name='"+
a.name+"'/>"),!1)}catch(c){}},Rc:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Nc:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},hd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},V:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Yb:function(a){return g?Symbol(a):a},rd:6===h,sd:7===h,C:h,ec:function(b,c){for(var d=a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},h=[],m=d.length-1;0<=m;m--)e(d[m])&&h.push(d[m]);return h},ed:function(b){return"string"==typeof b&&(b=a.a.$a(b))?F&&F.parse?F.parse(b):(new Function("return "+b))():null},Eb:function(b,c,d){if(!F||!F.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return F.stringify(a.a.c(b),c,d)},fd:function(c,d,e){e=e||{};var h=e.params||{},m=e.includeFields||this.cc,l=c;if("object"==typeof c&&"form"===a.a.A(c))for(var l=c.action,f=m.length-1;0<=f;f--)for(var g=a.a.ec(c,m[f]),k=g.length-1;0<=k;k--)h[g[k].name]=g[k].value;d=a.a.c(d);var r=u.createElement("form");r.style.display="none";r.action=l;r.method="post";for(var n in d)c=u.createElement("input"),c.type="hidden",c.name=n,c.value=a.a.Eb(a.a.c(d[n])),r.appendChild(c);b(h,function(a,b){var c=u.createElement("input");
c.type="hidden";c.name=a;c.value=b;r.appendChild(c)});u.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.q);a.b("utils.arrayFirst",a.a.Sb);a.b("utils.arrayFilter",a.a.Ka);a.b("utils.arrayGetDistinctValues",a.a.Tb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.fb);a.b("utils.arrayPushAll",a.a.ra);a.b("utils.arrayRemoveItem",a.a.La);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.cc);a.b("utils.getFormFields",a.a.ec);a.b("utils.peekObservable",a.a.zb);a.b("utils.postJson",a.a.fd);a.b("utils.parseJson",a.a.ed);a.b("utils.registerEventHandler",a.a.p);a.b("utils.stringifyJson",a.a.Eb);a.b("utils.range",a.a.hd);a.b("utils.toggleDomNodeCssClass",a.a.bb);a.b("utils.triggerEvent",a.a.Da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.pa);a.b("utils.setTextContent",a.a.Za);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var k=b[d];if(!k||"null"===k||!e[k]){if(!g)return n;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=
e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},I:function(){return c++ +d}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.F=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.F.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.I(),e={1:!0,8:!0,9:!0},
f={1:!0,9:!0};return{oa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},pc:function(c,e){var l=b(c,!1);l&&(a.a.La(l,e),0==l.length&&a.a.e.set(c,d,n))},$:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ra(d,b.getElementsByTagName("*"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.$(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};
a.$=a.a.F.$;a.removeNode=a.a.F.removeNode;a.b("cleanNode",a.$);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.F);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.F.oa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.F.pc);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},
g=8>=a.a.C;a.a.ma=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var h=e[0];h.parentNode&&11!==h.parentNode.nodeType;)h=h.parentNode;h.parentNode&&h.parentNode.removeChild(h)}}else{(e=d)||(e=u);var h=e.parentWindow||e.defaultView||x,r=a.a.$a(c).toLowerCase(),q=e.createElement("div"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p="ignored<div>"+p[1]+c+p[2]+"</div>";"function"==typeof h.innerShiv?q.appendChild(h.innerShiv(p)):(g&&e.appendChild(q),
q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.V(q.lastChild.childNodes)}return e};a.a.Cb=function(b,c){a.a.ob(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ma(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ma);a.b("utils.setHtml",a.a.Cb);a.M=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.M.lc(c.nodeValue);null!=f&&e.push({Lc:c,cd:f})}else if(1==c.nodeType)for(var f=
0,g=c.childNodes,k=g.length;f<k;f++)b(g[f],e)}var c={};return{wb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},xc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),
!0}finally{delete c[a]}},yc:function(c,e){var f=[];b(c,f);for(var g=0,k=f.length;g<k;g++){var l=f[g].Lc,m=[l];e&&a.a.ra(m,e);a.M.xc(f[g].cd,m);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},lc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.M);a.b("memoization.memoize",a.M.wb);a.b("memoization.unmemoize",a.M.xc);a.b("memoization.parseMemoText",a.M.lc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.M.yc);a.Y=function(){function b(){if(e)for(var b=
e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.$b(Error("'Too much recursion' after processing "+c+" task groups."));break}b=e}try{m()}catch(h){a.a.$b(h)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=u.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):u&&"onreadystatechange"in u.createElement("script")?function(a){var b=u.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;u.documentElement.removeChild(b);b=null;a()};u.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Wa:function(b){e||a.Y.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},md:b}}();a.b("tasks",a.Y);a.b("tasks.schedule",a.Y.Wa);a.b("tasks.runEarly",a.Y.md);a.ya={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);
d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.cb=!1;f="notifyWhenChangesStop"==e?V:U;a.Ta(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.cb||(b.cb=!0,b.Ta(function(c){var e;return function(){a.Y.cancel(e);e=a.Y.Wa(c);b.notifySubscribers(n,"dirty")}}))},notify:function(a,c){a.equalityComparer=
"always"==c?null:J}};var T={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.ya);a.vc=function(b,c,d){this.ia=b;this.gb=c;this.Kc=d;this.R=!1;a.G(this,"dispose",this.k)};a.vc.prototype.k=function(){this.R=!0;this.Kc()};a.J=function(){a.a.Ya(this,D);D.rb(this)};var I="change",D={rb:function(a){a.K={};a.Nb=1},X:function(b,c,d){var e=this;d=d||I;var f=new a.vc(e,c?b.bind(c):b,function(){a.a.La(e.K[d],f);e.Ia&&e.Ia(d)});e.sa&&e.sa(d);e.K[d]||(e.K[d]=[]);e.K[d].push(f);return f},notifySubscribers:function(b,
c){c=c||I;c===I&&this.zc();if(this.Pa(c))try{a.l.Ub();for(var d=this.K[c].slice(0),e=0,f;f=d[e];++e)f.R||f.gb(b)}finally{a.l.end()}},Na:function(){return this.Nb},Uc:function(a){return this.Na()!==a},zc:function(){++this.Nb},Ta:function(b){var c=this,d=a.H(c),e,f,g;c.Ha||(c.Ha=c.notifySubscribers,c.notifySubscribers=W);var k=b(function(){c.Mb=!1;d&&g===c&&(g=c());e=!1;c.tb(f,g)&&c.Ha(f=g)});c.Lb=function(a){c.Mb=e=!0;g=a;k()};c.Kb=function(a){e||(f=a,c.Ha(a,"beforeChange"))}},Pa:function(a){return this.K[a]&&
this.K[a].length},Sc:function(b){if(b)return this.K[b]&&this.K[b].length||0;var c=0;a.a.D(this.K,function(a,b){"dirty"!==a&&(c+=b.length)});return c},tb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.ya[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.G(D,"subscribe",D.X);a.G(D,"extend",D.extend);a.G(D,"getSubscriptionsCount",D.Sc);a.a.ka&&a.a.Xa(D,Function.prototype);a.J.fn=D;a.hc=function(a){return null!=
a&&"function"==typeof a.X&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.J);a.b("isSubscribable",a.hc);a.va=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Ub:b,end:c,oc:function(b){if(e){if(!a.hc(b))throw Error("Only subscribable things can act as dependencies");e.gb.call(e.Gc,b,b.Cc||(b.Cc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Aa:function(){if(e)return e.m.Aa()},Sa:function(){if(e)return e.Sa}}}();a.b("computedContext",
a.va);a.b("computedContext.getDependenciesCount",a.va.Aa);a.b("computedContext.isInitial",a.va.Sa);a.b("ignoreDependencies",a.qd=a.l.w);var E=a.a.Yb("_latestValue");a.N=function(b){function c(){if(0<arguments.length)return c.tb(c[E],arguments[0])&&(c.ga(),c[E]=arguments[0],c.fa()),this;a.l.oc(c);return c[E]}c[E]=b;a.a.ka||a.a.extend(c,a.J.fn);a.J.fn.rb(c);a.a.Ya(c,B);a.options.deferUpdates&&a.ya.deferred(c,!0);return c};var B={equalityComparer:J,t:function(){return this[E]},fa:function(){this.notifySubscribers(this[E])},
ga:function(){this.notifySubscribers(this[E],"beforeChange")}};a.a.ka&&a.a.Xa(B,a.J.fn);var H=a.N.gd="__ko_proto__";B[H]=a.N;a.Oa=function(b,c){return null===b||b===n||b[H]===n?!1:b[H]===c?!0:a.Oa(b[H],c)};a.H=function(b){return a.Oa(b,a.N)};a.Ba=function(b){return"function"==typeof b&&b[H]===a.N||"function"==typeof b&&b[H]===a.B&&b.Vc?!0:!1};a.b("observable",a.N);a.b("isObservable",a.H);a.b("isWriteableObservable",a.Ba);a.b("isWritableObservable",a.Ba);a.b("observable.fn",B);a.G(B,"peek",B.t);a.G(B,
"valueHasMutated",B.fa);a.G(B,"valueWillMutate",B.ga);a.la=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.N(b);a.a.Ya(b,a.la.fn);return b.extend({trackArrayChanges:!0})};a.la.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.H(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ga(),d.push(g),c.splice(f,1),f--)}d.length&&
this.fa();return d},removeAll:function(b){if(b===n){var c=this.t(),d=c.slice(0);this.ga();c.splice(0,c.length);this.fa();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.H(b)?function(a){return a===b}:b;this.ga();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.fa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=
this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ga(),this.t()[d]=c,this.fa())}};a.a.ka&&a.a.Xa(a.la.fn,a.N.fn);a.a.q("pop push reverse shift sort splice unshift".split(" "),function(b){a.la.fn[b]=function(){var a=this.t();this.ga();this.Vb(a,b,arguments);var d=a[b].apply(a,arguments);this.fa();return d===a?this:d}});a.a.q(["slice"],function(b){a.la.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.la);a.ya.trackArrayChanges=function(b,
c){function d(){if(!e){e=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==I||++k;return c.apply(this,arguments)};var d=[].concat(b.t()||[]);f=null;g=b.X(function(c){c=[].concat(c||[]);if(b.Pa("arrayChange")){var e;if(!f||1<k)f=a.a.ib(d,c,b.hb);e=f}d=c;f=null;k=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.hb={};c&&"object"==typeof c&&a.a.extend(b.hb,c);b.hb.sparse=!0;if(!b.Vb){var e=!1,f=null,g,k=0,l=b.sa,m=b.Ia;b.sa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};
b.Ia=function(a){m&&m.call(b,a);"arrayChange"!==a||b.Pa("arrayChange")||(g.k(),e=!1)};b.Vb=function(b,c,d){function m(a,b,c){return l[l.length]={status:a,value:b,index:c}}if(e&&!k){var l=[],g=b.length,t=d.length,G=0;switch(c){case "push":G=g;case "unshift":for(c=0;c<t;c++)m("added",d[c],G+c);break;case "pop":G=g-1;case "shift":g&&m("deleted",b[G],G);break;case "splice":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===t?g:Math.min(c+(d[1]||0),g),t=c+t-2,G=Math.max(g,t),P=[],n=[],Q=2;c<G;++c,
++Q)c<g&&n.push(m("deleted",b[c],c)),c<t&&P.push(m("added",d[Q],c));a.a.dc(n,P);break;default:return}f=l}}}};var s=a.a.Yb("_state");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.pb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.l.oc(e);(g.S||g.s&&e.Qa())&&e.aa();return g.T}"object"===typeof b?d=b:(d=d||{},b&&(d.read=
b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={T:n,S:!0,Ra:!1,Fb:!1,R:!1,Va:!1,s:!1,jd:d.read,pb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,wa:d.disposeWhen||d.wa,mb:null,r:{},L:0,bc:null};e[s]=g;e.Vc="function"===typeof f;a.a.ka||a.a.extend(e,a.J.fn);a.J.fn.rb(e);a.a.Ya(e,z);d.pure?(g.Va=!0,g.s=!0,a.a.extend(e,$)):d.deferEvaluation&&a.a.extend(e,aa);a.options.deferUpdates&&a.ya.deferred(e,!0);g.i&&(g.Fb=!0,g.i.nodeType||
(g.i=null));g.s||d.deferEvaluation||e.aa();g.i&&e.ba()&&a.a.F.oa(g.i,g.mb=function(){e.k()});return e};var z={equalityComparer:J,Aa:function(){return this[s].L},Pb:function(a,c,d){if(this[s].Va&&c===this)throw Error("A 'pure' computed must not be called recursively");this[s].r[a]=d;d.Ga=this[s].L++;d.na=c.Na()},Qa:function(){var a,c,d=this[s].r;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],c.ia.Uc(c.na)))return!0},bd:function(){this.Fa&&!this[s].Ra&&this.Fa()},ba:function(){return this[s].S||0<this[s].L},
ld:function(){this.Mb||this.ac()},uc:function(a){if(a.cb&&!this[s].i){var c=a.X(this.bd,this,"dirty"),d=a.X(this.ld,this);return{ia:a,k:function(){c.k();d.k()}}}return a.X(this.ac,this)},ac:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].bc),this[s].bc=a.a.setTimeout(function(){b.aa(!0)},c)):b.Fa?b.Fa():b.aa(!0)},aa:function(b){var c=this[s],d=c.wa;if(!c.Ra&&!c.R){if(c.i&&!a.a.nb(c.i)||d&&d()){if(!c.Fb){this.k();return}}else c.Fb=!1;c.Ra=!0;try{this.Qc(b)}finally{c.Ra=!1}c.L||
this.k()}},Qc:function(b){var c=this[s],d=c.Va?n:!c.L,e={Hc:this,Ma:c.r,lb:c.L};a.l.Ub({Gc:e,gb:Y,m:this,Sa:d});c.r={};c.L=0;e=this.Pc(c,e);this.tb(c.T,e)&&(c.s||this.notifySubscribers(c.T,"beforeChange"),c.T=e,c.s?this.zc():b&&this.notifySubscribers(c.T));d&&this.notifySubscribers(c.T,"awake")},Pc:function(b,c){try{var d=b.jd;return b.pb?d.call(b.pb):d()}finally{a.l.end(),c.lb&&!b.s&&a.a.D(c.Ma,X),b.S=!1}},t:function(){var a=this[s];(a.S&&!a.L||a.s&&this.Qa())&&this.aa();return a.T},Ta:function(b){a.J.fn.Ta.call(this,
b);this.Fa=function(){this.Kb(this[s].T);this[s].S=!0;this.Lb(this)}},k:function(){var b=this[s];!b.s&&b.r&&a.a.D(b.r,function(a,b){b.k&&b.k()});b.i&&b.mb&&a.a.F.pc(b.i,b.mb);b.r=null;b.L=0;b.R=!0;b.S=!1;b.s=!1;b.i=null}},$={sa:function(b){var c=this,d=c[s];if(!d.R&&d.s&&"change"==b){d.s=!1;if(d.S||c.Qa())d.r=null,d.L=0,d.S=!0,c.aa();else{var e=[];a.a.D(d.r,function(a,b){e[b.Ga]=a});a.a.q(e,function(a,b){var e=d.r[a],l=c.uc(e.ia);l.Ga=b;l.na=e.na;d.r[a]=l})}d.R||c.notifySubscribers(d.T,"awake")}},
Ia:function(b){var c=this[s];c.R||"change"!=b||this.Pa("change")||(a.a.D(c.r,function(a,b){b.k&&(c.r[a]={ia:b.ia,Ga:b.Ga,na:b.na},b.k())}),c.s=!0,this.notifySubscribers(n,"asleep"))},Na:function(){var b=this[s];b.s&&(b.S||this.Qa())&&this.aa();return a.J.fn.Na.call(this)}},aa={sa:function(a){"change"!=a&&"beforeChange"!=a||this.t()}};a.a.ka&&a.a.Xa(z,a.J.fn);var R=a.N.gd;a.m[R]=a.N;z[R]=a.m;a.Xc=function(b){return a.Oa(b,a.m)};a.Yc=function(b){return a.Oa(b,a.m)&&b[s]&&b[s].Va};a.b("computed",a.m);
a.b("dependentObservable",a.m);a.b("isComputed",a.Xc);a.b("isPureComputed",a.Yc);a.b("computed.fn",z);a.G(z,"peek",z.t);a.G(z,"dispose",z.k);a.G(z,"isActive",z.ba);a.G(z,"getDependenciesCount",z.Aa);a.nc=function(b,c){if("function"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b("pureComputed",a.nc);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof
Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};g.save(a,k);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var h=g.get(d);k[c]=h!==n?h:b(d,f,g)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.Ib=[]}a.wc=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
return b(c,function(b){for(var c=0;a.H(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.wc(b);return a.a.Eb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,b);0<=d?this.Ib[d]=c:(this.keys.push(b),this.Ib.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Ib[b]:n}}})();a.b("toJS",a.wc);a.b("toJSON",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.xb):7>=a.a.C?b.getAttributeNode("value")&&
b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ha:function(b,c,d){switch(a.a.A(b)){case "option":switch(typeof c){case "string":a.a.e.set(b,a.d.options.xb,n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.xb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||
null===c)c=n;for(var e=-1,f=0,g=b.options.length,k;f<g;++f)if(k=a.j.u(b.options[f]),k==c||""==k&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ha);a.h=function(){function b(b){b=a.a.$a(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,k=[],p=0;if(d){d.push(",");for(var A=0,y;y=d[A];++A){var t=y.charCodeAt(0);
if(44===t){if(0>=p){c.push(r&&k.length?{key:r,value:k.join("")}:{unknown:r||k.join("")});r=p=0;k=[];continue}}else if(58===t){if(!p&&!r&&1===k.length){r=k.pop();continue}}else 47===t&&A&&1<y.length?(t=d[A-1].match(f))&&!g[t[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(","),A=-1,y="/"):40===t||123===t||91===t?++p:41===t||125===t||93===t?--p:r||k.length||34!==t&&39!==t||(y=y.slice(1,-1));k.push(y)}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},k={};return{ta:[],ea:k,yb:b,Ua:function(e,m){function h(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,h)))return;if(l=k[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:m),l=m;l&&g.push("'"+b+"':function(_z){"+m+"=_z}")}p&&(e=
"function(){return "+e+" }");f.push("'"+b+"':"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y="string"===typeof e?b(e):e;a.a.q(y,function(a){h(a.key||a.unknown,a.value)});g.length&&h("_ko_property_writers","{"+g.join(",")+" }");return f.join(",")},ad:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ea:function(b,c,d,e,f){if(b&&a.H(b))!a.Ba(b)||f&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",
a.h.ta);a.b("expressionRewriting.parseObjectLiteral",a.h.yb);a.b("expressionRewriting.preProcessBindings",a.h.Ua);a.b("expressionRewriting._twoWayBindings",a.h.ea);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ua);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);
b(e)&&f++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=u&&"\x3c!--test--\x3e"===u.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.f={Z:{},childNodes:function(a){return b(a)?d(a):a.childNodes},xa:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=
0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.ob(c)},da:function(c,d){if(b(c)){a.f.xa(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.da(c,d)},mc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},gc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.mc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||
c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Tc:b,pd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},kc:function(d){if(l[a.a.A(d)]){var h=d.firstChild;if(h){do if(1===h.nodeType){var f;f=h.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var k=e(f,!0);k?f=k:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=h.nextSibling,k=0;k<f.length;k++)g?d.insertBefore(f[k],
g):d.appendChild(f[k])}while(h=h.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.Z);a.b("virtualElements.emptyNode",a.f.xa);a.b("virtualElements.insertAfter",a.f.gc);a.b("virtualElements.prepend",a.f.mc);a.b("virtualElements.setDomNodeChildren",a.f.da);(function(){a.Q=function(){this.Fc={}};a.a.extend(a.Q.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.Tc(b);
default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Ob(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Ob(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.pd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Fc,g=b+(e&&e.valueAccessors||
""),k;if(!(k=f[g])){var l,m="with($context){with($data||{}){return{"+a.h.Ua(b,e)+"}}}";l=new Function("$context","$element",m);k=f[g]=l}return k(c,d)}catch(h){throw h.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+h.message,h;}}});a.Q.instance=new a.Q})();a.b("bindingProvider",a.Q);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ca(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,h){return"function"===
typeof c?d(c.bind(null,e,h)):a.a.Ca(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,h=a.f.firstChild(c),f=a.Q.instance,m=f.preprocessNode;if(m){for(;e=h;)h=a.f.nextSibling(e),m.call(f,e);h=a.f.firstChild(c)}for(;e=h;)h=a.f.nextSibling(e),k(b,e,d)}function k(b,c,d){var e=!0,h=1===c.nodeType;h&&a.f.kc(c);if(h&&d||a.Q.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!h)}function l(b){var c=[],d={},e=[];a.a.D(b,function Z(h){if(!d[h]){var f=
a.getBindingHandler(h);f&&(f.after&&(e.push(h),a.a.q(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));Z(c)}}),e.length--),c.push({key:h,fc:f}));d[h]=!0}});return c}function m(b,d,e,h){var m=a.a.e.get(b,q);if(!d){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&h&&a.tc(b,e);var g;if(d&&"function"!==typeof d)g=d;else{var k=a.Q.instance,r=k.getBindingAccessors||
f,p=a.B(function(){(g=d?d(e,b):r.call(k,b,e))&&e.P&&e.P();return g},null,{i:b});g&&p.ba()||(p=null)}var u;if(g){var v=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},s=function(){return a.a.Ca(p?p():g,c)};s.get=function(a){return g[a]&&c(v(a))};s.has=function(a){return a in g};h=l(g);a.a.q(h,function(c){var d=c.fc.init,h=c.fc.update,f=c.key;if(8===b.nodeType&&!a.f.Z[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.l.w(function(){var a=
d(b,v(f),s,e.$data,e);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof h&&a.B(function(){h(b,v(f),s,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===n}}function h(b){return b&&b instanceof a.U?b:new a.U(b)}
a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.U=function(b,c,d,e){var h=this,f="function"==typeof b&&!a.H(b),m,g=a.B(function(){var m=f?b():b,l=a.a.c(m);c?(c.P&&c.P(),a.a.extend(h,c),g&&(h.P=g)):(h.$parents=[],h.$root=l,h.ko=a);h.$rawData=m;h.$data=l;d&&(h[d]=l);e&&e(h,c,l);return h.$data},null,{wa:function(){return m&&!a.a.Qb(m)},i:!0});g.ba()&&(h.P=g,g.equalityComparer=null,m=[],g.Ac=function(b){m.push(b);a.a.F.oa(b,function(b){a.a.La(m,b);m.length||
(g.k(),h.P=g=n)})})};a.U.prototype.createChildContext=function(b,c,d){return new a.U(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.U.prototype.extend=function(b){return new a.U(this.P||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.e.I(),p=a.a.e.I();a.tc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.P&&c.P.Ac(b);else return a.a.e.get(b,
p)};a.Ja=function(b,c,d){1===b.nodeType&&a.f.kc(b);return m(b,c,h(d),!0)};a.Dc=function(b,c,d){d=h(d);return a.Ja(b,e(c,d,b),d)};a.eb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(h(a),b,!0)};a.Rb=function(a,b){!v&&x.jQuery&&(v=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||x.document.body;k(h(a),b,!0)};a.kb=function(b){switch(b.nodeType){case 1:case 8:var c=a.tc(b);if(c)return c;
if(b.parentNode)return a.kb(b.parentNode)}return n};a.Jc=function(b){return(b=a.kb(b))?b.$data:n};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Rb);a.b("applyBindingsToDescendants",a.eb);a.b("applyBindingAccessorsToNode",a.Ja);a.b("applyBindingsToNode",a.Dc);a.b("contextFor",a.kb);a.b("dataFor",a.Jc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,h;m?m.X(e):(m=f[c]=new a.J,m.X(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Zc:e};delete f[c];h||e?m.notifySubscribers(b):
a.Y.Wa(function(){m.notifySubscribers(b)})}),h=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,h){h||(h=a.g.loaders.slice(0));var g=h.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,h)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,h)}else f(null)}
var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.Zc?a.l.w(function(){e(f.definition)}):a.Y.Wa(function(){e(f.definition)}):c(d,e)},Xb:function(a){delete g[a]},Jb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.Xb)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(k)}var k={},y=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.Jb("loadTemplate",[b,c],function(a){k.template=a;g()})}):g();d?f(c,d,function(c){a.g.Jb("loadViewModel",
[b,c],function(a){k[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.A(b)){case "script":return a.a.ma(b.text);case "textarea":return a.a.ma(b.value);case "template":if(e(b.content))return a.a.ua(b.content.childNodes)}return a.a.ua(b.childNodes)}function e(a){return x.DocumentFragment?
a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||x.require?(O||x.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var k={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.ub(b))throw Error("Component "+b+" is already registered");k[b]=c};a.g.ub=function(a){return k.hasOwnProperty(a)};a.g.od=function(b){delete k[b];
a.g.Xb(b)};a.g.Zb={getConfig:function(a,b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ma(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.V(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var l=u.getElementById(c);l?f(d(l)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.ub);a.b("components.unregister",a.g.od);a.b("components.defaultLoader",a.g.Zb);a.g.loaders.push(a.g.Zb);a.g.Bc=k})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ca(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ca(f,function(c){var e=
c.t();return c.ba()?a.m({read:function(){return a.a.c(c())},write:a.Ba(e)&&function(a){c()(a)},i:b}):e});g.hasOwnProperty("$raw")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.ub(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.C&&b.tagName===c))return c};a.g.Ob=function(c,e,f,g){if(1===e.nodeType){var k=a.g.getComponentNameForNode(e);if(k){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var l={name:k,params:b(e,f)};c.component=g?function(){return l}:l}}return c};var c=new a.Q;9>a.a.C&&(a.g.register=function(a){return function(b){u.createElement(b);return a.apply(this,arguments)}}(a.g.register),u.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Bc,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(u.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.ua(c);a.f.da(d,b)}
function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,k,l,m){function h(){var a=r&&r.dispose;"function"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.V(a.f.childNodes(f));a.a.F.oa(f,h);a.m(function(){var l=a.a.c(g()),k,t;"string"===typeof l?k=l:(k=a.a.c(l.name),t=a.a.c(l.params));if(!k)throw Error("No component name specified");var n=q=++e;a.g.get(k,function(e){if(q===n){h();if(!e)throw Error("Unknown component '"+k+
"'");c(k,e,f);var g=d(e,f,p,t);e=m.createChildContext(g,b,function(a){a.$component=g;a.$componentTemplateNodes=p});r=g;a.eb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.Z.component=!0})();var S={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in S?(c=S[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());"name"===c&&a.a.rc(b,
g?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=p?g():e;if(!a.va.Sa()&&(!l||e)){var m=a.l.w(c);if(h){var k=r?m.t():m;q!==f?(e&&(a.a.pa(k,f,!0),a.a.pa(k,q,!1)),q=f):a.a.pa(k,f,e);r&&a.Ba(m)&&m(k)}else a.h.Ea(m,d,"checked",f,!0)}}function f(){var d=a.a.c(c());b.checked=h?0<=a.a.o(d,g()):k?d:g()===d}var g=a.nc(function(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):d.has("value")?a.a.c(d.get("value")):b.value}),k=
"checkbox"==b.type,l="radio"==b.type;if(k||l){var m=c(),h=k&&a.a.c(m)instanceof Array,r=!(h&&m.push&&m.splice),q=h?g():n,p=l||h;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.p(b,"click",e);a.m(f,null,{i:b});m=n}}};a.h.ea.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.bb(b,c,d)}):(d=a.a.$a(String(d||"")),a.a.bb(b,b.__ko__cssValue,
!1),b.__ko__cssValue=d,a.a.bb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){"string"==typeof g&&a.a.p(b,g,function(b){var m,h=c()[g];if(h){try{var r=a.a.V(arguments);e=f.$data;r.unshift(e);m=h.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():
b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={ic:function(b){return function(){var c=b(),d=a.a.zb(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.W.sb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.W.sb}}},init:function(b,c){return a.d.template.init(b,
a.d.foreach.ic(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.ic(c),d,e,f)}};a.h.ta.foreach=!1;a.f.Z.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=c();a.h.Ea(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.p(b,"focus",f);a.a.p(b,"focusin",f);a.a.p(b,"blur",g);a.a.p(b,
"focusout",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Da,null,[b,d?"focusin":"focusout"]))}};a.h.ea.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ea.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Cb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,c){return a.createChildContext(c)});var L={};
a.d.options={init:function(b){if("select"!==a.a.A(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ka(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(A&&h)a.j.ha(b,a.a.c(d.get("value")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.sc(e[0],f);A&&!f&&a.l.w(a.a.Da,null,[b,
"change"])}}var k=b.multiple,l=0!=b.length&&k?b.scrollTop:null,m=a.a.c(c()),h=d.get("valueAllowUnset")&&d.has("value"),r=d.get("optionsIncludeDestroyed");c={};var q,p=[];h||(k?p=a.a.fb(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&("undefined"==typeof m.length&&(m=[m]),q=a.a.Ka(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(m=a.a.c(d.get("optionsCaption")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};
m=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(m=function(b,c){g(0,c);a.l.w(d.get("optionsAfterRender"),null,[c[0],b!==L?b:n])});a.a.Bb(b,q,function(c,e,g){g.length&&(p=!h&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement("option");c===L?(a.a.Za(e,d.get("optionsCaption")),a.j.ha(e,n)):(g=f(c,d.get("optionsValue"),c),a.j.ha(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Za(e,c));return[e]},c,m);a.l.w(function(){h?a.j.ha(b,a.a.c(d.get("value")),
!0):(k?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.a.Da(b,"change")});a.a.Nc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.xb=a.a.e.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.p(b,"change",function(){var e=c(),f=[];a.a.q(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ea(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=
a.a.A(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.q(b.getElementsByTagName("option"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.sc(b,c)});b.scrollTop=e}};a.h.ea.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.p(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Za(b,c())}};a.f.Z.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(d.match(/Firefox\/([^ ]*)/));
if(10>a.a.C)var g=a.a.e.I(),k=a.a.e.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.p(d,"selectionchange",l));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.p(b,c,d)}function k(){var c=a.a.c(d());if(null===c||c===n)c="";v!==n&&c===v?a.a.setTimeout(k,4):b.value!==c&&(u=c,b.value=c)}function y(){s||(v=b.value,s=a.a.setTimeout(t,4))}function t(){clearTimeout(s);v=s=n;var c=
b.value;u!==c&&(u=c,a.h.Ea(d(),g,"textInput",c))}var u=b.value,s,v,x=9==a.a.C?y:t;10>a.a.C?(l("propertychange",function(a){"value"===a.propertyName&&x(a)}),8==a.a.C&&(l("keyup",t),l("keydown",t)),8<=a.a.C&&(m(b,x),l("dragend",y))):(l("input",t),5>e&&"textarea"===a.a.A(b)?(l("keydown",y),l("paste",y),l("cut",y)):11>c?l("keydown",y):4>f&&(l("DOMAutoComplete",t),l("dragdrop",t),l("drop",t)));l("change",t);a.m(k,null,{i:b})}};a.h.ea.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",
a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ic;a.a.rc(b,d)}}};a.d.uniqueName.Ic=0;a.d.value={after:["options","foreach"],init:function(b,c,d){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=d.get("valueUpdate"),g=!1,k=null;f&&("string"==typeof f&&(f=[f]),a.a.ra(e,f),e=a.a.Tb(e));var l=function(){k=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ea(e,d,"value",f)};!a.a.C||"input"!=b.tagName.toLowerCase()||"text"!=b.type||
"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.o(e,"propertychange")||(a.a.p(b,"propertychange",function(){g=!0}),a.a.p(b,"focus",function(){g=!1}),a.a.p(b,"blur",function(){g&&l()}));a.a.q(e,function(c){var d=l;a.a.nd(c,"after")&&(d=function(){k=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.p(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==k&&e===k)a.a.setTimeout(m,0);else if(e!==f)if("select"===a.a.A(b)){var g=d.get("valueAllowUnset"),f=function(){a.j.ha(b,
e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Da,null,[b,"change"])}else a.j.ha(b,e)};a.m(m,null,{i:b})}else a.Ja(b,{checkedValue:c})},update:function(){}};a.h.ea.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.O=function(){};a.O.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.O.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.O.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||u;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.qa(b);throw Error("Unknown template type: "+b);};a.O.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,c,d,e)};a.O.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.O.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.O);a.Gb=function(){function b(b,c,d,k){b=a.h.yb(b);for(var l=a.h.ta,m=0;m<b.length;m++){var h=b[m].key;if(l.hasOwnProperty(h)){var r=l[h];if("function"===typeof r){if(h=
r(b[m].value))throw Error(h);}else if(!r)throw Error("This template engine does not support the '"+h+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ua(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Oc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Gb.dd(b,c)},d)},dd:function(a,f){return a.replace(c,function(a,c,d,e,h){return b(h,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},Ec:function(b,c){return a.M.wb(function(d,k){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.Ja(l,b,k)})}}}();a.b("__tr_ambtns",a.Gb.Ec);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&
b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.n[b];var c=arguments[0];"innerHTML"===b?a.a.Cb(this.n,c):this.n[b]=c};var b=a.a.e.I()+"_";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.I();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).jb||(3===this.ab?
b.content:4===this.ab?b:n);a.a.e.set(b,c,{jb:arguments[0]})};a.v.qa=function(a){this.n=a};a.v.qa.prototype=new a.v.n;a.v.qa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Hb===n&&b.jb&&(b.Hb=b.jb.innerHTML);return b.Hb}a.a.e.set(this.n,c,{Hb:arguments[0]})};a.b("templateSources",a.v);a.b("templateSources.domElement",a.v.n);a.b("templateSources.anonymousTemplate",a.v.qa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),
d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,k=a.Q.instance,n=k.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.za(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Rb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.M.yc(b,[d])});a.a.za(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,
e,f,k,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;a.Gb.Oc(f,n,p);f=n.renderTemplate(f,k,q,p);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(e){case "replaceChildren":a.f.da(b,f);p=!0;break;case "replaceNode":a.a.qc(b,f);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}p&&(c(f,k),q.afterRender&&a.l.w(q.afterRender,null,[f,k.$data]));
return f}function f(b,c,d){return a.H(b)?b():"function"===typeof b?b(c,d):b}var g;a.Db=function(b){if(b!=n&&!(b instanceof a.O))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ab=function(b,c,h,k,q){h=h||{};if((h.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(k){var p=d(k);return a.B(function(){var g=c&&c instanceof a.U?c:new a.U(a.a.c(c)),n=f(b,g.$data,g),g=e(k,q,n,g,h);"replaceNode"==q&&(k=g,p=d(k))},null,
{wa:function(){return!p||!a.a.nb(p)},i:p&&"replaceNode"==q?p.parentNode:p})}return a.M.wb(function(d){a.Ab(b,c,h,d,"replaceNode")})};a.kd=function(b,d,g,k,q){function p(a,b){c(b,s);g.afterRender&&g.afterRender(b,a);s=null}function u(a,c){s=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,s);return e(null,"ignoreTargetNode",d,s,g)}var s;return a.B(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Ka(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});
a.l.w(a.a.Bb,null,[k,b,u,g,p])},null,{i:k})};var k=a.a.e.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.f.xa(b);else{if("nodes"in d){if(d=d.nodes||[],a.H(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.jc(d);(new a.v.qa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c(),s;c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in
c&&(d=!a.a.c(c.ifnot)),s=a.a.c(c.data));"foreach"in c?e=a.kd(g||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(s,c.as):f,e=a.Ab(g||b,f,c,b)):a.f.xa(b);f=e;(s=a.a.e.get(b,k))&&"function"==typeof s.k&&s.k();a.a.e.set(b,k,f&&f.ba()?f:n)}};a.h.ta.template=function(b){b=a.h.yb(b);return 1==b.length&&b[0].unknown||a.h.ad(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.Z.template=!0})();a.b("setTemplateEngine",a.Db);a.b("renderTemplate",
a.Ab);a.a.dc=function(a,c,d){if(a.length&&c.length){var e,f,g,k,l;for(e=f=0;(!d||e<d)&&(k=a[f]);++f){for(g=0;l=c[g];++g)if(k.value===l.value){k.moved=l.index;l.moved=k.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.ib=function(){function b(b,d,e,f,g){var k=Math.min,l=Math.max,m=[],h,n=b.length,q,p=d.length,s=p-n||1,u=n+p+1,t,v,x;for(h=0;h<=n;h++)for(v=t,m.push(t=[]),x=k(p,h+s),q=l(0,h-1);q<=x;q++)t[q]=q?h?b[h-1]===d[q-1]?v[q-1]:k(v[q]||u,t[q-1]||u)+1:q+1:h+1;k=[];l=[];s=[];h=n;for(q=p;h||q;)p=m[h][q]-
1,q&&p===m[h][q-1]?l.push(k[k.length]={status:e,value:d[--q],index:q}):h&&p===m[h-1][q]?s.push(k[k.length]={status:f,value:b[--h],index:h}):(--q,--h,g.sparse||k.push({status:"retained",value:d[q]}));a.a.dc(s,l,!g.dontLimitMoves&&10*n);return k.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ib);(function(){function b(b,c,d,k,l){var m=[],
h=a.B(function(){var h=c(d,l,a.a.za(m,b))||[];0<m.length&&(a.a.qc(m,h),k&&a.l.w(k,null,[d,h,l]));m.length=0;a.a.ra(m,h)},null,{i:b,wa:function(){return!a.a.Qb(m)}});return{ca:m,B:h.ba()?h:n}}var c=a.a.e.I(),d=a.a.e.I();a.a.Bb=function(e,f,g,k,l){function m(b,c){w=q[c];v!==c&&(D[b]=w);w.qb(v++);a.a.za(w.ca,e);u.push(w);z.push(w)}function h(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.q(c[d].ca,function(a){b(a,d,c[d].ja)})}f=f||[];k=k||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.fb(q,
function(a){return a.ja}),s=a.a.ib(p,f,k.dontLimitMoves),u=[],t=0,v=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case "deleted":E===n&&(w=q[t],w.B&&(w.B.k(),w.B=n),a.a.za(w.ca,e).length&&(k.beforeRemove&&(u.push(w),z.push(w),w.ja===d?w=null:f[C]=w),w&&x.push.apply(x,w.ca)));t++;break;case "retained":m(C,t++);break;case "added":E!==n?m(C,E):(w={ja:B.value,qb:a.N(v++)},u.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,u);h(k.beforeMove,D);a.a.q(x,k.beforeRemove?a.$:
a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ca||a.a.extend(w,b(e,g,w.ja,l,w.qb));for(t=0;s=w.ca[t];r=s.nextSibling,F=s,t++)s!==r&&a.f.gc(e,s,F);!w.Wc&&l&&(l(w.ja,w.ca,w.qb),w.Wc=!0)}h(k.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ja=d);h(k.afterMove,D);h(k.afterAdd,p)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Bb);a.W=function(){this.allowTemplateRewriting=!1};a.W.prototype=new a.O;a.W.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?
b.nodes():null)return a.a.V(c.cloneNode(!0).childNodes);b=b.text();return a.a.ma(b,e)};a.W.sb=new a.W;a.Db(a.W.sb);a.b("nativeTemplateEngine",a.W);(function(){a.vb=function(){var a=this.$c=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||u;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var k=b.data("precompiled");
k||(k=b.text()||"",k=v.template(null,"{{ko_with $item.koBindingContext}}"+k+"{{/ko_with}}"),b.data("precompiled",k));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(k,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){u.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},
v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.vb.prototype=new a.O;var b=new a.vb;0<b.$c&&a.Db(b);a.b("jqueryTmplTemplateEngine",a.vb)})()})})();})();

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

  QuickScript.install = function(scope) {
    var cns, i, install_class, j, len, len1, name, others, results;
    cns = ['Application', 'View', 'Model', 'FileModel', 'Collection', 'ViewCollection', 'Host', 'ModelAdapter', 'AccountAdapter', 'LocalStore'];
    others = ['PageTimer', 'Notifier', 'AuthToken', 'TimeLength', 'SelectOpts', 'SupportManager', 'AssetsLibrary'];
    install_class = function(name) {
      return scope[name] = QuickScript[name];
    };
    for (i = 0, len = cns.length; i < len; i++) {
      name = cns[i];
      install_class(name);
    }
    results = [];
    for (j = 0, len1 = others.length; j < len1; j++) {
      name = others[j];
      results.push(install_class(name));
    }
    return results;
  };

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
      return (obj != null) && (obj.constructor === Object);
    },
    isArray: function(obj) {
      return obj instanceof Array;
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
      if (opts == null) {
        opts = {};
      }
      type || (type = 'absolute');
      coords = null;
      if (type === 'document') {
        coords = {
          x: ev.originalEvent.pageX,
          y: ev.originalEvent.pageY
        };
        return coords;
      }
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
    elementWithinBounds: function(elem, bounds, opts) {
      var $el, db, dt, eb, et, rect;
      if (opts == null) {
        opts = {};
      }
      opts.full || (opts.full = false);
      $el = $(elem);
      dt = bounds.scrollTop;
      db = dt + bounds.height;
      rect = QS.utils.getElementPosition(elem);
      et = rect.top;
      eb = et + rect.height;
      if (opts.full) {
        return (eb <= db) && (et >= dt);
      } else {
        return (et > dt && et < db) || (eb < db && eb > dt);
      }
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
    toggle: function(obs) {
      return obs(!obs());
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
          allowArrays: false
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
    },
    cloneObject: function(obj) {
      if (obj instanceof Array) {
        return obj.slice(0);
      } else if ((obj != null) && typeof obj === 'object') {
        return $.extend({}, obj);
      } else {
        return obj;
      }
    },
    registerTemplate: function(templateName, templateMarkup) {
      window.JST || (window.JST = {});
      return window.JST[templateName] = function() {
        return templateMarkup;
      };
    },
    pendingStyles: [],
    registerStyle: function(styleMarkup) {
      return QS.utils.pendingStyles.push(styleMarkup);
    },
    updateStyles: function() {
      var $style;
      $style = $('style[id=qs]');
      if ($style.length === 0) {
        $('head').append("<style id='qs'>" + (QS.utils.pendingStyles.join("\n")) + "</style>");
      } else {
        if (QS.utils.pendingStyles.length > 0) {
          $style.append(QS.utils.pendingStyles.join("\n"));
        }
      }
      return QS.utils.pendingStyles = [];
    }
  };

  QuickScript.utils.addTemplate = QuickScript.utils.registerTemplate;

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
    self.prototype.trigger = function(ev, data, topts) {
      var cbs, k, l, len, len1, opts, rems, results;
      if (topts == null) {
        topts = {};
      }
      QS.log("EVENTABLE::TRIGGER : " + ev, 5);
      this._events || (this._events = {});
      cbs = this._events[ev] || [];
      rems = [];
      for (k = 0, len = cbs.length; k < len; k++) {
        opts = cbs[k];
        opts.callback(data, topts);
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

  QuickScript.STATES = {};

  QuickScript.STATES.READY = 1;

  QuickScript.STATES.LOADING = 2;

  QuickScript.STATES.SAVING = 3;

  QuickScript.STATES.EDITING = 4;

  QuickScript.STATES.INSERTING = 5;

  QuickScript.STATES.APPENDING = 6;

  QuickScript.STATES.UPDATING = 7;

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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

  Array.prototype.clone = function() {
    return this.slice(0);
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
          runNow: false
        };
      }
      if (this.t_id !== -1) {
        return;
      }
      this.t_id = setInterval(this.callback, this.frequency);
      if (opts.run_now === true || opts.runNow === true) {
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
    function AuthToken(data1) {
      var key, ref, val;
      this.data = data1;
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
      var aval, data, first, j, key, len, ref, ref1, ref2, req, url, val;
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
            for (j = 0, len = val.length; j < len; j++) {
              aval = val[j];
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
      var aval, data_s, j, key, len, ref, ref1, req, url, val;
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
          for (j = 0, len = val.length; j < len; j++) {
            aval = val[j];
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
  QuickScript.initKO = function() {
    var JSTTemplateSource, templateEngine;
    ko.punches.enableAll();
    ko.subscribable.fn.present = function() {
      return QS.utils.isPresent(this());
    };
    ko.subscribable.fn.blank = function() {
      return QS.utils.isBlank(this());
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
              $('head').append("<style>" + (config.style.replace("<name>", name)) + "</style>");
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
    QS.initKOUtils();
    QS.initKOBindings();
    return QS.initKOExtenders();
  };

}).call(this);

(function() {
  QuickScript.initKOUtils = function() {
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
        self.fields.pushOnce(field);
        return self.field_defaults[field] = val;
      }
    };
    ko.addComputed = function(field, fn_opts, self) {
      var c, opts;
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
      c = self[field] = ko.computed(opts, self);
      if (typeof self.disposeLater === "function") {
        self.disposeLater(c);
      }
      return c;
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
        self[field] = new model({}, null, {
          parentModel: self
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
      return QS.utils.addTemplate(templateName, templateMarkup);
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

(function() {
  QuickScript.initKOBindings = function() {
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
      update: function(element, valueAccessor, allBindings) {
        var shouldDisplay, speed;
        shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
        speed = allBindings.get('slideVisibleSpeed') || 'fast';
        if (shouldDisplay) {
          return $(element).slideDown(speed);
        } else {
          return $(element).slideUp(speed);
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
        var $el, html, loading_obs, loading_text, new_context, sub;
        $el = $(element);
        loading_obs = ko.observable(false);
        loading_text = allBindings.get('loadingText') || '';
        new_context = bindingContext.extend({
          '$loadingObservable': loading_obs
        });
        html = "{{#if : $loadingObservable }}\n<i class='" + ko.bindingHandlers.loading.icon_class + "'/> " + loading_text + "\n{{/if }}\n{{#ifnot : $loadingObservable }}\n" + ($el.html()) + "\n{{/ifnot }}";
        $el.html(html);
        ko.applyBindingsToDescendants(new_context, element);
        sub = ko.computed(function() {
          var bnd_dis, is_loading, should_disable;
          is_loading = ko.unwrap(valueAccessor());
          bnd_dis = allBindings.get('disable');
          should_disable = (bnd_dis != null) && ko.unwrap(bnd_dis);
          new_context.$loadingObservable(is_loading);
          if (is_loading) {
            return $el.attr('disabled', 'true');
          } else if (!should_disable) {
            return $el.removeAttr('disabled');
          }
        });
        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          return sub.dispose();
        });
        return {
          controlsDescendantBindings: true
        };
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
            if (action != null) {
              action.call(viewModel);
            }
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
        return model.selectFile = model.input.selectFile = function() {
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
        return model.selectFile = model.promptFile = function() {
          return $(element).click();
        };
      }
    };
    ko.bindingHandlers.fileselect = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var $el, handler, name;
        handler = valueAccessor();
        $el = $(element);
        name = $el.attr('name');
        $el.change(function(ev) {
          var files;
          files = ev.target.files;
          return handler(files, {
            event: ev,
            view: viewModel,
            element: element
          });
        });
        viewModel.file_inputs || (viewModel.file_inputs = {});
        viewModel.file_inputs[name] = {
          element: element,
          promptFile: function() {
            return $el.click();
          }
        };
        return ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          if (viewModel.file_inputs != null) {
            return viewModel.file_inputs[name] = null;
          }
        });
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
          if ((dest.input != null) && (dest.input.files != null)) {
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
    ko.bindingHandlers.app = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var new_context, orig_child_fn;
        bindingContext['$app'] = viewModel;
        bindingContext['$view'] = viewModel;
        orig_child_fn = bindingContext.constructor.prototype['createChildContext'];
        bindingContext.constructor.prototype['createChildContext'] = function() {
          var ctx, view;
          ctx = orig_child_fn.apply(this, arguments);
          if (arguments[0] instanceof QS.View) {
            view = arguments[0];
            ctx['$view'] = view;
            if (view.bindingContextVariable != null) {
              ctx[view.bindingContextVariable] = view;
            }
          }
          return ctx;
        };
        new_context = bindingContext.extend({});
        viewModel.bindingContext = bindingContext;
        ko.applyBindingsToDescendants(new_context, element);
        return {
          controlsDescendantBindings: true
        };
      }
    };
    return ko.bindingHandlers.onScrollVisible = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var bounds, bounds_sub, check_if_visible, fn;
        fn = valueAccessor();
        bounds = bindingsAccessor.get('scrollVisibleBounds') || bindingContext['$app'].window_bounds;
        bounds_sub = null;
        check_if_visible = function(val) {
          if ((val != null) && viewModel.is_scrolled_visible !== true && QS.utils.elementWithinBounds(element, val)) {
            fn(viewModel);
            return viewModel.is_scrolled_visible = true;
          }
        };
        bounds_sub = bounds.subscribe(check_if_visible);
        check_if_visible(bounds());
        return ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          if (bounds_sub == null) {
            return bounds_sub.dispose();
          }
        });
      }
    };
  };

}).call(this);

(function() {
  QuickScript.initKOExtenders = function() {
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
      target.moment = function() {
        return moment.unix(target());
      };
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
    return ko.extenders.bool = function(target) {
      target.toggle = function() {
        return target(!target());
      };
      return target;
    };
  };

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

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
      this.field_defaults = {};
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
        if (opts.parentModel != null) {
          this.parent_model = opts.parentModel;
          this.is_submodel = true;
        }
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

    Model.prototype.load = function(data, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      if (opts.includes != null) {
        data.includes = opts.includes;
      }
      if (opts.enhances != null) {
        data.enhances = opts.enhances;
      }
      this.adapter.load({
        data: data,
        success: (function(_this) {
          return function(resp) {
            var ret_data;
            ret_data = opts.fields != null ? ko.copyObject(resp.data, opts.fields) : resp.data;
            _this.handleData(ret_data);
            return typeof opts.callback === "function" ? opts.callback(resp) : void 0;
          };
        })(this)
      });
      return this.model_state(ko.modelStates.LOADING);
    };

    Model.prototype.reloadFields = function(fields, opts) {
      var data;
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      data = this.reloadOpts();
      opts.fields = fields;
      return this.load(data, opts);
    };

    Model.prototype.reload = function(opts) {
      var data;
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      data = this.reloadOpts();
      if (opts.data != null) {
        $.extend(data, opts.data);
      }
      return this.load(data, opts);
    };

    Model.prototype.reloadOpts = function() {
      return {
        id: this.id()
      };
    };

    Model.prototype.save = function(fields, opts) {
      var data;
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      QS.log("Saving fields " + fields);
      if (this.model_state() !== ko.modelStates.READY) {
        QS.log("Save postponed.");
        return;
      }
      if (fields instanceof Array) {
        data = this.toAPI(fields);
      } else {
        data = fields;
      }
      if (opts.data != null) {
        $.extend(data, opts.data);
      }
      data.id = this.id();
      this.adapter.save({
        data: data,
        loading: opts.loading,
        progress: (function(_this) {
          return function(ev, prog) {
            return _this.save_progress(prog);
          };
        })(this),
        callback: (function(_this) {
          return function(resp, status) {
            _this.handleData(resp.data);
            return typeof opts.callback === "function" ? opts.callback(resp, status) : void 0;
          };
        })(this)
      });
      return this.model_state(ko.modelStates.SAVING);
    };

    Model.prototype.reset = function() {
      this.resetFields();
      this.save_progress(0);
      return this.model_state(ko.modelStates.READY);
    };

    Model.prototype.resetFields = function(fields) {
      var field, i, len, prop;
      fields || (fields = this.fields);
      for (i = 0, len = fields.length; i < len; i++) {
        field = fields[i];
        prop = this[field];
        if (prop.reset != null) {
          prop.reset();
        } else {
          prop(this.field_defaults[field]);
        }
      }
      return this.db_state(this.toJS());
    };

    Model.prototype.resetAuxillaryFields = function() {
      var fields;
      fields = this.fields.filter(function(f) {
        return f !== 'id';
      });
      return this.resetFields(fields);
    };

    Model.prototype["delete"] = function(fields, opts) {
      var data;
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      fields || (fields = ['id']);
      if (this.model_state() !== ko.modelStates.READY) {
        QS.log("Delete postponed.");
        return;
      }
      data = this.toJS(fields);
      data.id = this.id();
      this.adapter["delete"]({
        data: data,
        success: (function(_this) {
          return function(resp) {
            _this.handleData(resp.data);
            if (_this.collection != null) {
              _this.collection.handleItemDelete(resp.data);
            }
            return typeof opts.callback === "function" ? opts.callback(resp) : void 0;
          };
        })(this),
        error: (function(_this) {
          return function(resp) {
            QS.log("Delete error encountered");
            _this.model_state(ko.modelStates.READY);
            return typeof opts.callback === "function" ? opts.callback(resp) : void 0;
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
      var i, k, len, obj, prop, sub_flds;
      flds || (flds = this.fields);
      obj = {};
      for (i = 0, len = flds.length; i < len; i++) {
        prop = flds[i];
        if (typeof prop === 'object') {
          for (k in prop) {
            sub_flds = prop[k];
            if (this[k] != null) {
              if (typeof this[k].toJS === 'function') {
                obj[k] = this[k].toJS(sub_flds);
              } else {
                obj[k] = QS.utils.cloneObject(this[k]());
              }
            }
          }
        } else if (typeof this[prop].toJS === 'function') {
          obj[prop] = this[prop].toJS();
        } else {
          obj[prop] = QS.utils.cloneObject(this[prop]());
        }
      }
      return obj;
    };

    Model.prototype.toAPI = function(flds) {
      var i, len, obj, prop, val;
      flds || (flds = this.fields);
      obj = {};
      for (i = 0, len = flds.length; i < len; i++) {
        prop = flds[i];
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
      return obj;
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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

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
      this.input.file = ko.pureComputed({
        read: function() {
          if (this.input.files().length > 0) {
            return this.input.files()[0];
          } else {
            return null;
          }
        },
        write: function(val) {
          if (val != null) {
            return this.input.files([val]);
          } else {
            return this.input.files([]);
          }
        },
        owner: this
      });
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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  QS.Collection = (function() {
    Collection.prototype.init = function() {};

    function Collection(opts) {
      this.toAPIParam = bind(this.toAPIParam, this);
      this.toAPI = bind(this.toAPI, this);
      this.toJSON = bind(this.toJSON, this);
      this.toJS = bind(this.toJS, this);
      this.absorb = bind(this.absorb, this);
      this.toClone = bind(this.toClone, this);
      this.length = bind(this.length, this);
      this.hasItems = bind(this.hasItems, this);
      this.toggleSort = bind(this.toggleSort, this);
      this.updateScope = bind(this.updateScope, this);
      this.updatePage = bind(this.updatePage, this);
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
      var gen_observable, key, val;
      this.opts = {};
      for (key in opts) {
        val = opts[key];
        this.opts[key] = val;
      }
      this.events = {};
      this._reqid = 0;
      this.items = ko.observableArray([]);
      this.scope = ko.observable(this.opts.scope || {});
      this.includes = ko.observable(this.opts.includes || []);
      this.enhances = ko.observable(this.opts.enhances || []);
      this.sort = ko.observable(this.opts.sort || "");
      this.page = ko.observable(1);
      this.limit = ko.observable(this.opts.limit || QS.Collection.DEFAULT_LIMIT);
      this.title = ko.observable(this.opts.title || 'Collection');
      this.count = ko.observable(0);
      this.pages_count = ko.observable(0);
      this.extra_params = ko.observable(this.opts.extra_params || {});
      this.model = this.opts.model || QS.Model;
      this.adapter = this.opts.adapter;
      this.adapter_endpoint = this.opts.adapter_endpoint || 'index';
      this.model_state = ko.observable(ko.modelStates.READY);
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
      gen_observable = (function(_this) {
        return function(state) {
          return ko.pureComputed({
            read: function() {
              return _this.model_state() === state;
            },
            write: function(val) {
              if (val === true) {
                return _this.model_state(state);
              } else {
                return _this.model_state(ko.modelStates.READY);
              }
            }
          });
        };
      })(this);
      this.is_loading = gen_observable(ko.modelStates.LOADING);
      this.is_appending = gen_observable(ko.modelStates.APPENDING);
      this.is_inserting = gen_observable(ko.modelStates.INSERTING);
      this.is_updating = ko.dependentObservable(function() {
        return this.model_state() !== ko.modelStates.READY;
      }, this);
      this.loadOptions = ko.dependentObservable(function() {
        opts = this.extra_params();
        opts['scope'] = this.scope();
        opts['includes'] = this.includes();
        opts['enhances'] = this.enhances();
        opts['sort'] = this.sort();
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
            if (resp.pages_count != null) {
              _this.pages_count(resp.pages_count);
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
      if (opts.includes != null) {
        this.includes(opts.includes);
      }
      if (opts.enhances != null) {
        this.enhances(opts.enhances);
      }
      if (opts.sort != null) {
        this.sort(opts.sort);
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
      var c_el, c_id, curr_a, curr_len, i, id_h, idx, item, itm, j, k, leftovers, len, len1, max_len, model, models, new_a, new_len, r_el, r_id, ref, same_itm;
      if (data == null) {
        return;
      }
      models = [];
      op || (op = QS.Collection.UPDATE);
      curr_a = this.items();
      id_h = {};
      for (i = 0, len = curr_a.length; i < len; i++) {
        itm = curr_a[i];
        id_h[itm.id()] = itm;
      }
      if (op === QS.Collection.UPDATE) {
        curr_len = this.items().length;
        new_a = data;
        new_len = data.length;
        max_len = Math.max(curr_len, new_len);
        if (max_len > 0) {
          for (idx = j = ref = max_len - 1; ref <= 0 ? j <= 0 : j >= 0; idx = ref <= 0 ? ++j : --j) {
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
          var k, len1, results;
          results = [];
          for (k = 0, len1 = data.length; k < len1; k++) {
            item = data[k];
            results.push(new this.model(item, this));
          }
          return results;
        }).call(this);
        this.items(models);
      } else {
        leftovers = [];
        for (idx = k = 0, len1 = data.length; k < len1; idx = ++k) {
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
          var filt, filt_fn, i, len, ret;
          ret = true;
          for (i = 0, len = fa.length; i < len; i++) {
            filt = fa[i];
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

    Collection.prototype.updatePage = function(val) {
      this.page(val);
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
      var i, idx, item, len, ref;
      idx = 0;
      ref = this.items();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
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

    Collection.prototype.toClone = function() {
      var clone;
      clone = new this.constructor;
      clone.absorb(this);
      return clone;
    };

    Collection.prototype.absorb = function(model) {
      this.reset();
      return this.handleData(model.toJS());
    };

    Collection.prototype.toJS = function(flds) {
      var i, item, len, objs, ref;
      objs = [];
      ref = this.items();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        objs.push(item.toJS(flds));
      }
      return objs;
    };

    Collection.prototype.toJSON = function(flds) {
      return JSON.stringify(this.toJS(flds));
    };

    Collection.prototype.toAPI = function() {
      var i, item, len, objs, ref;
      objs = [];
      ref = this.items();
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
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

  QS.Collection.DEFAULT_LIMIT = 100;

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

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
      this.addFields = bind(this.addFields, this);
      this.reload = bind(this.reload, this);
      this.disposeLater = bind(this.disposeLater, this);
      if (this.owner != null) {
        this.app = this.owner.app;
      }
      this.views = ko.observableArray([]);
      this.registered_views = {};
      this.views.name_map = {};
      this.events = {};
      this.opts || (this.opts = {});
      this.disposables = [];
      this.fields = [];
      this.field_defaults = {};
      if (this.opts.element != null) {
        this.element = this.opts.element;
      }
      this.templateID = this.templateID || this.opts.templateID || this.constructor.templateID;
      if (this.opts.name != null) {
        this.name = this.opts.name;
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
      var i, len, ref, view;
      ref = this.views();
      for (i = 0, len = ref.length; i < len; i++) {
        view = ref[i];
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
      var d, i, j, len, len1, ref, ref1, view;
      ref = this.views();
      for (i = 0, len = ref.length; i < len; i++) {
        view = ref[i];
        view.dispose();
      }
      ref1 = this.disposables;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        d = ref1[j];
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

    View.prototype.registerView = function(name, view_class, opts) {
      if (opts == null) {
        opts = {};
      }
      return this.registered_views[name] = {
        view_class: view_class,
        opts: opts
      };
    };

    View.prototype.addFields = function(fields, def) {
      return ko.addFields(fields, def, this);
    };

    View.prototype.addComputed = function(field, fn_opts) {
      return ko.addComputed(field, fn_opts, this);
    };

    View.prototype.subscribeTo = function() {
      var args, d, obs;
      obs = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      d = obs.subscribe.apply(obs, args);
      this.disposeLater(d);
      return d;
    };

    View.prototype.subscribeToEvent = function() {
      var args, d, pub;
      pub = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      d = pub.handle.apply(pub, args);
      this.disposeLater(d);
      return d;
    };

    View.prototype.viewCount = function() {
      return this.views().length;
    };

    View.prototype.viewList = function() {
      return this.views();
    };

    View.prototype.selectView = function(view_name) {
      var args, last_view, rvo, view;
      args = Array.prototype.slice.call(arguments);
      rvo = this.registered_views[view_name];
      if (rvo != null) {
        this.addView(view_name, rvo.view_class, rvo.opts);
        this.registered_views[view_name] = null;
      }
      last_view = this.view;
      view = this.views.name_map[view_name];
      if (last_view !== view) {
        if (last_view != null) {
          last_view.hide();
        }
        if (view != null) {
          return setTimeout((function(_this) {
            return function() {
              QS.log("View [" + view.name + "] selected.", 2);
              view.load.apply(view, args.slice(1));
              window.onbeforeunload = view.events.before_unload;
              view.show();
              _this.view = view;
              _this.prev_task(_this.task());
              return _this.task(view.name);
            };
          })(this), 50);
        } else {
          QS.log("Subview unselected in " + this.name + ".", 2);
          this.view = null;
          this.prev_task(this.task());
          return this.task(null);
        }
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
      var i, len, obj, prop, val;
      flds || (flds = this.fields);
      obj = {};
      for (i = 0, len = flds.length; i < len; i++) {
        prop = flds[i];
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

  QS.View.registerTemplate = function(name, template_opts, view_class) {
    view_class || (view_class = this);
    QS.utils.addTemplate(name, template_opts.html);
    if (template_opts.style != null) {
      $('head').append("<style>" + template_opts.style + "</style>");
    }
    return view_class.templateID || (view_class.templateID = name);
  };

  QS.View.registerComponent = function(name, template_opts, view_class) {
    var is_sync, topts;
    view_class || (view_class = this);
    QS.registered_components || (QS.registered_components = {});
    if (template_opts == null) {
      topts = {
        template_id: name
      };
    } else if (typeof template_opts === 'string') {
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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  QS.Service = (function() {
    QS.includeEventable(Service);

    function Service(owner, opts) {
      this.owner = owner;
      this.opts = opts != null ? opts : {};
      this.disposeLater = bind(this.disposeLater, this);
      this.addFields = bind(this.addFields, this);
      if (this.owner != null) {
        this.app = this.owner.app;
      }
      this.disposables = [];
      this.init();
    }

    Service.prototype.init = function() {};

    Service.prototype.addFields = function(fields, def) {
      return ko.addFields(fields, def, this);
    };

    Service.prototype.addComputed = function(field, fn_opts) {
      return ko.addComputed(field, fn_opts, this);
    };

    Service.prototype.dispose = function() {
      var d, i, len, ref;
      ref = this.disposables;
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        d.dispose();
      }
      return this.disposables = [];
    };

    Service.prototype.disposeLater = function() {
      var ds;
      ds = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      this.disposables.push.apply(this.disposables, ds);
      return this.disposables;
    };

    return Service;

  })();

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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
        req.data = QS.utils.prepareAPIData(req.data, {
          allowArrays: false
        });
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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  QS.ModelAdapter = (function() {
    function ModelAdapter(opts) {
      this.add_endpoint = bind(this.add_endpoint, this);
      var name, path, prop, ref, val;
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
      if (opts.endpoints != null) {
        ref = opts.endpoints;
        for (name in ref) {
          path = ref[name];
          if (path instanceof Array) {
            this.route_method(name, path[0], path[1]);
          } else {
            this.route_method(name, path);
          }
        }
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

}).call(this);

(function() {
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

}).call(this);

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  QS.Application = (function(superClass) {
    extend(Application, superClass);

    function Application(opts) {
      this.updateWindowBounds = bind(this.updateWindowBounds, this);
      this.bindToBody = bind(this.bindToBody, this);
      this.host = bind(this.host, this);
      this.navigateTo = bind(this.navigateTo, this);
      this.getUserToken = bind(this.getUserToken, this);
      this.app = this;
      this.opts = opts;
      this.location = window.history.location || window.location;
      this.path_info = ko.observable({});
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
      this.parsePath();
      QS.utils.updateStyles();
      Application.__super__.constructor.call(this, 'app', null, null, this.opts);
    }

    Application.prototype.configure = function() {};

    Application.prototype.route = function(opts) {
      var path;
      if (opts == null) {
        opts = {};
      }
      this.previous_path(this.path());
      this.parsePath();
      path = this.path();
      QS.log("Loading path '" + path + "'");
      if (this.opts.update_title !== false) {
        this.setTitle(this.name, true);
      }
      this.handlePath(path);
      this.app.trigger('path.changed', path);
      return this.app.trigger('app.path_changed', path);
    };

    Application.prototype.parsePath = function() {
      var anchor, fullpath, href, info, origin, params, parts, path, prev_info;
      prev_info = this.path_info();
      path = this.location.pathname;
      href = this.location.href;
      origin = this.location.origin;
      anchor = this.location.hash.substring(1);
      fullpath = href.replace(origin, "");
      params = QS.utils.getURLParams(href);
      parts = path.split('/');
      if (parts[parts.length - 1] !== '') {
        parts.push('');
      }
      if (prev_info.href === href) {
        return;
      }
      this.path_parts = parts;
      this.path_params(params);
      this.path_anchor(anchor);
      this.path(path);
      info = {
        href: href,
        path: path,
        origin: origin,
        anchor: anchor,
        fullpath: fullpath,
        params: params,
        parts: parts,
        previous: {
          path: prev_info.path,
          fullpath: prev_info.fullpath,
          parts: prev_info.parts,
          params: prev_info.params,
          anchor: prev_info.anchor
        }
      };
      return this.path_info(info);
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
      var on_login;
      opts || (opts = {});
      on_login = opts.on_login || opts.onLogin;
      if (on_login != null) {
        this.redirect_on_login(on_login);
      }
      return setTimeout((function(_this) {
        return function() {
          if ((replace != null) && replace === true) {
            history.replaceState(null, null, path);
          } else {
            history.pushState(null, null, path);
          }
          return _this.route();
        };
      })(this), 100);
    };

    Application.prototype.navigateTo = function(url) {
      return window.location.href = url;
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
      var $body, app, app_data_bind, bdb;
      $body = $('body');
      bdb = $body.attr('data-bind');
      if (bdb != null) {
        app_data_bind = "app: true, " + bdb;
      } else {
        app_data_bind = "app: true";
      }
      $body.attr('data-bind', app_data_bind);
      $body.koBind(this);
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

}).call(this);
