(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ox(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Od={exports:{}},Ra={},zd={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function y_(){if(tg)return Ct;tg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function g(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function _(H,pe,De){this.props=H,this.context=pe,this.refs=E,this.updater=De||M}_.prototype.isReactComponent={},_.prototype.setState=function(H,pe){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,pe,"setState")},_.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function y(){}y.prototype=_.prototype;function N(H,pe,De){this.props=H,this.context=pe,this.refs=E,this.updater=De||M}var R=N.prototype=new y;R.constructor=N,S(R,_.prototype),R.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function j(H,pe,De){var ie,xe={},Se=null,Me=null;if(pe!=null)for(ie in pe.ref!==void 0&&(Me=pe.ref),pe.key!==void 0&&(Se=""+pe.key),pe)k.call(pe,ie)&&!I.hasOwnProperty(ie)&&(xe[ie]=pe[ie]);var be=arguments.length-2;if(be===1)xe.children=De;else if(1<be){for(var ze=Array(be),et=0;et<be;et++)ze[et]=arguments[et+2];xe.children=ze}if(H&&H.defaultProps)for(ie in be=H.defaultProps,be)xe[ie]===void 0&&(xe[ie]=be[ie]);return{$$typeof:i,type:H,key:Se,ref:Me,props:xe,_owner:D.current}}function L(H,pe){return{$$typeof:i,type:H.type,key:pe,ref:H.ref,props:H.props,_owner:H._owner}}function b(H){return typeof H=="object"&&H!==null&&H.$$typeof===i}function V(H){var pe={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(De){return pe[De]})}var he=/\/+/g;function W(H,pe){return typeof H=="object"&&H!==null&&H.key!=null?V(""+H.key):pe.toString(36)}function Z(H,pe,De,ie,xe){var Se=typeof H;(Se==="undefined"||Se==="boolean")&&(H=null);var Me=!1;if(H===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(H.$$typeof){case i:case e:Me=!0}}if(Me)return Me=H,xe=xe(Me),H=ie===""?"."+W(Me,0):ie,C(xe)?(De="",H!=null&&(De=H.replace(he,"$&/")+"/"),Z(xe,pe,De,"",function(et){return et})):xe!=null&&(b(xe)&&(xe=L(xe,De+(!xe.key||Me&&Me.key===xe.key?"":(""+xe.key).replace(he,"$&/")+"/")+H)),pe.push(xe)),1;if(Me=0,ie=ie===""?".":ie+":",C(H))for(var be=0;be<H.length;be++){Se=H[be];var ze=ie+W(Se,be);Me+=Z(Se,pe,De,ze,xe)}else if(ze=g(H),typeof ze=="function")for(H=ze.call(H),be=0;!(Se=H.next()).done;)Se=Se.value,ze=ie+W(Se,be++),Me+=Z(Se,pe,De,ze,xe);else if(Se==="object")throw pe=String(H),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.");return Me}function O(H,pe,De){if(H==null)return H;var ie=[],xe=0;return Z(H,ie,"","",function(Se){return pe.call(De,Se,xe++)}),ie}function G(H){if(H._status===-1){var pe=H._result;pe=pe(),pe.then(function(De){(H._status===0||H._status===-1)&&(H._status=1,H._result=De)},function(De){(H._status===0||H._status===-1)&&(H._status=2,H._result=De)}),H._status===-1&&(H._status=0,H._result=pe)}if(H._status===1)return H._result.default;throw H._result}var Q={current:null},z={transition:null},ue={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:z,ReactCurrentOwner:D};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:O,forEach:function(H,pe,De){O(H,function(){pe.apply(this,arguments)},De)},count:function(H){var pe=0;return O(H,function(){pe++}),pe},toArray:function(H){return O(H,function(pe){return pe})||[]},only:function(H){if(!b(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Ct.Component=_,Ct.Fragment=t,Ct.Profiler=o,Ct.PureComponent=N,Ct.StrictMode=r,Ct.Suspense=f,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ct.act=te,Ct.cloneElement=function(H,pe,De){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ie=S({},H.props),xe=H.key,Se=H.ref,Me=H._owner;if(pe!=null){if(pe.ref!==void 0&&(Se=pe.ref,Me=D.current),pe.key!==void 0&&(xe=""+pe.key),H.type&&H.type.defaultProps)var be=H.type.defaultProps;for(ze in pe)k.call(pe,ze)&&!I.hasOwnProperty(ze)&&(ie[ze]=pe[ze]===void 0&&be!==void 0?be[ze]:pe[ze])}var ze=arguments.length-2;if(ze===1)ie.children=De;else if(1<ze){be=Array(ze);for(var et=0;et<ze;et++)be[et]=arguments[et+2];ie.children=be}return{$$typeof:i,type:H.type,key:xe,ref:Se,props:ie,_owner:Me}},Ct.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:l,_context:H},H.Consumer=H},Ct.createElement=j,Ct.createFactory=function(H){var pe=j.bind(null,H);return pe.type=H,pe},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(H){return{$$typeof:d,render:H}},Ct.isValidElement=b,Ct.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:G}},Ct.memo=function(H,pe){return{$$typeof:h,type:H,compare:pe===void 0?null:pe}},Ct.startTransition=function(H){var pe=z.transition;z.transition={};try{H()}finally{z.transition=pe}},Ct.unstable_act=te,Ct.useCallback=function(H,pe){return Q.current.useCallback(H,pe)},Ct.useContext=function(H){return Q.current.useContext(H)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(H){return Q.current.useDeferredValue(H)},Ct.useEffect=function(H,pe){return Q.current.useEffect(H,pe)},Ct.useId=function(){return Q.current.useId()},Ct.useImperativeHandle=function(H,pe,De){return Q.current.useImperativeHandle(H,pe,De)},Ct.useInsertionEffect=function(H,pe){return Q.current.useInsertionEffect(H,pe)},Ct.useLayoutEffect=function(H,pe){return Q.current.useLayoutEffect(H,pe)},Ct.useMemo=function(H,pe){return Q.current.useMemo(H,pe)},Ct.useReducer=function(H,pe,De){return Q.current.useReducer(H,pe,De)},Ct.useRef=function(H){return Q.current.useRef(H)},Ct.useState=function(H){return Q.current.useState(H)},Ct.useSyncExternalStore=function(H,pe,De){return Q.current.useSyncExternalStore(H,pe,De)},Ct.useTransition=function(){return Q.current.useTransition()},Ct.version="18.3.1",Ct}var ng;function xh(){return ng||(ng=1,zd.exports=y_()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function M_(){if(ig)return Ra;ig=1;var i=xh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var m,x={},g=null,M=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(M=f.ref);for(m in f)r.call(f,m)&&!l.hasOwnProperty(m)&&(x[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)x[m]===void 0&&(x[m]=f[m]);return{$$typeof:e,type:d,key:g,ref:M,props:x,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=c,Ra.jsxs=c,Ra}var rg;function S_(){return rg||(rg=1,Od.exports=M_()),Od.exports}var w=S_(),Ie=xh();const E_=Ox(Ie);var Ql={},Bd={exports:{}},_i={},Hd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function w_(){return sg||(sg=1,(function(i){function e(z,ue){var te=z.length;z.push(ue);e:for(;0<te;){var H=te-1>>>1,pe=z[H];if(0<o(pe,ue))z[H]=ue,z[te]=pe,te=H;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ue=z[0],te=z.pop();if(te!==ue){z[0]=te;e:for(var H=0,pe=z.length,De=pe>>>1;H<De;){var ie=2*(H+1)-1,xe=z[ie],Se=ie+1,Me=z[Se];if(0>o(xe,te))Se<pe&&0>o(Me,xe)?(z[H]=Me,z[Se]=te,H=Se):(z[H]=xe,z[ie]=te,H=ie);else if(Se<pe&&0>o(Me,te))z[H]=Me,z[Se]=te,H=Se;else break e}}return ue}function o(z,ue){var te=z.sortIndex-ue.sortIndex;return te!==0?te:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],h=[],m=1,x=null,g=3,M=!1,S=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=z)r(h),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(h)}}function C(z){if(E=!1,R(z),!S)if(t(f)!==null)S=!0,G(k);else{var ue=t(h);ue!==null&&Q(C,ue.startTime-z)}}function k(z,ue){S=!1,E&&(E=!1,y(j),j=-1),M=!0;var te=g;try{for(R(ue),x=t(f);x!==null&&(!(x.expirationTime>ue)||z&&!V());){var H=x.callback;if(typeof H=="function"){x.callback=null,g=x.priorityLevel;var pe=H(x.expirationTime<=ue);ue=i.unstable_now(),typeof pe=="function"?x.callback=pe:x===t(f)&&r(f),R(ue)}else r(f);x=t(f)}if(x!==null)var De=!0;else{var ie=t(h);ie!==null&&Q(C,ie.startTime-ue),De=!1}return De}finally{x=null,g=te,M=!1}}var D=!1,I=null,j=-1,L=5,b=-1;function V(){return!(i.unstable_now()-b<L)}function he(){if(I!==null){var z=i.unstable_now();b=z;var ue=!0;try{ue=I(!0,z)}finally{ue?W():(D=!1,I=null)}}else D=!1}var W;if(typeof N=="function")W=function(){N(he)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,O=Z.port2;Z.port1.onmessage=he,W=function(){O.postMessage(null)}}else W=function(){_(he,0)};function G(z){I=z,D||(D=!0,W())}function Q(z,ue){j=_(function(){z(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){S||M||(S=!0,G(k))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(z){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var te=g;g=ue;try{return z()}finally{g=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=g;g=z;try{return ue()}finally{g=te}},i.unstable_scheduleCallback=function(z,ue,te){var H=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?H+te:H):te=H,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=te+pe,z={id:m++,callback:ue,priorityLevel:z,startTime:te,expirationTime:pe,sortIndex:-1},te>H?(z.sortIndex=te,e(h,z),t(f)===null&&z===t(h)&&(E?(y(j),j=-1):E=!0,Q(C,te-H))):(z.sortIndex=pe,e(f,z),S||M||(S=!0,G(k))),z},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(z){var ue=g;return function(){var te=g;g=ue;try{return z.apply(this,arguments)}finally{g=te}}}})(Vd)),Vd}var og;function T_(){return og||(og=1,Hd.exports=w_()),Hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function C_(){if(ag)return _i;ag=1;var i=xh(),e=T_();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function g(n){return f.call(x,n)?!0:f.call(m,n)?!1:h.test(n)?x[n]=!0:(m[n]=!0,!1)}function M(n,s,a,u){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,s,a,u){if(s===null||typeof s>"u"||M(n,s,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(n,s,a,u,p,v,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=v,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];_[s]=new E(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,N);_[s]=new E(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,N);_[s]=new E(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,N);_[s]=new E(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,s,a,u){var p=_.hasOwnProperty(s)?_[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(S(s,a,p,u)&&(a=null),u||p===null?g(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,s,a):n.setAttribute(s,a))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,H;function pe(n){if(H===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+n}var De=!1;function ie(n,s){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var u=fe}Reflect.construct(n,[],s)}else{try{s.call()}catch(fe){u=fe}n.call(s.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var p=fe.stack.split(`
`),v=u.stack.split(`
`),T=p.length-1,B=v.length-1;1<=T&&0<=B&&p[T]!==v[B];)B--;for(;1<=T&&0<=B;T--,B--)if(p[T]!==v[B]){if(T!==1||B!==1)do if(T--,B--,0>B||p[T]!==v[B]){var X=`
`+p[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=B);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?pe(n):""}function xe(n){switch(n.tag){case 5:return pe(n.type);case 16:return pe("Lazy");case 13:return pe("Suspense");case 19:return pe("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case D:return"Portal";case L:return"Profiler";case j:return"StrictMode";case W:return"Suspense";case Z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case he:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return s=n.displayName||null,s!==null?s:Se(n.type)||"Memo";case G:s=n._payload,n=n._init;try{return Se(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(s);case 8:return s===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(n){var s=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vt(n){n._valueTracker||(n._valueTracker=et(n))}function Et(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==a?(s.setValue(n),!0):!1}function Wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,s){var a=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function kn(n,s){var a=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;a=be(s.value!=null?s.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(n,s){s=s.checked,s!=null&&R(n,"checked",s,!1)}function _t(n,s){ht(n,s);var a=be(s.value),u=s.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Vt(n,s.type,a):s.hasOwnProperty("defaultValue")&&Vt(n,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Qe(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vt(n,s,a){(s!=="number"||Wt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Xe=Array.isArray;function F(n,s,a,u){if(n=n.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=s.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),s=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function A(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function re(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Xe(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:be(a)}}function le(n,s){var a=be(s.value),u=be(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ce(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(s,a,u,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function pt(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){We.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ae[s]=Ae[n]})});function tt(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+s).trim():s+"px"}function rt(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=tt(a,s[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var je=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(n,s){if(s){if(je[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ct(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=null;function J(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,me=null,_e=null;function ke(n){if(n=ha(n)){if(typeof Fe!="function")throw Error(t(280));var s=n.stateNode;s&&(s=hl(s),Fe(n.stateNode,n.type,s))}}function Ue(n){me?_e?_e.push(n):_e=[n]:me=n}function dt(){if(me){var n=me,s=_e;if(_e=me=null,ke(n),s)for(n=0;n<s.length;n++)ke(s[n])}}function Yt(n,s){return n(s)}function gn(){}var St=!1;function Gt(n,s,a){if(St)return n(s,a);St=!0;try{return Yt(n,s,a)}finally{St=!1,(me!==null||_e!==null)&&(gn(),dt())}}function On(n,s){var a=n.stateNode;if(a===null)return null;var u=hl(a);if(u===null)return null;a=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ii=!1;if(d)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{ii=!1}function en(n,s,a,u,p,v,T,B,X){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(a,fe)}catch(Ee){this.onError(Ee)}}var zn=!1,Li=null,Di=!1,fi=null,Yi={onError:function(n){zn=!0,Li=n}};function qn(n,s,a,u,p,v,T,B,X){zn=!1,Li=null,en.apply(Yi,arguments)}function Ys(n,s,a,u,p,v,T,B,X){if(qn.apply(this,arguments),zn){if(zn){var fe=Li;zn=!1,Li=null}else throw Error(t(198));Di||(Di=!0,fi=fe)}}function ri(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function si(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Zs(n){if(ri(n)!==n)throw Error(t(188))}function ta(n){var s=n.alternate;if(!s){if(s=ri(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,u=s;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Zs(p),n;if(v===u)return Zs(p),s;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var T=!1,B=p.child;B;){if(B===a){T=!0,a=p,u=v;break}if(B===u){T=!0,u=p,a=v;break}B=B.sibling}if(!T){for(B=v.child;B;){if(B===a){T=!0,a=v,u=p;break}if(B===u){T=!0,u=v,a=p;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Tn(n){return n=ta(n),n!==null?Hr(n):null}function Hr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Hr(n);if(s!==null)return s;n=n.sibling}return null}var P=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,oe=e.unstable_shouldYield,de=e.unstable_requestPaint,q=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Be=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,it=e.unstable_LowPriority,lt=e.unstable_IdlePriority,qe=null,ft=null;function Ft(n){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:nt,Zt=Math.log,wt=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Zt(n)/wt|0)|0}var on=64,Tt=4194304;function bn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ei(n,s){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~p;B!==0?u=bn(B):(v&=T,v!==0&&(u=bn(v)))}else T=a&~p,T!==0?u=bn(T):v!==0&&(u=bn(v));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,v=s&-s,p>=v||p===16&&(v&4194240)!==0))return s;if((u&4)!==0&&(u|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)a=31-Lt(s),p=1<<a,u|=n[a],s&=~p;return u}function Pn(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,s){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Lt(v),B=1<<T,X=p[T];X===-1?((B&a)===0||(B&u)!==0)&&(p[T]=Pn(B,s)):X<=s&&(n.expiredLanes|=B),v&=~B}}function jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jn(){var n=on;return on<<=1,(on&4194240)===0&&(on=64),n}function Ln(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function an(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Lt(s),n[s]=a}function $(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Lt(a),v=1<<p;s[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function U(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var u=31-Lt(a),p=1<<u;p&s|n[u]&s&&(n[u]|=s),a&=~p}}var ge=0;function mt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bt,yt,cn,Xn,Ut,gt=!1,Dt=[],qt=null,oi=null,Zi=null,yr=new Map,Le=new Map,At=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _n(n,s){switch(n){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Le.delete(s.pointerId)}}function un(n,s,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:s,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},s!==null&&(s=ha(s),s!==null&&yt(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function yn(n,s,a,u,p){switch(s){case"focusin":return qt=un(qt,n,s,a,u,p),!0;case"dragenter":return oi=un(oi,n,s,a,u,p),!0;case"mouseover":return Zi=un(Zi,n,s,a,u,p),!0;case"pointerover":var v=p.pointerId;return yr.set(v,un(yr.get(v)||null,n,s,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Le.set(v,un(Le.get(v)||null,n,s,a,u,p)),!0}return!1}function Mn(n){var s=_s(n.target);if(s!==null){var a=ri(s);if(a!==null){if(s=a.tag,s===13){if(s=si(a),s!==null){n.blockedOn=s,Ut(n.priority,function(){cn(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cn(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=du(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);kt=u,a.target.dispatchEvent(u),kt=null}else return s=ha(a),s!==null&&yt(s),n.blockedOn=a,!1;s.shift()}return!0}function Ni(n,s,a){Cn(n)&&a.delete(s)}function Mr(){gt=!1,qt!==null&&Cn(qt)&&(qt=null),oi!==null&&Cn(oi)&&(oi=null),Zi!==null&&Cn(Zi)&&(Zi=null),yr.forEach(Ni),Le.forEach(Ni)}function wi(n,s){n.blockedOn===s&&(n.blockedOn=null,gt||(gt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mr)))}function hi(n){function s(p){return wi(p,n)}if(0<Dt.length){wi(Dt[0],n);for(var a=1;a<Dt.length;a++){var u=Dt[a];u.blockedOn===n&&(u.blockedOn=null)}}for(qt!==null&&wi(qt,n),oi!==null&&wi(oi,n),Zi!==null&&wi(Zi,n),yr.forEach(s),Le.forEach(s),a=0;a<At.length;a++)u=At[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<At.length&&(a=At[0],a.blockedOn===null);)Mn(a),a.blockedOn===null&&At.shift()}var ur=C.ReactCurrentBatchConfig,vs=!0;function qs(n,s,a,u){var p=ge,v=ur.transition;ur.transition=null;try{ge=1,uu(n,s,a,u)}finally{ge=p,ur.transition=v}}function el(n,s,a,u){var p=ge,v=ur.transition;ur.transition=null;try{ge=4,uu(n,s,a,u)}finally{ge=p,ur.transition=v}}function uu(n,s,a,u){if(vs){var p=du(n,s,a,u);if(p===null)Ru(n,s,u,tl,a),_n(n,u);else if(yn(p,n,s,a,u))u.stopPropagation();else if(_n(n,u),s&4&&-1<Kt.indexOf(n)){for(;p!==null;){var v=ha(p);if(v!==null&&bt(v),v=du(n,s,a,u),v===null&&Ru(n,s,u,tl,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Ru(n,s,u,null,a)}}var tl=null;function du(n,s,a,u){if(tl=null,n=J(u),n=_s(n),n!==null)if(s=ri(n),s===null)n=null;else if(a=s.tag,a===13){if(n=si(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return tl=n,null}function Hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Pe:return 1;case Be:return 4;case Ge:case it:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Vr=null,fu=null,nl=null;function Vh(){if(nl)return nl;var n,s=fu,a=s.length,u,p="value"in Vr?Vr.value:Vr.textContent,v=p.length;for(n=0;n<a&&s[n]===p[n];n++);var T=a-n;for(u=1;u<=T&&s[a-u]===p[v-u];u++);return nl=p.slice(n,1<u?1-u:void 0)}function il(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function Gh(){return!1}function Ti(n){function s(a,u,p,v,T){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(v):v[B]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?rl:Gh,this.isPropagationStopped=Gh,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),s}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Ti(Ks),na=te({},Ks,{view:0,detail:0}),$0=Ti(na),pu,mu,ia,sl=te({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ia&&(ia&&n.type==="mousemove"?(pu=n.screenX-ia.screenX,mu=n.screenY-ia.screenY):mu=pu=0,ia=n),pu)},movementY:function(n){return"movementY"in n?n.movementY:mu}}),Wh=Ti(sl),Y0=te({},sl,{dataTransfer:0}),Z0=Ti(Y0),q0=te({},na,{relatedTarget:0}),gu=Ti(q0),K0=te({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Ti(K0),J0=te({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ev=Ti(J0),tv=te({},Ks,{data:0}),jh=Ti(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=rv[n])?!!s[n]:!1}function xu(){return sv}var ov=te({},na,{key:function(n){if(n.key){var s=nv[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?iv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),av=Ti(ov),lv=te({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Ti(lv),cv=te({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),uv=Ti(cv),dv=te({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Ti(dv),hv=te({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Ti(hv),mv=[9,13,27,32],vu=d&&"CompositionEvent"in window,ra=null;d&&"documentMode"in document&&(ra=document.documentMode);var gv=d&&"TextEvent"in window&&!ra,$h=d&&(!vu||ra&&8<ra&&11>=ra),Yh=" ",Zh=!1;function qh(n,s){switch(n){case"keyup":return mv.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function xv(n,s){switch(n){case"compositionend":return Kh(s);case"keypress":return s.which!==32?null:(Zh=!0,Yh);case"textInput":return n=s.data,n===Yh&&Zh?null:n;default:return null}}function vv(n,s){if(Qs)return n==="compositionend"||!vu&&qh(n,s)?(n=Vh(),nl=fu=Vr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return $h&&s.locale!=="ko"?null:s.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!_v[n.type]:s==="textarea"}function Jh(n,s,a,u){Ue(u),s=ul(s,"onChange"),0<s.length&&(a=new hu("onChange","change",null,a,u),n.push({event:a,listeners:s}))}var sa=null,oa=null;function yv(n){xp(n,0)}function ol(n){var s=io(n);if(Et(s))return n}function Mv(n,s){if(n==="change")return s}var ep=!1;if(d){var _u;if(d){var yu="oninput"in document;if(!yu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),yu=typeof tp.oninput=="function"}_u=yu}else _u=!1;ep=_u&&(!document.documentMode||9<document.documentMode)}function np(){sa&&(sa.detachEvent("onpropertychange",ip),oa=sa=null)}function ip(n){if(n.propertyName==="value"&&ol(oa)){var s=[];Jh(s,oa,n,J(n)),Gt(yv,s)}}function Sv(n,s,a){n==="focusin"?(np(),sa=s,oa=a,sa.attachEvent("onpropertychange",ip)):n==="focusout"&&np()}function Ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(oa)}function wv(n,s){if(n==="click")return ol(s)}function Tv(n,s){if(n==="input"||n==="change")return ol(s)}function Cv(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var qi=typeof Object.is=="function"?Object.is:Cv;function aa(n,s){if(qi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),u=Object.keys(s);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(s,p)||!qi(n[p],s[p]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sp(n,s){var a=rp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=s&&u>=s)return{node:a,offset:s-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function op(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?op(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function ap(){for(var n=window,s=Wt();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Wt(n.document)}return s}function Mu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Av(n){var s=ap(),a=n.focusedElem,u=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&op(a.ownerDocument.documentElement,a)){if(u!==null&&Mu(a)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=sp(a,v);var T=sp(a,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(s),n.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rv=d&&"documentMode"in document&&11>=document.documentMode,Js=null,Su=null,la=null,Eu=!1;function lp(n,s,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Js==null||Js!==Wt(u)||(u=Js,"selectionStart"in u&&Mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),la&&aa(la,u)||(la=u,u=ul(Su,"onSelect"),0<u.length&&(s=new hu("onSelect","select",null,s,a),n.push({event:s,listeners:u}),s.target=Js)))}function al(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var eo={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},wu={},cp={};d&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ll(n){if(wu[n])return wu[n];if(!eo[n])return n;var s=eo[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in cp)return wu[n]=s[a];return n}var up=ll("animationend"),dp=ll("animationiteration"),fp=ll("animationstart"),hp=ll("transitionend"),pp=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,s){pp.set(n,s),l(s,[n])}for(var Tu=0;Tu<mp.length;Tu++){var Cu=mp[Tu],bv=Cu.toLowerCase(),Pv=Cu[0].toUpperCase()+Cu.slice(1);Gr(bv,"on"+Pv)}Gr(up,"onAnimationEnd"),Gr(dp,"onAnimationIteration"),Gr(fp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(hp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function gp(n,s,a){var u=n.type||"unknown-event";n.currentTarget=a,Ys(u,s,void 0,n),n.currentTarget=null}function xp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(s)for(var T=u.length-1;0<=T;T--){var B=u[T],X=B.instance,fe=B.currentTarget;if(B=B.listener,X!==v&&p.isPropagationStopped())break e;gp(p,B,fe),v=X}else for(T=0;T<u.length;T++){if(B=u[T],X=B.instance,fe=B.currentTarget,B=B.listener,X!==v&&p.isPropagationStopped())break e;gp(p,B,fe),v=X}}}if(Di)throw n=fi,Di=!1,fi=null,n}function tn(n,s){var a=s[Iu];a===void 0&&(a=s[Iu]=new Set);var u=n+"__bubble";a.has(u)||(vp(s,n,2,!1),a.add(u))}function Au(n,s,a){var u=0;s&&(u|=4),vp(a,n,u,s)}var cl="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[cl]){n[cl]=!0,r.forEach(function(a){a!=="selectionchange"&&(Lv.has(a)||Au(a,!1,n),Au(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[cl]||(s[cl]=!0,Au("selectionchange",!1,s))}}function vp(n,s,a,u){switch(Hh(s)){case 1:var p=qs;break;case 4:p=el;break;default:p=uu}a=p.bind(null,s,a,n),p=void 0,!ii||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(s,a,{capture:!0,passive:p}):n.addEventListener(s,a,!0):p!==void 0?n.addEventListener(s,a,{passive:p}):n.addEventListener(s,a,!1)}function Ru(n,s,a,u,p){var v=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var B=u.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===p||X.nodeType===8&&X.parentNode===p))return;T=T.return}for(;B!==null;){if(T=_s(B),T===null)return;if(X=T.tag,X===5||X===6){u=v=T;continue e}B=B.parentNode}}u=u.return}Gt(function(){var fe=v,Ee=J(a),Ce=[];e:{var ye=pp.get(n);if(ye!==void 0){var He=hu,Ye=n;switch(n){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":He=av;break;case"focusin":Ye="focus",He=gu;break;case"focusout":Ye="blur",He=gu;break;case"beforeblur":case"afterblur":He=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=uv;break;case up:case dp:case fp:He=Q0;break;case hp:He=fv;break;case"scroll":He=$0;break;case"wheel":He=pv;break;case"copy":case"cut":case"paste":He=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Xh}var Ke=(s&4)!==0,Sn=!Ke&&n==="scroll",ne=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var K=fe,se;K!==null;){se=K;var Re=se.stateNode;if(se.tag===5&&Re!==null&&(se=Re,ne!==null&&(Re=On(K,ne),Re!=null&&Ke.push(da(K,Re,se)))),Sn)break;K=K.return}0<Ke.length&&(ye=new He(ye,Ye,null,a,Ee),Ce.push({event:ye,listeners:Ke}))}}if((s&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&a!==kt&&(Ye=a.relatedTarget||a.fromElement)&&(_s(Ye)||Ye[Sr]))break e;if((He||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=fe,Ye=Ye?_s(Ye):null,Ye!==null&&(Sn=ri(Ye),Ye!==Sn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=fe),He!==Ye)){if(Ke=Wh,Re="onMouseLeave",ne="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=Xh,Re="onPointerLeave",ne="onPointerEnter",K="pointer"),Sn=He==null?ye:io(He),se=Ye==null?ye:io(Ye),ye=new Ke(Re,K+"leave",He,a,Ee),ye.target=Sn,ye.relatedTarget=se,Re=null,_s(Ee)===fe&&(Ke=new Ke(ne,K+"enter",Ye,a,Ee),Ke.target=se,Ke.relatedTarget=Sn,Re=Ke),Sn=Re,He&&Ye)t:{for(Ke=He,ne=Ye,K=0,se=Ke;se;se=to(se))K++;for(se=0,Re=ne;Re;Re=to(Re))se++;for(;0<K-se;)Ke=to(Ke),K--;for(;0<se-K;)ne=to(ne),se--;for(;K--;){if(Ke===ne||ne!==null&&Ke===ne.alternate)break t;Ke=to(Ke),ne=to(ne)}Ke=null}else Ke=null;He!==null&&_p(Ce,ye,He,Ke,!1),Ye!==null&&Sn!==null&&_p(Ce,Sn,Ye,Ke,!0)}}e:{if(ye=fe?io(fe):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Je=Mv;else if(Qh(ye))if(ep)Je=Tv;else{Je=Ev;var st=Sv}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=wv);if(Je&&(Je=Je(n,fe))){Jh(Ce,Je,a,Ee);break e}st&&st(n,ye,fe),n==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&Vt(ye,"number",ye.value)}switch(st=fe?io(fe):window,n){case"focusin":(Qh(st)||st.contentEditable==="true")&&(Js=st,Su=fe,la=null);break;case"focusout":la=Su=Js=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,lp(Ce,a,Ee);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":lp(Ce,a,Ee)}var ot;if(vu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Qs?qh(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&($h&&a.locale!=="ko"&&(Qs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Qs&&(ot=Vh()):(Vr=Ee,fu="value"in Vr?Vr.value:Vr.textContent,Qs=!0)),st=ul(fe,ut),0<st.length&&(ut=new jh(ut,n,null,a,Ee),Ce.push({event:ut,listeners:st}),ot?ut.data=ot:(ot=Kh(a),ot!==null&&(ut.data=ot)))),(ot=gv?xv(n,a):vv(n,a))&&(fe=ul(fe,"onBeforeInput"),0<fe.length&&(Ee=new jh("onBeforeInput","beforeinput",null,a,Ee),Ce.push({event:Ee,listeners:fe}),Ee.data=ot))}xp(Ce,s)})}function da(n,s,a){return{instance:n,listener:s,currentTarget:a}}function ul(n,s){for(var a=s+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=On(n,a),v!=null&&u.unshift(da(n,v,p)),v=On(n,s),v!=null&&u.push(da(n,v,p))),n=n.return}return u}function to(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _p(n,s,a,u,p){for(var v=s._reactName,T=[];a!==null&&a!==u;){var B=a,X=B.alternate,fe=B.stateNode;if(X!==null&&X===u)break;B.tag===5&&fe!==null&&(B=fe,p?(X=On(a,v),X!=null&&T.unshift(da(a,X,B))):p||(X=On(a,v),X!=null&&T.push(da(a,X,B)))),a=a.return}T.length!==0&&n.push({event:s,listeners:T})}var Dv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function yp(n){return(typeof n=="string"?n:""+n).replace(Dv,`
`).replace(Nv,"")}function dl(n,s,a){if(s=yp(s),yp(n)!==s&&a)throw Error(t(425))}function fl(){}var bu=null,Pu=null;function Lu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(n){return Mp.resolve(null).then(n).catch(Uv)}:Du;function Uv(n){setTimeout(function(){throw n})}function Nu(n,s){var a=s,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),hi(s);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);hi(s)}function Wr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Sp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var no=Math.random().toString(36).slice(2),dr="__reactFiber$"+no,fa="__reactProps$"+no,Sr="__reactContainer$"+no,Iu="__reactEvents$"+no,kv="__reactListeners$"+no,Ov="__reactHandles$"+no;function _s(n){var s=n[dr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Sr]||a[dr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Sp(n);n!==null;){if(a=n[dr])return a;n=Sp(n)}return s}n=a,a=n.parentNode}return null}function ha(n){return n=n[dr]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[fa]||null}var Fu=[],ro=-1;function jr(n){return{current:n}}function nn(n){0>ro||(n.current=Fu[ro],Fu[ro]=null,ro--)}function Qt(n,s){ro++,Fu[ro]=n.current,n.current=s}var Xr={},Kn=jr(Xr),pi=jr(!1),ys=Xr;function so(n,s){var a=n.type.contextTypes;if(!a)return Xr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=s[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function mi(n){return n=n.childContextTypes,n!=null}function pl(){nn(pi),nn(Kn)}function Ep(n,s,a){if(Kn.current!==Xr)throw Error(t(168));Qt(Kn,s),Qt(pi,a)}function wp(n,s,a){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,Me(n)||"Unknown",p));return te({},a,u)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,ys=Kn.current,Qt(Kn,n),Qt(pi,pi.current),!0}function Tp(n,s,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=wp(n,s,ys),u.__reactInternalMemoizedMergedChildContext=n,nn(pi),nn(Kn),Qt(Kn,n)):nn(pi),Qt(pi,a)}var Er=null,gl=!1,Uu=!1;function Cp(n){Er===null?Er=[n]:Er.push(n)}function zv(n){gl=!0,Cp(n)}function $r(){if(!Uu&&Er!==null){Uu=!0;var n=0,s=ge;try{var a=Er;for(ge=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Er=null,gl=!1}catch(p){throw Er!==null&&(Er=Er.slice(n+1)),P(Pe,$r),p}finally{ge=s,Uu=!1}}return null}var oo=[],ao=0,xl=null,vl=0,Ii=[],Fi=0,Ms=null,wr=1,Tr="";function Ss(n,s){oo[ao++]=vl,oo[ao++]=xl,xl=n,vl=s}function Ap(n,s,a){Ii[Fi++]=wr,Ii[Fi++]=Tr,Ii[Fi++]=Ms,Ms=n;var u=wr;n=Tr;var p=32-Lt(u)-1;u&=~(1<<p),a+=1;var v=32-Lt(s)+p;if(30<v){var T=p-p%5;v=(u&(1<<T)-1).toString(32),u>>=T,p-=T,wr=1<<32-Lt(s)+p|a<<p|u,Tr=v+n}else wr=1<<v|a<<p|u,Tr=n}function ku(n){n.return!==null&&(Ss(n,1),Ap(n,1,0))}function Ou(n){for(;n===xl;)xl=oo[--ao],oo[ao]=null,vl=oo[--ao],oo[ao]=null;for(;n===Ms;)Ms=Ii[--Fi],Ii[Fi]=null,Tr=Ii[--Fi],Ii[Fi]=null,wr=Ii[--Fi],Ii[Fi]=null}var Ci=null,Ai=null,ln=!1,Ki=null;function Rp(n,s){var a=zi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function bp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Ci=n,Ai=Wr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Ci=n,Ai=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ms!==null?{id:wr,overflow:Tr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=zi(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,Ci=n,Ai=null,!0):!1;default:return!1}}function zu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bu(n){if(ln){var s=Ai;if(s){var a=s;if(!bp(n,s)){if(zu(n))throw Error(t(418));s=Wr(a.nextSibling);var u=Ci;s&&bp(n,s)?Rp(u,a):(n.flags=n.flags&-4097|2,ln=!1,Ci=n)}}else{if(zu(n))throw Error(t(418));n.flags=n.flags&-4097|2,ln=!1,Ci=n}}}function Pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ci=n}function _l(n){if(n!==Ci)return!1;if(!ln)return Pp(n),ln=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Lu(n.type,n.memoizedProps)),s&&(s=Ai)){if(zu(n))throw Lp(),Error(t(418));for(;s;)Rp(n,s),s=Wr(s.nextSibling)}if(Pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){Ai=Wr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}Ai=null}}else Ai=Ci?Wr(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=Ai;n;)n=Wr(n.nextSibling)}function lo(){Ai=Ci=null,ln=!1}function Hu(n){Ki===null?Ki=[n]:Ki.push(n)}var Bv=C.ReactCurrentBatchConfig;function pa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(T){var B=p.refs;T===null?delete B[v]:B[v]=T},s._stringRef=v,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function yl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Dp(n){var s=n._init;return s(n._payload)}function Np(n){function s(ne,K){if(n){var se=ne.deletions;se===null?(ne.deletions=[K],ne.flags|=16):se.push(K)}}function a(ne,K){if(!n)return null;for(;K!==null;)s(ne,K),K=K.sibling;return null}function u(ne,K){for(ne=new Map;K!==null;)K.key!==null?ne.set(K.key,K):ne.set(K.index,K),K=K.sibling;return ne}function p(ne,K){return ne=ts(ne,K),ne.index=0,ne.sibling=null,ne}function v(ne,K,se){return ne.index=se,n?(se=ne.alternate,se!==null?(se=se.index,se<K?(ne.flags|=2,K):se):(ne.flags|=2,K)):(ne.flags|=1048576,K)}function T(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function B(ne,K,se,Re){return K===null||K.tag!==6?(K=Dd(se,ne.mode,Re),K.return=ne,K):(K=p(K,se),K.return=ne,K)}function X(ne,K,se,Re){var Je=se.type;return Je===I?Ee(ne,K,se.props.children,Re,se.key):K!==null&&(K.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===G&&Dp(Je)===K.type)?(Re=p(K,se.props),Re.ref=pa(ne,K,se),Re.return=ne,Re):(Re=Wl(se.type,se.key,se.props,null,ne.mode,Re),Re.ref=pa(ne,K,se),Re.return=ne,Re)}function fe(ne,K,se,Re){return K===null||K.tag!==4||K.stateNode.containerInfo!==se.containerInfo||K.stateNode.implementation!==se.implementation?(K=Nd(se,ne.mode,Re),K.return=ne,K):(K=p(K,se.children||[]),K.return=ne,K)}function Ee(ne,K,se,Re,Je){return K===null||K.tag!==7?(K=Ps(se,ne.mode,Re,Je),K.return=ne,K):(K=p(K,se),K.return=ne,K)}function Ce(ne,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Dd(""+K,ne.mode,se),K.return=ne,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case k:return se=Wl(K.type,K.key,K.props,null,ne.mode,se),se.ref=pa(ne,null,K),se.return=ne,se;case D:return K=Nd(K,ne.mode,se),K.return=ne,K;case G:var Re=K._init;return Ce(ne,Re(K._payload),se)}if(Xe(K)||ue(K))return K=Ps(K,ne.mode,se,null),K.return=ne,K;yl(ne,K)}return null}function ye(ne,K,se,Re){var Je=K!==null?K.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:B(ne,K,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return se.key===Je?X(ne,K,se,Re):null;case D:return se.key===Je?fe(ne,K,se,Re):null;case G:return Je=se._init,ye(ne,K,Je(se._payload),Re)}if(Xe(se)||ue(se))return Je!==null?null:Ee(ne,K,se,Re,null);yl(ne,se)}return null}function He(ne,K,se,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ne=ne.get(se)||null,B(K,ne,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case k:return ne=ne.get(Re.key===null?se:Re.key)||null,X(K,ne,Re,Je);case D:return ne=ne.get(Re.key===null?se:Re.key)||null,fe(K,ne,Re,Je);case G:var st=Re._init;return He(ne,K,se,st(Re._payload),Je)}if(Xe(Re)||ue(Re))return ne=ne.get(se)||null,Ee(K,ne,Re,Je,null);yl(K,Re)}return null}function Ye(ne,K,se,Re){for(var Je=null,st=null,ot=K,ut=K=0,Vn=null;ot!==null&&ut<se.length;ut++){ot.index>ut?(Vn=ot,ot=null):Vn=ot.sibling;var zt=ye(ne,ot,se[ut],Re);if(zt===null){ot===null&&(ot=Vn);break}n&&ot&&zt.alternate===null&&s(ne,ot),K=v(zt,K,ut),st===null?Je=zt:st.sibling=zt,st=zt,ot=Vn}if(ut===se.length)return a(ne,ot),ln&&Ss(ne,ut),Je;if(ot===null){for(;ut<se.length;ut++)ot=Ce(ne,se[ut],Re),ot!==null&&(K=v(ot,K,ut),st===null?Je=ot:st.sibling=ot,st=ot);return ln&&Ss(ne,ut),Je}for(ot=u(ne,ot);ut<se.length;ut++)Vn=He(ot,ne,ut,se[ut],Re),Vn!==null&&(n&&Vn.alternate!==null&&ot.delete(Vn.key===null?ut:Vn.key),K=v(Vn,K,ut),st===null?Je=Vn:st.sibling=Vn,st=Vn);return n&&ot.forEach(function(ns){return s(ne,ns)}),ln&&Ss(ne,ut),Je}function Ke(ne,K,se,Re){var Je=ue(se);if(typeof Je!="function")throw Error(t(150));if(se=Je.call(se),se==null)throw Error(t(151));for(var st=Je=null,ot=K,ut=K=0,Vn=null,zt=se.next();ot!==null&&!zt.done;ut++,zt=se.next()){ot.index>ut?(Vn=ot,ot=null):Vn=ot.sibling;var ns=ye(ne,ot,zt.value,Re);if(ns===null){ot===null&&(ot=Vn);break}n&&ot&&ns.alternate===null&&s(ne,ot),K=v(ns,K,ut),st===null?Je=ns:st.sibling=ns,st=ns,ot=Vn}if(zt.done)return a(ne,ot),ln&&Ss(ne,ut),Je;if(ot===null){for(;!zt.done;ut++,zt=se.next())zt=Ce(ne,zt.value,Re),zt!==null&&(K=v(zt,K,ut),st===null?Je=zt:st.sibling=zt,st=zt);return ln&&Ss(ne,ut),Je}for(ot=u(ne,ot);!zt.done;ut++,zt=se.next())zt=He(ot,ne,ut,zt.value,Re),zt!==null&&(n&&zt.alternate!==null&&ot.delete(zt.key===null?ut:zt.key),K=v(zt,K,ut),st===null?Je=zt:st.sibling=zt,st=zt);return n&&ot.forEach(function(__){return s(ne,__)}),ln&&Ss(ne,ut),Je}function Sn(ne,K,se,Re){if(typeof se=="object"&&se!==null&&se.type===I&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case k:e:{for(var Je=se.key,st=K;st!==null;){if(st.key===Je){if(Je=se.type,Je===I){if(st.tag===7){a(ne,st.sibling),K=p(st,se.props.children),K.return=ne,ne=K;break e}}else if(st.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===G&&Dp(Je)===st.type){a(ne,st.sibling),K=p(st,se.props),K.ref=pa(ne,st,se),K.return=ne,ne=K;break e}a(ne,st);break}else s(ne,st);st=st.sibling}se.type===I?(K=Ps(se.props.children,ne.mode,Re,se.key),K.return=ne,ne=K):(Re=Wl(se.type,se.key,se.props,null,ne.mode,Re),Re.ref=pa(ne,K,se),Re.return=ne,ne=Re)}return T(ne);case D:e:{for(st=se.key;K!==null;){if(K.key===st)if(K.tag===4&&K.stateNode.containerInfo===se.containerInfo&&K.stateNode.implementation===se.implementation){a(ne,K.sibling),K=p(K,se.children||[]),K.return=ne,ne=K;break e}else{a(ne,K);break}else s(ne,K);K=K.sibling}K=Nd(se,ne.mode,Re),K.return=ne,ne=K}return T(ne);case G:return st=se._init,Sn(ne,K,st(se._payload),Re)}if(Xe(se))return Ye(ne,K,se,Re);if(ue(se))return Ke(ne,K,se,Re);yl(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,K!==null&&K.tag===6?(a(ne,K.sibling),K=p(K,se),K.return=ne,ne=K):(a(ne,K),K=Dd(se,ne.mode,Re),K.return=ne,ne=K),T(ne)):a(ne,K)}return Sn}var co=Np(!0),Ip=Np(!1),Ml=jr(null),Sl=null,uo=null,Vu=null;function Gu(){Vu=uo=Sl=null}function Wu(n){var s=Ml.current;nn(Ml),n._currentValue=s}function ju(n,s,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===a)break;n=n.return}}function fo(n,s){Sl=n,Vu=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(gi=!0),n.firstContext=null)}function Ui(n){var s=n._currentValue;if(Vu!==n)if(n={context:n,memoizedValue:s,next:null},uo===null){if(Sl===null)throw Error(t(308));uo=n,Sl.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return s}var Es=null;function Xu(n){Es===null?Es=[n]:Es.push(n)}function Fp(n,s,a,u){var p=s.interleaved;return p===null?(a.next=a,Xu(s)):(a.next=p.next,p.next=a),s.interleaved=a,Cr(n,u)}function Cr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Yr=!1;function $u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Zr(n,s,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,Cr(n,a)}return p=u.interleaved,p===null?(s.next=s,Xu(u)):(s.next=p.next,p.next=s),u.interleaved=s,Cr(n,a)}function El(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,a|=u,s.lanes=a,U(n,a)}}function kp(n,s){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?p=v=s:v=v.next=s}else p=v=s;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function wl(n,s,a,u){var p=n.updateQueue;Yr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var X=B,fe=X.next;X.next=null,T===null?v=fe:T.next=fe,T=X;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,B=Ee.lastBaseUpdate,B!==T&&(B===null?Ee.firstBaseUpdate=fe:B.next=fe,Ee.lastBaseUpdate=X))}if(v!==null){var Ce=p.baseState;T=0,Ee=fe=X=null,B=v;do{var ye=B.lane,He=B.eventTime;if((u&ye)===ye){Ee!==null&&(Ee=Ee.next={eventTime:He,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ye=n,Ke=B;switch(ye=s,He=a,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Ce=Ye.call(He,Ce,ye);break e}Ce=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,ye=typeof Ye=="function"?Ye.call(He,Ce,ye):Ye,ye==null)break e;Ce=te({},Ce,ye);break e;case 2:Yr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[B]:ye.push(B))}else He={eventTime:He,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ee===null?(fe=Ee=He,X=Ce):Ee=Ee.next=He,T|=ye;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Ee===null&&(X=Ce),p.baseState=X,p.firstBaseUpdate=fe,p.lastBaseUpdate=Ee,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else v===null&&(p.shared.lanes=0);Cs|=T,n.lanes=T,n.memoizedState=Ce}}function Op(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ma={},fr=jr(ma),ga=jr(ma),xa=jr(ma);function ws(n){if(n===ma)throw Error(t(174));return n}function Yu(n,s){switch(Qt(xa,s),Qt(ga,n),Qt(fr,ma),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ze(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ze(s,n)}nn(fr),Qt(fr,s)}function ho(){nn(fr),nn(ga),nn(xa)}function zp(n){ws(xa.current);var s=ws(fr.current),a=Ze(s,n.type);s!==a&&(Qt(ga,n),Qt(fr,a))}function Zu(n){ga.current===n&&(nn(fr),nn(ga))}var dn=jr(0);function Tl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qu=[];function Ku(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var Cl=C.ReactCurrentDispatcher,Qu=C.ReactCurrentBatchConfig,Ts=0,fn=null,Dn=null,Bn=null,Al=!1,va=!1,_a=0,Hv=0;function Qn(){throw Error(t(321))}function Ju(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!qi(n[a],s[a]))return!1;return!0}function ed(n,s,a,u,p,v){if(Ts=v,fn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cl.current=n===null||n.memoizedState===null?jv:Xv,n=a(u,p),va){v=0;do{if(va=!1,_a=0,25<=v)throw Error(t(301));v+=1,Bn=Dn=null,s.updateQueue=null,Cl.current=$v,n=a(u,p)}while(va)}if(Cl.current=Pl,s=Dn!==null&&Dn.next!==null,Ts=0,Bn=Dn=fn=null,Al=!1,s)throw Error(t(300));return n}function td(){var n=_a!==0;return _a=0,n}function hr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?fn.memoizedState=Bn=n:Bn=Bn.next=n,Bn}function ki(){if(Dn===null){var n=fn.alternate;n=n!==null?n.memoizedState:null}else n=Dn.next;var s=Bn===null?fn.memoizedState:Bn.next;if(s!==null)Bn=s,Dn=n;else{if(n===null)throw Error(t(310));Dn=n,n={memoizedState:Dn.memoizedState,baseState:Dn.baseState,baseQueue:Dn.baseQueue,queue:Dn.queue,next:null},Bn===null?fn.memoizedState=Bn=n:Bn=Bn.next=n}return Bn}function ya(n,s){return typeof s=="function"?s(n):s}function nd(n){var s=ki(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Dn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var B=T=null,X=null,fe=v;do{var Ee=fe.lane;if((Ts&Ee)===Ee)X!==null&&(X=X.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ce={lane:Ee,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};X===null?(B=X=Ce,T=u):X=X.next=Ce,fn.lanes|=Ee,Cs|=Ee}fe=fe.next}while(fe!==null&&fe!==v);X===null?T=u:X.next=B,qi(u,s.memoizedState)||(gi=!0),s.memoizedState=u,s.baseState=T,s.baseQueue=X,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,fn.lanes|=v,Cs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function id(n){var s=ki(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);qi(v,s.memoizedState)||(gi=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),a.lastRenderedState=v}return[v,u]}function Bp(){}function Hp(n,s){var a=fn,u=ki(),p=s(),v=!qi(u.memoizedState,p);if(v&&(u.memoizedState=p,gi=!0),u=u.queue,rd(Wp.bind(null,a,u,n),[n]),u.getSnapshot!==s||v||Bn!==null&&Bn.memoizedState.tag&1){if(a.flags|=2048,Ma(9,Gp.bind(null,a,u,p,s),void 0,null),Hn===null)throw Error(t(349));(Ts&30)!==0||Vp(a,s,p)}return p}function Vp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=fn.updateQueue,s===null?(s={lastEffect:null,stores:null},fn.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Gp(n,s,a,u){s.value=a,s.getSnapshot=u,jp(s)&&Xp(n)}function Wp(n,s,a){return a(function(){jp(s)&&Xp(n)})}function jp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!qi(n,a)}catch{return!0}}function Xp(n){var s=Cr(n,1);s!==null&&tr(s,n,1,-1)}function $p(n){var s=hr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},s.queue=n,n=n.dispatch=Wv.bind(null,fn,n),[s.memoizedState,n]}function Ma(n,s,a,u){return n={tag:n,create:s,destroy:a,deps:u,next:null},s=fn.updateQueue,s===null?(s={lastEffect:null,stores:null},fn.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,s.lastEffect=n)),n}function Yp(){return ki().memoizedState}function Rl(n,s,a,u){var p=hr();fn.flags|=n,p.memoizedState=Ma(1|s,a,void 0,u===void 0?null:u)}function bl(n,s,a,u){var p=ki();u=u===void 0?null:u;var v=void 0;if(Dn!==null){var T=Dn.memoizedState;if(v=T.destroy,u!==null&&Ju(u,T.deps)){p.memoizedState=Ma(s,a,v,u);return}}fn.flags|=n,p.memoizedState=Ma(1|s,a,v,u)}function Zp(n,s){return Rl(8390656,8,n,s)}function rd(n,s){return bl(2048,8,n,s)}function qp(n,s){return bl(4,2,n,s)}function Kp(n,s){return bl(4,4,n,s)}function Qp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Jp(n,s,a){return a=a!=null?a.concat([n]):null,bl(4,4,Qp.bind(null,s,n),a)}function sd(){}function em(n,s){var a=ki();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&Ju(s,u[1])?u[0]:(a.memoizedState=[n,s],n)}function tm(n,s){var a=ki();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&Ju(s,u[1])?u[0]:(n=n(),a.memoizedState=[n,s],n)}function nm(n,s,a){return(Ts&21)===0?(n.baseState&&(n.baseState=!1,gi=!0),n.memoizedState=a):(qi(a,s)||(a=jn(),fn.lanes|=a,Cs|=a,n.baseState=!0),s)}function Vv(n,s){var a=ge;ge=a!==0&&4>a?a:4,n(!0);var u=Qu.transition;Qu.transition={};try{n(!1),s()}finally{ge=a,Qu.transition=u}}function im(){return ki().memoizedState}function Gv(n,s,a){var u=Jr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},rm(n))sm(s,a);else if(a=Fp(n,s,a,u),a!==null){var p=li();tr(a,n,u,p),om(a,s,u)}}function Wv(n,s,a){var u=Jr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(rm(n))sm(s,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var T=s.lastRenderedState,B=v(T,a);if(p.hasEagerState=!0,p.eagerState=B,qi(B,T)){var X=s.interleaved;X===null?(p.next=p,Xu(s)):(p.next=X.next,X.next=p),s.interleaved=p;return}}catch{}finally{}a=Fp(n,s,p,u),a!==null&&(p=li(),tr(a,n,u,p),om(a,s,u))}}function rm(n){var s=n.alternate;return n===fn||s!==null&&s===fn}function sm(n,s){va=Al=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function om(n,s,a){if((a&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,a|=u,s.lanes=a,U(n,a)}}var Pl={readContext:Ui,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},jv={readContext:Ui,useCallback:function(n,s){return hr().memoizedState=[n,s===void 0?null:s],n},useContext:Ui,useEffect:Zp,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,Rl(4194308,4,Qp.bind(null,s,n),a)},useLayoutEffect:function(n,s){return Rl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Rl(4,2,n,s)},useMemo:function(n,s){var a=hr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var u=hr();return s=a!==void 0?a(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=Gv.bind(null,fn,n),[u.memoizedState,n]},useRef:function(n){var s=hr();return n={current:n},s.memoizedState=n},useState:$p,useDebugValue:sd,useDeferredValue:function(n){return hr().memoizedState=n},useTransition:function(){var n=$p(!1),s=n[0];return n=Vv.bind(null,n[1]),hr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var u=fn,p=hr();if(ln){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Hn===null)throw Error(t(349));(Ts&30)!==0||Vp(u,s,a)}p.memoizedState=a;var v={value:a,getSnapshot:s};return p.queue=v,Zp(Wp.bind(null,u,v,n),[n]),u.flags|=2048,Ma(9,Gp.bind(null,u,v,a,s),void 0,null),a},useId:function(){var n=hr(),s=Hn.identifierPrefix;if(ln){var a=Tr,u=wr;a=(u&~(1<<32-Lt(u)-1)).toString(32)+a,s=":"+s+"R"+a,a=_a++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Hv++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Xv={readContext:Ui,useCallback:em,useContext:Ui,useEffect:rd,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:Kp,useMemo:tm,useReducer:nd,useRef:Yp,useState:function(){return nd(ya)},useDebugValue:sd,useDeferredValue:function(n){var s=ki();return nm(s,Dn.memoizedState,n)},useTransition:function(){var n=nd(ya)[0],s=ki().memoizedState;return[n,s]},useMutableSource:Bp,useSyncExternalStore:Hp,useId:im,unstable_isNewReconciler:!1},$v={readContext:Ui,useCallback:em,useContext:Ui,useEffect:rd,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:Kp,useMemo:tm,useReducer:id,useRef:Yp,useState:function(){return id(ya)},useDebugValue:sd,useDeferredValue:function(n){var s=ki();return Dn===null?s.memoizedState=n:nm(s,Dn.memoizedState,n)},useTransition:function(){var n=id(ya)[0],s=ki().memoizedState;return[n,s]},useMutableSource:Bp,useSyncExternalStore:Hp,useId:im,unstable_isNewReconciler:!1};function Qi(n,s){if(n&&n.defaultProps){s=te({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function od(n,s,a,u){s=n.memoizedState,a=a(u,s),a=a==null?s:te({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?ri(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var u=li(),p=Jr(n),v=Ar(u,p);v.payload=s,a!=null&&(v.callback=a),s=Zr(n,v,p),s!==null&&(tr(s,n,p,u),El(s,n,p))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var u=li(),p=Jr(n),v=Ar(u,p);v.tag=1,v.payload=s,a!=null&&(v.callback=a),s=Zr(n,v,p),s!==null&&(tr(s,n,p,u),El(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=li(),u=Jr(n),p=Ar(a,u);p.tag=2,s!=null&&(p.callback=s),s=Zr(n,p,u),s!==null&&(tr(s,n,u,a),El(s,n,u))}};function am(n,s,a,u,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):s.prototype&&s.prototype.isPureReactComponent?!aa(a,u)||!aa(p,v):!0}function lm(n,s,a){var u=!1,p=Xr,v=s.contextType;return typeof v=="object"&&v!==null?v=Ui(v):(p=mi(s)?ys:Kn.current,u=s.contextTypes,v=(u=u!=null)?so(n,p):Xr),s=new s(a,v),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ll,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),s}function cm(n,s,a,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,u),s.state!==n&&Ll.enqueueReplaceState(s,s.state,null)}function ad(n,s,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},$u(n);var v=s.contextType;typeof v=="object"&&v!==null?p.context=Ui(v):(v=mi(s)?ys:Kn.current,p.context=so(n,v)),p.state=n.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(od(n,s,v,a),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ll.enqueueReplaceState(p,p.state,null),wl(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,s){try{var a="",u=s;do a+=xe(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:s,stack:p,digest:null}}function ld(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function cd(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Yv=typeof WeakMap=="function"?WeakMap:Map;function um(n,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var u=s.value;return a.callback=function(){Ol||(Ol=!0,wd=u),cd(n,s)},a}function dm(n,s,a){a=Ar(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;a.payload=function(){return u(p)},a.callback=function(){cd(n,s)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){cd(n,s),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function fm(n,s,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Yv;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(a)||(p.add(a),n=l_.bind(null,n,s,a),s.then(n,n))}function hm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function pm(n,s,a,u,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,Zr(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Zv=C.ReactCurrentOwner,gi=!1;function ai(n,s,a,u){s.child=n===null?Ip(s,null,a,u):co(s,n.child,a,u)}function mm(n,s,a,u,p){a=a.render;var v=s.ref;return fo(s,p),u=ed(n,s,a,u,v,p),a=td(),n!==null&&!gi?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Rr(n,s,p)):(ln&&a&&ku(s),s.flags|=1,ai(n,s,u,p),s.child)}function gm(n,s,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Ld(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=v,xm(n,s,v,u,p)):(n=Wl(a.type,null,u,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(T,u)&&n.ref===s.ref)return Rr(n,s,p)}return s.flags|=1,n=ts(v,u),n.ref=s.ref,n.return=s,s.child=n}function xm(n,s,a,u,p){if(n!==null){var v=n.memoizedProps;if(aa(v,u)&&n.ref===s.ref)if(gi=!1,s.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(gi=!0);else return s.lanes=n.lanes,Rr(n,s,p)}return ud(n,s,a,u,p)}function vm(n,s,a){var u=s.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(go,Ri),Ri|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Qt(go,Ri),Ri|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Qt(go,Ri),Ri|=u}else v!==null?(u=v.baseLanes|a,s.memoizedState=null):u=a,Qt(go,Ri),Ri|=u;return ai(n,s,p,a),s.child}function _m(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ud(n,s,a,u,p){var v=mi(a)?ys:Kn.current;return v=so(s,v),fo(s,p),a=ed(n,s,a,u,v,p),u=td(),n!==null&&!gi?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Rr(n,s,p)):(ln&&u&&ku(s),s.flags|=1,ai(n,s,a,p),s.child)}function ym(n,s,a,u,p){if(mi(a)){var v=!0;ml(s)}else v=!1;if(fo(s,p),s.stateNode===null)Nl(n,s),lm(s,a,u),ad(s,a,u,p),u=!0;else if(n===null){var T=s.stateNode,B=s.memoizedProps;T.props=B;var X=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=Ui(fe):(fe=mi(a)?ys:Kn.current,fe=so(s,fe));var Ee=a.getDerivedStateFromProps,Ce=typeof Ee=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ce||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==u||X!==fe)&&cm(s,T,u,fe),Yr=!1;var ye=s.memoizedState;T.state=ye,wl(s,u,T,p),X=s.memoizedState,B!==u||ye!==X||pi.current||Yr?(typeof Ee=="function"&&(od(s,a,Ee,u),X=s.memoizedState),(B=Yr||am(s,a,B,u,ye,X,fe))?(Ce||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=X),T.props=u,T.state=X,T.context=fe,u=B):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{T=s.stateNode,Up(n,s),B=s.memoizedProps,fe=s.type===s.elementType?B:Qi(s.type,B),T.props=fe,Ce=s.pendingProps,ye=T.context,X=a.contextType,typeof X=="object"&&X!==null?X=Ui(X):(X=mi(a)?ys:Kn.current,X=so(s,X));var He=a.getDerivedStateFromProps;(Ee=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Ce||ye!==X)&&cm(s,T,u,X),Yr=!1,ye=s.memoizedState,T.state=ye,wl(s,u,T,p);var Ye=s.memoizedState;B!==Ce||ye!==Ye||pi.current||Yr?(typeof He=="function"&&(od(s,a,He,u),Ye=s.memoizedState),(fe=Yr||am(s,a,fe,u,ye,Ye,X)||!1)?(Ee||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ye,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ye,X)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Ye),T.props=u,T.state=Ye,T.context=X,u=fe):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),u=!1)}return dd(n,s,a,u,v,p)}function dd(n,s,a,u,p,v){_m(n,s);var T=(s.flags&128)!==0;if(!u&&!T)return p&&Tp(s,a,!1),Rr(n,s,v);u=s.stateNode,Zv.current=s;var B=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&T?(s.child=co(s,n.child,null,v),s.child=co(s,null,B,v)):ai(n,s,B,v),s.memoizedState=u.state,p&&Tp(s,a,!0),s.child}function Mm(n){var s=n.stateNode;s.pendingContext?Ep(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Ep(n,s.context,!1),Yu(n,s.containerInfo)}function Sm(n,s,a,u,p){return lo(),Hu(p),s.flags|=256,ai(n,s,a,u),s.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function hd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,s,a){var u=s.pendingProps,p=dn.current,v=!1,T=(s.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(p&2)!==0),B?(v=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Qt(dn,p&1),n===null)return Bu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=s.mode,v=s.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=jl(T,u,0,null),n=Ps(n,u,a,null),v.return=s,n.return=s,v.sibling=n,s.child=v,s.child.memoizedState=hd(a),s.memoizedState=fd,n):pd(s,T));if(p=n.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return qv(n,s,T,u,B,p,a);if(v){v=u.fallback,T=s.mode,p=n.child,B=p.sibling;var X={mode:"hidden",children:u.children};return(T&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=X,s.deletions=null):(u=ts(p,X),u.subtreeFlags=p.subtreeFlags&14680064),B!==null?v=ts(B,v):(v=Ps(v,T,a,null),v.flags|=2),v.return=s,u.return=s,u.sibling=v,s.child=u,u=v,v=s.child,T=n.child.memoizedState,T=T===null?hd(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~a,s.memoizedState=fd,u}return v=n.child,n=v.sibling,u=ts(v,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=a),u.return=s,u.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=u,s.memoizedState=null,u}function pd(n,s){return s=jl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Dl(n,s,a,u){return u!==null&&Hu(u),co(s,n.child,null,a),n=pd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function qv(n,s,a,u,p,v,T){if(a)return s.flags&256?(s.flags&=-257,u=ld(Error(t(422))),Dl(n,s,T,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(v=u.fallback,p=s.mode,u=jl({mode:"visible",children:u.children},p,0,null),v=Ps(v,p,T,null),v.flags|=2,u.return=s,v.return=s,u.sibling=v,s.child=u,(s.mode&1)!==0&&co(s,n.child,null,T),s.child.memoizedState=hd(T),s.memoizedState=fd,v);if((s.mode&1)===0)return Dl(n,s,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var B=u.dgst;return u=B,v=Error(t(419)),u=ld(v,u,void 0),Dl(n,s,T,u)}if(B=(T&n.childLanes)!==0,gi||B){if(u=Hn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Cr(n,p),tr(u,n,p,-1))}return Pd(),u=ld(Error(t(421))),Dl(n,s,T,u)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=c_.bind(null,n),p._reactRetry=s,null):(n=v.treeContext,Ai=Wr(p.nextSibling),Ci=s,ln=!0,Ki=null,n!==null&&(Ii[Fi++]=wr,Ii[Fi++]=Tr,Ii[Fi++]=Ms,wr=n.id,Tr=n.overflow,Ms=s),s=pd(s,u.children),s.flags|=4096,s)}function wm(n,s,a){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),ju(n.return,s,a)}function md(n,s,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function Tm(n,s,a){var u=s.pendingProps,p=u.revealOrder,v=u.tail;if(ai(n,s,u.children,a),u=dn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wm(n,a,s);else if(n.tag===19)wm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Qt(dn,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)n=a.alternate,n!==null&&Tl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),md(s,!1,p,a,v);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&Tl(n)===null){s.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}md(s,!0,a,null,v);break;case"together":md(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Rr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),Cs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ts(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ts(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Kv(n,s,a){switch(s.tag){case 3:Mm(s),lo();break;case 5:zp(s);break;case 1:mi(s.type)&&ml(s);break;case 4:Yu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;Qt(Ml,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Qt(dn,dn.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Em(n,s,a):(Qt(dn,dn.current&1),n=Rr(n,s,a),n!==null?n.sibling:null);Qt(dn,dn.current&1);break;case 19:if(u=(a&s.childLanes)!==0,(n.flags&128)!==0){if(u)return Tm(n,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Qt(dn,dn.current),u)break;return null;case 22:case 23:return s.lanes=0,vm(n,s,a)}return Rr(n,s,a)}var Cm,gd,Am,Rm;Cm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gd=function(){},Am=function(n,s,a,u){var p=n.memoizedProps;if(p!==u){n=s.stateNode,ws(fr.current);var v=null;switch(a){case"input":p=Y(n,p),u=Y(n,u),v=[];break;case"select":p=te({},p,{value:void 0}),u=te({},u,{value:void 0}),v=[];break;case"textarea":p=A(n,p),u=A(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=fl)}at(a,u);var T;a=null;for(fe in p)if(!u.hasOwnProperty(fe)&&p.hasOwnProperty(fe)&&p[fe]!=null)if(fe==="style"){var B=p[fe];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?v||(v=[]):(v=v||[]).push(fe,null));for(fe in u){var X=u[fe];if(B=p!=null?p[fe]:void 0,u.hasOwnProperty(fe)&&X!==B&&(X!=null||B!=null))if(fe==="style")if(B){for(T in B)!B.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in X)X.hasOwnProperty(T)&&B[T]!==X[T]&&(a||(a={}),a[T]=X[T])}else a||(v||(v=[]),v.push(fe,a)),a=X;else fe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(v=v||[]).push(fe,X)):fe==="children"?typeof X!="string"&&typeof X!="number"||(v=v||[]).push(fe,""+X):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(X!=null&&fe==="onScroll"&&tn("scroll",n),v||B===X||(v=[])):(v=v||[]).push(fe,X))}a&&(v=v||[]).push("style",a);var fe=v;(s.updateQueue=fe)&&(s.flags|=4)}},Rm=function(n,s,a,u){a!==u&&(s.flags|=4)};function Sa(n,s){if(!ln)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Jn(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(s)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,s}function Qv(n,s,a){var u=s.pendingProps;switch(Ou(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jn(s),null;case 1:return mi(s.type)&&pl(),Jn(s),null;case 3:return u=s.stateNode,ho(),nn(pi),nn(Kn),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(_l(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ki!==null&&(Ad(Ki),Ki=null))),gd(n,s),Jn(s),null;case 5:Zu(s);var p=ws(xa.current);if(a=s.type,n!==null&&s.stateNode!=null)Am(n,s,a,u,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Jn(s),null}if(n=ws(fr.current),_l(s)){u=s.stateNode,a=s.type;var v=s.memoizedProps;switch(u[dr]=s,u[fa]=v,n=(s.mode&1)!==0,a){case"dialog":tn("cancel",u),tn("close",u);break;case"iframe":case"object":case"embed":tn("load",u);break;case"video":case"audio":for(p=0;p<ca.length;p++)tn(ca[p],u);break;case"source":tn("error",u);break;case"img":case"image":case"link":tn("error",u),tn("load",u);break;case"details":tn("toggle",u);break;case"input":kn(u,v),tn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},tn("invalid",u);break;case"textarea":re(u,v),tn("invalid",u)}at(a,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var B=v[T];T==="children"?typeof B=="string"?u.textContent!==B&&(v.suppressHydrationWarning!==!0&&dl(u.textContent,B,n),p=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(v.suppressHydrationWarning!==!0&&dl(u.textContent,B,n),p=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&tn("scroll",u)}switch(a){case"input":vt(u),Qe(u,v,!0);break;case"textarea":vt(u),ce(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=fl)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[dr]=s,n[fa]=u,Cm(n,s,!1,!1),s.stateNode=n;e:{switch(T=ct(a,u),a){case"dialog":tn("cancel",n),tn("close",n),p=u;break;case"iframe":case"object":case"embed":tn("load",n),p=u;break;case"video":case"audio":for(p=0;p<ca.length;p++)tn(ca[p],n);p=u;break;case"source":tn("error",n),p=u;break;case"img":case"image":case"link":tn("error",n),tn("load",n),p=u;break;case"details":tn("toggle",n),p=u;break;case"input":kn(n,u),p=Y(n,u),tn("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=te({},u,{value:void 0}),tn("invalid",n);break;case"textarea":re(n,u),p=A(n,u),tn("invalid",n);break;default:p=u}at(a,p),B=p;for(v in B)if(B.hasOwnProperty(v)){var X=B[v];v==="style"?rt(n,X):v==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Ve(n,X)):v==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&pt(n,X):typeof X=="number"&&pt(n,""+X):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?X!=null&&v==="onScroll"&&tn("scroll",n):X!=null&&R(n,v,X,T))}switch(a){case"input":vt(n),Qe(n,u,!1);break;case"textarea":vt(n),ce(n);break;case"option":u.value!=null&&n.setAttribute("value",""+be(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?F(n,!!u.multiple,v,!1):u.defaultValue!=null&&F(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=fl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Jn(s),null;case 6:if(n&&s.stateNode!=null)Rm(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(a=ws(xa.current),ws(fr.current),_l(s)){if(u=s.stateNode,a=s.memoizedProps,u[dr]=s,(v=u.nodeValue!==a)&&(n=Ci,n!==null))switch(n.tag){case 3:dl(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&dl(u.nodeValue,a,(n.mode&1)!==0)}v&&(s.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[dr]=s,s.stateNode=u}return Jn(s),null;case 13:if(nn(dn),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ln&&Ai!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Lp(),lo(),s.flags|=98560,v=!1;else if(v=_l(s),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[dr]=s}else lo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Jn(s),v=!1}else Ki!==null&&(Ad(Ki),Ki=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(dn.current&1)!==0?Nn===0&&(Nn=3):Pd())),s.updateQueue!==null&&(s.flags|=4),Jn(s),null);case 4:return ho(),gd(n,s),n===null&&ua(s.stateNode.containerInfo),Jn(s),null;case 10:return Wu(s.type._context),Jn(s),null;case 17:return mi(s.type)&&pl(),Jn(s),null;case 19:if(nn(dn),v=s.memoizedState,v===null)return Jn(s),null;if(u=(s.flags&128)!==0,T=v.rendering,T===null)if(u)Sa(v,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(T=Tl(n),T!==null){for(s.flags|=128,Sa(v,!1),u=T.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=a,a=s.child;a!==null;)v=a,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qt(dn,dn.current&1|2),s.child}n=n.sibling}v.tail!==null&&q()>xo&&(s.flags|=128,u=!0,Sa(v,!1),s.lanes=4194304)}else{if(!u)if(n=Tl(T),n!==null){if(s.flags|=128,u=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Sa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!ln)return Jn(s),null}else 2*q()-v.renderingStartTime>xo&&a!==1073741824&&(s.flags|=128,u=!0,Sa(v,!1),s.lanes=4194304);v.isBackwards?(T.sibling=s.child,s.child=T):(a=v.last,a!==null?a.sibling=T:s.child=T,v.last=T)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=q(),s.sibling=null,a=dn.current,Qt(dn,u?a&1|2:a&1),s):(Jn(s),null);case 22:case 23:return bd(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(Ri&1073741824)!==0&&(Jn(s),s.subtreeFlags&6&&(s.flags|=8192)):Jn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Jv(n,s){switch(Ou(s),s.tag){case 1:return mi(s.type)&&pl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ho(),nn(pi),nn(Kn),Ku(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Zu(s),null;case 13:if(nn(dn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));lo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return nn(dn),null;case 4:return ho(),null;case 10:return Wu(s.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Il=!1,ei=!1,e_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function mo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){xn(n,s,u)}else a.current=null}function xd(n,s,a){try{a()}catch(u){xn(n,s,u)}}var bm=!1;function t_(n,s){if(bu=vs,n=ap(),Mu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,B=-1,X=-1,fe=0,Ee=0,Ce=n,ye=null;t:for(;;){for(var He;Ce!==a||p!==0&&Ce.nodeType!==3||(B=T+p),Ce!==v||u!==0&&Ce.nodeType!==3||(X=T+u),Ce.nodeType===3&&(T+=Ce.nodeValue.length),(He=Ce.firstChild)!==null;)ye=Ce,Ce=He;for(;;){if(Ce===n)break t;if(ye===a&&++fe===p&&(B=T),ye===v&&++Ee===u&&(X=T),(He=Ce.nextSibling)!==null)break;Ce=ye,ye=Ce.parentNode}Ce=He}a=B===-1||X===-1?null:{start:B,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pu={focusedElem:n,selectionRange:a},vs=!1,$e=s;$e!==null;)if(s=$e,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,$e=n;else for(;$e!==null;){s=$e;try{var Ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,Sn=Ye.memoizedState,ne=s.stateNode,K=ne.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Qi(s.type,Ke),Sn);ne.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){xn(s,s.return,Re)}if(n=s.sibling,n!==null){n.return=s.return,$e=n;break}$e=s.return}return Ye=bm,bm=!1,Ye}function Ea(n,s,a){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&xd(s,a,v)}p=p.next}while(p!==u)}}function Fl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==s)}}function vd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Pm(n){var s=n.alternate;s!==null&&(n.alternate=null,Pm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[dr],delete s[fa],delete s[Iu],delete s[kv],delete s[Ov])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _d(n,s,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=fl));else if(u!==4&&(n=n.child,n!==null))for(_d(n,s,a),n=n.sibling;n!==null;)_d(n,s,a),n=n.sibling}function yd(n,s,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(yd(n,s,a),n=n.sibling;n!==null;)yd(n,s,a),n=n.sibling}var $n=null,Ji=!1;function qr(n,s,a){for(a=a.child;a!==null;)Nm(n,s,a),a=a.sibling}function Nm(n,s,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:ei||mo(a,s);case 6:var u=$n,p=Ji;$n=null,qr(n,s,a),$n=u,Ji=p,$n!==null&&(Ji?(n=$n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):$n.removeChild(a.stateNode));break;case 18:$n!==null&&(Ji?(n=$n,a=a.stateNode,n.nodeType===8?Nu(n.parentNode,a):n.nodeType===1&&Nu(n,a),hi(n)):Nu($n,a.stateNode));break;case 4:u=$n,p=Ji,$n=a.stateNode.containerInfo,Ji=!0,qr(n,s,a),$n=u,Ji=p;break;case 0:case 11:case 14:case 15:if(!ei&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&xd(a,s,T),p=p.next}while(p!==u)}qr(n,s,a);break;case 1:if(!ei&&(mo(a,s),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(B){xn(a,s,B)}qr(n,s,a);break;case 21:qr(n,s,a);break;case 22:a.mode&1?(ei=(u=ei)||a.memoizedState!==null,qr(n,s,a),ei=u):qr(n,s,a);break;default:qr(n,s,a)}}function Im(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new e_),s.forEach(function(u){var p=u_.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function er(n,s){var a=s.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,T=s,B=T;e:for(;B!==null;){switch(B.tag){case 5:$n=B.stateNode,Ji=!1;break e;case 3:$n=B.stateNode.containerInfo,Ji=!0;break e;case 4:$n=B.stateNode.containerInfo,Ji=!0;break e}B=B.return}if($n===null)throw Error(t(160));Nm(v,T,p),$n=null,Ji=!1;var X=p.alternate;X!==null&&(X.return=null),p.return=null}catch(fe){xn(p,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Fm(s,n),s=s.sibling}function Fm(n,s){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(s,n),pr(n),u&4){try{Ea(3,n,n.return),Fl(3,n)}catch(Ke){xn(n,n.return,Ke)}try{Ea(5,n,n.return)}catch(Ke){xn(n,n.return,Ke)}}break;case 1:er(s,n),pr(n),u&512&&a!==null&&mo(a,a.return);break;case 5:if(er(s,n),pr(n),u&512&&a!==null&&mo(a,a.return),n.flags&32){var p=n.stateNode;try{pt(p,"")}catch(Ke){xn(n,n.return,Ke)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=a!==null?a.memoizedProps:v,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&v.type==="radio"&&v.name!=null&&ht(p,v),ct(B,T);var fe=ct(B,v);for(T=0;T<X.length;T+=2){var Ee=X[T],Ce=X[T+1];Ee==="style"?rt(p,Ce):Ee==="dangerouslySetInnerHTML"?Ve(p,Ce):Ee==="children"?pt(p,Ce):R(p,Ee,Ce,fe)}switch(B){case"input":_t(p,v);break;case"textarea":le(p,v);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var He=v.value;He!=null?F(p,!!v.multiple,He,!1):ye!==!!v.multiple&&(v.defaultValue!=null?F(p,!!v.multiple,v.defaultValue,!0):F(p,!!v.multiple,v.multiple?[]:"",!1))}p[fa]=v}catch(Ke){xn(n,n.return,Ke)}}break;case 6:if(er(s,n),pr(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ke){xn(n,n.return,Ke)}}break;case 3:if(er(s,n),pr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(s.containerInfo)}catch(Ke){xn(n,n.return,Ke)}break;case 4:er(s,n),pr(n);break;case 13:er(s,n),pr(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Ed=q())),u&4&&Im(n);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,n.mode&1?(ei=(fe=ei)||Ee,er(s,n),ei=fe):er(s,n),pr(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ee&&(n.mode&1)!==0)for($e=n,Ee=n.child;Ee!==null;){for(Ce=$e=Ee;$e!==null;){switch(ye=$e,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ea(4,ye,ye.return);break;case 1:mo(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=ye,a=ye.return;try{s=u,Ye.props=s.memoizedProps,Ye.state=s.memoizedState,Ye.componentWillUnmount()}catch(Ke){xn(u,a,Ke)}}break;case 5:mo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Om(Ce);continue}}He!==null?(He.return=ye,$e=He):Om(Ce)}Ee=Ee.sibling}e:for(Ee=null,Ce=n;;){if(Ce.tag===5){if(Ee===null){Ee=Ce;try{p=Ce.stateNode,fe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(B=Ce.stateNode,X=Ce.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=tt("display",T))}catch(Ke){xn(n,n.return,Ke)}}}else if(Ce.tag===6){if(Ee===null)try{Ce.stateNode.nodeValue=fe?"":Ce.memoizedProps}catch(Ke){xn(n,n.return,Ke)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ee===Ce&&(Ee=null),Ce=Ce.return}Ee===Ce&&(Ee=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:er(s,n),pr(n),u&4&&Im(n);break;case 21:break;default:er(s,n),pr(n)}}function pr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Lm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(pt(p,""),u.flags&=-33);var v=Dm(n);yd(n,v,p);break;case 3:case 4:var T=u.stateNode.containerInfo,B=Dm(n);_d(n,B,T);break;default:throw Error(t(161))}}catch(X){xn(n,n.return,X)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function n_(n,s,a){$e=n,Um(n)}function Um(n,s,a){for(var u=(n.mode&1)!==0;$e!==null;){var p=$e,v=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Il;if(!T){var B=p.alternate,X=B!==null&&B.memoizedState!==null||ei;B=Il;var fe=ei;if(Il=T,(ei=X)&&!fe)for($e=p;$e!==null;)T=$e,X=T.child,T.tag===22&&T.memoizedState!==null?zm(p):X!==null?(X.return=T,$e=X):zm(p);for(;v!==null;)$e=v,Um(v),v=v.sibling;$e=p,Il=B,ei=fe}km(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,$e=v):km(n)}}function km(n){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ei||Fl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!ei)if(a===null)u.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Qi(s.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&Op(s,v,u);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Op(s,T,a)}break;case 5:var B=s.stateNode;if(a===null&&s.flags&4){a=B;var X=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var Ee=fe.memoizedState;if(Ee!==null){var Ce=Ee.dehydrated;Ce!==null&&hi(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ei||s.flags&512&&vd(s)}catch(ye){xn(s,s.return,ye)}}if(s===n){$e=null;break}if(a=s.sibling,a!==null){a.return=s.return,$e=a;break}$e=s.return}}function Om(n){for(;$e!==null;){var s=$e;if(s===n){$e=null;break}var a=s.sibling;if(a!==null){a.return=s.return,$e=a;break}$e=s.return}}function zm(n){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Fl(4,s)}catch(X){xn(s,a,X)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(X){xn(s,p,X)}}var v=s.return;try{vd(s)}catch(X){xn(s,v,X)}break;case 5:var T=s.return;try{vd(s)}catch(X){xn(s,T,X)}}}catch(X){xn(s,s.return,X)}if(s===n){$e=null;break}var B=s.sibling;if(B!==null){B.return=s.return,$e=B;break}$e=s.return}}var i_=Math.ceil,Ul=C.ReactCurrentDispatcher,Md=C.ReactCurrentOwner,Oi=C.ReactCurrentBatchConfig,Ot=0,Hn=null,An=null,Yn=0,Ri=0,go=jr(0),Nn=0,wa=null,Cs=0,kl=0,Sd=0,Ta=null,xi=null,Ed=0,xo=1/0,br=null,Ol=!1,wd=null,Kr=null,zl=!1,Qr=null,Bl=0,Ca=0,Td=null,Hl=-1,Vl=0;function li(){return(Ot&6)!==0?q():Hl!==-1?Hl:Hl=q()}function Jr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Yn!==0?Yn&-Yn:Bv.transition!==null?(Vl===0&&(Vl=jn()),Vl):(n=ge,n!==0||(n=window.event,n=n===void 0?16:Hh(n.type)),n)}function tr(n,s,a,u){if(50<Ca)throw Ca=0,Td=null,Error(t(185));an(n,a,u),((Ot&2)===0||n!==Hn)&&(n===Hn&&((Ot&2)===0&&(kl|=a),Nn===4&&es(n,Yn)),vi(n,u),a===1&&Ot===0&&(s.mode&1)===0&&(xo=q()+500,gl&&$r()))}function vi(n,s){var a=n.callbackNode;_r(n,s);var u=Ei(n,n===Hn?Yn:0);if(u===0)a!==null&&ee(a),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(a!=null&&ee(a),s===1)n.tag===0?zv(Hm.bind(null,n)):Cp(Hm.bind(null,n)),Fv(function(){(Ot&6)===0&&$r()}),a=null;else{switch(mt(u)){case 1:a=Pe;break;case 4:a=Be;break;case 16:a=Ge;break;case 536870912:a=lt;break;default:a=Ge}a=Zm(a,Bm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Bm(n,s){if(Hl=-1,Vl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(vo()&&n.callbackNode!==a)return null;var u=Ei(n,n===Hn?Yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Gl(n,u);else{s=u;var p=Ot;Ot|=2;var v=Gm();(Hn!==n||Yn!==s)&&(br=null,xo=q()+500,Rs(n,s));do try{o_();break}catch(B){Vm(n,B)}while(!0);Gu(),Ul.current=v,Ot=p,An!==null?s=0:(Hn=null,Yn=0,s=Nn)}if(s!==0){if(s===2&&(p=jt(n),p!==0&&(u=p,s=Cd(n,p))),s===1)throw a=wa,Rs(n,0),es(n,u),vi(n,q()),a;if(s===6)es(n,u);else{if(p=n.current.alternate,(u&30)===0&&!r_(p)&&(s=Gl(n,u),s===2&&(v=jt(n),v!==0&&(u=v,s=Cd(n,v))),s===1))throw a=wa,Rs(n,0),es(n,u),vi(n,q()),a;switch(n.finishedWork=p,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:bs(n,xi,br);break;case 3:if(es(n,u),(u&130023424)===u&&(s=Ed+500-q(),10<s)){if(Ei(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){li(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Du(bs.bind(null,n,xi,br),s);break}bs(n,xi,br);break;case 4:if(es(n,u),(u&4194240)===u)break;for(s=n.eventTimes,p=-1;0<u;){var T=31-Lt(u);v=1<<T,T=s[T],T>p&&(p=T),u&=~v}if(u=p,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*i_(u/1960))-u,10<u){n.timeoutHandle=Du(bs.bind(null,n,xi,br),u);break}bs(n,xi,br);break;case 5:bs(n,xi,br);break;default:throw Error(t(329))}}}return vi(n,q()),n.callbackNode===a?Bm.bind(null,n):null}function Cd(n,s){var a=Ta;return n.current.memoizedState.isDehydrated&&(Rs(n,s).flags|=256),n=Gl(n,s),n!==2&&(s=xi,xi=a,s!==null&&Ad(s)),n}function Ad(n){xi===null?xi=n:xi.push.apply(xi,n)}function r_(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!qi(v(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function es(n,s){for(s&=~Sd,s&=~kl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Lt(s),u=1<<a;n[a]=-1,s&=~u}}function Hm(n){if((Ot&6)!==0)throw Error(t(327));vo();var s=Ei(n,0);if((s&1)===0)return vi(n,q()),null;var a=Gl(n,s);if(n.tag!==0&&a===2){var u=jt(n);u!==0&&(s=u,a=Cd(n,u))}if(a===1)throw a=wa,Rs(n,0),es(n,s),vi(n,q()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,bs(n,xi,br),vi(n,q()),null}function Rd(n,s){var a=Ot;Ot|=1;try{return n(s)}finally{Ot=a,Ot===0&&(xo=q()+500,gl&&$r())}}function As(n){Qr!==null&&Qr.tag===0&&(Ot&6)===0&&vo();var s=Ot;Ot|=1;var a=Oi.transition,u=ge;try{if(Oi.transition=null,ge=1,n)return n()}finally{ge=u,Oi.transition=a,Ot=s,(Ot&6)===0&&$r()}}function bd(){Ri=go.current,nn(go)}function Rs(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Iv(a)),An!==null)for(a=An.return;a!==null;){var u=a;switch(Ou(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&pl();break;case 3:ho(),nn(pi),nn(Kn),Ku();break;case 5:Zu(u);break;case 4:ho();break;case 13:nn(dn);break;case 19:nn(dn);break;case 10:Wu(u.type._context);break;case 22:case 23:bd()}a=a.return}if(Hn=n,An=n=ts(n.current,null),Yn=Ri=s,Nn=0,wa=null,Sd=kl=Cs=0,xi=Ta=null,Es!==null){for(s=0;s<Es.length;s++)if(a=Es[s],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var T=v.next;v.next=p,u.next=T}a.pending=u}Es=null}return n}function Vm(n,s){do{var a=An;try{if(Gu(),Cl.current=Pl,Al){for(var u=fn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Al=!1}if(Ts=0,Bn=Dn=fn=null,va=!1,_a=0,Md.current=null,a===null||a.return===null){Nn=1,wa=s,An=null;break}e:{var v=n,T=a.return,B=a,X=s;if(s=Yn,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var fe=X,Ee=B,Ce=Ee.tag;if((Ee.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var ye=Ee.alternate;ye?(Ee.updateQueue=ye.updateQueue,Ee.memoizedState=ye.memoizedState,Ee.lanes=ye.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var He=hm(T);if(He!==null){He.flags&=-257,pm(He,T,B,v,s),He.mode&1&&fm(v,fe,s),s=He,X=fe;var Ye=s.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(X),s.updateQueue=Ke}else Ye.add(X);break e}else{if((s&1)===0){fm(v,fe,s),Pd();break e}X=Error(t(426))}}else if(ln&&B.mode&1){var Sn=hm(T);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),pm(Sn,T,B,v,s),Hu(po(X,B));break e}}v=X=po(X,B),Nn!==4&&(Nn=2),Ta===null?Ta=[v]:Ta.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var ne=um(v,X,s);kp(v,ne);break e;case 1:B=X;var K=v.type,se=v.stateNode;if((v.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Kr===null||!Kr.has(se)))){v.flags|=65536,s&=-s,v.lanes|=s;var Re=dm(v,B,s);kp(v,Re);break e}}v=v.return}while(v!==null)}jm(a)}catch(Je){s=Je,An===a&&a!==null&&(An=a=a.return);continue}break}while(!0)}function Gm(){var n=Ul.current;return Ul.current=Pl,n===null?Pl:n}function Pd(){(Nn===0||Nn===3||Nn===2)&&(Nn=4),Hn===null||(Cs&268435455)===0&&(kl&268435455)===0||es(Hn,Yn)}function Gl(n,s){var a=Ot;Ot|=2;var u=Gm();(Hn!==n||Yn!==s)&&(br=null,Rs(n,s));do try{s_();break}catch(p){Vm(n,p)}while(!0);if(Gu(),Ot=a,Ul.current=u,An!==null)throw Error(t(261));return Hn=null,Yn=0,Nn}function s_(){for(;An!==null;)Wm(An)}function o_(){for(;An!==null&&!oe();)Wm(An)}function Wm(n){var s=Ym(n.alternate,n,Ri);n.memoizedProps=n.pendingProps,s===null?jm(n):An=s,Md.current=null}function jm(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=Qv(a,s,Ri),a!==null){An=a;return}}else{if(a=Jv(a,s),a!==null){a.flags&=32767,An=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nn=6,An=null;return}}if(s=s.sibling,s!==null){An=s;return}An=s=n}while(s!==null);Nn===0&&(Nn=5)}function bs(n,s,a){var u=ge,p=Oi.transition;try{Oi.transition=null,ge=1,a_(n,s,a,u)}finally{Oi.transition=p,ge=u}return null}function a_(n,s,a,u){do vo();while(Qr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if($(n,v),n===Hn&&(An=Hn=null,Yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zl||(zl=!0,Zm(Ge,function(){return vo(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Oi.transition,Oi.transition=null;var T=ge;ge=1;var B=Ot;Ot|=4,Md.current=null,t_(n,a),Fm(a,n),Av(Pu),vs=!!bu,Pu=bu=null,n.current=a,n_(a),de(),Ot=B,ge=T,Oi.transition=v}else n.current=a;if(zl&&(zl=!1,Qr=n,Bl=p),v=n.pendingLanes,v===0&&(Kr=null),Ft(a.stateNode),vi(n,q()),s!==null)for(u=n.onRecoverableError,a=0;a<s.length;a++)p=s[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(Ol)throw Ol=!1,n=wd,wd=null,n;return(Bl&1)!==0&&n.tag!==0&&vo(),v=n.pendingLanes,(v&1)!==0?n===Td?Ca++:(Ca=0,Td=n):Ca=0,$r(),null}function vo(){if(Qr!==null){var n=mt(Bl),s=Oi.transition,a=ge;try{if(Oi.transition=null,ge=16>n?16:n,Qr===null)var u=!1;else{if(n=Qr,Qr=null,Bl=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,$e=n.current;$e!==null;){var v=$e,T=v.child;if(($e.flags&16)!==0){var B=v.deletions;if(B!==null){for(var X=0;X<B.length;X++){var fe=B[X];for($e=fe;$e!==null;){var Ee=$e;switch(Ee.tag){case 0:case 11:case 15:Ea(8,Ee,v)}var Ce=Ee.child;if(Ce!==null)Ce.return=Ee,$e=Ce;else for(;$e!==null;){Ee=$e;var ye=Ee.sibling,He=Ee.return;if(Pm(Ee),Ee===fe){$e=null;break}if(ye!==null){ye.return=He,$e=ye;break}$e=He}}}var Ye=v.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var Sn=Ke.sibling;Ke.sibling=null,Ke=Sn}while(Ke!==null)}}$e=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,$e=T;else e:for(;$e!==null;){if(v=$e,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ea(9,v,v.return)}var ne=v.sibling;if(ne!==null){ne.return=v.return,$e=ne;break e}$e=v.return}}var K=n.current;for($e=K;$e!==null;){T=$e;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,$e=se;else e:for(T=K;$e!==null;){if(B=$e,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Fl(9,B)}}catch(Je){xn(B,B.return,Je)}if(B===T){$e=null;break e}var Re=B.sibling;if(Re!==null){Re.return=B.return,$e=Re;break e}$e=B.return}}if(Ot=p,$r(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(qe,n)}catch{}u=!0}return u}finally{ge=a,Oi.transition=s}}return!1}function Xm(n,s,a){s=po(a,s),s=um(n,s,1),n=Zr(n,s,1),s=li(),n!==null&&(an(n,1,s),vi(n,s))}function xn(n,s,a){if(n.tag===3)Xm(n,n,a);else for(;s!==null;){if(s.tag===3){Xm(s,n,a);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){n=po(a,n),n=dm(s,n,1),s=Zr(s,n,1),n=li(),s!==null&&(an(s,1,n),vi(s,n));break}}s=s.return}}function l_(n,s,a){var u=n.pingCache;u!==null&&u.delete(s),s=li(),n.pingedLanes|=n.suspendedLanes&a,Hn===n&&(Yn&a)===a&&(Nn===4||Nn===3&&(Yn&130023424)===Yn&&500>q()-Ed?Rs(n,0):Sd|=a),vi(n,s)}function $m(n,s){s===0&&((n.mode&1)===0?s=1:(s=Tt,Tt<<=1,(Tt&130023424)===0&&(Tt=4194304)));var a=li();n=Cr(n,s),n!==null&&(an(n,s,a),vi(n,a))}function c_(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),$m(n,a)}function u_(n,s){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),$m(n,a)}var Ym;Ym=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||pi.current)gi=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return gi=!1,Kv(n,s,a);gi=(n.flags&131072)!==0}else gi=!1,ln&&(s.flags&1048576)!==0&&Ap(s,vl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Nl(n,s),n=s.pendingProps;var p=so(s,Kn.current);fo(s,a),p=ed(null,s,u,n,p,a);var v=td();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,mi(u)?(v=!0,ml(s)):v=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,$u(s),p.updater=Ll,s.stateNode=p,p._reactInternals=s,ad(s,u,n,a),s=dd(null,s,u,!0,v,a)):(s.tag=0,ln&&v&&ku(s),ai(null,s,p,a),s=s.child),s;case 16:u=s.elementType;e:{switch(Nl(n,s),n=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=f_(u),n=Qi(u,n),p){case 0:s=ud(null,s,u,n,a);break e;case 1:s=ym(null,s,u,n,a);break e;case 11:s=mm(null,s,u,n,a);break e;case 14:s=gm(null,s,u,Qi(u.type,n),a);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Qi(u,p),ud(n,s,u,p,a);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Qi(u,p),ym(n,s,u,p,a);case 3:e:{if(Mm(s),n===null)throw Error(t(387));u=s.pendingProps,v=s.memoizedState,p=v.element,Up(n,s),wl(s,u,null,a);var T=s.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){p=po(Error(t(423)),s),s=Sm(n,s,u,a,p);break e}else if(u!==p){p=po(Error(t(424)),s),s=Sm(n,s,u,a,p);break e}else for(Ai=Wr(s.stateNode.containerInfo.firstChild),Ci=s,ln=!0,Ki=null,a=Ip(s,null,u,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),u===p){s=Rr(n,s,a);break e}ai(n,s,u,a)}s=s.child}return s;case 5:return zp(s),n===null&&Bu(s),u=s.type,p=s.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Lu(u,p)?T=null:v!==null&&Lu(u,v)&&(s.flags|=32),_m(n,s),ai(n,s,T,a),s.child;case 6:return n===null&&Bu(s),null;case 13:return Em(n,s,a);case 4:return Yu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=co(s,null,u,a):ai(n,s,u,a),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Qi(u,p),mm(n,s,u,p,a);case 7:return ai(n,s,s.pendingProps,a),s.child;case 8:return ai(n,s,s.pendingProps.children,a),s.child;case 12:return ai(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,v=s.memoizedProps,T=p.value,Qt(Ml,u._currentValue),u._currentValue=T,v!==null)if(qi(v.value,T)){if(v.children===p.children&&!pi.current){s=Rr(n,s,a);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var B=v.dependencies;if(B!==null){T=v.child;for(var X=B.firstContext;X!==null;){if(X.context===u){if(v.tag===1){X=Ar(-1,a&-a),X.tag=2;var fe=v.updateQueue;if(fe!==null){fe=fe.shared;var Ee=fe.pending;Ee===null?X.next=X:(X.next=Ee.next,Ee.next=X),fe.pending=X}}v.lanes|=a,X=v.alternate,X!==null&&(X.lanes|=a),ju(v.return,a,s),B.lanes|=a;break}X=X.next}}else if(v.tag===10)T=v.type===s.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),ju(T,a,s),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===s){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}ai(n,s,p.children,a),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,fo(s,a),p=Ui(p),u=u(p),s.flags|=1,ai(n,s,u,a),s.child;case 14:return u=s.type,p=Qi(u,s.pendingProps),p=Qi(u.type,p),gm(n,s,u,p,a);case 15:return xm(n,s,s.type,s.pendingProps,a);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Qi(u,p),Nl(n,s),s.tag=1,mi(u)?(n=!0,ml(s)):n=!1,fo(s,a),lm(s,u,p),ad(s,u,p,a),dd(null,s,u,!0,n,a);case 19:return Tm(n,s,a);case 22:return vm(n,s,a)}throw Error(t(156,s.tag))};function Zm(n,s){return P(n,s)}function d_(n,s,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(n,s,a,u){return new d_(n,s,a,u)}function Ld(n){return n=n.prototype,!(!n||!n.isReactComponent)}function f_(n){if(typeof n=="function")return Ld(n)?1:0;if(n!=null){if(n=n.$$typeof,n===he)return 11;if(n===O)return 14}return 2}function ts(n,s){var a=n.alternate;return a===null?(a=zi(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wl(n,s,a,u,p,v){var T=2;if(u=n,typeof n=="function")Ld(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return Ps(a.children,p,v,s);case j:T=8,p|=8;break;case L:return n=zi(12,a,s,p|2),n.elementType=L,n.lanes=v,n;case W:return n=zi(13,a,s,p),n.elementType=W,n.lanes=v,n;case Z:return n=zi(19,a,s,p),n.elementType=Z,n.lanes=v,n;case Q:return jl(a,p,v,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case V:T=9;break e;case he:T=11;break e;case O:T=14;break e;case G:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=zi(T,a,s,p),s.elementType=n,s.type=u,s.lanes=v,s}function Ps(n,s,a,u){return n=zi(7,n,u,s),n.lanes=a,n}function jl(n,s,a,u){return n=zi(22,n,u,s),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Dd(n,s,a){return n=zi(6,n,null,s),n.lanes=a,n}function Nd(n,s,a){return s=zi(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function h_(n,s,a,u,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ln(0),this.expirationTimes=Ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Id(n,s,a,u,p,v,T,B,X){return n=new h_(n,s,a,B,X),s===1?(s=1,v===!0&&(s|=8)):s=0,v=zi(3,null,null,s),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(v),n}function p_(n,s,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:s,implementation:a}}function qm(n){if(!n)return Xr;n=n._reactInternals;e:{if(ri(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(mi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(mi(a))return wp(n,a,s)}return s}function Km(n,s,a,u,p,v,T,B,X){return n=Id(a,u,!0,n,p,v,T,B,X),n.context=qm(null),a=n.current,u=li(),p=Jr(a),v=Ar(u,p),v.callback=s??null,Zr(a,v,p),n.current.lanes=p,an(n,p,u),vi(n,u),n}function Xl(n,s,a,u){var p=s.current,v=li(),T=Jr(p);return a=qm(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(v,T),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Zr(p,s,T),n!==null&&(tr(n,p,T,v),El(n,p,T)),T}function $l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qm(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Fd(n,s){Qm(n,s),(n=n.alternate)&&Qm(n,s)}function m_(){return null}var Jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ud(n){this._internalRoot=n}Yl.prototype.render=Ud.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Xl(n,s,null,null)},Yl.prototype.unmount=Ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;As(function(){Xl(null,n,null,null)}),s[Sr]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Xn();n={blockedOn:null,target:n,priority:s};for(var a=0;a<At.length&&s!==0&&s<At[a].priority;a++);At.splice(a,0,n),a===0&&Mn(n)}};function kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function eg(){}function g_(n,s,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var fe=$l(T);v.call(fe)}}var T=Km(s,u,n,0,null,!1,!1,"",eg);return n._reactRootContainer=T,n[Sr]=T.current,ua(n.nodeType===8?n.parentNode:n),As(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var B=u;u=function(){var fe=$l(X);B.call(fe)}}var X=Id(n,0,!1,null,null,!1,!1,"",eg);return n._reactRootContainer=X,n[Sr]=X.current,ua(n.nodeType===8?n.parentNode:n),As(function(){Xl(s,X,a,u)}),X}function ql(n,s,a,u,p){var v=a._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var B=p;p=function(){var X=$l(T);B.call(X)}}Xl(s,T,n,p)}else T=g_(a,s,n,p,u);return $l(T)}bt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=bn(s.pendingLanes);a!==0&&(U(s,a|1),vi(s,q()),(Ot&6)===0&&(xo=q()+500,$r()))}break;case 13:As(function(){var u=Cr(n,1);if(u!==null){var p=li();tr(u,n,1,p)}}),Fd(n,1)}},yt=function(n){if(n.tag===13){var s=Cr(n,134217728);if(s!==null){var a=li();tr(s,n,134217728,a)}Fd(n,134217728)}},cn=function(n){if(n.tag===13){var s=Jr(n),a=Cr(n,s);if(a!==null){var u=li();tr(a,n,s,u)}Fd(n,s)}},Xn=function(){return ge},Ut=function(n,s){var a=ge;try{return ge=n,s()}finally{ge=a}},Fe=function(n,s,a){switch(s){case"input":if(_t(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var u=a[s];if(u!==n&&u.form===n.form){var p=hl(u);if(!p)throw Error(t(90));Et(u),_t(u,p)}}}break;case"textarea":le(n,a);break;case"select":s=a.value,s!=null&&F(n,!!a.multiple,s,!1)}},Yt=Rd,gn=As;var x_={usingClientEntryPoint:!1,Events:[ha,io,hl,Ue,dt,Rd]},Aa={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tn(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||m_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{qe=Kl.inject(v_),ft=Kl}catch{}}return _i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_,_i.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(s))throw Error(t(200));return p_(n,s,null,a)},_i.createRoot=function(n,s){if(!kd(n))throw Error(t(299));var a=!1,u="",p=Jm;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Id(n,1,!1,null,null,a,!1,u,p),n[Sr]=s.current,ua(n.nodeType===8?n.parentNode:n),new Ud(s)},_i.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tn(s),n=n===null?null:n.stateNode,n},_i.flushSync=function(n){return As(n)},_i.hydrate=function(n,s,a){if(!Zl(s))throw Error(t(200));return ql(null,n,s,!0,a)},_i.hydrateRoot=function(n,s,a){if(!kd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",T=Jm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=Km(s,null,n,1,a??null,p,!1,v,T),n[Sr]=s.current,ua(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Yl(s)},_i.render=function(n,s,a){if(!Zl(s))throw Error(t(200));return ql(null,n,s,!1,a)},_i.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(As(function(){ql(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},_i.unstable_batchedUpdates=Rd,_i.unstable_renderSubtreeIntoContainer=function(n,s,a,u){if(!Zl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ql(n,s,a,!1,u)},_i.version="18.3.1-next-f1338f8080-20240426",_i}var lg;function A_(){if(lg)return Bd.exports;lg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Bd.exports=C_(),Bd.exports}var cg;function R_(){if(cg)return Ql;cg=1;var i=A_();return Ql.createRoot=i.createRoot,Ql.hydrateRoot=i.hydrateRoot,Ql}var b_=R_();const P_=Ox(b_);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zx=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Ie.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...d},f)=>Ie.createElement("svg",{ref:f,...D_,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:zx("lucide",o),...d},[...c.map(([h,m])=>Ie.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(i,e)=>{const t=Ie.forwardRef(({className:r,...o},l)=>Ie.createElement(N_,{ref:l,iconNode:e,className:zx(`lucide-${L_(i)}`,r),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=sn("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=sn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=sn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=sn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=sn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=sn("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=sn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=sn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=sn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=sn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=sn("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=sn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=sn("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=sn("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=sn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=sn("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=sn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=sn("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=sn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=sn("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=sn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=sn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=sn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=sn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=sn("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]),we=i=>Math.round(i*1e4)/1e4,hn=(i,e,t)=>Math.min(t,Math.max(e,i)),Nt=(i,e)=>Math.abs(i-e)<1e-4;function Gx(i,e,t){const r=Number.isFinite(i)?i:0;if(!Number.isFinite(e)||e<=0||!Number.isFinite(t)||t<=0)return we(hn(r,0,1));const o=Math.round(r*e/t)*t;return we(hn(o/e,0,1))}function Gc(i,e,t,r,o){if(!Number.isFinite(i)||!Number.isFinite(e)||!Number.isFinite(t)||t<=0)return .5;const l=(i-e)/t;return we(hn(Gx(l,r,o),.08,.92))}function fg(i,e){return Gc(i,0,e,e,1)}function hg(i,e){return!Number.isFinite(i)||!Number.isFinite(e)||e<=0?!1:i>=e*.08&&i<=e*.92}function Q_(i,e,t){return!Number.isFinite(e)||e<=0||!Number.isFinite(t)?we(hn(i,.08,.92)):Gc(i*e+t,0,e,e,1)}function In(i){const e=Math.round((Number.isFinite(i)?i:0)*10)/10;return`${Number.isInteger(e)?e.toFixed(0):e.toFixed(1)} mm`}function Jl(i,e,t){const r=i.axis==="vertical"?e:t;return we(i.position*r)}function J_(i,e,t,r){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(r)?i.position:we(r/o)}function vh(i,e,t=.08){const r=wn(i)??En(1,1),o=hn(t,.02,.45);if(e.axis==="vertical"){const{leftCells:d,rightCells:f}=_h(r,e);return d.length===0||f.length===0?null:{min:Math.max(...d.map(h=>h.x+o)),max:Math.min(...f.map(h=>h.x+h.width-o))}}const{topCells:l,bottomCells:c}=yh(r,e);return l.length===0||c.length===0?null:{min:Math.max(...l.map(d=>d.y+o)),max:Math.min(...c.map(d=>d.y+d.height-o))}}function pg(i,e,t,r,o,l=.08){if(!Number.isFinite(t))return!1;const c=e.axis==="vertical"?r:o;if(!Number.isFinite(c)||c<=0)return!1;const d=vh(i,e,l);if(!d)return!1;const f=t/c;return f>=d.min&&f<=d.max}function ey(i,e,t,r,o=.08){const l=e.axis==="vertical"?t:r;if(!Number.isFinite(l)||l<=0)return null;const c=vh(i,e,o);if(!c)return null;const d=we(c.min),f=we(c.max),h=we(e.position),m=we((d+f)/2);return{axis:e.axis,min:d,max:f,current:h,center:m,minMm:we(d*l),maxMm:we(f*l),currentMm:we(h*l),centerMm:we(m*l)}}function ty(i,e,t=.08){const r=wn(i)??En(1,1),o=vh(r,e,t);return o?hs(r,e,we((o.min+o.max)/2),t):r}function ba(i,e,t,r,o,l,c=.08){if(!Number.isFinite(r))return!1;const d=t==="width"?o:l;if(!Number.isFinite(d)||d<=0)return!1;const f=wn(i)??En(1,1);if(!f.find(S=>S.id===e))return!1;const m=hn(c,.02,.45),x=r/d;if(x<m||x>1)return!1;const M=jx(f,e,t==="width"?{width:x}:{height:x},m).find(S=>S.id===e);return M?Nt(M[t],we(x)):!1}function ny(i,e,t,r){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(r)?i.position:we(i.position+r/o)}function ec(i){return i.ctrlKey?1:5}function iy(i){const e=i.key.toLowerCase();return i.ctrlKey&&e==="z"?"undo":i.ctrlKey&&e==="y"?"redo":i.ctrlKey&&e==="a"?"select-all":i.ctrlKey?"none":i.key==="Escape"?"cancel":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)?"nudge":e==="v"?"split-vertical":e==="h"?"split-horizontal":e==="m"?"merge":e==="w"?"equalize-width":e==="d"?"equalize-depth":"none"}function ry(i){return i==="Enter"}const tc=(i,e)=>{i.some(t=>t.type===e.type)||i.push(e)},fs=(i,e,t,r)=>Math.min(e,r)-Math.max(i,t)>1e-4,nc=(i,e,t,r)=>({start:we(Math.max(i,t)),end:we(Math.min(e,r))});function En(i,e){const t=Math.max(1,Math.round(i)),r=Math.max(1,Math.round(e)),o=[];for(let l=0;l<r;l+=1)for(let c=0;c<t;c+=1)o.push({id:`cell-${o.length+1}`,x:we(c/t),y:we(l/r),width:we(1/t),height:we(1/r)});return o}function wn(i){if(!(i!=null&&i.length))return;const e=i.map((t,r)=>{const o=hn(Number.isFinite(t.x)?t.x:0,0,.98),l=hn(Number.isFinite(t.y)?t.y:0,0,.98),c=hn(Number.isFinite(t.width)?t.width:1,.02,1-o),d=hn(Number.isFinite(t.height)?t.height:1,.02,1-l);return{id:t.id||`cell-${r+1}`,x:we(o),y:we(l),width:we(c),height:we(d)}}).filter(t=>t.width>=.02&&t.height>=.02);return e.length?e:void 0}function Wx(i,e=.08){const t=[];if(!(i!=null&&i.length))return{ok:!1,issues:[{type:"gap",message:"セルで埋まっていない隙間があります。"}]};const r=hn(e,.02,.45),o=[0,1],l=[0,1];i.forEach(f=>{const h=f.x+f.width,m=f.y+f.height;(f.x<-1e-4||f.y<-1e-4||h>1.0001||m>1.0001)&&tc(t,{type:"bounds",message:"トレイ範囲外のセルがあります。"}),(f.width<r||f.height<r)&&tc(t,{type:"small-cell",message:"最小サイズ未満のセルがあります。"}),o.push(hn(we(f.x),0,1)),o.push(hn(we(h),0,1)),l.push(hn(we(f.y),0,1)),l.push(hn(we(m),0,1))});const c=[...new Set(o.map(we))].sort((f,h)=>f-h),d=[...new Set(l.map(we))].sort((f,h)=>f-h);for(let f=0;f<c.length-1;f+=1)for(let h=0;h<d.length-1;h+=1){const m=c[f],x=c[f+1],g=d[h],M=d[h+1];if(x-m<=1e-4||M-g<=1e-4)continue;const S=(m+x)/2,E=(g+M)/2,_=i.filter(y=>S>y.x+1e-4&&S<y.x+y.width-1e-4&&E>y.y+1e-4&&E<y.y+y.height-1e-4);_.length===0?tc(t,{type:"gap",message:"セルで埋まっていない隙間があります。"}):_.length>1&&tc(t,{type:"overlap",message:"セル同士が重なっています。"})}return{ok:t.length===0,issues:t}}function sy(i,e,t,r=2){const o=wn(i)??En(1,1),l=o.find(f=>f.id===e);if(!l)return o;const c=Math.max(2,Math.min(4,Math.round(r))),d=Array.from({length:c},(f,h)=>{const m=we(h/c),x=we((h+1)/c),g=String.fromCharCode(97+h);if(t==="vertical"){const E=we(l.x+l.width*m),_=we(l.x+l.width*x);return{...l,id:`${l.id}${g}`,x:E,width:we(_-E)}}const M=we(l.y+l.height*m),S=we(l.y+l.height*x);return{...l,id:`${l.id}${g}`,y:M,height:we(S-M)}});return o.flatMap(f=>f.id===e?d:[f])}function oy(i,e,t,r){const o=wn(i)??En(1,1),l=o.find(h=>h.id===e);if(!l)return o;const c=we(hn(r,.08,.92)),f=["a","b"].map((h,m)=>{if(t==="vertical"){const M=m===0?l.x:we(l.x+l.width*c),S=we(m===0?l.width*c:l.width*(1-c));return{...l,id:`${l.id}${h}`,x:M,width:S}}const x=m===0?l.y:we(l.y+l.height*c),g=we(m===0?l.height*c:l.height*(1-c));return{...l,id:`${l.id}${h}`,y:x,height:g}});return o.flatMap(h=>h.id===e?f:[h])}function ay(i,e,t,r=2){const l=(wn(i)??En(1,1)).find(d=>d.id===e);if(!l)return[];const c=Math.max(2,Math.min(4,Math.round(r)));return Array.from({length:c-1},(d,f)=>{const h=we((f+1)/c);if(t==="vertical"){const x=we(l.x+l.width*h);return{axis:t,x1:x,x2:x,y1:l.y,y2:we(l.y+l.height)}}const m=we(l.y+l.height*h);return{axis:t,x1:l.x,x2:we(l.x+l.width),y1:m,y2:m}})}function ly(i,e,t,r){const l=(wn(i)??En(1,1)).find(f=>f.id===e);if(!l)return[];const c=we(hn(r,.08,.92));if(t==="vertical"){const f=we(l.x+l.width*c);return[{axis:t,x1:f,x2:f,y1:l.y,y2:we(l.y+l.height)}]}const d=we(l.y+l.height*c);return[{axis:t,x1:l.x,x2:we(l.x+l.width),y1:d,y2:d}]}function qo(i){const e=wn(i)??En(1,1),t=new Map;return e.forEach(r=>{e.forEach(o=>{if(r.id===o.id)return;const l=we(r.x+r.width),c=we(o.x+o.width),d=we(r.y+r.height),f=we(o.y+o.height);if(Nt(l,o.x)&&fs(r.y,d,o.y,f)){const h=nc(r.y,d,o.y,f),m={axis:"vertical",position:l,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(c,r.x)&&fs(r.y,d,o.y,f)){const h=nc(r.y,d,o.y,f),m={axis:"vertical",position:c,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(d,o.y)&&fs(r.x,r.x+r.width,o.x,o.x+o.width)){const h=nc(r.x,r.x+r.width,o.x,o.x+o.width),m={axis:"horizontal",position:d,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(f,r.y)&&fs(r.x,r.x+r.width,o.x,o.x+o.width)){const h=nc(r.x,r.x+r.width,o.x,o.x+o.width),m={axis:"horizontal",position:f,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}})}),[...t.values()].sort((r,o)=>r.axis!==o.axis?r.axis.localeCompare(o.axis):Nt(r.position,o.position)?r.start-o.start:r.position-o.position)}function ic(i,e,t){return qo(i).filter(r=>r.axis===e.axis&&Nt(r.start,e.start)&&Nt(r.end,e.end)).sort((r,o)=>Math.abs(r.position-t)-Math.abs(o.position-t))[0]}function _h(i,e){let t=e.start,r=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const d=i.filter(g=>Nt(g.x+g.width,e.position)&&fs(t,r,g.y,g.y+g.height)),f=i.filter(g=>Nt(g.x,e.position)&&fs(t,r,g.y,g.y+g.height)),h=[...d,...f],m=Math.min(t,...h.map(g=>g.y)),x=Math.max(r,...h.map(g=>g.y+g.height));(d.length!==o.length||f.length!==l.length||!Nt(m,t)||!Nt(x,r))&&(c=!0,o=d,l=f,t=m,r=x)}return{leftCells:o,rightCells:l}}function yh(i,e){let t=e.start,r=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const d=i.filter(g=>Nt(g.y+g.height,e.position)&&fs(t,r,g.x,g.x+g.width)),f=i.filter(g=>Nt(g.y,e.position)&&fs(t,r,g.x,g.x+g.width)),h=[...d,...f],m=Math.min(t,...h.map(g=>g.x)),x=Math.max(r,...h.map(g=>g.x+g.width));(d.length!==o.length||f.length!==l.length||!Nt(m,t)||!Nt(x,r))&&(c=!0,o=d,l=f,t=m,r=x)}return{topCells:o,bottomCells:l}}function cy(i,e){const t=wn(i)??En(1,1),r=qo(t);if(e.axis==="vertical"){const{leftCells:f,rightCells:h}=_h(t,e);if(f.length===0||h.length===0)return[];const m=Math.min(...[...f,...h].map(g=>g.y)),x=Math.max(...[...f,...h].map(g=>g.y+g.height));return r.filter(g=>g.axis===e.axis&&Nt(g.position,e.position)&&g.start>=m-1e-4&&g.end<=x+1e-4)}const{topCells:o,bottomCells:l}=yh(t,e);if(o.length===0||l.length===0)return[];const c=Math.min(...[...o,...l].map(f=>f.x)),d=Math.max(...[...o,...l].map(f=>f.x+f.width));return r.filter(f=>f.axis===e.axis&&Nt(f.position,e.position)&&f.start>=c-1e-4&&f.end<=d+1e-4)}function hs(i,e,t,r=.08){const o=wn(i)??En(1,1),l=hn(r,.02,.45);if(e.axis==="vertical"){const{leftCells:x,rightCells:g}=_h(o,e);if(x.length===0||g.length===0)return o;const M=Math.max(...x.map(_=>_.x+l)),S=Math.min(...g.map(_=>_.x+_.width-l)),E=we(hn(t,M,S));return o.map(_=>{if(x.some(y=>y.id===_.id))return{..._,width:we(E-_.x)};if(g.some(y=>y.id===_.id)){const y=we(_.x+_.width);return{..._,x:E,width:we(y-E)}}return _})}const{topCells:c,bottomCells:d}=yh(o,e);if(c.length===0||d.length===0)return o;const f=Math.max(...c.map(x=>x.y+l)),h=Math.min(...d.map(x=>x.y+x.height-l)),m=we(hn(t,f,h));return o.map(x=>{if(c.some(g=>g.id===x.id))return{...x,height:we(m-x.y)};if(d.some(g=>g.id===x.id)){const g=we(x.y+x.height);return{...x,y:m,height:we(g-m)}}return x})}function rc(i,e,t,r){const o=qo(i);if(t==="vertical"){const c=r==="end"?e.x+e.width:e.x;return o.find(d=>d.axis===t&&Nt(d.position,c)&&Nt(d.start,e.y)&&Nt(d.end,e.y+e.height))}const l=r==="end"?e.y+e.height:e.y;return o.find(c=>c.axis===t&&Nt(c.position,l)&&Nt(c.start,e.x)&&Nt(c.end,e.x+e.width))}function jx(i,e,t,r=.08){let o=wn(i)??En(1,1);if(!o.find(c=>c.id===e))return o;if(Number.isFinite(t.width)){const c=o.find(d=>d.id===e);if(c){const d=rc(o,c,"vertical","end"),f=rc(o,c,"vertical","start"),h=hn(t.width??c.width,r,1);d?o=hs(o,d,c.x+h,r):f&&(o=hs(o,f,c.x+c.width-h,r))}}if(Number.isFinite(t.height)){const c=o.find(d=>d.id===e);if(c){const d=rc(o,c,"horizontal","end"),f=rc(o,c,"horizontal","start"),h=hn(t.height??c.height,r,1);d?o=hs(o,d,c.y+h,r):f&&(o=hs(o,f,c.y+c.height-h,r))}}return o}function uy(i,e){const t=Nt(i.y,e.y)&&Nt(i.height,e.height),r=Nt(i.x,e.x)&&Nt(i.width,e.width),o=Nt(i.x+i.width,e.x)||Nt(e.x+e.width,i.x),l=Nt(i.y+i.height,e.y)||Nt(e.y+e.height,i.y);if(!((!t||!o)&&(!r||!l)))return{...i,x:we(Math.min(i.x,e.x)),y:we(Math.min(i.y,e.y)),width:we(Math.max(i.x+i.width,e.x+e.width)-Math.min(i.x,e.x)),height:we(Math.max(i.y+i.height,e.y+e.height)-Math.min(i.y,e.y))}}function Xx(i,e){const t=wn(i)??En(1,1);return[...new Set(e)].map(o=>t.find(l=>l.id===o)).filter(o=>!!o)}function Jc(i,e){const t=Xx(i,e);if(t.length<2)return;const r=Math.min(...t.map(h=>h.x)),o=Math.min(...t.map(h=>h.y)),l=Math.max(...t.map(h=>h.x+h.width)),c=Math.max(...t.map(h=>h.y+h.height)),d=we((l-r)*(c-o)),f=we(t.reduce((h,m)=>h+m.width*m.height,0));if(Nt(d,f))return{cells:t,minX:we(r),minY:we(o),maxX:we(l),maxY:we(c),width:we(l-r),height:we(c-o)}}function dy(i,e,t,r){const o=Xx(i,e);if(o.length===0)return null;const l=Math.min(...o.map(M=>M.x)),c=Math.min(...o.map(M=>M.y)),d=Math.max(...o.map(M=>M.x+M.width)),f=Math.max(...o.map(M=>M.y+M.height)),h=we(d-l),m=we(f-c),x=we(h*m),g=we(o.reduce((M,S)=>M+S.width*S.height,0));return{cellCount:o.length,minX:we(l),minY:we(c),maxX:we(d),maxY:we(f),width:h,height:m,widthMm:we(h*t),depthMm:we(m*r),isRectangle:o.length>=2&&Nt(x,g)}}function Wc(i){return[...new Set(i.map(we))].sort((e,t)=>e-t)}function sc(i,e){return i.findIndex(t=>Nt(t,e))}function fy(i,e,t){const r=wn(i)??En(1,1);if(e===t)return!1;const o=r.find(c=>c.id===e),l=r.find(c=>c.id===t);return!!(o&&l&&uy(o,l))}function hy(i,e){return!!Jc(i,e)}function py(i,e){const t=wn(i)??En(1,1),r=Jc(t,e);if(!r)return t;const o=new Set(r.cells.map(h=>h.id)),l=e.find(h=>o.has(h)),d={...r.cells.find(h=>h.id===l)??r.cells[0],x:r.minX,y:r.minY,width:r.width,height:r.height};let f=!1;return t.flatMap(h=>o.has(h.id)?f?[]:(f=!0,[d]):[h])}function Tf(i,e,t){const r=Jc(i,e);return r?Wc(t==="vertical"?r.cells.flatMap(l=>[l.x,l.x+l.width]):r.cells.flatMap(l=>[l.y,l.y+l.height])).length>2:!1}function my(i,e,t){const r=wn(i)??En(1,1),o=Jc(r,e);if(!o||!Tf(r,e,t))return r;const l=new Set(o.cells.map(f=>f.id));if(t==="vertical"){const f=Wc(o.cells.flatMap(m=>[m.x,m.x+m.width])),h=f.length-1;return r.map(m=>{if(!l.has(m.id))return m;const x=sc(f,m.x),g=sc(f,m.x+m.width);if(x<0||g<0)return m;const M=we(o.minX+o.width*x/h),S=we(o.minX+o.width*g/h);return{...m,x:M,width:we(S-M)}})}const c=Wc(o.cells.flatMap(f=>[f.y,f.y+f.height])),d=c.length-1;return r.map(f=>{if(!l.has(f.id))return f;const h=sc(c,f.y),m=sc(c,f.y+f.height);if(h<0||m<0)return f;const x=we(o.minY+o.height*h/d),g=we(o.minY+o.height*m/d);return{...f,y:x,height:we(g-x)}})}const gy={width:100,depth:100,height:20,wallThickness:2,floorThickness:2,cornerRadius:4,columns:1,rows:1,kind:"tray",includeLid:!1,lidHeight:8,lidClearance:.6,stackingLip:!1,stackingLipHeight:3,stackingClearance:.6,stackingGrooveClearance:.6,stackingFootMode:"relief",stackingShortFootLength:18,stackPreviewCount:2,pickupFillet:!1,pickupFilletRadius:16,pickupFilletHeight:5,pickupFilletFitClearance:.4,pickupFilletMeshQuality:"standard",pickupFilletCellModes:{},pickupFilletCellShapes:{}},Xt=(i,e,t)=>Math.min(t,Math.max(e,i)),Rt=i=>Math.round(i*10)/10,xy=i=>Math.round(i*1e4)/1e4,vy=["none","integrated","removable"],_y=["standard","high"];function mg(i,e){if(!i)return;const t=Array.from({length:e},(o,l)=>Math.max(.1,Number.isFinite(i[l])?i[l]:1)),r=t.reduce((o,l)=>o+l,0);return t.map(o=>xy(o/r))}function rn(i){const e=Rt(Xt(i.width,40,240)),t=Rt(Xt(i.depth,40,240)),r=Rt(Xt(i.height,8,120)),o=Rt(Xt(i.wallThickness,1.2,8)),l=Rt(Xt(i.floorThickness,1.2,8)),c=Rt(Xt(i.cornerRadius,0,18)),d=Rt(Xt(i.lidHeight??8,4,24)),f=Rt(Xt(i.lidClearance??.6,.2,2)),h=Rt(Xt(i.stackingLipHeight??3,1,8)),m=Rt(Xt(i.stackingClearance??.6,.2,2)),x=Rt(Xt(i.stackingGrooveClearance??.6,.2,3)),g=Rt(Xt(i.stackingShortFootLength??18,4,80)),M=Math.round(Xt(i.stackPreviewCount??2,2,6)),S=Rt(Xt(i.pickupFilletRadius??16,2,40)),E=Rt(Xt(i.pickupFilletHeight??5,1,Math.max(1,r-l))),_=Rt(Xt(i.pickupFilletFitClearance??.4,0,2)),y=_y.includes(i.pickupFilletMeshQuality??"standard")?i.pickupFilletMeshQuality??"standard":"standard",N=Object.fromEntries(Object.entries(i.pickupFilletCellModes??{}).filter(([,D])=>vy.includes(D))),R=Object.fromEntries(Object.entries(i.pickupFilletCellShapes??{}).map(([D,I])=>{const j={};return Number.isFinite(I.radius)&&(j.radius=Rt(Xt(I.radius??S,2,40))),Number.isFinite(I.height)&&(j.height=Rt(Xt(I.height??E,1,Math.max(1,r-l)))),Number.isFinite(I.fitClearance)&&(j.fitClearance=Rt(Xt(I.fitClearance??_,0,2))),[D,j]}).filter(([,D])=>Object.keys(D).length>0)),C={width:e,depth:t,height:r,wallThickness:o,floorThickness:l,cornerRadius:c,columns:Math.round(Xt(i.columns,1,8)),rows:Math.round(Xt(i.rows,1,8)),kind:i.kind==="box"?"box":"tray",includeLid:!!i.includeLid,lidHeight:d,lidClearance:f,stackingLip:!!i.stackingLip,stackingLipHeight:h,stackingClearance:m,stackingGrooveClearance:x,stackingFootMode:i.stackingFootMode==="short"?"short":"relief",stackingShortFootLength:g,stackPreviewCount:M,pickupFillet:!!i.pickupFillet,pickupFilletRadius:S,pickupFilletHeight:E,pickupFilletFitClearance:_,pickupFilletMeshQuality:y,pickupFilletCellModes:N,pickupFilletCellShapes:R},k=wn(i.layout);return{...C,columnRatios:mg(i.columnRatios,C.columns),rowRatios:mg(i.rowRatios,C.rows),...k?{layout:k}:{}}}function Mh(i){var o;const e=rn(i),t=[e.width,e.depth,e.height].map(l=>String(Math.round(l))),r=(o=e.layout)!=null&&o.length?`${e.layout.length}cells`:`${e.columns}x${e.rows}`;return`hako-forge-${t.join("x")}-${r}.stl`}function eu(i,e){var o;const t=rn(i),r=((o=t.pickupFilletCellShapes)==null?void 0:o[e])??{};return{radius:r.radius??t.pickupFilletRadius??16,height:r.height??t.pickupFilletHeight??5,fitClearance:r.fitClearance??t.pickupFilletFitClearance??.4}}function Sh(i){var t;const e=rn(i);return(t=e.layout)!=null&&t.length?e.layout:En(e.columns,e.rows)}function Eh(i,e){return i.id||`cell-${e+1}`}function yy(i,e,t){var o,l;const r=rn(i);return((o=r.pickupFilletCellModes)==null?void 0:o[e])??((l=r.pickupFilletCellModes)==null?void 0:l[`cell-${t+1}`])??"none"}function $x(i,e){const t=rn(i),o=Sh(t).find((d,f)=>Eh(d,f)===e),l=Math.max(1,t.width-t.wallThickness*2),c=Math.max(1,t.depth-t.wallThickness*2);return o?Rt(Math.min(o.width*l,o.height*c)):Math.min(l,c)}function My(i,e,t){var h;const r=rn(i),o=$x(r,e),l=Math.max(1,r.height-r.floorThickness),c={radius:Rt(Xt(o*.3,4,24)),height:Rt(Xt(l*.35,3,12)),fitClearance:(((h=r.pickupFilletCellModes)==null?void 0:h[e])??"none")==="removable"?.4:r.pickupFilletFitClearance??.4},d={shallow:{height:.25,radius:.22},standard:{height:.35,radius:.3},deep:{height:.5,radius:.38}};if(t==="standard")return c;const f=d[t];return{radius:Rt(Xt(o*f.radius,4,24)),height:Rt(Xt(l*f.height,3,12)),fitClearance:c.fitClearance}}function Yx(i,e){const t=rn(i);if(!t.pickupFillet)return[];const o=Sh(t).findIndex((g,M)=>Eh(g,M)===e);if(o<0)return[];const l=yy(t,e,o);if(l==="none")return[];const c=eu(t,e),d=$x(t,e),f=Math.max(1,t.height-t.floorThickness),h=Math.min(1.2,Math.max(.4,c.height*.2)),m=Math.max(0,(d-.5)/2),x=[];return c.radius>d*.42&&x.push({id:"radius",message:"半径が区画に対して大きめです"}),c.height>f*.78&&x.push({id:"height",message:"高さが壁の上面に近すぎます"}),l==="removable"&&(h<.8&&x.push({id:"removable-thickness",message:"取り外し式パーツの底が薄めです"}),c.fitClearance>m&&x.push({id:"clearance-oversized",message:"クリアランスが区画に対して大きすぎます"}),c.fitClearance<.2&&x.push({id:"clearance-tight",message:"クリアランスが小さめです"}),c.fitClearance>1&&x.push({id:"clearance-loose",message:"クリアランスが大きめでガタつく可能性があります"})),x}function Sy(i,e){var d;const t=rn(i),r=eu(t,e),l=Sh(t).find((f,h)=>Eh(f,h)===e),c=((d=t.pickupFilletCellModes)==null?void 0:d[e])??"integrated";return{...t,layout:l?[l]:t.layout,pickupFilletRadius:r.radius,pickupFilletHeight:r.height,pickupFilletFitClearance:r.fitClearance,pickupFilletCellModes:{[e]:c==="none"?"integrated":c}}}function za(i){return Mh(i).replace(/\.stl$/,"-body.stl")}function wh(i){return Mh(i).replace(/\.stl$/,"-removable-fillets.stl")}function Th(i){return Mh(i).replace(/\.stl$/,"-project.json")}function Ey(i){return!!(i.pickupFillet&&Object.values(i.pickupFilletCellModes??{}).some(e=>e==="removable"))}function wy(i){var l;const e=rn(i),t=(l=e.layout)!=null&&l.length?e.layout:En(e.columns,e.rows),r=Math.max(1,e.width-e.wallThickness*2),o=Math.max(1,e.depth-e.wallThickness*2);return t.map((c,d)=>{var m,x;const f=c.id||`cell-${d+1}`,h=((m=e.pickupFilletCellModes)==null?void 0:m[f])??((x=e.pickupFilletCellModes)==null?void 0:x[`cell-${d+1}`])??"none";return{id:f,mode:h,spanMm:Math.min(c.width*r,c.height*o)}})}function $a(i){const e=rn(i),t=wy(e).filter(x=>x.mode!=="none"),r=t.filter(x=>x.mode==="removable").length,o=t.filter(x=>x.mode==="integrated").length,l=Math.min(e.width-e.wallThickness*2,e.depth-e.wallThickness*2),c=t.length>0?t.reduce((x,g)=>Math.min(x,g.spanMm),Number.POSITIVE_INFINITY):l,d=Math.max(1,e.height-e.floorThickness),f=e.pickupFilletRadius/Math.max(1,c),h=e.pickupFilletHeight/d,m=Rt(Math.min(1.2,Math.max(.4,e.pickupFilletHeight*.2)));return{selectedCellCount:t.length,removableCellCount:r,integratedCellCount:o,smallestCellSpanMm:Rt(c),radiusRatio:Rt(f),heightRatio:Rt(h),baseThicknessMm:m,radiusState:t.length===0?"balanced":f>.42?"large":f<.18?"small":"balanced",heightState:t.length===0?"balanced":h>.78?"high":h<.22?"low":"balanced",clearanceState:r===0?"unused":e.pickupFilletFitClearance<.2?"tight":e.pickupFilletFitClearance>1?"loose":"balanced"}}function Zx(i){const e=rn(i),t=$a(e),r=Math.max(1,e.height-e.floorThickness);return{pickupFilletRadius:Rt(Xt(t.smallestCellSpanMm*.3,4,24)),pickupFilletHeight:Rt(Xt(r*.35,3,12)),pickupFilletFitClearance:t.removableCellCount>0?.4:e.pickupFilletFitClearance}}function Ty(i,e){const t=rn(i),r=$a(t),o=Math.max(1,t.height-t.floorThickness),l=Zx(t),c={shallow:{height:.25,radius:.22},standard:{height:.35,radius:.3},deep:{height:.5,radius:.38}};if(e==="standard")return l;const d=c[e];return{pickupFilletRadius:Rt(Xt(r.smallestCellSpanMm*d.radius,4,24)),pickupFilletHeight:Rt(Xt(o*d.height,3,12)),pickupFilletFitClearance:l.pickupFilletFitClearance}}function Cy(i){const e=rn(i),t=$a(e),r=Rt(e.pickupFilletRadius??16),o=Rt(e.pickupFilletHeight??5),l=Rt(Math.max(1,e.height-e.floorThickness));return{points:Array.from({length:9},(d,f)=>{const h=f/8,m=1-Math.cos(h*(Math.PI/2));return{x:Rt(r*h),y:Rt(o*m)}}),radiusMm:r,heightMm:o,clearanceMm:Rt(e.pickupFilletFitClearance??.4),wallHeightMm:l,baseThicknessMm:t.baseThicknessMm,selectedCellCount:t.selectedCellCount,removableCellCount:t.removableCellCount,maxProfileWidthMm:t.smallestCellSpanMm}}const Ay=[{key:"lidHeight",label:"フタの高さ",min:4,max:24,step:1,unit:"mm",disabledWhen:"includeLid"},{key:"lidClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"includeLid"}],Ry=[{key:"stackingLipHeight",label:"高さ",min:1,max:8,step:.5,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingGrooveClearance",label:"溝クリアランス",min:.2,max:3,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingShortFootLength",label:"短脚長さ",min:4,max:80,step:1,unit:"mm",disabledWhen:"stackingLip",showWhenMode:"short"},{key:"stackPreviewCount",label:"プレビュー段数",min:2,max:6,step:1,unit:"段",disabledWhen:"stackingLip"}],by=[{key:"pickupFilletRadius",label:"曲線半径",min:2,max:40,step:1,unit:"mm",disabledWhen:"pickupFillet"},{key:"pickupFilletHeight",label:"立ち上がり高さ",min:1,max:60,step:1,unit:"mm",disabledWhen:"pickupFillet"},{key:"pickupFilletFitClearance",label:"取付クリアランス",min:0,max:2,step:.1,unit:"mm",disabledWhen:"pickupFillet"}];function Ch({className:i="",controls:e,settings:t,onChange:r}){return w.jsx("div",{className:`box-option-grid ${i}`.trim(),children:e.map(o=>{if(o.showWhenMode&&t.stackingFootMode!==o.showWhenMode)return null;const l=t[o.key]??o.min,c=o.disabledWhen?!!t[o.disabledWhen]:!0,d=f=>{Number.isFinite(f)&&r(o.key,f)};return w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:o.label}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${o.label}の数値`,className:"number-control",disabled:!c,type:"number",min:o.min,max:o.max,step:o.step,value:l,onChange:f=>d(Number(f.target.value))}),w.jsx("span",{className:"range-unit",children:o.unit})]})]}),w.jsx("input",{disabled:!c,type:"range",min:o.min,max:o.max,step:o.step,value:l,onChange:f=>d(Number(f.target.value))})]},o.key)})})}function Py({settings:i,onChange:e}){return w.jsxs("section",{className:"box-options","aria-label":"フタ設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.includeLid,type:"checkbox",onChange:t=>e("includeLid",t.target.checked)}),w.jsx("span",{children:"フタ"})]})}),w.jsx(Ch,{className:"box-option-grid-single",controls:Ay,settings:i,onChange:e})]})}function Ly({settings:i,onChange:e}){const t=i.stackingFootMode??"relief";return w.jsxs("section",{className:"box-options","aria-label":"スタック脚設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.stackingLip,type:"checkbox",onChange:r=>e("stackingLip",r.target.checked)}),w.jsx("span",{children:"スタック脚"})]})}),w.jsxs("div",{"aria-label":"スタック脚の方式",className:"segmented stack-foot-mode",role:"group",children:[w.jsx("button",{"aria-pressed":t==="relief",className:t==="relief"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","relief"),children:"逃げ加工"}),w.jsx("button",{"aria-pressed":t==="short",className:t==="short"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","short"),children:"外周短脚"})]}),w.jsx(Ch,{className:"box-option-grid-single",controls:Ry,settings:i,onChange:e})]})}const gg={none:"なし",integrated:"本体一体",removable:"取り外し"},oc={shallow:"浅め",standard:"標準",deep:"深め"},Dy={shallow:"小さい部品を軽くすくう",standard:"普段使いのバランス",deep:"指を入れて取りやすい"},xg=["shallow","standard","deep"],Ny={standard:"標準",high:"高精細"},Iy=["standard","high"],ac=i=>Number.isInteger(i)?String(i):i.toFixed(1),Fy={balanced:"ほどよい",high:"大きめ",large:"大きめ",loose:"大きめ",low:"小さめ",small:"小さめ",tight:"小さめ",unused:"未使用"},Uy={balanced:"ほどよい",high:"高め",large:"高め",loose:"高め",low:"低め",small:"低め",tight:"低め",unused:"未使用"},ky={balanced:"ほどよい",high:"ゆるめ",large:"ゆるめ",loose:"ゆるめ",low:"きつめ",small:"きつめ",tight:"きつめ",unused:"未使用"};function Oy({detailed:i,onToggleDetailed:e,settings:t}){const r=Cy(t),o=220,l=116,c=18,d=Math.max(0,Math.round((r.maxProfileWidthMm-r.radiusMm*2)*10)/10),f=(o-c*2)/Math.max(r.radiusMm,r.maxProfileWidthMm*.45,1),h=(l-c*2)/Math.max(r.wallHeightMm,r.heightMm,1),m=l-c,x=c+r.radiusMm*f,g=r.points.map((M,S)=>{const E=c+M.x*f,_=m-M.y*h;return`${S===0?"M":"L"} ${E.toFixed(1)} ${_.toFixed(1)}`}).join(" ");return w.jsxs("div",{className:"fillet-profile-preview","aria-label":"フィレット断面プレビュー",children:[w.jsxs("div",{className:"fillet-profile-header",children:[w.jsx("strong",{children:"断面プレビュー"}),w.jsx("span",{children:r.selectedCellCount>0?`${r.selectedCellCount}区画に適用`:"区画未選択"}),w.jsx("button",{className:"fillet-detail-toggle",type:"button",onClick:e,children:i?"簡易表示":"詳細表示"})]}),w.jsxs("svg",{className:"fillet-profile-svg",viewBox:`0 0 ${o} ${l}`,role:"img","aria-label":"床から壁へ立ち上がるフィレット断面",children:[w.jsx("path",{d:`M ${c} ${m} H ${o-c}`,className:"fillet-profile-floor"}),w.jsx("path",{d:`M ${x.toFixed(1)} ${m} V ${c}`,className:"fillet-profile-wall"}),w.jsx("path",{d:`${g} L ${x.toFixed(1)} ${m} Z`,className:"fillet-profile-area"}),w.jsx("path",{d:g,className:"fillet-profile-curve"})]}),w.jsxs("div",{className:"fillet-profile-metrics",children:[w.jsxs("span",{children:["半径 ",r.radiusMm," mm"]}),w.jsxs("span",{children:["高さ ",r.heightMm," mm"]}),r.removableCellCount>0?w.jsxs("span",{children:["すき間 ",r.clearanceMm," mm"]}):w.jsx("span",{children:"一体出力"})]}),i?w.jsxs("div",{className:"fillet-profile-detail","aria-label":"選択区画の実寸断面",children:[w.jsxs("span",{children:["区画最小幅 ",ac(r.maxProfileWidthMm)," mm"]}),w.jsxs("span",{children:["平坦部 ",ac(d)," mm"]}),w.jsxs("span",{children:["壁高 ",ac(r.wallHeightMm)," mm"]}),w.jsxs("span",{children:["底板 ",ac(r.baseThicknessMm)," mm"]})]}):null]})}function Os(i,e){return i.id||`cell-${e+1}`}function qx(i){return!!(i&&(Number.isFinite(i.radius)||Number.isFinite(i.height)||Number.isFinite(i.fitClearance)))}function zy({cells:i,editingCellId:e,modes:t,shapes:r,warnings:o,onSelectCell:l}){return w.jsxs("div",{className:"fillet-cell-map-card",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"区画マップ"}),w.jsx("span",{children:"クリックで編集対象を切り替え"})]}),w.jsx("div",{className:"fillet-cell-map","aria-label":"フィレット区画マップ",children:i.map((c,d)=>{const f=Os(c,d),h=t[f]??"none",m=f===e,x=qx(r[f]),g=(o[f]??[]).length>0;return w.jsxs("button",{"aria-label":`${f}を編集`,"aria-pressed":m,className:["fillet-cell-map-cell",h,m?"selected":"",x?"custom":"",g?"warning":""].filter(Boolean).join(" "),style:{left:`${c.x*100}%`,top:`${c.y*100}%`,width:`${c.width*100}%`,height:`${c.height*100}%`},type:"button",onClick:()=>l(f),children:[w.jsx("span",{children:f}),x?w.jsx("small",{children:"個別"}):null,g?w.jsx("small",{className:"warning",children:"警告"}):null]},f)})})]})}function By({settings:i,onChange:e}){var Z;const[t,r]=Ie.useState(!1),o=(Z=i.layout)!=null&&Z.length?wn(i.layout)??[]:En(i.columns,i.rows),l=o[0]?Os(o[0],0):"cell-1",[c,d]=Ie.useState(l),f=o.some((O,G)=>Os(O,G)===c)?c:l,h=i.pickupFilletCellModes??{},m=i.pickupFilletCellShapes??{},x=eu(i,f),g=h[f]??"none",M=Object.fromEntries(o.map((O,G)=>{const Q=Os(O,G);return[Q,Yx(i,Q)]})),S=M[f]??[],E=Sy(i,f),_=$a(i),y=Zx(i),N=(O,G)=>{e("pickupFilletCellModes",{...h,[O]:G})},R=()=>{e("pickupFilletRadius",y.pickupFilletRadius),e("pickupFilletHeight",y.pickupFilletHeight),e("pickupFilletFitClearance",y.pickupFilletFitClearance)},C=O=>{const G=Ty(i,O);e("pickupFilletRadius",G.pickupFilletRadius),e("pickupFilletHeight",G.pickupFilletHeight),e("pickupFilletFitClearance",G.pickupFilletFitClearance)},k=O=>{e("pickupFilletCellModes",Object.fromEntries(o.map((G,Q)=>[Os(G,Q),O])))},D=(O,G)=>{Number.isFinite(G)&&e("pickupFilletCellShapes",{...m,[f]:{...m[f]??{},[O]:G}})},I=()=>{const{[f]:O,...G}=m;e("pickupFilletCellShapes",G)},j=O=>{e("pickupFilletCellShapes",{...m,[f]:O})},L=O=>{j(My(i,f,O))},b=()=>{j({radius:i.pickupFilletRadius??16,height:i.pickupFilletHeight??5,fitClearance:i.pickupFilletFitClearance??.4})},V=()=>{e("pickupFilletCellShapes",{...Object.fromEntries(o.map((O,G)=>[Os(O,G),x]))})},he=()=>{e("pickupFilletCellShapes",{...m,...Object.fromEntries(o.map((O,G)=>Os(O,G)).filter(O=>(h[O]??"none")===g).map(O=>[O,x]))})},W=()=>{e("pickupFilletCellShapes",{})};return w.jsxs("section",{className:"box-options","aria-label":"すくい上げフィレット設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.pickupFillet,type:"checkbox",onChange:O=>e("pickupFillet",O.target.checked)}),w.jsx("span",{children:"すくい上げフィレット"})]})}),w.jsx(Ch,{className:"box-option-grid-single",controls:by,settings:i,onChange:e}),i.pickupFillet?w.jsxs(w.Fragment,{children:[w.jsx(Oy,{detailed:t,settings:E,onToggleDetailed:()=>r(O=>!O)}),w.jsx(zy,{cells:o,editingCellId:f,modes:h,shapes:m,warnings:M,onSelectCell:d}),w.jsxs("div",{className:"fillet-cell-shape-editor","aria-label":"区画別フィレット形状",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsxs("strong",{children:["編集中: ",f]}),w.jsx("span",{children:gg[g]})]}),w.jsxs("div",{className:"fillet-cell-preset-actions","aria-label":"区画別プリセット",children:[xg.map(O=>w.jsx("button",{"aria-label":`${f}に${oc[O]}を適用`,type:"button",onClick:()=>L(O),children:oc[O]},O)),w.jsx("button",{"aria-label":`${f}に全体設定をコピー`,type:"button",onClick:b,children:"全体設定"})]}),S.length>0?w.jsxs("div",{className:"fillet-cell-warning",role:"alert",children:[w.jsx("strong",{children:f}),w.jsx("span",{children:S.map(O=>O.message).join(" / ")})]}):null,w.jsxs("div",{className:"box-option-grid box-option-grid-single",children:[w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"曲線半径"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${f}の曲線半径`,className:"number-control",type:"number",min:2,max:40,step:1,value:x.radius,onChange:O=>D("radius",Number(O.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:2,max:40,step:1,value:x.radius,onChange:O=>D("radius",Number(O.target.value))})]}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"立ち上がり高さ"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${f}の立ち上がり高さ`,className:"number-control",type:"number",min:1,max:Math.max(1,i.height-i.floorThickness),step:1,value:x.height,onChange:O=>D("height",Number(O.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:1,max:Math.max(1,i.height-i.floorThickness),step:1,value:x.height,onChange:O=>D("height",Number(O.target.value))})]}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"取付クリアランス"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${f}の取付クリアランス`,className:"number-control",type:"number",min:0,max:2,step:.1,value:x.fitClearance,onChange:O=>D("fitClearance",Number(O.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:0,max:2,step:.1,value:x.fitClearance,onChange:O=>D("fitClearance",Number(O.target.value))})]})]}),w.jsx("button",{className:"secondary-action",disabled:!qx(m[f]),type:"button",onClick:I,children:"全体設定に戻す"}),w.jsxs("div",{className:"fillet-cell-bulk-actions","aria-label":"区画別設定の一括操作",children:[w.jsx("button",{type:"button",onClick:V,children:"他区画へコピー"}),w.jsx("button",{"aria-label":`${f}の設定を同じモードの区画へ適用`,type:"button",onClick:he,children:"同じモードへ適用"}),w.jsx("button",{type:"button",onClick:W,children:"すべての個別設定を解除"})]})]}),w.jsxs("div",{className:"fillet-preset-card","aria-label":"フィレット形状プリセット",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"形状プリセット"}),w.jsx("span",{children:"用途からまとめて調整"})]}),w.jsx("div",{className:"fillet-preset-actions",children:xg.map(O=>w.jsxs("button",{"aria-label":oc[O],type:"button",onClick:()=>C(O),children:[w.jsx("strong",{children:oc[O]}),w.jsx("span",{children:Dy[O]})]},O))})]}),w.jsxs("div",{className:"fillet-quality-card","aria-label":"フィレットSTL品質",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"STL品質"}),w.jsx("span",{children:"曲面の細かさ"})]}),w.jsx("div",{className:"segmented fillet-quality-actions",role:"group","aria-label":"フィレットSTL品質",children:Iy.map(O=>w.jsx("button",{"aria-pressed":(i.pickupFilletMeshQuality??"standard")===O,className:(i.pickupFilletMeshQuality??"standard")===O?"selected":"",type:"button",onClick:()=>e("pickupFilletMeshQuality",O),children:Ny[O]},O))})]}),w.jsxs("div",{className:"fillet-tuning-card",children:[w.jsxs("div",{className:"fillet-tuning-header",children:[w.jsx("strong",{children:"フィレットの効き方"}),w.jsxs("span",{children:["選択区画: ",_.selectedCellCount]})]}),w.jsxs("div",{className:"fillet-tuning-metrics",children:[w.jsxs("span",{children:["半径: ",Fy[_.radiusState]]}),w.jsxs("span",{children:["高さ: ",Uy[_.heightState]]}),w.jsxs("span",{children:["クリアランス: ",ky[_.clearanceState]]})]}),w.jsx("p",{children:"半径はすくい始めのなだらかさ、高さは壁側への立ち上がり、クリアランスは取り外し式パーツのきつさに効きます。"}),w.jsx("button",{className:"secondary-action fillet-recommend-button",type:"button",onClick:R,children:"推奨値へ自動調整"})]}),w.jsxs("div",{className:"fillet-bulk-card","aria-label":"フィレット一括適用",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"一括適用"}),w.jsxs("span",{children:[o.length,"区画"]})]}),w.jsxs("div",{className:"fillet-bulk-actions",children:[w.jsx("button",{type:"button",onClick:()=>k("integrated"),children:"全区画を本体一体"}),w.jsx("button",{type:"button",onClick:()=>k("removable"),children:"全区画を取り外し"}),w.jsx("button",{type:"button",onClick:()=>k("none"),children:"全区画を解除"})]})]}),w.jsx("div",{className:"fillet-cell-list",children:o.map((O,G)=>{const Q=O.id||`cell-${G+1}`,z=h[Q]??"none";return w.jsxs("label",{className:"fillet-cell-row",children:[w.jsx("span",{children:Q}),w.jsx("select",{"aria-label":`${Q}のフィレット方式`,value:z,onChange:ue=>N(Q,ue.target.value),children:Object.entries(gg).map(([ue,te])=>w.jsx("option",{value:ue,children:te},ue))})]},Q)})})]}):null]})}function tu(i){return{...i,canUndo:i.past.length>0,canRedo:i.future.length>0}}function vg(i){return tu({past:[],current:i,future:[]})}function _g(i,e){return tu({past:[...i.past,i.current],current:e,future:[]})}function Hy(i){const e=i.past.at(-1);return e?tu({past:i.past.slice(0,-1),current:e,future:[i.current,...i.future]}):i}function Vy(i){const e=i.future[0];return e?tu({past:[...i.past,i.current],current:e,future:i.future.slice(1)}):i}const is=(i,e)=>Math.abs(i-e)<1e-4;function Gy(i,e){return[...i].sort((t,r)=>t.area-r.area).find(t=>e.x>=t.x&&e.x<=t.x+t.width&&e.y>=t.y&&e.y<=t.y+t.height)}function yg(i){return i.ctrlKey?i.currentSelection.includes(i.targetCellId)?i.currentSelection.filter(e=>e!==i.targetCellId):[...i.currentSelection,i.targetCellId]:i.shiftKey&&i.currentSelection[0]?[i.currentSelection[0],i.targetCellId]:i.dragStartCellId&&i.dragStartCellId!==i.targetCellId?[i.dragStartCellId,i.targetCellId]:[i.targetCellId]}function Wy(i,e){const t=Math.min(e.start.x,e.end.x),r=Math.max(e.start.x,e.end.x),o=Math.min(e.start.y,e.end.y),l=Math.max(e.start.y,e.end.y);return i.filter(c=>Math.min(c.x+c.width,r)-Math.max(c.x,t)>0&&Math.min(c.y+c.height,l)-Math.max(c.y,o)>0).map(c=>c.id)}function jy(i,e){if(is(i.y,e.y)&&is(i.height,e.height)){if(is(i.x+i.width,e.x))return"right";if(is(e.x+e.width,i.x))return"left"}if(is(i.x,e.x)&&is(i.width,e.width)){if(is(i.y+i.height,e.y))return"down";if(is(e.y+e.height,i.y))return"up"}}const Mg=["left","right","up","down"];function Xy(i,e){const t=i.find(r=>r.id===e);return t?i.filter(r=>r.id!==e).map(r=>({direction:jy(t,r),cellId:r.id})).filter(r=>!!r.direction&&fy(i,e,r.cellId)).sort((r,o)=>Mg.indexOf(r.direction)-Mg.indexOf(o.direction)):[]}function $y(i){if(i.shiftKey){if(i.key==="ArrowLeft")return"left";if(i.key==="ArrowRight")return"right";if(i.key==="ArrowUp")return"up";if(i.key==="ArrowDown")return"down"}}function nu(i,e){const t=rn(i),r=!!t.stackingLip,o=t.stackPreviewCount??2,l=r?Math.min(6,Math.max(2,Math.round(o))):1;return{clearanceMm:t.stackingClearance??.6,enabled:r,stackCount:l,stackedHeightMm:t.height*l}}const Yy=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4,Zy=i=>Math.round(i*10)/10;function Sg(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function qy(i){const e=Sg(i.columns,i.columnRatios),t=Sg(i.rows,i.rowRatios),r=[0],o=[0];e.forEach(c=>{r.push(r[r.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let d=0;d<i.columns;d+=1)l.push({id:`stack-cell-${l.length+1}`,x:r[d],y:o[c],width:r[d+1]-r[d],height:o[c+1]-o[c]});return wn(l)??[]}function Ky(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),r=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,r-i.wallThickness*2),c=-t/2,d=t/2,f=-r/2,h=r/2,m=-o/2,x=o/2,g=-l/2,M=l/2;return[{minX:c,maxX:d,minZ:f,maxZ:g},{minX:c,maxX:d,minZ:M,maxZ:h},{minX:c,maxX:m,minZ:g,maxZ:M},{minX:x,maxX:d,minZ:g,maxZ:M}]}function Qy(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),r=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-r/2+i.start*r,maxZ:-r/2+i.end*r}}const l=-r/2+i.position*r;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}function Ya(i){var d;const e=rn(i);if(!e.stackingLip)return{enabled:!1,hasInterference:!1,interferingHandles:[],issueCount:0,message:"スタック段差は無効です。",recommendedReliefGapMm:0};const t=(d=e.layout)!=null&&d.length?e.layout:qy(e),r=qo(t).map(f=>({handle:f,rect:Qy(f,e)})),o=Ky(e),l=Zy(e.wallThickness+e.stackingGrooveClearance*2),c=r.reduce((f,h)=>f+o.filter(m=>Yy(h.rect,m)).length,0);return{enabled:!0,hasInterference:!1,interferingHandles:[],issueCount:0,message:e.stackingFootMode==="short"?"スタック脚は外周寄りの短い脚で仕切りを避けています。":c>0?"スタック脚は仕切り位置を自動で逃げ加工しています。":"スタック脚は仕切りと干渉していません。",recommendedReliefGapMm:l}}function Pa({title:i,children:e,className:t="",hideTitle:r=!1}){return w.jsxs("section",{"aria-label":i,className:`layout-tool-section ${t}`.trim(),children:[r?null:w.jsx("div",{className:"layout-tool-section-title",children:w.jsx("h3",{children:i})}),e]})}const rs=i=>Math.round(i*10)/10,Eg={none:"なし",integrated:"本体一体",removable:"取り外し"},Wd=["none","integrated","removable"],Bi=i=>JSON.stringify(i.map(e=>[e.id,e.x,e.y,e.width,e.height])),Hi=i=>`${i.axis}:${i.position}:${i.start}:${i.end}`;function _o(i,e,t,r,o,l){const c=Math.min(l,r/2,o/2);i.beginPath(),i.moveTo(e+c,t),i.lineTo(e+r-c,t),i.quadraticCurveTo(e+r,t,e+r,t+c),i.lineTo(e+r,t+o-c),i.quadraticCurveTo(e+r,t+o,e+r-c,t+o),i.lineTo(e+c,t+o),i.quadraticCurveTo(e,t+o,e,t+o-c),i.lineTo(e,t+c),i.quadraticCurveTo(e,t,e+c,t),i.closePath()}function Jy({settings:i,onSettingsChange:e,onLayoutChange:t}){var an;const r=Ie.useRef(null),o=Ie.useRef([]),l=Ie.useRef([]),c=Ie.useRef(null),d=Ie.useRef(""),f=Ie.useRef(null),h=Ie.useRef(null),m=Ie.useRef(null),x=Ie.useRef(null),g=Ie.useRef(!1),M=Ie.useRef(!1),S=Ie.useMemo(()=>i.layout??En(i.columns,i.rows),[i.columns,i.layout,i.rows]),E=Ie.useMemo(()=>qo(S),[S]),[_,y]=Ie.useState(S[0]?[S[0].id]:[]),[N,R]=Ie.useState("vertical"),[C,k]=Ie.useState(2),[D,I]=Ie.useState(.5),[j,L]=Ie.useState(null),[b,V]=Ie.useState(null),[he,W]=Ie.useState(null),[Z,O]=Ie.useState(null),[G,Q]=Ie.useState(""),[z,ue]=Ie.useState(""),[te,H]=Ie.useState(null),[pe,De]=Ie.useState(null),[ie,xe]=Ie.useState(null),[Se,Me]=Ie.useState(!1),[be,ze]=Ie.useState(!1),[et,vt]=Ie.useState(!1),[Et,Wt]=Ie.useState("crosshair"),[Y,kn]=Ie.useState(""),[ht,_t]=Ie.useState(!0),[Qe,Vt]=Ie.useState(!1),[Xe,F]=Ie.useState(!1),[A,re]=Ie.useState(()=>vg(S)),le=_.map($=>S.find(U=>U.id===$)).filter($=>!!$),ce=le[0]??S[0],ve=Y?S.find($=>$.id===Y):void 0,Ze=ce?rs(ce.width*i.width):0,Ne=ce?rs(ce.height*i.depth):0,Ve=he??String(Ze),pt=Z??String(Ne),Ae=he===null?Number.NaN:Number(he),We=Z===null?Number.NaN:Number(Z),tt=le.length===1&&he!==null&&he!==""&&!ba(S,ce.id,"width",Ae,i.width,i.depth),rt=le.length===1&&Z!==null&&Z!==""&&!ba(S,ce.id,"height",We,i.width,i.depth),je=tt||rt,at=ce?N==="vertical"?ce.width*i.width:ce.height*i.depth:0,ct=Gc(D,0,1,at,1),kt=rs(at*.08),J=rs(at*.92),Fe=rs(ct*at),me=j??String(Fe),_e=j===null?Number.NaN:Number(j),ke=j!==null&&j!==""&&!hg(_e,at),Ue=te?rs(Jl(te,i.width,i.depth)):0,dt=b??String(Ue),Yt=b===null?Number.NaN:Number(b),gn=te!==null&&b!==null&&b!==""&&!pg(S,te,Yt,i.width,i.depth),St=Ie.useMemo(()=>Wx(S),[S]),Gt=Ie.useMemo(()=>Ya({...i,layout:S}),[S,i]),On=Ie.useMemo(()=>new Set(Gt.interferingHandles.map(Hi)),[Gt.interferingHandles]),ii=le.map($=>$.id),Zn=ce?((an=i.pickupFilletCellModes)==null?void 0:an[ce.id])??"none":"none",en=Ie.useMemo(()=>le.length>=2?dy(S,ii,i.width,i.depth):null,[S,le.length,ii,i.depth,i.width]),zn=le.length>=2&&hy(S,ii),Li=le.length>=2&&Tf(S,ii,"vertical"),Di=le.length>=2&&Tf(S,ii,"horizontal"),fi=ce&&le.length===1?Xy(S,ce.id):[],Yi=te?Hi(te):"",qn=te?ey(S,te,i.width,i.depth):null,Ys=qn!==null&&Math.abs(qn.center-qn.current)>1e-4,ri=Ie.useMemo(()=>{const $=z||G||Yi,U=E.find(ge=>Hi(ge)===$);return U?new Set(cy(S,U).map(Hi)):new Set},[z,G,S,E,Yi]),si=Ie.useMemo(()=>E.find($=>Hi($)===G),[G,E]),Zs=Ie.useMemo(()=>pe||z||!si?null:{axis:si.axis,position:si.position,start:si.start,end:si.end,valueMm:Jl(si,i.width,i.depth)},[z,si,pe,i.depth,i.width]),ta=Ie.useMemo(()=>pe||z||si||!te?null:{axis:te.axis,position:te.position,start:te.start,end:te.end,valueMm:Jl(te,i.width,i.depth)},[z,si,pe,te,i.depth,i.width]),Tn=pe??Zs??ta,Hr=(te==null?void 0:te.axis)==="vertical"?"縦壁":"横壁",P=te?Math.max(1,ri.size):0,ee=ce&&le.length===1?C===2?ly(S,ce.id,N,ct):ay(S,ce.id,N,C):[];Ie.useEffect(()=>{le.length===0&&S[0]&&y([S[0].id])},[S,le.length]),Ie.useEffect(()=>{(C!==2||le.length!==1)&&(ze(!1),vt(!1),L(null))},[le.length,C]),Ie.useEffect(()=>{L(null)},[ce==null?void 0:ce.id,N]),Ie.useEffect(()=>{W(null),O(null)},[ce==null?void 0:ce.id]),Ie.useEffect(()=>{V(null)},[Yi]),Ie.useEffect(()=>{(!i.pickupFillet||!e)&&Me(!1)},[e,i.pickupFillet]),Ie.useEffect(()=>{g.current||Bi(A.current)!==Bi(S)&&re(vg(S))},[A.current,S]),Ie.useEffect(()=>{const $=r.current;if(!$)return;const U=$.getContext("2d");if(!U)return;const ge=$.getBoundingClientRect(),mt=window.devicePixelRatio||1;$.width=Math.max(1,Math.round(ge.width*mt)),$.height=Math.max(1,Math.round(ge.height*mt)),U.setTransform(mt,0,0,mt,0,0),U.clearRect(0,0,ge.width,ge.height);const bt=24,yt=i.width/i.depth,cn=ge.width-bt*2,Xn=ge.height-bt*2;let Ut=cn,gt=Ut/yt;gt>Xn&&(gt=Xn,Ut=gt*yt);const Dt=(ge.width-Ut)/2,qt=(ge.height-gt)/2;c.current={originX:Dt,originY:qt,modelWidth:Ut,modelHeight:gt};const oi=Math.max(3,Math.min(9,i.wallThickness/i.width*Ut)),Zi=[];if(U.save(),U.shadowColor="rgba(27, 31, 35, 0.16)",U.shadowBlur=18,U.shadowOffsetY=8,_o(U,Dt,qt,Ut,gt,7),U.fillStyle="#f7f8f8",U.fill(),U.restore(),ht&&!Xe&&(U.fillStyle="rgba(45, 54, 62, 0.44)",U.font="800 11px Inter, system-ui, sans-serif",U.textAlign="center",U.fillText(`${rs(i.width)} mm`,Dt+Ut/2,qt-8),U.save(),U.translate(Dt-10,qt+gt/2),U.rotate(-Math.PI/2),U.fillText(`${rs(i.depth)} mm`,0,0),U.restore()),S.forEach(Le=>{var vs;const At=Dt+Le.x*Ut+(Le.x<=1e-4?0:oi/2),Kt=qt+Le.y*gt+(Le.y<=1e-4?0:oi/2),_n=Le.x+Le.width>=.9999,un=Le.y+Le.height>=.9999,yn=Le.width*Ut-(Le.x<=1e-4?0:oi/2)-(_n?0:oi/2),Mn=Le.height*gt-(Le.y<=1e-4?0:oi/2)-(un?0:oi/2),Cn=_.includes(Le.id),Ni=Le.id===Y,Mr=zn&&Cn,wi=le.length>1&&Cn&&!zn,hi=((vs=i.pickupFilletCellModes)==null?void 0:vs[Le.id])??"none";if(Zi.push({id:Le.id,x:At,y:Kt,width:yn,height:Mn,area:yn*Mn}),U.save(),U.shadowColor=Cn?"rgba(23, 141, 224, 0.2)":"rgba(20, 24, 28, 0.1)",U.shadowBlur=Cn?18:10,U.shadowOffsetY=Cn?6:4,_o(U,At,Kt,yn,Mn,6),U.fillStyle=Cn?"#ffffff":"#f1f3f3",U.fill(),U.restore(),i.pickupFillet&&hi!=="none"){U.save(),_o(U,At+4,Kt+4,yn-8,Mn-8,5);const qs=Se?.18:.06,el=Se?.82:.42;U.fillStyle=hi==="removable"?`rgba(240, 138, 36, ${qs})`:`rgba(25, 137, 100, ${qs})`,U.fill(),U.strokeStyle=hi==="removable"?`rgba(240, 138, 36, ${el})`:`rgba(25, 137, 100, ${el})`,U.lineWidth=Se?2:1.1,U.stroke(),yn>74&&Mn>38&&(U.fillStyle=hi==="removable"?"#99520b":"#146f50",U.font="850 10px Inter, system-ui, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText(Eg[hi],At+yn/2,Kt+Mn/2)),U.restore()}if(_o(U,At,Kt,yn,Mn,6),U.strokeStyle=Cn?Mr?"#198964":wi?"#c77700":"#178de0":Ni?"rgba(23, 141, 224, 0.48)":"rgba(54, 64, 72, 0.18)",U.lineWidth=Cn?2.5:Ni?1.8:1,U.stroke(),ht&&(!Xe||Cn||Ni)&&yn>58&&Mn>34){U.fillStyle=Cn?Mr?"#198964":wi?"#a86600":"#167ec0":Ni?"#167ec0":"rgba(82, 92, 100, 0.45)",U.font=yn>84&&Mn>48?"800 11px Inter, system-ui, sans-serif":"800 10px Inter, system-ui, sans-serif",U.textAlign="center",U.textBaseline="middle";const qs=yn>84&&Mn>48?`${In(Le.width*i.width)} x ${In(Le.height*i.depth)}`:`${In(Le.width*i.width)}`;U.fillText(qs,At+yn/2,Kt+Mn/2)}}),en){const Le=Dt+en.minX*Ut,At=qt+en.minY*gt,Kt=en.width*Ut,_n=en.height*gt,un=en.isRectangle?"#198964":"#c77700",yn=`W: ${In(en.widthMm)}`,Mn=`D: ${In(en.depthMm)}`;U.save(),U.strokeStyle=un,U.lineWidth=2,U.setLineDash([7,5]),U.strokeRect(Le-3,At-3,Kt+6,_n+6),U.restore(),U.save(),U.font="850 11px Inter, system-ui, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillStyle=un,U.fillText(yn,Le+Kt/2,Math.max(11,At-13)),U.save(),U.translate(Math.max(14,Le-15),At+_n/2),U.rotate(-Math.PI/2),U.fillText(Mn,0,0),U.restore(),U.restore()}if(ie){const Le=Math.min(ie.start.x,ie.end.x),At=Math.min(ie.start.y,ie.end.y),Kt=Math.abs(ie.end.x-ie.start.x),_n=Math.abs(ie.end.y-ie.start.y);U.save(),U.fillStyle="rgba(23, 141, 224, 0.08)",U.strokeStyle="#178de0",U.lineWidth=1.5,U.setLineDash([5,5]),U.fillRect(Le,At,Kt,_n),U.strokeRect(Le,At,Kt,_n),U.restore()}ee.length>0&&(U.save(),U.strokeStyle=be||et?"#198964":"#f08a24",U.lineWidth=be||et?4:2.5,U.setLineDash([8,6]),U.lineCap="round",ee.forEach(Le=>{U.beginPath(),U.moveTo(Dt+Le.x1*Ut,qt+Le.y1*gt),U.lineTo(Dt+Le.x2*Ut,qt+Le.y2*gt),U.stroke()}),U.restore());const yr=E.map(Le=>{if(Le.axis==="vertical"){const Kt=Dt+Le.position*Ut;return{...Le,key:Hi(Le),x1:Kt,x2:Kt,y1:qt+Le.start*gt,y2:qt+Le.end*gt}}const At=qt+Le.position*gt;return{...Le,key:Hi(Le),x1:Dt+Le.start*Ut,x2:Dt+Le.end*Ut,y1:At,y2:At}});if(yr.forEach(Le=>{const At=Le.key===z,Kt=Le.key===G,_n=Le.key===Yi,un=ri.has(Le.key),yn=On.has(Le.key);U.save(),U.strokeStyle=At||z&&un||_n?"#198964":yn?"#d05d28":Kt||un?"#178de0":"rgba(22, 137, 208, 0.28)",U.lineWidth=At||Kt||_n||un||yn?4:2,U.lineCap="round",U.beginPath(),U.moveTo(Le.x1,Le.y1),U.lineTo(Le.x2,Le.y2),U.stroke(),U.restore()}),Qe&&yr.forEach(Le=>{const At=Le.key===z,Kt=Le.key===G,_n=Le.key===Yi,un=ri.has(Le.key);if(!(!Xe||At||Kt||_n||un))return;const Mn=In(Jl(Le,i.width,i.depth)),Cn=Le.axis==="vertical"?Le.x1:(Le.x1+Le.x2)/2,Ni=Le.axis==="vertical"?(Le.y1+Le.y2)/2:Le.y1,Mr=Math.max(54,U.measureText(Mn).width+18),wi=22,hi=Math.min(ge.width-Mr-8,Math.max(8,Cn+(Le.axis==="vertical"?10:-Mr/2))),ur=Math.min(ge.height-wi-8,Math.max(8,Ni+(Le.axis==="vertical"?-wi/2:10)));U.save(),U.shadowColor="rgba(20, 24, 28, 0.16)",U.shadowBlur=10,U.shadowOffsetY=4,_o(U,hi,ur,Mr,wi,6),U.fillStyle=At||_n||un?"#198964":"#11171b",U.fill(),U.shadowColor="transparent",U.fillStyle="#ffffff",U.font="850 11px Inter, system-ui, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText(Mn,hi+Mr/2,ur+wi/2),U.restore()}),Tn){const Le=In(Tn.valueMm),At=Tn.axis==="vertical"?Dt+Tn.position*Ut:Dt+(Tn.start+Tn.end)/2*Ut,Kt=Tn.axis==="vertical"?qt+(Tn.start+Tn.end)/2*gt:qt+Tn.position*gt;U.save(),U.setLineDash([5,6]),U.lineWidth=1.5,U.strokeStyle="rgba(25, 137, 100, 0.44)",U.beginPath(),Tn.axis==="vertical"?(U.moveTo(At,qt),U.lineTo(At,qt+gt)):(U.moveTo(Dt,Kt),U.lineTo(Dt+Ut,Kt)),U.stroke(),U.restore(),U.save(),U.font="850 12px Inter, system-ui, sans-serif";const _n=Math.max(66,U.measureText(Le).width+22),un=28,yn=Tn.axis==="vertical"?12:0,Mn=Tn.axis==="vertical"?-un/2:-un-12,Cn=Math.min(ge.width-_n-10,Math.max(10,At+yn-(Tn.axis==="vertical"?0:_n/2))),Ni=Math.min(ge.height-un-10,Math.max(10,Kt+Mn));U.shadowColor="rgba(20, 24, 28, 0.22)",U.shadowBlur=14,U.shadowOffsetY=5,_o(U,Cn,Ni,_n,un,7),U.fillStyle="#11171b",U.fill(),U.shadowColor="transparent",U.fillStyle="#ffffff",U.textAlign="center",U.textBaseline="middle",U.fillText(Le,Cn+_n/2,Ni+un/2),U.restore()}o.current=Zi.sort((Le,At)=>Le.area-At.area),l.current=yr},[z,zn,ri,G,Se,be,et,S,E,le.length,_,en,Yi,ie,ht,Xe,Qe,ee,On,i.depth,i.pickupFillet,i.pickupFilletCellModes,i.wallThickness,i.width,Tn,Y]);const oe=($,U)=>{Bi(S)!==Bi($)&&(re(ge=>_g(ge,$)),t($),y(U))},de=($,U)=>{if(!ce||!Number.isFinite(U)||!ba(S,ce.id,$,U,i.width,i.depth))return;const ge=$==="width"?U/i.width:U/i.depth,mt=jx(S,ce.id,$==="width"?{width:ge}:{height:ge});oe(mt,[ce.id])},q=$=>{const U=$.currentTarget.getBoundingClientRect();return{x:$.clientX-U.left,y:$.clientY-U.top}},Te=$=>{var bt;const U=q($),ge=8;return(bt=l.current.map(yt=>{const cn=yt.axis==="vertical"?Math.abs(U.x-yt.x1):Math.abs(U.y-yt.y1),Xn=yt.axis==="vertical"?U.y>=Math.min(yt.y1,yt.y2)-ge&&U.y<=Math.max(yt.y1,yt.y2)+ge:U.x>=Math.min(yt.x1,yt.x2)-ge&&U.x<=Math.max(yt.x1,yt.x2)+ge;return{handle:yt,distance:cn,inRange:Xn}}).filter(yt=>yt.inRange&&yt.distance<=ge).sort((yt,cn)=>yt.distance-cn.distance)[0])==null?void 0:bt.handle},Pe=$=>{const U=c.current,ge=C===2?ee[0]:void 0;if(!U||!ge||!ce||le.length!==1)return!1;const mt=q($),bt=10;if(ge.axis==="vertical"){const Ut=U.originX+ge.x1*U.modelWidth,gt=U.originY+ge.y1*U.modelHeight,Dt=U.originY+ge.y2*U.modelHeight;return Math.abs(mt.x-Ut)<=bt&&mt.y>=Math.min(gt,Dt)-bt&&mt.y<=Math.max(gt,Dt)+bt}const yt=U.originY+ge.y1*U.modelHeight,cn=U.originX+ge.x1*U.modelWidth,Xn=U.originX+ge.x2*U.modelWidth;return Math.abs(mt.y-yt)<=bt&&mt.x>=Math.min(cn,Xn)-bt&&mt.x<=Math.max(cn,Xn)+bt},Be=$=>{const U=c.current;if(!U||!ce||le.length!==1)return;const ge=q($),mt=N==="vertical"?(ge.x-U.originX)/U.modelWidth:(ge.y-U.originY)/U.modelHeight,bt=Gc(mt,N==="vertical"?ce.x:ce.y,N==="vertical"?ce.width:ce.height,at,ec($));I(bt)},Ge=$=>{const U=x.current,ge=c.current,mt=h.current;if(!U||!ge||!mt)return;const bt=q($),yt=U.axis==="vertical"?(bt.x-ge.originX)/ge.modelWidth:(bt.y-ge.originY)/ge.modelHeight,cn=U.axis==="vertical"?i.width:i.depth,Xn=ec($),Ut=Gx(yt,cn,Xn),gt=hs(mt,U,Ut),Dt=ic(gt,U,Ut)??{...U,position:Ut};m.current=gt,H(Dt),Q(Hi(Dt)),De({axis:Dt.axis,position:Dt.position,start:Dt.start,end:Dt.end,valueMm:Dt.position*cn}),t(gt)},it=$=>{if(!ce)return;const U=C===2?oy(S,ce.id,$,ct):sy(S,ce.id,$,C);R($),oe(U,[`${ce.id}a`])},lt=()=>{if(!zn)return;const $=py(S,ii);oe($,[le[0].id])},qe=$=>{if(!($==="vertical"?Li:Di))return;const ge=my(S,ii,$);oe(ge,ii)},ft=$=>{if(!ce)return;const U=fi.find(ge=>ge.direction===$);U&&(H(null),De(null),vt(!1),y([ce.id,U.cellId]))},Ft=()=>{oe(En(1,1),["cell-1"])},Lt=()=>{const $=Hy(A);re($),t($.current),y($.current[0]?[$.current[0].id]:[])},Zt=()=>{const $=Vy(A);re($),t($.current),y($.current[0]?[$.current[0].id]:[])},wt=$=>Gy(o.current,q($)),nt=$=>{if($.target instanceof HTMLInputElement||$.target instanceof HTMLSelectElement||$.target instanceof HTMLTextAreaElement)return;const U=$y($);if(U&&ce&&le.length===1){const gt=fi.find(Dt=>Dt.direction===U);if(gt){$.preventDefault(),H(null),De(null),vt(!1),y([ce.id,gt.cellId]);return}}const ge=iy($);if(ge==="split-vertical"){$.preventDefault(),it("vertical");return}if(ge==="split-horizontal"){$.preventDefault(),it("horizontal");return}if(ge==="merge"){$.preventDefault(),lt();return}if(ge==="select-all"){$.preventDefault(),H(null),De(null),vt(!1),y(S.map(gt=>gt.id));return}if(ge==="equalize-width"){$.preventDefault(),qe("vertical");return}if(ge==="equalize-depth"){$.preventDefault(),qe("horizontal");return}if(ge==="undo"){$.preventDefault(),Lt();return}if(ge==="redo"){$.preventDefault(),Zt();return}if(ge==="cancel"){$.preventDefault(),y(ce?[ce.id]:[]),H(null),De(null),vt(!1);return}if(C===2&&ce&&le.length===1&&(et||be)){if(ry($.key)){$.preventDefault(),it(N),vt(!1);return}const gt=N==="vertical"?$.key==="ArrowLeft"?-1:$.key==="ArrowRight"?1:0:$.key==="ArrowUp"?-1:$.key==="ArrowDown"?1:0;if(gt!==0){$.preventDefault();const Dt=gt*ec($);I(qt=>Q_(qt,at,Dt)),vt(!0);return}}const mt=te??si;if(!mt)return;const bt=mt.axis==="vertical"?$.key==="ArrowLeft"?-1:$.key==="ArrowRight"?1:0:$.key==="ArrowUp"?-1:$.key==="ArrowDown"?1:0;if(bt===0)return;$.preventDefault();const yt=bt*ec($),cn=ny(mt,i.width,i.depth,yt),Xn=hs(S,mt,cn);if(Bi(S)===Bi(Xn))return;const Ut=ic(Xn,mt,cn)??{...mt,position:cn};H(Ut),Q(Hi(Ut)),oe(Xn,_)},on=$=>{Pe($)&&($.preventDefault(),vt(!1),it(N))},Tt=$=>{const U=te;if(!U||!Number.isFinite($))return;const ge=J_(U,i.width,i.depth,$),mt=hs(S,U,ge);if(Bi(S)===Bi(mt))return;const bt=ic(mt,U,ge)??{...U,position:ge};H(bt),Q(Hi(bt)),oe(mt,_)},bn=()=>{if(!te||!qn)return;const $=ty(S,te);if(Bi(S)===Bi($))return;const U=ic($,te,qn.center)??te;H(U),Q(Hi(U)),De({axis:U.axis,position:U.position,start:U.start,end:U.end,valueMm:U.position*(U.axis==="vertical"?i.width:i.depth)}),V(null),oe($,[ce.id])},Ei=()=>{H(null),De(null),ue(""),Q(""),V(null)},Pn=$=>{if(!i.pickupFillet||!e||le.length===0)return;const U={...i.pickupFilletCellModes??{}};le.forEach(ge=>{U[ge.id]=$}),e("pickupFilletCellModes",U)},_r=te?["壁選択中",Hr,`壁位置 ${In(Ue)}`,`連動壁 ${P}本`,...Gt.hasInterference?[`スタック干渉 ${Gt.interferingHandles.length}本`]:[],...Gt.hasInterference?[`推奨逃げ幅 ${Gt.recommendedReliefGapMm} mm`]:[],"スナップ 5 mm","Ctrl微調整 1 mm"]:[le.length>=2?`${le.length}件選択`:"選択中",le.length===1?"分割可":zn?"結合準備OK":"範囲確認",le.length>=2?Li||Di?"均等化可":"均等化不可":fi.length>0?"隣接セルあり":"寸法編集可",ve?`ホバー ${In(ve.width*i.width)} x ${In(ve.height*i.depth)}`:Xe?"選択のみ表示":"全体表示",...Gt.hasInterference?[`スタック干渉 ${Gt.interferingHandles.length}本`]:[],...Gt.hasInterference?[`推奨逃げ幅 ${Gt.recommendedReliefGapMm} mm`]:[]],jt=$=>{var bt;const U=Te($);if(U){$.currentTarget.focus(),$.currentTarget.setPointerCapture($.pointerId),vt(!1),h.current=S,m.current=S,x.current=U,g.current=!0,H(U),De({axis:U.axis,position:U.position,start:U.start,end:U.end,valueMm:U.position*(U.axis==="vertical"?i.width:i.depth)});const yt=Hi(U);ue(yt),Q(yt),Wt(U.axis==="vertical"?"ew-resize":"ns-resize");return}if(Pe($)){$.currentTarget.focus(),$.currentTarget.setPointerCapture($.pointerId),M.current=!0,ze(!0),vt(!0),H(null),De(null),Wt(N==="vertical"?"ew-resize":"ns-resize"),Be($);return}const ge=wt($);if(!ge)return;if(H(null),De(null),vt(!1),i.pickupFillet&&Se&&e&&!$.shiftKey&&!$.ctrlKey&&!$.metaKey){const yt=((bt=i.pickupFilletCellModes)==null?void 0:bt[ge.id])??"none",cn=Wd[(Wd.indexOf(yt)+1)%Wd.length];e("pickupFilletCellModes",{...i.pickupFilletCellModes??{},[ge.id]:cn}),y([ge.id]);return}$.currentTarget.focus(),$.currentTarget.setPointerCapture($.pointerId);const mt=q($);f.current=mt,d.current=ge.id,y(yg({currentSelection:_,targetCellId:ge.id,shiftKey:$.shiftKey,ctrlKey:$.ctrlKey,dragStartCellId:""}))},jn=$=>{if(M.current){$.buttons===1&&Be($);return}if(x.current){$.buttons===1&&Ge($);return}const U=Te($),ge=!U&&Pe($),mt=!U&&!ge?wt($):void 0;if(Q((U==null?void 0:U.key)??""),kn((mt==null?void 0:mt.id)??""),ze(ge),Wt(U?U.axis==="vertical"?"ew-resize":"ns-resize":ge?N==="vertical"?"ew-resize":"ns-resize":"crosshair"),$.buttons!==1||!d.current)return;const bt=f.current,yt=q($);if(bt&&Math.hypot(yt.x-bt.x,yt.y-bt.y)>6){const Ut={start:bt,end:yt},gt=Wy(o.current,Ut);xe(Ut),gt.length>0&&y(gt);return}const cn=wt($);cn&&y(yg({currentSelection:_,targetCellId:cn.id,shiftKey:!1,dragStartCellId:d.current}))},Ln=()=>{const $=m.current,U=h.current;x.current&&$&&U&&Bi(U)!==Bi($)&&(re(ge=>_g(ge,$)),t($)),x.current=null,h.current=null,m.current=null,g.current=!1,M.current=!1,ue(""),De(null),xe(null),ze(!1),kn(""),f.current=null,d.current=""};return w.jsxs("section",{className:"layout-editor","aria-label":"レイアウト編集",children:[w.jsxs(Pa,{title:"キャンバス",className:"layout-canvas-section",hideTitle:!0,children:[w.jsxs("div",{className:"layout-canvas-controls","aria-label":"キャンバス表示",children:[w.jsxs("button",{type:"button","aria-pressed":ht,title:"セル寸法ラベルを表示",onClick:()=>_t($=>!$),children:[w.jsx(X_,{size:14,"aria-hidden":"true"}),"寸法"]}),w.jsxs("button",{type:"button","aria-pressed":Qe,title:"壁位置ラベルを表示",onClick:()=>Vt($=>!$),children:[w.jsx(W_,{size:14,"aria-hidden":"true"}),"壁位置"]}),w.jsxs("button",{type:"button","aria-pressed":Xe,title:"選択中のセルと壁だけラベル表示",onClick:()=>F($=>!$),children:[w.jsx(ug,{size:14,"aria-hidden":"true"}),"選択のみ"]})]}),i.pickupFillet?w.jsxs("div",{className:"layout-fillet-legend","aria-label":"フィレット凡例",children:[w.jsxs("span",{children:[w.jsx("i",{className:"legend-dot integrated","aria-hidden":"true"}),"本体一体"]}),w.jsxs("span",{children:[w.jsx("i",{className:"legend-dot removable","aria-hidden":"true"}),"取り外し"]}),w.jsx("span",{className:"legend-mode",children:Se?"フィレット編集モード":"通常編集モード"})]}):null,w.jsx("div",{className:"layout-canvas-wrap",children:w.jsx("canvas",{ref:r,"aria-label":"セルレイアウト",title:"セルをクリックまたはドラッグして選択",className:"layout-canvas",tabIndex:0,style:{cursor:Et},onKeyDown:nt,onPointerDown:jt,onPointerMove:jn,onPointerUp:Ln,onPointerLeave:Ln,onDoubleClick:on})})]}),w.jsx(Pa,{title:"分割",children:w.jsxs("div",{className:"layout-split-controls","aria-label":"選択セルの分割",children:[w.jsxs("select",{"aria-label":"分割数",title:"分割数を選択",value:C,onChange:$=>k(Number($.target.value)),children:[w.jsx("option",{value:2,children:"2分割"}),w.jsx("option",{value:3,children:"3分割"}),w.jsx("option",{value:4,children:"4分割"})]}),w.jsxs("button",{type:"button","aria-pressed":N==="vertical",title:"選択セルを縦方向に分割",onPointerEnter:()=>R("vertical"),onFocus:()=>R("vertical"),onClick:()=>it("vertical"),children:[w.jsx(dg,{size:15,"aria-hidden":"true"}),"縦に分割"]}),w.jsxs("button",{type:"button","aria-pressed":N==="horizontal",title:"選択セルを横方向に分割",onPointerEnter:()=>R("horizontal"),onFocus:()=>R("horizontal"),onClick:()=>it("horizontal"),children:[w.jsx(dg,{size:15,"aria-hidden":"true"}),"横に分割"]}),C===2?w.jsxs("label",{className:ke?"split-position-control invalid":"split-position-control",children:[w.jsx("span",{children:"分割位置"}),w.jsx("input",{type:"number",min:kt,max:J,step:1,value:me,"aria-invalid":ke,disabled:le.length!==1,onChange:$=>{const U=$.currentTarget.value,ge=Number(U);L(U),hg(ge,at)&&I(fg(ge,at))},onBlur:$=>{const U=Number($.currentTarget.value);Number.isFinite(U)&&at>0&&I(fg(U,at)),L(null)},onKeyDown:$=>{$.key==="Enter"?$.currentTarget.blur():$.key==="Escape"&&(L(null),$.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}):null,C===2&&ke?w.jsxs("p",{className:"split-position-warning",role:"alert",children:["有効範囲 ",In(kt)," 〜"," ",In(J)]}):null]})}),w.jsxs(Pa,{title:"選択セル",children:[w.jsx("p",{className:te?"layout-summary wall":"layout-summary",children:te?`選択壁 ${Hr} / ${In(Ue)}`:le.length>=2?`選択セル ${le.length}件 / ${zn?"結合できます":"矩形範囲を選択してください"}`:`選択セル ${Ze} x ${Ne} mm / ${S.length} セル`}),w.jsxs("div",{className:"layout-status-chips","aria-label":"レイアウト編集の状態",children:[_r.map($=>w.jsx("span",{children:$},$)),i.pickupFillet&&le.length===1?w.jsxs("span",{children:["フィレット: ",Eg[Zn]]}):null]}),i.pickupFillet&&e?w.jsxs("div",{className:"layout-fillet-controls","aria-label":"フィレット編集",children:[w.jsxs("div",{className:"segmented layout-fillet-edit-mode",role:"group",children:[w.jsx("button",{type:"button","aria-pressed":!Se,className:Se?"":"selected",onClick:()=>Me(!1),children:"通常編集"}),w.jsx("button",{type:"button","aria-pressed":Se,className:Se?"selected":"",onClick:()=>Me(!0),children:"フィレット編集"})]}),w.jsxs("div",{className:"layout-fillet-mode-buttons",role:"group","aria-label":"フィレット方式",children:[w.jsx("button",{type:"button","aria-pressed":Zn==="none",className:Zn==="none"?"selected":"",onClick:()=>Pn("none"),disabled:le.length===0,children:"なし"}),w.jsx("button",{type:"button","aria-pressed":Zn==="integrated",className:Zn==="integrated"?"selected":"",onClick:()=>Pn("integrated"),disabled:le.length===0,children:"本体一体"}),w.jsx("button",{type:"button","aria-pressed":Zn==="removable",className:Zn==="removable"?"selected":"",onClick:()=>Pn("removable"),disabled:le.length===0,children:"取り外し"})]})]}):null,w.jsxs("div",{className:"layout-actions","aria-label":"選択セルの操作",children:[w.jsxs("button",{type:"button",title:"選択した隣接セルを結合",onClick:lt,disabled:!zn,children:[w.jsx(G_,{size:15,"aria-hidden":"true"}),"結合"]}),w.jsxs("button",{type:"button",title:"選択セルの幅を均等化",onClick:()=>qe("vertical"),disabled:!Li,children:[w.jsx(Gd,{size:15,"aria-hidden":"true"}),"幅を均等"]}),w.jsxs("button",{type:"button",title:"選択セルの奥行を均等化",onClick:()=>qe("horizontal"),disabled:!Di,children:[w.jsx(Gd,{size:15,"aria-hidden":"true"}),"奥行を均等"]})]}),le.length===1&&fi.length>0?w.jsx("div",{className:"merge-candidate-pad","aria-label":"結合候補を選択",children:[{direction:"left",label:"左のセルを結合候補に選択",icon:F_},{direction:"up",label:"上のセルを結合候補に選択",icon:k_},{direction:"right",label:"右のセルを結合候補に選択",icon:U_},{direction:"down",label:"下のセルを結合候補に選択",icon:I_}].map(({direction:$,label:U,icon:ge})=>{const mt=fi.some(bt=>bt.direction===$);return w.jsx("button",{type:"button","aria-label":U,title:U,disabled:!mt,onClick:()=>ft($),children:w.jsx(ge,{size:15,"aria-hidden":"true"})},$)})}):null,en?w.jsxs("div",{className:"layout-selection-inspector","aria-label":"選択範囲の情報",children:[w.jsxs("div",{className:"layout-selection-metrics",children:[w.jsxs("span",{children:["幅 ",w.jsx("strong",{children:In(en.widthMm)})]}),w.jsxs("span",{children:["奥行 ",w.jsx("strong",{children:In(en.depthMm)})]}),w.jsxs("span",{children:["セル ",w.jsxs("strong",{children:[en.cellCount,"件"]})]})]}),w.jsxs("div",{className:en.isRectangle?"layout-selection-status ok":"layout-selection-status warning",children:[w.jsx("span",{children:en.isRectangle?"矩形範囲です":"矩形範囲ではありません"}),w.jsx("span",{children:zn?"結合可能":"結合不可"}),w.jsx("span",{children:Li?"幅均等化可能":"幅均等化不可"}),w.jsx("span",{children:Di?"奥行均等化可能":"奥行均等化不可"})]})]}):null,te?w.jsx("p",{className:"layout-selection-note",children:"壁を選択中です。壁位置と中央戻しは下の壁編集で操作します。"}):w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"layout-dimension-controls","aria-label":"選択セルの寸法",children:[w.jsxs("label",{className:tt?"invalid":void 0,children:[w.jsx("span",{children:"幅"}),w.jsx("input",{type:"number",min:Math.round(i.width*.08),max:i.width,step:1,value:Ve,"aria-label":"幅","aria-invalid":tt,disabled:le.length!==1,onChange:$=>{const U=$.currentTarget.value,ge=Number(U);W(U),ba(S,ce.id,"width",ge,i.width,i.depth)&&(de("width",ge),W(null))},onBlur:()=>W(null),onKeyDown:$=>{$.key==="Enter"?$.currentTarget.blur():$.key==="Escape"&&($.preventDefault(),W(null),$.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}),w.jsxs("label",{className:rt?"invalid":void 0,children:[w.jsx("span",{children:"奥行"}),w.jsx("input",{type:"number",min:Math.round(i.depth*.08),max:i.depth,step:1,value:pt,"aria-label":"奥行","aria-invalid":rt,disabled:le.length!==1,onChange:$=>{const U=$.currentTarget.value,ge=Number(U);O(U),ba(S,ce.id,"height",ge,i.width,i.depth)&&(de("height",ge),O(null))},onBlur:()=>O(null),onKeyDown:$=>{$.key==="Enter"?$.currentTarget.blur():$.key==="Escape"&&($.preventDefault(),O(null),$.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]})]}),je?w.jsx("p",{className:"layout-input-warning",children:"隣接セルの最小サイズを下回るため、この寸法は適用されません。"}):null]})]}),te?w.jsxs(Pa,{title:"壁編集",children:[w.jsxs("div",{className:"layout-wall-focus","aria-label":"選択中の壁",children:[w.jsx("strong",{children:Hr}),w.jsxs("span",{children:["現在 ",In(Ue)]}),w.jsxs("span",{children:["連動壁 ",P,"本"]})]}),w.jsxs("div",{className:"layout-wall-tools",children:[w.jsxs("label",{className:gn?"wall-position-control invalid":"wall-position-control",children:[w.jsx("span",{children:"壁位置"}),w.jsx("input",{type:"number",min:0,max:te.axis==="vertical"?i.width:i.depth,step:1,value:dt,"aria-invalid":gn,onChange:$=>{const U=$.currentTarget.value,ge=Number(U);V(U),pg(S,te,ge,i.width,i.depth)&&Tt(ge)},onBlur:$=>{Tt(Number($.currentTarget.value)),V(null)},onKeyDown:$=>{$.key==="Enter"?$.currentTarget.blur():$.key==="Escape"&&(V(null),$.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}),w.jsxs("button",{type:"button","aria-label":"選択中の壁を中央に戻す",title:"選択中の壁を中央に戻す",onClick:bn,disabled:!Ys,children:[w.jsx(Gd,{size:15,"aria-hidden":"true"}),"中央"]}),w.jsxs("button",{type:"button","aria-label":"セル選択に戻る",title:"壁選択を解除してセル選択に戻る",onClick:Ei,children:[w.jsx(ug,{size:15,"aria-hidden":"true"}),"戻る"]}),w.jsx("span",{className:"layout-snap-chip",children:"スナップ 5 mm"})]}),qn?w.jsxs("div",{className:"layout-wall-status","aria-label":"壁移動の状態",children:[w.jsxs("span",{children:["移動範囲 ",In(qn.minMm)," -"," ",In(qn.maxMm)]}),w.jsxs("span",{children:["中央 ",In(qn.centerMm)]})]}):null]}):null,w.jsxs(Pa,{title:"履歴とリセット",children:[w.jsxs("div",{className:"layout-history-actions","aria-label":"履歴とリセット操作",children:[w.jsxs("button",{type:"button",title:"ひとつ前のレイアウトに戻す",onClick:Lt,disabled:!A.canUndo,children:[w.jsx(K_,{size:15,"aria-hidden":"true"}),"戻す"]}),w.jsxs("button",{type:"button",title:"取り消した操作をやり直す",onClick:Zt,disabled:!A.canRedo,children:[w.jsx(j_,{size:15,"aria-hidden":"true"}),"やり直す"]}),w.jsxs("button",{type:"button",title:"レイアウトを初期状態に戻す",onClick:Ft,children:[w.jsx(Vx,{size:15,"aria-hidden":"true"}),"リセット"]})]}),w.jsxs("div",{className:St.ok?"layout-validation":"layout-validation warning",role:St.ok?"status":"alert",children:[w.jsx("strong",{children:St.ok?"レイアウト問題なし":"レイアウト要確認"}),w.jsx("span",{children:St.ok?"セルの重なりや隙間は検出されていません。":St.issues.map($=>$.message).join(" ")})]}),Gt.enabled?w.jsxs("div",{className:Gt.hasInterference?"layout-validation warning":"layout-validation",role:Gt.hasInterference?"alert":"status",children:[w.jsx("strong",{children:Gt.hasInterference?"スタック干渉あり":"スタック干渉なし"}),w.jsx("span",{children:Gt.hasInterference?`スタック脚が干渉する壁をキャンバス上で強調しています。推奨逃げ幅 ${Gt.recommendedReliefGapMm} mm。`:"スタック脚と仕切りの干渉は検出されていません。"})]}):null]})]})}const eM=[{key:"width",label:"幅",min:40,max:240,step:1,unit:"mm"},{key:"depth",label:"奥行",min:40,max:240,step:1,unit:"mm"},{key:"height",label:"高さ",min:8,max:120,step:1,unit:"mm"}],tM=[{key:"floorThickness",label:"床厚",min:1.2,max:8,step:.2,unit:"mm"},{key:"cornerRadius",label:"角丸",min:0,max:18,step:1,unit:"mm"}],nM=[{key:"wallThickness",label:"厚さ",min:1.2,max:8,step:.2,unit:"mm"}];function Ls({title:i,defaultOpen:e=!0,bodyClassName:t="",children:r}){return w.jsxs("details",{className:"panel-section",open:e,children:[w.jsx("summary",{children:i}),w.jsx("div",{className:`panel-section-body ${t}`.trim(),children:r})]})}function iM({activeStep:i,settings:e,onChange:t,onLayoutChange:r,onResetLayout:o}){const l=c=>c.map(d=>{const f=e[d.key],h=m=>{Number.isFinite(m)&&t(d.key,m)};return w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:d.label}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${d.label}の数値`,className:"number-control",type:"number",min:d.min,max:d.max,step:d.step,value:f,onChange:m=>h(Number(m.target.value))}),w.jsx("span",{className:"range-unit",children:d.unit})]})]}),w.jsx("input",{type:"range",min:d.min,max:d.max,step:d.step,value:f,onChange:m=>h(Number(m.target.value))})]},d.key)});return w.jsxs("div",{className:"control-grid",children:[i==="size"?w.jsx(Ls,{title:"主要寸法",bodyClassName:"panel-section-body-single",children:l(eM)}):null,i==="options"?w.jsx(Ls,{title:"外壁・セル壁の厚さ",children:l(nM)}):null,i==="options"?w.jsx(Ls,{title:"詳細設定",defaultOpen:!1,bodyClassName:"panel-section-body-single",children:l(tM)}):null,i==="options"?w.jsx(Ls,{title:"フタ",defaultOpen:!1,children:w.jsx(Py,{settings:e,onChange:t})}):null,i==="options"?w.jsx(Ls,{title:"スタック脚",defaultOpen:!1,children:w.jsx(Ly,{settings:e,onChange:t})}):null,i==="options"?w.jsx(Ls,{title:"すくい上げフィレット",defaultOpen:!1,children:w.jsx(By,{settings:e,onChange:t})}):null,i==="grid"?w.jsx(Ls,{title:"レイアウト編集",children:w.jsx(Jy,{settings:e,onSettingsChange:t,onLayoutChange:r,onResetLayout:o})}):null]})}const lc={showModelShadows:!1},Kx=1.75;function rM(i,e=Kx){const t=e/2,r=Math.PI*t**2;return Math.round(i/r)}function Ah(i){return i.replace(/\.stl$/i,"-print-report.json")}function wg(i,e){if(!e.ok)return`レイアウトに問題があります。${e.issues.map(r=>r.message).join(" ")}`;const t=Ya(i);return t.hasInterference?`スタック干渉があります。レイアウトで強調表示された壁を調整するか、スタック脚を無効にしてからSTL出力してください。推奨逃げ幅 ${t.recommendedReliefGapMm} mm。`:""}function Qx(i,e,t=Kx){const o={app:"Hako-Forge",version:1,units:"mm",printReadiness:e.checks.some(l=>l.level==="warning")||e.stats.nonManifoldEdgeCount>0||e.stats.topFaceDownwardCount>0?"check":"ready",settings:rn(i),mesh:e.stats,stackingPreview:nu(i),stackingInterference:Ya(i),material:{filamentDiameterMm:t,estimatedFilamentLengthMm:rM(e.stats.estimatedVolumeMm3,t),estimatedVolumeMm3:Math.round(e.stats.estimatedVolumeMm3)},checks:e.checks};return`${JSON.stringify(o,null,2)}
`}function sM({error:i,fileName:e,checks:t,layoutValidation:r,stats:o,settings:l,onDisableStacking:c,onDownload:d,onDownloadAll:f,onDownloadPickupFillets:h,onLoadProject:m,onOpenLayout:x,onSaveProject:g,onSaveReport:M}){const S=t.some(D=>D.level==="warning"),E=Ey(l),_=nu(l),y=Ya(l),N=e||za(l),R=E?wh(l):"取り外し式フィレット未選択",C=Th(l),k=Ah(N);return w.jsxs("div",{className:"export-panel",children:[w.jsxs("dl",{className:"export-stats",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"ファイル"}),w.jsx("dd",{children:e})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"モデル"}),w.jsxs("dd",{children:[l.width," x ",l.depth," x ",l.height," mm"]})]}),_.enabled?w.jsxs("div",{children:[w.jsxs("dt",{children:[_.stackCount,"段重ねの高さ"]}),w.jsxs("dd",{children:[_.stackedHeightMm," mm"]})]}):null,w.jsxs("div",{children:[w.jsx("dt",{children:"メッシュ"}),w.jsxs("dd",{children:[o.triangleCount," 三角形"]})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"体積"}),w.jsxs("dd",{children:[Math.round(o.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),w.jsxs("div",{className:S?"print-check warning":"print-check",children:[w.jsx("strong",{children:S?"印刷設定を確認":"印刷チェック問題なし"}),w.jsx("span",{children:t.map(D=>D.message).join(" ")})]}),w.jsxs("div",{className:r.ok?"layout-validation export-validation":"layout-validation export-validation warning",children:[w.jsx("strong",{children:r.ok?"レイアウト問題なし":"レイアウト要確認"}),w.jsx("span",{children:r.ok?"STL出力できるレイアウトです。":r.issues.map(D=>D.message).join(" ")})]}),y.enabled?w.jsxs("div",{className:y.hasInterference?"layout-validation export-validation warning":"layout-validation export-validation",children:[w.jsx("strong",{children:y.hasInterference?"スタック干渉あり":"スタック干渉なし"}),w.jsxs("span",{children:[y.message,y.hasInterference?` 推奨逃げ幅 ${y.recommendedReliefGapMm} mm。`:""]}),y.hasInterference?w.jsxs("div",{className:"inline-panel-actions",children:[w.jsxs("button",{className:"inline-panel-action",type:"button",onClick:x,children:[w.jsx(Hx,{size:15,"aria-hidden":"true"}),"レイアウトで確認"]}),w.jsxs("button",{className:"inline-panel-action",type:"button",onClick:c,children:[w.jsx(O_,{size:15,"aria-hidden":"true"}),"スタック脚を無効化"]})]}):null]}):null,w.jsxs("dl",{className:"export-file-list","aria-label":"出力ファイル",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"本体STL"}),w.jsx("dd",{children:N})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"フィレットSTL"}),w.jsx("dd",{children:R})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"プロジェクト"}),w.jsx("dd",{children:C})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"レポート"}),w.jsx("dd",{children:k})]})]}),i?w.jsx("p",{className:"export-error",children:i}):null,w.jsxs("div",{className:"export-actions",children:[w.jsxs("button",{className:"primary-download",type:"button",onClick:d,children:[w.jsx(Oa,{size:18,"aria-hidden":"true"}),"本体STL"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:f,children:[w.jsx(Oa,{size:17,"aria-hidden":"true"}),"まとめて出力"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:g,children:[w.jsx($_,{size:17,"aria-hidden":"true"}),"プロジェクト保存"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:h,disabled:!E,title:E?"取り外し式フィレットだけを別パーツSTLとして出力":"取り外し式フィレットを選択すると有効になります",children:[w.jsx(Oa,{size:17,"aria-hidden":"true"}),"フィレットのみSTL"]}),w.jsx("span",{className:"export-action-note",children:"まとめて出力では本体STL、取り外し式フィレットSTL、プロジェクト、印刷レポートを保存します。"}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:M,children:[w.jsx(H_,{size:17,"aria-hidden":"true"}),"レポート出力"]}),w.jsxs("label",{className:"secondary-action file-action",children:[w.jsx(V_,{size:17,"aria-hidden":"true"}),"プロジェクト読込",w.jsx("input",{accept:"application/json,.json",type:"file",onChange:D=>{var j;const I=(j=D.target.files)==null?void 0:j[0];I&&m(I),D.target.value=""}})]})]})]})}function oM({checks:i,stats:e}){const t=i.some(o=>o.level==="warning")||e.nonManifoldEdgeCount>0||e.topFaceDownwardCount>0,r=t?q_:z_;return w.jsxs("section",{className:"quality-panel","aria-label":"印刷品質",children:[w.jsxs("div",{className:t?"quality-status warning":"quality-status",children:[w.jsx(r,{size:18,"aria-hidden":"true"}),w.jsxs("div",{children:[w.jsx("strong",{children:t?"要確認":"出力可能"}),w.jsx("span",{children:t?"印刷品質を確認してください":"メッシュは印刷可能です"})]})]}),w.jsxs("dl",{className:"quality-grid",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"非多様体エッジ"}),w.jsx("dd",{children:e.nonManifoldEdgeCount})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"面の向き"}),w.jsx("dd",{children:e.topFaceDownwardCount})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"三角形数"}),w.jsx("dd",{children:e.triangleCount.toLocaleString()})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"推定体積"}),w.jsxs("dd",{children:[Math.round(e.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),w.jsx("ul",{className:"quality-checks",children:i.map(o=>w.jsxs("li",{className:o.level,children:[w.jsx("span",{children:o.label}),w.jsx("strong",{children:o.message})]},o.id))})]})}const aM=[{key:"size",label:"サイズ",icon:Bx},{key:"grid",label:"レイアウト",icon:Hx},{key:"options",label:"オプション",icon:Z_},{key:"download",label:"出力",icon:Oa}];function lM({activeStep:i,onChange:e}){return w.jsx("nav",{className:"step-nav","aria-label":"作成手順",children:aM.map((t,r)=>{const o=t.icon,l=i===t.key;return w.jsx("div",{className:"step-wrap",children:w.jsxs("button",{className:l?"step-button step-button-compact active":"step-button step-button-compact",type:"button",onClick:()=>e(t.key),"aria-pressed":l,children:[w.jsx(o,{size:18,"aria-hidden":"true"}),w.jsx("span",{children:t.label})]})},t.key)})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="171",cM=0,Tg=1,uM=2,Jx=1,dM=2,Fr=3,gs=0,Mi=1,Ur=2,ps=0,Oo=1,Cg=2,Ag=3,Rg=4,fM=5,Hs=100,hM=101,pM=102,mM=103,gM=104,xM=200,vM=201,_M=202,yM=203,Cf=204,Af=205,MM=206,SM=207,EM=208,wM=209,TM=210,CM=211,AM=212,RM=213,bM=214,Rf=0,bf=1,Pf=2,Vo=3,Lf=4,Df=5,Nf=6,If=7,e0=0,PM=1,LM=2,ms=0,DM=1,NM=2,IM=3,FM=4,UM=5,kM=6,OM=7,t0=300,Go=301,Wo=302,Ff=303,Uf=304,iu=306,kf=1e3,Gs=1001,Of=1002,ar=1003,zM=1004,cc=1005,xr=1006,jd=1007,Ws=1008,Br=1009,n0=1010,i0=1011,Va=1012,bh=1013,js=1014,kr=1015,Za=1016,Ph=1017,Lh=1018,jo=1020,r0=35902,s0=1021,o0=1022,or=1023,a0=1024,l0=1025,zo=1026,Xo=1027,c0=1028,Dh=1029,u0=1030,Nh=1031,Ih=1033,kc=33776,Oc=33777,zc=33778,Bc=33779,zf=35840,Bf=35841,Hf=35842,Vf=35843,Gf=36196,Wf=37492,jf=37496,Xf=37808,$f=37809,Yf=37810,Zf=37811,qf=37812,Kf=37813,Qf=37814,Jf=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,Hc=36492,oh=36494,ah=36495,d0=36283,lh=36284,ch=36285,uh=36286,BM=3200,HM=3201,f0=0,VM=1,ds="",Gi="srgb",$o="srgb-linear",jc="linear",$t="srgb",yo=7680,bg=519,GM=512,WM=513,jM=514,h0=515,XM=516,$M=517,YM=518,ZM=519,Pg=35044,Lg="300 es",Or=2e3,Xc=2001;class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dg=1234567;const Bo=Math.PI/180,Ga=180/Math.PI;function Qo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Fh(i,e){return(i%e+e)%e}function qM(i,e,t,r,o){return r+(i-e)*(o-r)/(t-e)}function KM(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function QM(i,e,t,r){return Ba(i,e,1-Math.exp(-t*r))}function JM(i,e=1){return e-Math.abs(Fh(i,e*2)-e)}function eS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function iS(i,e){return i+Math.random()*(e-i)}function rS(i){return i*(.5-Math.random())}function sS(i){i!==void 0&&(Dg=i);let e=Dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oS(i){return i*Bo}function aS(i){return i*Ga}function lS(i){return(i&i-1)===0&&i!==0}function cS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dS(i,e,t,r,o){const l=Math.cos,c=Math.sin,d=l(t/2),f=c(t/2),h=l((e+r)/2),m=c((e+r)/2),x=l((e-r)/2),g=c((e-r)/2),M=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":i.set(d*m,f*x,f*g,d*h);break;case"YZY":i.set(f*g,d*m,f*x,d*h);break;case"ZXZ":i.set(f*x,f*g,d*m,d*h);break;case"XZX":i.set(d*m,f*S,f*M,d*h);break;case"YXY":i.set(f*M,d*m,f*S,d*h);break;case"ZYZ":i.set(f*S,f*M,d*m,d*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Io(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fS={DEG2RAD:Bo,RAD2DEG:Ga,generateUUID:Qo,clamp:Pt,euclideanModulo:Fh,mapLinear:qM,inverseLerp:KM,lerp:Ba,damp:QM,pingpong:JM,smoothstep:eS,smootherstep:tS,randInt:nS,randFloat:iS,randFloatSpread:rS,seededRandom:sS,degToRad:oS,radToDeg:aS,isPowerOfTwo:lS,ceilPowerOfTwo:cS,floorPowerOfTwo:uS,setQuaternionFromProperEuler:dS,normalize:ci,denormalize:Io};class Ht{constructor(e=0,t=0){Ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,r,o,l,c,d,f,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,h)}set(e,t,r,o,l,c,d,f,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],h=r[1],m=r[4],x=r[7],g=r[2],M=r[5],S=r[8],E=o[0],_=o[3],y=o[6],N=o[1],R=o[4],C=o[7],k=o[2],D=o[5],I=o[8];return l[0]=c*E+d*N+f*k,l[3]=c*_+d*R+f*D,l[6]=c*y+d*C+f*I,l[1]=h*E+m*N+x*k,l[4]=h*_+m*R+x*D,l[7]=h*y+m*C+x*I,l[2]=g*E+M*N+S*k,l[5]=g*_+M*R+S*D,l[8]=g*y+M*C+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*d*h-r*l*m+r*d*f+o*l*h-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],x=m*c-d*h,g=d*f-m*l,M=h*l-c*f,S=t*x+r*g+o*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(o*h-m*r)*E,e[2]=(d*r-o*c)*E,e[3]=g*E,e[4]=(m*t-o*f)*E,e[5]=(o*l-d*t)*E,e[6]=M*E,e[7]=(r*f-h*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,d){const f=Math.cos(l),h=Math.sin(l);return this.set(r*f,r*h,-r*(f*c+h*d)+c+e,-o*h,o*f,-o*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Xd.makeScale(e,t)),this}rotate(e){return this.premultiply(Xd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xd=new xt;function p0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $c(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hS(){const i=$c("canvas");return i.style.display="block",i}const Ng={};function Fo(i){i in Ng||(Ng[i]=!0,console.warn(i))}function pS(i,e,t){return new Promise(function(r,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function mS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ig=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const i={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===$t&&(o.r=zr(o.r),o.g=zr(o.g),o.b=zr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===$t&&(o.r=Ho(o.r),o.g=Ho(o.g),o.b=Ho(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ds?jc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[$o]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:Ig,fromXYZ:Fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gi},outputColorSpaceConfig:{drawingBufferColorSpace:Gi}},[Gi]:{primaries:e,whitePoint:r,transfer:$t,toXYZ:Ig,fromXYZ:Fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gi}}}),i}const Bt=xS();function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mo;class vS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mo===void 0&&(Mo=$c("canvas")),Mo.width=e.width,Mo.height=e.height;const r=Mo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Mo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$c("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=zr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(zr(t[r]/255)*255):t[r]=zr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push($d(o[c].image)):l.push($d(o[c]))}else l=$d(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function $d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;class Si extends Ko{constructor(e=Si.DEFAULT_IMAGE,t=Si.DEFAULT_MAPPING,r=Gs,o=Gs,l=xr,c=Ws,d=or,f=Br,h=Si.DEFAULT_ANISOTROPY,m=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Qo(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kf:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kf:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=t0;Si.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,t=0,r=0,o=1){vn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,h=f[0],m=f[4],x=f[8],g=f[1],M=f[5],S=f[9],E=f[2],_=f[6],y=f[10];if(Math.abs(m-g)<.01&&Math.abs(x-E)<.01&&Math.abs(S-_)<.01){if(Math.abs(m+g)<.1&&Math.abs(x+E)<.1&&Math.abs(S+_)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,C=(M+1)/2,k=(y+1)/2,D=(m+g)/4,I=(x+E)/4,j=(S+_)/4;return R>C&&R>k?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=D/r,l=I/r):C>k?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=D/o,l=j/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=I/l,o=j/l),this.set(r,o,l,t),this}let N=Math.sqrt((_-S)*(_-S)+(x-E)*(x-E)+(g-m)*(g-m));return Math.abs(N)<.001&&(N=1),this.x=(_-S)/N,this.y=(x-E)/N,this.z=(g-m)/N,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Ko{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Si(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends MS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class g0 extends Si{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ar,this.minFilter=ar,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends Si{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ar,this.minFilter=ar,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,d){let f=r[o+0],h=r[o+1],m=r[o+2],x=r[o+3];const g=l[c+0],M=l[c+1],S=l[c+2],E=l[c+3];if(d===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=x;return}if(d===1){e[t+0]=g,e[t+1]=M,e[t+2]=S,e[t+3]=E;return}if(x!==E||f!==g||h!==M||m!==S){let _=1-d;const y=f*g+h*M+m*S+x*E,N=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const k=Math.sqrt(R),D=Math.atan2(k,y*N);_=Math.sin(_*D)/k,d=Math.sin(d*D)/k}const C=d*N;if(f=f*_+g*C,h=h*_+M*C,m=m*_+S*C,x=x*_+E*C,_===1-d){const k=1/Math.sqrt(f*f+h*h+m*m+x*x);f*=k,h*=k,m*=k,x*=k}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const d=r[o],f=r[o+1],h=r[o+2],m=r[o+3],x=l[c],g=l[c+1],M=l[c+2],S=l[c+3];return e[t]=d*S+m*x+f*M-h*g,e[t+1]=f*S+m*g+h*x-d*M,e[t+2]=h*S+m*M+d*g-f*x,e[t+3]=m*S-d*x-f*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(r/2),m=d(o/2),x=d(l/2),g=f(r/2),M=f(o/2),S=f(l/2);switch(c){case"XYZ":this._x=g*m*x+h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x-g*M*S;break;case"YXZ":this._x=g*m*x+h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x+g*M*S;break;case"ZXY":this._x=g*m*x-h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x-g*M*S;break;case"ZYX":this._x=g*m*x-h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x+g*M*S;break;case"YZX":this._x=g*m*x+h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x-g*M*S;break;case"XZY":this._x=g*m*x-h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x+g*M*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],h=t[2],m=t[6],x=t[10],g=r+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(m-f)*M,this._y=(l-h)*M,this._z=(c-o)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(m-f)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(l+h)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(l-h)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(f+m)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(c-o)/M,this._x=(l+h)/M,this._y=(f+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,h=t._z,m=t._w;return this._x=r*m+c*d+o*h-l*f,this._y=o*m+c*f+l*d-r*h,this._z=l*m+c*h+r*f-o*d,this._w=c*m-r*d-o*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,d),x=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=c*x+this._w*g,this._x=r*x+this._x*g,this._y=o*x+this._y*g,this._z=l*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*o-d*r),m=2*(d*t-l*o),x=2*(l*r-c*t);return this.x=t+f*h+c*x-d*m,this.y=r+f*m+d*h-l*x,this.z=o+f*x+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-r*f,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yd=new ae,Ug=new qa;class Ka{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),dc.subVectors(this.max,La),So.subVectors(e.a,La),Eo.subVectors(e.b,La),wo.subVectors(e.c,La),ss.subVectors(Eo,So),os.subVectors(wo,Eo),Ds.subVectors(So,wo);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-Ds.z,Ds.y,ss.z,0,-ss.x,os.z,0,-os.x,Ds.z,0,-Ds.x,-ss.y,ss.x,0,-os.y,os.x,0,-Ds.y,Ds.x,0];return!Zd(t,So,Eo,wo,dc)||(t=[1,0,0,0,1,0,0,0,1],!Zd(t,So,Eo,wo,dc))?!1:(fc.crossVectors(ss,os),t=[fc.x,fc.y,fc.z],Zd(t,So,Eo,wo,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],nr=new ae,uc=new Ka,So=new ae,Eo=new ae,wo=new ae,ss=new ae,os=new ae,Ds=new ae,La=new ae,dc=new ae,fc=new ae,Ns=new ae;function Zd(i,e,t,r,o){for(let l=0,c=i.length-3;l<=c;l+=3){Ns.fromArray(i,l);const d=o.x*Math.abs(Ns.x)+o.y*Math.abs(Ns.y)+o.z*Math.abs(Ns.z),f=e.dot(Ns),h=t.dot(Ns),m=r.dot(Ns);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>d)return!1}return!0}const ES=new Ka,Da=new ae,qd=new ae;class ru{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ES.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(qd)),this.expandByPoint(Da.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new ae,Kd=new ae,hc=new ae,as=new ae,Qd=new ae,pc=new ae,Jd=new ae;class x0{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Kd.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Kd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(hc),d=as.dot(this.direction),f=-as.dot(hc),h=as.lengthSq(),m=Math.abs(1-c*c);let x,g,M,S;if(m>0)if(x=c*f-d,g=c*d-f,S=l*m,x>=0)if(g>=-S)if(g<=S){const E=1/m;x*=E,g*=E,M=x*(x+c*g+2*d)+g*(c*x+g+2*f)+h}else g=l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*f)+h;else g=-l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*f)+h;else g<=-S?(x=Math.max(0,-(-c*l+d)),g=x>0?-l:Math.min(Math.max(-l,-f),l),M=-x*x+g*(g+2*f)+h):g<=S?(x=0,g=Math.min(Math.max(-l,-f),l),M=g*(g+2*f)+h):(x=Math.max(0,-(c*l+d)),g=x>0?l:Math.min(Math.max(-l,-f),l),M=-x*x+g*(g+2*f)+h);else g=c>0?-l:l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Kd).addScaledVector(hc,g),M}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const r=Lr.dot(this.direction),o=Lr.dot(Lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,d,f;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(d=(e.min.z-g.z)*x,f=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,f=(e.min.z-g.z)*x),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,r,o,l){Qd.subVectors(t,e),pc.subVectors(r,e),Jd.crossVectors(Qd,pc);let c=this.direction.dot(Jd),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;as.subVectors(this.origin,e);const f=d*this.direction.dot(pc.crossVectors(as,pc));if(f<0)return null;const h=d*this.direction.dot(Qd.cross(as));if(h<0||f+h>c)return null;const m=-d*as.dot(Jd);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,t,r,o,l,c,d,f,h,m,x,g,M,S,E,_){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,h,m,x,g,M,S,E,_)}set(e,t,r,o,l,c,d,f,h,m,x,g,M,S,E,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=d,y[13]=f,y[2]=h,y[6]=m,y[10]=x,y[14]=g,y[3]=M,y[7]=S,y[11]=E,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/To.setFromMatrixColumn(e,0).length(),l=1/To.setFromMatrixColumn(e,1).length(),c=1/To.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(o),h=Math.sin(o),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*m,M=c*x,S=d*m,E=d*x;t[0]=f*m,t[4]=-f*x,t[8]=h,t[1]=M+S*h,t[5]=g-E*h,t[9]=-d*f,t[2]=E-g*h,t[6]=S+M*h,t[10]=c*f}else if(e.order==="YXZ"){const g=f*m,M=f*x,S=h*m,E=h*x;t[0]=g+E*d,t[4]=S*d-M,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-d,t[2]=M*d-S,t[6]=E+g*d,t[10]=c*f}else if(e.order==="ZXY"){const g=f*m,M=f*x,S=h*m,E=h*x;t[0]=g-E*d,t[4]=-c*x,t[8]=S+M*d,t[1]=M+S*d,t[5]=c*m,t[9]=E-g*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const g=c*m,M=c*x,S=d*m,E=d*x;t[0]=f*m,t[4]=S*h-M,t[8]=g*h+E,t[1]=f*x,t[5]=E*h+g,t[9]=M*h-S,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,M=c*h,S=d*f,E=d*h;t[0]=f*m,t[4]=E-g*x,t[8]=S*x+M,t[1]=x,t[5]=c*m,t[9]=-d*m,t[2]=-h*m,t[6]=M*x+S,t[10]=g-E*x}else if(e.order==="XZY"){const g=c*f,M=c*h,S=d*f,E=d*h;t[0]=f*m,t[4]=-x,t[8]=h*m,t[1]=g*x+E,t[5]=c*m,t[9]=M*x-S,t[2]=S*x-M,t[6]=d*m,t[10]=E*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,TS)}lookAt(e,t,r){const o=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),ls.crossVectors(r,bi),ls.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),ls.crossVectors(r,bi)),ls.normalize(),mc.crossVectors(bi,ls),o[0]=ls.x,o[4]=mc.x,o[8]=bi.x,o[1]=ls.y,o[5]=mc.y,o[9]=bi.y,o[2]=ls.z,o[6]=mc.z,o[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],h=r[12],m=r[1],x=r[5],g=r[9],M=r[13],S=r[2],E=r[6],_=r[10],y=r[14],N=r[3],R=r[7],C=r[11],k=r[15],D=o[0],I=o[4],j=o[8],L=o[12],b=o[1],V=o[5],he=o[9],W=o[13],Z=o[2],O=o[6],G=o[10],Q=o[14],z=o[3],ue=o[7],te=o[11],H=o[15];return l[0]=c*D+d*b+f*Z+h*z,l[4]=c*I+d*V+f*O+h*ue,l[8]=c*j+d*he+f*G+h*te,l[12]=c*L+d*W+f*Q+h*H,l[1]=m*D+x*b+g*Z+M*z,l[5]=m*I+x*V+g*O+M*ue,l[9]=m*j+x*he+g*G+M*te,l[13]=m*L+x*W+g*Q+M*H,l[2]=S*D+E*b+_*Z+y*z,l[6]=S*I+E*V+_*O+y*ue,l[10]=S*j+E*he+_*G+y*te,l[14]=S*L+E*W+_*Q+y*H,l[3]=N*D+R*b+C*Z+k*z,l[7]=N*I+R*V+C*O+k*ue,l[11]=N*j+R*he+C*G+k*te,l[15]=N*L+R*W+C*Q+k*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],h=e[13],m=e[2],x=e[6],g=e[10],M=e[14],S=e[3],E=e[7],_=e[11],y=e[15];return S*(+l*f*x-o*h*x-l*d*g+r*h*g+o*d*M-r*f*M)+E*(+t*f*M-t*h*g+l*c*g-o*c*M+o*h*m-l*f*m)+_*(+t*h*x-t*d*M-l*c*x+r*c*M+l*d*m-r*h*m)+y*(-o*d*m-t*f*x+t*d*g+o*c*x-r*c*g+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],x=e[9],g=e[10],M=e[11],S=e[12],E=e[13],_=e[14],y=e[15],N=x*_*h-E*g*h+E*f*M-d*_*M-x*f*y+d*g*y,R=S*g*h-m*_*h-S*f*M+c*_*M+m*f*y-c*g*y,C=m*E*h-S*x*h+S*d*M-c*E*M-m*d*y+c*x*y,k=S*x*f-m*E*f-S*d*g+c*E*g+m*d*_-c*x*_,D=t*N+r*R+o*C+l*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=N*I,e[1]=(E*g*l-x*_*l-E*o*M+r*_*M+x*o*y-r*g*y)*I,e[2]=(d*_*l-E*f*l+E*o*h-r*_*h-d*o*y+r*f*y)*I,e[3]=(x*f*l-d*g*l-x*o*h+r*g*h+d*o*M-r*f*M)*I,e[4]=R*I,e[5]=(m*_*l-S*g*l+S*o*M-t*_*M-m*o*y+t*g*y)*I,e[6]=(S*f*l-c*_*l-S*o*h+t*_*h+c*o*y-t*f*y)*I,e[7]=(c*g*l-m*f*l+m*o*h-t*g*h-c*o*M+t*f*M)*I,e[8]=C*I,e[9]=(S*x*l-m*E*l-S*r*M+t*E*M+m*r*y-t*x*y)*I,e[10]=(c*E*l-S*d*l+S*r*h-t*E*h-c*r*y+t*d*y)*I,e[11]=(m*d*l-c*x*l-m*r*h+t*x*h+c*r*M-t*d*M)*I,e[12]=k*I,e[13]=(m*E*o-S*x*o+S*r*g-t*E*g-m*r*_+t*x*_)*I,e[14]=(S*d*o-c*E*o-S*r*f+t*E*f+c*r*_-t*d*_)*I,e[15]=(c*x*o-m*d*o+m*r*f-t*x*f-c*r*g+t*d*g)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,h=l*c,m=l*d;return this.set(h*c+r,h*d-o*f,h*f+o*d,0,h*d+o*f,m*d+r,m*f-o*c,0,h*f-o*d,m*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,h=l+l,m=c+c,x=d+d,g=l*h,M=l*m,S=l*x,E=c*m,_=c*x,y=d*x,N=f*h,R=f*m,C=f*x,k=r.x,D=r.y,I=r.z;return o[0]=(1-(E+y))*k,o[1]=(M+C)*k,o[2]=(S-R)*k,o[3]=0,o[4]=(M-C)*D,o[5]=(1-(g+y))*D,o[6]=(_+N)*D,o[7]=0,o[8]=(S+R)*I,o[9]=(_-N)*I,o[10]=(1-(g+E))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=To.set(o[0],o[1],o[2]).length();const c=To.set(o[4],o[5],o[6]).length(),d=To.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ir.copy(this);const h=1/l,m=1/c,x=1/d;return ir.elements[0]*=h,ir.elements[1]*=h,ir.elements[2]*=h,ir.elements[4]*=m,ir.elements[5]*=m,ir.elements[6]*=m,ir.elements[8]*=x,ir.elements[9]*=x,ir.elements[10]*=x,t.setFromRotationMatrix(ir),r.x=l,r.y=c,r.z=d,this}makePerspective(e,t,r,o,l,c,d=Or){const f=this.elements,h=2*l/(t-e),m=2*l/(r-o),x=(t+e)/(t-e),g=(r+o)/(r-o);let M,S;if(d===Or)M=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(d===Xc)M=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=h,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=m,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,c,d=Or){const f=this.elements,h=1/(t-e),m=1/(r-o),x=1/(c-l),g=(t+e)*h,M=(r+o)*m;let S,E;if(d===Or)S=(c+l)*x,E=-2*x;else if(d===Xc)S=l*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=E,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const To=new ae,ir=new mn,wS=new ae(0,0,0),TS=new ae(1,1,1),ls=new ae,mc=new ae,bi=new ae,kg=new mn,Og=new qa;class vr{constructor(e=0,t=0,r=0,o=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],h=o[5],m=o[9],x=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CS=0;const zg=new ae,Co=new qa,Dr=new mn,gc=new ae,Na=new ae,AS=new ae,RS=new qa,Bg=new ae(1,0,0),Hg=new ae(0,1,0),Vg=new ae(0,0,1),Gg={type:"added"},bS={type:"removed"},Ao={type:"childadded",child:null},ef={type:"childremoved",child:null};class Wn extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ae,t=new vr,r=new qa,o=new ae(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mn},normalMatrix:{value:new xt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(Hg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(Hg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gc.copy(e):gc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Na,gc,this.up):Dr.lookAt(gc,Na,this.up),this.quaternion.setFromRotationMatrix(Dr),o&&(Dr.extractRotation(o.matrixWorld),Co.setFromRotationMatrix(Dr),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gg),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bS),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gg),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,RS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const x=f[h];l(e.shapes,x)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),g=c(e.skeletons),M=c(e.animations),S=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(d){const f=[];for(const h in d){const m=d[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new ae(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new ae,Nr=new ae,tf=new ae,Ir=new ae,Ro=new ae,bo=new ae,Wg=new ae,nf=new ae,rf=new ae,sf=new ae,of=new vn,af=new vn,lf=new vn;class ji{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),rr.subVectors(e,t),o.cross(rr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){rr.subVectors(o,t),Nr.subVectors(r,t),tf.subVectors(e,t);const c=rr.dot(rr),d=rr.dot(Nr),f=rr.dot(tf),h=Nr.dot(Nr),m=Nr.dot(tf),x=c*h-d*d;if(x===0)return l.set(0,0,0),null;const g=1/x,M=(h*f-d*m)*g,S=(c*m-d*f)*g;return l.set(1-M-S,S,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,r,o,l,c,d,f){return this.getBarycoord(e,t,r,o,Ir)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Ir.x),f.addScaledVector(c,Ir.y),f.addScaledVector(d,Ir.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return of.setScalar(0),af.setScalar(0),lf.setScalar(0),of.fromBufferAttribute(e,t),af.fromBufferAttribute(e,r),lf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(of,l.x),c.addScaledVector(af,l.y),c.addScaledVector(lf,l.z),c}static isFrontFacing(e,t,r,o){return rr.subVectors(r,t),Nr.subVectors(e,t),rr.cross(Nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),rr.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ji.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,d;Ro.subVectors(o,r),bo.subVectors(l,r),nf.subVectors(e,r);const f=Ro.dot(nf),h=bo.dot(nf);if(f<=0&&h<=0)return t.copy(r);rf.subVectors(e,o);const m=Ro.dot(rf),x=bo.dot(rf);if(m>=0&&x<=m)return t.copy(o);const g=f*x-m*h;if(g<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(r).addScaledVector(Ro,c);sf.subVectors(e,l);const M=Ro.dot(sf),S=bo.dot(sf);if(S>=0&&M<=S)return t.copy(l);const E=M*h-f*S;if(E<=0&&h>=0&&S<=0)return d=h/(h-S),t.copy(r).addScaledVector(bo,d);const _=m*S-M*x;if(_<=0&&x-m>=0&&M-S>=0)return Wg.subVectors(l,o),d=(x-m)/(x-m+(M-S)),t.copy(o).addScaledVector(Wg,d);const y=1/(_+E+g);return c=E*y,d=g*y,t.copy(r).addScaledVector(Ro,c).addScaledVector(bo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},xc={h:0,s:0,l:0};function cf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class It{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Bt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Bt.workingColorSpace){if(e=Fh(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=cf(c,l,e+1/3),this.g=cf(c,l,e),this.b=cf(c,l,e-1/3)}return Bt.toWorkingColorSpace(this,o),this}setStyle(e,t=Gi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gi){const r=_0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gi){return Bt.fromWorkingColorSpace(ni.copy(this),e),Math.round(Pt(ni.r*255,0,255))*65536+Math.round(Pt(ni.g*255,0,255))*256+Math.round(Pt(ni.b*255,0,255))}getHexString(e=Gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(ni.copy(this),t);const r=ni.r,o=ni.g,l=ni.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let f,h;const m=(d+c)/2;if(d===c)f=0,h=0;else{const x=c-d;switch(h=m<=.5?x/(c+d):x/(2-c-d),c){case r:f=(o-l)/x+(o<l?6:0);break;case o:f=(l-r)/x+2;break;case l:f=(r-o)/x+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Gi){Bt.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,r=ni.g,o=ni.b;return e!==Gi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(xc);const r=Ba(cs.h,xc.h,t),o=Ba(cs.s,xc.s,t),l=Ba(cs.l,xc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new It;It.NAMES=_0;let PS=0;class Jo extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Oo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Af,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(r.blending=this.blending),this.side!==gs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cf&&(r.blendSrc=this.blendSrc),this.blendDst!==Af&&(r.blendDst=this.blendDst),this.blendEquation!==Hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class y0 extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rn=new ae,vc=new Ht;class lr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vc.fromBufferAttribute(this,t),vc.applyMatrix3(e),this.setXY(t,vc.x,vc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array),o=ci(o,this.array),l=ci(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class M0 extends lr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class S0 extends lr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $i extends lr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let LS=0;const Vi=new mn,uf=new Wn,Po=new ae,Pi=new Ka,Ia=new Ka,Gn=new ae;class cr extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?S0:M0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,r){return Vi.makeTranslation(e,t,r),this.applyMatrix4(Vi),this}scale(e,t,r){return Vi.makeScale(e,t,r),this.applyMatrix4(Vi),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $i(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Ia.setFromBufferAttribute(d),this.morphTargetsRelative?(Gn.addVectors(Pi.min,Ia.min),Pi.expandByPoint(Gn),Gn.addVectors(Pi.max,Ia.max),Pi.expandByPoint(Gn)):(Pi.expandByPoint(Ia.min),Pi.expandByPoint(Ia.max))}Pi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Gn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)Gn.fromBufferAttribute(d,h),f&&(Po.fromBufferAttribute(e,h),Gn.add(Po)),o=Math.max(o,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let j=0;j<r.count;j++)d[j]=new ae,f[j]=new ae;const h=new ae,m=new ae,x=new ae,g=new Ht,M=new Ht,S=new Ht,E=new ae,_=new ae;function y(j,L,b){h.fromBufferAttribute(r,j),m.fromBufferAttribute(r,L),x.fromBufferAttribute(r,b),g.fromBufferAttribute(l,j),M.fromBufferAttribute(l,L),S.fromBufferAttribute(l,b),m.sub(h),x.sub(h),M.sub(g),S.sub(g);const V=1/(M.x*S.y-S.x*M.y);isFinite(V)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(x,-M.y).multiplyScalar(V),_.copy(x).multiplyScalar(M.x).addScaledVector(m,-S.x).multiplyScalar(V),d[j].add(E),d[L].add(E),d[b].add(E),f[j].add(_),f[L].add(_),f[b].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let j=0,L=N.length;j<L;++j){const b=N[j],V=b.start,he=b.count;for(let W=V,Z=V+he;W<Z;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new ae,C=new ae,k=new ae,D=new ae;function I(j){k.fromBufferAttribute(o,j),D.copy(k);const L=d[j];R.copy(L),R.sub(k.multiplyScalar(k.dot(L))).normalize(),C.crossVectors(D,L);const V=C.dot(f[j])<0?-1:1;c.setXYZW(j,R.x,R.y,R.z,V)}for(let j=0,L=N.length;j<L;++j){const b=N[j],V=b.start,he=b.count;for(let W=V,Z=V+he;W<Z;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ae,l=new ae,c=new ae,d=new ae,f=new ae,h=new ae,m=new ae,x=new ae;if(e)for(let g=0,M=e.count;g<M;g+=3){const S=e.getX(g+0),E=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,_),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,_),d.add(m),f.add(m),h.add(m),r.setXYZ(S,d.x,d.y,d.z),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(d,f){const h=d.array,m=d.itemSize,x=d.normalized,g=new h.constructor(f.length*m);let M=0,S=0;for(let E=0,_=f.length;E<_;E++){d.isInterleavedBufferAttribute?M=f[E]*d.data.stride+d.offset:M=f[E]*m;for(let y=0;y<m;y++)g[S++]=h[M++]}return new lr(g,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],h=e(f,r);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const f=[],h=l[d];for(let m=0,x=h.length;m<x;m++){const g=h[m],M=e(g,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let x=0,g=h.length;x<g;x++){const M=h[x];m.push(M.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],x=l[h];for(let g=0,M=x.length;g<M;g++)m.push(x[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new mn,Is=new x0,_c=new ru,Xg=new ae,yc=new ae,Mc=new ae,Sc=new ae,df=new ae,Ec=new ae,$g=new ae,wc=new ae;class Xi extends Wn{constructor(e=new cr,t=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ec.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const m=d[f],x=l[f];m!==0&&(df.fromBufferAttribute(x,e),c?Ec.addScaledVector(df,m):Ec.addScaledVector(df.sub(t),m))}t.add(Ec)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(l),Is.copy(e.ray).recast(e.near),!(_c.containsPoint(Is.origin)===!1&&(Is.intersectSphere(_c,Xg)===null||Is.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(jg.copy(l).invert(),Is.copy(e.ray).applyMatrix4(jg),!(r.boundingBox!==null&&Is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,g=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const _=g[S],y=c[_.materialIndex],N=Math.max(_.start,M.start),R=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let C=N,k=R;C<k;C+=3){const D=d.getX(C),I=d.getX(C+1),j=d.getX(C+2);o=Tc(this,y,e,r,h,m,x,D,I,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let _=S,y=E;_<y;_+=3){const N=d.getX(_),R=d.getX(_+1),C=d.getX(_+2);o=Tc(this,c,e,r,h,m,x,N,R,C),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const _=g[S],y=c[_.materialIndex],N=Math.max(_.start,M.start),R=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let C=N,k=R;C<k;C+=3){const D=C,I=C+1,j=C+2;o=Tc(this,y,e,r,h,m,x,D,I,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(f.count,M.start+M.count);for(let _=S,y=E;_<y;_+=3){const N=_,R=_+1,C=_+2;o=Tc(this,c,e,r,h,m,x,N,R,C),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function DS(i,e,t,r,o,l,c,d){let f;if(e.side===Mi?f=r.intersectTriangle(c,l,o,!0,d):f=r.intersectTriangle(o,l,c,e.side===gs,d),f===null)return null;wc.copy(d),wc.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(wc);return h<t.near||h>t.far?null:{distance:h,point:wc.clone(),object:i}}function Tc(i,e,t,r,o,l,c,d,f,h){i.getVertexPosition(d,yc),i.getVertexPosition(f,Mc),i.getVertexPosition(h,Sc);const m=DS(i,e,t,r,yc,Mc,Sc,$g);if(m){const x=new ae;ji.getBarycoord($g,yc,Mc,Sc,x),o&&(m.uv=ji.getInterpolatedAttribute(o,d,f,h,x,new Ht)),l&&(m.uv1=ji.getInterpolatedAttribute(l,d,f,h,x,new Ht)),c&&(m.normal=ji.getInterpolatedAttribute(c,d,f,h,x,new ae),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:d,b:f,c:h,normal:new ae,materialIndex:0};ji.getNormal(yc,Mc,Sc,g.normal),m.face=g,m.barycoord=x}return m}class Qa extends cr{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],m=[],x=[];let g=0,M=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new $i(h,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(x,2));function S(E,_,y,N,R,C,k,D,I,j,L){const b=C/I,V=k/j,he=C/2,W=k/2,Z=D/2,O=I+1,G=j+1;let Q=0,z=0;const ue=new ae;for(let te=0;te<G;te++){const H=te*V-W;for(let pe=0;pe<O;pe++){const De=pe*b-he;ue[E]=De*N,ue[_]=H*R,ue[y]=Z,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[_]=0,ue[y]=D>0?1:-1,m.push(ue.x,ue.y,ue.z),x.push(pe/I),x.push(1-te/j),Q+=1}}for(let te=0;te<j;te++)for(let H=0;H<I;H++){const pe=g+H+O*te,De=g+H+O*(te+1),ie=g+(H+1)+O*(te+1),xe=g+(H+1)+O*te;f.push(pe,De,xe),f.push(De,ie,xe),z+=6}d.addGroup(M,z,L),M+=z,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function ui(i){const e={};for(let t=0;t<i.length;t++){const r=Yo(i[t]);for(const o in r)e[o]=r[o]}return e}function NS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function E0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const IS={clone:Yo,merge:ui};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class w0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new ae,Yg=new Ht,Zg=new Ht;class Wi extends w0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,Zg),t.subVectors(Zg,Yg)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/h,o*=c.width/f,r*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lo=-90,Do=1;class kS extends Wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(Lo,Do,e,t);o.layers=this.layers,this.add(o);const l=new Wi(Lo,Do,e,t);l.layers=this.layers,this.add(l);const c=new Wi(Lo,Do,e,t);c.layers=this.layers,this.add(c);const d=new Wi(Lo,Do,e,t);d.layers=this.layers,this.add(d);const f=new Wi(Lo,Do,e,t);f.layers=this.layers,this.add(f);const h=new Wi(Lo,Do,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,d,f]=t;for(const h of t)this.remove(h);if(e===Or)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,h,m]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(x,g,M),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class T0 extends Si{constructor(e,t,r,o,l,c,d,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Go,super(e,t,r,o,l,c,d,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends Xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new T0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Qa(5,5,5),l=new xs({name:"CubemapFromEquirect",uniforms:Yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:ps});l.uniforms.tEquirect.value=t;const c=new Xi(o,l),d=t.minFilter;return t.minFilter===Ws&&(t.minFilter=xr),new kS(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class zS extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ff=new ae,BS=new ae,HS=new xt;class zs{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ff.subVectors(r,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ff),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||HS.getNormalMatrix(e),o=this.coplanarPoint(ff).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new ru,Cc=new ae;class Uh{constructor(e=new zs,t=new zs,r=new zs,o=new zs,l=new zs,c=new zs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Or){const r=this.planes,o=e.elements,l=o[0],c=o[1],d=o[2],f=o[3],h=o[4],m=o[5],x=o[6],g=o[7],M=o[8],S=o[9],E=o[10],_=o[11],y=o[12],N=o[13],R=o[14],C=o[15];if(r[0].setComponents(f-l,g-h,_-M,C-y).normalize(),r[1].setComponents(f+l,g+h,_+M,C+y).normalize(),r[2].setComponents(f+c,g+m,_+S,C+N).normalize(),r[3].setComponents(f-c,g-m,_-S,C-N).normalize(),r[4].setComponents(f-d,g-x,_-E,C-R).normalize(),t===Or)r[5].setComponents(f+d,g+x,_+E,C+R).normalize();else if(t===Xc)r[5].setComponents(d,x,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cc.x=o.normal.x>0?e.max.x:e.min.x,Cc.y=o.normal.y>0?e.max.y:e.min.y,Cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends Jo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new ae,Zc=new ae,qg=new mn,Fa=new x0,Ac=new ru,hf=new ae,Kg=new ae;class VS extends Wn{constructor(e=new cr,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Yc.fromBufferAttribute(t,o-1),Zc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(o),Ac.radius+=l,e.ray.intersectsSphere(Ac)===!1)return;qg.copy(o).invert(),Fa.copy(e.ray).applyMatrix4(qg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const M=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=M,_=S-1;E<_;E+=h){const y=m.getX(E),N=m.getX(E+1),R=Rc(this,e,Fa,f,y,N);R&&t.push(R)}if(this.isLineLoop){const E=m.getX(S-1),_=m.getX(M),y=Rc(this,e,Fa,f,E,_);y&&t.push(y)}}else{const M=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=M,_=S-1;E<_;E+=h){const y=Rc(this,e,Fa,f,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=Rc(this,e,Fa,f,S-1,M);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Rc(i,e,t,r,o,l){const c=i.geometry.attributes.position;if(Yc.fromBufferAttribute(c,o),Zc.fromBufferAttribute(c,l),t.distanceSqToSegment(Yc,Zc,hf,Kg)>r)return;hf.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(hf);if(!(f<e.near||f>e.far))return{distance:f,point:Kg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Qg=new ae,Jg=new ae;class dh extends VS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Qg.fromBufferAttribute(t,o),Jg.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Qg.distanceTo(Jg);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ua extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class C0 extends Si{constructor(e,t,r,o,l,c,d,f,h,m=zo){if(m!==zo&&m!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===zo&&(r=js),r===void 0&&m===Xo&&(r=jo),super(null,o,l,c,d,f,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:ar,this.minFilter=f!==void 0?f:ar,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bc=new ae,Pc=new ae,pf=new ae,Lc=new ji;class GS extends cr{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Bo*t),c=e.getIndex(),d=e.getAttribute("position"),f=c?c.count:d.count,h=[0,0,0],m=["a","b","c"],x=new Array(3),g={},M=[];for(let S=0;S<f;S+=3){c?(h[0]=c.getX(S),h[1]=c.getX(S+1),h[2]=c.getX(S+2)):(h[0]=S,h[1]=S+1,h[2]=S+2);const{a:E,b:_,c:y}=Lc;if(E.fromBufferAttribute(d,h[0]),_.fromBufferAttribute(d,h[1]),y.fromBufferAttribute(d,h[2]),Lc.getNormal(pf),x[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,x[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,x[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let N=0;N<3;N++){const R=(N+1)%3,C=x[N],k=x[R],D=Lc[m[N]],I=Lc[m[R]],j=`${C}_${k}`,L=`${k}_${C}`;L in g&&g[L]?(pf.dot(g[L].normal)<=l&&(M.push(D.x,D.y,D.z),M.push(I.x,I.y,I.z)),g[L]=null):j in g||(g[j]={index0:h[N],index1:h[R],normal:pf.clone()})}}for(const S in g)if(g[S]){const{index0:E,index1:_}=g[S];bc.fromBufferAttribute(d,E),Pc.fromBufferAttribute(d,_),M.push(bc.x,bc.y,bc.z),M.push(Pc.x,Pc.y,Pc.z)}this.setAttribute("position",new $i(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const WS={triangulate:function(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let l=A0(i,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let d,f,h,m,x,g,M;if(r&&(l=ZS(i,e,l,t)),i.length>80*t){d=h=i[0],f=m=i[1];for(let S=t;S<o;S+=t)x=i[S],g=i[S+1],x<d&&(d=x),g<f&&(f=g),x>h&&(h=x),g>m&&(m=g);M=Math.max(h-d,m-f),M=M!==0?32767/M:0}return Wa(l,c,t,d,f,M,0),c}};function A0(i,e,t,r,o){let l,c;if(o===o1(i,e,t,r)>0)for(l=e;l<t;l+=r)c=ex(l,i[l],i[l+1],c);else for(l=t-r;l>=e;l-=r)c=ex(l,i[l],i[l+1],c);return c&&ou(c,c.next)&&(Xa(c),c=c.next),c}function $s(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(ou(t,t.next)||pn(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Wa(i,e,t,r,o,l,c){if(!i)return;!c&&l&&e1(i,r,o,l);let d=i,f,h;for(;i.prev!==i.next;){if(f=i.prev,h=i.next,l?XS(i,r,o,l):jS(i)){e.push(f.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),Xa(i),i=h.next,d=h.next;continue}if(i=h,i===d){c?c===1?(i=$S($s(i),e,t),Wa(i,e,t,r,o,l,2)):c===2&&YS(i,e,t,r,o,l):Wa($s(i),e,t,r,o,l,1);break}}}function jS(i){const e=i.prev,t=i,r=i.next;if(pn(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,d=e.y,f=t.y,h=r.y,m=o<l?o<c?o:c:l<c?l:c,x=d<f?d<h?d:h:f<h?f:h,g=o>l?o>c?o:c:l>c?l:c,M=d>f?d>h?d:h:f>h?f:h;let S=r.next;for(;S!==e;){if(S.x>=m&&S.x<=g&&S.y>=x&&S.y<=M&&Uo(o,d,l,f,c,h,S.x,S.y)&&pn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function XS(i,e,t,r){const o=i.prev,l=i,c=i.next;if(pn(o,l,c)>=0)return!1;const d=o.x,f=l.x,h=c.x,m=o.y,x=l.y,g=c.y,M=d<f?d<h?d:h:f<h?f:h,S=m<x?m<g?m:g:x<g?x:g,E=d>f?d>h?d:h:f>h?f:h,_=m>x?m>g?m:g:x>g?x:g,y=fh(M,S,e,t,r),N=fh(E,_,e,t,r);let R=i.prevZ,C=i.nextZ;for(;R&&R.z>=y&&C&&C.z<=N;){if(R.x>=M&&R.x<=E&&R.y>=S&&R.y<=_&&R!==o&&R!==c&&Uo(d,m,f,x,h,g,R.x,R.y)&&pn(R.prev,R,R.next)>=0||(R=R.prevZ,C.x>=M&&C.x<=E&&C.y>=S&&C.y<=_&&C!==o&&C!==c&&Uo(d,m,f,x,h,g,C.x,C.y)&&pn(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;R&&R.z>=y;){if(R.x>=M&&R.x<=E&&R.y>=S&&R.y<=_&&R!==o&&R!==c&&Uo(d,m,f,x,h,g,R.x,R.y)&&pn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;C&&C.z<=N;){if(C.x>=M&&C.x<=E&&C.y>=S&&C.y<=_&&C!==o&&C!==c&&Uo(d,m,f,x,h,g,C.x,C.y)&&pn(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function $S(i,e,t){let r=i;do{const o=r.prev,l=r.next.next;!ou(o,l)&&R0(o,r,r.next,l)&&ja(o,l)&&ja(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Xa(r),Xa(r.next),r=i=l),r=r.next}while(r!==i);return $s(r)}function YS(i,e,t,r,o,l){let c=i;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&i1(c,d)){let f=b0(c,d);c=$s(c,c.next),f=$s(f,f.next),Wa(c,e,t,r,o,l,0),Wa(f,e,t,r,o,l,0);return}d=d.next}c=c.next}while(c!==i)}function ZS(i,e,t,r){const o=[];let l,c,d,f,h;for(l=0,c=e.length;l<c;l++)d=e[l]*r,f=l<c-1?e[l+1]*r:i.length,h=A0(i,d,f,r,!1),h===h.next&&(h.steiner=!0),o.push(n1(h));for(o.sort(qS),l=0;l<o.length;l++)t=KS(o[l],t);return t}function qS(i,e){return i.x-e.x}function KS(i,e){const t=QS(i,e);if(!t)return e;const r=b0(t,i);return $s(r,r.next),$s(t,t.next)}function QS(i,e){let t=e,r=-1/0,o;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const g=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=l&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===l))return o}t=t.next}while(t!==e);if(!o)return null;const d=o,f=o.x,h=o.y;let m=1/0,x;t=o;do l>=t.x&&t.x>=f&&l!==t.x&&Uo(c<h?l:r,c,f,h,c<h?r:l,c,t.x,t.y)&&(x=Math.abs(c-t.y)/(l-t.x),ja(t,i)&&(x<m||x===m&&(t.x>o.x||t.x===o.x&&JS(o,t)))&&(o=t,m=x)),t=t.next;while(t!==d);return o}function JS(i,e){return pn(i.prev,i,e.prev)<0&&pn(e.next,i,i.next)<0}function e1(i,e,t,r){let o=i;do o.z===0&&(o.z=fh(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,t1(o)}function t1(i){let e,t,r,o,l,c,d,f,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,r=t,d=0,e=0;e<h&&(d++,r=r.nextZ,!!r);e++);for(f=h;d>0||f>0&&r;)d!==0&&(f===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,d--):(o=r,r=r.nextZ,f--),l?l.nextZ=o:i=o,o.prevZ=l,l=o;t=r}l.nextZ=null,h*=2}while(c>1);return i}function fh(i,e,t,r,o){return i=(i-t)*o|0,e=(e-r)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function n1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Uo(i,e,t,r,o,l,c,d){return(o-c)*(e-d)>=(i-c)*(l-d)&&(i-c)*(r-d)>=(t-c)*(e-d)&&(t-c)*(l-d)>=(o-c)*(r-d)}function i1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!r1(i,e)&&(ja(i,e)&&ja(e,i)&&s1(i,e)&&(pn(i.prev,i,e.prev)||pn(i,e.prev,e))||ou(i,e)&&pn(i.prev,i,i.next)>0&&pn(e.prev,e,e.next)>0)}function pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ou(i,e){return i.x===e.x&&i.y===e.y}function R0(i,e,t,r){const o=Nc(pn(i,e,t)),l=Nc(pn(i,e,r)),c=Nc(pn(t,r,i)),d=Nc(pn(t,r,e));return!!(o!==l&&c!==d||o===0&&Dc(i,t,e)||l===0&&Dc(i,r,e)||c===0&&Dc(t,i,r)||d===0&&Dc(t,e,r))}function Dc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Nc(i){return i>0?1:i<0?-1:0}function r1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&R0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ja(i,e){return pn(i.prev,i,i.next)<0?pn(i,e,i.next)>=0&&pn(i,i.prev,e)>=0:pn(i,e,i.prev)<0||pn(i,i.next,e)<0}function s1(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function b0(i,e){const t=new hh(i.i,i.x,i.y),r=new hh(e.i,e.x,e.y),o=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function ex(i,e,t,r){const o=new hh(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o1(i,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return o}class kh{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return kh.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];tx(e),nx(r,e);let c=e.length;t.forEach(tx);for(let f=0;f<t.length;f++)o.push(c),c+=t[f].length,nx(r,t[f]);const d=WS.triangulate(r,o);for(let f=0;f<d.length;f+=3)l.push(d.slice(f,f+3));return l}}function tx(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nx(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class au extends cr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(o),h=d+1,m=f+1,x=e/d,g=t/f,M=[],S=[],E=[],_=[];for(let y=0;y<m;y++){const N=y*g-c;for(let R=0;R<h;R++){const C=R*x-l;S.push(C,-N,0),E.push(0,0,1),_.push(R/d),_.push(1-y/f)}}for(let y=0;y<f;y++)for(let N=0;N<d;N++){const R=N+h*y,C=N+h*(y+1),k=N+1+h*(y+1),D=N+1+h*y;M.push(R,C,D),M.push(C,k,D)}this.setIndex(M),this.setAttribute("position",new $i(S,3)),this.setAttribute("normal",new $i(E,3)),this.setAttribute("uv",new $i(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oh extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f0,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a1 extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l1 extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class P0 extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class c1 extends P0{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mf=new mn,ix=new ae,rx=new ae;class u1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;ix.setFromMatrixPosition(e.matrixWorld),t.position.copy(ix),rx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rx),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L0 extends w0{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d1 extends u1{constructor(){super(new L0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f1 extends P0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new d1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h1 extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class p1 extends dh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new cr;o.setAttribute("position",new $i(t,3)),o.setAttribute("color",new $i(r,3));const l=new su({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,t,r){const o=new It,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(t),o.toArray(l,6),o.toArray(l,9),o.set(r),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function sx(i,e,t,r){const o=m1(r);switch(t){case s0:return i*e;case a0:return i*e;case l0:return i*e*2;case c0:return i*e/o.components*o.byteLength;case Dh:return i*e/o.components*o.byteLength;case u0:return i*e*2/o.components*o.byteLength;case Nh:return i*e*2/o.components*o.byteLength;case o0:return i*e*3/o.components*o.byteLength;case or:return i*e*4/o.components*o.byteLength;case Ih:return i*e*4/o.components*o.byteLength;case kc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bf:case Vf:return Math.max(i,16)*Math.max(e,8)/4;case zf:case Hf:return Math.max(i,8)*Math.max(e,8)/2;case Gf:case Wf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hc:case oh:case ah:return Math.ceil(i/4)*Math.ceil(e/4)*16;case d0:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m1(i){switch(i){case Br:case n0:return{byteLength:1,components:1};case Va:case i0:case Za:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case js:case bh:case kr:return{byteLength:4,components:1};case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D0(){let i=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function g1(i){const e=new WeakMap;function t(d,f){const h=d.array,m=d.usage,x=h.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,h,m),d.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,f,h){const m=f.array,x=f.updateRanges;if(i.bindBuffer(h,d),x.length===0)i.bufferSubData(h,0,m);else{x.sort((M,S)=>M.start-S.start);let g=0;for(let M=1;M<x.length;M++){const S=x[g],E=x[M];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,x[g]=E)}x.length=g+1;for(let M=0,S=x.length;M<S;M++){const E=x[M];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,f),h.version=d.version}}return{get:o,remove:l,update:c}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,C1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,B1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ew=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:x1,alphahash_pars_fragment:v1,alphamap_fragment:_1,alphamap_pars_fragment:y1,alphatest_fragment:M1,alphatest_pars_fragment:S1,aomap_fragment:E1,aomap_pars_fragment:w1,batching_pars_vertex:T1,batching_vertex:C1,begin_vertex:A1,beginnormal_vertex:R1,bsdfs:b1,iridescence_fragment:P1,bumpmap_pars_fragment:L1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:F1,color_fragment:U1,color_pars_fragment:k1,color_pars_vertex:O1,color_vertex:z1,common:B1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:V1,displacementmap_pars_vertex:G1,displacementmap_vertex:W1,emissivemap_fragment:j1,emissivemap_pars_fragment:X1,colorspace_fragment:$1,colorspace_pars_fragment:Y1,envmap_fragment:Z1,envmap_common_pars_fragment:q1,envmap_pars_fragment:K1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:cE,envmap_vertex:J1,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:dE,lights_phong_fragment:fE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:xE,lights_fragment_end:vE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:SE,map_fragment:EE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:CE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:RE,morphinstance_vertex:bE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:NE,normal_fragment_begin:IE,normal_fragment_maps:FE,normal_pars_fragment:UE,normal_pars_vertex:kE,normal_vertex:OE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:WE,packing:jE,premultiplied_alpha_fragment:XE,project_vertex:$E,dithering_fragment:YE,dithering_pars_fragment:ZE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:ew,shadowmask_pars_fragment:tw,skinbase_vertex:nw,skinning_pars_vertex:iw,skinning_vertex:rw,skinnormal_vertex:sw,specularmap_fragment:ow,specularmap_pars_fragment:aw,tonemapping_fragment:lw,tonemapping_pars_fragment:cw,transmission_fragment:uw,transmission_pars_fragment:dw,uv_pars_fragment:fw,uv_pars_vertex:hw,uv_vertex:pw,worldpos_vertex:mw,background_vert:gw,background_frag:xw,backgroundCube_vert:vw,backgroundCube_frag:_w,cube_vert:yw,cube_frag:Mw,depth_vert:Sw,depth_frag:Ew,distanceRGBA_vert:ww,distanceRGBA_frag:Tw,equirect_vert:Cw,equirect_frag:Aw,linedashed_vert:Rw,linedashed_frag:bw,meshbasic_vert:Pw,meshbasic_frag:Lw,meshlambert_vert:Dw,meshlambert_frag:Nw,meshmatcap_vert:Iw,meshmatcap_frag:Fw,meshnormal_vert:Uw,meshnormal_frag:kw,meshphong_vert:Ow,meshphong_frag:zw,meshphysical_vert:Bw,meshphysical_frag:Hw,meshtoon_vert:Vw,meshtoon_frag:Gw,points_vert:Ww,points_frag:jw,shadow_vert:Xw,shadow_frag:$w,sprite_vert:Yw,sprite_frag:Zw},Oe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},mr={basic:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ui([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ui([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ui([Oe.points,Oe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ui([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ui([Oe.common,Oe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ui([Oe.sprite,Oe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:ui([Oe.common,Oe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:ui([Oe.lights,Oe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};mr.physical={uniforms:ui([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Ic={r:0,b:0,g:0},Us=new vr,qw=new mn;function Kw(i,e,t,r,o,l,c){const d=new It(0);let f=l===!0?0:1,h,m,x=null,g=0,M=null;function S(R){let C=R.isScene===!0?R.background:null;return C&&C.isTexture&&(C=(R.backgroundBlurriness>0?t:e).get(C)),C}function E(R){let C=!1;const k=S(R);k===null?y(d,f):k&&k.isColor&&(y(k,1),C=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,C){const k=S(C);k&&(k.isCubeTexture||k.mapping===iu)?(m===void 0&&(m=new Xi(new Qa(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:Yo(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Us.copy(C.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.material.uniforms.envMap.value=k,m.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qw.makeRotationFromEuler(Us)),m.material.toneMapped=Bt.getTransfer(k.colorSpace)!==$t,(x!==k||g!==k.version||M!==i.toneMapping)&&(m.material.needsUpdate=!0,x=k,g=k.version,M=i.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):k&&k.isTexture&&(h===void 0&&(h=new Xi(new au(2,2),new xs({name:"BackgroundMaterial",uniforms:Yo(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=k,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(k.colorSpace)!==$t,k.matrixAutoUpdate===!0&&k.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k.matrix),(x!==k||g!==k.version||M!==i.toneMapping)&&(h.material.needsUpdate=!0,x=k,g=k.version,M=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,C){R.getRGB(Ic,E0(i)),r.buffers.color.setClear(Ic.r,Ic.g,Ic.b,C,c)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(R,C=1){d.set(R),f=C,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(d,f)},render:E,addToRenderList:_,dispose:N}}function Qw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function d(b,V,he,W,Z){let O=!1;const G=x(W,he,V);l!==G&&(l=G,h(l.object)),O=M(b,W,he,Z),O&&S(b,W,he,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,C(b,V,he,W),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function x(b,V,he){const W=he.wireframe===!0;let Z=r[b.id];Z===void 0&&(Z={},r[b.id]=Z);let O=Z[V.id];O===void 0&&(O={},Z[V.id]=O);let G=O[W];return G===void 0&&(G=g(f()),O[W]=G),G}function g(b){const V=[],he=[],W=[];for(let Z=0;Z<t;Z++)V[Z]=0,he[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:he,attributeDivisors:W,object:b,attributes:{},index:null}}function M(b,V,he,W){const Z=l.attributes,O=V.attributes;let G=0;const Q=he.getAttributes();for(const z in Q)if(Q[z].location>=0){const te=Z[z];let H=O[z];if(H===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),te===void 0||te.attribute!==H||H&&te.data!==H.data)return!0;G++}return l.attributesNum!==G||l.index!==W}function S(b,V,he,W){const Z={},O=V.attributes;let G=0;const Q=he.getAttributes();for(const z in Q)if(Q[z].location>=0){let te=O[z];te===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const H={};H.attribute=te,te&&te.data&&(H.data=te.data),Z[z]=H,G++}l.attributes=Z,l.attributesNum=G,l.index=W}function E(){const b=l.newAttributes;for(let V=0,he=b.length;V<he;V++)b[V]=0}function _(b){y(b,0)}function y(b,V){const he=l.newAttributes,W=l.enabledAttributes,Z=l.attributeDivisors;he[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),Z[b]!==V&&(i.vertexAttribDivisor(b,V),Z[b]=V)}function N(){const b=l.newAttributes,V=l.enabledAttributes;for(let he=0,W=V.length;he<W;he++)V[he]!==b[he]&&(i.disableVertexAttribArray(he),V[he]=0)}function R(b,V,he,W,Z,O,G){G===!0?i.vertexAttribIPointer(b,V,he,Z,O):i.vertexAttribPointer(b,V,he,W,Z,O)}function C(b,V,he,W){E();const Z=W.attributes,O=he.getAttributes(),G=V.defaultAttributeValues;for(const Q in O){const z=O[Q];if(z.location>=0){let ue=Z[Q];if(ue===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const te=ue.normalized,H=ue.itemSize,pe=e.get(ue);if(pe===void 0)continue;const De=pe.buffer,ie=pe.type,xe=pe.bytesPerElement,Se=ie===i.INT||ie===i.UNSIGNED_INT||ue.gpuType===bh;if(ue.isInterleavedBufferAttribute){const Me=ue.data,be=Me.stride,ze=ue.offset;if(Me.isInstancedInterleavedBuffer){for(let et=0;et<z.locationSize;et++)y(z.location+et,Me.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let et=0;et<z.locationSize;et++)_(z.location+et);i.bindBuffer(i.ARRAY_BUFFER,De);for(let et=0;et<z.locationSize;et++)R(z.location+et,H/z.locationSize,ie,te,be*xe,(ze+H/z.locationSize*et)*xe,Se)}else{if(ue.isInstancedBufferAttribute){for(let Me=0;Me<z.locationSize;Me++)y(z.location+Me,ue.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<z.locationSize;Me++)_(z.location+Me);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Me=0;Me<z.locationSize;Me++)R(z.location+Me,H/z.locationSize,ie,te,H*xe,H/z.locationSize*Me*xe,Se)}}else if(G!==void 0){const te=G[Q];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(z.location,te);break;case 3:i.vertexAttrib3fv(z.location,te);break;case 4:i.vertexAttrib4fv(z.location,te);break;default:i.vertexAttrib1fv(z.location,te)}}}}N()}function k(){j();for(const b in r){const V=r[b];for(const he in V){const W=V[he];for(const Z in W)m(W[Z].object),delete W[Z];delete V[he]}delete r[b]}}function D(b){if(r[b.id]===void 0)return;const V=r[b.id];for(const he in V){const W=V[he];for(const Z in W)m(W[Z].object),delete W[Z];delete V[he]}delete r[b.id]}function I(b){for(const V in r){const he=r[V];if(he[b.id]===void 0)continue;const W=he[b.id];for(const Z in W)m(W[Z].object),delete W[Z];delete he[b.id]}}function j(){L(),c=!0,l!==o&&(l=o,h(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:j,resetDefaultState:L,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:_,disableUnusedAttributes:N}}function Jw(i,e,t){let r;function o(h){r=h}function l(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,x){x!==0&&(i.drawArraysInstanced(r,h,m,x),t.update(m,r,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let M=0;for(let S=0;S<x;S++)M+=m[S];t.update(M,r,1)}function f(h,m,x,g){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<h.length;S++)c(h[S],m[S],g[S]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,m,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=m[E]*g[E];t.update(S,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function eT(i,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==or&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Br&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==kr&&!j)}function f(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=S>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:x,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:N,maxVaryings:R,maxFragmentUniforms:C,vertexTextures:k,maxSamples:D}}function tT(i){const e=this;let t=null,r=0,o=!1,l=!1;const c=new zs,d=new xt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||o;return o=g,r=x.length,M},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=m(x,g,0)},this.setState=function(x,g,M){const S=x.clippingPlanes,E=x.clipIntersection,_=x.clipShadows,y=i.get(x);if(!o||S===null||S.length===0||l&&!_)l?m(null):h();else{const N=l?0:r,R=N*4;let C=y.clippingState||null;f.value=C,C=m(S,g,R,M);for(let k=0;k!==R;++k)C[k]=t[k];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(x,g,M,S){const E=x!==null?x.length:0;let _=null;if(E!==0){if(_=f.value,S!==!0||_===null){const y=M+E*4,N=g.matrixWorldInverse;d.getNormalMatrix(N),(_===null||_.length<y)&&(_=new Float32Array(y));for(let R=0,C=M;R!==E;++R,C+=4)c.copy(x[R]).applyMatrix4(N,d),c.normal.toArray(_,C),_[C+3]=c.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function nT(i){let e=new WeakMap;function t(c,d){return d===Ff?c.mapping=Go:d===Uf&&(c.mapping=Wo),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Ff||d===Uf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new OS(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const ko=4,ox=[.125,.215,.35,.446,.526,.582],Vs=20,gf=new L0,ax=new It;let xf=null,vf=0,_f=0,yf=!1;const Bs=(1+Math.sqrt(5))/2,No=1/Bs,lx=[new ae(-Bs,No,0),new ae(Bs,No,0),new ae(-No,0,Bs),new ae(No,0,Bs),new ae(0,Bs,-No),new ae(0,Bs,No),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class cx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,vf,_f),this._renderer.xr.enabled=yf,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xr,minFilter:xr,generateMipmaps:!1,type:Za,format:or,colorSpace:$o,depthBuffer:!1},o=ux(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iT(l)),this._blurMaterial=rT(l,e,t)}return o}_compileMaterial(e){const t=new Xi(this._lodPlanes[0],e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,r,o){const d=new Wi(90,1,t,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,g=m.toneMapping;m.getClearColor(ax),m.toneMapping=ms,m.autoClear=!1;const M=new y0({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1}),S=new Xi(new Qa,M);let E=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,E=!0):(M.color.copy(ax),E=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(d.up.set(0,f[y],0),d.lookAt(h[y],0,0)):N===1?(d.up.set(0,0,f[y]),d.lookAt(0,h[y],0)):(d.up.set(0,f[y],0),d.lookAt(0,0,h[y]));const R=this._cubeSize;Fc(o,N*R,y>2?R:0,R,R),m.setRenderTarget(o),E&&m.render(S,d),m.render(e,d)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=x,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Go||e.mapping===Wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dx());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Xi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Fc(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,gf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=lx[(o-l-1)%lx.length];this._blur(e,l-1,l,c,d)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,d){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new Xi(this._lodPlanes[o],h),g=h.uniforms,M=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Vs-1),E=l/S,_=isFinite(l)?1+Math.floor(m*E):Vs;_>Vs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vs}`);const y=[];let N=0;for(let I=0;I<Vs;++I){const j=I/E,L=Math.exp(-j*j/2);y.push(L),I===0?N+=L:I<_&&(N+=2*L)}for(let I=0;I<y.length;I++)y[I]=y[I]/N;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:R}=this;g.dTheta.value=S,g.mipInt.value=R-r;const C=this._sizeLods[o],k=3*C*(o>R-ko?o-R+ko:0),D=4*(this._cubeSize-C);Fc(t,k,D,3*C,2*C),f.setRenderTarget(t),f.render(x,gf)}}function iT(i){const e=[],t=[],r=[];let o=i;const l=i-ko+1+ox.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);t.push(d);let f=1/d;c>i-ko?f=ox[c-i+ko-1]:c===0&&(f=0),r.push(f);const h=1/(d-2),m=-h,x=1+h,g=[m,m,x,m,x,x,m,m,x,x,m,x],M=6,S=6,E=3,_=2,y=1,N=new Float32Array(E*S*M),R=new Float32Array(_*S*M),C=new Float32Array(y*S*M);for(let D=0;D<M;D++){const I=D%3*2/3-1,j=D>2?0:-1,L=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];N.set(L,E*S*D),R.set(g,_*S*D);const b=[D,D,D,D,D,D];C.set(b,y*S*D)}const k=new cr;k.setAttribute("position",new lr(N,E)),k.setAttribute("uv",new lr(R,_)),k.setAttribute("faceIndex",new lr(C,y)),e.push(k),o>ko&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ux(i,e,t){const r=new Xs(i,e,t);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fc(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function rT(i,e,t){const r=new Float32Array(Vs),o=new ae(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function dx(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function fx(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sT(i){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,h=f===Ff||f===Uf,m=f===Go||f===Wo;if(h||m){let x=e.get(d);const g=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return t===null&&(t=new cx(i)),x=h?t.fromEquirectangular(d,x):t.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return h&&M&&M.height>0||m&&M&&o(M)?(t===null&&(t=new cx(i)),x=h?t.fromEquirectangular(d):t.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",l),x.texture):null}}}return d}function o(d){let f=0;const h=6;for(let m=0;m<h;m++)d[m]!==void 0&&f++;return f===h}function l(d){const f=d.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function oT(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function aT(i,e,t,r){const o={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function f(x){const g=x.attributes;for(const M in g)e.update(g[M],i.ARRAY_BUFFER)}function h(x){const g=[],M=x.index,S=x.attributes.position;let E=0;if(M!==null){const N=M.array;E=M.version;for(let R=0,C=N.length;R<C;R+=3){const k=N[R+0],D=N[R+1],I=N[R+2];g.push(k,D,D,I,I,k)}}else if(S!==void 0){const N=S.array;E=S.version;for(let R=0,C=N.length/3-1;R<C;R+=3){const k=R+0,D=R+1,I=R+2;g.push(k,D,D,I,I,k)}}else return;const _=new(p0(g)?S0:M0)(g,1);_.version=E;const y=l.get(x);y&&e.remove(y),l.set(x,_)}function m(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&h(x)}else h(x);return l.get(x)}return{get:d,update:f,getWireframeAttribute:m}}function lT(i,e,t){let r;function o(g){r=g}let l,c;function d(g){l=g.type,c=g.bytesPerElement}function f(g,M){i.drawElements(r,M,l,g*c),t.update(M,r,1)}function h(g,M,S){S!==0&&(i.drawElementsInstanced(r,M,l,g*c,S),t.update(M,r,S))}function m(g,M,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,g,0,S);let _=0;for(let y=0;y<S;y++)_+=M[y];t.update(_,r,1)}function x(g,M,S,E){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)h(g[y]/c,M[y],E[y]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,g,0,E,0,S);let y=0;for(let N=0;N<S;N++)y+=M[N]*E[N];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function cT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function uT(i,e,t){const r=new WeakMap,o=new vn;function l(c,d,f){const h=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=m!==void 0?m.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let b=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;g!==void 0&&g.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let C=0;S===!0&&(C=1),E===!0&&(C=2),_===!0&&(C=3);let k=d.attributes.position.count*C,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const I=new Float32Array(k*D*4*x),j=new g0(I,k,D,x);j.type=kr,j.needsUpdate=!0;const L=C*4;for(let V=0;V<x;V++){const he=y[V],W=N[V],Z=R[V],O=k*D*4*V;for(let G=0;G<he.count;G++){const Q=G*L;S===!0&&(o.fromBufferAttribute(he,G),I[O+Q+0]=o.x,I[O+Q+1]=o.y,I[O+Q+2]=o.z,I[O+Q+3]=0),E===!0&&(o.fromBufferAttribute(W,G),I[O+Q+4]=o.x,I[O+Q+5]=o.y,I[O+Q+6]=o.z,I[O+Q+7]=0),_===!0&&(o.fromBufferAttribute(Z,G),I[O+Q+8]=o.x,I[O+Q+9]=o.y,I[O+Q+10]=o.z,I[O+Q+11]=Z.itemSize===4?o.w:1)}}g={count:x,texture:j,size:new Ht(k,D)},r.set(d,g),d.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let _=0;_<h.length;_++)S+=h[_];const E=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:l}}function dT(i,e,t,r){let o=new WeakMap;function l(f){const h=r.render.frame,m=f.geometry,x=e.get(f,m);if(o.get(x)!==h&&(e.update(x),o.set(x,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;o.get(g)!==h&&(g.update(),o.set(g,h))}return x}function c(){o=new WeakMap}function d(f){const h=f.target;h.removeEventListener("dispose",d),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const N0=new Si,hx=new C0(1,1),I0=new g0,F0=new SS,U0=new T0,px=[],mx=[],gx=new Float32Array(16),xx=new Float32Array(9),vx=new Float32Array(4);function ea(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let l=px[o];if(l===void 0&&(l=new Float32Array(o),px[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function Fn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function lu(i,e){let t=mx[e];t===void 0&&(t=new Int32Array(e),mx[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function fT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function pT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function mT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function gT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;vx.set(r),i.uniformMatrix2fv(this.addr,!1,vx),Un(t,r)}}function xT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;xx.set(r),i.uniformMatrix3fv(this.addr,!1,xx),Un(t,r)}}function vT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;gx.set(r),i.uniformMatrix4fv(this.addr,!1,gx),Un(t,r)}}function _T(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function MT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function ST(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function ET(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function TT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function CT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function AT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(hx.compareFunction=h0,l=hx):l=N0,t.setTexture2D(e||l,o)}function RT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||F0,o)}function bT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||U0,o)}function PT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||I0,o)}function LT(i){switch(i){case 5126:return fT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return xT;case 35676:return vT;case 5124:case 35670:return _T;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ST;case 5125:return ET;case 36294:return wT;case 36295:return TT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return PT}}function DT(i,e){i.uniform1fv(this.addr,e)}function NT(i,e){const t=ea(e,this.size,2);i.uniform2fv(this.addr,t)}function IT(i,e){const t=ea(e,this.size,3);i.uniform3fv(this.addr,t)}function FT(i,e){const t=ea(e,this.size,4);i.uniform4fv(this.addr,t)}function UT(i,e){const t=ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kT(i,e){const t=ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OT(i,e){const t=ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zT(i,e){i.uniform1iv(this.addr,e)}function BT(i,e){i.uniform2iv(this.addr,e)}function HT(i,e){i.uniform3iv(this.addr,e)}function VT(i,e){i.uniform4iv(this.addr,e)}function GT(i,e){i.uniform1uiv(this.addr,e)}function WT(i,e){i.uniform2uiv(this.addr,e)}function jT(i,e){i.uniform3uiv(this.addr,e)}function XT(i,e){i.uniform4uiv(this.addr,e)}function $T(i,e,t){const r=this.cache,o=e.length,l=lu(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||N0,l[c])}function YT(i,e,t){const r=this.cache,o=e.length,l=lu(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||F0,l[c])}function ZT(i,e,t){const r=this.cache,o=e.length,l=lu(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||U0,l[c])}function qT(i,e,t){const r=this.cache,o=e.length,l=lu(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||I0,l[c])}function KT(i){switch(i){case 5126:return DT;case 35664:return NT;case 35665:return IT;case 35666:return FT;case 35674:return UT;case 35675:return kT;case 35676:return OT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return GT;case 36294:return WT;case 36295:return jT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return qT}}class QT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LT(t.type)}}class JT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KT(t.type)}}class eC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Mf=/(\w+)(\])?(\[|\.)?/g;function _x(i,e){i.seq.push(e),i.map[e.id]=e}function tC(i,e,t){const r=i.name,o=r.length;for(Mf.lastIndex=0;;){const l=Mf.exec(r),c=Mf.lastIndex;let d=l[1];const f=l[2]==="]",h=l[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===o){_x(t,h===void 0?new QT(d,i,e):new JT(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new eC(d),_x(t,x)),t=x}}}class Vc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);tC(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function yx(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const nC=37297;let iC=0;function rC(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Mx=new xt;function sC(i){Bt._getMatrix(Mx,Bt.workingColorSpace,i);const e=`mat3( ${Mx.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(i)){case jc:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sx(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+rC(i.getShaderSource(e),c)}else return o}function oC(i,e){const t=sC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aC(i,e){let t;switch(e){case DM:t="Linear";break;case NM:t="Reinhard";break;case IM:t="Cineon";break;case FM:t="ACESFilmic";break;case kM:t="AgX";break;case OM:t="Neutral";break;case UM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new ae;function lC(){Bt.getLuminanceCoefficients(Uc);const i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function uC(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function dC(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=i.getActiveAttrib(e,o),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function ka(i){return i!==""}function Ex(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fC=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(fC,pC)}const hC=new Map;function pC(i,e){let t=Mt[e];if(t===void 0){const r=hC.get(e);if(r!==void 0)t=Mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}const mC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(i){return i.replace(mC,gC)}function gC(i,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Cx(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xC(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function vC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Go:case Wo:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _C(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function yC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case PM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function MC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function SC(i,e,t,r){const o=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=xC(t),h=vC(t),m=_C(t),x=yC(t),g=MC(t),M=cC(t),S=uC(l),E=o.createProgram();let _,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ka).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ka).join(`
`),y.length>0&&(y+=`
`)):(_=[Cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),y=[Cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?Mt.tonemapping_pars_fragment:"",t.toneMapping!==ms?aC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,oC("linearToOutputTexel",t.outputColorSpace),lC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),c=ph(c),c=Ex(c,t),c=wx(c,t),d=ph(d),d=Ex(d,t),d=wx(d,t),c=Tx(c),d=Tx(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=N+_+c,C=N+y+d,k=yx(o,o.VERTEX_SHADER,R),D=yx(o,o.FRAGMENT_SHADER,C);o.attachShader(E,k),o.attachShader(E,D),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function I(V){if(i.debug.checkShaderErrors){const he=o.getProgramInfoLog(E).trim(),W=o.getShaderInfoLog(k).trim(),Z=o.getShaderInfoLog(D).trim();let O=!0,G=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,k,D);else{const Q=Sx(o,k,"vertex"),z=Sx(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+he+`
`+Q+`
`+z)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(W===""||Z==="")&&(G=!1);G&&(V.diagnostics={runnable:O,programLog:he,vertexShader:{log:W,prefix:_},fragmentShader:{log:Z,prefix:y}})}o.deleteShader(k),o.deleteShader(D),j=new Vc(o,E),L=dC(o,E)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(E,nC)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=D,this}let EC=0;class wC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new TC(e),t.set(e,r)),r}}class TC{constructor(e){this.id=EC++,this.code=e,this.usedTimes=0}}function CC(i,e,t,r,o,l,c){const d=new v0,f=new wC,h=new Set,m=[],x=o.logarithmicDepthBuffer,g=o.vertexTextures;let M=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return h.add(L),L===0?"uv":`uv${L}`}function _(L,b,V,he,W){const Z=he.fog,O=W.geometry,G=L.isMeshStandardMaterial?he.environment:null,Q=(L.isMeshStandardMaterial?t:e).get(L.envMap||G),z=Q&&Q.mapping===iu?Q.image.height:null,ue=S[L.type];L.precision!==null&&(M=o.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,H=te!==void 0?te.length:0;let pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let De,ie,xe,Se;if(ue){const St=mr[ue];De=St.vertexShader,ie=St.fragmentShader}else De=L.vertexShader,ie=L.fragmentShader,f.update(L),xe=f.getVertexShaderID(L),Se=f.getFragmentShaderID(L);const Me=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,et=W.isBatchedMesh===!0,vt=!!L.map,Et=!!L.matcap,Wt=!!Q,Y=!!L.aoMap,kn=!!L.lightMap,ht=!!L.bumpMap,_t=!!L.normalMap,Qe=!!L.displacementMap,Vt=!!L.emissiveMap,Xe=!!L.metalnessMap,F=!!L.roughnessMap,A=L.anisotropy>0,re=L.clearcoat>0,le=L.dispersion>0,ce=L.iridescence>0,ve=L.sheen>0,Ze=L.transmission>0,Ne=A&&!!L.anisotropyMap,Ve=re&&!!L.clearcoatMap,pt=re&&!!L.clearcoatNormalMap,Ae=re&&!!L.clearcoatRoughnessMap,We=ce&&!!L.iridescenceMap,tt=ce&&!!L.iridescenceThicknessMap,rt=ve&&!!L.sheenColorMap,je=ve&&!!L.sheenRoughnessMap,at=!!L.specularMap,ct=!!L.specularColorMap,kt=!!L.specularIntensityMap,J=Ze&&!!L.transmissionMap,Fe=Ze&&!!L.thicknessMap,me=!!L.gradientMap,_e=!!L.alphaMap,ke=L.alphaTest>0,Ue=!!L.alphaHash,dt=!!L.extensions;let Yt=ms;L.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const gn={shaderID:ue,shaderType:L.type,shaderName:L.name,vertexShader:De,fragmentShader:ie,defines:L.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:et,batchingColor:et&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:$o,alphaToCoverage:!!L.alphaToCoverage,map:vt,matcap:Et,envMap:Wt,envMapMode:Wt&&Q.mapping,envMapCubeUVHeight:z,aoMap:Y,lightMap:kn,bumpMap:ht,normalMap:_t,displacementMap:g&&Qe,emissiveMap:Vt,normalMapObjectSpace:_t&&L.normalMapType===VM,normalMapTangentSpace:_t&&L.normalMapType===f0,metalnessMap:Xe,roughnessMap:F,anisotropy:A,anisotropyMap:Ne,clearcoat:re,clearcoatMap:Ve,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ae,dispersion:le,iridescence:ce,iridescenceMap:We,iridescenceThicknessMap:tt,sheen:ve,sheenColorMap:rt,sheenRoughnessMap:je,specularMap:at,specularColorMap:ct,specularIntensityMap:kt,transmission:Ze,transmissionMap:J,thicknessMap:Fe,gradientMap:me,opaque:L.transparent===!1&&L.blending===Oo&&L.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:Ue,combine:L.combine,mapUv:vt&&E(L.map.channel),aoMapUv:Y&&E(L.aoMap.channel),lightMapUv:kn&&E(L.lightMap.channel),bumpMapUv:ht&&E(L.bumpMap.channel),normalMapUv:_t&&E(L.normalMap.channel),displacementMapUv:Qe&&E(L.displacementMap.channel),emissiveMapUv:Vt&&E(L.emissiveMap.channel),metalnessMapUv:Xe&&E(L.metalnessMap.channel),roughnessMapUv:F&&E(L.roughnessMap.channel),anisotropyMapUv:Ne&&E(L.anisotropyMap.channel),clearcoatMapUv:Ve&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:je&&E(L.sheenRoughnessMap.channel),specularMapUv:at&&E(L.specularMap.channel),specularColorMapUv:ct&&E(L.specularColorMap.channel),specularIntensityMapUv:kt&&E(L.specularIntensityMap.channel),transmissionMapUv:J&&E(L.transmissionMap.channel),thicknessMapUv:Fe&&E(L.thicknessMap.channel),alphaMapUv:_e&&E(L.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_t||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(vt||_e),fog:!!Z,useFog:L.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:be,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:vt&&L.map.isVideoTexture===!0&&Bt.getTransfer(L.map.colorSpace)===$t,decodeVideoTextureEmissive:Vt&&L.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(L.emissiveMap.colorSpace)===$t,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ur,flipSided:L.side===Mi,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:dt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&L.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return gn.vertexUv1s=h.has(1),gn.vertexUv2s=h.has(2),gn.vertexUv3s=h.has(3),h.clear(),gn}function y(L){const b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)b.push(V),b.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(N(b,L),R(b,L),b.push(i.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function N(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function R(L,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),L.push(d.mask)}function C(L){const b=S[L.type];let V;if(b){const he=mr[b];V=IS.clone(he.uniforms)}else V=L.uniforms;return V}function k(L,b){let V;for(let he=0,W=m.length;he<W;he++){const Z=m[he];if(Z.cacheKey===b){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new SC(i,b,L,l),m.push(V)),V}function D(L){if(--L.usedTimes===0){const b=m.indexOf(L);m[b]=m[m.length-1],m.pop(),L.destroy()}}function I(L){f.remove(L)}function j(){f.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:C,acquireProgram:k,releaseProgram:D,releaseShaderCache:I,programs:m,dispose:j}}function AC(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function o(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function RC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rx(){const i=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(x,g,M,S,E,_){let y=i[e];return y===void 0?(y={id:x.id,object:x,geometry:g,material:M,groupOrder:S,renderOrder:x.renderOrder,z:E,group:_},i[e]=y):(y.id=x.id,y.object=x,y.geometry=g,y.material=M,y.groupOrder=S,y.renderOrder=x.renderOrder,y.z=E,y.group=_),e++,y}function d(x,g,M,S,E,_){const y=c(x,g,M,S,E,_);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):t.push(y)}function f(x,g,M,S,E,_){const y=c(x,g,M,S,E,_);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):t.unshift(y)}function h(x,g){t.length>1&&t.sort(x||RC),r.length>1&&r.sort(g||Ax),o.length>1&&o.sort(g||Ax)}function m(){for(let x=e,g=i.length;x<g;x++){const M=i[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:m,sort:h}}function bC(){let i=new WeakMap;function e(r,o){const l=i.get(r);let c;return l===void 0?(c=new Rx,i.set(r,[c])):o>=l.length?(c=new Rx,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function PC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new It};break;case"SpotLight":t={position:new ae,direction:new ae,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return i[e.id]=t,t}}}function LC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let DC=0;function NC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function IC(i){const e=new PC,t=LC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const o=new ae,l=new mn,c=new mn;function d(h){let m=0,x=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,S=0,E=0,_=0,y=0,N=0,R=0,C=0,k=0,D=0,I=0;h.sort(NC);for(let L=0,b=h.length;L<b;L++){const V=h[L],he=V.color,W=V.intensity,Z=V.distance,O=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=he.r*W,x+=he.g*W,g+=he.b*W;else if(V.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(V.sh.coefficients[G],W);I++}else if(V.isDirectionalLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,z=t.get(V);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=O,r.directionalShadowMatrix[M]=V.shadow.matrix,N++}r.directional[M]=G,M++}else if(V.isSpotLight){const G=e.get(V);G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(he).multiplyScalar(W),G.distance=Z,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,r.spot[E]=G;const Q=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,Q.updateMatrices(V),V.castShadow&&D++),r.spotLightMatrix[E]=Q.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,r.spotShadow[E]=z,r.spotShadowMap[E]=O,C++}E++}else if(V.isRectAreaLight){const G=e.get(V);G.color.copy(he).multiplyScalar(W),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),r.rectArea[_]=G,_++}else if(V.isPointLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),G.distance=V.distance,G.decay=V.decay,V.castShadow){const Q=V.shadow,z=t.get(V);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,r.pointShadow[S]=z,r.pointShadowMap[S]=O,r.pointShadowMatrix[S]=V.shadow.matrix,R++}r.point[S]=G,S++}else if(V.isHemisphereLight){const G=e.get(V);G.skyColor.copy(V.color).multiplyScalar(W),G.groundColor.copy(V.groundColor).multiplyScalar(W),r.hemi[y]=G,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=g;const j=r.hash;(j.directionalLength!==M||j.pointLength!==S||j.spotLength!==E||j.rectAreaLength!==_||j.hemiLength!==y||j.numDirectionalShadows!==N||j.numPointShadows!==R||j.numSpotShadows!==C||j.numSpotMaps!==k||j.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=_,r.point.length=S,r.hemi.length=y,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+k-D,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,j.directionalLength=M,j.pointLength=S,j.spotLength=E,j.rectAreaLength=_,j.hemiLength=y,j.numDirectionalShadows=N,j.numPointShadows=R,j.numSpotShadows=C,j.numSpotMaps=k,j.numLightProbes=I,r.version=DC++)}function f(h,m){let x=0,g=0,M=0,S=0,E=0;const _=m.matrixWorldInverse;for(let y=0,N=h.length;y<N;y++){const R=h[y];if(R.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),x++}else if(R.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),M++}else if(R.isRectAreaLight){const C=r.rectArea[S];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(_),c.identity(),l.copy(R.matrixWorld),l.premultiply(_),c.extractRotation(l),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),S++}else if(R.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(_),g++}else if(R.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(_),E++}}}return{setup:d,setupView:f,state:r}}function bx(i){const e=new IC(i),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function c(m){r.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function FC(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new bx(i),e.set(o,[d])):l>=c.length?(d=new bx(i),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const UC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OC(i,e,t){let r=new Uh;const o=new Ht,l=new Ht,c=new vn,d=new a1({depthPacking:HM}),f=new l1,h={},m=t.maxTextureSize,x={[gs]:Mi,[Mi]:gs,[Ur]:Ur},g=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:UC,fragmentShader:kC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const S=new cr;S.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Xi(S,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jx;let y=this.type;this.render=function(D,I,j){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const L=i.getRenderTarget(),b=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),he=i.state;he.setBlending(ps),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const W=y!==Fr&&this.type===Fr,Z=y===Fr&&this.type!==Fr;for(let O=0,G=D.length;O<G;O++){const Q=D[O],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ue=z.getFrameExtents();if(o.multiply(ue),l.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,z.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,z.mapSize.y=l.y)),z.map===null||W===!0||Z===!0){const H=this.type!==Fr?{minFilter:ar,magFilter:ar}:{};z.map!==null&&z.map.dispose(),z.map=new Xs(o.x,o.y,H),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const te=z.getViewportCount();for(let H=0;H<te;H++){const pe=z.getViewport(H);c.set(l.x*pe.x,l.y*pe.y,l.x*pe.z,l.y*pe.w),he.viewport(c),z.updateMatrices(Q,H),r=z.getFrustum(),C(I,j,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Fr&&N(z,j),z.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(L,b,V)};function N(D,I){const j=e.update(E);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xs(o.x,o.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(I,null,j,g,E,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(I,null,j,M,E,null)}function R(D,I,j,L){let b=null;const V=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)b=V;else if(b=j.isPointLight===!0?f:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const he=b.uuid,W=I.uuid;let Z=h[he];Z===void 0&&(Z={},h[he]=Z);let O=Z[W];O===void 0&&(O=b.clone(),Z[W]=O,I.addEventListener("dispose",k)),b=O}if(b.visible=I.visible,b.wireframe=I.wireframe,L===Fr?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:x[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const he=i.properties.get(b);he.light=j}return b}function C(D,I,j,L,b){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Fr)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);const W=e.update(D),Z=D.material;if(Array.isArray(Z)){const O=W.groups;for(let G=0,Q=O.length;G<Q;G++){const z=O[G],ue=Z[z.materialIndex];if(ue&&ue.visible){const te=R(D,ue,L,b);D.onBeforeShadow(i,D,I,j,W,te,z),i.renderBufferDirect(j,null,W,te,D,z),D.onAfterShadow(i,D,I,j,W,te,z)}}}else if(Z.visible){const O=R(D,Z,L,b);D.onBeforeShadow(i,D,I,j,W,O,null),i.renderBufferDirect(j,null,W,O,D,null),D.onAfterShadow(i,D,I,j,W,O,null)}}const he=D.children;for(let W=0,Z=he.length;W<Z;W++)C(he[W],I,j,L,b)}function k(D){D.target.removeEventListener("dispose",k);for(const j in h){const L=h[j],b=D.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}const zC={[Rf]:bf,[Pf]:Nf,[Lf]:If,[Vo]:Df,[bf]:Rf,[Nf]:Pf,[If]:Lf,[Df]:Vo};function BC(i,e){function t(){let J=!1;const Fe=new vn;let me=null;const _e=new vn(0,0,0,0);return{setMask:function(ke){me!==ke&&!J&&(i.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){J=ke},setClear:function(ke,Ue,dt,Yt,gn){gn===!0&&(ke*=Yt,Ue*=Yt,dt*=Yt),Fe.set(ke,Ue,dt,Yt),_e.equals(Fe)===!1&&(i.clearColor(ke,Ue,dt,Yt),_e.copy(Fe))},reset:function(){J=!1,me=null,_e.set(-1,0,0,0)}}}function r(){let J=!1,Fe=!1,me=null,_e=null,ke=null;return{setReversed:function(Ue){if(Fe!==Ue){const dt=e.get("EXT_clip_control");Fe?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Yt=ke;ke=null,this.setClear(Yt)}Fe=Ue},getReversed:function(){return Fe},setTest:function(Ue){Ue?Me(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ue){me!==Ue&&!J&&(i.depthMask(Ue),me=Ue)},setFunc:function(Ue){if(Fe&&(Ue=zC[Ue]),_e!==Ue){switch(Ue){case Rf:i.depthFunc(i.NEVER);break;case bf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case Lf:i.depthFunc(i.EQUAL);break;case Df:i.depthFunc(i.GEQUAL);break;case Nf:i.depthFunc(i.GREATER);break;case If:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Ue}},setLocked:function(Ue){J=Ue},setClear:function(Ue){ke!==Ue&&(Fe&&(Ue=1-Ue),i.clearDepth(Ue),ke=Ue)},reset:function(){J=!1,me=null,_e=null,ke=null,Fe=!1}}}function o(){let J=!1,Fe=null,me=null,_e=null,ke=null,Ue=null,dt=null,Yt=null,gn=null;return{setTest:function(St){J||(St?Me(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(St){Fe!==St&&!J&&(i.stencilMask(St),Fe=St)},setFunc:function(St,Gt,On){(me!==St||_e!==Gt||ke!==On)&&(i.stencilFunc(St,Gt,On),me=St,_e=Gt,ke=On)},setOp:function(St,Gt,On){(Ue!==St||dt!==Gt||Yt!==On)&&(i.stencilOp(St,Gt,On),Ue=St,dt=Gt,Yt=On)},setLocked:function(St){J=St},setClear:function(St){gn!==St&&(i.clearStencil(St),gn=St)},reset:function(){J=!1,Fe=null,me=null,_e=null,ke=null,Ue=null,dt=null,Yt=null,gn=null}}}const l=new t,c=new r,d=new o,f=new WeakMap,h=new WeakMap;let m={},x={},g=new WeakMap,M=[],S=null,E=!1,_=null,y=null,N=null,R=null,C=null,k=null,D=null,I=new It(0,0,0),j=0,L=!1,b=null,V=null,he=null,W=null,Z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=Q>=2);let ue=null,te={};const H=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),De=new vn().fromArray(H),ie=new vn().fromArray(pe);function xe(J,Fe,me,_e){const ke=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(J,Ue),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<me;dt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Fe+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Ue}const Se={};Se[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Me(i.DEPTH_TEST),c.setFunc(Vo),ht(!1),_t(Tg),Me(i.CULL_FACE),Y(ps);function Me(J){m[J]!==!0&&(i.enable(J),m[J]=!0)}function be(J){m[J]!==!1&&(i.disable(J),m[J]=!1)}function ze(J,Fe){return x[J]!==Fe?(i.bindFramebuffer(J,Fe),x[J]=Fe,J===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Fe),J===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function et(J,Fe){let me=M,_e=!1;if(J){me=g.get(Fe),me===void 0&&(me=[],g.set(Fe,me));const ke=J.textures;if(me.length!==ke.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,dt=ke.length;Ue<dt;Ue++)me[Ue]=i.COLOR_ATTACHMENT0+Ue;me.length=ke.length,_e=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,_e=!0);_e&&i.drawBuffers(me)}function vt(J){return S!==J?(i.useProgram(J),S=J,!0):!1}const Et={[Hs]:i.FUNC_ADD,[hM]:i.FUNC_SUBTRACT,[pM]:i.FUNC_REVERSE_SUBTRACT};Et[mM]=i.MIN,Et[gM]=i.MAX;const Wt={[xM]:i.ZERO,[vM]:i.ONE,[_M]:i.SRC_COLOR,[Cf]:i.SRC_ALPHA,[TM]:i.SRC_ALPHA_SATURATE,[EM]:i.DST_COLOR,[MM]:i.DST_ALPHA,[yM]:i.ONE_MINUS_SRC_COLOR,[Af]:i.ONE_MINUS_SRC_ALPHA,[wM]:i.ONE_MINUS_DST_COLOR,[SM]:i.ONE_MINUS_DST_ALPHA,[CM]:i.CONSTANT_COLOR,[AM]:i.ONE_MINUS_CONSTANT_COLOR,[RM]:i.CONSTANT_ALPHA,[bM]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(J,Fe,me,_e,ke,Ue,dt,Yt,gn,St){if(J===ps){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(Me(i.BLEND),E=!0),J!==fM){if(J!==_||St!==L){if((y!==Hs||C!==Hs)&&(i.blendEquation(i.FUNC_ADD),y=Hs,C=Hs),St)switch(J){case Oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cg:i.blendFunc(i.ONE,i.ONE);break;case Ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}N=null,R=null,k=null,D=null,I.set(0,0,0),j=0,_=J,L=St}return}ke=ke||Fe,Ue=Ue||me,dt=dt||_e,(Fe!==y||ke!==C)&&(i.blendEquationSeparate(Et[Fe],Et[ke]),y=Fe,C=ke),(me!==N||_e!==R||Ue!==k||dt!==D)&&(i.blendFuncSeparate(Wt[me],Wt[_e],Wt[Ue],Wt[dt]),N=me,R=_e,k=Ue,D=dt),(Yt.equals(I)===!1||gn!==j)&&(i.blendColor(Yt.r,Yt.g,Yt.b,gn),I.copy(Yt),j=gn),_=J,L=!1}function kn(J,Fe){J.side===Ur?be(i.CULL_FACE):Me(i.CULL_FACE);let me=J.side===Mi;Fe&&(me=!me),ht(me),J.blending===Oo&&J.transparent===!1?Y(ps):Y(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),l.setMask(J.colorWrite);const _e=J.stencilWrite;d.setTest(_e),_e&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Vt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(J){b!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),b=J)}function _t(J){J!==cM?(Me(i.CULL_FACE),J!==V&&(J===Tg?i.cullFace(i.BACK):J===uM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),V=J}function Qe(J){J!==he&&(G&&i.lineWidth(J),he=J)}function Vt(J,Fe,me){J?(Me(i.POLYGON_OFFSET_FILL),(W!==Fe||Z!==me)&&(i.polygonOffset(Fe,me),W=Fe,Z=me)):be(i.POLYGON_OFFSET_FILL)}function Xe(J){J?Me(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function F(J){J===void 0&&(J=i.TEXTURE0+O-1),ue!==J&&(i.activeTexture(J),ue=J)}function A(J,Fe,me){me===void 0&&(ue===null?me=i.TEXTURE0+O-1:me=ue);let _e=te[me];_e===void 0&&(_e={type:void 0,texture:void 0},te[me]=_e),(_e.type!==J||_e.texture!==Fe)&&(ue!==me&&(i.activeTexture(me),ue=me),i.bindTexture(J,Fe||Se[J]),_e.type=J,_e.texture=Fe)}function re(){const J=te[ue];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ve(){try{i.texSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function pt(){try{i.texStorage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function rt(J){De.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),De.copy(J))}function je(J){ie.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),ie.copy(J))}function at(J,Fe){let me=h.get(Fe);me===void 0&&(me=new WeakMap,h.set(Fe,me));let _e=me.get(J);_e===void 0&&(_e=i.getUniformBlockIndex(Fe,J.name),me.set(J,_e))}function ct(J,Fe){const _e=h.get(Fe).get(J);f.get(Fe)!==_e&&(i.uniformBlockBinding(Fe,_e,J.__bindingPointIndex),f.set(Fe,_e))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ue=null,te={},x={},g=new WeakMap,M=[],S=null,E=!1,_=null,y=null,N=null,R=null,C=null,k=null,D=null,I=new It(0,0,0),j=0,L=!1,b=null,V=null,he=null,W=null,Z=null,De.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Me,disable:be,bindFramebuffer:ze,drawBuffers:et,useProgram:vt,setBlending:Y,setMaterial:kn,setFlipSided:ht,setCullFace:_t,setLineWidth:Qe,setPolygonOffset:Vt,setScissorTest:Xe,activeTexture:F,bindTexture:A,unbindTexture:re,compressedTexImage2D:le,compressedTexImage3D:ce,texImage2D:We,texImage3D:tt,updateUBOMapping:at,uniformBlockBinding:ct,texStorage2D:pt,texStorage3D:Ae,texSubImage2D:ve,texSubImage3D:Ze,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ve,scissor:rt,viewport:je,reset:kt}}function HC(i,e,t,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ht,m=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,A){return M?new OffscreenCanvas(F,A):$c("canvas")}function E(F,A,re){let le=1;const ce=Xe(F);if((ce.width>re||ce.height>re)&&(le=re/Math.max(ce.width,ce.height)),le<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ve=Math.floor(le*ce.width),Ze=Math.floor(le*ce.height);x===void 0&&(x=S(ve,Ze));const Ne=A?S(ve,Ze):x;return Ne.width=ve,Ne.height=Ze,Ne.getContext("2d").drawImage(F,0,0,ve,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ve+"x"+Ze+")."),Ne}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),F;return F}function _(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(F,A,re,le,ce=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ve=A;if(A===i.RED&&(re===i.FLOAT&&(ve=i.R32F),re===i.HALF_FLOAT&&(ve=i.R16F),re===i.UNSIGNED_BYTE&&(ve=i.R8)),A===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(ve=i.R8UI),re===i.UNSIGNED_SHORT&&(ve=i.R16UI),re===i.UNSIGNED_INT&&(ve=i.R32UI),re===i.BYTE&&(ve=i.R8I),re===i.SHORT&&(ve=i.R16I),re===i.INT&&(ve=i.R32I)),A===i.RG&&(re===i.FLOAT&&(ve=i.RG32F),re===i.HALF_FLOAT&&(ve=i.RG16F),re===i.UNSIGNED_BYTE&&(ve=i.RG8)),A===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(ve=i.RG8UI),re===i.UNSIGNED_SHORT&&(ve=i.RG16UI),re===i.UNSIGNED_INT&&(ve=i.RG32UI),re===i.BYTE&&(ve=i.RG8I),re===i.SHORT&&(ve=i.RG16I),re===i.INT&&(ve=i.RG32I)),A===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(ve=i.RGB8UI),re===i.UNSIGNED_SHORT&&(ve=i.RGB16UI),re===i.UNSIGNED_INT&&(ve=i.RGB32UI),re===i.BYTE&&(ve=i.RGB8I),re===i.SHORT&&(ve=i.RGB16I),re===i.INT&&(ve=i.RGB32I)),A===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(ve=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(ve=i.RGBA16UI),re===i.UNSIGNED_INT&&(ve=i.RGBA32UI),re===i.BYTE&&(ve=i.RGBA8I),re===i.SHORT&&(ve=i.RGBA16I),re===i.INT&&(ve=i.RGBA32I)),A===i.RGB&&re===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),A===i.RGBA){const Ze=ce?jc:Bt.getTransfer(le);re===i.FLOAT&&(ve=i.RGBA32F),re===i.HALF_FLOAT&&(ve=i.RGBA16F),re===i.UNSIGNED_BYTE&&(ve=Ze===$t?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function C(F,A){let re;return F?A===null||A===js||A===jo?re=i.DEPTH24_STENCIL8:A===kr?re=i.DEPTH32F_STENCIL8:A===Va&&(re=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===js||A===jo?re=i.DEPTH_COMPONENT24:A===kr?re=i.DEPTH_COMPONENT32F:A===Va&&(re=i.DEPTH_COMPONENT16),re}function k(F,A){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==ar&&F.minFilter!==xr?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function D(F){const A=F.target;A.removeEventListener("dispose",D),j(A),A.isVideoTexture&&m.delete(A)}function I(F){const A=F.target;A.removeEventListener("dispose",I),b(A)}function j(F){const A=r.get(F);if(A.__webglInit===void 0)return;const re=F.source,le=g.get(re);if(le){const ce=le[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&L(F),Object.keys(le).length===0&&g.delete(re)}r.remove(F)}function L(F){const A=r.get(F);i.deleteTexture(A.__webglTexture);const re=F.source,le=g.get(re);delete le[A.__cacheKey],c.memory.textures--}function b(F){const A=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let ce=0;ce<A.__webglFramebuffer[le].length;ce++)i.deleteFramebuffer(A.__webglFramebuffer[le][ce]);else i.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)i.deleteFramebuffer(A.__webglFramebuffer[le]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=F.textures;for(let le=0,ce=re.length;le<ce;le++){const ve=r.get(re[le]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),c.memory.textures--),r.remove(re[le])}r.remove(F)}let V=0;function he(){V=0}function W(){const F=V;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),V+=1,F}function Z(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function O(F,A){const re=r.get(F);if(F.isVideoTexture&&Qe(F),F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){const le=F.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(re,F,A);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+A)}function G(F,A){const re=r.get(F);if(F.version>0&&re.__version!==F.version){ie(re,F,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+A)}function Q(F,A){const re=r.get(F);if(F.version>0&&re.__version!==F.version){ie(re,F,A);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+A)}function z(F,A){const re=r.get(F);if(F.version>0&&re.__version!==F.version){xe(re,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+A)}const ue={[kf]:i.REPEAT,[Gs]:i.CLAMP_TO_EDGE,[Of]:i.MIRRORED_REPEAT},te={[ar]:i.NEAREST,[zM]:i.NEAREST_MIPMAP_NEAREST,[cc]:i.NEAREST_MIPMAP_LINEAR,[xr]:i.LINEAR,[jd]:i.LINEAR_MIPMAP_NEAREST,[Ws]:i.LINEAR_MIPMAP_LINEAR},H={[GM]:i.NEVER,[ZM]:i.ALWAYS,[WM]:i.LESS,[h0]:i.LEQUAL,[jM]:i.EQUAL,[YM]:i.GEQUAL,[XM]:i.GREATER,[$M]:i.NOTEQUAL};function pe(F,A){if(A.type===kr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xr||A.magFilter===jd||A.magFilter===cc||A.magFilter===Ws||A.minFilter===xr||A.minFilter===jd||A.minFilter===cc||A.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ue[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ue[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ue[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,te[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,te[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,H[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ar||A.minFilter!==cc&&A.minFilter!==Ws||A.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function De(F,A){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",D));const le=A.source;let ce=g.get(le);ce===void 0&&(ce={},g.set(le,ce));const ve=Z(A);if(ve!==F.__cacheKey){ce[ve]===void 0&&(ce[ve]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,re=!0),ce[ve].usedTimes++;const Ze=ce[F.__cacheKey];Ze!==void 0&&(ce[F.__cacheKey].usedTimes--,Ze.usedTimes===0&&L(A)),F.__cacheKey=ve,F.__webglTexture=ce[ve].texture}return re}function ie(F,A,re){let le=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=i.TEXTURE_3D);const ce=De(F,A),ve=A.source;t.bindTexture(le,F.__webglTexture,i.TEXTURE0+re);const Ze=r.get(ve);if(ve.version!==Ze.__version||ce===!0){t.activeTexture(i.TEXTURE0+re);const Ne=Bt.getPrimaries(Bt.workingColorSpace),Ve=A.colorSpace===ds?null:Bt.getPrimaries(A.colorSpace),pt=A.colorSpace===ds||Ne===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ae=E(A.image,!1,o.maxTextureSize);Ae=Vt(A,Ae);const We=l.convert(A.format,A.colorSpace),tt=l.convert(A.type);let rt=R(A.internalFormat,We,tt,A.colorSpace,A.isVideoTexture);pe(le,A);let je;const at=A.mipmaps,ct=A.isVideoTexture!==!0,kt=Ze.__version===void 0||ce===!0,J=ve.dataReady,Fe=k(A,Ae);if(A.isDepthTexture)rt=C(A.format===Xo,A.type),kt&&(ct?t.texStorage2D(i.TEXTURE_2D,1,rt,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,rt,Ae.width,Ae.height,0,We,tt,null));else if(A.isDataTexture)if(at.length>0){ct&&kt&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,at[0].width,at[0].height);for(let me=0,_e=at.length;me<_e;me++)je=at[me],ct?J&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,tt,je.data):t.texImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,We,tt,je.data);A.generateMipmaps=!1}else ct?(kt&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,Ae.width,Ae.height),J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,We,tt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,rt,Ae.width,Ae.height,0,We,tt,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,rt,at[0].width,at[0].height,Ae.depth);for(let me=0,_e=at.length;me<_e;me++)if(je=at[me],A.format!==or)if(We!==null)if(ct){if(J)if(A.layerUpdates.size>0){const ke=sx(je.width,je.height,A.format,A.type);for(const Ue of A.layerUpdates){const dt=je.data.subarray(Ue*ke/je.data.BYTES_PER_ELEMENT,(Ue+1)*ke/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ue,je.width,je.height,1,We,dt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,Ae.depth,We,je.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,rt,je.width,je.height,Ae.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,Ae.depth,We,tt,je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,rt,je.width,je.height,Ae.depth,0,We,tt,je.data)}else{ct&&kt&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,at[0].width,at[0].height);for(let me=0,_e=at.length;me<_e;me++)je=at[me],A.format!==or?We!==null?ct?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,je.data):t.compressedTexImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?J&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,tt,je.data):t.texImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,We,tt,je.data)}else if(A.isDataArrayTexture)if(ct){if(kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,rt,Ae.width,Ae.height,Ae.depth),J)if(A.layerUpdates.size>0){const me=sx(Ae.width,Ae.height,A.format,A.type);for(const _e of A.layerUpdates){const ke=Ae.data.subarray(_e*me/Ae.data.BYTES_PER_ELEMENT,(_e+1)*me/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,We,tt,ke)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(A.isData3DTexture)ct?(kt&&t.texStorage3D(i.TEXTURE_3D,Fe,rt,Ae.width,Ae.height,Ae.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,rt,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(A.isFramebufferTexture){if(kt)if(ct)t.texStorage2D(i.TEXTURE_2D,Fe,rt,Ae.width,Ae.height);else{let me=Ae.width,_e=Ae.height;for(let ke=0;ke<Fe;ke++)t.texImage2D(i.TEXTURE_2D,ke,rt,me,_e,0,We,tt,null),me>>=1,_e>>=1}}else if(at.length>0){if(ct&&kt){const me=Xe(at[0]);t.texStorage2D(i.TEXTURE_2D,Fe,rt,me.width,me.height)}for(let me=0,_e=at.length;me<_e;me++)je=at[me],ct?J&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,We,tt,je):t.texImage2D(i.TEXTURE_2D,me,rt,We,tt,je);A.generateMipmaps=!1}else if(ct){if(kt){const me=Xe(Ae);t.texStorage2D(i.TEXTURE_2D,Fe,rt,me.width,me.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,tt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,rt,We,tt,Ae);_(A)&&y(le),Ze.__version=ve.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function xe(F,A,re){if(A.image.length!==6)return;const le=De(F,A),ce=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+re);const ve=r.get(ce);if(ce.version!==ve.__version||le===!0){t.activeTexture(i.TEXTURE0+re);const Ze=Bt.getPrimaries(Bt.workingColorSpace),Ne=A.colorSpace===ds?null:Bt.getPrimaries(A.colorSpace),Ve=A.colorSpace===ds||Ze===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,We=[];for(let _e=0;_e<6;_e++)!pt&&!Ae?We[_e]=E(A.image[_e],!0,o.maxCubemapSize):We[_e]=Ae?A.image[_e].image:A.image[_e],We[_e]=Vt(A,We[_e]);const tt=We[0],rt=l.convert(A.format,A.colorSpace),je=l.convert(A.type),at=R(A.internalFormat,rt,je,A.colorSpace),ct=A.isVideoTexture!==!0,kt=ve.__version===void 0||le===!0,J=ce.dataReady;let Fe=k(A,tt);pe(i.TEXTURE_CUBE_MAP,A);let me;if(pt){ct&&kt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,tt.width,tt.height);for(let _e=0;_e<6;_e++){me=We[_e].mipmaps;for(let ke=0;ke<me.length;ke++){const Ue=me[ke];A.format!==or?rt!==null?ct?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,rt,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,at,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,rt,je,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,at,Ue.width,Ue.height,0,rt,je,Ue.data)}}}else{if(me=A.mipmaps,ct&&kt){me.length>0&&Fe++;const _e=Xe(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){ct?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We[_e].width,We[_e].height,rt,je,We[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,We[_e].width,We[_e].height,0,rt,je,We[_e].data);for(let ke=0;ke<me.length;ke++){const dt=me[ke].image[_e].image;ct?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,dt.width,dt.height,rt,je,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,at,dt.width,dt.height,0,rt,je,dt.data)}}else{ct?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,rt,je,We[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,rt,je,We[_e]);for(let ke=0;ke<me.length;ke++){const Ue=me[ke];ct?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,rt,je,Ue.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,at,rt,je,Ue.image[_e])}}}_(A)&&y(i.TEXTURE_CUBE_MAP),ve.__version=ce.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Se(F,A,re,le,ce,ve){const Ze=l.convert(re.format,re.colorSpace),Ne=l.convert(re.type),Ve=R(re.internalFormat,Ze,Ne,re.colorSpace),pt=r.get(A),Ae=r.get(re);if(Ae.__renderTarget=A,!pt.__hasExternalTextures){const We=Math.max(1,A.width>>ve),tt=Math.max(1,A.height>>ve);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ve,Ve,We,tt,A.depth,0,Ze,Ne,null):t.texImage2D(ce,ve,Ve,We,tt,0,Ze,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),_t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ce,Ae.__webglTexture,0,ht(A)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ce,Ae.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(F,A,re){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const le=A.depthTexture,ce=le&&le.isDepthTexture?le.type:null,ve=C(A.stencilBuffer,ce),Ze=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=ht(A);_t(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ve,A.width,A.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ze,i.RENDERBUFFER,F)}else{const le=A.textures;for(let ce=0;ce<le.length;ce++){const ve=le[ce],Ze=l.convert(ve.format,ve.colorSpace),Ne=l.convert(ve.type),Ve=R(ve.internalFormat,Ze,Ne,ve.colorSpace),pt=ht(A);re&&_t(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Ve,A.width,A.height):_t(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=r.get(A.depthTexture);le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);const ce=le.__webglTexture,ve=ht(A);if(A.depthTexture.format===zo)_t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(A.depthTexture.format===Xo)_t(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ze(F){const A=r.get(F),re=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const le=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),le){const ce=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,le.removeEventListener("dispose",ce)};le.addEventListener("dispose",ce),A.__depthDisposeCallback=ce}A.__boundDepthTexture=le}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");be(A.__webglFramebuffer,F)}else if(re){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]===void 0)A.__webglDepthbuffer[le]=i.createRenderbuffer(),Me(A.__webglDepthbuffer[le],F,!1);else{const ce=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ve)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Me(A.__webglDepthbuffer,F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(F,A,re){const le=r.get(F);A!==void 0&&Se(le.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&ze(F)}function vt(F){const A=F.texture,re=r.get(F),le=r.get(A);F.addEventListener("dispose",I);const ce=F.textures,ve=F.isWebGLCubeRenderTarget===!0,Ze=ce.length>1;if(Ze||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=A.version,c.memory.textures++),ve){re.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<A.mipmaps.length;Ve++)re.__webglFramebuffer[Ne][Ve]=i.createFramebuffer()}else re.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)re.__webglFramebuffer[Ne]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(Ze)for(let Ne=0,Ve=ce.length;Ne<Ve;Ne++){const pt=r.get(ce[Ne]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),c.memory.textures++)}if(F.samples>0&&_t(F)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ce.length;Ne++){const Ve=ce[Ne];re.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[Ne]);const pt=l.convert(Ve.format,Ve.colorSpace),Ae=l.convert(Ve.type),We=R(Ve.internalFormat,pt,Ae,Ve.colorSpace,F.isXRRenderTarget===!0),tt=ht(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,We,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,re.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),pe(i.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)Se(re.__webglFramebuffer[Ne][Ve],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else Se(re.__webglFramebuffer[Ne],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);_(A)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ne=0,Ve=ce.length;Ne<Ve;Ne++){const pt=ce[Ne],Ae=r.get(pt);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),pe(i.TEXTURE_2D,pt),Se(re.__webglFramebuffer,F,pt,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),_(pt)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,le.__webglTexture),pe(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)Se(re.__webglFramebuffer[Ve],F,A,i.COLOR_ATTACHMENT0,Ne,Ve);else Se(re.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,Ne,0);_(A)&&y(Ne),t.unbindTexture()}F.depthBuffer&&ze(F)}function Et(F){const A=F.textures;for(let re=0,le=A.length;re<le;re++){const ce=A[re];if(_(ce)){const ve=N(F),Ze=r.get(ce).__webglTexture;t.bindTexture(ve,Ze),y(ve),t.unbindTexture()}}}const Wt=[],Y=[];function kn(F){if(F.samples>0){if(_t(F)===!1){const A=F.textures,re=F.width,le=F.height;let ce=i.COLOR_BUFFER_BIT;const ve=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=r.get(F),Ne=A.length>1;if(Ne)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ve]);const pt=r.get(A[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,re,le,0,0,re,le,ce,i.NEAREST),f===!0&&(Wt.length=0,Y.length=0,Wt.push(i.COLOR_ATTACHMENT0+Ve),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Wt.push(ve),Y.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ve]);const pt=r.get(A[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,pt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ht(F){return Math.min(o.maxSamples,F.samples)}function _t(F){const A=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qe(F){const A=c.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function Vt(F,A){const re=F.colorSpace,le=F.format,ce=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==$o&&re!==ds&&(Bt.getTransfer(re)===$t?(le!==or||ce!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function Xe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=he,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_t}function VC(i,e){function t(r,o=ds){let l;const c=Bt.getTransfer(o);if(r===Br)return i.UNSIGNED_BYTE;if(r===Ph)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===r0)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===n0)return i.BYTE;if(r===i0)return i.SHORT;if(r===Va)return i.UNSIGNED_SHORT;if(r===bh)return i.INT;if(r===js)return i.UNSIGNED_INT;if(r===kr)return i.FLOAT;if(r===Za)return i.HALF_FLOAT;if(r===s0)return i.ALPHA;if(r===o0)return i.RGB;if(r===or)return i.RGBA;if(r===a0)return i.LUMINANCE;if(r===l0)return i.LUMINANCE_ALPHA;if(r===zo)return i.DEPTH_COMPONENT;if(r===Xo)return i.DEPTH_STENCIL;if(r===c0)return i.RED;if(r===Dh)return i.RED_INTEGER;if(r===u0)return i.RG;if(r===Nh)return i.RG_INTEGER;if(r===Ih)return i.RGBA_INTEGER;if(r===kc||r===Oc||r===zc||r===Bc)if(c===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zf||r===Bf||r===Hf||r===Vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gf||r===Wf||r===jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gf||r===Wf)return c===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===jf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xf||r===$f||r===Yf||r===Zf||r===qf||r===Kf||r===Qf||r===Jf||r===eh||r===th||r===nh||r===ih||r===rh||r===sh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$f)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jf)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===th)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ih)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hc||r===oh||r===ah)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hc)return c===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===d0||r===lh||r===ch||r===uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const GC={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,r),y=this._getHandJoint(h,E);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=m.position.distanceTo(x.position),M=.02,S=.005;h.inputState.pinching&&g>M+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(GC)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ua;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const WC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Si,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new xs({vertexShader:WC,fragmentShader:jC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new au(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $C extends Ko{constructor(e,t){super();const r=this;let o=null,l=1,c=null,d="local-floor",f=1,h=null,m=null,x=null,g=null,M=null,S=null;const E=new XC,_=t.getContextAttributes();let y=null,N=null;const R=[],C=[],k=new Ht;let D=null;const I=new Wi;I.viewport=new vn;const j=new Wi;j.viewport=new vn;const L=[I,j],b=new h1;let V=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=R[ie];return xe===void 0&&(xe=new Sf,R[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=R[ie];return xe===void 0&&(xe=new Sf,R[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=R[ie];return xe===void 0&&(xe=new Sf,R[ie]=xe),xe.getHandSpace()};function W(ie){const xe=C.indexOf(ie.inputSource);if(xe===-1)return;const Se=R[xe];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,h||c),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",O);for(let ie=0;ie<R.length;ie++){const xe=C[ie];xe!==null&&(C[ie]=null,R[ie].disconnect(xe))}V=null,he=null,E.reset(),e.setRenderTarget(y),M=null,g=null,x=null,o=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const xe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,xe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Xs(M.framebufferWidth,M.framebufferHeight,{format:or,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let xe=null,Se=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=_.stencil?Xo:zo,Se=_.stencil?jo:js);const be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};x=new XRWebGLBinding(o,t),g=x.createProjectionLayer(be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Xs(g.textureWidth,g.textureHeight,{format:or,type:Br,depthTexture:new C0(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function O(ie){for(let xe=0;xe<ie.removed.length;xe++){const Se=ie.removed[xe],Me=C.indexOf(Se);Me>=0&&(C[Me]=null,R[Me].disconnect(Se))}for(let xe=0;xe<ie.added.length;xe++){const Se=ie.added[xe];let Me=C.indexOf(Se);if(Me===-1){for(let ze=0;ze<R.length;ze++)if(ze>=C.length){C.push(Se),Me=ze;break}else if(C[ze]===null){C[ze]=Se,Me=ze;break}if(Me===-1)break}const be=R[Me];be&&be.connect(Se)}}const G=new ae,Q=new ae;function z(ie,xe,Se){G.setFromMatrixPosition(xe.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const Me=G.distanceTo(Q),be=xe.projectionMatrix.elements,ze=Se.projectionMatrix.elements,et=be[14]/(be[10]-1),vt=be[14]/(be[10]+1),Et=(be[9]+1)/be[5],Wt=(be[9]-1)/be[5],Y=(be[8]-1)/be[0],kn=(ze[8]+1)/ze[0],ht=et*Y,_t=et*kn,Qe=Me/(-Y+kn),Vt=Qe*-Y;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Vt),ie.translateZ(Qe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),be[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Xe=et+Qe,F=vt+Qe,A=ht-Vt,re=_t+(Me-Vt),le=Et*vt/F*Xe,ce=Wt*vt/F*Xe;ie.projectionMatrix.makePerspective(A,re,le,ce,Xe,F),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ue(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let xe=ie.near,Se=ie.far;E.texture!==null&&(E.depthNear>0&&(xe=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),b.near=j.near=I.near=xe,b.far=j.far=I.far=Se,(V!==b.near||he!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),V=b.near,he=b.far),I.layers.mask=ie.layers.mask|2,j.layers.mask=ie.layers.mask|4,b.layers.mask=I.layers.mask|j.layers.mask;const Me=ie.parent,be=b.cameras;ue(b,Me);for(let ze=0;ze<be.length;ze++)ue(be[ze],Me);be.length===2?z(b,I,j):b.projectionMatrix.copy(I.projectionMatrix),te(ie,b,Me)};function te(ie,xe,Se){Se===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ga*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&M===null))return f},this.setFoveation=function(ie){f=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let H=null;function pe(ie,xe){if(m=xe.getViewerPose(h||c),S=xe,m!==null){const Se=m.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Me=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let ze=0;ze<Se.length;ze++){const et=Se[ze];let vt=null;if(M!==null)vt=M.getViewport(et);else{const Wt=x.getViewSubImage(g,et);vt=Wt.viewport,ze===0&&(e.setRenderTargetTextures(N,Wt.colorTexture,g.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(N))}let Et=L[ze];Et===void 0&&(Et=new Wi,Et.layers.enable(ze),Et.viewport=new vn,L[ze]=Et),Et.matrix.fromArray(et.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(et.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(vt.x,vt.y,vt.width,vt.height),ze===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(Et)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const ze=x.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,o.renderState)}}for(let Se=0;Se<R.length;Se++){const Me=C[Se],be=R[Se];Me!==null&&be!==void 0&&be.update(Me,xe,h||c)}H&&H(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),S=null}const De=new D0;De.setAnimationLoop(pe),this.setAnimationLoop=function(ie){H=ie},this.dispose=function(){}}}const ks=new vr,YC=new mn;function ZC(i,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,E0(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,N,R,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(_,y):y.isMeshToonMaterial?(l(_,y),x(_,y)):y.isMeshPhongMaterial?(l(_,y),m(_,y)):y.isMeshStandardMaterial?(l(_,y),g(_,y),y.isMeshPhysicalMaterial&&M(_,y,C)):y.isMeshMatcapMaterial?(l(_,y),S(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),E(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(c(_,y),y.isLineDashedMaterial&&d(_,y)):y.isPointsMaterial?f(_,y,N,R):y.isSpriteMaterial?h(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Mi&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Mi&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const N=e.get(y),R=N.envMap,C=N.envMapRotation;R&&(_.envMap.value=R,ks.copy(C),ks.x*=-1,ks.y*=-1,ks.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),_.envMapRotation.value.setFromMatrix4(YC.makeRotationFromEuler(ks)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function d(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function f(_,y,N,R){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*N,_.scale.value=R*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function m(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function x(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function M(_,y,N){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Mi&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,y){y.matcap&&(_.matcap.value=y.matcap)}function E(_,y){const N=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function qC(i,e,t,r){let o={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,R){const C=R.program;r.uniformBlockBinding(N,C)}function h(N,R){let C=o[N.id];C===void 0&&(S(N),C=m(N),o[N.id]=C,N.addEventListener("dispose",_));const k=R.program;r.updateUBOMapping(N,k);const D=e.render.frame;l[N.id]!==D&&(g(N),l[N.id]=D)}function m(N){const R=x();N.__bindingPointIndex=R;const C=i.createBuffer(),k=N.__size,D=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,k,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,C),C}function x(){for(let N=0;N<d;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const R=o[N.id],C=N.uniforms,k=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let D=0,I=C.length;D<I;D++){const j=Array.isArray(C[D])?C[D]:[C[D]];for(let L=0,b=j.length;L<b;L++){const V=j[L];if(M(V,D,L,k)===!0){const he=V.__offset,W=Array.isArray(V.value)?V.value:[V.value];let Z=0;for(let O=0;O<W.length;O++){const G=W[O],Q=E(G);typeof G=="number"||typeof G=="boolean"?(V.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,he+Z,V.__data)):G.isMatrix3?(V.__data[0]=G.elements[0],V.__data[1]=G.elements[1],V.__data[2]=G.elements[2],V.__data[3]=0,V.__data[4]=G.elements[3],V.__data[5]=G.elements[4],V.__data[6]=G.elements[5],V.__data[7]=0,V.__data[8]=G.elements[6],V.__data[9]=G.elements[7],V.__data[10]=G.elements[8],V.__data[11]=0):(G.toArray(V.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,he,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(N,R,C,k){const D=N.value,I=R+"_"+C;if(k[I]===void 0)return typeof D=="number"||typeof D=="boolean"?k[I]=D:k[I]=D.clone(),!0;{const j=k[I];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return k[I]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function S(N){const R=N.uniforms;let C=0;const k=16;for(let I=0,j=R.length;I<j;I++){const L=Array.isArray(R[I])?R[I]:[R[I]];for(let b=0,V=L.length;b<V;b++){const he=L[b],W=Array.isArray(he.value)?he.value:[he.value];for(let Z=0,O=W.length;Z<O;Z++){const G=W[Z],Q=E(G),z=C%k,ue=z%Q.boundary,te=z+ue;C+=ue,te!==0&&k-te<Q.storage&&(C+=k-te),he.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=C,C+=Q.storage}}}const D=C%k;return D>0&&(C+=k-D),N.__size=C,N.__cache={},this}function E(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function _(N){const R=N.target;R.removeEventListener("dispose",_);const C=c.indexOf(R.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function y(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},l={}}return{bind:f,update:h,dispose:y}}class KC{constructor(e={}){const{canvas:t=hS(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const S=new Uint32Array(4),E=new Int32Array(4);let _=null,y=null;const N=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gi,this.toneMapping=ms,this.toneMappingExposure=1;const C=this;let k=!1,D=0,I=0,j=null,L=-1,b=null;const V=new vn,he=new vn;let W=null;const Z=new It(0);let O=0,G=t.width,Q=t.height,z=1,ue=null,te=null;const H=new vn(0,0,G,Q),pe=new vn(0,0,G,Q);let De=!1;const ie=new Uh;let xe=!1,Se=!1;const Me=new mn,be=new mn,ze=new ae,et=new vn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Wt(){return j===null?z:1}let Y=r;function kn(P,ee){return t.getContext(P,ee)}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),Y===null){const ee="webgl2";if(Y=kn(ee,P),Y===null)throw kn(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,_t,Qe,Vt,Xe,F,A,re,le,ce,ve,Ze,Ne,Ve,pt,Ae,We,tt,rt,je,at,ct,kt,J;function Fe(){ht=new oT(Y),ht.init(),ct=new VC(Y,ht),_t=new eT(Y,ht,e,ct),Qe=new BC(Y,ht),_t.reverseDepthBuffer&&g&&Qe.buffers.depth.setReversed(!0),Vt=new cT(Y),Xe=new AC,F=new HC(Y,ht,Qe,Xe,_t,ct,Vt),A=new nT(C),re=new sT(C),le=new g1(Y),kt=new Qw(Y,le),ce=new aT(Y,le,Vt,kt),ve=new dT(Y,ce,le,Vt),rt=new uT(Y,_t,F),Ae=new tT(Xe),Ze=new CC(C,A,re,ht,_t,kt,Ae),Ne=new ZC(C,Xe),Ve=new bC,pt=new FC(ht),tt=new Kw(C,A,re,Qe,ve,M,f),We=new OC(C,ve,_t),J=new qC(Y,Vt,_t,Qe),je=new Jw(Y,ht,Vt),at=new lT(Y,ht,Vt),Vt.programs=Ze.programs,C.capabilities=_t,C.extensions=ht,C.properties=Xe,C.renderLists=Ve,C.shadowMap=We,C.state=Qe,C.info=Vt}Fe();const me=new $C(C,Y);this.xr=me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(G,Q,!1))},this.getSize=function(P){return P.set(G,Q)},this.setSize=function(P,ee,oe=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,Q=ee,t.width=Math.floor(P*z),t.height=Math.floor(ee*z),oe===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(G*z,Q*z).floor()},this.setDrawingBufferSize=function(P,ee,oe){G=P,Q=ee,z=oe,t.width=Math.floor(P*oe),t.height=Math.floor(ee*oe),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(V)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,ee,oe,de){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,ee,oe,de),Qe.viewport(V.copy(H).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,ee,oe,de){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,ee,oe,de),Qe.scissor(he.copy(pe).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(P){Qe.setScissorTest(De=P)},this.setOpaqueSort=function(P){ue=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(P=!0,ee=!0,oe=!0){let de=0;if(P){let q=!1;if(j!==null){const Te=j.texture.format;q=Te===Ih||Te===Nh||Te===Dh}if(q){const Te=j.texture.type,Pe=Te===Br||Te===js||Te===Va||Te===jo||Te===Ph||Te===Lh,Be=tt.getClearColor(),Ge=tt.getClearAlpha(),it=Be.r,lt=Be.g,qe=Be.b;Pe?(S[0]=it,S[1]=lt,S[2]=qe,S[3]=Ge,Y.clearBufferuiv(Y.COLOR,0,S)):(E[0]=it,E[1]=lt,E[2]=qe,E[3]=Ge,Y.clearBufferiv(Y.COLOR,0,E))}else de|=Y.COLOR_BUFFER_BIT}ee&&(de|=Y.DEPTH_BUFFER_BIT),oe&&(de|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),tt.dispose(),Ve.dispose(),pt.dispose(),Xe.dispose(),A.dispose(),re.dispose(),ve.dispose(),kt.dispose(),J.dispose(),Ze.dispose(),me.dispose(),me.removeEventListener("sessionstart",ii),me.removeEventListener("sessionend",Zn),en.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const P=Vt.autoReset,ee=We.enabled,oe=We.autoUpdate,de=We.needsUpdate,q=We.type;Fe(),Vt.autoReset=P,We.enabled=ee,We.autoUpdate=oe,We.needsUpdate=de,We.type=q}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const ee=P.target;ee.removeEventListener("dispose",dt),Yt(ee)}function Yt(P){gn(P),Xe.remove(P)}function gn(P){const ee=Xe.get(P).programs;ee!==void 0&&(ee.forEach(function(oe){Ze.releaseProgram(oe)}),P.isShaderMaterial&&Ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,oe,de,q,Te){ee===null&&(ee=vt);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Be=si(P,ee,oe,de,q);Qe.setMaterial(de,Pe);let Ge=oe.index,it=1;if(de.wireframe===!0){if(Ge=ce.getWireframeAttribute(oe),Ge===void 0)return;it=2}const lt=oe.drawRange,qe=oe.attributes.position;let ft=lt.start*it,Ft=(lt.start+lt.count)*it;Te!==null&&(ft=Math.max(ft,Te.start*it),Ft=Math.min(Ft,(Te.start+Te.count)*it)),Ge!==null?(ft=Math.max(ft,0),Ft=Math.min(Ft,Ge.count)):qe!=null&&(ft=Math.max(ft,0),Ft=Math.min(Ft,qe.count));const Lt=Ft-ft;if(Lt<0||Lt===1/0)return;kt.setup(q,de,Be,oe,Ge);let Zt,wt=je;if(Ge!==null&&(Zt=le.get(Ge),wt=at,wt.setIndex(Zt)),q.isMesh)de.wireframe===!0?(Qe.setLineWidth(de.wireframeLinewidth*Wt()),wt.setMode(Y.LINES)):wt.setMode(Y.TRIANGLES);else if(q.isLine){let nt=de.linewidth;nt===void 0&&(nt=1),Qe.setLineWidth(nt*Wt()),q.isLineSegments?wt.setMode(Y.LINES):q.isLineLoop?wt.setMode(Y.LINE_LOOP):wt.setMode(Y.LINE_STRIP)}else q.isPoints?wt.setMode(Y.POINTS):q.isSprite&&wt.setMode(Y.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)wt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))wt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const nt=q._multiDrawStarts,on=q._multiDrawCounts,Tt=q._multiDrawCount,bn=Ge?le.get(Ge).bytesPerElement:1,Ei=Xe.get(de).currentProgram.getUniforms();for(let Pn=0;Pn<Tt;Pn++)Ei.setValue(Y,"_gl_DrawID",Pn),wt.render(nt[Pn]/bn,on[Pn])}else if(q.isInstancedMesh)wt.renderInstances(ft,Lt,q.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,on=Math.min(oe.instanceCount,nt);wt.renderInstances(ft,Lt,on)}else wt.render(ft,Lt)};function St(P,ee,oe){P.transparent===!0&&P.side===Ur&&P.forceSinglePass===!1?(P.side=Mi,P.needsUpdate=!0,qn(P,ee,oe),P.side=gs,P.needsUpdate=!0,qn(P,ee,oe),P.side=Ur):qn(P,ee,oe)}this.compile=function(P,ee,oe=null){oe===null&&(oe=P),y=pt.get(oe),y.init(ee),R.push(y),oe.traverseVisible(function(q){q.isLight&&q.layers.test(ee.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),P!==oe&&P.traverseVisible(function(q){q.isLight&&q.layers.test(ee.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const de=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Be=Te[Pe];St(Be,oe,q),de.add(Be)}else St(Te,oe,q),de.add(Te)}),R.pop(),y=null,de},this.compileAsync=function(P,ee,oe=null){const de=this.compile(P,ee,oe);return new Promise(q=>{function Te(){if(de.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&de.delete(Pe)}),de.size===0){q(P);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Gt=null;function On(P){Gt&&Gt(P)}function ii(){en.stop()}function Zn(){en.start()}const en=new D0;en.setAnimationLoop(On),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(P){Gt=P,me.setAnimationLoop(P),P===null?en.stop():en.start()},me.addEventListener("sessionstart",ii),me.addEventListener("sessionend",Zn),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(ee),ee=me.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,ee,j),y=pt.get(P,R.length),y.init(ee),R.push(y),be.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ie.setFromProjectionMatrix(be),Se=this.localClippingEnabled,xe=Ae.init(this.clippingPlanes,Se),_=Ve.get(P,N.length),_.init(),N.push(_),me.enabled===!0&&me.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&zn(Te,ee,-1/0,C.sortObjects)}zn(P,ee,0,C.sortObjects),_.finish(),C.sortObjects===!0&&_.sort(ue,te),Et=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Et&&tt.addToRenderList(_,P),this.info.render.frame++,xe===!0&&Ae.beginShadows();const oe=y.state.shadowsArray;We.render(oe,P,ee),xe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=_.opaque,q=_.transmissive;if(y.setupLights(),ee.isArrayCamera){const Te=ee.cameras;if(q.length>0)for(let Pe=0,Be=Te.length;Pe<Be;Pe++){const Ge=Te[Pe];Di(de,q,P,Ge)}Et&&tt.render(P);for(let Pe=0,Be=Te.length;Pe<Be;Pe++){const Ge=Te[Pe];Li(_,P,Ge,Ge.viewport)}}else q.length>0&&Di(de,q,P,ee),Et&&tt.render(P),Li(_,P,ee);j!==null&&(F.updateMultisampleRenderTarget(j),F.updateRenderTargetMipmap(j)),P.isScene===!0&&P.onAfterRender(C,P,ee),kt.resetDefaultState(),L=-1,b=null,R.pop(),R.length>0?(y=R[R.length-1],xe===!0&&Ae.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?_=N[N.length-1]:_=null};function zn(P,ee,oe,de){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ie.intersectsSprite(P)){de&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);const Pe=ve.update(P),Be=P.material;Be.visible&&_.push(P,Pe,Be,oe,et.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ie.intersectsObject(P))){const Pe=ve.update(P),Be=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),et.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),et.copy(Pe.boundingSphere.center)),et.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(Be)){const Ge=Pe.groups;for(let it=0,lt=Ge.length;it<lt;it++){const qe=Ge[it],ft=Be[qe.materialIndex];ft&&ft.visible&&_.push(P,Pe,ft,oe,et.z,qe)}}else Be.visible&&_.push(P,Pe,Be,oe,et.z,null)}}const Te=P.children;for(let Pe=0,Be=Te.length;Pe<Be;Pe++)zn(Te[Pe],ee,oe,de)}function Li(P,ee,oe,de){const q=P.opaque,Te=P.transmissive,Pe=P.transparent;y.setupLightsView(oe),xe===!0&&Ae.setGlobalState(C.clippingPlanes,oe),de&&Qe.viewport(V.copy(de)),q.length>0&&fi(q,ee,oe),Te.length>0&&fi(Te,ee,oe),Pe.length>0&&fi(Pe,ee,oe),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Di(P,ee,oe,de){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[de.id]===void 0&&(y.state.transmissionRenderTarget[de.id]=new Xs(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Za:Br,minFilter:Ws,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[de.id],Pe=de.viewport||V;Te.setSize(Pe.z,Pe.w);const Be=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(Z),O=C.getClearAlpha(),O<1&&C.setClearColor(16777215,.5),C.clear(),Et&&tt.render(oe);const Ge=C.toneMapping;C.toneMapping=ms;const it=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),y.setupLightsView(de),xe===!0&&Ae.setGlobalState(C.clippingPlanes,de),fi(P,oe,de),F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let qe=0,ft=ee.length;qe<ft;qe++){const Ft=ee[qe],Lt=Ft.object,Zt=Ft.geometry,wt=Ft.material,nt=Ft.group;if(wt.side===Ur&&Lt.layers.test(de.layers)){const on=wt.side;wt.side=Mi,wt.needsUpdate=!0,Yi(Lt,oe,de,Zt,wt,nt),wt.side=on,wt.needsUpdate=!0,lt=!0}}lt===!0&&(F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te))}C.setRenderTarget(Be),C.setClearColor(Z,O),it!==void 0&&(de.viewport=it),C.toneMapping=Ge}function fi(P,ee,oe){const de=ee.isScene===!0?ee.overrideMaterial:null;for(let q=0,Te=P.length;q<Te;q++){const Pe=P[q],Be=Pe.object,Ge=Pe.geometry,it=de===null?Pe.material:de,lt=Pe.group;Be.layers.test(oe.layers)&&Yi(Be,ee,oe,Ge,it,lt)}}function Yi(P,ee,oe,de,q,Te){P.onBeforeRender(C,ee,oe,de,q,Te),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(C,ee,oe,de,P,Te),q.transparent===!0&&q.side===Ur&&q.forceSinglePass===!1?(q.side=Mi,q.needsUpdate=!0,C.renderBufferDirect(oe,ee,de,q,P,Te),q.side=gs,q.needsUpdate=!0,C.renderBufferDirect(oe,ee,de,q,P,Te),q.side=Ur):C.renderBufferDirect(oe,ee,de,q,P,Te),P.onAfterRender(C,ee,oe,de,q,Te)}function qn(P,ee,oe){ee.isScene!==!0&&(ee=vt);const de=Xe.get(P),q=y.state.lights,Te=y.state.shadowsArray,Pe=q.state.version,Be=Ze.getParameters(P,q.state,Te,ee,oe),Ge=Ze.getProgramCacheKey(Be);let it=de.programs;de.environment=P.isMeshStandardMaterial?ee.environment:null,de.fog=ee.fog,de.envMap=(P.isMeshStandardMaterial?re:A).get(P.envMap||de.environment),de.envMapRotation=de.environment!==null&&P.envMap===null?ee.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",dt),it=new Map,de.programs=it);let lt=it.get(Ge);if(lt!==void 0){if(de.currentProgram===lt&&de.lightsStateVersion===Pe)return ri(P,Be),lt}else Be.uniforms=Ze.getUniforms(P),P.onBeforeCompile(Be,C),lt=Ze.acquireProgram(Be,Ge),it.set(Ge,lt),de.uniforms=Be.uniforms;const qe=de.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=Ae.uniform),ri(P,Be),de.needsLights=ta(P),de.lightsStateVersion=Pe,de.needsLights&&(qe.ambientLightColor.value=q.state.ambient,qe.lightProbe.value=q.state.probe,qe.directionalLights.value=q.state.directional,qe.directionalLightShadows.value=q.state.directionalShadow,qe.spotLights.value=q.state.spot,qe.spotLightShadows.value=q.state.spotShadow,qe.rectAreaLights.value=q.state.rectArea,qe.ltc_1.value=q.state.rectAreaLTC1,qe.ltc_2.value=q.state.rectAreaLTC2,qe.pointLights.value=q.state.point,qe.pointLightShadows.value=q.state.pointShadow,qe.hemisphereLights.value=q.state.hemi,qe.directionalShadowMap.value=q.state.directionalShadowMap,qe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qe.spotShadowMap.value=q.state.spotShadowMap,qe.spotLightMatrix.value=q.state.spotLightMatrix,qe.spotLightMap.value=q.state.spotLightMap,qe.pointShadowMap.value=q.state.pointShadowMap,qe.pointShadowMatrix.value=q.state.pointShadowMatrix),de.currentProgram=lt,de.uniformsList=null,lt}function Ys(P){if(P.uniformsList===null){const ee=P.currentProgram.getUniforms();P.uniformsList=Vc.seqWithValue(ee.seq,P.uniforms)}return P.uniformsList}function ri(P,ee){const oe=Xe.get(P);oe.outputColorSpace=ee.outputColorSpace,oe.batching=ee.batching,oe.batchingColor=ee.batchingColor,oe.instancing=ee.instancing,oe.instancingColor=ee.instancingColor,oe.instancingMorph=ee.instancingMorph,oe.skinning=ee.skinning,oe.morphTargets=ee.morphTargets,oe.morphNormals=ee.morphNormals,oe.morphColors=ee.morphColors,oe.morphTargetsCount=ee.morphTargetsCount,oe.numClippingPlanes=ee.numClippingPlanes,oe.numIntersection=ee.numClipIntersection,oe.vertexAlphas=ee.vertexAlphas,oe.vertexTangents=ee.vertexTangents,oe.toneMapping=ee.toneMapping}function si(P,ee,oe,de,q){ee.isScene!==!0&&(ee=vt),F.resetTextureUnits();const Te=ee.fog,Pe=de.isMeshStandardMaterial?ee.environment:null,Be=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$o,Ge=(de.isMeshStandardMaterial?re:A).get(de.envMap||Pe),it=de.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),qe=!!oe.morphAttributes.position,ft=!!oe.morphAttributes.normal,Ft=!!oe.morphAttributes.color;let Lt=ms;de.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=C.toneMapping);const Zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,wt=Zt!==void 0?Zt.length:0,nt=Xe.get(de),on=y.state.lights;if(xe===!0&&(Se===!0||P!==b)){const an=P===b&&de.id===L;Ae.setState(de,P,an)}let Tt=!1;de.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==on.state.version||nt.outputColorSpace!==Be||q.isBatchedMesh&&nt.batching===!1||!q.isBatchedMesh&&nt.batching===!0||q.isBatchedMesh&&nt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&nt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&nt.instancing===!1||!q.isInstancedMesh&&nt.instancing===!0||q.isSkinnedMesh&&nt.skinning===!1||!q.isSkinnedMesh&&nt.skinning===!0||q.isInstancedMesh&&nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&nt.instancingMorph===!1&&q.morphTexture!==null||nt.envMap!==Ge||de.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ae.numPlanes||nt.numIntersection!==Ae.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==lt||nt.morphTargets!==qe||nt.morphNormals!==ft||nt.morphColors!==Ft||nt.toneMapping!==Lt||nt.morphTargetsCount!==wt)&&(Tt=!0):(Tt=!0,nt.__version=de.version);let bn=nt.currentProgram;Tt===!0&&(bn=qn(de,ee,q));let Ei=!1,Pn=!1,_r=!1;const jt=bn.getUniforms(),jn=nt.uniforms;if(Qe.useProgram(bn.program)&&(Ei=!0,Pn=!0,_r=!0),de.id!==L&&(L=de.id,Pn=!0),Ei||b!==P){Qe.buffers.depth.getReversed()?(Me.copy(P.projectionMatrix),mS(Me),gS(Me),jt.setValue(Y,"projectionMatrix",Me)):jt.setValue(Y,"projectionMatrix",P.projectionMatrix),jt.setValue(Y,"viewMatrix",P.matrixWorldInverse);const $=jt.map.cameraPosition;$!==void 0&&$.setValue(Y,ze.setFromMatrixPosition(P.matrixWorld)),_t.logarithmicDepthBuffer&&jt.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&jt.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Pn=!0,_r=!0)}if(q.isSkinnedMesh){jt.setOptional(Y,q,"bindMatrix"),jt.setOptional(Y,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),jt.setValue(Y,"boneTexture",an.boneTexture,F))}q.isBatchedMesh&&(jt.setOptional(Y,q,"batchingTexture"),jt.setValue(Y,"batchingTexture",q._matricesTexture,F),jt.setOptional(Y,q,"batchingIdTexture"),jt.setValue(Y,"batchingIdTexture",q._indirectTexture,F),jt.setOptional(Y,q,"batchingColorTexture"),q._colorsTexture!==null&&jt.setValue(Y,"batchingColorTexture",q._colorsTexture,F));const Ln=oe.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&rt.update(q,oe,bn),(Pn||nt.receiveShadow!==q.receiveShadow)&&(nt.receiveShadow=q.receiveShadow,jt.setValue(Y,"receiveShadow",q.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(jn.envMap.value=Ge,jn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&ee.environment!==null&&(jn.envMapIntensity.value=ee.environmentIntensity),Pn&&(jt.setValue(Y,"toneMappingExposure",C.toneMappingExposure),nt.needsLights&&Zs(jn,_r),Te&&de.fog===!0&&Ne.refreshFogUniforms(jn,Te),Ne.refreshMaterialUniforms(jn,de,z,Q,y.state.transmissionRenderTarget[P.id]),Vc.upload(Y,Ys(nt),jn,F)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Vc.upload(Y,Ys(nt),jn,F),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&jt.setValue(Y,"center",q.center),jt.setValue(Y,"modelViewMatrix",q.modelViewMatrix),jt.setValue(Y,"normalMatrix",q.normalMatrix),jt.setValue(Y,"modelMatrix",q.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const an=de.uniformsGroups;for(let $=0,U=an.length;$<U;$++){const ge=an[$];J.update(ge,bn),J.bind(ge,bn)}}return bn}function Zs(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function ta(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(P,ee,oe){Xe.get(P.texture).__webglTexture=ee,Xe.get(P.depthTexture).__webglTexture=oe;const de=Xe.get(P);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=oe===void 0,de.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,ee){const oe=Xe.get(P);oe.__webglFramebuffer=ee,oe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(P,ee=0,oe=0){j=P,D=ee,I=oe;let de=!0,q=null,Te=!1,Pe=!1;if(P){const Ge=Xe.get(P);if(Ge.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(Y.FRAMEBUFFER,null),de=!1;else if(Ge.__webglFramebuffer===void 0)F.setupRenderTarget(P);else if(Ge.__hasExternalTextures)F.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if(Ge.__boundDepthTexture!==qe){if(qe!==null&&Xe.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const lt=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[ee])?q=lt[ee][oe]:q=lt[ee],Te=!0):P.samples>0&&F.useMultisampledRTT(P)===!1?q=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?q=lt[oe]:q=lt,V.copy(P.viewport),he.copy(P.scissor),W=P.scissorTest}else V.copy(H).multiplyScalar(z).floor(),he.copy(pe).multiplyScalar(z).floor(),W=De;if(Qe.bindFramebuffer(Y.FRAMEBUFFER,q)&&de&&Qe.drawBuffers(P,q),Qe.viewport(V),Qe.scissor(he),Qe.setScissorTest(W),Te){const Ge=Xe.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ge.__webglTexture,oe)}else if(Pe){const Ge=Xe.get(P.texture),it=ee||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ge.__webglTexture,oe||0,it)}L=-1},this.readRenderTargetPixels=function(P,ee,oe,de,q,Te,Pe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){Qe.bindFramebuffer(Y.FRAMEBUFFER,Be);try{const Ge=P.texture,it=Ge.format,lt=Ge.type;if(!_t.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-de&&oe>=0&&oe<=P.height-q&&Y.readPixels(ee,oe,de,q,ct.convert(it),ct.convert(lt),Te)}finally{const Ge=j!==null?Xe.get(j).__webglFramebuffer:null;Qe.bindFramebuffer(Y.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,ee,oe,de,q,Te,Pe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){const Ge=P.texture,it=Ge.format,lt=Ge.type;if(!_t.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=P.width-de&&oe>=0&&oe<=P.height-q){Qe.bindFramebuffer(Y.FRAMEBUFFER,Be);const qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Te.byteLength,Y.STREAM_READ),Y.readPixels(ee,oe,de,q,ct.convert(it),ct.convert(lt),0);const ft=j!==null?Xe.get(j).__webglFramebuffer:null;Qe.bindFramebuffer(Y.FRAMEBUFFER,ft);const Ft=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await pS(Y,Ft,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Te),Y.deleteBuffer(qe),Y.deleteSync(Ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,ee=null,oe=0){P.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,P=arguments[1]);const de=Math.pow(2,-oe),q=Math.floor(P.image.width*de),Te=Math.floor(P.image.height*de),Pe=ee!==null?ee.x:0,Be=ee!==null?ee.y:0;F.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Pe,Be,q,Te),Qe.unbindTexture()};const Tn=Y.createFramebuffer(),Hr=Y.createFramebuffer();this.copyTextureToTexture=function(P,ee,oe=null,de=null,q=0,Te=null){P.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,P=arguments[1],ee=arguments[2],Te=arguments[3]||0,oe=null),Te===null&&(q!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=q,q=0):Te=0);let Pe,Be,Ge,it,lt,qe,ft,Ft,Lt;const Zt=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(oe!==null)Pe=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,it=oe.min.x,lt=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const Ln=Math.pow(2,-q);Pe=Math.floor(Zt.width*Ln),Be=Math.floor(Zt.height*Ln),P.isDataArrayTexture?Ge=Zt.depth:P.isData3DTexture?Ge=Math.floor(Zt.depth*Ln):Ge=1,it=0,lt=0,qe=0}de!==null?(ft=de.x,Ft=de.y,Lt=de.z):(ft=0,Ft=0,Lt=0);const wt=ct.convert(ee.format),nt=ct.convert(ee.type);let on;ee.isData3DTexture?(F.setTexture3D(ee,0),on=Y.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(F.setTexture2DArray(ee,0),on=Y.TEXTURE_2D_ARRAY):(F.setTexture2D(ee,0),on=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ee.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ee.unpackAlignment);const Tt=Y.getParameter(Y.UNPACK_ROW_LENGTH),bn=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ei=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Pn=Y.getParameter(Y.UNPACK_SKIP_ROWS),_r=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Zt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Zt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,it),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,lt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,qe);const jt=P.isDataArrayTexture||P.isData3DTexture,jn=ee.isDataArrayTexture||ee.isData3DTexture;if(P.isDepthTexture){const Ln=Xe.get(P),an=Xe.get(ee),$=Xe.get(Ln.__renderTarget),U=Xe.get(an.__renderTarget);Qe.bindFramebuffer(Y.READ_FRAMEBUFFER,$.__webglFramebuffer),Qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let ge=0;ge<Ge;ge++)jt&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.get(P).__webglTexture,q,qe+ge),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.get(ee).__webglTexture,Te,Lt+ge)),Y.blitFramebuffer(it,lt,Pe,Be,ft,Ft,Pe,Be,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Qe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||Xe.has(P)){const Ln=Xe.get(P),an=Xe.get(ee);Qe.bindFramebuffer(Y.READ_FRAMEBUFFER,Tn),Qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Hr);for(let $=0;$<Ge;$++)jt?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ln.__webglTexture,q,qe+$):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ln.__webglTexture,q),jn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,an.__webglTexture,Te,Lt+$):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,an.__webglTexture,Te),q!==0?Y.blitFramebuffer(it,lt,Pe,Be,ft,Ft,Pe,Be,Y.COLOR_BUFFER_BIT,Y.NEAREST):jn?Y.copyTexSubImage3D(on,Te,ft,Ft,Lt+$,it,lt,Pe,Be):Y.copyTexSubImage2D(on,Te,ft,Ft,it,lt,Pe,Be);Qe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else jn?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(on,Te,ft,Ft,Lt,Pe,Be,Ge,wt,nt,Zt.data):ee.isCompressedArrayTexture?Y.compressedTexSubImage3D(on,Te,ft,Ft,Lt,Pe,Be,Ge,wt,Zt.data):Y.texSubImage3D(on,Te,ft,Ft,Lt,Pe,Be,Ge,wt,nt,Zt):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Te,ft,Ft,Pe,Be,wt,nt,Zt.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Te,ft,Ft,Zt.width,Zt.height,wt,Zt.data):Y.texSubImage2D(Y.TEXTURE_2D,Te,ft,Ft,Pe,Be,wt,nt,Zt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Tt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,bn),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ei),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Pn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,_r),Te===0&&ee.generateMipmaps&&Y.generateMipmap(on),Qe.unbindTexture()},this.copyTextureToTexture3D=function(P,ee,oe=null,de=null,q=0){return P.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,de=arguments[1]||null,P=arguments[2],ee=arguments[3],q=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,ee,oe,de,q)},this.initRenderTarget=function(P){Xe.get(P).__webglFramebuffer===void 0&&F.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?F.setTextureCube(P,0):P.isData3DTexture?F.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?F.setTexture2DArray(P,0):F.setTexture2D(P,0),Qe.unbindTexture()},this.resetState=function(){D=0,I=0,j=null,Qe.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const QC=-1.35,JC=1.35;function eA(i){return Math.min(JC,Math.max(QC,i))}function tA(i){return i.triangles.reduce((e,t)=>(t.forEach(r=>{e.minX=Math.min(e.minX,r.x),e.maxX=Math.max(e.maxX,r.x),e.minY=Math.min(e.minY,r.y),e.maxY=Math.max(e.maxY,r.y),e.minZ=Math.min(e.minZ,r.z),e.maxZ=Math.max(e.maxZ,r.z)}),e),{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0,minZ:1/0,maxZ:-1/0})}function nA(i){return Number.isFinite(i.minX)?{x:Math.round((i.minX+i.maxX)/2*1e3)/1e3,y:Math.round((i.minY+i.maxY)/2*1e3)/1e3,z:Math.round((i.minZ+i.maxZ)/2*1e3)/1e3}:{x:0,y:0,z:0}}function iA(i,e){const t=tA(i);if(!Number.isFinite(t.minX))return{x:0,y:0,z:0};const r=nu(e);return r.enabled&&(t.maxY+=e.height*(r.stackCount-1)),nA(t)}function rA(i,e,t){return{x:Math.round((i.x+e)*1e3)/1e3,y:Math.round((i.y+t)*1e3)/1e3}}const Ja={solid:"#6f8580",transparent:"#6f8580",edge:"#9fb1ac",strongEdge:"#d6e2df",stackPreview:"#9fb1ac"},sA=new Oh({color:Ja.solid,roughness:.76,metalness:.02}),oA=new Oh({color:Ja.transparent,roughness:.76,metalness:.02,opacity:.58,transparent:!0,depthWrite:!1}),aA=new su({color:Ja.edge,transparent:!0,opacity:.82}),lA=new su({color:Ja.strongEdge,transparent:!0,opacity:.95}),cA=new Oh({color:Ja.stackPreview,roughness:.82,metalness:.02,opacity:.28,transparent:!0,depthWrite:!1});function uA(i){const e=nu(i);return e.enabled?Array.from({length:e.stackCount-1},(t,r)=>i.height*(r+1)):[]}function dA(i){const e=new Float32Array(i.triangles.length*9);i.triangles.forEach((r,o)=>{r.forEach((l,c)=>{const d=o*9+c*3;e[d]=l.x,e[d+1]=l.y,e[d+2]=l.z})});const t=new cr;return t.setAttribute("position",new lr(e,3)),t.computeVertexNormals(),t}function fA({settings:i,mesh:e,resetToken:t,viewMode:r}){const o=Ie.useRef(null),l=Ie.useRef(null),c=Ie.useRef({mode:"none",x:0,y:0,yaw:-.78,pitch:.62}),d=Ie.useRef({x:0,y:0}),f=Ie.useRef({width:1,height:1}),h=Ie.useRef(178),m=Ie.useMemo(()=>iA(e,i),[e,i]),x=Ie.useRef(m),g=Ie.useMemo(()=>Math.max(i.width,i.depth),[i.width,i.depth]);return Ie.useEffect(()=>{const M=o.current;if(!M)return;const S=new zS;S.background=new It("#d8dcde");const E=new Wi(42,1,.1,1200),_=new KC({antialias:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=lc.showModelShadows,M.appendChild(_.domElement);const y=new Ua;S.add(y);const N=new c1("#ffffff","#8ea0a8",2.2);S.add(N);const R=new f1("#ffffff",2.4);R.position.set(80,120,90),R.castShadow=lc.showModelShadows,S.add(R);const C=new p1(28);C.position.set(g/2+22,.5,g/2+20),S.add(C);const k=()=>{const{width:O,height:G}=f.current,{x:Q,y:z}=d.current;E.clearViewOffset(),(Math.abs(Q)>.01||Math.abs(z)>.01)&&E.setViewOffset(O,G,-Q,-z,O,G),E.updateProjectionMatrix()},D=()=>{const{yaw:O,pitch:G}=c.current,Q=h.current,z=x.current,ue=new ae(z.x,z.y,z.z),te=Math.cos(G)*Q;E.position.set(ue.x+Math.sin(O)*te,ue.y+Math.sin(G)*Q,ue.z+Math.cos(O)*te),E.lookAt(ue)},I=()=>{const{width:O,height:G}=M.getBoundingClientRect();_.setSize(O,G),E.aspect=O/Math.max(1,G),f.current={width:Math.max(1,Math.round(O)),height:Math.max(1,Math.round(G))},k(),D(),_.render(S,E)},j=()=>{k(),D(),_.render(S,E)},L=O=>{O.button!==0&&O.button!==2||(O.preventDefault(),c.current.mode=O.button===2?"pan":"rotate",c.current.x=O.clientX,c.current.y=O.clientY,_.domElement.setPointerCapture(O.pointerId))},b=O=>{if(c.current.mode==="none")return;const G=O.clientX-c.current.x,Q=O.clientY-c.current.y;c.current.x=O.clientX,c.current.y=O.clientY,c.current.mode==="pan"?d.current=rA(d.current,G,Q):(c.current.yaw-=G*.006,c.current.pitch=eA(c.current.pitch+Q*.004)),j()},V=O=>{c.current.mode="none",_.domElement.hasPointerCapture(O.pointerId)&&_.domElement.releasePointerCapture(O.pointerId)},he=O=>{O.preventDefault()},W=O=>{O.preventDefault(),h.current=fS.clamp(h.current+O.deltaY*.12,92,290),j()};_.domElement.addEventListener("pointerdown",L),_.domElement.addEventListener("pointermove",b),_.domElement.addEventListener("pointerup",V),_.domElement.addEventListener("pointercancel",V),_.domElement.addEventListener("contextmenu",he),_.domElement.addEventListener("wheel",W,{passive:!1});const Z=new ResizeObserver(I);return Z.observe(M),l.current={camera:E,model:y,render:j,renderer:_,scene:S},I(),()=>{Z.disconnect(),_.domElement.removeEventListener("pointerdown",L),_.domElement.removeEventListener("pointermove",b),_.domElement.removeEventListener("pointerup",V),_.domElement.removeEventListener("pointercancel",V),_.domElement.removeEventListener("contextmenu",he),_.domElement.removeEventListener("wheel",W),M.removeChild(_.domElement),_.dispose()}},[g]),Ie.useEffect(()=>{const M=l.current;M&&(c.current={mode:"none",x:0,y:0,yaw:-.78,pitch:.62},d.current={x:0,y:0},h.current=178,M.render())},[t]),Ie.useEffect(()=>{var M;x.current=m,(M=l.current)==null||M.render()},[m]),Ie.useEffect(()=>{const M=l.current;if(!M)return;M.model.traverse(_=>{_ instanceof Xi&&_.geometry.dispose(),_ instanceof dh&&_.geometry.dispose()}),M.model.clear();const S=dA(e),E=new Xi(S,r==="transparent"?oA:sA);if(E.castShadow=lc.showModelShadows,E.receiveShadow=lc.showModelShadows,M.model.add(E),uA(i).forEach(_=>{const y=new Xi(S,cA);y.position.y=_,y.castShadow=!1,y.receiveShadow=!1,M.model.add(y)}),r!=="solid"){const _=new dh(new GS(S,24),r==="edges"?lA:aA);M.model.add(_)}M.renderer.render(M.scene,M.camera)},[e,i,r]),w.jsxs("section",{className:"viewport-shell","aria-label":"3D tray preview",children:[w.jsx("div",{ref:o,className:"three-canvas"}),null]})}const hA=[{icon:Bx,key:"solid",label:"ソリッド"},{icon:Y_,key:"edges",label:"エッジ"},{icon:B_,key:"transparent",label:"透過"}];function pA({mode:i,onModeChange:e,onResetView:t}){return w.jsxs("div",{className:"view-toolbar","aria-label":"表示操作",children:[w.jsx("div",{className:"view-mode-group",role:"group","aria-label":"表示モード",children:hA.map(r=>{const o=r.icon;return w.jsxs("button",{"aria-pressed":i===r.key,className:i===r.key?"selected":"",title:r.label,type:"button",onClick:()=>e(r.key),children:[w.jsx(o,{size:17,"aria-hidden":"true"}),w.jsx("span",{children:r.label})]},r.key)})}),w.jsxs("button",{className:"view-reset","aria-label":"表示をリセット",title:"表示をリセット",type:"button",onClick:t,children:[w.jsx(Vx,{size:17,"aria-hidden":"true"}),w.jsx("span",{children:"リセット"})]})]})}function mA(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function k0(i,e,t){const r=mA(e,t),o=[];let l=-i/2;for(let c=0;c<e-1;c+=1)l+=i*r[c],o.push(l);return o}const yi=i=>Number.isInteger(i)?`${i}`:i.toFixed(4).replace(/0+$/,"").replace(/\.$/,"");function Px(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function gA(i,e){return{x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x}}function xA(i){const e=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/e,y:i.y/e,z:i.z/e}}function di(i,e="asc"){const t=[...i].sort((r,o)=>e==="asc"?r-o:o-r);return t.filter((r,o)=>o===0||Math.abs(r-t[o-1])>1e-4)}function Jt(i,e){const t=i[i.length-1];t&&Math.abs(t.x-e.x)<1e-4&&Math.abs(t.z-e.z)<1e-4||i.push(e)}function vA(i,e,t,r,o){const l=i/2,c=e/2,d=Math.min(Math.max(t,0),l-.001,c-.001),f=[];if(d<=0){const k=di(r.filter(L=>L>-l&&L<l)),D=[...k].reverse(),I=di(o.filter(L=>L>-c&&L<c)),j=[...I].reverse();return Jt(f,{x:l,z:-c}),I.forEach(L=>Jt(f,{x:l,z:L})),Jt(f,{x:l,z:c}),D.forEach(L=>Jt(f,{x:L,z:c})),Jt(f,{x:-l,z:c}),j.forEach(L=>Jt(f,{x:-l,z:L})),Jt(f,{x:-l,z:-c}),k.forEach(L=>Jt(f,{x:L,z:-c})),f}const h=l-d,m=c-d,x=di(r.filter(k=>k>-h&&k<h)),g=[...x].reverse(),M=di(o.filter(k=>k>-m&&k<m)),S=[...M].reverse(),E=k=>Array.from({length:9},(D,I)=>k+I/8*(Math.PI/2)),_=(k,D,I,j=[])=>di([...E(I),...j]).map(L=>({x:k+Math.cos(L)*d,z:D+Math.sin(L)*d})),y=r.filter(k=>k>h&&k<l).map(k=>Math.acos((k-h)/d)),N=r.filter(k=>k>-l&&k<-h).map(k=>Math.acos((k+h)/d)),R=o.filter(k=>k>m&&k<c).map(k=>Math.asin((k-m)/d)),C=o.filter(k=>k>-c&&k<-m).map(k=>Math.asin((k+m)/d));return _(h,-m,-Math.PI/2,[...y.map(k=>-k),...C]).forEach(k=>Jt(f,k)),M.forEach(k=>Jt(f,{x:l,z:k})),_(h,m,0,[...y,...R]).forEach(k=>Jt(f,k)),g.forEach(k=>Jt(f,{x:k,z:c})),_(-h,m,Math.PI/2,[...N,...R.map(k=>Math.PI-k)]).forEach(k=>Jt(f,k)),S.forEach(k=>Jt(f,{x:-l,z:k})),_(-h,-m,Math.PI,[...N.map(k=>Math.PI*2-k),...C.map(k=>Math.PI-k)]).forEach(k=>Jt(f,k)),x.forEach(k=>Jt(f,{x:k,z:-c})),f}function O0(i){let e=0;for(let t=0;t<i.length;t+=1){const r=i[t],o=i[(t+1)%i.length];e+=r.x*o.z-o.x*r.z}return e/2}function Lx(i){return Math.abs(O0(i))}function Ha(i,e){return O0(i)<0===e?i:[...i].reverse()}function sr(i,e){return{x:i.x,y:e,z:i.z}}function Ef(i,e,t){const r=[],o=i.map(c=>sr(c,e)),l=i.map(c=>sr(c,t));for(let c=0;c<i.length;c+=1){const d=(c+1)%i.length;r.push([o[c],l[c],l[d]]),r.push([o[c],l[d],o[d]])}return r}function wf(i,e,t,r=!1){const o=Ha(i,!1),l=e.map(f=>Ha(f,!0)),c=[...o,...l.flat()];return kh.triangulateShape(o.map(f=>new Ht(f.x,f.z)),l.map(f=>f.map(h=>new Ht(h.x,h.z)))).map(([f,h,m])=>r?[sr(c[f],t),sr(c[m],t),sr(c[h],t)]:[sr(c[f],t),sr(c[h],t),sr(c[m],t)])}function Bh(i,e){const t=[];if(i.length<3)return t;for(let r=1;r<i.length-1;r+=1){const o=[sr(i[0],e),sr(i[r],e),sr(i[r+1],e)],[,l,c]=o,d=(l.z-o[0].z)*(c.x-o[0].x)-(l.x-o[0].x)*(c.z-o[0].z);t.push(d>0?o:[o[0],o[2],o[1]])}return t}function gr(i,e,t,r,o){return Bh([i,e,t,r],o)}function _A(i,e,t,r){return[{x:i,z:t},{x:e,z:t},{x:e,z:r},{x:i,z:r}]}function mh(i,e,t,r,o,l){const c=di(o.filter(x=>x>i&&x<e)),d=[...c].reverse(),f=di(l.filter(x=>x>t&&x<r)),h=[...f].reverse(),m=[];return Jt(m,{x:i,z:t}),c.forEach(x=>Jt(m,{x,z:t})),Jt(m,{x:e,z:t}),f.forEach(x=>Jt(m,{x:e,z:x})),Jt(m,{x:e,z:r}),d.forEach(x=>Jt(m,{x,z:r})),Jt(m,{x:i,z:r}),h.forEach(x=>Jt(m,{x:i,z:x})),m}function qc(i,e,t,r){const o=[],l=i/2;let c=-l;return k0(i,e,t).forEach(d=>{const f=Math.max(-l,d-r/2),h=Math.min(l,d+r/2);f-c>.001&&o.push([c,f]),c=Math.max(c,h)}),l-c>.001&&o.push([c,l]),o}function Kc(i,e,t,r){return k0(i,e,t).flatMap(o=>[o-r/2,o+r/2])}function yA(i,e,t=[],r=[]){const o=i.width/2,l=i.depth/2,c=i.width/2-i.wallThickness,d=i.depth/2-i.wallThickness,f=Math.min(Math.max(i.cornerRadius,0),o-.001,l-.001),h=f<=0?o:o-f,m=f<=0?l:l-f,x=c,g=d,M=i.width-i.wallThickness*2,S=i.depth-i.wallThickness*2,E=Kc(M,i.columns,i.columnRatios,i.wallThickness),_=Kc(S,i.rows,i.rowRatios,i.wallThickness),y=di([-c,c,...E,...t]),N=di([-d,d,..._,...r]),R=di([-x,x,...y.filter(G=>G>=-x&&G<=x)]),C=di([-g,g,...N.filter(G=>G>=-g&&G<=g)]),k=qc(M,i.columns,i.columnRatios,i.wallThickness),D=qc(S,i.rows,i.rowRatios,i.wallThickness),I=[],j=(G,Q)=>k.some(([z,ue])=>G>z&&G<ue)&&D.some(([z,ue])=>Q>z&&Q<ue),L=G=>{if(f<=0||Math.abs(G)<=h)return-l;const Q=Math.sign(G)*h;return-m-Math.sqrt(Math.max(0,f**2-(G-Q)**2))},b=G=>-L(G),V=G=>{if(f<=0||Math.abs(G)<=m)return o;const Q=Math.sign(G)*m;return h+Math.sqrt(Math.max(0,f**2-(G-Q)**2))},he=G=>-V(G);for(let G=0;G<y.length-1;G+=1)for(let Q=0;Q<N.length-1;Q+=1){const z=y[G],ue=y[G+1],te=N[Q],H=N[Q+1];j((z+ue)/2,(te+H)/2)||I.push(...gr({x:z,z:te},{x:ue,z:te},{x:ue,z:H},{x:z,z:H},i.height))}for(let G=0;G<R.length-1;G+=1){const Q=R[G],z=R[G+1];I.push(...gr({x:Q,z:-d},{x:z,z:-d},{x:z,z:L(z)},{x:Q,z:L(Q)},i.height),...gr({x:z,z:d},{x:Q,z:d},{x:Q,z:b(Q)},{x:z,z:b(z)},i.height))}for(let G=0;G<C.length-1;G+=1){const Q=C[G],z=C[G+1];I.push(...gr({x:c,z:Q},{x:V(Q),z:Q},{x:V(z),z},{x:c,z},i.height),...gr({x:-c,z},{x:he(z),z},{x:he(Q),z:Q},{x:-c,z:Q},i.height))}const W=new Map(e.map(G=>[`${yi(G.x)},${yi(G.z)}`,G])),Z=(G,Q)=>W.get(`${yi(G)},${yi(Q)}`)??{x:G,z:Q};return[[{x:c,z:-d},{x,z:-d},Z(x,L(x)),...e.filter(G=>G.x>x&&G.z<-g),Z(V(-g),-g),{x:c,z:-g}],[{x:c,z:d},{x:c,z:g},Z(V(g),g),...e.filter(G=>G.x>x&&G.z>g),Z(x,b(x)),{x,z:d}],[{x:-c,z:d},{x:-x,z:d},Z(-x,b(-x)),...e.filter(G=>G.x<-x&&G.z>g),Z(he(g),g),{x:-c,z:g}],[{x:-c,z:-d},{x:-c,z:-g},Z(he(-g),-g),...e.filter(G=>G.x<-x&&G.z<-g),Z(-x,L(-x)),{x:-x,z:-d}]].forEach(G=>{const Q=[];G.forEach(te=>Jt(Q,te));const z=Q[0],ue=Q[Q.length-1];z&&ue&&Math.abs(z.x-ue.x)<1e-4&&Math.abs(z.z-ue.z)<1e-4&&Q.pop(),I.push(...Bh(Q,i.height))}),I}function MA(i){var l;if((l=i.layout)!=null&&l.length)return SA(i,i.layout);const e=i.width-i.wallThickness*2,t=i.depth-i.wallThickness*2,r=qc(e,i.columns,i.columnRatios,i.wallThickness),o=qc(t,i.rows,i.rowRatios,i.wallThickness);return r.flatMap(([c,d])=>o.map(([f,h])=>_A(c,d,f,h)))}function SA(i,e){const t=wn(e)??[],r=i.width-i.wallThickness*2,o=i.depth-i.wallThickness*2,l=r/2,c=o/2,d=i.wallThickness/2,f=1e-4,h=t.flatMap(g=>{const M=-l+g.x*r,S=-l+(g.x+g.width)*r,E=-c+g.y*o,_=-c+(g.y+g.height)*o,y=M+(g.x<=f?0:d),N=S-(g.x+g.width>=1-f?0:d),R=E+(g.y<=f?0:d),C=_-(g.y+g.height>=1-f?0:d);return N-y<=.5||C-R<=.5?[]:[{minX:y,maxX:N,minZ:R,maxZ:C}]}),m=h.flatMap(g=>[g.minX,g.maxX]),x=h.flatMap(g=>[g.minZ,g.maxZ]);return h.map(g=>mh(g.minX,g.maxX,g.minZ,g.maxZ,m,x))}function gh(i){return i.reduce((e,t)=>({minX:Math.min(e.minX,t.x),maxX:Math.max(e.maxX,t.x),minZ:Math.min(e.minZ,t.z),maxZ:Math.max(e.maxZ,t.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0})}function Dx(i,e,t,r=i.height,o=[],l=[]){const c=i.width/2,d=i.depth/2,f=i.width/2-i.wallThickness,h=i.depth/2-i.wallThickness,m=Math.min(Math.max(i.cornerRadius,0),c-.001,d-.001),x=m<=0?c:c-m,g=m<=0?d:d-m,M=f,S=h,E=e.map(gh),_=di([-f,f,...o,...E.flatMap(W=>[W.minX,W.maxX])]),y=di([-h,h,...l,...E.flatMap(W=>[W.minZ,W.maxZ])]),N=(W,Z)=>E.some(O=>W>O.minX&&W<O.maxX&&Z>O.minZ&&Z<O.maxZ),R=[];for(let W=0;W<_.length-1;W+=1)for(let Z=0;Z<y.length-1;Z+=1){const O=_[W],G=_[W+1],Q=y[Z],z=y[Z+1];G-O<=.001||z-Q<=.001||N((O+G)/2,(Q+z)/2)||R.push(...gr({x:O,z:Q},{x:G,z:Q},{x:G,z},{x:O,z},r))}const C=di([-M,M,..._.filter(W=>W>=-M&&W<=M)]),k=di([-S,S,...y.filter(W=>W>=-S&&W<=S)]),D=W=>{if(m<=0||Math.abs(W)<=x)return-d;const Z=Math.sign(W)*x;return-g-Math.sqrt(Math.max(0,m**2-(W-Z)**2))},I=W=>-D(W),j=W=>{if(m<=0||Math.abs(W)<=g)return c;const Z=Math.sign(W)*g;return x+Math.sqrt(Math.max(0,m**2-(W-Z)**2))},L=W=>-j(W);for(let W=0;W<C.length-1;W+=1){const Z=C[W],O=C[W+1];R.push(...gr({x:Z,z:-h},{x:O,z:-h},{x:O,z:D(O)},{x:Z,z:D(Z)},r),...gr({x:O,z:h},{x:Z,z:h},{x:Z,z:I(Z)},{x:O,z:I(O)},r))}for(let W=0;W<k.length-1;W+=1){const Z=k[W],O=k[W+1];R.push(...gr({x:f,z:Z},{x:j(Z),z:Z},{x:j(O),z:O},{x:f,z:O},r),...gr({x:-f,z:O},{x:L(O),z:O},{x:L(Z),z:Z},{x:-f,z:Z},r))}const b=new Map(t.map(W=>[`${yi(W.x)},${yi(W.z)}`,W])),V=(W,Z)=>b.get(`${yi(W)},${yi(Z)}`)??{x:W,z:Z};return[[{x:f,z:-h},{x:M,z:-h},V(M,D(M)),...t.filter(W=>W.x>M&&W.z<-S),V(j(-S),-S),{x:f,z:-S}],[{x:f,z:h},{x:f,z:S},V(j(S),S),...t.filter(W=>W.x>M&&W.z>S),V(M,I(M)),{x:M,z:h}],[{x:-f,z:h},{x:-M,z:h},V(-M,I(-M)),...t.filter(W=>W.x<-M&&W.z>S),V(L(S),S),{x:-f,z:S}],[{x:-f,z:-h},{x:-f,z:-S},V(L(-S),-S),...t.filter(W=>W.x<-M&&W.z<-S),V(-M,D(-M)),{x:-M,z:-h}]].forEach(W=>{const Z=[];W.forEach(Q=>Jt(Z,Q));const O=Z[0],G=Z[Z.length-1];O&&G&&Math.abs(O.x-G.x)<1e-4&&Math.abs(O.z-G.z)<1e-4&&Z.pop(),R.push(...Bh(Z,r))}),R}function EA(i){const[e,t,r]=i,o=xA(gA(Px(t,e),Px(r,e))),l=c=>`      vertex ${yi(c.x)} ${yi(c.y)} ${yi(c.z)}`;return[`  facet normal ${yi(o.x)} ${yi(o.y)} ${yi(o.z)}`,"    outer loop",l(e),l(t),l(r),"    endloop","  endfacet"].join(`
`)}const wA=i=>[i.x,i.y,i.z].map(e=>Math.round(e*1e4)/1e4).join(",");function z0(i){const e=new Map;return i.forEach(t=>{const r=t.map(wA);[[r[0],r[1]],[r[1],r[2]],[r[2],r[0]]].forEach(([o,l])=>{const c=o<l?`${o}|${l}`:`${l}|${o}`;e.set(c,(e.get(c)??0)+1)})}),[...e.values()].filter(t=>t!==2).length}function TA(i){const[e,t,r]=i,o={x:t.x-e.x,z:t.z-e.z},l={x:r.x-e.x,z:r.z-e.z};return o.z*l.x-o.x*l.z}function B0(i){return i.filter(e=>e.every(r=>Math.abs(r.y-e[0].y)<1e-4)&&e[0].y>0&&TA(e)<=0).length}function CA(i,e){return i.map(t=>t.map(r=>({x:r.x+e.x,y:r.y+e.y,z:r.z+e.z})))}function AA(i){return i.map(([e,t,r])=>[e,r,t])}function RA(i,e){return{triangles:i,stats:{estimatedVolumeMm3:e,nonManifoldEdgeCount:z0(i),topFaceDownwardCount:B0(i),triangleCount:i.length},checks:[]}}function H0(i,e){const t=Math.max(i.wallThickness,i.width-i.wallThickness*2),r=Math.max(i.wallThickness,i.depth-i.wallThickness*2),o=t/2,l=r/2;return{minX:-o+e.x*t,maxX:-o+(e.x+e.width)*t,minZ:-l+e.y*r,maxZ:-l+(e.y+e.height)*r}}function V0(i,e,t){var r,o;return((r=i.pickupFilletCellModes)==null?void 0:r[e.id])??((o=i.pickupFilletCellModes)==null?void 0:o[`cell-${t+1}`])??"none"}function G0(i,e){return i.pickupFillet?cu(i).map((t,r)=>({cell:t,index:r})).filter(({cell:t,index:r})=>V0(i,t,r)===e).map(({cell:t,index:r})=>{const o=t.id||`cell-${r+1}`,l=eu(i,o),c=H0(i,t),d=e==="removable"?l.fitClearance:0,f=Math.max(0,(Math.min(c.maxX-c.minX,c.maxZ-c.minZ)-.5)/2),h=Math.min(d,f);return{minX:c.minX+h,maxX:c.maxX-h,minZ:c.minZ+h,maxZ:c.maxZ-h,cellId:o,shape:l}}).filter(Zo):[]}function bA(i){return i.pickupFillet?cu(i).map((e,t)=>({cell:e,index:t})).filter(({cell:e,index:t})=>V0(i,e,t)!=="none").map(({cell:e})=>H0(i,e)).filter(Zo):[]}function PA(i,e,t,r,o){const l=i.maxX-i.minX,c=i.maxZ-i.minZ,d=Math.min(e-i.minX,i.maxX-e),f=Math.min(t-i.minZ,i.maxZ-t),h=Math.max(0,Math.min(1,(r-d)/r)),m=Math.max(0,Math.min(1,(r-f)/r)),x=Math.min(1,Math.pow(Math.pow(h,4)+Math.pow(m,4),1/4)),g=Math.max(1,Math.min(l,c)/2),M=Math.max(.25,Math.min(1,r/g)),S=1-Math.cos(x*Math.PI/2);return o*Math.pow(S,1/(1+M))}function LA(i,e,t,r){const o=i.maxX-i.minX,l=i.maxZ-i.minZ,c=Math.min(i.shape.radius,Math.max(1,o/2),Math.max(1,l/2)),d=i.shape.height,f=Math.min(1.2,Math.max(.4,d*.2)),h=Math.max(.1,Math.min(d,r-t-f)),m=e.pickupFilletMeshQuality==="high",x=m?Math.max(1.2,Math.min(2.4,c/6)):Math.max(2,Math.min(4,c/4)),g=Math.min(m?80:48,Math.max(m?20:12,Math.ceil(Math.max(o,l)/x))),M=Array.from({length:g+1},(N,R)=>i.minX+o*R/g),S=Array.from({length:g+1},(N,R)=>i.minZ+l*R/g),E=(N,R)=>({x:N,y:t+f+PA(i,N,R,c,h),z:R}),_=(N,R)=>({x:N,y:t,z:R}),y=[];for(let N=0;N<g;N+=1)for(let R=0;R<g;R+=1){const C=M[N],k=M[N+1],D=S[R],I=S[R+1],j=E(C,D),L=E(k,D),b=E(k,I),V=E(C,I),he=_(C,D),W=_(k,D),Z=_(k,I),O=_(C,I);y.push([j,b,L],[j,V,b]),y.push([he,W,Z],[he,Z,O])}for(let N=0;N<g;N+=1){const R=M[N],C=M[N+1];y.push([_(R,i.minZ),E(C,i.minZ),E(R,i.minZ)],[_(R,i.minZ),_(C,i.minZ),E(C,i.minZ)],[_(C,i.maxZ),E(R,i.maxZ),E(C,i.maxZ)],[_(C,i.maxZ),_(R,i.maxZ),E(R,i.maxZ)])}for(let N=0;N<g;N+=1){const R=S[N],C=S[N+1];y.push([_(i.minX,C),E(i.minX,R),E(i.minX,C)],[_(i.minX,C),_(i.minX,R),E(i.minX,R)],[_(i.maxX,R),E(i.maxX,C),E(i.maxX,R)],[_(i.maxX,R),_(i.maxX,C),E(i.maxX,C)])}return{triangles:y,estimatedVolumeMm3:o*l*(f+h*.35)}}function W0(i,e,t,r){const o=G0(i,e).map(l=>LA(l,i,t,r));return{triangles:o.flatMap(l=>l.triangles),estimatedVolumeMm3:o.reduce((l,c)=>l+c.estimatedVolumeMm3,0)}}const DA=i=>Math.max(0,i.maxX-i.minX)*Math.max(0,i.maxZ-i.minZ),Zo=i=>i.maxX-i.minX>.4&&i.maxZ-i.minZ>.4;function Nx(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function NA(i){const e=Nx(i.columns,i.columnRatios),t=Nx(i.rows,i.rowRatios),r=[0],o=[0];e.forEach(c=>{r.push(r[r.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let d=0;d<i.columns;d+=1)l.push({id:`stack-cell-${l.length+1}`,x:r[d],y:o[c],width:r[d+1]-r[d],height:o[c+1]-o[c]});return wn(l)??[]}function cu(i){var e;return(e=i.layout)!=null&&e.length?wn(i.layout)??[]:NA(i)}function IA(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),r=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-r/2+i.start*r,maxZ:-r/2+i.end*r}}const l=-r/2+i.position*r;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}const Ix=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4;function FA(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),r=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,r-i.wallThickness*2),c=-t/2,d=t/2,f=-r/2,h=r/2,m=-o/2,x=o/2,g=-l/2,M=l/2,S=.01,E=[{orientation:"horizontal",minX:c,maxX:d,minZ:f,maxZ:g},{orientation:"horizontal",minX:c,maxX:d,minZ:M,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:M-S},{orientation:"vertical",minX:x,maxX:d,minZ:g+S,maxZ:M-S}];if(i.stackingFootMode!=="short")return E.filter(Zo);const _=Math.min(Math.max(.4,i.stackingShortFootLength??18),Math.min(t,r));return[{orientation:"horizontal",minX:c,maxX:c+_,minZ:f,maxZ:g},{orientation:"horizontal",minX:d-_,maxX:d,minZ:f,maxZ:g},{orientation:"horizontal",minX:c,maxX:c+_,minZ:M,maxZ:h},{orientation:"horizontal",minX:d-_,maxX:d,minZ:M,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:g+_},{orientation:"vertical",minX:c,maxX:m,minZ:M-_,maxZ:M-S},{orientation:"vertical",minX:x,maxX:d,minZ:g+S,maxZ:g+_},{orientation:"vertical",minX:x,maxX:d,minZ:M-_,maxZ:M-S}].filter(Zo)}function Fx(i,e,t){const r=t.map(([c,d])=>[Math.max(i,c),Math.min(e,d)]).filter(([c,d])=>d-c>1e-4).sort(([c],[d])=>c-d),o=[];let l=i;return r.forEach(([c,d])=>{c-l>.4&&o.push([l,c]),l=Math.max(l,d)}),e-l>.4&&o.push([l,e]),o}function UA(i){const e=FA(i),t=cu(i),r=qo(t).map(l=>IA(l,i)),o=i.wallThickness+(i.stackingGrooveClearance??.6)*2;return e.flatMap(l=>{if(l.orientation==="horizontal"){const d=r.filter(f=>Ix(l,f)).map(f=>{const h=(f.minX+f.maxX)/2;return[h-o/2,h+o/2]});return Fx(l.minX,l.maxX,d).map(([f,h])=>({minX:f,maxX:h,minZ:l.minZ,maxZ:l.maxZ})).filter(Zo)}const c=r.filter(d=>Ix(l,d)).map(d=>{const f=(d.minZ+d.maxZ)/2;return[f-o/2,f+o/2]});return Fx(l.minZ,l.maxZ,c).map(([d,f])=>({minX:l.minX,maxX:l.maxX,minZ:d,maxZ:f})).filter(Zo)})}function kA(i){const e=Ya(i),t=bA(i),r=t.length>0,o=!!(i.pickupFillet&&Object.values(i.pickupFilletCellModes??{}).some(g=>g==="removable")),l=t.reduce((g,M)=>Math.min(g,M.maxX-M.minX,M.maxZ-M.minZ),Number.POSITIVE_INFINITY),c=i.pickupFilletRadius??16,d=i.pickupFilletHeight??5,f=Math.min(1.2,Math.max(.4,d*.2)),h=Math.max(1,i.height-i.floorThickness),m=[i.wallThickness<1.6?{id:"wall-thickness",label:"壁厚",level:"warning",message:"壁厚が1.6 mm未満です。"}:{id:"wall-thickness",label:"壁厚",level:"ok",message:"壁厚は印刷しやすい値です。"},i.floorThickness<1.6?{id:"floor-thickness",label:"床厚",level:"warning",message:"床厚が1.6 mm未満です。"}:{id:"floor-thickness",label:"床厚",level:"ok",message:"床厚は印刷しやすい値です。"}];if(e.hasInterference&&m.push({id:"stacking-interference",label:"スタック干渉",level:"warning",message:`スタック脚が仕切りと干渉する可能性があります。推奨逃げ幅 ${e.recommendedReliefGapMm} mm。`}),r&&c>l*.42&&m.push({id:"pickup-fillet-radius",label:"フィレット半径",level:"warning",message:"フィレット半径が区画に対して大きめです。中央の平坦部が狭くなる可能性があります。"}),r&&d>h*.78&&m.push({id:"pickup-fillet-height",label:"フィレット高さ",level:"warning",message:"フィレット高さが壁高さに近すぎます。トレイ上面付近まで立ち上がります。"}),o&&f<.8&&m.push({id:"pickup-fillet-removable-thickness",label:"取り外しフィレット",level:"warning",message:"取り外し式フィレットの底板が薄めです。造形安定性のため高さを少し上げてください。"}),o){const g=$a(i),S=G0({...i,pickupFilletFitClearance:0},"removable").reduce((_,y)=>Math.min(_,y.maxX-y.minX,y.maxZ-y.minZ),Number.POSITIVE_INFINITY),E=Math.max(0,(S-.5)/2);Number.isFinite(S)&&(i.pickupFilletFitClearance??.4)>E&&m.push({id:"pickup-fillet-clearance-oversized",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが区画に対して大きすぎます。部品が細くなりすぎないよう、出力時は区画ごとに安全値へ丸めます。"}),g.clearanceState==="tight"&&m.push({id:"pickup-fillet-clearance-tight",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが小さめです。印刷誤差で干渉する可能性があります。"}),g.clearanceState==="loose"&&m.push({id:"pickup-fillet-clearance-loose",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが大きめです。装着時にガタつく可能性があります。"})}const x=new Set;return cu(i).forEach((g,M)=>{const S=g.id||`cell-${M+1}`;Yx(i,S).forEach(E=>{const _=`pickup-fillet-cell-${E.id}`;x.has(_)||(x.add(_),m.push({id:_,label:"区画別フィレット",level:"warning",message:`${S}: ${E.message}`}))})}),m}function Ux(i,e={}){var he,W;const t=rn(i),r={...t,cornerRadius:Math.min(t.cornerRadius,t.wallThickness)},o=r.width-r.wallThickness*2,l=r.depth-r.wallThickness*2,c=MA(r),d=(he=r.layout)!=null&&he.length?c.map(gh):void 0,f=d?d.flatMap(Z=>[Z.minX,Z.maxX]):Kc(o,r.columns,r.columnRatios,r.wallThickness),h=d?d.flatMap(Z=>[Z.minZ,Z.maxZ]):Kc(l,r.rows,r.rowRatios,r.wallThickness),m=e.includeStackingLip&&r.stackingLip?UA(r):[],x=m.flatMap(Z=>[Z.minX,Z.maxX]),g=m.flatMap(Z=>[Z.minZ,Z.maxZ]),M=Ha(vA(r.width,r.depth,r.cornerRadius,[...f,...x,-o/2,o/2],[...h,...g,-l/2,l/2]),!1),S=r.height-r.floorThickness,E=m.length?r.stackingLipHeight??3:0,_=m.map(Z=>mh(Z.minX,Z.maxX,Z.minZ,Z.maxZ,x,g)),y=c.map(Z=>{const O=gh(Z);return mh(O.minX,O.maxX,O.minZ,O.maxZ,[...f,...x],[...h,...g])}),N=(W=r.layout)!=null&&W.length?Dx(r,y,M,r.height,x,g):yA(r,M,x,g),R=_.length?AA(Dx(r,_,M,0,[...f,...x],[...h,...g])):wf(M,[],0),C=Ef(M,0,r.height),k=y.flatMap(Z=>Ef(Ha(Z,!0),r.floorThickness,r.height)),D=y.flatMap(Z=>wf(Z,[],r.floorThickness,!0)),I=_.flatMap(Z=>[...Ef(Ha(Z,!1),-E,0),...wf(Z,[],-E)]),j=[...N,...R,...C,...k,...D,...I],L=Lx(M),b=y.reduce((Z,O)=>Z+Lx(O),0),V=m.reduce((Z,O)=>Z+DA(O),0);return{triangles:j,estimatedVolumeMm3:L*r.floorThickness+(L-b)*S+V*E}}function OA(i){const e=rn(i),t=Ux(e,{includeStackingLip:!0}),r=[...t.triangles];let o=t.estimatedVolumeMm3;const l=W0(e,"integrated",e.floorThickness+.02,e.height);if(r.push(...l.triangles),o+=l.estimatedVolumeMm3,e.includeLid){const c=rn({...e,kind:"tray",width:e.width+e.lidClearance*2+e.wallThickness*2,depth:e.depth+e.lidClearance*2+e.wallThickness*2,height:e.lidHeight,floorThickness:Math.min(e.floorThickness,e.lidHeight/2),cornerRadius:e.cornerRadius+e.wallThickness,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,includeLid:!1,stackingLip:!1}),d=Ux(c),f={x:e.width/2+c.width/2+18,y:0,z:0};r.push(...CA(d.triangles,f)),o+=d.estimatedVolumeMm3}return{triangles:r,stats:{estimatedVolumeMm3:o,nonManifoldEdgeCount:z0(r),topFaceDownwardCount:B0(r),triangleCount:r.length},checks:kA(e)}}function j0(i){const e=rn(i),t=W0(e,"removable",0,e.height-e.floorThickness);return RA(t.triangles,t.estimatedVolumeMm3)}function Qc(i,e="hako-forge"){const t=e.replace(/[^\w.-]/g,"-"),r=i.triangles.map(EA).join(`
`);return[`solid ${t}`,r,`endsolid ${t}`,""].join(`
`)}function kx(i){return typeof i=="object"&&i!==null}function X0(i){const e={app:"Hako-Forge",version:1,settings:rn(i)};return`${JSON.stringify(e,null,2)}
`}function zA(i){const e=JSON.parse(i);if(!kx(e)||e.app!=="Hako-Forge"||e.version!==1)throw new Error("Hako-ForgeのプロジェクトJSONではありません。");if(!kx(e.settings))throw new Error("プロジェクト設定が見つかりません。");return rn(e.settings)}function BA(i,e){const t=za(i),r=[{role:"body-stl",fileName:t,text:Qc(e,t.replace(/\.stl$/,"")),type:"model/stl;charset=utf-8"}],o=j0(i);if(o.triangles.length>0){const l=wh(i);r.push({role:"removable-fillet-stl",fileName:l,text:Qc(o,l.replace(/\.stl$/,"")),type:"model/stl;charset=utf-8"})}return r.push({role:"project-json",fileName:Th(i),text:X0(i),type:"application/json;charset=utf-8"},{role:"print-report-json",fileName:Ah(t),text:Qx(i,e),type:"application/json;charset=utf-8"}),r}function HA(){const[i,e]=Ie.useState("size"),[t,r]=Ie.useState(gy),[o,l]=Ie.useState(""),[c,d]=Ie.useState("solid"),[f,h]=Ie.useState(0),m=Ie.useMemo(()=>OA(t),[t]),x=Ie.useMemo(()=>Wx(t.layout??En(t.columns,t.rows)),[t.columns,t.layout,t.rows]),g=(D,I)=>{r(j=>rn({...j,[D]:I})),l("")},M=D=>{r(I=>rn({...I,layout:D,columns:D?Math.min(8,Math.max(1,D.length)):I.columns,rows:D?1:I.rows})),l("")},S=()=>{r(D=>rn({...D,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,layout:void 0})),l("")},E=(D,I,j)=>{const L=new Blob([I],{type:j}),b=URL.createObjectURL(L),V=document.createElement("a");V.href=b,V.download=D,document.body.appendChild(V),V.click(),V.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),0)},_=()=>{try{const D=wg(t,x);if(D){e("download"),l(D);return}const I=za(t),j=Qc(m,I.replace(/\.stl$/,""));E(I,j,"model/stl;charset=utf-8")}catch(D){l(D instanceof Error?D.message:"STLファイルを作成できませんでした。")}},y=()=>{try{E(Th(t),X0(t),"application/json;charset=utf-8"),l("")}catch(D){l(D instanceof Error?D.message:"プロジェクトファイルを作成できませんでした。")}},N=()=>{try{const D=za(t);E(Ah(D),Qx(t,m),"application/json;charset=utf-8"),l("")}catch(D){l(D instanceof Error?D.message:"印刷品質レポートを作成できませんでした。")}},R=()=>{try{const D=j0(t);if(D.triangles.length===0){l("取り外し式フィレットが選択されていません。");return}const I=wh(t),j=Qc(D,I.replace(/\.stl$/,""));E(I,j,"model/stl;charset=utf-8"),l("")}catch(D){l(D instanceof Error?D.message:"フィレットSTLファイルを作成できませんでした。")}},C=()=>{try{const D=wg(t,x);if(D){e("download"),l(D);return}BA(t,m).forEach(I=>{E(I.fileName,I.text,I.type)}),l("")}catch(D){l(D instanceof Error?D.message:"一括保存ファイルを作成できませんでした。")}},k=D=>{const I=new FileReader;I.addEventListener("load",()=>{try{r(zA(String(I.result??""))),l("")}catch(j){l(j instanceof Error?j.message:"プロジェクトファイルを読み込めませんでした。")}}),I.addEventListener("error",()=>{l("プロジェクトファイルを読み込めませんでした。")}),I.readAsText(D)};return w.jsxs("main",{className:"app-shell",children:[w.jsx(fA,{settings:t,mesh:m,resetToken:f,viewMode:c}),w.jsxs("header",{className:"topbar","aria-label":"モデル作成ワークフロー",children:[null,w.jsxs("button",{className:"export-button",type:"button",onClick:_,children:[w.jsx(Oa,{size:18,"aria-hidden":"true"}),"STL出力"]})]}),w.jsx(pA,{mode:c,onModeChange:d,onResetView:()=>h(D=>D+1)}),null,w.jsxs("section",{className:"work-panel","aria-label":"モデル設定",children:[w.jsx("div",{className:"panel-header",children:w.jsx(lM,{activeStep:i,onChange:e})}),i==="download"?w.jsxs(w.Fragment,{children:[w.jsx(sM,{error:o,fileName:za(t),checks:m.checks,layoutValidation:x,stats:m.stats,settings:t,onDisableStacking:()=>g("stackingLip",!1),onDownload:_,onDownloadAll:C,onDownloadPickupFillets:R,onLoadProject:k,onOpenLayout:()=>e("grid"),onSaveReport:N,onSaveProject:y}),w.jsx(oM,{checks:m.checks,stats:m.stats})]}):w.jsx(iM,{activeStep:i,settings:t,onChange:g,onLayoutChange:M,onResetLayout:S})]})]})}P_.createRoot(document.getElementById("root")).render(w.jsx(E_.StrictMode,{children:w.jsx(HA,{})}));
