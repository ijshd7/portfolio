(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8oxB":function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,s=[],u=!1,m=-1;function f(){u&&l&&(u=!1,l.length?s=l.concat(s):m=-1,s.length&&h())}function h(){if(!u){var e=c(f);u=!0;for(var t=s.length;t;){for(l=s,s=[];++m<t;)l&&l[m].run();m=-1,t=s.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||u||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=d,a.addListener=d,a.once=d,a.off=d,a.removeListener=d,a.removeAllListeners=d,a.emit=d,a.prependListener=d,a.prependOnceListener=d,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},QeBL:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("7O5W"),c=r("8tEE");i.b.add(c.a);t.default=function(){return a.a.createElement("section",{className:"h-screen w-full flex flex-col bg-gray-900 font-serif"},a.a.createElement("div",{className:"hidden lg:inline-flex space-x-20 pt-8 mx-8"},a.a.createElement("div",{className:"flex-1 group"},a.a.createElement("hr",{className:"border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"}),a.a.createElement(o.Link,{to:"/projects/",className:"text-white hover:text-green-300 transition-all duration-300 ease-linear"},"Projects")),a.a.createElement("div",{className:"flex-1 group"},a.a.createElement("hr",{className:"border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"}),a.a.createElement(o.Link,{to:"/contact/",className:"text-white hover:text-green-300 transition-all duration-300 ease-linear"},"Contact"))),a.a.createElement("div",{className:"text-left text-6xl lg:text-8xl ml-4 lg:ml-48 my-auto"},a.a.createElement("h1",{className:"text-white uppercase"},"Hello"),a.a.createElement("h1",{className:"text-green-400 uppercase my-4"},"I'm"),a.a.createElement("h1",{className:"text-green-400 uppercase"},"Isaiah")),a.a.createElement(o.Link,{to:"/projects/",className:"text-center text-white lg:hidden"},"Projects"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-72a956e1a3de0b90be92.js.map