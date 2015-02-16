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
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */


(function() {(function(p){var s=this||(0,eval)("this"),v=s.document,L=s.navigator,w=s.jQuery,D=s.JSON;(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports,require):"function"===typeof define&&define.amd?define(["exports","require"],p):p(s.ko={})})(function(M,N){function H(a,d){return null===a||typeof a in R?a===d:!1}function S(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function T(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function I(b,d,c,e){a.d[b]={init:function(b,h,k,f,m){var l,q;a.s(function(){var f=a.a.c(h()),k=!c!==!f,z=!q;if(z||d||k!==l)z&&a.Y.la()&&(q=a.a.ia(a.f.childNodes(b),!0)),k?(z||a.f.T(b,a.a.ia(q)),a.Ca(e?e(m,f):m,b)):a.f.ja(b),l=k},null,{o:b});return{controlsDescendantBindings:!0}}};a.h.ha[b]=!1;a.f.Q[b]=!0}var a="undefined"!==typeof M?M:{};a.b=function(b,d){for(var c=b.split("."),e=a,g=0;g<c.length-1;g++)e=e[c[g]];e[c[c.length-1]]=d};a.A=function(a,d,c){a[d]=c};a.version="3.2.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}var e={__proto__:[]}instanceof Array,g={},h={};g[L&&/Firefox\/2/i.test(L.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];g.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(g,function(a,b){if(b.length)for(var c=
0,d=b.length;c<d;c++)h[b[c]]=a});var k={propertychange:!0},f=v&&function(){for(var a=3,b=v.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}();return{vb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],u:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===
b)return c;return-1},qb:function(a,b,c){for(var d=0,f=a.length;d<f;d++)if(b.call(c,a[d],d))return a[d];return null},ua:function(m,b){var c=a.a.m(m,b);0<c?m.splice(c,1):0===c&&m.shift()},rb:function(m){m=m||[];for(var b=[],c=0,d=m.length;c<d;c++)0>a.a.m(b,m[c])&&b.push(m[c]);return b},Da:function(a,b){a=a||[];for(var c=[],d=0,f=a.length;d<f;d++)c.push(b(a[d],d));return c},ta:function(a,b){a=a||[];for(var c=[],d=0,f=a.length;d<f;d++)b(a[d],d)&&c.push(a[d]);return c},ga:function(a,b){if(b instanceof
Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},ea:function(b,c,d){var f=a.a.m(a.a.Xa(b),c);0>f?d&&b.push(c):d||b.splice(f,1)},xa:e,extend:d,za:c,Aa:e?c:d,G:b,na:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},Ka:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},oc:function(b){b=a.a.S(b);for(var c=v.createElement("div"),d=0,f=b.length;d<f;d++)c.appendChild(a.R(b[d]));return c},ia:function(b,c){for(var d=
0,f=b.length,e=[];d<f;d++){var k=b[d].cloneNode(!0);e.push(c?a.R(k):k)}return e},T:function(b,c){a.a.Ka(b);if(c)for(var d=0,f=c.length;d<f;d++)b.appendChild(c[d])},Lb:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var f=d[0],e=f.parentNode,k=0,g=c.length;k<g;k++)e.insertBefore(c[k],f);k=0;for(g=d.length;k<g;k++)a.removeNode(d[k])}},ka:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.shift();if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=
0;c!==d;)if(a.push(c),c=c.nextSibling,!c)return;a.push(d)}}return a},Nb:function(a,b){7>f?a.setAttribute("selected",b):a.selected=b},cb:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},vc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},cc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&
16);for(;a&&a!=b;)a=a.parentNode;return!!a},Ja:function(b){return a.a.cc(b,b.ownerDocument.documentElement)},ob:function(b){return!!a.a.qb(b,a.a.Ja)},t:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var e=f&&k[c];if(!e&&w)w(b).bind(c,d);else if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var g=function(a){d.call(b,a)},h="on"+c;b.attachEvent(h,g);a.a.w.da(b,function(){b.detachEvent(h,g)})}else throw Error("Browser doesn't support addEventListener or attachEvent");
else b.addEventListener(c,d,!1)},oa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.t(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(w&&!d)w(b).trigger(c);else if("function"==typeof v.createEvent)if("function"==typeof b.dispatchEvent)d=v.createEvent(h[c]||"HTMLEvents"),d.initEvent(c,!0,!0,s,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.C(b)?b():b},Xa:function(b){return a.C(b)?b.v():b},Ba:function(b,c,d){if(c){var f=/\S+/g,e=b.className.match(f)||[];a.a.u(c.match(f),function(b){a.a.ea(e,b,d)});b.className=e.join(" ")}},bb:function(b,c){var d=a.a.c(c);if(null===d||d===p)d="";var f=a.f.firstChild(b);!f||3!=f.nodeType||a.f.nextSibling(f)?a.f.T(b,[b.ownerDocument.createTextNode(d)]):
f.data=d;a.a.fc(b)},Mb:function(a,b){a.name=b;if(7>=f)try{a.mergeAttributes(v.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},fc:function(a){9<=f&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},dc:function(a){if(f){var b=a.style.width;a.style.width=0;a.style.width=b}},sc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],f=b;f<=c;f++)d.push(f);return d},S:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},yc:6===f,zc:7===f,L:f,xb:function(b,c){for(var d=
a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))),f="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],k=d.length-1;0<=k;k--)f(d[k])&&e.push(d[k]);return e},pc:function(b){return"string"==typeof b&&(b=a.a.cb(b))?D&&D.parse?D.parse(b):(new Function("return "+b))():null},eb:function(b,c,d){if(!D||!D.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return D.stringify(a.a.c(b),c,d)},qc:function(c,d,f){f=f||{};var e=f.params||{},k=f.includeFields||this.vb,g=c;if("object"==typeof c&&"form"===a.a.t(c))for(var g=c.action,h=k.length-1;0<=h;h--)for(var r=a.a.xb(c,k[h]),E=r.length-1;0<=E;E--)e[r[E].name]=r[E].value;d=a.a.c(d);var y=v.createElement("form");y.style.display="none";y.action=g;y.method="post";for(var p in d)c=v.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.eb(a.a.c(d[p])),y.appendChild(c);b(e,function(a,b){var c=v.createElement("input");
c.type="hidden";c.name=a;c.value=b;y.appendChild(c)});v.body.appendChild(y);f.submitter?f.submitter(y):y.submit();setTimeout(function(){y.parentNode.removeChild(y)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.u);a.b("utils.arrayFirst",a.a.qb);a.b("utils.arrayFilter",a.a.ta);a.b("utils.arrayGetDistinctValues",a.a.rb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Da);a.b("utils.arrayPushAll",a.a.ga);a.b("utils.arrayRemoveItem",a.a.ua);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.vb);a.b("utils.getFormFields",a.a.xb);a.b("utils.peekObservable",a.a.Xa);a.b("utils.postJson",a.a.qc);a.b("utils.parseJson",a.a.pc);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.eb);a.b("utils.range",a.a.sc);a.b("utils.toggleDomNodeCssClass",a.a.Ba);a.b("utils.triggerEvent",a.a.oa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.G);a.b("utils.addOrRemoveItem",a.a.ea);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=
this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return d.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});a.a.e=new function(){function a(b,h){var k=b[c];if(!k||"null"===k||!e[k]){if(!h)return p;k=b[c]="ko"+d++;e[k]={}}return e[k]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},F:function(){return d++ +
c}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.w=new function(){function b(b,d){var f=a.a.e.get(b,c);f===p&&d&&(f=[],a.a.e.set(b,c,f));return f}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),f=0;f<e.length;f++)e[f](c);a.a.e.clear(c);a.a.w.cleanExternalData(c);if(g[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.e.F(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{da:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");
b(a,!0).push(c)},Kb:function(d,e){var f=b(d,!1);f&&(a.a.ua(f,e),0==f.length&&a.a.e.set(d,c,p))},R:function(b){if(e[b.nodeType]&&(d(b),g[b.nodeType])){var c=[];a.a.ga(c,b.getElementsByTagName("*"));for(var f=0,m=c.length;f<m;f++)d(c[f])}return b},removeNode:function(b){a.R(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){w&&"function"==typeof w.cleanData&&w.cleanData([a])}}};a.R=a.a.w.R;a.removeNode=a.a.w.removeNode;a.b("cleanNode",a.R);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",
a.a.w);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.w.da);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.w.Kb);(function(){a.a.ba=function(b){var d;if(w)if(w.parseHTML)d=w.parseHTML(b)||[];else{if((d=w.clean([b]))&&d[0]){for(b=d[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var c=a.a.cb(b).toLowerCase();d=v.createElement("div");c=c.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!c.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!c.indexOf("<td")||!c.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+c[1]+b+c[2]+"</div>";for("function"==typeof s.innerShiv?d.appendChild(s.innerShiv(b)):d.innerHTML=b;c[0]--;)d=d.lastChild;d=a.a.S(d.lastChild.childNodes)}return d};a.a.$a=function(b,d){a.a.Ka(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),w)w(b).html(d);else for(var c=a.a.ba(d),e=0;e<c.length;e++)b.appendChild(c[e])}})();a.b("utils.parseHtmlFragment",
a.a.ba);a.b("utils.setHtml",a.a.$a);a.D=function(){function b(c,d){if(c)if(8==c.nodeType){var g=a.D.Gb(c.nodeValue);null!=g&&d.push({bc:c,mc:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],d)}var d={};return{Ua:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);d[b]=a;return"\x3c!--[ko_memo:"+
b+"]--\x3e"},Rb:function(a,b){var g=d[a];if(g===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete d[a]}},Sb:function(c,d){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var f=g[h].bc,m=[f];d&&a.a.ga(m,d);a.D.Rb(g[h].mc,m);f.nodeValue="";f.parentNode&&f.parentNode.removeChild(f)}},Gb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.D);a.b("memoization.memoize",a.D.Ua);
a.b("memoization.unmemoize",a.D.Rb);a.b("memoization.parseMemoText",a.D.Gb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.D.Sb);a.La={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,g;"number"==typeof d?c=d:(c=d.timeout,e=d.method);g="notifyWhenChangesStop"==e?T:S;a.Ta(function(a){return g(a,c)})},notify:function(a,d){a.equalityComparer="always"==d?null:H}};var R=
{undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.La);a.Pb=function(b,d,c){this.target=b;this.wa=d;this.ac=c;this.Cb=!1;a.A(this,"dispose",this.K)};a.Pb.prototype.K=function(){this.Cb=!0;this.ac()};a.P=function(){a.a.Aa(this,a.P.fn);this.M={}};var G="change",A={U:function(b,d,c){var e=this;c=c||G;var g=new a.Pb(e,d?b.bind(d):b,function(){a.a.ua(e.M[c],g);e.nb&&e.nb()});e.va&&e.va(c);e.M[c]||(e.M[c]=[]);e.M[c].push(g);return g},notifySubscribers:function(b,d){d=d||G;if(this.Ab(d))try{a.k.Ea();
for(var c=this.M[d].slice(0),e=0,g;g=c[e];++e)g.Cb||g.wa(b)}finally{a.k.end()}},Ta:function(b){var d=this,c=a.C(d),e,g,h;d.qa||(d.qa=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&b!==G?"beforeChange"===b?d.kb(a):d.qa(a,b):d.lb(a)});var k=b(function(){c&&h===d&&(h=d());e=!1;d.Pa(g,h)&&d.qa(g=h)});d.lb=function(a){e=!0;h=a;k()};d.kb=function(a){e||(g=a,d.qa(a,"beforeChange"))}},Ab:function(a){return this.M[a]&&this.M[a].length},yb:function(){var b=0;a.a.G(this.M,function(a,c){b+=c.length});
return b},Pa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.G(b,function(b,e){var g=a.La[b];"function"==typeof g&&(d=g(d,e)||d)});return d}};a.A(A,"subscribe",A.U);a.A(A,"extend",A.extend);a.A(A,"getSubscriptionsCount",A.yb);a.a.xa&&a.a.za(A,Function.prototype);a.P.fn=A;a.Db=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.P);a.b("isSubscribable",a.Db);a.Y=a.k=function(){function b(a){c.push(e);
e=a}function d(){e=c.pop()}var c=[],e,g=0;return{Ea:b,end:d,Jb:function(b){if(e){if(!a.Db(b))throw Error("Only subscribable things can act as dependencies");e.wa(b,b.Vb||(b.Vb=++g))}},B:function(a,c,f){try{return b(),a.apply(c,f||[])}finally{d()}},la:function(){if(e)return e.s.la()},ma:function(){if(e)return e.ma}}}();a.b("computedContext",a.Y);a.b("computedContext.getDependenciesCount",a.Y.la);a.b("computedContext.isInitial",a.Y.ma);a.b("computedContext.isSleeping",a.Y.Ac);a.p=function(b){function d(){if(0<
arguments.length)return d.Pa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Jb(d);return c}var c=b;a.P.call(d);a.a.Aa(d,a.p.fn);d.v=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,"beforeChange")};a.A(d,"peek",d.v);a.A(d,"valueHasMutated",d.W);a.A(d,"valueWillMutate",d.X);return d};a.p.fn={equalityComparer:H};var F=a.p.rc="__ko_proto__";a.p.fn[F]=a.p;a.a.xa&&a.a.za(a.p.fn,a.P.fn);a.Ma=function(b,d){return null===b||b===p||b[F]===p?!1:b[F]===
d?!0:a.Ma(b[F],d)};a.C=function(b){return a.Ma(b,a.p)};a.Ra=function(b){return"function"==typeof b&&b[F]===a.p||"function"==typeof b&&b[F]===a.j&&b.hc?!0:!1};a.b("observable",a.p);a.b("isObservable",a.C);a.b("isWriteableObservable",a.Ra);a.b("isWritableObservable",a.Ra);a.aa=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.p(b);a.a.Aa(b,a.aa.fn);return b.extend({trackArrayChanges:!0})};
a.aa.fn={remove:function(b){for(var d=this.v(),c=[],e="function"!=typeof b||a.C(b)?function(a){return a===b}:b,g=0;g<d.length;g++){var h=d[g];e(h)&&(0===c.length&&this.X(),c.push(h),d.splice(g,1),g--)}c.length&&this.W();return c},removeAll:function(b){if(b===p){var d=this.v(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.v(),c="function"!=typeof b||a.C(b)?function(a){return a===b}:b;this.X();
for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.v()[c]=d,this.W())}};a.a.u("pop push reverse shift sort splice unshift".split(" "),function(b){a.aa.fn[b]=function(){var a=this.v();this.X();this.sb(a,b,arguments);a=a[b].apply(a,arguments);this.W();
return a}});a.a.u(["slice"],function(b){a.aa.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.xa&&a.a.za(a.aa.fn,a.p.fn);a.b("observableArray",a.aa);var J="arrayChange";a.La.trackArrayChanges=function(b){function d(){if(!c){c=!0;var d=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==G||++g;return d.apply(this,arguments)};var f=[].concat(b.v()||[]);e=null;b.U(function(c){c=[].concat(c||[]);if(b.Ab(J)){var d;if(!e||1<g)e=a.a.Fa(f,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,
J)}f=c;e=null;g=0})}}if(!b.sb){var c=!1,e=null,g=0,h=b.U;b.U=b.subscribe=function(a,b,c){c===J&&d();return h.apply(this,arguments)};b.sb=function(b,d,m){function l(a,b,c){return q[q.length]={status:a,value:b,index:c}}if(c&&!g){var q=[],h=b.length,t=m.length,z=0;switch(d){case "push":z=h;case "unshift":for(d=0;d<t;d++)l("added",m[d],z+d);break;case "pop":z=h-1;case "shift":h&&l("deleted",b[z],z);break;case "splice":d=Math.min(Math.max(0,0>m[0]?h+m[0]:m[0]),h);for(var h=1===t?h:Math.min(d+(m[1]||0),
h),t=d+t-2,z=Math.max(h,t),u=[],r=[],E=2;d<z;++d,++E)d<h&&r.push(l("deleted",b[d],d)),d<t&&u.push(l("added",m[E],d));a.a.wb(r,u);break;default:return}e=q}}}};a.s=a.j=function(b,d,c){function e(){a.a.G(v,function(a,b){b.K()});v={}}function g(){e();C=0;u=!0;n=!1}function h(){var a=f.throttleEvaluation;a&&0<=a?(clearTimeout(P),P=setTimeout(k,a)):f.ib?f.ib():k()}function k(b){if(t){if(E)throw Error("A 'pure' computed must not be called recursively");}else if(!u){if(w&&w()){if(!z){s();return}}else z=!1;
t=!0;if(y)try{var c={};a.k.Ea({wa:function(a,b){c[b]||(c[b]=1,++C)},s:f,ma:p});C=0;q=r.call(d)}finally{a.k.end(),t=!1}else try{var e=v,m=C;a.k.Ea({wa:function(a,b){u||(m&&e[b]?(v[b]=e[b],++C,delete e[b],--m):v[b]||(v[b]=a.U(h),++C))},s:f,ma:E?p:!C});v={};C=0;try{var l=d?r.call(d):r()}finally{a.k.end(),m&&a.a.G(e,function(a,b){b.K()}),n=!1}f.Pa(q,l)&&(f.notifySubscribers(q,"beforeChange"),q=l,!0!==b&&f.notifySubscribers(q))}finally{t=!1}C||s()}}function f(){if(0<arguments.length){if("function"===typeof O)O.apply(d,
arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.k.Jb(f);n&&k(!0);return q}function m(){n&&!C&&k(!0);return q}function l(){return n||0<C}var q,n=!0,t=!1,z=!1,u=!1,r=b,E=!1,y=!1;r&&"object"==typeof r?(c=r,r=c.read):(c=c||{},r||(r=c.read));if("function"!=typeof r)throw Error("Pass a function that returns the value of the ko.computed");var O=c.write,x=c.disposeWhenNodeIsRemoved||
c.o||null,B=c.disposeWhen||c.Ia,w=B,s=g,v={},C=0,P=null;d||(d=c.owner);a.P.call(f);a.a.Aa(f,a.j.fn);f.v=m;f.la=function(){return C};f.hc="function"===typeof c.write;f.K=function(){s()};f.Z=l;var A=f.Ta;f.Ta=function(a){A.call(f,a);f.ib=function(){f.kb(q);n=!0;f.lb(f)}};c.pure?(y=E=!0,f.va=function(){y&&(y=!1,k(!0))},f.nb=function(){f.yb()||(e(),y=n=!0)}):c.deferEvaluation&&(f.va=function(){m();delete f.va});a.A(f,"peek",f.v);a.A(f,"dispose",f.K);a.A(f,"isActive",f.Z);a.A(f,"getDependenciesCount",
f.la);x&&(z=!0,x.nodeType&&(w=function(){return!a.a.Ja(x)||B&&B()}));y||c.deferEvaluation||k();x&&l()&&x.nodeType&&(s=function(){a.a.w.Kb(x,s);g()},a.a.w.da(x,s));return f};a.jc=function(b){return a.Ma(b,a.j)};A=a.p.rc;a.j[A]=a.p;a.j.fn={equalityComparer:H};a.j.fn[A]=a.j;a.a.xa&&a.a.za(a.j.fn,a.P.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.jc);a.Ib=function(b,d){if("function"===typeof b)return a.s(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.s(b,d)};a.b("pureComputed",
a.Ib);(function(){function b(a,g,h){h=h||new c;a=g(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);d(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var l=h.get(d);k[c]=l!==p?l:b(d,g,h)}});return k}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==
typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.hb=[]}a.Qb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.C(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Qb(b);return a.a.eb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.hb[d]=c:(this.keys.push(b),this.hb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.hb[b]:p}}})();
a.b("toJS",a.Qb);a.b("toJSON",a.toJSON);(function(){a.i={q:function(b){switch(a.a.t(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.Va):7>=a.a.L?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.q(b.options[b.selectedIndex]):p;default:return b.value}},ca:function(b,d,c){switch(a.a.t(b)){case "option":switch(typeof d){case "string":a.a.e.set(b,a.d.options.Va,p);"__ko__hasDomDataOptionValue__"in
b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.e.set(b,a.d.options.Va,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,g=0,h=b.options.length,k;g<h;++g)if(k=a.i.q(b.options[g]),k==d||""==k&&d===p){e=g;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.q);a.b("selectExtensions.writeValue",
a.i.ca);a.h=function(){function b(b){b=a.a.cb(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),k,n,t=0;if(d){d.push(",");for(var z=0,u;u=d[z];++z){var r=u.charCodeAt(0);if(44===r){if(0>=t){k&&c.push(n?{key:k,value:n.join("")}:{unknown:k});k=n=t=0;continue}}else if(58===r){if(!n)continue}else if(47===r&&z&&1<u.length)(r=d[z-1].match(g))&&!h[r[0]]&&(b=b.substr(b.indexOf(u)+1),d=b.match(e),d.push(","),z=-1,u="/");else if(40===r||123===r||91===r)++t;else if(41===r||125===r||93===r)--t;
else if(!k&&!n){k=34===r||39===r?u.slice(1,-1):u;continue}n?n.push(u):n=[u]}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{ha:[],V:k,Wa:b,ya:function(f,m){function e(b,m){var f;if(!z){var u=a.getBindingHandler(b);if(u&&u.preprocess&&
!(m=u.preprocess(m,b,e)))return;if(u=k[b])f=m,0<=a.a.m(d,f)?f=!1:(u=f.match(c),f=null===u?!1:u[1]?"Object("+u[1]+")"+u[2]:f),u=f;u&&h.push("'"+b+"':function(_z){"+f+"=_z}")}t&&(m="function(){return "+m+" }");g.push("'"+b+"':"+m)}m=m||{};var g=[],h=[],t=m.valueAccessors,z=m.bindingParams,u="string"===typeof f?b(f):f;a.a.u(u,function(a){e(a.key||a.unknown,a.value)});h.length&&e("_ko_property_writers","{"+h.join(",")+" }");return g.join(",")},lc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==
b)return!0;return!1},pa:function(b,c,d,e,k){if(b&&a.C(b))!a.Ra(b)||k&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ha);a.b("expressionRewriting.parseObjectLiteral",a.h.Wa);a.b("expressionRewriting.preProcessBindings",a.h.ya);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.ya);(function(){function b(a){return 8==
a.nodeType&&h.test(g?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function c(a,c){for(var f=a,e=1,k=[];f=f.nextSibling;){if(d(f)&&(e--,0===e))return k;k.push(f);b(f)&&e++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var g=v&&"\x3c!--test--\x3e"===v.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,
k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,f={ul:!0,ol:!0};a.f={Q:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ja:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=0,f=c.length;d<f;d++)a.removeNode(c[d])}else a.a.Ka(c)},T:function(c,d){if(b(c)){a.f.ja(c);for(var f=c.nextSibling,e=0,k=d.length;e<k;e++)f.parentNode.insertBefore(d[e],f)}else a.a.T(c,d)},Hb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Bb:function(c,
d,f){f?b(c)?c.parentNode.insertBefore(d,f.nextSibling):f.nextSibling?c.insertBefore(d,f.nextSibling):c.appendChild(d):a.f.Hb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&d(a.nextSibling)?null:a.nextSibling},gc:b,xc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},Fb:function(c){if(f[a.a.t(c)]){var k=c.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;
var h=null;if(g){do if(h)h.push(g);else if(b(g)){var t=e(g,!0);t?g=t:h=[g]}else d(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h)for(h=k.nextSibling,t=0;t<g.length;t++)h?c.insertBefore(g[t],h):c.appendChild(g[t])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.Q);a.b("virtualElements.emptyNode",a.f.ja);a.b("virtualElements.insertAfter",a.f.Bb);a.b("virtualElements.prepend",a.f.Hb);a.b("virtualElements.setDomNodeChildren",a.f.T);(function(){a.J=function(){this.Yb=
{}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.gc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b):null;return a.g.mb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.mb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.f.xc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var g=this.Yb,h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var f,m="with($context){with($data||{}){return{"+a.h.ya(b,e)+"}}}";f=new Function("$context","$element",m);k=g[h]=f}return k(d,c)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(a){return function(){return a}}function d(a){return a()}
function c(b){return a.a.na(a.k.B(b),function(a,c){return function(){return b()[c]}})}function e(a,b){return c(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.f.firstChild(c),k=a.J.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.f.nextSibling(f),g.call(k,f);e=a.f.firstChild(c)}for(;f=e;)e=a.f.nextSibling(f),h(b,f,d)}function h(b,c,d){var e=!0,k=1===c.nodeType;k&&a.f.Fb(c);if(k&&d||a.J.instance.nodeHasBindings(c))e=f(c,null,b,d).shouldBindDescendants;e&&!l[a.a.t(c)]&&g(b,c,!k)}function k(b){var c=
[],d={},f=[];a.a.G(b,function y(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&(f.push(e),a.a.u(k.after,function(c){if(b[c]){if(-1!==a.a.m(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));y(c)}}),f.length--),c.push({key:e,zb:k}));d[e]=!0}});return c}function f(b,c,f,g){var m=a.a.e.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&g&&a.Ob(b,f);var l;if(c&&"function"!==
typeof c)l=c;else{var h=a.J.instance,n=h.getBindingAccessors||e,s=a.j(function(){(l=c?c(f,b):n.call(h,b,f))&&f.I&&f.I();return l},null,{o:b});l&&s.Z()||(s=null)}var v;if(l){var w=s?function(a){return function(){return d(s()[a])}}:function(a){return l[a]},A=function(){return a.a.na(s?s():l,d)};A.get=function(a){return l[a]&&d(w(a))};A.has=function(a){return a in l};g=k(l);a.a.u(g,function(c){var d=c.zb.init,e=c.zb.update,k=c.key;if(8===b.nodeType&&!a.f.Q[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");
try{"function"==typeof d&&a.k.B(function(){var a=d(b,w(k),A,f.$data,f);if(a&&a.controlsDescendantBindings){if(v!==p)throw Error("Multiple bindings ("+v+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");v=k}}),"function"==typeof e&&a.j(function(){e(b,w(k),A,f.$data,f)},null,{o:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+l[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:v===p}}
function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var l={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.N=function(b,c,d,f){var e=this,k="function"==typeof b&&!a.C(b),g,m=a.j(function(){var g=k?b():b,l=a.a.c(g);c?(c.I&&c.I(),a.a.extend(e,c),m&&(e.I=m)):(e.$parents=[],e.$root=l,e.ko=a);e.$rawData=g;e.$data=l;d&&(e[d]=l);f&&f(e,c,l);return e.$data},null,{Ia:function(){return g&&!a.a.ob(g)},o:!0});m.Z()&&(e.I=m,m.equalityComparer=null,g=[],m.Tb=function(b){g.push(b);a.a.w.da(b,
function(b){a.a.ua(g,b);g.length||(m.K(),e.I=m=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.I||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.e.F(),n=a.a.e.F();a.Ob=function(b,c){if(2==arguments.length)a.a.e.set(b,n,c),
c.I&&c.I.Tb(b);else return a.a.e.get(b,n)};a.ra=function(b,c,d){1===b.nodeType&&a.f.Fb(b);return f(b,c,m(d),!0)};a.Wb=function(d,f,e){e=m(e);return a.ra(d,"function"===typeof f?c(f.bind(null,e,d)):a.a.na(f,b),e)};a.Ca=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(m(a),b,!0)};a.pb=function(a,b){!w&&s.jQuery&&(w=s.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||s.document.body;h(m(a),
b,!0)};a.Ha=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ob(b);if(c)return c;if(b.parentNode)return a.Ha(b.parentNode)}return p};a.$b=function(b){return(b=a.Ha(b))?b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.pb);a.b("applyBindingsToDescendants",a.Ca);a.b("applyBindingAccessorsToNode",a.ra);a.b("applyBindingsToNode",a.Wb);a.b("contextFor",a.Ha);a.b("dataFor",a.$b)})();(function(b){function d(d,f){var e=g.hasOwnProperty(d)?g[d]:b,l;e||(e=g[d]=new a.P,c(d,function(a){h[d]=a;delete g[d];
l?e.notifySubscribers(a):setTimeout(function(){e.notifySubscribers(a)},0)}),l=!0);e.U(f)}function c(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a)}):b(null)})}function e(c,d,g,l){l||(l=a.g.loaders.slice(0));var h=l.shift();if(h){var n=h[c];if(n){var t=!1;if(n.apply(h,d.concat(function(a){t?g(null):null!==a?g(a):e(c,d,g,l)}))!==b&&(t=!0,!h.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
}else e(c,d,g,l)}else g(null)}var g={},h={};a.g={get:function(a,c){var e=h.hasOwnProperty(a)?h[a]:b;e?setTimeout(function(){c(e)},0):d(a,c)},tb:function(a){delete h[a]},jb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.tb)})();(function(){function b(b,c,d,e){function k(){0===--u&&e(h)}var h={},u=2,r=d.template;d=d.viewModel;r?g(c,r,function(c){a.g.jb("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?g(c,d,function(c){a.g.jb("loadViewModel",
[b,c],function(a){h[f]=a;k()})}):k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[f])c(b[f]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.t(b)){case "script":return a.a.ba(b.text);case "textarea":return a.a.ba(b.value);case "template":if(e(b.content))return a.a.ia(b.content.childNodes)}return a.a.ia(b.childNodes)}function e(a){return s.DocumentFragment?
a instanceof DocumentFragment:a&&11===a.nodeType}function g(a,b,c){"string"===typeof b.require?N||s.require?(N||s.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function h(a){return function(b){throw Error("Component '"+a+"': "+b);}}var k={};a.g.tc=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Qa(b))throw Error("Component "+b+" is already registered");k[b]=c};a.g.Qa=function(a){return a in k};a.g.wc=function(b){delete k[b];a.g.tb(b)};a.g.ub={getConfig:function(a,
b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=h(a);g(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=h(b);if("string"===typeof d)f(a.a.ba(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.S(d.childNodes));else if(d.element)if(d=d.element,s.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var k=v.getElementById(d);k?f(c(k)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(h(a),b,c)}};var f="createViewModel";a.b("components.register",a.g.tc);a.b("components.isRegistered",a.g.Qa);a.b("components.unregister",a.g.wc);a.b("components.defaultLoader",a.g.ub);a.g.loaders.push(a.g.ub);a.g.Ub=k})();(function(){function b(b,e){var g=b.getAttribute("params");if(g){var g=d.parseBindingsString(g,e,b,{valueAccessors:!0,bindingParams:!0}),g=a.a.na(g,function(d){return a.s(d,null,{o:b})}),h=a.a.na(g,function(d){return d.Z()?a.s(function(){return a.a.c(d())},
null,{o:b}):d.v()});h.hasOwnProperty("$raw")||(h.$raw=g);return h}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.t(b);return a.g.Qa(b)&&b};a.g.mb=function(c,d,g,h){if(1===d.nodeType){var k=a.g.getComponentNameForNode(d);if(k){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var f={name:k,params:b(d,g)};c.component=h?function(){return f}:f}}return c};var d=new a.J;9>a.a.L&&(a.g.register=function(a){return function(b){v.createElement(b);
return a.apply(this,arguments)}}(a.g.register),v.createDocumentFragment=function(b){return function(){var d=b(),g=a.g.Ub,h;for(h in g)g.hasOwnProperty(h)&&d.createElement(h);return d}}(v.createDocumentFragment))})();(function(){var b=0;a.d.component={init:function(d,c,e,g,h){function k(){var a=f&&f.dispose;"function"===typeof a&&a.call(f);m=null}var f,m;a.a.w.da(d,k);a.s(function(){var e=a.a.c(c()),g,n;"string"===typeof e?g=e:(g=a.a.c(e.name),n=a.a.c(e.params));if(!g)throw Error("No component name specified");
var t=m=++b;a.g.get(g,function(b){if(m===t){k();if(!b)throw Error("Unknown component '"+g+"'");var c=b.template;if(!c)throw Error("Component '"+g+"' has no template");c=a.a.ia(c);a.f.T(d,c);var c=n,e=b.createViewModel;b=e?e.call(b,c,{element:d}):c;c=h.createChildContext(b);f=b;a.Ca(c,d)}})},null,{o:d});return{controlsDescendantBindings:!0}}};a.f.Q.component=!0})();var Q={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.G(c,function(c,d){d=a.a.c(d);var h=
!1===d||null===d||d===p;h&&b.removeAttribute(c);8>=a.a.L&&c in Q?(c=Q[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());"name"===c&&a.a.Mb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,k=q?h():e;if(!a.Y.ma()&&(!f||e)){var g=a.k.B(d);m?l!==k?(e&&(a.a.ea(g,k,!0),a.a.ea(g,l,!1)),l=k):a.a.ea(g,k,e):a.h.pa(g,c,"checked",k,!0)}}function g(){var c=a.a.c(d());b.checked=m?0<=a.a.m(c,h()):k?c:h()===c}var h=a.Ib(function(){return c.has("checkedValue")?
a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),k="checkbox"==b.type,f="radio"==b.type;if(k||f){var m=k&&a.a.c(d())instanceof Array,l=m?h():p,q=f||m;f&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.s(e,null,{o:b});a.a.n(b,"click",e);a.s(g,null,{o:b})}}};a.h.V.checked=!0;a.d.checkedValue={update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());"object"==typeof c?a.a.G(c,function(c,d){d=a.a.c(d);a.a.Ba(b,c,d)}):(c=String(c||""),
a.a.Ba(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ba(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,e,g){var h=d()||{};a.a.G(h,function(k){"string"==typeof k&&a.a.n(b,k,function(b){var h,l=d()[k];if(l){try{var q=a.a.S(arguments);e=g.$data;q.unshift(e);h=l.apply(e,q)}finally{!0!==h&&(b.preventDefault?
b.preventDefault():b.returnValue=!1)}!1===c.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Eb:function(b){return function(){var d=b(),c=a.a.Xa(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.O.Oa};a.a.c(d);return{foreach:c.data,as:c.as,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.O.Oa}}},init:function(b,
d){return a.d.template.init(b,a.d.foreach.Eb(d))},update:function(b,d,c,e,g){return a.d.template.update(b,a.d.foreach.Eb(d),c,e,g)}};a.h.ha.foreach=!1;a.f.Q.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=d();a.h.pa(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.n(b,"focus",g);a.a.n(b,"focusin",
g);a.a.n(b,"blur",h);a.a.n(b,"focusout",h)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.B(a.a.oa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.$a(b,d())}};I("if");I("ifnot",!1,!0);I("with",!0,!1,function(a,d){return a.createChildContext(d)});var K={};a.d.options={init:function(b){if("select"!==
a.a.t(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.ta(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(q.length){var e=0<=a.a.m(q,a.i.q(d[0]));a.a.Nb(d[0],e);n&&!e&&a.k.B(a.a.oa,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null,f=a.a.c(d()),m=c.get("optionsIncludeDestroyed");
d={};var l,q;q=b.multiple?a.a.Da(e(),a.i.q):0<=b.selectedIndex?[a.i.q(b.options[b.selectedIndex])]:[];f&&("undefined"==typeof f.length&&(f=[f]),l=a.a.ta(f,function(b){return m||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&(f=a.a.c(c.get("optionsCaption")),null!==f&&f!==p&&l.unshift(K)));var n=!1;d.beforeRemove=function(a){b.removeChild(a)};f=h;c.has("optionsAfterRender")&&(f=function(b,d){h(0,d);a.k.B(c.get("optionsAfterRender"),null,[d[0],b!==K?b:p])});a.a.Za(b,l,function(d,e,f){f.length&&
(q=f[0].selected?[a.i.q(f[0])]:[],n=!0);e=b.ownerDocument.createElement("option");d===K?(a.a.bb(e,c.get("optionsCaption")),a.i.ca(e,p)):(f=g(d,c.get("optionsValue"),d),a.i.ca(e,a.a.c(f)),d=g(d,c.get("optionsText"),f),a.a.bb(e,d));return[e]},d,f);a.k.B(function(){c.get("valueAllowUnset")&&c.has("value")?a.i.ca(b,a.a.c(c.get("value")),!0):(b.multiple?q.length&&e().length<q.length:q.length&&0<=b.selectedIndex?a.i.q(b.options[b.selectedIndex])!==q[0]:q.length||0<=b.selectedIndex)&&a.a.oa(b,"change")});
a.a.dc(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Va=a.a.e.F();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),g=[];a.a.u(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.i.q(b))});a.h.pa(e,c,"selectedOptions",g)})},update:function(b,d){if("select"!=a.a.t(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.u(b.getElementsByTagName("option"),
function(b){var d=0<=a.a.m(c,a.i.q(b));a.a.Nb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.G(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,d,c,e,g){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(g.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.bb(b,d())}};a.f.Q.text=!0;(function(){if(s&&s.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=s.opera&&s.opera.version&&parseInt(s.opera.version()),c=s.navigator.userAgent,e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),g=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.L)var h=a.a.e.F(),k=a.a.e.F(),f=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,h)||(a.a.e.set(d,h,!0),a.a.n(d,"selectionchange",
f));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,c,f){function k(c,d){a.a.n(b,c,d)}function h(){var d=a.a.c(c());if(null===d||d===p)d="";v!==p&&d===v?setTimeout(h,4):b.value!==d&&(s=d,b.value=d)}function u(){y||(v=b.value,y=setTimeout(r,4))}function r(){clearTimeout(y);v=y=p;var d=b.value;s!==d&&(s=d,a.h.pa(c(),f,"textInput",d))}var s=b.value,y,v;10>a.a.L?(k("propertychange",function(a){"value"===a.propertyName&&r()}),8==a.a.L&&(k("keyup",r),k("keydown",r)),8<=a.a.L&&(m(b,r),k("dragend",u))):
(k("input",r),5>e&&"textarea"===a.a.t(b)?(k("keydown",u),k("paste",u),k("cut",u)):11>d?k("keydown",u):4>g&&(k("DOMAutoComplete",r),k("dragdrop",r),k("drop",r)));k("change",r);a.s(h,null,{o:b})}};a.h.V.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.Zb;a.a.Mb(b,c)}}};a.d.uniqueName.Zb=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=
b.type&&"radio"!=b.type){var e=["change"],g=c.get("valueUpdate"),h=!1,k=null;g&&("string"==typeof g&&(g=[g]),a.a.ga(e,g),e=a.a.rb(e));var f=function(){k=null;h=!1;var e=d(),f=a.i.q(b);a.h.pa(e,c,"value",f)};!a.a.L||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){h=!0}),a.a.n(b,"focus",function(){h=!1}),a.a.n(b,"blur",function(){h&&f()}));a.a.u(e,function(c){var d=f;a.a.vc(c,
"after")&&(d=function(){k=a.i.q(b);setTimeout(f,0)},c=c.substring(5));a.a.n(b,c,d)});var m=function(){var e=a.a.c(d()),f=a.i.q(b);if(null!==k&&e===k)setTimeout(m,0);else if(e!==f)if("select"===a.a.t(b)){var g=c.get("valueAllowUnset"),f=function(){a.i.ca(b,e,g)};f();g||e===a.i.q(b)?setTimeout(f,0):a.k.B(a.a.oa,null,[b,"change"])}else a.i.ca(b,e)};a.s(m,null,{o:b})}else a.ra(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;
c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,g,h){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,g,h)}}})("click");a.H=function(){};a.H.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.H.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.H.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||v;var c=
d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.r.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.r.fa(b);throw Error("Unknown template type: "+b);};a.H.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,d,c)};a.H.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.H.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,
c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.H);a.fb=function(){function b(b,c,d,k){b=a.h.Wa(b);for(var f=a.h.ha,m=0;m<b.length;m++){var l=b[m].key;if(f.hasOwnProperty(l)){var q=f[l];if("function"===typeof q){if(l=q(b[m].value))throw Error(l);}else if(!q)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.ya(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+
"')";return k.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{ec:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.fb.nc(b,c)},d)},nc:function(a,g){return a.replace(d,function(a,c,d,e,l){return b(l,c,d,g)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},Xb:function(b,c){return a.D.Ua(function(d,
k){var f=d.nextSibling;f&&f.nodeName.toLowerCase()===c&&a.ra(f,b,k)})}}}();a.b("__tr_ambtns",a.fb.Xb);(function(){a.r={};a.r.l=function(a){this.l=a};a.r.l.prototype.text=function(){var b=a.a.t(this.l),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.$a(this.l,d):this.l[b]=d};var b=a.a.e.F()+"_";a.r.l.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.l,b+c);a.a.e.set(this.l,b+c,arguments[1])};
var d=a.a.e.F();a.r.fa=function(a){this.l=a};a.r.fa.prototype=new a.r.l;a.r.fa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.l,d)||{};b.gb===p&&b.Ga&&(b.gb=b.Ga.innerHTML);return b.gb}a.a.e.set(this.l,d,{gb:arguments[0]})};a.r.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.e.get(this.l,d)||{}).Ga;a.a.e.set(this.l,d,{Ga:arguments[0]})};a.b("templateSources",a.r);a.b("templateSources.domElement",a.r.l);a.b("templateSources.anonymousTemplate",a.r.fa)})();(function(){function b(b,
c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],g=c[c.length-1],h=e.parentNode,n=a.J.instance,t=n.preprocessNode;if(t){b(e,g,function(a,b){var c=a.previousSibling,d=t.call(n,a);d&&(a===e&&(e=d[0]||b),a===g&&(g=d[d.length-1]||c))});c.length=0;if(!e)return;e===g?c.push(e):(c.push(e,g),a.a.ka(c,h))}b(e,g,function(b){1!==b.nodeType&&8!==b.nodeType||a.pb(d,b)});b(e,g,function(b){1!==b.nodeType&&8!==b.nodeType||a.D.Sb(b,[d])});a.a.ka(c,
h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,h,l,q){q=q||{};var n=b&&c(b),n=n&&n.ownerDocument,t=q.templateEngine||g;a.fb.ec(h,t,n);h=t.renderTemplate(h,l,q,n);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.f.T(b,h);n=!0;break;case "replaceNode":a.a.Lb(b,h);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+
e);}n&&(d(h,l),q.afterRender&&a.k.B(q.afterRender,null,[h,l.$data]));return h}var g;a.ab=function(b){if(b!=p&&!(b instanceof a.H))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ya=function(b,d,h,l,q){h=h||{};if((h.templateEngine||g)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(l){var n=c(l);return a.j(function(){var g=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=a.C(b)?b():"function"===typeof b?b(g.$data,g):b,g=e(l,q,p,g,h);
"replaceNode"==q&&(l=g,n=c(l))},null,{Ia:function(){return!n||!a.a.Ja(n)},o:n&&"replaceNode"==q?n.parentNode:n})}return a.D.Ua(function(c){a.Ya(b,d,h,c,"replaceNode")})};a.uc=function(b,c,g,h,q){function n(a,b){d(b,s);g.afterRender&&g.afterRender(b,a)}function t(c,d){s=q.createChildContext(c,g.as,function(a){a.$index=d});var f=a.C(b)?b():"function"===typeof b?b(c,s):b;return e(null,"ignoreTargetNode",f,s,g)}var s;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ta(b,
function(b){return g.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.B(a.a.Za,null,[h,b,t,g,n])},null,{o:h})};var h=a.a.e.F();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.f.ja(b):(d=a.f.childNodes(b),d=a.a.oc(d),(new a.r.fa(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){var n=c(),t;c=a.a.c(n);d=!0;e=null;"string"==typeof c?c={}:(n=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),t=a.a.c(c.data));
"foreach"in c?e=a.uc(n||b,d&&c.foreach||[],c,b,g):d?(g="data"in c?g.createChildContext(t,c.as):g,e=a.Ya(n||b,g,c,b)):a.f.ja(b);g=e;(t=a.a.e.get(b,h))&&"function"==typeof t.K&&t.K();a.a.e.set(b,h,g&&g.Z()?g:p)}};a.h.ha.template=function(b){b=a.h.Wa(b);return 1==b.length&&b[0].unknown||a.h.lc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.Q.template=!0})();a.b("setTemplateEngine",a.ab);a.b("renderTemplate",a.Ya);a.a.wb=function(a,d,c){if(a.length&&
d.length){var e,g,h,k,f;for(e=g=0;(!c||e<c)&&(k=a[g]);++g){for(h=0;f=d[h];++h)if(k.value===f.value){k.moved=f.index;f.moved=k.index;d.splice(h,1);e=h=0;break}e+=h}}};a.a.Fa=function(){function b(b,c,e,g,h){var k=Math.min,f=Math.max,m=[],l,q=b.length,n,p=c.length,s=p-q||1,u=q+p+1,r,v,w;for(l=0;l<=q;l++)for(v=r,m.push(r=[]),w=k(p,l+s),n=f(0,l-1);n<=w;n++)r[n]=n?l?b[l-1]===c[n-1]?v[n-1]:k(v[n]||u,r[n-1]||u)+1:n+1:l+1;k=[];f=[];s=[];l=q;for(n=p;l||n;)p=m[l][n]-1,n&&p===m[l][n-1]?f.push(k[k.length]={status:e,
value:c[--n],index:n}):l&&p===m[l-1][n]?s.push(k[k.length]={status:g,value:b[--l],index:l}):(--n,--l,h.sparse||k.push({status:"retained",value:c[n]}));a.a.wb(f,s,10*q);return k.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Fa);(function(){function b(b,d,g,h,k){var f=[],m=a.j(function(){var l=d(g,k,a.a.ka(f,b))||[];0<f.length&&(a.a.Lb(f,
l),h&&a.k.B(h,null,[g,l,k]));f.length=0;a.a.ga(f,l)},null,{o:b,Ia:function(){return!a.a.ob(f)}});return{$:f,j:m.Z()?m:p}}var d=a.a.e.F();a.a.Za=function(c,e,g,h,k){function f(b,d){x=q[d];r!==d&&(A[b]=x);x.Na(r++);a.a.ka(x.$,c);s.push(x);w.push(x)}function m(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.u(c[d].$,function(a){b(a,d,c[d].sa)})}e=e||[];h=h||{};var l=a.a.e.get(c,d)===p,q=a.a.e.get(c,d)||[],n=a.a.Da(q,function(a){return a.sa}),t=a.a.Fa(n,e,h.dontLimitMoves),s=[],u=0,r=0,v=[],w=[];e=
[];for(var A=[],n=[],x,B=0,D,F;D=t[B];B++)switch(F=D.moved,D.status){case "deleted":F===p&&(x=q[u],x.j&&x.j.K(),v.push.apply(v,a.a.ka(x.$,c)),h.beforeRemove&&(e[B]=x,w.push(x)));u++;break;case "retained":f(B,u++);break;case "added":F!==p?f(B,F):(x={sa:D.value,Na:a.p(r++)},s.push(x),w.push(x),l||(n[B]=x))}m(h.beforeMove,A);a.a.u(v,h.beforeRemove?a.R:a.removeNode);for(var B=0,l=a.f.firstChild(c),G;x=w[B];B++){x.$||a.a.extend(x,b(c,g,x.sa,k,x.Na));for(u=0;t=x.$[u];l=t.nextSibling,G=t,u++)t!==l&&a.f.Bb(c,
t,G);!x.ic&&k&&(k(x.sa,x.$,x.Na),x.ic=!0)}m(h.beforeRemove,e);m(h.afterMove,A);m(h.afterAdd,n);a.a.e.set(c,d,s)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Za);a.O=function(){this.allowTemplateRewriting=!1};a.O.prototype=new a.H;a.O.prototype.renderTemplateSource=function(b){var d=(9>a.a.L?0:b.nodes)?b.nodes():null;if(d)return a.a.S(d.cloneNode(!0).childNodes);b=b.text();return a.a.ba(b)};a.O.Oa=new a.O;a.ab(a.O.Oa);a.b("nativeTemplateEngine",a.O);(function(){a.Sa=function(){var a=this.kc=
function(){if(!w||!w.tmpl)return 0;try{if(0<=w.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=w.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=w.extend({koBindingContext:e},g.templateOptions);e=w.tmpl(h,
b,e);e.appendTo(v.createElement("div"));w.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){v.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(w.tmpl.tag.ko_code={open:"__.push($1 || '');"},w.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Sa.prototype=new a.H;var b=new a.Sa;0<b.kc&&a.ab(b);a.b("jqueryTmplTemplateEngine",a.Sa)})()})})();})();
/**
 * @license Knockout.Punches
 * Enhanced binding syntaxes for Knockout 3+
 * (c) Michael Best
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 * Version 0.3.0
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['knockout'], factory);
    } else {
        // Browser globals
        factory(ko);
    }
}(function(ko) {
// Add a preprocess funtion to a binding handler.
function setBindingPreprocessor(bindingKeyOrHandler, preprocessFn) {
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
function setNodePreprocessor(preprocessFn) {
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

function setBindingHandlerCreator(matchRegex, callbackFn) {
    var oldGetHandler = ko.getBindingHandler;
    ko.getBindingHandler = function(bindingKey) {
        var match;
        return oldGetHandler(bindingKey) || ((match = bindingKey.match(matchRegex)) && callbackFn(match, bindingKey));
    };
}

// Create "punches" object and export utility functions
var ko_punches = ko.punches = {
    utils: {
        setBindingPreprocessor: setBindingPreprocessor,
        setNodePreprocessor: setNodePreprocessor,
        setBindingHandlerCreator: setBindingHandlerCreator
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

    // Enable filter syntax for text and attr
    enableTextFilter('text');
    setDefaultNamespacedBindingPreprocessor('attr', filterPreprocessor);

    // Enable wrapped callbacks for click, submit, event, optionsAfterRender, and template options
    enableWrappedCallback('click');
    enableWrappedCallback('submit');
    enableWrappedCallback('optionsAfterRender');
    setDefaultNamespacedBindingPreprocessor('event', wrappedCallbackPreprocessor);
    setBindingPropertyPreprocessor('template', 'beforeRemove', wrappedCallbackPreprocessor);
    setBindingPropertyPreprocessor('template', 'afterAdd', wrappedCallbackPreprocessor);
    setBindingPropertyPreprocessor('template', 'afterRender', wrappedCallbackPreprocessor);
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
    setBindingPreprocessor(bindingKeyOrHandler, filterPreprocessor);
}

var filters = {};

// Convert value to uppercase
filters.uppercase = function(value) {
    return String.prototype.toUpperCase.call(value);
};

// Convert value to lowercase
filters.lowercase = function(value) {
    return String.prototype.toLowerCase.call(value);
};

// Return default value if the input value is blank or null
filters['default'] = function(value, defaultValue) {
    return (value === '' || value == null) ? defaultValue : value;
};

// Return the value with the search string replaced with the replacement string
filters.replace = function(value, search, replace) {
    return String.prototype.replace.call(value, search, replace);
};

filters.fit = function(value, length, replacement, trimWhere) {
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
    return (+value).toLocaleString();
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
setBindingHandlerCreator(namespacedBindingMatch, function (match, bindingKey) {
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

// Sets a preprocess function for every generated namespace.x binding. This can
// be called multiple times for the same binding, and the preprocess functions will
// be chained. If the binding has a custom getNamespacedHandler method, make sure that
// it's set before this function is used.
function setDefaultNamespacedBindingPreprocessor(namespace, preprocessFn) {
    var handler = ko.getBindingHandler(namespace);
    if (handler) {
        var previousHandlerFn = handler.getNamespacedHandler || defaultGetNamespacedHandler;
        handler.getNamespacedHandler = function() {
            return setBindingPreprocessor(previousHandlerFn.apply(this, arguments), preprocessFn);
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
    setBindingPreprocessor(bindingKeyOrHandler, autoNamespacedPreprocessor);
}

// Export the preprocessor functions
ko_punches.namespacedBinding = {
    defaultGetHandler: defaultGetNamespacedHandler,
    setDefaultBindingPreprocessor: setDefaultNamespacedBindingPreprocessor,
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
    setBindingPreprocessor(bindingKeyOrHandler, wrappedCallbackPreprocessor);
}

// Export the preprocessor functions
ko_punches.wrappedCallback = {
    preprocessor: wrappedCallbackPreprocessor,
    enableForBinding: enableWrappedCallback
};
// Attach a preprocess function to a specific property of a binding. This allows you to
// preprocess binding "options" using the same preprocess functions that work for bindings.
function setBindingPropertyPreprocessor(bindingKeyOrHandler, property, preprocessFn) {
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
    setPreprocessor: setBindingPropertyPreprocessor
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
    setBindingPreprocessor(bindingKeyOrHandler, makeExpressionCallbackPreprocessor(args));
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
        return setBindingPreprocessor(handler, eventExpressionPreprocessor);
    }
};
// Performance comparison at http://jsperf.com/markup-interpolation-comparison
function parseInterpolationMarkup(textToParse, outerTextCallback, expressionCallback) {
    function innerParse(text) {
        var innerMatch = text.match(/^([\s\S]*?)}}([\s\S]*)\{\{([\s\S]*)$/);
        if (innerMatch) {
            expressionCallback(innerMatch[1]);
            outerParse(innerMatch[2]);
            expressionCallback(innerMatch[3]);
        } else {
            expressionCallback(text);
        }
    }
    function outerParse(text) {
        var outerMatch = text.match(/^([\s\S]*?)\{\{([\s\S]*)}}([\s\S]*)$/);
        if (outerMatch) {
            outerTextCallback(outerMatch[1]);
            innerParse(outerMatch[2]);
            outerTextCallback(outerMatch[3]);
        } else {
            outerTextCallback(text);
        }
    }
    outerParse(textToParse);
}

function interpolationMarkupPreprocessor(node) {
    // only needs to work with text nodes
    if (node.nodeType === 3 && node.nodeValue && node.nodeValue.indexOf('{{') !== -1) {
        var nodes = [];
        function addTextNode(text) {
            if (text)
                nodes.push(document.createTextNode(text));
        }
        function wrapExpr(expressionText) {
            if (expressionText)
                nodes.push.apply(nodes, ko_punches_interpolationMarkup.wrapExpresssion(expressionText));
        }
        parseInterpolationMarkup(node.nodeValue, addTextNode, wrapExpr)

        if (nodes.length > 1) {
            if (node.parentNode) {
                for (var i = 0; i < nodes.length; i++) {
                    node.parentNode.insertBefore(nodes[i], node);
                }
                node.parentNode.removeChild(node);
            }
            return nodes;
        }
    }
}

function wrapExpresssion(expressionText) {
    return [
        document.createComment("ko text:" + expressionText),
        document.createComment("/ko")
    ];
};

function enableInterpolationMarkup() {
    setNodePreprocessor(interpolationMarkupPreprocessor);
}

// Export the preprocessor functions
var ko_punches_interpolationMarkup = ko_punches.interpolationMarkup = {
    preprocessor: interpolationMarkupPreprocessor,
    enable: enableInterpolationMarkup,
    wrapExpresssion: wrapExpresssion
};


var dataBind = 'data-bind';
function attributeInterpolationMarkerPreprocessor(node) {
    if (node.nodeType === 1 && node.attributes.length) {
        var dataBindAttribute = node.getAttribute(dataBind);
        for (var attrs = node.attributes, i = attrs.length-1; i >= 0; --i) {
            var attr = attrs[i];
            if (attr.specified && attr.name != dataBind && attr.value.indexOf('{{') !== -1) {
                var parts = [], attrBinding = 0;
                function addText(text) {
                    if (text)
                        parts.push('"' + text.replace(/"/g, '\\"') + '"');
                }
                function addExpr(expressionText) {
                    if (expressionText) {
                        attrBinding = expressionText;
                        parts.push('ko.unwrap(' + expressionText + ')');
                    }
                }
                parseInterpolationMarkup(attr.value, addText, addExpr);

                if (parts.length > 1) {
                    attrBinding = '""+' + parts.join('+');
                }

                if (attrBinding) {
                    attrBinding = 'attr.' + attr.name + ':' + attrBinding;
                    if (!dataBindAttribute) {
                        dataBindAttribute = attrBinding
                    } else {
                        dataBindAttribute += ',' + attrBinding;
                    }
                    node.setAttribute(dataBind, dataBindAttribute);
                    node.removeAttributeNode(attr);
                }
            }
        }
    }
}

function enableAttributeInterpolationMarkup() {
    setNodePreprocessor(attributeInterpolationMarkerPreprocessor);
}

var ko_punches_attributeInterpolationMarkup = ko_punches.attributeInterpolationMarkup = {
    preprocessor: attributeInterpolationMarkerPreprocessor,
    enable: enableAttributeInterpolationMarkup
};
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

/* Copyright (c) 2010-2013 Marcus Westin */

(function(e){function o(){try{return r in e&&e[r]}catch(t){return!1}}var t={},n=e.document,r="localStorage",i="script",s;t.disabled=!1,t.version="1.3.17",t.set=function(e,t){},t.get=function(e,t){},t.has=function(e){return t.get(e)!==undefined},t.remove=function(e){},t.clear=function(){},t.transact=function(e,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=t.get(e,n);r(i),t.set(e,i)},t.getAll=function(){},t.forEach=function(){},t.serialize=function(e){return JSON.stringify(e)},t.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=e[r],t.set=function(e,n){return n===undefined?t.remove(e):(s.setItem(e,t.serialize(n)),n)},t.get=function(e,n){var r=t.deserialize(s.getItem(e));return r===undefined?n:r},t.remove=function(e){s.removeItem(e)},t.clear=function(){s.clear()},t.getAll=function(){var e={};return t.forEach(function(t,n){e[t]=n}),e},t.forEach=function(e){for(var n=0;n<s.length;n++){var r=s.key(n);e(r,t.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=e.apply(t,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(/^d/,"___$&").replace(c,"___")}t.set=l(function(e,n,i){return n=h(n),i===undefined?t.remove(n):(e.setAttribute(n,t.serialize(i)),e.save(r),i)}),t.get=l(function(e,n,r){n=h(n);var i=t.deserialize(e.getAttribute(n));return i===undefined?r:i}),t.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),t.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),t.getAll=function(e){var n={};return t.forEach(function(e,t){n[e]=t}),n},t.forEach=l(function(e,n){var r=e.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,t.deserialize(e.getAttribute(s.name)))})}try{var p="__storejs__";t.set(p,p),t.get(p)!=p&&(t.disabled=!0),t.remove(p)}catch(f){t.disabled=!0}t.enabled=!t.disabled,typeof module!="undefined"&&module.exports&&this.module!==module?module.exports=t:typeof define=="function"&&define.amd?define(t):e.store=t})(Function("return this")())
;
(function() {
  var cropImage, fadeInElement, link_to, link_to_rel, link_to_span, loadScript, timeFromUnix,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Array.prototype.indexAt = function(val) {
    var i, _i, _ref;
    for (i = _i = 0, _ref = this.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
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

  this.SelectOpts = (function() {
    function SelectOpts() {
      this.find = __bind(this.find, this);
      this.add = __bind(this.add, this);
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
      var obj, _i, _len, _ref;
      _ref = this.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        obj = _ref[_i];
        if (obj.val === val.toString()) {
          return obj.str;
        }
      }
      return "";
    };

    return SelectOpts;

  })();

  this.PageTimer = (function() {
    function PageTimer(func, time) {
      this.increasePollTime = __bind(this.increasePollTime, this);
      this.getFrequency = __bind(this.getFrequency, this);
      this.setFrequency = __bind(this.setFrequency, this);
      this.isRunning = __bind(this.isRunning, this);
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
      this.callback = func;
      this.frequency = time * 1000;
      this.t_id = -1;
    }

    PageTimer.prototype.start = function() {
      if (this.t_id !== -1) {
        return;
      }
      return this.t_id = setInterval(this.callback, this.frequency);
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

  this.Notifier = (function() {
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

  this.TimeLength = (function() {
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
      return "" + val + " " + attr;
    };

    return TimeLength;

  })();

  TimeLength.DAY = 86400;

  TimeLength.YEAR = 31536000;

  this.SupportManager = (function() {
    function SupportManager() {}

    return SupportManager;

  })();

  SupportManager.hasFormData = function() {
    return window.FormData != null;
  };

  SupportManager.canUpload = function() {
    return SupportManager.hasFormData();
  };

  this.AuthToken = (function() {
    function AuthToken(data) {
      var key, val, _ref;
      this.data = data;
      this.toJSON = __bind(this.toJSON, this);
      this.is_expired = __bind(this.is_expired, this);
      this.timeLeft = __bind(this.timeLeft, this);
      _ref = this.data;
      for (key in _ref) {
        val = _ref[key];
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

  this.AssetsLibrary = {};

  if (window.console == null) {
    window.console = {
      log: function() {}
    };
  }

  loadScript = function(u, d) {
    var _ref;
    d = (_ref = typeof d !== 'undefined') != null ? _ref : {
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
  this.QuickScript = {};

  this.QS = QuickScript;

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
        return "" + count + " " + single;
      } else {
        return "" + count + " " + plural;
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
    objectToArray: function(obj) {
      var key, ret, val;
      return ret = (function() {
        var _results;
        _results = [];
        for (key in obj) {
          val = obj[key];
          _results.push({
            'key': key,
            'value': val
          });
        }
        return _results;
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
        var i, kv, pair, ret, str, _i, _len, _ref;
        i = url.indexOf("?");
        if (i === -1) {
          return {};
        }
        str = url.substring(i + 1);
        ret = {};
        _ref = str.split("&");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          pair = _ref[_i];
          kv = pair.split("=");
          if (!QS.utils.isBlank(kv[0])) {
            ret[kv[0]] = kv[1];
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
    })(this)
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
    self.prototype.handle = function(ev, callback) {
      var _base;
      this._events || (this._events = {});
      (_base = this._events)[ev] || (_base[ev] = []);
      return this._events[ev].push(callback);
    };
    return self.prototype.trigger = function(ev, data) {
      var cbs;
      QS.log("EVENTABLE::TRIGGER : " + ev, 5);
      this._events || (this._events = {});
      cbs = this._events[ev];
      if (cbs != null) {
        return cbs.forEach(function(callback) {
          return callback(data);
        });
      }
    };
  };

  if (SupportManager.hasFormData()) {
    QuickScript.ajax = function(opts) {
      var aval, data, first, key, req, url, val, _i, _len, _ref, _ref1, _ref2;
      data = new FormData();
      req = new XMLHttpRequest();
      url = opts.url;
      if (opts.async == null) {
        opts.async = true;
      }
      opts.data || (opts.data = {});
      if (opts.type === "GET") {
        url = url + "?";
        first = true;
        _ref = opts.data;
        for (key in _ref) {
          val = _ref[key];
          if (val instanceof Array) {
            for (_i = 0, _len = val.length; _i < _len; _i++) {
              aval = val[_i];
              url = url + ("" + key + (escape('[]')) + "=" + (escape(aval)) + "&");
            }
          } else {
            url = url + ("" + key + "=" + (escape(val)) + "&");
          }
        }
        url = url.substring(0, url.length - 1);
      } else {
        _ref1 = opts.data;
        for (key in _ref1) {
          val = _ref1[key];
          data.append(key, val);
        }
      }
      req.onreadystatechange = function(ev) {
        var resp;
        if (req.readyState === 4) {
          if (opts.loading != null) {
            opts.loading(false);
          }
          try {
            resp = JSON.parse(req.responseText);
          } catch (_error) {
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
      if (opts.error != null) {
        req.upload.addEventListener('error', opts.error);
      }
      if (opts.progress != null) {
        req.upload.addEventListener('progress', function(ev) {
          return opts.progress(ev, Math.floor(ev.loaded / ev.total * 100));
        });
      }
      req.open(opts.type, url, opts.async);
      _ref2 = opts.headers;
      for (key in _ref2) {
        val = _ref2[key];
        if (val != null) {
          req.setRequestHeader(key, val);
        }
      }
      req.withCredentials = true;
      if (opts.loading != null) {
        opts.loading(true);
      }
      if (opts.type === "GET") {
        req.send();
      } else {
        req.send(data);
      }
      return req;
    };
  } else {
    QuickScript.ajax = function(opts) {
      var aval, data_s, key, req, url, val, _i, _len, _ref, _ref1;
      req = new XMLHttpRequest();
      url = opts.url;
      if (opts.async == null) {
        opts.async = true;
      }
      data_s = '';
      _ref = opts.data;
      for (key in _ref) {
        val = _ref[key];
        if (val instanceof Array) {
          for (_i = 0, _len = val.length; _i < _len; _i++) {
            aval = val[_i];
            data_s = data_s + ("" + key + (escape('[]')) + "=" + (escape(aval)) + "&");
          }
        } else {
          data_s = data_s + ("" + key + "=" + (escape(val)) + "&");
        }
      }
      data_s = data_s.substring(0, data_s.length - 1);
      if (opts.type === "GET") {
        url = url + "?" + data_s;
      }
      req.onreadystatechange = function(ev) {
        var resp;
        if (req.readyState === 4) {
          if (opts.loading != null) {
            opts.loading(false);
          }
          try {
            resp = JSON.parse(req.responseText);
          } catch (_error) {
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
      req.open(opts.type, url, opts.async);
      _ref1 = opts.headers;
      for (key in _ref1) {
        val = _ref1[key];
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
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Model = (function() {
    Model.prototype.init = function() {};

    Model.prototype.extend = function() {};

    function Model(data, collection, opts) {
      this.absorb = __bind(this.absorb, this);
      this.checkDirty = __bind(this.checkDirty, this);
      this.toClone = __bind(this.toClone, this);
      this.getClass = __bind(this.getClass, this);
      this.toJSON = __bind(this.toJSON, this);
      this.toAPIParam = __bind(this.toAPIParam, this);
      this.toAPI = __bind(this.toAPI, this);
      this.toJS = __bind(this.toJS, this);
      this.removeFromCollection = __bind(this.removeFromCollection, this);
      this["delete"] = __bind(this["delete"], this);
      this.reloadOpts = __bind(this.reloadOpts, this);
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
      this.addComputed('is_loading', function() {
        return this.model_state() === ko.modelStates.LOADING;
      });
      this.addComputed('is_saving', function() {
        return this.model_state() === ko.modelStates.SAVING;
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

    Model.prototype.handleData = function(resp) {
      ko.absorbModel(resp, this);
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
      console.log("Saving fields " + fields);
      if (this.model_state() !== ko.modelStates.READY) {
        console.log("Save postponed.");
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
        success: (function(_this) {
          return function(resp) {
            _this.handleData(resp.data);
            return typeof callback === "function" ? callback(resp) : void 0;
          };
        })(this),
        error: (function(_this) {
          return function(resp) {
            QS.log("Save error encountered");
            _this.model_state(ko.modelStates.READY);
            return typeof callback === "function" ? callback(resp) : void 0;
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
        console.log("Delete postponed.");
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
      var obj, prop, _i, _len;
      flds || (flds = this.fields);
      obj = {};
      for (_i = 0, _len = flds.length; _i < _len; _i++) {
        prop = flds[_i];
        if (typeof this[prop].toJS === 'function') {
          obj[prop] = this[prop].toJS();
        } else {
          obj[prop] = this[prop]();
        }
      }
      return obj;
    };

    Model.prototype.toAPI = function(flds) {
      var obj, prop, val, _i, _len;
      flds || (flds = this.fields);
      obj = {};
      for (_i = 0, _len = flds.length; _i < _len; _i++) {
        prop = flds[_i];
        if (typeof this[prop].toAPI === 'function') {
          val = this[prop].toAPI();
          if (val !== null) {
            if (val instanceof File) {
              obj[prop] = val;
            } else {
              obj[prop] = JSON.stringify(val);
            }
          }
        } else if (typeof this[prop].toJS === 'function') {
          obj[prop] = this[prop].toJS();
        } else {
          val = this[prop]();
          if (val instanceof Object) {
            obj[prop] = JSON.stringify(val);
          } else {
            if (val != null) {
              obj[prop] = val;
            } else {
              obj[prop] = '';
            }
          }
        }
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

    Model.prototype.absorb = function(model) {
      this.reset();
      return this.handleData(model.toJS());
    };

    return Model;

  })();

  Model.includeCollection = function(self) {
    self || (self = this);
    return self.Collection = (function(_super) {
      __extends(_Class, _super);

      function _Class(opts) {
        _Class.__super__.constructor.call(this, opts);
        this.adapter = self.Adapter;
        this.model = self;
      }

      return _Class;

    })(Collection);
  };

  Model.includeViewCollection = function(self) {
    self || (self = this);
    return self.Collection = (function(_super) {
      __extends(_Class, _super);

      function _Class(opts) {
        _Class.__super__.constructor.call(this, opts);
        this.adapter = self.Adapter;
        this.model = self;
      }

      return _Class;

    })(ViewCollection);
  };

  Model.includeAdapter = function(adapter, self) {
    self || (self = this);
    if ((adapter.save == null) && (adapter.load == null)) {
      adapter.type || (adapter.type = ModelAdapter);
      adapter = new adapter.type(adapter);
    }
    self.Adapter = adapter;
    return self.prototype.initAdapter = ((function(_this) {
      return function() {
        return adapter;
      };
    })(this));
  };

  this.FileModel = (function(_super) {
    __extends(FileModel, _super);

    function FileModel() {
      this.toAPIParam = __bind(this.toAPIParam, this);
      this.toAPI = __bind(this.toAPI, this);
      this.toJS = __bind(this.toJS, this);
      this.reset = __bind(this.reset, this);
      return FileModel.__super__.constructor.apply(this, arguments);
    }

    FileModel.prototype.extend = function() {
      this.input = {};
      this.input.url = ko.observable('');
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
              console.log('input loaded');
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
        if (this.input.has_file()) {
          return this.input.file_uri();
        } else {
          return this.input.url();
        }
      }, this);
      this.input.is_present = ko.computed(function() {
        return this.input.has_url() || this.input.has_file();
      }, this);
      this.input.present = this.input.is_present;
      this.input.is_image = ko.computed(function() {
        if (this.input.has_file() && (this.input.file().type != null)) {
          return this.input.file().type.match('image.*');
        } else if (this.input.has_url()) {
          return /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(this.input.url());
        } else {
          return false;
        }
      }, this);
      return this.input.clear = (function(_this) {
        return function() {
          _this.input.url('');
          return _this.input.files([]);
        };
      })(this);
    };

    FileModel.prototype.reset = function() {
      FileModel.__super__.reset.apply(this, arguments);
      return this.input.clear();
    };

    FileModel.prototype.toJS = function() {
      if (this.input.has_file()) {
        return this.input.file();
      } else if (this.input.has_url()) {
        return {
          type: 'url',
          data: this.input.url()
        };
      } else {
        return null;
      }
    };

    FileModel.prototype.toAPI = function() {
      return QS.utils.prepareAPIParam(this.toJS());
    };

    FileModel.prototype.toAPIParam = function() {
      return this.toAPI();
    };

    return FileModel;

  })(Model);

  this.Collection = (function() {
    Collection.prototype.init = function() {};

    function Collection(opts) {
      this.toAPIParam = __bind(this.toAPIParam, this);
      this.toAPI = __bind(this.toAPI, this);
      this.toJS = __bind(this.toJS, this);
      this.absorb = __bind(this.absorb, this);
      this.length = __bind(this.length, this);
      this.hasItems = __bind(this.hasItems, this);
      this.prevPage = __bind(this.prevPage, this);
      this.nextPage = __bind(this.nextPage, this);
      this.computeFilteredItems = __bind(this.computeFilteredItems, this);
      this.addNamedSort = __bind(this.addNamedSort, this);
      this.addNamedFilter = __bind(this.addNamedFilter, this);
      this.handleItemDelete = __bind(this.handleItemDelete, this);
      this.handleItemData = __bind(this.handleItemData, this);
      this.handleData = __bind(this.handleData, this);
      this.update = __bind(this.update, this);
      this.load = __bind(this.load, this);
      this.setScope = __bind(this.setScope, this);
      this.extend = __bind(this.extend, this);
      var key, val;
      this.opts = {};
      for (key in opts) {
        val = opts[key];
        this.opts[key] = val;
      }
      this.events = {};
      this._reqid = 0;
      this.scope = ko.observable(this.opts.scope || []);
      this.items = ko.observableArray([]);
      this.page = ko.observable(1);
      this.limit = ko.observable(this.opts.limit || 100);
      this.title = ko.observable(this.opts.title || 'Collection');
      this.count = ko.observable(0);
      this.extra_params = ko.observable(this.opts.extra_params || {});
      this.model = this.opts.model || Model;
      this.adapter = this.opts.adapter || new ModelAdapter();
      this.model_state = ko.observable(0);
      this.named_filters = {};
      this.named_sorts = {};
      this.filter = ko.observable({});
      this.filtered_items = this.computeFilteredItems(this.filter);
      this.is_ready = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.READY;
      }, this);
      this.is_loading = ko.dependentObservable(function() {
        return this.model_state() === ko.modelStates.LOADING;
      }, this);
      this.is_updating = ko.dependentObservable(function() {
        return (this.model_state() === ko.modelStates.LOADING) || (this.model_state() === ko.modelStates.UPDATING);
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
      this.hasItems = ko.dependentObservable(function() {
        return this.items().length > 0;
      }, this);
      this.has_items = ko.computed(function() {
        return this.items().length > 0;
      }, this);
      this.length = ko.computed(function() {
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
      op || (op = Collection.REPLACE);
      if (load_opts.overwrite_request === false) {
        reqid = this._reqid;
      } else {
        reqid = ++this._reqid;
      }
      opts = this.loadOptions();
      opts.scope = scope instanceof Array ? scope : JSON.stringify(scope);
      this.adapter.index({
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
      if (op === Collection.REPLACE) {
        this.model_state(ko.modelStates.LOADING);
      }
      if (op === Collection.UPDATE) {
        return this.model_state(ko.modelStates.UPDATING);
      } else if (op === Collection.APPEND) {
        return this.model_state(ko.modelStates.APPENDING);
      } else if (op === Collection.INSERT) {
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
      if (scope != null) {
        this.scope(scope);
      }
      return this._load(this.scope(), Collection.REPLACE, opts);
    };

    Collection.prototype.update = function(opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(this.scope(), Collection.UPDATE, opts);
    };

    Collection.prototype.insert = function(scope, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(scope, Collection.INSERT, opts);
    };

    Collection.prototype.append = function(scope, opts) {
      if ((opts == null) || (opts instanceof Function)) {
        opts = {
          callback: opts
        };
      }
      return this._load(scope, Collection.APPEND, opts);
    };

    Collection.prototype.handleData = function(data, op) {
      var c_el, c_id, curr_a, curr_len, id_h, idx, item, itm, leftovers, max_len, model, models, new_a, new_len, r_el, r_id, same_itm, _i, _j, _k, _len, _len1, _ref;
      if (data == null) {
        return;
      }
      models = [];
      op || (op = Collection.UPDATE);
      curr_a = this.items();
      id_h = {};
      for (_i = 0, _len = curr_a.length; _i < _len; _i++) {
        itm = curr_a[_i];
        id_h[itm.id()] = itm;
      }
      if (op === Collection.UPDATE) {
        curr_len = this.items().length;
        new_a = data;
        new_len = data.length;
        max_len = Math.max(curr_len, new_len);
        if (max_len > 0) {
          for (idx = _j = _ref = max_len - 1; _ref <= 0 ? _j <= 0 : _j >= 0; idx = _ref <= 0 ? ++_j : --_j) {
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
      } else if (op === Collection.REPLACE) {
        models = (function() {
          var _k, _len1, _results;
          _results = [];
          for (_k = 0, _len1 = data.length; _k < _len1; _k++) {
            item = data[_k];
            _results.push(new this.model(item, this));
          }
          return _results;
        }).call(this);
        this.items(models);
      } else {
        leftovers = [];
        for (idx = _k = 0, _len1 = data.length; _k < _len1; idx = ++_k) {
          item = data[idx];
          same_itm = id_h[item.id];
          if (same_itm != null) {
            same_itm.handleData(item);
          } else {
            model = new this.model(item, this);
            leftovers.push(model);
          }
        }
        if (op === Collection.INSERT) {
          if (leftovers.length > 0) {
            this.items(leftovers.concat(this.items()));
          }
        } else if (op === Collection.APPEND) {
          if (leftovers.length > 0) {
            this.items(this.items().concat(leftovers));
          }
        }
      }
      return this.model_state(ko.modelStates.READY);
    };

    Collection.prototype.handleItemData = function(data) {
      var item;
      item = this.getItemById(data.id);
      if (item != null) {
        item.handleData(data);
      }
      return item;
    };

    Collection.prototype.handleItemDelete = function(data) {
      return this.removeItemById(data.id);
    };

    Collection.prototype.addNamedFilter = function(name, fn) {
      this.named_filters[name] = fn;
      return this["filter_" + name] = ko.computed(function() {
        return this.items().filter(fn);
      }, this);
    };

    Collection.prototype.addNamedSort = function(name, fn) {
      return this.named_sorts[name] = fn;
    };

    Collection.prototype.computeFilteredItems = function(filter) {
      return ko.computed(function() {
        var fa, fo, fsv, items, sort;
        fo = ko.unwrap(filter);
        fsv = fo.select || [];
        sort = fo.sort || null;
        fa = fsv instanceof Array ? fsv : [fsv];
        items = this.items().filter((function(_this) {
          return function(el) {
            var filt, filt_fn, ret, _i, _len;
            ret = true;
            for (_i = 0, _len = fa.length; _i < _len; _i++) {
              filt = fa[_i];
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
      }, this);
    };

    Collection.prototype.nextPage = function() {
      this.page(this.page() + 1);
      return this.update();
    };

    Collection.prototype.prevPage = function() {
      this.page(this.page() - 1);
      return this.update();
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
      var idx, item, _i, _len, _ref;
      idx = 0;
      _ref = this.items();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
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
      this._reqid = 0;
      this.page(1);
      return this.items([]);
    };

    Collection.prototype.absorb = function(model) {
      this.reset();
      return this.handleData(model.toJS());
    };

    Collection.prototype.toJS = function() {
      var item, objs, _i, _len, _ref;
      objs = [];
      _ref = this.items();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        objs.push(item.toJS());
      }
      return objs;
    };

    Collection.prototype.toAPI = function() {
      var item, objs, _i, _len, _ref;
      objs = [];
      _ref = this.items();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        objs.push(item.toAPI());
      }
      objs;
      return JSON.stringify(objs);
    };

    Collection.prototype.toAPIParam = function() {
      return this.toAPI();
    };

    return Collection;

  })();

  Collection.REPLACE = 0;

  Collection.INSERT = 1;

  Collection.APPEND = 2;

  Collection.UPDATE = 3;

  this.ViewCollection = (function(_super) {
    __extends(ViewCollection, _super);

    function ViewCollection() {
      this.computeFilteredViews = __bind(this.computeFilteredViews, this);
      this.addViewSort = __bind(this.addViewSort, this);
      this.addViewFilter = __bind(this.addViewFilter, this);
      this.setView = __bind(this.setView, this);
      this.updateViews = __bind(this.updateViews, this);
      return ViewCollection.__super__.constructor.apply(this, arguments);
    }

    ViewCollection.prototype.extend = function(opts) {
      ViewCollection.__super__.extend.call(this);
      this.views = ko.observableArray([]);
      this.view_model = this.opts.view || View;
      this.view_owner = this.opts.view_owner || null;
      this.named_view_filters = {};
      this.named_view_sorts = {};
      this.view_filter = ko.observable({});
      this.template = ko.observable(this.opts.template);
      this.filtered_views = this.computeFilteredViews(this.view_filter);
      return this.items.subscribe(this.updateViews);
    };

    ViewCollection.prototype.updateViews = function(items) {
      var ca, cm, idx, max_len, mh, ra, rm, same_view, view_cls, view_name, view_owner, _i, _ref;
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
        for (idx = _i = _ref = max_len - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
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
            var filt, filt_fn, ret, _i, _len;
            ret = true;
            for (_i = 0, _len = fa.length; _i < _len; _i++) {
              filt = fa[_i];
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

  })(this.Collection);

  this.View = (function() {
    QuickScript.includeEventable(View);

    View.prototype.init = function() {};

    function View(name, owner, model, opts) {
      this.name = name;
      this.owner = owner;
      this.model = model;
      this.opts = opts;
      this.toAPIParam = __bind(this.toAPIParam, this);
      this.toAPI = __bind(this.toAPI, this);
      this.ensure = __bind(this.ensure, this);
      this.afterRender = __bind(this.afterRender, this);
      this.validate_fields = __bind(this.validate_fields, this);
      this.validate_for = __bind(this.validate_for, this);
      this.addFields = __bind(this.addFields, this);
      this.reload = __bind(this.reload, this);
      if (this.owner != null) {
        this.app = this.owner.app;
      }
      this.views = {};
      this.events = {};
      this.opts || (this.opts = {});
      this.templateID = "view-" + this.name;
      this.fields = [];
      this.view_name = ko.computed(function() {
        return this.templateID;
      }, this);
      this.is_visible = ko.observable(false);
      this.is_loading = ko.observable(false);
      this.is_saving = ko.observable(false);
      this.error = ko.observable('');
      this.has_error = ko.computed((function() {
        return this.error().length > 0;
      }), this);
      this.view = null;
      this.task = ko.observable(null);
      this.prev_task = ko.observable(null);
      this.transition = {
        type: 'fade',
        opts: {
          'slide_pos': ko.observable(0),
          'slide_index': ko.observable(0)
        }
      };
      this.transition.has_slide_css = (function(_this) {
        return function(css, idx) {
          var _base;
          return typeof (_base = _this.transition.opts['slide_css' + css]()).includes === "function" ? _base.includes(idx) : void 0;
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
      var name, view, _ref;
      _ref = this.views;
      for (name in _ref) {
        view = _ref[name];
        view.hide();
      }
      this.is_visible(false);
      if (this.onHidden != null) {
        return this.onHidden();
      }
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

    View.prototype.addView = function(name, view_class, tpl) {
      if (this.views[name] != null) {
        return;
      }
      this.views[name] = new view_class(name, this);
      this.views[name].templateID = tpl;
      this["is_task_" + name] = ko.computed(function() {
        return this.task() === name;
      }, this);
      return this["select_task_" + name] = (function(_this) {
        return function() {
          return _this.selectView(name);
        };
      })(this);
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
      return Object.keys(this.views).length;
    };

    View.prototype.viewList = function() {
      var list, name, view;
      return list = (function() {
        var _ref, _results;
        _ref = this.views;
        _results = [];
        for (name in _ref) {
          view = _ref[name];
          _results.push(view);
        }
        return _results;
      }).call(this);
    };

    View.prototype.selectView = function(view_name) {
      var args, last_view, view;
      args = Array.prototype.slice.call(arguments);
      last_view = this.view;
      view = this.views[view_name];
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

    View.prototype.isTask = function(task) {
      return this.task() === task;
    };

    View.prototype.getViewName = function(view) {
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
      var arr;
      arr = Object.keys(this.views);
      return arr.indexAt(view_name);
    };

    View.prototype.getViewByIndex = function(idx) {
      var keys;
      keys = Object.keys(this.views);
      return this.views[keys[idx]];
    };

    View.prototype.afterRender = function() {
      if (this.transition.type === 'slide') {
        return;
        return setTimeout((function(_this) {
          return function() {
            var idx, new_el;
            console.log('after render');
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
      var obj, prop, val, _i, _len;
      flds || (flds = this.fields);
      obj = {};
      for (_i = 0, _len = flds.length; _i < _len; _i++) {
        prop = flds[_i];
        if (typeof this[prop].toAPI === 'function') {
          val = this[prop].toAPI();
          if (val !== null) {
            if (val instanceof File) {
              obj[prop] = val;
            } else {
              obj[prop] = JSON.stringify(val);
            }
          }
        } else if (typeof this[prop].toJS === 'function') {
          obj[prop] = this[prop].toJS();
        } else {
          val = this[prop]();
          if (val instanceof Object) {
            obj[prop] = JSON.stringify(val);
          } else {
            if (val !== null) {
              obj[prop] = val;
            }
          }
        }
      }
      return obj;
    };

    View.prototype.toAPIParam = function(flds) {
      return QS.utils.prepareAPIParam(this.toAPI(flds));
    };

    return View;

  })();

  View.registerComponent = function(name, template_opts, view_class) {
    var topts;
    view_class || (view_class = this);
    QS.registered_components || (QS.registered_components = {});
    if (typeof template_opts === 'string') {
      topts = {
        element_id: template_opts
      };
    } else {
      topts = template_opts;
    }
    topts.loader = 'QuickScript';
    QS.registered_components[name] = {
      template_opts: topts,
      view_class: view_class
    };
    return ko.components.register(name, {
      viewModel: {
        createViewModel: function(params, componentInfo) {
          var context, model, new_view, owner, view, vn;
          context = ko.contextFor(componentInfo.element);
          view = params.view;
          if (view != null) {
            new_view = view;
          } else {
            model = params.model;
            owner = params.owner || context['$view'];
            vn = model != null ? "" + name + "-" + (typeof model.id === "function" ? model.id() : void 0) : name;
            new_view = new view_class(vn, owner, model, params);
          }
          if (componentInfo != null) {
            new_view.element = componentInfo.element;
          }
          return new_view;
        }
      },
      template: topts
    });
  };

  this.Host = (function() {
    function Host(url) {
      this.resumeRequests = __bind(this.resumeRequests, this);
      this.pauseRequests = __bind(this.pauseRequests, this);
      this.executeRequest = __bind(this.executeRequest, this);
      this.executeQueuedRequests = __bind(this.executeQueuedRequests, this);
      this.request = __bind(this.request, this);
      this.url = url;
      this.headers = {};
      this.requests = [];
      this.state = Host.READY;
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
      if (this.state === Host.PAUSED) {
        this.requests.push(req);
        return typeof req.loading === "function" ? req.loading(true) : void 0;
      } else {
        return this.executeRequest(req);
      }
    };

    Host.prototype.executeQueuedRequests = function() {
      var req, _results;
      _results = [];
      while (this.requests.length > 0) {
        req = this.requests.shift();
        _results.push(this.executeRequest(req));
      }
      return _results;
    };

    Host.prototype.executeRequest = function(req) {
      var callback_fn, key, resp_fn, val, _base, _ref;
      req = this.process_request(req);
      resp_fn = req.callback || req.success;
      callback_fn = (function(_this) {
        return function(resp, status) {
          resp = _this.process_response(resp, status);
          return typeof resp_fn === "function" ? resp_fn(resp, status) : void 0;
        };
      })(this);
      if (req.type == null) {
        req.type = 'POST';
      }
      req.url = this.url + req.url;
      req.success = callback_fn;
      if (req.error == null) {
        req.error = callback_fn;
      }
      _ref = this.headers;
      for (key in _ref) {
        val = _ref[key];
        (_base = req.headers)[key] || (_base[key] = val);
      }
      return QS.ajax(req);
    };

    Host.prototype.pauseRequests = function() {
      return this.state = Host.PAUSED;
    };

    Host.prototype.resumeRequests = function() {
      this.state = Host.READY;
      return this.executeQueuedRequests();
    };

    return Host;

  })();

  Host.READY = 1;

  Host.PAUSED = 2;

  Host.process_api_response = function(resp, status) {
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

  this.ModelAdapter = (function() {
    function ModelAdapter(opts) {
      var prop, val;
      this.save_url = null;
      this.load_url = null;
      this.index_url = null;
      this.host = ModelAdapter.host;
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

    return ModelAdapter;

  })();

  ModelAdapter.host = new Host("/api/");

  this.AccountAdapter = (function() {
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
      this.host = ModelAdapter.host;
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

  this.LocalStore = store;

  this.Application = (function(_super) {
    __extends(Application, _super);

    function Application(user_model) {
      this.host = __bind(this.host, this);
      this.getUserToken = __bind(this.getUserToken, this);
      this.app = this;
      this.location = window.history.location || window.location;
      this.path = ko.observable(null);
      this.previous_path = ko.observable(null);
      this.path_anchor = ko.observable('');
      this.path_params = ko.observable({});
      this.path_parts = [];
      this.title = ko.observable('');
      this.redirect_on_login = ko.observable(null);
      this.auth_method = 'session';
      this.redirect_on_login(LocalStore.get('app.redirect_on_login'));
      this.redirect_on_login.subscribe((function(_this) {
        return function(val) {
          return LocalStore.set('app.redirect_on_login', val);
        };
      })(this));
      ko.addTemplate("viewbox", "<div data-bind='foreach : {data: viewList(), as: \"$view\"}'>\n	<div data-bind=\"fadeVisible : is_visible(), template : { name : getViewName, afterRender : afterRender, if : is_visible() }, attr : { id : templateID, 'class' : templateID }, bindelem : true\"></div>\n</div>");
      ko.addTemplate("viewbox-slide", "<div class=\"view-slider\" data-bind=\"style : {width : transition.opts.width + 'px', height : transition.opts.height + 'px'}, carousel : task\">\n	<div data-bind='foreach : viewList()'>\n		<div class=\"slide-item\" data-bind=\"template : { name : getViewName }, attr : {id : templateID, class : 'slide-item slide-item-' + $index()}, css : {}, style : {width : owner.transition.opts.width + 'px', height : owner.transition.opts.height + 'px'}, bindelem : true\"></div>\n	</div>\n</div>");
      this.configure();
      this.account_model || (this.account_model = Model);
      this.current_user = new this.account_model();
      this.current_user_token = ko.observable(null);
      this.is_logged_in = ko.computed(function() {
        if (this.auth_method === 'session') {
          return !this.current_user.is_new();
        } else if (this.auth_method === 'token') {
          return this.current_user_token() != null;
        } else {
          return false;
        }
      }, this);
      Application.__super__.constructor.call(this, 'app', null);
    }

    Application.prototype.configure = function() {};

    Application.prototype.route = function() {
      var path;
      path = this.location.pathname;
      console.log("Loading path '" + path + "'");
      this.setTitle(this.name, true);
      this.previous_path(this.path());
      this.path_parts = path.split('/');
      if (this.path_parts[this.path_parts.length - 1] !== '') {
        this.path_parts.push('');
      }
      this.path(path);
      this.path_params(QS.utils.getURLParams(this.location.href));
      this.path_anchor(this.location.hash.substring(1));
      return this.handlePath(path);
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
        token = new AuthToken(data);
        LocalStore.set('app.current_user_token', token.data);
        return this.current_user_token(token);
      } else {
        LocalStore.set('app.current_user_token', null);
        return this.current_user_token(null);
      }
    };

    Application.prototype.getUserToken = function() {
      var data, old_token, token;
      data = LocalStore.get('app.current_user_token');
      token = data != null ? new AuthToken(data) : null;
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
      if (opts.user != null) {
        this.setUser(opts.user);
      }
      if (opts.token != null) {
        this.setUserToken(opts.token);
      }
      if (this.redirect_on_login() !== null) {
        this.redirectTo(this.redirect_on_login());
        return this.redirect_on_login(null);
      } else {
        return this.redirectTo(path);
      }
    };

    Application.prototype.logoutTo = function(path, opts) {
      this.setUser(null);
      this.setUserToken(null);
      return this.redirectTo(path);
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
        return $('title').text("" + this.name + " - " + title);
      }
    };

    return Application;

  })(this.View);

  QuickScript.initialize = function(opts) {
    var app, app_class, current_user;
    app_class = opts.view || 'AppView';
    current_user = opts.user || null;
    QuickScript.initKO();
    app = new window[app_class]();
    if (current_user != null) {
      app.setUser(current_user);
    }
    window.onpopstate = function() {
      return app.route();
    };
    $('body').koBind(app);
    app.afterRender();
    $('body').on('click', 'a', function() {
      var path;
      if (this.href.includes(window.location.host)) {
        app.redirectTo(this.href);
        return false;
      } else if ((path = this.getAttribute('path')) != null) {
        app.redirectTo(path);
        return true;
      } else {
        return true;
      }
    });
    app.route();
    return app;
  };

}).call(this);
(function() {
  QuickScript.initKO = function() {
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
        shouldDisplay = ko.utils.unwrapObservable(valueAccessor());
        if (shouldDisplay) {
          return $(element).show();
        } else {
          return $(element).hide();
        }
      },
      update: function(element, value) {
        var shouldDisplay;
        shouldDisplay = value();
        if (shouldDisplay) {
          return $(element).fadeIn('slow');
        } else {
          return $(element).hide();
        }
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
            list: opts[3] || opts[0].views
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
    ko.bindingHandlers.viewOptions = {
      update: function(element, valueAccessor) {
        var opts, view, views, _i, _len;
        $(element).empty();
        opts = valueAccessor();
        views = ko.utils.unwrapObservable(opts[0]);
        for (_i = 0, _len = views.length; _i < _len; _i++) {
          view = views[_i];
          $(element).append("<option value='" + (opts[2](view)) + "'>" + (opts[1](view)) + "</option>");
        }
        if (opts[3] != null) {
          return $(element).prepend("<option>" + opts[3] + "</option>");
        }
      }
    };
    ko.bindingHandlers.handleEnter = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        return $(element).keypress(function(ev) {
          var action, val;
          if (ev.keyCode === 13 && !ev.shiftKey) {
            action = valueAccessor();
            val = bindingsAccessor().value;
            val($(element).val());
            action.call(viewModel);
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
            background: 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
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
            background: 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
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
        return viewModel.element = element;
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
        var $el, $panes, click_db, pane, pane_data, str, tab_obs, visible_db, _i, _j, _len, _len1;
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
        for (_i = 0, _len = pane_data.length; _i < _len; _i++) {
          pane = pane_data[_i];
          click_db = "click : function(){" + tab_obs + "('" + pane.key + "');}";
          visible_db = pane.visible != null ? ", visible : " + pane.visible : "";
          str += "<li data-bind=\"css : {active : " + tab_obs + "() == '" + pane.key + "'}\"><a href='' data-bind=\"" + click_db + visible_db + "\">" + pane.title + "</a></li>";
        }
        str += "</ul>";
        str += "<div class='tab-content'>";
        for (_j = 0, _len1 = pane_data.length; _j < _len1; _j++) {
          pane = pane_data[_j];
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
        var $el, $tpl, data, name, node, opts, owner, tpl, tpl_name, view;
        $el = $(element);
        opts = valueAccessor();
        name = opts.name;
        data = opts.data;
        owner = opts.owner;
        view = opts.view || View;
        if (!ko.components.isRegistered(name)) {
          tpl = ((function() {
            var _i, _len, _ref, _results;
            _ref = ko.virtualElements.childNodes(element);
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              node = _ref[_i];
              _results.push(node.outerHTML);
            }
            return _results;
          })()).join(" ");
          tpl_name = "component-" + name;
          ko.addTemplate(tpl_name, tpl);
          view.registerComponent(name, tpl_name);
        }
        bindingContext.componentOwner = owner || viewModel;
        bindingContext.componentData = data;
        $tpl = $("<!-- ko component : {name: '" + name + "', params: {model: $data, owner: $parentContext.componentOwner}} --> <!-- /ko -->");
        ko.virtualElements.setDomNodeChildren(element, $tpl);
        ko.applyBindingsToNode(element, {
          foreach: data
        }, bindingContext);
        return {
          controlsDescendantBindings: true
        };
      }
    };
    ko.virtualElements.allowedBindings.viewComponents = true;
    ko.bindingHandlers.updateContext = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var prop, props, val, _results;
        props = valueAccessor();
        if (typeof props === "string") {
          return bindingContext[props] = viewModel;
        } else {
          _results = [];
          for (prop in props) {
            val = props[prop];
            _results.push(bindingContext[prop] = val);
          }
          return _results;
        }
      }
    };
    ko.bindingHandlers.context = ko.bindingHandlers.updateContext;
    ko.bindingHandlers.scopeAs = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var props;
        props = valueAccessor();
        return bindingContext[props] = viewModel;
      }
    };
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
        deferEvaluation: true
      });
      target.date_str = ko.computed({
        read: function() {
          return target.date().format('mmm d, yyyy');
        },
        deferEvaluation: true
      });
      target.ago_str = ko.computed({
        read: function() {
          return "" + ((new TimeLength(target.date())).toString()) + " ago";
        },
        deferEvaluation: true
      });
      return target;
    };
    ko.extenders.errors = function(target) {
      target.has = function(field) {
        return ko.computed(function() {
          return target()[field] != null;
        }, target);
      };
      target["for"] = function(field) {
        return ko.computed(function() {
          if (target()[field] != null) {
            return target()[field][0];
          } else {
            return null;
          }
        }, target);
      };
      target.any = ko.computed(function() {
        return !jQuery.isEmptyObject(target());
      }, target);
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
        var applyStyles, el, errorCallback, html;
        if (config.loader !== 'QuickScript') {
          callback(null);
        }
        errorCallback = function(msg) {
          throw new Error("Component '" + name + "': " + msg + ".");
        };
        applyStyles = function(el) {
          var $el, props, sel, _ref;
          if (config.style != null) {
            if (typeof config.style === 'string') {
              $('head').append("<style>" + config.style + "</style>");
              return callback(el);
            } else {
              $el = $(el);
              _ref = config.style;
              for (sel in _ref) {
                props = _ref[sel];
                $el.filter(sel).add($el.find(sel)).css(props);
              }
              return callback($el.toArray());
            }
          } else {
            return callback(el);
          }
        };
        if (config.element_id != null) {
          el = document.getElementById(config.element_id);
          if (el != null) {
            return applyStyles(ko.utils.parseHtmlFragment(el.text));
          } else {
            return errorCallback("Template with id '" + config.element_id + "' not found");
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
    ko.utils.appendNodeDataBind = function(node, bind) {
      var db;
      db = node.getAttribute('data-bind');
      if (db != null) {
        return node.setAttribute('data-bind', "" + db + ", " + bind);
      } else {
        return node.setAttribute('data-bind', bind);
      }
    };
    ko.absorbModel = function(data, self) {
      var prop, val;
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
            self[prop] = ko.observable(val);
          }
        } else if (typeof self[prop].handleData === "function") {
          self[prop].handleData(val);
        } else {
          self[prop](val);
        }
        self.fields.pushOnce(prop);
      }
      return self.model_state(ko.modelStates.READY);
    };
    ko.addFields = function(fields, val, self) {
      var prop, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        prop = fields[_i];
        _results.push(ko.addField(prop, val, self));
      }
      return _results;
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
          self["" + field + "_valid"] = ko.computed((function() {
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
          read: fn_opts
        };
      } else {
        opts = fn_opts;
      }
      opts.owner = self;
      opts.deferEvaluation = true;
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
          var val_obj, valid, _i, _len, _ref;
          valid = true;
          _ref = self.validations[field];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            val_obj = _ref[_i];
            valid && (valid = val_obj.test(self[field]()));
          }
          return valid;
        }, self);
      }
    };
    ko.validate_fields = function(fields, fn, self) {
      var field, msgs, val_obj, _i, _j, _len, _len1, _ref;
      msgs = [];
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        field = fields[_i];
        _ref = self.validations[field];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          val_obj = _ref[_j];
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
      var result, _initialState, _isInitiallyDirty;
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
      var prop, ret, _i, _len;
      ret = {};
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        prop = fields[_i];
        ret[prop] = obj[prop];
      }
      return ret;
    };
    ko.addTemplate = function(templateName, templateMarkup) {
      return $('head').append("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
    };
    ko.modelStates = {};
    ko.modelStates.READY = 1;
    ko.modelStates.LOADING = 2;
    ko.modelStates.SAVING = 3;
    ko.modelStates.EDITING = 4;
    ko.modelStates.INSERTING = 5;
    ko.modelStates.APPENDING = 6;
    ko.modelStates.UPDATING = 7;
    return ko.editors = {};
  };

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

}).call(this);









