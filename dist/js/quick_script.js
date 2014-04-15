(function() {
  var Modal;

  Modal = jQuery.fn.modal.Constructor;

  Modal.prototype.basic_show = Modal.prototype.show;

  Modal.prototype.show = function(_relatedTarget) {
    var anim, idx, self;
    self = this;
    this.basic_show(_relatedTarget);
    idx = $('.modal.in').length;
    this.$backdrop.css('z-index', 1030 + (10 * idx));
    this.$element.css('z-index', 1040 + (10 * idx));
    if (this.options.attentionAnimation != null) {
      anim = this.options.attentionAnimation;
      return this.$element.on('click.dismiss.modal', function(ev) {
        if (ev.target !== ev.currentTarget) {
          return;
        }
        console.log('handling click');
        self.$element.removeClass("animated " + anim);
        return setTimeout(function() {
          return self.$element.addClass("animated " + anim);
        }, 10);
      });
    }
  };

}).call(this);
window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)
;
// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(q){var y=this||(0,eval)("this"),w=y.document,K=y.navigator,u=y.jQuery,B=y.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(y.ko={})})(function(F){function G(a,c){return null===a||typeof a in N?a===c:!1}function H(b,c,d,e){a.d[b]={init:function(b){a.a.f.set(b,L,{});return{controlsDescendantBindings:!0}},update:function(b,h,k,m,f){k=a.a.f.get(b,L);h=a.a.c(h());
m=!d!==!h;var p=!k.ob;if(p||c||m!==k.Db)p&&(k.ob=a.a.Ya(a.e.childNodes(b),!0)),m?(p||a.e.S(b,a.a.Ya(k.ob)),a.Ta(e?e(f,h):f,b)):a.e.Z(b),k.Db=m}};a.g.Y[b]=!1;a.e.P[b]=!0}var a="undefined"!==typeof F?F:{};a.b=function(b,c){for(var d=b.split("."),e=a,g=0;g<d.length-1;g++)e=e[d[g]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.0.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var f in a)a.hasOwnProperty(f)&&b(f,a[f])}function c(k,b){if("input"!==a.a.v(k)||!k.type||"click"!=
b.toLowerCase())return!1;var f=k.type;return"checkbox"==f||"radio"==f}var d={},e={};d[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var f=0,c=b.length;f<c;f++)e[b[f]]=a});var g={propertychange:!0},h=w&&function(){for(var a=3,b=w.createElement("div"),f=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+
++a+"]><i></i><![endif]--\x3e",f[0];);return 4<a?a:q}();return{$a:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,b){for(var f=0,c=a.length;f<c;f++)b(a[f])},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var f=0,c=a.length;f<c;f++)if(a[f]===b)return f;return-1},Ua:function(a,b,f){for(var c=0,d=a.length;c<d;c++)if(b.call(f,a[c]))return a[c];return null},ia:function(b,c){var f=a.a.l(b,c);0<=f&&b.splice(f,1)},Va:function(b){b=
b||[];for(var c=[],f=0,d=b.length;f<d;f++)0>a.a.l(c,b[f])&&c.push(b[f]);return c},ha:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)f.push(b(a[c]));return f},ga:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)b(a[c])&&f.push(a[c]);return f},X:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var f=0,c=b.length;f<c;f++)a.push(b[f]);return a},V:function(b,c,f){var d=a.a.l(a.a.Ha(b),c);0>d?f&&b.push(c):f||b.splice(d,1)},extend:function(a,b){if(b)for(var f in b)b.hasOwnProperty(f)&&
(a[f]=b[f]);return a},K:b,Da:function(a,b){if(!a)return a;var f={},c;for(c in a)a.hasOwnProperty(c)&&(f[c]=b(a[c],c,a));return f},wa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Vb:function(b){b=a.a.Q(b);for(var c=w.createElement("div"),f=0,d=b.length;f<d;f++)c.appendChild(a.L(b[f]));return c},Ya:function(b,c){for(var f=0,d=b.length,e=[];f<d;f++){var g=b[f].cloneNode(!0);e.push(c?a.L(g):g)}return e},S:function(b,c){a.a.wa(b);if(c)for(var f=0,d=c.length;f<d;f++)b.appendChild(c[f])},nb:function(b,
c){var f=b.nodeType?[b]:b;if(0<f.length){for(var d=f[0],e=d.parentNode,g=0,n=c.length;g<n;g++)e.insertBefore(c[g],d);g=0;for(n=f.length;g<n;g++)a.removeNode(f[g])}},$:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);if(1<a.length){var f=a[0],c=a[a.length-1];for(a.length=0;f!==c;)if(a.push(f),f=f.nextSibling,!f)return;a.push(c)}}return a},qb:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},la:function(a){return null===a||a===
q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ec:function(b,c){for(var f=[],d=(b||"").split(c),e=0,g=d.length;e<g;e++){var n=a.a.la(d[e]);""!==n&&f.push(n)}return f},ac:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Gb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;
return!!a},va:function(b){return a.a.Gb(b,b.ownerDocument.documentElement)},Ra:function(b){return!!a.a.Ua(b,a.a.va)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},r:function(b,d,f){var e=h&&g[d];if(e||"undefined"==typeof u)if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var s=function(a){f.call(b,a)},l="on"+d;b.attachEvent(l,s);a.a.C.ea(b,function(){b.detachEvent(l,s)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,
f,!1);else{if(c(b,d)){var n=f;f=function(a,b){var f=this.checked;b&&(this.checked=!0!==b.Ab);n.call(this,a);this.checked=f}}u(b).bind(d,f)}},da:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof u){var f=[];c(a,b)&&f.push({Ab:a.checked});u(a).trigger(b,f)}else if("function"==typeof w.createEvent)if("function"==typeof a.dispatchEvent)f=w.createEvent(e[b]||"HTMLEvents"),f.initEvent(b,!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(f);
else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.M(b)?b():b},Ha:function(b){return a.M(b)?b.t():b},ma:function(b,c,f){if(c){var d=/\S+/g,e=b.className.match(d)||[];a.a.n(c.match(d),function(b){a.a.V(e,b,f)});b.className=e.join(" ")}},Ma:function(b,c){var f=a.a.c(c);if(null===f||f===q)f="";var d=a.e.firstChild(b);
!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.S(b,[w.createTextNode(f)]):d.data=f;a.a.Jb(b)},pb:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(f){}},Jb:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Hb:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},Zb:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var f=[],d=b;d<=c;d++)f.push(d);return f},Q:function(a){for(var b=[],c=0,d=a.length;c<
d;c++)b.push(a[c]);return b},cc:6===h,dc:7===h,ja:h,ab:function(b,c){for(var f=a.a.Q(b.getElementsByTagName("input")).concat(a.a.Q(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],g=f.length-1;0<=g;g--)d(f[g])&&e.push(f[g]);return e},Wb:function(b){return"string"==typeof b&&(b=a.a.la(b))?B&&B.parse?B.parse(b):(new Function("return "+b))():null},Na:function(b,c,f){if(!B||!B.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return B.stringify(a.a.c(b),c,f)},Xb:function(c,d,f){f=f||{};var e=f.params||{},g=f.includeFields||this.$a,h=c;if("object"==typeof c&&"form"===a.a.v(c))for(var h=c.action,n=g.length-1;0<=n;n--)for(var r=a.a.ab(c,g[n]),v=r.length-1;0<=v;v--)e[r[v].name]=r[v].value;d=a.a.c(d);var t=w.createElement("form");t.style.display="none";t.action=h;t.method="post";for(var E in d)c=w.createElement("input"),c.name=E,c.value=a.a.Na(a.a.c(d[E])),t.appendChild(c);b(e,function(a,b){var c=w.createElement("input");c.name=
a;c.value=b;t.appendChild(c)});w.body.appendChild(t);f.submitter?f.submitter(t):t.submit();setTimeout(function(){t.parentNode.removeChild(t)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.n);a.b("utils.arrayFirst",a.a.Ua);a.b("utils.arrayFilter",a.a.ga);a.b("utils.arrayGetDistinctValues",a.a.Va);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ha);a.b("utils.arrayPushAll",a.a.X);a.b("utils.arrayRemoveItem",a.a.ia);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.$a);a.b("utils.getFormFields",a.a.ab);a.b("utils.peekObservable",a.a.Ha);a.b("utils.postJson",a.a.Xb);a.b("utils.parseJson",a.a.Wb);a.b("utils.registerEventHandler",a.a.r);a.b("utils.stringifyJson",a.a.Na);a.b("utils.range",a.a.Zb);a.b("utils.toggleDomNodeCssClass",a.a.ma);a.b("utils.triggerEvent",a.a.da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.K);a.b("utils.addOrRemoveItem",a.a.V);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=
this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var k=b[d];if(!k||"null"===k||!e[k]){if(!h)return q;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===q?q:e[d]},set:function(c,d,e){if(e!==q||a(c,!1)!==q)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},D:function(){return c++ +
d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var e=a.a.f.get(b,d);e===q&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),m=0;m<e.length;m++)e[m](d);a.a.f.clear(d);"function"==typeof u&&"function"==typeof u.cleanData&&u.cleanData([d]);if(g[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.D(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ea:function(a,c){if("function"!=
typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},mb:function(c,e){var g=b(c,!1);g&&(a.a.ia(g,e),0==g.length&&a.a.f.set(c,d,q))},L:function(b){if(e[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.X(d,b.getElementsByTagName("*"));for(var m=0,f=d.length;m<f;m++)c(d[m])}return b},removeNode:function(b){a.L(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.L=a.a.C.L;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.L);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ea);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.mb);(function(){a.a.Fa=function(b){var c;if("undefined"!=typeof u)if(u.parseHTML)c=u.parseHTML(b)||[];else{if((c=u.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.la(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,
"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof y.innerShiv?c.appendChild(y.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.Q(c.lastChild.childNodes)}return c};a.a.Ka=function(b,c){a.a.wa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof u)u(b).html(c);else for(var d=a.a.Fa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();
a.b("utils.parseHtmlFragment",a.a.Fa);a.b("utils.setHtml",a.a.Ka);a.u=function(){function b(c,e){if(c)if(8==c.nodeType){var g=a.u.jb(c.nodeValue);null!=g&&e.push({Fb:c,Tb:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],e)}var c={};return{Ca:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},ub:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete c[a]}},vb:function(c,e){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var m=g[h].Fb,f=[m];e&&a.a.X(f,e);a.u.ub(g[h].Tb,f);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},jb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.u);a.b("memoization.memoize",
a.u.Ca);a.b("memoization.unmemoize",a.u.ub);a.b("memoization.parseMemoText",a.u.jb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.u.vb);a.xa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var N={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.xa);a.sb=function(b,c,d){this.target=b;this.qa=c;this.Eb=d;a.s(this,"dispose",
this.B)};a.sb.prototype.B=function(){this.Qb=!0;this.Eb()};a.ca=function(){this.F={};a.a.extend(this,a.ca.fn);a.s(this,"subscribe",this.T);a.s(this,"extend",this.extend);a.s(this,"getSubscriptionsCount",this.Lb)};var I="change";a.ca.fn={T:function(b,c,d){d=d||I;var e=new a.sb(this,c?b.bind(c):b,function(){a.a.ia(this.F[d],e)}.bind(this));this.F[d]||(this.F[d]=[]);this.F[d].push(e);return e},notifySubscribers:function(b,c){c=c||I;if(this.cb(c))try{a.i.Wa();for(var d=this.F[c].slice(0),e=0,g;g=d[e];++e)g&&
!0!==g.Qb&&g.qa(b)}finally{a.i.end()}},cb:function(a){return this.F[a]&&this.F[a].length},Lb:function(){var b=0;a.a.K(this.F,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.K(b,function(b,e){var g=a.xa[b];"function"==typeof g&&(c=g(c,e)||c)});return c}};a.fb=function(a){return null!=a&&"function"==typeof a.T&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.ca);a.b("isSubscribable",a.fb);a.i=function(){var b=[];return{Wa:function(a){b.push(a&&{qa:a,Za:[]})},
end:function(){b.pop()},lb:function(c){if(!a.fb(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.l(d.Za,c)||(d.Za.push(c),d.qa(c))}},p:function(a,d,e){try{return b.push(null),a.apply(d,e||[])}finally{b.pop()}}}}();a.q=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.O(),d=arguments[0],c.N()),this;a.i.lb(c);return d}var d=b;a.ca.call(c);c.t=function(){return d};c.N=function(){c.notifySubscribers(d)};
c.O=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.q.fn);a.s(c,"peek",c.t);a.s(c,"valueHasMutated",c.N);a.s(c,"valueWillMutate",c.O);return c};a.q.fn={equalityComparer:G};var C=a.q.Yb="__ko_proto__";a.q.fn[C]=a.q;a.ya=function(b,c){return null===b||b===q||b[C]===q?!1:b[C]===c?!0:a.ya(b[C],c)};a.M=function(b){return a.ya(b,a.q)};a.gb=function(b){return"function"==typeof b&&b[C]===a.q||"function"==typeof b&&b[C]===a.h&&b.Nb?!0:!1};a.b("observable",a.q);a.b("isObservable",a.M);a.b("isWriteableObservable",
a.gb);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.q(b);a.a.extend(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.M(b)?function(a){return a===b}:b,g=0;g<c.length;g++){var h=c[g];e(h)&&(0===d.length&&this.O(),d.push(h),c.splice(g,1),g--)}d.length&&this.N();return d},removeAll:function(b){if(b===
q){var c=this.t(),d=c.slice(0);this.O();c.splice(0,c.length);this.N();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.M(b)?function(a){return a===b}:b;this.O();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.N()},destroyAll:function(b){return b===q?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,
c){var d=this.indexOf(a);0<=d&&(this.O(),this.t()[d]=c,this.N())}};a.a.n("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.t();this.O();this.Xa(a,b,arguments);a=a[b].apply(a,arguments);this.N();return a}});a.a.n(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ba);var J="arrayChange";a.xa.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=
function(a,b){b&&b!==I||++g;return c.apply(this,arguments)};var m=[].concat(b.t()||[]);e=null;b.T(function(c){c=[].concat(c||[]);if(b.cb(J)){var d;if(!e||1<g)e=a.a.ra(m,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,J)}m=c;e=null;g=0})}}if(!b.Xa){var d=!1,e=null,g=0,h=b.T;b.T=b.subscribe=function(a,b,f){f===J&&c();return h.apply(this,arguments)};b.Xa=function(a,b,c){function p(a,b,c){h.push({status:a,value:b,index:c})}if(d&&!g){var h=[],l=a.length,n=c.length,r=0;switch(b){case "push":r=l;case "unshift":for(b=
0;b<n;b++)p("added",c[b],r+b);break;case "pop":r=l-1;case "shift":l&&p("deleted",a[r],r);break;case "splice":b=Math.min(Math.max(0,0>c[0]?l+c[0]:c[0]),l);for(var l=1===n?l:Math.min(b+(c[1]||0),l),n=b+n-2,r=Math.max(l,n),v=2;b<r;++b,++v)b<l&&p("deleted",a[b],b),b<n&&p("added",c[v],b);break;default:return}e=h}}}};a.h=function(b,c,d){function e(){a.a.n(z,function(a){a.B()});z=[]}function g(){var a=k.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(h,a)):h()}function h(){if(!s){if(E&&E()){if(!l){D();
p=!0;return}}else l=!1;s=!0;try{var b=a.a.ha(z,function(a){return a.target});a.i.Wa(function(c){var d;0<=(d=a.a.l(b,c))?b[d]=q:z.push(c.T(g))});for(var d=c?n.call(c):n(),e=b.length-1;0<=e;e--)b[e]&&z.splice(e,1)[0].B();p=!0;k.equalityComparer&&k.equalityComparer(f,d)||(k.notifySubscribers(f,"beforeChange"),f=d,k.notifySubscribers(f))}finally{a.i.end(),s=!1}z.length||D()}}function k(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}p||h();a.i.lb(k);return f}function m(){return!p||0<z.length}var f,p=!1,s=!1,l=!1,n=b;n&&"object"==typeof n?(d=n,n=d.read):(d=d||{},n||(n=d.read));if("function"!=typeof n)throw Error("Pass a function that returns the value of the ko.computed");var r=d.write,v=d.disposeWhenNodeIsRemoved||d.I||null,t=d.disposeWhen||d.ua,E=t,D=e,z=[],x=null;c||(c=d.owner);k.t=function(){p||h();return f};k.Kb=function(){return z.length};k.Nb="function"===typeof d.write;k.B=function(){D()};k.aa=m;a.ca.call(k);
a.a.extend(k,a.h.fn);a.s(k,"peek",k.t);a.s(k,"dispose",k.B);a.s(k,"isActive",k.aa);a.s(k,"getDependenciesCount",k.Kb);v&&(l=!0,v.nodeType&&(E=function(){return!a.a.va(v)||t&&t()}));!0!==d.deferEvaluation&&h();v&&m()&&(D=function(){a.a.C.mb(v,D);e()},a.a.C.ea(v,D));return k};a.Pb=function(b){return a.ya(b,a.h)};F=a.q.Yb;a.h[F]=a.q;a.h.fn={equalityComparer:G};a.h.fn[F]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.Pb);(function(){function b(a,g,h){h=h||new d;a=g(a);if("object"!=
typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var p=h.get(d);k[c]=p!==q?p:b(d,g,h)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=
[];this.Qa=[]}a.tb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.M(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.tb(b);return a.a.Na(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.Qa[d]=c:(this.keys.push(b),this.Qa.push(c))},get:function(b){b=a.a.l(this.keys,b);return 0<=b?this.Qa[b]:q}}})();a.b("toJS",a.tb);a.b("toJSON",a.toJSON);(function(){a.k={o:function(b){switch(a.a.v(b)){case "option":return!0===
b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Ea):7>=a.a.ja?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex]):q;default:return b.value}},na:function(b,c){switch(a.a.v(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Ea,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Ea,c),b.__ko__hasDomDataOptionValue__=
!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.k.o(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.o);a.b("selectExtensions.writeValue",a.k.na);a.g=function(){function b(b){b=a.a.la(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=
[],d=b.match(e),k,l,n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){k&&c.push(l?{key:k,value:l.join("")}:{unknown:k});k=l=n=0;continue}}else if(58===t){if(!l)continue}else if(47===t&&r&&1<v.length)(t=d[r-1].match(g))&&!h[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/");else if(40===t||123===t||91===t)++n;else if(41===t||125===t||93===t)--n;else if(!k&&!l){k=34===t||39===t?v.slice(1,-1):v;continue}l?l.push(v):l=[v]}}return c}var c=["true",
"false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{Y:[],U:k,Ga:b,ka:function(e,f){function g(b,f){var e,r=a.getBindingHandler(b);if(r&&r.preprocess?f=r.preprocess(f,b,g):1){if(r=k[b])e=f,0<=a.a.l(c,e)?e=!1:(r=e.match(d),e=null===r?!1:r[1]?"Object("+r[1]+")"+
r[2]:e),r=e;r&&l.push("'"+b+"':function(_z){"+e+"=_z}");n&&(f="function(){return "+f+" }");h.push("'"+b+"':"+f)}}f=f||{};var h=[],l=[],n=f.valueAccessors,r="string"===typeof e?b(e):e;a.a.n(r,function(a){g(a.key||a.unknown,a.value)});l.length&&g("_ko_property_writers","{"+l.join(",")+"}");return h.join(",")},Sb:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},oa:function(b,c,d,e,k){if(b&&a.M(b))!a.gb(b)||k&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();
a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.Y);a.b("expressionRewriting.parseObjectLiteral",a.g.Ga);a.b("expressionRewriting.preProcessBindings",a.g.ka);a.b("expressionRewriting._twoWayBindings",a.g.U);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ka);(function(){function b(a){return 8==a.nodeType&&h.test(g?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function d(a,
d){for(var e=a,k=1,n=[];e=e.nextSibling;){if(c(e)&&(k--,0===k))return n;n.push(e);b(e)&&k++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0};a.e={P:{},childNodes:function(a){return b(a)?
d(a):a.childNodes},Z:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.wa(c)},S:function(c,d){if(b(c)){a.e.Z(c);for(var e=c.nextSibling,k=0,n=d.length;k<n;k++)e.parentNode.insertBefore(d[k],e)}else a.a.S(c,d)},kb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},eb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):
c.appendChild(d):a.e.kb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Mb:b,bc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},ib:function(d){if(m[a.a.v(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;var h=null;if(g){do if(h)h.push(g);else if(b(g)){var n=e(g,!0);n?g=n:h=[g]}else c(g)&&(h=[g]);while(g=
g.nextSibling)}if(g=h)for(h=k.nextSibling,n=0;n<g.length;n++)h?d.insertBefore(g[n],h):d.appendChild(g[n])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.P);a.b("virtualElements.emptyNode",a.e.Z);a.b("virtualElements.insertAfter",a.e.eb);a.b("virtualElements.prepend",a.e.kb);a.b("virtualElements.setDomNodeChildren",a.e.S);(function(){a.H=function(){this.zb={}};a.a.extend(a.H.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return a.e.Mb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.bc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var g=this.zb,
h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var m,f="with($context){with($data||{}){return{"+a.g.ka(b,e)+"}}}";m=new Function("$context","$element",f);k=g[h]=m}return k(c,d)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+p.message,p;}}});a.H.instance=new a.H})();a.b("bindingProvider",a.H);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Da(a.i.p(b),function(a,c){return function(){return b()[c]}})}function e(a,
b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.e.firstChild(c),k=a.H.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.e.nextSibling(f),g.call(k,f);e=a.e.firstChild(c)}for(;f=e;)e=a.e.nextSibling(f),h(b,f,d)}function h(b,c,d){var f=!0,e=1===c.nodeType;e&&a.e.ib(c);if(e&&d||a.H.instance.nodeHasBindings(c))f=m(c,null,b,d).shouldBindDescendants;f&&!p[a.a.v(c)]&&g(b,c,!e)}function k(b){var c=[],d={},f=[];a.a.K(b,function D(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&
(f.push(e),a.a.n(k.after,function(c){if(b[c]){if(-1!==a.a.l(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));D(c)}}),f.pop()),c.push({key:e,bb:k}));d[e]=!0}});return c}function m(b,d,f,g){var h=a.a.f.get(b,s);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,s,!0)}!h&&g&&a.rb(b,f);var m;if(d&&"function"!==typeof d)m=d;else{var p=a.H.instance,l=p.getBindingAccessors||e;if(d||f.A){var A=
a.h(function(){(m=d?d(f,b):l.call(p,b,f))&&f.A&&f.A();return m},null,{I:b});m&&A.aa()||(A=null)}else m=a.i.p(l,p,[b,f])}var u;if(m){var w=A?function(a){return function(){return c(A()[a])}}:function(a){return m[a]},y=function(){return a.a.Da(A?A():m,c)};y.get=function(a){return m[a]&&c(w(a))};y.has=function(a){return a in m};g=k(m);a.a.n(g,function(c){var d=c.bb.init,e=c.bb.update,k=c.key;if(8===b.nodeType&&!a.e.P[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");try{"function"==
typeof d&&a.i.p(function(){var a=d(b,w(k),y,f.$data,f);if(a&&a.controlsDescendantBindings){if(u!==q)throw Error("Multiple bindings ("+u+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=k}}),"function"==typeof e&&a.h(function(){e(b,w(k),y,f.$data,f)},null,{I:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+m[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:u===q}}function f(b){return b&&
b instanceof a.G?b:new a.G(b)}a.d={};var p={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.G=function(b,c,d,f){var e=this,k="function"==typeof b,g,h=a.h(function(){var g=k?b():b;c?(c.A&&c.A(),a.a.extend(e,c),h&&(e.A=h)):(e.$parents=[],e.$root=g,e.ko=a);e.$rawData=b;e.$data=g;d&&(e[d]=g);f&&f(e,c,g);return e.$data},null,{ua:function(){return g&&!a.a.Ra(g)},I:!0});h.aa()&&(e.A=h,h.equalityComparer=null,g=[],h.wb=function(b){g.push(b);a.a.C.ea(b,function(b){a.a.ia(g,b);g.length||(h.B(),
e.A=h=q)})})};a.G.prototype.createChildContext=function(b,c,d){return new a.G(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.G.prototype.extend=function(b){return new a.G(this.$rawData,this,null,function(c){a.a.extend(c,"function"==typeof b?b():b)})};var s=a.a.f.D(),l=a.a.f.D();a.rb=function(b,c){if(2==arguments.length)a.a.f.set(b,l,c),c.A&&c.A.wb(b);else return a.a.f.get(b,l)};a.pa=function(b,c,d){1===b.nodeType&&
a.e.ib(b);return m(b,c,f(d),!0)};a.xb=function(c,e,k){k=f(k);return a.pa(c,"function"===typeof e?d(e.bind(null,k,c)):a.a.Da(e,b),k)};a.Ta=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(f(a),b,!0)};a.Sa=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(f(a),b,!0)};a.ta=function(b){switch(b.nodeType){case 1:case 8:var c=a.rb(b);if(c)return c;if(b.parentNode)return a.ta(b.parentNode)}return q};
a.Cb=function(b){return(b=a.ta(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Sa);a.b("applyBindingsToDescendants",a.Ta);a.b("applyBindingAccessorsToNode",a.pa);a.b("applyBindingsToNode",a.xb);a.b("contextFor",a.ta);a.b("dataFor",a.Cb)})();var M={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.K(d,function(c,d){d=a.a.c(d);var h=!1===d||null===d||d===q;h&&b.removeAttribute(c);8>=a.a.ja&&c in M?(c=M[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,
d.toString());"name"===c&&a.a.pb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function g(){var k=b.checked,g=s?e():k;if(l&&(!m||k)){var h=a.i.p(c);f?p!==g?(k&&(a.a.V(h,g,!0),a.a.V(h,p,!1)),p=g):a.a.V(h,g,k):a.g.oa(h,d,"checked",g,!0)}}function h(){var d=a.a.c(c());b.checked=f?0<=a.a.l(d,e()):k?d:e()===d}var k="checkbox"==b.type,m="radio"==b.type;if(k||m){var f=k&&a.a.c(c())instanceof
Array,p=f?e():q,s=m||f,l=!1;m&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.h(g,null,{I:b});a.a.r(b,"click",g);a.h(h,null,{I:b});l=!0}}};a.g.U.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.K(d,function(c,d){d=a.a.c(d);a.a.ma(b,c,d)}):(d=String(d||""),a.a.ma(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ma(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):
d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,g){var h=c()||{};a.a.K(h,function(k){"string"==typeof k&&a.a.r(b,k,function(b){var f,h=c()[k];if(h){try{var s=a.a.Q(arguments);e=g.$data;s.unshift(e);f=h.apply(e,s)}finally{!0!==f&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={hb:function(b){return function(){var c=
b(),d=a.a.Ha(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.J.Aa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.J.Aa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.hb(c))},update:function(b,c,d,e,g){return a.d.template.update(b,a.d.foreach.hb(c),d,e,g)}};a.g.Y.foreach=!1;a.e.P.foreach=!0;a.d.hasfocus=
{init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var g=b.ownerDocument;if("activeElement"in g){var f;try{f=g.activeElement}catch(h){f=g.body}e=f===b}g=c();a.g.oa(g,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.r(b,"focus",g);a.a.r(b,"focusin",g);a.a.r(b,"blur",h);a.a.r(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.i.p(a.a.da,
null,[b,d?"focusin":"focusout"]))}};a.g.U.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.U.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ka(b,c())}};var L=a.a.f.D();H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,
c,d){function e(){return a.a.ga(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(p.length){var f=0<=a.a.l(p,a.k.o(d[0]));a.a.qb(d[0],f);l&&!f&&a.i.p(a.a.da,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null;c=a.a.c(c());var m=d.get("optionsIncludeDestroyed"),f={},p;p=b.multiple?a.a.ha(e(),a.k.o):0<=b.selectedIndex?[a.k.o(b.options[b.selectedIndex])]:[];if(c){"undefined"==typeof c.length&&(c=[c]);
var s=a.a.ga(c,function(b){return m||b===q||null===b||!a.a.c(b._destroy)});d.has("optionsCaption")&&(c=a.a.c(d.get("optionsCaption")),null!==c&&c!==q&&s.unshift(f))}else c=[];var l=!1;c=h;d.has("optionsAfterRender")&&(c=function(b,c){h(0,c);a.i.p(d.get("optionsAfterRender"),null,[c[0],b!==f?b:q])});a.a.Ja(b,s,function(b,c,e){e.length&&(p=e[0].selected?[a.k.o(e[0])]:[],l=!0);c=w.createElement("option");b===f?(a.a.Ma(c,d.get("optionsCaption")),a.k.na(c,q)):(e=g(b,d.get("optionsValue"),b),a.k.na(c,a.a.c(e)),
b=g(b,d.get("optionsText"),e),a.a.Ma(c,b));return[c]},null,c);(b.multiple?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.i.p(a.a.da,null,[b,"change"]);a.a.Hb(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Ea=a.a.f.D();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.r(b,"change",function(){var e=c(),g=[];a.a.n(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.k.o(b))});
a.g.oa(e,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.n(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.k.o(b));a.a.qb(b,c)})}};a.g.U.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.K(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,g){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.r(b,"submit",function(a){var d,e=c();try{d=e.call(g.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ma(b,c())}};a.e.P.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Bb;a.a.pb(b,d)}}};a.d.uniqueName.Bb=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){k=!1;var e=c(),f=a.k.o(b);a.g.oa(e,d,"value",f)}var g=
["change"],h=d.get("valueUpdate"),k=!1;h&&("string"==typeof h&&(h=[h]),a.a.X(g,h),g=a.a.Va(g));!a.a.ja||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(g,"propertychange")||(a.a.r(b,"propertychange",function(){k=!0}),a.a.r(b,"blur",function(){k&&e()}));a.a.n(g,function(c){var d=e;a.a.ac(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.r(b,c,d)})},update:function(b,c){var d="select"===a.a.v(b),e=a.a.c(c()),g=a.k.o(b);
e!==g&&(g=function(){a.k.na(b,e)},g(),d&&(e!==a.k.o(b)?a.i.p(a.a.da,null,[b,"change"]):setTimeout(g,0)))}};a.g.U.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,g,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,g,h)}}})("click");a.w=function(){};a.w.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");
};a.w.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.w.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.m.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.m.W(b);throw Error("Unknown template type: "+b);};a.w.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,
d)};a.w.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.w.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.w);a.Oa=function(){function b(b,c,d,k){b=a.g.Ga(b);for(var m=a.g.Y,f=0;f<b.length;f++){var p=b[f].key;if(m.hasOwnProperty(p)){var s=m[p];if("function"===typeof s){if(p=s(b[f].value))throw Error(p);}else if(!s)throw Error("This template engine does not support the '"+
p+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ka(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ib:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Oa.Ub(b,c)},
d)},Ub:function(a,g){return a.replace(c,function(a,c,d,f,e){return b(e,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},yb:function(b,c){return a.u.Ca(function(d,k){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.pa(m,b,k)})}}}();a.b("__tr_ambtns",a.Oa.yb);(function(){a.m={};a.m.j=function(a){this.j=a};a.m.j.prototype.text=function(){var b=a.a.v(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];
"innerHTML"===b?a.a.Ka(this.j,c):this.j[b]=c};var b=a.a.f.D()+"_";a.m.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.D();a.m.W=function(a){this.j=a};a.m.W.prototype=new a.m.j;a.m.W.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.Pa===q&&b.sa&&(b.Pa=b.sa.innerHTML);return b.Pa}a.a.f.set(this.j,c,{Pa:arguments[0]})};a.m.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,
c)||{}).sa;a.a.f.set(this.j,c,{sa:arguments[0]})};a.b("templateSources",a.m);a.b("templateSources.domElement",a.m.j);a.b("templateSources.anonymousTemplate",a.m.W)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var f=c[0],e=c[c.length-1],g=f.parentNode,h=a.H.instance,n=h.preprocessNode;if(n){b(f,e,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===f&&(f=d[0]||b),a===e&&(e=d[d.length-1]||c))});c.length=
0;if(!f)return;f===e?c.push(f):(c.push(f,e),a.a.$(c,g))}b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.Sa(d,b)});b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.u.vb(b,[d])});a.a.$(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,s){s=s||{};var l=b&&d(b),l=l&&l.ownerDocument,n=s.templateEngine||g;a.Oa.Ib(f,n,l);f=n.renderTemplate(f,h,s,l);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
l=!1;switch(e){case "replaceChildren":a.e.S(b,f);l=!0;break;case "replaceNode":a.a.nb(b,f);l=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}l&&(c(f,h),s.afterRender&&a.i.p(s.afterRender,null,[f,h.$data]));return f}var g;a.La=function(b){if(b!=q&&!(b instanceof a.w))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ia=function(b,c,f,h,s){f=f||{};if((f.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");
s=s||"replaceChildren";if(h){var l=d(h);return a.h(function(){var g=c&&c instanceof a.G?c:new a.G(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=e(h,s,r,g,f);"replaceNode"==s&&(h=g,l=d(h))},null,{ua:function(){return!l||!a.a.va(l)},I:l&&"replaceNode"==s?l.parentNode:l})}return a.u.Ca(function(d){a.Ia(b,c,f,d,"replaceNode")})};a.$b=function(b,d,f,g,h){function l(a,b){c(b,r);f.afterRender&&f.afterRender(b,a)}function n(a,c){r=h.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==
typeof b?b(a,r):b;return e(null,"ignoreTargetNode",d,r,f)}var r;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ga(b,function(b){return f.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.i.p(a.a.Ja,null,[g,b,n,f,l])},null,{I:g})};var h=a.a.f.D();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.Z(b):(d=a.e.childNodes(b),d=a.a.Vb(d),(new a.m.W(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){c=
a.a.c(c());d={};e=!0;var l,n=null;"string"!=typeof c&&(d=c,c=a.a.c(d.name),"if"in d&&(e=a.a.c(d["if"])),e&&"ifnot"in d&&(e=!a.a.c(d.ifnot)),l=a.a.c(d.data));"foreach"in d?n=a.$b(c||b,e&&d.foreach||[],d,b,g):e?(g="data"in d?g.createChildContext(l,d.as):g,n=a.Ia(c||b,g,d,b)):a.e.Z(b);g=n;(l=a.a.f.get(b,h))&&"function"==typeof l.B&&l.B();a.a.f.set(b,h,g&&g.aa()?g:q)}};a.g.Y.template=function(b){b=a.g.Ga(b);return 1==b.length&&b[0].unknown||a.g.Sb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.P.template=!0})();a.b("setTemplateEngine",a.La);a.b("renderTemplate",a.Ia);a.a.ra=function(){function a(b,d,e,g,h){var k=Math.min,m=Math.max,f=[],p,q=b.length,l,n=d.length,r=n-q||1,v=q+n+1,t,u,w;for(p=0;p<=q;p++)for(u=t,f.push(t=[]),w=k(n,p+r),l=m(0,p-1);l<=w;l++)t[l]=l?p?b[p-1]===d[l-1]?u[l-1]:k(u[l]||v,t[l-1]||v)+1:l+1:p+1;k=[];m=[];r=[];p=q;for(l=n;p||l;)n=f[p][l]-1,l&&n===f[p][l-1]?m.push(k[k.length]={status:e,value:d[--l],index:l}):p&&n===f[p-1][l]?r.push(k[k.length]={status:g,value:b[--p],
index:p}):(--l,--p,h.sparse||k.push({status:"retained",value:d[l]}));if(m.length&&r.length){b=10*q;var z;for(d=e=0;(h.dontLimitMoves||d<b)&&(z=m[e]);e++){for(g=0;f=r[g];g++)if(z.value===f.value){z.moved=f.index;f.moved=z.index;r.splice(g,1);d=g=0;break}d+=g}}return k.reverse()}return function(c,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",e):a(d,c,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ra);(function(){function b(b,
c,g,h,k){var m=[],f=a.h(function(){var f=c(g,k,a.a.$(m,b))||[];0<m.length&&(a.a.nb(m,f),h&&a.i.p(h,null,[g,f,k]));m.splice(0,m.length);a.a.X(m,f)},null,{I:b,ua:function(){return!a.a.Ra(m)}});return{R:m,h:f.aa()?f:q}}var c=a.a.f.D();a.a.Ja=function(d,e,g,h,k){function m(b,c){x=s[c];t!==c&&(z[b]=x);x.za(t++);a.a.$(x.R,d);r.push(x);w.push(x)}function f(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.n(c[d].R,function(a){b(a,d,c[d].fa)})}e=e||[];h=h||{};var p=a.a.f.get(d,c)===q,s=a.a.f.get(d,c)||[],
l=a.a.ha(s,function(a){return a.fa}),n=a.a.ra(l,e,h.dontLimitMoves),r=[],v=0,t=0,u=[],w=[];e=[];for(var z=[],l=[],x,A=0,y,B;y=n[A];A++)switch(B=y.moved,y.status){case "deleted":B===q&&(x=s[v],x.h&&x.h.B(),u.push.apply(u,a.a.$(x.R,d)),h.beforeRemove&&(e[A]=x,w.push(x)));v++;break;case "retained":m(A,v++);break;case "added":B!==q?m(A,B):(x={fa:y.value,za:a.q(t++)},r.push(x),w.push(x),p||(l[A]=x))}f(h.beforeMove,z);a.a.n(u,h.beforeRemove?a.L:a.removeNode);for(var A=0,p=a.e.firstChild(d),C;x=w[A];A++){x.R||
a.a.extend(x,b(d,g,x.fa,k,x.za));for(v=0;n=x.R[v];p=n.nextSibling,C=n,v++)n!==p&&a.e.eb(d,n,C);!x.Ob&&k&&(k(x.fa,x.R,x.za),x.Ob=!0)}f(h.beforeRemove,e);f(h.afterMove,z);f(h.afterAdd,l);a.a.f.set(d,c,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ja);a.J=function(){this.allowTemplateRewriting=!1};a.J.prototype=new a.w;a.J.prototype.renderTemplateSource=function(b){var c=(9>a.a.ja?0:b.nodes)?b.nodes():null;if(c)return a.a.Q(c.cloneNode(!0).childNodes);b=b.text();return a.a.Fa(b)};a.J.Aa=
new a.J;a.La(a.J.Aa);a.b("nativeTemplateEngine",a.J);(function(){a.Ba=function(){var a=this.Rb=function(){if("undefined"==typeof u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+
"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},g.templateOptions);e=u.tmpl(h,b,e);e.appendTo(w.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ba.prototype=
new a.w;var b=new a.Ba;0<b.Rb&&a.La(b);a.b("jqueryTmplTemplateEngine",a.Ba)})()})})();})();
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

/**
 * Lawnchair!
 * --- 
 * clientside json store 
 *
 */

var Lawnchair = function (options, callback) {
    // ensure Lawnchair was called as a constructor
    if (!(this instanceof Lawnchair)) return new Lawnchair(options, callback);

    // lawnchair requires json 
    if (!JSON) throw 'JSON unavailable! Include http://www.json.org/json2.js to fix.'
    // options are optional; callback is not
    if (arguments.length <= 2 && arguments.length > 0) {
        callback = (typeof arguments[0] === 'function') ? arguments[0] : arguments[1];
        options  = (typeof arguments[0] === 'function') ? {} : arguments[0];
    } else {
        throw 'Incorrect # of ctor args!'
    }
    // TODO perhaps allow for pub/sub instead?
    if (typeof callback !== 'function') throw 'No callback was provided';
    
    // default configuration 
    this.record = options.record || 'record'  // default for records
    this.name   = options.name   || 'records' // default name for underlying store
    
    // mixin first valid  adapter
    var adapter
    // if the adapter is passed in we try to load that only
    if (options.adapter) {
        for (var i = 0, l = Lawnchair.adapters.length; i < l; i++) {
            if (Lawnchair.adapters[i].adapter === options.adapter) {
              adapter = Lawnchair.adapters[i].valid() ? Lawnchair.adapters[i] : undefined;
              break;
            }
        }
    // otherwise find the first valid adapter for this env
    } 
    else {
        for (var i = 0, l = Lawnchair.adapters.length; i < l; i++) {
            adapter = Lawnchair.adapters[i].valid() ? Lawnchair.adapters[i] : undefined
            if (adapter) break 
        }
    } 
    
    // we have failed 
    if (!adapter) throw 'No valid adapter.' 
    
    // yay! mixin the adapter 
    for (var j in adapter)  
        this[j] = adapter[j]
    
    // call init for each mixed in plugin
    for (var i = 0, l = Lawnchair.plugins.length; i < l; i++) 
        Lawnchair.plugins[i].call(this)

    // init the adapter 
    this.init(options, callback)
}

Lawnchair.adapters = [] 

/** 
 * queues an adapter for mixin
 * ===
 * - ensures an adapter conforms to a specific interface
 *
 */
Lawnchair.adapter = function (id, obj) {
    // add the adapter id to the adapter obj
    // ugly here for a  cleaner dsl for implementing adapters
    obj['adapter'] = id
    // methods required to implement a lawnchair adapter 
    var implementing = 'adapter valid init keys save batch get exists all remove nuke'.split(' ')
    ,   indexOf = this.prototype.indexOf
    // mix in the adapter   
    for (var i in obj) {
        if (indexOf(implementing, i) === -1) throw 'Invalid adapter! Nonstandard method: ' + i
    }
    // if we made it this far the adapter interface is valid 
	// insert the new adapter as the preferred adapter
	Lawnchair.adapters.splice(0,0,obj)
}

Lawnchair.plugins = []

/**
 * generic shallow extension for plugins
 * ===
 * - if an init method is found it registers it to be called when the lawnchair is inited 
 * - yes we could use hasOwnProp but nobody here is an asshole
 */ 
Lawnchair.plugin = function (obj) {
    for (var i in obj) 
        i === 'init' ? Lawnchair.plugins.push(obj[i]) : this.prototype[i] = obj[i]
}

/**
 * helpers
 *
 */
Lawnchair.prototype = {

    isArray: Array.isArray || function(o) { return Object.prototype.toString.call(o) === '[object Array]' },
    
    /**
     * this code exists for ie8... for more background see:
     * http://www.flickr.com/photos/westcoastlogic/5955365742/in/photostream
     */
    indexOf: function(ary, item, i, l) {
        if (ary.indexOf) return ary.indexOf(item)
        for (i = 0, l = ary.length; i < l; i++) if (ary[i] === item) return i
        return -1
    },

    // awesome shorthand callbacks as strings. this is shameless theft from dojo.
    lambda: function (callback) {
        return this.fn(this.record, callback)
    },

    // first stab at named parameters for terse callbacks; dojo: first != best // ;D
    fn: function (name, callback) {
        return typeof callback == 'string' ? new Function(name, callback) : callback
    },

    // returns a unique identifier (by way of Backbone.localStorage.js)
    // TODO investigate smaller UUIDs to cut on storage cost
    uuid: function () {
        var S4 = function () {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },

    // a classic iterator
    each: function (callback) {
        var cb = this.lambda(callback)
        // iterate from chain
        if (this.__results) {
            for (var i = 0, l = this.__results.length; i < l; i++) cb.call(this, this.__results[i], i) 
        }  
        // otherwise iterate the entire collection 
        else {
            this.all(function(r) {
                for (var i = 0, l = r.length; i < l; i++) cb.call(this, r[i], i)
            })
        }
        return this
    }
// --
};

/**
 * dom storage adapter 
 * === 
 * - originally authored by Joseph Pecoraro
 *
 */ 
//
// TODO does it make sense to be chainable all over the place?
// chainable: nuke, remove, all, get, save, all    
// not chainable: valid, keys
//
Lawnchair.adapter('dom', (function() {
    var storage = window.localStorage
    // the indexer is an encapsulation of the helpers needed to keep an ordered index of the keys
    var indexer = function(name) {
        return {
            // the key
            key: name + '._index_',
            // returns the index
            all: function() {
				var a  = storage.getItem(this.key)
				if (a) {
					a = JSON.parse(a)
				}
                if (a === null) storage.setItem(this.key, JSON.stringify([])) // lazy init
                return JSON.parse(storage.getItem(this.key))
            },
            // adds a key to the index
            add: function (key) {
                var a = this.all()
                a.push(key)
                storage.setItem(this.key, JSON.stringify(a))
            },
            // deletes a key from the index
            del: function (key) {
                var a = this.all(), r = []
                // FIXME this is crazy inefficient but I'm in a strata meeting and half concentrating
                for (var i = 0, l = a.length; i < l; i++) {
                    if (a[i] != key) r.push(a[i])
                }
                storage.setItem(this.key, JSON.stringify(r))
            },
            // returns index for a key
            find: function (key) {
                var a = this.all()
                for (var i = 0, l = a.length; i < l; i++) {
                    if (key === a[i]) return i 
                }
                return false
            }
        }
    }
    
    // adapter api 
    return {
    
        // ensure we are in an env with localStorage 
        valid: function () {
            return !!storage && function() {
              // in mobile safari if safe browsing is enabled, window.storage
              // is defined but setItem calls throw exceptions.
              var success = true
              var value = Math.random()
              try {
                storage.setItem(value, value)
              } catch (e) {
                success = false
              }
              storage.removeItem(value)
              return success
            }()
        },

        init: function (options, callback) {
            this.indexer = indexer(this.name)
            if (callback) this.fn(this.name, callback).call(this, this)  
        },
        
        save: function (obj, callback) {
            var key = obj.key ? this.name + '.' + obj.key : this.name + '.' + this.uuid()
            // if the key is not in the index push it on
            if (this.indexer.find(key) === false) this.indexer.add(key)
            // now we kil the key and use it in the store colleciton    
            delete obj.key;
            storage.setItem(key, JSON.stringify(obj))
            obj.key = key.slice(this.name.length + 1)
            if (callback) {
                this.lambda(callback).call(this, obj)
            }
            return this
        },

        batch: function (ary, callback) {
            var saved = []
            // not particularily efficient but this is more for sqlite situations
            for (var i = 0, l = ary.length; i < l; i++) {
                this.save(ary[i], function(r){
                    saved.push(r)
                })
            }
            if (callback) this.lambda(callback).call(this, saved)
            return this
        },
       
        // accepts [options], callback
        keys: function(callback) {
            if (callback) { 
                var name = this.name
                ,   keys = this.indexer.all().map(function(r){ return r.replace(name + '.', '') })
                this.fn('keys', callback).call(this, keys)
            }
            return this // TODO options for limit/offset, return promise
        },
        
        get: function (key, callback) {
            if (this.isArray(key)) {
                var r = []
                for (var i = 0, l = key.length; i < l; i++) {
                    var k = this.name + '.' + key[i]
                    var obj = storage.getItem(k)
                    if (obj) {
						obj = JSON.parse(obj)
                        obj.key = key[i]
                        r.push(obj)
                    } 
                }
                if (callback) this.lambda(callback).call(this, r)
            } else {
                var k = this.name + '.' + key
                var  obj = storage.getItem(k)
                if (obj) {
					obj = JSON.parse(obj)
					obj.key = key
				}
                if (callback) this.lambda(callback).call(this, obj)
            }
            return this
        },

        exists: function (key, cb) {
            var exists = this.indexer.find(this.name+'.'+key) === false ? false : true ;
            this.lambda(cb).call(this, exists);
            return this;
        },
        // NOTE adapters cannot set this.__results but plugins do
        // this probably should be reviewed
        all: function (callback) {
            var idx = this.indexer.all()
            ,   r   = []
            ,   o
            ,   k
            for (var i = 0, l = idx.length; i < l; i++) {
                k     = idx[i] //v
                o     = JSON.parse(storage.getItem(k))
                o.key = k.replace(this.name + '.', '')
                r.push(o)
            }
            if (callback) this.fn(this.name, callback).call(this, r)
            return this
        },
        
        remove: function (keyOrObj, callback) {
            var key = this.name + '.' + ((keyOrObj.key) ? keyOrObj.key : keyOrObj)
            this.indexer.del(key)
            storage.removeItem(key)
            if (callback) this.lambda(callback).call(this)
            return this
        },
        
        nuke: function (callback) {
            this.all(function(r) {
                for (var i = 0, l = r.length; i < l; i++) {
                    this.remove(r[i]);
                }
                if (callback) this.lambda(callback).call(this)
            })
            return this 
        }
}})());

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

  this.Overlay = (function() {
    function Overlay() {
      this.zindex = 100;
      this.notifyTimer = null;
      $(document).click(function() {
        return Overlay.removePopovers();
      });
    }

    return Overlay;

  })();

  Overlay.instance = new Overlay();

  Overlay.closeDialog = function() {
    return this.remove('dialog');
  };

  Overlay.add = function(vm, tmp, opts) {
    var $modal_dialog, $modal_el, cls, css_opts, id, modal_tpl, template;
    opts || (opts = {});
    css_opts = opts.style || {};
    cls = opts.className || '';
    id = vm.name;
    template = tmp;
    $('#overlay-' + id).remove();
    modal_tpl = "<div id='overlay-" + id + "' class='modal fade'><div class='modal-dialog'><div class='modal-content'><button class='close' data-bind='click : hideOverlay'>x</button><div class='" + template + "' data-bind=\"template: '" + template + "'\"></div></div></div></div>";
    $modal_el = $(modal_tpl).appendTo('body');
    $modal_dialog = $modal_el.find('.modal-dialog');
    $modal_dialog.css({
      width: opts.width + 'px'
    });
    $modal_dialog.css(css_opts);
    $modal_el.addClass(cls);
    return setTimeout(function() {
      $modal_el.koBind(vm);
      $modal_el.on('hidden.bs.modal', function(ev) {
        if (ev.target.id !== ("overlay-" + id)) {
          return;
        }
        console.log('Hiding overlay.');
        setTimeout(function() {
          $modal_el.koClean();
          return $modal_el.remove();
        }, 100);
        if (vm.onHidden != null) {
          vm.onHidden();
        }
        if (opts.hidden) {
          return opts.hidden();
        }
      });
      $modal_el.on('shown.bs.modal', function(ev) {
        if (ev.target.id !== ("overlay-" + id)) {
          return;
        }
        if (vm.onShown != null) {
          vm.onShown(ev.target);
        }
        if (opts.shown != null) {
          return opts.shown;
        }
      });
      return $modal_el.modal(opts);
    }, 100);
  };

  Overlay.dialog = function(msg, opts) {
    var vm;
    vm = {
      name: 'dialog',
      message: ko.observable(msg),
      yes: opts.yes,
      no: opts.no,
      cancel: Overlay.remove('dialog')
    };
    return Overlay.add(vm, 'view-dialog', {
      width: 300
    });
  };

  Overlay.notify = function(msg, type, opts) {
    var $notif;
    opts = opts || {};
    opts.timeout = opts.timeout || 3000;
    opts.position = opts.position || 'right';
    type = type || 'info';
    Overlay.clearNotifications();
    $('body').prepend("<div id='qs-notify' class='qs-notify-elegant " + type + " p-" + opts.position + "' style='display: none;'><img class='icon' src='/assets/qs-notify-icon.png'/><div class='title'>" + msg + "</div></div>");
    $notif = $('#qs-notify');
    if ((opts.css != null)) {
      $notif.addClass(opts.css);
    }
    return $notif.fadeIn('slow', function() {
      return Overlay.instance.notifyTimeout = setTimeout(function() {
        return $notif.fadeOut('slow');
      }, opts.timeout);
    });
  };

  Overlay.clearNotifications = function() {
    clearTimeout(Overlay.instance.notifyTimeout);
    return $('#qs-notify').remove();
  };

  Overlay.confirm = function(msg, opts) {
    var $modal, tmp, vm;
    vm = {
      message: msg,
      yes: function() {
        $('#qs-overlay-confirm').modal('hide');
        if (opts.yes != null) {
          return opts.yes();
        }
      },
      no: function() {
        $('#qs-overlay-confirm').modal('hide');
        if (opts.no != null) {
          return opts.no();
        }
      }
    };
    tmp = "<div id='qs-overlay-confirm' class='modal fade'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4>Continue?</h4></div><div class='modal-body' style='font-size: 20px;' data-bind='text : message'></div><div class='modal-footer'><button class='btn btn-danger' data-bind='click : no'>No</button><button class='btn btn-success' data-bind='click : yes'>Yes</button></div></div></div></div>";
    $modal = $('#qs-overlay-confirm');
    if ($modal.length === 0) {
      $modal = $(tmp);
      $modal.appendTo('body');
    } else {
      $modal.koClean();
      $modal.removeClass('animated shake');
    }
    $modal.koBind(vm);
    return $modal.modal({
      backdrop: 'static',
      attentionAnimation: 'shake'
    });
  };

  Overlay.alert = function(msg, opts) {
    var $modal, tmp, vm;
    opts || (opts = {});
    vm = {
      message: msg,
      ok: function() {
        $('#qs-overlay-alert').modal('hide');
        if (opts.ok != null) {
          return opts.ok();
        }
      }
    };
    tmp = "<div id='qs-overlay-alert' class='modal fade'><div class='modal-header'><h4>Alert!</h4></div><div class='modal-body' style='font-size: 20px;' data-bind='text : message'></div><div class='modal-footer'><button class='btn btn-primary' data-bind='click : ok'>OK</button></div></div>";
    $modal = $('#qs-overlay-alert');
    if ($modal.length === 0) {
      $modal = $(tmp);
      $modal.appendTo('body');
    } else {
      $modal.koClean();
    }
    $modal.koBind(vm);
    return $modal.modal({
      backdrop: 'static',
      attentionAnimation: 'shake'
    });
  };

  Overlay.remove = function(id) {
    Overlay.removeModal(id);
    return Overlay.removePopover(id);
  };

  Overlay.removeModal = function(id) {
    $('#overlay-' + id).modal('hide');
    $('#backdrop-' + id).remove();
    if (id === 'confirm') {
      return $('#overlay-' + id).remove();
    }
  };

  Overlay.removePopover = function(id) {
    return $('#popover-' + id).koClean().remove();
  };

  Overlay.removePopovers = function() {
    return $('.popover').remove();
  };

  Overlay.isVisible = function(id) {
    return $('#overlay-' + id).length > 0;
  };

  Overlay.show_loading = function() {
    var $overlay, tpl;
    $overlay = $("#qs-overlay-loading");
    $overlay.remove();
    tpl = "<div id='qs-overlay-loading' class='qs-overlay-loading'><div class='progress progress-striped active'><div class='progress-bar' style='width: 100%'></div></div></div>";
    $overlay = $(tpl);
    return $overlay.appendTo("body").fadeIn();
  };

  Overlay.hide_loading = function() {
    var $overlay;
    $overlay = $("#qs-overlay-loading");
    return $overlay.fadeOut({
      complete: function() {
        return $overlay.remove();
      }
    });
  };

  Overlay.popover = function(el, vm, tmp, opts) {
    var $po, id;
    id = vm.name;
    opts.placement = opts.placement || 'bottom';
    $po = $("<div id='popover-" + id + "' class='popover fade'><div class='arrow'></div><div class='popover-inner'><button class='close' data-bind='click : hidePopover'>x</button><h3 class='popover-title'>" + opts.title + "</h3><div class='popover-content' data-bind=\"template : '" + tmp + "'\"></div></div></div>");
    return setTimeout(function() {
      var actualHeight, actualWidth, pos, tp;
      $po.remove().css({
        top: 0,
        left: 0,
        display: 'block',
        width: 'auto'
      }).prependTo(document.body);
      $po.koBind(vm);
      $po.click(function(ev) {
        return ev.stopPropagation();
      });
      pos = getElementPosition(el);
      actualWidth = $po[0].offsetWidth;
      actualHeight = $po[0].offsetHeight;
      switch (opts.placement) {
        case 'bottom':
          tp = {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
          };
          break;
        case 'top':
          tp = {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
          };
          break;
        case 'left':
          tp = {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
          };
          break;
        case 'right':
          tp = {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
          };
      }
      if (tp.top < 0) {
        tp.top = 0;
      }
      if (tp.left < 0) {
        tp.left = 0;
      }
      tp.display = 'block';
      if (opts.style != null) {
        $po.css(opts.style);
      }
      return $po.css(tp).addClass(opts.placement).addClass('in');
    }, 100);
  };

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

  this.getElementPosition = function(el) {
    var ret;
    ret = $(el).offset();
    ret.width = el.offsetWidth;
    ret.height = el.offsetHeight;
    return ret;
  };

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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
      $el = $('<div>');
      $el.koBind(vm, tmpl);
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

  QuickScript.request_headers = {};

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

  this.Model = (function() {
    Model.prototype.init = function() {};

    Model.prototype.extend = function() {};

    function Model(data, collection, opts) {
      this.absorb = __bind(this.absorb, this);
      this.checkDirty = __bind(this.checkDirty, this);
      this.toClone = __bind(this.toClone, this);
      this.getClass = __bind(this.getClass, this);
      this.toJSON = __bind(this.toJSON, this);
      this.toAPI = __bind(this.toAPI, this);
      this.toJS = __bind(this.toJS, this);
      this.removeFromCollection = __bind(this.removeFromCollection, this);
      this["delete"] = __bind(this["delete"], this);
      this.reloadOpts = __bind(this.reloadOpts, this);
      this._uuid = QS.utils.uuid();
      this.fields = [];
      this.submodels = [];
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
      this.saveProgress = ko.observable(0);
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
      opts = this.toAPI(fields);
      opts['id'] = this.id();
      this.adapter.save({
        data: opts,
        progress: (function(_this) {
          return function(ev, prog) {
            return _this.saveProgress(prog);
          };
        })(this),
        success: (function(_this) {
          return function(resp) {
            _this.handleData(resp.data);
            if (callback != null) {
              return callback(resp);
            }
          };
        })(this),
        error: (function(_this) {
          return function(err) {
            err = err || 'unknown';
            console.log("Save error encountered [" + err + "]");
            _this.model_state(ko.modelStates.READY);
            if (callback != null) {
              return callback({
                meta: 500,
                error: 'An error occurred',
                data: {
                  errors: ['An error occurred']
                }
              });
            }
          };
        })(this)
      });
      return this.model_state(ko.modelStates.SAVING);
    };

    Model.prototype.reset = function() {
      this.id('');
      this.init();
      this.db_state(this.toJS());
      this.saveProgress(0);
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
            if (callback != null) {
              callback(resp);
            }
            if ((resp.meta === 200) && (_this.collection != null)) {
              return _this.collection.removeItemById(_this.id());
            }
          };
        })(this),
        error: (function(_this) {
          return function() {
            console.log("Delete error encountered");
            _this.model_state(ko.modelStates.READY);
            if (callback != null) {
              return callback({
                meta: 500,
                error: 'An error occurred',
                data: {
                  errors: ['An error occurred']
                }
              });
            }
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
      this.toAPI = __bind(this.toAPI, this);
      this.reset = __bind(this.reset, this);
      return FileModel.__super__.constructor.apply(this, arguments);
    }

    FileModel.prototype.extend = function() {
      this.input = {};
      this.input.files = ko.observable([]);
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
      this.input.present = ko.computed(function() {
        return this.input.files().length > 0;
      }, this);
      this.input.file = ko.computed(function() {
        if (this.input.present()) {
          return this.input.files()[0];
        } else {
          return null;
        }
      }, this);
      this.input.filename = ko.computed(function() {
        if (this.input.present()) {
          return this.input.file().name;
        } else {
          return "";
        }
      }, this);
      this.input.is_image = ko.computed(function() {
        if (this.input.present() && (this.input.file().type != null)) {
          return this.input.file().type.match('image.*');
        } else {
          return false;
        }
      }, this);
      return this.input.clear = (function(_this) {
        return function() {
          return _this.input.files([]);
        };
      })(this);
    };

    FileModel.prototype.reset = function() {
      FileModel.__super__.reset.apply(this, arguments);
      return this.input.files([]);
    };

    FileModel.prototype.toAPI = function() {
      return this.input.file();
    };

    return FileModel;

  })(Model);

  this.Collection = (function() {
    Collection.prototype.init = function() {};

    function Collection(opts) {
      this.toAPI = __bind(this.toAPI, this);
      this.toJS = __bind(this.toJS, this);
      this.absorb = __bind(this.absorb, this);
      this.length = __bind(this.length, this);
      this.hasItems = __bind(this.hasItems, this);
      this.prevPage = __bind(this.prevPage, this);
      this.nextPage = __bind(this.nextPage, this);
      this.handleItemData = __bind(this.handleItemData, this);
      this.handleData = __bind(this.handleData, this);
      this.update = __bind(this.update, this);
      this.load = __bind(this.load, this);
      this.setView = __bind(this.setView, this);
      this.updateViews = __bind(this.updateViews, this);
      this.setScope = __bind(this.setScope, this);
      this.opts = opts || {};
      this.events = {};
      this._reqid = 0;
      this.scope = ko.observable(this.opts.scope || []);
      this.items = ko.observableArray([]);
      this.views = ko.observableArray([]);
      this.view_model = ko.observable(this.opts.view || View);
      this.view_owner = ko.observable(this.opts.view_owner || null);
      this.page = ko.observable(1);
      this.limit = ko.observable(this.opts.limit || 100);
      this.title = ko.observable(this.opts.title || 'Collection');
      this.count = ko.observable(0);
      this.extra_params = ko.observable(this.opts.extra_params || {});
      this.model = this.opts.model || Model;
      this.adapter = this.opts.adapter || new ModelAdapter();
      this.template = ko.observable(this.opts.template);
      this.model_state = ko.observable(0);
      this.items.subscribe(this.updateViews);
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
      this.init();
    }

    Collection.prototype.setScope = function(scp, args) {
      var opts;
      opts = args;
      opts.unshift(scp);
      return this.scope(opts);
    };

    Collection.prototype.updateViews = function(items) {
      var ca, cm, idx, max_len, mh, ra, rm, same_view, view_cls, view_name, view_owner, _i, _ref;
      view_cls = this.view_model();
      view_owner = this.view_owner();
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

    Collection.prototype.setView = function(view_model, view_owner) {
      this.view_model(view_model);
      return this.view_owner(view_owner);
    };

    Collection.prototype._load = function(scope, op, callback) {
      var opts, reqid;
      op || (op = Collection.REPLACE);
      reqid = ++this._reqid;
      opts = this.loadOptions();
      opts.scope = scope instanceof Array ? scope : JSON.stringify(scope);
      this.adapter.index({
        data: opts,
        success: (function(_this) {
          return function(resp) {
            if (_this._reqid !== reqid) {
              return;
            }
            _this.handleData(resp.data, op);
            if (resp.count != null) {
              _this.count(resp.count);
            }
            if (callback != null) {
              callback(resp);
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
      return this._load(this.scope(), Collection.REPLACE, opts.callback);
    };

    Collection.prototype.update = function(callback) {
      return this._load(this.scope(), Collection.UPDATE, callback);
    };

    Collection.prototype.insert = function(scope, callback) {
      return this._load(scope, Collection.INSERT, callback);
    };

    Collection.prototype.append = function(scope, callback) {
      return this._load(scope, Collection.APPEND, callback);
    };

    Collection.prototype.handleData = function(resp, op) {
      var c_el, c_id, cls, curr_a, curr_len, id_h, idx, item, max_len, model, models, new_a, new_len, r_el, r_id, same_itm, views, _i, _j, _len, _ref;
      models = [];
      views = [];
      op || (op = Collection.REPLACE);
      cls = this.view_model();
      if (op === Collection.UPDATE) {
        curr_a = this.items();
        curr_len = this.items().length;
        new_a = resp;
        new_len = resp.length;
        max_len = Math.max(curr_len, new_len);
        id_h = {};
        curr_a.forEach(function(itm) {
          return id_h[itm.id()] = itm;
        });
        if (max_len > 0) {
          for (idx = _i = _ref = max_len - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
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
      } else {
        for (idx = _j = 0, _len = resp.length; _j < _len; idx = ++_j) {
          item = resp[idx];
          model = new this.model(item, this);
          models.push(model);
          views.push(new cls("view-" + (model.id()), this.view_owner(), model));
        }
        if ((op == null) || op === Collection.REPLACE) {
          this.items(models);
        } else if (op === Collection.INSERT) {
          if (models.length > 0) {
            this.items(models.concat(this.items()));
          }
        } else if (op === Collection.APPEND) {
          if (models.length > 0) {
            this.items(this.items().concat(models));
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
      var cls, view;
      notify || (notify = true);
      item.collection = this;
      cls = this.view_model();
      view = new cls("view-" + (item.id()), this.view_owner(), item);
      this.items().push(item);
      if (notify) {
        this.items.valueHasMutated();
      }
      return view;
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

    Collection.prototype.getViewById = function(id) {
      var list, ret;
      list = this.views().filter(((function(_this) {
        return function(view) {
          return view.model.id() === id;
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

    Collection.prototype.nthViews = function(n, offset) {
      return this.views().filter(function(el, i) {
        return (i - offset) % n === 0;
      });
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

    Collection.prototype.getTemplate = function() {
      return this.template();
    };

    Collection.prototype.reset = function() {
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

    return Collection;

  })();

  Collection.REPLACE = 0;

  Collection.INSERT = 1;

  Collection.APPEND = 2;

  Collection.UPDATE = 3;

  this.View = (function() {
    QuickScript.includeEventable(View);

    View.prototype.init = function() {};

    function View(name, owner, model, opts) {
      this.name = name;
      this.owner = owner;
      this.model = model;
      this.opts = opts;
      this.toAPI = __bind(this.toAPI, this);
      this.overlayVisible = __bind(this.overlayVisible, this);
      this.hidePopover = __bind(this.hidePopover, this);
      this.hideOverlay = __bind(this.hideOverlay, this);
      this.showAsPopover = __bind(this.showAsPopover, this);
      this.showAsOverlay = __bind(this.showAsOverlay, this);
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
        console.log("View [" + view.name + "] selected.");
        this.view = view;
        this.prev_task(this.task());
        this.task(view.name);
        if (last_view != null) {
          last_view.hide();
        }
        view.load.apply(view, args.slice(1));
        window.onbeforeunload = this.view.events.before_unload;
      } else {
        this.view.reload.apply(this.view, args.slice(1));
      }
      return view.show();
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

    View.prototype.showAsOverlay = function(tmp, opts, cls) {
      return Overlay.add(this, tmp, opts, cls);
    };

    View.prototype.showAsPopover = function(el, tmp, opts) {
      return Overlay.popover(el, this, tmp, opts);
    };

    View.prototype.hideOverlay = function() {
      return Overlay.remove(this.name);
    };

    View.prototype.hidePopover = function() {
      return Overlay.removePopover(this.name);
    };

    View.prototype.overlayVisible = function() {
      return Overlay.isVisible(this.name);
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

    return View;

  })();

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
      return ModelAdapter.send(this.host, opts, this);
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

  ModelAdapter.send = function(host, opts, self) {
    var def_err_fn, success_fn;
    def_err_fn = function() {
      return opts.success({
        meta: 500,
        error: 'An error occurred.',
        data: {
          errors: ['An error occurred.']
        }
      });
    };
    success_fn = opts.callback || opts.success;
    if (opts.type == null) {
      opts.type = 'POST';
    }
    opts.url = host + opts.url;
    if (opts.error == null) {
      opts.error = def_err_fn;
    }
    opts.success = function(resp) {
      if (success_fn != null) {
        success_fn(resp);
      }
      if ((self.notifier != null) && (self.event_scope != null) && (opts.event_name != null) && resp.meta === 200) {
        return self.notifier.trigger("" + self.event_scope + "." + opts.event_name, resp.data);
      }
    };
    return $.ajax_qs(opts);
  };

  ModelAdapter.host = '/api/';

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
      return ModelAdapter.send(this.host, opts, this);
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

  this.LocalStore = (function() {
    function LocalStore() {}

    return LocalStore;

  })();

  LocalStore.save = function(key, val, exp_days, callback) {
    return Lawnchair(function() {
      return this.save({
        key: key,
        val: val
      }, callback);
    });
  };

  LocalStore.get = function(key, callback) {
    return Lawnchair(function() {
      return this.get(key, function(data) {
        if (data != null) {
          return callback(data.val);
        } else {
          return callback(null);
        }
      });
    });
  };

  this.Application = (function(_super) {
    __extends(Application, _super);

    function Application(user_model) {
      this.host = __bind(this.host, this);
      this.app = this;
      this.path = ko.observable(null);
      this.previous_path = ko.observable(null);
      this.path_parts = [];
      this.title = ko.observable('');
      this.redirect_on_login = ko.observable(null);
      LocalStore.get('app.redirect_on_login', (function(_this) {
        return function(val) {
          _this.redirect_on_login(val);
          return _this.redirect_on_login.subscribe(function(val) {
            return LocalStore.save('app.redirect_on_login', val);
          });
        };
      })(this));
      ko.addTemplate("viewbox", "<div data-bind='foreach : viewList()'>\n	<div data-bind=\"fadeVisible : is_visible(), template : { name : getViewName, afterRender : afterRender, if : is_visible() }, attr : { id : templateID, 'class' : templateID }, bindelem : true\"></div>\n</div>");
      ko.addTemplate("viewbox-slide", "<div class=\"view-slider\" data-bind=\"style : {width : transition.opts.width + 'px', height : transition.opts.height + 'px'}, carousel : task\">\n	<div data-bind='foreach : viewList()'>\n		<div class=\"slide-item\" data-bind=\"template : { name : getViewName }, attr : {id : templateID, class : 'slide-item slide-item-' + $index()}, css : {}, style : {width : owner.transition.opts.width + 'px', height : owner.transition.opts.height + 'px'}, bindelem : true\"></div>\n	</div>\n</div>");
      this.configure();
      this.account_model || (this.account_model = Model);
      this.current_user = new this.account_model();
      this.is_logged_in = ko.computed(function() {
        return !this.current_user.is_new();
      }, this);
      Application.__super__.constructor.call(this, 'app', null);
    }

    Application.prototype.configure = function() {};

    Application.prototype.route = function() {
      var path;
      path = History.getRelativeUrl();
      console.log("Loading path '" + path + "'");
      this.setTitle(this.name, true);
      this.previous_path(this.path());
      this.path_parts = path.split('/');
      if (this.path_parts[this.path_parts.length - 1] !== '') {
        this.path_parts.push('');
      }
      this.path(path);
      return this.handlePath(path);
    };

    Application.prototype.handlePath = function(path) {};

    Application.prototype.setUser = function(data) {
      console.log(data);
      if (data !== null) {
        return this.current_user.handleData(data);
      }
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

    Application.prototype.redirectTo = function(path, replace, opts) {
      opts || (opts = {});
      if (opts.on_login != null) {
        this.redirect_on_login(opts.on_login);
      }
      if ((replace != null) && replace === true) {
        return History.replaceState(null, null, path);
      } else {
        return History.pushState(null, null, path);
      }
    };

    Application.prototype.loginTo = function(path, user_data, opts) {
      this.current_user.handleData(user_data);
      if (this.redirect_on_login() !== null) {
        this.redirectTo(this.redirect_on_login());
        return this.redirect_on_login(null);
      } else {
        return this.redirectTo(path);
      }
    };

    Application.prototype.logoutTo = function(path, opts) {
      this.current_user.reset();
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
    History.Adapter.bind(window, 'statechange', function() {
      return app.route();
    });
    $('body').koBind(app);
    app.afterRender();
    $('body').on('click', 'a', function() {
      if (this.href.includes(History.getRootUrl())) {
        History.pushState(null, null, this.href);
        return false;
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
    ko.bindingHandlers.loadingOverlay = {
      init: function(element, valueAccessor) {
        return $(element).css({
          'position': 'relative'
        });
      },
      update: function(element, valueAccessor) {
        var is_loading;
        is_loading = ko.utils.unwrapObservable(valueAccessor());
        if (is_loading) {
          if ($(element).children('.loading-overlay').length === 0) {
            return $(element).prepend("<div class='loading-overlay'><img src='/assets/ajax-loader.gif'/></div>");
          }
        } else {
          return $(element).children('.loading-overlay').fadeOut('fast', (function() {
            return $(this).remove();
          }));
        }
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
    ko.bindingHandlers.tinymce = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var options, val;
        options = {
          width: $(element).width(),
          height: $(element).height(),
          theme: 'advanced',
          theme_advanced_toolbar_location: 'top',
          theme_advanced_buttons1: 'bold, italic, underline, separator, undo, redo, separator, bullist, numlist, blockquote, separator, justifyleft, justifycenter, justifyright, separator, image, link, unlink, separator, code',
          theme_advanced_buttons2: '',
          theme_advanced_buttons3: '',
          content_css: '/assets/tinymce.css'
        };
        val = valueAccessor();
        options.setup = function(ed) {
          return ed.onInit.add(function(ed, l) {
            tinyMCE.dom.Event.add(ed.getWin(), "blur", function() {
              console.log('leaving...');
              return val(ed.getContent());
            });
            val.editor = function() {
              return tinyMCE.get(element.id);
            };
            if (viewModel.onTinyMCEInit != null) {
              return viewModel.onTinyMCEInit(element.id, val);
            }
          });
        };
        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          var ed;
          ed = tinyMCE.get(element.id);
          if (ed) {
            ed.remove();
            return console.log('removing tinymce');
          }
        });
        setTimeout(function() {
          $(element).tinymce(options);
          if ($(element).attr('name') !== 'undefined') {
            return ko.editors[$(element).attr('name')] = element.id;
          }
        }, 100);
        return console.log('init tinymce');
      },
      update: function(element, valueAccessor) {
        return $(element).html(ko.utils.unwrapObservable(valueAccessor()));
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
    ko.bindingHandlers.progressbar = {
      update: function(element, valueAccessor) {
        return $(element).progressbar({
          value: ko.utils.unwrapObservable(valueAccessor())
        });
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
    ko.bindingHandlers.tip = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel, bindingContext) {
        var html, opts;
        opts = ko.unwrap(valueAccessor());
        html = ko.bindingHandlers.tip.getContent(element, opts, viewModel);
        return $(element).tooltip({
          placement: opts.placement || 'bottom',
          delay: opts.delay || 0,
          html: opts.html || (opts.template != null) || false,
          title: html
        });
      },
      update: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var html, opts;
        opts = ko.utils.unwrapObservable(valueAccessor());
        html = ko.bindingHandlers.tip.getContent(element, opts, viewModel);
        return $(element).data('bs.tooltip').options.title = html;
      },
      getContent: function(element, opts, viewModel) {
        if (opts.content != null) {
          return opts.content;
        } else if (opts.template != null) {
          return QuickScript.utils.renderToString(opts.template, viewModel);
        }
      },
      tipContentElement: function(element) {
        return $(element).data('bs.tooltip').tip().find('.tooltip-inner');
      }
    };
    ko.bindingHandlers.popover = {
      init: function(element, valueAccessor, bindingsAccessor, viewModel) {
        var opts;
        opts = valueAccessor();
        return $(element).click(function() {
          return Overlay.popover(element, viewModel, opts.template, opts);
        });
      }
    };
    ko.bindingHandlers.datepicker = {
      init: function(element, valueAccessor) {
        var obs;
        obs = valueAccessor();
        return $(element).datepicker({
          onClose: function(dateText, inst) {
            return obs(dateText);
          }
        });
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
          return $(element).attr('disabled', true);
        } else {
          return $(element).removeAttr('disabled');
        }
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
        return jQuery.isEmptyObject(target());
      }, target);
      return target;
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
    koBind: function(viewModel, tmpl) {
      return this.each(function() {
        $(this).koClean();
        if (tmpl != null) {
          $(this).attr('data-bind', "template : '" + tmpl + "'");
        }
        return ko.applyBindings(viewModel, this);
      });
    },
    koClean: function() {
      return this.each(function() {
        $(this).removeAttr('data-bind');
        return ko.cleanNode(this);
      });
    }
  });

  if (SupportManager.hasFormData()) {
    jQuery.ajax_qs = function(opts) {
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
          if (req.status === 200) {
            resp = eval("(" + req.responseText + ")");
            return opts.success(resp);
          } else {
            if (opts.error != null) {
              return opts.error(req.status);
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
      _ref2 = QuickScript.request_headers;
      for (key in _ref2) {
        val = _ref2[key];
        req.setRequestHeader(key, val);
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
    jQuery.ajax_qs = function(opts) {
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
          if (req.status === 200) {
            resp = eval("(" + req.responseText + ")");
            return opts.success(resp);
          } else {
            if (opts.error != null) {
              return opts.error(req.status);
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
      _ref1 = QuickScript.request_headers;
      for (key in _ref1) {
        val = _ref1[key];
        req.setRequestHeader(key, val);
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









