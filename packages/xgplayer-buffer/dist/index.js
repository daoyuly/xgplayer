!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["xgplayer-buffer"]=e():t["xgplayer-buffer"]=e()}(window,function(){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t){this.length=t||0,this.array=[],this.offset=0}push(t){this.array.push(t),this.length+=t.byteLength}shift(t){if(this.array.length<1)return new Uint8Array(0);if(void 0===t)return this._shiftBuffer();if(this.offset+t===this.array[0].length){let e=this.array[0].slice(this.offset,this.offset+t);return this.offset=0,this.array.shift(),this.length-=t,e}if(this.offset+t<this.array[0].length){let e=this.array[0].slice(this.offset,this.offset+t);return this.offset+=t,this.length-=t,e}let e=new Uint8Array(t),r=0;for(;this.array.length>0&&t>0;){if(this.offset+t<this.array[0].length){let s=this.array[0].slice(this.offset,this.offset+t);e.set(s,r),this.offset+=t,this.length-=t,t=0;break}{let s=this.array[0].length-this.offset;e.set(this.array[0].slice(this.offset,this.array[0].length),r),this.array.shift(),this.offset=0,r+=s,this.length-=s,t-=s}}return e}clear(){this.array=[],this.length=0,this.offset=0}_shiftBuffer(){return this.length-=this.array[0].length,this.offset=0,this.array.shift()}toInt(t,e){let r=0,s=this.offset+t;for(;s<this.offset+e+t;)s<this.array[0].length?r=256*r+this.array[0][s]:this.array[1]&&(r=256*r+this.array[1][s-this.array[0].length]),s++;return r}}}])});