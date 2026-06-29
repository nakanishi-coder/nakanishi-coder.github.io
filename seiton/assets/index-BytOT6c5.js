(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function z0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Of={exports:{}},ba={},zf={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function E_(){if(eg)return At;eg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function g(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function y(H,pe,Ne){this.props=H,this.context=pe,this.refs=E,this.updater=Ne||M}y.prototype.isReactComponent={},y.prototype.setState=function(H,pe){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,pe,"setState")},y.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function v(){}v.prototype=y.prototype;function N(H,pe,Ne){this.props=H,this.context=pe,this.refs=E,this.updater=Ne||M}var L=N.prototype=new v;L.constructor=N,S(L,y.prototype),L.isPureReactComponent=!0;var A=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(H,pe,Ne){var re,xe={},Se=null,Me=null;if(pe!=null)for(re in pe.ref!==void 0&&(Me=pe.ref),pe.key!==void 0&&(Se=""+pe.key),pe)O.call(pe,re)&&!F.hasOwnProperty(re)&&(xe[re]=pe[re]);var be=arguments.length-2;if(be===1)xe.children=Ne;else if(1<be){for(var ze=Array(be),et=0;et<be;et++)ze[et]=arguments[et+2];xe.children=ze}if(H&&H.defaultProps)for(re in be=H.defaultProps,be)xe[re]===void 0&&(xe[re]=be[re]);return{$$typeof:i,type:H,key:Se,ref:Me,props:xe,_owner:I.current}}function b(H,pe){return{$$typeof:i,type:H.type,key:pe,ref:H.ref,props:H.props,_owner:H._owner}}function R(H){return typeof H=="object"&&H!==null&&H.$$typeof===i}function B(H){var pe={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Ne){return pe[Ne]})}var he=/\/+/g;function V(H,pe){return typeof H=="object"&&H!==null&&H.key!=null?B(""+H.key):pe.toString(36)}function Y(H,pe,Ne,re,xe){var Se=typeof H;(Se==="undefined"||Se==="boolean")&&(H=null);var Me=!1;if(H===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(H.$$typeof){case i:case e:Me=!0}}if(Me)return Me=H,xe=xe(Me),H=re===""?"."+V(Me,0):re,A(xe)?(Ne="",H!=null&&(Ne=H.replace(he,"$&/")+"/"),Y(xe,pe,Ne,"",function(et){return et})):xe!=null&&(R(xe)&&(xe=b(xe,Ne+(!xe.key||Me&&Me.key===xe.key?"":(""+xe.key).replace(he,"$&/")+"/")+H)),pe.push(xe)),1;if(Me=0,re=re===""?".":re+":",A(H))for(var be=0;be<H.length;be++){Se=H[be];var ze=re+V(Se,be);Me+=Y(Se,pe,Ne,ze,xe)}else if(ze=g(H),typeof ze=="function")for(H=ze.call(H),be=0;!(Se=H.next()).done;)Se=Se.value,ze=re+V(Se,be++),Me+=Y(Se,pe,Ne,ze,xe);else if(Se==="object")throw pe=String(H),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.");return Me}function Q(H,pe,Ne){if(H==null)return H;var re=[],xe=0;return Y(H,re,"","",function(Se){return pe.call(Ne,Se,xe++)}),re}function W(H){if(H._status===-1){var pe=H._result;pe=pe(),pe.then(function(Ne){(H._status===0||H._status===-1)&&(H._status=1,H._result=Ne)},function(Ne){(H._status===0||H._status===-1)&&(H._status=2,H._result=Ne)}),H._status===-1&&(H._status=0,H._result=pe)}if(H._status===1)return H._result.default;throw H._result}var ee={current:null},D={transition:null},ne={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:D,ReactCurrentOwner:I};function te(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:Q,forEach:function(H,pe,Ne){Q(H,function(){pe.apply(this,arguments)},Ne)},count:function(H){var pe=0;return Q(H,function(){pe++}),pe},toArray:function(H){return Q(H,function(pe){return pe})||[]},only:function(H){if(!R(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},At.Component=y,At.Fragment=t,At.Profiler=o,At.PureComponent=N,At.StrictMode=r,At.Suspense=d,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,At.act=te,At.cloneElement=function(H,pe,Ne){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var re=S({},H.props),xe=H.key,Se=H.ref,Me=H._owner;if(pe!=null){if(pe.ref!==void 0&&(Se=pe.ref,Me=I.current),pe.key!==void 0&&(xe=""+pe.key),H.type&&H.type.defaultProps)var be=H.type.defaultProps;for(ze in pe)O.call(pe,ze)&&!F.hasOwnProperty(ze)&&(re[ze]=pe[ze]===void 0&&be!==void 0?be[ze]:pe[ze])}var ze=arguments.length-2;if(ze===1)re.children=Ne;else if(1<ze){be=Array(ze);for(var et=0;et<ze;et++)be[et]=arguments[et+2];re.children=be}return{$$typeof:i,type:H.type,key:xe,ref:Se,props:re,_owner:Me}},At.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:l,_context:H},H.Consumer=H},At.createElement=G,At.createFactory=function(H){var pe=G.bind(null,H);return pe.type=H,pe},At.createRef=function(){return{current:null}},At.forwardRef=function(H){return{$$typeof:u,render:H}},At.isValidElement=R,At.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:W}},At.memo=function(H,pe){return{$$typeof:h,type:H,compare:pe===void 0?null:pe}},At.startTransition=function(H){var pe=D.transition;D.transition={};try{H()}finally{D.transition=pe}},At.unstable_act=te,At.useCallback=function(H,pe){return ee.current.useCallback(H,pe)},At.useContext=function(H){return ee.current.useContext(H)},At.useDebugValue=function(){},At.useDeferredValue=function(H){return ee.current.useDeferredValue(H)},At.useEffect=function(H,pe){return ee.current.useEffect(H,pe)},At.useId=function(){return ee.current.useId()},At.useImperativeHandle=function(H,pe,Ne){return ee.current.useImperativeHandle(H,pe,Ne)},At.useInsertionEffect=function(H,pe){return ee.current.useInsertionEffect(H,pe)},At.useLayoutEffect=function(H,pe){return ee.current.useLayoutEffect(H,pe)},At.useMemo=function(H,pe){return ee.current.useMemo(H,pe)},At.useReducer=function(H,pe,Ne){return ee.current.useReducer(H,pe,Ne)},At.useRef=function(H){return ee.current.useRef(H)},At.useState=function(H){return ee.current.useState(H)},At.useSyncExternalStore=function(H,pe,Ne){return ee.current.useSyncExternalStore(H,pe,Ne)},At.useTransition=function(){return ee.current.useTransition()},At.version="18.3.1",At}var tg;function gh(){return tg||(tg=1,zf.exports=E_()),zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function w_(){if(ng)return ba;ng=1;var i=gh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var m,x={},g=null,M=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(M=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(x[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)x[m]===void 0&&(x[m]=d[m]);return{$$typeof:e,type:u,key:g,ref:M,props:x,_owner:o.current}}return ba.Fragment=t,ba.jsx=c,ba.jsxs=c,ba}var ig;function T_(){return ig||(ig=1,Of.exports=w_()),Of.exports}var w=T_(),Pe=gh();const C_=z0(Pe);var Ql={},Bf={exports:{}},_i={},Hf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function A_(){return rg||(rg=1,(function(i){function e(D,ne){var te=D.length;D.push(ne);e:for(;0<te;){var H=te-1>>>1,pe=D[H];if(0<o(pe,ne))D[H]=ne,D[te]=pe,te=H;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var ne=D[0],te=D.pop();if(te!==ne){D[0]=te;e:for(var H=0,pe=D.length,Ne=pe>>>1;H<Ne;){var re=2*(H+1)-1,xe=D[re],Se=re+1,Me=D[Se];if(0>o(xe,te))Se<pe&&0>o(Me,xe)?(D[H]=Me,D[Se]=te,H=Se):(D[H]=xe,D[re]=te,H=re);else if(Se<pe&&0>o(Me,te))D[H]=Me,D[Se]=te,H=Se;else break e}}return ne}function o(D,ne){var te=D.sortIndex-ne.sortIndex;return te!==0?te:D.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();i.unstable_now=function(){return c.now()-u}}var d=[],h=[],m=1,x=null,g=3,M=!1,S=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(D){for(var ne=t(h);ne!==null;){if(ne.callback===null)r(h);else if(ne.startTime<=D)r(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function A(D){if(E=!1,L(D),!S)if(t(d)!==null)S=!0,W(O);else{var ne=t(h);ne!==null&&ee(A,ne.startTime-D)}}function O(D,ne){S=!1,E&&(E=!1,v(G),G=-1),M=!0;var te=g;try{for(L(ne),x=t(d);x!==null&&(!(x.expirationTime>ne)||D&&!B());){var H=x.callback;if(typeof H=="function"){x.callback=null,g=x.priorityLevel;var pe=H(x.expirationTime<=ne);ne=i.unstable_now(),typeof pe=="function"?x.callback=pe:x===t(d)&&r(d),L(ne)}else r(d);x=t(d)}if(x!==null)var Ne=!0;else{var re=t(h);re!==null&&ee(A,re.startTime-ne),Ne=!1}return Ne}finally{x=null,g=te,M=!1}}var I=!1,F=null,G=-1,b=5,R=-1;function B(){return!(i.unstable_now()-R<b)}function he(){if(F!==null){var D=i.unstable_now();R=D;var ne=!0;try{ne=F(!0,D)}finally{ne?V():(I=!1,F=null)}}else I=!1}var V;if(typeof N=="function")V=function(){N(he)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Q=Y.port2;Y.port1.onmessage=he,V=function(){Q.postMessage(null)}}else V=function(){y(he,0)};function W(D){F=D,I||(I=!0,V())}function ee(D,ne){G=y(function(){D(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){S||M||(S=!0,W(O))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(D){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var te=g;g=ne;try{return D()}finally{g=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,ne){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var te=g;g=D;try{return ne()}finally{g=te}},i.unstable_scheduleCallback=function(D,ne,te){var H=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?H+te:H):te=H,D){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=te+pe,D={id:m++,callback:ne,priorityLevel:D,startTime:te,expirationTime:pe,sortIndex:-1},te>H?(D.sortIndex=te,e(h,D),t(d)===null&&D===t(h)&&(E?(v(G),G=-1):E=!0,ee(A,te-H))):(D.sortIndex=pe,e(d,D),S||M||(S=!0,W(O))),D},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(D){var ne=g;return function(){var te=g;g=ne;try{return D.apply(this,arguments)}finally{g=te}}}})(Vf)),Vf}var sg;function R_(){return sg||(sg=1,Hf.exports=A_()),Hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function b_(){if(og)return _i;og=1;var i=gh(),e=R_();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function g(n){return d.call(x,n)?!0:d.call(m,n)?!1:h.test(n)?x[n]=!0:(m[n]=!0,!1)}function M(n,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,s,a,f){if(s===null||typeof s>"u"||M(n,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(n,s,a,f,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];y[s]=new E(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(v,N);y[s]=new E(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(v,N);y[s]=new E(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(v,N);y[s]=new E(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,s,a,f){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(S(s,a,p,f)&&(a=null),f||p===null?g(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?n.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?n.setAttributeNS(f,s,a):n.setAttribute(s,a))))}var A=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),D=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,H;function pe(n){if(H===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+n}var Ne=!1;function re(n,s){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var f=de}Reflect.construct(n,[],s)}else{try{s.call()}catch(de){f=de}n.call(s.prototype)}else{try{throw Error()}catch(de){f=de}n()}}catch(de){if(de&&f&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,z=_.length-1;1<=T&&0<=z&&p[T]!==_[z];)z--;for(;1<=T&&0<=z;T--,z--)if(p[T]!==_[z]){if(T!==1||z!==1)do if(T--,z--,0>z||p[T]!==_[z]){var j=`
`+p[T].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=T&&0<=z);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?pe(n):""}function xe(n){switch(n.tag){case 5:return pe(n.type);case 16:return pe("Lazy");case 13:return pe("Suspense");case 19:return pe("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case b:return"Profiler";case G:return"StrictMode";case V:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case he:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return s=n.displayName||null,s!==null?s:Se(n.type)||"Memo";case W:s=n._payload,n=n._init;try{return Se(n(s))}catch{}}return null}function Me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(s);case 8:return s===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(n){var s=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),f=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function _t(n){n._valueTracker||(n._valueTracker=et(n))}function wt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return n&&(f=ze(n)?n.checked?"true":"false":n.value),n=f,n!==a?(s.setValue(n),!0):!1}function jt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $(n,s){var a=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function kn(n,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=be(s.value!=null?s.value:a),n._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(n,s){s=s.checked,s!=null&&L(n,"checked",s,!1)}function yt(n,s){pt(n,s);var a=be(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Gt(n,s.type,a):s.hasOwnProperty("defaultValue")&&Gt(n,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Qe(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,s,a){(s!=="number"||jt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Xe=Array.isArray;function U(n,s,a,f){if(n=n.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=s.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&f&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),s=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function C(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function se(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Xe(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:be(a)}}function ce(n,s){var a=be(s.value),f=be(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),f!=null&&(n.defaultValue=""+f)}function ue(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return n(s,a,f,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function mt(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){We.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ae[s]=Ae[n]})});function tt(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+s).trim():s+"px"}function rt(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=tt(a,s[a],f);a==="float"&&(a="cssFloat"),f?n.setProperty(a,p):n[a]=p}}var je=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(n,s){if(s){if(je[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ct(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function K(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,me=null,_e=null;function ke(n){if(n=pa(n)){if(typeof Fe!="function")throw Error(t(280));var s=n.stateNode;s&&(s=hl(s),Fe(n.stateNode,n.type,s))}}function Ue(n){me?_e?_e.push(n):_e=[n]:me=n}function ft(){if(me){var n=me,s=_e;if(_e=me=null,ke(n),s)for(n=0;n<s.length;n++)ke(s[n])}}function Yt(n,s){return n(s)}function gn(){}var Et=!1;function Wt(n,s,a){if(Et)return n(s,a);Et=!0;try{return Yt(n,s,a)}finally{Et=!1,(me!==null||_e!==null)&&(gn(),ft())}}function On(n,s){var a=n.stateNode;if(a===null)return null;var f=hl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ii=!1;if(u)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{ii=!1}function en(n,s,a,f,p,_,T,z,j){var de=Array.prototype.slice.call(arguments,3);try{s.apply(a,de)}catch(Ee){this.onError(Ee)}}var zn=!1,Li=null,Di=!1,di=null,Yi={onError:function(n){zn=!0,Li=n}};function qn(n,s,a,f,p,_,T,z,j){zn=!1,Li=null,en.apply(Yi,arguments)}function Ys(n,s,a,f,p,_,T,z,j){if(qn.apply(this,arguments),zn){if(zn){var de=Li;zn=!1,Li=null}else throw Error(t(198));Di||(Di=!0,di=de)}}function ri(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function si(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Zs(n){if(ri(n)!==n)throw Error(t(188))}function na(n){var s=n.alternate;if(!s){if(s=ri(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,f=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Zs(p),n;if(_===f)return Zs(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var T=!1,z=p.child;z;){if(z===a){T=!0,a=p,f=_;break}if(z===f){T=!0,f=p,a=_;break}z=z.sibling}if(!T){for(z=_.child;z;){if(z===a){T=!0,a=_,f=p;break}if(z===f){T=!0,f=_,a=p;break}z=z.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Tn(n){return n=na(n),n!==null?Hr(n):null}function Hr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Hr(n);if(s!==null)return s;n=n.sibling}return null}var P=e.unstable_scheduleCallback,J=e.unstable_cancelCallback,ae=e.unstable_shouldYield,fe=e.unstable_requestPaint,Z=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,Be=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,it=e.unstable_LowPriority,lt=e.unstable_IdlePriority,qe=null,dt=null;function Ft(n){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:nt,Zt=Math.log,Tt=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Zt(n)/Tt|0)|0}var sn=64,Ct=4194304;function bn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ei(n,s){var a=n.pendingLanes;if(a===0)return 0;var f=0,p=n.suspendedLanes,_=n.pingedLanes,T=a&268435455;if(T!==0){var z=T&~p;z!==0?f=bn(z):(_&=T,_!==0&&(f=bn(_)))}else T=a&~p,T!==0?f=bn(T):_!==0&&(f=bn(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=f;0<s;)a=31-Lt(s),p=1<<a,f|=n[a],s&=~p;return f}function Pn(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,s){for(var a=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-Lt(_),z=1<<T,j=p[T];j===-1?((z&a)===0||(z&f)!==0)&&(p[T]=Pn(z,s)):j<=s&&(n.expiredLanes|=z),_&=~z}}function Xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jn(){var n=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),n}function Ln(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function on(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Lt(s),n[s]=a}function X(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Lt(a),_=1<<p;s[p]=0,f[p]=-1,n[p]=-1,a&=~_}}function k(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var f=31-Lt(a),p=1<<f;p&s|n[f]&s&&(n[f]|=s),a&=~p}}var ge=0;function gt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bt,Mt,cn,Xn,Ut,xt=!1,Dt=[],qt=null,oi=null,Zi=null,yr=new Map,De=new Map,Rt=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _n(n,s){switch(n){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":De.delete(s.pointerId)}}function un(n,s,a,f,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=pa(s),s!==null&&Mt(s)),n):(n.eventSystemFlags|=f,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function yn(n,s,a,f,p){switch(s){case"focusin":return qt=un(qt,n,s,a,f,p),!0;case"dragenter":return oi=un(oi,n,s,a,f,p),!0;case"mouseover":return Zi=un(Zi,n,s,a,f,p),!0;case"pointerover":var _=p.pointerId;return yr.set(_,un(yr.get(_)||null,n,s,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,De.set(_,un(De.get(_)||null,n,s,a,f,p)),!0}return!1}function Mn(n){var s=ys(n.target);if(s!==null){var a=ri(s);if(a!==null){if(s=a.tag,s===13){if(s=si(a),s!==null){n.blockedOn=s,Ut(n.priority,function(){cn(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cn(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=uu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var f=new a.constructor(a.type,a);Ot=f,a.target.dispatchEvent(f),Ot=null}else return s=pa(a),s!==null&&Mt(s),n.blockedOn=a,!1;s.shift()}return!0}function Ni(n,s,a){Cn(n)&&a.delete(s)}function Mr(){xt=!1,qt!==null&&Cn(qt)&&(qt=null),oi!==null&&Cn(oi)&&(oi=null),Zi!==null&&Cn(Zi)&&(Zi=null),yr.forEach(Ni),De.forEach(Ni)}function wi(n,s){n.blockedOn===s&&(n.blockedOn=null,xt||(xt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mr)))}function hi(n){function s(p){return wi(p,n)}if(0<Dt.length){wi(Dt[0],n);for(var a=1;a<Dt.length;a++){var f=Dt[a];f.blockedOn===n&&(f.blockedOn=null)}}for(qt!==null&&wi(qt,n),oi!==null&&wi(oi,n),Zi!==null&&wi(Zi,n),yr.forEach(s),De.forEach(s),a=0;a<Rt.length;a++)f=Rt[a],f.blockedOn===n&&(f.blockedOn=null);for(;0<Rt.length&&(a=Rt[0],a.blockedOn===null);)Mn(a),a.blockedOn===null&&Rt.shift()}var ur=A.ReactCurrentBatchConfig,_s=!0;function qs(n,s,a,f){var p=ge,_=ur.transition;ur.transition=null;try{ge=1,cu(n,s,a,f)}finally{ge=p,ur.transition=_}}function el(n,s,a,f){var p=ge,_=ur.transition;ur.transition=null;try{ge=4,cu(n,s,a,f)}finally{ge=p,ur.transition=_}}function cu(n,s,a,f){if(_s){var p=uu(n,s,a,f);if(p===null)Au(n,s,f,tl,a),_n(n,f);else if(yn(p,n,s,a,f))f.stopPropagation();else if(_n(n,f),s&4&&-1<Kt.indexOf(n)){for(;p!==null;){var _=pa(p);if(_!==null&&bt(_),_=uu(n,s,a,f),_===null&&Au(n,s,f,tl,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else Au(n,s,f,null,a)}}var tl=null;function uu(n,s,a,f){if(tl=null,n=K(f),n=ys(n),n!==null)if(s=ri(n),s===null)n=null;else if(a=s.tag,a===13){if(n=si(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return tl=n,null}function Bh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Le:return 1;case Be:return 4;case Ge:case it:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Vr=null,fu=null,nl=null;function Hh(){if(nl)return nl;var n,s=fu,a=s.length,f,p="value"in Vr?Vr.value:Vr.textContent,_=p.length;for(n=0;n<a&&s[n]===p[n];n++);var T=a-n;for(f=1;f<=T&&s[a-f]===p[_-f];f++);return nl=p.slice(n,1<f?1-f:void 0)}function il(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function Vh(){return!1}function Ti(n){function s(a,f,p,_,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:Vh,this.isPropagationStopped=Vh,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),s}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Ti(Ks),ia=te({},Ks,{view:0,detail:0}),qx=Ti(ia),hu,pu,ra,sl=te({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(hu=n.screenX-ra.screenX,pu=n.screenY-ra.screenY):pu=hu=0,ra=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:pu}}),Gh=Ti(sl),Kx=te({},sl,{dataTransfer:0}),Qx=Ti(Kx),Jx=te({},ia,{relatedTarget:0}),mu=Ti(Jx),ev=te({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Ti(ev),nv=te({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),iv=Ti(nv),rv=te({},Ks,{data:0}),Wh=Ti(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=av[n])?!!s[n]:!1}function gu(){return lv}var cv=te({},ia,{key:function(n){if(n.key){var s=sv[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ov[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uv=Ti(cv),fv=te({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Ti(fv),dv=te({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),hv=Ti(dv),pv=te({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Ti(pv),gv=te({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Ti(gv),vv=[9,13,27,32],xu=u&&"CompositionEvent"in window,sa=null;u&&"documentMode"in document&&(sa=document.documentMode);var _v=u&&"TextEvent"in window&&!sa,Xh=u&&(!xu||sa&&8<sa&&11>=sa),$h=" ",Yh=!1;function Zh(n,s){switch(n){case"keyup":return vv.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function yv(n,s){switch(n){case"compositionend":return qh(s);case"keypress":return s.which!==32?null:(Yh=!0,$h);case"textInput":return n=s.data,n===$h&&Yh?null:n;default:return null}}function Mv(n,s){if(Qs)return n==="compositionend"||!xu&&Zh(n,s)?(n=Hh(),nl=fu=Vr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xh&&s.locale!=="ko"?null:s.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Sv[n.type]:s==="textarea"}function Qh(n,s,a,f){Ue(f),s=ul(s,"onChange"),0<s.length&&(a=new du("onChange","change",null,a,f),n.push({event:a,listeners:s}))}var oa=null,aa=null;function Ev(n){gp(n,0)}function ol(n){var s=io(n);if(wt(s))return n}function wv(n,s){if(n==="change")return s}var Jh=!1;if(u){var vu;if(u){var _u="oninput"in document;if(!_u){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),_u=typeof ep.oninput=="function"}vu=_u}else vu=!1;Jh=vu&&(!document.documentMode||9<document.documentMode)}function tp(){oa&&(oa.detachEvent("onpropertychange",np),aa=oa=null)}function np(n){if(n.propertyName==="value"&&ol(aa)){var s=[];Qh(s,aa,n,K(n)),Wt(Ev,s)}}function Tv(n,s,a){n==="focusin"?(tp(),oa=s,aa=a,oa.attachEvent("onpropertychange",np)):n==="focusout"&&tp()}function Cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(aa)}function Av(n,s){if(n==="click")return ol(s)}function Rv(n,s){if(n==="input"||n==="change")return ol(s)}function bv(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var qi=typeof Object.is=="function"?Object.is:bv;function la(n,s){if(qi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!qi(n[p],s[p]))return!1}return!0}function ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rp(n,s){var a=ip(n);n=0;for(var f;a;){if(a.nodeType===3){if(f=n+a.textContent.length,n<=s&&f>=s)return{node:a,offset:s-n};n=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ip(a)}}function sp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?sp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function op(){for(var n=window,s=jt();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=jt(n.document)}return s}function yu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Pv(n){var s=op(),a=n.focusedElem,f=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&sp(a.ownerDocument.documentElement,a)){if(f!==null&&yu(a)){if(s=f.start,n=f.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!n.extend&&_>f&&(p=f,f=_,_=p),p=rp(a,_);var T=rp(a,f);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),_>f?(n.addRange(s),n.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lv=u&&"documentMode"in document&&11>=document.documentMode,Js=null,Mu=null,ca=null,Su=!1;function ap(n,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Js==null||Js!==jt(f)||(f=Js,"selectionStart"in f&&yu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ca&&la(ca,f)||(ca=f,f=ul(Mu,"onSelect"),0<f.length&&(s=new du("onSelect","select",null,s,a),n.push({event:s,listeners:f}),s.target=Js)))}function al(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var eo={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Eu={},lp={};u&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ll(n){if(Eu[n])return Eu[n];if(!eo[n])return n;var s=eo[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in lp)return Eu[n]=s[a];return n}var cp=ll("animationend"),up=ll("animationiteration"),fp=ll("animationstart"),dp=ll("transitionend"),hp=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,s){hp.set(n,s),l(s,[n])}for(var wu=0;wu<pp.length;wu++){var Tu=pp[wu],Dv=Tu.toLowerCase(),Nv=Tu[0].toUpperCase()+Tu.slice(1);Gr(Dv,"on"+Nv)}Gr(cp,"onAnimationEnd"),Gr(up,"onAnimationIteration"),Gr(fp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(dp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function mp(n,s,a){var f=n.type||"unknown-event";n.currentTarget=a,Ys(f,s,void 0,n),n.currentTarget=null}function gp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var f=n[a],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var z=f[T],j=z.instance,de=z.currentTarget;if(z=z.listener,j!==_&&p.isPropagationStopped())break e;mp(p,z,de),_=j}else for(T=0;T<f.length;T++){if(z=f[T],j=z.instance,de=z.currentTarget,z=z.listener,j!==_&&p.isPropagationStopped())break e;mp(p,z,de),_=j}}}if(Di)throw n=di,Di=!1,di=null,n}function tn(n,s){var a=s[Nu];a===void 0&&(a=s[Nu]=new Set);var f=n+"__bubble";a.has(f)||(xp(s,n,2,!1),a.add(f))}function Cu(n,s,a){var f=0;s&&(f|=4),xp(a,n,f,s)}var cl="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[cl]){n[cl]=!0,r.forEach(function(a){a!=="selectionchange"&&(Iv.has(a)||Cu(a,!1,n),Cu(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[cl]||(s[cl]=!0,Cu("selectionchange",!1,s))}}function xp(n,s,a,f){switch(Bh(s)){case 1:var p=qs;break;case 4:p=el;break;default:p=cu}a=p.bind(null,s,a,n),p=void 0,!ii||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(s,a,{capture:!0,passive:p}):n.addEventListener(s,a,!0):p!==void 0?n.addEventListener(s,a,{passive:p}):n.addEventListener(s,a,!1)}function Au(n,s,a,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var z=f.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var j=T.tag;if((j===3||j===4)&&(j=T.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;T=T.return}for(;z!==null;){if(T=ys(z),T===null)return;if(j=T.tag,j===5||j===6){f=_=T;continue e}z=z.parentNode}}f=f.return}Wt(function(){var de=_,Ee=K(a),Ce=[];e:{var ye=hp.get(n);if(ye!==void 0){var He=du,Ye=n;switch(n){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":He=uv;break;case"focusin":Ye="focus",He=mu;break;case"focusout":Ye="blur",He=mu;break;case"beforeblur":case"afterblur":He=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=hv;break;case cp:case up:case fp:He=tv;break;case dp:He=mv;break;case"scroll":He=qx;break;case"wheel":He=xv;break;case"copy":case"cut":case"paste":He=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=jh}var Ke=(s&4)!==0,Sn=!Ke&&n==="scroll",ie=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var q=de,oe;q!==null;){oe=q;var Re=oe.stateNode;if(oe.tag===5&&Re!==null&&(oe=Re,ie!==null&&(Re=On(q,ie),Re!=null&&Ke.push(da(q,Re,oe)))),Sn)break;q=q.return}0<Ke.length&&(ye=new He(ye,Ye,null,a,Ee),Ce.push({event:ye,listeners:Ke}))}}if((s&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&a!==Ot&&(Ye=a.relatedTarget||a.fromElement)&&(ys(Ye)||Ye[Sr]))break e;if((He||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=de,Ye=Ye?ys(Ye):null,Ye!==null&&(Sn=ri(Ye),Ye!==Sn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=de),He!==Ye)){if(Ke=Gh,Re="onMouseLeave",ie="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=jh,Re="onPointerLeave",ie="onPointerEnter",q="pointer"),Sn=He==null?ye:io(He),oe=Ye==null?ye:io(Ye),ye=new Ke(Re,q+"leave",He,a,Ee),ye.target=Sn,ye.relatedTarget=oe,Re=null,ys(Ee)===de&&(Ke=new Ke(ie,q+"enter",Ye,a,Ee),Ke.target=oe,Ke.relatedTarget=Sn,Re=Ke),Sn=Re,He&&Ye)t:{for(Ke=He,ie=Ye,q=0,oe=Ke;oe;oe=to(oe))q++;for(oe=0,Re=ie;Re;Re=to(Re))oe++;for(;0<q-oe;)Ke=to(Ke),q--;for(;0<oe-q;)ie=to(ie),oe--;for(;q--;){if(Ke===ie||ie!==null&&Ke===ie.alternate)break t;Ke=to(Ke),ie=to(ie)}Ke=null}else Ke=null;He!==null&&vp(Ce,ye,He,Ke,!1),Ye!==null&&Sn!==null&&vp(Ce,Sn,Ye,Ke,!0)}}e:{if(ye=de?io(de):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Je=wv;else if(Kh(ye))if(Jh)Je=Rv;else{Je=Cv;var st=Tv}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=Av);if(Je&&(Je=Je(n,de))){Qh(Ce,Je,a,Ee);break e}st&&st(n,ye,de),n==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&Gt(ye,"number",ye.value)}switch(st=de?io(de):window,n){case"focusin":(Kh(st)||st.contentEditable==="true")&&(Js=st,Mu=de,ca=null);break;case"focusout":ca=Mu=Js=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,ap(Ce,a,Ee);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":ap(Ce,a,Ee)}var ot;if(xu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Qs?Zh(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Xh&&a.locale!=="ko"&&(Qs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Qs&&(ot=Hh()):(Vr=Ee,fu="value"in Vr?Vr.value:Vr.textContent,Qs=!0)),st=ul(de,ut),0<st.length&&(ut=new Wh(ut,n,null,a,Ee),Ce.push({event:ut,listeners:st}),ot?ut.data=ot:(ot=qh(a),ot!==null&&(ut.data=ot)))),(ot=_v?yv(n,a):Mv(n,a))&&(de=ul(de,"onBeforeInput"),0<de.length&&(Ee=new Wh("onBeforeInput","beforeinput",null,a,Ee),Ce.push({event:Ee,listeners:de}),Ee.data=ot))}gp(Ce,s)})}function da(n,s,a){return{instance:n,listener:s,currentTarget:a}}function ul(n,s){for(var a=s+"Capture",f=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=On(n,a),_!=null&&f.unshift(da(n,_,p)),_=On(n,s),_!=null&&f.push(da(n,_,p))),n=n.return}return f}function to(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vp(n,s,a,f,p){for(var _=s._reactName,T=[];a!==null&&a!==f;){var z=a,j=z.alternate,de=z.stateNode;if(j!==null&&j===f)break;z.tag===5&&de!==null&&(z=de,p?(j=On(a,_),j!=null&&T.unshift(da(a,j,z))):p||(j=On(a,_),j!=null&&T.push(da(a,j,z)))),a=a.return}T.length!==0&&n.push({event:s,listeners:T})}var Fv=/\r\n?/g,Uv=/\u0000|\uFFFD/g;function _p(n){return(typeof n=="string"?n:""+n).replace(Fv,`
`).replace(Uv,"")}function fl(n,s,a){if(s=_p(s),_p(n)!==s&&a)throw Error(t(425))}function dl(){}var Ru=null,bu=null;function Pu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(zv)}:Lu;function zv(n){setTimeout(function(){throw n})}function Du(n,s){var a=s,f=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){n.removeChild(p),hi(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);hi(s)}function Wr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var no=Math.random().toString(36).slice(2),fr="__reactFiber$"+no,ha="__reactProps$"+no,Sr="__reactContainer$"+no,Nu="__reactEvents$"+no,Bv="__reactListeners$"+no,Hv="__reactHandles$"+no;function ys(n){var s=n[fr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Sr]||a[fr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Mp(n);n!==null;){if(a=n[fr])return a;n=Mp(n)}return s}n=a,a=n.parentNode}return null}function pa(n){return n=n[fr]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[ha]||null}var Iu=[],ro=-1;function jr(n){return{current:n}}function nn(n){0>ro||(n.current=Iu[ro],Iu[ro]=null,ro--)}function Qt(n,s){ro++,Iu[ro]=n.current,n.current=s}var Xr={},Kn=jr(Xr),pi=jr(!1),Ms=Xr;function so(n,s){var a=n.type.contextTypes;if(!a)return Xr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function mi(n){return n=n.childContextTypes,n!=null}function pl(){nn(pi),nn(Kn)}function Sp(n,s,a){if(Kn.current!==Xr)throw Error(t(168));Qt(Kn,s),Qt(pi,a)}function Ep(n,s,a){var f=n.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,Me(n)||"Unknown",p));return te({},a,f)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Ms=Kn.current,Qt(Kn,n),Qt(pi,pi.current),!0}function wp(n,s,a){var f=n.stateNode;if(!f)throw Error(t(169));a?(n=Ep(n,s,Ms),f.__reactInternalMemoizedMergedChildContext=n,nn(pi),nn(Kn),Qt(Kn,n)):nn(pi),Qt(pi,a)}var Er=null,gl=!1,Fu=!1;function Tp(n){Er===null?Er=[n]:Er.push(n)}function Vv(n){gl=!0,Tp(n)}function $r(){if(!Fu&&Er!==null){Fu=!0;var n=0,s=ge;try{var a=Er;for(ge=1;n<a.length;n++){var f=a[n];do f=f(!0);while(f!==null)}Er=null,gl=!1}catch(p){throw Er!==null&&(Er=Er.slice(n+1)),P(Le,$r),p}finally{ge=s,Fu=!1}}return null}var oo=[],ao=0,xl=null,vl=0,Ii=[],Fi=0,Ss=null,wr=1,Tr="";function Es(n,s){oo[ao++]=vl,oo[ao++]=xl,xl=n,vl=s}function Cp(n,s,a){Ii[Fi++]=wr,Ii[Fi++]=Tr,Ii[Fi++]=Ss,Ss=n;var f=wr;n=Tr;var p=32-Lt(f)-1;f&=~(1<<p),a+=1;var _=32-Lt(s)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,wr=1<<32-Lt(s)+p|a<<p|f,Tr=_+n}else wr=1<<_|a<<p|f,Tr=n}function Uu(n){n.return!==null&&(Es(n,1),Cp(n,1,0))}function ku(n){for(;n===xl;)xl=oo[--ao],oo[ao]=null,vl=oo[--ao],oo[ao]=null;for(;n===Ss;)Ss=Ii[--Fi],Ii[Fi]=null,Tr=Ii[--Fi],Ii[Fi]=null,wr=Ii[--Fi],Ii[Fi]=null}var Ci=null,Ai=null,an=!1,Ki=null;function Ap(n,s){var a=zi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Rp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Ci=n,Ai=Wr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Ci=n,Ai=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ss!==null?{id:wr,overflow:Tr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=zi(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,Ci=n,Ai=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zu(n){if(an){var s=Ai;if(s){var a=s;if(!Rp(n,s)){if(Ou(n))throw Error(t(418));s=Wr(a.nextSibling);var f=Ci;s&&Rp(n,s)?Ap(f,a):(n.flags=n.flags&-4097|2,an=!1,Ci=n)}}else{if(Ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,Ci=n}}}function bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ci=n}function _l(n){if(n!==Ci)return!1;if(!an)return bp(n),an=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Pu(n.type,n.memoizedProps)),s&&(s=Ai)){if(Ou(n))throw Pp(),Error(t(418));for(;s;)Ap(n,s),s=Wr(s.nextSibling)}if(bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){Ai=Wr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}Ai=null}}else Ai=Ci?Wr(n.stateNode.nextSibling):null;return!0}function Pp(){for(var n=Ai;n;)n=Wr(n.nextSibling)}function lo(){Ai=Ci=null,an=!1}function Bu(n){Ki===null?Ki=[n]:Ki.push(n)}var Gv=A.ReactCurrentBatchConfig;function ma(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,n));var p=f,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var z=p.refs;T===null?delete z[_]:z[_]=T},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function yl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Lp(n){var s=n._init;return s(n._payload)}function Dp(n){function s(ie,q){if(n){var oe=ie.deletions;oe===null?(ie.deletions=[q],ie.flags|=16):oe.push(q)}}function a(ie,q){if(!n)return null;for(;q!==null;)s(ie,q),q=q.sibling;return null}function f(ie,q){for(ie=new Map;q!==null;)q.key!==null?ie.set(q.key,q):ie.set(q.index,q),q=q.sibling;return ie}function p(ie,q){return ie=ts(ie,q),ie.index=0,ie.sibling=null,ie}function _(ie,q,oe){return ie.index=oe,n?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<q?(ie.flags|=2,q):oe):(ie.flags|=2,q)):(ie.flags|=1048576,q)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function z(ie,q,oe,Re){return q===null||q.tag!==6?(q=Df(oe,ie.mode,Re),q.return=ie,q):(q=p(q,oe),q.return=ie,q)}function j(ie,q,oe,Re){var Je=oe.type;return Je===F?Ee(ie,q,oe.props.children,Re,oe.key):q!==null&&(q.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===W&&Lp(Je)===q.type)?(Re=p(q,oe.props),Re.ref=ma(ie,q,oe),Re.return=ie,Re):(Re=Wl(oe.type,oe.key,oe.props,null,ie.mode,Re),Re.ref=ma(ie,q,oe),Re.return=ie,Re)}function de(ie,q,oe,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==oe.containerInfo||q.stateNode.implementation!==oe.implementation?(q=Nf(oe,ie.mode,Re),q.return=ie,q):(q=p(q,oe.children||[]),q.return=ie,q)}function Ee(ie,q,oe,Re,Je){return q===null||q.tag!==7?(q=Ls(oe,ie.mode,Re,Je),q.return=ie,q):(q=p(q,oe),q.return=ie,q)}function Ce(ie,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Df(""+q,ie.mode,oe),q.return=ie,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case O:return oe=Wl(q.type,q.key,q.props,null,ie.mode,oe),oe.ref=ma(ie,null,q),oe.return=ie,oe;case I:return q=Nf(q,ie.mode,oe),q.return=ie,q;case W:var Re=q._init;return Ce(ie,Re(q._payload),oe)}if(Xe(q)||ne(q))return q=Ls(q,ie.mode,oe,null),q.return=ie,q;yl(ie,q)}return null}function ye(ie,q,oe,Re){var Je=q!==null?q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Je!==null?null:z(ie,q,""+oe,Re);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case O:return oe.key===Je?j(ie,q,oe,Re):null;case I:return oe.key===Je?de(ie,q,oe,Re):null;case W:return Je=oe._init,ye(ie,q,Je(oe._payload),Re)}if(Xe(oe)||ne(oe))return Je!==null?null:Ee(ie,q,oe,Re,null);yl(ie,oe)}return null}function He(ie,q,oe,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(oe)||null,z(q,ie,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case O:return ie=ie.get(Re.key===null?oe:Re.key)||null,j(q,ie,Re,Je);case I:return ie=ie.get(Re.key===null?oe:Re.key)||null,de(q,ie,Re,Je);case W:var st=Re._init;return He(ie,q,oe,st(Re._payload),Je)}if(Xe(Re)||ne(Re))return ie=ie.get(oe)||null,Ee(q,ie,Re,Je,null);yl(q,Re)}return null}function Ye(ie,q,oe,Re){for(var Je=null,st=null,ot=q,ut=q=0,Vn=null;ot!==null&&ut<oe.length;ut++){ot.index>ut?(Vn=ot,ot=null):Vn=ot.sibling;var Bt=ye(ie,ot,oe[ut],Re);if(Bt===null){ot===null&&(ot=Vn);break}n&&ot&&Bt.alternate===null&&s(ie,ot),q=_(Bt,q,ut),st===null?Je=Bt:st.sibling=Bt,st=Bt,ot=Vn}if(ut===oe.length)return a(ie,ot),an&&Es(ie,ut),Je;if(ot===null){for(;ut<oe.length;ut++)ot=Ce(ie,oe[ut],Re),ot!==null&&(q=_(ot,q,ut),st===null?Je=ot:st.sibling=ot,st=ot);return an&&Es(ie,ut),Je}for(ot=f(ie,ot);ut<oe.length;ut++)Vn=He(ot,ie,ut,oe[ut],Re),Vn!==null&&(n&&Vn.alternate!==null&&ot.delete(Vn.key===null?ut:Vn.key),q=_(Vn,q,ut),st===null?Je=Vn:st.sibling=Vn,st=Vn);return n&&ot.forEach(function(ns){return s(ie,ns)}),an&&Es(ie,ut),Je}function Ke(ie,q,oe,Re){var Je=ne(oe);if(typeof Je!="function")throw Error(t(150));if(oe=Je.call(oe),oe==null)throw Error(t(151));for(var st=Je=null,ot=q,ut=q=0,Vn=null,Bt=oe.next();ot!==null&&!Bt.done;ut++,Bt=oe.next()){ot.index>ut?(Vn=ot,ot=null):Vn=ot.sibling;var ns=ye(ie,ot,Bt.value,Re);if(ns===null){ot===null&&(ot=Vn);break}n&&ot&&ns.alternate===null&&s(ie,ot),q=_(ns,q,ut),st===null?Je=ns:st.sibling=ns,st=ns,ot=Vn}if(Bt.done)return a(ie,ot),an&&Es(ie,ut),Je;if(ot===null){for(;!Bt.done;ut++,Bt=oe.next())Bt=Ce(ie,Bt.value,Re),Bt!==null&&(q=_(Bt,q,ut),st===null?Je=Bt:st.sibling=Bt,st=Bt);return an&&Es(ie,ut),Je}for(ot=f(ie,ot);!Bt.done;ut++,Bt=oe.next())Bt=He(ot,ie,ut,Bt.value,Re),Bt!==null&&(n&&Bt.alternate!==null&&ot.delete(Bt.key===null?ut:Bt.key),q=_(Bt,q,ut),st===null?Je=Bt:st.sibling=Bt,st=Bt);return n&&ot.forEach(function(S_){return s(ie,S_)}),an&&Es(ie,ut),Je}function Sn(ie,q,oe,Re){if(typeof oe=="object"&&oe!==null&&oe.type===F&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case O:e:{for(var Je=oe.key,st=q;st!==null;){if(st.key===Je){if(Je=oe.type,Je===F){if(st.tag===7){a(ie,st.sibling),q=p(st,oe.props.children),q.return=ie,ie=q;break e}}else if(st.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===W&&Lp(Je)===st.type){a(ie,st.sibling),q=p(st,oe.props),q.ref=ma(ie,st,oe),q.return=ie,ie=q;break e}a(ie,st);break}else s(ie,st);st=st.sibling}oe.type===F?(q=Ls(oe.props.children,ie.mode,Re,oe.key),q.return=ie,ie=q):(Re=Wl(oe.type,oe.key,oe.props,null,ie.mode,Re),Re.ref=ma(ie,q,oe),Re.return=ie,ie=Re)}return T(ie);case I:e:{for(st=oe.key;q!==null;){if(q.key===st)if(q.tag===4&&q.stateNode.containerInfo===oe.containerInfo&&q.stateNode.implementation===oe.implementation){a(ie,q.sibling),q=p(q,oe.children||[]),q.return=ie,ie=q;break e}else{a(ie,q);break}else s(ie,q);q=q.sibling}q=Nf(oe,ie.mode,Re),q.return=ie,ie=q}return T(ie);case W:return st=oe._init,Sn(ie,q,st(oe._payload),Re)}if(Xe(oe))return Ye(ie,q,oe,Re);if(ne(oe))return Ke(ie,q,oe,Re);yl(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,q!==null&&q.tag===6?(a(ie,q.sibling),q=p(q,oe),q.return=ie,ie=q):(a(ie,q),q=Df(oe,ie.mode,Re),q.return=ie,ie=q),T(ie)):a(ie,q)}return Sn}var co=Dp(!0),Np=Dp(!1),Ml=jr(null),Sl=null,uo=null,Hu=null;function Vu(){Hu=uo=Sl=null}function Gu(n){var s=Ml.current;nn(Ml),n._currentValue=s}function Wu(n,s,a){for(;n!==null;){var f=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),n===a)break;n=n.return}}function fo(n,s){Sl=n,Hu=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(gi=!0),n.firstContext=null)}function Ui(n){var s=n._currentValue;if(Hu!==n)if(n={context:n,memoizedValue:s,next:null},uo===null){if(Sl===null)throw Error(t(308));uo=n,Sl.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return s}var ws=null;function ju(n){ws===null?ws=[n]:ws.push(n)}function Ip(n,s,a,f){var p=s.interleaved;return p===null?(a.next=a,ju(s)):(a.next=p.next,p.next=a),s.interleaved=a,Cr(n,f)}function Cr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Yr=!1;function Xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Zr(n,s,a){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(zt&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Cr(n,a)}return p=f.interleaved,p===null?(s.next=s,ju(f)):(s.next=p.next,p.next=s),f.interleaved=s,Cr(n,a)}function El(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=n.pendingLanes,a|=f,s.lanes=a,k(n,a)}}function Up(n,s){var a=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function wl(n,s,a,f){var p=n.updateQueue;Yr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var j=z,de=j.next;j.next=null,T===null?_=de:T.next=de,T=j;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==T&&(z===null?Ee.firstBaseUpdate=de:z.next=de,Ee.lastBaseUpdate=j))}if(_!==null){var Ce=p.baseState;T=0,Ee=de=j=null,z=_;do{var ye=z.lane,He=z.eventTime;if((f&ye)===ye){Ee!==null&&(Ee=Ee.next={eventTime:He,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ye=n,Ke=z;switch(ye=s,He=a,Ke.tag){case 1:if(Ye=Ke.payload,typeof Ye=="function"){Ce=Ye.call(He,Ce,ye);break e}Ce=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ke.payload,ye=typeof Ye=="function"?Ye.call(He,Ce,ye):Ye,ye==null)break e;Ce=te({},Ce,ye);break e;case 2:Yr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[z]:ye.push(z))}else He={eventTime:He,lane:ye,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(de=Ee=He,j=Ce):Ee=Ee.next=He,T|=ye;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;ye=z,z=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Ee===null&&(j=Ce),p.baseState=j,p.firstBaseUpdate=de,p.lastBaseUpdate=Ee,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);As|=T,n.lanes=T,n.memoizedState=Ce}}function kp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var f=n[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var ga={},dr=jr(ga),xa=jr(ga),va=jr(ga);function Ts(n){if(n===ga)throw Error(t(174));return n}function $u(n,s){switch(Qt(va,s),Qt(xa,n),Qt(dr,ga),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ze(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ze(s,n)}nn(dr),Qt(dr,s)}function ho(){nn(dr),nn(xa),nn(va)}function Op(n){Ts(va.current);var s=Ts(dr.current),a=Ze(s,n.type);s!==a&&(Qt(xa,n),Qt(dr,a))}function Yu(n){xa.current===n&&(nn(dr),nn(xa))}var fn=jr(0);function Tl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Zu=[];function qu(){for(var n=0;n<Zu.length;n++)Zu[n]._workInProgressVersionPrimary=null;Zu.length=0}var Cl=A.ReactCurrentDispatcher,Ku=A.ReactCurrentBatchConfig,Cs=0,dn=null,Dn=null,Bn=null,Al=!1,_a=!1,ya=0,Wv=0;function Qn(){throw Error(t(321))}function Qu(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!qi(n[a],s[a]))return!1;return!0}function Ju(n,s,a,f,p,_){if(Cs=_,dn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cl.current=n===null||n.memoizedState===null?Yv:Zv,n=a(f,p),_a){_=0;do{if(_a=!1,ya=0,25<=_)throw Error(t(301));_+=1,Bn=Dn=null,s.updateQueue=null,Cl.current=qv,n=a(f,p)}while(_a)}if(Cl.current=Pl,s=Dn!==null&&Dn.next!==null,Cs=0,Bn=Dn=dn=null,Al=!1,s)throw Error(t(300));return n}function ef(){var n=ya!==0;return ya=0,n}function hr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?dn.memoizedState=Bn=n:Bn=Bn.next=n,Bn}function ki(){if(Dn===null){var n=dn.alternate;n=n!==null?n.memoizedState:null}else n=Dn.next;var s=Bn===null?dn.memoizedState:Bn.next;if(s!==null)Bn=s,Dn=n;else{if(n===null)throw Error(t(310));Dn=n,n={memoizedState:Dn.memoizedState,baseState:Dn.baseState,baseQueue:Dn.baseQueue,queue:Dn.queue,next:null},Bn===null?dn.memoizedState=Bn=n:Bn=Bn.next=n}return Bn}function Ma(n,s){return typeof s=="function"?s(n):s}function tf(n){var s=ki(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var f=Dn,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var z=T=null,j=null,de=_;do{var Ee=de.lane;if((Cs&Ee)===Ee)j!==null&&(j=j.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),f=de.hasEagerState?de.eagerState:n(f,de.action);else{var Ce={lane:Ee,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};j===null?(z=j=Ce,T=f):j=j.next=Ce,dn.lanes|=Ee,As|=Ee}de=de.next}while(de!==null&&de!==_);j===null?T=f:j.next=z,qi(f,s.memoizedState)||(gi=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=j,a.lastRenderedState=f}if(n=a.interleaved,n!==null){p=n;do _=p.lane,dn.lanes|=_,As|=_,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function nf(n){var s=ki(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var f=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=n(_,T.action),T=T.next;while(T!==p);qi(_,s.memoizedState)||(gi=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function zp(){}function Bp(n,s){var a=dn,f=ki(),p=s(),_=!qi(f.memoizedState,p);if(_&&(f.memoizedState=p,gi=!0),f=f.queue,rf(Gp.bind(null,a,f,n),[n]),f.getSnapshot!==s||_||Bn!==null&&Bn.memoizedState.tag&1){if(a.flags|=2048,Sa(9,Vp.bind(null,a,f,p,s),void 0,null),Hn===null)throw Error(t(349));(Cs&30)!==0||Hp(a,s,p)}return p}function Hp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=dn.updateQueue,s===null?(s={lastEffect:null,stores:null},dn.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Vp(n,s,a,f){s.value=a,s.getSnapshot=f,Wp(s)&&jp(n)}function Gp(n,s,a){return a(function(){Wp(s)&&jp(n)})}function Wp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!qi(n,a)}catch{return!0}}function jp(n){var s=Cr(n,1);s!==null&&tr(s,n,1,-1)}function Xp(n){var s=hr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},s.queue=n,n=n.dispatch=$v.bind(null,dn,n),[s.memoizedState,n]}function Sa(n,s,a,f){return n={tag:n,create:s,destroy:a,deps:f,next:null},s=dn.updateQueue,s===null?(s={lastEffect:null,stores:null},dn.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(f=a.next,a.next=n,n.next=f,s.lastEffect=n)),n}function $p(){return ki().memoizedState}function Rl(n,s,a,f){var p=hr();dn.flags|=n,p.memoizedState=Sa(1|s,a,void 0,f===void 0?null:f)}function bl(n,s,a,f){var p=ki();f=f===void 0?null:f;var _=void 0;if(Dn!==null){var T=Dn.memoizedState;if(_=T.destroy,f!==null&&Qu(f,T.deps)){p.memoizedState=Sa(s,a,_,f);return}}dn.flags|=n,p.memoizedState=Sa(1|s,a,_,f)}function Yp(n,s){return Rl(8390656,8,n,s)}function rf(n,s){return bl(2048,8,n,s)}function Zp(n,s){return bl(4,2,n,s)}function qp(n,s){return bl(4,4,n,s)}function Kp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Qp(n,s,a){return a=a!=null?a.concat([n]):null,bl(4,4,Kp.bind(null,s,n),a)}function sf(){}function Jp(n,s){var a=ki();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Qu(s,f[1])?f[0]:(a.memoizedState=[n,s],n)}function em(n,s){var a=ki();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Qu(s,f[1])?f[0]:(n=n(),a.memoizedState=[n,s],n)}function tm(n,s,a){return(Cs&21)===0?(n.baseState&&(n.baseState=!1,gi=!0),n.memoizedState=a):(qi(a,s)||(a=jn(),dn.lanes|=a,As|=a,n.baseState=!0),s)}function jv(n,s){var a=ge;ge=a!==0&&4>a?a:4,n(!0);var f=Ku.transition;Ku.transition={};try{n(!1),s()}finally{ge=a,Ku.transition=f}}function nm(){return ki().memoizedState}function Xv(n,s,a){var f=Jr(n);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},im(n))rm(s,a);else if(a=Ip(n,s,a,f),a!==null){var p=li();tr(a,n,f,p),sm(a,s,f)}}function $v(n,s,a){var f=Jr(n),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(im(n))rm(s,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,z=_(T,a);if(p.hasEagerState=!0,p.eagerState=z,qi(z,T)){var j=s.interleaved;j===null?(p.next=p,ju(s)):(p.next=j.next,j.next=p),s.interleaved=p;return}}catch{}finally{}a=Ip(n,s,p,f),a!==null&&(p=li(),tr(a,n,f,p),sm(a,s,f))}}function im(n){var s=n.alternate;return n===dn||s!==null&&s===dn}function rm(n,s){_a=Al=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function sm(n,s,a){if((a&4194240)!==0){var f=s.lanes;f&=n.pendingLanes,a|=f,s.lanes=a,k(n,a)}}var Pl={readContext:Ui,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},Yv={readContext:Ui,useCallback:function(n,s){return hr().memoizedState=[n,s===void 0?null:s],n},useContext:Ui,useEffect:Yp,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,Rl(4194308,4,Kp.bind(null,s,n),a)},useLayoutEffect:function(n,s){return Rl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Rl(4,2,n,s)},useMemo:function(n,s){var a=hr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var f=hr();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},f.queue=n,n=n.dispatch=Xv.bind(null,dn,n),[f.memoizedState,n]},useRef:function(n){var s=hr();return n={current:n},s.memoizedState=n},useState:Xp,useDebugValue:sf,useDeferredValue:function(n){return hr().memoizedState=n},useTransition:function(){var n=Xp(!1),s=n[0];return n=jv.bind(null,n[1]),hr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var f=dn,p=hr();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Hn===null)throw Error(t(349));(Cs&30)!==0||Hp(f,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,Yp(Gp.bind(null,f,_,n),[n]),f.flags|=2048,Sa(9,Vp.bind(null,f,_,a,s),void 0,null),a},useId:function(){var n=hr(),s=Hn.identifierPrefix;if(an){var a=Tr,f=wr;a=(f&~(1<<32-Lt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ya++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Wv++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Zv={readContext:Ui,useCallback:Jp,useContext:Ui,useEffect:rf,useImperativeHandle:Qp,useInsertionEffect:Zp,useLayoutEffect:qp,useMemo:em,useReducer:tf,useRef:$p,useState:function(){return tf(Ma)},useDebugValue:sf,useDeferredValue:function(n){var s=ki();return tm(s,Dn.memoizedState,n)},useTransition:function(){var n=tf(Ma)[0],s=ki().memoizedState;return[n,s]},useMutableSource:zp,useSyncExternalStore:Bp,useId:nm,unstable_isNewReconciler:!1},qv={readContext:Ui,useCallback:Jp,useContext:Ui,useEffect:rf,useImperativeHandle:Qp,useInsertionEffect:Zp,useLayoutEffect:qp,useMemo:em,useReducer:nf,useRef:$p,useState:function(){return nf(Ma)},useDebugValue:sf,useDeferredValue:function(n){var s=ki();return Dn===null?s.memoizedState=n:tm(s,Dn.memoizedState,n)},useTransition:function(){var n=nf(Ma)[0],s=ki().memoizedState;return[n,s]},useMutableSource:zp,useSyncExternalStore:Bp,useId:nm,unstable_isNewReconciler:!1};function Qi(n,s){if(n&&n.defaultProps){s=te({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function of(n,s,a,f){s=n.memoizedState,a=a(f,s),a=a==null?s:te({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?ri(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var f=li(),p=Jr(n),_=Ar(f,p);_.payload=s,a!=null&&(_.callback=a),s=Zr(n,_,p),s!==null&&(tr(s,n,p,f),El(s,n,p))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var f=li(),p=Jr(n),_=Ar(f,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Zr(n,_,p),s!==null&&(tr(s,n,p,f),El(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=li(),f=Jr(n),p=Ar(a,f);p.tag=2,s!=null&&(p.callback=s),s=Zr(n,p,f),s!==null&&(tr(s,n,f,a),El(s,n,f))}};function om(n,s,a,f,p,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!la(a,f)||!la(p,_):!0}function am(n,s,a){var f=!1,p=Xr,_=s.contextType;return typeof _=="object"&&_!==null?_=Ui(_):(p=mi(s)?Ms:Kn.current,f=s.contextTypes,_=(f=f!=null)?so(n,p):Xr),s=new s(a,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ll,n.stateNode=s,s._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),s}function lm(n,s,a,f){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==n&&Ll.enqueueReplaceState(s,s.state,null)}function af(n,s,a,f){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Xu(n);var _=s.contextType;typeof _=="object"&&_!==null?p.context=Ui(_):(_=mi(s)?Ms:Kn.current,p.context=so(n,_)),p.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(of(n,s,_,a),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ll.enqueueReplaceState(p,p.state,null),wl(n,a,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,s){try{var a="",f=s;do a+=xe(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:p,digest:null}}function lf(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function cf(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function cm(n,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Ol||(Ol=!0,wf=f),cf(n,s)},a}function um(n,s,a){a=Ar(-1,a),a.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){cf(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){cf(n,s),typeof f!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function fm(n,s,a){var f=n.pingCache;if(f===null){f=n.pingCache=new Kv;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),n=f_.bind(null,n,s,a),s.then(n,n))}function dm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function hm(n,s,a,f,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,Zr(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Qv=A.ReactCurrentOwner,gi=!1;function ai(n,s,a,f){s.child=n===null?Np(s,null,a,f):co(s,n.child,a,f)}function pm(n,s,a,f,p){a=a.render;var _=s.ref;return fo(s,p),f=Ju(n,s,a,f,_,p),a=ef(),n!==null&&!gi?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Rr(n,s,p)):(an&&a&&Uu(s),s.flags|=1,ai(n,s,f,p),s.child)}function mm(n,s,a,f,p){if(n===null){var _=a.type;return typeof _=="function"&&!Lf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,gm(n,s,_,f,p)):(n=Wl(a.type,null,f,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,(n.lanes&p)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(T,f)&&n.ref===s.ref)return Rr(n,s,p)}return s.flags|=1,n=ts(_,f),n.ref=s.ref,n.return=s,s.child=n}function gm(n,s,a,f,p){if(n!==null){var _=n.memoizedProps;if(la(_,f)&&n.ref===s.ref)if(gi=!1,s.pendingProps=f=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(gi=!0);else return s.lanes=n.lanes,Rr(n,s,p)}return uf(n,s,a,f,p)}function xm(n,s,a){var f=s.pendingProps,p=f.children,_=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(go,Ri),Ri|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Qt(go,Ri),Ri|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Qt(go,Ri),Ri|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Qt(go,Ri),Ri|=f;return ai(n,s,p,a),s.child}function vm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function uf(n,s,a,f,p){var _=mi(a)?Ms:Kn.current;return _=so(s,_),fo(s,p),a=Ju(n,s,a,f,_,p),f=ef(),n!==null&&!gi?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Rr(n,s,p)):(an&&f&&Uu(s),s.flags|=1,ai(n,s,a,p),s.child)}function _m(n,s,a,f,p){if(mi(a)){var _=!0;ml(s)}else _=!1;if(fo(s,p),s.stateNode===null)Nl(n,s),am(s,a,f),af(s,a,f,p),f=!0;else if(n===null){var T=s.stateNode,z=s.memoizedProps;T.props=z;var j=T.context,de=a.contextType;typeof de=="object"&&de!==null?de=Ui(de):(de=mi(a)?Ms:Kn.current,de=so(s,de));var Ee=a.getDerivedStateFromProps,Ce=typeof Ee=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ce||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==f||j!==de)&&lm(s,T,f,de),Yr=!1;var ye=s.memoizedState;T.state=ye,wl(s,f,T,p),j=s.memoizedState,z!==f||ye!==j||pi.current||Yr?(typeof Ee=="function"&&(of(s,a,Ee,f),j=s.memoizedState),(z=Yr||om(s,a,z,f,ye,j,de))?(Ce||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=j),T.props=f,T.state=j,T.context=de,f=z):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Fp(n,s),z=s.memoizedProps,de=s.type===s.elementType?z:Qi(s.type,z),T.props=de,Ce=s.pendingProps,ye=T.context,j=a.contextType,typeof j=="object"&&j!==null?j=Ui(j):(j=mi(a)?Ms:Kn.current,j=so(s,j));var He=a.getDerivedStateFromProps;(Ee=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Ce||ye!==j)&&lm(s,T,f,j),Yr=!1,ye=s.memoizedState,T.state=ye,wl(s,f,T,p);var Ye=s.memoizedState;z!==Ce||ye!==Ye||pi.current||Yr?(typeof He=="function"&&(of(s,a,He,f),Ye=s.memoizedState),(de=Yr||om(s,a,de,f,ye,Ye,j)||!1)?(Ee||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Ye,j),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Ye,j)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Ye),T.props=f,T.state=Ye,T.context=j,f=de):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&ye===n.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&ye===n.memoizedState||(s.flags|=1024),f=!1)}return ff(n,s,a,f,_,p)}function ff(n,s,a,f,p,_){vm(n,s);var T=(s.flags&128)!==0;if(!f&&!T)return p&&wp(s,a,!1),Rr(n,s,_);f=s.stateNode,Qv.current=s;var z=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,n!==null&&T?(s.child=co(s,n.child,null,_),s.child=co(s,null,z,_)):ai(n,s,z,_),s.memoizedState=f.state,p&&wp(s,a,!0),s.child}function ym(n){var s=n.stateNode;s.pendingContext?Sp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Sp(n,s.context,!1),$u(n,s.containerInfo)}function Mm(n,s,a,f,p){return lo(),Bu(p),s.flags|=256,ai(n,s,a,f),s.child}var df={dehydrated:null,treeContext:null,retryLane:0};function hf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sm(n,s,a){var f=s.pendingProps,p=fn.current,_=!1,T=(s.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(p&2)!==0),z?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Qt(fn,p&1),n===null)return zu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,n=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=jl(T,f,0,null),n=Ls(n,f,a,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=hf(a),s.memoizedState=df,n):pf(s,T));if(p=n.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return Jv(n,s,T,f,z,p,a);if(_){_=f.fallback,T=s.mode,p=n.child,z=p.sibling;var j={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=j,s.deletions=null):(f=ts(p,j),f.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=ts(z,_):(_=Ls(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=n.child.memoizedState,T=T===null?hf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~a,s.memoizedState=df,f}return _=n.child,n=_.sibling,f=ts(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=f,s.memoizedState=null,f}function pf(n,s){return s=jl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Dl(n,s,a,f){return f!==null&&Bu(f),co(s,n.child,null,a),n=pf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Jv(n,s,a,f,p,_,T){if(a)return s.flags&256?(s.flags&=-257,f=lf(Error(t(422))),Dl(n,s,T,f)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=jl({mode:"visible",children:f.children},p,0,null),_=Ls(_,p,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&co(s,n.child,null,T),s.child.memoizedState=hf(T),s.memoizedState=df,_);if((s.mode&1)===0)return Dl(n,s,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var z=f.dgst;return f=z,_=Error(t(419)),f=lf(_,f,void 0),Dl(n,s,T,f)}if(z=(T&n.childLanes)!==0,gi||z){if(f=Hn,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Cr(n,p),tr(f,n,p,-1))}return Pf(),f=lf(Error(t(421))),Dl(n,s,T,f)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=d_.bind(null,n),p._reactRetry=s,null):(n=_.treeContext,Ai=Wr(p.nextSibling),Ci=s,an=!0,Ki=null,n!==null&&(Ii[Fi++]=wr,Ii[Fi++]=Tr,Ii[Fi++]=Ss,wr=n.id,Tr=n.overflow,Ss=s),s=pf(s,f.children),s.flags|=4096,s)}function Em(n,s,a){n.lanes|=s;var f=n.alternate;f!==null&&(f.lanes|=s),Wu(n.return,s,a)}function mf(n,s,a,f,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function wm(n,s,a){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(ai(n,s,f.children,a),f=fn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,a,s);else if(n.tag===19)Em(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Qt(fn,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)n=a.alternate,n!==null&&Tl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),mf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&Tl(n)===null){s.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}mf(s,!0,a,null,_);break;case"together":mf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Rr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),As|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ts(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ts(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function e_(n,s,a){switch(s.tag){case 3:ym(s),lo();break;case 5:Op(s);break;case 1:mi(s.type)&&ml(s);break;case 4:$u(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Qt(Ml,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Qt(fn,fn.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Sm(n,s,a):(Qt(fn,fn.current&1),n=Rr(n,s,a),n!==null?n.sibling:null);Qt(fn,fn.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(n.flags&128)!==0){if(f)return wm(n,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Qt(fn,fn.current),f)break;return null;case 22:case 23:return s.lanes=0,xm(n,s,a)}return Rr(n,s,a)}var Tm,gf,Cm,Am;Tm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gf=function(){},Cm=function(n,s,a,f){var p=n.memoizedProps;if(p!==f){n=s.stateNode,Ts(dr.current);var _=null;switch(a){case"input":p=$(n,p),f=$(n,f),_=[];break;case"select":p=te({},p,{value:void 0}),f=te({},f,{value:void 0}),_=[];break;case"textarea":p=C(n,p),f=C(n,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=dl)}at(a,f);var T;a=null;for(de in p)if(!f.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var z=p[de];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in f){var j=f[de];if(z=p!=null?p[de]:void 0,f.hasOwnProperty(de)&&j!==z&&(j!=null||z!=null))if(de==="style")if(z){for(T in z)!z.hasOwnProperty(T)||j&&j.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in j)j.hasOwnProperty(T)&&z[T]!==j[T]&&(a||(a={}),a[T]=j[T])}else a||(_||(_=[]),_.push(de,a)),a=j;else de==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,z=z?z.__html:void 0,j!=null&&z!==j&&(_=_||[]).push(de,j)):de==="children"?typeof j!="string"&&typeof j!="number"||(_=_||[]).push(de,""+j):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(j!=null&&de==="onScroll"&&tn("scroll",n),_||z===j||(_=[])):(_=_||[]).push(de,j))}a&&(_=_||[]).push("style",a);var de=_;(s.updateQueue=de)&&(s.flags|=4)}},Am=function(n,s,a,f){a!==f&&(s.flags|=4)};function Ea(n,s){if(!an)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Jn(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,f=0;if(s)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=a,s}function t_(n,s,a){var f=s.pendingProps;switch(ku(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jn(s),null;case 1:return mi(s.type)&&pl(),Jn(s),null;case 3:return f=s.stateNode,ho(),nn(pi),nn(Kn),qu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(_l(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ki!==null&&(Af(Ki),Ki=null))),gf(n,s),Jn(s),null;case 5:Yu(s);var p=Ts(va.current);if(a=s.type,n!==null&&s.stateNode!=null)Cm(n,s,a,f,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Jn(s),null}if(n=Ts(dr.current),_l(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[fr]=s,f[ha]=_,n=(s.mode&1)!==0,a){case"dialog":tn("cancel",f),tn("close",f);break;case"iframe":case"object":case"embed":tn("load",f);break;case"video":case"audio":for(p=0;p<ua.length;p++)tn(ua[p],f);break;case"source":tn("error",f);break;case"img":case"image":case"link":tn("error",f),tn("load",f);break;case"details":tn("toggle",f);break;case"input":kn(f,_),tn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},tn("invalid",f);break;case"textarea":se(f,_),tn("invalid",f)}at(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var z=_[T];T==="children"?typeof z=="string"?f.textContent!==z&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,z,n),p=["children",z]):typeof z=="number"&&f.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,z,n),p=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&tn("scroll",f)}switch(a){case"input":_t(f),Qe(f,_,!0);break;case"textarea":_t(f),ue(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=dl)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(a,{is:f.is}):(n=T.createElement(a),a==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,a),n[fr]=s,n[ha]=f,Tm(n,s,!1,!1),s.stateNode=n;e:{switch(T=ct(a,f),a){case"dialog":tn("cancel",n),tn("close",n),p=f;break;case"iframe":case"object":case"embed":tn("load",n),p=f;break;case"video":case"audio":for(p=0;p<ua.length;p++)tn(ua[p],n);p=f;break;case"source":tn("error",n),p=f;break;case"img":case"image":case"link":tn("error",n),tn("load",n),p=f;break;case"details":tn("toggle",n),p=f;break;case"input":kn(n,f),p=$(n,f),tn("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=te({},f,{value:void 0}),tn("invalid",n);break;case"textarea":se(n,f),p=C(n,f),tn("invalid",n);break;default:p=f}at(a,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var j=z[_];_==="style"?rt(n,j):_==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Ve(n,j)):_==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&mt(n,j):typeof j=="number"&&mt(n,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?j!=null&&_==="onScroll"&&tn("scroll",n):j!=null&&L(n,_,j,T))}switch(a){case"input":_t(n),Qe(n,f,!1);break;case"textarea":_t(n),ue(n);break;case"option":f.value!=null&&n.setAttribute("value",""+be(f.value));break;case"select":n.multiple=!!f.multiple,_=f.value,_!=null?U(n,!!f.multiple,_,!1):f.defaultValue!=null&&U(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Jn(s),null;case 6:if(n&&s.stateNode!=null)Am(n,s,n.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ts(va.current),Ts(dr.current),_l(s)){if(f=s.stateNode,a=s.memoizedProps,f[fr]=s,(_=f.nodeValue!==a)&&(n=Ci,n!==null))switch(n.tag){case 3:fl(f.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(f.nodeValue,a,(n.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[fr]=s,s.stateNode=f}return Jn(s),null;case 13:if(nn(fn),f=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&Ai!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Pp(),lo(),s.flags|=98560,_=!1;else if(_=_l(s),f!==null&&f.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[fr]=s}else lo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Jn(s),_=!1}else Ki!==null&&(Af(Ki),Ki=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(fn.current&1)!==0?Nn===0&&(Nn=3):Pf())),s.updateQueue!==null&&(s.flags|=4),Jn(s),null);case 4:return ho(),gf(n,s),n===null&&fa(s.stateNode.containerInfo),Jn(s),null;case 10:return Gu(s.type._context),Jn(s),null;case 17:return mi(s.type)&&pl(),Jn(s),null;case 19:if(nn(fn),_=s.memoizedState,_===null)return Jn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)Ea(_,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(T=Tl(n),T!==null){for(s.flags|=128,Ea(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,n=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qt(fn,fn.current&1|2),s.child}n=n.sibling}_.tail!==null&&Z()>xo&&(s.flags|=128,f=!0,Ea(_,!1),s.lanes=4194304)}else{if(!f)if(n=Tl(T),n!==null){if(s.flags|=128,f=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ea(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!an)return Jn(s),null}else 2*Z()-_.renderingStartTime>xo&&a!==1073741824&&(s.flags|=128,f=!0,Ea(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Z(),s.sibling=null,a=fn.current,Qt(fn,f?a&1|2:a&1),s):(Jn(s),null);case 22:case 23:return bf(),f=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Ri&1073741824)!==0&&(Jn(s),s.subtreeFlags&6&&(s.flags|=8192)):Jn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function n_(n,s){switch(ku(s),s.tag){case 1:return mi(s.type)&&pl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ho(),nn(pi),nn(Kn),qu(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Yu(s),null;case 13:if(nn(fn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));lo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return nn(fn),null;case 4:return ho(),null;case 10:return Gu(s.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Il=!1,ei=!1,i_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function mo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){xn(n,s,f)}else a.current=null}function xf(n,s,a){try{a()}catch(f){xn(n,s,f)}}var Rm=!1;function r_(n,s){if(Ru=_s,n=op(),yu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,z=-1,j=-1,de=0,Ee=0,Ce=n,ye=null;t:for(;;){for(var He;Ce!==a||p!==0&&Ce.nodeType!==3||(z=T+p),Ce!==_||f!==0&&Ce.nodeType!==3||(j=T+f),Ce.nodeType===3&&(T+=Ce.nodeValue.length),(He=Ce.firstChild)!==null;)ye=Ce,Ce=He;for(;;){if(Ce===n)break t;if(ye===a&&++de===p&&(z=T),ye===_&&++Ee===f&&(j=T),(He=Ce.nextSibling)!==null)break;Ce=ye,ye=Ce.parentNode}Ce=He}a=z===-1||j===-1?null:{start:z,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(bu={focusedElem:n,selectionRange:a},_s=!1,$e=s;$e!==null;)if(s=$e,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,$e=n;else for(;$e!==null;){s=$e;try{var Ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ke=Ye.memoizedProps,Sn=Ye.memoizedState,ie=s.stateNode,q=ie.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Qi(s.type,Ke),Sn);ie.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){xn(s,s.return,Re)}if(n=s.sibling,n!==null){n.return=s.return,$e=n;break}$e=s.return}return Ye=Rm,Rm=!1,Ye}function wa(n,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&xf(s,a,_)}p=p.next}while(p!==f)}}function Fl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function vf(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function bm(n){var s=n.alternate;s!==null&&(n.alternate=null,bm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[fr],delete s[ha],delete s[Nu],delete s[Bv],delete s[Hv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pm(n){return n.tag===5||n.tag===3||n.tag===4}function Lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _f(n,s,a){var f=n.tag;if(f===5||f===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dl));else if(f!==4&&(n=n.child,n!==null))for(_f(n,s,a),n=n.sibling;n!==null;)_f(n,s,a),n=n.sibling}function yf(n,s,a){var f=n.tag;if(f===5||f===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(yf(n,s,a),n=n.sibling;n!==null;)yf(n,s,a),n=n.sibling}var $n=null,Ji=!1;function qr(n,s,a){for(a=a.child;a!==null;)Dm(n,s,a),a=a.sibling}function Dm(n,s,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:ei||mo(a,s);case 6:var f=$n,p=Ji;$n=null,qr(n,s,a),$n=f,Ji=p,$n!==null&&(Ji?(n=$n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):$n.removeChild(a.stateNode));break;case 18:$n!==null&&(Ji?(n=$n,a=a.stateNode,n.nodeType===8?Du(n.parentNode,a):n.nodeType===1&&Du(n,a),hi(n)):Du($n,a.stateNode));break;case 4:f=$n,p=Ji,$n=a.stateNode.containerInfo,Ji=!0,qr(n,s,a),$n=f,Ji=p;break;case 0:case 11:case 14:case 15:if(!ei&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&xf(a,s,T),p=p.next}while(p!==f)}qr(n,s,a);break;case 1:if(!ei&&(mo(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(z){xn(a,s,z)}qr(n,s,a);break;case 21:qr(n,s,a);break;case 22:a.mode&1?(ei=(f=ei)||a.memoizedState!==null,qr(n,s,a),ei=f):qr(n,s,a);break;default:qr(n,s,a)}}function Nm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new i_),s.forEach(function(f){var p=h_.bind(null,n,f);a.has(f)||(a.add(f),f.then(p,p))})}}function er(n,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=n,T=s,z=T;e:for(;z!==null;){switch(z.tag){case 5:$n=z.stateNode,Ji=!1;break e;case 3:$n=z.stateNode.containerInfo,Ji=!0;break e;case 4:$n=z.stateNode.containerInfo,Ji=!0;break e}z=z.return}if($n===null)throw Error(t(160));Dm(_,T,p),$n=null,Ji=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(de){xn(p,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Im(s,n),s=s.sibling}function Im(n,s){var a=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(s,n),pr(n),f&4){try{wa(3,n,n.return),Fl(3,n)}catch(Ke){xn(n,n.return,Ke)}try{wa(5,n,n.return)}catch(Ke){xn(n,n.return,Ke)}}break;case 1:er(s,n),pr(n),f&512&&a!==null&&mo(a,a.return);break;case 5:if(er(s,n),pr(n),f&512&&a!==null&&mo(a,a.return),n.flags&32){var p=n.stateNode;try{mt(p,"")}catch(Ke){xn(n,n.return,Ke)}}if(f&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,T=a!==null?a.memoizedProps:_,z=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&pt(p,_),ct(z,T);var de=ct(z,_);for(T=0;T<j.length;T+=2){var Ee=j[T],Ce=j[T+1];Ee==="style"?rt(p,Ce):Ee==="dangerouslySetInnerHTML"?Ve(p,Ce):Ee==="children"?mt(p,Ce):L(p,Ee,Ce,de)}switch(z){case"input":yt(p,_);break;case"textarea":ce(p,_);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?U(p,!!_.multiple,He,!1):ye!==!!_.multiple&&(_.defaultValue!=null?U(p,!!_.multiple,_.defaultValue,!0):U(p,!!_.multiple,_.multiple?[]:"",!1))}p[ha]=_}catch(Ke){xn(n,n.return,Ke)}}break;case 6:if(er(s,n),pr(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Ke){xn(n,n.return,Ke)}}break;case 3:if(er(s,n),pr(n),f&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(s.containerInfo)}catch(Ke){xn(n,n.return,Ke)}break;case 4:er(s,n),pr(n);break;case 13:er(s,n),pr(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ef=Z())),f&4&&Nm(n);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,n.mode&1?(ei=(de=ei)||Ee,er(s,n),ei=de):er(s,n),pr(n),f&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ee&&(n.mode&1)!==0)for($e=n,Ee=n.child;Ee!==null;){for(Ce=$e=Ee;$e!==null;){switch(ye=$e,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:wa(4,ye,ye.return);break;case 1:mo(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){f=ye,a=ye.return;try{s=f,Ye.props=s.memoizedProps,Ye.state=s.memoizedState,Ye.componentWillUnmount()}catch(Ke){xn(f,a,Ke)}}break;case 5:mo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){km(Ce);continue}}He!==null?(He.return=ye,$e=He):km(Ce)}Ee=Ee.sibling}e:for(Ee=null,Ce=n;;){if(Ce.tag===5){if(Ee===null){Ee=Ce;try{p=Ce.stateNode,de?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Ce.stateNode,j=Ce.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null,z.style.display=tt("display",T))}catch(Ke){xn(n,n.return,Ke)}}}else if(Ce.tag===6){if(Ee===null)try{Ce.stateNode.nodeValue=de?"":Ce.memoizedProps}catch(Ke){xn(n,n.return,Ke)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ee===Ce&&(Ee=null),Ce=Ce.return}Ee===Ce&&(Ee=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:er(s,n),pr(n),f&4&&Nm(n);break;case 21:break;default:er(s,n),pr(n)}}function pr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Pm(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(mt(p,""),f.flags&=-33);var _=Lm(n);yf(n,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,z=Lm(n);_f(n,z,T);break;default:throw Error(t(161))}}catch(j){xn(n,n.return,j)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function s_(n,s,a){$e=n,Fm(n)}function Fm(n,s,a){for(var f=(n.mode&1)!==0;$e!==null;){var p=$e,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Il;if(!T){var z=p.alternate,j=z!==null&&z.memoizedState!==null||ei;z=Il;var de=ei;if(Il=T,(ei=j)&&!de)for($e=p;$e!==null;)T=$e,j=T.child,T.tag===22&&T.memoizedState!==null?Om(p):j!==null?(j.return=T,$e=j):Om(p);for(;_!==null;)$e=_,Fm(_),_=_.sibling;$e=p,Il=z,ei=de}Um(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,$e=_):Um(n)}}function Um(n){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ei||Fl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!ei)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Qi(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&kp(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}kp(s,T,a)}break;case 5:var z=s.stateNode;if(a===null&&s.flags&4){a=z;var j=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Ee=de.memoizedState;if(Ee!==null){var Ce=Ee.dehydrated;Ce!==null&&hi(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ei||s.flags&512&&vf(s)}catch(ye){xn(s,s.return,ye)}}if(s===n){$e=null;break}if(a=s.sibling,a!==null){a.return=s.return,$e=a;break}$e=s.return}}function km(n){for(;$e!==null;){var s=$e;if(s===n){$e=null;break}var a=s.sibling;if(a!==null){a.return=s.return,$e=a;break}$e=s.return}}function Om(n){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Fl(4,s)}catch(j){xn(s,a,j)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(j){xn(s,p,j)}}var _=s.return;try{vf(s)}catch(j){xn(s,_,j)}break;case 5:var T=s.return;try{vf(s)}catch(j){xn(s,T,j)}}}catch(j){xn(s,s.return,j)}if(s===n){$e=null;break}var z=s.sibling;if(z!==null){z.return=s.return,$e=z;break}$e=s.return}}var o_=Math.ceil,Ul=A.ReactCurrentDispatcher,Mf=A.ReactCurrentOwner,Oi=A.ReactCurrentBatchConfig,zt=0,Hn=null,An=null,Yn=0,Ri=0,go=jr(0),Nn=0,Ta=null,As=0,kl=0,Sf=0,Ca=null,xi=null,Ef=0,xo=1/0,br=null,Ol=!1,wf=null,Kr=null,zl=!1,Qr=null,Bl=0,Aa=0,Tf=null,Hl=-1,Vl=0;function li(){return(zt&6)!==0?Z():Hl!==-1?Hl:Hl=Z()}function Jr(n){return(n.mode&1)===0?1:(zt&2)!==0&&Yn!==0?Yn&-Yn:Gv.transition!==null?(Vl===0&&(Vl=jn()),Vl):(n=ge,n!==0||(n=window.event,n=n===void 0?16:Bh(n.type)),n)}function tr(n,s,a,f){if(50<Aa)throw Aa=0,Tf=null,Error(t(185));on(n,a,f),((zt&2)===0||n!==Hn)&&(n===Hn&&((zt&2)===0&&(kl|=a),Nn===4&&es(n,Yn)),vi(n,f),a===1&&zt===0&&(s.mode&1)===0&&(xo=Z()+500,gl&&$r()))}function vi(n,s){var a=n.callbackNode;_r(n,s);var f=Ei(n,n===Hn?Yn:0);if(f===0)a!==null&&J(a),n.callbackNode=null,n.callbackPriority=0;else if(s=f&-f,n.callbackPriority!==s){if(a!=null&&J(a),s===1)n.tag===0?Vv(Bm.bind(null,n)):Tp(Bm.bind(null,n)),Ov(function(){(zt&6)===0&&$r()}),a=null;else{switch(gt(f)){case 1:a=Le;break;case 4:a=Be;break;case 16:a=Ge;break;case 536870912:a=lt;break;default:a=Ge}a=Ym(a,zm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function zm(n,s){if(Hl=-1,Vl=0,(zt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(vo()&&n.callbackNode!==a)return null;var f=Ei(n,n===Hn?Yn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||s)s=Gl(n,f);else{s=f;var p=zt;zt|=2;var _=Vm();(Hn!==n||Yn!==s)&&(br=null,xo=Z()+500,bs(n,s));do try{c_();break}catch(z){Hm(n,z)}while(!0);Vu(),Ul.current=_,zt=p,An!==null?s=0:(Hn=null,Yn=0,s=Nn)}if(s!==0){if(s===2&&(p=Xt(n),p!==0&&(f=p,s=Cf(n,p))),s===1)throw a=Ta,bs(n,0),es(n,f),vi(n,Z()),a;if(s===6)es(n,f);else{if(p=n.current.alternate,(f&30)===0&&!a_(p)&&(s=Gl(n,f),s===2&&(_=Xt(n),_!==0&&(f=_,s=Cf(n,_))),s===1))throw a=Ta,bs(n,0),es(n,f),vi(n,Z()),a;switch(n.finishedWork=p,n.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ps(n,xi,br);break;case 3:if(es(n,f),(f&130023424)===f&&(s=Ef+500-Z(),10<s)){if(Ei(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){li(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Lu(Ps.bind(null,n,xi,br),s);break}Ps(n,xi,br);break;case 4:if(es(n,f),(f&4194240)===f)break;for(s=n.eventTimes,p=-1;0<f;){var T=31-Lt(f);_=1<<T,T=s[T],T>p&&(p=T),f&=~_}if(f=p,f=Z()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*o_(f/1960))-f,10<f){n.timeoutHandle=Lu(Ps.bind(null,n,xi,br),f);break}Ps(n,xi,br);break;case 5:Ps(n,xi,br);break;default:throw Error(t(329))}}}return vi(n,Z()),n.callbackNode===a?zm.bind(null,n):null}function Cf(n,s){var a=Ca;return n.current.memoizedState.isDehydrated&&(bs(n,s).flags|=256),n=Gl(n,s),n!==2&&(s=xi,xi=a,s!==null&&Af(s)),n}function Af(n){xi===null?xi=n:xi.push.apply(xi,n)}function a_(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!qi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function es(n,s){for(s&=~Sf,s&=~kl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Lt(s),f=1<<a;n[a]=-1,s&=~f}}function Bm(n){if((zt&6)!==0)throw Error(t(327));vo();var s=Ei(n,0);if((s&1)===0)return vi(n,Z()),null;var a=Gl(n,s);if(n.tag!==0&&a===2){var f=Xt(n);f!==0&&(s=f,a=Cf(n,f))}if(a===1)throw a=Ta,bs(n,0),es(n,s),vi(n,Z()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Ps(n,xi,br),vi(n,Z()),null}function Rf(n,s){var a=zt;zt|=1;try{return n(s)}finally{zt=a,zt===0&&(xo=Z()+500,gl&&$r())}}function Rs(n){Qr!==null&&Qr.tag===0&&(zt&6)===0&&vo();var s=zt;zt|=1;var a=Oi.transition,f=ge;try{if(Oi.transition=null,ge=1,n)return n()}finally{ge=f,Oi.transition=a,zt=s,(zt&6)===0&&$r()}}function bf(){Ri=go.current,nn(go)}function bs(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,kv(a)),An!==null)for(a=An.return;a!==null;){var f=a;switch(ku(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pl();break;case 3:ho(),nn(pi),nn(Kn),qu();break;case 5:Yu(f);break;case 4:ho();break;case 13:nn(fn);break;case 19:nn(fn);break;case 10:Gu(f.type._context);break;case 22:case 23:bf()}a=a.return}if(Hn=n,An=n=ts(n.current,null),Yn=Ri=s,Nn=0,Ta=null,Sf=kl=As=0,xi=Ca=null,ws!==null){for(s=0;s<ws.length;s++)if(a=ws[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}a.pending=f}ws=null}return n}function Hm(n,s){do{var a=An;try{if(Vu(),Cl.current=Pl,Al){for(var f=dn.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}Al=!1}if(Cs=0,Bn=Dn=dn=null,_a=!1,ya=0,Mf.current=null,a===null||a.return===null){Nn=1,Ta=s,An=null;break}e:{var _=n,T=a.return,z=a,j=s;if(s=Yn,z.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var de=j,Ee=z,Ce=Ee.tag;if((Ee.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var ye=Ee.alternate;ye?(Ee.updateQueue=ye.updateQueue,Ee.memoizedState=ye.memoizedState,Ee.lanes=ye.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var He=dm(T);if(He!==null){He.flags&=-257,hm(He,T,z,_,s),He.mode&1&&fm(_,de,s),s=He,j=de;var Ye=s.updateQueue;if(Ye===null){var Ke=new Set;Ke.add(j),s.updateQueue=Ke}else Ye.add(j);break e}else{if((s&1)===0){fm(_,de,s),Pf();break e}j=Error(t(426))}}else if(an&&z.mode&1){var Sn=dm(T);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),hm(Sn,T,z,_,s),Bu(po(j,z));break e}}_=j=po(j,z),Nn!==4&&(Nn=2),Ca===null?Ca=[_]:Ca.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ie=cm(_,j,s);Up(_,ie);break e;case 1:z=j;var q=_.type,oe=_.stateNode;if((_.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Kr===null||!Kr.has(oe)))){_.flags|=65536,s&=-s,_.lanes|=s;var Re=um(_,z,s);Up(_,Re);break e}}_=_.return}while(_!==null)}Wm(a)}catch(Je){s=Je,An===a&&a!==null&&(An=a=a.return);continue}break}while(!0)}function Vm(){var n=Ul.current;return Ul.current=Pl,n===null?Pl:n}function Pf(){(Nn===0||Nn===3||Nn===2)&&(Nn=4),Hn===null||(As&268435455)===0&&(kl&268435455)===0||es(Hn,Yn)}function Gl(n,s){var a=zt;zt|=2;var f=Vm();(Hn!==n||Yn!==s)&&(br=null,bs(n,s));do try{l_();break}catch(p){Hm(n,p)}while(!0);if(Vu(),zt=a,Ul.current=f,An!==null)throw Error(t(261));return Hn=null,Yn=0,Nn}function l_(){for(;An!==null;)Gm(An)}function c_(){for(;An!==null&&!ae();)Gm(An)}function Gm(n){var s=$m(n.alternate,n,Ri);n.memoizedProps=n.pendingProps,s===null?Wm(n):An=s,Mf.current=null}function Wm(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=t_(a,s,Ri),a!==null){An=a;return}}else{if(a=n_(a,s),a!==null){a.flags&=32767,An=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nn=6,An=null;return}}if(s=s.sibling,s!==null){An=s;return}An=s=n}while(s!==null);Nn===0&&(Nn=5)}function Ps(n,s,a){var f=ge,p=Oi.transition;try{Oi.transition=null,ge=1,u_(n,s,a,f)}finally{Oi.transition=p,ge=f}return null}function u_(n,s,a,f){do vo();while(Qr!==null);if((zt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(X(n,_),n===Hn&&(An=Hn=null,Yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zl||(zl=!0,Ym(Ge,function(){return vo(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=Oi.transition,Oi.transition=null;var T=ge;ge=1;var z=zt;zt|=4,Mf.current=null,r_(n,a),Im(a,n),Pv(bu),_s=!!Ru,bu=Ru=null,n.current=a,s_(a),fe(),zt=z,ge=T,Oi.transition=_}else n.current=a;if(zl&&(zl=!1,Qr=n,Bl=p),_=n.pendingLanes,_===0&&(Kr=null),Ft(a.stateNode),vi(n,Z()),s!==null)for(f=n.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(Ol)throw Ol=!1,n=wf,wf=null,n;return(Bl&1)!==0&&n.tag!==0&&vo(),_=n.pendingLanes,(_&1)!==0?n===Tf?Aa++:(Aa=0,Tf=n):Aa=0,$r(),null}function vo(){if(Qr!==null){var n=gt(Bl),s=Oi.transition,a=ge;try{if(Oi.transition=null,ge=16>n?16:n,Qr===null)var f=!1;else{if(n=Qr,Qr=null,Bl=0,(zt&6)!==0)throw Error(t(331));var p=zt;for(zt|=4,$e=n.current;$e!==null;){var _=$e,T=_.child;if(($e.flags&16)!==0){var z=_.deletions;if(z!==null){for(var j=0;j<z.length;j++){var de=z[j];for($e=de;$e!==null;){var Ee=$e;switch(Ee.tag){case 0:case 11:case 15:wa(8,Ee,_)}var Ce=Ee.child;if(Ce!==null)Ce.return=Ee,$e=Ce;else for(;$e!==null;){Ee=$e;var ye=Ee.sibling,He=Ee.return;if(bm(Ee),Ee===de){$e=null;break}if(ye!==null){ye.return=He,$e=ye;break}$e=He}}}var Ye=_.alternate;if(Ye!==null){var Ke=Ye.child;if(Ke!==null){Ye.child=null;do{var Sn=Ke.sibling;Ke.sibling=null,Ke=Sn}while(Ke!==null)}}$e=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,$e=T;else e:for(;$e!==null;){if(_=$e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:wa(9,_,_.return)}var ie=_.sibling;if(ie!==null){ie.return=_.return,$e=ie;break e}$e=_.return}}var q=n.current;for($e=q;$e!==null;){T=$e;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,$e=oe;else e:for(T=q;$e!==null;){if(z=$e,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Fl(9,z)}}catch(Je){xn(z,z.return,Je)}if(z===T){$e=null;break e}var Re=z.sibling;if(Re!==null){Re.return=z.return,$e=Re;break e}$e=z.return}}if(zt=p,$r(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(qe,n)}catch{}f=!0}return f}finally{ge=a,Oi.transition=s}}return!1}function jm(n,s,a){s=po(a,s),s=cm(n,s,1),n=Zr(n,s,1),s=li(),n!==null&&(on(n,1,s),vi(n,s))}function xn(n,s,a){if(n.tag===3)jm(n,n,a);else for(;s!==null;){if(s.tag===3){jm(s,n,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Kr===null||!Kr.has(f))){n=po(a,n),n=um(s,n,1),s=Zr(s,n,1),n=li(),s!==null&&(on(s,1,n),vi(s,n));break}}s=s.return}}function f_(n,s,a){var f=n.pingCache;f!==null&&f.delete(s),s=li(),n.pingedLanes|=n.suspendedLanes&a,Hn===n&&(Yn&a)===a&&(Nn===4||Nn===3&&(Yn&130023424)===Yn&&500>Z()-Ef?bs(n,0):Sf|=a),vi(n,s)}function Xm(n,s){s===0&&((n.mode&1)===0?s=1:(s=Ct,Ct<<=1,(Ct&130023424)===0&&(Ct=4194304)));var a=li();n=Cr(n,s),n!==null&&(on(n,s,a),vi(n,a))}function d_(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Xm(n,a)}function h_(n,s){var a=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Xm(n,a)}var $m;$m=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||pi.current)gi=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return gi=!1,e_(n,s,a);gi=(n.flags&131072)!==0}else gi=!1,an&&(s.flags&1048576)!==0&&Cp(s,vl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Nl(n,s),n=s.pendingProps;var p=so(s,Kn.current);fo(s,a),p=Ju(null,s,f,n,p,a);var _=ef();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,mi(f)?(_=!0,ml(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Xu(s),p.updater=Ll,s.stateNode=p,p._reactInternals=s,af(s,f,n,a),s=ff(null,s,f,!0,_,a)):(s.tag=0,an&&_&&Uu(s),ai(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Nl(n,s),n=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=m_(f),n=Qi(f,n),p){case 0:s=uf(null,s,f,n,a);break e;case 1:s=_m(null,s,f,n,a);break e;case 11:s=pm(null,s,f,n,a);break e;case 14:s=mm(null,s,f,Qi(f.type,n),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Qi(f,p),uf(n,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Qi(f,p),_m(n,s,f,p,a);case 3:e:{if(ym(s),n===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,Fp(n,s),wl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=po(Error(t(423)),s),s=Mm(n,s,f,a,p);break e}else if(f!==p){p=po(Error(t(424)),s),s=Mm(n,s,f,a,p);break e}else for(Ai=Wr(s.stateNode.containerInfo.firstChild),Ci=s,an=!0,Ki=null,a=Np(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),f===p){s=Rr(n,s,a);break e}ai(n,s,f,a)}s=s.child}return s;case 5:return Op(s),n===null&&zu(s),f=s.type,p=s.pendingProps,_=n!==null?n.memoizedProps:null,T=p.children,Pu(f,p)?T=null:_!==null&&Pu(f,_)&&(s.flags|=32),vm(n,s),ai(n,s,T,a),s.child;case 6:return n===null&&zu(s),null;case 13:return Sm(n,s,a);case 4:return $u(s,s.stateNode.containerInfo),f=s.pendingProps,n===null?s.child=co(s,null,f,a):ai(n,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Qi(f,p),pm(n,s,f,p,a);case 7:return ai(n,s,s.pendingProps,a),s.child;case 8:return ai(n,s,s.pendingProps.children,a),s.child;case 12:return ai(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,Qt(Ml,f._currentValue),f._currentValue=T,_!==null)if(qi(_.value,T)){if(_.children===p.children&&!pi.current){s=Rr(n,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var z=_.dependencies;if(z!==null){T=_.child;for(var j=z.firstContext;j!==null;){if(j.context===f){if(_.tag===1){j=Ar(-1,a&-a),j.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Ee=de.pending;Ee===null?j.next=j:(j.next=Ee.next,Ee.next=j),de.pending=j}}_.lanes|=a,j=_.alternate,j!==null&&(j.lanes|=a),Wu(_.return,a,s),z.lanes|=a;break}j=j.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),Wu(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}ai(n,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,fo(s,a),p=Ui(p),f=f(p),s.flags|=1,ai(n,s,f,a),s.child;case 14:return f=s.type,p=Qi(f,s.pendingProps),p=Qi(f.type,p),mm(n,s,f,p,a);case 15:return gm(n,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Qi(f,p),Nl(n,s),s.tag=1,mi(f)?(n=!0,ml(s)):n=!1,fo(s,a),am(s,f,p),af(s,f,p,a),ff(null,s,f,!0,n,a);case 19:return wm(n,s,a);case 22:return xm(n,s,a)}throw Error(t(156,s.tag))};function Ym(n,s){return P(n,s)}function p_(n,s,a,f){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(n,s,a,f){return new p_(n,s,a,f)}function Lf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function m_(n){if(typeof n=="function")return Lf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===he)return 11;if(n===Q)return 14}return 2}function ts(n,s){var a=n.alternate;return a===null?(a=zi(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wl(n,s,a,f,p,_){var T=2;if(f=n,typeof n=="function")Lf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return Ls(a.children,p,_,s);case G:T=8,p|=8;break;case b:return n=zi(12,a,s,p|2),n.elementType=b,n.lanes=_,n;case V:return n=zi(13,a,s,p),n.elementType=V,n.lanes=_,n;case Y:return n=zi(19,a,s,p),n.elementType=Y,n.lanes=_,n;case ee:return jl(a,p,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case B:T=9;break e;case he:T=11;break e;case Q:T=14;break e;case W:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=zi(T,a,s,p),s.elementType=n,s.type=f,s.lanes=_,s}function Ls(n,s,a,f){return n=zi(7,n,f,s),n.lanes=a,n}function jl(n,s,a,f){return n=zi(22,n,f,s),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Df(n,s,a){return n=zi(6,n,null,s),n.lanes=a,n}function Nf(n,s,a){return s=zi(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function g_(n,s,a,f,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ln(0),this.expirationTimes=Ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function If(n,s,a,f,p,_,T,z,j){return n=new g_(n,s,a,z,j),s===1?(s=1,_===!0&&(s|=8)):s=0,_=zi(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(_),n}function x_(n,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:n,containerInfo:s,implementation:a}}function Zm(n){if(!n)return Xr;n=n._reactInternals;e:{if(ri(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(mi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(mi(a))return Ep(n,a,s)}return s}function qm(n,s,a,f,p,_,T,z,j){return n=If(a,f,!0,n,p,_,T,z,j),n.context=Zm(null),a=n.current,f=li(),p=Jr(a),_=Ar(f,p),_.callback=s??null,Zr(a,_,p),n.current.lanes=p,on(n,p,f),vi(n,f),n}function Xl(n,s,a,f){var p=s.current,_=li(),T=Jr(p);return a=Zm(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(_,T),s.payload={element:n},f=f===void 0?null:f,f!==null&&(s.callback=f),n=Zr(p,s,T),n!==null&&(tr(n,p,T,_),El(n,p,T)),T}function $l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Km(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Ff(n,s){Km(n,s),(n=n.alternate)&&Km(n,s)}function v_(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uf(n){this._internalRoot=n}Yl.prototype.render=Uf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Xl(n,s,null,null)},Yl.prototype.unmount=Uf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Rs(function(){Xl(null,n,null,null)}),s[Sr]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Xn();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Rt.length&&s!==0&&s<Rt[a].priority;a++);Rt.splice(a,0,n),a===0&&Mn(n)}};function kf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function __(n,s,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var de=$l(T);_.call(de)}}var T=qm(s,f,n,0,null,!1,!1,"",Jm);return n._reactRootContainer=T,n[Sr]=T.current,fa(n.nodeType===8?n.parentNode:n),Rs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var z=f;f=function(){var de=$l(j);z.call(de)}}var j=If(n,0,!1,null,null,!1,!1,"",Jm);return n._reactRootContainer=j,n[Sr]=j.current,fa(n.nodeType===8?n.parentNode:n),Rs(function(){Xl(s,j,a,f)}),j}function ql(n,s,a,f,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var z=p;p=function(){var j=$l(T);z.call(j)}}Xl(s,T,n,p)}else T=__(a,s,n,p,f);return $l(T)}bt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=bn(s.pendingLanes);a!==0&&(k(s,a|1),vi(s,Z()),(zt&6)===0&&(xo=Z()+500,$r()))}break;case 13:Rs(function(){var f=Cr(n,1);if(f!==null){var p=li();tr(f,n,1,p)}}),Ff(n,1)}},Mt=function(n){if(n.tag===13){var s=Cr(n,134217728);if(s!==null){var a=li();tr(s,n,134217728,a)}Ff(n,134217728)}},cn=function(n){if(n.tag===13){var s=Jr(n),a=Cr(n,s);if(a!==null){var f=li();tr(a,n,s,f)}Ff(n,s)}},Xn=function(){return ge},Ut=function(n,s){var a=ge;try{return ge=n,s()}finally{ge=a}},Fe=function(n,s,a){switch(s){case"input":if(yt(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==n&&f.form===n.form){var p=hl(f);if(!p)throw Error(t(90));wt(f),yt(f,p)}}}break;case"textarea":ce(n,a);break;case"select":s=a.value,s!=null&&U(n,!!a.multiple,s,!1)}},Yt=Rf,gn=Rs;var y_={usingClientEntryPoint:!1,Events:[pa,io,hl,Ue,ft,Rf]},Ra={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M_={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tn(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||v_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{qe=Kl.inject(M_),dt=Kl}catch{}}return _i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y_,_i.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(s))throw Error(t(200));return x_(n,s,null,a)},_i.createRoot=function(n,s){if(!kf(n))throw Error(t(299));var a=!1,f="",p=Qm;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=If(n,1,!1,null,null,a,!1,f,p),n[Sr]=s.current,fa(n.nodeType===8?n.parentNode:n),new Uf(s)},_i.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tn(s),n=n===null?null:n.stateNode,n},_i.flushSync=function(n){return Rs(n)},_i.hydrate=function(n,s,a){if(!Zl(s))throw Error(t(200));return ql(null,n,s,!0,a)},_i.hydrateRoot=function(n,s,a){if(!kf(n))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",T=Qm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=qm(s,null,n,1,a??null,p,!1,_,T),n[Sr]=s.current,fa(n),f)for(n=0;n<f.length;n++)a=f[n],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Yl(s)},_i.render=function(n,s,a){if(!Zl(s))throw Error(t(200));return ql(null,n,s,!1,a)},_i.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(Rs(function(){ql(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},_i.unstable_batchedUpdates=Rf,_i.unstable_renderSubtreeIntoContainer=function(n,s,a,f){if(!Zl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ql(n,s,a,!1,f)},_i.version="18.3.1-next-f1338f8080-20240426",_i}var ag;function P_(){if(ag)return Bf.exports;ag=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Bf.exports=b_(),Bf.exports}var lg;function L_(){if(lg)return Ql;lg=1;var i=P_();return Ql.createRoot=i.createRoot,Ql.hydrateRoot=i.hydrateRoot,Ql}var D_=L_();const N_=z0(D_);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B0=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Pe.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...u},d)=>Pe.createElement("svg",{ref:d,...F_,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:B0("lucide",o),...u},[...c.map(([h,m])=>Pe.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(i,e)=>{const t=Pe.forwardRef(({className:r,...o},l)=>Pe.createElement(U_,{ref:l,iconNode:e,className:B0(`lucide-${I_(i)}`,r),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=rn("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=rn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=rn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=rn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=rn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=rn("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=rn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=rn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=rn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=rn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=rn("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=rn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=rn("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=rn("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=rn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=rn("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=rn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=rn("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=rn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=rn("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=rn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=rn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=rn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=rn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=rn("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]),we=i=>Math.round(i*1e4)/1e4,hn=(i,e,t)=>Math.min(t,Math.max(e,i)),Nt=(i,e)=>Math.abs(i-e)<1e-4;function W0(i,e,t){const r=Number.isFinite(i)?i:0;if(!Number.isFinite(e)||e<=0||!Number.isFinite(t)||t<=0)return we(hn(r,0,1));const o=Math.round(r*e/t)*t;return we(hn(o/e,0,1))}function Vc(i,e,t,r,o){if(!Number.isFinite(i)||!Number.isFinite(e)||!Number.isFinite(t)||t<=0)return .5;const l=(i-e)/t;return we(hn(W0(l,r,o),.08,.92))}function fg(i,e){return Vc(i,0,e,e,1)}function dg(i,e){return!Number.isFinite(i)||!Number.isFinite(e)||e<=0?!1:i>=e*.08&&i<=e*.92}function ty(i,e,t){return!Number.isFinite(e)||e<=0||!Number.isFinite(t)?we(hn(i,.08,.92)):Vc(i*e+t,0,e,e,1)}function In(i){const e=Math.round((Number.isFinite(i)?i:0)*10)/10;return`${Number.isInteger(e)?e.toFixed(0):e.toFixed(1)} mm`}function Jl(i,e,t){const r=i.axis==="vertical"?e:t;return we(i.position*r)}function ny(i,e,t,r){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(r)?i.position:we(r/o)}function xh(i,e,t=.08){const r=wn(i)??En(1,1),o=hn(t,.02,.45);if(e.axis==="vertical"){const{leftCells:u,rightCells:d}=vh(r,e);return u.length===0||d.length===0?null:{min:Math.max(...u.map(h=>h.x+o)),max:Math.min(...d.map(h=>h.x+h.width-o))}}const{topCells:l,bottomCells:c}=_h(r,e);return l.length===0||c.length===0?null:{min:Math.max(...l.map(u=>u.y+o)),max:Math.min(...c.map(u=>u.y+u.height-o))}}function hg(i,e,t,r,o,l=.08){if(!Number.isFinite(t))return!1;const c=e.axis==="vertical"?r:o;if(!Number.isFinite(c)||c<=0)return!1;const u=xh(i,e,l);if(!u)return!1;const d=t/c;return d>=u.min&&d<=u.max}function iy(i,e,t,r,o=.08){const l=e.axis==="vertical"?t:r;if(!Number.isFinite(l)||l<=0)return null;const c=xh(i,e,o);if(!c)return null;const u=we(c.min),d=we(c.max),h=we(e.position),m=we((u+d)/2);return{axis:e.axis,min:u,max:d,current:h,center:m,minMm:we(u*l),maxMm:we(d*l),currentMm:we(h*l),centerMm:we(m*l)}}function ry(i,e,t=.08){const r=wn(i)??En(1,1),o=xh(r,e,t);return o?ps(r,e,we((o.min+o.max)/2),t):r}function Pa(i,e,t,r,o,l,c=.08){if(!Number.isFinite(r))return!1;const u=t==="width"?o:l;if(!Number.isFinite(u)||u<=0)return!1;const d=wn(i)??En(1,1);if(!d.find(S=>S.id===e))return!1;const m=hn(c,.02,.45),x=r/u;if(x<m||x>1)return!1;const M=X0(d,e,t==="width"?{width:x}:{height:x},m).find(S=>S.id===e);return M?Nt(M[t],we(x)):!1}function sy(i,e,t,r){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(r)?i.position:we(i.position+r/o)}function ec(i){return i.ctrlKey?1:5}function oy(i){const e=i.key.toLowerCase();return i.ctrlKey&&e==="z"?"undo":i.ctrlKey&&e==="y"?"redo":i.ctrlKey&&e==="a"?"select-all":i.ctrlKey?"none":i.key==="Escape"?"cancel":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)?"nudge":e==="v"?"split-vertical":e==="h"?"split-horizontal":e==="m"?"merge":e==="w"?"equalize-width":e==="d"?"equalize-depth":"none"}function ay(i){return i==="Enter"}const tc=(i,e)=>{i.some(t=>t.type===e.type)||i.push(e)},hs=(i,e,t,r)=>Math.min(e,r)-Math.max(i,t)>1e-4,nc=(i,e,t,r)=>({start:we(Math.max(i,t)),end:we(Math.min(e,r))});function En(i,e){const t=Math.max(1,Math.round(i)),r=Math.max(1,Math.round(e)),o=[];for(let l=0;l<r;l+=1)for(let c=0;c<t;c+=1)o.push({id:`cell-${o.length+1}`,x:we(c/t),y:we(l/r),width:we(1/t),height:we(1/r)});return o}function wn(i){if(!(i!=null&&i.length))return;const e=i.map((t,r)=>{const o=hn(Number.isFinite(t.x)?t.x:0,0,.98),l=hn(Number.isFinite(t.y)?t.y:0,0,.98),c=hn(Number.isFinite(t.width)?t.width:1,.02,1-o),u=hn(Number.isFinite(t.height)?t.height:1,.02,1-l);return{id:t.id||`cell-${r+1}`,x:we(o),y:we(l),width:we(c),height:we(u)}}).filter(t=>t.width>=.02&&t.height>=.02);return e.length?e:void 0}function j0(i,e=.08){const t=[];if(!(i!=null&&i.length))return{ok:!1,issues:[{type:"gap",message:"セルで埋まっていない隙間があります。"}]};const r=hn(e,.02,.45),o=[0,1],l=[0,1];i.forEach(d=>{const h=d.x+d.width,m=d.y+d.height;(d.x<-1e-4||d.y<-1e-4||h>1.0001||m>1.0001)&&tc(t,{type:"bounds",message:"トレイ範囲外のセルがあります。"}),(d.width<r||d.height<r)&&tc(t,{type:"small-cell",message:"最小サイズ未満のセルがあります。"}),o.push(hn(we(d.x),0,1)),o.push(hn(we(h),0,1)),l.push(hn(we(d.y),0,1)),l.push(hn(we(m),0,1))});const c=[...new Set(o.map(we))].sort((d,h)=>d-h),u=[...new Set(l.map(we))].sort((d,h)=>d-h);for(let d=0;d<c.length-1;d+=1)for(let h=0;h<u.length-1;h+=1){const m=c[d],x=c[d+1],g=u[h],M=u[h+1];if(x-m<=1e-4||M-g<=1e-4)continue;const S=(m+x)/2,E=(g+M)/2,y=i.filter(v=>S>v.x+1e-4&&S<v.x+v.width-1e-4&&E>v.y+1e-4&&E<v.y+v.height-1e-4);y.length===0?tc(t,{type:"gap",message:"セルで埋まっていない隙間があります。"}):y.length>1&&tc(t,{type:"overlap",message:"セル同士が重なっています。"})}return{ok:t.length===0,issues:t}}function ly(i,e,t,r=2){const o=wn(i)??En(1,1),l=o.find(d=>d.id===e);if(!l)return o;const c=Math.max(2,Math.min(4,Math.round(r))),u=Array.from({length:c},(d,h)=>{const m=we(h/c),x=we((h+1)/c),g=String.fromCharCode(97+h);if(t==="vertical"){const E=we(l.x+l.width*m),y=we(l.x+l.width*x);return{...l,id:`${l.id}${g}`,x:E,width:we(y-E)}}const M=we(l.y+l.height*m),S=we(l.y+l.height*x);return{...l,id:`${l.id}${g}`,y:M,height:we(S-M)}});return o.flatMap(d=>d.id===e?u:[d])}function cy(i,e,t,r){const o=wn(i)??En(1,1),l=o.find(h=>h.id===e);if(!l)return o;const c=we(hn(r,.08,.92)),d=["a","b"].map((h,m)=>{if(t==="vertical"){const M=m===0?l.x:we(l.x+l.width*c),S=we(m===0?l.width*c:l.width*(1-c));return{...l,id:`${l.id}${h}`,x:M,width:S}}const x=m===0?l.y:we(l.y+l.height*c),g=we(m===0?l.height*c:l.height*(1-c));return{...l,id:`${l.id}${h}`,y:x,height:g}});return o.flatMap(h=>h.id===e?d:[h])}function uy(i,e,t,r=2){const l=(wn(i)??En(1,1)).find(u=>u.id===e);if(!l)return[];const c=Math.max(2,Math.min(4,Math.round(r)));return Array.from({length:c-1},(u,d)=>{const h=we((d+1)/c);if(t==="vertical"){const x=we(l.x+l.width*h);return{axis:t,x1:x,x2:x,y1:l.y,y2:we(l.y+l.height)}}const m=we(l.y+l.height*h);return{axis:t,x1:l.x,x2:we(l.x+l.width),y1:m,y2:m}})}function fy(i,e,t,r){const l=(wn(i)??En(1,1)).find(d=>d.id===e);if(!l)return[];const c=we(hn(r,.08,.92));if(t==="vertical"){const d=we(l.x+l.width*c);return[{axis:t,x1:d,x2:d,y1:l.y,y2:we(l.y+l.height)}]}const u=we(l.y+l.height*c);return[{axis:t,x1:l.x,x2:we(l.x+l.width),y1:u,y2:u}]}function Ko(i){const e=wn(i)??En(1,1),t=new Map;return e.forEach(r=>{e.forEach(o=>{if(r.id===o.id)return;const l=we(r.x+r.width),c=we(o.x+o.width),u=we(r.y+r.height),d=we(o.y+o.height);if(Nt(l,o.x)&&hs(r.y,u,o.y,d)){const h=nc(r.y,u,o.y,d),m={axis:"vertical",position:l,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(c,r.x)&&hs(r.y,u,o.y,d)){const h=nc(r.y,u,o.y,d),m={axis:"vertical",position:c,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(u,o.y)&&hs(r.x,r.x+r.width,o.x,o.x+o.width)){const h=nc(r.x,r.x+r.width,o.x,o.x+o.width),m={axis:"horizontal",position:u,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Nt(d,r.y)&&hs(r.x,r.x+r.width,o.x,o.x+o.width)){const h=nc(r.x,r.x+r.width,o.x,o.x+o.width),m={axis:"horizontal",position:d,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}})}),[...t.values()].sort((r,o)=>r.axis!==o.axis?r.axis.localeCompare(o.axis):Nt(r.position,o.position)?r.start-o.start:r.position-o.position)}function ic(i,e,t){return Ko(i).filter(r=>r.axis===e.axis&&Nt(r.start,e.start)&&Nt(r.end,e.end)).sort((r,o)=>Math.abs(r.position-t)-Math.abs(o.position-t))[0]}function vh(i,e){let t=e.start,r=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const u=i.filter(g=>Nt(g.x+g.width,e.position)&&hs(t,r,g.y,g.y+g.height)),d=i.filter(g=>Nt(g.x,e.position)&&hs(t,r,g.y,g.y+g.height)),h=[...u,...d],m=Math.min(t,...h.map(g=>g.y)),x=Math.max(r,...h.map(g=>g.y+g.height));(u.length!==o.length||d.length!==l.length||!Nt(m,t)||!Nt(x,r))&&(c=!0,o=u,l=d,t=m,r=x)}return{leftCells:o,rightCells:l}}function _h(i,e){let t=e.start,r=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const u=i.filter(g=>Nt(g.y+g.height,e.position)&&hs(t,r,g.x,g.x+g.width)),d=i.filter(g=>Nt(g.y,e.position)&&hs(t,r,g.x,g.x+g.width)),h=[...u,...d],m=Math.min(t,...h.map(g=>g.x)),x=Math.max(r,...h.map(g=>g.x+g.width));(u.length!==o.length||d.length!==l.length||!Nt(m,t)||!Nt(x,r))&&(c=!0,o=u,l=d,t=m,r=x)}return{topCells:o,bottomCells:l}}function dy(i,e){const t=wn(i)??En(1,1),r=Ko(t);if(e.axis==="vertical"){const{leftCells:d,rightCells:h}=vh(t,e);if(d.length===0||h.length===0)return[];const m=Math.min(...[...d,...h].map(g=>g.y)),x=Math.max(...[...d,...h].map(g=>g.y+g.height));return r.filter(g=>g.axis===e.axis&&Nt(g.position,e.position)&&g.start>=m-1e-4&&g.end<=x+1e-4)}const{topCells:o,bottomCells:l}=_h(t,e);if(o.length===0||l.length===0)return[];const c=Math.min(...[...o,...l].map(d=>d.x)),u=Math.max(...[...o,...l].map(d=>d.x+d.width));return r.filter(d=>d.axis===e.axis&&Nt(d.position,e.position)&&d.start>=c-1e-4&&d.end<=u+1e-4)}function ps(i,e,t,r=.08){const o=wn(i)??En(1,1),l=hn(r,.02,.45);if(e.axis==="vertical"){const{leftCells:x,rightCells:g}=vh(o,e);if(x.length===0||g.length===0)return o;const M=Math.max(...x.map(y=>y.x+l)),S=Math.min(...g.map(y=>y.x+y.width-l)),E=we(hn(t,M,S));return o.map(y=>{if(x.some(v=>v.id===y.id))return{...y,width:we(E-y.x)};if(g.some(v=>v.id===y.id)){const v=we(y.x+y.width);return{...y,x:E,width:we(v-E)}}return y})}const{topCells:c,bottomCells:u}=_h(o,e);if(c.length===0||u.length===0)return o;const d=Math.max(...c.map(x=>x.y+l)),h=Math.min(...u.map(x=>x.y+x.height-l)),m=we(hn(t,d,h));return o.map(x=>{if(c.some(g=>g.id===x.id))return{...x,height:we(m-x.y)};if(u.some(g=>g.id===x.id)){const g=we(x.y+x.height);return{...x,y:m,height:we(g-m)}}return x})}function rc(i,e,t,r){const o=Ko(i);if(t==="vertical"){const c=r==="end"?e.x+e.width:e.x;return o.find(u=>u.axis===t&&Nt(u.position,c)&&Nt(u.start,e.y)&&Nt(u.end,e.y+e.height))}const l=r==="end"?e.y+e.height:e.y;return o.find(c=>c.axis===t&&Nt(c.position,l)&&Nt(c.start,e.x)&&Nt(c.end,e.x+e.width))}function X0(i,e,t,r=.08){let o=wn(i)??En(1,1);if(!o.find(c=>c.id===e))return o;if(Number.isFinite(t.width)){const c=o.find(u=>u.id===e);if(c){const u=rc(o,c,"vertical","end"),d=rc(o,c,"vertical","start"),h=hn(t.width??c.width,r,1);u?o=ps(o,u,c.x+h,r):d&&(o=ps(o,d,c.x+c.width-h,r))}}if(Number.isFinite(t.height)){const c=o.find(u=>u.id===e);if(c){const u=rc(o,c,"horizontal","end"),d=rc(o,c,"horizontal","start"),h=hn(t.height??c.height,r,1);u?o=ps(o,u,c.y+h,r):d&&(o=ps(o,d,c.y+c.height-h,r))}}return o}function hy(i,e){const t=Nt(i.y,e.y)&&Nt(i.height,e.height),r=Nt(i.x,e.x)&&Nt(i.width,e.width),o=Nt(i.x+i.width,e.x)||Nt(e.x+e.width,i.x),l=Nt(i.y+i.height,e.y)||Nt(e.y+e.height,i.y);if(!((!t||!o)&&(!r||!l)))return{...i,x:we(Math.min(i.x,e.x)),y:we(Math.min(i.y,e.y)),width:we(Math.max(i.x+i.width,e.x+e.width)-Math.min(i.x,e.x)),height:we(Math.max(i.y+i.height,e.y+e.height)-Math.min(i.y,e.y))}}function $0(i,e){const t=wn(i)??En(1,1);return[...new Set(e)].map(o=>t.find(l=>l.id===o)).filter(o=>!!o)}function Qc(i,e){const t=$0(i,e);if(t.length<2)return;const r=Math.min(...t.map(h=>h.x)),o=Math.min(...t.map(h=>h.y)),l=Math.max(...t.map(h=>h.x+h.width)),c=Math.max(...t.map(h=>h.y+h.height)),u=we((l-r)*(c-o)),d=we(t.reduce((h,m)=>h+m.width*m.height,0));if(Nt(u,d))return{cells:t,minX:we(r),minY:we(o),maxX:we(l),maxY:we(c),width:we(l-r),height:we(c-o)}}function py(i,e,t,r){const o=$0(i,e);if(o.length===0)return null;const l=Math.min(...o.map(M=>M.x)),c=Math.min(...o.map(M=>M.y)),u=Math.max(...o.map(M=>M.x+M.width)),d=Math.max(...o.map(M=>M.y+M.height)),h=we(u-l),m=we(d-c),x=we(h*m),g=we(o.reduce((M,S)=>M+S.width*S.height,0));return{cellCount:o.length,minX:we(l),minY:we(c),maxX:we(u),maxY:we(d),width:h,height:m,widthMm:we(h*t),depthMm:we(m*r),isRectangle:o.length>=2&&Nt(x,g)}}function Gc(i){return[...new Set(i.map(we))].sort((e,t)=>e-t)}function sc(i,e){return i.findIndex(t=>Nt(t,e))}function my(i,e,t){const r=wn(i)??En(1,1);if(e===t)return!1;const o=r.find(c=>c.id===e),l=r.find(c=>c.id===t);return!!(o&&l&&hy(o,l))}function gy(i,e){return!!Qc(i,e)}function xy(i,e){const t=wn(i)??En(1,1),r=Qc(t,e);if(!r)return t;const o=new Set(r.cells.map(h=>h.id)),l=e.find(h=>o.has(h)),u={...r.cells.find(h=>h.id===l)??r.cells[0],x:r.minX,y:r.minY,width:r.width,height:r.height};let d=!1;return t.flatMap(h=>o.has(h.id)?d?[]:(d=!0,[u]):[h])}function wd(i,e,t){const r=Qc(i,e);return r?Gc(t==="vertical"?r.cells.flatMap(l=>[l.x,l.x+l.width]):r.cells.flatMap(l=>[l.y,l.y+l.height])).length>2:!1}function vy(i,e,t){const r=wn(i)??En(1,1),o=Qc(r,e);if(!o||!wd(r,e,t))return r;const l=new Set(o.cells.map(d=>d.id));if(t==="vertical"){const d=Gc(o.cells.flatMap(m=>[m.x,m.x+m.width])),h=d.length-1;return r.map(m=>{if(!l.has(m.id))return m;const x=sc(d,m.x),g=sc(d,m.x+m.width);if(x<0||g<0)return m;const M=we(o.minX+o.width*x/h),S=we(o.minX+o.width*g/h);return{...m,x:M,width:we(S-M)}})}const c=Gc(o.cells.flatMap(d=>[d.y,d.y+d.height])),u=c.length-1;return r.map(d=>{if(!l.has(d.id))return d;const h=sc(c,d.y),m=sc(c,d.y+d.height);if(h<0||m<0)return d;const x=we(o.minY+o.height*h/u),g=we(o.minY+o.height*m/u);return{...d,y:x,height:we(g-x)}})}const _y={width:100,depth:100,height:20,wallThickness:2,floorThickness:2,cornerRadius:4,columns:1,rows:1,kind:"tray",includeLid:!1,lidHeight:8,lidClearance:.6,stackingLip:!1,stackingLipHeight:3,stackingClearance:.6,stackingGrooveClearance:.6,stackingFootMode:"relief",stackingShortFootLength:18,stackPreviewCount:2,pickupFillet:!1,pickupFilletRadius:16,pickupFilletHeight:5,pickupFilletFitClearance:.4,pickupFilletMeshQuality:"high",pickupFilletProfileType:"smooth",pickupFilletProfileStrength:.5,pickupFilletFlatCenterRatio:.4,pickupFilletCellModes:{},pickupFilletCellShapes:{}},kt=(i,e,t)=>Math.min(t,Math.max(e,i)),ht=i=>Math.round(i*10)/10,yy=i=>Math.round(i*1e4)/1e4,My=["none","integrated","removable"],Sy=["flat","scoop","smooth","steep","straight"],Ey={shallow:{height:.25,radius:.22,profileType:"smooth",profileStrength:.5,flatCenterRatio:.4},standard:{height:.35,radius:.3,profileType:"smooth",profileStrength:.5,flatCenterRatio:.4},deep:{height:.5,radius:.38,profileType:"smooth",profileStrength:.5,flatCenterRatio:.4},smallParts:{height:.28,radius:.2,profileType:"flat",profileStrength:.4,flatCenterRatio:.6},fingerScoop:{height:.55,radius:.42,profileType:"steep",profileStrength:.8,flatCenterRatio:.2},flatBottom:{height:.3,radius:.28,profileType:"flat",profileStrength:.3,flatCenterRatio:.7},removableStable:{height:.32,radius:.26,fitClearance:.5,profileType:"smooth",profileStrength:.4,flatCenterRatio:.5}};function pg(i){return Sy.includes(i??"smooth")?i??"smooth":"smooth"}function Y0(i,e="smooth",t=.5,r=0){const o=kt(Number.isFinite(t)?t:.5,0,1),l=kt(Number.isFinite(r)?r:0,0,.8),c=i<=l?0:kt((i-l)/Math.max(.001,1-l),0,1),u=c*c*(3-2*c),d=1.4+o*2.2;switch(e){case"flat":return Math.pow(u,1.2+o*1.4);case"scoop":return Math.pow(c,d);case"steep":return 1-Math.pow(1-c,d);case"straight":return c;case"smooth":default:{const h=1-Math.cos(c*Math.PI/2);return o>=.5?1-Math.pow(1-h,1+(o-.5)*1.8):Math.pow(h,1+(.5-o)*1.8)}}}function mg(i,e){if(!i)return;const t=Array.from({length:e},(o,l)=>Math.max(.1,Number.isFinite(i[l])?i[l]:1)),r=t.reduce((o,l)=>o+l,0);return t.map(o=>yy(o/r))}function ln(i){const e=ht(kt(i.width,40,240)),t=ht(kt(i.depth,40,240)),r=ht(kt(i.height,8,120)),o=ht(kt(i.wallThickness,1.2,8)),l=ht(kt(i.floorThickness,1.2,8)),c=ht(kt(i.cornerRadius,0,18)),u=ht(kt(i.lidHeight??8,4,24)),d=ht(kt(i.lidClearance??.6,.2,2)),h=ht(kt(i.stackingLipHeight??3,1,8)),m=ht(kt(i.stackingClearance??.6,.2,2)),x=ht(kt(i.stackingGrooveClearance??.6,.2,3)),g=ht(kt(i.stackingShortFootLength??18,4,80)),M=Math.round(kt(i.stackPreviewCount??2,2,6)),S=ht(kt(i.pickupFilletRadius??16,2,40)),E=ht(kt(i.pickupFilletHeight??5,1,Math.max(1,r-l))),y=ht(kt(i.pickupFilletFitClearance??.4,0,2)),v="high",N=pg(i.pickupFilletProfileType),L=ht(kt(i.pickupFilletProfileStrength??.5,0,1)),A=ht(kt(i.pickupFilletFlatCenterRatio??.4,0,.8)),O=Object.fromEntries(Object.entries(i.pickupFilletCellModes??{}).filter(([,b])=>My.includes(b))),I=Object.fromEntries(Object.entries(i.pickupFilletCellShapes??{}).map(([b,R])=>{const B={};return Number.isFinite(R.radius)&&(B.radius=ht(kt(R.radius??S,2,40))),Number.isFinite(R.height)&&(B.height=ht(kt(R.height??E,1,Math.max(1,r-l)))),Number.isFinite(R.fitClearance)&&(B.fitClearance=ht(kt(R.fitClearance??y,0,2))),R.profileType!==void 0&&(B.profileType=pg(R.profileType)),Number.isFinite(R.profileStrength)&&(B.profileStrength=ht(kt(R.profileStrength??L,0,1))),Number.isFinite(R.flatCenterRatio)&&(B.flatCenterRatio=ht(kt(R.flatCenterRatio??A,0,.8))),[b,B]}).filter(([,b])=>Object.keys(b).length>0)),F={width:e,depth:t,height:r,wallThickness:o,floorThickness:l,cornerRadius:c,columns:Math.round(kt(i.columns,1,8)),rows:Math.round(kt(i.rows,1,8)),kind:i.kind==="box"?"box":"tray",includeLid:!!i.includeLid,lidHeight:u,lidClearance:d,stackingLip:!!i.stackingLip,stackingLipHeight:h,stackingClearance:m,stackingGrooveClearance:x,stackingFootMode:i.stackingFootMode==="short"?"short":"relief",stackingShortFootLength:g,stackPreviewCount:M,pickupFillet:!!i.pickupFillet,pickupFilletRadius:S,pickupFilletHeight:E,pickupFilletFitClearance:y,pickupFilletMeshQuality:v,pickupFilletProfileType:N,pickupFilletProfileStrength:L,pickupFilletFlatCenterRatio:A,pickupFilletCellModes:O,pickupFilletCellShapes:I},G=wn(i.layout);return{...F,columnRatios:mg(i.columnRatios,F.columns),rowRatios:mg(i.rowRatios,F.rows),...G?{layout:G}:{}}}function yh(i){var o;const e=ln(i),t=[e.width,e.depth,e.height].map(l=>String(Math.round(l))),r=(o=e.layout)!=null&&o.length?`${e.layout.length}cells`:`${e.columns}x${e.rows}`;return`hako-forge-${t.join("x")}-${r}.stl`}function Jc(i,e){var o;const t=ln(i),r=((o=t.pickupFilletCellShapes)==null?void 0:o[e])??{};return{radius:r.radius??t.pickupFilletRadius??16,height:r.height??t.pickupFilletHeight??5,fitClearance:r.fitClearance??t.pickupFilletFitClearance??.4,profileType:r.profileType??t.pickupFilletProfileType??"smooth",profileStrength:r.profileStrength??t.pickupFilletProfileStrength??.5,flatCenterRatio:r.flatCenterRatio??t.pickupFilletFlatCenterRatio??.4}}function Mh(i){var t;const e=ln(i);return(t=e.layout)!=null&&t.length?e.layout:En(e.columns,e.rows)}function Sh(i,e){return i.id||`cell-${e+1}`}function wy(i,e,t){var o,l;const r=ln(i);return((o=r.pickupFilletCellModes)==null?void 0:o[e])??((l=r.pickupFilletCellModes)==null?void 0:l[`cell-${t+1}`])??"none"}function Z0(i,e){const t=ln(i),o=Mh(t).find((u,d)=>Sh(u,d)===e),l=Math.max(1,t.width-t.wallThickness*2),c=Math.max(1,t.depth-t.wallThickness*2);return o?ht(Math.min(o.width*l,o.height*c)):Math.min(l,c)}function gg(i,e,t){var d;const r=ln(i),o=Z0(r,e),l=Math.max(1,r.height-r.floorThickness),c={radius:ht(kt(o*.3,4,24)),height:ht(kt(l*.35,3,12)),fitClearance:(((d=r.pickupFilletCellModes)==null?void 0:d[e])??"none")==="removable"?.4:r.pickupFilletFitClearance??.4,profileType:r.pickupFilletProfileType??"smooth",profileStrength:r.pickupFilletProfileStrength??.5,flatCenterRatio:r.pickupFilletFlatCenterRatio??.4};if(t==="standard")return c;const u=Ey[t];return{radius:ht(kt(o*u.radius,4,24)),height:ht(kt(l*u.height,3,12)),fitClearance:u.fitClearance??c.fitClearance,profileType:u.profileType,profileStrength:u.profileStrength,flatCenterRatio:u.flatCenterRatio}}function q0(i,e){const t=ln(i);if(!t.pickupFillet)return[];const o=Mh(t).findIndex((g,M)=>Sh(g,M)===e);if(o<0)return[];const l=wy(t,e,o);if(l==="none")return[];const c=Jc(t,e),u=Z0(t,e),d=Math.max(1,t.height-t.floorThickness),h=Math.min(1.2,Math.max(.4,c.height*.2)),m=Math.max(0,(u-.5)/2),x=[];return c.radius>u*.42&&x.push({id:"radius",message:"半径が区画に対して大きめです"}),c.height>d*.78&&x.push({id:"height",message:"高さが壁の上面に近すぎます"}),l==="removable"&&(h<.8&&x.push({id:"removable-thickness",message:"取り外し式パーツの底が薄めです"}),c.fitClearance>m&&x.push({id:"clearance-oversized",message:"クリアランスが区画に対して大きすぎます"}),c.fitClearance<.2&&x.push({id:"clearance-tight",message:"クリアランスが小さめです"}),c.fitClearance>1&&x.push({id:"clearance-loose",message:"クリアランスが大きめでガタつく可能性があります"})),x}function Ty(i,e){var u;const t=ln(i),r=Jc(t,e),l=Mh(t).find((d,h)=>Sh(d,h)===e),c=((u=t.pickupFilletCellModes)==null?void 0:u[e])??"integrated";return{...t,layout:l?[l]:t.layout,pickupFilletRadius:r.radius,pickupFilletHeight:r.height,pickupFilletFitClearance:r.fitClearance,pickupFilletProfileType:r.profileType,pickupFilletProfileStrength:r.profileStrength,pickupFilletFlatCenterRatio:r.flatCenterRatio,pickupFilletCellModes:{[e]:c==="none"?"integrated":c}}}function Ba(i){return yh(i).replace(/\.stl$/,"-body.stl")}function Eh(i){return yh(i).replace(/\.stl$/,"-removable-fillets.stl")}function wh(i){return yh(i).replace(/\.stl$/,"-project.json")}function Cy(i){return!!(i.pickupFillet&&Object.values(i.pickupFilletCellModes??{}).some(e=>e==="removable"))}function Ay(i){var l;const e=ln(i),t=(l=e.layout)!=null&&l.length?e.layout:En(e.columns,e.rows),r=Math.max(1,e.width-e.wallThickness*2),o=Math.max(1,e.depth-e.wallThickness*2);return t.map((c,u)=>{var m,x;const d=c.id||`cell-${u+1}`,h=((m=e.pickupFilletCellModes)==null?void 0:m[d])??((x=e.pickupFilletCellModes)==null?void 0:x[`cell-${u+1}`])??"none";return{id:d,mode:h,spanMm:Math.min(c.width*r,c.height*o)}})}function Th(i){const e=ln(i),t=Ay(e).filter(x=>x.mode!=="none"),r=t.filter(x=>x.mode==="removable").length,o=t.filter(x=>x.mode==="integrated").length,l=Math.min(e.width-e.wallThickness*2,e.depth-e.wallThickness*2),c=t.length>0?t.reduce((x,g)=>Math.min(x,g.spanMm),Number.POSITIVE_INFINITY):l,u=Math.max(1,e.height-e.floorThickness),d=e.pickupFilletRadius/Math.max(1,c),h=e.pickupFilletHeight/u,m=ht(Math.min(1.2,Math.max(.4,e.pickupFilletHeight*.2)));return{selectedCellCount:t.length,removableCellCount:r,integratedCellCount:o,smallestCellSpanMm:ht(c),radiusRatio:ht(d),heightRatio:ht(h),baseThicknessMm:m,radiusState:t.length===0?"balanced":d>.42?"large":d<.18?"small":"balanced",heightState:t.length===0?"balanced":h>.78?"high":h<.22?"low":"balanced",clearanceState:r===0?"unused":e.pickupFilletFitClearance<.2?"tight":e.pickupFilletFitClearance>1?"loose":"balanced"}}function Ry(i){const e=ln(i),t=Th(e),r=Math.max(1,e.height-e.floorThickness);return{pickupFilletRadius:ht(kt(t.smallestCellSpanMm*.3,4,24)),pickupFilletHeight:ht(kt(r*.35,3,12)),pickupFilletFitClearance:t.removableCellCount>0?.4:e.pickupFilletFitClearance??.4}}function xg(i,e,t,r,o){return Array.from({length:9},(l,c)=>{const u=c/8,d=Y0(u,t,r,o);return{x:ht(i*u),y:ht(e*d)}})}function by(i){const e=ln(i),t=Th(e),r=ht(e.pickupFilletRadius??16),o=ht(e.pickupFilletHeight??5),l=e.pickupFilletProfileType??"smooth",c=ht(e.pickupFilletProfileStrength??.5),u=ht(e.pickupFilletFlatCenterRatio??.4),d=ht(Math.max(1,e.height-e.floorThickness)),h=xg(r,o,l,c,u),m=Ry(e),x=ht(m.pickupFilletRadius),g=ht(m.pickupFilletHeight),M=xg(x,g,"smooth",.5,.4);return{points:h,recommendedPoints:M,radiusMm:r,heightMm:o,clearanceMm:ht(e.pickupFilletFitClearance??.4),recommendedRadiusMm:x,recommendedHeightMm:g,wallHeightMm:d,baseThicknessMm:t.baseThicknessMm,selectedCellCount:t.selectedCellCount,removableCellCount:t.removableCellCount,maxProfileWidthMm:t.smallestCellSpanMm,profileType:l,profileStrength:c,flatCenterRatio:u}}const Py=[{key:"lidHeight",label:"フタの高さ",min:4,max:24,step:1,unit:"mm",disabledWhen:"includeLid"},{key:"lidClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"includeLid"}],Ly=[{key:"stackingLipHeight",label:"高さ",min:1,max:8,step:.5,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingGrooveClearance",label:"溝クリアランス",min:.2,max:3,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingShortFootLength",label:"短脚長さ",min:4,max:80,step:1,unit:"mm",disabledWhen:"stackingLip",showWhenMode:"short"},{key:"stackPreviewCount",label:"プレビュー段数",min:2,max:6,step:1,unit:"段",disabledWhen:"stackingLip"}];function K0({className:i="",controls:e,settings:t,onChange:r}){return w.jsx("div",{className:`box-option-grid ${i}`.trim(),children:e.map(o=>{if(o.showWhenMode&&t.stackingFootMode!==o.showWhenMode)return null;const l=t[o.key]??o.min,c=o.disabledWhen?!!t[o.disabledWhen]:!0,u=d=>{Number.isFinite(d)&&r(o.key,d)};return w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:o.label}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${o.label}の数値`,className:"number-control",disabled:!c,type:"number",min:o.min,max:o.max,step:o.step,value:l,onChange:d=>u(Number(d.target.value))}),w.jsx("span",{className:"range-unit",children:o.unit})]})]}),w.jsx("input",{disabled:!c,type:"range",min:o.min,max:o.max,step:o.step,value:l,onChange:d=>u(Number(d.target.value))})]},o.key)})})}function Dy({settings:i,onChange:e}){return w.jsxs("section",{className:"box-options","aria-label":"フタ設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.includeLid,type:"checkbox",onChange:t=>e("includeLid",t.target.checked)}),w.jsx("span",{children:"フタ"})]})}),w.jsx(K0,{className:"box-option-grid-single",controls:Py,settings:i,onChange:e})]})}function Ny({settings:i,onChange:e}){const t=i.stackingFootMode??"relief";return w.jsxs("section",{className:"box-options","aria-label":"スタック脚設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.stackingLip,type:"checkbox",onChange:r=>e("stackingLip",r.target.checked)}),w.jsx("span",{children:"スタック脚"})]})}),w.jsxs("div",{"aria-label":"スタック脚の方式",className:"segmented stack-foot-mode",role:"group",children:[w.jsx("button",{"aria-pressed":t==="relief",className:t==="relief"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","relief"),children:"逃げ加工"}),w.jsx("button",{"aria-pressed":t==="short",className:t==="short"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","short"),children:"外周短脚"})]}),w.jsx(K0,{className:"box-option-grid-single",controls:Ly,settings:i,onChange:e})]})}const Iy={none:"なし",integrated:"本体一体",removable:"取り外し"},oc={smallParts:"小物向け",fingerScoop:"指入れ",flatBottom:"底面広め",removableStable:"取外し安定",shallow:"浅め",standard:"標準",deep:"深め"},Fy=["smallParts","shallow","standard","deep"],Uy=["fingerScoop","flatBottom","removableStable"],Q0={flat:"フラット",scoop:"すくい深め",smooth:"なめらか",steep:"壁側強め",straight:"直線"},ky=["smooth","scoop","steep","straight","flat"],vg={none:"なし",integrated:"一体",removable:"取外し"},Oy=["none","integrated","removable"],_o=i=>Number.isInteger(i)?String(i):i.toFixed(1);function zy({detailed:i,onToggleDetailed:e,settings:t}){const r=by(t),o=220,l=116,c=18,u=Math.max(0,Math.round((r.maxProfileWidthMm-r.radiusMm*2)*10)/10),d=(o-c*2)/Math.max(r.radiusMm,r.recommendedRadiusMm,r.maxProfileWidthMm*.45,1),h=(l-c*2)/Math.max(r.wallHeightMm,r.heightMm,r.recommendedHeightMm,1),m=l-c,x=c+r.radiusMm*d,g=r.points.map((S,E)=>{const y=c+S.x*d,v=m-S.y*h;return`${E===0?"M":"L"} ${y.toFixed(1)} ${v.toFixed(1)}`}).join(" "),M=r.recommendedPoints.map((S,E)=>{const y=c+S.x*d,v=m-S.y*h;return`${E===0?"M":"L"} ${y.toFixed(1)} ${v.toFixed(1)}`}).join(" ");return w.jsxs("div",{className:"fillet-profile-preview","aria-label":"フィレット断面プレビュー",children:[w.jsxs("div",{className:"fillet-profile-header",children:[w.jsx("strong",{children:"断面プレビュー"}),w.jsx("span",{children:r.selectedCellCount>0?`${r.selectedCellCount}区画に適用`:"区画未選択"}),w.jsx("button",{className:"fillet-detail-toggle",type:"button",onClick:e,children:i?"簡易表示":"詳細表示"})]}),w.jsxs("svg",{className:"fillet-profile-svg",viewBox:`0 0 ${o} ${l}`,role:"img","aria-label":"床から壁へ立ち上がるフィレット断面",children:[w.jsx("path",{d:`M ${c} ${m} H ${o-c}`,className:"fillet-profile-floor"}),w.jsx("path",{d:`M ${x.toFixed(1)} ${m} V ${c}`,className:"fillet-profile-wall"}),w.jsx("path",{d:`${g} L ${x.toFixed(1)} ${m} Z`,className:"fillet-profile-area"}),w.jsx("path",{d:M,className:"fillet-profile-recommended-curve"}),w.jsx("path",{d:g,className:"fillet-profile-curve"})]}),w.jsxs("div",{className:"fillet-profile-metrics",children:[w.jsxs("span",{children:["断面 ",Q0[r.profileType]]}),w.jsxs("span",{children:["推奨 半径 ",_o(r.recommendedRadiusMm)," mm"]}),w.jsxs("span",{children:["推奨 高さ ",_o(r.recommendedHeightMm)," mm"]}),w.jsxs("span",{children:["半径 ",r.radiusMm," mm"]}),w.jsxs("span",{children:["高さ ",r.heightMm," mm"]}),r.removableCellCount>0?w.jsxs("span",{children:["すき間 ",r.clearanceMm," mm"]}):w.jsx("span",{children:"一体出力"})]}),i?w.jsxs("div",{className:"fillet-profile-detail","aria-label":"選択区画の実寸断面",children:[w.jsxs("span",{children:["区画最小幅 ",_o(r.maxProfileWidthMm)," mm"]}),w.jsxs("span",{children:["平坦部 ",_o(u)," mm"]}),w.jsxs("span",{children:["壁高 ",_o(r.wallHeightMm)," mm"]}),w.jsxs("span",{children:["底板 ",_o(r.baseThicknessMm)," mm"]})]}):null]})}function By({flatCenterRatio:i,profileType:e,profileTypeLabel:t,strengthLabel:r,flatCenterLabel:o,profileStrength:l,onFlatCenterRatioChange:c,onProfileStrengthChange:u,onProfileTypeChange:d}){const h=(m,x)=>{Number.isFinite(x)&&m(x)};return w.jsxs("div",{className:"box-option-grid box-option-grid-single fillet-profile-controls",children:[w.jsx("label",{className:"range-control",children:w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"断面形状"}),w.jsx("span",{className:"range-value-field",children:w.jsx("select",{"aria-label":t,value:e,onChange:m=>d(m.target.value),children:ky.map(m=>w.jsx("option",{value:m,children:Q0[m]},m))})})]})}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"効きの強さ"}),w.jsx("span",{className:"range-value-field",children:w.jsx("input",{"aria-label":r,className:"number-control",type:"number",min:0,max:1,step:.1,value:l,onChange:m=>h(u,Number(m.target.value))})})]}),w.jsx("input",{type:"range",min:0,max:1,step:.1,value:l,onChange:m=>h(u,Number(m.target.value))})]}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"中央フラット"}),w.jsx("span",{className:"range-value-field",children:w.jsx("input",{"aria-label":o,className:"number-control",type:"number",min:0,max:.8,step:.1,value:i,onChange:m=>h(c,Number(m.target.value))})})]}),w.jsx("input",{type:"range",min:0,max:.8,step:.1,value:i,onChange:m=>h(c,Number(m.target.value))})]})]})}function fs(i,e){return i.id||`cell-${e+1}`}function J0(i){return!!(i&&(Number.isFinite(i.radius)||Number.isFinite(i.height)||Number.isFinite(i.fitClearance)||i.profileType!==void 0||Number.isFinite(i.profileStrength)||Number.isFinite(i.flatCenterRatio)))}function Hy({activeMapMode:i,cells:e,editingCellId:t,modes:r,shapes:o,warnings:l,onApplyCellMode:c,onMapModeChange:u}){return w.jsxs("div",{className:"fillet-cell-map-card",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"区画マップ"}),w.jsx("span",{children:"モードを選んで区画へ適用"})]}),w.jsx("div",{className:"segmented fillet-map-mode-actions",role:"group","aria-label":"区画マップのフィレットモード",children:Oy.map(d=>w.jsx("button",{"aria-pressed":i===d,className:i===d?"selected":"",type:"button",onClick:()=>u(d),children:vg[d]},d))}),w.jsx("div",{className:"fillet-cell-map","aria-label":"フィレット区画マップ",children:e.map((d,h)=>{const m=fs(d,h),x=r[m]??"none",g=m===t,M=J0(o[m]),S=(l[m]??[]).length>0;return w.jsxs("button",{"aria-label":`${m}を編集`,"aria-pressed":g,className:["fillet-cell-map-cell",x,g?"selected":"",M?"custom":"",S?"warning":""].filter(Boolean).join(" "),style:{left:`${d.x*100}%`,top:`${d.y*100}%`,width:`${d.width*100}%`,height:`${d.height*100}%`},type:"button",onClick:()=>c(m),children:[w.jsx("span",{children:m}),w.jsx("small",{children:vg[x]}),M?w.jsx("small",{children:"個別"}):null,S?w.jsx("small",{className:"warning",children:"警告"}):null]},m)})})]})}function Vy({settings:i,onChange:e}){var ee;const[t,r]=Pe.useState(!1),[o,l]=Pe.useState("integrated"),[c,u]=Pe.useState({}),d=(ee=i.layout)!=null&&ee.length?wn(i.layout)??[]:En(i.columns,i.rows),h=d[0]?fs(d[0],0):"cell-1",[m,x]=Pe.useState(h),g=d.some((D,ne)=>fs(D,ne)===m)?m:h,M=i.pickupFilletCellModes??{},S={...M,...c},E=i.pickupFilletCellShapes??{},y=Jc(i,g),v=S[g]??"none",N=J0(E[g]),L=Object.fromEntries(d.map((D,ne)=>{const te=fs(D,ne);return[te,q0(i,te)]})),A=L[g]??[],O=Ty(i,g),I=(D,ne)=>{u(te=>({...te,[D]:ne})),e("pickupFilletCellModes",{...M,[D]:ne})},F=D=>{x(D),I(D,o)},G=D=>{u(Object.fromEntries(d.map((ne,te)=>[fs(ne,te),D]))),e("pickupFilletCellModes",Object.fromEntries(d.map((ne,te)=>[fs(ne,te),D])))},b=(D,ne)=>{typeof ne=="number"&&!Number.isFinite(ne)||ne!==void 0&&e("pickupFilletCellShapes",{...E,[g]:{...E[g]??{},[D]:ne}})},R=()=>{const{[g]:D,...ne}=E;e("pickupFilletCellShapes",ne)},B=D=>{e("pickupFilletCellShapes",{...E,[g]:D})},he=D=>{B(gg(i,g,D))},V=()=>{B(gg(i,g,"standard"))},Y=()=>{e("pickupFilletCellShapes",{...Object.fromEntries(d.map((D,ne)=>[fs(D,ne),y]))})},Q=()=>{e("pickupFilletCellShapes",{...E,...Object.fromEntries(d.map((D,ne)=>fs(D,ne)).filter(D=>(S[D]??"none")===v).map(D=>[D,y]))})},W=()=>{e("pickupFilletCellShapes",{})};return w.jsxs("section",{className:"box-options","aria-label":"すくい上げフィレット設定",children:[w.jsx("div",{className:"toggle-row",children:w.jsxs("label",{children:[w.jsx("input",{checked:!!i.pickupFillet,type:"checkbox",onChange:D=>e("pickupFillet",D.target.checked)}),w.jsx("span",{children:"すくい上げフィレット"})]})}),i.pickupFillet?w.jsxs(w.Fragment,{children:[w.jsx(Hy,{activeMapMode:o,cells:d,editingCellId:g,modes:S,shapes:E,warnings:L,onApplyCellMode:F,onMapModeChange:l}),w.jsx(zy,{detailed:t,settings:O,onToggleDetailed:()=>r(D=>!D)}),w.jsxs("div",{className:"fillet-cell-shape-editor","aria-label":"区画別フィレット形状",children:[w.jsxs("div",{className:"fillet-editor-group fillet-cell-status",role:"group","aria-label":"選択中区画の状態",children:[w.jsxs("div",{className:"fillet-editor-group-header",children:[w.jsx("strong",{children:"選択中区画の状態"}),w.jsx("span",{children:g})]}),w.jsxs("div",{className:"fillet-cell-status-tags",children:[w.jsx("span",{children:g}),w.jsx("span",{children:Iy[v]}),w.jsx("span",{children:N?"個別設定あり":"標準形状"})]}),v==="none"?w.jsx("p",{children:"フィレットなしの区画です。形状値は保持されますが、出力には使われません。"}):null]}),w.jsxs("div",{className:"fillet-editor-group",role:"group","aria-label":"基本プリセット",children:[w.jsxs("div",{className:"fillet-editor-group-header",children:[w.jsx("strong",{children:"基本プリセット"}),w.jsx("span",{children:"浅さと扱いやすさ"})]}),w.jsx("div",{className:"fillet-cell-preset-actions",children:Fy.map(D=>w.jsx("button",{"aria-label":`${g}に${oc[D]}を適用`,type:"button",onClick:()=>he(D),children:oc[D]},D))})]}),w.jsxs("div",{className:"fillet-editor-group",role:"group","aria-label":"用途プリセット",children:[w.jsxs("div",{className:"fillet-editor-group-header",children:[w.jsx("strong",{children:"用途プリセット"}),w.jsx("span",{children:"取り出し方に合わせる"})]}),w.jsx("div",{className:"fillet-cell-preset-actions fillet-cell-purpose-actions",children:Uy.map(D=>w.jsx("button",{"aria-label":`${g}に${oc[D]}を適用`,type:"button",onClick:()=>he(D),children:oc[D]},D))})]}),w.jsxs("div",{className:"fillet-editor-group",role:"group","aria-label":"詳細調整",children:[w.jsxs("div",{className:"fillet-editor-group-header",children:[w.jsx("strong",{children:"詳細調整"}),w.jsx("span",{children:"選択中区画だけに反映"})]}),A.length>0?w.jsxs("div",{className:"fillet-cell-warning",role:"alert",children:[w.jsx("strong",{children:g}),w.jsx("span",{children:A.map(D=>D.message).join(" / ")})]}):null,w.jsxs("div",{className:"box-option-grid box-option-grid-single",children:[w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"曲線半径"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${g}の曲線半径`,className:"number-control",type:"number",min:2,max:40,step:1,value:y.radius,onChange:D=>b("radius",Number(D.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:2,max:40,step:1,value:y.radius,onChange:D=>b("radius",Number(D.target.value))})]}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"立ち上がり高さ"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${g}の立ち上がり高さ`,className:"number-control",type:"number",min:1,max:Math.max(1,i.height-i.floorThickness),step:1,value:y.height,onChange:D=>b("height",Number(D.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:1,max:Math.max(1,i.height-i.floorThickness),step:1,value:y.height,onChange:D=>b("height",Number(D.target.value))})]}),w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:"取付クリアランス"}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${g}の取付クリアランス`,className:"number-control",type:"number",min:0,max:2,step:.1,value:y.fitClearance,onChange:D=>b("fitClearance",Number(D.target.value))}),w.jsx("span",{className:"range-unit",children:"mm"})]})]}),w.jsx("input",{type:"range",min:0,max:2,step:.1,value:y.fitClearance,onChange:D=>b("fitClearance",Number(D.target.value))})]})]}),w.jsx(By,{flatCenterRatio:y.flatCenterRatio,profileType:y.profileType,profileStrength:y.profileStrength,profileTypeLabel:`${g} profile`,strengthLabel:`${g} profile strength value`,flatCenterLabel:`${g} flat center value`,onFlatCenterRatioChange:D=>b("flatCenterRatio",D),onProfileStrengthChange:D=>b("profileStrength",D),onProfileTypeChange:D=>b("profileType",D)})]}),w.jsxs("div",{className:"fillet-editor-group",role:"group","aria-label":"反映操作",children:[w.jsxs("div",{className:"fillet-editor-group-header",children:[w.jsx("strong",{children:"反映操作"}),w.jsx("span",{children:"補正とコピー"})]}),w.jsxs("div",{className:"fillet-cell-bulk-actions",children:[w.jsx("button",{"aria-label":"この区画を推奨値へ",type:"button",onClick:V,children:"この区画を推奨値へ"}),w.jsx("button",{className:"secondary-action",disabled:!N,type:"button",onClick:R,children:"個別設定を解除"}),w.jsx("button",{type:"button",onClick:Y,children:"他区画へコピー"}),w.jsx("button",{"aria-label":`${g}の設定を同じモードの区画へ適用`,type:"button",onClick:Q,children:"同じモードへ適用"}),w.jsx("button",{type:"button",onClick:W,children:"すべての個別設定を解除"})]})]})]}),w.jsxs("div",{className:"fillet-bulk-card","aria-label":"フィレット一括適用",children:[w.jsxs("div",{className:"fillet-preset-header",children:[w.jsx("strong",{children:"一括適用"}),w.jsxs("span",{children:[d.length,"区画"]})]}),w.jsxs("div",{className:"fillet-bulk-actions",children:[w.jsx("button",{type:"button",onClick:()=>G("integrated"),children:"全区画を本体一体"}),w.jsx("button",{type:"button",onClick:()=>G("removable"),children:"全区画を取り外し"}),w.jsx("button",{type:"button",onClick:()=>G("none"),children:"全区画を解除"})]})]})]}):null]})}function eu(i){return{...i,canUndo:i.past.length>0,canRedo:i.future.length>0}}function _g(i){return eu({past:[],current:i,future:[]})}function yg(i,e){return eu({past:[...i.past,i.current],current:e,future:[]})}function Gy(i){const e=i.past.at(-1);return e?eu({past:i.past.slice(0,-1),current:e,future:[i.current,...i.future]}):i}function Wy(i){const e=i.future[0];return e?eu({past:[...i.past,i.current],current:e,future:i.future.slice(1)}):i}const is=(i,e)=>Math.abs(i-e)<1e-4;function jy(i,e){return[...i].sort((t,r)=>t.area-r.area).find(t=>e.x>=t.x&&e.x<=t.x+t.width&&e.y>=t.y&&e.y<=t.y+t.height)}function Mg(i){return i.ctrlKey?i.currentSelection.includes(i.targetCellId)?i.currentSelection.filter(e=>e!==i.targetCellId):[...i.currentSelection,i.targetCellId]:i.shiftKey&&i.currentSelection[0]?[i.currentSelection[0],i.targetCellId]:i.dragStartCellId&&i.dragStartCellId!==i.targetCellId?[i.dragStartCellId,i.targetCellId]:[i.targetCellId]}function Xy(i,e){const t=Math.min(e.start.x,e.end.x),r=Math.max(e.start.x,e.end.x),o=Math.min(e.start.y,e.end.y),l=Math.max(e.start.y,e.end.y);return i.filter(c=>Math.min(c.x+c.width,r)-Math.max(c.x,t)>0&&Math.min(c.y+c.height,l)-Math.max(c.y,o)>0).map(c=>c.id)}function $y(i,e){if(is(i.y,e.y)&&is(i.height,e.height)){if(is(i.x+i.width,e.x))return"right";if(is(e.x+e.width,i.x))return"left"}if(is(i.x,e.x)&&is(i.width,e.width)){if(is(i.y+i.height,e.y))return"down";if(is(e.y+e.height,i.y))return"up"}}const Sg=["left","right","up","down"];function Yy(i,e){const t=i.find(r=>r.id===e);return t?i.filter(r=>r.id!==e).map(r=>({direction:$y(t,r),cellId:r.id})).filter(r=>!!r.direction&&my(i,e,r.cellId)).sort((r,o)=>Sg.indexOf(r.direction)-Sg.indexOf(o.direction)):[]}function Zy(i){if(i.shiftKey){if(i.key==="ArrowLeft")return"left";if(i.key==="ArrowRight")return"right";if(i.key==="ArrowUp")return"up";if(i.key==="ArrowDown")return"down"}}function tu(i,e){const t=ln(i),r=!!t.stackingLip,o=t.stackPreviewCount??2,l=r?Math.min(6,Math.max(2,Math.round(o))):1;return{clearanceMm:t.stackingClearance??.6,enabled:r,stackCount:l,stackedHeightMm:t.height*l}}const qy=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4,Ky=i=>Math.round(i*10)/10;function Eg(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function Qy(i){const e=Eg(i.columns,i.columnRatios),t=Eg(i.rows,i.rowRatios),r=[0],o=[0];e.forEach(c=>{r.push(r[r.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let u=0;u<i.columns;u+=1)l.push({id:`stack-cell-${l.length+1}`,x:r[u],y:o[c],width:r[u+1]-r[u],height:o[c+1]-o[c]});return wn(l)??[]}function Jy(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),r=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,r-i.wallThickness*2),c=-t/2,u=t/2,d=-r/2,h=r/2,m=-o/2,x=o/2,g=-l/2,M=l/2;return[{minX:c,maxX:u,minZ:d,maxZ:g},{minX:c,maxX:u,minZ:M,maxZ:h},{minX:c,maxX:m,minZ:g,maxZ:M},{minX:x,maxX:u,minZ:g,maxZ:M}]}function eM(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),r=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-r/2+i.start*r,maxZ:-r/2+i.end*r}}const l=-r/2+i.position*r;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}function Ya(i){var u;const e=ln(i);if(!e.stackingLip)return{enabled:!1,hasInterference:!1,interferingHandles:[],issueCount:0,message:"スタック段差は無効です。",recommendedReliefGapMm:0};const t=(u=e.layout)!=null&&u.length?e.layout:Qy(e),r=Ko(t).map(d=>({handle:d,rect:eM(d,e)})),o=Jy(e),l=Ky(e.wallThickness+e.stackingGrooveClearance*2),c=r.reduce((d,h)=>d+o.filter(m=>qy(h.rect,m)).length,0);return{enabled:!0,hasInterference:!1,interferingHandles:[],issueCount:0,message:e.stackingFootMode==="short"?"スタック脚は外周寄りの短い脚で仕切りを避けています。":c>0?"スタック脚は仕切り位置を自動で逃げ加工しています。":"スタック脚は仕切りと干渉していません。",recommendedReliefGapMm:l}}function La({title:i,children:e,className:t="",hideTitle:r=!1}){return w.jsxs("section",{"aria-label":i,className:`layout-tool-section ${t}`.trim(),children:[r?null:w.jsx("div",{className:"layout-tool-section-title",children:w.jsx("h3",{children:i})}),e]})}const rs=i=>Math.round(i*10)/10,wg={none:"なし",integrated:"本体一体",removable:"取り外し"},Wf=["none","integrated","removable"],Bi=i=>JSON.stringify(i.map(e=>[e.id,e.x,e.y,e.width,e.height])),Hi=i=>`${i.axis}:${i.position}:${i.start}:${i.end}`;function yo(i,e,t,r,o,l){const c=Math.min(l,r/2,o/2);i.beginPath(),i.moveTo(e+c,t),i.lineTo(e+r-c,t),i.quadraticCurveTo(e+r,t,e+r,t+c),i.lineTo(e+r,t+o-c),i.quadraticCurveTo(e+r,t+o,e+r-c,t+o),i.lineTo(e+c,t+o),i.quadraticCurveTo(e,t+o,e,t+o-c),i.lineTo(e,t+c),i.quadraticCurveTo(e,t,e+c,t),i.closePath()}function tM({settings:i,onSettingsChange:e,onLayoutChange:t}){var on;const r=Pe.useRef(null),o=Pe.useRef([]),l=Pe.useRef([]),c=Pe.useRef(null),u=Pe.useRef(""),d=Pe.useRef(null),h=Pe.useRef(null),m=Pe.useRef(null),x=Pe.useRef(null),g=Pe.useRef(!1),M=Pe.useRef(!1),S=Pe.useMemo(()=>i.layout??En(i.columns,i.rows),[i.columns,i.layout,i.rows]),E=Pe.useMemo(()=>Ko(S),[S]),[y,v]=Pe.useState(S[0]?[S[0].id]:[]),[N,L]=Pe.useState("vertical"),[A,O]=Pe.useState(2),[I,F]=Pe.useState(.5),[G,b]=Pe.useState(null),[R,B]=Pe.useState(null),[he,V]=Pe.useState(null),[Y,Q]=Pe.useState(null),[W,ee]=Pe.useState(""),[D,ne]=Pe.useState(""),[te,H]=Pe.useState(null),[pe,Ne]=Pe.useState(null),[re,xe]=Pe.useState(null),[Se,Me]=Pe.useState(!1),[be,ze]=Pe.useState(!1),[et,_t]=Pe.useState(!1),[wt,jt]=Pe.useState("crosshair"),[$,kn]=Pe.useState(""),[pt,yt]=Pe.useState(!0),[Qe,Gt]=Pe.useState(!1),[Xe,U]=Pe.useState(!1),[C,se]=Pe.useState(()=>_g(S)),ce=y.map(X=>S.find(k=>k.id===X)).filter(X=>!!X),ue=ce[0]??S[0],ve=$?S.find(X=>X.id===$):void 0,Ze=ue?rs(ue.width*i.width):0,Ie=ue?rs(ue.height*i.depth):0,Ve=he??String(Ze),mt=Y??String(Ie),Ae=he===null?Number.NaN:Number(he),We=Y===null?Number.NaN:Number(Y),tt=ce.length===1&&he!==null&&he!==""&&!Pa(S,ue.id,"width",Ae,i.width,i.depth),rt=ce.length===1&&Y!==null&&Y!==""&&!Pa(S,ue.id,"height",We,i.width,i.depth),je=tt||rt,at=ue?N==="vertical"?ue.width*i.width:ue.height*i.depth:0,ct=Vc(I,0,1,at,1),Ot=rs(at*.08),K=rs(at*.92),Fe=rs(ct*at),me=G??String(Fe),_e=G===null?Number.NaN:Number(G),ke=G!==null&&G!==""&&!dg(_e,at),Ue=te?rs(Jl(te,i.width,i.depth)):0,ft=R??String(Ue),Yt=R===null?Number.NaN:Number(R),gn=te!==null&&R!==null&&R!==""&&!hg(S,te,Yt,i.width,i.depth),Et=Pe.useMemo(()=>j0(S),[S]),Wt=Pe.useMemo(()=>Ya({...i,layout:S}),[S,i]),On=Pe.useMemo(()=>new Set(Wt.interferingHandles.map(Hi)),[Wt.interferingHandles]),ii=ce.map(X=>X.id),Zn=ue?((on=i.pickupFilletCellModes)==null?void 0:on[ue.id])??"none":"none",en=Pe.useMemo(()=>ce.length>=2?py(S,ii,i.width,i.depth):null,[S,ce.length,ii,i.depth,i.width]),zn=ce.length>=2&&gy(S,ii),Li=ce.length>=2&&wd(S,ii,"vertical"),Di=ce.length>=2&&wd(S,ii,"horizontal"),di=ue&&ce.length===1?Yy(S,ue.id):[],Yi=te?Hi(te):"",qn=te?iy(S,te,i.width,i.depth):null,Ys=qn!==null&&Math.abs(qn.center-qn.current)>1e-4,ri=Pe.useMemo(()=>{const X=D||W||Yi,k=E.find(ge=>Hi(ge)===X);return k?new Set(dy(S,k).map(Hi)):new Set},[D,W,S,E,Yi]),si=Pe.useMemo(()=>E.find(X=>Hi(X)===W),[W,E]),Zs=Pe.useMemo(()=>pe||D||!si?null:{axis:si.axis,position:si.position,start:si.start,end:si.end,valueMm:Jl(si,i.width,i.depth)},[D,si,pe,i.depth,i.width]),na=Pe.useMemo(()=>pe||D||si||!te?null:{axis:te.axis,position:te.position,start:te.start,end:te.end,valueMm:Jl(te,i.width,i.depth)},[D,si,pe,te,i.depth,i.width]),Tn=pe??Zs??na,Hr=(te==null?void 0:te.axis)==="vertical"?"縦壁":"横壁",P=te?Math.max(1,ri.size):0,J=ue&&ce.length===1?A===2?fy(S,ue.id,N,ct):uy(S,ue.id,N,A):[];Pe.useEffect(()=>{ce.length===0&&S[0]&&v([S[0].id])},[S,ce.length]),Pe.useEffect(()=>{(A!==2||ce.length!==1)&&(ze(!1),_t(!1),b(null))},[ce.length,A]),Pe.useEffect(()=>{b(null)},[ue==null?void 0:ue.id,N]),Pe.useEffect(()=>{V(null),Q(null)},[ue==null?void 0:ue.id]),Pe.useEffect(()=>{B(null)},[Yi]),Pe.useEffect(()=>{(!i.pickupFillet||!e)&&Me(!1)},[e,i.pickupFillet]),Pe.useEffect(()=>{g.current||Bi(C.current)!==Bi(S)&&se(_g(S))},[C.current,S]),Pe.useEffect(()=>{const X=r.current;if(!X)return;const k=X.getContext("2d");if(!k)return;const ge=X.getBoundingClientRect(),gt=window.devicePixelRatio||1;X.width=Math.max(1,Math.round(ge.width*gt)),X.height=Math.max(1,Math.round(ge.height*gt)),k.setTransform(gt,0,0,gt,0,0),k.clearRect(0,0,ge.width,ge.height);const bt=24,Mt=i.width/i.depth,cn=ge.width-bt*2,Xn=ge.height-bt*2;let Ut=cn,xt=Ut/Mt;xt>Xn&&(xt=Xn,Ut=xt*Mt);const Dt=(ge.width-Ut)/2,qt=(ge.height-xt)/2;c.current={originX:Dt,originY:qt,modelWidth:Ut,modelHeight:xt};const oi=Math.max(3,Math.min(9,i.wallThickness/i.width*Ut)),Zi=[];if(k.save(),k.shadowColor="rgba(27, 31, 35, 0.16)",k.shadowBlur=18,k.shadowOffsetY=8,yo(k,Dt,qt,Ut,xt,7),k.fillStyle="#f7f8f8",k.fill(),k.restore(),pt&&!Xe&&(k.fillStyle="rgba(45, 54, 62, 0.44)",k.font="800 11px Inter, system-ui, sans-serif",k.textAlign="center",k.fillText(`${rs(i.width)} mm`,Dt+Ut/2,qt-8),k.save(),k.translate(Dt-10,qt+xt/2),k.rotate(-Math.PI/2),k.fillText(`${rs(i.depth)} mm`,0,0),k.restore()),S.forEach(De=>{var _s;const Rt=Dt+De.x*Ut+(De.x<=1e-4?0:oi/2),Kt=qt+De.y*xt+(De.y<=1e-4?0:oi/2),_n=De.x+De.width>=.9999,un=De.y+De.height>=.9999,yn=De.width*Ut-(De.x<=1e-4?0:oi/2)-(_n?0:oi/2),Mn=De.height*xt-(De.y<=1e-4?0:oi/2)-(un?0:oi/2),Cn=y.includes(De.id),Ni=De.id===$,Mr=zn&&Cn,wi=ce.length>1&&Cn&&!zn,hi=((_s=i.pickupFilletCellModes)==null?void 0:_s[De.id])??"none";if(Zi.push({id:De.id,x:Rt,y:Kt,width:yn,height:Mn,area:yn*Mn}),k.save(),k.shadowColor=Cn?"rgba(23, 141, 224, 0.2)":"rgba(20, 24, 28, 0.1)",k.shadowBlur=Cn?18:10,k.shadowOffsetY=Cn?6:4,yo(k,Rt,Kt,yn,Mn,6),k.fillStyle=Cn?"#ffffff":"#f1f3f3",k.fill(),k.restore(),i.pickupFillet&&hi!=="none"){k.save(),yo(k,Rt+4,Kt+4,yn-8,Mn-8,5);const qs=Se?.18:.06,el=Se?.82:.42;k.fillStyle=hi==="removable"?`rgba(240, 138, 36, ${qs})`:`rgba(25, 137, 100, ${qs})`,k.fill(),k.strokeStyle=hi==="removable"?`rgba(240, 138, 36, ${el})`:`rgba(25, 137, 100, ${el})`,k.lineWidth=Se?2:1.1,k.stroke(),yn>74&&Mn>38&&(k.fillStyle=hi==="removable"?"#99520b":"#146f50",k.font="850 10px Inter, system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(wg[hi],Rt+yn/2,Kt+Mn/2)),k.restore()}if(yo(k,Rt,Kt,yn,Mn,6),k.strokeStyle=Cn?Mr?"#198964":wi?"#c77700":"#178de0":Ni?"rgba(23, 141, 224, 0.48)":"rgba(54, 64, 72, 0.18)",k.lineWidth=Cn?2.5:Ni?1.8:1,k.stroke(),pt&&(!Xe||Cn||Ni)&&yn>58&&Mn>34){k.fillStyle=Cn?Mr?"#198964":wi?"#a86600":"#167ec0":Ni?"#167ec0":"rgba(82, 92, 100, 0.45)",k.font=yn>84&&Mn>48?"800 11px Inter, system-ui, sans-serif":"800 10px Inter, system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle";const qs=yn>84&&Mn>48?`${In(De.width*i.width)} x ${In(De.height*i.depth)}`:`${In(De.width*i.width)}`;k.fillText(qs,Rt+yn/2,Kt+Mn/2)}}),en){const De=Dt+en.minX*Ut,Rt=qt+en.minY*xt,Kt=en.width*Ut,_n=en.height*xt,un=en.isRectangle?"#198964":"#c77700",yn=`W: ${In(en.widthMm)}`,Mn=`D: ${In(en.depthMm)}`;k.save(),k.strokeStyle=un,k.lineWidth=2,k.setLineDash([7,5]),k.strokeRect(De-3,Rt-3,Kt+6,_n+6),k.restore(),k.save(),k.font="850 11px Inter, system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillStyle=un,k.fillText(yn,De+Kt/2,Math.max(11,Rt-13)),k.save(),k.translate(Math.max(14,De-15),Rt+_n/2),k.rotate(-Math.PI/2),k.fillText(Mn,0,0),k.restore(),k.restore()}if(re){const De=Math.min(re.start.x,re.end.x),Rt=Math.min(re.start.y,re.end.y),Kt=Math.abs(re.end.x-re.start.x),_n=Math.abs(re.end.y-re.start.y);k.save(),k.fillStyle="rgba(23, 141, 224, 0.08)",k.strokeStyle="#178de0",k.lineWidth=1.5,k.setLineDash([5,5]),k.fillRect(De,Rt,Kt,_n),k.strokeRect(De,Rt,Kt,_n),k.restore()}J.length>0&&(k.save(),k.strokeStyle=be||et?"#198964":"#f08a24",k.lineWidth=be||et?4:2.5,k.setLineDash([8,6]),k.lineCap="round",J.forEach(De=>{k.beginPath(),k.moveTo(Dt+De.x1*Ut,qt+De.y1*xt),k.lineTo(Dt+De.x2*Ut,qt+De.y2*xt),k.stroke()}),k.restore());const yr=E.map(De=>{if(De.axis==="vertical"){const Kt=Dt+De.position*Ut;return{...De,key:Hi(De),x1:Kt,x2:Kt,y1:qt+De.start*xt,y2:qt+De.end*xt}}const Rt=qt+De.position*xt;return{...De,key:Hi(De),x1:Dt+De.start*Ut,x2:Dt+De.end*Ut,y1:Rt,y2:Rt}});if(yr.forEach(De=>{const Rt=De.key===D,Kt=De.key===W,_n=De.key===Yi,un=ri.has(De.key),yn=On.has(De.key);k.save(),k.strokeStyle=Rt||D&&un||_n?"#198964":yn?"#d05d28":Kt||un?"#178de0":"rgba(22, 137, 208, 0.28)",k.lineWidth=Rt||Kt||_n||un||yn?4:2,k.lineCap="round",k.beginPath(),k.moveTo(De.x1,De.y1),k.lineTo(De.x2,De.y2),k.stroke(),k.restore()}),Qe&&yr.forEach(De=>{const Rt=De.key===D,Kt=De.key===W,_n=De.key===Yi,un=ri.has(De.key);if(!(!Xe||Rt||Kt||_n||un))return;const Mn=In(Jl(De,i.width,i.depth)),Cn=De.axis==="vertical"?De.x1:(De.x1+De.x2)/2,Ni=De.axis==="vertical"?(De.y1+De.y2)/2:De.y1,Mr=Math.max(54,k.measureText(Mn).width+18),wi=22,hi=Math.min(ge.width-Mr-8,Math.max(8,Cn+(De.axis==="vertical"?10:-Mr/2))),ur=Math.min(ge.height-wi-8,Math.max(8,Ni+(De.axis==="vertical"?-wi/2:10)));k.save(),k.shadowColor="rgba(20, 24, 28, 0.16)",k.shadowBlur=10,k.shadowOffsetY=4,yo(k,hi,ur,Mr,wi,6),k.fillStyle=Rt||_n||un?"#198964":"#11171b",k.fill(),k.shadowColor="transparent",k.fillStyle="#ffffff",k.font="850 11px Inter, system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(Mn,hi+Mr/2,ur+wi/2),k.restore()}),Tn){const De=In(Tn.valueMm),Rt=Tn.axis==="vertical"?Dt+Tn.position*Ut:Dt+(Tn.start+Tn.end)/2*Ut,Kt=Tn.axis==="vertical"?qt+(Tn.start+Tn.end)/2*xt:qt+Tn.position*xt;k.save(),k.setLineDash([5,6]),k.lineWidth=1.5,k.strokeStyle="rgba(25, 137, 100, 0.44)",k.beginPath(),Tn.axis==="vertical"?(k.moveTo(Rt,qt),k.lineTo(Rt,qt+xt)):(k.moveTo(Dt,Kt),k.lineTo(Dt+Ut,Kt)),k.stroke(),k.restore(),k.save(),k.font="850 12px Inter, system-ui, sans-serif";const _n=Math.max(66,k.measureText(De).width+22),un=28,yn=Tn.axis==="vertical"?12:0,Mn=Tn.axis==="vertical"?-un/2:-un-12,Cn=Math.min(ge.width-_n-10,Math.max(10,Rt+yn-(Tn.axis==="vertical"?0:_n/2))),Ni=Math.min(ge.height-un-10,Math.max(10,Kt+Mn));k.shadowColor="rgba(20, 24, 28, 0.22)",k.shadowBlur=14,k.shadowOffsetY=5,yo(k,Cn,Ni,_n,un,7),k.fillStyle="#11171b",k.fill(),k.shadowColor="transparent",k.fillStyle="#ffffff",k.textAlign="center",k.textBaseline="middle",k.fillText(De,Cn+_n/2,Ni+un/2),k.restore()}o.current=Zi.sort((De,Rt)=>De.area-Rt.area),l.current=yr},[D,zn,ri,W,Se,be,et,S,E,ce.length,y,en,Yi,re,pt,Xe,Qe,J,On,i.depth,i.pickupFillet,i.pickupFilletCellModes,i.wallThickness,i.width,Tn,$]);const ae=(X,k)=>{Bi(S)!==Bi(X)&&(se(ge=>yg(ge,X)),t(X),v(k))},fe=(X,k)=>{if(!ue||!Number.isFinite(k)||!Pa(S,ue.id,X,k,i.width,i.depth))return;const ge=X==="width"?k/i.width:k/i.depth,gt=X0(S,ue.id,X==="width"?{width:ge}:{height:ge});ae(gt,[ue.id])},Z=X=>{const k=X.currentTarget.getBoundingClientRect();return{x:X.clientX-k.left,y:X.clientY-k.top}},Te=X=>{var bt;const k=Z(X),ge=8;return(bt=l.current.map(Mt=>{const cn=Mt.axis==="vertical"?Math.abs(k.x-Mt.x1):Math.abs(k.y-Mt.y1),Xn=Mt.axis==="vertical"?k.y>=Math.min(Mt.y1,Mt.y2)-ge&&k.y<=Math.max(Mt.y1,Mt.y2)+ge:k.x>=Math.min(Mt.x1,Mt.x2)-ge&&k.x<=Math.max(Mt.x1,Mt.x2)+ge;return{handle:Mt,distance:cn,inRange:Xn}}).filter(Mt=>Mt.inRange&&Mt.distance<=ge).sort((Mt,cn)=>Mt.distance-cn.distance)[0])==null?void 0:bt.handle},Le=X=>{const k=c.current,ge=A===2?J[0]:void 0;if(!k||!ge||!ue||ce.length!==1)return!1;const gt=Z(X),bt=10;if(ge.axis==="vertical"){const Ut=k.originX+ge.x1*k.modelWidth,xt=k.originY+ge.y1*k.modelHeight,Dt=k.originY+ge.y2*k.modelHeight;return Math.abs(gt.x-Ut)<=bt&&gt.y>=Math.min(xt,Dt)-bt&&gt.y<=Math.max(xt,Dt)+bt}const Mt=k.originY+ge.y1*k.modelHeight,cn=k.originX+ge.x1*k.modelWidth,Xn=k.originX+ge.x2*k.modelWidth;return Math.abs(gt.y-Mt)<=bt&&gt.x>=Math.min(cn,Xn)-bt&&gt.x<=Math.max(cn,Xn)+bt},Be=X=>{const k=c.current;if(!k||!ue||ce.length!==1)return;const ge=Z(X),gt=N==="vertical"?(ge.x-k.originX)/k.modelWidth:(ge.y-k.originY)/k.modelHeight,bt=Vc(gt,N==="vertical"?ue.x:ue.y,N==="vertical"?ue.width:ue.height,at,ec(X));F(bt)},Ge=X=>{const k=x.current,ge=c.current,gt=h.current;if(!k||!ge||!gt)return;const bt=Z(X),Mt=k.axis==="vertical"?(bt.x-ge.originX)/ge.modelWidth:(bt.y-ge.originY)/ge.modelHeight,cn=k.axis==="vertical"?i.width:i.depth,Xn=ec(X),Ut=W0(Mt,cn,Xn),xt=ps(gt,k,Ut),Dt=ic(xt,k,Ut)??{...k,position:Ut};m.current=xt,H(Dt),ee(Hi(Dt)),Ne({axis:Dt.axis,position:Dt.position,start:Dt.start,end:Dt.end,valueMm:Dt.position*cn}),t(xt)},it=X=>{if(!ue)return;const k=A===2?cy(S,ue.id,X,ct):ly(S,ue.id,X,A);L(X),ae(k,[`${ue.id}a`])},lt=()=>{if(!zn)return;const X=xy(S,ii);ae(X,[ce[0].id])},qe=X=>{if(!(X==="vertical"?Li:Di))return;const ge=vy(S,ii,X);ae(ge,ii)},dt=X=>{if(!ue)return;const k=di.find(ge=>ge.direction===X);k&&(H(null),Ne(null),_t(!1),v([ue.id,k.cellId]))},Ft=()=>{ae(En(1,1),["cell-1"])},Lt=()=>{const X=Gy(C);se(X),t(X.current),v(X.current[0]?[X.current[0].id]:[])},Zt=()=>{const X=Wy(C);se(X),t(X.current),v(X.current[0]?[X.current[0].id]:[])},Tt=X=>jy(o.current,Z(X)),nt=X=>{if(X.target instanceof HTMLInputElement||X.target instanceof HTMLSelectElement||X.target instanceof HTMLTextAreaElement)return;const k=Zy(X);if(k&&ue&&ce.length===1){const xt=di.find(Dt=>Dt.direction===k);if(xt){X.preventDefault(),H(null),Ne(null),_t(!1),v([ue.id,xt.cellId]);return}}const ge=oy(X);if(ge==="split-vertical"){X.preventDefault(),it("vertical");return}if(ge==="split-horizontal"){X.preventDefault(),it("horizontal");return}if(ge==="merge"){X.preventDefault(),lt();return}if(ge==="select-all"){X.preventDefault(),H(null),Ne(null),_t(!1),v(S.map(xt=>xt.id));return}if(ge==="equalize-width"){X.preventDefault(),qe("vertical");return}if(ge==="equalize-depth"){X.preventDefault(),qe("horizontal");return}if(ge==="undo"){X.preventDefault(),Lt();return}if(ge==="redo"){X.preventDefault(),Zt();return}if(ge==="cancel"){X.preventDefault(),v(ue?[ue.id]:[]),H(null),Ne(null),_t(!1);return}if(A===2&&ue&&ce.length===1&&(et||be)){if(ay(X.key)){X.preventDefault(),it(N),_t(!1);return}const xt=N==="vertical"?X.key==="ArrowLeft"?-1:X.key==="ArrowRight"?1:0:X.key==="ArrowUp"?-1:X.key==="ArrowDown"?1:0;if(xt!==0){X.preventDefault();const Dt=xt*ec(X);F(qt=>ty(qt,at,Dt)),_t(!0);return}}const gt=te??si;if(!gt)return;const bt=gt.axis==="vertical"?X.key==="ArrowLeft"?-1:X.key==="ArrowRight"?1:0:X.key==="ArrowUp"?-1:X.key==="ArrowDown"?1:0;if(bt===0)return;X.preventDefault();const Mt=bt*ec(X),cn=sy(gt,i.width,i.depth,Mt),Xn=ps(S,gt,cn);if(Bi(S)===Bi(Xn))return;const Ut=ic(Xn,gt,cn)??{...gt,position:cn};H(Ut),ee(Hi(Ut)),ae(Xn,y)},sn=X=>{Le(X)&&(X.preventDefault(),_t(!1),it(N))},Ct=X=>{const k=te;if(!k||!Number.isFinite(X))return;const ge=ny(k,i.width,i.depth,X),gt=ps(S,k,ge);if(Bi(S)===Bi(gt))return;const bt=ic(gt,k,ge)??{...k,position:ge};H(bt),ee(Hi(bt)),ae(gt,y)},bn=()=>{if(!te||!qn)return;const X=ry(S,te);if(Bi(S)===Bi(X))return;const k=ic(X,te,qn.center)??te;H(k),ee(Hi(k)),Ne({axis:k.axis,position:k.position,start:k.start,end:k.end,valueMm:k.position*(k.axis==="vertical"?i.width:i.depth)}),B(null),ae(X,[ue.id])},Ei=()=>{H(null),Ne(null),ne(""),ee(""),B(null)},Pn=X=>{if(!i.pickupFillet||!e||ce.length===0)return;const k={...i.pickupFilletCellModes??{}};ce.forEach(ge=>{k[ge.id]=X}),e("pickupFilletCellModes",k)},_r=te?["壁選択中",Hr,`壁位置 ${In(Ue)}`,`連動壁 ${P}本`,...Wt.hasInterference?[`スタック干渉 ${Wt.interferingHandles.length}本`]:[],...Wt.hasInterference?[`推奨逃げ幅 ${Wt.recommendedReliefGapMm} mm`]:[],"スナップ 5 mm","Ctrl微調整 1 mm"]:[ce.length>=2?`${ce.length}件選択`:"選択中",ce.length===1?"分割可":zn?"結合準備OK":"範囲確認",ce.length>=2?Li||Di?"均等化可":"均等化不可":di.length>0?"隣接セルあり":"寸法編集可",ve?`ホバー ${In(ve.width*i.width)} x ${In(ve.height*i.depth)}`:Xe?"選択のみ表示":"全体表示",...Wt.hasInterference?[`スタック干渉 ${Wt.interferingHandles.length}本`]:[],...Wt.hasInterference?[`推奨逃げ幅 ${Wt.recommendedReliefGapMm} mm`]:[]],Xt=X=>{var bt;const k=Te(X);if(k){X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId),_t(!1),h.current=S,m.current=S,x.current=k,g.current=!0,H(k),Ne({axis:k.axis,position:k.position,start:k.start,end:k.end,valueMm:k.position*(k.axis==="vertical"?i.width:i.depth)});const Mt=Hi(k);ne(Mt),ee(Mt),jt(k.axis==="vertical"?"ew-resize":"ns-resize");return}if(Le(X)){X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId),M.current=!0,ze(!0),_t(!0),H(null),Ne(null),jt(N==="vertical"?"ew-resize":"ns-resize"),Be(X);return}const ge=Tt(X);if(!ge)return;if(H(null),Ne(null),_t(!1),i.pickupFillet&&Se&&e&&!X.shiftKey&&!X.ctrlKey&&!X.metaKey){const Mt=((bt=i.pickupFilletCellModes)==null?void 0:bt[ge.id])??"none",cn=Wf[(Wf.indexOf(Mt)+1)%Wf.length];e("pickupFilletCellModes",{...i.pickupFilletCellModes??{},[ge.id]:cn}),v([ge.id]);return}X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId);const gt=Z(X);d.current=gt,u.current=ge.id,v(Mg({currentSelection:y,targetCellId:ge.id,shiftKey:X.shiftKey,ctrlKey:X.ctrlKey,dragStartCellId:""}))},jn=X=>{if(M.current){X.buttons===1&&Be(X);return}if(x.current){X.buttons===1&&Ge(X);return}const k=Te(X),ge=!k&&Le(X),gt=!k&&!ge?Tt(X):void 0;if(ee((k==null?void 0:k.key)??""),kn((gt==null?void 0:gt.id)??""),ze(ge),jt(k?k.axis==="vertical"?"ew-resize":"ns-resize":ge?N==="vertical"?"ew-resize":"ns-resize":"crosshair"),X.buttons!==1||!u.current)return;const bt=d.current,Mt=Z(X);if(bt&&Math.hypot(Mt.x-bt.x,Mt.y-bt.y)>6){const Ut={start:bt,end:Mt},xt=Xy(o.current,Ut);xe(Ut),xt.length>0&&v(xt);return}const cn=Tt(X);cn&&v(Mg({currentSelection:y,targetCellId:cn.id,shiftKey:!1,dragStartCellId:u.current}))},Ln=()=>{const X=m.current,k=h.current;x.current&&X&&k&&Bi(k)!==Bi(X)&&(se(ge=>yg(ge,X)),t(X)),x.current=null,h.current=null,m.current=null,g.current=!1,M.current=!1,ne(""),Ne(null),xe(null),ze(!1),kn(""),d.current=null,u.current=""};return w.jsxs("section",{className:"layout-editor","aria-label":"レイアウト編集",children:[w.jsxs(La,{title:"キャンバス",className:"layout-canvas-section",hideTitle:!0,children:[w.jsxs("div",{className:"layout-canvas-controls","aria-label":"キャンバス表示",children:[w.jsxs("button",{type:"button","aria-pressed":pt,title:"セル寸法ラベルを表示",onClick:()=>yt(X=>!X),children:[w.jsx(Z_,{size:14,"aria-hidden":"true"}),"寸法"]}),w.jsxs("button",{type:"button","aria-pressed":Qe,title:"壁位置ラベルを表示",onClick:()=>Gt(X=>!X),children:[w.jsx($_,{size:14,"aria-hidden":"true"}),"壁位置"]}),w.jsxs("button",{type:"button","aria-pressed":Xe,title:"選択中のセルと壁だけラベル表示",onClick:()=>U(X=>!X),children:[w.jsx(cg,{size:14,"aria-hidden":"true"}),"選択のみ"]})]}),i.pickupFillet?w.jsxs("div",{className:"layout-fillet-legend","aria-label":"フィレット凡例",children:[w.jsxs("span",{children:[w.jsx("i",{className:"legend-dot integrated","aria-hidden":"true"}),"本体一体"]}),w.jsxs("span",{children:[w.jsx("i",{className:"legend-dot removable","aria-hidden":"true"}),"取り外し"]}),w.jsx("span",{className:"legend-mode",children:Se?"フィレット編集モード":"通常編集モード"})]}):null,w.jsx("div",{className:"layout-canvas-wrap",children:w.jsx("canvas",{ref:r,"aria-label":"セルレイアウト",title:"セルをクリックまたはドラッグして選択",className:"layout-canvas",tabIndex:0,style:{cursor:wt},onKeyDown:nt,onPointerDown:Xt,onPointerMove:jn,onPointerUp:Ln,onPointerLeave:Ln,onDoubleClick:sn})})]}),w.jsx(La,{title:"分割",children:w.jsxs("div",{className:"layout-split-controls","aria-label":"選択セルの分割",children:[w.jsxs("select",{"aria-label":"分割数",title:"分割数を選択",value:A,onChange:X=>O(Number(X.target.value)),children:[w.jsx("option",{value:2,children:"2分割"}),w.jsx("option",{value:3,children:"3分割"}),w.jsx("option",{value:4,children:"4分割"})]}),w.jsxs("button",{type:"button","aria-pressed":N==="vertical",title:"選択セルを縦方向に分割",onPointerEnter:()=>L("vertical"),onFocus:()=>L("vertical"),onClick:()=>it("vertical"),children:[w.jsx(ug,{size:15,"aria-hidden":"true"}),"縦に分割"]}),w.jsxs("button",{type:"button","aria-pressed":N==="horizontal",title:"選択セルを横方向に分割",onPointerEnter:()=>L("horizontal"),onFocus:()=>L("horizontal"),onClick:()=>it("horizontal"),children:[w.jsx(ug,{size:15,"aria-hidden":"true"}),"横に分割"]}),A===2?w.jsxs("label",{className:ke?"split-position-control invalid":"split-position-control",children:[w.jsx("span",{children:"分割位置"}),w.jsx("input",{type:"number",min:Ot,max:K,step:1,value:me,"aria-invalid":ke,disabled:ce.length!==1,onChange:X=>{const k=X.currentTarget.value,ge=Number(k);b(k),dg(ge,at)&&F(fg(ge,at))},onBlur:X=>{const k=Number(X.currentTarget.value);Number.isFinite(k)&&at>0&&F(fg(k,at)),b(null)},onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(b(null),X.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}):null,A===2&&ke?w.jsxs("p",{className:"split-position-warning",role:"alert",children:["有効範囲 ",In(Ot)," 〜"," ",In(K)]}):null]})}),w.jsxs(La,{title:"選択セル",children:[w.jsx("p",{className:te?"layout-summary wall":"layout-summary",children:te?`選択壁 ${Hr} / ${In(Ue)}`:ce.length>=2?`選択セル ${ce.length}件 / ${zn?"結合できます":"矩形範囲を選択してください"}`:`選択セル ${Ze} x ${Ie} mm / ${S.length} セル`}),w.jsxs("div",{className:"layout-status-chips","aria-label":"レイアウト編集の状態",children:[_r.map(X=>w.jsx("span",{children:X},X)),i.pickupFillet&&ce.length===1?w.jsxs("span",{children:["フィレット: ",wg[Zn]]}):null]}),i.pickupFillet&&e?w.jsxs("div",{className:"layout-fillet-controls","aria-label":"フィレット編集",children:[w.jsxs("div",{className:"segmented layout-fillet-edit-mode",role:"group",children:[w.jsx("button",{type:"button","aria-pressed":!Se,className:Se?"":"selected",onClick:()=>Me(!1),children:"通常編集"}),w.jsx("button",{type:"button","aria-pressed":Se,className:Se?"selected":"",onClick:()=>Me(!0),children:"フィレット編集"})]}),w.jsxs("div",{className:"layout-fillet-mode-buttons",role:"group","aria-label":"フィレット方式",children:[w.jsx("button",{type:"button","aria-pressed":Zn==="none",className:Zn==="none"?"selected":"",onClick:()=>Pn("none"),disabled:ce.length===0,children:"なし"}),w.jsx("button",{type:"button","aria-pressed":Zn==="integrated",className:Zn==="integrated"?"selected":"",onClick:()=>Pn("integrated"),disabled:ce.length===0,children:"本体一体"}),w.jsx("button",{type:"button","aria-pressed":Zn==="removable",className:Zn==="removable"?"selected":"",onClick:()=>Pn("removable"),disabled:ce.length===0,children:"取り外し"})]})]}):null,w.jsxs("div",{className:"layout-actions","aria-label":"選択セルの操作",children:[w.jsxs("button",{type:"button",title:"選択した隣接セルを結合",onClick:lt,disabled:!zn,children:[w.jsx(X_,{size:15,"aria-hidden":"true"}),"結合"]}),w.jsxs("button",{type:"button",title:"選択セルの幅を均等化",onClick:()=>qe("vertical"),disabled:!Li,children:[w.jsx(Gf,{size:15,"aria-hidden":"true"}),"幅を均等"]}),w.jsxs("button",{type:"button",title:"選択セルの奥行を均等化",onClick:()=>qe("horizontal"),disabled:!Di,children:[w.jsx(Gf,{size:15,"aria-hidden":"true"}),"奥行を均等"]})]}),ce.length===1&&di.length>0?w.jsx("div",{className:"merge-candidate-pad","aria-label":"結合候補を選択",children:[{direction:"left",label:"左のセルを結合候補に選択",icon:O_},{direction:"up",label:"上のセルを結合候補に選択",icon:B_},{direction:"right",label:"右のセルを結合候補に選択",icon:z_},{direction:"down",label:"下のセルを結合候補に選択",icon:k_}].map(({direction:X,label:k,icon:ge})=>{const gt=di.some(bt=>bt.direction===X);return w.jsx("button",{type:"button","aria-label":k,title:k,disabled:!gt,onClick:()=>dt(X),children:w.jsx(ge,{size:15,"aria-hidden":"true"})},X)})}):null,en?w.jsxs("div",{className:"layout-selection-inspector","aria-label":"選択範囲の情報",children:[w.jsxs("div",{className:"layout-selection-metrics",children:[w.jsxs("span",{children:["幅 ",w.jsx("strong",{children:In(en.widthMm)})]}),w.jsxs("span",{children:["奥行 ",w.jsx("strong",{children:In(en.depthMm)})]}),w.jsxs("span",{children:["セル ",w.jsxs("strong",{children:[en.cellCount,"件"]})]})]}),w.jsxs("div",{className:en.isRectangle?"layout-selection-status ok":"layout-selection-status warning",children:[w.jsx("span",{children:en.isRectangle?"矩形範囲です":"矩形範囲ではありません"}),w.jsx("span",{children:zn?"結合可能":"結合不可"}),w.jsx("span",{children:Li?"幅均等化可能":"幅均等化不可"}),w.jsx("span",{children:Di?"奥行均等化可能":"奥行均等化不可"})]})]}):null,te?w.jsx("p",{className:"layout-selection-note",children:"壁を選択中です。壁位置と中央戻しは下の壁編集で操作します。"}):w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"layout-dimension-controls","aria-label":"選択セルの寸法",children:[w.jsxs("label",{className:tt?"invalid":void 0,children:[w.jsx("span",{children:"幅"}),w.jsx("input",{type:"number",min:Math.round(i.width*.08),max:i.width,step:1,value:Ve,"aria-label":"幅","aria-invalid":tt,disabled:ce.length!==1,onChange:X=>{const k=X.currentTarget.value,ge=Number(k);V(k),Pa(S,ue.id,"width",ge,i.width,i.depth)&&(fe("width",ge),V(null))},onBlur:()=>V(null),onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(X.preventDefault(),V(null),X.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}),w.jsxs("label",{className:rt?"invalid":void 0,children:[w.jsx("span",{children:"奥行"}),w.jsx("input",{type:"number",min:Math.round(i.depth*.08),max:i.depth,step:1,value:mt,"aria-label":"奥行","aria-invalid":rt,disabled:ce.length!==1,onChange:X=>{const k=X.currentTarget.value,ge=Number(k);Q(k),Pa(S,ue.id,"height",ge,i.width,i.depth)&&(fe("height",ge),Q(null))},onBlur:()=>Q(null),onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(X.preventDefault(),Q(null),X.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]})]}),je?w.jsx("p",{className:"layout-input-warning",children:"隣接セルの最小サイズを下回るため、この寸法は適用されません。"}):null]})]}),te?w.jsxs(La,{title:"壁編集",children:[w.jsxs("div",{className:"layout-wall-focus","aria-label":"選択中の壁",children:[w.jsx("strong",{children:Hr}),w.jsxs("span",{children:["現在 ",In(Ue)]}),w.jsxs("span",{children:["連動壁 ",P,"本"]})]}),w.jsxs("div",{className:"layout-wall-tools",children:[w.jsxs("label",{className:gn?"wall-position-control invalid":"wall-position-control",children:[w.jsx("span",{children:"壁位置"}),w.jsx("input",{type:"number",min:0,max:te.axis==="vertical"?i.width:i.depth,step:1,value:ft,"aria-invalid":gn,onChange:X=>{const k=X.currentTarget.value,ge=Number(k);B(k),hg(S,te,ge,i.width,i.depth)&&Ct(ge)},onBlur:X=>{Ct(Number(X.currentTarget.value)),B(null)},onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(B(null),X.currentTarget.blur())}}),w.jsx("span",{children:"mm"})]}),w.jsxs("button",{type:"button","aria-label":"選択中の壁を中央に戻す",title:"選択中の壁を中央に戻す",onClick:bn,disabled:!Ys,children:[w.jsx(Gf,{size:15,"aria-hidden":"true"}),"中央"]}),w.jsxs("button",{type:"button","aria-label":"セル選択に戻る",title:"壁選択を解除してセル選択に戻る",onClick:Ei,children:[w.jsx(cg,{size:15,"aria-hidden":"true"}),"戻る"]}),w.jsx("span",{className:"layout-snap-chip",children:"スナップ 5 mm"})]}),qn?w.jsxs("div",{className:"layout-wall-status","aria-label":"壁移動の状態",children:[w.jsxs("span",{children:["移動範囲 ",In(qn.minMm)," -"," ",In(qn.maxMm)]}),w.jsxs("span",{children:["中央 ",In(qn.centerMm)]})]}):null]}):null,w.jsxs(La,{title:"履歴とリセット",children:[w.jsxs("div",{className:"layout-history-actions","aria-label":"履歴とリセット操作",children:[w.jsxs("button",{type:"button",title:"ひとつ前のレイアウトに戻す",onClick:Lt,disabled:!C.canUndo,children:[w.jsx(ey,{size:15,"aria-hidden":"true"}),"戻す"]}),w.jsxs("button",{type:"button",title:"取り消した操作をやり直す",onClick:Zt,disabled:!C.canRedo,children:[w.jsx(Y_,{size:15,"aria-hidden":"true"}),"やり直す"]}),w.jsxs("button",{type:"button",title:"レイアウトを初期状態に戻す",onClick:Ft,children:[w.jsx(G0,{size:15,"aria-hidden":"true"}),"リセット"]})]}),w.jsxs("div",{className:Et.ok?"layout-validation":"layout-validation warning",role:Et.ok?"status":"alert",children:[w.jsx("strong",{children:Et.ok?"レイアウト問題なし":"レイアウト要確認"}),w.jsx("span",{children:Et.ok?"セルの重なりや隙間は検出されていません。":Et.issues.map(X=>X.message).join(" ")})]}),Wt.enabled?w.jsxs("div",{className:Wt.hasInterference?"layout-validation warning":"layout-validation",role:Wt.hasInterference?"alert":"status",children:[w.jsx("strong",{children:Wt.hasInterference?"スタック干渉あり":"スタック干渉なし"}),w.jsx("span",{children:Wt.hasInterference?`スタック脚が干渉する壁をキャンバス上で強調しています。推奨逃げ幅 ${Wt.recommendedReliefGapMm} mm。`:"スタック脚と仕切りの干渉は検出されていません。"})]}):null]})]})}const nM=[{key:"width",label:"幅",min:40,max:240,step:1,unit:"mm"},{key:"depth",label:"奥行",min:40,max:240,step:1,unit:"mm"},{key:"height",label:"高さ",min:8,max:120,step:1,unit:"mm"}],iM=[{key:"floorThickness",label:"床厚",min:1.2,max:8,step:.2,unit:"mm"},{key:"cornerRadius",label:"角丸",min:0,max:18,step:1,unit:"mm"}],rM=[{key:"wallThickness",label:"厚さ",min:1.2,max:8,step:.2,unit:"mm"}];function Ds({title:i,defaultOpen:e=!0,bodyClassName:t="",children:r}){return w.jsxs("details",{className:"panel-section",open:e,children:[w.jsx("summary",{children:i}),w.jsx("div",{className:`panel-section-body ${t}`.trim(),children:r})]})}function sM({activeStep:i,settings:e,onChange:t,onLayoutChange:r,onResetLayout:o}){const l=c=>c.map(u=>{const d=e[u.key],h=m=>{Number.isFinite(m)&&t(u.key,m)};return w.jsxs("label",{className:"range-control",children:[w.jsxs("span",{className:"range-control-header",children:[w.jsx("span",{className:"range-control-label",children:u.label}),w.jsxs("span",{className:"range-value-field",children:[w.jsx("input",{"aria-label":`${u.label}の数値`,className:"number-control",type:"number",min:u.min,max:u.max,step:u.step,value:d,onChange:m=>h(Number(m.target.value))}),w.jsx("span",{className:"range-unit",children:u.unit})]})]}),w.jsx("input",{type:"range",min:u.min,max:u.max,step:u.step,value:d,onChange:m=>h(Number(m.target.value))})]},u.key)});return w.jsxs("div",{className:"control-grid",children:[i==="size"?w.jsx(Ds,{title:"主要寸法",bodyClassName:"panel-section-body-single",children:l(nM)}):null,i==="options"?w.jsx(Ds,{title:"外壁・セル壁の厚さ",children:l(rM)}):null,i==="options"?w.jsx(Ds,{title:"詳細設定",defaultOpen:!1,bodyClassName:"panel-section-body-single",children:l(iM)}):null,i==="options"?w.jsx(Ds,{title:"フタ",defaultOpen:!1,children:w.jsx(Dy,{settings:e,onChange:t})}):null,i==="options"?w.jsx(Ds,{title:"スタック脚",defaultOpen:!1,children:w.jsx(Ny,{settings:e,onChange:t})}):null,i==="options"?w.jsx(Ds,{title:"すくい上げフィレット",defaultOpen:!1,children:w.jsx(Vy,{settings:e,onChange:t})}):null,i==="grid"?w.jsx(Ds,{title:"レイアウト編集",children:w.jsx(tM,{settings:e,onSettingsChange:t,onLayoutChange:r,onResetLayout:o})}):null]})}const ac={showModelShadows:!1},ex=1.75;function oM(i,e=ex){const t=e/2,r=Math.PI*t**2;return Math.round(i/r)}function Ch(i){return i.replace(/\.stl$/i,"-print-report.json")}function Tg(i,e){if(!e.ok)return`レイアウトに問題があります。${e.issues.map(r=>r.message).join(" ")}`;const t=Ya(i);return t.hasInterference?`スタック干渉があります。レイアウトで強調表示された壁を調整するか、スタック脚を無効にしてからSTL出力してください。推奨逃げ幅 ${t.recommendedReliefGapMm} mm。`:""}function tx(i,e,t=ex){const o={app:"Hako-Forge",version:1,units:"mm",printReadiness:e.checks.some(l=>l.level==="warning")||e.stats.nonManifoldEdgeCount>0||e.stats.topFaceDownwardCount>0?"check":"ready",settings:ln(i),mesh:e.stats,stackingPreview:tu(i),stackingInterference:Ya(i),material:{filamentDiameterMm:t,estimatedFilamentLengthMm:oM(e.stats.estimatedVolumeMm3,t),estimatedVolumeMm3:Math.round(e.stats.estimatedVolumeMm3)},checks:e.checks};return`${JSON.stringify(o,null,2)}
`}function aM({error:i,fileName:e,checks:t,layoutValidation:r,stats:o,settings:l,onDisableStacking:c,onDownload:u,onDownloadAll:d,onDownloadPickupFillets:h,onLoadProject:m,onOpenLayout:x,onSaveProject:g,onSaveReport:M}){const S=t.some(I=>I.level==="warning"),E=Cy(l),y=tu(l),v=Ya(l),N=e||Ba(l),L=E?Eh(l):"取り外し式フィレット未選択",A=wh(l),O=Ch(N);return w.jsxs("div",{className:"export-panel",children:[w.jsxs("dl",{className:"export-stats",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"ファイル"}),w.jsx("dd",{children:e})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"モデル"}),w.jsxs("dd",{children:[l.width," x ",l.depth," x ",l.height," mm"]})]}),y.enabled?w.jsxs("div",{children:[w.jsxs("dt",{children:[y.stackCount,"段重ねの高さ"]}),w.jsxs("dd",{children:[y.stackedHeightMm," mm"]})]}):null,w.jsxs("div",{children:[w.jsx("dt",{children:"メッシュ"}),w.jsxs("dd",{children:[o.triangleCount," 三角形"]})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"体積"}),w.jsxs("dd",{children:[Math.round(o.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),w.jsxs("div",{className:S?"print-check warning":"print-check",children:[w.jsx("strong",{children:S?"印刷設定を確認":"印刷チェック問題なし"}),w.jsx("span",{children:t.map(I=>I.message).join(" ")})]}),w.jsxs("div",{className:r.ok?"layout-validation export-validation":"layout-validation export-validation warning",children:[w.jsx("strong",{children:r.ok?"レイアウト問題なし":"レイアウト要確認"}),w.jsx("span",{children:r.ok?"STL出力できるレイアウトです。":r.issues.map(I=>I.message).join(" ")})]}),v.enabled?w.jsxs("div",{className:v.hasInterference?"layout-validation export-validation warning":"layout-validation export-validation",children:[w.jsx("strong",{children:v.hasInterference?"スタック干渉あり":"スタック干渉なし"}),w.jsxs("span",{children:[v.message,v.hasInterference?` 推奨逃げ幅 ${v.recommendedReliefGapMm} mm。`:""]}),v.hasInterference?w.jsxs("div",{className:"inline-panel-actions",children:[w.jsxs("button",{className:"inline-panel-action",type:"button",onClick:x,children:[w.jsx(V0,{size:15,"aria-hidden":"true"}),"レイアウトで確認"]}),w.jsxs("button",{className:"inline-panel-action",type:"button",onClick:c,children:[w.jsx(H_,{size:15,"aria-hidden":"true"}),"スタック脚を無効化"]})]}):null]}):null,w.jsxs("dl",{className:"export-file-list","aria-label":"出力ファイル",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"本体STL"}),w.jsx("dd",{children:N})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"フィレットSTL"}),w.jsx("dd",{children:L})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"プロジェクト"}),w.jsx("dd",{children:A})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"レポート"}),w.jsx("dd",{children:O})]})]}),i?w.jsx("p",{className:"export-error",children:i}):null,w.jsxs("div",{className:"export-actions",children:[w.jsxs("button",{className:"primary-download",type:"button",onClick:u,children:[w.jsx(za,{size:18,"aria-hidden":"true"}),"本体STL"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:d,children:[w.jsx(za,{size:17,"aria-hidden":"true"}),"まとめて出力"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:g,children:[w.jsx(q_,{size:17,"aria-hidden":"true"}),"プロジェクト保存"]}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:h,disabled:!E,title:E?"取り外し式フィレットだけを別パーツSTLとして出力":"取り外し式フィレットを選択すると有効になります",children:[w.jsx(za,{size:17,"aria-hidden":"true"}),"フィレットのみSTL"]}),w.jsx("span",{className:"export-action-note",children:"まとめて出力では本体STL、取り外し式フィレットSTL、プロジェクト、印刷レポートを保存します。"}),w.jsxs("button",{className:"secondary-action",type:"button",onClick:M,children:[w.jsx(W_,{size:17,"aria-hidden":"true"}),"レポート出力"]}),w.jsxs("label",{className:"secondary-action file-action",children:[w.jsx(j_,{size:17,"aria-hidden":"true"}),"プロジェクト読込",w.jsx("input",{accept:"application/json,.json",type:"file",onChange:I=>{var G;const F=(G=I.target.files)==null?void 0:G[0];F&&m(F),I.target.value=""}})]})]})]})}function lM({checks:i,stats:e}){const t=i.some(o=>o.level==="warning")||e.nonManifoldEdgeCount>0||e.topFaceDownwardCount>0,r=t?J_:V_;return w.jsxs("section",{className:"quality-panel","aria-label":"印刷品質",children:[w.jsxs("div",{className:t?"quality-status warning":"quality-status",children:[w.jsx(r,{size:18,"aria-hidden":"true"}),w.jsxs("div",{children:[w.jsx("strong",{children:t?"要確認":"出力可能"}),w.jsx("span",{children:t?"印刷品質を確認してください":"メッシュは印刷可能です"})]})]}),w.jsxs("dl",{className:"quality-grid",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"非多様体エッジ"}),w.jsx("dd",{children:e.nonManifoldEdgeCount})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"面の向き"}),w.jsx("dd",{children:e.topFaceDownwardCount})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"三角形数"}),w.jsx("dd",{children:e.triangleCount.toLocaleString()})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"推定体積"}),w.jsxs("dd",{children:[Math.round(e.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),w.jsx("ul",{className:"quality-checks",children:i.map(o=>w.jsxs("li",{className:o.level,children:[w.jsx("span",{children:o.label}),w.jsx("strong",{children:o.message})]},o.id))})]})}const cM=[{key:"size",label:"サイズ",icon:H0},{key:"grid",label:"レイアウト",icon:V0},{key:"options",label:"オプション",icon:Q_},{key:"download",label:"出力",icon:za}];function uM({activeStep:i,onChange:e}){return w.jsx("nav",{className:"step-nav","aria-label":"作成手順",children:cM.map((t,r)=>{const o=t.icon,l=i===t.key;return w.jsx("div",{className:"step-wrap",children:w.jsxs("button",{className:l?"step-button step-button-compact active":"step-button step-button-compact",type:"button",onClick:()=>e(t.key),"aria-pressed":l,children:[w.jsx(o,{size:18,"aria-hidden":"true"}),w.jsx("span",{children:t.label})]})},t.key)})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="171",fM=0,Cg=1,dM=2,nx=1,hM=2,Fr=3,xs=0,Mi=1,Ur=2,ms=0,zo=1,Ag=2,Rg=3,bg=4,pM=5,Hs=100,mM=101,gM=102,xM=103,vM=104,_M=200,yM=201,MM=202,SM=203,Td=204,Cd=205,EM=206,wM=207,TM=208,CM=209,AM=210,RM=211,bM=212,PM=213,LM=214,Ad=0,Rd=1,bd=2,Go=3,Pd=4,Ld=5,Dd=6,Nd=7,ix=0,DM=1,NM=2,gs=0,IM=1,FM=2,UM=3,kM=4,OM=5,zM=6,BM=7,rx=300,Wo=301,jo=302,Id=303,Fd=304,nu=306,Ud=1e3,Gs=1001,kd=1002,ar=1003,HM=1004,lc=1005,xr=1006,jf=1007,Ws=1008,Br=1009,sx=1010,ox=1011,Ga=1012,Rh=1013,js=1014,kr=1015,Za=1016,bh=1017,Ph=1018,Xo=1020,ax=35902,lx=1021,cx=1022,or=1023,ux=1024,fx=1025,Bo=1026,$o=1027,dx=1028,Lh=1029,hx=1030,Dh=1031,Nh=1033,Uc=33776,kc=33777,Oc=33778,zc=33779,Od=35840,zd=35841,Bd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,jd=37808,Xd=37809,$d=37810,Yd=37811,Zd=37812,qd=37813,Kd=37814,Qd=37815,Jd=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,Bc=36492,sh=36494,oh=36495,px=36283,ah=36284,lh=36285,ch=36286,VM=3200,GM=3201,mx=0,WM=1,ds="",Gi="srgb",Yo="srgb-linear",Wc="linear",$t="srgb",Mo=7680,Pg=519,jM=512,XM=513,$M=514,gx=515,YM=516,ZM=517,qM=518,KM=519,Lg=35044,Dg="300 es",Or=2e3,jc=2001;class Qo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ng=1234567;const Ho=Math.PI/180,Wa=180/Math.PI;function Jo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Ih(i,e){return(i%e+e)%e}function QM(i,e,t,r,o){return r+(i-e)*(o-r)/(t-e)}function JM(i,e,t){return i!==e?(t-i)/(e-i):0}function Ha(i,e,t){return(1-t)*i+t*e}function eS(i,e,t,r){return Ha(i,e,1-Math.exp(-t*r))}function tS(i,e=1){return e-Math.abs(Ih(i,e*2)-e)}function nS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sS(i,e){return i+Math.random()*(e-i)}function oS(i){return i*(.5-Math.random())}function aS(i){i!==void 0&&(Ng=i);let e=Ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lS(i){return i*Ho}function cS(i){return i*Wa}function uS(i){return(i&i-1)===0&&i!==0}function fS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hS(i,e,t,r,o){const l=Math.cos,c=Math.sin,u=l(t/2),d=c(t/2),h=l((e+r)/2),m=c((e+r)/2),x=l((e-r)/2),g=c((e-r)/2),M=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":i.set(u*m,d*x,d*g,u*h);break;case"YZY":i.set(d*g,u*m,d*x,u*h);break;case"ZXZ":i.set(d*x,d*g,u*m,u*h);break;case"XZX":i.set(u*m,d*S,d*M,u*h);break;case"YXY":i.set(d*M,u*m,d*S,u*h);break;case"ZYZ":i.set(d*S,d*M,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Fo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pS={DEG2RAD:Ho,RAD2DEG:Wa,generateUUID:Jo,clamp:Pt,euclideanModulo:Ih,mapLinear:QM,inverseLerp:JM,lerp:Ha,damp:eS,pingpong:tS,smoothstep:nS,smootherstep:iS,randInt:rS,randFloat:sS,randFloatSpread:oS,seededRandom:aS,degToRad:lS,radToDeg:cS,isPowerOfTwo:uS,ceilPowerOfTwo:fS,floorPowerOfTwo:dS,setQuaternionFromProperEuler:hS,normalize:ci,denormalize:Fo};class Vt{constructor(e=0,t=0){Vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,c,u,d,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,d,h)}set(e,t,r,o,l,c,u,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],m=r[4],x=r[7],g=r[2],M=r[5],S=r[8],E=o[0],y=o[3],v=o[6],N=o[1],L=o[4],A=o[7],O=o[2],I=o[5],F=o[8];return l[0]=c*E+u*N+d*O,l[3]=c*y+u*L+d*I,l[6]=c*v+u*A+d*F,l[1]=h*E+m*N+x*O,l[4]=h*y+m*L+x*I,l[7]=h*v+m*A+x*F,l[2]=g*E+M*N+S*O,l[5]=g*y+M*L+S*I,l[8]=g*v+M*A+S*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*l*m+r*u*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],x=m*c-u*h,g=u*d-m*l,M=h*l-c*d,S=t*x+r*g+o*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(o*h-m*r)*E,e[2]=(u*r-o*c)*E,e[3]=g*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-u*t)*E,e[6]=M*E,e[7]=(r*d-h*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,u){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new vt;function xx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mS(){const i=Xc("canvas");return i.style.display="block",i}const Ig={};function Uo(i){i in Ig||(Ig[i]=!0,console.warn(i))}function gS(i,e,t){return new Promise(function(r,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function xS(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vS(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fg=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _S(){const i={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===$t&&(o.r=zr(o.r),o.g=zr(o.g),o.b=zr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===$t&&(o.r=Vo(o.r),o.g=Vo(o.g),o.b=Vo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ds?Wc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Yo]:{primaries:e,whitePoint:r,transfer:Wc,toXYZ:Fg,fromXYZ:Ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gi},outputColorSpaceConfig:{drawingBufferColorSpace:Gi}},[Gi]:{primaries:e,whitePoint:r,transfer:$t,toXYZ:Fg,fromXYZ:Ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gi}}}),i}const Ht=_S();function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let So;class yS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{So===void 0&&(So=Xc("canvas")),So.width=e.width,So.height=e.height;const r=So.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=So}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=zr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(zr(t[r]/255)*255):t[r]=zr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MS=0;class vx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?l.push($f(o[c].image)):l.push($f(o[c]))}else l=$f(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function $f(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;class Si extends Qo{constructor(e=Si.DEFAULT_IMAGE,t=Si.DEFAULT_MAPPING,r=Gs,o=Gs,l=xr,c=Ws,u=or,d=Br,h=Si.DEFAULT_ANISOTROPY,m=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Jo(),this.name="",this.source=new vx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=rx;Si.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,t=0,r=0,o=1){vn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],x=d[8],g=d[1],M=d[5],S=d[9],E=d[2],y=d[6],v=d[10];if(Math.abs(m-g)<.01&&Math.abs(x-E)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(x+E)<.1&&Math.abs(S+y)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,A=(M+1)/2,O=(v+1)/2,I=(m+g)/4,F=(x+E)/4,G=(S+y)/4;return L>A&&L>O?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=I/r,l=F/r):A>O?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=G/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=F/l,o=G/l),this.set(r,o,l,t),this}let N=Math.sqrt((y-S)*(y-S)+(x-E)*(x-E)+(g-m)*(g-m));return Math.abs(N)<.001&&(N=1),this.x=(y-S)/N,this.y=(x-E)/N,this.z=(g-m)/N,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ES extends Qo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Si(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends ES{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class _x extends Si{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ar,this.minFilter=ar,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Si{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ar,this.minFilter=ar,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,u){let d=r[o+0],h=r[o+1],m=r[o+2],x=r[o+3];const g=l[c+0],M=l[c+1],S=l[c+2],E=l[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=x;return}if(u===1){e[t+0]=g,e[t+1]=M,e[t+2]=S,e[t+3]=E;return}if(x!==E||d!==g||h!==M||m!==S){let y=1-u;const v=d*g+h*M+m*S+x*E,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const O=Math.sqrt(L),I=Math.atan2(O,v*N);y=Math.sin(y*I)/O,u=Math.sin(u*I)/O}const A=u*N;if(d=d*y+g*A,h=h*y+M*A,m=m*y+S*A,x=x*y+E*A,y===1-u){const O=1/Math.sqrt(d*d+h*h+m*m+x*x);d*=O,h*=O,m*=O,x*=O}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const u=r[o],d=r[o+1],h=r[o+2],m=r[o+3],x=l[c],g=l[c+1],M=l[c+2],S=l[c+3];return e[t]=u*S+m*x+d*M-h*g,e[t+1]=d*S+m*g+h*x-u*M,e[t+2]=h*S+m*M+u*g-d*x,e[t+3]=m*S-u*x-d*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),m=u(o/2),x=u(l/2),g=d(r/2),M=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=g*m*x+h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x-g*M*S;break;case"YXZ":this._x=g*m*x+h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x+g*M*S;break;case"ZXY":this._x=g*m*x-h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x-g*M*S;break;case"ZYX":this._x=g*m*x-h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x+g*M*S;break;case"YZX":this._x=g*m*x+h*M*S,this._y=h*M*x+g*m*S,this._z=h*m*S-g*M*x,this._w=h*m*x-g*M*S;break;case"XZY":this._x=g*m*x-h*M*S,this._y=h*M*x-g*m*S,this._z=h*m*S+g*M*x,this._w=h*m*x+g*M*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],u=t[5],d=t[9],h=t[2],m=t[6],x=t[10],g=r+u+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(m-d)*M,this._y=(l-h)*M,this._z=(c-o)*M}else if(r>u&&r>x){const M=2*Math.sqrt(1+r-u-x);this._w=(m-d)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(l+h)/M}else if(u>x){const M=2*Math.sqrt(1+u-r-x);this._w=(l-h)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(d+m)/M}else{const M=2*Math.sqrt(1+x-r-u);this._w=(c-o)/M,this._x=(l+h)/M,this._y=(d+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+o*h-l*d,this._y=o*m+c*d+l*u-r*h,this._z=l*m+c*h+r*d-o*u,this._w=c*m-r*u-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let u=c*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,u),x=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=c*x+this._w*g,this._x=r*x+this._x*g,this._y=o*x+this._y*g,this._z=l*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),m=2*(u*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-u*m,this.y=r+d*m+u*h-l*x,this.z=o+d*x+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-l*u,this.y=l*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new le,kg=new qa;class Ka{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(l,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),uc.subVectors(this.max,Da),Eo.subVectors(e.a,Da),wo.subVectors(e.b,Da),To.subVectors(e.c,Da),ss.subVectors(wo,Eo),os.subVectors(To,wo),Ns.subVectors(Eo,To);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,os.z,0,-os.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-os.y,os.x,0,-Ns.y,Ns.x,0];return!Zf(t,Eo,wo,To,uc)||(t=[1,0,0,0,1,0,0,0,1],!Zf(t,Eo,wo,To,uc))?!1:(fc.crossVectors(ss,os),t=[fc.x,fc.y,fc.z],Zf(t,Eo,wo,To,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new le,new le,new le,new le,new le,new le,new le,new le],nr=new le,cc=new Ka,Eo=new le,wo=new le,To=new le,ss=new le,os=new le,Ns=new le,Da=new le,uc=new le,fc=new le,Is=new le;function Zf(i,e,t,r,o){for(let l=0,c=i.length-3;l<=c;l+=3){Is.fromArray(i,l);const u=o.x*Math.abs(Is.x)+o.y*Math.abs(Is.y)+o.z*Math.abs(Is.z),d=e.dot(Is),h=t.dot(Is),m=r.dot(Is);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const TS=new Ka,Na=new le,qf=new le;class iu{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):TS.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(qf)),this.expandByPoint(Na.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new le,Kf=new le,dc=new le,as=new le,Qf=new le,hc=new le,Jf=new le;class yx{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Kf.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Kf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(dc),u=as.dot(this.direction),d=-as.dot(dc),h=as.lengthSq(),m=Math.abs(1-c*c);let x,g,M,S;if(m>0)if(x=c*d-u,g=c*u-d,S=l*m,x>=0)if(g>=-S)if(g<=S){const E=1/m;x*=E,g*=E,M=x*(x+c*g+2*u)+g*(c*x+g+2*d)+h}else g=l,x=Math.max(0,-(c*g+u)),M=-x*x+g*(g+2*d)+h;else g=-l,x=Math.max(0,-(c*g+u)),M=-x*x+g*(g+2*d)+h;else g<=-S?(x=Math.max(0,-(-c*l+u)),g=x>0?-l:Math.min(Math.max(-l,-d),l),M=-x*x+g*(g+2*d)+h):g<=S?(x=0,g=Math.min(Math.max(-l,-d),l),M=g*(g+2*d)+h):(x=Math.max(0,-(c*l+u)),g=x>0?l:Math.min(Math.max(-l,-d),l),M=-x*x+g*(g+2*d)+h);else g=c>0?-l:l,x=Math.max(0,-(c*g+u)),M=-x*x+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Kf).addScaledVector(dc,g),M}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const r=Lr.dot(this.direction),o=Lr.dot(Lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,u,d;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(u=(e.min.z-g.z)*x,d=(e.max.z-g.z)*x):(u=(e.max.z-g.z)*x,d=(e.min.z-g.z)*x),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,r,o,l){Qf.subVectors(t,e),hc.subVectors(r,e),Jf.crossVectors(Qf,hc);let c=this.direction.dot(Jf),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;as.subVectors(this.origin,e);const d=u*this.direction.dot(hc.crossVectors(as,hc));if(d<0)return null;const h=u*this.direction.dot(Qf.cross(as));if(h<0||d+h>c)return null;const m=-u*as.dot(Jf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,t,r,o,l,c,u,d,h,m,x,g,M,S,E,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,d,h,m,x,g,M,S,E,y)}set(e,t,r,o,l,c,u,d,h,m,x,g,M,S,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=u,v[13]=d,v[2]=h,v[6]=m,v[10]=x,v[14]=g,v[3]=M,v[7]=S,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Co.setFromMatrixColumn(e,0).length(),l=1/Co.setFromMatrixColumn(e,1).length(),c=1/Co.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*m,M=c*x,S=u*m,E=u*x;t[0]=d*m,t[4]=-d*x,t[8]=h,t[1]=M+S*h,t[5]=g-E*h,t[9]=-u*d,t[2]=E-g*h,t[6]=S+M*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*m,M=d*x,S=h*m,E=h*x;t[0]=g+E*u,t[4]=S*u-M,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-u,t[2]=M*u-S,t[6]=E+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*m,M=d*x,S=h*m,E=h*x;t[0]=g-E*u,t[4]=-c*x,t[8]=S+M*u,t[1]=M+S*u,t[5]=c*m,t[9]=E-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*m,M=c*x,S=u*m,E=u*x;t[0]=d*m,t[4]=S*h-M,t[8]=g*h+E,t[1]=d*x,t[5]=E*h+g,t[9]=M*h-S,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,M=c*h,S=u*d,E=u*h;t[0]=d*m,t[4]=E-g*x,t[8]=S*x+M,t[1]=x,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=M*x+S,t[10]=g-E*x}else if(e.order==="XZY"){const g=c*d,M=c*h,S=u*d,E=u*h;t[0]=d*m,t[4]=-x,t[8]=h*m,t[1]=g*x+E,t[5]=c*m,t[9]=M*x-S,t[2]=S*x-M,t[6]=u*m,t[10]=E*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CS,e,AS)}lookAt(e,t,r){const o=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),ls.crossVectors(r,bi),ls.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),ls.crossVectors(r,bi)),ls.normalize(),pc.crossVectors(bi,ls),o[0]=ls.x,o[4]=pc.x,o[8]=bi.x,o[1]=ls.y,o[5]=pc.y,o[9]=bi.y,o[2]=ls.z,o[6]=pc.z,o[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],m=r[1],x=r[5],g=r[9],M=r[13],S=r[2],E=r[6],y=r[10],v=r[14],N=r[3],L=r[7],A=r[11],O=r[15],I=o[0],F=o[4],G=o[8],b=o[12],R=o[1],B=o[5],he=o[9],V=o[13],Y=o[2],Q=o[6],W=o[10],ee=o[14],D=o[3],ne=o[7],te=o[11],H=o[15];return l[0]=c*I+u*R+d*Y+h*D,l[4]=c*F+u*B+d*Q+h*ne,l[8]=c*G+u*he+d*W+h*te,l[12]=c*b+u*V+d*ee+h*H,l[1]=m*I+x*R+g*Y+M*D,l[5]=m*F+x*B+g*Q+M*ne,l[9]=m*G+x*he+g*W+M*te,l[13]=m*b+x*V+g*ee+M*H,l[2]=S*I+E*R+y*Y+v*D,l[6]=S*F+E*B+y*Q+v*ne,l[10]=S*G+E*he+y*W+v*te,l[14]=S*b+E*V+y*ee+v*H,l[3]=N*I+L*R+A*Y+O*D,l[7]=N*F+L*B+A*Q+O*ne,l[11]=N*G+L*he+A*W+O*te,l[15]=N*b+L*V+A*ee+O*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],u=e[5],d=e[9],h=e[13],m=e[2],x=e[6],g=e[10],M=e[14],S=e[3],E=e[7],y=e[11],v=e[15];return S*(+l*d*x-o*h*x-l*u*g+r*h*g+o*u*M-r*d*M)+E*(+t*d*M-t*h*g+l*c*g-o*c*M+o*h*m-l*d*m)+y*(+t*h*x-t*u*M-l*c*x+r*c*M+l*u*m-r*h*m)+v*(-o*u*m-t*d*x+t*u*g+o*c*x-r*c*g+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],x=e[9],g=e[10],M=e[11],S=e[12],E=e[13],y=e[14],v=e[15],N=x*y*h-E*g*h+E*d*M-u*y*M-x*d*v+u*g*v,L=S*g*h-m*y*h-S*d*M+c*y*M+m*d*v-c*g*v,A=m*E*h-S*x*h+S*u*M-c*E*M-m*u*v+c*x*v,O=S*x*d-m*E*d-S*u*g+c*E*g+m*u*y-c*x*y,I=t*N+r*L+o*A+l*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=N*F,e[1]=(E*g*l-x*y*l-E*o*M+r*y*M+x*o*v-r*g*v)*F,e[2]=(u*y*l-E*d*l+E*o*h-r*y*h-u*o*v+r*d*v)*F,e[3]=(x*d*l-u*g*l-x*o*h+r*g*h+u*o*M-r*d*M)*F,e[4]=L*F,e[5]=(m*y*l-S*g*l+S*o*M-t*y*M-m*o*v+t*g*v)*F,e[6]=(S*d*l-c*y*l-S*o*h+t*y*h+c*o*v-t*d*v)*F,e[7]=(c*g*l-m*d*l+m*o*h-t*g*h-c*o*M+t*d*M)*F,e[8]=A*F,e[9]=(S*x*l-m*E*l-S*r*M+t*E*M+m*r*v-t*x*v)*F,e[10]=(c*E*l-S*u*l+S*r*h-t*E*h-c*r*v+t*u*v)*F,e[11]=(m*u*l-c*x*l-m*r*h+t*x*h+c*r*M-t*u*M)*F,e[12]=O*F,e[13]=(m*E*o-S*x*o+S*r*g-t*E*g-m*r*y+t*x*y)*F,e[14]=(S*u*o-c*E*o-S*r*d+t*E*d+c*r*y-t*u*y)*F,e[15]=(c*x*o-m*u*o+m*r*d-t*x*d-c*r*g+t*u*g)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,u=e.y,d=e.z,h=l*c,m=l*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,m*u+r,m*d-o*c,0,h*d-o*u,m*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,u=t._z,d=t._w,h=l+l,m=c+c,x=u+u,g=l*h,M=l*m,S=l*x,E=c*m,y=c*x,v=u*x,N=d*h,L=d*m,A=d*x,O=r.x,I=r.y,F=r.z;return o[0]=(1-(E+v))*O,o[1]=(M+A)*O,o[2]=(S-L)*O,o[3]=0,o[4]=(M-A)*I,o[5]=(1-(g+v))*I,o[6]=(y+N)*I,o[7]=0,o[8]=(S+L)*F,o[9]=(y-N)*F,o[10]=(1-(g+E))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Co.set(o[0],o[1],o[2]).length();const c=Co.set(o[4],o[5],o[6]).length(),u=Co.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ir.copy(this);const h=1/l,m=1/c,x=1/u;return ir.elements[0]*=h,ir.elements[1]*=h,ir.elements[2]*=h,ir.elements[4]*=m,ir.elements[5]*=m,ir.elements[6]*=m,ir.elements[8]*=x,ir.elements[9]*=x,ir.elements[10]*=x,t.setFromRotationMatrix(ir),r.x=l,r.y=c,r.z=u,this}makePerspective(e,t,r,o,l,c,u=Or){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),x=(t+e)/(t-e),g=(r+o)/(r-o);let M,S;if(u===Or)M=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(u===jc)M=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,c,u=Or){const d=this.elements,h=1/(t-e),m=1/(r-o),x=1/(c-l),g=(t+e)*h,M=(r+o)*m;let S,E;if(u===Or)S=(c+l)*x,E=-2*x;else if(u===jc)S=l*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-M,d[2]=0,d[6]=0,d[10]=E,d[14]=-S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Co=new le,ir=new mn,CS=new le(0,0,0),AS=new le(1,1,1),ls=new le,pc=new le,bi=new le,Og=new mn,zg=new qa;class vr{constructor(e=0,t=0,r=0,o=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],x=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const Bg=new le,Ao=new qa,Dr=new mn,mc=new le,Ia=new le,bS=new le,PS=new qa,Hg=new le(1,0,0),Vg=new le(0,1,0),Gg=new le(0,0,1),Wg={type:"added"},LS={type:"removed"},Ro={type:"childadded",child:null},ed={type:"childremoved",child:null};class Wn extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new le,t=new vr,r=new qa,o=new le(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mn},normalMatrix:{value:new vt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Gg,e)}translateOnAxis(e,t){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?mc.copy(e):mc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Ia,mc,this.up):Dr.lookAt(mc,Ia,this.up),this.quaternion.setFromRotationMatrix(Dr),o&&(Dr.extractRotation(o.matrixWorld),Ao.setFromRotationMatrix(Dr),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LS),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wg),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(l(e.materials,this.material[d]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(l(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),g=c(e.skeletons),M=c(e.animations),S=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new le(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rr=new le,Nr=new le,td=new le,Ir=new le,bo=new le,Po=new le,jg=new le,nd=new le,id=new le,rd=new le,sd=new vn,od=new vn,ad=new vn;class ji{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),rr.subVectors(e,t),o.cross(rr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){rr.subVectors(o,t),Nr.subVectors(r,t),td.subVectors(e,t);const c=rr.dot(rr),u=rr.dot(Nr),d=rr.dot(td),h=Nr.dot(Nr),m=Nr.dot(td),x=c*h-u*u;if(x===0)return l.set(0,0,0),null;const g=1/x,M=(h*d-u*m)*g,S=(c*m-u*d)*g;return l.set(1-M-S,S,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,r,o,l,c,u,d){return this.getBarycoord(e,t,r,o,Ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Ir.x),d.addScaledVector(c,Ir.y),d.addScaledVector(u,Ir.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return sd.setScalar(0),od.setScalar(0),ad.setScalar(0),sd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(sd,l.x),c.addScaledVector(od,l.y),c.addScaledVector(ad,l.z),c}static isFrontFacing(e,t,r,o){return rr.subVectors(r,t),Nr.subVectors(e,t),rr.cross(Nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),rr.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ji.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,u;bo.subVectors(o,r),Po.subVectors(l,r),nd.subVectors(e,r);const d=bo.dot(nd),h=Po.dot(nd);if(d<=0&&h<=0)return t.copy(r);id.subVectors(e,o);const m=bo.dot(id),x=Po.dot(id);if(m>=0&&x<=m)return t.copy(o);const g=d*x-m*h;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(bo,c);rd.subVectors(e,l);const M=bo.dot(rd),S=Po.dot(rd);if(S>=0&&M<=S)return t.copy(l);const E=M*h-d*S;if(E<=0&&h>=0&&S<=0)return u=h/(h-S),t.copy(r).addScaledVector(Po,u);const y=m*S-M*x;if(y<=0&&x-m>=0&&M-S>=0)return jg.subVectors(l,o),u=(x-m)/(x-m+(M-S)),t.copy(o).addScaledVector(jg,u);const v=1/(y+E+g);return c=E*v,u=g*v,t.copy(r).addScaledVector(bo,c).addScaledVector(Po,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},gc={h:0,s:0,l:0};function ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class It{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ht.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ht.workingColorSpace){if(e=Ih(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=ld(c,l,e+1/3),this.g=ld(c,l,e),this.b=ld(c,l,e-1/3)}return Ht.toWorkingColorSpace(this,o),this}setStyle(e,t=Gi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gi){const r=Sx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gi){return Ht.fromWorkingColorSpace(ni.copy(this),e),Math.round(Pt(ni.r*255,0,255))*65536+Math.round(Pt(ni.g*255,0,255))*256+Math.round(Pt(ni.b*255,0,255))}getHexString(e=Gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ni.copy(this),t);const r=ni.r,o=ni.g,l=ni.b,c=Math.max(r,o,l),u=Math.min(r,o,l);let d,h;const m=(u+c)/2;if(u===c)d=0,h=0;else{const x=c-u;switch(h=m<=.5?x/(c+u):x/(2-c-u),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Gi){Ht.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,r=ni.g,o=ni.b;return e!==Gi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(gc);const r=Ha(cs.h,gc.h,t),o=Ha(cs.s,gc.s,t),l=Ha(cs.l,gc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new It;It.NAMES=Sx;let DS=0;class ea extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=zo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Cd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(r.blending=this.blending),this.side!==xs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Td&&(r.blendSrc=this.blendSrc),this.blendDst!==Cd&&(r.blendDst=this.blendDst),this.blendEquation!==Hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ex extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rn=new le,xc=new Vt;class lr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lg,this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),r=ci(r,this.array),o=ci(o,this.array),l=ci(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lg&&(e.usage=this.usage),e}}class wx extends lr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Tx extends lr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $i extends lr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let NS=0;const Vi=new mn,cd=new Wn,Lo=new le,Pi=new Ka,Fa=new Ka,Gn=new le;class cr extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Tx:wx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,r){return Vi.makeTranslation(e,t,r),this.applyMatrix4(Vi),this}scale(e,t,r){return Vi.makeScale(e,t,r),this.applyMatrix4(Vi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $i(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];Fa.setFromBufferAttribute(u),this.morphTargetsRelative?(Gn.addVectors(Pi.min,Fa.min),Pi.expandByPoint(Gn),Gn.addVectors(Pi.max,Fa.max),Pi.expandByPoint(Gn)):(Pi.expandByPoint(Fa.min),Pi.expandByPoint(Fa.max))}Pi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Gn));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)Gn.fromBufferAttribute(u,h),d&&(Lo.fromBufferAttribute(e,h),Gn.add(Lo)),o=Math.max(o,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let G=0;G<r.count;G++)u[G]=new le,d[G]=new le;const h=new le,m=new le,x=new le,g=new Vt,M=new Vt,S=new Vt,E=new le,y=new le;function v(G,b,R){h.fromBufferAttribute(r,G),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,R),g.fromBufferAttribute(l,G),M.fromBufferAttribute(l,b),S.fromBufferAttribute(l,R),m.sub(h),x.sub(h),M.sub(g),S.sub(g);const B=1/(M.x*S.y-S.x*M.y);isFinite(B)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(x,-M.y).multiplyScalar(B),y.copy(x).multiplyScalar(M.x).addScaledVector(m,-S.x).multiplyScalar(B),u[G].add(E),u[b].add(E),u[R].add(E),d[G].add(y),d[b].add(y),d[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,b=N.length;G<b;++G){const R=N[G],B=R.start,he=R.count;for(let V=B,Y=B+he;V<Y;V+=3)v(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const L=new le,A=new le,O=new le,I=new le;function F(G){O.fromBufferAttribute(o,G),I.copy(O);const b=u[G];L.copy(b),L.sub(O.multiplyScalar(O.dot(b))).normalize(),A.crossVectors(I,b);const B=A.dot(d[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,B)}for(let G=0,b=N.length;G<b;++G){const R=N[G],B=R.start,he=R.count;for(let V=B,Y=B+he;V<Y;V+=3)F(e.getX(V+0)),F(e.getX(V+1)),F(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new le,l=new le,c=new le,u=new le,d=new le,h=new le,m=new le,x=new le;if(e)for(let g=0,M=e.count;g<M;g+=3){const S=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,y),u.add(m),d.add(m),h.add(m),r.setXYZ(S,u.x,u.y,u.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,x=u.normalized,g=new h.constructor(d.length*m);let M=0,S=0;for(let E=0,y=d.length;E<y;E++){u.isInterleavedBufferAttribute?M=d[E]*u.data.stride+u.offset:M=d[E]*m;for(let v=0;v<m;v++)g[S++]=h[M++]}return new lr(g,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const d=[],h=l[u];for(let m=0,x=h.length;m<x;m++){const g=h[m],M=e(g,r);d.push(M)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let x=0,g=h.length;x<g;x++){const M=h[x];m.push(M.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],x=l[h];for(let g=0,M=x.length;g<M;g++)m.push(x[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xg=new mn,Fs=new yx,vc=new iu,$g=new le,_c=new le,yc=new le,Mc=new le,ud=new le,Sc=new le,Yg=new le,Ec=new le;class Xi extends Wn{constructor(e=new cr,t=new Ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){Sc.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=u[d],x=l[d];m!==0&&(ud.fromBufferAttribute(x,e),c?Sc.addScaledVector(ud,m):Sc.addScaledVector(ud.sub(t),m))}t.add(Sc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(l),Fs.copy(e.ray).recast(e.near),!(vc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(vc,$g)===null||Fs.origin.distanceToSquared($g)>(e.far-e.near)**2))&&(Xg.copy(l).invert(),Fs.copy(e.ray).applyMatrix4(Xg),!(r.boundingBox!==null&&Fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,u=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,g=l.groups,M=l.drawRange;if(u!==null)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const y=g[S],v=c[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let A=N,O=L;A<O;A+=3){const I=u.getX(A),F=u.getX(A+1),G=u.getX(A+2);o=wc(this,v,e,r,h,m,x,I,F,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(u.count,M.start+M.count);for(let y=S,v=E;y<v;y+=3){const N=u.getX(y),L=u.getX(y+1),A=u.getX(y+2);o=wc(this,c,e,r,h,m,x,N,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,E=g.length;S<E;S++){const y=g[S],v=c[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let A=N,O=L;A<O;A+=3){const I=A,F=A+1,G=A+2;o=wc(this,v,e,r,h,m,x,I,F,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let y=S,v=E;y<v;y+=3){const N=y,L=y+1,A=y+2;o=wc(this,c,e,r,h,m,x,N,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function IS(i,e,t,r,o,l,c,u){let d;if(e.side===Mi?d=r.intersectTriangle(c,l,o,!0,u):d=r.intersectTriangle(o,l,c,e.side===xs,u),d===null)return null;Ec.copy(u),Ec.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ec);return h<t.near||h>t.far?null:{distance:h,point:Ec.clone(),object:i}}function wc(i,e,t,r,o,l,c,u,d,h){i.getVertexPosition(u,_c),i.getVertexPosition(d,yc),i.getVertexPosition(h,Mc);const m=IS(i,e,t,r,_c,yc,Mc,Yg);if(m){const x=new le;ji.getBarycoord(Yg,_c,yc,Mc,x),o&&(m.uv=ji.getInterpolatedAttribute(o,u,d,h,x,new Vt)),l&&(m.uv1=ji.getInterpolatedAttribute(l,u,d,h,x,new Vt)),c&&(m.normal=ji.getInterpolatedAttribute(c,u,d,h,x,new le),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new le,materialIndex:0};ji.getNormal(_c,yc,Mc,g.normal),m.face=g,m.barycoord=x}return m}class Qa extends cr{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const u=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],x=[];let g=0,M=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new $i(h,3)),this.setAttribute("normal",new $i(m,3)),this.setAttribute("uv",new $i(x,2));function S(E,y,v,N,L,A,O,I,F,G,b){const R=A/F,B=O/G,he=A/2,V=O/2,Y=I/2,Q=F+1,W=G+1;let ee=0,D=0;const ne=new le;for(let te=0;te<W;te++){const H=te*B-V;for(let pe=0;pe<Q;pe++){const Ne=pe*R-he;ne[E]=Ne*N,ne[y]=H*L,ne[v]=Y,h.push(ne.x,ne.y,ne.z),ne[E]=0,ne[y]=0,ne[v]=I>0?1:-1,m.push(ne.x,ne.y,ne.z),x.push(pe/F),x.push(1-te/G),ee+=1}}for(let te=0;te<G;te++)for(let H=0;H<F;H++){const pe=g+H+Q*te,Ne=g+H+Q*(te+1),re=g+(H+1)+Q*(te+1),xe=g+(H+1)+Q*te;d.push(pe,Ne,xe),d.push(Ne,re,xe),D+=6}u.addGroup(M,D,b),M+=D,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function ui(i){const e={};for(let t=0;t<i.length;t++){const r=Zo(i[t]);for(const o in r)e[o]=r[o]}return e}function FS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const US={clone:Zo,merge:ui};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=OS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ax extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new le,Zg=new Vt,qg=new Vt;class Wi extends Ax{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Zg,qg),t.subVectors(qg,Zg)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Do=-90,No=1;class zS extends Wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(Do,No,e,t);o.layers=this.layers,this.add(o);const l=new Wi(Do,No,e,t);l.layers=this.layers,this.add(l);const c=new Wi(Do,No,e,t);c.layers=this.layers,this.add(c);const u=new Wi(Do,No,e,t);u.layers=this.layers,this.add(u);const d=new Wi(Do,No,e,t);d.layers=this.layers,this.add(d);const h=new Wi(Do,No,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,u,d]=t;for(const h of t)this.remove(h);if(e===Or)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,d,h,m]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(x,g,M),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Rx extends Si{constructor(e,t,r,o,l,c,u,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Wo,super(e,t,r,o,l,c,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BS extends Xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Rx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qa(5,5,5),l=new vs({name:"CubemapFromEquirect",uniforms:Zo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mi,blending:ms});l.uniforms.tEquirect.value=t;const c=new Xi(o,l),u=t.minFilter;return t.minFilter===Ws&&(t.minFilter=xr),new zS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class HS extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fd=new le,VS=new le,GS=new vt;class zs{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(VS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||GS.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new iu,Tc=new le;class Fh{constructor(e=new zs,t=new zs,r=new zs,o=new zs,l=new zs,c=new zs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Or){const r=this.planes,o=e.elements,l=o[0],c=o[1],u=o[2],d=o[3],h=o[4],m=o[5],x=o[6],g=o[7],M=o[8],S=o[9],E=o[10],y=o[11],v=o[12],N=o[13],L=o[14],A=o[15];if(r[0].setComponents(d-l,g-h,y-M,A-v).normalize(),r[1].setComponents(d+l,g+h,y+M,A+v).normalize(),r[2].setComponents(d+c,g+m,y+S,A+N).normalize(),r[3].setComponents(d-c,g-m,y-S,A-N).normalize(),r[4].setComponents(d-u,g-x,y-E,A-L).normalize(),t===Or)r[5].setComponents(d+u,g+x,y+E,A+L).normalize();else if(t===jc)r[5].setComponents(u,x,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Tc.x=o.normal.x>0?e.max.x:e.min.x,Tc.y=o.normal.y>0?e.max.y:e.min.y,Tc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new le,Yc=new le,Kg=new mn,Ua=new yx,Cc=new iu,dd=new le,Qg=new le;class WS extends Wn{constructor(e=new cr,t=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)$c.fromBufferAttribute(t,o-1),Yc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=$c.distanceTo(Yc);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(o),Cc.radius+=l,e.ray.intersectsSphere(Cc)===!1)return;Kg.copy(o).invert(),Ua.copy(e.ray).applyMatrix4(Kg);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const M=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=M,y=S-1;E<y;E+=h){const v=m.getX(E),N=m.getX(E+1),L=Ac(this,e,Ua,d,v,N);L&&t.push(L)}if(this.isLineLoop){const E=m.getX(S-1),y=m.getX(M),v=Ac(this,e,Ua,d,E,y);v&&t.push(v)}}else{const M=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=M,y=S-1;E<y;E+=h){const v=Ac(this,e,Ua,d,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Ac(this,e,Ua,d,S-1,M);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Ac(i,e,t,r,o,l){const c=i.geometry.attributes.position;if($c.fromBufferAttribute(c,o),Yc.fromBufferAttribute(c,l),t.distanceSqToSegment($c,Yc,dd,Qg)>r)return;dd.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(dd);if(!(d<e.near||d>e.far))return{distance:d,point:Qg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Jg=new le,e0=new le;class uh extends WS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Jg.fromBufferAttribute(t,o),e0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Jg.distanceTo(e0);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ka extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class bx extends Si{constructor(e,t,r,o,l,c,u,d,h,m=Bo){if(m!==Bo&&m!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Bo&&(r=js),r===void 0&&m===$o&&(r=Xo),super(null,o,l,c,u,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:ar,this.minFilter=d!==void 0?d:ar,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rc=new le,bc=new le,hd=new le,Pc=new ji;class jS extends cr{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Ho*t),c=e.getIndex(),u=e.getAttribute("position"),d=c?c.count:u.count,h=[0,0,0],m=["a","b","c"],x=new Array(3),g={},M=[];for(let S=0;S<d;S+=3){c?(h[0]=c.getX(S),h[1]=c.getX(S+1),h[2]=c.getX(S+2)):(h[0]=S,h[1]=S+1,h[2]=S+2);const{a:E,b:y,c:v}=Pc;if(E.fromBufferAttribute(u,h[0]),y.fromBufferAttribute(u,h[1]),v.fromBufferAttribute(u,h[2]),Pc.getNormal(hd),x[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,x[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,x[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let N=0;N<3;N++){const L=(N+1)%3,A=x[N],O=x[L],I=Pc[m[N]],F=Pc[m[L]],G=`${A}_${O}`,b=`${O}_${A}`;b in g&&g[b]?(hd.dot(g[b].normal)<=l&&(M.push(I.x,I.y,I.z),M.push(F.x,F.y,F.z)),g[b]=null):G in g||(g[G]={index0:h[N],index1:h[L],normal:hd.clone()})}}for(const S in g)if(g[S]){const{index0:E,index1:y}=g[S];Rc.fromBufferAttribute(u,E),bc.fromBufferAttribute(u,y),M.push(Rc.x,Rc.y,Rc.z),M.push(bc.x,bc.y,bc.z)}this.setAttribute("position",new $i(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const XS={triangulate:function(i,e,t=2){const r=e&&e.length,o=r?e[0]*t:i.length;let l=Px(i,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let u,d,h,m,x,g,M;if(r&&(l=KS(i,e,l,t)),i.length>80*t){u=h=i[0],d=m=i[1];for(let S=t;S<o;S+=t)x=i[S],g=i[S+1],x<u&&(u=x),g<d&&(d=g),x>h&&(h=x),g>m&&(m=g);M=Math.max(h-u,m-d),M=M!==0?32767/M:0}return ja(l,c,t,u,d,M,0),c}};function Px(i,e,t,r,o){let l,c;if(o===l1(i,e,t,r)>0)for(l=e;l<t;l+=r)c=t0(l,i[l],i[l+1],c);else for(l=t-r;l>=e;l-=r)c=t0(l,i[l],i[l+1],c);return c&&su(c,c.next)&&($a(c),c=c.next),c}function $s(i,e){if(!i)return i;e||(e=i);let t=i,r;do if(r=!1,!t.steiner&&(su(t,t.next)||pn(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ja(i,e,t,r,o,l,c){if(!i)return;!c&&l&&n1(i,r,o,l);let u=i,d,h;for(;i.prev!==i.next;){if(d=i.prev,h=i.next,l?YS(i,r,o,l):$S(i)){e.push(d.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),$a(i),i=h.next,u=h.next;continue}if(i=h,i===u){c?c===1?(i=ZS($s(i),e,t),ja(i,e,t,r,o,l,2)):c===2&&qS(i,e,t,r,o,l):ja($s(i),e,t,r,o,l,1);break}}}function $S(i){const e=i.prev,t=i,r=i.next;if(pn(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,u=e.y,d=t.y,h=r.y,m=o<l?o<c?o:c:l<c?l:c,x=u<d?u<h?u:h:d<h?d:h,g=o>l?o>c?o:c:l>c?l:c,M=u>d?u>h?u:h:d>h?d:h;let S=r.next;for(;S!==e;){if(S.x>=m&&S.x<=g&&S.y>=x&&S.y<=M&&ko(o,u,l,d,c,h,S.x,S.y)&&pn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function YS(i,e,t,r){const o=i.prev,l=i,c=i.next;if(pn(o,l,c)>=0)return!1;const u=o.x,d=l.x,h=c.x,m=o.y,x=l.y,g=c.y,M=u<d?u<h?u:h:d<h?d:h,S=m<x?m<g?m:g:x<g?x:g,E=u>d?u>h?u:h:d>h?d:h,y=m>x?m>g?m:g:x>g?x:g,v=fh(M,S,e,t,r),N=fh(E,y,e,t,r);let L=i.prevZ,A=i.nextZ;for(;L&&L.z>=v&&A&&A.z<=N;){if(L.x>=M&&L.x<=E&&L.y>=S&&L.y<=y&&L!==o&&L!==c&&ko(u,m,d,x,h,g,L.x,L.y)&&pn(L.prev,L,L.next)>=0||(L=L.prevZ,A.x>=M&&A.x<=E&&A.y>=S&&A.y<=y&&A!==o&&A!==c&&ko(u,m,d,x,h,g,A.x,A.y)&&pn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;L&&L.z>=v;){if(L.x>=M&&L.x<=E&&L.y>=S&&L.y<=y&&L!==o&&L!==c&&ko(u,m,d,x,h,g,L.x,L.y)&&pn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;A&&A.z<=N;){if(A.x>=M&&A.x<=E&&A.y>=S&&A.y<=y&&A!==o&&A!==c&&ko(u,m,d,x,h,g,A.x,A.y)&&pn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function ZS(i,e,t){let r=i;do{const o=r.prev,l=r.next.next;!su(o,l)&&Lx(o,r,r.next,l)&&Xa(o,l)&&Xa(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),$a(r),$a(r.next),r=i=l),r=r.next}while(r!==i);return $s(r)}function qS(i,e,t,r,o,l){let c=i;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&s1(c,u)){let d=Dx(c,u);c=$s(c,c.next),d=$s(d,d.next),ja(c,e,t,r,o,l,0),ja(d,e,t,r,o,l,0);return}u=u.next}c=c.next}while(c!==i)}function KS(i,e,t,r){const o=[];let l,c,u,d,h;for(l=0,c=e.length;l<c;l++)u=e[l]*r,d=l<c-1?e[l+1]*r:i.length,h=Px(i,u,d,r,!1),h===h.next&&(h.steiner=!0),o.push(r1(h));for(o.sort(QS),l=0;l<o.length;l++)t=JS(o[l],t);return t}function QS(i,e){return i.x-e.x}function JS(i,e){const t=e1(i,e);if(!t)return e;const r=Dx(t,i);return $s(r,r.next),$s(t,t.next)}function e1(i,e){let t=e,r=-1/0,o;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const g=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=l&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===l))return o}t=t.next}while(t!==e);if(!o)return null;const u=o,d=o.x,h=o.y;let m=1/0,x;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&ko(c<h?l:r,c,d,h,c<h?r:l,c,t.x,t.y)&&(x=Math.abs(c-t.y)/(l-t.x),Xa(t,i)&&(x<m||x===m&&(t.x>o.x||t.x===o.x&&t1(o,t)))&&(o=t,m=x)),t=t.next;while(t!==u);return o}function t1(i,e){return pn(i.prev,i,e.prev)<0&&pn(e.next,i,i.next)<0}function n1(i,e,t,r){let o=i;do o.z===0&&(o.z=fh(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,i1(o)}function i1(i){let e,t,r,o,l,c,u,d,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,r=t,u=0,e=0;e<h&&(u++,r=r.nextZ,!!r);e++);for(d=h;u>0||d>0&&r;)u!==0&&(d===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,u--):(o=r,r=r.nextZ,d--),l?l.nextZ=o:i=o,o.prevZ=l,l=o;t=r}l.nextZ=null,h*=2}while(c>1);return i}function fh(i,e,t,r,o){return i=(i-t)*o|0,e=(e-r)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function r1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ko(i,e,t,r,o,l,c,u){return(o-c)*(e-u)>=(i-c)*(l-u)&&(i-c)*(r-u)>=(t-c)*(e-u)&&(t-c)*(l-u)>=(o-c)*(r-u)}function s1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!o1(i,e)&&(Xa(i,e)&&Xa(e,i)&&a1(i,e)&&(pn(i.prev,i,e.prev)||pn(i,e.prev,e))||su(i,e)&&pn(i.prev,i,i.next)>0&&pn(e.prev,e,e.next)>0)}function pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function su(i,e){return i.x===e.x&&i.y===e.y}function Lx(i,e,t,r){const o=Dc(pn(i,e,t)),l=Dc(pn(i,e,r)),c=Dc(pn(t,r,i)),u=Dc(pn(t,r,e));return!!(o!==l&&c!==u||o===0&&Lc(i,t,e)||l===0&&Lc(i,r,e)||c===0&&Lc(t,i,r)||u===0&&Lc(t,e,r))}function Lc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dc(i){return i>0?1:i<0?-1:0}function o1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Lx(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xa(i,e){return pn(i.prev,i,i.next)<0?pn(i,e,i.next)>=0&&pn(i,i.prev,e)>=0:pn(i,e,i.prev)<0||pn(i,i.next,e)<0}function a1(i,e){let t=i,r=!1;const o=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==i);return r}function Dx(i,e){const t=new dh(i.i,i.x,i.y),r=new dh(e.i,e.x,e.y),o=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function t0(i,e,t,r){const o=new dh(i,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function $a(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l1(i,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return o}class Uh{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Uh.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];n0(e),i0(r,e);let c=e.length;t.forEach(n0);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,i0(r,t[d]);const u=XS.triangulate(r,o);for(let d=0;d<u.length;d+=3)l.push(u.slice(d,d+3));return l}}function n0(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function i0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ou extends cr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,m=d+1,x=e/u,g=t/d,M=[],S=[],E=[],y=[];for(let v=0;v<m;v++){const N=v*g-c;for(let L=0;L<h;L++){const A=L*x-l;S.push(A,-N,0),E.push(0,0,1),y.push(L/u),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let N=0;N<u;N++){const L=N+h*v,A=N+h*(v+1),O=N+1+h*(v+1),I=N+1+h*v;M.push(L,A,I),M.push(A,O,I)}this.setIndex(M),this.setAttribute("position",new $i(S,3)),this.setAttribute("normal",new $i(E,3)),this.setAttribute("uv",new $i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.width,e.height,e.widthSegments,e.heightSegments)}}class kh extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mx,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c1 extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nx extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class f1 extends Nx{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pd=new mn,r0=new le,s0=new le;class d1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;r0.setFromMatrixPosition(e.matrixWorld),t.position.copy(r0),s0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s0),t.updateMatrixWorld(),pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ix extends Ax{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class h1 extends d1{constructor(){super(new Ix(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends Nx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new h1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class m1 extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class g1 extends uh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new cr;o.setAttribute("position",new $i(t,3)),o.setAttribute("color",new $i(r,3));const l=new ru({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,t,r){const o=new It,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(t),o.toArray(l,6),o.toArray(l,9),o.set(r),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function o0(i,e,t,r){const o=x1(r);switch(t){case lx:return i*e;case ux:return i*e;case fx:return i*e*2;case dx:return i*e/o.components*o.byteLength;case Lh:return i*e/o.components*o.byteLength;case hx:return i*e*2/o.components*o.byteLength;case Dh:return i*e*2/o.components*o.byteLength;case cx:return i*e*3/o.components*o.byteLength;case or:return i*e*4/o.components*o.byteLength;case Nh:return i*e*4/o.components*o.byteLength;case Uc:case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(i,16)*Math.max(e,8)/4;case Od:case Bd:return Math.max(i,8)*Math.max(e,8)/2;case Vd:case Gd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bc:case sh:case oh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case px:case ah:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lh:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x1(i){switch(i){case Br:case sx:return{byteLength:1,components:1};case Ga:case ox:case Za:return{byteLength:2,components:1};case bh:case Ph:return{byteLength:2,components:4};case js:case Rh:case kr:return{byteLength:4,components:1};case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let i=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function v1(i){const e=new WeakMap;function t(u,d){const h=u.array,m=u.usage,x=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,m),u.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:x}}function r(u,d,h){const m=d.array,x=d.updateRanges;if(i.bindBuffer(h,u),x.length===0)i.bufferSubData(h,0,m);else{x.sort((M,S)=>M.start-S.start);let g=0;for(let M=1;M<x.length;M++){const S=x[g],E=x[M];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++g,x[g]=E)}x.length=g+1;for(let M=0,S=x.length;M<S;M++){const E=x[M];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:l,update:c}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
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
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
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
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D1=`#ifdef USE_IRIDESCENCE
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
#endif`,N1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V1=`#define PI 3.141592653589793
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
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W1=`vec3 transformedNormal = objectNormal;
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
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J1=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
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
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,xE=`struct PhysicalMaterial {
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
}`,vE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RE=`#if defined( USE_POINTS_UV )
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
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iw=`float getShadowMask() {
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
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aw=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`#include <common>
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
}`,Tw=`#if DEPTH_PACKING == 3200
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
}`,Cw=`#define DISTANCE
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
}`,Aw=`#define DISTANCE
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Iw=`#define LAMBERT
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
}`,Fw=`#define LAMBERT
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
}`,Uw=`#define MATCAP
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
}`,kw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Bw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define TOON
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
}`,jw=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,Zw=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:_1,alphahash_pars_fragment:y1,alphamap_fragment:M1,alphamap_pars_fragment:S1,alphatest_fragment:E1,alphatest_pars_fragment:w1,aomap_fragment:T1,aomap_pars_fragment:C1,batching_pars_vertex:A1,batching_vertex:R1,begin_vertex:b1,beginnormal_vertex:P1,bsdfs:L1,iridescence_fragment:D1,bumpmap_pars_fragment:N1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:k1,color_fragment:O1,color_pars_fragment:z1,color_pars_vertex:B1,color_vertex:H1,common:V1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:W1,displacementmap_pars_vertex:j1,displacementmap_vertex:X1,emissivemap_fragment:$1,emissivemap_pars_fragment:Y1,colorspace_fragment:Z1,colorspace_pars_fragment:q1,envmap_fragment:K1,envmap_common_pars_fragment:Q1,envmap_pars_fragment:J1,envmap_pars_vertex:eE,envmap_physical_pars_fragment:fE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:rE,fog_pars_fragment:sE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:dE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:xE,lights_fragment_begin:vE,lights_fragment_maps:_E,lights_fragment_end:yE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:wE,map_fragment:TE,map_pars_fragment:CE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:PE,morphinstance_vertex:LE,morphcolor_vertex:DE,morphnormal_vertex:NE,morphtarget_pars_vertex:IE,morphtarget_vertex:FE,normal_fragment_begin:UE,normal_fragment_maps:kE,normal_pars_fragment:OE,normal_pars_vertex:zE,normal_vertex:BE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:jE,opaque_fragment:XE,packing:$E,premultiplied_alpha_fragment:YE,project_vertex:ZE,dithering_fragment:qE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:tw,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:rw,skinning_pars_vertex:sw,skinning_vertex:ow,skinnormal_vertex:aw,specularmap_fragment:lw,specularmap_pars_fragment:cw,tonemapping_fragment:uw,tonemapping_pars_fragment:fw,transmission_fragment:dw,transmission_pars_fragment:hw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:xw,background_vert:vw,background_frag:_w,backgroundCube_vert:yw,backgroundCube_frag:Mw,cube_vert:Sw,cube_frag:Ew,depth_vert:ww,depth_frag:Tw,distanceRGBA_vert:Cw,distanceRGBA_frag:Aw,equirect_vert:Rw,equirect_frag:bw,linedashed_vert:Pw,linedashed_frag:Lw,meshbasic_vert:Dw,meshbasic_frag:Nw,meshlambert_vert:Iw,meshlambert_frag:Fw,meshmatcap_vert:Uw,meshmatcap_frag:kw,meshnormal_vert:Ow,meshnormal_frag:zw,meshphong_vert:Bw,meshphong_frag:Hw,meshphysical_vert:Vw,meshphysical_frag:Gw,meshtoon_vert:Ww,meshtoon_frag:jw,points_vert:Xw,points_frag:$w,shadow_vert:Yw,shadow_frag:Zw,sprite_vert:qw,sprite_frag:Kw},Oe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},mr={basic:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ui([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ui([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new It(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ui([Oe.points,Oe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ui([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ui([Oe.common,Oe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ui([Oe.sprite,Oe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:ui([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:ui([Oe.lights,Oe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};mr.physical={uniforms:ui([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Nc={r:0,b:0,g:0},ks=new vr,Qw=new mn;function Jw(i,e,t,r,o,l,c){const u=new It(0);let d=l===!0?0:1,h,m,x=null,g=0,M=null;function S(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?t:e).get(A)),A}function E(L){let A=!1;const O=S(L);O===null?v(u,d):O&&O.isColor&&(v(O,1),A=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(i.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(L,A){const O=S(A);O&&(O.isCubeTexture||O.mapping===nu)?(m===void 0&&(m=new Xi(new Qa(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:Zo(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ks.copy(A.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(ks)),m.material.toneMapped=Ht.getTransfer(O.colorSpace)!==$t,(x!==O||g!==O.version||M!==i.toneMapping)&&(m.material.needsUpdate=!0,x=O,g=O.version,M=i.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new Xi(new ou(2,2),new vs({name:"BackgroundMaterial",uniforms:Zo(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(O.colorSpace)!==$t,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(x!==O||g!==O.version||M!==i.toneMapping)&&(h.material.needsUpdate=!0,x=O,g=O.version,M=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function v(L,A){L.getRGB(Nc,Cx(i)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,A,c)}function N(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(L,A=1){u.set(L),d=A,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,v(u,d)},render:E,addToRenderList:y,dispose:N}}function eT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function u(R,B,he,V,Y){let Q=!1;const W=x(V,he,B);l!==W&&(l=W,h(l.object)),Q=M(R,V,he,Y),Q&&S(R,V,he,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,A(R,B,he,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function x(R,B,he){const V=he.wireframe===!0;let Y=r[R.id];Y===void 0&&(Y={},r[R.id]=Y);let Q=Y[B.id];Q===void 0&&(Q={},Y[B.id]=Q);let W=Q[V];return W===void 0&&(W=g(d()),Q[V]=W),W}function g(R){const B=[],he=[],V=[];for(let Y=0;Y<t;Y++)B[Y]=0,he[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:he,attributeDivisors:V,object:R,attributes:{},index:null}}function M(R,B,he,V){const Y=l.attributes,Q=B.attributes;let W=0;const ee=he.getAttributes();for(const D in ee)if(ee[D].location>=0){const te=Y[D];let H=Q[D];if(H===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),te===void 0||te.attribute!==H||H&&te.data!==H.data)return!0;W++}return l.attributesNum!==W||l.index!==V}function S(R,B,he,V){const Y={},Q=B.attributes;let W=0;const ee=he.getAttributes();for(const D in ee)if(ee[D].location>=0){let te=Q[D];te===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const H={};H.attribute=te,te&&te.data&&(H.data=te.data),Y[D]=H,W++}l.attributes=Y,l.attributesNum=W,l.index=V}function E(){const R=l.newAttributes;for(let B=0,he=R.length;B<he;B++)R[B]=0}function y(R){v(R,0)}function v(R,B){const he=l.newAttributes,V=l.enabledAttributes,Y=l.attributeDivisors;he[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),Y[R]!==B&&(i.vertexAttribDivisor(R,B),Y[R]=B)}function N(){const R=l.newAttributes,B=l.enabledAttributes;for(let he=0,V=B.length;he<V;he++)B[he]!==R[he]&&(i.disableVertexAttribArray(he),B[he]=0)}function L(R,B,he,V,Y,Q,W){W===!0?i.vertexAttribIPointer(R,B,he,Y,Q):i.vertexAttribPointer(R,B,he,V,Y,Q)}function A(R,B,he,V){E();const Y=V.attributes,Q=he.getAttributes(),W=B.defaultAttributeValues;for(const ee in Q){const D=Q[ee];if(D.location>=0){let ne=Y[ee];if(ne===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const te=ne.normalized,H=ne.itemSize,pe=e.get(ne);if(pe===void 0)continue;const Ne=pe.buffer,re=pe.type,xe=pe.bytesPerElement,Se=re===i.INT||re===i.UNSIGNED_INT||ne.gpuType===Rh;if(ne.isInterleavedBufferAttribute){const Me=ne.data,be=Me.stride,ze=ne.offset;if(Me.isInstancedInterleavedBuffer){for(let et=0;et<D.locationSize;et++)v(D.location+et,Me.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let et=0;et<D.locationSize;et++)y(D.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let et=0;et<D.locationSize;et++)L(D.location+et,H/D.locationSize,re,te,be*xe,(ze+H/D.locationSize*et)*xe,Se)}else{if(ne.isInstancedBufferAttribute){for(let Me=0;Me<D.locationSize;Me++)v(D.location+Me,ne.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<D.locationSize;Me++)y(D.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Me=0;Me<D.locationSize;Me++)L(D.location+Me,H/D.locationSize,re,te,H*xe,H/D.locationSize*Me*xe,Se)}}else if(W!==void 0){const te=W[ee];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(D.location,te);break;case 3:i.vertexAttrib3fv(D.location,te);break;case 4:i.vertexAttrib4fv(D.location,te);break;default:i.vertexAttrib1fv(D.location,te)}}}}N()}function O(){G();for(const R in r){const B=r[R];for(const he in B){const V=B[he];for(const Y in V)m(V[Y].object),delete V[Y];delete B[he]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const he in B){const V=B[he];for(const Y in V)m(V[Y].object),delete V[Y];delete B[he]}delete r[R.id]}function F(R){for(const B in r){const he=r[B];if(he[R.id]===void 0)continue;const V=he[R.id];for(const Y in V)m(V[Y].object),delete V[Y];delete he[R.id]}}function G(){b(),c=!0,l!==o&&(l=o,h(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:G,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:y,disableUnusedAttributes:N}}function tT(i,e,t){let r;function o(h){r=h}function l(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,x){x!==0&&(i.drawArraysInstanced(r,h,m,x),t.update(m,r,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let M=0;for(let S=0;S<x;S++)M+=m[S];t.update(M,r,1)}function d(h,m,x,g){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<h.length;S++)c(h[S],m[S],g[S]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,m,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=m[E]*g[E];t.update(S,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nT(i,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==or&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const G=F===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Br&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==kr&&!G)}function d(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:x,reverseDepthBuffer:g,maxTextures:M,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:O,maxSamples:I}}function iT(i){const e=this;let t=null,r=0,o=!1,l=!1;const c=new zs,u=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||o;return o=g,r=x.length,M},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=m(x,g,0)},this.setState=function(x,g,M){const S=x.clippingPlanes,E=x.clipIntersection,y=x.clipShadows,v=i.get(x);if(!o||S===null||S.length===0||l&&!y)l?m(null):h();else{const N=l?0:r,L=N*4;let A=v.clippingState||null;d.value=A,A=m(S,g,L,M);for(let O=0;O!==L;++O)A[O]=t[O];v.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(x,g,M,S){const E=x!==null?x.length:0;let y=null;if(E!==0){if(y=d.value,S!==!0||y===null){const v=M+E*4,N=g.matrixWorldInverse;u.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,A=M;L!==E;++L,A+=4)c.copy(x[L]).applyMatrix4(N,u),c.normal.toArray(y,A),y[A+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function rT(i){let e=new WeakMap;function t(c,u){return u===Id?c.mapping=Wo:u===Fd&&(c.mapping=jo),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===Id||u===Fd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new BS(d.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Oo=4,a0=[.125,.215,.35,.446,.526,.582],Vs=20,md=new Ix,l0=new It;let gd=null,xd=0,vd=0,_d=!1;const Bs=(1+Math.sqrt(5))/2,Io=1/Bs,c0=[new le(-Bs,Io,0),new le(Bs,Io,0),new le(-Io,0,Bs),new le(Io,0,Bs),new le(0,Bs,-Io),new le(0,Bs,Io),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class u0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){gd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,xd,vd),this._renderer.xr.enabled=_d,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xr,minFilter:xr,generateMipmaps:!1,type:Za,format:or,colorSpace:Yo,depthBuffer:!1},o=f0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(l)),this._blurMaterial=oT(l,e,t)}return o}_compileMaterial(e){const t=new Xi(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,r,o){const u=new Wi(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,g=m.toneMapping;m.getClearColor(l0),m.toneMapping=gs,m.autoClear=!1;const M=new Ex({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1}),S=new Xi(new Qa,M);let E=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,E=!0):(M.color.copy(l0),E=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(u.up.set(0,d[v],0),u.lookAt(h[v],0,0)):N===1?(u.up.set(0,0,d[v]),u.lookAt(0,h[v],0)):(u.up.set(0,d[v],0),u.lookAt(0,0,h[v]));const L=this._cubeSize;Ic(o,N*L,v>2?L:0,L,L),m.setRenderTarget(o),E&&m.render(S,u),m.render(e,u)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=x,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Wo||e.mapping===jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Xi(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const d=this._cubeSize;Ic(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,md)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=c0[(o-l-1)%c0.length];this._blur(e,l-1,l,c,u)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new Xi(this._lodPlanes[o],h),g=h.uniforms,M=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Vs-1),E=l/S,y=isFinite(l)?1+Math.floor(m*E):Vs;y>Vs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vs}`);const v=[];let N=0;for(let F=0;F<Vs;++F){const G=F/E,b=Math.exp(-G*G/2);v.push(b),F===0?N+=b:F<y&&(N+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/N;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=S,g.mipInt.value=L-r;const A=this._sizeLods[o],O=3*A*(o>L-Oo?o-L+Oo:0),I=4*(this._cubeSize-A);Ic(t,O,I,3*A,2*A),d.setRenderTarget(t),d.render(x,md)}}function sT(i){const e=[],t=[],r=[];let o=i;const l=i-Oo+1+a0.length;for(let c=0;c<l;c++){const u=Math.pow(2,o);t.push(u);let d=1/u;c>i-Oo?d=a0[c-i+Oo-1]:c===0&&(d=0),r.push(d);const h=1/(u-2),m=-h,x=1+h,g=[m,m,x,m,x,x,m,m,x,x,m,x],M=6,S=6,E=3,y=2,v=1,N=new Float32Array(E*S*M),L=new Float32Array(y*S*M),A=new Float32Array(v*S*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,G=I>2?0:-1,b=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];N.set(b,E*S*I),L.set(g,y*S*I);const R=[I,I,I,I,I,I];A.set(R,v*S*I)}const O=new cr;O.setAttribute("position",new lr(N,E)),O.setAttribute("uv",new lr(L,y)),O.setAttribute("faceIndex",new lr(A,v)),e.push(O),o>Oo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function f0(i,e,t){const r=new Xs(i,e,t);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function oT(i,e,t){const r=new Float32Array(Vs),o=new le(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function d0(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function h0(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function aT(i){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const d=u.mapping,h=d===Id||d===Fd,m=d===Wo||d===jo;if(h||m){let x=e.get(u);const g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new u0(i)),x=h?t.fromEquirectangular(u,x):t.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{const M=u.image;return h&&M&&M.height>0||m&&M&&o(M)?(t===null&&(t=new u0(i)),x=h?t.fromEquirectangular(u):t.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",l),x.texture):null}}}return u}function o(u){let d=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&d++;return d===h}function l(u){const d=u.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function lT(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Uo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function cT(i,e,t,r){const o={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(x){const g=x.attributes;for(const M in g)e.update(g[M],i.ARRAY_BUFFER)}function h(x){const g=[],M=x.index,S=x.attributes.position;let E=0;if(M!==null){const N=M.array;E=M.version;for(let L=0,A=N.length;L<A;L+=3){const O=N[L+0],I=N[L+1],F=N[L+2];g.push(O,I,I,F,F,O)}}else if(S!==void 0){const N=S.array;E=S.version;for(let L=0,A=N.length/3-1;L<A;L+=3){const O=L+0,I=L+1,F=L+2;g.push(O,I,I,F,F,O)}}else return;const y=new(xx(g)?Tx:wx)(g,1);y.version=E;const v=l.get(x);v&&e.remove(v),l.set(x,y)}function m(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&h(x)}else h(x);return l.get(x)}return{get:u,update:d,getWireframeAttribute:m}}function uT(i,e,t){let r;function o(g){r=g}let l,c;function u(g){l=g.type,c=g.bytesPerElement}function d(g,M){i.drawElements(r,M,l,g*c),t.update(M,r,1)}function h(g,M,S){S!==0&&(i.drawElementsInstanced(r,M,l,g*c,S),t.update(M,r,S))}function m(g,M,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,g,0,S);let y=0;for(let v=0;v<S;v++)y+=M[v];t.update(y,r,1)}function x(g,M,S,E){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<g.length;v++)h(g[v]/c,M[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,g,0,E,0,S);let v=0;for(let N=0;N<S;N++)v+=M[N]*E[N];t.update(v,r,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function fT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(l/3);break;case i.LINES:t.lines+=u*(l/2);break;case i.LINE_STRIP:t.lines+=u*(l-1);break;case i.LINE_LOOP:t.lines+=u*l;break;case i.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function dT(i,e,t){const r=new WeakMap,o=new vn;function l(c,u,d){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let g=r.get(u);if(g===void 0||g.count!==x){let R=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",R)};var M=R;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let A=0;S===!0&&(A=1),E===!0&&(A=2),y===!0&&(A=3);let O=u.attributes.position.count*A,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*I*4*x),G=new _x(F,O,I,x);G.type=kr,G.needsUpdate=!0;const b=A*4;for(let B=0;B<x;B++){const he=v[B],V=N[B],Y=L[B],Q=O*I*4*B;for(let W=0;W<he.count;W++){const ee=W*b;S===!0&&(o.fromBufferAttribute(he,W),F[Q+ee+0]=o.x,F[Q+ee+1]=o.y,F[Q+ee+2]=o.z,F[Q+ee+3]=0),E===!0&&(o.fromBufferAttribute(V,W),F[Q+ee+4]=o.x,F[Q+ee+5]=o.y,F[Q+ee+6]=o.z,F[Q+ee+7]=0),y===!0&&(o.fromBufferAttribute(Y,W),F[Q+ee+8]=o.x,F[Q+ee+9]=o.y,F[Q+ee+10]=o.z,F[Q+ee+11]=Y.itemSize===4?o.w:1)}}g={count:x,texture:G,size:new Vt(O,I)},r.set(u,g),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const E=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:l}}function hT(i,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,x=e.get(d,m);if(o.get(x)!==h&&(e.update(x),o.set(x,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;o.get(g)!==h&&(g.update(),o.set(g,h))}return x}function c(){o=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const Ux=new Si,p0=new bx(1,1),kx=new _x,Ox=new wS,zx=new Rx,m0=[],g0=[],x0=new Float32Array(16),v0=new Float32Array(9),_0=new Float32Array(4);function ta(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let l=m0[o];if(l===void 0&&(l=new Float32Array(o),m0[o]=l),e!==0){r.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(l,u)}return l}function Fn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function au(i,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function pT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function gT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function xT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function vT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;_0.set(r),i.uniformMatrix2fv(this.addr,!1,_0),Un(t,r)}}function _T(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;v0.set(r),i.uniformMatrix3fv(this.addr,!1,v0),Un(t,r)}}function yT(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Fn(t,r))return;x0.set(r),i.uniformMatrix4fv(this.addr,!1,x0),Un(t,r)}}function MT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ST(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function ET(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function wT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function TT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function CT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function AT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function RT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function bT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(p0.compareFunction=gx,l=p0):l=Ux,t.setTexture2D(e||l,o)}function PT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Ox,o)}function LT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||zx,o)}function DT(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||kx,o)}function NT(i){switch(i){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return xT;case 35674:return vT;case 35675:return _T;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ST;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return CT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function IT(i,e){i.uniform1fv(this.addr,e)}function FT(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function UT(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function kT(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function OT(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zT(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function BT(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function HT(i,e){i.uniform1iv(this.addr,e)}function VT(i,e){i.uniform2iv(this.addr,e)}function GT(i,e){i.uniform3iv(this.addr,e)}function WT(i,e){i.uniform4iv(this.addr,e)}function jT(i,e){i.uniform1uiv(this.addr,e)}function XT(i,e){i.uniform2uiv(this.addr,e)}function $T(i,e){i.uniform3uiv(this.addr,e)}function YT(i,e){i.uniform4uiv(this.addr,e)}function ZT(i,e,t){const r=this.cache,o=e.length,l=au(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Ux,l[c])}function qT(i,e,t){const r=this.cache,o=e.length,l=au(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Ox,l[c])}function KT(i,e,t){const r=this.cache,o=e.length,l=au(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||zx,l[c])}function QT(i,e,t){const r=this.cache,o=e.length,l=au(t,o);Fn(r,l)||(i.uniform1iv(this.addr,l),Un(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||kx,l[c])}function JT(i){switch(i){case 5126:return IT;case 35664:return FT;case 35665:return UT;case 35666:return kT;case 35674:return OT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return jT;case 36294:return XT;case 36295:return $T;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class eC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class tC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JT(t.type)}}class nC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function y0(i,e){i.seq.push(e),i.map[e.id]=e}function iC(i,e,t){const r=i.name,o=r.length;for(yd.lastIndex=0;;){const l=yd.exec(r),c=yd.lastIndex;let u=l[1];const d=l[2]==="]",h=l[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){y0(t,h===void 0?new eC(u,i,e):new tC(u,i,e));break}else{let x=t.map[u];x===void 0&&(x=new nC(u),y0(t,x)),t=x}}}class Hc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);iC(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const u=t[l],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function M0(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const rC=37297;let sC=0;function oC(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const S0=new vt;function aC(i){Ht._getMatrix(S0,Ht.workingColorSpace,i);const e=`mat3( ${S0.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Wc:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function E0(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+oC(i.getShaderSource(e),c)}else return o}function lC(i,e){const t=aC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cC(i,e){let t;switch(e){case IM:t="Linear";break;case FM:t="Reinhard";break;case UM:t="Cineon";break;case kM:t="ACESFilmic";break;case zM:t="AgX";break;case BM:t="Neutral";break;case OM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fc=new le;function uC(){Ht.getLuminanceCoefficients(Fc);const i=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function dC(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hC(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=i.getActiveAttrib(e,o),c=l.name;let u=1;l.type===i.FLOAT_MAT2&&(u=2),l.type===i.FLOAT_MAT3&&(u=3),l.type===i.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function Oa(i){return i!==""}function w0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pC=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(i){return i.replace(pC,gC)}const mC=new Map;function gC(i,e){let t=St[e];if(t===void 0){const r=mC.get(e);if(r!==void 0)t=St[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const xC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(i){return i.replace(xC,vC)}function vC(i,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function A0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _C(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function yC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wo:case jo:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MC(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function SC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case DM:e="ENVMAP_BLENDING_MIX";break;case NM:e="ENVMAP_BLENDING_ADD";break}return e}function EC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wC(i,e,t,r){const o=i.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=_C(t),h=yC(t),m=MC(t),x=SC(t),g=EC(t),M=fC(t),S=dC(l),E=o.createProgram();let y,v,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Oa).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Oa).join(`
`),v.length>0&&(v+=`
`)):(y=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),v=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?St.tonemapping_pars_fragment:"",t.toneMapping!==gs?cC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,lC("linearToOutputTexel",t.outputColorSpace),uC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),c=hh(c),c=w0(c,t),c=T0(c,t),u=hh(u),u=w0(u,t),u=T0(u,t),c=C0(c),u=C0(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+y+c,A=N+v+u,O=M0(o,o.VERTEX_SHADER,L),I=M0(o,o.FRAGMENT_SHADER,A);o.attachShader(E,O),o.attachShader(E,I),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function F(B){if(i.debug.checkShaderErrors){const he=o.getProgramInfoLog(E).trim(),V=o.getShaderInfoLog(O).trim(),Y=o.getShaderInfoLog(I).trim();let Q=!0,W=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,E,O,I);else{const ee=E0(o,O,"vertex"),D=E0(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+he+`
`+ee+`
`+D)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(V===""||Y==="")&&(W=!1);W&&(B.diagnostics={runnable:Q,programLog:he,vertexShader:{log:V,prefix:y},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(O),o.deleteShader(I),G=new Hc(o,E),b=hC(o,E)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,rC)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=I,this}let TC=0;class CC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AC(e),t.set(e,r)),r}}class AC{constructor(e){this.id=TC++,this.code=e,this.usedTimes=0}}function RC(i,e,t,r,o,l,c){const u=new Mx,d=new CC,h=new Set,m=[],x=o.logarithmicDepthBuffer,g=o.vertexTextures;let M=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return h.add(b),b===0?"uv":`uv${b}`}function y(b,R,B,he,V){const Y=he.fog,Q=V.geometry,W=b.isMeshStandardMaterial?he.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),D=ee&&ee.mapping===nu?ee.image.height:null,ne=S[b.type];b.precision!==null&&(M=o.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const te=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=te!==void 0?te.length:0;let pe=0;Q.morphAttributes.position!==void 0&&(pe=1),Q.morphAttributes.normal!==void 0&&(pe=2),Q.morphAttributes.color!==void 0&&(pe=3);let Ne,re,xe,Se;if(ne){const Et=mr[ne];Ne=Et.vertexShader,re=Et.fragmentShader}else Ne=b.vertexShader,re=b.fragmentShader,d.update(b),xe=d.getVertexShaderID(b),Se=d.getFragmentShaderID(b);const Me=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),ze=V.isInstancedMesh===!0,et=V.isBatchedMesh===!0,_t=!!b.map,wt=!!b.matcap,jt=!!ee,$=!!b.aoMap,kn=!!b.lightMap,pt=!!b.bumpMap,yt=!!b.normalMap,Qe=!!b.displacementMap,Gt=!!b.emissiveMap,Xe=!!b.metalnessMap,U=!!b.roughnessMap,C=b.anisotropy>0,se=b.clearcoat>0,ce=b.dispersion>0,ue=b.iridescence>0,ve=b.sheen>0,Ze=b.transmission>0,Ie=C&&!!b.anisotropyMap,Ve=se&&!!b.clearcoatMap,mt=se&&!!b.clearcoatNormalMap,Ae=se&&!!b.clearcoatRoughnessMap,We=ue&&!!b.iridescenceMap,tt=ue&&!!b.iridescenceThicknessMap,rt=ve&&!!b.sheenColorMap,je=ve&&!!b.sheenRoughnessMap,at=!!b.specularMap,ct=!!b.specularColorMap,Ot=!!b.specularIntensityMap,K=Ze&&!!b.transmissionMap,Fe=Ze&&!!b.thicknessMap,me=!!b.gradientMap,_e=!!b.alphaMap,ke=b.alphaTest>0,Ue=!!b.alphaHash,ft=!!b.extensions;let Yt=gs;b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const gn={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:re,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:et,batchingColor:et&&V._colorsTexture!==null,instancing:ze,instancingColor:ze&&V.instanceColor!==null,instancingMorph:ze&&V.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Yo,alphaToCoverage:!!b.alphaToCoverage,map:_t,matcap:wt,envMap:jt,envMapMode:jt&&ee.mapping,envMapCubeUVHeight:D,aoMap:$,lightMap:kn,bumpMap:pt,normalMap:yt,displacementMap:g&&Qe,emissiveMap:Gt,normalMapObjectSpace:yt&&b.normalMapType===WM,normalMapTangentSpace:yt&&b.normalMapType===mx,metalnessMap:Xe,roughnessMap:U,anisotropy:C,anisotropyMap:Ie,clearcoat:se,clearcoatMap:Ve,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ae,dispersion:ce,iridescence:ue,iridescenceMap:We,iridescenceThicknessMap:tt,sheen:ve,sheenColorMap:rt,sheenRoughnessMap:je,specularMap:at,specularColorMap:ct,specularIntensityMap:Ot,transmission:Ze,transmissionMap:K,thicknessMap:Fe,gradientMap:me,opaque:b.transparent===!1&&b.blending===zo&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:Ue,combine:b.combine,mapUv:_t&&E(b.map.channel),aoMapUv:$&&E(b.aoMap.channel),lightMapUv:kn&&E(b.lightMap.channel),bumpMapUv:pt&&E(b.bumpMap.channel),normalMapUv:yt&&E(b.normalMap.channel),displacementMapUv:Qe&&E(b.displacementMap.channel),emissiveMapUv:Gt&&E(b.emissiveMap.channel),metalnessMapUv:Xe&&E(b.metalnessMap.channel),roughnessMapUv:U&&E(b.roughnessMap.channel),anisotropyMapUv:Ie&&E(b.anisotropyMap.channel),clearcoatMapUv:Ve&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:je&&E(b.sheenRoughnessMap.channel),specularMapUv:at&&E(b.specularMap.channel),specularColorMapUv:ct&&E(b.specularColorMap.channel),specularIntensityMapUv:Ot&&E(b.specularIntensityMap.channel),transmissionMapUv:K&&E(b.transmissionMap.channel),thicknessMapUv:Fe&&E(b.thicknessMap.channel),alphaMapUv:_e&&E(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(yt||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(_t||_e),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:_t&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===$t,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(b.emissiveMap.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ur,flipSided:b.side===Mi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return gn.vertexUv1s=h.has(1),gn.vertexUv2s=h.has(2),gn.vertexUv3s=h.has(3),h.clear(),gn}function v(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)R.push(B),R.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(N(R,b),L(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function N(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function A(b){const R=S[b.type];let B;if(R){const he=mr[R];B=US.clone(he.uniforms)}else B=b.uniforms;return B}function O(b,R){let B;for(let he=0,V=m.length;he<V;he++){const Y=m[he];if(Y.cacheKey===R){B=Y,++B.usedTimes;break}}return B===void 0&&(B=new wC(i,R,b,l),m.push(B)),B}function I(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function F(b){d.remove(b)}function G(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:A,acquireProgram:O,releaseProgram:I,releaseShaderCache:F,programs:m,dispose:G}}function bC(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function r(c){i.delete(c)}function o(c,u,d){i.get(c)[u]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function PC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function R0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function b0(){const i=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(x,g,M,S,E,y){let v=i[e];return v===void 0?(v={id:x.id,object:x,geometry:g,material:M,groupOrder:S,renderOrder:x.renderOrder,z:E,group:y},i[e]=v):(v.id=x.id,v.object=x,v.geometry=g,v.material=M,v.groupOrder=S,v.renderOrder=x.renderOrder,v.z=E,v.group=y),e++,v}function u(x,g,M,S,E,y){const v=c(x,g,M,S,E,y);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):t.push(v)}function d(x,g,M,S,E,y){const v=c(x,g,M,S,E,y);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):t.unshift(v)}function h(x,g){t.length>1&&t.sort(x||PC),r.length>1&&r.sort(g||R0),o.length>1&&o.sort(g||R0)}function m(){for(let x=e,g=i.length;x<g;x++){const M=i[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:d,finish:m,sort:h}}function LC(){let i=new WeakMap;function e(r,o){const l=i.get(r);let c;return l===void 0?(c=new b0,i.set(r,[c])):o>=l.length?(c=new b0,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function DC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new It};break;case"SpotLight":t={position:new le,direction:new le,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new le,halfWidth:new le,halfHeight:new le};break}return i[e.id]=t,t}}}function NC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let IC=0;function FC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UC(i){const e=new DC,t=NC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const o=new le,l=new mn,c=new mn;function u(h){let m=0,x=0,g=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,S=0,E=0,y=0,v=0,N=0,L=0,A=0,O=0,I=0,F=0;h.sort(FC);for(let b=0,R=h.length;b<R;b++){const B=h[b],he=B.color,V=B.intensity,Y=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=he.r*V,x+=he.g*V,g+=he.b*V;else if(B.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(B.sh.coefficients[W],V);F++}else if(B.isDirectionalLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ee=B.shadow,D=t.get(B);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,r.directionalShadow[M]=D,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=B.shadow.matrix,N++}r.directional[M]=W,M++}else if(B.isSpotLight){const W=e.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(he).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,r.spot[E]=W;const ee=B.shadow;if(B.map&&(r.spotLightMap[O]=B.map,O++,ee.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[E]=ee.matrix,B.castShadow){const D=t.get(B);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,r.spotShadow[E]=D,r.spotShadowMap[E]=Q,A++}E++}else if(B.isRectAreaLight){const W=e.get(B);W.color.copy(he).multiplyScalar(V),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=W,y++}else if(B.isPointLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){const ee=B.shadow,D=t.get(B);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,D.shadowCameraNear=ee.camera.near,D.shadowCameraFar=ee.camera.far,r.pointShadow[S]=D,r.pointShadowMap[S]=Q,r.pointShadowMatrix[S]=B.shadow.matrix,L++}r.point[S]=W,S++}else if(B.isHemisphereLight){const W=e.get(B);W.skyColor.copy(B.color).multiplyScalar(V),W.groundColor.copy(B.groundColor).multiplyScalar(V),r.hemi[v]=W,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==M||G.pointLength!==S||G.spotLength!==E||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==N||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==O||G.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=y,r.point.length=S,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+O-I,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,G.directionalLength=M,G.pointLength=S,G.spotLength=E,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=N,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=O,G.numLightProbes=F,r.version=IC++)}function d(h,m){let x=0,g=0,M=0,S=0,E=0;const y=m.matrixWorldInverse;for(let v=0,N=h.length;v<N;v++){const L=h[v];if(L.isDirectionalLight){const A=r.directional[x];A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(L.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),S++}else if(L.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:u,setupView:d,state:r}}function P0(i){const e=new UC(i),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function c(m){r.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:d,pushLight:l,pushShadow:c}}function kC(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let u;return c===void 0?(u=new P0(i),e.set(o,[u])):l>=c.length?(u=new P0(i),c.push(u)):u=c[l],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const OC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zC=`uniform sampler2D shadow_pass;
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
}`;function BC(i,e,t){let r=new Fh;const o=new Vt,l=new Vt,c=new vn,u=new c1({depthPacking:GM}),d=new u1,h={},m=t.maxTextureSize,x={[xs]:Mi,[Mi]:xs,[Ur]:Ur},g=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:OC,fragmentShader:zC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const S=new cr;S.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Xi(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nx;let v=this.type;this.render=function(I,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),he=i.state;he.setBlending(ms),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const V=v!==Fr&&this.type===Fr,Y=v===Fr&&this.type!==Fr;for(let Q=0,W=I.length;Q<W;Q++){const ee=I[Q],D=ee.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;o.copy(D.mapSize);const ne=D.getFrameExtents();if(o.multiply(ne),l.copy(D.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ne.x),o.x=l.x*ne.x,D.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ne.y),o.y=l.y*ne.y,D.mapSize.y=l.y)),D.map===null||V===!0||Y===!0){const H=this.type!==Fr?{minFilter:ar,magFilter:ar}:{};D.map!==null&&D.map.dispose(),D.map=new Xs(o.x,o.y,H),D.map.texture.name=ee.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const te=D.getViewportCount();for(let H=0;H<te;H++){const pe=D.getViewport(H);c.set(l.x*pe.x,l.y*pe.y,l.x*pe.z,l.y*pe.w),he.viewport(c),D.updateMatrices(ee,H),r=D.getFrustum(),A(F,G,D.camera,ee,this.type)}D.isPointLightShadow!==!0&&this.type===Fr&&N(D,G),D.needsUpdate=!1}v=this.type,y.needsUpdate=!1,i.setRenderTarget(b,R,B)};function N(I,F){const G=e.update(E);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xs(o.x,o.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(F,null,G,g,E,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(F,null,G,M,E,null)}function L(I,F,G,b){let R=null;const B=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)R=B;else if(R=G.isPointLight===!0?d:u,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const he=R.uuid,V=F.uuid;let Y=h[he];Y===void 0&&(Y={},h[he]=Y);let Q=Y[V];Q===void 0&&(Q=R.clone(),Y[V]=Q,F.addEventListener("dispose",O)),R=Q}if(R.visible=F.visible,R.wireframe=F.wireframe,b===Fr?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:x[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const he=i.properties.get(R);he.light=G}return R}function A(I,F,G,b,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Fr)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const V=e.update(I),Y=I.material;if(Array.isArray(Y)){const Q=V.groups;for(let W=0,ee=Q.length;W<ee;W++){const D=Q[W],ne=Y[D.materialIndex];if(ne&&ne.visible){const te=L(I,ne,b,R);I.onBeforeShadow(i,I,F,G,V,te,D),i.renderBufferDirect(G,null,V,te,I,D),I.onAfterShadow(i,I,F,G,V,te,D)}}}else if(Y.visible){const Q=L(I,Y,b,R);I.onBeforeShadow(i,I,F,G,V,Q,null),i.renderBufferDirect(G,null,V,Q,I,null),I.onAfterShadow(i,I,F,G,V,Q,null)}}const he=I.children;for(let V=0,Y=he.length;V<Y;V++)A(he[V],F,G,b,R)}function O(I){I.target.removeEventListener("dispose",O);for(const G in h){const b=h[G],R=I.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const HC={[Ad]:Rd,[bd]:Dd,[Pd]:Nd,[Go]:Ld,[Rd]:Ad,[Dd]:bd,[Nd]:Pd,[Ld]:Go};function VC(i,e){function t(){let K=!1;const Fe=new vn;let me=null;const _e=new vn(0,0,0,0);return{setMask:function(ke){me!==ke&&!K&&(i.colorMask(ke,ke,ke,ke),me=ke)},setLocked:function(ke){K=ke},setClear:function(ke,Ue,ft,Yt,gn){gn===!0&&(ke*=Yt,Ue*=Yt,ft*=Yt),Fe.set(ke,Ue,ft,Yt),_e.equals(Fe)===!1&&(i.clearColor(ke,Ue,ft,Yt),_e.copy(Fe))},reset:function(){K=!1,me=null,_e.set(-1,0,0,0)}}}function r(){let K=!1,Fe=!1,me=null,_e=null,ke=null;return{setReversed:function(Ue){if(Fe!==Ue){const ft=e.get("EXT_clip_control");Fe?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Yt=ke;ke=null,this.setClear(Yt)}Fe=Ue},getReversed:function(){return Fe},setTest:function(Ue){Ue?Me(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ue){me!==Ue&&!K&&(i.depthMask(Ue),me=Ue)},setFunc:function(Ue){if(Fe&&(Ue=HC[Ue]),_e!==Ue){switch(Ue){case Ad:i.depthFunc(i.NEVER);break;case Rd:i.depthFunc(i.ALWAYS);break;case bd:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case Pd:i.depthFunc(i.EQUAL);break;case Ld:i.depthFunc(i.GEQUAL);break;case Dd:i.depthFunc(i.GREATER);break;case Nd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Ue}},setLocked:function(Ue){K=Ue},setClear:function(Ue){ke!==Ue&&(Fe&&(Ue=1-Ue),i.clearDepth(Ue),ke=Ue)},reset:function(){K=!1,me=null,_e=null,ke=null,Fe=!1}}}function o(){let K=!1,Fe=null,me=null,_e=null,ke=null,Ue=null,ft=null,Yt=null,gn=null;return{setTest:function(Et){K||(Et?Me(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Et){Fe!==Et&&!K&&(i.stencilMask(Et),Fe=Et)},setFunc:function(Et,Wt,On){(me!==Et||_e!==Wt||ke!==On)&&(i.stencilFunc(Et,Wt,On),me=Et,_e=Wt,ke=On)},setOp:function(Et,Wt,On){(Ue!==Et||ft!==Wt||Yt!==On)&&(i.stencilOp(Et,Wt,On),Ue=Et,ft=Wt,Yt=On)},setLocked:function(Et){K=Et},setClear:function(Et){gn!==Et&&(i.clearStencil(Et),gn=Et)},reset:function(){K=!1,Fe=null,me=null,_e=null,ke=null,Ue=null,ft=null,Yt=null,gn=null}}}const l=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let m={},x={},g=new WeakMap,M=[],S=null,E=!1,y=null,v=null,N=null,L=null,A=null,O=null,I=null,F=new It(0,0,0),G=0,b=!1,R=null,B=null,he=null,V=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(D)[1]),W=ee>=1):D.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),W=ee>=2);let ne=null,te={};const H=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ne=new vn().fromArray(H),re=new vn().fromArray(pe);function xe(K,Fe,me,_e){const ke=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(K,Ue),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<me;ft++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Fe+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Ue}const Se={};Se[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Me(i.DEPTH_TEST),c.setFunc(Go),pt(!1),yt(Cg),Me(i.CULL_FACE),$(ms);function Me(K){m[K]!==!0&&(i.enable(K),m[K]=!0)}function be(K){m[K]!==!1&&(i.disable(K),m[K]=!1)}function ze(K,Fe){return x[K]!==Fe?(i.bindFramebuffer(K,Fe),x[K]=Fe,K===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Fe),K===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function et(K,Fe){let me=M,_e=!1;if(K){me=g.get(Fe),me===void 0&&(me=[],g.set(Fe,me));const ke=K.textures;if(me.length!==ke.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,ft=ke.length;Ue<ft;Ue++)me[Ue]=i.COLOR_ATTACHMENT0+Ue;me.length=ke.length,_e=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,_e=!0);_e&&i.drawBuffers(me)}function _t(K){return S!==K?(i.useProgram(K),S=K,!0):!1}const wt={[Hs]:i.FUNC_ADD,[mM]:i.FUNC_SUBTRACT,[gM]:i.FUNC_REVERSE_SUBTRACT};wt[xM]=i.MIN,wt[vM]=i.MAX;const jt={[_M]:i.ZERO,[yM]:i.ONE,[MM]:i.SRC_COLOR,[Td]:i.SRC_ALPHA,[AM]:i.SRC_ALPHA_SATURATE,[TM]:i.DST_COLOR,[EM]:i.DST_ALPHA,[SM]:i.ONE_MINUS_SRC_COLOR,[Cd]:i.ONE_MINUS_SRC_ALPHA,[CM]:i.ONE_MINUS_DST_COLOR,[wM]:i.ONE_MINUS_DST_ALPHA,[RM]:i.CONSTANT_COLOR,[bM]:i.ONE_MINUS_CONSTANT_COLOR,[PM]:i.CONSTANT_ALPHA,[LM]:i.ONE_MINUS_CONSTANT_ALPHA};function $(K,Fe,me,_e,ke,Ue,ft,Yt,gn,Et){if(K===ms){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(Me(i.BLEND),E=!0),K!==pM){if(K!==y||Et!==b){if((v!==Hs||A!==Hs)&&(i.blendEquation(i.FUNC_ADD),v=Hs,A=Hs),Et)switch(K){case zo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ag:i.blendFunc(i.ONE,i.ONE);break;case Rg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ag:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}N=null,L=null,O=null,I=null,F.set(0,0,0),G=0,y=K,b=Et}return}ke=ke||Fe,Ue=Ue||me,ft=ft||_e,(Fe!==v||ke!==A)&&(i.blendEquationSeparate(wt[Fe],wt[ke]),v=Fe,A=ke),(me!==N||_e!==L||Ue!==O||ft!==I)&&(i.blendFuncSeparate(jt[me],jt[_e],jt[Ue],jt[ft]),N=me,L=_e,O=Ue,I=ft),(Yt.equals(F)===!1||gn!==G)&&(i.blendColor(Yt.r,Yt.g,Yt.b,gn),F.copy(Yt),G=gn),y=K,b=!1}function kn(K,Fe){K.side===Ur?be(i.CULL_FACE):Me(i.CULL_FACE);let me=K.side===Mi;Fe&&(me=!me),pt(me),K.blending===zo&&K.transparent===!1?$(ms):$(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),l.setMask(K.colorWrite);const _e=K.stencilWrite;u.setTest(_e),_e&&(u.setMask(K.stencilWriteMask),u.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),u.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Gt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(K){R!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),R=K)}function yt(K){K!==fM?(Me(i.CULL_FACE),K!==B&&(K===Cg?i.cullFace(i.BACK):K===dM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),B=K}function Qe(K){K!==he&&(W&&i.lineWidth(K),he=K)}function Gt(K,Fe,me){K?(Me(i.POLYGON_OFFSET_FILL),(V!==Fe||Y!==me)&&(i.polygonOffset(Fe,me),V=Fe,Y=me)):be(i.POLYGON_OFFSET_FILL)}function Xe(K){K?Me(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(K){K===void 0&&(K=i.TEXTURE0+Q-1),ne!==K&&(i.activeTexture(K),ne=K)}function C(K,Fe,me){me===void 0&&(ne===null?me=i.TEXTURE0+Q-1:me=ne);let _e=te[me];_e===void 0&&(_e={type:void 0,texture:void 0},te[me]=_e),(_e.type!==K||_e.texture!==Fe)&&(ne!==me&&(i.activeTexture(me),ne=me),i.bindTexture(K,Fe||Se[K]),_e.type=K,_e.texture=Fe)}function se(){const K=te[ne];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function rt(K){Ne.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Ne.copy(K))}function je(K){re.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),re.copy(K))}function at(K,Fe){let me=h.get(Fe);me===void 0&&(me=new WeakMap,h.set(Fe,me));let _e=me.get(K);_e===void 0&&(_e=i.getUniformBlockIndex(Fe,K.name),me.set(K,_e))}function ct(K,Fe){const _e=h.get(Fe).get(K);d.get(Fe)!==_e&&(i.uniformBlockBinding(Fe,_e,K.__bindingPointIndex),d.set(Fe,_e))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ne=null,te={},x={},g=new WeakMap,M=[],S=null,E=!1,y=null,v=null,N=null,L=null,A=null,O=null,I=null,F=new It(0,0,0),G=0,b=!1,R=null,B=null,he=null,V=null,Y=null,Ne.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:Me,disable:be,bindFramebuffer:ze,drawBuffers:et,useProgram:_t,setBlending:$,setMaterial:kn,setFlipSided:pt,setCullFace:yt,setLineWidth:Qe,setPolygonOffset:Gt,setScissorTest:Xe,activeTexture:U,bindTexture:C,unbindTexture:se,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:We,texImage3D:tt,updateUBOMapping:at,uniformBlockBinding:ct,texStorage2D:mt,texStorage3D:Ae,texSubImage2D:ve,texSubImage3D:Ze,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ve,scissor:rt,viewport:je,reset:Ot}}function GC(i,e,t,r,o,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,m=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,C){return M?new OffscreenCanvas(U,C):Xc("canvas")}function E(U,C,se){let ce=1;const ue=Xe(U);if((ue.width>se||ue.height>se)&&(ce=se/Math.max(ue.width,ue.height)),ce<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ve=Math.floor(ce*ue.width),Ze=Math.floor(ce*ue.height);x===void 0&&(x=S(ve,Ze));const Ie=C?S(ve,Ze):x;return Ie.width=ve,Ie.height=Ze,Ie.getContext("2d").drawImage(U,0,0,ve,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ve+"x"+Ze+")."),Ie}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(U,C,se,ce,ue=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ve=C;if(C===i.RED&&(se===i.FLOAT&&(ve=i.R32F),se===i.HALF_FLOAT&&(ve=i.R16F),se===i.UNSIGNED_BYTE&&(ve=i.R8)),C===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(ve=i.R8UI),se===i.UNSIGNED_SHORT&&(ve=i.R16UI),se===i.UNSIGNED_INT&&(ve=i.R32UI),se===i.BYTE&&(ve=i.R8I),se===i.SHORT&&(ve=i.R16I),se===i.INT&&(ve=i.R32I)),C===i.RG&&(se===i.FLOAT&&(ve=i.RG32F),se===i.HALF_FLOAT&&(ve=i.RG16F),se===i.UNSIGNED_BYTE&&(ve=i.RG8)),C===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(ve=i.RG8UI),se===i.UNSIGNED_SHORT&&(ve=i.RG16UI),se===i.UNSIGNED_INT&&(ve=i.RG32UI),se===i.BYTE&&(ve=i.RG8I),se===i.SHORT&&(ve=i.RG16I),se===i.INT&&(ve=i.RG32I)),C===i.RGB_INTEGER&&(se===i.UNSIGNED_BYTE&&(ve=i.RGB8UI),se===i.UNSIGNED_SHORT&&(ve=i.RGB16UI),se===i.UNSIGNED_INT&&(ve=i.RGB32UI),se===i.BYTE&&(ve=i.RGB8I),se===i.SHORT&&(ve=i.RGB16I),se===i.INT&&(ve=i.RGB32I)),C===i.RGBA_INTEGER&&(se===i.UNSIGNED_BYTE&&(ve=i.RGBA8UI),se===i.UNSIGNED_SHORT&&(ve=i.RGBA16UI),se===i.UNSIGNED_INT&&(ve=i.RGBA32UI),se===i.BYTE&&(ve=i.RGBA8I),se===i.SHORT&&(ve=i.RGBA16I),se===i.INT&&(ve=i.RGBA32I)),C===i.RGB&&se===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),C===i.RGBA){const Ze=ue?Wc:Ht.getTransfer(ce);se===i.FLOAT&&(ve=i.RGBA32F),se===i.HALF_FLOAT&&(ve=i.RGBA16F),se===i.UNSIGNED_BYTE&&(ve=Ze===$t?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function A(U,C){let se;return U?C===null||C===js||C===Xo?se=i.DEPTH24_STENCIL8:C===kr?se=i.DEPTH32F_STENCIL8:C===Ga&&(se=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===js||C===Xo?se=i.DEPTH_COMPONENT24:C===kr?se=i.DEPTH_COMPONENT32F:C===Ga&&(se=i.DEPTH_COMPONENT16),se}function O(U,C){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ar&&U.minFilter!==xr?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function I(U){const C=U.target;C.removeEventListener("dispose",I),G(C),C.isVideoTexture&&m.delete(C)}function F(U){const C=U.target;C.removeEventListener("dispose",F),R(C)}function G(U){const C=r.get(U);if(C.__webglInit===void 0)return;const se=U.source,ce=g.get(se);if(ce){const ue=ce[C.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&b(U),Object.keys(ce).length===0&&g.delete(se)}r.remove(U)}function b(U){const C=r.get(U);i.deleteTexture(C.__webglTexture);const se=U.source,ce=g.get(se);delete ce[C.__cacheKey],c.memory.textures--}function R(U){const C=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(C.__webglFramebuffer[ce]))for(let ue=0;ue<C.__webglFramebuffer[ce].length;ue++)i.deleteFramebuffer(C.__webglFramebuffer[ce][ue]);else i.deleteFramebuffer(C.__webglFramebuffer[ce]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ce])}else{if(Array.isArray(C.__webglFramebuffer))for(let ce=0;ce<C.__webglFramebuffer.length;ce++)i.deleteFramebuffer(C.__webglFramebuffer[ce]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ce=0;ce<C.__webglColorRenderbuffer.length;ce++)C.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ce]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const se=U.textures;for(let ce=0,ue=se.length;ce<ue;ce++){const ve=r.get(se[ce]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),c.memory.textures--),r.remove(se[ce])}r.remove(U)}let B=0;function he(){B=0}function V(){const U=B;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),B+=1,U}function Y(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function Q(U,C){const se=r.get(U);if(U.isVideoTexture&&Qe(U),U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){const ce=U.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(se,U,C);return}}t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+C)}function W(U,C){const se=r.get(U);if(U.version>0&&se.__version!==U.version){re(se,U,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+C)}function ee(U,C){const se=r.get(U);if(U.version>0&&se.__version!==U.version){re(se,U,C);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+C)}function D(U,C){const se=r.get(U);if(U.version>0&&se.__version!==U.version){xe(se,U,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+C)}const ne={[Ud]:i.REPEAT,[Gs]:i.CLAMP_TO_EDGE,[kd]:i.MIRRORED_REPEAT},te={[ar]:i.NEAREST,[HM]:i.NEAREST_MIPMAP_NEAREST,[lc]:i.NEAREST_MIPMAP_LINEAR,[xr]:i.LINEAR,[jf]:i.LINEAR_MIPMAP_NEAREST,[Ws]:i.LINEAR_MIPMAP_LINEAR},H={[jM]:i.NEVER,[KM]:i.ALWAYS,[XM]:i.LESS,[gx]:i.LEQUAL,[$M]:i.EQUAL,[qM]:i.GEQUAL,[YM]:i.GREATER,[ZM]:i.NOTEQUAL};function pe(U,C){if(C.type===kr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===xr||C.magFilter===jf||C.magFilter===lc||C.magFilter===Ws||C.minFilter===xr||C.minFilter===jf||C.minFilter===lc||C.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ne[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ne[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ne[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,te[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,te[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,H[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ar||C.minFilter!==lc&&C.minFilter!==Ws||C.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Ne(U,C){let se=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",I));const ce=C.source;let ue=g.get(ce);ue===void 0&&(ue={},g.set(ce,ue));const ve=Y(C);if(ve!==U.__cacheKey){ue[ve]===void 0&&(ue[ve]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,se=!0),ue[ve].usedTimes++;const Ze=ue[U.__cacheKey];Ze!==void 0&&(ue[U.__cacheKey].usedTimes--,Ze.usedTimes===0&&b(C)),U.__cacheKey=ve,U.__webglTexture=ue[ve].texture}return se}function re(U,C,se){let ce=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ce=i.TEXTURE_3D);const ue=Ne(U,C),ve=C.source;t.bindTexture(ce,U.__webglTexture,i.TEXTURE0+se);const Ze=r.get(ve);if(ve.version!==Ze.__version||ue===!0){t.activeTexture(i.TEXTURE0+se);const Ie=Ht.getPrimaries(Ht.workingColorSpace),Ve=C.colorSpace===ds?null:Ht.getPrimaries(C.colorSpace),mt=C.colorSpace===ds||Ie===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ae=E(C.image,!1,o.maxTextureSize);Ae=Gt(C,Ae);const We=l.convert(C.format,C.colorSpace),tt=l.convert(C.type);let rt=L(C.internalFormat,We,tt,C.colorSpace,C.isVideoTexture);pe(ce,C);let je;const at=C.mipmaps,ct=C.isVideoTexture!==!0,Ot=Ze.__version===void 0||ue===!0,K=ve.dataReady,Fe=O(C,Ae);if(C.isDepthTexture)rt=A(C.format===$o,C.type),Ot&&(ct?t.texStorage2D(i.TEXTURE_2D,1,rt,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,rt,Ae.width,Ae.height,0,We,tt,null));else if(C.isDataTexture)if(at.length>0){ct&&Ot&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,at[0].width,at[0].height);for(let me=0,_e=at.length;me<_e;me++)je=at[me],ct?K&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,tt,je.data):t.texImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,We,tt,je.data);C.generateMipmaps=!1}else ct?(Ot&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,Ae.width,Ae.height),K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,We,tt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,rt,Ae.width,Ae.height,0,We,tt,Ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ct&&Ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,rt,at[0].width,at[0].height,Ae.depth);for(let me=0,_e=at.length;me<_e;me++)if(je=at[me],C.format!==or)if(We!==null)if(ct){if(K)if(C.layerUpdates.size>0){const ke=o0(je.width,je.height,C.format,C.type);for(const Ue of C.layerUpdates){const ft=je.data.subarray(Ue*ke/je.data.BYTES_PER_ELEMENT,(Ue+1)*ke/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ue,je.width,je.height,1,We,ft)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,Ae.depth,We,je.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,rt,je.width,je.height,Ae.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,je.width,je.height,Ae.depth,We,tt,je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,rt,je.width,je.height,Ae.depth,0,We,tt,je.data)}else{ct&&Ot&&t.texStorage2D(i.TEXTURE_2D,Fe,rt,at[0].width,at[0].height);for(let me=0,_e=at.length;me<_e;me++)je=at[me],C.format!==or?We!==null?ct?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,je.data):t.compressedTexImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?K&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,je.width,je.height,We,tt,je.data):t.texImage2D(i.TEXTURE_2D,me,rt,je.width,je.height,0,We,tt,je.data)}else if(C.isDataArrayTexture)if(ct){if(Ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,rt,Ae.width,Ae.height,Ae.depth),K)if(C.layerUpdates.size>0){const me=o0(Ae.width,Ae.height,C.format,C.type);for(const _e of C.layerUpdates){const ke=Ae.data.subarray(_e*me/Ae.data.BYTES_PER_ELEMENT,(_e+1)*me/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,We,tt,ke)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(C.isData3DTexture)ct?(Ot&&t.texStorage3D(i.TEXTURE_3D,Fe,rt,Ae.width,Ae.height,Ae.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,tt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,rt,Ae.width,Ae.height,Ae.depth,0,We,tt,Ae.data);else if(C.isFramebufferTexture){if(Ot)if(ct)t.texStorage2D(i.TEXTURE_2D,Fe,rt,Ae.width,Ae.height);else{let me=Ae.width,_e=Ae.height;for(let ke=0;ke<Fe;ke++)t.texImage2D(i.TEXTURE_2D,ke,rt,me,_e,0,We,tt,null),me>>=1,_e>>=1}}else if(at.length>0){if(ct&&Ot){const me=Xe(at[0]);t.texStorage2D(i.TEXTURE_2D,Fe,rt,me.width,me.height)}for(let me=0,_e=at.length;me<_e;me++)je=at[me],ct?K&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,We,tt,je):t.texImage2D(i.TEXTURE_2D,me,rt,We,tt,je);C.generateMipmaps=!1}else if(ct){if(Ot){const me=Xe(Ae);t.texStorage2D(i.TEXTURE_2D,Fe,rt,me.width,me.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,tt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,rt,We,tt,Ae);y(C)&&v(ce),Ze.__version=ve.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function xe(U,C,se){if(C.image.length!==6)return;const ce=Ne(U,C),ue=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+se);const ve=r.get(ue);if(ue.version!==ve.__version||ce===!0){t.activeTexture(i.TEXTURE0+se);const Ze=Ht.getPrimaries(Ht.workingColorSpace),Ie=C.colorSpace===ds?null:Ht.getPrimaries(C.colorSpace),Ve=C.colorSpace===ds||Ze===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const mt=C.isCompressedTexture||C.image[0].isCompressedTexture,Ae=C.image[0]&&C.image[0].isDataTexture,We=[];for(let _e=0;_e<6;_e++)!mt&&!Ae?We[_e]=E(C.image[_e],!0,o.maxCubemapSize):We[_e]=Ae?C.image[_e].image:C.image[_e],We[_e]=Gt(C,We[_e]);const tt=We[0],rt=l.convert(C.format,C.colorSpace),je=l.convert(C.type),at=L(C.internalFormat,rt,je,C.colorSpace),ct=C.isVideoTexture!==!0,Ot=ve.__version===void 0||ce===!0,K=ue.dataReady;let Fe=O(C,tt);pe(i.TEXTURE_CUBE_MAP,C);let me;if(mt){ct&&Ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,tt.width,tt.height);for(let _e=0;_e<6;_e++){me=We[_e].mipmaps;for(let ke=0;ke<me.length;ke++){const Ue=me[ke];C.format!==or?rt!==null?ct?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,rt,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,at,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,Ue.width,Ue.height,rt,je,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,at,Ue.width,Ue.height,0,rt,je,Ue.data)}}}else{if(me=C.mipmaps,ct&&Ot){me.length>0&&Fe++;const _e=Xe(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){ct?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We[_e].width,We[_e].height,rt,je,We[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,We[_e].width,We[_e].height,0,rt,je,We[_e].data);for(let ke=0;ke<me.length;ke++){const ft=me[ke].image[_e].image;ct?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,ft.width,ft.height,rt,je,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,at,ft.width,ft.height,0,rt,je,ft.data)}}else{ct?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,rt,je,We[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,rt,je,We[_e]);for(let ke=0;ke<me.length;ke++){const Ue=me[ke];ct?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,rt,je,Ue.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,at,rt,je,Ue.image[_e])}}}y(C)&&v(i.TEXTURE_CUBE_MAP),ve.__version=ue.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Se(U,C,se,ce,ue,ve){const Ze=l.convert(se.format,se.colorSpace),Ie=l.convert(se.type),Ve=L(se.internalFormat,Ze,Ie,se.colorSpace),mt=r.get(C),Ae=r.get(se);if(Ae.__renderTarget=C,!mt.__hasExternalTextures){const We=Math.max(1,C.width>>ve),tt=Math.max(1,C.height>>ve);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ve,Ve,We,tt,C.depth,0,Ze,Ie,null):t.texImage2D(ue,ve,Ve,We,tt,0,Ze,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),yt(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ue,Ae.__webglTexture,0,pt(C)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ue,Ae.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(U,C,se){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){const ce=C.depthTexture,ue=ce&&ce.isDepthTexture?ce.type:null,ve=A(C.stencilBuffer,ue),Ze=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=pt(C);yt(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ve,C.width,C.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ve,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ze,i.RENDERBUFFER,U)}else{const ce=C.textures;for(let ue=0;ue<ce.length;ue++){const ve=ce[ue],Ze=l.convert(ve.format,ve.colorSpace),Ie=l.convert(ve.type),Ve=L(ve.internalFormat,Ze,Ie,ve.colorSpace),mt=pt(C);se&&yt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Ve,C.width,C.height):yt(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Ve,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(C.depthTexture);ce.__renderTarget=C,(!ce.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Q(C.depthTexture,0);const ue=ce.__webglTexture,ve=pt(C);if(C.depthTexture.format===Bo)yt(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(C.depthTexture.format===$o)yt(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ze(U){const C=r.get(U),se=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const ce=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ce){const ue=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ce.removeEventListener("dispose",ue)};ce.addEventListener("dispose",ue),C.__depthDisposeCallback=ue}C.__boundDepthTexture=ce}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");be(C.__webglFramebuffer,U)}else if(se){C.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ce]),C.__webglDepthbuffer[ce]===void 0)C.__webglDepthbuffer[ce]=i.createRenderbuffer(),Me(C.__webglDepthbuffer[ce],U,!1);else{const ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=C.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ve)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Me(C.__webglDepthbuffer,U,!1);else{const ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(U,C,se){const ce=r.get(U);C!==void 0&&Se(ce.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&ze(U)}function _t(U){const C=U.texture,se=r.get(U),ce=r.get(C);U.addEventListener("dispose",F);const ue=U.textures,ve=U.isWebGLCubeRenderTarget===!0,Ze=ue.length>1;if(Ze||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=C.version,c.memory.textures++),ve){se.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer[Ie]=[];for(let Ve=0;Ve<C.mipmaps.length;Ve++)se.__webglFramebuffer[Ie][Ve]=i.createFramebuffer()}else se.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ie=0;Ie<C.mipmaps.length;Ie++)se.__webglFramebuffer[Ie]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(Ze)for(let Ie=0,Ve=ue.length;Ie<Ve;Ie++){const mt=r.get(ue[Ie]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&yt(U)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ue.length;Ie++){const Ve=ue[Ie];se.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const mt=l.convert(Ve.format,Ve.colorSpace),Ae=l.convert(Ve.type),We=L(Ve.internalFormat,mt,Ae,Ve.colorSpace,U.isXRRenderTarget===!0),tt=pt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,We,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(se.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),pe(i.TEXTURE_CUBE_MAP,C);for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ve=0;Ve<C.mipmaps.length;Ve++)Se(se.__webglFramebuffer[Ie][Ve],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ve);else Se(se.__webglFramebuffer[Ie],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(C)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ie=0,Ve=ue.length;Ie<Ve;Ie++){const mt=ue[Ie],Ae=r.get(mt);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),pe(i.TEXTURE_2D,mt),Se(se.__webglFramebuffer,U,mt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),y(mt)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ce.__webglTexture),pe(Ie,C),C.mipmaps&&C.mipmaps.length>0)for(let Ve=0;Ve<C.mipmaps.length;Ve++)Se(se.__webglFramebuffer[Ve],U,C,i.COLOR_ATTACHMENT0,Ie,Ve);else Se(se.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,Ie,0);y(C)&&v(Ie),t.unbindTexture()}U.depthBuffer&&ze(U)}function wt(U){const C=U.textures;for(let se=0,ce=C.length;se<ce;se++){const ue=C[se];if(y(ue)){const ve=N(U),Ze=r.get(ue).__webglTexture;t.bindTexture(ve,Ze),v(ve),t.unbindTexture()}}}const jt=[],$=[];function kn(U){if(U.samples>0){if(yt(U)===!1){const C=U.textures,se=U.width,ce=U.height;let ue=i.COLOR_BUFFER_BIT;const ve=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=r.get(U),Ie=C.length>1;if(Ie)for(let Ve=0;Ve<C.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ve=0;Ve<C.length;Ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ve]);const mt=r.get(C[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,se,ce,0,0,se,ce,ue,i.NEAREST),d===!0&&(jt.length=0,$.length=0,jt.push(i.COLOR_ATTACHMENT0+Ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(jt.push(ve),$.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ve=0;Ve<C.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ve]);const mt=r.get(C[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function pt(U){return Math.min(o.maxSamples,U.samples)}function yt(U){const C=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Qe(U){const C=c.render.frame;m.get(U)!==C&&(m.set(U,C),U.update())}function Gt(U,C){const se=U.colorSpace,ce=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||se!==Yo&&se!==ds&&(Ht.getTransfer(se)===$t?(ce!==or||ue!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),C}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=he,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=D,this.rebindTextures=et,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=yt}function WC(i,e){function t(r,o=ds){let l;const c=Ht.getTransfer(o);if(r===Br)return i.UNSIGNED_BYTE;if(r===bh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ph)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ax)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===sx)return i.BYTE;if(r===ox)return i.SHORT;if(r===Ga)return i.UNSIGNED_SHORT;if(r===Rh)return i.INT;if(r===js)return i.UNSIGNED_INT;if(r===kr)return i.FLOAT;if(r===Za)return i.HALF_FLOAT;if(r===lx)return i.ALPHA;if(r===cx)return i.RGB;if(r===or)return i.RGBA;if(r===ux)return i.LUMINANCE;if(r===fx)return i.LUMINANCE_ALPHA;if(r===Bo)return i.DEPTH_COMPONENT;if(r===$o)return i.DEPTH_STENCIL;if(r===dx)return i.RED;if(r===Lh)return i.RED_INTEGER;if(r===hx)return i.RG;if(r===Dh)return i.RG_INTEGER;if(r===Nh)return i.RGBA_INTEGER;if(r===Uc||r===kc||r===Oc||r===zc)if(c===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Uc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Uc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===zd||r===Bd||r===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Gd)return c===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jd||r===Xd||r===$d||r===Yd||r===Zd||r===qd||r===Kd||r===Qd||r===Jd||r===eh||r===th||r===nh||r===ih||r===rh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===jd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rh)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bc||r===sh||r===oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bc)return c===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===px||r===ah||r===lh||r===ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const jC={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),v=this._getHandJoint(h,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=m.position.distanceTo(x.position),M=.02,S=.005;h.inputState.pinching&&g>M+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(jC)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const XC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$C=`
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

}`;class YC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Si,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new vs({vertexShader:XC,fragmentShader:$C,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZC extends Qo{constructor(e,t){super();const r=this;let o=null,l=1,c=null,u="local-floor",d=1,h=null,m=null,x=null,g=null,M=null,S=null;const E=new YC,y=t.getContextAttributes();let v=null,N=null;const L=[],A=[],O=new Vt;let I=null;const F=new Wi;F.viewport=new vn;const G=new Wi;G.viewport=new vn;const b=[F,G],R=new m1;let B=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=L[re];return xe===void 0&&(xe=new Md,L[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=L[re];return xe===void 0&&(xe=new Md,L[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=L[re];return xe===void 0&&(xe=new Md,L[re]=xe),xe.getHandSpace()};function V(re){const xe=A.indexOf(re.inputSource);if(xe===-1)return;const Se=L[xe];Se!==void 0&&(Se.update(re.inputSource,re.frame,h||c),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",Q);for(let re=0;re<L.length;re++){const xe=A[re];xe!==null&&(A[re]=null,L[re].disconnect(xe))}B=null,he=null,E.reset(),e.setRenderTarget(v),M=null,g=null,x=null,o=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),o.renderState.layers===void 0){const xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,xe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Xs(M.framebufferWidth,M.framebufferHeight,{format:or,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let xe=null,Se=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?$o:Bo,Se=y.stencil?Xo:js);const be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};x=new XRWebGLBinding(o,t),g=x.createProjectionLayer(be),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Xs(g.textureWidth,g.textureHeight,{format:or,type:Br,depthTexture:new bx(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Q(re){for(let xe=0;xe<re.removed.length;xe++){const Se=re.removed[xe],Me=A.indexOf(Se);Me>=0&&(A[Me]=null,L[Me].disconnect(Se))}for(let xe=0;xe<re.added.length;xe++){const Se=re.added[xe];let Me=A.indexOf(Se);if(Me===-1){for(let ze=0;ze<L.length;ze++)if(ze>=A.length){A.push(Se),Me=ze;break}else if(A[ze]===null){A[ze]=Se,Me=ze;break}if(Me===-1)break}const be=L[Me];be&&be.connect(Se)}}const W=new le,ee=new le;function D(re,xe,Se){W.setFromMatrixPosition(xe.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const Me=W.distanceTo(ee),be=xe.projectionMatrix.elements,ze=Se.projectionMatrix.elements,et=be[14]/(be[10]-1),_t=be[14]/(be[10]+1),wt=(be[9]+1)/be[5],jt=(be[9]-1)/be[5],$=(be[8]-1)/be[0],kn=(ze[8]+1)/ze[0],pt=et*$,yt=et*kn,Qe=Me/(-$+kn),Gt=Qe*-$;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Gt),re.translateZ(Qe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),be[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Xe=et+Qe,U=_t+Qe,C=pt-Gt,se=yt+(Me-Gt),ce=wt*_t/U*Xe,ue=jt*_t/U*Xe;re.projectionMatrix.makePerspective(C,se,ce,ue,Xe,U),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ne(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let xe=re.near,Se=re.far;E.texture!==null&&(E.depthNear>0&&(xe=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),R.near=G.near=F.near=xe,R.far=G.far=F.far=Se,(B!==R.near||he!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,he=R.far),F.layers.mask=re.layers.mask|2,G.layers.mask=re.layers.mask|4,R.layers.mask=F.layers.mask|G.layers.mask;const Me=re.parent,be=R.cameras;ne(R,Me);for(let ze=0;ze<be.length;ze++)ne(be[ze],Me);be.length===2?D(R,F,G):R.projectionMatrix.copy(F.projectionMatrix),te(re,R,Me)};function te(re,xe,Se){Se===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Wa*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&M===null))return d},this.setFoveation=function(re){d=re,g!==null&&(g.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let H=null;function pe(re,xe){if(m=xe.getViewerPose(h||c),S=xe,m!==null){const Se=m.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Me=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let ze=0;ze<Se.length;ze++){const et=Se[ze];let _t=null;if(M!==null)_t=M.getViewport(et);else{const jt=x.getViewSubImage(g,et);_t=jt.viewport,ze===0&&(e.setRenderTargetTextures(N,jt.colorTexture,g.ignoreDepthValues?void 0:jt.depthStencilTexture),e.setRenderTarget(N))}let wt=b[ze];wt===void 0&&(wt=new Wi,wt.layers.enable(ze),wt.viewport=new vn,b[ze]=wt),wt.matrix.fromArray(et.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(et.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(_t.x,_t.y,_t.width,_t.height),ze===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(wt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const ze=x.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,o.renderState)}}for(let Se=0;Se<L.length;Se++){const Me=A[Se],be=L[Se];Me!==null&&be!==void 0&&be.update(Me,xe,h||c)}H&&H(re,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),S=null}const Ne=new Fx;Ne.setAnimationLoop(pe),this.setAnimationLoop=function(re){H=re},this.dispose=function(){}}}const Os=new vr,qC=new mn;function KC(i,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Cx(i)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,N,L,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),x(y,v)):v.isMeshPhongMaterial?(l(y,v),m(y,v)):v.isMeshStandardMaterial?(l(y,v),g(y,v),v.isMeshPhysicalMaterial&&M(y,v,A)):v.isMeshMatcapMaterial?(l(y,v),S(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&u(y,v)):v.isPointsMaterial?d(y,v,N,L):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Mi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Mi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,A=N.envMapRotation;L&&(y.envMap.value=L,Os.copy(A),Os.x*=-1,Os.y*=-1,Os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(qC.makeRotationFromEuler(Os)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function u(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,N,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=L*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Mi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const N=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function QC(i,e,t,r){let o={},l={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const A=L.program;r.uniformBlockBinding(N,A)}function h(N,L){let A=o[N.id];A===void 0&&(S(N),A=m(N),o[N.id]=A,N.addEventListener("dispose",y));const O=L.program;r.updateUBOMapping(N,O);const I=e.render.frame;l[N.id]!==I&&(g(N),l[N.id]=I)}function m(N){const L=x();N.__bindingPointIndex=L;const A=i.createBuffer(),O=N.__size,I=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,A),A}function x(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const L=o[N.id],A=N.uniforms,O=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let I=0,F=A.length;I<F;I++){const G=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,R=G.length;b<R;b++){const B=G[b];if(M(B,I,b,O)===!0){const he=B.__offset,V=Array.isArray(B.value)?B.value:[B.value];let Y=0;for(let Q=0;Q<V.length;Q++){const W=V[Q],ee=E(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,he+Y,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,he,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(N,L,A,O){const I=N.value,F=L+"_"+A;if(O[F]===void 0)return typeof I=="number"||typeof I=="boolean"?O[F]=I:O[F]=I.clone(),!0;{const G=O[F];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return O[F]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function S(N){const L=N.uniforms;let A=0;const O=16;for(let F=0,G=L.length;F<G;F++){const b=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,B=b.length;R<B;R++){const he=b[R],V=Array.isArray(he.value)?he.value:[he.value];for(let Y=0,Q=V.length;Y<Q;Y++){const W=V[Y],ee=E(W),D=A%O,ne=D%ee.boundary,te=D+ne;A+=ne,te!==0&&O-te<ee.storage&&(A+=O-te),he.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=A,A+=ee.storage}}}const I=A%O;return I>0&&(A+=O-I),N.__size=A,N.__cache={},this}function E(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const A=c.indexOf(L.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function v(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},l={}}return{bind:d,update:h,dispose:v}}class JC{constructor(e={}){const{canvas:t=mS(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const S=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gi,this.toneMapping=gs,this.toneMappingExposure=1;const A=this;let O=!1,I=0,F=0,G=null,b=-1,R=null;const B=new vn,he=new vn;let V=null;const Y=new It(0);let Q=0,W=t.width,ee=t.height,D=1,ne=null,te=null;const H=new vn(0,0,W,ee),pe=new vn(0,0,W,ee);let Ne=!1;const re=new Fh;let xe=!1,Se=!1;const Me=new mn,be=new mn,ze=new le,et=new vn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function jt(){return G===null?D:1}let $=r;function kn(P,J){return t.getContext(P,J)}try{const P={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ah}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),$===null){const J="webgl2";if($=kn(J,P),$===null)throw kn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let pt,yt,Qe,Gt,Xe,U,C,se,ce,ue,ve,Ze,Ie,Ve,mt,Ae,We,tt,rt,je,at,ct,Ot,K;function Fe(){pt=new lT($),pt.init(),ct=new WC($,pt),yt=new nT($,pt,e,ct),Qe=new VC($,pt),yt.reverseDepthBuffer&&g&&Qe.buffers.depth.setReversed(!0),Gt=new fT($),Xe=new bC,U=new GC($,pt,Qe,Xe,yt,ct,Gt),C=new rT(A),se=new aT(A),ce=new v1($),Ot=new eT($,ce),ue=new cT($,ce,Gt,Ot),ve=new hT($,ue,ce,Gt),rt=new dT($,yt,U),Ae=new iT(Xe),Ze=new RC(A,C,se,pt,yt,Ot,Ae),Ie=new KC(A,Xe),Ve=new LC,mt=new kC(pt),tt=new Jw(A,C,se,Qe,ve,M,d),We=new BC(A,ve,yt),K=new QC($,Gt,yt,Qe),je=new tT($,pt,Gt),at=new uT($,pt,Gt),Gt.programs=Ze.programs,A.capabilities=yt,A.extensions=pt,A.properties=Xe,A.renderLists=Ve,A.shadowMap=We,A.state=Qe,A.info=Gt}Fe();const me=new ZC(A,$);this.xr=me,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(W,ee,!1))},this.getSize=function(P){return P.set(W,ee)},this.setSize=function(P,J,ae=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,ee=J,t.width=Math.floor(P*D),t.height=Math.floor(J*D),ae===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(W*D,ee*D).floor()},this.setDrawingBufferSize=function(P,J,ae){W=P,ee=J,D=ae,t.width=Math.floor(P*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,J,ae,fe){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,J,ae,fe),Qe.viewport(B.copy(H).multiplyScalar(D).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,J,ae,fe){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,J,ae,fe),Qe.scissor(he.copy(pe).multiplyScalar(D).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(P){Qe.setScissorTest(Ne=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(P=!0,J=!0,ae=!0){let fe=0;if(P){let Z=!1;if(G!==null){const Te=G.texture.format;Z=Te===Nh||Te===Dh||Te===Lh}if(Z){const Te=G.texture.type,Le=Te===Br||Te===js||Te===Ga||Te===Xo||Te===bh||Te===Ph,Be=tt.getClearColor(),Ge=tt.getClearAlpha(),it=Be.r,lt=Be.g,qe=Be.b;Le?(S[0]=it,S[1]=lt,S[2]=qe,S[3]=Ge,$.clearBufferuiv($.COLOR,0,S)):(E[0]=it,E[1]=lt,E[2]=qe,E[3]=Ge,$.clearBufferiv($.COLOR,0,E))}else fe|=$.COLOR_BUFFER_BIT}J&&(fe|=$.DEPTH_BUFFER_BIT),ae&&(fe|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),tt.dispose(),Ve.dispose(),mt.dispose(),Xe.dispose(),C.dispose(),se.dispose(),ve.dispose(),Ot.dispose(),K.dispose(),Ze.dispose(),me.dispose(),me.removeEventListener("sessionstart",ii),me.removeEventListener("sessionend",Zn),en.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const P=Gt.autoReset,J=We.enabled,ae=We.autoUpdate,fe=We.needsUpdate,Z=We.type;Fe(),Gt.autoReset=P,We.enabled=J,We.autoUpdate=ae,We.needsUpdate=fe,We.type=Z}function Ue(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){const J=P.target;J.removeEventListener("dispose",ft),Yt(J)}function Yt(P){gn(P),Xe.remove(P)}function gn(P){const J=Xe.get(P).programs;J!==void 0&&(J.forEach(function(ae){Ze.releaseProgram(ae)}),P.isShaderMaterial&&Ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,ae,fe,Z,Te){J===null&&(J=_t);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=si(P,J,ae,fe,Z);Qe.setMaterial(fe,Le);let Ge=ae.index,it=1;if(fe.wireframe===!0){if(Ge=ue.getWireframeAttribute(ae),Ge===void 0)return;it=2}const lt=ae.drawRange,qe=ae.attributes.position;let dt=lt.start*it,Ft=(lt.start+lt.count)*it;Te!==null&&(dt=Math.max(dt,Te.start*it),Ft=Math.min(Ft,(Te.start+Te.count)*it)),Ge!==null?(dt=Math.max(dt,0),Ft=Math.min(Ft,Ge.count)):qe!=null&&(dt=Math.max(dt,0),Ft=Math.min(Ft,qe.count));const Lt=Ft-dt;if(Lt<0||Lt===1/0)return;Ot.setup(Z,fe,Be,ae,Ge);let Zt,Tt=je;if(Ge!==null&&(Zt=ce.get(Ge),Tt=at,Tt.setIndex(Zt)),Z.isMesh)fe.wireframe===!0?(Qe.setLineWidth(fe.wireframeLinewidth*jt()),Tt.setMode($.LINES)):Tt.setMode($.TRIANGLES);else if(Z.isLine){let nt=fe.linewidth;nt===void 0&&(nt=1),Qe.setLineWidth(nt*jt()),Z.isLineSegments?Tt.setMode($.LINES):Z.isLineLoop?Tt.setMode($.LINE_LOOP):Tt.setMode($.LINE_STRIP)}else Z.isPoints?Tt.setMode($.POINTS):Z.isSprite&&Tt.setMode($.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Tt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const nt=Z._multiDrawStarts,sn=Z._multiDrawCounts,Ct=Z._multiDrawCount,bn=Ge?ce.get(Ge).bytesPerElement:1,Ei=Xe.get(fe).currentProgram.getUniforms();for(let Pn=0;Pn<Ct;Pn++)Ei.setValue($,"_gl_DrawID",Pn),Tt.render(nt[Pn]/bn,sn[Pn])}else if(Z.isInstancedMesh)Tt.renderInstances(dt,Lt,Z.count);else if(ae.isInstancedBufferGeometry){const nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,sn=Math.min(ae.instanceCount,nt);Tt.renderInstances(dt,Lt,sn)}else Tt.render(dt,Lt)};function Et(P,J,ae){P.transparent===!0&&P.side===Ur&&P.forceSinglePass===!1?(P.side=Mi,P.needsUpdate=!0,qn(P,J,ae),P.side=xs,P.needsUpdate=!0,qn(P,J,ae),P.side=Ur):qn(P,J,ae)}this.compile=function(P,J,ae=null){ae===null&&(ae=P),v=mt.get(ae),v.init(J),L.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),P!==ae&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const fe=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Be=Te[Le];Et(Be,ae,Z),fe.add(Be)}else Et(Te,ae,Z),fe.add(Te)}),L.pop(),v=null,fe},this.compileAsync=function(P,J,ae=null){const fe=this.compile(P,J,ae);return new Promise(Z=>{function Te(){if(fe.forEach(function(Le){Xe.get(Le).currentProgram.isReady()&&fe.delete(Le)}),fe.size===0){Z(P);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Wt=null;function On(P){Wt&&Wt(P)}function ii(){en.stop()}function Zn(){en.start()}const en=new Fx;en.setAnimationLoop(On),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(P){Wt=P,me.setAnimationLoop(P),P===null?en.stop():en.start()},me.addEventListener("sessionstart",ii),me.addEventListener("sessionend",Zn),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(J),J=me.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,J,G),v=mt.get(P,L.length),v.init(J),L.push(v),be.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),re.setFromProjectionMatrix(be),Se=this.localClippingEnabled,xe=Ae.init(this.clippingPlanes,Se),y=Ve.get(P,N.length),y.init(),N.push(y),me.enabled===!0&&me.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&zn(Te,J,-1/0,A.sortObjects)}zn(P,J,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ne,te),wt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,wt&&tt.addToRenderList(y,P),this.info.render.frame++,xe===!0&&Ae.beginShadows();const ae=v.state.shadowsArray;We.render(ae,P,J),xe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=y.opaque,Z=y.transmissive;if(v.setupLights(),J.isArrayCamera){const Te=J.cameras;if(Z.length>0)for(let Le=0,Be=Te.length;Le<Be;Le++){const Ge=Te[Le];Di(fe,Z,P,Ge)}wt&&tt.render(P);for(let Le=0,Be=Te.length;Le<Be;Le++){const Ge=Te[Le];Li(y,P,Ge,Ge.viewport)}}else Z.length>0&&Di(fe,Z,P,J),wt&&tt.render(P),Li(y,P,J);G!==null&&(U.updateMultisampleRenderTarget(G),U.updateRenderTargetMipmap(G)),P.isScene===!0&&P.onAfterRender(A,P,J),Ot.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(v=L[L.length-1],xe===!0&&Ae.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function zn(P,J,ae,fe){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||re.intersectsSprite(P)){fe&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);const Le=ve.update(P),Be=P.material;Be.visible&&y.push(P,Le,Be,ae,et.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||re.intersectsObject(P))){const Le=ve.update(P),Be=P.material;if(fe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),et.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),et.copy(Le.boundingSphere.center)),et.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(Be)){const Ge=Le.groups;for(let it=0,lt=Ge.length;it<lt;it++){const qe=Ge[it],dt=Be[qe.materialIndex];dt&&dt.visible&&y.push(P,Le,dt,ae,et.z,qe)}}else Be.visible&&y.push(P,Le,Be,ae,et.z,null)}}const Te=P.children;for(let Le=0,Be=Te.length;Le<Be;Le++)zn(Te[Le],J,ae,fe)}function Li(P,J,ae,fe){const Z=P.opaque,Te=P.transmissive,Le=P.transparent;v.setupLightsView(ae),xe===!0&&Ae.setGlobalState(A.clippingPlanes,ae),fe&&Qe.viewport(B.copy(fe)),Z.length>0&&di(Z,J,ae),Te.length>0&&di(Te,J,ae),Le.length>0&&di(Le,J,ae),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Di(P,J,ae,fe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[fe.id]===void 0&&(v.state.transmissionRenderTarget[fe.id]=new Xs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Za:Br,minFilter:Ws,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const Te=v.state.transmissionRenderTarget[fe.id],Le=fe.viewport||B;Te.setSize(Le.z,Le.w);const Be=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(Y),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),wt&&tt.render(ae);const Ge=A.toneMapping;A.toneMapping=gs;const it=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),v.setupLightsView(fe),xe===!0&&Ae.setGlobalState(A.clippingPlanes,fe),di(P,ae,fe),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let qe=0,dt=J.length;qe<dt;qe++){const Ft=J[qe],Lt=Ft.object,Zt=Ft.geometry,Tt=Ft.material,nt=Ft.group;if(Tt.side===Ur&&Lt.layers.test(fe.layers)){const sn=Tt.side;Tt.side=Mi,Tt.needsUpdate=!0,Yi(Lt,ae,fe,Zt,Tt,nt),Tt.side=sn,Tt.needsUpdate=!0,lt=!0}}lt===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}A.setRenderTarget(Be),A.setClearColor(Y,Q),it!==void 0&&(fe.viewport=it),A.toneMapping=Ge}function di(P,J,ae){const fe=J.isScene===!0?J.overrideMaterial:null;for(let Z=0,Te=P.length;Z<Te;Z++){const Le=P[Z],Be=Le.object,Ge=Le.geometry,it=fe===null?Le.material:fe,lt=Le.group;Be.layers.test(ae.layers)&&Yi(Be,J,ae,Ge,it,lt)}}function Yi(P,J,ae,fe,Z,Te){P.onBeforeRender(A,J,ae,fe,Z,Te),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(A,J,ae,fe,P,Te),Z.transparent===!0&&Z.side===Ur&&Z.forceSinglePass===!1?(Z.side=Mi,Z.needsUpdate=!0,A.renderBufferDirect(ae,J,fe,Z,P,Te),Z.side=xs,Z.needsUpdate=!0,A.renderBufferDirect(ae,J,fe,Z,P,Te),Z.side=Ur):A.renderBufferDirect(ae,J,fe,Z,P,Te),P.onAfterRender(A,J,ae,fe,Z,Te)}function qn(P,J,ae){J.isScene!==!0&&(J=_t);const fe=Xe.get(P),Z=v.state.lights,Te=v.state.shadowsArray,Le=Z.state.version,Be=Ze.getParameters(P,Z.state,Te,J,ae),Ge=Ze.getProgramCacheKey(Be);let it=fe.programs;fe.environment=P.isMeshStandardMaterial?J.environment:null,fe.fog=J.fog,fe.envMap=(P.isMeshStandardMaterial?se:C).get(P.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",ft),it=new Map,fe.programs=it);let lt=it.get(Ge);if(lt!==void 0){if(fe.currentProgram===lt&&fe.lightsStateVersion===Le)return ri(P,Be),lt}else Be.uniforms=Ze.getUniforms(P),P.onBeforeCompile(Be,A),lt=Ze.acquireProgram(Be,Ge),it.set(Ge,lt),fe.uniforms=Be.uniforms;const qe=fe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=Ae.uniform),ri(P,Be),fe.needsLights=na(P),fe.lightsStateVersion=Le,fe.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),fe.currentProgram=lt,fe.uniformsList=null,lt}function Ys(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Hc.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function ri(P,J){const ae=Xe.get(P);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function si(P,J,ae,fe,Z){J.isScene!==!0&&(J=_t),U.resetTextureUnits();const Te=J.fog,Le=fe.isMeshStandardMaterial?J.environment:null,Be=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Yo,Ge=(fe.isMeshStandardMaterial?se:C).get(fe.envMap||Le),it=fe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),qe=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Ft=!!ae.morphAttributes.color;let Lt=gs;fe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Lt=A.toneMapping);const Zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Tt=Zt!==void 0?Zt.length:0,nt=Xe.get(fe),sn=v.state.lights;if(xe===!0&&(Se===!0||P!==R)){const on=P===R&&fe.id===b;Ae.setState(fe,P,on)}let Ct=!1;fe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==sn.state.version||nt.outputColorSpace!==Be||Z.isBatchedMesh&&nt.batching===!1||!Z.isBatchedMesh&&nt.batching===!0||Z.isBatchedMesh&&nt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&nt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&nt.instancing===!1||!Z.isInstancedMesh&&nt.instancing===!0||Z.isSkinnedMesh&&nt.skinning===!1||!Z.isSkinnedMesh&&nt.skinning===!0||Z.isInstancedMesh&&nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&nt.instancingMorph===!1&&Z.morphTexture!==null||nt.envMap!==Ge||fe.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ae.numPlanes||nt.numIntersection!==Ae.numIntersection)||nt.vertexAlphas!==it||nt.vertexTangents!==lt||nt.morphTargets!==qe||nt.morphNormals!==dt||nt.morphColors!==Ft||nt.toneMapping!==Lt||nt.morphTargetsCount!==Tt)&&(Ct=!0):(Ct=!0,nt.__version=fe.version);let bn=nt.currentProgram;Ct===!0&&(bn=qn(fe,J,Z));let Ei=!1,Pn=!1,_r=!1;const Xt=bn.getUniforms(),jn=nt.uniforms;if(Qe.useProgram(bn.program)&&(Ei=!0,Pn=!0,_r=!0),fe.id!==b&&(b=fe.id,Pn=!0),Ei||R!==P){Qe.buffers.depth.getReversed()?(Me.copy(P.projectionMatrix),xS(Me),vS(Me),Xt.setValue($,"projectionMatrix",Me)):Xt.setValue($,"projectionMatrix",P.projectionMatrix),Xt.setValue($,"viewMatrix",P.matrixWorldInverse);const X=Xt.map.cameraPosition;X!==void 0&&X.setValue($,ze.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&Xt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Xt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Pn=!0,_r=!0)}if(Z.isSkinnedMesh){Xt.setOptional($,Z,"bindMatrix"),Xt.setOptional($,Z,"bindMatrixInverse");const on=Z.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Xt.setValue($,"boneTexture",on.boneTexture,U))}Z.isBatchedMesh&&(Xt.setOptional($,Z,"batchingTexture"),Xt.setValue($,"batchingTexture",Z._matricesTexture,U),Xt.setOptional($,Z,"batchingIdTexture"),Xt.setValue($,"batchingIdTexture",Z._indirectTexture,U),Xt.setOptional($,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Xt.setValue($,"batchingColorTexture",Z._colorsTexture,U));const Ln=ae.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&rt.update(Z,ae,bn),(Pn||nt.receiveShadow!==Z.receiveShadow)&&(nt.receiveShadow=Z.receiveShadow,Xt.setValue($,"receiveShadow",Z.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(jn.envMap.value=Ge,jn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&J.environment!==null&&(jn.envMapIntensity.value=J.environmentIntensity),Pn&&(Xt.setValue($,"toneMappingExposure",A.toneMappingExposure),nt.needsLights&&Zs(jn,_r),Te&&fe.fog===!0&&Ie.refreshFogUniforms(jn,Te),Ie.refreshMaterialUniforms(jn,fe,D,ee,v.state.transmissionRenderTarget[P.id]),Hc.upload($,Ys(nt),jn,U)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Hc.upload($,Ys(nt),jn,U),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Xt.setValue($,"center",Z.center),Xt.setValue($,"modelViewMatrix",Z.modelViewMatrix),Xt.setValue($,"normalMatrix",Z.normalMatrix),Xt.setValue($,"modelMatrix",Z.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const on=fe.uniformsGroups;for(let X=0,k=on.length;X<k;X++){const ge=on[X];K.update(ge,bn),K.bind(ge,bn)}}return bn}function Zs(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function na(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(P,J,ae){Xe.get(P.texture).__webglTexture=J,Xe.get(P.depthTexture).__webglTexture=ae;const fe=Xe.get(P);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ae===void 0,fe.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,J){const ae=Xe.get(P);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,ae=0){G=P,I=J,F=ae;let fe=!0,Z=null,Te=!1,Le=!1;if(P){const Ge=Xe.get(P);if(Ge.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer($.FRAMEBUFFER,null),fe=!1;else if(Ge.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Ge.__hasExternalTextures)U.rebindTextures(P,Xe.get(P.texture).__webglTexture,Xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if(Ge.__boundDepthTexture!==qe){if(qe!==null&&Xe.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const lt=Xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[J])?Z=lt[J][ae]:Z=lt[J],Te=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?Z=Xe.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?Z=lt[ae]:Z=lt,B.copy(P.viewport),he.copy(P.scissor),V=P.scissorTest}else B.copy(H).multiplyScalar(D).floor(),he.copy(pe).multiplyScalar(D).floor(),V=Ne;if(Qe.bindFramebuffer($.FRAMEBUFFER,Z)&&fe&&Qe.drawBuffers(P,Z),Qe.viewport(B),Qe.scissor(he),Qe.setScissorTest(V),Te){const Ge=Xe.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ge.__webglTexture,ae)}else if(Le){const Ge=Xe.get(P.texture),it=J||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ge.__webglTexture,ae||0,it)}b=-1},this.readRenderTargetPixels=function(P,J,ae,fe,Z,Te,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){Qe.bindFramebuffer($.FRAMEBUFFER,Be);try{const Ge=P.texture,it=Ge.format,lt=Ge.type;if(!yt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-fe&&ae>=0&&ae<=P.height-Z&&$.readPixels(J,ae,fe,Z,ct.convert(it),ct.convert(lt),Te)}finally{const Ge=G!==null?Xe.get(G).__webglFramebuffer:null;Qe.bindFramebuffer($.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,J,ae,fe,Z,Te,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){const Ge=P.texture,it=Ge.format,lt=Ge.type;if(!yt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=P.width-fe&&ae>=0&&ae<=P.height-Z){Qe.bindFramebuffer($.FRAMEBUFFER,Be);const qe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,qe),$.bufferData($.PIXEL_PACK_BUFFER,Te.byteLength,$.STREAM_READ),$.readPixels(J,ae,fe,Z,ct.convert(it),ct.convert(lt),0);const dt=G!==null?Xe.get(G).__webglFramebuffer:null;Qe.bindFramebuffer($.FRAMEBUFFER,dt);const Ft=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await gS($,Ft,4),$.bindBuffer($.PIXEL_PACK_BUFFER,qe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Te),$.deleteBuffer(qe),$.deleteSync(Ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,J=null,ae=0){P.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1]);const fe=Math.pow(2,-ae),Z=Math.floor(P.image.width*fe),Te=Math.floor(P.image.height*fe),Le=J!==null?J.x:0,Be=J!==null?J.y:0;U.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,ae,0,0,Le,Be,Z,Te),Qe.unbindTexture()};const Tn=$.createFramebuffer(),Hr=$.createFramebuffer();this.copyTextureToTexture=function(P,J,ae=null,fe=null,Z=0,Te=null){P.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,P=arguments[1],J=arguments[2],Te=arguments[3]||0,ae=null),Te===null&&(Z!==0?(Uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Le,Be,Ge,it,lt,qe,dt,Ft,Lt;const Zt=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(ae!==null)Le=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,it=ae.min.x,lt=ae.min.y,qe=ae.isBox3?ae.min.z:0;else{const Ln=Math.pow(2,-Z);Le=Math.floor(Zt.width*Ln),Be=Math.floor(Zt.height*Ln),P.isDataArrayTexture?Ge=Zt.depth:P.isData3DTexture?Ge=Math.floor(Zt.depth*Ln):Ge=1,it=0,lt=0,qe=0}fe!==null?(dt=fe.x,Ft=fe.y,Lt=fe.z):(dt=0,Ft=0,Lt=0);const Tt=ct.convert(J.format),nt=ct.convert(J.type);let sn;J.isData3DTexture?(U.setTexture3D(J,0),sn=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(U.setTexture2DArray(J,0),sn=$.TEXTURE_2D_ARRAY):(U.setTexture2D(J,0),sn=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const Ct=$.getParameter($.UNPACK_ROW_LENGTH),bn=$.getParameter($.UNPACK_IMAGE_HEIGHT),Ei=$.getParameter($.UNPACK_SKIP_PIXELS),Pn=$.getParameter($.UNPACK_SKIP_ROWS),_r=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,Zt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Zt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,it),$.pixelStorei($.UNPACK_SKIP_ROWS,lt),$.pixelStorei($.UNPACK_SKIP_IMAGES,qe);const Xt=P.isDataArrayTexture||P.isData3DTexture,jn=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){const Ln=Xe.get(P),on=Xe.get(J),X=Xe.get(Ln.__renderTarget),k=Xe.get(on.__renderTarget);Qe.bindFramebuffer($.READ_FRAMEBUFFER,X.__webglFramebuffer),Qe.bindFramebuffer($.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let ge=0;ge<Ge;ge++)Xt&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Xe.get(P).__webglTexture,Z,qe+ge),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Xe.get(J).__webglTexture,Te,Lt+ge)),$.blitFramebuffer(it,lt,Le,Be,dt,Ft,Le,Be,$.DEPTH_BUFFER_BIT,$.NEAREST);Qe.bindFramebuffer($.READ_FRAMEBUFFER,null),Qe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||Xe.has(P)){const Ln=Xe.get(P),on=Xe.get(J);Qe.bindFramebuffer($.READ_FRAMEBUFFER,Tn),Qe.bindFramebuffer($.DRAW_FRAMEBUFFER,Hr);for(let X=0;X<Ge;X++)Xt?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ln.__webglTexture,Z,qe+X):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ln.__webglTexture,Z),jn?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,Te,Lt+X):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,Te),Z!==0?$.blitFramebuffer(it,lt,Le,Be,dt,Ft,Le,Be,$.COLOR_BUFFER_BIT,$.NEAREST):jn?$.copyTexSubImage3D(sn,Te,dt,Ft,Lt+X,it,lt,Le,Be):$.copyTexSubImage2D(sn,Te,dt,Ft,it,lt,Le,Be);Qe.bindFramebuffer($.READ_FRAMEBUFFER,null),Qe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else jn?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(sn,Te,dt,Ft,Lt,Le,Be,Ge,Tt,nt,Zt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(sn,Te,dt,Ft,Lt,Le,Be,Ge,Tt,Zt.data):$.texSubImage3D(sn,Te,dt,Ft,Lt,Le,Be,Ge,Tt,nt,Zt):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Te,dt,Ft,Le,Be,Tt,nt,Zt.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Te,dt,Ft,Zt.width,Zt.height,Tt,Zt.data):$.texSubImage2D($.TEXTURE_2D,Te,dt,Ft,Le,Be,Tt,nt,Zt);$.pixelStorei($.UNPACK_ROW_LENGTH,Ct),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,bn),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ei),$.pixelStorei($.UNPACK_SKIP_ROWS,Pn),$.pixelStorei($.UNPACK_SKIP_IMAGES,_r),Te===0&&J.generateMipmaps&&$.generateMipmap(sn),Qe.unbindTexture()},this.copyTextureToTexture3D=function(P,J,ae=null,fe=null,Z=0){return P.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,fe=arguments[1]||null,P=arguments[2],J=arguments[3],Z=arguments[4]||0),Uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,J,ae,fe,Z)},this.initRenderTarget=function(P){Xe.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Qe.unbindTexture()},this.resetState=function(){I=0,F=0,G=null,Qe.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}const eA=-1.35,tA=1.35;function nA(i){return Math.min(tA,Math.max(eA,i))}function iA(i){return i.triangles.reduce((e,t)=>(t.forEach(r=>{e.minX=Math.min(e.minX,r.x),e.maxX=Math.max(e.maxX,r.x),e.minY=Math.min(e.minY,r.y),e.maxY=Math.max(e.maxY,r.y),e.minZ=Math.min(e.minZ,r.z),e.maxZ=Math.max(e.maxZ,r.z)}),e),{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0,minZ:1/0,maxZ:-1/0})}function rA(i){return Number.isFinite(i.minX)?{x:Math.round((i.minX+i.maxX)/2*1e3)/1e3,y:Math.round((i.minY+i.maxY)/2*1e3)/1e3,z:Math.round((i.minZ+i.maxZ)/2*1e3)/1e3}:{x:0,y:0,z:0}}function sA(i,e){const t=iA(i);if(!Number.isFinite(t.minX))return{x:0,y:0,z:0};const r=tu(e);return r.enabled&&(t.maxY+=e.height*(r.stackCount-1)),rA(t)}function oA(i,e,t){return{x:Math.round((i.x+e)*1e3)/1e3,y:Math.round((i.y+t)*1e3)/1e3}}const Ja={solid:"#6f8580",transparent:"#6f8580",edge:"#9fb1ac",strongEdge:"#d6e2df",stackPreview:"#9fb1ac"},aA=new kh({color:Ja.solid,roughness:.76,metalness:.02}),lA=new kh({color:Ja.transparent,roughness:.76,metalness:.02,opacity:.58,transparent:!0,depthWrite:!1}),cA=new ru({color:Ja.edge,transparent:!0,opacity:.82}),uA=new ru({color:Ja.strongEdge,transparent:!0,opacity:.95}),fA=new kh({color:Ja.stackPreview,roughness:.82,metalness:.02,opacity:.28,transparent:!0,depthWrite:!1});function dA(i){const e=tu(i);return e.enabled?Array.from({length:e.stackCount-1},(t,r)=>i.height*(r+1)):[]}function hA(i){const e=new Float32Array(i.triangles.length*9);i.triangles.forEach((r,o)=>{r.forEach((l,c)=>{const u=o*9+c*3;e[u]=l.x,e[u+1]=l.y,e[u+2]=l.z})});const t=new cr;return t.setAttribute("position",new lr(e,3)),t.computeVertexNormals(),t}function pA({settings:i,mesh:e,resetToken:t,viewMode:r}){const o=Pe.useRef(null),l=Pe.useRef(null),c=Pe.useRef({mode:"none",x:0,y:0,yaw:-.78,pitch:.62}),u=Pe.useRef({x:0,y:0}),d=Pe.useRef({width:1,height:1}),h=Pe.useRef(178),m=Pe.useMemo(()=>sA(e,i),[e,i]),x=Pe.useRef(m),g=Pe.useMemo(()=>Math.max(i.width,i.depth),[i.width,i.depth]);return Pe.useEffect(()=>{const M=o.current;if(!M)return;const S=new HS;S.background=new It("#d8dcde");const E=new Wi(42,1,.1,1200),y=new JC({antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=ac.showModelShadows,M.appendChild(y.domElement);const v=new ka;S.add(v);const N=new f1("#ffffff","#8ea0a8",2.2);S.add(N);const L=new p1("#ffffff",2.4);L.position.set(80,120,90),L.castShadow=ac.showModelShadows,S.add(L);const A=new g1(28);A.position.set(g/2+22,.5,g/2+20),S.add(A);const O=()=>{const{width:Q,height:W}=d.current,{x:ee,y:D}=u.current;E.clearViewOffset(),(Math.abs(ee)>.01||Math.abs(D)>.01)&&E.setViewOffset(Q,W,-ee,-D,Q,W),E.updateProjectionMatrix()},I=()=>{const{yaw:Q,pitch:W}=c.current,ee=h.current,D=x.current,ne=new le(D.x,D.y,D.z),te=Math.cos(W)*ee;E.position.set(ne.x+Math.sin(Q)*te,ne.y+Math.sin(W)*ee,ne.z+Math.cos(Q)*te),E.lookAt(ne)},F=()=>{const{width:Q,height:W}=M.getBoundingClientRect();y.setSize(Q,W),E.aspect=Q/Math.max(1,W),d.current={width:Math.max(1,Math.round(Q)),height:Math.max(1,Math.round(W))},O(),I(),y.render(S,E)},G=()=>{O(),I(),y.render(S,E)},b=Q=>{Q.button!==0&&Q.button!==2||(Q.preventDefault(),c.current.mode=Q.button===2?"pan":"rotate",c.current.x=Q.clientX,c.current.y=Q.clientY,y.domElement.setPointerCapture(Q.pointerId))},R=Q=>{if(c.current.mode==="none")return;const W=Q.clientX-c.current.x,ee=Q.clientY-c.current.y;c.current.x=Q.clientX,c.current.y=Q.clientY,c.current.mode==="pan"?u.current=oA(u.current,W,ee):(c.current.yaw-=W*.006,c.current.pitch=nA(c.current.pitch+ee*.004)),G()},B=Q=>{c.current.mode="none",y.domElement.hasPointerCapture(Q.pointerId)&&y.domElement.releasePointerCapture(Q.pointerId)},he=Q=>{Q.preventDefault()},V=Q=>{Q.preventDefault(),h.current=pS.clamp(h.current+Q.deltaY*.12,92,290),G()};y.domElement.addEventListener("pointerdown",b),y.domElement.addEventListener("pointermove",R),y.domElement.addEventListener("pointerup",B),y.domElement.addEventListener("pointercancel",B),y.domElement.addEventListener("contextmenu",he),y.domElement.addEventListener("wheel",V,{passive:!1});const Y=new ResizeObserver(F);return Y.observe(M),l.current={camera:E,model:v,render:G,renderer:y,scene:S},F(),()=>{Y.disconnect(),y.domElement.removeEventListener("pointerdown",b),y.domElement.removeEventListener("pointermove",R),y.domElement.removeEventListener("pointerup",B),y.domElement.removeEventListener("pointercancel",B),y.domElement.removeEventListener("contextmenu",he),y.domElement.removeEventListener("wheel",V),M.removeChild(y.domElement),y.dispose()}},[g]),Pe.useEffect(()=>{const M=l.current;M&&(c.current={mode:"none",x:0,y:0,yaw:-.78,pitch:.62},u.current={x:0,y:0},h.current=178,M.render())},[t]),Pe.useEffect(()=>{var M;x.current=m,(M=l.current)==null||M.render()},[m]),Pe.useEffect(()=>{const M=l.current;if(!M)return;M.model.traverse(y=>{y instanceof Xi&&y.geometry.dispose(),y instanceof uh&&y.geometry.dispose()}),M.model.clear();const S=hA(e),E=new Xi(S,r==="transparent"?lA:aA);if(E.castShadow=ac.showModelShadows,E.receiveShadow=ac.showModelShadows,M.model.add(E),dA(i).forEach(y=>{const v=new Xi(S,fA);v.position.y=y,v.castShadow=!1,v.receiveShadow=!1,M.model.add(v)}),r!=="solid"){const y=new uh(new jS(S,24),r==="edges"?uA:cA);M.model.add(y)}M.renderer.render(M.scene,M.camera)},[e,i,r]),w.jsxs("section",{className:"viewport-shell","aria-label":"3D tray preview",children:[w.jsx("div",{ref:o,className:"three-canvas"}),null]})}const mA=[{icon:H0,key:"solid",label:"ソリッド"},{icon:K_,key:"edges",label:"エッジ"},{icon:G_,key:"transparent",label:"透過"}];function gA({mode:i,onModeChange:e,onResetView:t}){return w.jsxs("div",{className:"view-toolbar","aria-label":"表示操作",children:[w.jsx("div",{className:"view-mode-group",role:"group","aria-label":"表示モード",children:mA.map(r=>{const o=r.icon;return w.jsxs("button",{"aria-pressed":i===r.key,className:i===r.key?"selected":"",title:r.label,type:"button",onClick:()=>e(r.key),children:[w.jsx(o,{size:17,"aria-hidden":"true"}),w.jsx("span",{children:r.label})]},r.key)})}),w.jsxs("button",{className:"view-reset","aria-label":"表示をリセット",title:"表示をリセット",type:"button",onClick:t,children:[w.jsx(G0,{size:17,"aria-hidden":"true"}),w.jsx("span",{children:"リセット"})]})]})}function xA(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function Bx(i,e,t){const r=xA(e,t),o=[];let l=-i/2;for(let c=0;c<e-1;c+=1)l+=i*r[c],o.push(l);return o}const yi=i=>Number.isInteger(i)?`${i}`:i.toFixed(4).replace(/0+$/,"").replace(/\.$/,"");function L0(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function vA(i,e){return{x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x}}function _A(i){const e=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/e,y:i.y/e,z:i.z/e}}function fi(i,e="asc"){const t=[...i].sort((r,o)=>e==="asc"?r-o:o-r);return t.filter((r,o)=>o===0||Math.abs(r-t[o-1])>1e-4)}function Jt(i,e){const t=i[i.length-1];t&&Math.abs(t.x-e.x)<1e-4&&Math.abs(t.z-e.z)<1e-4||i.push(e)}function yA(i,e,t,r,o){const l=i/2,c=e/2,u=Math.min(Math.max(t,0),l-.001,c-.001),d=[];if(u<=0){const O=fi(r.filter(b=>b>-l&&b<l)),I=[...O].reverse(),F=fi(o.filter(b=>b>-c&&b<c)),G=[...F].reverse();return Jt(d,{x:l,z:-c}),F.forEach(b=>Jt(d,{x:l,z:b})),Jt(d,{x:l,z:c}),I.forEach(b=>Jt(d,{x:b,z:c})),Jt(d,{x:-l,z:c}),G.forEach(b=>Jt(d,{x:-l,z:b})),Jt(d,{x:-l,z:-c}),O.forEach(b=>Jt(d,{x:b,z:-c})),d}const h=l-u,m=c-u,x=fi(r.filter(O=>O>-h&&O<h)),g=[...x].reverse(),M=fi(o.filter(O=>O>-m&&O<m)),S=[...M].reverse(),E=O=>Array.from({length:9},(I,F)=>O+F/8*(Math.PI/2)),y=(O,I,F,G=[])=>fi([...E(F),...G]).map(b=>({x:O+Math.cos(b)*u,z:I+Math.sin(b)*u})),v=r.filter(O=>O>h&&O<l).map(O=>Math.acos((O-h)/u)),N=r.filter(O=>O>-l&&O<-h).map(O=>Math.acos((O+h)/u)),L=o.filter(O=>O>m&&O<c).map(O=>Math.asin((O-m)/u)),A=o.filter(O=>O>-c&&O<-m).map(O=>Math.asin((O+m)/u));return y(h,-m,-Math.PI/2,[...v.map(O=>-O),...A]).forEach(O=>Jt(d,O)),M.forEach(O=>Jt(d,{x:l,z:O})),y(h,m,0,[...v,...L]).forEach(O=>Jt(d,O)),g.forEach(O=>Jt(d,{x:O,z:c})),y(-h,m,Math.PI/2,[...N,...L.map(O=>Math.PI-O)]).forEach(O=>Jt(d,O)),S.forEach(O=>Jt(d,{x:-l,z:O})),y(-h,-m,Math.PI,[...N.map(O=>Math.PI*2-O),...A.map(O=>Math.PI-O)]).forEach(O=>Jt(d,O)),x.forEach(O=>Jt(d,{x:O,z:-c})),d}function Hx(i){let e=0;for(let t=0;t<i.length;t+=1){const r=i[t],o=i[(t+1)%i.length];e+=r.x*o.z-o.x*r.z}return e/2}function D0(i){return Math.abs(Hx(i))}function Va(i,e){return Hx(i)<0===e?i:[...i].reverse()}function sr(i,e){return{x:i.x,y:e,z:i.z}}function Sd(i,e,t){const r=[],o=i.map(c=>sr(c,e)),l=i.map(c=>sr(c,t));for(let c=0;c<i.length;c+=1){const u=(c+1)%i.length;r.push([o[c],l[c],l[u]]),r.push([o[c],l[u],o[u]])}return r}function Ed(i,e,t,r=!1){const o=Va(i,!1),l=e.map(d=>Va(d,!0)),c=[...o,...l.flat()];return Uh.triangulateShape(o.map(d=>new Vt(d.x,d.z)),l.map(d=>d.map(h=>new Vt(h.x,h.z)))).map(([d,h,m])=>r?[sr(c[d],t),sr(c[m],t),sr(c[h],t)]:[sr(c[d],t),sr(c[h],t),sr(c[m],t)])}function zh(i,e){const t=[];if(i.length<3)return t;for(let r=1;r<i.length-1;r+=1){const o=[sr(i[0],e),sr(i[r],e),sr(i[r+1],e)],[,l,c]=o,u=(l.z-o[0].z)*(c.x-o[0].x)-(l.x-o[0].x)*(c.z-o[0].z);t.push(u>0?o:[o[0],o[2],o[1]])}return t}function gr(i,e,t,r,o){return zh([i,e,t,r],o)}function MA(i,e,t,r){return[{x:i,z:t},{x:e,z:t},{x:e,z:r},{x:i,z:r}]}function ph(i,e,t,r,o,l){const c=fi(o.filter(x=>x>i&&x<e)),u=[...c].reverse(),d=fi(l.filter(x=>x>t&&x<r)),h=[...d].reverse(),m=[];return Jt(m,{x:i,z:t}),c.forEach(x=>Jt(m,{x,z:t})),Jt(m,{x:e,z:t}),d.forEach(x=>Jt(m,{x:e,z:x})),Jt(m,{x:e,z:r}),u.forEach(x=>Jt(m,{x,z:r})),Jt(m,{x:i,z:r}),h.forEach(x=>Jt(m,{x:i,z:x})),m}function Zc(i,e,t,r){const o=[],l=i/2;let c=-l;return Bx(i,e,t).forEach(u=>{const d=Math.max(-l,u-r/2),h=Math.min(l,u+r/2);d-c>.001&&o.push([c,d]),c=Math.max(c,h)}),l-c>.001&&o.push([c,l]),o}function qc(i,e,t,r){return Bx(i,e,t).flatMap(o=>[o-r/2,o+r/2])}function SA(i,e,t=[],r=[]){const o=i.width/2,l=i.depth/2,c=i.width/2-i.wallThickness,u=i.depth/2-i.wallThickness,d=Math.min(Math.max(i.cornerRadius,0),o-.001,l-.001),h=d<=0?o:o-d,m=d<=0?l:l-d,x=c,g=u,M=i.width-i.wallThickness*2,S=i.depth-i.wallThickness*2,E=qc(M,i.columns,i.columnRatios,i.wallThickness),y=qc(S,i.rows,i.rowRatios,i.wallThickness),v=fi([-c,c,...E,...t]),N=fi([-u,u,...y,...r]),L=fi([-x,x,...v.filter(W=>W>=-x&&W<=x)]),A=fi([-g,g,...N.filter(W=>W>=-g&&W<=g)]),O=Zc(M,i.columns,i.columnRatios,i.wallThickness),I=Zc(S,i.rows,i.rowRatios,i.wallThickness),F=[],G=(W,ee)=>O.some(([D,ne])=>W>D&&W<ne)&&I.some(([D,ne])=>ee>D&&ee<ne),b=W=>{if(d<=0||Math.abs(W)<=h)return-l;const ee=Math.sign(W)*h;return-m-Math.sqrt(Math.max(0,d**2-(W-ee)**2))},R=W=>-b(W),B=W=>{if(d<=0||Math.abs(W)<=m)return o;const ee=Math.sign(W)*m;return h+Math.sqrt(Math.max(0,d**2-(W-ee)**2))},he=W=>-B(W);for(let W=0;W<v.length-1;W+=1)for(let ee=0;ee<N.length-1;ee+=1){const D=v[W],ne=v[W+1],te=N[ee],H=N[ee+1];G((D+ne)/2,(te+H)/2)||F.push(...gr({x:D,z:te},{x:ne,z:te},{x:ne,z:H},{x:D,z:H},i.height))}for(let W=0;W<L.length-1;W+=1){const ee=L[W],D=L[W+1];F.push(...gr({x:ee,z:-u},{x:D,z:-u},{x:D,z:b(D)},{x:ee,z:b(ee)},i.height),...gr({x:D,z:u},{x:ee,z:u},{x:ee,z:R(ee)},{x:D,z:R(D)},i.height))}for(let W=0;W<A.length-1;W+=1){const ee=A[W],D=A[W+1];F.push(...gr({x:c,z:ee},{x:B(ee),z:ee},{x:B(D),z:D},{x:c,z:D},i.height),...gr({x:-c,z:D},{x:he(D),z:D},{x:he(ee),z:ee},{x:-c,z:ee},i.height))}const V=new Map(e.map(W=>[`${yi(W.x)},${yi(W.z)}`,W])),Y=(W,ee)=>V.get(`${yi(W)},${yi(ee)}`)??{x:W,z:ee};return[[{x:c,z:-u},{x,z:-u},Y(x,b(x)),...e.filter(W=>W.x>x&&W.z<-g),Y(B(-g),-g),{x:c,z:-g}],[{x:c,z:u},{x:c,z:g},Y(B(g),g),...e.filter(W=>W.x>x&&W.z>g),Y(x,R(x)),{x,z:u}],[{x:-c,z:u},{x:-x,z:u},Y(-x,R(-x)),...e.filter(W=>W.x<-x&&W.z>g),Y(he(g),g),{x:-c,z:g}],[{x:-c,z:-u},{x:-c,z:-g},Y(he(-g),-g),...e.filter(W=>W.x<-x&&W.z<-g),Y(-x,b(-x)),{x:-x,z:-u}]].forEach(W=>{const ee=[];W.forEach(te=>Jt(ee,te));const D=ee[0],ne=ee[ee.length-1];D&&ne&&Math.abs(D.x-ne.x)<1e-4&&Math.abs(D.z-ne.z)<1e-4&&ee.pop(),F.push(...zh(ee,i.height))}),F}function EA(i){var l;if((l=i.layout)!=null&&l.length)return wA(i,i.layout);const e=i.width-i.wallThickness*2,t=i.depth-i.wallThickness*2,r=Zc(e,i.columns,i.columnRatios,i.wallThickness),o=Zc(t,i.rows,i.rowRatios,i.wallThickness);return r.flatMap(([c,u])=>o.map(([d,h])=>MA(c,u,d,h)))}function wA(i,e){const t=wn(e)??[],r=i.width-i.wallThickness*2,o=i.depth-i.wallThickness*2,l=r/2,c=o/2,u=i.wallThickness/2,d=1e-4,h=t.flatMap(g=>{const M=-l+g.x*r,S=-l+(g.x+g.width)*r,E=-c+g.y*o,y=-c+(g.y+g.height)*o,v=M+(g.x<=d?0:u),N=S-(g.x+g.width>=1-d?0:u),L=E+(g.y<=d?0:u),A=y-(g.y+g.height>=1-d?0:u);return N-v<=.5||A-L<=.5?[]:[{minX:v,maxX:N,minZ:L,maxZ:A}]}),m=h.flatMap(g=>[g.minX,g.maxX]),x=h.flatMap(g=>[g.minZ,g.maxZ]);return h.map(g=>ph(g.minX,g.maxX,g.minZ,g.maxZ,m,x))}function mh(i){return i.reduce((e,t)=>({minX:Math.min(e.minX,t.x),maxX:Math.max(e.maxX,t.x),minZ:Math.min(e.minZ,t.z),maxZ:Math.max(e.maxZ,t.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0})}function N0(i,e,t,r=i.height,o=[],l=[]){const c=i.width/2,u=i.depth/2,d=i.width/2-i.wallThickness,h=i.depth/2-i.wallThickness,m=Math.min(Math.max(i.cornerRadius,0),c-.001,u-.001),x=m<=0?c:c-m,g=m<=0?u:u-m,M=d,S=h,E=e.map(mh),y=fi([-d,d,...o,...E.flatMap(V=>[V.minX,V.maxX])]),v=fi([-h,h,...l,...E.flatMap(V=>[V.minZ,V.maxZ])]),N=(V,Y)=>E.some(Q=>V>Q.minX&&V<Q.maxX&&Y>Q.minZ&&Y<Q.maxZ),L=[];for(let V=0;V<y.length-1;V+=1)for(let Y=0;Y<v.length-1;Y+=1){const Q=y[V],W=y[V+1],ee=v[Y],D=v[Y+1];W-Q<=.001||D-ee<=.001||N((Q+W)/2,(ee+D)/2)||L.push(...gr({x:Q,z:ee},{x:W,z:ee},{x:W,z:D},{x:Q,z:D},r))}const A=fi([-M,M,...y.filter(V=>V>=-M&&V<=M)]),O=fi([-S,S,...v.filter(V=>V>=-S&&V<=S)]),I=V=>{if(m<=0||Math.abs(V)<=x)return-u;const Y=Math.sign(V)*x;return-g-Math.sqrt(Math.max(0,m**2-(V-Y)**2))},F=V=>-I(V),G=V=>{if(m<=0||Math.abs(V)<=g)return c;const Y=Math.sign(V)*g;return x+Math.sqrt(Math.max(0,m**2-(V-Y)**2))},b=V=>-G(V);for(let V=0;V<A.length-1;V+=1){const Y=A[V],Q=A[V+1];L.push(...gr({x:Y,z:-h},{x:Q,z:-h},{x:Q,z:I(Q)},{x:Y,z:I(Y)},r),...gr({x:Q,z:h},{x:Y,z:h},{x:Y,z:F(Y)},{x:Q,z:F(Q)},r))}for(let V=0;V<O.length-1;V+=1){const Y=O[V],Q=O[V+1];L.push(...gr({x:d,z:Y},{x:G(Y),z:Y},{x:G(Q),z:Q},{x:d,z:Q},r),...gr({x:-d,z:Q},{x:b(Q),z:Q},{x:b(Y),z:Y},{x:-d,z:Y},r))}const R=new Map(t.map(V=>[`${yi(V.x)},${yi(V.z)}`,V])),B=(V,Y)=>R.get(`${yi(V)},${yi(Y)}`)??{x:V,z:Y};return[[{x:d,z:-h},{x:M,z:-h},B(M,I(M)),...t.filter(V=>V.x>M&&V.z<-S),B(G(-S),-S),{x:d,z:-S}],[{x:d,z:h},{x:d,z:S},B(G(S),S),...t.filter(V=>V.x>M&&V.z>S),B(M,F(M)),{x:M,z:h}],[{x:-d,z:h},{x:-M,z:h},B(-M,F(-M)),...t.filter(V=>V.x<-M&&V.z>S),B(b(S),S),{x:-d,z:S}],[{x:-d,z:-h},{x:-d,z:-S},B(b(-S),-S),...t.filter(V=>V.x<-M&&V.z<-S),B(-M,I(-M)),{x:-M,z:-h}]].forEach(V=>{const Y=[];V.forEach(ee=>Jt(Y,ee));const Q=Y[0],W=Y[Y.length-1];Q&&W&&Math.abs(Q.x-W.x)<1e-4&&Math.abs(Q.z-W.z)<1e-4&&Y.pop(),L.push(...zh(Y,r))}),L}function TA(i){const[e,t,r]=i,o=_A(vA(L0(t,e),L0(r,e))),l=c=>`      vertex ${yi(c.x)} ${yi(c.y)} ${yi(c.z)}`;return[`  facet normal ${yi(o.x)} ${yi(o.y)} ${yi(o.z)}`,"    outer loop",l(e),l(t),l(r),"    endloop","  endfacet"].join(`
`)}const CA=i=>[i.x,i.y,i.z].map(e=>Math.round(e*1e4)/1e4).join(",");function Vx(i){const e=new Map;return i.forEach(t=>{const r=t.map(CA);[[r[0],r[1]],[r[1],r[2]],[r[2],r[0]]].forEach(([o,l])=>{const c=o<l?`${o}|${l}`:`${l}|${o}`;e.set(c,(e.get(c)??0)+1)})}),[...e.values()].filter(t=>t!==2).length}function AA(i){const[e,t,r]=i,o={x:t.x-e.x,z:t.z-e.z},l={x:r.x-e.x,z:r.z-e.z};return o.z*l.x-o.x*l.z}function Gx(i){return i.filter(e=>e.every(r=>Math.abs(r.y-e[0].y)<1e-4)&&e[0].y>0&&AA(e)<=0).length}function RA(i,e){return i.map(t=>t.map(r=>({x:r.x+e.x,y:r.y+e.y,z:r.z+e.z})))}function bA(i){return i.map(([e,t,r])=>[e,r,t])}function PA(i,e){return{triangles:i,stats:{estimatedVolumeMm3:e,nonManifoldEdgeCount:Vx(i),topFaceDownwardCount:Gx(i),triangleCount:i.length},checks:[]}}function Wx(i,e){const t=Math.max(i.wallThickness,i.width-i.wallThickness*2),r=Math.max(i.wallThickness,i.depth-i.wallThickness*2),o=t/2,l=r/2;return{minX:-o+e.x*t,maxX:-o+(e.x+e.width)*t,minZ:-l+e.y*r,maxZ:-l+(e.y+e.height)*r}}function jx(i,e,t){var r,o;return((r=i.pickupFilletCellModes)==null?void 0:r[e.id])??((o=i.pickupFilletCellModes)==null?void 0:o[`cell-${t+1}`])??"none"}function Xx(i,e){return i.pickupFillet?lu(i).map((t,r)=>({cell:t,index:r})).filter(({cell:t,index:r})=>jx(i,t,r)===e).map(({cell:t,index:r})=>{const o=t.id||`cell-${r+1}`,l=Jc(i,o),c=Wx(i,t),u=e==="removable"?l.fitClearance:0,d=Math.max(0,(Math.min(c.maxX-c.minX,c.maxZ-c.minZ)-.5)/2),h=Math.min(u,d);return{minX:c.minX+h,maxX:c.maxX-h,minZ:c.minZ+h,maxZ:c.maxZ-h,cellId:o,shape:l}}).filter(qo):[]}function LA(i){return i.pickupFillet?lu(i).map((e,t)=>({cell:e,index:t})).filter(({cell:e,index:t})=>jx(i,e,t)!=="none").map(({cell:e})=>Wx(i,e)).filter(qo):[]}function DA(i,e,t,r,o,l){const c=i.maxX-i.minX,u=i.maxZ-i.minZ,d=Math.min(e-i.minX,i.maxX-e),h=Math.min(t-i.minZ,i.maxZ-t),m=Math.max(0,Math.min(1,(r-d)/r)),x=Math.max(0,Math.min(1,(r-h)/r)),g=Math.min(1,Math.pow(Math.pow(m,4)+Math.pow(x,4),1/4)),M=Math.max(1,Math.min(c,u)/2),S=Math.max(.25,Math.min(1,r/M)),E=Math.pow(g,1/(1+S*.35));return l*Y0(E,o.profileType,o.profileStrength,o.flatCenterRatio)}function NA(i,e,t,r){const o=i.maxX-i.minX,l=i.maxZ-i.minZ,c=Math.min(i.shape.radius,Math.max(1,o/2),Math.max(1,l/2)),u=i.shape.height,d=Math.min(1.2,Math.max(.4,u*.2)),h=Math.max(.1,Math.min(u,r-t-d)),m=Math.max(1.2,Math.min(2.4,c/6)),x=Math.min(80,Math.max(20,Math.ceil(Math.max(o,l)/m))),g=Array.from({length:x+1},(v,N)=>i.minX+o*N/x),M=Array.from({length:x+1},(v,N)=>i.minZ+l*N/x),S=(v,N)=>({x:v,y:t+d+DA(i,v,N,c,i.shape,h),z:N}),E=(v,N)=>({x:v,y:t,z:N}),y=[];for(let v=0;v<x;v+=1)for(let N=0;N<x;N+=1){const L=g[v],A=g[v+1],O=M[N],I=M[N+1],F=S(L,O),G=S(A,O),b=S(A,I),R=S(L,I),B=E(L,O),he=E(A,O),V=E(A,I),Y=E(L,I);y.push([F,b,G],[F,R,b]),y.push([B,he,V],[B,V,Y])}for(let v=0;v<x;v+=1){const N=g[v],L=g[v+1];y.push([E(N,i.minZ),S(L,i.minZ),S(N,i.minZ)],[E(N,i.minZ),E(L,i.minZ),S(L,i.minZ)],[E(L,i.maxZ),S(N,i.maxZ),S(L,i.maxZ)],[E(L,i.maxZ),E(N,i.maxZ),S(N,i.maxZ)])}for(let v=0;v<x;v+=1){const N=M[v],L=M[v+1];y.push([E(i.minX,L),S(i.minX,N),S(i.minX,L)],[E(i.minX,L),E(i.minX,N),S(i.minX,N)],[E(i.maxX,N),S(i.maxX,L),S(i.maxX,N)],[E(i.maxX,N),E(i.maxX,L),S(i.maxX,L)])}return{triangles:y,estimatedVolumeMm3:o*l*(d+h*.35)}}function $x(i,e,t,r){const o=Xx(i,e).map(l=>NA(l,i,t,r));return{triangles:o.flatMap(l=>l.triangles),estimatedVolumeMm3:o.reduce((l,c)=>l+c.estimatedVolumeMm3,0)}}const IA=i=>Math.max(0,i.maxX-i.minX)*Math.max(0,i.maxZ-i.minZ),qo=i=>i.maxX-i.minX>.4&&i.maxZ-i.minZ>.4;function I0(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function FA(i){const e=I0(i.columns,i.columnRatios),t=I0(i.rows,i.rowRatios),r=[0],o=[0];e.forEach(c=>{r.push(r[r.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let u=0;u<i.columns;u+=1)l.push({id:`stack-cell-${l.length+1}`,x:r[u],y:o[c],width:r[u+1]-r[u],height:o[c+1]-o[c]});return wn(l)??[]}function lu(i){var e;return(e=i.layout)!=null&&e.length?wn(i.layout)??[]:FA(i)}function UA(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),r=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-r/2+i.start*r,maxZ:-r/2+i.end*r}}const l=-r/2+i.position*r;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}const F0=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4;function kA(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),r=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,r-i.wallThickness*2),c=-t/2,u=t/2,d=-r/2,h=r/2,m=-o/2,x=o/2,g=-l/2,M=l/2,S=.01,E=[{orientation:"horizontal",minX:c,maxX:u,minZ:d,maxZ:g},{orientation:"horizontal",minX:c,maxX:u,minZ:M,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:M-S},{orientation:"vertical",minX:x,maxX:u,minZ:g+S,maxZ:M-S}];if(i.stackingFootMode!=="short")return E.filter(qo);const y=Math.min(Math.max(.4,i.stackingShortFootLength??18),Math.min(t,r));return[{orientation:"horizontal",minX:c,maxX:c+y,minZ:d,maxZ:g},{orientation:"horizontal",minX:u-y,maxX:u,minZ:d,maxZ:g},{orientation:"horizontal",minX:c,maxX:c+y,minZ:M,maxZ:h},{orientation:"horizontal",minX:u-y,maxX:u,minZ:M,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:g+y},{orientation:"vertical",minX:c,maxX:m,minZ:M-y,maxZ:M-S},{orientation:"vertical",minX:x,maxX:u,minZ:g+S,maxZ:g+y},{orientation:"vertical",minX:x,maxX:u,minZ:M-y,maxZ:M-S}].filter(qo)}function U0(i,e,t){const r=t.map(([c,u])=>[Math.max(i,c),Math.min(e,u)]).filter(([c,u])=>u-c>1e-4).sort(([c],[u])=>c-u),o=[];let l=i;return r.forEach(([c,u])=>{c-l>.4&&o.push([l,c]),l=Math.max(l,u)}),e-l>.4&&o.push([l,e]),o}function OA(i){const e=kA(i),t=lu(i),r=Ko(t).map(l=>UA(l,i)),o=i.wallThickness+(i.stackingGrooveClearance??.6)*2;return e.flatMap(l=>{if(l.orientation==="horizontal"){const u=r.filter(d=>F0(l,d)).map(d=>{const h=(d.minX+d.maxX)/2;return[h-o/2,h+o/2]});return U0(l.minX,l.maxX,u).map(([d,h])=>({minX:d,maxX:h,minZ:l.minZ,maxZ:l.maxZ})).filter(qo)}const c=r.filter(u=>F0(l,u)).map(u=>{const d=(u.minZ+u.maxZ)/2;return[d-o/2,d+o/2]});return U0(l.minZ,l.maxZ,c).map(([u,d])=>({minX:l.minX,maxX:l.maxX,minZ:u,maxZ:d})).filter(qo)})}function zA(i){const e=Ya(i),t=LA(i),r=t.length>0,o=!!(i.pickupFillet&&Object.values(i.pickupFilletCellModes??{}).some(g=>g==="removable")),l=t.reduce((g,M)=>Math.min(g,M.maxX-M.minX,M.maxZ-M.minZ),Number.POSITIVE_INFINITY),c=i.pickupFilletRadius??16,u=i.pickupFilletHeight??5,d=Math.min(1.2,Math.max(.4,u*.2)),h=Math.max(1,i.height-i.floorThickness),m=[i.wallThickness<1.6?{id:"wall-thickness",label:"壁厚",level:"warning",message:"壁厚が1.6 mm未満です。"}:{id:"wall-thickness",label:"壁厚",level:"ok",message:"壁厚は印刷しやすい値です。"},i.floorThickness<1.6?{id:"floor-thickness",label:"床厚",level:"warning",message:"床厚が1.6 mm未満です。"}:{id:"floor-thickness",label:"床厚",level:"ok",message:"床厚は印刷しやすい値です。"}];if(e.hasInterference&&m.push({id:"stacking-interference",label:"スタック干渉",level:"warning",message:`スタック脚が仕切りと干渉する可能性があります。推奨逃げ幅 ${e.recommendedReliefGapMm} mm。`}),r&&c>l*.42&&m.push({id:"pickup-fillet-radius",label:"フィレット半径",level:"warning",message:"フィレット半径が区画に対して大きめです。中央の平坦部が狭くなる可能性があります。"}),r&&u>h*.78&&m.push({id:"pickup-fillet-height",label:"フィレット高さ",level:"warning",message:"フィレット高さが壁高さに近すぎます。トレイ上面付近まで立ち上がります。"}),o&&d<.8&&m.push({id:"pickup-fillet-removable-thickness",label:"取り外しフィレット",level:"warning",message:"取り外し式フィレットの底板が薄めです。造形安定性のため高さを少し上げてください。"}),o){const g=Th(i),S=Xx({...i,pickupFilletFitClearance:0},"removable").reduce((y,v)=>Math.min(y,v.maxX-v.minX,v.maxZ-v.minZ),Number.POSITIVE_INFINITY),E=Math.max(0,(S-.5)/2);Number.isFinite(S)&&(i.pickupFilletFitClearance??.4)>E&&m.push({id:"pickup-fillet-clearance-oversized",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが区画に対して大きすぎます。部品が細くなりすぎないよう、出力時は区画ごとに安全値へ丸めます。"}),g.clearanceState==="tight"&&m.push({id:"pickup-fillet-clearance-tight",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが小さめです。印刷誤差で干渉する可能性があります。"}),g.clearanceState==="loose"&&m.push({id:"pickup-fillet-clearance-loose",label:"取付クリアランス",level:"warning",message:"取り外し式フィレットのクリアランスが大きめです。装着時にガタつく可能性があります。"})}const x=new Set;return lu(i).forEach((g,M)=>{const S=g.id||`cell-${M+1}`;q0(i,S).forEach(E=>{const y=`pickup-fillet-cell-${E.id}`;x.has(y)||(x.add(y),m.push({id:y,label:"区画別フィレット",level:"warning",message:`${S}: ${E.message}`}))})}),m}function k0(i,e={}){var he,V;const t=ln(i),r={...t,cornerRadius:Math.min(t.cornerRadius,t.wallThickness)},o=r.width-r.wallThickness*2,l=r.depth-r.wallThickness*2,c=EA(r),u=(he=r.layout)!=null&&he.length?c.map(mh):void 0,d=u?u.flatMap(Y=>[Y.minX,Y.maxX]):qc(o,r.columns,r.columnRatios,r.wallThickness),h=u?u.flatMap(Y=>[Y.minZ,Y.maxZ]):qc(l,r.rows,r.rowRatios,r.wallThickness),m=e.includeStackingLip&&r.stackingLip?OA(r):[],x=m.flatMap(Y=>[Y.minX,Y.maxX]),g=m.flatMap(Y=>[Y.minZ,Y.maxZ]),M=Va(yA(r.width,r.depth,r.cornerRadius,[...d,...x,-o/2,o/2],[...h,...g,-l/2,l/2]),!1),S=r.height-r.floorThickness,E=m.length?r.stackingLipHeight??3:0,y=m.map(Y=>ph(Y.minX,Y.maxX,Y.minZ,Y.maxZ,x,g)),v=c.map(Y=>{const Q=mh(Y);return ph(Q.minX,Q.maxX,Q.minZ,Q.maxZ,[...d,...x],[...h,...g])}),N=(V=r.layout)!=null&&V.length?N0(r,v,M,r.height,x,g):SA(r,M,x,g),L=y.length?bA(N0(r,y,M,0,[...d,...x],[...h,...g])):Ed(M,[],0),A=Sd(M,0,r.height),O=v.flatMap(Y=>Sd(Va(Y,!0),r.floorThickness,r.height)),I=v.flatMap(Y=>Ed(Y,[],r.floorThickness,!0)),F=y.flatMap(Y=>[...Sd(Va(Y,!1),-E,0),...Ed(Y,[],-E)]),G=[...N,...L,...A,...O,...I,...F],b=D0(M),R=v.reduce((Y,Q)=>Y+D0(Q),0),B=m.reduce((Y,Q)=>Y+IA(Q),0);return{triangles:G,estimatedVolumeMm3:b*r.floorThickness+(b-R)*S+B*E}}function BA(i){const e=ln(i),t=k0(e,{includeStackingLip:!0}),r=[...t.triangles];let o=t.estimatedVolumeMm3;const l=$x(e,"integrated",e.floorThickness+.02,e.height);if(r.push(...l.triangles),o+=l.estimatedVolumeMm3,e.includeLid){const c=ln({...e,kind:"tray",width:e.width+e.lidClearance*2+e.wallThickness*2,depth:e.depth+e.lidClearance*2+e.wallThickness*2,height:e.lidHeight,floorThickness:Math.min(e.floorThickness,e.lidHeight/2),cornerRadius:e.cornerRadius+e.wallThickness,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,includeLid:!1,stackingLip:!1}),u=k0(c),d={x:e.width/2+c.width/2+18,y:0,z:0};r.push(...RA(u.triangles,d)),o+=u.estimatedVolumeMm3}return{triangles:r,stats:{estimatedVolumeMm3:o,nonManifoldEdgeCount:Vx(r),topFaceDownwardCount:Gx(r),triangleCount:r.length},checks:zA(e)}}function Yx(i){const e=ln(i),t=$x(e,"removable",0,e.height-e.floorThickness);return PA(t.triangles,t.estimatedVolumeMm3)}function Kc(i,e="hako-forge"){const t=e.replace(/[^\w.-]/g,"-"),r=i.triangles.map(TA).join(`
`);return[`solid ${t}`,r,`endsolid ${t}`,""].join(`
`)}function O0(i){return typeof i=="object"&&i!==null}function Zx(i){const e={app:"Hako-Forge",version:1,settings:ln(i)};return`${JSON.stringify(e,null,2)}
`}function HA(i){const e=JSON.parse(i);if(!O0(e)||e.app!=="Hako-Forge"||e.version!==1)throw new Error("Hako-ForgeのプロジェクトJSONではありません。");if(!O0(e.settings))throw new Error("プロジェクト設定が見つかりません。");return ln(e.settings)}function VA(i,e){const t=Ba(i),r=[{role:"body-stl",fileName:t,text:Kc(e,t.replace(/\.stl$/,"")),type:"model/stl;charset=utf-8"}],o=Yx(i);if(o.triangles.length>0){const l=Eh(i);r.push({role:"removable-fillet-stl",fileName:l,text:Kc(o,l.replace(/\.stl$/,"")),type:"model/stl;charset=utf-8"})}return r.push({role:"project-json",fileName:wh(i),text:Zx(i),type:"application/json;charset=utf-8"},{role:"print-report-json",fileName:Ch(t),text:tx(i,e),type:"application/json;charset=utf-8"}),r}function GA(){const[i,e]=Pe.useState("size"),[t,r]=Pe.useState(_y),[o,l]=Pe.useState(""),[c,u]=Pe.useState("solid"),[d,h]=Pe.useState(0),m=Pe.useMemo(()=>BA(t),[t]),x=Pe.useMemo(()=>j0(t.layout??En(t.columns,t.rows)),[t.columns,t.layout,t.rows]),g=(I,F)=>{r(G=>ln({...G,[I]:F})),l("")},M=I=>{r(F=>ln({...F,layout:I,columns:I?Math.min(8,Math.max(1,I.length)):F.columns,rows:I?1:F.rows})),l("")},S=()=>{r(I=>ln({...I,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,layout:void 0})),l("")},E=(I,F,G)=>{const b=new Blob([F],{type:G}),R=URL.createObjectURL(b),B=document.createElement("a");B.href=R,B.download=I,document.body.appendChild(B),B.click(),B.remove(),window.setTimeout(()=>URL.revokeObjectURL(R),0)},y=()=>{try{const I=Tg(t,x);if(I){e("download"),l(I);return}const F=Ba(t),G=Kc(m,F.replace(/\.stl$/,""));E(F,G,"model/stl;charset=utf-8")}catch(I){l(I instanceof Error?I.message:"STLファイルを作成できませんでした。")}},v=()=>{try{E(wh(t),Zx(t),"application/json;charset=utf-8"),l("")}catch(I){l(I instanceof Error?I.message:"プロジェクトファイルを作成できませんでした。")}},N=()=>{try{const I=Ba(t);E(Ch(I),tx(t,m),"application/json;charset=utf-8"),l("")}catch(I){l(I instanceof Error?I.message:"印刷品質レポートを作成できませんでした。")}},L=()=>{try{const I=Yx(t);if(I.triangles.length===0){l("取り外し式フィレットが選択されていません。");return}const F=Eh(t),G=Kc(I,F.replace(/\.stl$/,""));E(F,G,"model/stl;charset=utf-8"),l("")}catch(I){l(I instanceof Error?I.message:"フィレットSTLファイルを作成できませんでした。")}},A=()=>{try{const I=Tg(t,x);if(I){e("download"),l(I);return}VA(t,m).forEach(F=>{E(F.fileName,F.text,F.type)}),l("")}catch(I){l(I instanceof Error?I.message:"一括保存ファイルを作成できませんでした。")}},O=I=>{const F=new FileReader;F.addEventListener("load",()=>{try{r(HA(String(F.result??""))),l("")}catch(G){l(G instanceof Error?G.message:"プロジェクトファイルを読み込めませんでした。")}}),F.addEventListener("error",()=>{l("プロジェクトファイルを読み込めませんでした。")}),F.readAsText(I)};return w.jsxs("main",{className:"app-shell",children:[w.jsx(pA,{settings:t,mesh:m,resetToken:d,viewMode:c}),w.jsxs("header",{className:"topbar","aria-label":"モデル作成ワークフロー",children:[null,w.jsxs("button",{className:"export-button",type:"button",onClick:y,children:[w.jsx(za,{size:18,"aria-hidden":"true"}),"STL出力"]})]}),w.jsx(gA,{mode:c,onModeChange:u,onResetView:()=>h(I=>I+1)}),null,w.jsxs("section",{className:"work-panel","aria-label":"モデル設定",children:[w.jsx("div",{className:"panel-header",children:w.jsx(uM,{activeStep:i,onChange:e})}),i==="download"?w.jsxs(w.Fragment,{children:[w.jsx(aM,{error:o,fileName:Ba(t),checks:m.checks,layoutValidation:x,stats:m.stats,settings:t,onDisableStacking:()=>g("stackingLip",!1),onDownload:y,onDownloadAll:A,onDownloadPickupFillets:L,onLoadProject:O,onOpenLayout:()=>e("grid"),onSaveReport:N,onSaveProject:v}),w.jsx(lM,{checks:m.checks,stats:m.stats})]}):w.jsx(sM,{activeStep:i,settings:t,onChange:g,onLayoutChange:M,onResetLayout:S})]})]})}N_.createRoot(document.getElementById("root")).render(w.jsx(C_.StrictMode,{children:w.jsx(GA,{})}));
