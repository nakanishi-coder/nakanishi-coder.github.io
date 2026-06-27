(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function gv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Cf={exports:{}},ya={},Rf={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function Gx(){if(km)return At;km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,w={};function M(z,ae,De){this.props=z,this.context=ae,this.refs=w,this.updater=De||_}M.prototype.isReactComponent={},M.prototype.setState=function(z,ae){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ae,"setState")},M.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=M.prototype;function U(z,ae,De){this.props=z,this.context=ae,this.refs=w,this.updater=De||_}var P=U.prototype=new y;P.constructor=U,S(P,M.prototype),P.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,B={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function $(z,ae,De){var oe,pe={},Ce=null,ye=null;if(ae!=null)for(oe in ae.ref!==void 0&&(ye=ae.ref),ae.key!==void 0&&(Ce=""+ae.key),ae)D.call(ae,oe)&&!k.hasOwnProperty(oe)&&(pe[oe]=ae[oe]);var Re=arguments.length-2;if(Re===1)pe.children=De;else if(1<Re){for(var He=Array(Re),nt=0;nt<Re;nt++)He[nt]=arguments[nt+2];pe.children=He}if(z&&z.defaultProps)for(oe in Re=z.defaultProps,Re)pe[oe]===void 0&&(pe[oe]=Re[oe]);return{$$typeof:i,type:z,key:Ce,ref:ye,props:pe,_owner:B.current}}function b(z,ae){return{$$typeof:i,type:z.type,key:ae,ref:z.ref,props:z.props,_owner:z._owner}}function R(z){return typeof z=="object"&&z!==null&&z.$$typeof===i}function H(z){var ae={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(De){return ae[De]})}var de=/\/+/g;function V(z,ae){return typeof z=="object"&&z!==null&&z.key!=null?H(""+z.key):ae.toString(36)}function Y(z,ae,De,oe,pe){var Ce=typeof z;(Ce==="undefined"||Ce==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(Ce){case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case i:case e:ye=!0}}if(ye)return ye=z,pe=pe(ye),z=oe===""?"."+V(ye,0):oe,A(pe)?(De="",z!=null&&(De=z.replace(de,"$&/")+"/"),Y(pe,ae,De,"",function(nt){return nt})):pe!=null&&(R(pe)&&(pe=b(pe,De+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(de,"$&/")+"/")+z)),ae.push(pe)),1;if(ye=0,oe=oe===""?".":oe+":",A(z))for(var Re=0;Re<z.length;Re++){Ce=z[Re];var He=oe+V(Ce,Re);ye+=Y(Ce,ae,De,He,pe)}else if(He=g(z),typeof He=="function")for(z=He.call(z),Re=0;!(Ce=z.next()).done;)Ce=Ce.value,He=oe+V(Ce,Re++),ye+=Y(Ce,ae,De,He,pe);else if(Ce==="object")throw ae=String(z),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return ye}function Q(z,ae,De){if(z==null)return z;var oe=[],pe=0;return Y(z,oe,"","",function(Ce){return ae.call(De,Ce,pe++)}),oe}function G(z){if(z._status===-1){var ae=z._result;ae=ae(),ae.then(function(De){(z._status===0||z._status===-1)&&(z._status=1,z._result=De)},function(De){(z._status===0||z._status===-1)&&(z._status=2,z._result=De)}),z._status===-1&&(z._status=0,z._result=ae)}if(z._status===1)return z._result.default;throw z._result}var ee={current:null},O={transition:null},te={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:O,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:Q,forEach:function(z,ae,De){Q(z,function(){ae.apply(this,arguments)},De)},count:function(z){var ae=0;return Q(z,function(){ae++}),ae},toArray:function(z){return Q(z,function(ae){return ae})||[]},only:function(z){if(!R(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},At.Component=M,At.Fragment=t,At.Profiler=o,At.PureComponent=U,At.StrictMode=s,At.Suspense=d,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,At.act=se,At.cloneElement=function(z,ae,De){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var oe=S({},z.props),pe=z.key,Ce=z.ref,ye=z._owner;if(ae!=null){if(ae.ref!==void 0&&(Ce=ae.ref,ye=B.current),ae.key!==void 0&&(pe=""+ae.key),z.type&&z.type.defaultProps)var Re=z.type.defaultProps;for(He in ae)D.call(ae,He)&&!k.hasOwnProperty(He)&&(oe[He]=ae[He]===void 0&&Re!==void 0?Re[He]:ae[He])}var He=arguments.length-2;if(He===1)oe.children=De;else if(1<He){Re=Array(He);for(var nt=0;nt<He;nt++)Re[nt]=arguments[nt+2];oe.children=Re}return{$$typeof:i,type:z.type,key:pe,ref:Ce,props:oe,_owner:ye}},At.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},At.createElement=$,At.createFactory=function(z){var ae=$.bind(null,z);return ae.type=z,ae},At.createRef=function(){return{current:null}},At.forwardRef=function(z){return{$$typeof:f,render:z}},At.isValidElement=R,At.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:G}},At.memo=function(z,ae){return{$$typeof:h,type:z,compare:ae===void 0?null:ae}},At.startTransition=function(z){var ae=O.transition;O.transition={};try{z()}finally{O.transition=ae}},At.unstable_act=se,At.useCallback=function(z,ae){return ee.current.useCallback(z,ae)},At.useContext=function(z){return ee.current.useContext(z)},At.useDebugValue=function(){},At.useDeferredValue=function(z){return ee.current.useDeferredValue(z)},At.useEffect=function(z,ae){return ee.current.useEffect(z,ae)},At.useId=function(){return ee.current.useId()},At.useImperativeHandle=function(z,ae,De){return ee.current.useImperativeHandle(z,ae,De)},At.useInsertionEffect=function(z,ae){return ee.current.useInsertionEffect(z,ae)},At.useLayoutEffect=function(z,ae){return ee.current.useLayoutEffect(z,ae)},At.useMemo=function(z,ae){return ee.current.useMemo(z,ae)},At.useReducer=function(z,ae,De){return ee.current.useReducer(z,ae,De)},At.useRef=function(z){return ee.current.useRef(z)},At.useState=function(z){return ee.current.useState(z)},At.useSyncExternalStore=function(z,ae,De){return ee.current.useSyncExternalStore(z,ae,De)},At.useTransition=function(){return ee.current.useTransition()},At.version="18.3.1",At}var Om;function rh(){return Om||(Om=1,Rf.exports=Gx()),Rf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function Wx(){if(zm)return ya;zm=1;var i=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:_,props:v,_owner:o.current}}return ya.Fragment=t,ya.jsx=c,ya.jsxs=c,ya}var Bm;function Xx(){return Bm||(Bm=1,Cf.exports=Wx()),Cf.exports}var F=Xx(),ke=rh();const jx=gv(ke);var Gl={},bf={exports:{}},oi={},Pf={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function $x(){return Hm||(Hm=1,(function(i){function e(O,te){var se=O.length;O.push(te);e:for(;0<se;){var z=se-1>>>1,ae=O[z];if(0<o(ae,te))O[z]=te,O[se]=ae,se=z;else break e}}function t(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var te=O[0],se=O.pop();if(se!==te){O[0]=se;e:for(var z=0,ae=O.length,De=ae>>>1;z<De;){var oe=2*(z+1)-1,pe=O[oe],Ce=oe+1,ye=O[Ce];if(0>o(pe,se))Ce<ae&&0>o(ye,pe)?(O[z]=ye,O[Ce]=se,z=Ce):(O[z]=pe,O[oe]=se,z=oe);else if(Ce<ae&&0>o(ye,se))O[z]=ye,O[Ce]=se,z=Ce;else break e}}return te}function o(O,te){var se=O.sortIndex-te.sortIndex;return se!==0?se:O.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,v=null,g=3,_=!1,S=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var te=t(h);te!==null;){if(te.callback===null)s(h);else if(te.startTime<=O)s(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function A(O){if(w=!1,P(O),!S)if(t(d)!==null)S=!0,G(D);else{var te=t(h);te!==null&&ee(A,te.startTime-O)}}function D(O,te){S=!1,w&&(w=!1,y($),$=-1),_=!0;var se=g;try{for(P(te),v=t(d);v!==null&&(!(v.expirationTime>te)||O&&!H());){var z=v.callback;if(typeof z=="function"){v.callback=null,g=v.priorityLevel;var ae=z(v.expirationTime<=te);te=i.unstable_now(),typeof ae=="function"?v.callback=ae:v===t(d)&&s(d),P(te)}else s(d);v=t(d)}if(v!==null)var De=!0;else{var oe=t(h);oe!==null&&ee(A,oe.startTime-te),De=!1}return De}finally{v=null,g=se,_=!1}}var B=!1,k=null,$=-1,b=5,R=-1;function H(){return!(i.unstable_now()-R<b)}function de(){if(k!==null){var O=i.unstable_now();R=O;var te=!0;try{te=k(!0,O)}finally{te?V():(B=!1,k=null)}}else B=!1}var V;if(typeof U=="function")V=function(){U(de)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Q=Y.port2;Y.port1.onmessage=de,V=function(){Q.postMessage(null)}}else V=function(){M(de,0)};function G(O){k=O,B||(B=!0,V())}function ee(O,te){$=M(function(){O(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){S||_||(S=!0,G(D))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(O){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var se=g;g=te;try{return O()}finally{g=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,te){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=g;g=O;try{return te()}finally{g=se}},i.unstable_scheduleCallback=function(O,te,se){var z=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?z+se:z):se=z,O){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=se+ae,O={id:m++,callback:te,priorityLevel:O,startTime:se,expirationTime:ae,sortIndex:-1},se>z?(O.sortIndex=se,e(h,O),t(d)===null&&O===t(h)&&(w?(y($),$=-1):w=!0,ee(A,se-z))):(O.sortIndex=ae,e(d,O),S||_||(S=!0,G(D))),O},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(O){var te=g;return function(){var se=g;g=te;try{return O.apply(this,arguments)}finally{g=se}}}})(Lf)),Lf}var Vm;function Yx(){return Vm||(Vm=1,Pf.exports=$x()),Pf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function Zx(){if(Gm)return oi;Gm=1;var i=rh(),e=Yx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(n){return d.call(v,n)?!0:d.call(m,n)?!1:h.test(n)?v[n]=!0:(m[n]=!0,!1)}function _(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,r,a,u){if(r===null||typeof r>"u"||_(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,a,u,p,x,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=T}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];M[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,U);M[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,U);M[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,U);M[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,a,u){var p=M.hasOwnProperty(r)?M[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(S(r,a,p,u)&&(a=null),u||p===null?g(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var A=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),O=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,z;function ae(n){if(z===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var De=!1;function oe(n,r){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var u=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){u=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var p=fe.stack.split(`
`),x=u.stack.split(`
`),T=p.length-1,I=x.length-1;1<=T&&0<=I&&p[T]!==x[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==x[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==x[I]){var W=`
`+p[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function pe(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=oe(n.type,!1),n;case 11:return n=oe(n.type.render,!1),n;case 1:return n=oe(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case B:return"Portal";case b:return"Profiler";case $:return"StrictMode";case V:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case de:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case G:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(n){var r=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,x.call(this,T)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ft(n){n._valueTracker||(n._valueTracker=nt(n))}function wt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=He(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function Gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function j(n,r){var a=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function wn(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Re(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Tt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function gt(n,r){Tt(n,r);var a=Re(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Rt(n,r.type,a):r.hasOwnProperty("defaultValue")&&Rt(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function tt(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,r,a){(r!=="number"||Gt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ye=Array.isArray;function L(n,r,a,u){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function E(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ie(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ye(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Re(a)}}function xe(n,r){var a=Re(r.value),u=Re(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ke(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?me(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function vt(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){je.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function Ze(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function ot(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=Ze(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var We=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function mt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zt=null;function K(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,he=null,ge=null;function Oe(n){if(n=sa(n)){if(typeof Pe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=rl(r),Pe(n.stateNode,n.type,r))}}function Ue(n){he?ge?ge.push(n):ge=[n]:he=n}function ct(){if(he){var n=he,r=ge;if(ge=he=null,Oe(n),r)for(n=0;n<r.length;n++)Oe(r[n])}}function xt(n,r){return n(r)}function hn(){}var _t=!1;function jt(n,r,a){if(_t)return n(r,a);_t=!0;try{return xt(n,r,a)}finally{_t=!1,(he!==null||ge!==null)&&(hn(),ct())}}function rn(n,r){var a=n.stateNode;if(a===null)return null;var u=rl(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Fi=!1;if(f)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{Fi=!1}function $n(n,r,a,u,p,x,T,I,W){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(a,fe)}catch(Se){this.onError(Se)}}var Bn=!1,kn=null,lr=!1,di=null,Yn={onError:function(n){Bn=!0,kn=n}};function br(n,r,a,u,p,x,T,I,W){Bn=!1,kn=null,$n.apply(Yn,arguments)}function Os(n,r,a,u,p,x,T,I,W){if(br.apply(this,arguments),Bn){if(Bn){var fe=kn;Bn=!1,kn=null}else throw Error(t(198));lr||(lr=!0,di=fe)}}function qt(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Pr(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ls(n){if(qt(n)!==n)throw Error(t(188))}function Lr(n){var r=n.alternate;if(!r){if(r=qt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return ls(p),n;if(x===u)return ls(p),r;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=x;else{for(var T=!1,I=p.child;I;){if(I===a){T=!0,a=p,u=x;break}if(I===u){T=!0,u=p,a=x;break}I=I.sibling}if(!T){for(I=x.child;I;){if(I===a){T=!0,a=x,u=p;break}if(I===u){T=!0,u=x,a=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function hi(n){return n=Lr(n),n!==null?cs(n):null}function cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=cs(n);if(r!==null)return r;n=n.sibling}return null}var C=e.unstable_scheduleCallback,J=e.unstable_cancelCallback,ce=e.unstable_shouldYield,ue=e.unstable_requestPaint,Z=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,ze=e.unstable_UserBlockingPriority,Xe=e.unstable_NormalPriority,dt=e.unstable_LowPriority,ut=e.unstable_IdlePriority,Je=null,ht=null;function Nt(n){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:it,Yt=Math.log,bt=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Yt(n)/bt|0)|0}var sn=64,Ct=4194304;function Tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ei(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~p;I!==0?u=Tn(I):(x&=T,x!==0&&(u=Tn(x)))}else T=a&~p,T!==0?u=Tn(T):x!==0&&(u=Tn(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-Ut(r),p=1<<a,u|=n[a],r&=~p;return u}function X(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-Ut(x),I=1<<T,W=p[T];W===-1?((I&a)===0||(I&u)!==0)&&(p[T]=X(I,r)):W<=r&&(n.expiredLanes|=I),x&=~I}}function ve(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function rt(){var n=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),n}function ft(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function st(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function Lt(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Ut(a),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,a&=~x}}function pn(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-Ut(a),p=1<<u;p&r|n[u]&r&&(n[u]|=r),a&=~p}}var Ge=0;function St(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,xn,cr,Wo,zs,Ne=!1,Wt=[],Xt=null,Zt=null,Kt=null,mn=new Map,_n=new Map,on=[],ki="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(n,r){switch(n){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":mn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(r.pointerId)}}function pi(n,r,a,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=sa(r),r!==null&&xn(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Xo(n,r,a,u,p){switch(r){case"focusin":return Xt=pi(Xt,n,r,a,u,p),!0;case"dragenter":return Zt=pi(Zt,n,r,a,u,p),!0;case"mouseover":return Kt=pi(Kt,n,r,a,u,p),!0;case"pointerover":var x=p.pointerId;return mn.set(x,pi(mn.get(x)||null,n,r,a,u,p)),!0;case"gotpointercapture":return x=p.pointerId,_n.set(x,pi(_n.get(x)||null,n,r,a,u,p)),!0}return!1}function us(n){var r=fs(n.target);if(r!==null){var a=qt(r);if(a!==null){if(r=a.tag,r===13){if(r=Pr(a),r!==null){n.blockedOn=r,zs(n.priority,function(){cr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);zt=u,a.target.dispatchEvent(u),zt=null}else return r=sa(a),r!==null&&xn(r),n.blockedOn=a,!1;r.shift()}return!0}function Sh(n,r,a){Wa(n)&&a.delete(r)}function h0(){Ne=!1,Xt!==null&&Wa(Xt)&&(Xt=null),Zt!==null&&Wa(Zt)&&(Zt=null),Kt!==null&&Wa(Kt)&&(Kt=null),mn.forEach(Sh),_n.forEach(Sh)}function jo(n,r){n.blockedOn===r&&(n.blockedOn=null,Ne||(Ne=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,h0)))}function $o(n){function r(p){return jo(p,n)}if(0<Wt.length){jo(Wt[0],n);for(var a=1;a<Wt.length;a++){var u=Wt[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Xt!==null&&jo(Xt,n),Zt!==null&&jo(Zt,n),Kt!==null&&jo(Kt,n),mn.forEach(r),_n.forEach(r),a=0;a<on.length;a++)u=on[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<on.length&&(a=on[0],a.blockedOn===null);)us(a),a.blockedOn===null&&on.shift()}var Bs=A.ReactCurrentBatchConfig,Xa=!0;function p0(n,r,a,u){var p=Ge,x=Bs.transition;Bs.transition=null;try{Ge=1,Qc(n,r,a,u)}finally{Ge=p,Bs.transition=x}}function m0(n,r,a,u){var p=Ge,x=Bs.transition;Bs.transition=null;try{Ge=4,Qc(n,r,a,u)}finally{Ge=p,Bs.transition=x}}function Qc(n,r,a,u){if(Xa){var p=Jc(n,r,a,u);if(p===null)gu(n,r,u,ja,a),Ji(n,u);else if(Xo(p,n,r,a,u))u.stopPropagation();else if(Ji(n,u),r&4&&-1<ki.indexOf(n)){for(;p!==null;){var x=sa(p);if(x!==null&&kt(x),x=Jc(n,r,a,u),x===null&&gu(n,r,u,ja,a),x===p)break;p=x}p!==null&&u.stopPropagation()}else gu(n,r,u,null,a)}}var ja=null;function Jc(n,r,a,u){if(ja=null,n=K(u),n=fs(n),n!==null)if(r=qt(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Pr(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ja=n,null}function Eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Le:return 1;case ze:return 4;case Xe:case dt:return 16;case ut:return 536870912;default:return 16}default:return 16}}var Dr=null,eu=null,$a=null;function wh(){if($a)return $a;var n,r=eu,a=r.length,u,p="value"in Dr?Dr.value:Dr.textContent,x=p.length;for(n=0;n<a&&r[n]===p[n];n++);var T=a-n;for(u=1;u<=T&&r[a-u]===p[x-u];u++);return $a=p.slice(n,1<u?1-u:void 0)}function Ya(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Za(){return!0}function Th(){return!1}function mi(n){function r(a,u,p,x,T){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(x):x[I]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Za:Th,this.isPropagationStopped=Th,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),r}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=mi(Hs),Yo=se({},Hs,{view:0,detail:0}),g0=mi(Yo),nu,iu,Zo,qa=se({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zo&&(Zo&&n.type==="mousemove"?(nu=n.screenX-Zo.screenX,iu=n.screenY-Zo.screenY):iu=nu=0,Zo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),Ah=mi(qa),v0=se({},qa,{dataTransfer:0}),x0=mi(v0),_0=se({},Yo,{relatedTarget:0}),ru=mi(_0),y0=se({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=mi(y0),S0=se({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),E0=mi(S0),w0=se({},Hs,{data:0}),Ch=mi(w0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=C0[n])?!!r[n]:!1}function su(){return R0}var b0=se({},Yo,{key:function(n){if(n.key){var r=T0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?A0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),P0=mi(b0),L0=se({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=mi(L0),D0=se({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),I0=mi(D0),N0=se({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=mi(N0),F0=se({},qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=mi(F0),O0=[9,13,27,32],ou=f&&"CompositionEvent"in window,qo=null;f&&"documentMode"in document&&(qo=document.documentMode);var z0=f&&"TextEvent"in window&&!qo,bh=f&&(!ou||qo&&8<qo&&11>=qo),Ph=" ",Lh=!1;function Dh(n,r){switch(n){case"keyup":return O0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function B0(n,r){switch(n){case"compositionend":return Ih(r);case"keypress":return r.which!==32?null:(Lh=!0,Ph);case"textInput":return n=r.data,n===Ph&&Lh?null:n;default:return null}}function H0(n,r){if(Vs)return n==="compositionend"||!ou&&Dh(n,r)?(n=wh(),$a=eu=Dr=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return bh&&r.locale!=="ko"?null:r.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!V0[n.type]:r==="textarea"}function Uh(n,r,a,u){Ue(u),r=tl(r,"onChange"),0<r.length&&(a=new tu("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Ko=null,Qo=null;function G0(n){Jh(n,0)}function Ka(n){var r=$s(n);if(wt(r))return n}function W0(n,r){if(n==="change")return r}var Fh=!1;if(f){var au;if(f){var lu="oninput"in document;if(!lu){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),lu=typeof kh.oninput=="function"}au=lu}else au=!1;Fh=au&&(!document.documentMode||9<document.documentMode)}function Oh(){Ko&&(Ko.detachEvent("onpropertychange",zh),Qo=Ko=null)}function zh(n){if(n.propertyName==="value"&&Ka(Qo)){var r=[];Uh(r,Qo,n,K(n)),jt(G0,r)}}function X0(n,r,a){n==="focusin"?(Oh(),Ko=r,Qo=a,Ko.attachEvent("onpropertychange",zh)):n==="focusout"&&Oh()}function j0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ka(Qo)}function $0(n,r){if(n==="click")return Ka(r)}function Y0(n,r){if(n==="input"||n==="change")return Ka(r)}function Z0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Oi=typeof Object.is=="function"?Object.is:Z0;function Jo(n,r){if(Oi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(r,p)||!Oi(n[p],r[p]))return!1}return!0}function Bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hh(n,r){var a=Bh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bh(a)}}function Vh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gh(){for(var n=window,r=Gt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Gt(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function q0(n){var r=Gh(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Vh(a.ownerDocument.documentElement,a)){if(u!==null&&cu(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=Hh(a,x);var T=Hh(a,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var K0=f&&"documentMode"in document&&11>=document.documentMode,Gs=null,uu=null,ea=null,fu=!1;function Wh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Gs==null||Gs!==Gt(u)||(u=Gs,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ea&&Jo(ea,u)||(ea=u,u=tl(uu,"onSelect"),0<u.length&&(r=new tu("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=Gs)))}function Qa(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ws={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},du={},Xh={};f&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Ja(n){if(du[n])return du[n];if(!Ws[n])return n;var r=Ws[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Xh)return du[n]=r[a];return n}var jh=Ja("animationend"),$h=Ja("animationiteration"),Yh=Ja("animationstart"),Zh=Ja("transitionend"),qh=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,r){qh.set(n,r),l(r,[n])}for(var hu=0;hu<Kh.length;hu++){var pu=Kh[hu],Q0=pu.toLowerCase(),J0=pu[0].toUpperCase()+pu.slice(1);Ir(Q0,"on"+J0)}Ir(jh,"onAnimationEnd"),Ir($h,"onAnimationIteration"),Ir(Yh,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Zh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Qh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Os(u,r,void 0,n),n.currentTarget=null}function Jh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var T=u.length-1;0<=T;T--){var I=u[T],W=I.instance,fe=I.currentTarget;if(I=I.listener,W!==x&&p.isPropagationStopped())break e;Qh(p,I,fe),x=W}else for(T=0;T<u.length;T++){if(I=u[T],W=I.instance,fe=I.currentTarget,I=I.listener,W!==x&&p.isPropagationStopped())break e;Qh(p,I,fe),x=W}}}if(lr)throw n=di,lr=!1,di=null,n}function en(n,r){var a=r[Su];a===void 0&&(a=r[Su]=new Set);var u=n+"__bubble";a.has(u)||(ep(r,n,2,!1),a.add(u))}function mu(n,r,a){var u=0;r&&(u|=4),ep(a,n,u,r)}var el="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[el]){n[el]=!0,s.forEach(function(a){a!=="selectionchange"&&(ex.has(a)||mu(a,!1,n),mu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[el]||(r[el]=!0,mu("selectionchange",!1,r))}}function ep(n,r,a,u){switch(Eh(r)){case 1:var p=p0;break;case 4:p=m0;break;default:p=Qc}a=p.bind(null,r,a,n),p=void 0,!Fi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function gu(n,r,a,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===p||W.nodeType===8&&W.parentNode===p))return;T=T.return}for(;I!==null;){if(T=fs(I),T===null)return;if(W=T.tag,W===5||W===6){u=x=T;continue e}I=I.parentNode}}u=u.return}jt(function(){var fe=x,Se=K(a),Ae=[];e:{var Me=qh.get(n);if(Me!==void 0){var Be=tu,qe=n;switch(n){case"keypress":if(Ya(a)===0)break e;case"keydown":case"keyup":Be=P0;break;case"focusin":qe="focus",Be=ru;break;case"focusout":qe="blur",Be=ru;break;case"beforeblur":case"afterblur":Be=ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=I0;break;case jh:case $h:case Yh:Be=M0;break;case Zh:Be=U0;break;case"scroll":Be=g0;break;case"wheel":Be=k0;break;case"copy":case"cut":case"paste":Be=E0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Rh}var Qe=(r&4)!==0,yn=!Qe&&n==="scroll",ne=Qe?Me!==null?Me+"Capture":null:Me;Qe=[];for(var q=fe,re;q!==null;){re=q;var be=re.stateNode;if(re.tag===5&&be!==null&&(re=be,ne!==null&&(be=rn(q,ne),be!=null&&Qe.push(ia(q,be,re)))),yn)break;q=q.return}0<Qe.length&&(Me=new Be(Me,qe,null,a,Se),Ae.push({event:Me,listeners:Qe}))}}if((r&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Me&&a!==zt&&(qe=a.relatedTarget||a.fromElement)&&(fs(qe)||qe[ur]))break e;if((Be||Me)&&(Me=Se.window===Se?Se:(Me=Se.ownerDocument)?Me.defaultView||Me.parentWindow:window,Be?(qe=a.relatedTarget||a.toElement,Be=fe,qe=qe?fs(qe):null,qe!==null&&(yn=qt(qe),qe!==yn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Be=null,qe=fe),Be!==qe)){if(Qe=Ah,be="onMouseLeave",ne="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=Rh,be="onPointerLeave",ne="onPointerEnter",q="pointer"),yn=Be==null?Me:$s(Be),re=qe==null?Me:$s(qe),Me=new Qe(be,q+"leave",Be,a,Se),Me.target=yn,Me.relatedTarget=re,be=null,fs(Se)===fe&&(Qe=new Qe(ne,q+"enter",qe,a,Se),Qe.target=re,Qe.relatedTarget=yn,be=Qe),yn=be,Be&&qe)t:{for(Qe=Be,ne=qe,q=0,re=Qe;re;re=Xs(re))q++;for(re=0,be=ne;be;be=Xs(be))re++;for(;0<q-re;)Qe=Xs(Qe),q--;for(;0<re-q;)ne=Xs(ne),re--;for(;q--;){if(Qe===ne||ne!==null&&Qe===ne.alternate)break t;Qe=Xs(Qe),ne=Xs(ne)}Qe=null}else Qe=null;Be!==null&&tp(Ae,Me,Be,Qe,!1),qe!==null&&yn!==null&&tp(Ae,yn,qe,Qe,!0)}}e:{if(Me=fe?$s(fe):window,Be=Me.nodeName&&Me.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Me.type==="file")var et=W0;else if(Nh(Me))if(Fh)et=Y0;else{et=j0;var at=X0}else(Be=Me.nodeName)&&Be.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(et=$0);if(et&&(et=et(n,fe))){Uh(Ae,et,a,Se);break e}at&&at(n,Me,fe),n==="focusout"&&(at=Me._wrapperState)&&at.controlled&&Me.type==="number"&&Rt(Me,"number",Me.value)}switch(at=fe?$s(fe):window,n){case"focusin":(Nh(at)||at.contentEditable==="true")&&(Gs=at,uu=fe,ea=null);break;case"focusout":ea=uu=Gs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Wh(Ae,a,Se);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":Wh(Ae,a,Se)}var lt;if(ou)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Vs?Dh(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(bh&&a.locale!=="ko"&&(Vs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Vs&&(lt=wh()):(Dr=Se,eu="value"in Dr?Dr.value:Dr.textContent,Vs=!0)),at=tl(fe,pt),0<at.length&&(pt=new Ch(pt,n,null,a,Se),Ae.push({event:pt,listeners:at}),lt?pt.data=lt:(lt=Ih(a),lt!==null&&(pt.data=lt)))),(lt=z0?B0(n,a):H0(n,a))&&(fe=tl(fe,"onBeforeInput"),0<fe.length&&(Se=new Ch("onBeforeInput","beforeinput",null,a,Se),Ae.push({event:Se,listeners:fe}),Se.data=lt))}Jh(Ae,r)})}function ia(n,r,a){return{instance:n,listener:r,currentTarget:a}}function tl(n,r){for(var a=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=rn(n,a),x!=null&&u.unshift(ia(n,x,p)),x=rn(n,r),x!=null&&u.push(ia(n,x,p))),n=n.return}return u}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tp(n,r,a,u,p){for(var x=r._reactName,T=[];a!==null&&a!==u;){var I=a,W=I.alternate,fe=I.stateNode;if(W!==null&&W===u)break;I.tag===5&&fe!==null&&(I=fe,p?(W=rn(a,x),W!=null&&T.unshift(ia(a,W,I))):p||(W=rn(a,x),W!=null&&T.push(ia(a,W,I)))),a=a.return}T.length!==0&&n.push({event:r,listeners:T})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function np(n){return(typeof n=="string"?n:""+n).replace(tx,`
`).replace(nx,"")}function nl(n,r,a){if(r=np(r),np(n)!==r&&a)throw Error(t(425))}function il(){}var vu=null,xu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(n){return ip.resolve(null).then(n).catch(sx)}:yu;function sx(n){setTimeout(function(){throw n})}function Mu(n,r){var a=r,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),$o(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);$o(r)}function Nr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),er="__reactFiber$"+js,ra="__reactProps$"+js,ur="__reactContainer$"+js,Su="__reactEvents$"+js,ox="__reactListeners$"+js,ax="__reactHandles$"+js;function fs(n){var r=n[er];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ur]||a[er]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=rp(n);n!==null;){if(a=n[er])return a;n=rp(n)}return r}n=a,a=n.parentNode}return null}function sa(n){return n=n[er]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function rl(n){return n[ra]||null}var Eu=[],Ys=-1;function Ur(n){return{current:n}}function tn(n){0>Ys||(n.current=Eu[Ys],Eu[Ys]=null,Ys--)}function Qt(n,r){Ys++,Eu[Ys]=n.current,n.current=r}var Fr={},Hn=Ur(Fr),ti=Ur(!1),ds=Fr;function Zs(n,r){var a=n.type.contextTypes;if(!a)return Fr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ni(n){return n=n.childContextTypes,n!=null}function sl(){tn(ti),tn(Hn)}function sp(n,r,a){if(Hn.current!==Fr)throw Error(t(168));Qt(Hn,r),Qt(ti,a)}function op(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ye(n)||"Unknown",p));return se({},a,u)}function ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,ds=Hn.current,Qt(Hn,n),Qt(ti,ti.current),!0}function ap(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=op(n,r,ds),u.__reactInternalMemoizedMergedChildContext=n,tn(ti),tn(Hn),Qt(Hn,n)):tn(ti),Qt(ti,a)}var fr=null,al=!1,wu=!1;function lp(n){fr===null?fr=[n]:fr.push(n)}function lx(n){al=!0,lp(n)}function kr(){if(!wu&&fr!==null){wu=!0;var n=0,r=Ge;try{var a=fr;for(Ge=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}fr=null,al=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),C(Le,kr),p}finally{Ge=r,wu=!1}}return null}var qs=[],Ks=0,ll=null,cl=0,Mi=[],Si=0,hs=null,dr=1,hr="";function ps(n,r){qs[Ks++]=cl,qs[Ks++]=ll,ll=n,cl=r}function cp(n,r,a){Mi[Si++]=dr,Mi[Si++]=hr,Mi[Si++]=hs,hs=n;var u=dr;n=hr;var p=32-Ut(u)-1;u&=~(1<<p),a+=1;var x=32-Ut(r)+p;if(30<x){var T=p-p%5;x=(u&(1<<T)-1).toString(32),u>>=T,p-=T,dr=1<<32-Ut(r)+p|a<<p|u,hr=x+n}else dr=1<<x|a<<p|u,hr=n}function Tu(n){n.return!==null&&(ps(n,1),cp(n,1,0))}function Au(n){for(;n===ll;)ll=qs[--Ks],qs[Ks]=null,cl=qs[--Ks],qs[Ks]=null;for(;n===hs;)hs=Mi[--Si],Mi[Si]=null,hr=Mi[--Si],Mi[Si]=null,dr=Mi[--Si],Mi[Si]=null}var gi=null,vi=null,an=!1,zi=null;function up(n,r){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function fp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,gi=n,vi=Nr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,gi=n,vi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=hs!==null?{id:dr,overflow:hr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,gi=n,vi=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ru(n){if(an){var r=vi;if(r){var a=r;if(!fp(n,r)){if(Cu(n))throw Error(t(418));r=Nr(a.nextSibling);var u=gi;r&&fp(n,r)?up(u,a):(n.flags=n.flags&-4097|2,an=!1,gi=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,gi=n}}}function dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gi=n}function ul(n){if(n!==gi)return!1;if(!an)return dp(n),an=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=vi)){if(Cu(n))throw hp(),Error(t(418));for(;r;)up(n,r),r=Nr(r.nextSibling)}if(dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){vi=Nr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}vi=null}}else vi=gi?Nr(n.stateNode.nextSibling):null;return!0}function hp(){for(var n=vi;n;)n=Nr(n.nextSibling)}function Qs(){vi=gi=null,an=!1}function bu(n){zi===null?zi=[n]:zi.push(n)}var cx=A.ReactCurrentBatchConfig;function oa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(T){var I=p.refs;T===null?delete I[x]:I[x]=T},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function fl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function pp(n){var r=n._init;return r(n._payload)}function mp(n){function r(ne,q){if(n){var re=ne.deletions;re===null?(ne.deletions=[q],ne.flags|=16):re.push(q)}}function a(ne,q){if(!n)return null;for(;q!==null;)r(ne,q),q=q.sibling;return null}function u(ne,q){for(ne=new Map;q!==null;)q.key!==null?ne.set(q.key,q):ne.set(q.index,q),q=q.sibling;return ne}function p(ne,q){return ne=Xr(ne,q),ne.index=0,ne.sibling=null,ne}function x(ne,q,re){return ne.index=re,n?(re=ne.alternate,re!==null?(re=re.index,re<q?(ne.flags|=2,q):re):(ne.flags|=2,q)):(ne.flags|=1048576,q)}function T(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function I(ne,q,re,be){return q===null||q.tag!==6?(q=Mf(re,ne.mode,be),q.return=ne,q):(q=p(q,re),q.return=ne,q)}function W(ne,q,re,be){var et=re.type;return et===k?Se(ne,q,re.props.children,be,re.key):q!==null&&(q.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&pp(et)===q.type)?(be=p(q,re.props),be.ref=oa(ne,q,re),be.return=ne,be):(be=Ul(re.type,re.key,re.props,null,ne.mode,be),be.ref=oa(ne,q,re),be.return=ne,be)}function fe(ne,q,re,be){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=Sf(re,ne.mode,be),q.return=ne,q):(q=p(q,re.children||[]),q.return=ne,q)}function Se(ne,q,re,be,et){return q===null||q.tag!==7?(q=Ss(re,ne.mode,be,et),q.return=ne,q):(q=p(q,re),q.return=ne,q)}function Ae(ne,q,re){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Mf(""+q,ne.mode,re),q.return=ne,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case D:return re=Ul(q.type,q.key,q.props,null,ne.mode,re),re.ref=oa(ne,null,q),re.return=ne,re;case B:return q=Sf(q,ne.mode,re),q.return=ne,q;case G:var be=q._init;return Ae(ne,be(q._payload),re)}if(Ye(q)||te(q))return q=Ss(q,ne.mode,re,null),q.return=ne,q;fl(ne,q)}return null}function Me(ne,q,re,be){var et=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return et!==null?null:I(ne,q,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case D:return re.key===et?W(ne,q,re,be):null;case B:return re.key===et?fe(ne,q,re,be):null;case G:return et=re._init,Me(ne,q,et(re._payload),be)}if(Ye(re)||te(re))return et!==null?null:Se(ne,q,re,be,null);fl(ne,re)}return null}function Be(ne,q,re,be,et){if(typeof be=="string"&&be!==""||typeof be=="number")return ne=ne.get(re)||null,I(q,ne,""+be,et);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case D:return ne=ne.get(be.key===null?re:be.key)||null,W(q,ne,be,et);case B:return ne=ne.get(be.key===null?re:be.key)||null,fe(q,ne,be,et);case G:var at=be._init;return Be(ne,q,re,at(be._payload),et)}if(Ye(be)||te(be))return ne=ne.get(re)||null,Se(q,ne,be,et,null);fl(q,be)}return null}function qe(ne,q,re,be){for(var et=null,at=null,lt=q,pt=q=0,In=null;lt!==null&&pt<re.length;pt++){lt.index>pt?(In=lt,lt=null):In=lt.sibling;var Bt=Me(ne,lt,re[pt],be);if(Bt===null){lt===null&&(lt=In);break}n&&lt&&Bt.alternate===null&&r(ne,lt),q=x(Bt,q,pt),at===null?et=Bt:at.sibling=Bt,at=Bt,lt=In}if(pt===re.length)return a(ne,lt),an&&ps(ne,pt),et;if(lt===null){for(;pt<re.length;pt++)lt=Ae(ne,re[pt],be),lt!==null&&(q=x(lt,q,pt),at===null?et=lt:at.sibling=lt,at=lt);return an&&ps(ne,pt),et}for(lt=u(ne,lt);pt<re.length;pt++)In=Be(lt,ne,pt,re[pt],be),In!==null&&(n&&In.alternate!==null&&lt.delete(In.key===null?pt:In.key),q=x(In,q,pt),at===null?et=In:at.sibling=In,at=In);return n&&lt.forEach(function(jr){return r(ne,jr)}),an&&ps(ne,pt),et}function Qe(ne,q,re,be){var et=te(re);if(typeof et!="function")throw Error(t(150));if(re=et.call(re),re==null)throw Error(t(151));for(var at=et=null,lt=q,pt=q=0,In=null,Bt=re.next();lt!==null&&!Bt.done;pt++,Bt=re.next()){lt.index>pt?(In=lt,lt=null):In=lt.sibling;var jr=Me(ne,lt,Bt.value,be);if(jr===null){lt===null&&(lt=In);break}n&&lt&&jr.alternate===null&&r(ne,lt),q=x(jr,q,pt),at===null?et=jr:at.sibling=jr,at=jr,lt=In}if(Bt.done)return a(ne,lt),an&&ps(ne,pt),et;if(lt===null){for(;!Bt.done;pt++,Bt=re.next())Bt=Ae(ne,Bt.value,be),Bt!==null&&(q=x(Bt,q,pt),at===null?et=Bt:at.sibling=Bt,at=Bt);return an&&ps(ne,pt),et}for(lt=u(ne,lt);!Bt.done;pt++,Bt=re.next())Bt=Be(lt,ne,pt,Bt.value,be),Bt!==null&&(n&&Bt.alternate!==null&&lt.delete(Bt.key===null?pt:Bt.key),q=x(Bt,q,pt),at===null?et=Bt:at.sibling=Bt,at=Bt);return n&&lt.forEach(function(Vx){return r(ne,Vx)}),an&&ps(ne,pt),et}function yn(ne,q,re,be){if(typeof re=="object"&&re!==null&&re.type===k&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case D:e:{for(var et=re.key,at=q;at!==null;){if(at.key===et){if(et=re.type,et===k){if(at.tag===7){a(ne,at.sibling),q=p(at,re.props.children),q.return=ne,ne=q;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&pp(et)===at.type){a(ne,at.sibling),q=p(at,re.props),q.ref=oa(ne,at,re),q.return=ne,ne=q;break e}a(ne,at);break}else r(ne,at);at=at.sibling}re.type===k?(q=Ss(re.props.children,ne.mode,be,re.key),q.return=ne,ne=q):(be=Ul(re.type,re.key,re.props,null,ne.mode,be),be.ref=oa(ne,q,re),be.return=ne,ne=be)}return T(ne);case B:e:{for(at=re.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){a(ne,q.sibling),q=p(q,re.children||[]),q.return=ne,ne=q;break e}else{a(ne,q);break}else r(ne,q);q=q.sibling}q=Sf(re,ne.mode,be),q.return=ne,ne=q}return T(ne);case G:return at=re._init,yn(ne,q,at(re._payload),be)}if(Ye(re))return qe(ne,q,re,be);if(te(re))return Qe(ne,q,re,be);fl(ne,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,q!==null&&q.tag===6?(a(ne,q.sibling),q=p(q,re),q.return=ne,ne=q):(a(ne,q),q=Mf(re,ne.mode,be),q.return=ne,ne=q),T(ne)):a(ne,q)}return yn}var Js=mp(!0),gp=mp(!1),dl=Ur(null),hl=null,eo=null,Pu=null;function Lu(){Pu=eo=hl=null}function Du(n){var r=dl.current;tn(dl),n._currentValue=r}function Iu(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function to(n,r){hl=n,Pu=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ii=!0),n.firstContext=null)}function Ei(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},eo===null){if(hl===null)throw Error(t(308));eo=n,hl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return r}var ms=null;function Nu(n){ms===null?ms=[n]:ms.push(n)}function vp(n,r,a,u){var p=r.interleaved;return p===null?(a.next=a,Nu(r)):(a.next=p.next,p.next=a),r.interleaved=a,pr(n,u)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Or=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function zr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,pr(n,a)}return p=u.interleaved,p===null?(r.next=r,Nu(u)):(r.next=p.next,p.next=r),u.interleaved=r,pr(n,a)}function pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,pn(n,a)}}function _p(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?p=x=r:x=x.next=r}else p=x=r;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ml(n,r,a,u){var p=n.updateQueue;Or=!1;var x=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var W=I,fe=W.next;W.next=null,T===null?x=fe:T.next=fe,T=W;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==T&&(I===null?Se.firstBaseUpdate=fe:I.next=fe,Se.lastBaseUpdate=W))}if(x!==null){var Ae=p.baseState;T=0,Se=fe=W=null,I=x;do{var Me=I.lane,Be=I.eventTime;if((u&Me)===Me){Se!==null&&(Se=Se.next={eventTime:Be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var qe=n,Qe=I;switch(Me=r,Be=a,Qe.tag){case 1:if(qe=Qe.payload,typeof qe=="function"){Ae=qe.call(Be,Ae,Me);break e}Ae=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Qe.payload,Me=typeof qe=="function"?qe.call(Be,Ae,Me):qe,Me==null)break e;Ae=se({},Ae,Me);break e;case 2:Or=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Me=p.effects,Me===null?p.effects=[I]:Me.push(I))}else Be={eventTime:Be,lane:Me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(fe=Se=Be,W=Ae):Se=Se.next=Be,T|=Me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;Me=I,I=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(Se===null&&(W=Ae),p.baseState=W,p.firstBaseUpdate=fe,p.lastBaseUpdate=Se,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);xs|=T,n.lanes=T,n.memoizedState=Ae}}function yp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var aa={},tr=Ur(aa),la=Ur(aa),ca=Ur(aa);function gs(n){if(n===aa)throw Error(t(174));return n}function Fu(n,r){switch(Qt(ca,r),Qt(la,n),Qt(tr,aa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ke(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ke(r,n)}tn(tr),Qt(tr,r)}function no(){tn(tr),tn(la),tn(ca)}function Mp(n){gs(ca.current);var r=gs(tr.current),a=Ke(r,n.type);r!==a&&(Qt(la,n),Qt(tr,a))}function ku(n){la.current===n&&(tn(tr),tn(la))}var ln=Ur(0);function gl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var vl=A.ReactCurrentDispatcher,Bu=A.ReactCurrentBatchConfig,vs=0,cn=null,An=null,Ln=null,xl=!1,ua=!1,fa=0,ux=0;function Vn(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Oi(n[a],r[a]))return!1;return!0}function Vu(n,r,a,u,p,x){if(vs=x,cn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vl.current=n===null||n.memoizedState===null?px:mx,n=a(u,p),ua){x=0;do{if(ua=!1,fa=0,25<=x)throw Error(t(301));x+=1,Ln=An=null,r.updateQueue=null,vl.current=gx,n=a(u,p)}while(ua)}if(vl.current=Ml,r=An!==null&&An.next!==null,vs=0,Ln=An=cn=null,xl=!1,r)throw Error(t(300));return n}function Gu(){var n=fa!==0;return fa=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?cn.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function wi(){if(An===null){var n=cn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var r=Ln===null?cn.memoizedState:Ln.next;if(r!==null)Ln=r,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Ln===null?cn.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function da(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=wi(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=An,p=u.baseQueue,x=a.pending;if(x!==null){if(p!==null){var T=p.next;p.next=x.next,x.next=T}u.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,u=u.baseState;var I=T=null,W=null,fe=x;do{var Se=fe.lane;if((vs&Se)===Se)W!==null&&(W=W.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ae={lane:Se,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};W===null?(I=W=Ae,T=u):W=W.next=Ae,cn.lanes|=Se,xs|=Se}fe=fe.next}while(fe!==null&&fe!==x);W===null?T=u:W.next=I,Oi(u,r.memoizedState)||(ii=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=W,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do x=p.lane,cn.lanes|=x,xs|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Xu(n){var r=wi(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,x=r.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do x=n(x,T.action),T=T.next;while(T!==p);Oi(x,r.memoizedState)||(ii=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),a.lastRenderedState=x}return[x,u]}function Sp(){}function Ep(n,r){var a=cn,u=wi(),p=r(),x=!Oi(u.memoizedState,p);if(x&&(u.memoizedState=p,ii=!0),u=u.queue,ju(Ap.bind(null,a,u,n),[n]),u.getSnapshot!==r||x||Ln!==null&&Ln.memoizedState.tag&1){if(a.flags|=2048,ha(9,Tp.bind(null,a,u,p,r),void 0,null),Dn===null)throw Error(t(349));(vs&30)!==0||wp(a,r,p)}return p}function wp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=cn.updateQueue,r===null?(r={lastEffect:null,stores:null},cn.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Tp(n,r,a,u){r.value=a,r.getSnapshot=u,Cp(r)&&Rp(n)}function Ap(n,r,a){return a(function(){Cp(r)&&Rp(n)})}function Cp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Oi(n,a)}catch{return!0}}function Rp(n){var r=pr(n,1);r!==null&&Gi(r,n,1,-1)}function bp(n){var r=nr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},r.queue=n,n=n.dispatch=hx.bind(null,cn,n),[r.memoizedState,n]}function ha(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=cn.updateQueue,r===null?(r={lastEffect:null,stores:null},cn.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Pp(){return wi().memoizedState}function _l(n,r,a,u){var p=nr();cn.flags|=n,p.memoizedState=ha(1|r,a,void 0,u===void 0?null:u)}function yl(n,r,a,u){var p=wi();u=u===void 0?null:u;var x=void 0;if(An!==null){var T=An.memoizedState;if(x=T.destroy,u!==null&&Hu(u,T.deps)){p.memoizedState=ha(r,a,x,u);return}}cn.flags|=n,p.memoizedState=ha(1|r,a,x,u)}function Lp(n,r){return _l(8390656,8,n,r)}function ju(n,r){return yl(2048,8,n,r)}function Dp(n,r){return yl(4,2,n,r)}function Ip(n,r){return yl(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Up(n,r,a){return a=a!=null?a.concat([n]):null,yl(4,4,Np.bind(null,r,n),a)}function $u(){}function Fp(n,r){var a=wi();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Hu(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function kp(n,r){var a=wi();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Hu(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Op(n,r,a){return(vs&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Oi(a,r)||(a=rt(),cn.lanes|=a,xs|=a,n.baseState=!0),r)}function fx(n,r){var a=Ge;Ge=a!==0&&4>a?a:4,n(!0);var u=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Ge=a,Bu.transition=u}}function zp(){return wi().memoizedState}function dx(n,r,a){var u=Gr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Bp(n))Hp(r,a);else if(a=vp(n,r,a,u),a!==null){var p=qn();Gi(a,n,u,p),Vp(a,r,u)}}function hx(n,r,a){var u=Gr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))Hp(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var T=r.lastRenderedState,I=x(T,a);if(p.hasEagerState=!0,p.eagerState=I,Oi(I,T)){var W=r.interleaved;W===null?(p.next=p,Nu(r)):(p.next=W.next,W.next=p),r.interleaved=p;return}}catch{}finally{}a=vp(n,r,p,u),a!==null&&(p=qn(),Gi(a,n,u,p),Vp(a,r,u))}}function Bp(n){var r=n.alternate;return n===cn||r!==null&&r===cn}function Hp(n,r){ua=xl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Vp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,pn(n,a)}}var Ml={readContext:Ei,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},px={readContext:Ei,useCallback:function(n,r){return nr().memoizedState=[n,r===void 0?null:r],n},useContext:Ei,useEffect:Lp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,_l(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return _l(4194308,4,n,r)},useInsertionEffect:function(n,r){return _l(4,2,n,r)},useMemo:function(n,r){var a=nr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=nr();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=dx.bind(null,cn,n),[u.memoizedState,n]},useRef:function(n){var r=nr();return n={current:n},r.memoizedState=n},useState:bp,useDebugValue:$u,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=bp(!1),r=n[0];return n=fx.bind(null,n[1]),nr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=cn,p=nr();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Dn===null)throw Error(t(349));(vs&30)!==0||wp(u,r,a)}p.memoizedState=a;var x={value:a,getSnapshot:r};return p.queue=x,Lp(Ap.bind(null,u,x,n),[n]),u.flags|=2048,ha(9,Tp.bind(null,u,x,a,r),void 0,null),a},useId:function(){var n=nr(),r=Dn.identifierPrefix;if(an){var a=hr,u=dr;a=(u&~(1<<32-Ut(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ux++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},mx={readContext:Ei,useCallback:Fp,useContext:Ei,useEffect:ju,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Wu,useRef:Pp,useState:function(){return Wu(da)},useDebugValue:$u,useDeferredValue:function(n){var r=wi();return Op(r,An.memoizedState,n)},useTransition:function(){var n=Wu(da)[0],r=wi().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1},gx={readContext:Ei,useCallback:Fp,useContext:Ei,useEffect:ju,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Xu,useRef:Pp,useState:function(){return Xu(da)},useDebugValue:$u,useDeferredValue:function(n){var r=wi();return An===null?r.memoizedState=n:Op(r,An.memoizedState,n)},useTransition:function(){var n=Xu(da)[0],r=wi().memoizedState;return[n,r]},useMutableSource:Sp,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1};function Bi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Yu(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:se({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Sl={isMounted:function(n){return(n=n._reactInternals)?qt(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=qn(),p=Gr(n),x=mr(u,p);x.payload=r,a!=null&&(x.callback=a),r=zr(n,x,p),r!==null&&(Gi(r,n,p,u),pl(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=qn(),p=Gr(n),x=mr(u,p);x.tag=1,x.payload=r,a!=null&&(x.callback=a),r=zr(n,x,p),r!==null&&(Gi(r,n,p,u),pl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=qn(),u=Gr(n),p=mr(a,u);p.tag=2,r!=null&&(p.callback=r),r=zr(n,p,u),r!==null&&(Gi(r,n,u,a),pl(r,n,u))}};function Gp(n,r,a,u,p,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,T):r.prototype&&r.prototype.isPureReactComponent?!Jo(a,u)||!Jo(p,x):!0}function Wp(n,r,a){var u=!1,p=Fr,x=r.contextType;return typeof x=="object"&&x!==null?x=Ei(x):(p=ni(r)?ds:Hn.current,u=r.contextTypes,x=(u=u!=null)?Zs(n,p):Fr),r=new r(a,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Xp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function Zu(n,r,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Uu(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=Ei(x):(x=ni(r)?ds:Hn.current,p.context=Zs(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Yu(n,r,x,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Sl.enqueueReplaceState(p,p.state,null),ml(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,r){try{var a="",u=r;do a+=pe(u),u=u.return;while(u);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function qu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Ku(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function jp(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){bl||(bl=!0,hf=u),Ku(n,r)},a}function $p(n,r,a){a=mr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;a.payload=function(){return u(p)},a.callback=function(){Ku(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Ku(n,r),typeof u!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),a}function Yp(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new vx;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(a)||(p.add(a),n=Lx.bind(null,n,r,a),r.then(n,n))}function Zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,zr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var xx=A.ReactCurrentOwner,ii=!1;function Zn(n,r,a,u){r.child=n===null?gp(r,null,a,u):Js(r,n.child,a,u)}function Kp(n,r,a,u,p){a=a.render;var x=r.ref;return to(r,p),u=Vu(n,r,a,u,x,p),a=Gu(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,gr(n,r,p)):(an&&a&&Tu(r),r.flags|=1,Zn(n,r,u,p),r.child)}function Qp(n,r,a,u,p){if(n===null){var x=a.type;return typeof x=="function"&&!yf(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=x,Jp(n,r,x,u,p)):(n=Ul(a.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:Jo,a(T,u)&&n.ref===r.ref)return gr(n,r,p)}return r.flags|=1,n=Xr(x,u),n.ref=r.ref,n.return=r,r.child=n}function Jp(n,r,a,u,p){if(n!==null){var x=n.memoizedProps;if(Jo(x,u)&&n.ref===r.ref)if(ii=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ii=!0);else return r.lanes=n.lanes,gr(n,r,p)}return Qu(n,r,a,u,p)}function em(n,r,a){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(so,xi),xi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Qt(so,xi),xi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,Qt(so,xi),xi|=u}else x!==null?(u=x.baseLanes|a,r.memoizedState=null):u=a,Qt(so,xi),xi|=u;return Zn(n,r,p,a),r.child}function tm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,a,u,p){var x=ni(a)?ds:Hn.current;return x=Zs(r,x),to(r,p),a=Vu(n,r,a,u,x,p),u=Gu(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,gr(n,r,p)):(an&&u&&Tu(r),r.flags|=1,Zn(n,r,a,p),r.child)}function nm(n,r,a,u,p){if(ni(a)){var x=!0;ol(r)}else x=!1;if(to(r,p),r.stateNode===null)wl(n,r),Wp(r,a,u),Zu(r,a,u,p),u=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var W=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=Ei(fe):(fe=ni(a)?ds:Hn.current,fe=Zs(r,fe));var Se=a.getDerivedStateFromProps,Ae=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||W!==fe)&&Xp(r,T,u,fe),Or=!1;var Me=r.memoizedState;T.state=Me,ml(r,u,T,p),W=r.memoizedState,I!==u||Me!==W||ti.current||Or?(typeof Se=="function"&&(Yu(r,a,Se,u),W=r.memoizedState),(I=Or||Gp(r,a,I,u,Me,W,fe))?(Ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=W),T.props=u,T.state=W,T.context=fe,u=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,xp(n,r),I=r.memoizedProps,fe=r.type===r.elementType?I:Bi(r.type,I),T.props=fe,Ae=r.pendingProps,Me=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=Ei(W):(W=ni(a)?ds:Hn.current,W=Zs(r,W));var Be=a.getDerivedStateFromProps;(Se=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Ae||Me!==W)&&Xp(r,T,u,W),Or=!1,Me=r.memoizedState,T.state=Me,ml(r,u,T,p);var qe=r.memoizedState;I!==Ae||Me!==qe||ti.current||Or?(typeof Be=="function"&&(Yu(r,a,Be,u),qe=r.memoizedState),(fe=Or||Gp(r,a,fe,u,Me,qe,W)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,qe,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,qe,W)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=qe),T.props=u,T.state=qe,T.context=W,u=fe):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),u=!1)}return Ju(n,r,a,u,x,p)}function Ju(n,r,a,u,p,x){tm(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&ap(r,a,!1),gr(n,r,x);u=r.stateNode,xx.current=r;var I=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=Js(r,n.child,null,x),r.child=Js(r,null,I,x)):Zn(n,r,I,x),r.memoizedState=u.state,p&&ap(r,a,!0),r.child}function im(n){var r=n.stateNode;r.pendingContext?sp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&sp(n,r.context,!1),Fu(n,r.containerInfo)}function rm(n,r,a,u,p){return Qs(),bu(p),r.flags|=256,Zn(n,r,a,u),r.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(n){return{baseLanes:n,cachePool:null,transitions:null}}function sm(n,r,a){var u=r.pendingProps,p=ln.current,x=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Qt(ln,p&1),n===null)return Ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,x?(u=r.mode,x=r.child,T={mode:"hidden",children:T},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Fl(T,u,0,null),n=Ss(n,u,a,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=tf(a),r.memoizedState=ef,n):nf(r,T));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return _x(n,r,T,u,I,p,a);if(x){x=u.fallback,T=r.mode,p=n.child,I=p.sibling;var W={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=W,r.deletions=null):(u=Xr(p,W),u.subtreeFlags=p.subtreeFlags&14680064),I!==null?x=Xr(I,x):(x=Ss(x,T,a,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,T=n.child.memoizedState,T=T===null?tf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,r.memoizedState=ef,u}return x=n.child,n=x.sibling,u=Xr(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function nf(n,r){return r=Fl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function El(n,r,a,u){return u!==null&&bu(u),Js(r,n.child,null,a),n=nf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _x(n,r,a,u,p,x,T){if(a)return r.flags&256?(r.flags&=-257,u=qu(Error(t(422))),El(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=Fl({mode:"visible",children:u.children},p,0,null),x=Ss(x,p,T,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Js(r,n.child,null,T),r.child.memoizedState=tf(T),r.memoizedState=ef,x);if((r.mode&1)===0)return El(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var I=u.dgst;return u=I,x=Error(t(419)),u=qu(x,u,void 0),El(n,r,T,u)}if(I=(T&n.childLanes)!==0,ii||I){if(u=Dn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,pr(n,p),Gi(u,n,p,-1))}return _f(),u=qu(Error(t(421))),El(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Dx.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,vi=Nr(p.nextSibling),gi=r,an=!0,zi=null,n!==null&&(Mi[Si++]=dr,Mi[Si++]=hr,Mi[Si++]=hs,dr=n.id,hr=n.overflow,hs=r),r=nf(r,u.children),r.flags|=4096,r)}function om(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Iu(n.return,r,a)}function rf(n,r,a,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=p)}function am(n,r,a){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(Zn(n,r,u.children,a),u=ln.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,r);else if(n.tag===19)om(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Qt(ln,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&gl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),rf(r,!1,p,a,x);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&gl(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}rf(r,!0,a,null,x);break;case"together":rf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function wl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),xs|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function yx(n,r,a){switch(r.tag){case 3:im(r),Qs();break;case 5:Mp(r);break;case 1:ni(r.type)&&ol(r);break;case 4:Fu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Qt(dl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Qt(ln,ln.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?sm(n,r,a):(Qt(ln,ln.current&1),n=gr(n,r,a),n!==null?n.sibling:null);Qt(ln,ln.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return am(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Qt(ln,ln.current),u)break;return null;case 22:case 23:return r.lanes=0,em(n,r,a)}return gr(n,r,a)}var lm,sf,cm,um;lm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},sf=function(){},cm=function(n,r,a,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,gs(tr.current);var x=null;switch(a){case"input":p=j(n,p),u=j(n,u),x=[];break;case"select":p=se({},p,{value:void 0}),u=se({},u,{value:void 0}),x=[];break;case"textarea":p=E(n,p),u=E(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=il)}yt(a,u);var T;a=null;for(fe in p)if(!u.hasOwnProperty(fe)&&p.hasOwnProperty(fe)&&p[fe]!=null)if(fe==="style"){var I=p[fe];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in u){var W=u[fe];if(I=p!=null?p[fe]:void 0,u.hasOwnProperty(fe)&&W!==I&&(W!=null||I!=null))if(fe==="style")if(I){for(T in I)!I.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&I[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(x||(x=[]),x.push(fe,a)),a=W;else fe==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,I=I?I.__html:void 0,W!=null&&I!==W&&(x=x||[]).push(fe,W)):fe==="children"?typeof W!="string"&&typeof W!="number"||(x=x||[]).push(fe,""+W):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(W!=null&&fe==="onScroll"&&en("scroll",n),x||I===W||(x=[])):(x=x||[]).push(fe,W))}a&&(x=x||[]).push("style",a);var fe=x;(r.updateQueue=fe)&&(r.flags|=4)}},um=function(n,r,a,u){a!==u&&(r.flags|=4)};function pa(n,r){if(!an)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Gn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function Mx(n,r,a){var u=r.pendingProps;switch(Au(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(r),null;case 1:return ni(r.type)&&sl(),Gn(r),null;case 3:return u=r.stateNode,no(),tn(ti),tn(Hn),zu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zi!==null&&(gf(zi),zi=null))),sf(n,r),Gn(r),null;case 5:ku(r);var p=gs(ca.current);if(a=r.type,n!==null&&r.stateNode!=null)cm(n,r,a,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Gn(r),null}if(n=gs(tr.current),ul(r)){u=r.stateNode,a=r.type;var x=r.memoizedProps;switch(u[er]=r,u[ra]=x,n=(r.mode&1)!==0,a){case"dialog":en("cancel",u),en("close",u);break;case"iframe":case"object":case"embed":en("load",u);break;case"video":case"audio":for(p=0;p<ta.length;p++)en(ta[p],u);break;case"source":en("error",u);break;case"img":case"image":case"link":en("error",u),en("load",u);break;case"details":en("toggle",u);break;case"input":wn(u,x),en("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},en("invalid",u);break;case"textarea":ie(u,x),en("invalid",u)}yt(a,x),p=null;for(var T in x)if(x.hasOwnProperty(T)){var I=x[T];T==="children"?typeof I=="string"?u.textContent!==I&&(x.suppressHydrationWarning!==!0&&nl(u.textContent,I,n),p=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(x.suppressHydrationWarning!==!0&&nl(u.textContent,I,n),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&en("scroll",u)}switch(a){case"input":Ft(u),tt(u,x,!0);break;case"textarea":Ft(u),_e(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=il)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[er]=r,n[ra]=u,lm(n,r,!1,!1),r.stateNode=n;e:{switch(T=mt(a,u),a){case"dialog":en("cancel",n),en("close",n),p=u;break;case"iframe":case"object":case"embed":en("load",n),p=u;break;case"video":case"audio":for(p=0;p<ta.length;p++)en(ta[p],n);p=u;break;case"source":en("error",n),p=u;break;case"img":case"image":case"link":en("error",n),en("load",n),p=u;break;case"details":en("toggle",n),p=u;break;case"input":wn(n,u),p=j(n,u),en("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=se({},u,{value:void 0}),en("invalid",n);break;case"textarea":ie(n,u),p=E(n,u),en("invalid",n);break;default:p=u}yt(a,p),I=p;for(x in I)if(I.hasOwnProperty(x)){var W=I[x];x==="style"?ot(n,W):x==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ve(n,W)):x==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&vt(n,W):typeof W=="number"&&vt(n,""+W):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?W!=null&&x==="onScroll"&&en("scroll",n):W!=null&&P(n,x,W,T))}switch(a){case"input":Ft(n),tt(n,u,!1);break;case"textarea":Ft(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?L(n,!!u.multiple,x,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=il)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Gn(r),null;case 6:if(n&&r.stateNode!=null)um(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=gs(ca.current),gs(tr.current),ul(r)){if(u=r.stateNode,a=r.memoizedProps,u[er]=r,(x=u.nodeValue!==a)&&(n=gi,n!==null))switch(n.tag){case 3:nl(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(u.nodeValue,a,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[er]=r,r.stateNode=u}return Gn(r),null;case 13:if(tn(ln),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&vi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)hp(),Qs(),r.flags|=98560,x=!1;else if(x=ul(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[er]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Gn(r),x=!1}else zi!==null&&(gf(zi),zi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(ln.current&1)!==0?Cn===0&&(Cn=3):_f())),r.updateQueue!==null&&(r.flags|=4),Gn(r),null);case 4:return no(),sf(n,r),n===null&&na(r.stateNode.containerInfo),Gn(r),null;case 10:return Du(r.type._context),Gn(r),null;case 17:return ni(r.type)&&sl(),Gn(r),null;case 19:if(tn(ln),x=r.memoizedState,x===null)return Gn(r),null;if(u=(r.flags&128)!==0,T=x.rendering,T===null)if(u)pa(x,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=gl(n),T!==null){for(r.flags|=128,pa(x,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)x=a,n=u,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qt(ln,ln.current&1|2),r.child}n=n.sibling}x.tail!==null&&Z()>oo&&(r.flags|=128,u=!0,pa(x,!1),r.lanes=4194304)}else{if(!u)if(n=gl(T),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),pa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!an)return Gn(r),null}else 2*Z()-x.renderingStartTime>oo&&a!==1073741824&&(r.flags|=128,u=!0,pa(x,!1),r.lanes=4194304);x.isBackwards?(T.sibling=r.child,r.child=T):(a=x.last,a!==null?a.sibling=T:r.child=T,x.last=T)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Z(),r.sibling=null,a=ln.current,Qt(ln,u?a&1|2:a&1),r):(Gn(r),null);case 22:case 23:return xf(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(xi&1073741824)!==0&&(Gn(r),r.subtreeFlags&6&&(r.flags|=8192)):Gn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Sx(n,r){switch(Au(r),r.tag){case 1:return ni(r.type)&&sl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return no(),tn(ti),tn(Hn),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(tn(ln),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return tn(ln),null;case 4:return no(),null;case 10:return Du(r.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var Tl=!1,Wn=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,$e=null;function ro(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){gn(n,r,u)}else a.current=null}function of(n,r,a){try{a()}catch(u){gn(n,r,u)}}var fm=!1;function wx(n,r){if(vu=Xa,n=Gh(),cu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,I=-1,W=-1,fe=0,Se=0,Ae=n,Me=null;t:for(;;){for(var Be;Ae!==a||p!==0&&Ae.nodeType!==3||(I=T+p),Ae!==x||u!==0&&Ae.nodeType!==3||(W=T+u),Ae.nodeType===3&&(T+=Ae.nodeValue.length),(Be=Ae.firstChild)!==null;)Me=Ae,Ae=Be;for(;;){if(Ae===n)break t;if(Me===a&&++fe===p&&(I=T),Me===x&&++Se===u&&(W=T),(Be=Ae.nextSibling)!==null)break;Ae=Me,Me=Ae.parentNode}Ae=Be}a=I===-1||W===-1?null:{start:I,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(xu={focusedElem:n,selectionRange:a},Xa=!1,$e=r;$e!==null;)if(r=$e,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,$e=n;else for(;$e!==null;){r=$e;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Qe=qe.memoizedProps,yn=qe.memoizedState,ne=r.stateNode,q=ne.getSnapshotBeforeUpdate(r.elementType===r.type?Qe:Bi(r.type,Qe),yn);ne.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){gn(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,$e=n;break}$e=r.return}return qe=fm,fm=!1,qe}function ma(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&of(r,a,x)}p=p.next}while(p!==u)}}function Al(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function af(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function dm(n){var r=n.alternate;r!==null&&(n.alternate=null,dm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[er],delete r[ra],delete r[Su],delete r[ox],delete r[ax])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hm(n){return n.tag===5||n.tag===3||n.tag===4}function pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lf(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=il));else if(u!==4&&(n=n.child,n!==null))for(lf(n,r,a),n=n.sibling;n!==null;)lf(n,r,a),n=n.sibling}function cf(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cf(n,r,a),n=n.sibling;n!==null;)cf(n,r,a),n=n.sibling}var On=null,Hi=!1;function Br(n,r,a){for(a=a.child;a!==null;)mm(n,r,a),a=a.sibling}function mm(n,r,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:Wn||ro(a,r);case 6:var u=On,p=Hi;On=null,Br(n,r,a),On=u,Hi=p,On!==null&&(Hi?(n=On,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):On.removeChild(a.stateNode));break;case 18:On!==null&&(Hi?(n=On,a=a.stateNode,n.nodeType===8?Mu(n.parentNode,a):n.nodeType===1&&Mu(n,a),$o(n)):Mu(On,a.stateNode));break;case 4:u=On,p=Hi,On=a.stateNode.containerInfo,Hi=!0,Br(n,r,a),On=u,Hi=p;break;case 0:case 11:case 14:case 15:if(!Wn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&of(a,r,T),p=p.next}while(p!==u)}Br(n,r,a);break;case 1:if(!Wn&&(ro(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){gn(a,r,I)}Br(n,r,a);break;case 21:Br(n,r,a);break;case 22:a.mode&1?(Wn=(u=Wn)||a.memoizedState!==null,Br(n,r,a),Wn=u):Br(n,r,a);break;default:Br(n,r,a)}}function gm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ex),r.forEach(function(u){var p=Ix.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Vi(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var x=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:On=I.stateNode,Hi=!1;break e;case 3:On=I.stateNode.containerInfo,Hi=!0;break e;case 4:On=I.stateNode.containerInfo,Hi=!0;break e}I=I.return}if(On===null)throw Error(t(160));mm(x,T,p),On=null,Hi=!1;var W=p.alternate;W!==null&&(W.return=null),p.return=null}catch(fe){gn(p,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)vm(r,n),r=r.sibling}function vm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(r,n),ir(n),u&4){try{ma(3,n,n.return),Al(3,n)}catch(Qe){gn(n,n.return,Qe)}try{ma(5,n,n.return)}catch(Qe){gn(n,n.return,Qe)}}break;case 1:Vi(r,n),ir(n),u&512&&a!==null&&ro(a,a.return);break;case 5:if(Vi(r,n),ir(n),u&512&&a!==null&&ro(a,a.return),n.flags&32){var p=n.stateNode;try{vt(p,"")}catch(Qe){gn(n,n.return,Qe)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,I=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{I==="input"&&x.type==="radio"&&x.name!=null&&Tt(p,x),mt(I,T);var fe=mt(I,x);for(T=0;T<W.length;T+=2){var Se=W[T],Ae=W[T+1];Se==="style"?ot(p,Ae):Se==="dangerouslySetInnerHTML"?Ve(p,Ae):Se==="children"?vt(p,Ae):P(p,Se,Ae,fe)}switch(I){case"input":gt(p,x);break;case"textarea":xe(p,x);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?L(p,!!x.multiple,Be,!1):Me!==!!x.multiple&&(x.defaultValue!=null?L(p,!!x.multiple,x.defaultValue,!0):L(p,!!x.multiple,x.multiple?[]:"",!1))}p[ra]=x}catch(Qe){gn(n,n.return,Qe)}}break;case 6:if(Vi(r,n),ir(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(Qe){gn(n,n.return,Qe)}}break;case 3:if(Vi(r,n),ir(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{$o(r.containerInfo)}catch(Qe){gn(n,n.return,Qe)}break;case 4:Vi(r,n),ir(n);break;case 13:Vi(r,n),ir(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(df=Z())),u&4&&gm(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(Wn=(fe=Wn)||Se,Vi(r,n),Wn=fe):Vi(r,n),ir(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Se&&(n.mode&1)!==0)for($e=n,Se=n.child;Se!==null;){for(Ae=$e=Se;$e!==null;){switch(Me=$e,Be=Me.child,Me.tag){case 0:case 11:case 14:case 15:ma(4,Me,Me.return);break;case 1:ro(Me,Me.return);var qe=Me.stateNode;if(typeof qe.componentWillUnmount=="function"){u=Me,a=Me.return;try{r=u,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch(Qe){gn(u,a,Qe)}}break;case 5:ro(Me,Me.return);break;case 22:if(Me.memoizedState!==null){ym(Ae);continue}}Be!==null?(Be.return=Me,$e=Be):ym(Ae)}Se=Se.sibling}e:for(Se=null,Ae=n;;){if(Ae.tag===5){if(Se===null){Se=Ae;try{p=Ae.stateNode,fe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(I=Ae.stateNode,W=Ae.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,I.style.display=Ze("display",T))}catch(Qe){gn(n,n.return,Qe)}}}else if(Ae.tag===6){if(Se===null)try{Ae.stateNode.nodeValue=fe?"":Ae.memoizedProps}catch(Qe){gn(n,n.return,Qe)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Se===Ae&&(Se=null),Ae=Ae.return}Se===Ae&&(Se=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Vi(r,n),ir(n),u&4&&gm(n);break;case 21:break;default:Vi(r,n),ir(n)}}function ir(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(hm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(vt(p,""),u.flags&=-33);var x=pm(n);cf(n,x,p);break;case 3:case 4:var T=u.stateNode.containerInfo,I=pm(n);lf(n,I,T);break;default:throw Error(t(161))}}catch(W){gn(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Tx(n,r,a){$e=n,xm(n)}function xm(n,r,a){for(var u=(n.mode&1)!==0;$e!==null;){var p=$e,x=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Tl;if(!T){var I=p.alternate,W=I!==null&&I.memoizedState!==null||Wn;I=Tl;var fe=Wn;if(Tl=T,(Wn=W)&&!fe)for($e=p;$e!==null;)T=$e,W=T.child,T.tag===22&&T.memoizedState!==null?Mm(p):W!==null?(W.return=T,$e=W):Mm(p);for(;x!==null;)$e=x,xm(x),x=x.sibling;$e=p,Tl=I,Wn=fe}_m(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,$e=x):_m(n)}}function _m(n){for(;$e!==null;){var r=$e;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Wn||Al(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Wn)if(a===null)u.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:Bi(r.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&yp(r,x,u);break;case 3:var T=r.updateQueue;if(T!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}yp(r,T,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Se=fe.memoizedState;if(Se!==null){var Ae=Se.dehydrated;Ae!==null&&$o(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wn||r.flags&512&&af(r)}catch(Me){gn(r,r.return,Me)}}if(r===n){$e=null;break}if(a=r.sibling,a!==null){a.return=r.return,$e=a;break}$e=r.return}}function ym(n){for(;$e!==null;){var r=$e;if(r===n){$e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,$e=a;break}$e=r.return}}function Mm(n){for(;$e!==null;){var r=$e;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Al(4,r)}catch(W){gn(r,a,W)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(W){gn(r,p,W)}}var x=r.return;try{af(r)}catch(W){gn(r,x,W)}break;case 5:var T=r.return;try{af(r)}catch(W){gn(r,T,W)}}}catch(W){gn(r,r.return,W)}if(r===n){$e=null;break}var I=r.sibling;if(I!==null){I.return=r.return,$e=I;break}$e=r.return}}var Ax=Math.ceil,Cl=A.ReactCurrentDispatcher,uf=A.ReactCurrentOwner,Ti=A.ReactCurrentBatchConfig,Ot=0,Dn=null,Mn=null,zn=0,xi=0,so=Ur(0),Cn=0,ga=null,xs=0,Rl=0,ff=0,va=null,ri=null,df=0,oo=1/0,vr=null,bl=!1,hf=null,Hr=null,Pl=!1,Vr=null,Ll=0,xa=0,pf=null,Dl=-1,Il=0;function qn(){return(Ot&6)!==0?Z():Dl!==-1?Dl:Dl=Z()}function Gr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&zn!==0?zn&-zn:cx.transition!==null?(Il===0&&(Il=rt()),Il):(n=Ge,n!==0||(n=window.event,n=n===void 0?16:Eh(n.type)),n)}function Gi(n,r,a,u){if(50<xa)throw xa=0,pf=null,Error(t(185));st(n,a,u),((Ot&2)===0||n!==Dn)&&(n===Dn&&((Ot&2)===0&&(Rl|=a),Cn===4&&Wr(n,zn)),si(n,u),a===1&&Ot===0&&(r.mode&1)===0&&(oo=Z()+500,al&&kr()))}function si(n,r){var a=n.callbackNode;N(n,r);var u=ei(n,n===Dn?zn:0);if(u===0)a!==null&&J(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&J(a),r===1)n.tag===0?lx(Em.bind(null,n)):lp(Em.bind(null,n)),rx(function(){(Ot&6)===0&&kr()}),a=null;else{switch(St(u)){case 1:a=Le;break;case 4:a=ze;break;case 16:a=Xe;break;case 536870912:a=ut;break;default:a=Xe}a=Lm(a,Sm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Sm(n,r){if(Dl=-1,Il=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var u=ei(n,n===Dn?zn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Nl(n,u);else{r=u;var p=Ot;Ot|=2;var x=Tm();(Dn!==n||zn!==r)&&(vr=null,oo=Z()+500,ys(n,r));do try{bx();break}catch(I){wm(n,I)}while(!0);Lu(),Cl.current=x,Ot=p,Mn!==null?r=0:(Dn=null,zn=0,r=Cn)}if(r!==0){if(r===2&&(p=ve(n),p!==0&&(u=p,r=mf(n,p))),r===1)throw a=ga,ys(n,0),Wr(n,u),si(n,Z()),a;if(r===6)Wr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Cx(p)&&(r=Nl(n,u),r===2&&(x=ve(n),x!==0&&(u=x,r=mf(n,x))),r===1))throw a=ga,ys(n,0),Wr(n,u),si(n,Z()),a;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Ms(n,ri,vr);break;case 3:if(Wr(n,u),(u&130023424)===u&&(r=df+500-Z(),10<r)){if(ei(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){qn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=yu(Ms.bind(null,n,ri,vr),r);break}Ms(n,ri,vr);break;case 4:if(Wr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-Ut(u);x=1<<T,T=r[T],T>p&&(p=T),u&=~x}if(u=p,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Ax(u/1960))-u,10<u){n.timeoutHandle=yu(Ms.bind(null,n,ri,vr),u);break}Ms(n,ri,vr);break;case 5:Ms(n,ri,vr);break;default:throw Error(t(329))}}}return si(n,Z()),n.callbackNode===a?Sm.bind(null,n):null}function mf(n,r){var a=va;return n.current.memoizedState.isDehydrated&&(ys(n,r).flags|=256),n=Nl(n,r),n!==2&&(r=ri,ri=a,r!==null&&gf(r)),n}function gf(n){ri===null?ri=n:ri.push.apply(ri,n)}function Cx(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],x=p.getSnapshot;p=p.value;try{if(!Oi(x(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(n,r){for(r&=~ff,r&=~Rl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),u=1<<a;n[a]=-1,r&=~u}}function Em(n){if((Ot&6)!==0)throw Error(t(327));ao();var r=ei(n,0);if((r&1)===0)return si(n,Z()),null;var a=Nl(n,r);if(n.tag!==0&&a===2){var u=ve(n);u!==0&&(r=u,a=mf(n,u))}if(a===1)throw a=ga,ys(n,0),Wr(n,r),si(n,Z()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ms(n,ri,vr),si(n,Z()),null}function vf(n,r){var a=Ot;Ot|=1;try{return n(r)}finally{Ot=a,Ot===0&&(oo=Z()+500,al&&kr())}}function _s(n){Vr!==null&&Vr.tag===0&&(Ot&6)===0&&ao();var r=Ot;Ot|=1;var a=Ti.transition,u=Ge;try{if(Ti.transition=null,Ge=1,n)return n()}finally{Ge=u,Ti.transition=a,Ot=r,(Ot&6)===0&&kr()}}function xf(){xi=so.current,tn(so)}function ys(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,ix(a)),Mn!==null)for(a=Mn.return;a!==null;){var u=a;switch(Au(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&sl();break;case 3:no(),tn(ti),tn(Hn),zu();break;case 5:ku(u);break;case 4:no();break;case 13:tn(ln);break;case 19:tn(ln);break;case 10:Du(u.type._context);break;case 22:case 23:xf()}a=a.return}if(Dn=n,Mn=n=Xr(n.current,null),zn=xi=r,Cn=0,ga=null,ff=Rl=xs=0,ri=va=null,ms!==null){for(r=0;r<ms.length;r++)if(a=ms[r],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,x=a.pending;if(x!==null){var T=x.next;x.next=p,u.next=T}a.pending=u}ms=null}return n}function wm(n,r){do{var a=Mn;try{if(Lu(),vl.current=Ml,xl){for(var u=cn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}xl=!1}if(vs=0,Ln=An=cn=null,ua=!1,fa=0,uf.current=null,a===null||a.return===null){Cn=1,ga=r,Mn=null;break}e:{var x=n,T=a.return,I=a,W=r;if(r=zn,I.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var fe=W,Se=I,Ae=Se.tag;if((Se.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Me=Se.alternate;Me?(Se.updateQueue=Me.updateQueue,Se.memoizedState=Me.memoizedState,Se.lanes=Me.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Be=Zp(T);if(Be!==null){Be.flags&=-257,qp(Be,T,I,x,r),Be.mode&1&&Yp(x,fe,r),r=Be,W=fe;var qe=r.updateQueue;if(qe===null){var Qe=new Set;Qe.add(W),r.updateQueue=Qe}else qe.add(W);break e}else{if((r&1)===0){Yp(x,fe,r),_f();break e}W=Error(t(426))}}else if(an&&I.mode&1){var yn=Zp(T);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),qp(yn,T,I,x,r),bu(io(W,I));break e}}x=W=io(W,I),Cn!==4&&(Cn=2),va===null?va=[x]:va.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ne=jp(x,W,r);_p(x,ne);break e;case 1:I=W;var q=x.type,re=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Hr===null||!Hr.has(re)))){x.flags|=65536,r&=-r,x.lanes|=r;var be=$p(x,I,r);_p(x,be);break e}}x=x.return}while(x!==null)}Cm(a)}catch(et){r=et,Mn===a&&a!==null&&(Mn=a=a.return);continue}break}while(!0)}function Tm(){var n=Cl.current;return Cl.current=Ml,n===null?Ml:n}function _f(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Dn===null||(xs&268435455)===0&&(Rl&268435455)===0||Wr(Dn,zn)}function Nl(n,r){var a=Ot;Ot|=2;var u=Tm();(Dn!==n||zn!==r)&&(vr=null,ys(n,r));do try{Rx();break}catch(p){wm(n,p)}while(!0);if(Lu(),Ot=a,Cl.current=u,Mn!==null)throw Error(t(261));return Dn=null,zn=0,Cn}function Rx(){for(;Mn!==null;)Am(Mn)}function bx(){for(;Mn!==null&&!ce();)Am(Mn)}function Am(n){var r=Pm(n.alternate,n,xi);n.memoizedProps=n.pendingProps,r===null?Cm(n):Mn=r,uf.current=null}function Cm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Mx(a,r,xi),a!==null){Mn=a;return}}else{if(a=Sx(a,r),a!==null){a.flags&=32767,Mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,Mn=null;return}}if(r=r.sibling,r!==null){Mn=r;return}Mn=r=n}while(r!==null);Cn===0&&(Cn=5)}function Ms(n,r,a){var u=Ge,p=Ti.transition;try{Ti.transition=null,Ge=1,Px(n,r,a,u)}finally{Ti.transition=p,Ge=u}return null}function Px(n,r,a,u){do ao();while(Vr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(Lt(n,x),n===Dn&&(Mn=Dn=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pl||(Pl=!0,Lm(Xe,function(){return ao(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Ti.transition,Ti.transition=null;var T=Ge;Ge=1;var I=Ot;Ot|=4,uf.current=null,wx(n,a),vm(a,n),q0(xu),Xa=!!vu,xu=vu=null,n.current=a,Tx(a),ue(),Ot=I,Ge=T,Ti.transition=x}else n.current=a;if(Pl&&(Pl=!1,Vr=n,Ll=p),x=n.pendingLanes,x===0&&(Hr=null),Nt(a.stateNode),si(n,Z()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(bl)throw bl=!1,n=hf,hf=null,n;return(Ll&1)!==0&&n.tag!==0&&ao(),x=n.pendingLanes,(x&1)!==0?n===pf?xa++:(xa=0,pf=n):xa=0,kr(),null}function ao(){if(Vr!==null){var n=St(Ll),r=Ti.transition,a=Ge;try{if(Ti.transition=null,Ge=16>n?16:n,Vr===null)var u=!1;else{if(n=Vr,Vr=null,Ll=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,$e=n.current;$e!==null;){var x=$e,T=x.child;if(($e.flags&16)!==0){var I=x.deletions;if(I!==null){for(var W=0;W<I.length;W++){var fe=I[W];for($e=fe;$e!==null;){var Se=$e;switch(Se.tag){case 0:case 11:case 15:ma(8,Se,x)}var Ae=Se.child;if(Ae!==null)Ae.return=Se,$e=Ae;else for(;$e!==null;){Se=$e;var Me=Se.sibling,Be=Se.return;if(dm(Se),Se===fe){$e=null;break}if(Me!==null){Me.return=Be,$e=Me;break}$e=Be}}}var qe=x.alternate;if(qe!==null){var Qe=qe.child;if(Qe!==null){qe.child=null;do{var yn=Qe.sibling;Qe.sibling=null,Qe=yn}while(Qe!==null)}}$e=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,$e=T;else e:for(;$e!==null;){if(x=$e,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ma(9,x,x.return)}var ne=x.sibling;if(ne!==null){ne.return=x.return,$e=ne;break e}$e=x.return}}var q=n.current;for($e=q;$e!==null;){T=$e;var re=T.child;if((T.subtreeFlags&2064)!==0&&re!==null)re.return=T,$e=re;else e:for(T=q;$e!==null;){if(I=$e,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Al(9,I)}}catch(et){gn(I,I.return,et)}if(I===T){$e=null;break e}var be=I.sibling;if(be!==null){be.return=I.return,$e=be;break e}$e=I.return}}if(Ot=p,kr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{Ge=a,Ti.transition=r}}return!1}function Rm(n,r,a){r=io(a,r),r=jp(n,r,1),n=zr(n,r,1),r=qn(),n!==null&&(st(n,1,r),si(n,r))}function gn(n,r,a){if(n.tag===3)Rm(n,n,a);else for(;r!==null;){if(r.tag===3){Rm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hr===null||!Hr.has(u))){n=io(a,n),n=$p(r,n,1),r=zr(r,n,1),n=qn(),r!==null&&(st(r,1,n),si(r,n));break}}r=r.return}}function Lx(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=qn(),n.pingedLanes|=n.suspendedLanes&a,Dn===n&&(zn&a)===a&&(Cn===4||Cn===3&&(zn&130023424)===zn&&500>Z()-df?ys(n,0):ff|=a),si(n,r)}function bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ct,Ct<<=1,(Ct&130023424)===0&&(Ct=4194304)));var a=qn();n=pr(n,r),n!==null&&(st(n,r,a),si(n,a))}function Dx(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),bm(n,a)}function Ix(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),bm(n,a)}var Pm;Pm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return ii=!1,yx(n,r,a);ii=(n.flags&131072)!==0}else ii=!1,an&&(r.flags&1048576)!==0&&cp(r,cl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;wl(n,r),n=r.pendingProps;var p=Zs(r,Hn.current);to(r,a),p=Vu(null,r,u,n,p,a);var x=Gu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ni(u)?(x=!0,ol(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Uu(r),p.updater=Sl,r.stateNode=p,p._reactInternals=r,Zu(r,u,n,a),r=Ju(null,r,u,!0,x,a)):(r.tag=0,an&&x&&Tu(r),Zn(null,r,p,a),r=r.child),r;case 16:u=r.elementType;e:{switch(wl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Ux(u),n=Bi(u,n),p){case 0:r=Qu(null,r,u,n,a);break e;case 1:r=nm(null,r,u,n,a);break e;case 11:r=Kp(null,r,u,n,a);break e;case 14:r=Qp(null,r,u,Bi(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Bi(u,p),Qu(n,r,u,p,a);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Bi(u,p),nm(n,r,u,p,a);case 3:e:{if(im(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,xp(n,r),ml(r,u,null,a);var T=r.memoizedState;if(u=T.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=io(Error(t(423)),r),r=rm(n,r,u,a,p);break e}else if(u!==p){p=io(Error(t(424)),r),r=rm(n,r,u,a,p);break e}else for(vi=Nr(r.stateNode.containerInfo.firstChild),gi=r,an=!0,zi=null,a=gp(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),u===p){r=gr(n,r,a);break e}Zn(n,r,u,a)}r=r.child}return r;case 5:return Mp(r),n===null&&Ru(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,T=p.children,_u(u,p)?T=null:x!==null&&_u(u,x)&&(r.flags|=32),tm(n,r),Zn(n,r,T,a),r.child;case 6:return n===null&&Ru(r),null;case 13:return sm(n,r,a);case 4:return Fu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Js(r,null,u,a):Zn(n,r,u,a),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Bi(u,p),Kp(n,r,u,p,a);case 7:return Zn(n,r,r.pendingProps,a),r.child;case 8:return Zn(n,r,r.pendingProps.children,a),r.child;case 12:return Zn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,T=p.value,Qt(dl,u._currentValue),u._currentValue=T,x!==null)if(Oi(x.value,T)){if(x.children===p.children&&!ti.current){r=gr(n,r,a);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var I=x.dependencies;if(I!==null){T=x.child;for(var W=I.firstContext;W!==null;){if(W.context===u){if(x.tag===1){W=mr(-1,a&-a),W.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var Se=fe.pending;Se===null?W.next=W:(W.next=Se.next,Se.next=W),fe.pending=W}}x.lanes|=a,W=x.alternate,W!==null&&(W.lanes|=a),Iu(x.return,a,r),I.lanes|=a;break}W=W.next}}else if(x.tag===10)T=x.type===r.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Iu(T,a,r),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===r){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Zn(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,to(r,a),p=Ei(p),u=u(p),r.flags|=1,Zn(n,r,u,a),r.child;case 14:return u=r.type,p=Bi(u,r.pendingProps),p=Bi(u.type,p),Qp(n,r,u,p,a);case 15:return Jp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Bi(u,p),wl(n,r),r.tag=1,ni(u)?(n=!0,ol(r)):n=!1,to(r,a),Wp(r,u,p),Zu(r,u,p,a),Ju(null,r,u,!0,n,a);case 19:return am(n,r,a);case 22:return em(n,r,a)}throw Error(t(156,r.tag))};function Lm(n,r){return C(n,r)}function Nx(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,r,a,u){return new Nx(n,r,a,u)}function yf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ux(n){if(typeof n=="function")return yf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===de)return 11;if(n===Q)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=Ai(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ul(n,r,a,u,p,x){var T=2;if(u=n,typeof n=="function")yf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case k:return Ss(a.children,p,x,r);case $:T=8,p|=8;break;case b:return n=Ai(12,a,r,p|2),n.elementType=b,n.lanes=x,n;case V:return n=Ai(13,a,r,p),n.elementType=V,n.lanes=x,n;case Y:return n=Ai(19,a,r,p),n.elementType=Y,n.lanes=x,n;case ee:return Fl(a,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case H:T=9;break e;case de:T=11;break e;case Q:T=14;break e;case G:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ai(T,a,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function Ss(n,r,a,u){return n=Ai(7,n,u,r),n.lanes=a,n}function Fl(n,r,a,u){return n=Ai(22,n,u,r),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Mf(n,r,a){return n=Ai(6,n,null,r),n.lanes=a,n}function Sf(n,r,a){return r=Ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Fx(n,r,a,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ft(0),this.expirationTimes=ft(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ef(n,r,a,u,p,x,T,I,W){return n=new Fx(n,r,a,I,W),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Ai(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(x),n}function kx(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Dm(n){if(!n)return Fr;n=n._reactInternals;e:{if(qt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ni(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return op(n,a,r)}return r}function Im(n,r,a,u,p,x,T,I,W){return n=Ef(a,u,!0,n,p,x,T,I,W),n.context=Dm(null),a=n.current,u=qn(),p=Gr(a),x=mr(u,p),x.callback=r??null,zr(a,x,p),n.current.lanes=p,st(n,p,u),si(n,u),n}function kl(n,r,a,u){var p=r.current,x=qn(),T=Gr(p);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(x,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=zr(p,r,T),n!==null&&(Gi(n,p,T,x),pl(n,p,T)),T}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function wf(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function Ox(){return null}var Um=typeof reportError=="function"?reportError:function(n){console.error(n)};function Tf(n){this._internalRoot=n}zl.prototype.render=Tf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));kl(n,r,null,null)},zl.prototype.unmount=Tf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;_s(function(){kl(null,n,null,null)}),r[ur]=null}};function zl(n){this._internalRoot=n}zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Wo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<on.length&&r!==0&&r<on[a].priority;a++);on.splice(a,0,n),a===0&&us(n)}};function Af(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function zx(n,r,a,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var fe=Ol(T);x.call(fe)}}var T=Im(r,u,n,0,null,!1,!1,"",Fm);return n._reactRootContainer=T,n[ur]=T.current,na(n.nodeType===8?n.parentNode:n),_s(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var I=u;u=function(){var fe=Ol(W);I.call(fe)}}var W=Ef(n,0,!1,null,null,!1,!1,"",Fm);return n._reactRootContainer=W,n[ur]=W.current,na(n.nodeType===8?n.parentNode:n),_s(function(){kl(r,W,a,u)}),W}function Hl(n,r,a,u,p){var x=a._reactRootContainer;if(x){var T=x;if(typeof p=="function"){var I=p;p=function(){var W=Ol(T);I.call(W)}}kl(r,T,n,p)}else T=zx(a,r,n,p,u);return Ol(T)}kt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Tn(r.pendingLanes);a!==0&&(pn(r,a|1),si(r,Z()),(Ot&6)===0&&(oo=Z()+500,kr()))}break;case 13:_s(function(){var u=pr(n,1);if(u!==null){var p=qn();Gi(u,n,1,p)}}),wf(n,1)}},xn=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=qn();Gi(r,n,134217728,a)}wf(n,134217728)}},cr=function(n){if(n.tag===13){var r=Gr(n),a=pr(n,r);if(a!==null){var u=qn();Gi(a,n,r,u)}wf(n,r)}},Wo=function(){return Ge},zs=function(n,r){var a=Ge;try{return Ge=n,r()}finally{Ge=a}},Pe=function(n,r,a){switch(r){case"input":if(gt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var p=rl(u);if(!p)throw Error(t(90));wt(u),gt(u,p)}}}break;case"textarea":xe(n,a);break;case"select":r=a.value,r!=null&&L(n,!!a.multiple,r,!1)}},xt=vf,hn=_s;var Bx={usingClientEntryPoint:!1,Events:[sa,$s,rl,Ue,ct,vf]},_a={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hi(n),n===null?null:n.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Je=Vl.inject(Hx),ht=Vl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx,oi.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(r))throw Error(t(200));return kx(n,r,null,a)},oi.createRoot=function(n,r){if(!Af(n))throw Error(t(299));var a=!1,u="",p=Um;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ef(n,1,!1,null,null,a,!1,u,p),n[ur]=r.current,na(n.nodeType===8?n.parentNode:n),new Tf(r)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=hi(r),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return _s(n)},oi.hydrate=function(n,r,a){if(!Bl(r))throw Error(t(200));return Hl(null,n,r,!0,a)},oi.hydrateRoot=function(n,r,a){if(!Af(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,x="",T=Um;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),r=Im(r,null,n,1,a??null,p,!1,x,T),n[ur]=r.current,na(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new zl(r)},oi.render=function(n,r,a){if(!Bl(r))throw Error(t(200));return Hl(null,n,r,!1,a)},oi.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(_s(function(){Hl(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},oi.unstable_batchedUpdates=vf,oi.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Bl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Hl(n,r,a,!1,u)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Wm;function qx(){if(Wm)return bf.exports;Wm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bf.exports=Zx(),bf.exports}var Xm;function Kx(){if(Xm)return Gl;Xm=1;var i=qx();return Gl.createRoot=i.createRoot,Gl.hydrateRoot=i.hydrateRoot,Gl}var Qx=Kx();const Jx=gv(Qx);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ke.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...f},d)=>ke.createElement("svg",{ref:d,...t_,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:vv("lucide",o),...f},[...c.map(([h,m])=>ke.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(i,e)=>{const t=ke.forwardRef(({className:s,...o},l)=>ke.createElement(n_,{ref:l,iconNode:e,className:vv(`lucide-${e_(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=nn("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=nn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=nn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=nn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=nn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=nn("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=nn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=nn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=nn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=nn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=nn("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=nn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=nn("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=nn("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=nn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=nn("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=nn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=nn("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=nn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=nn("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=nn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=nn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=nn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=nn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=nn("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]),M_=[{key:"lidHeight",label:"フタの高さ",min:4,max:24,step:1,unit:"mm",disabledWhen:"includeLid"},{key:"lidClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"includeLid"}],S_=[{key:"stackingLipHeight",label:"高さ",min:1,max:8,step:.5,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingClearance",label:"クリアランス",min:.2,max:2,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackingGrooveClearance",label:"溝クリアランス",min:.2,max:3,step:.1,unit:"mm",disabledWhen:"stackingLip"},{key:"stackPreviewCount",label:"プレビュー段数",min:2,max:6,step:1,unit:"段",disabledWhen:"stackingLip"}];function Mv({className:i="",controls:e,settings:t,onChange:s}){return F.jsx("div",{className:`box-option-grid ${i}`.trim(),children:e.map(o=>{const l=t[o.key]??o.min,c=o.disabledWhen?!!t[o.disabledWhen]:!0,f=d=>{Number.isFinite(d)&&s(o.key,d)};return F.jsxs("label",{className:"range-control",children:[F.jsxs("span",{className:"range-control-header",children:[F.jsx("span",{className:"range-control-label",children:o.label}),F.jsxs("span",{className:"range-value-field",children:[F.jsx("input",{"aria-label":`${o.label}の数値`,className:"number-control",disabled:!c,type:"number",min:o.min,max:o.max,step:o.step,value:l,onChange:d=>f(Number(d.target.value))}),F.jsx("span",{className:"range-unit",children:o.unit})]})]}),F.jsx("input",{disabled:!c,type:"range",min:o.min,max:o.max,step:o.step,value:l,onChange:d=>f(Number(d.target.value))})]},o.key)})})}function E_({settings:i,onChange:e}){return F.jsxs("section",{className:"box-options","aria-label":"フタ設定",children:[F.jsx("div",{className:"toggle-row",children:F.jsxs("label",{children:[F.jsx("input",{checked:!!i.includeLid,type:"checkbox",onChange:t=>e("includeLid",t.target.checked)}),F.jsx("span",{children:"フタ"})]})}),F.jsx(Mv,{className:"box-option-grid-single",controls:M_,settings:i,onChange:e})]})}function w_({settings:i,onChange:e}){const t=i.stackingFootMode??"relief";return F.jsxs("section",{className:"box-options","aria-label":"スタック脚設定",children:[F.jsx("div",{className:"toggle-row",children:F.jsxs("label",{children:[F.jsx("input",{checked:!!i.stackingLip,type:"checkbox",onChange:s=>e("stackingLip",s.target.checked)}),F.jsx("span",{children:"スタック脚"})]})}),F.jsxs("div",{"aria-label":"スタック脚の方式",className:"segmented stack-foot-mode",role:"group",children:[F.jsx("button",{"aria-pressed":t==="relief",className:t==="relief"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","relief"),children:"逃げ加工"}),F.jsx("button",{"aria-pressed":t==="short",className:t==="short"?"selected":"",type:"button",onClick:()=>e("stackingFootMode","short"),children:"外周短脚"})]}),F.jsx(Mv,{className:"box-option-grid-single",controls:S_,settings:i,onChange:e})]})}const we=i=>Math.round(i*1e4)/1e4,un=(i,e,t)=>Math.min(t,Math.max(e,i)),Dt=(i,e)=>Math.abs(i-e)<1e-4;function Sv(i,e,t){const s=Number.isFinite(i)?i:0;if(!Number.isFinite(e)||e<=0||!Number.isFinite(t)||t<=0)return we(un(s,0,1));const o=Math.round(s*e/t)*t;return we(un(o/e,0,1))}function Ic(i,e,t,s,o){if(!Number.isFinite(i)||!Number.isFinite(e)||!Number.isFinite(t)||t<=0)return .5;const l=(i-e)/t;return we(un(Sv(l,s,o),.08,.92))}function Ym(i,e){return Ic(i,0,e,e,1)}function Zm(i,e){return!Number.isFinite(i)||!Number.isFinite(e)||e<=0?!1:i>=e*.08&&i<=e*.92}function T_(i,e,t){return!Number.isFinite(e)||e<=0||!Number.isFinite(t)?we(un(i,.08,.92)):Ic(i*e+t,0,e,e,1)}function Rn(i){const e=Math.round((Number.isFinite(i)?i:0)*10)/10;return`${Number.isInteger(e)?e.toFixed(0):e.toFixed(1)} mm`}function Wl(i,e,t){const s=i.axis==="vertical"?e:t;return we(i.position*s)}function A_(i,e,t,s){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(s)?i.position:we(s/o)}function oh(i,e,t=.08){const s=En(i)??Fn(1,1),o=un(t,.02,.45);if(e.axis==="vertical"){const{leftCells:f,rightCells:d}=ah(s,e);return f.length===0||d.length===0?null:{min:Math.max(...f.map(h=>h.x+o)),max:Math.min(...d.map(h=>h.x+h.width-o))}}const{topCells:l,bottomCells:c}=lh(s,e);return l.length===0||c.length===0?null:{min:Math.max(...l.map(f=>f.y+o)),max:Math.min(...c.map(f=>f.y+f.height-o))}}function qm(i,e,t,s,o,l=.08){if(!Number.isFinite(t))return!1;const c=e.axis==="vertical"?s:o;if(!Number.isFinite(c)||c<=0)return!1;const f=oh(i,e,l);if(!f)return!1;const d=t/c;return d>=f.min&&d<=f.max}function C_(i,e,t,s,o=.08){const l=e.axis==="vertical"?t:s;if(!Number.isFinite(l)||l<=0)return null;const c=oh(i,e,o);if(!c)return null;const f=we(c.min),d=we(c.max),h=we(e.position),m=we((f+d)/2);return{axis:e.axis,min:f,max:d,current:h,center:m,minMm:we(f*l),maxMm:we(d*l),currentMm:we(h*l),centerMm:we(m*l)}}function R_(i,e,t=.08){const s=En(i)??Fn(1,1),o=oh(s,e,t);return o?is(s,e,we((o.min+o.max)/2),t):s}function Ma(i,e,t,s,o,l,c=.08){if(!Number.isFinite(s))return!1;const f=t==="width"?o:l;if(!Number.isFinite(f)||f<=0)return!1;const d=En(i)??Fn(1,1);if(!d.find(S=>S.id===e))return!1;const m=un(c,.02,.45),v=s/f;if(v<m||v>1)return!1;const _=wv(d,e,t==="width"?{width:v}:{height:v},m).find(S=>S.id===e);return _?Dt(_[t],we(v)):!1}function b_(i,e,t,s){const o=i.axis==="vertical"?e:t;return!Number.isFinite(o)||o<=0||!Number.isFinite(s)?i.position:we(i.position+s/o)}function Xl(i){return i.ctrlKey?1:5}function P_(i){const e=i.key.toLowerCase();return i.ctrlKey&&e==="z"?"undo":i.ctrlKey&&e==="y"?"redo":i.ctrlKey&&e==="a"?"select-all":i.ctrlKey?"none":i.key==="Escape"?"cancel":["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)?"nudge":e==="v"?"split-vertical":e==="h"?"split-horizontal":e==="m"?"merge":e==="w"?"equalize-width":e==="d"?"equalize-depth":"none"}function L_(i){return i==="Enter"}const jl=(i,e)=>{i.some(t=>t.type===e.type)||i.push(e)},ns=(i,e,t,s)=>Math.min(e,s)-Math.max(i,t)>1e-4,$l=(i,e,t,s)=>({start:we(Math.max(i,t)),end:we(Math.min(e,s))});function Fn(i,e){const t=Math.max(1,Math.round(i)),s=Math.max(1,Math.round(e)),o=[];for(let l=0;l<s;l+=1)for(let c=0;c<t;c+=1)o.push({id:`cell-${o.length+1}`,x:we(c/t),y:we(l/s),width:we(1/t),height:we(1/s)});return o}function En(i){if(!(i!=null&&i.length))return;const e=i.map((t,s)=>{const o=un(Number.isFinite(t.x)?t.x:0,0,.98),l=un(Number.isFinite(t.y)?t.y:0,0,.98),c=un(Number.isFinite(t.width)?t.width:1,.02,1-o),f=un(Number.isFinite(t.height)?t.height:1,.02,1-l);return{id:t.id||`cell-${s+1}`,x:we(o),y:we(l),width:we(c),height:we(f)}}).filter(t=>t.width>=.02&&t.height>=.02);return e.length?e:void 0}function Ev(i,e=.08){const t=[];if(!(i!=null&&i.length))return{ok:!1,issues:[{type:"gap",message:"セルで埋まっていない隙間があります。"}]};const s=un(e,.02,.45),o=[0,1],l=[0,1];i.forEach(d=>{const h=d.x+d.width,m=d.y+d.height;(d.x<-1e-4||d.y<-1e-4||h>1.0001||m>1.0001)&&jl(t,{type:"bounds",message:"トレイ範囲外のセルがあります。"}),(d.width<s||d.height<s)&&jl(t,{type:"small-cell",message:"最小サイズ未満のセルがあります。"}),o.push(un(we(d.x),0,1)),o.push(un(we(h),0,1)),l.push(un(we(d.y),0,1)),l.push(un(we(m),0,1))});const c=[...new Set(o.map(we))].sort((d,h)=>d-h),f=[...new Set(l.map(we))].sort((d,h)=>d-h);for(let d=0;d<c.length-1;d+=1)for(let h=0;h<f.length-1;h+=1){const m=c[d],v=c[d+1],g=f[h],_=f[h+1];if(v-m<=1e-4||_-g<=1e-4)continue;const S=(m+v)/2,w=(g+_)/2,M=i.filter(y=>S>y.x+1e-4&&S<y.x+y.width-1e-4&&w>y.y+1e-4&&w<y.y+y.height-1e-4);M.length===0?jl(t,{type:"gap",message:"セルで埋まっていない隙間があります。"}):M.length>1&&jl(t,{type:"overlap",message:"セル同士が重なっています。"})}return{ok:t.length===0,issues:t}}function D_(i,e,t,s=2){const o=En(i)??Fn(1,1),l=o.find(d=>d.id===e);if(!l)return o;const c=Math.max(2,Math.min(4,Math.round(s))),f=Array.from({length:c},(d,h)=>{const m=we(h/c),v=we((h+1)/c),g=String.fromCharCode(97+h);if(t==="vertical"){const w=we(l.x+l.width*m),M=we(l.x+l.width*v);return{...l,id:`${l.id}${g}`,x:w,width:we(M-w)}}const _=we(l.y+l.height*m),S=we(l.y+l.height*v);return{...l,id:`${l.id}${g}`,y:_,height:we(S-_)}});return o.flatMap(d=>d.id===e?f:[d])}function I_(i,e,t,s){const o=En(i)??Fn(1,1),l=o.find(h=>h.id===e);if(!l)return o;const c=we(un(s,.08,.92)),d=["a","b"].map((h,m)=>{if(t==="vertical"){const _=m===0?l.x:we(l.x+l.width*c),S=we(m===0?l.width*c:l.width*(1-c));return{...l,id:`${l.id}${h}`,x:_,width:S}}const v=m===0?l.y:we(l.y+l.height*c),g=we(m===0?l.height*c:l.height*(1-c));return{...l,id:`${l.id}${h}`,y:v,height:g}});return o.flatMap(h=>h.id===e?d:[h])}function N_(i,e,t,s=2){const l=(En(i)??Fn(1,1)).find(f=>f.id===e);if(!l)return[];const c=Math.max(2,Math.min(4,Math.round(s)));return Array.from({length:c-1},(f,d)=>{const h=we((d+1)/c);if(t==="vertical"){const v=we(l.x+l.width*h);return{axis:t,x1:v,x2:v,y1:l.y,y2:we(l.y+l.height)}}const m=we(l.y+l.height*h);return{axis:t,x1:l.x,x2:we(l.x+l.width),y1:m,y2:m}})}function U_(i,e,t,s){const l=(En(i)??Fn(1,1)).find(d=>d.id===e);if(!l)return[];const c=we(un(s,.08,.92));if(t==="vertical"){const d=we(l.x+l.width*c);return[{axis:t,x1:d,x2:d,y1:l.y,y2:we(l.y+l.height)}]}const f=we(l.y+l.height*c);return[{axis:t,x1:l.x,x2:we(l.x+l.width),y1:f,y2:f}]}function zo(i){const e=En(i)??Fn(1,1),t=new Map;return e.forEach(s=>{e.forEach(o=>{if(s.id===o.id)return;const l=we(s.x+s.width),c=we(o.x+o.width),f=we(s.y+s.height),d=we(o.y+o.height);if(Dt(l,o.x)&&ns(s.y,f,o.y,d)){const h=$l(s.y,f,o.y,d),m={axis:"vertical",position:l,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Dt(c,s.x)&&ns(s.y,f,o.y,d)){const h=$l(s.y,f,o.y,d),m={axis:"vertical",position:c,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Dt(f,o.y)&&ns(s.x,s.x+s.width,o.x,o.x+o.width)){const h=$l(s.x,s.x+s.width,o.x,o.x+o.width),m={axis:"horizontal",position:f,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}if(Dt(d,s.y)&&ns(s.x,s.x+s.width,o.x,o.x+o.width)){const h=$l(s.x,s.x+s.width,o.x,o.x+o.width),m={axis:"horizontal",position:d,start:h.start,end:h.end};t.set(`${m.axis}:${m.position}:${m.start}:${m.end}`,m)}})}),[...t.values()].sort((s,o)=>s.axis!==o.axis?s.axis.localeCompare(o.axis):Dt(s.position,o.position)?s.start-o.start:s.position-o.position)}function Yl(i,e,t){return zo(i).filter(s=>s.axis===e.axis&&Dt(s.start,e.start)&&Dt(s.end,e.end)).sort((s,o)=>Math.abs(s.position-t)-Math.abs(o.position-t))[0]}function ah(i,e){let t=e.start,s=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const f=i.filter(g=>Dt(g.x+g.width,e.position)&&ns(t,s,g.y,g.y+g.height)),d=i.filter(g=>Dt(g.x,e.position)&&ns(t,s,g.y,g.y+g.height)),h=[...f,...d],m=Math.min(t,...h.map(g=>g.y)),v=Math.max(s,...h.map(g=>g.y+g.height));(f.length!==o.length||d.length!==l.length||!Dt(m,t)||!Dt(v,s))&&(c=!0,o=f,l=d,t=m,s=v)}return{leftCells:o,rightCells:l}}function lh(i,e){let t=e.start,s=e.end,o=[],l=[],c=!0;for(;c;){c=!1;const f=i.filter(g=>Dt(g.y+g.height,e.position)&&ns(t,s,g.x,g.x+g.width)),d=i.filter(g=>Dt(g.y,e.position)&&ns(t,s,g.x,g.x+g.width)),h=[...f,...d],m=Math.min(t,...h.map(g=>g.x)),v=Math.max(s,...h.map(g=>g.x+g.width));(f.length!==o.length||d.length!==l.length||!Dt(m,t)||!Dt(v,s))&&(c=!0,o=f,l=d,t=m,s=v)}return{topCells:o,bottomCells:l}}function F_(i,e){const t=En(i)??Fn(1,1),s=zo(t);if(e.axis==="vertical"){const{leftCells:d,rightCells:h}=ah(t,e);if(d.length===0||h.length===0)return[];const m=Math.min(...[...d,...h].map(g=>g.y)),v=Math.max(...[...d,...h].map(g=>g.y+g.height));return s.filter(g=>g.axis===e.axis&&Dt(g.position,e.position)&&g.start>=m-1e-4&&g.end<=v+1e-4)}const{topCells:o,bottomCells:l}=lh(t,e);if(o.length===0||l.length===0)return[];const c=Math.min(...[...o,...l].map(d=>d.x)),f=Math.max(...[...o,...l].map(d=>d.x+d.width));return s.filter(d=>d.axis===e.axis&&Dt(d.position,e.position)&&d.start>=c-1e-4&&d.end<=f+1e-4)}function is(i,e,t,s=.08){const o=En(i)??Fn(1,1),l=un(s,.02,.45);if(e.axis==="vertical"){const{leftCells:v,rightCells:g}=ah(o,e);if(v.length===0||g.length===0)return o;const _=Math.max(...v.map(M=>M.x+l)),S=Math.min(...g.map(M=>M.x+M.width-l)),w=we(un(t,_,S));return o.map(M=>{if(v.some(y=>y.id===M.id))return{...M,width:we(w-M.x)};if(g.some(y=>y.id===M.id)){const y=we(M.x+M.width);return{...M,x:w,width:we(y-w)}}return M})}const{topCells:c,bottomCells:f}=lh(o,e);if(c.length===0||f.length===0)return o;const d=Math.max(...c.map(v=>v.y+l)),h=Math.min(...f.map(v=>v.y+v.height-l)),m=we(un(t,d,h));return o.map(v=>{if(c.some(g=>g.id===v.id))return{...v,height:we(m-v.y)};if(f.some(g=>g.id===v.id)){const g=we(v.y+v.height);return{...v,y:m,height:we(g-m)}}return v})}function Zl(i,e,t,s){const o=zo(i);if(t==="vertical"){const c=s==="end"?e.x+e.width:e.x;return o.find(f=>f.axis===t&&Dt(f.position,c)&&Dt(f.start,e.y)&&Dt(f.end,e.y+e.height))}const l=s==="end"?e.y+e.height:e.y;return o.find(c=>c.axis===t&&Dt(c.position,l)&&Dt(c.start,e.x)&&Dt(c.end,e.x+e.width))}function wv(i,e,t,s=.08){let o=En(i)??Fn(1,1);if(!o.find(c=>c.id===e))return o;if(Number.isFinite(t.width)){const c=o.find(f=>f.id===e);if(c){const f=Zl(o,c,"vertical","end"),d=Zl(o,c,"vertical","start"),h=un(t.width??c.width,s,1);f?o=is(o,f,c.x+h,s):d&&(o=is(o,d,c.x+c.width-h,s))}}if(Number.isFinite(t.height)){const c=o.find(f=>f.id===e);if(c){const f=Zl(o,c,"horizontal","end"),d=Zl(o,c,"horizontal","start"),h=un(t.height??c.height,s,1);f?o=is(o,f,c.y+h,s):d&&(o=is(o,d,c.y+c.height-h,s))}}return o}function k_(i,e){const t=Dt(i.y,e.y)&&Dt(i.height,e.height),s=Dt(i.x,e.x)&&Dt(i.width,e.width),o=Dt(i.x+i.width,e.x)||Dt(e.x+e.width,i.x),l=Dt(i.y+i.height,e.y)||Dt(e.y+e.height,i.y);if(!((!t||!o)&&(!s||!l)))return{...i,x:we(Math.min(i.x,e.x)),y:we(Math.min(i.y,e.y)),width:we(Math.max(i.x+i.width,e.x+e.width)-Math.min(i.x,e.x)),height:we(Math.max(i.y+i.height,e.y+e.height)-Math.min(i.y,e.y))}}function Tv(i,e){const t=En(i)??Fn(1,1);return[...new Set(e)].map(o=>t.find(l=>l.id===o)).filter(o=>!!o)}function Gc(i,e){const t=Tv(i,e);if(t.length<2)return;const s=Math.min(...t.map(h=>h.x)),o=Math.min(...t.map(h=>h.y)),l=Math.max(...t.map(h=>h.x+h.width)),c=Math.max(...t.map(h=>h.y+h.height)),f=we((l-s)*(c-o)),d=we(t.reduce((h,m)=>h+m.width*m.height,0));if(Dt(f,d))return{cells:t,minX:we(s),minY:we(o),maxX:we(l),maxY:we(c),width:we(l-s),height:we(c-o)}}function O_(i,e,t,s){const o=Tv(i,e);if(o.length===0)return null;const l=Math.min(...o.map(_=>_.x)),c=Math.min(...o.map(_=>_.y)),f=Math.max(...o.map(_=>_.x+_.width)),d=Math.max(...o.map(_=>_.y+_.height)),h=we(f-l),m=we(d-c),v=we(h*m),g=we(o.reduce((_,S)=>_+S.width*S.height,0));return{cellCount:o.length,minX:we(l),minY:we(c),maxX:we(f),maxY:we(d),width:h,height:m,widthMm:we(h*t),depthMm:we(m*s),isRectangle:o.length>=2&&Dt(v,g)}}function Nc(i){return[...new Set(i.map(we))].sort((e,t)=>e-t)}function ql(i,e){return i.findIndex(t=>Dt(t,e))}function z_(i,e,t){const s=En(i)??Fn(1,1);if(e===t)return!1;const o=s.find(c=>c.id===e),l=s.find(c=>c.id===t);return!!(o&&l&&k_(o,l))}function B_(i,e){return!!Gc(i,e)}function H_(i,e){const t=En(i)??Fn(1,1),s=Gc(t,e);if(!s)return t;const o=new Set(s.cells.map(h=>h.id)),l=e.find(h=>o.has(h)),f={...s.cells.find(h=>h.id===l)??s.cells[0],x:s.minX,y:s.minY,width:s.width,height:s.height};let d=!1;return t.flatMap(h=>o.has(h.id)?d?[]:(d=!0,[f]):[h])}function dd(i,e,t){const s=Gc(i,e);return s?Nc(t==="vertical"?s.cells.flatMap(l=>[l.x,l.x+l.width]):s.cells.flatMap(l=>[l.y,l.y+l.height])).length>2:!1}function V_(i,e,t){const s=En(i)??Fn(1,1),o=Gc(s,e);if(!o||!dd(s,e,t))return s;const l=new Set(o.cells.map(d=>d.id));if(t==="vertical"){const d=Nc(o.cells.flatMap(m=>[m.x,m.x+m.width])),h=d.length-1;return s.map(m=>{if(!l.has(m.id))return m;const v=ql(d,m.x),g=ql(d,m.x+m.width);if(v<0||g<0)return m;const _=we(o.minX+o.width*v/h),S=we(o.minX+o.width*g/h);return{...m,x:_,width:we(S-_)}})}const c=Nc(o.cells.flatMap(d=>[d.y,d.y+d.height])),f=c.length-1;return s.map(d=>{if(!l.has(d.id))return d;const h=ql(c,d.y),m=ql(c,d.y+d.height);if(h<0||m<0)return d;const v=we(o.minY+o.height*h/f),g=we(o.minY+o.height*m/f);return{...d,y:v,height:we(g-v)}})}function Wc(i){return{...i,canUndo:i.past.length>0,canRedo:i.future.length>0}}function Km(i){return Wc({past:[],current:i,future:[]})}function Qm(i,e){return Wc({past:[...i.past,i.current],current:e,future:[]})}function G_(i){const e=i.past.at(-1);return e?Wc({past:i.past.slice(0,-1),current:e,future:[i.current,...i.future]}):i}function W_(i){const e=i.future[0];return e?Wc({past:[...i.past,i.current],current:e,future:i.future.slice(1)}):i}const $r=(i,e)=>Math.abs(i-e)<1e-4;function X_(i,e){return[...i].sort((t,s)=>t.area-s.area).find(t=>e.x>=t.x&&e.x<=t.x+t.width&&e.y>=t.y&&e.y<=t.y+t.height)}function Jm(i){return i.ctrlKey?i.currentSelection.includes(i.targetCellId)?i.currentSelection.filter(e=>e!==i.targetCellId):[...i.currentSelection,i.targetCellId]:i.shiftKey&&i.currentSelection[0]?[i.currentSelection[0],i.targetCellId]:i.dragStartCellId&&i.dragStartCellId!==i.targetCellId?[i.dragStartCellId,i.targetCellId]:[i.targetCellId]}function j_(i,e){const t=Math.min(e.start.x,e.end.x),s=Math.max(e.start.x,e.end.x),o=Math.min(e.start.y,e.end.y),l=Math.max(e.start.y,e.end.y);return i.filter(c=>Math.min(c.x+c.width,s)-Math.max(c.x,t)>0&&Math.min(c.y+c.height,l)-Math.max(c.y,o)>0).map(c=>c.id)}function $_(i,e){if($r(i.y,e.y)&&$r(i.height,e.height)){if($r(i.x+i.width,e.x))return"right";if($r(e.x+e.width,i.x))return"left"}if($r(i.x,e.x)&&$r(i.width,e.width)){if($r(i.y+i.height,e.y))return"down";if($r(e.y+e.height,i.y))return"up"}}const eg=["left","right","up","down"];function Y_(i,e){const t=i.find(s=>s.id===e);return t?i.filter(s=>s.id!==e).map(s=>({direction:$_(t,s),cellId:s.id})).filter(s=>!!s.direction&&z_(i,e,s.cellId)).sort((s,o)=>eg.indexOf(s.direction)-eg.indexOf(o.direction)):[]}function Z_(i){if(i.shiftKey){if(i.key==="ArrowLeft")return"left";if(i.key==="ArrowRight")return"right";if(i.key==="ArrowUp")return"up";if(i.key==="ArrowDown")return"down"}}const q_={width:100,depth:100,height:20,wallThickness:2,floorThickness:2,cornerRadius:4,columns:1,rows:1,kind:"tray",includeLid:!1,lidHeight:8,lidClearance:.6,stackingLip:!1,stackingLipHeight:3,stackingClearance:.6,stackingGrooveClearance:.6,stackingFootMode:"relief",stackPreviewCount:2},ai=(i,e,t)=>Math.min(t,Math.max(e,i)),Wi=i=>Math.round(i*10)/10,K_=i=>Math.round(i*1e4)/1e4;function tg(i,e){if(!i)return;const t=Array.from({length:e},(o,l)=>Math.max(.1,Number.isFinite(i[l])?i[l]:1)),s=t.reduce((o,l)=>o+l,0);return t.map(o=>K_(o/s))}function Ni(i){const e=Wi(ai(i.width,40,240)),t=Wi(ai(i.depth,40,240)),s=Wi(ai(i.height,8,120)),o=Wi(ai(i.wallThickness,1.2,8)),l=Wi(ai(i.floorThickness,1.2,8)),c=Wi(ai(i.cornerRadius,0,18)),f=Wi(ai(i.lidHeight??8,4,24)),d=Wi(ai(i.lidClearance??.6,.2,2)),h=Wi(ai(i.stackingLipHeight??3,1,8)),m=Wi(ai(i.stackingClearance??.6,.2,2)),v=Wi(ai(i.stackingGrooveClearance??.6,.2,3)),g=Math.round(ai(i.stackPreviewCount??2,2,6)),_={width:e,depth:t,height:s,wallThickness:o,floorThickness:l,cornerRadius:c,columns:Math.round(ai(i.columns,1,8)),rows:Math.round(ai(i.rows,1,8)),kind:i.kind==="box"?"box":"tray",includeLid:!!i.includeLid,lidHeight:f,lidClearance:d,stackingLip:!!i.stackingLip,stackingLipHeight:h,stackingClearance:m,stackingGrooveClearance:v,stackingFootMode:i.stackingFootMode==="short"?"short":"relief",stackPreviewCount:g},S=En(i.layout);return{..._,columnRatios:tg(i.columnRatios,_.columns),rowRatios:tg(i.rowRatios,_.rows),...S?{layout:S}:{}}}function Kl(i){var o;const e=Ni(i),t=[e.width,e.depth,e.height].map(l=>String(Math.round(l))),s=(o=e.layout)!=null&&o.length?`${e.layout.length}cells`:`${e.columns}x${e.rows}`;return`hako-forge-${t.join("x")}-${s}.stl`}function Xc(i,e){const t=Ni(i),s=!!t.stackingLip,o=t.stackPreviewCount??2,l=s?Math.min(6,Math.max(2,Math.round(o))):1;return{clearanceMm:t.stackingClearance??.6,enabled:s,stackCount:l,stackedHeightMm:t.height*l}}const Q_=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4,J_=i=>Math.round(i*10)/10;function ng(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function ey(i){const e=ng(i.columns,i.columnRatios),t=ng(i.rows,i.rowRatios),s=[0],o=[0];e.forEach(c=>{s.push(s[s.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let f=0;f<i.columns;f+=1)l.push({id:`stack-cell-${l.length+1}`,x:s[f],y:o[c],width:s[f+1]-s[f],height:o[c+1]-o[c]});return En(l)??[]}function ty(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),s=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,s-i.wallThickness*2),c=-t/2,f=t/2,d=-s/2,h=s/2,m=-o/2,v=o/2,g=-l/2,_=l/2;return[{minX:c,maxX:f,minZ:d,maxZ:g},{minX:c,maxX:f,minZ:_,maxZ:h},{minX:c,maxX:m,minZ:g,maxZ:_},{minX:v,maxX:f,minZ:g,maxZ:_}]}function ny(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),s=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-s/2+i.start*s,maxZ:-s/2+i.end*s}}const l=-s/2+i.position*s;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}function Oa(i){var f;const e=Ni(i);if(!e.stackingLip)return{enabled:!1,hasInterference:!1,interferingHandles:[],issueCount:0,message:"スタック段差は無効です。",recommendedReliefGapMm:0};const t=(f=e.layout)!=null&&f.length?e.layout:ey(e),s=zo(t).map(d=>({handle:d,rect:ny(d,e)})),o=ty(e),l=J_(e.wallThickness+e.stackingGrooveClearance*2),c=s.reduce((d,h)=>d+o.filter(m=>Q_(h.rect,m)).length,0);return{enabled:!0,hasInterference:!1,interferingHandles:[],issueCount:0,message:e.stackingFootMode==="short"?"スタック脚は外周寄りの短い脚で仕切りを避けています。":c>0?"スタック脚は仕切り位置を自動で逃げ加工しています。":"スタック脚は仕切りと干渉していません。",recommendedReliefGapMm:l}}function Sa({title:i,children:e,className:t="",hideTitle:s=!1}){return F.jsxs("section",{"aria-label":i,className:`layout-tool-section ${t}`.trim(),children:[s?null:F.jsx("div",{className:"layout-tool-section-title",children:F.jsx("h3",{children:i})}),e]})}const Yr=i=>Math.round(i*10)/10,Ci=i=>JSON.stringify(i.map(e=>[e.id,e.x,e.y,e.width,e.height])),Ri=i=>`${i.axis}:${i.position}:${i.start}:${i.end}`;function Ea(i,e,t,s,o,l){const c=Math.min(l,s/2,o/2);i.beginPath(),i.moveTo(e+c,t),i.lineTo(e+s-c,t),i.quadraticCurveTo(e+s,t,e+s,t+c),i.lineTo(e+s,t+o-c),i.quadraticCurveTo(e+s,t+o,e+s-c,t+o),i.lineTo(e+c,t+o),i.quadraticCurveTo(e,t+o,e,t+o-c),i.lineTo(e,t+c),i.quadraticCurveTo(e,t,e+c,t),i.closePath()}function iy({settings:i,onLayoutChange:e}){const t=ke.useRef(null),s=ke.useRef([]),o=ke.useRef([]),l=ke.useRef(null),c=ke.useRef(""),f=ke.useRef(null),d=ke.useRef(null),h=ke.useRef(null),m=ke.useRef(null),v=ke.useRef(!1),g=ke.useRef(!1),_=ke.useMemo(()=>i.layout??Fn(i.columns,i.rows),[i.columns,i.layout,i.rows]),S=ke.useMemo(()=>zo(_),[_]),[w,M]=ke.useState(_[0]?[_[0].id]:[]),[y,U]=ke.useState("vertical"),[P,A]=ke.useState(2),[D,B]=ke.useState(.5),[k,$]=ke.useState(null),[b,R]=ke.useState(null),[H,de]=ke.useState(null),[V,Y]=ke.useState(null),[Q,G]=ke.useState(""),[ee,O]=ke.useState(""),[te,se]=ke.useState(null),[z,ae]=ke.useState(null),[De,oe]=ke.useState(null),[pe,Ce]=ke.useState(!1),[ye,Re]=ke.useState(!1),[He,nt]=ke.useState("crosshair"),[Ft,wt]=ke.useState(""),[Gt,j]=ke.useState(!0),[wn,Tt]=ke.useState(!1),[gt,tt]=ke.useState(!1),[Rt,Ye]=ke.useState(()=>Km(_)),L=w.map(X=>_.find(N=>N.id===X)).filter(X=>!!X),E=L[0]??_[0],ie=Ft?_.find(X=>X.id===Ft):void 0,xe=E?Yr(E.width*i.width):0,_e=E?Yr(E.height*i.depth):0,me=H??String(xe),Ke=V??String(_e),Ie=H===null?Number.NaN:Number(H),Ve=V===null?Number.NaN:Number(V),vt=L.length===1&&H!==null&&H!==""&&!Ma(_,E.id,"width",Ie,i.width,i.depth),Te=L.length===1&&V!==null&&V!==""&&!Ma(_,E.id,"height",Ve,i.width,i.depth),je=vt||Te,Ze=E?y==="vertical"?E.width*i.width:E.height*i.depth:0,ot=Ic(D,0,1,Ze,1),We=Yr(Ze*.08),yt=Yr(Ze*.92),mt=Yr(ot*Ze),zt=k??String(mt),K=k===null?Number.NaN:Number(k),Pe=k!==null&&k!==""&&!Zm(K,Ze),he=te?Yr(Wl(te,i.width,i.depth)):0,ge=b??String(he),Oe=b===null?Number.NaN:Number(b),Ue=te!==null&&b!==null&&b!==""&&!qm(_,te,Oe,i.width,i.depth),ct=ke.useMemo(()=>Ev(_),[_]),xt=ke.useMemo(()=>Oa({...i,layout:_}),[_,i]),hn=ke.useMemo(()=>new Set(xt.interferingHandles.map(Ri)),[xt.interferingHandles]),_t=L.map(X=>X.id),jt=ke.useMemo(()=>L.length>=2?O_(_,_t,i.width,i.depth):null,[_,L.length,_t,i.depth,i.width]),rn=L.length>=2&&B_(_,_t),Fi=L.length>=2&&dd(_,_t,"vertical"),fi=L.length>=2&&dd(_,_t,"horizontal"),$n=E&&L.length===1?Y_(_,E.id):[],Bn=te?Ri(te):"",kn=te?C_(_,te,i.width,i.depth):null,lr=kn!==null&&Math.abs(kn.center-kn.current)>1e-4,di=ke.useMemo(()=>{const X=ee||Q||Bn,N=S.find(ve=>Ri(ve)===X);return N?new Set(F_(_,N).map(Ri)):new Set},[ee,Q,_,S,Bn]),Yn=ke.useMemo(()=>S.find(X=>Ri(X)===Q),[Q,S]),br=ke.useMemo(()=>z||ee||!Yn?null:{axis:Yn.axis,position:Yn.position,start:Yn.start,end:Yn.end,valueMm:Wl(Yn,i.width,i.depth)},[ee,Yn,z,i.depth,i.width]),Os=ke.useMemo(()=>z||ee||Yn||!te?null:{axis:te.axis,position:te.position,start:te.start,end:te.end,valueMm:Wl(te,i.width,i.depth)},[ee,Yn,z,te,i.depth,i.width]),qt=z??br??Os,Pr=(te==null?void 0:te.axis)==="vertical"?"縦壁":"横壁",ls=te?Math.max(1,di.size):0,Lr=E&&L.length===1?P===2?U_(_,E.id,y,ot):N_(_,E.id,y,P):[];ke.useEffect(()=>{L.length===0&&_[0]&&M([_[0].id])},[_,L.length]),ke.useEffect(()=>{(P!==2||L.length!==1)&&(Ce(!1),Re(!1),$(null))},[L.length,P]),ke.useEffect(()=>{$(null)},[E==null?void 0:E.id,y]),ke.useEffect(()=>{de(null),Y(null)},[E==null?void 0:E.id]),ke.useEffect(()=>{R(null)},[Bn]),ke.useEffect(()=>{v.current||Ci(Rt.current)!==Ci(_)&&Ye(Km(_))},[Rt.current,_]),ke.useEffect(()=>{const X=t.current;if(!X)return;const N=X.getContext("2d");if(!N)return;const ve=X.getBoundingClientRect(),rt=window.devicePixelRatio||1;X.width=Math.max(1,Math.round(ve.width*rt)),X.height=Math.max(1,Math.round(ve.height*rt)),N.setTransform(rt,0,0,rt,0,0),N.clearRect(0,0,ve.width,ve.height);const ft=24,st=i.width/i.depth,Lt=ve.width-ft*2,pn=ve.height-ft*2;let Ge=Lt,St=Ge/st;St>pn&&(St=pn,Ge=St*st);const kt=(ve.width-Ge)/2,xn=(ve.height-St)/2;l.current={originX:kt,originY:xn,modelWidth:Ge,modelHeight:St};const cr=Math.max(3,Math.min(9,i.wallThickness/i.width*Ge)),Wo=[];if(N.save(),N.shadowColor="rgba(27, 31, 35, 0.16)",N.shadowBlur=18,N.shadowOffsetY=8,Ea(N,kt,xn,Ge,St,7),N.fillStyle="#f7f8f8",N.fill(),N.restore(),Gt&&!gt&&(N.fillStyle="rgba(45, 54, 62, 0.44)",N.font="800 11px Inter, system-ui, sans-serif",N.textAlign="center",N.fillText(`${Yr(i.width)} mm`,kt+Ge/2,xn-8),N.save(),N.translate(kt-10,xn+St/2),N.rotate(-Math.PI/2),N.fillText(`${Yr(i.depth)} mm`,0,0),N.restore()),_.forEach(Ne=>{const Wt=kt+Ne.x*Ge+(Ne.x<=1e-4?0:cr/2),Xt=xn+Ne.y*St+(Ne.y<=1e-4?0:cr/2),Zt=Ne.x+Ne.width>=.9999,Kt=Ne.y+Ne.height>=.9999,mn=Ne.width*Ge-(Ne.x<=1e-4?0:cr/2)-(Zt?0:cr/2),_n=Ne.height*St-(Ne.y<=1e-4?0:cr/2)-(Kt?0:cr/2),on=w.includes(Ne.id),ki=Ne.id===Ft,Ji=rn&&on,pi=L.length>1&&on&&!rn;if(Wo.push({id:Ne.id,x:Wt,y:Xt,width:mn,height:_n,area:mn*_n}),N.save(),N.shadowColor=on?"rgba(23, 141, 224, 0.2)":"rgba(20, 24, 28, 0.1)",N.shadowBlur=on?18:10,N.shadowOffsetY=on?6:4,Ea(N,Wt,Xt,mn,_n,6),N.fillStyle=on?"#ffffff":"#f1f3f3",N.fill(),N.restore(),Ea(N,Wt,Xt,mn,_n,6),N.strokeStyle=on?Ji?"#198964":pi?"#c77700":"#178de0":ki?"rgba(23, 141, 224, 0.48)":"rgba(54, 64, 72, 0.18)",N.lineWidth=on?2.5:ki?1.8:1,N.stroke(),Gt&&(!gt||on||ki)&&mn>58&&_n>34){N.fillStyle=on?Ji?"#198964":pi?"#a86600":"#167ec0":ki?"#167ec0":"rgba(82, 92, 100, 0.45)",N.font=mn>84&&_n>48?"800 11px Inter, system-ui, sans-serif":"800 10px Inter, system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle";const us=mn>84&&_n>48?`${Rn(Ne.width*i.width)} x ${Rn(Ne.height*i.depth)}`:`${Rn(Ne.width*i.width)}`;N.fillText(us,Wt+mn/2,Xt+_n/2)}}),jt){const Ne=kt+jt.minX*Ge,Wt=xn+jt.minY*St,Xt=jt.width*Ge,Zt=jt.height*St,Kt=jt.isRectangle?"#198964":"#c77700",mn=`W: ${Rn(jt.widthMm)}`,_n=`D: ${Rn(jt.depthMm)}`;N.save(),N.strokeStyle=Kt,N.lineWidth=2,N.setLineDash([7,5]),N.strokeRect(Ne-3,Wt-3,Xt+6,Zt+6),N.restore(),N.save(),N.font="850 11px Inter, system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillStyle=Kt,N.fillText(mn,Ne+Xt/2,Math.max(11,Wt-13)),N.save(),N.translate(Math.max(14,Ne-15),Wt+Zt/2),N.rotate(-Math.PI/2),N.fillText(_n,0,0),N.restore(),N.restore()}if(De){const Ne=Math.min(De.start.x,De.end.x),Wt=Math.min(De.start.y,De.end.y),Xt=Math.abs(De.end.x-De.start.x),Zt=Math.abs(De.end.y-De.start.y);N.save(),N.fillStyle="rgba(23, 141, 224, 0.08)",N.strokeStyle="#178de0",N.lineWidth=1.5,N.setLineDash([5,5]),N.fillRect(Ne,Wt,Xt,Zt),N.strokeRect(Ne,Wt,Xt,Zt),N.restore()}Lr.length>0&&(N.save(),N.strokeStyle=pe||ye?"#198964":"#f08a24",N.lineWidth=pe||ye?4:2.5,N.setLineDash([8,6]),N.lineCap="round",Lr.forEach(Ne=>{N.beginPath(),N.moveTo(kt+Ne.x1*Ge,xn+Ne.y1*St),N.lineTo(kt+Ne.x2*Ge,xn+Ne.y2*St),N.stroke()}),N.restore());const zs=S.map(Ne=>{if(Ne.axis==="vertical"){const Xt=kt+Ne.position*Ge;return{...Ne,key:Ri(Ne),x1:Xt,x2:Xt,y1:xn+Ne.start*St,y2:xn+Ne.end*St}}const Wt=xn+Ne.position*St;return{...Ne,key:Ri(Ne),x1:kt+Ne.start*Ge,x2:kt+Ne.end*Ge,y1:Wt,y2:Wt}});if(zs.forEach(Ne=>{const Wt=Ne.key===ee,Xt=Ne.key===Q,Zt=Ne.key===Bn,Kt=di.has(Ne.key),mn=hn.has(Ne.key);N.save(),N.strokeStyle=Wt||ee&&Kt||Zt?"#198964":mn?"#d05d28":Xt||Kt?"#178de0":"rgba(22, 137, 208, 0.28)",N.lineWidth=Wt||Xt||Zt||Kt||mn?4:2,N.lineCap="round",N.beginPath(),N.moveTo(Ne.x1,Ne.y1),N.lineTo(Ne.x2,Ne.y2),N.stroke(),N.restore()}),wn&&zs.forEach(Ne=>{const Wt=Ne.key===ee,Xt=Ne.key===Q,Zt=Ne.key===Bn,Kt=di.has(Ne.key);if(!(!gt||Wt||Xt||Zt||Kt))return;const _n=Rn(Wl(Ne,i.width,i.depth)),on=Ne.axis==="vertical"?Ne.x1:(Ne.x1+Ne.x2)/2,ki=Ne.axis==="vertical"?(Ne.y1+Ne.y2)/2:Ne.y1,Ji=Math.max(54,N.measureText(_n).width+18),pi=22,Xo=Math.min(ve.width-Ji-8,Math.max(8,on+(Ne.axis==="vertical"?10:-Ji/2))),us=Math.min(ve.height-pi-8,Math.max(8,ki+(Ne.axis==="vertical"?-pi/2:10)));N.save(),N.shadowColor="rgba(20, 24, 28, 0.16)",N.shadowBlur=10,N.shadowOffsetY=4,Ea(N,Xo,us,Ji,pi,6),N.fillStyle=Wt||Zt||Kt?"#198964":"#11171b",N.fill(),N.shadowColor="transparent",N.fillStyle="#ffffff",N.font="850 11px Inter, system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText(_n,Xo+Ji/2,us+pi/2),N.restore()}),qt){const Ne=Rn(qt.valueMm),Wt=qt.axis==="vertical"?kt+qt.position*Ge:kt+(qt.start+qt.end)/2*Ge,Xt=qt.axis==="vertical"?xn+(qt.start+qt.end)/2*St:xn+qt.position*St;N.save(),N.setLineDash([5,6]),N.lineWidth=1.5,N.strokeStyle="rgba(25, 137, 100, 0.44)",N.beginPath(),qt.axis==="vertical"?(N.moveTo(Wt,xn),N.lineTo(Wt,xn+St)):(N.moveTo(kt,Xt),N.lineTo(kt+Ge,Xt)),N.stroke(),N.restore(),N.save(),N.font="850 12px Inter, system-ui, sans-serif";const Zt=Math.max(66,N.measureText(Ne).width+22),Kt=28,mn=qt.axis==="vertical"?12:0,_n=qt.axis==="vertical"?-Kt/2:-Kt-12,on=Math.min(ve.width-Zt-10,Math.max(10,Wt+mn-(qt.axis==="vertical"?0:Zt/2))),ki=Math.min(ve.height-Kt-10,Math.max(10,Xt+_n));N.shadowColor="rgba(20, 24, 28, 0.22)",N.shadowBlur=14,N.shadowOffsetY=5,Ea(N,on,ki,Zt,Kt,7),N.fillStyle="#11171b",N.fill(),N.shadowColor="transparent",N.fillStyle="#ffffff",N.textAlign="center",N.textBaseline="middle",N.fillText(Ne,on+Zt/2,ki+Kt/2),N.restore()}s.current=Wo.sort((Ne,Wt)=>Ne.area-Wt.area),o.current=zs},[ee,rn,di,Q,pe,ye,_,S,L.length,w,jt,Bn,De,Gt,gt,wn,Lr,hn,i.depth,i.wallThickness,i.width,qt,Ft]);const hi=(X,N)=>{Ci(_)!==Ci(X)&&(Ye(ve=>Qm(ve,X)),e(X),M(N))},cs=(X,N)=>{if(!E||!Number.isFinite(N)||!Ma(_,E.id,X,N,i.width,i.depth))return;const ve=X==="width"?N/i.width:N/i.depth,rt=wv(_,E.id,X==="width"?{width:ve}:{height:ve});hi(rt,[E.id])},C=X=>{const N=X.currentTarget.getBoundingClientRect();return{x:X.clientX-N.left,y:X.clientY-N.top}},J=X=>{var ft;const N=C(X),ve=8;return(ft=o.current.map(st=>{const Lt=st.axis==="vertical"?Math.abs(N.x-st.x1):Math.abs(N.y-st.y1),pn=st.axis==="vertical"?N.y>=Math.min(st.y1,st.y2)-ve&&N.y<=Math.max(st.y1,st.y2)+ve:N.x>=Math.min(st.x1,st.x2)-ve&&N.x<=Math.max(st.x1,st.x2)+ve;return{handle:st,distance:Lt,inRange:pn}}).filter(st=>st.inRange&&st.distance<=ve).sort((st,Lt)=>st.distance-Lt.distance)[0])==null?void 0:ft.handle},ce=X=>{const N=l.current,ve=P===2?Lr[0]:void 0;if(!N||!ve||!E||L.length!==1)return!1;const rt=C(X),ft=10;if(ve.axis==="vertical"){const Ge=N.originX+ve.x1*N.modelWidth,St=N.originY+ve.y1*N.modelHeight,kt=N.originY+ve.y2*N.modelHeight;return Math.abs(rt.x-Ge)<=ft&&rt.y>=Math.min(St,kt)-ft&&rt.y<=Math.max(St,kt)+ft}const st=N.originY+ve.y1*N.modelHeight,Lt=N.originX+ve.x1*N.modelWidth,pn=N.originX+ve.x2*N.modelWidth;return Math.abs(rt.y-st)<=ft&&rt.x>=Math.min(Lt,pn)-ft&&rt.x<=Math.max(Lt,pn)+ft},ue=X=>{const N=l.current;if(!N||!E||L.length!==1)return;const ve=C(X),rt=y==="vertical"?(ve.x-N.originX)/N.modelWidth:(ve.y-N.originY)/N.modelHeight,ft=Ic(rt,y==="vertical"?E.x:E.y,y==="vertical"?E.width:E.height,Ze,Xl(X));B(ft)},Z=X=>{const N=m.current,ve=l.current,rt=d.current;if(!N||!ve||!rt)return;const ft=C(X),st=N.axis==="vertical"?(ft.x-ve.originX)/ve.modelWidth:(ft.y-ve.originY)/ve.modelHeight,Lt=N.axis==="vertical"?i.width:i.depth,pn=Xl(X),Ge=Sv(st,Lt,pn),St=is(rt,N,Ge),kt=Yl(St,N,Ge)??{...N,position:Ge};h.current=St,se(kt),G(Ri(kt)),ae({axis:kt.axis,position:kt.position,start:kt.start,end:kt.end,valueMm:kt.position*Lt}),e(St)},Ee=X=>{if(!E)return;const N=P===2?I_(_,E.id,X,ot):D_(_,E.id,X,P);U(X),hi(N,[`${E.id}a`])},Le=()=>{if(!rn)return;const X=H_(_,_t);hi(X,[L[0].id])},ze=X=>{if(!(X==="vertical"?Fi:fi))return;const ve=V_(_,_t,X);hi(ve,_t)},Xe=X=>{if(!E)return;const N=$n.find(ve=>ve.direction===X);N&&(se(null),ae(null),Re(!1),M([E.id,N.cellId]))},dt=()=>{hi(Fn(1,1),["cell-1"])},ut=()=>{const X=G_(Rt);Ye(X),e(X.current),M(X.current[0]?[X.current[0].id]:[])},Je=()=>{const X=W_(Rt);Ye(X),e(X.current),M(X.current[0]?[X.current[0].id]:[])},ht=X=>X_(s.current,C(X)),Nt=X=>{if(X.target instanceof HTMLInputElement||X.target instanceof HTMLSelectElement||X.target instanceof HTMLTextAreaElement)return;const N=Z_(X);if(N&&E&&L.length===1){const St=$n.find(kt=>kt.direction===N);if(St){X.preventDefault(),se(null),ae(null),Re(!1),M([E.id,St.cellId]);return}}const ve=P_(X);if(ve==="split-vertical"){X.preventDefault(),Ee("vertical");return}if(ve==="split-horizontal"){X.preventDefault(),Ee("horizontal");return}if(ve==="merge"){X.preventDefault(),Le();return}if(ve==="select-all"){X.preventDefault(),se(null),ae(null),Re(!1),M(_.map(St=>St.id));return}if(ve==="equalize-width"){X.preventDefault(),ze("vertical");return}if(ve==="equalize-depth"){X.preventDefault(),ze("horizontal");return}if(ve==="undo"){X.preventDefault(),ut();return}if(ve==="redo"){X.preventDefault(),Je();return}if(ve==="cancel"){X.preventDefault(),M(E?[E.id]:[]),se(null),ae(null),Re(!1);return}if(P===2&&E&&L.length===1&&(ye||pe)){if(L_(X.key)){X.preventDefault(),Ee(y),Re(!1);return}const St=y==="vertical"?X.key==="ArrowLeft"?-1:X.key==="ArrowRight"?1:0:X.key==="ArrowUp"?-1:X.key==="ArrowDown"?1:0;if(St!==0){X.preventDefault();const kt=St*Xl(X);B(xn=>T_(xn,Ze,kt)),Re(!0);return}}const rt=te??Yn;if(!rt)return;const ft=rt.axis==="vertical"?X.key==="ArrowLeft"?-1:X.key==="ArrowRight"?1:0:X.key==="ArrowUp"?-1:X.key==="ArrowDown"?1:0;if(ft===0)return;X.preventDefault();const st=ft*Xl(X),Lt=b_(rt,i.width,i.depth,st),pn=is(_,rt,Lt);if(Ci(_)===Ci(pn))return;const Ge=Yl(pn,rt,Lt)??{...rt,position:Lt};se(Ge),G(Ri(Ge)),hi(pn,w)},Ut=X=>{ce(X)&&(X.preventDefault(),Re(!1),Ee(y))},Yt=X=>{const N=te;if(!N||!Number.isFinite(X))return;const ve=A_(N,i.width,i.depth,X),rt=is(_,N,ve);if(Ci(_)===Ci(rt))return;const ft=Yl(rt,N,ve)??{...N,position:ve};se(ft),G(Ri(ft)),hi(rt,w)},bt=()=>{if(!te||!kn)return;const X=R_(_,te);if(Ci(_)===Ci(X))return;const N=Yl(X,te,kn.center)??te;se(N),G(Ri(N)),ae({axis:N.axis,position:N.position,start:N.start,end:N.end,valueMm:N.position*(N.axis==="vertical"?i.width:i.depth)}),R(null),hi(X,[E.id])},it=()=>{se(null),ae(null),O(""),G(""),R(null)},sn=te?["壁選択中",Pr,`壁位置 ${Rn(he)}`,`連動壁 ${ls}本`,...xt.hasInterference?[`スタック干渉 ${xt.interferingHandles.length}本`]:[],...xt.hasInterference?[`推奨逃げ幅 ${xt.recommendedReliefGapMm} mm`]:[],"スナップ 5 mm","Ctrl微調整 1 mm"]:[L.length>=2?`${L.length}件選択`:"選択中",L.length===1?"分割可":rn?"結合準備OK":"範囲確認",L.length>=2?Fi||fi?"均等化可":"均等化不可":$n.length>0?"隣接セルあり":"寸法編集可",ie?`ホバー ${Rn(ie.width*i.width)} x ${Rn(ie.height*i.depth)}`:gt?"選択のみ表示":"全体表示",...xt.hasInterference?[`スタック干渉 ${xt.interferingHandles.length}本`]:[],...xt.hasInterference?[`推奨逃げ幅 ${xt.recommendedReliefGapMm} mm`]:[]],Ct=X=>{const N=J(X);if(N){X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId),Re(!1),d.current=_,h.current=_,m.current=N,v.current=!0,se(N),ae({axis:N.axis,position:N.position,start:N.start,end:N.end,valueMm:N.position*(N.axis==="vertical"?i.width:i.depth)});const ft=Ri(N);O(ft),G(ft),nt(N.axis==="vertical"?"ew-resize":"ns-resize");return}if(ce(X)){X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId),g.current=!0,Ce(!0),Re(!0),se(null),ae(null),nt(y==="vertical"?"ew-resize":"ns-resize"),ue(X);return}const ve=ht(X);if(!ve)return;se(null),ae(null),Re(!1),X.currentTarget.focus(),X.currentTarget.setPointerCapture(X.pointerId);const rt=C(X);f.current=rt,c.current=ve.id,M(Jm({currentSelection:w,targetCellId:ve.id,shiftKey:X.shiftKey,ctrlKey:X.ctrlKey,dragStartCellId:""}))},Tn=X=>{if(g.current){X.buttons===1&&ue(X);return}if(m.current){X.buttons===1&&Z(X);return}const N=J(X),ve=!N&&ce(X),rt=!N&&!ve?ht(X):void 0;if(G((N==null?void 0:N.key)??""),wt((rt==null?void 0:rt.id)??""),Ce(ve),nt(N?N.axis==="vertical"?"ew-resize":"ns-resize":ve?y==="vertical"?"ew-resize":"ns-resize":"crosshair"),X.buttons!==1||!c.current)return;const ft=f.current,st=C(X);if(ft&&Math.hypot(st.x-ft.x,st.y-ft.y)>6){const Ge={start:ft,end:st},St=j_(s.current,Ge);oe(Ge),St.length>0&&M(St);return}const Lt=ht(X);Lt&&M(Jm({currentSelection:w,targetCellId:Lt.id,shiftKey:!1,dragStartCellId:c.current}))},ei=()=>{const X=h.current,N=d.current;m.current&&X&&N&&Ci(N)!==Ci(X)&&(Ye(ve=>Qm(ve,X)),e(X)),m.current=null,d.current=null,h.current=null,v.current=!1,g.current=!1,O(""),ae(null),oe(null),Ce(!1),wt(""),f.current=null,c.current=""};return F.jsxs("section",{className:"layout-editor","aria-label":"レイアウト編集",children:[F.jsxs(Sa,{title:"キャンバス",className:"layout-canvas-section",hideTitle:!0,children:[F.jsxs("div",{className:"layout-canvas-controls","aria-label":"キャンバス表示",children:[F.jsxs("button",{type:"button","aria-pressed":Gt,title:"セル寸法ラベルを表示",onClick:()=>j(X=>!X),children:[F.jsx(m_,{size:14,"aria-hidden":"true"}),"寸法"]}),F.jsxs("button",{type:"button","aria-pressed":wn,title:"壁位置ラベルを表示",onClick:()=>Tt(X=>!X),children:[F.jsx(h_,{size:14,"aria-hidden":"true"}),"壁位置"]}),F.jsxs("button",{type:"button","aria-pressed":gt,title:"選択中のセルと壁だけラベル表示",onClick:()=>tt(X=>!X),children:[F.jsx(jm,{size:14,"aria-hidden":"true"}),"選択のみ"]})]}),F.jsx("div",{className:"layout-canvas-wrap",children:F.jsx("canvas",{ref:t,"aria-label":"セルレイアウト",title:"セルをクリックまたはドラッグして選択",className:"layout-canvas",tabIndex:0,style:{cursor:He},onKeyDown:Nt,onPointerDown:Ct,onPointerMove:Tn,onPointerUp:ei,onPointerLeave:ei,onDoubleClick:Ut})})]}),F.jsx(Sa,{title:"分割",children:F.jsxs("div",{className:"layout-split-controls","aria-label":"選択セルの分割",children:[F.jsxs("select",{"aria-label":"分割数",title:"分割数を選択",value:P,onChange:X=>A(Number(X.target.value)),children:[F.jsx("option",{value:2,children:"2分割"}),F.jsx("option",{value:3,children:"3分割"}),F.jsx("option",{value:4,children:"4分割"})]}),F.jsxs("button",{type:"button","aria-pressed":y==="vertical",title:"選択セルを縦方向に分割",onPointerEnter:()=>U("vertical"),onFocus:()=>U("vertical"),onClick:()=>Ee("vertical"),children:[F.jsx($m,{size:15,"aria-hidden":"true"}),"縦に分割"]}),F.jsxs("button",{type:"button","aria-pressed":y==="horizontal",title:"選択セルを横方向に分割",onPointerEnter:()=>U("horizontal"),onFocus:()=>U("horizontal"),onClick:()=>Ee("horizontal"),children:[F.jsx($m,{size:15,"aria-hidden":"true"}),"横に分割"]}),P===2?F.jsxs("label",{className:Pe?"split-position-control invalid":"split-position-control",children:[F.jsx("span",{children:"分割位置"}),F.jsx("input",{type:"number",min:We,max:yt,step:1,value:zt,"aria-invalid":Pe,disabled:L.length!==1,onChange:X=>{const N=X.currentTarget.value,ve=Number(N);$(N),Zm(ve,Ze)&&B(Ym(ve,Ze))},onBlur:X=>{const N=Number(X.currentTarget.value);Number.isFinite(N)&&Ze>0&&B(Ym(N,Ze)),$(null)},onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&($(null),X.currentTarget.blur())}}),F.jsx("span",{children:"mm"})]}):null,P===2&&Pe?F.jsxs("p",{className:"split-position-warning",role:"alert",children:["有効範囲 ",Rn(We)," 〜"," ",Rn(yt)]}):null]})}),F.jsxs(Sa,{title:"選択セル",children:[F.jsx("p",{className:te?"layout-summary wall":"layout-summary",children:te?`選択壁 ${Pr} / ${Rn(he)}`:L.length>=2?`選択セル ${L.length}件 / ${rn?"結合できます":"矩形範囲を選択してください"}`:`選択セル ${xe} x ${_e} mm / ${_.length} セル`}),F.jsx("div",{className:"layout-status-chips","aria-label":"レイアウト編集の状態",children:sn.map(X=>F.jsx("span",{children:X},X))}),F.jsxs("div",{className:"layout-actions","aria-label":"選択セルの操作",children:[F.jsxs("button",{type:"button",title:"選択した隣接セルを結合",onClick:Le,disabled:!rn,children:[F.jsx(d_,{size:15,"aria-hidden":"true"}),"結合"]}),F.jsxs("button",{type:"button",title:"選択セルの幅を均等化",onClick:()=>ze("vertical"),disabled:!Fi,children:[F.jsx(Df,{size:15,"aria-hidden":"true"}),"幅を均等"]}),F.jsxs("button",{type:"button",title:"選択セルの奥行を均等化",onClick:()=>ze("horizontal"),disabled:!fi,children:[F.jsx(Df,{size:15,"aria-hidden":"true"}),"奥行を均等"]})]}),L.length===1&&$n.length>0?F.jsx("div",{className:"merge-candidate-pad","aria-label":"結合候補を選択",children:[{direction:"left",label:"左のセルを結合候補に選択",icon:r_},{direction:"up",label:"上のセルを結合候補に選択",icon:o_},{direction:"right",label:"右のセルを結合候補に選択",icon:s_},{direction:"down",label:"下のセルを結合候補に選択",icon:i_}].map(({direction:X,label:N,icon:ve})=>{const rt=$n.some(ft=>ft.direction===X);return F.jsx("button",{type:"button","aria-label":N,title:N,disabled:!rt,onClick:()=>Xe(X),children:F.jsx(ve,{size:15,"aria-hidden":"true"})},X)})}):null,jt?F.jsxs("div",{className:"layout-selection-inspector","aria-label":"選択範囲の情報",children:[F.jsxs("div",{className:"layout-selection-metrics",children:[F.jsxs("span",{children:["幅 ",F.jsx("strong",{children:Rn(jt.widthMm)})]}),F.jsxs("span",{children:["奥行 ",F.jsx("strong",{children:Rn(jt.depthMm)})]}),F.jsxs("span",{children:["セル ",F.jsxs("strong",{children:[jt.cellCount,"件"]})]})]}),F.jsxs("div",{className:jt.isRectangle?"layout-selection-status ok":"layout-selection-status warning",children:[F.jsx("span",{children:jt.isRectangle?"矩形範囲です":"矩形範囲ではありません"}),F.jsx("span",{children:rn?"結合可能":"結合不可"}),F.jsx("span",{children:Fi?"幅均等化可能":"幅均等化不可"}),F.jsx("span",{children:fi?"奥行均等化可能":"奥行均等化不可"})]})]}):null,te?F.jsx("p",{className:"layout-selection-note",children:"壁を選択中です。壁位置と中央戻しは下の壁編集で操作します。"}):F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"layout-dimension-controls","aria-label":"選択セルの寸法",children:[F.jsxs("label",{className:vt?"invalid":void 0,children:[F.jsx("span",{children:"幅"}),F.jsx("input",{type:"number",min:Math.round(i.width*.08),max:i.width,step:1,value:me,"aria-label":"幅","aria-invalid":vt,disabled:L.length!==1,onChange:X=>{const N=X.currentTarget.value,ve=Number(N);de(N),Ma(_,E.id,"width",ve,i.width,i.depth)&&(cs("width",ve),de(null))},onBlur:()=>de(null),onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(X.preventDefault(),de(null),X.currentTarget.blur())}}),F.jsx("span",{children:"mm"})]}),F.jsxs("label",{className:Te?"invalid":void 0,children:[F.jsx("span",{children:"奥行"}),F.jsx("input",{type:"number",min:Math.round(i.depth*.08),max:i.depth,step:1,value:Ke,"aria-label":"奥行","aria-invalid":Te,disabled:L.length!==1,onChange:X=>{const N=X.currentTarget.value,ve=Number(N);Y(N),Ma(_,E.id,"height",ve,i.width,i.depth)&&(cs("height",ve),Y(null))},onBlur:()=>Y(null),onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(X.preventDefault(),Y(null),X.currentTarget.blur())}}),F.jsx("span",{children:"mm"})]})]}),je?F.jsx("p",{className:"layout-input-warning",children:"隣接セルの最小サイズを下回るため、この寸法は適用されません。"}):null]})]}),te?F.jsxs(Sa,{title:"壁編集",children:[F.jsxs("div",{className:"layout-wall-focus","aria-label":"選択中の壁",children:[F.jsx("strong",{children:Pr}),F.jsxs("span",{children:["現在 ",Rn(he)]}),F.jsxs("span",{children:["連動壁 ",ls,"本"]})]}),F.jsxs("div",{className:"layout-wall-tools",children:[F.jsxs("label",{className:Ue?"wall-position-control invalid":"wall-position-control",children:[F.jsx("span",{children:"壁位置"}),F.jsx("input",{type:"number",min:0,max:te.axis==="vertical"?i.width:i.depth,step:1,value:ge,"aria-invalid":Ue,onChange:X=>{const N=X.currentTarget.value,ve=Number(N);R(N),qm(_,te,ve,i.width,i.depth)&&Yt(ve)},onBlur:X=>{Yt(Number(X.currentTarget.value)),R(null)},onKeyDown:X=>{X.key==="Enter"?X.currentTarget.blur():X.key==="Escape"&&(R(null),X.currentTarget.blur())}}),F.jsx("span",{children:"mm"})]}),F.jsxs("button",{type:"button","aria-label":"選択中の壁を中央に戻す",title:"選択中の壁を中央に戻す",onClick:bt,disabled:!lr,children:[F.jsx(Df,{size:15,"aria-hidden":"true"}),"中央"]}),F.jsxs("button",{type:"button","aria-label":"セル選択に戻る",title:"壁選択を解除してセル選択に戻る",onClick:it,children:[F.jsx(jm,{size:15,"aria-hidden":"true"}),"戻る"]}),F.jsx("span",{className:"layout-snap-chip",children:"スナップ 5 mm"})]}),kn?F.jsxs("div",{className:"layout-wall-status","aria-label":"壁移動の状態",children:[F.jsxs("span",{children:["移動範囲 ",Rn(kn.minMm)," -"," ",Rn(kn.maxMm)]}),F.jsxs("span",{children:["中央 ",Rn(kn.centerMm)]})]}):null]}):null,F.jsxs(Sa,{title:"履歴とリセット",children:[F.jsxs("div",{className:"layout-history-actions","aria-label":"履歴とリセット操作",children:[F.jsxs("button",{type:"button",title:"ひとつ前のレイアウトに戻す",onClick:ut,disabled:!Rt.canUndo,children:[F.jsx(y_,{size:15,"aria-hidden":"true"}),"戻す"]}),F.jsxs("button",{type:"button",title:"取り消した操作をやり直す",onClick:Je,disabled:!Rt.canRedo,children:[F.jsx(p_,{size:15,"aria-hidden":"true"}),"やり直す"]}),F.jsxs("button",{type:"button",title:"レイアウトを初期状態に戻す",onClick:dt,children:[F.jsx(yv,{size:15,"aria-hidden":"true"}),"リセット"]})]}),F.jsxs("div",{className:ct.ok?"layout-validation":"layout-validation warning",role:ct.ok?"status":"alert",children:[F.jsx("strong",{children:ct.ok?"レイアウト問題なし":"レイアウト要確認"}),F.jsx("span",{children:ct.ok?"セルの重なりや隙間は検出されていません。":ct.issues.map(X=>X.message).join(" ")})]}),xt.enabled?F.jsxs("div",{className:xt.hasInterference?"layout-validation warning":"layout-validation",role:xt.hasInterference?"alert":"status",children:[F.jsx("strong",{children:xt.hasInterference?"スタック干渉あり":"スタック干渉なし"}),F.jsx("span",{children:xt.hasInterference?`スタック脚が干渉する壁をキャンバス上で強調しています。推奨逃げ幅 ${xt.recommendedReliefGapMm} mm。`:"スタック脚と仕切りの干渉は検出されていません。"})]}):null]})]})}const ry=[{key:"width",label:"幅",min:40,max:240,step:1,unit:"mm"},{key:"depth",label:"奥行",min:40,max:240,step:1,unit:"mm"},{key:"height",label:"高さ",min:8,max:120,step:1,unit:"mm"}],sy=[{key:"floorThickness",label:"床厚",min:1.2,max:8,step:.2,unit:"mm"},{key:"cornerRadius",label:"角丸",min:0,max:18,step:1,unit:"mm"}],oy=[{key:"wallThickness",label:"厚さ",min:1.2,max:8,step:.2,unit:"mm"}];function lo({title:i,defaultOpen:e=!0,bodyClassName:t="",children:s}){return F.jsxs("details",{className:"panel-section",open:e,children:[F.jsx("summary",{children:i}),F.jsx("div",{className:`panel-section-body ${t}`.trim(),children:s})]})}function ay({activeStep:i,settings:e,onChange:t,onLayoutChange:s,onResetLayout:o}){const l=c=>c.map(f=>{const d=e[f.key],h=m=>{Number.isFinite(m)&&t(f.key,m)};return F.jsxs("label",{className:"range-control",children:[F.jsxs("span",{className:"range-control-header",children:[F.jsx("span",{className:"range-control-label",children:f.label}),F.jsxs("span",{className:"range-value-field",children:[F.jsx("input",{"aria-label":`${f.label}の数値`,className:"number-control",type:"number",min:f.min,max:f.max,step:f.step,value:d,onChange:m=>h(Number(m.target.value))}),F.jsx("span",{className:"range-unit",children:f.unit})]})]}),F.jsx("input",{type:"range",min:f.min,max:f.max,step:f.step,value:d,onChange:m=>h(Number(m.target.value))})]},f.key)});return F.jsxs("div",{className:"control-grid",children:[i==="size"?F.jsx(lo,{title:"主要寸法",bodyClassName:"panel-section-body-single",children:l(ry)}):null,i==="options"?F.jsx(lo,{title:"外壁・セル壁の厚さ",children:l(oy)}):null,i==="options"?F.jsx(lo,{title:"詳細設定",defaultOpen:!1,bodyClassName:"panel-section-body-single",children:l(sy)}):null,i==="options"?F.jsx(lo,{title:"フタ",defaultOpen:!1,children:F.jsx(E_,{settings:e,onChange:t})}):null,i==="options"?F.jsx(lo,{title:"スタック脚",defaultOpen:!1,children:F.jsx(w_,{settings:e,onChange:t})}):null,i==="grid"?F.jsx(lo,{title:"レイアウト編集",children:F.jsx(iy,{settings:e,onLayoutChange:s,onResetLayout:o})}):null]})}const Ql={showModelShadows:!1};function ly({error:i,fileName:e,checks:t,layoutValidation:s,stats:o,settings:l,onDisableStacking:c,onDownload:f,onLoadProject:d,onOpenLayout:h,onSaveProject:m,onSaveReport:v}){const g=t.some(w=>w.level==="warning"),_=Xc(l),S=Oa(l);return F.jsxs("div",{className:"export-panel",children:[F.jsxs("dl",{className:"export-stats",children:[F.jsxs("div",{children:[F.jsx("dt",{children:"ファイル"}),F.jsx("dd",{children:e})]}),F.jsxs("div",{children:[F.jsx("dt",{children:"モデル"}),F.jsxs("dd",{children:[l.width," x ",l.depth," x ",l.height," mm"]})]}),_.enabled?F.jsxs("div",{children:[F.jsxs("dt",{children:[_.stackCount,"段重ね高さ"]}),F.jsxs("dd",{children:[_.stackedHeightMm," mm"]})]}):null,F.jsxs("div",{children:[F.jsx("dt",{children:"メッシュ"}),F.jsxs("dd",{children:[o.triangleCount," 三角形"]})]}),F.jsxs("div",{children:[F.jsx("dt",{children:"体積"}),F.jsxs("dd",{children:[Math.round(o.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),F.jsxs("div",{className:g?"print-check warning":"print-check",children:[F.jsx("strong",{children:g?"印刷設定を確認":"印刷チェック問題なし"}),F.jsx("span",{children:t.map(w=>w.message).join(" ")})]}),F.jsxs("div",{className:s.ok?"layout-validation export-validation":"layout-validation export-validation warning",children:[F.jsx("strong",{children:s.ok?"レイアウト問題なし":"レイアウト要確認"}),F.jsx("span",{children:s.ok?"STL出力できるレイアウトです。":s.issues.map(w=>w.message).join(" ")})]}),S.enabled?F.jsxs("div",{className:S.hasInterference?"layout-validation export-validation warning":"layout-validation export-validation",children:[F.jsx("strong",{children:S.hasInterference?"スタック干渉あり":"スタック干渉なし"}),F.jsxs("span",{children:[S.message,S.hasInterference?` 推奨逃げ幅 ${S.recommendedReliefGapMm} mm。`:""]}),S.hasInterference?F.jsxs("div",{className:"inline-panel-actions",children:[F.jsxs("button",{className:"inline-panel-action",type:"button",onClick:h,children:[F.jsx(_v,{size:15,"aria-hidden":"true"}),"レイアウトで確認"]}),F.jsxs("button",{className:"inline-panel-action",type:"button",onClick:c,children:[F.jsx(a_,{size:15,"aria-hidden":"true"}),"スタック脚を無効化"]})]}):null]}):null,i?F.jsx("p",{className:"export-error",children:i}):null,F.jsxs("div",{className:"export-actions",children:[F.jsxs("button",{className:"primary-download",type:"button",onClick:f,children:[F.jsx(sh,{size:18,"aria-hidden":"true"}),"STL出力"]}),F.jsxs("button",{className:"secondary-action",type:"button",onClick:m,children:[F.jsx(g_,{size:17,"aria-hidden":"true"}),"プロジェクト保存"]}),F.jsxs("button",{className:"secondary-action",type:"button",onClick:v,children:[F.jsx(u_,{size:17,"aria-hidden":"true"}),"レポート出力"]}),F.jsxs("label",{className:"secondary-action file-action",children:[F.jsx(f_,{size:17,"aria-hidden":"true"}),"プロジェクト読込",F.jsx("input",{accept:"application/json,.json",type:"file",onChange:w=>{var y;const M=(y=w.target.files)==null?void 0:y[0];M&&d(M),w.target.value=""}})]})]})]})}function cy({checks:i,stats:e}){const t=i.some(o=>o.level==="warning")||e.nonManifoldEdgeCount>0||e.topFaceDownwardCount>0,s=t?__:l_;return F.jsxs("section",{className:"quality-panel","aria-label":"印刷品質",children:[F.jsxs("div",{className:t?"quality-status warning":"quality-status",children:[F.jsx(s,{size:18,"aria-hidden":"true"}),F.jsxs("div",{children:[F.jsx("strong",{children:t?"要確認":"出力可能"}),F.jsx("span",{children:t?"印刷品質を確認してください":"メッシュは印刷可能です"})]})]}),F.jsxs("dl",{className:"quality-grid",children:[F.jsxs("div",{children:[F.jsx("dt",{children:"非多様体エッジ"}),F.jsx("dd",{children:e.nonManifoldEdgeCount})]}),F.jsxs("div",{children:[F.jsx("dt",{children:"面の向き"}),F.jsx("dd",{children:e.topFaceDownwardCount})]}),F.jsxs("div",{children:[F.jsx("dt",{children:"三角形数"}),F.jsx("dd",{children:e.triangleCount.toLocaleString()})]}),F.jsxs("div",{children:[F.jsx("dt",{children:"推定体積"}),F.jsxs("dd",{children:[Math.round(e.estimatedVolumeMm3).toLocaleString()," mm3"]})]})]}),F.jsx("ul",{className:"quality-checks",children:i.map(o=>F.jsxs("li",{className:o.level,children:[F.jsx("span",{children:o.label}),F.jsx("strong",{children:o.message})]},o.id))})]})}const uy=[{key:"size",label:"サイズ",icon:xv},{key:"grid",label:"レイアウト",icon:_v},{key:"options",label:"オプション",icon:x_},{key:"download",label:"出力",icon:sh}];function fy({activeStep:i,onChange:e}){return F.jsx("nav",{className:"step-nav","aria-label":"作成手順",children:uy.map((t,s)=>{const o=t.icon,l=i===t.key;return F.jsx("div",{className:"step-wrap",children:F.jsxs("button",{className:l?"step-button step-button-compact active":"step-button step-button-compact",type:"button",onClick:()=>e(t.key),"aria-pressed":l,children:[F.jsx(o,{size:18,"aria-hidden":"true"}),F.jsx("span",{children:t.label})]})},t.key)})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="171",dy=0,ig=1,hy=2,Av=1,py=2,Er=3,os=0,ci=1,wr=2,rs=0,Ro=1,rg=2,sg=3,og=4,my=5,Ls=100,gy=101,vy=102,xy=103,_y=104,yy=200,My=201,Sy=202,Ey=203,hd=204,pd=205,wy=206,Ty=207,Ay=208,Cy=209,Ry=210,by=211,Py=212,Ly=213,Dy=214,md=0,gd=1,vd=2,Do=3,xd=4,_d=5,yd=6,Md=7,Cv=0,Iy=1,Ny=2,ss=0,Uy=1,Fy=2,ky=3,Oy=4,zy=5,By=6,Hy=7,Rv=300,Io=301,No=302,Sd=303,Ed=304,jc=306,wd=1e3,Is=1001,Td=1002,qi=1003,Vy=1004,Jl=1005,or=1006,If=1007,Ns=1008,Rr=1009,bv=1010,Pv=1011,Ia=1012,uh=1013,Us=1014,Tr=1015,za=1016,fh=1017,dh=1018,Uo=1020,Lv=35902,Dv=1021,Iv=1022,Zi=1023,Nv=1024,Uv=1025,bo=1026,Fo=1027,Fv=1028,hh=1029,kv=1030,ph=1031,mh=1033,Cc=33776,Rc=33777,bc=33778,Pc=33779,Ad=35840,Cd=35841,Rd=35842,bd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37808,Nd=37809,Ud=37810,Fd=37811,kd=37812,Od=37813,zd=37814,Bd=37815,Hd=37816,Vd=37817,Gd=37818,Wd=37819,Xd=37820,jd=37821,Lc=36492,$d=36494,Yd=36495,Ov=36283,Zd=36284,qd=36285,Kd=36286,Gy=3200,Wy=3201,zv=0,Xy=1,ts="",Pi="srgb",ko="srgb-linear",Uc="linear",$t="srgb",co=7680,ag=519,jy=512,$y=513,Yy=514,Bv=515,Zy=516,qy=517,Ky=518,Qy=519,lg=35044,cg="300 es",Ar=2e3,Fc=2001;class Bo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ug=1234567;const Po=Math.PI/180,Na=180/Math.PI;function Ho(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function Jy(i,e,t,s,o){return s+(i-e)*(o-s)/(t-e)}function eM(i,e,t){return i!==e?(t-i)/(e-i):0}function La(i,e,t){return(1-t)*i+t*e}function tM(i,e,t,s){return La(i,e,1-Math.exp(-t*s))}function nM(i,e=1){return e-Math.abs(gh(i,e*2)-e)}function iM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function oM(i,e){return i+Math.random()*(e-i)}function aM(i){return i*(.5-Math.random())}function lM(i){i!==void 0&&(ug=i);let e=ug+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(i){return i*Po}function uM(i){return i*Na}function fM(i){return(i&i-1)===0&&i!==0}function dM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pM(i,e,t,s,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+s)/2),m=c((e+s)/2),v=l((e-s)/2),g=c((e-s)/2),_=l((s-e)/2),S=c((s-e)/2);switch(o){case"XYX":i.set(f*m,d*v,d*g,f*h);break;case"YZY":i.set(d*g,f*m,d*v,f*h);break;case"ZXZ":i.set(d*v,d*g,f*m,f*h);break;case"XZX":i.set(f*m,d*S,d*_,f*h);break;case"YXY":i.set(d*_,f*m,d*S,f*h);break;case"ZYZ":i.set(d*S,d*_,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function wo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mM={DEG2RAD:Po,RAD2DEG:Na,generateUUID:Ho,clamp:Pt,euclideanModulo:gh,mapLinear:Jy,inverseLerp:eM,lerp:La,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:rM,randInt:sM,randFloat:oM,randFloatSpread:aM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:fM,ceilPowerOfTwo:dM,floorPowerOfTwo:hM,setQuaternionFromProperEuler:pM,normalize:Kn,denormalize:wo};class Vt{constructor(e=0,t=0){Vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,s,o,l,c,f,d,h){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,h)}set(e,t,s,o,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],h=s[1],m=s[4],v=s[7],g=s[2],_=s[5],S=s[8],w=o[0],M=o[3],y=o[6],U=o[1],P=o[4],A=o[7],D=o[2],B=o[5],k=o[8];return l[0]=c*w+f*U+d*D,l[3]=c*M+f*P+d*B,l[6]=c*y+f*A+d*k,l[1]=h*w+m*U+v*D,l[4]=h*M+m*P+v*B,l[7]=h*y+m*A+v*k,l[2]=g*w+_*U+S*D,l[5]=g*M+_*P+S*B,l[8]=g*y+_*A+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-s*l*m+s*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*c-f*h,g=f*d-m*l,_=h*l-c*d,S=t*v+s*g+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=v*w,e[1]=(o*h-m*s)*w,e[2]=(f*s-o*c)*w,e[3]=g*w,e[4]=(m*t-o*d)*w,e[5]=(o*l-f*t)*w,e[6]=_*w,e[7]=(s*d-h*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Nf.makeScale(e,t)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Mt;function Hv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gM(){const i=kc("canvas");return i.style.display="block",i}const fg={};function To(i){i in fg||(fg[i]=!0,console.warn(i))}function vM(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function xM(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _M(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dg=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===$t&&(o.r=Cr(o.r),o.g=Cr(o.g),o.b=Cr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===$t&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ts?Uc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[ko]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:dg,fromXYZ:hg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:s,transfer:$t,toXYZ:dg,fromXYZ:hg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),i}const Ht=yM();function Cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let uo;class MM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=kc("canvas")),uo.width=e.width,uo.height=e.height;const s=uo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Cr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Cr(t[s]/255)*255):t[s]=Cr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class Vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Uf(o[c].image)):l.push(Uf(o[c]))}else l=Uf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Uf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?MM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class ui extends Bo{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,s=Is,o=Is,l=or,c=Ns,f=Zi,d=Rr,h=ui.DEFAULT_ANISOTROPY,m=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ho(),this.name="",this.source=new Vv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case Is:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case Is:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Rv;ui.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,t=0,s=0,o=1){vn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],_=d[5],S=d[9],w=d[2],M=d[6],y=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-w)<.01&&Math.abs(S-M)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+w)<.1&&Math.abs(S+M)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,A=(_+1)/2,D=(y+1)/2,B=(m+g)/4,k=(v+w)/4,$=(S+M)/4;return P>A&&P>D?P<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(P),o=B/s,l=k/s):A>D?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=B/o,l=$/o):D<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),s=k/l,o=$/l),this.set(s,o,l,t),this}let U=Math.sqrt((M-S)*(M-S)+(v-w)*(v-w)+(g-m)*(g-m));return Math.abs(U)<.001&&(U=1),this.x=(M-S)/U,this.y=(v-w)/U,this.z=(g-m)/U,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends Bo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new ui(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends wM{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Gv extends ui{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=qi,this.minFilter=qi,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends ui{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=qi,this.minFilter=qi,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let d=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];const g=l[c+0],_=l[c+1],S=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=g,e[t+1]=_,e[t+2]=S,e[t+3]=w;return}if(v!==w||d!==g||h!==_||m!==S){let M=1-f;const y=d*g+h*_+m*S+v*w,U=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const D=Math.sqrt(P),B=Math.atan2(D,y*U);M=Math.sin(M*B)/D,f=Math.sin(f*B)/D}const A=f*U;if(d=d*M+g*A,h=h*M+_*A,m=m*M+S*A,v=v*M+w*A,M===1-f){const D=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=D,h*=D,m*=D,v*=D}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],d=s[o+1],h=s[o+2],m=s[o+3],v=l[c],g=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+m*v+d*_-h*g,e[t+1]=d*S+m*g+h*v-f*_,e[t+2]=h*S+m*_+f*g-d*v,e[t+3]=m*S-f*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(s/2),m=f(o/2),v=f(l/2),g=d(s/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=g*m*v+h*_*S,this._y=h*_*v-g*m*S,this._z=h*m*S+g*_*v,this._w=h*m*v-g*_*S;break;case"YXZ":this._x=g*m*v+h*_*S,this._y=h*_*v-g*m*S,this._z=h*m*S-g*_*v,this._w=h*m*v+g*_*S;break;case"ZXY":this._x=g*m*v-h*_*S,this._y=h*_*v+g*m*S,this._z=h*m*S+g*_*v,this._w=h*m*v-g*_*S;break;case"ZYX":this._x=g*m*v-h*_*S,this._y=h*_*v+g*m*S,this._z=h*m*S-g*_*v,this._w=h*m*v+g*_*S;break;case"YZX":this._x=g*m*v+h*_*S,this._y=h*_*v+g*m*S,this._z=h*m*S-g*_*v,this._w=h*m*v-g*_*S;break;case"XZY":this._x=g*m*v-h*_*S,this._y=h*_*v-g*m*S,this._z=h*m*S+g*_*v,this._w=h*m*v+g*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=s+f+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(m-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(s>f&&s>v){const _=2*Math.sqrt(1+s-f-v);this._w=(m-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>v){const _=2*Math.sqrt(1+f-s-v);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+v-s-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=s*m+c*f+o*h-l*d,this._y=o*m+c*d+l*f-s*h,this._z=l*m+c*h+s*d-o*f,this._w=c*m-s*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const _=1-t;return this._w=_*c+t*this._w,this._x=_*s+t*this._x,this._y=_*o+t*this._y,this._z=_*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),v=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=c*v+this._w*g,this._x=s*v+this._x*g,this._y=o*v+this._y*g,this._z=l*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*s),m=2*(f*t-l*o),v=2*(l*s-c*t);return this.x=t+d*h+c*v-f*m,this.y=s+d*m+f*h-l*v,this.z=o+d*v+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-s*d,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ff=new le,pg=new Ba;class Ha{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Xi):Xi.fromBufferAttribute(l,c),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),tc.subVectors(this.max,wa),fo.subVectors(e.a,wa),ho.subVectors(e.b,wa),po.subVectors(e.c,wa),Zr.subVectors(ho,fo),qr.subVectors(po,ho),Es.subVectors(fo,po);let t=[0,-Zr.z,Zr.y,0,-qr.z,qr.y,0,-Es.z,Es.y,Zr.z,0,-Zr.x,qr.z,0,-qr.x,Es.z,0,-Es.x,-Zr.y,Zr.x,0,-qr.y,qr.x,0,-Es.y,Es.x,0];return!kf(t,fo,ho,po,tc)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,fo,ho,po,tc))?!1:(nc.crossVectors(Zr,qr),t=[nc.x,nc.y,nc.z],kf(t,fo,ho,po,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new le,new le,new le,new le,new le,new le,new le,new le],Xi=new le,ec=new Ha,fo=new le,ho=new le,po=new le,Zr=new le,qr=new le,Es=new le,wa=new le,tc=new le,nc=new le,ws=new le;function kf(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){ws.fromArray(i,l);const f=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),d=e.dot(ws),h=t.dot(ws),m=s.dot(ws);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const AM=new Ha,Ta=new le,Of=new le;class $c{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):AM.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ta,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Of)),this.expandByPoint(Ta.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _r=new le,zf=new le,ic=new le,Kr=new le,Bf=new le,rc=new le,Hf=new le;class Wv{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){zf.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(zf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ic),f=Kr.dot(this.direction),d=-Kr.dot(ic),h=Kr.lengthSq(),m=Math.abs(1-c*c);let v,g,_,S;if(m>0)if(v=c*d-f,g=c*f-d,S=l*m,v>=0)if(g>=-S)if(g<=S){const w=1/m;v*=w,g*=w,_=v*(v+c*g+2*f)+g*(c*v+g+2*d)+h}else g=l,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;else g=-l,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;else g<=-S?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),_=-v*v+g*(g+2*d)+h):g<=S?(v=0,g=Math.min(Math.max(-l,-d),l),_=g*(g+2*d)+h):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),_=-v*v+g*(g+2*d)+h);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(zf).addScaledVector(ic,g),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const s=_r.dot(this.direction),o=_r.dot(_r)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),s>d||f>o)||((f>s||s!==s)&&(s=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,s,o,l){Bf.subVectors(t,e),rc.subVectors(s,e),Hf.crossVectors(Bf,rc);let c=this.direction.dot(Hf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const d=f*this.direction.dot(rc.crossVectors(Kr,rc));if(d<0)return null;const h=f*this.direction.dot(Bf.cross(Kr));if(h<0||d+h>c)return null;const m=-f*Kr.dot(Hf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,t,s,o,l,c,f,d,h,m,v,g,_,S,w,M){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,d,h,m,v,g,_,S,w,M)}set(e,t,s,o,l,c,f,d,h,m,v,g,_,S,w,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=v,y[14]=g,y[3]=_,y[7]=S,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),l=1/mo.setFromMatrixColumn(e,1).length(),c=1/mo.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=c*m,_=c*v,S=f*m,w=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=_+S*h,t[5]=g-w*h,t[9]=-f*d,t[2]=w-g*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*m,_=d*v,S=h*m,w=h*v;t[0]=g+w*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*v,t[5]=c*m,t[9]=-f,t[2]=_*f-S,t[6]=w+g*f,t[10]=c*d}else if(e.order==="ZXY"){const g=d*m,_=d*v,S=h*m,w=h*v;t[0]=g-w*f,t[4]=-c*v,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*m,t[9]=w-g*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const g=c*m,_=c*v,S=f*m,w=f*v;t[0]=d*m,t[4]=S*h-_,t[8]=g*h+w,t[1]=d*v,t[5]=w*h+g,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,S=f*d,w=f*h;t[0]=d*m,t[4]=w-g*v,t[8]=S*v+_,t[1]=v,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=_*v+S,t[10]=g-w*v}else if(e.order==="XZY"){const g=c*d,_=c*h,S=f*d,w=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+w,t[5]=c*m,t[9]=_*v-S,t[2]=S*v-_,t[6]=f*m,t[10]=w*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CM,e,RM)}lookAt(e,t,s){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Qr.crossVectors(s,_i),Qr.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Qr.crossVectors(s,_i)),Qr.normalize(),sc.crossVectors(_i,Qr),o[0]=Qr.x,o[4]=sc.x,o[8]=_i.x,o[1]=Qr.y,o[5]=sc.y,o[9]=_i.y,o[2]=Qr.z,o[6]=sc.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],h=s[12],m=s[1],v=s[5],g=s[9],_=s[13],S=s[2],w=s[6],M=s[10],y=s[14],U=s[3],P=s[7],A=s[11],D=s[15],B=o[0],k=o[4],$=o[8],b=o[12],R=o[1],H=o[5],de=o[9],V=o[13],Y=o[2],Q=o[6],G=o[10],ee=o[14],O=o[3],te=o[7],se=o[11],z=o[15];return l[0]=c*B+f*R+d*Y+h*O,l[4]=c*k+f*H+d*Q+h*te,l[8]=c*$+f*de+d*G+h*se,l[12]=c*b+f*V+d*ee+h*z,l[1]=m*B+v*R+g*Y+_*O,l[5]=m*k+v*H+g*Q+_*te,l[9]=m*$+v*de+g*G+_*se,l[13]=m*b+v*V+g*ee+_*z,l[2]=S*B+w*R+M*Y+y*O,l[6]=S*k+w*H+M*Q+y*te,l[10]=S*$+w*de+M*G+y*se,l[14]=S*b+w*V+M*ee+y*z,l[3]=U*B+P*R+A*Y+D*O,l[7]=U*k+P*H+A*Q+D*te,l[11]=U*$+P*de+A*G+D*se,l[15]=U*b+P*V+A*ee+D*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],_=e[14],S=e[3],w=e[7],M=e[11],y=e[15];return S*(+l*d*v-o*h*v-l*f*g+s*h*g+o*f*_-s*d*_)+w*(+t*d*_-t*h*g+l*c*g-o*c*_+o*h*m-l*d*m)+M*(+t*h*v-t*f*_-l*c*v+s*c*_+l*f*m-s*h*m)+y*(-o*f*m-t*d*v+t*f*g+o*c*v-s*c*g+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],_=e[11],S=e[12],w=e[13],M=e[14],y=e[15],U=v*M*h-w*g*h+w*d*_-f*M*_-v*d*y+f*g*y,P=S*g*h-m*M*h-S*d*_+c*M*_+m*d*y-c*g*y,A=m*w*h-S*v*h+S*f*_-c*w*_-m*f*y+c*v*y,D=S*v*d-m*w*d-S*f*g+c*w*g+m*f*M-c*v*M,B=t*U+s*P+o*A+l*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=U*k,e[1]=(w*g*l-v*M*l-w*o*_+s*M*_+v*o*y-s*g*y)*k,e[2]=(f*M*l-w*d*l+w*o*h-s*M*h-f*o*y+s*d*y)*k,e[3]=(v*d*l-f*g*l-v*o*h+s*g*h+f*o*_-s*d*_)*k,e[4]=P*k,e[5]=(m*M*l-S*g*l+S*o*_-t*M*_-m*o*y+t*g*y)*k,e[6]=(S*d*l-c*M*l-S*o*h+t*M*h+c*o*y-t*d*y)*k,e[7]=(c*g*l-m*d*l+m*o*h-t*g*h-c*o*_+t*d*_)*k,e[8]=A*k,e[9]=(S*v*l-m*w*l-S*s*_+t*w*_+m*s*y-t*v*y)*k,e[10]=(c*w*l-S*f*l+S*s*h-t*w*h-c*s*y+t*f*y)*k,e[11]=(m*f*l-c*v*l-m*s*h+t*v*h+c*s*_-t*f*_)*k,e[12]=D*k,e[13]=(m*w*o-S*v*o+S*s*g-t*w*g-m*s*M+t*v*M)*k,e[14]=(S*f*o-c*w*o-S*s*d+t*w*d+c*s*M-t*f*M)*k,e[15]=(c*v*o-m*f*o+m*s*d-t*v*d-c*s*g+t*f*g)*k,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+s,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+s,m*d-o*c,0,h*d-o*f,m*d+o*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,v=f+f,g=l*h,_=l*m,S=l*v,w=c*m,M=c*v,y=f*v,U=d*h,P=d*m,A=d*v,D=s.x,B=s.y,k=s.z;return o[0]=(1-(w+y))*D,o[1]=(_+A)*D,o[2]=(S-P)*D,o[3]=0,o[4]=(_-A)*B,o[5]=(1-(g+y))*B,o[6]=(M+U)*B,o[7]=0,o[8]=(S+P)*k,o[9]=(M-U)*k,o[10]=(1-(g+w))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=mo.set(o[0],o[1],o[2]).length();const c=mo.set(o[4],o[5],o[6]).length(),f=mo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ji.copy(this);const h=1/l,m=1/c,v=1/f;return ji.elements[0]*=h,ji.elements[1]*=h,ji.elements[2]*=h,ji.elements[4]*=m,ji.elements[5]*=m,ji.elements[6]*=m,ji.elements[8]*=v,ji.elements[9]*=v,ji.elements[10]*=v,t.setFromRotationMatrix(ji),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Ar){const d=this.elements,h=2*l/(t-e),m=2*l/(s-o),v=(t+e)/(t-e),g=(s+o)/(s-o);let _,S;if(f===Ar)_=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(f===Fc)_=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=_,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Ar){const d=this.elements,h=1/(t-e),m=1/(s-o),v=1/(c-l),g=(t+e)*h,_=(s+o)*m;let S,w;if(f===Ar)S=(c+l)*v,w=-2*v;else if(f===Fc)S=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-_,d[2]=0,d[6]=0,d[10]=w,d[14]=-S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const mo=new le,ji=new dn,CM=new le(0,0,0),RM=new le(1,1,1),Qr=new le,sc=new le,_i=new le,mg=new dn,gg=new Ba;class ar{constructor(e=0,t=0,s=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bM=0;const vg=new le,go=new Ba,yr=new dn,oc=new le,Aa=new le,PM=new le,LM=new Ba,xg=new le(1,0,0),_g=new le(0,1,0),yg=new le(0,0,1),Mg={type:"added"},DM={type:"removed"},vo={type:"childadded",child:null},Vf={type:"childremoved",child:null};class Un extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new le,t=new ar,s=new Ba,o=new le(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new Mt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(_g,e)}rotateZ(e){return this.rotateOnAxis(yg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(_g,e)}translateZ(e){return this.translateOnAxis(yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?oc.copy(e):oc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Aa,oc,this.up):yr.lookAt(oc,Aa,this.up),this.quaternion.setFromRotationMatrix(yr),o&&(yr.extractRotation(o.matrixWorld),go.setFromRotationMatrix(yr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),vo.child=e,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DM),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),_.length>0&&(s.animations=_),S.length>0&&(s.nodes=S)}return s.object=o,s;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Un.DEFAULT_UP=new le(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new le,Mr=new le,Gf=new le,Sr=new le,xo=new le,_o=new le,Sg=new le,Wf=new le,Xf=new le,jf=new le,$f=new vn,Yf=new vn,Zf=new vn;class Di{constructor(e=new le,t=new le,s=new le){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),$i.subVectors(e,t),o.cross($i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){$i.subVectors(o,t),Mr.subVectors(s,t),Gf.subVectors(e,t);const c=$i.dot($i),f=$i.dot(Mr),d=$i.dot(Gf),h=Mr.dot(Mr),m=Mr.dot(Gf),v=c*h-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,_=(h*d-f*m)*g,S=(c*m-f*d)*g;return l.set(1-_-S,S,_)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,s,o,l,c,f,d){return this.getBarycoord(e,t,s,o,Sr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Sr.x),d.addScaledVector(c,Sr.y),d.addScaledVector(f,Sr.z),d)}static getInterpolatedAttribute(e,t,s,o,l,c){return $f.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),$f.fromBufferAttribute(e,t),Yf.fromBufferAttribute(e,s),Zf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector($f,l.x),c.addScaledVector(Yf,l.y),c.addScaledVector(Zf,l.z),c}static isFrontFacing(e,t,s,o){return $i.subVectors(s,t),Mr.subVectors(e,t),$i.cross(Mr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),$i.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;xo.subVectors(o,s),_o.subVectors(l,s),Wf.subVectors(e,s);const d=xo.dot(Wf),h=_o.dot(Wf);if(d<=0&&h<=0)return t.copy(s);Xf.subVectors(e,o);const m=xo.dot(Xf),v=_o.dot(Xf);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(xo,c);jf.subVectors(e,l);const _=xo.dot(jf),S=_o.dot(jf);if(S>=0&&_<=S)return t.copy(l);const w=_*h-d*S;if(w<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(s).addScaledVector(_o,f);const M=m*S-_*v;if(M<=0&&v-m>=0&&_-S>=0)return Sg.subVectors(l,o),f=(v-m)/(v-m+(_-S)),t.copy(o).addScaledVector(Sg,f);const y=1/(M+w+g);return c=w*y,f=g*y,t.copy(s).addScaledVector(xo,c).addScaledVector(_o,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},ac={h:0,s:0,l:0};function qf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class It{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ht.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Ht.workingColorSpace){if(e=gh(e,1),t=Pt(t,0,1),s=Pt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=qf(c,l,e+1/3),this.g=qf(c,l,e),this.b=qf(c,l,e-1/3)}return Ht.toWorkingColorSpace(this,o),this}setStyle(e,t=Pi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){const s=jv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Ht.fromWorkingColorSpace(jn.copy(this),e),Math.round(Pt(jn.r*255,0,255))*65536+Math.round(Pt(jn.g*255,0,255))*256+Math.round(Pt(jn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(jn.copy(this),t);const s=jn.r,o=jn.g,l=jn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=m<=.5?v/(c+f):v/(2-c-f),c){case s:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-s)/v+2;break;case l:d=(s-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Pi){Ht.fromWorkingColorSpace(jn.copy(this),e);const t=jn.r,s=jn.g,o=jn.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(ac);const s=La(Jr.h,ac.h,t),o=La(Jr.s,ac.s,t),l=La(Jr.l,ac.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new It;It.NAMES=jv;let IM=0;class Vo extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Ro,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hd&&(s.blendSrc=this.blendSrc),this.blendDst!==pd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(s.stencilFail=this.stencilFail),this.stencilZFail!==co&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $v extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new le,lc=new Vt;class Ki{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=lg,this.updateRanges=[],this.gpuType=Tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=wo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),s=Kn(s,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),s=Kn(s,this.array),o=Kn(o,this.array),l=Kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lg&&(e.usage=this.usage),e}}class Yv extends Ki{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Zv extends Ki{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Ui extends Ki{constructor(e,t,s){super(new Float32Array(e),t,s)}}let NM=0;const bi=new dn,Kf=new Un,yo=new le,yi=new Ha,Ca=new Ha,Nn=new le;class Qi extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?Zv:Yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Mt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,s){return bi.makeTranslation(e,t,s),this.applyMatrix4(bi),this}scale(e,t,s){return bi.makeScale(e,t,s),this.applyMatrix4(bi),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ca.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(yi.min,Ca.min),yi.expandByPoint(Nn),Nn.addVectors(yi.max,Ca.max),yi.expandByPoint(Nn)):(yi.expandByPoint(Ca.min),yi.expandByPoint(Ca.max))}yi.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Nn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Nn.fromBufferAttribute(f,h),d&&(yo.fromBufferAttribute(e,h),Nn.add(yo)),o=Math.max(o,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let $=0;$<s.count;$++)f[$]=new le,d[$]=new le;const h=new le,m=new le,v=new le,g=new Vt,_=new Vt,S=new Vt,w=new le,M=new le;function y($,b,R){h.fromBufferAttribute(s,$),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),g.fromBufferAttribute(l,$),_.fromBufferAttribute(l,b),S.fromBufferAttribute(l,R),m.sub(h),v.sub(h),_.sub(g),S.sub(g);const H=1/(_.x*S.y-S.x*_.y);isFinite(H)&&(w.copy(m).multiplyScalar(S.y).addScaledVector(v,-_.y).multiplyScalar(H),M.copy(v).multiplyScalar(_.x).addScaledVector(m,-S.x).multiplyScalar(H),f[$].add(w),f[b].add(w),f[R].add(w),d[$].add(M),d[b].add(M),d[R].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let $=0,b=U.length;$<b;++$){const R=U[$],H=R.start,de=R.count;for(let V=H,Y=H+de;V<Y;V+=3)y(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const P=new le,A=new le,D=new le,B=new le;function k($){D.fromBufferAttribute(o,$),B.copy(D);const b=f[$];P.copy(b),P.sub(D.multiplyScalar(D.dot(b))).normalize(),A.crossVectors(B,b);const H=A.dot(d[$])<0?-1:1;c.setXYZW($,P.x,P.y,P.z,H)}for(let $=0,b=U.length;$<b;++$){const R=U[$],H=R.start,de=R.count;for(let V=H,Y=H+de;V<Y;V+=3)k(e.getX(V+0)),k(e.getX(V+1)),k(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,_=s.count;g<_;g++)s.setXYZ(g,0,0,0);const o=new le,l=new le,c=new le,f=new le,d=new le,h=new le,m=new le,v=new le;if(e)for(let g=0,_=e.count;g<_;g+=3){const S=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,M),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,M),f.add(m),d.add(m),h.add(m),s.setXYZ(S,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,l),v.subVectors(o,l),m.cross(v),s.setXYZ(g+0,m.x,m.y,m.z),s.setXYZ(g+1,m.x,m.y,m.z),s.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,g=new h.constructor(d.length*m);let _=0,S=0;for(let w=0,M=d.length;w<M;w++){f.isInterleavedBufferAttribute?_=d[w]*f.data.stride+f.offset:_=d[w]*m;for(let y=0;y<m;y++)g[S++]=h[_++]}return new Ki(g,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qi,s=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const g=h[m],_=e(g,s);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];m.push(_.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let g=0,_=v.length;g<_;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eg=new dn,Ts=new Wv,cc=new $c,wg=new le,uc=new le,fc=new le,dc=new le,Qf=new le,hc=new le,Tg=new le,pc=new le;class Ii extends Un{constructor(e=new Qi,t=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){hc.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(Qf.fromBufferAttribute(v,e),c?hc.addScaledVector(Qf,m):hc.addScaledVector(Qf.sub(t),m))}t.add(hc)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(l),Ts.copy(e.ray).recast(e.near),!(cc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(cc,wg)===null||Ts.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Eg.copy(l).invert(),Ts.copy(e.ray).applyMatrix4(Eg),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,w=g.length;S<w;S++){const M=g[S],y=c[M.materialIndex],U=Math.max(M.start,_.start),P=Math.min(f.count,Math.min(M.start+M.count,_.start+_.count));for(let A=U,D=P;A<D;A+=3){const B=f.getX(A),k=f.getX(A+1),$=f.getX(A+2);o=mc(this,y,e,s,h,m,v,B,k,$),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),w=Math.min(f.count,_.start+_.count);for(let M=S,y=w;M<y;M+=3){const U=f.getX(M),P=f.getX(M+1),A=f.getX(M+2);o=mc(this,c,e,s,h,m,v,U,P,A),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,w=g.length;S<w;S++){const M=g[S],y=c[M.materialIndex],U=Math.max(M.start,_.start),P=Math.min(d.count,Math.min(M.start+M.count,_.start+_.count));for(let A=U,D=P;A<D;A+=3){const B=A,k=A+1,$=A+2;o=mc(this,y,e,s,h,m,v,B,k,$),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),w=Math.min(d.count,_.start+_.count);for(let M=S,y=w;M<y;M+=3){const U=M,P=M+1,A=M+2;o=mc(this,c,e,s,h,m,v,U,P,A),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function UM(i,e,t,s,o,l,c,f){let d;if(e.side===ci?d=s.intersectTriangle(c,l,o,!0,f):d=s.intersectTriangle(o,l,c,e.side===os,f),d===null)return null;pc.copy(f),pc.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(pc);return h<t.near||h>t.far?null:{distance:h,point:pc.clone(),object:i}}function mc(i,e,t,s,o,l,c,f,d,h){i.getVertexPosition(f,uc),i.getVertexPosition(d,fc),i.getVertexPosition(h,dc);const m=UM(i,e,t,s,uc,fc,dc,Tg);if(m){const v=new le;Di.getBarycoord(Tg,uc,fc,dc,v),o&&(m.uv=Di.getInterpolatedAttribute(o,f,d,h,v,new Vt)),l&&(m.uv1=Di.getInterpolatedAttribute(l,f,d,h,v,new Vt)),c&&(m.normal=Di.getInterpolatedAttribute(c,f,d,h,v,new le),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new le,materialIndex:0};Di.getNormal(uc,fc,dc,g.normal),m.face=g,m.barycoord=v}return m}class Va extends Qi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],v=[];let g=0,_=0;S("z","y","x",-1,-1,s,t,e,c,l,0),S("z","y","x",1,-1,s,t,-e,c,l,1),S("x","z","y",1,1,e,s,t,o,c,2),S("x","z","y",1,-1,e,s,-t,o,c,3),S("x","y","z",1,-1,e,t,s,o,l,4),S("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new Ui(h,3)),this.setAttribute("normal",new Ui(m,3)),this.setAttribute("uv",new Ui(v,2));function S(w,M,y,U,P,A,D,B,k,$,b){const R=A/k,H=D/$,de=A/2,V=D/2,Y=B/2,Q=k+1,G=$+1;let ee=0,O=0;const te=new le;for(let se=0;se<G;se++){const z=se*H-V;for(let ae=0;ae<Q;ae++){const De=ae*R-de;te[w]=De*U,te[M]=z*P,te[y]=Y,h.push(te.x,te.y,te.z),te[w]=0,te[M]=0,te[y]=B>0?1:-1,m.push(te.x,te.y,te.z),v.push(ae/k),v.push(1-se/$),ee+=1}}for(let se=0;se<$;se++)for(let z=0;z<k;z++){const ae=g+z+Q*se,De=g+z+Q*(se+1),oe=g+(z+1)+Q*(se+1),pe=g+(z+1)+Q*se;d.push(ae,De,pe),d.push(De,oe,pe),O+=6}f.addGroup(_,O,b),_+=O,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Qn(i){const e={};for(let t=0;t<i.length;t++){const s=Oo(i[t]);for(const o in s)e[o]=s[o]}return e}function FM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const kM={clone:Oo,merge:Qn};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Kv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new le,Ag=new Vt,Cg=new Vt;class Li extends Kv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Ag,Cg),t.subVectors(Cg,Ag)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*s/h,o*=c.width/d,s*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,So=1;class BM extends Un{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Mo,So,e,t);o.layers=this.layers,this.add(o);const l=new Li(Mo,So,e,t);l.layers=this.layers,this.add(l);const c=new Li(Mo,So,e,t);c.layers=this.layers,this.add(c);const f=new Li(Mo,So,e,t);f.layers=this.layers,this.add(f);const d=new Li(Mo,So,e,t);d.layers=this.layers,this.add(d);const h=new Li(Mo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===Ar)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,d),e.setRenderTarget(s,4,o),e.render(t,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(v,g,_),e.xr.enabled=S,s.texture.needsPMREMUpdate=!0}}class Qv extends ui{constructor(e,t,s,o,l,c,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Io,super(e,t,s,o,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends Fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Qv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:or}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Va(5,5,5),l=new as({name:"CubemapFromEquirect",uniforms:Oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ci,blending:rs});l.uniforms.tEquirect.value=t;const c=new Ii(o,l),f=t.minFilter;return t.minFilter===Ns&&(t.minFilter=or),new BM(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class VM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jf=new le,GM=new le,WM=new Mt;class bs{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Jf.subVectors(s,t).cross(GM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Jf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||WM.getNormalMatrix(e),o=this.coplanarPoint(Jf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new $c,gc=new le;class vh{constructor(e=new bs,t=new bs,s=new bs,o=new bs,l=new bs,c=new bs){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ar){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],h=o[4],m=o[5],v=o[6],g=o[7],_=o[8],S=o[9],w=o[10],M=o[11],y=o[12],U=o[13],P=o[14],A=o[15];if(s[0].setComponents(d-l,g-h,M-_,A-y).normalize(),s[1].setComponents(d+l,g+h,M+_,A+y).normalize(),s[2].setComponents(d+c,g+m,M+S,A+U).normalize(),s[3].setComponents(d-c,g-m,M-S,A-U).normalize(),s[4].setComponents(d-f,g-v,M-w,A-P).normalize(),t===Ar)s[5].setComponents(d+f,g+v,M+w,A+P).normalize();else if(t===Fc)s[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(gc.x=o.normal.x>0?e.max.x:e.min.x,gc.y=o.normal.y>0?e.max.y:e.min.y,gc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yc extends Vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oc=new le,zc=new le,Rg=new dn,Ra=new Wv,vc=new $c,ed=new le,bg=new le;class XM extends Un{constructor(e=new Qi,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Oc.fromBufferAttribute(t,o-1),zc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Oc.distanceTo(zc);e.setAttribute("lineDistance",new Ui(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(o),vc.radius+=l,e.ray.intersectsSphere(vc)===!1)return;Rg.copy(o).invert(),Ra.copy(e.ray).applyMatrix4(Rg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=s.index,g=s.attributes.position;if(m!==null){const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=_,M=S-1;w<M;w+=h){const y=m.getX(w),U=m.getX(w+1),P=xc(this,e,Ra,d,y,U);P&&t.push(P)}if(this.isLineLoop){const w=m.getX(S-1),M=m.getX(_),y=xc(this,e,Ra,d,w,M);y&&t.push(y)}}else{const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let w=_,M=S-1;w<M;w+=h){const y=xc(this,e,Ra,d,w,w+1);y&&t.push(y)}if(this.isLineLoop){const w=xc(this,e,Ra,d,S-1,_);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function xc(i,e,t,s,o,l){const c=i.geometry.attributes.position;if(Oc.fromBufferAttribute(c,o),zc.fromBufferAttribute(c,l),t.distanceSqToSegment(Oc,zc,ed,bg)>s)return;ed.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ed);if(!(d<e.near||d>e.far))return{distance:d,point:bg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Pg=new le,Lg=new le;class Qd extends XM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Pg.fromBufferAttribute(t,o),Lg.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Pg.distanceTo(Lg);e.setAttribute("lineDistance",new Ui(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ba extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Jv extends ui{constructor(e,t,s,o,l,c,f,d,h,m=bo){if(m!==bo&&m!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===bo&&(s=Us),s===void 0&&m===Fo&&(s=Uo),super(null,o,l,c,f,d,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:qi,this.minFilter=d!==void 0?d:qi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _c=new le,yc=new le,td=new le,Mc=new Di;class jM extends Qi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Po*t),c=e.getIndex(),f=e.getAttribute("position"),d=c?c.count:f.count,h=[0,0,0],m=["a","b","c"],v=new Array(3),g={},_=[];for(let S=0;S<d;S+=3){c?(h[0]=c.getX(S),h[1]=c.getX(S+1),h[2]=c.getX(S+2)):(h[0]=S,h[1]=S+1,h[2]=S+2);const{a:w,b:M,c:y}=Mc;if(w.fromBufferAttribute(f,h[0]),M.fromBufferAttribute(f,h[1]),y.fromBufferAttribute(f,h[2]),Mc.getNormal(td),v[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,v[1]=`${Math.round(M.x*o)},${Math.round(M.y*o)},${Math.round(M.z*o)}`,v[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const P=(U+1)%3,A=v[U],D=v[P],B=Mc[m[U]],k=Mc[m[P]],$=`${A}_${D}`,b=`${D}_${A}`;b in g&&g[b]?(td.dot(g[b].normal)<=l&&(_.push(B.x,B.y,B.z),_.push(k.x,k.y,k.z)),g[b]=null):$ in g||(g[$]={index0:h[U],index1:h[P],normal:td.clone()})}}for(const S in g)if(g[S]){const{index0:w,index1:M}=g[S];_c.fromBufferAttribute(f,w),yc.fromBufferAttribute(f,M),_.push(_c.x,_c.y,_c.z),_.push(yc.x,yc.y,yc.z)}this.setAttribute("position",new Ui(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const $M={triangulate:function(i,e,t=2){const s=e&&e.length,o=s?e[0]*t:i.length;let l=e0(i,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,d,h,m,v,g,_;if(s&&(l=QM(i,e,l,t)),i.length>80*t){f=h=i[0],d=m=i[1];for(let S=t;S<o;S+=t)v=i[S],g=i[S+1],v<f&&(f=v),g<d&&(d=g),v>h&&(h=v),g>m&&(m=g);_=Math.max(h-f,m-d),_=_!==0?32767/_:0}return Ua(l,c,t,f,d,_,0),c}};function e0(i,e,t,s,o){let l,c;if(o===cS(i,e,t,s)>0)for(l=e;l<t;l+=s)c=Dg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=Dg(l,i[l],i[l+1],c);return c&&Zc(c,c.next)&&(ka(c),c=c.next),c}function ks(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(Zc(t,t.next)||fn(t.prev,t,t.next)===0)){if(ka(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function Ua(i,e,t,s,o,l,c){if(!i)return;!c&&l&&iS(i,s,o,l);let f=i,d,h;for(;i.prev!==i.next;){if(d=i.prev,h=i.next,l?ZM(i,s,o,l):YM(i)){e.push(d.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),ka(i),i=h.next,f=h.next;continue}if(i=h,i===f){c?c===1?(i=qM(ks(i),e,t),Ua(i,e,t,s,o,l,2)):c===2&&KM(i,e,t,s,o,l):Ua(ks(i),e,t,s,o,l,1);break}}}function YM(i){const e=i.prev,t=i,s=i.next;if(fn(e,t,s)>=0)return!1;const o=e.x,l=t.x,c=s.x,f=e.y,d=t.y,h=s.y,m=o<l?o<c?o:c:l<c?l:c,v=f<d?f<h?f:h:d<h?d:h,g=o>l?o>c?o:c:l>c?l:c,_=f>d?f>h?f:h:d>h?d:h;let S=s.next;for(;S!==e;){if(S.x>=m&&S.x<=g&&S.y>=v&&S.y<=_&&Ao(o,f,l,d,c,h,S.x,S.y)&&fn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function ZM(i,e,t,s){const o=i.prev,l=i,c=i.next;if(fn(o,l,c)>=0)return!1;const f=o.x,d=l.x,h=c.x,m=o.y,v=l.y,g=c.y,_=f<d?f<h?f:h:d<h?d:h,S=m<v?m<g?m:g:v<g?v:g,w=f>d?f>h?f:h:d>h?d:h,M=m>v?m>g?m:g:v>g?v:g,y=Jd(_,S,e,t,s),U=Jd(w,M,e,t,s);let P=i.prevZ,A=i.nextZ;for(;P&&P.z>=y&&A&&A.z<=U;){if(P.x>=_&&P.x<=w&&P.y>=S&&P.y<=M&&P!==o&&P!==c&&Ao(f,m,d,v,h,g,P.x,P.y)&&fn(P.prev,P,P.next)>=0||(P=P.prevZ,A.x>=_&&A.x<=w&&A.y>=S&&A.y<=M&&A!==o&&A!==c&&Ao(f,m,d,v,h,g,A.x,A.y)&&fn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;P&&P.z>=y;){if(P.x>=_&&P.x<=w&&P.y>=S&&P.y<=M&&P!==o&&P!==c&&Ao(f,m,d,v,h,g,P.x,P.y)&&fn(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;A&&A.z<=U;){if(A.x>=_&&A.x<=w&&A.y>=S&&A.y<=M&&A!==o&&A!==c&&Ao(f,m,d,v,h,g,A.x,A.y)&&fn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function qM(i,e,t){let s=i;do{const o=s.prev,l=s.next.next;!Zc(o,l)&&t0(o,s,s.next,l)&&Fa(o,l)&&Fa(l,o)&&(e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),ka(s),ka(s.next),s=i=l),s=s.next}while(s!==i);return ks(s)}function KM(i,e,t,s,o,l){let c=i;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&oS(c,f)){let d=n0(c,f);c=ks(c,c.next),d=ks(d,d.next),Ua(c,e,t,s,o,l,0),Ua(d,e,t,s,o,l,0);return}f=f.next}c=c.next}while(c!==i)}function QM(i,e,t,s){const o=[];let l,c,f,d,h;for(l=0,c=e.length;l<c;l++)f=e[l]*s,d=l<c-1?e[l+1]*s:i.length,h=e0(i,f,d,s,!1),h===h.next&&(h.steiner=!0),o.push(sS(h));for(o.sort(JM),l=0;l<o.length;l++)t=eS(o[l],t);return t}function JM(i,e){return i.x-e.x}function eS(i,e){const t=tS(i,e);if(!t)return e;const s=n0(t,i);return ks(s,s.next),ks(t,t.next)}function tS(i,e){let t=e,s=-1/0,o;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const g=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=l&&g>s&&(s=g,o=t.x<t.next.x?t:t.next,g===l))return o}t=t.next}while(t!==e);if(!o)return null;const f=o,d=o.x,h=o.y;let m=1/0,v;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&Ao(c<h?l:s,c,d,h,c<h?s:l,c,t.x,t.y)&&(v=Math.abs(c-t.y)/(l-t.x),Fa(t,i)&&(v<m||v===m&&(t.x>o.x||t.x===o.x&&nS(o,t)))&&(o=t,m=v)),t=t.next;while(t!==f);return o}function nS(i,e){return fn(i.prev,i,e.prev)<0&&fn(e.next,i,i.next)<0}function iS(i,e,t,s){let o=i;do o.z===0&&(o.z=Jd(o.x,o.y,e,t,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,rS(o)}function rS(i){let e,t,s,o,l,c,f,d,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,f=0,e=0;e<h&&(f++,s=s.nextZ,!!s);e++);for(d=h;f>0||d>0&&s;)f!==0&&(d===0||!s||t.z<=s.z)?(o=t,t=t.nextZ,f--):(o=s,s=s.nextZ,d--),l?l.nextZ=o:i=o,o.prevZ=l,l=o;t=s}l.nextZ=null,h*=2}while(c>1);return i}function Jd(i,e,t,s,o){return i=(i-t)*o|0,e=(e-s)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ao(i,e,t,s,o,l,c,f){return(o-c)*(e-f)>=(i-c)*(l-f)&&(i-c)*(s-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(s-f)}function oS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!aS(i,e)&&(Fa(i,e)&&Fa(e,i)&&lS(i,e)&&(fn(i.prev,i,e.prev)||fn(i,e.prev,e))||Zc(i,e)&&fn(i.prev,i,i.next)>0&&fn(e.prev,e,e.next)>0)}function fn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zc(i,e){return i.x===e.x&&i.y===e.y}function t0(i,e,t,s){const o=Ec(fn(i,e,t)),l=Ec(fn(i,e,s)),c=Ec(fn(t,s,i)),f=Ec(fn(t,s,e));return!!(o!==l&&c!==f||o===0&&Sc(i,t,e)||l===0&&Sc(i,s,e)||c===0&&Sc(t,i,s)||f===0&&Sc(t,e,s))}function Sc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ec(i){return i>0?1:i<0?-1:0}function aS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&t0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fa(i,e){return fn(i.prev,i,i.next)<0?fn(i,e,i.next)>=0&&fn(i,i.prev,e)>=0:fn(i,e,i.prev)<0||fn(i,i.next,e)<0}function lS(i,e){let t=i,s=!1;const o=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function n0(i,e){const t=new eh(i.i,i.x,i.y),s=new eh(e.i,e.x,e.y),o=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function Dg(i,e,t,s){const o=new eh(i,e,t);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cS(i,e,t,s){let o=0;for(let l=e,c=t-s;l<t;l+=s)o+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return o}class xh{static area(e){const t=e.length;let s=0;for(let o=t-1,l=0;l<t;o=l++)s+=e[o].x*e[l].y-e[l].x*e[o].y;return s*.5}static isClockWise(e){return xh.area(e)<0}static triangulateShape(e,t){const s=[],o=[],l=[];Ig(e),Ng(s,e);let c=e.length;t.forEach(Ig);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,Ng(s,t[d]);const f=$M.triangulate(s,o);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function Ig(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ng(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class qc extends Qi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(o),h=f+1,m=d+1,v=e/f,g=t/d,_=[],S=[],w=[],M=[];for(let y=0;y<m;y++){const U=y*g-c;for(let P=0;P<h;P++){const A=P*v-l;S.push(A,-U,0),w.push(0,0,1),M.push(P/f),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let U=0;U<f;U++){const P=U+h*y,A=U+h*(y+1),D=U+1+h*(y+1),B=U+1+h*y;_.push(P,A,B),_.push(A,D,B)}this.setIndex(_),this.setAttribute("position",new Ui(S,3)),this.setAttribute("normal",new Ui(w,3)),this.setAttribute("uv",new Ui(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class _h extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zv,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uS extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class i0 extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dS extends i0{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nd=new dn,Ug=new le,Fg=new le;class hS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r0 extends Kv{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pS extends hS{constructor(){super(new r0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mS extends i0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new pS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gS extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vS extends Qd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Qi;o.setAttribute("position",new Ui(t,3)),o.setAttribute("color",new Ui(s,3));const l=new Yc({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,t,s){const o=new It,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(t),o.toArray(l,6),o.toArray(l,9),o.set(s),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function kg(i,e,t,s){const o=xS(s);switch(t){case Dv:return i*e;case Nv:return i*e;case Uv:return i*e*2;case Fv:return i*e/o.components*o.byteLength;case hh:return i*e/o.components*o.byteLength;case kv:return i*e*2/o.components*o.byteLength;case ph:return i*e*2/o.components*o.byteLength;case Iv:return i*e*3/o.components*o.byteLength;case Zi:return i*e*4/o.components*o.byteLength;case mh:return i*e*4/o.components*o.byteLength;case Cc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cd:case bd:return Math.max(i,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(i,8)*Math.max(e,8)/2;case Pd:case Ld:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lc:case $d:case Yd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ov:case Zd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qd:case Kd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xS(i){switch(i){case Rr:case bv:return{byteLength:1,components:1};case Ia:case Pv:case za:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case Us:case uh:case Tr:return{byteLength:4,components:1};case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function s0(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function _S(i){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,h,m),f.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,h){const m=d.array,v=d.updateRanges;if(i.bindBuffer(h,f),v.length===0)i.bufferSubData(h,0,m);else{v.sort((_,S)=>_.start-S.start);let g=0;for(let _=1;_<v.length;_++){const S=v[g],w=v[_];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++g,v[g]=w)}v.length=g+1;for(let _=0,S=v.length;_<S;_++){const w=v[_];i.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MS=`#ifdef USE_ALPHAHASH
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
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
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
#endif`,CS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IS=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
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
}`,_E=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bE=`#if defined( USE_POINTS_UV )
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
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS )
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
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
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
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,G1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,j1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,q1=`uniform vec3 color;
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
}`,K1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:yS,alphahash_pars_fragment:MS,alphamap_fragment:SS,alphamap_pars_fragment:ES,alphatest_fragment:wS,alphatest_pars_fragment:TS,aomap_fragment:AS,aomap_pars_fragment:CS,batching_pars_vertex:RS,batching_vertex:bS,begin_vertex:PS,beginnormal_vertex:LS,bsdfs:DS,iridescence_fragment:IS,bumpmap_pars_fragment:NS,clipping_planes_fragment:US,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:OS,color_fragment:zS,color_pars_fragment:BS,color_pars_vertex:HS,color_vertex:VS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:jS,displacementmap_vertex:$S,emissivemap_fragment:YS,emissivemap_pars_fragment:ZS,colorspace_fragment:qS,colorspace_pars_fragment:KS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:oE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:xE,lights_fragment_begin:_E,lights_fragment_maps:yE,lights_fragment_end:ME,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:TE,map_fragment:AE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:bE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:LE,morphinstance_vertex:DE,morphcolor_vertex:IE,morphnormal_vertex:NE,morphtarget_pars_vertex:UE,morphtarget_vertex:FE,normal_fragment_begin:kE,normal_fragment_maps:OE,normal_pars_fragment:zE,normal_pars_vertex:BE,normal_vertex:HE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:jE,opaque_fragment:$E,packing:YE,premultiplied_alpha_fragment:ZE,project_vertex:qE,dithering_fragment:KE,dithering_pars_fragment:QE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:n1,shadowmap_vertex:i1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:o1,skinning_vertex:a1,skinnormal_vertex:l1,specularmap_fragment:c1,specularmap_pars_fragment:u1,tonemapping_fragment:f1,tonemapping_pars_fragment:d1,transmission_fragment:h1,transmission_pars_fragment:p1,uv_pars_fragment:m1,uv_pars_vertex:g1,uv_vertex:v1,worldpos_vertex:x1,background_vert:_1,background_frag:y1,backgroundCube_vert:M1,backgroundCube_frag:S1,cube_vert:E1,cube_frag:w1,depth_vert:T1,depth_frag:A1,distanceRGBA_vert:C1,distanceRGBA_frag:R1,equirect_vert:b1,equirect_frag:P1,linedashed_vert:L1,linedashed_frag:D1,meshbasic_vert:I1,meshbasic_frag:N1,meshlambert_vert:U1,meshlambert_frag:F1,meshmatcap_vert:k1,meshmatcap_frag:O1,meshnormal_vert:z1,meshnormal_frag:B1,meshphong_vert:H1,meshphong_frag:V1,meshphysical_vert:G1,meshphysical_frag:W1,meshtoon_vert:X1,meshtoon_frag:j1,points_vert:$1,points_frag:Y1,shadow_vert:Z1,shadow_frag:q1,sprite_vert:K1,sprite_frag:Q1},Fe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},rr={basic:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Qn([Fe.points,Fe.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Qn([Fe.common,Fe.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Qn([Fe.sprite,Fe.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Qn([Fe.lights,Fe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};rr.physical={uniforms:Qn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const wc={r:0,b:0,g:0},Cs=new ar,J1=new dn;function ew(i,e,t,s,o,l,c){const f=new It(0);let d=l===!0?0:1,h,m,v=null,g=0,_=null;function S(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function w(P){let A=!1;const D=S(P);D===null?y(f,d):D&&D.isColor&&(y(D,1),A=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(P,A){const D=S(A);D&&(D.isCubeTexture||D.mapping===jc)?(m===void 0&&(m=new Ii(new Va(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Oo(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,k,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Cs.copy(A.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Cs)),m.material.toneMapped=Ht.getTransfer(D.colorSpace)!==$t,(v!==D||g!==D.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=D,g=D.version,_=i.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Ii(new qc(2,2),new as({name:"BackgroundMaterial",uniforms:Oo(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(D.colorSpace)!==$t,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||g!==D.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,v=D,g=D.version,_=i.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function y(P,A){P.getRGB(wc,qv(i)),s.buffers.color.setClear(wc.r,wc.g,wc.b,A,c)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(P,A=1){f.set(P),d=A,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,y(f,d)},render:w,addToRenderList:M,dispose:U}}function tw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,c=!1;function f(R,H,de,V,Y){let Q=!1;const G=v(V,de,H);l!==G&&(l=G,h(l.object)),Q=_(R,V,de,Y),Q&&S(R,V,de,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,A(R,H,de,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function v(R,H,de){const V=de.wireframe===!0;let Y=s[R.id];Y===void 0&&(Y={},s[R.id]=Y);let Q=Y[H.id];Q===void 0&&(Q={},Y[H.id]=Q);let G=Q[V];return G===void 0&&(G=g(d()),Q[V]=G),G}function g(R){const H=[],de=[],V=[];for(let Y=0;Y<t;Y++)H[Y]=0,de[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:de,attributeDivisors:V,object:R,attributes:{},index:null}}function _(R,H,de,V){const Y=l.attributes,Q=H.attributes;let G=0;const ee=de.getAttributes();for(const O in ee)if(ee[O].location>=0){const se=Y[O];let z=Q[O];if(z===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),se===void 0||se.attribute!==z||z&&se.data!==z.data)return!0;G++}return l.attributesNum!==G||l.index!==V}function S(R,H,de,V){const Y={},Q=H.attributes;let G=0;const ee=de.getAttributes();for(const O in ee)if(ee[O].location>=0){let se=Q[O];se===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const z={};z.attribute=se,se&&se.data&&(z.data=se.data),Y[O]=z,G++}l.attributes=Y,l.attributesNum=G,l.index=V}function w(){const R=l.newAttributes;for(let H=0,de=R.length;H<de;H++)R[H]=0}function M(R){y(R,0)}function y(R,H){const de=l.newAttributes,V=l.enabledAttributes,Y=l.attributeDivisors;de[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),Y[R]!==H&&(i.vertexAttribDivisor(R,H),Y[R]=H)}function U(){const R=l.newAttributes,H=l.enabledAttributes;for(let de=0,V=H.length;de<V;de++)H[de]!==R[de]&&(i.disableVertexAttribArray(de),H[de]=0)}function P(R,H,de,V,Y,Q,G){G===!0?i.vertexAttribIPointer(R,H,de,Y,Q):i.vertexAttribPointer(R,H,de,V,Y,Q)}function A(R,H,de,V){w();const Y=V.attributes,Q=de.getAttributes(),G=H.defaultAttributeValues;for(const ee in Q){const O=Q[ee];if(O.location>=0){let te=Y[ee];if(te===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const se=te.normalized,z=te.itemSize,ae=e.get(te);if(ae===void 0)continue;const De=ae.buffer,oe=ae.type,pe=ae.bytesPerElement,Ce=oe===i.INT||oe===i.UNSIGNED_INT||te.gpuType===uh;if(te.isInterleavedBufferAttribute){const ye=te.data,Re=ye.stride,He=te.offset;if(ye.isInstancedInterleavedBuffer){for(let nt=0;nt<O.locationSize;nt++)y(O.location+nt,ye.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let nt=0;nt<O.locationSize;nt++)M(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,De);for(let nt=0;nt<O.locationSize;nt++)P(O.location+nt,z/O.locationSize,oe,se,Re*pe,(He+z/O.locationSize*nt)*pe,Ce)}else{if(te.isInstancedBufferAttribute){for(let ye=0;ye<O.locationSize;ye++)y(O.location+ye,te.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<O.locationSize;ye++)M(O.location+ye);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ye=0;ye<O.locationSize;ye++)P(O.location+ye,z/O.locationSize,oe,se,z*pe,z/O.locationSize*ye*pe,Ce)}}else if(G!==void 0){const se=G[ee];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(O.location,se);break;case 3:i.vertexAttrib3fv(O.location,se);break;case 4:i.vertexAttrib4fv(O.location,se);break;default:i.vertexAttrib1fv(O.location,se)}}}}U()}function D(){$();for(const R in s){const H=s[R];for(const de in H){const V=H[de];for(const Y in V)m(V[Y].object),delete V[Y];delete H[de]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const de in H){const V=H[de];for(const Y in V)m(V[Y].object),delete V[Y];delete H[de]}delete s[R.id]}function k(R){for(const H in s){const de=s[H];if(de[R.id]===void 0)continue;const V=de[R.id];for(const Y in V)m(V[Y].object),delete V[Y];delete de[R.id]}}function $(){b(),c=!0,l!==o&&(l=o,h(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:$,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:M,disableUnusedAttributes:U}}function nw(i,e,t){let s;function o(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,v){v!==0&&(i.drawArraysInstanced(s,h,m,v),t.update(m,s,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,v);let _=0;for(let S=0;S<v;S++)_+=m[S];t.update(_,s,1)}function d(h,m,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<h.length;S++)c(h[S],m[S],g[S]);else{_.multiDrawArraysInstancedWEBGL(s,h,0,m,0,g,0,v);let S=0;for(let w=0;w<v;w++)S+=m[w]*g[w];t.update(S,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function iw(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==Zi&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const $=k===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Rr&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Tr&&!$)}function d(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reverseDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:D,maxSamples:B}}function rw(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new bs,f=new Mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||s!==0||o;return o=g,s=v.length,_},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,_){const S=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=i.get(v);if(!o||S===null||S.length===0||l&&!M)l?m(null):h();else{const U=l?0:s,P=U*4;let A=y.clippingState||null;d.value=A,A=m(S,g,P,_);for(let D=0;D!==P;++D)A[D]=t[D];y.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,g,_,S){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=d.value,S!==!0||M===null){const y=_+w*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let P=0,A=_;P!==w;++P,A+=4)c.copy(v[P]).applyMatrix4(U,f),c.normal.toArray(M,A),M[A+3]=c.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function sw(i){let e=new WeakMap;function t(c,f){return f===Sd?c.mapping=Io:f===Ed&&(c.mapping=No),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Sd||f===Ed)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new HM(d.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Co=4,Og=[.125,.215,.35,.446,.526,.582],Ds=20,id=new r0,zg=new It;let rd=null,sd=0,od=0,ad=!1;const Ps=(1+Math.sqrt(5))/2,Eo=1/Ps,Bg=[new le(-Ps,Eo,0),new le(Ps,Eo,0),new le(-Eo,0,Ps),new le(Eo,0,Ps),new le(0,Ps,-Eo),new le(0,Ps,Eo),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class Hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,sd,od),this._renderer.xr.enabled=ad,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:or,minFilter:or,generateMipmaps:!1,type:za,format:Zi,colorSpace:ko,depthBuffer:!1},o=Vg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(l)),this._blurMaterial=aw(l,e,t)}return o}_compileMaterial(e){const t=new Ii(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,s,o){const f=new Li(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,g=m.toneMapping;m.getClearColor(zg),m.toneMapping=ss,m.autoClear=!1;const _=new $v({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),S=new Ii(new Va,_);let w=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,w=!0):(_.color.copy(zg),w=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(f.up.set(0,d[y],0),f.lookAt(h[y],0,0)):U===1?(f.up.set(0,0,d[y]),f.lookAt(0,h[y],0)):(f.up.set(0,d[y],0),f.lookAt(0,0,h[y]));const P=this._cubeSize;Tc(o,U*P,y>2?P:0,P,P),m.setRenderTarget(o),w&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=v,e.background=M}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Io||e.mapping===No;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Ii(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Tc(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,id)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Bg[(o-l-1)%Bg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Ii(this._lodPlanes[o],h),g=h.uniforms,_=this._sizeLods[s]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*Ds-1),w=l/S,M=isFinite(l)?1+Math.floor(m*w):Ds;M>Ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const y=[];let U=0;for(let k=0;k<Ds;++k){const $=k/w,b=Math.exp(-$*$/2);y.push(b),k===0?U+=b:k<M&&(U+=2*b)}for(let k=0;k<y.length;k++)y[k]=y[k]/U;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=S,g.mipInt.value=P-s;const A=this._sizeLods[o],D=3*A*(o>P-Co?o-P+Co:0),B=4*(this._cubeSize-A);Tc(t,D,B,3*A,2*A),d.setRenderTarget(t),d.render(v,id)}}function ow(i){const e=[],t=[],s=[];let o=i;const l=i-Co+1+Og.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>i-Co?d=Og[c-i+Co-1]:c===0&&(d=0),s.push(d);const h=1/(f-2),m=-h,v=1+h,g=[m,m,v,m,v,v,m,m,v,v,m,v],_=6,S=6,w=3,M=2,y=1,U=new Float32Array(w*S*_),P=new Float32Array(M*S*_),A=new Float32Array(y*S*_);for(let B=0;B<_;B++){const k=B%3*2/3-1,$=B>2?0:-1,b=[k,$,0,k+2/3,$,0,k+2/3,$+1,0,k,$,0,k+2/3,$+1,0,k,$+1,0];U.set(b,w*S*B),P.set(g,M*S*B);const R=[B,B,B,B,B,B];A.set(R,y*S*B)}const D=new Qi;D.setAttribute("position",new Ki(U,w)),D.setAttribute("uv",new Ki(P,M)),D.setAttribute("faceIndex",new Ki(A,y)),e.push(D),o>Co&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Vg(i,e,t){const s=new Fs(i,e,t);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function aw(i,e,t){const s=new Float32Array(Ds),o=new le(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:yh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Gg(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Wg(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function lw(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,h=d===Sd||d===Ed,m=d===Io||d===No;if(h||m){let v=e.get(f);const g=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return t===null&&(t=new Hg(i)),v=h?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const _=f.image;return h&&_&&_.height>0||m&&_&&o(_)?(t===null&&(t=new Hg(i)),v=h?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function cw(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&To("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function uw(i,e,t,s){const o={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const _=l.get(g);_&&(e.remove(_),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],i.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,S=v.attributes.position;let w=0;if(_!==null){const U=_.array;w=_.version;for(let P=0,A=U.length;P<A;P+=3){const D=U[P+0],B=U[P+1],k=U[P+2];g.push(D,B,B,k,k,D)}}else if(S!==void 0){const U=S.array;w=S.version;for(let P=0,A=U.length/3-1;P<A;P+=3){const D=P+0,B=P+1,k=P+2;g.push(D,B,B,k,k,D)}}else return;const M=new(Hv(g)?Zv:Yv)(g,1);M.version=w;const y=l.get(v);y&&e.remove(y),l.set(v,M)}function m(v){const g=l.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function fw(i,e,t){let s;function o(g){s=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function d(g,_){i.drawElements(s,_,l,g*c),t.update(_,s,1)}function h(g,_,S){S!==0&&(i.drawElementsInstanced(s,_,l,g*c,S),t.update(_,s,S))}function m(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,l,g,0,S);let M=0;for(let y=0;y<S;y++)M+=_[y];t.update(M,s,1)}function v(g,_,S,w){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)h(g[y]/c,_[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(s,_,0,l,g,0,w,0,S);let y=0;for(let U=0;U<S;U++)y+=_[U]*w[U];t.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function dw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function hw(i,e,t){const s=new WeakMap,o=new vn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=s.get(f);if(g===void 0||g.count!==v){let R=function(){$.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var _=R;g!==void 0&&g.texture.dispose();const S=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let A=0;S===!0&&(A=1),w===!0&&(A=2),M===!0&&(A=3);let D=f.attributes.position.count*A,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const k=new Float32Array(D*B*4*v),$=new Gv(k,D,B,v);$.type=Tr,$.needsUpdate=!0;const b=A*4;for(let H=0;H<v;H++){const de=y[H],V=U[H],Y=P[H],Q=D*B*4*H;for(let G=0;G<de.count;G++){const ee=G*b;S===!0&&(o.fromBufferAttribute(de,G),k[Q+ee+0]=o.x,k[Q+ee+1]=o.y,k[Q+ee+2]=o.z,k[Q+ee+3]=0),w===!0&&(o.fromBufferAttribute(V,G),k[Q+ee+4]=o.x,k[Q+ee+5]=o.y,k[Q+ee+6]=o.z,k[Q+ee+7]=0),M===!0&&(o.fromBufferAttribute(Y,G),k[Q+ee+8]=o.x,k[Q+ee+9]=o.y,k[Q+ee+10]=o.z,k[Q+ee+11]=Y.itemSize===4?o.w:1)}}g={count:v,texture:$,size:new Vt(D,B)},s.set(f,g),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<h.length;M++)S+=h[M];const w=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:l}}function pw(i,e,t,s){let o=new WeakMap;function l(d){const h=s.render.frame,m=d.geometry,v=e.get(d,m);if(o.get(v)!==h&&(e.update(v),o.set(v,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;o.get(g)!==h&&(g.update(),o.set(g,h))}return v}function c(){o=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const o0=new ui,Xg=new Jv(1,1),a0=new Gv,l0=new TM,c0=new Qv,jg=[],$g=[],Yg=new Float32Array(16),Zg=new Float32Array(9),qg=new Float32Array(4);function Go(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=jg[o];if(l===void 0&&(l=new Float32Array(o),jg[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Pn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Kc(i,e){let t=$g[e];t===void 0&&(t=new Int32Array(e),$g[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function mw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),Pn(t,e)}}function vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),Pn(t,e)}}function xw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),Pn(t,e)}}function _w(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,s))return;qg.set(s),i.uniformMatrix2fv(this.addr,!1,qg),Pn(t,s)}}function yw(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,s))return;Zg.set(s),i.uniformMatrix3fv(this.addr,!1,Zg),Pn(t,s)}}function Mw(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,s))return;Yg.set(s),i.uniformMatrix4fv(this.addr,!1,Yg),Pn(t,s)}}function Sw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),Pn(t,e)}}function ww(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),Pn(t,e)}}function Tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),Pn(t,e)}}function Aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),Pn(t,e)}}function Rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),Pn(t,e)}}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),Pn(t,e)}}function Pw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Xg.compareFunction=Bv,l=Xg):l=o0,t.setTexture2D(e||l,o)}function Lw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||l0,o)}function Dw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||c0,o)}function Iw(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||a0,o)}function Nw(i){switch(i){case 5126:return mw;case 35664:return gw;case 35665:return vw;case 35666:return xw;case 35674:return _w;case 35675:return yw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return Ew;case 35668:case 35672:return ww;case 35669:case 35673:return Tw;case 5125:return Aw;case 36294:return Cw;case 36295:return Rw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Uw(i,e){i.uniform1fv(this.addr,e)}function Fw(i,e){const t=Go(e,this.size,2);i.uniform2fv(this.addr,t)}function kw(i,e){const t=Go(e,this.size,3);i.uniform3fv(this.addr,t)}function Ow(i,e){const t=Go(e,this.size,4);i.uniform4fv(this.addr,t)}function zw(i,e){const t=Go(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bw(i,e){const t=Go(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hw(i,e){const t=Go(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vw(i,e){i.uniform1iv(this.addr,e)}function Gw(i,e){i.uniform2iv(this.addr,e)}function Ww(i,e){i.uniform3iv(this.addr,e)}function Xw(i,e){i.uniform4iv(this.addr,e)}function jw(i,e){i.uniform1uiv(this.addr,e)}function $w(i,e){i.uniform2uiv(this.addr,e)}function Yw(i,e){i.uniform3uiv(this.addr,e)}function Zw(i,e){i.uniform4uiv(this.addr,e)}function qw(i,e,t){const s=this.cache,o=e.length,l=Kc(t,o);bn(s,l)||(i.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||o0,l[c])}function Kw(i,e,t){const s=this.cache,o=e.length,l=Kc(t,o);bn(s,l)||(i.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||l0,l[c])}function Qw(i,e,t){const s=this.cache,o=e.length,l=Kc(t,o);bn(s,l)||(i.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||c0,l[c])}function Jw(i,e,t){const s=this.cache,o=e.length,l=Kc(t,o);bn(s,l)||(i.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||a0,l[c])}function eT(i){switch(i){case 5126:return Uw;case 35664:return Fw;case 35665:return kw;case 35666:return Ow;case 35674:return zw;case 35675:return Bw;case 35676:return Hw;case 5124:case 35670:return Vw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return $w;case 36295:return Yw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}class tT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Nw(t.type)}}class nT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eT(t.type)}}class iT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function Kg(i,e){i.seq.push(e),i.map[e.id]=e}function rT(i,e,t){const s=i.name,o=s.length;for(ld.lastIndex=0;;){const l=ld.exec(s),c=ld.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){Kg(t,h===void 0?new tT(f,i,e):new nT(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new iT(f),Kg(t,v)),t=v}}}class Dc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);rT(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Qg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const sT=37297;let oT=0;function aT(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Jg=new Mt;function lT(i){Ht._getMatrix(Jg,Ht.workingColorSpace,i);const e=`mat3( ${Jg.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Uc:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ev(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+aT(i.getShaderSource(e),c)}else return o}function cT(i,e){const t=lT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uT(i,e){let t;switch(e){case Uy:t="Linear";break;case Fy:t="Reinhard";break;case ky:t="Cineon";break;case Oy:t="ACESFilmic";break;case By:t="AgX";break;case Hy:t="Neutral";break;case zy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ac=new le;function fT(){Ht.getLuminanceCoefficients(Ac);const i=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function hT(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function pT(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function Pa(i){return i!==""}function tv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mT=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(mT,vT)}const gT=new Map;function vT(i,e){let t=Et[e];if(t===void 0){const s=gT.get(e);if(s!==void 0)t=Et[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(i){return i.replace(xT,_T)}function _T(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function rv(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function yT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===py?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Io:case No:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ST(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function ET(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cv:e="ENVMAP_BLENDING_MULTIPLY";break;case Iy:e="ENVMAP_BLENDING_MIX";break;case Ny:e="ENVMAP_BLENDING_ADD";break}return e}function wT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function TT(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=yT(t),h=MT(t),m=ST(t),v=ET(t),g=wT(t),_=dT(t),S=hT(l),w=o.createProgram();let M,y,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Pa).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Pa).join(`
`),y.length>0&&(y+=`
`)):(M=[rv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),y=[rv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?Et.tonemapping_pars_fragment:"",t.toneMapping!==ss?uT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,cT("linearToOutputTexel",t.outputColorSpace),fT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),c=th(c),c=tv(c,t),c=nv(c,t),f=th(f),f=tv(f,t),f=nv(f,t),c=iv(c),f=iv(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=U+M+c,A=U+y+f,D=Qg(o,o.VERTEX_SHADER,P),B=Qg(o,o.FRAGMENT_SHADER,A);o.attachShader(w,D),o.attachShader(w,B),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function k(H){if(i.debug.checkShaderErrors){const de=o.getProgramInfoLog(w).trim(),V=o.getShaderInfoLog(D).trim(),Y=o.getShaderInfoLog(B).trim();let Q=!0,G=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,w,D,B);else{const ee=ev(o,D,"vertex"),O=ev(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+de+`
`+ee+`
`+O)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(V===""||Y==="")&&(G=!1);G&&(H.diagnostics={runnable:Q,programLog:de,vertexShader:{log:V,prefix:M},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(D),o.deleteShader(B),$=new Dc(o,w),b=pT(o,w)}let $;this.getUniforms=function(){return $===void 0&&k(this),$};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,sT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=B,this}let AT=0;class CT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new RT(e),t.set(e,s)),s}}class RT{constructor(e){this.id=AT++,this.code=e,this.usedTimes=0}}function bT(i,e,t,s,o,l,c){const f=new Xv,d=new CT,h=new Set,m=[],v=o.logarithmicDepthBuffer,g=o.vertexTextures;let _=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return h.add(b),b===0?"uv":`uv${b}`}function M(b,R,H,de,V){const Y=de.fog,Q=V.geometry,G=b.isMeshStandardMaterial?de.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),O=ee&&ee.mapping===jc?ee.image.height:null,te=S[b.type];b.precision!==null&&(_=o.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,z=se!==void 0?se.length:0;let ae=0;Q.morphAttributes.position!==void 0&&(ae=1),Q.morphAttributes.normal!==void 0&&(ae=2),Q.morphAttributes.color!==void 0&&(ae=3);let De,oe,pe,Ce;if(te){const _t=rr[te];De=_t.vertexShader,oe=_t.fragmentShader}else De=b.vertexShader,oe=b.fragmentShader,d.update(b),pe=d.getVertexShaderID(b),Ce=d.getFragmentShaderID(b);const ye=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,nt=V.isBatchedMesh===!0,Ft=!!b.map,wt=!!b.matcap,Gt=!!ee,j=!!b.aoMap,wn=!!b.lightMap,Tt=!!b.bumpMap,gt=!!b.normalMap,tt=!!b.displacementMap,Rt=!!b.emissiveMap,Ye=!!b.metalnessMap,L=!!b.roughnessMap,E=b.anisotropy>0,ie=b.clearcoat>0,xe=b.dispersion>0,_e=b.iridescence>0,me=b.sheen>0,Ke=b.transmission>0,Ie=E&&!!b.anisotropyMap,Ve=ie&&!!b.clearcoatMap,vt=ie&&!!b.clearcoatNormalMap,Te=ie&&!!b.clearcoatRoughnessMap,je=_e&&!!b.iridescenceMap,Ze=_e&&!!b.iridescenceThicknessMap,ot=me&&!!b.sheenColorMap,We=me&&!!b.sheenRoughnessMap,yt=!!b.specularMap,mt=!!b.specularColorMap,zt=!!b.specularIntensityMap,K=Ke&&!!b.transmissionMap,Pe=Ke&&!!b.thicknessMap,he=!!b.gradientMap,ge=!!b.alphaMap,Oe=b.alphaTest>0,Ue=!!b.alphaHash,ct=!!b.extensions;let xt=ss;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=i.toneMapping);const hn={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:oe,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:nt,batchingColor:nt&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ko,alphaToCoverage:!!b.alphaToCoverage,map:Ft,matcap:wt,envMap:Gt,envMapMode:Gt&&ee.mapping,envMapCubeUVHeight:O,aoMap:j,lightMap:wn,bumpMap:Tt,normalMap:gt,displacementMap:g&&tt,emissiveMap:Rt,normalMapObjectSpace:gt&&b.normalMapType===Xy,normalMapTangentSpace:gt&&b.normalMapType===zv,metalnessMap:Ye,roughnessMap:L,anisotropy:E,anisotropyMap:Ie,clearcoat:ie,clearcoatMap:Ve,clearcoatNormalMap:vt,clearcoatRoughnessMap:Te,dispersion:xe,iridescence:_e,iridescenceMap:je,iridescenceThicknessMap:Ze,sheen:me,sheenColorMap:ot,sheenRoughnessMap:We,specularMap:yt,specularColorMap:mt,specularIntensityMap:zt,transmission:Ke,transmissionMap:K,thicknessMap:Pe,gradientMap:he,opaque:b.transparent===!1&&b.blending===Ro&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:Oe,alphaHash:Ue,combine:b.combine,mapUv:Ft&&w(b.map.channel),aoMapUv:j&&w(b.aoMap.channel),lightMapUv:wn&&w(b.lightMap.channel),bumpMapUv:Tt&&w(b.bumpMap.channel),normalMapUv:gt&&w(b.normalMap.channel),displacementMapUv:tt&&w(b.displacementMap.channel),emissiveMapUv:Rt&&w(b.emissiveMap.channel),metalnessMapUv:Ye&&w(b.metalnessMap.channel),roughnessMapUv:L&&w(b.roughnessMap.channel),anisotropyMapUv:Ie&&w(b.anisotropyMap.channel),clearcoatMapUv:Ve&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:vt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:We&&w(b.sheenRoughnessMap.channel),specularMapUv:yt&&w(b.specularMap.channel),specularColorMapUv:mt&&w(b.specularColorMap.channel),specularIntensityMapUv:zt&&w(b.specularIntensityMap.channel),transmissionMapUv:K&&w(b.transmissionMap.channel),thicknessMapUv:Pe&&w(b.thicknessMap.channel),alphaMapUv:ge&&w(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(gt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ft||ge),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Ft&&b.map.isVideoTexture===!0&&Ht.getTransfer(b.map.colorSpace)===$t,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(b.emissiveMap.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wr,flipSided:b.side===ci,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ct&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&b.extensions.multiDraw===!0||nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return hn.vertexUv1s=h.has(1),hn.vertexUv2s=h.has(2),hn.vertexUv3s=h.has(3),h.clear(),hn}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)R.push(H),R.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(U(R,b),P(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function U(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const R=S[b.type];let H;if(R){const de=rr[R];H=kM.clone(de.uniforms)}else H=b.uniforms;return H}function D(b,R){let H;for(let de=0,V=m.length;de<V;de++){const Y=m[de];if(Y.cacheKey===R){H=Y,++H.usedTimes;break}}return H===void 0&&(H=new TT(i,R,b,l),m.push(H)),H}function B(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function k(b){d.remove(b)}function $(){d.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:A,acquireProgram:D,releaseProgram:B,releaseShaderCache:k,programs:m,dispose:$}}function PT(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function o(c,f,d){i.get(c)[f]=d}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function LT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ov(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v,g,_,S,w,M){let y=i[e];return y===void 0?(y={id:v.id,object:v,geometry:g,material:_,groupOrder:S,renderOrder:v.renderOrder,z:w,group:M},i[e]=y):(y.id=v.id,y.object=v,y.geometry=g,y.material=_,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=w,y.group=M),e++,y}function f(v,g,_,S,w,M){const y=c(v,g,_,S,w,M);_.transmission>0?s.push(y):_.transparent===!0?o.push(y):t.push(y)}function d(v,g,_,S,w,M){const y=c(v,g,_,S,w,M);_.transmission>0?s.unshift(y):_.transparent===!0?o.unshift(y):t.unshift(y)}function h(v,g){t.length>1&&t.sort(v||LT),s.length>1&&s.sort(g||sv),o.length>1&&o.sort(g||sv)}function m(){for(let v=e,g=i.length;v<g;v++){const _=i[v];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:d,finish:m,sort:h}}function DT(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new ov,i.set(s,[c])):o>=l.length?(c=new ov,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function IT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new It};break;case"SpotLight":t={position:new le,direction:new le,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new le,halfWidth:new le,halfHeight:new le};break}return i[e.id]=t,t}}}function NT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let UT=0;function FT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kT(i){const e=new IT,t=NT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new le);const o=new le,l=new dn,c=new dn;function f(h){let m=0,v=0,g=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let _=0,S=0,w=0,M=0,y=0,U=0,P=0,A=0,D=0,B=0,k=0;h.sort(FT);for(let b=0,R=h.length;b<R;b++){const H=h[b],de=H.color,V=H.intensity,Y=H.distance,Q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=de.r*V,v+=de.g*V,g+=de.b*V;else if(H.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(H.sh.coefficients[G],V);k++}else if(H.isDirectionalLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ee=H.shadow,O=t.get(H);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,s.directionalShadow[_]=O,s.directionalShadowMap[_]=Q,s.directionalShadowMatrix[_]=H.shadow.matrix,U++}s.directional[_]=G,_++}else if(H.isSpotLight){const G=e.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(de).multiplyScalar(V),G.distance=Y,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,s.spot[w]=G;const ee=H.shadow;if(H.map&&(s.spotLightMap[D]=H.map,D++,ee.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[w]=ee.matrix,H.castShadow){const O=t.get(H);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,s.spotShadow[w]=O,s.spotShadowMap[w]=Q,A++}w++}else if(H.isRectAreaLight){const G=e.get(H);G.color.copy(de).multiplyScalar(V),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=G,M++}else if(H.isPointLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const ee=H.shadow,O=t.get(H);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,O.shadowCameraNear=ee.camera.near,O.shadowCameraFar=ee.camera.far,s.pointShadow[S]=O,s.pointShadowMap[S]=Q,s.pointShadowMatrix[S]=H.shadow.matrix,P++}s.point[S]=G,S++}else if(H.isHemisphereLight){const G=e.get(H);G.skyColor.copy(H.color).multiplyScalar(V),G.groundColor.copy(H.groundColor).multiplyScalar(V),s.hemi[y]=G,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=g;const $=s.hash;($.directionalLength!==_||$.pointLength!==S||$.spotLength!==w||$.rectAreaLength!==M||$.hemiLength!==y||$.numDirectionalShadows!==U||$.numPointShadows!==P||$.numSpotShadows!==A||$.numSpotMaps!==D||$.numLightProbes!==k)&&(s.directional.length=_,s.spot.length=w,s.rectArea.length=M,s.point.length=S,s.hemi.length=y,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+D-B,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=k,$.directionalLength=_,$.pointLength=S,$.spotLength=w,$.rectAreaLength=M,$.hemiLength=y,$.numDirectionalShadows=U,$.numPointShadows=P,$.numSpotShadows=A,$.numSpotMaps=D,$.numLightProbes=k,s.version=UT++)}function d(h,m){let v=0,g=0,_=0,S=0,w=0;const M=m.matrixWorldInverse;for(let y=0,U=h.length;y<U;y++){const P=h[y];if(P.isDirectionalLight){const A=s.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),v++}else if(P.isSpotLight){const A=s.spot[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),_++}else if(P.isRectAreaLight){const A=s.rectArea[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(M),c.identity(),l.copy(P.matrixWorld),l.premultiply(M),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const A=s.point[g];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const A=s.hemi[w];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(M),w++}}}return{setup:f,setupView:d,state:s}}function av(i){const e=new kT(i),t=[],s=[];function o(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function OT(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new av(i),e.set(o,[f])):l>=c.length?(f=new av(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
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
}`;function HT(i,e,t){let s=new vh;const o=new Vt,l=new Vt,c=new vn,f=new uS({depthPacking:Wy}),d=new fS,h={},m=t.maxTextureSize,v={[os]:ci,[ci]:os,[wr]:wr},g=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:zT,fragmentShader:BT}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const S=new Qi;S.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ii(S,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let y=this.type;this.render=function(B,k,$){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const b=i.getRenderTarget(),R=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),de=i.state;de.setBlending(rs),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const V=y!==Er&&this.type===Er,Y=y===Er&&this.type!==Er;for(let Q=0,G=B.length;Q<G;Q++){const ee=B[Q],O=ee.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const te=O.getFrameExtents();if(o.multiply(te),l.copy(O.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/te.x),o.x=l.x*te.x,O.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/te.y),o.y=l.y*te.y,O.mapSize.y=l.y)),O.map===null||V===!0||Y===!0){const z=this.type!==Er?{minFilter:qi,magFilter:qi}:{};O.map!==null&&O.map.dispose(),O.map=new Fs(o.x,o.y,z),O.map.texture.name=ee.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const se=O.getViewportCount();for(let z=0;z<se;z++){const ae=O.getViewport(z);c.set(l.x*ae.x,l.y*ae.y,l.x*ae.z,l.y*ae.w),de.viewport(c),O.updateMatrices(ee,z),s=O.getFrustum(),A(k,$,O.camera,ee,this.type)}O.isPointLightShadow!==!0&&this.type===Er&&U(O,$),O.needsUpdate=!1}y=this.type,M.needsUpdate=!1,i.setRenderTarget(b,R,H)};function U(B,k){const $=e.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,_.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fs(o.x,o.y)),g.uniforms.shadow_pass.value=B.map.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(k,null,$,g,w,null),_.uniforms.shadow_pass.value=B.mapPass.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(k,null,$,_,w,null)}function P(B,k,$,b){let R=null;const H=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=$.isPointLight===!0?d:f,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const de=R.uuid,V=k.uuid;let Y=h[de];Y===void 0&&(Y={},h[de]=Y);let Q=Y[V];Q===void 0&&(Q=R.clone(),Y[V]=Q,k.addEventListener("dispose",D)),R=Q}if(R.visible=k.visible,R.wireframe=k.wireframe,b===Er?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:v[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const de=i.properties.get(R);de.light=$}return R}function A(B,k,$,b,R){if(B.visible===!1)return;if(B.layers.test(k.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Er)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const V=e.update(B),Y=B.material;if(Array.isArray(Y)){const Q=V.groups;for(let G=0,ee=Q.length;G<ee;G++){const O=Q[G],te=Y[O.materialIndex];if(te&&te.visible){const se=P(B,te,b,R);B.onBeforeShadow(i,B,k,$,V,se,O),i.renderBufferDirect($,null,V,se,B,O),B.onAfterShadow(i,B,k,$,V,se,O)}}}else if(Y.visible){const Q=P(B,Y,b,R);B.onBeforeShadow(i,B,k,$,V,Q,null),i.renderBufferDirect($,null,V,Q,B,null),B.onAfterShadow(i,B,k,$,V,Q,null)}}const de=B.children;for(let V=0,Y=de.length;V<Y;V++)A(de[V],k,$,b,R)}function D(B){B.target.removeEventListener("dispose",D);for(const $ in h){const b=h[$],R=B.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const VT={[md]:gd,[vd]:yd,[xd]:Md,[Do]:_d,[gd]:md,[yd]:vd,[Md]:xd,[_d]:Do};function GT(i,e){function t(){let K=!1;const Pe=new vn;let he=null;const ge=new vn(0,0,0,0);return{setMask:function(Oe){he!==Oe&&!K&&(i.colorMask(Oe,Oe,Oe,Oe),he=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,Ue,ct,xt,hn){hn===!0&&(Oe*=xt,Ue*=xt,ct*=xt),Pe.set(Oe,Ue,ct,xt),ge.equals(Pe)===!1&&(i.clearColor(Oe,Ue,ct,xt),ge.copy(Pe))},reset:function(){K=!1,he=null,ge.set(-1,0,0,0)}}}function s(){let K=!1,Pe=!1,he=null,ge=null,Oe=null;return{setReversed:function(Ue){if(Pe!==Ue){const ct=e.get("EXT_clip_control");Pe?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const xt=Oe;Oe=null,this.setClear(xt)}Pe=Ue},getReversed:function(){return Pe},setTest:function(Ue){Ue?ye(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Ue){he!==Ue&&!K&&(i.depthMask(Ue),he=Ue)},setFunc:function(Ue){if(Pe&&(Ue=VT[Ue]),ge!==Ue){switch(Ue){case md:i.depthFunc(i.NEVER);break;case gd:i.depthFunc(i.ALWAYS);break;case vd:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case xd:i.depthFunc(i.EQUAL);break;case _d:i.depthFunc(i.GEQUAL);break;case yd:i.depthFunc(i.GREATER);break;case Md:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ue}},setLocked:function(Ue){K=Ue},setClear:function(Ue){Oe!==Ue&&(Pe&&(Ue=1-Ue),i.clearDepth(Ue),Oe=Ue)},reset:function(){K=!1,he=null,ge=null,Oe=null,Pe=!1}}}function o(){let K=!1,Pe=null,he=null,ge=null,Oe=null,Ue=null,ct=null,xt=null,hn=null;return{setTest:function(_t){K||(_t?ye(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(_t){Pe!==_t&&!K&&(i.stencilMask(_t),Pe=_t)},setFunc:function(_t,jt,rn){(he!==_t||ge!==jt||Oe!==rn)&&(i.stencilFunc(_t,jt,rn),he=_t,ge=jt,Oe=rn)},setOp:function(_t,jt,rn){(Ue!==_t||ct!==jt||xt!==rn)&&(i.stencilOp(_t,jt,rn),Ue=_t,ct=jt,xt=rn)},setLocked:function(_t){K=_t},setClear:function(_t){hn!==_t&&(i.clearStencil(_t),hn=_t)},reset:function(){K=!1,Pe=null,he=null,ge=null,Oe=null,Ue=null,ct=null,xt=null,hn=null}}}const l=new t,c=new s,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g=new WeakMap,_=[],S=null,w=!1,M=null,y=null,U=null,P=null,A=null,D=null,B=null,k=new It(0,0,0),$=0,b=!1,R=null,H=null,de=null,V=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=ee>=1):O.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=ee>=2);let te=null,se={};const z=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),De=new vn().fromArray(z),oe=new vn().fromArray(ae);function pe(K,Pe,he,ge){const Oe=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(K,Ue),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<he;ct++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Pe+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return Ue}const Ce={};Ce[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(i.DEPTH_TEST),c.setFunc(Do),Tt(!1),gt(ig),ye(i.CULL_FACE),j(rs);function ye(K){m[K]!==!0&&(i.enable(K),m[K]=!0)}function Re(K){m[K]!==!1&&(i.disable(K),m[K]=!1)}function He(K,Pe){return v[K]!==Pe?(i.bindFramebuffer(K,Pe),v[K]=Pe,K===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Pe),K===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function nt(K,Pe){let he=_,ge=!1;if(K){he=g.get(Pe),he===void 0&&(he=[],g.set(Pe,he));const Oe=K.textures;if(he.length!==Oe.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,ct=Oe.length;Ue<ct;Ue++)he[Ue]=i.COLOR_ATTACHMENT0+Ue;he.length=Oe.length,ge=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,ge=!0);ge&&i.drawBuffers(he)}function Ft(K){return S!==K?(i.useProgram(K),S=K,!0):!1}const wt={[Ls]:i.FUNC_ADD,[gy]:i.FUNC_SUBTRACT,[vy]:i.FUNC_REVERSE_SUBTRACT};wt[xy]=i.MIN,wt[_y]=i.MAX;const Gt={[yy]:i.ZERO,[My]:i.ONE,[Sy]:i.SRC_COLOR,[hd]:i.SRC_ALPHA,[Ry]:i.SRC_ALPHA_SATURATE,[Ay]:i.DST_COLOR,[wy]:i.DST_ALPHA,[Ey]:i.ONE_MINUS_SRC_COLOR,[pd]:i.ONE_MINUS_SRC_ALPHA,[Cy]:i.ONE_MINUS_DST_COLOR,[Ty]:i.ONE_MINUS_DST_ALPHA,[by]:i.CONSTANT_COLOR,[Py]:i.ONE_MINUS_CONSTANT_COLOR,[Ly]:i.CONSTANT_ALPHA,[Dy]:i.ONE_MINUS_CONSTANT_ALPHA};function j(K,Pe,he,ge,Oe,Ue,ct,xt,hn,_t){if(K===rs){w===!0&&(Re(i.BLEND),w=!1);return}if(w===!1&&(ye(i.BLEND),w=!0),K!==my){if(K!==M||_t!==b){if((y!==Ls||A!==Ls)&&(i.blendEquation(i.FUNC_ADD),y=Ls,A=Ls),_t)switch(K){case Ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rg:i.blendFunc(i.ONE,i.ONE);break;case sg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}U=null,P=null,D=null,B=null,k.set(0,0,0),$=0,M=K,b=_t}return}Oe=Oe||Pe,Ue=Ue||he,ct=ct||ge,(Pe!==y||Oe!==A)&&(i.blendEquationSeparate(wt[Pe],wt[Oe]),y=Pe,A=Oe),(he!==U||ge!==P||Ue!==D||ct!==B)&&(i.blendFuncSeparate(Gt[he],Gt[ge],Gt[Ue],Gt[ct]),U=he,P=ge,D=Ue,B=ct),(xt.equals(k)===!1||hn!==$)&&(i.blendColor(xt.r,xt.g,xt.b,hn),k.copy(xt),$=hn),M=K,b=!1}function wn(K,Pe){K.side===wr?Re(i.CULL_FACE):ye(i.CULL_FACE);let he=K.side===ci;Pe&&(he=!he),Tt(he),K.blending===Ro&&K.transparent===!1?j(rs):j(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),l.setMask(K.colorWrite);const ge=K.stencilWrite;f.setTest(ge),ge&&(f.setMask(K.stencilWriteMask),f.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),f.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Rt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(K){R!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),R=K)}function gt(K){K!==dy?(ye(i.CULL_FACE),K!==H&&(K===ig?i.cullFace(i.BACK):K===hy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),H=K}function tt(K){K!==de&&(G&&i.lineWidth(K),de=K)}function Rt(K,Pe,he){K?(ye(i.POLYGON_OFFSET_FILL),(V!==Pe||Y!==he)&&(i.polygonOffset(Pe,he),V=Pe,Y=he)):Re(i.POLYGON_OFFSET_FILL)}function Ye(K){K?ye(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function L(K){K===void 0&&(K=i.TEXTURE0+Q-1),te!==K&&(i.activeTexture(K),te=K)}function E(K,Pe,he){he===void 0&&(te===null?he=i.TEXTURE0+Q-1:he=te);let ge=se[he];ge===void 0&&(ge={type:void 0,texture:void 0},se[he]=ge),(ge.type!==K||ge.texture!==Pe)&&(te!==he&&(i.activeTexture(he),te=he),i.bindTexture(K,Pe||Ce[K]),ge.type=K,ge.texture=Pe)}function ie(){const K=se[te];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ke(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ot(K){De.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),De.copy(K))}function We(K){oe.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),oe.copy(K))}function yt(K,Pe){let he=h.get(Pe);he===void 0&&(he=new WeakMap,h.set(Pe,he));let ge=he.get(K);ge===void 0&&(ge=i.getUniformBlockIndex(Pe,K.name),he.set(K,ge))}function mt(K,Pe){const ge=h.get(Pe).get(K);d.get(Pe)!==ge&&(i.uniformBlockBinding(Pe,ge,K.__bindingPointIndex),d.set(Pe,ge))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},te=null,se={},v={},g=new WeakMap,_=[],S=null,w=!1,M=null,y=null,U=null,P=null,A=null,D=null,B=null,k=new It(0,0,0),$=0,b=!1,R=null,H=null,de=null,V=null,Y=null,De.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Re,bindFramebuffer:He,drawBuffers:nt,useProgram:Ft,setBlending:j,setMaterial:wn,setFlipSided:Tt,setCullFace:gt,setLineWidth:tt,setPolygonOffset:Rt,setScissorTest:Ye,activeTexture:L,bindTexture:E,unbindTexture:ie,compressedTexImage2D:xe,compressedTexImage3D:_e,texImage2D:je,texImage3D:Ze,updateUBOMapping:yt,uniformBlockBinding:mt,texStorage2D:vt,texStorage3D:Te,texSubImage2D:me,texSubImage3D:Ke,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ve,scissor:ot,viewport:We,reset:zt}}function WT(i,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,m=new WeakMap;let v;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,E){return _?new OffscreenCanvas(L,E):kc("canvas")}function w(L,E,ie){let xe=1;const _e=Ye(L);if((_e.width>ie||_e.height>ie)&&(xe=ie/Math.max(_e.width,_e.height)),xe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor(xe*_e.width),Ke=Math.floor(xe*_e.height);v===void 0&&(v=S(me,Ke));const Ie=E?S(me,Ke):v;return Ie.width=me,Ie.height=Ke,Ie.getContext("2d").drawImage(L,0,0,me,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+Ke+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(L,E,ie,xe,_e=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=E;if(E===i.RED&&(ie===i.FLOAT&&(me=i.R32F),ie===i.HALF_FLOAT&&(me=i.R16F),ie===i.UNSIGNED_BYTE&&(me=i.R8)),E===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.R8UI),ie===i.UNSIGNED_SHORT&&(me=i.R16UI),ie===i.UNSIGNED_INT&&(me=i.R32UI),ie===i.BYTE&&(me=i.R8I),ie===i.SHORT&&(me=i.R16I),ie===i.INT&&(me=i.R32I)),E===i.RG&&(ie===i.FLOAT&&(me=i.RG32F),ie===i.HALF_FLOAT&&(me=i.RG16F),ie===i.UNSIGNED_BYTE&&(me=i.RG8)),E===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RG8UI),ie===i.UNSIGNED_SHORT&&(me=i.RG16UI),ie===i.UNSIGNED_INT&&(me=i.RG32UI),ie===i.BYTE&&(me=i.RG8I),ie===i.SHORT&&(me=i.RG16I),ie===i.INT&&(me=i.RG32I)),E===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(me=i.RGB16UI),ie===i.UNSIGNED_INT&&(me=i.RGB32UI),ie===i.BYTE&&(me=i.RGB8I),ie===i.SHORT&&(me=i.RGB16I),ie===i.INT&&(me=i.RGB32I)),E===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),ie===i.UNSIGNED_INT&&(me=i.RGBA32UI),ie===i.BYTE&&(me=i.RGBA8I),ie===i.SHORT&&(me=i.RGBA16I),ie===i.INT&&(me=i.RGBA32I)),E===i.RGB&&ie===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),E===i.RGBA){const Ke=_e?Uc:Ht.getTransfer(xe);ie===i.FLOAT&&(me=i.RGBA32F),ie===i.HALF_FLOAT&&(me=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(me=Ke===$t?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function A(L,E){let ie;return L?E===null||E===Us||E===Uo?ie=i.DEPTH24_STENCIL8:E===Tr?ie=i.DEPTH32F_STENCIL8:E===Ia&&(ie=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Us||E===Uo?ie=i.DEPTH_COMPONENT24:E===Tr?ie=i.DEPTH_COMPONENT32F:E===Ia&&(ie=i.DEPTH_COMPONENT16),ie}function D(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==qi&&L.minFilter!==or?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function B(L){const E=L.target;E.removeEventListener("dispose",B),$(E),E.isVideoTexture&&m.delete(E)}function k(L){const E=L.target;E.removeEventListener("dispose",k),R(E)}function $(L){const E=s.get(L);if(E.__webglInit===void 0)return;const ie=L.source,xe=g.get(ie);if(xe){const _e=xe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(L),Object.keys(xe).length===0&&g.delete(ie)}s.remove(L)}function b(L){const E=s.get(L);i.deleteTexture(E.__webglTexture);const ie=L.source,xe=g.get(ie);delete xe[E.__cacheKey],c.memory.textures--}function R(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let _e=0;_e<E.__webglFramebuffer[xe].length;_e++)i.deleteFramebuffer(E.__webglFramebuffer[xe][_e]);else i.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)i.deleteFramebuffer(E.__webglFramebuffer[xe]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=L.textures;for(let xe=0,_e=ie.length;xe<_e;xe++){const me=s.get(ie[xe]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),c.memory.textures--),s.remove(ie[xe])}s.remove(L)}let H=0;function de(){H=0}function V(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function Y(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Q(L,E){const ie=s.get(L);if(L.isVideoTexture&&tt(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const xe=L.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ie,L,E);return}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+E)}function G(L,E){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){oe(ie,L,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+E)}function ee(L,E){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){oe(ie,L,E);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+E)}function O(L,E){const ie=s.get(L);if(L.version>0&&ie.__version!==L.version){pe(ie,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+E)}const te={[wd]:i.REPEAT,[Is]:i.CLAMP_TO_EDGE,[Td]:i.MIRRORED_REPEAT},se={[qi]:i.NEAREST,[Vy]:i.NEAREST_MIPMAP_NEAREST,[Jl]:i.NEAREST_MIPMAP_LINEAR,[or]:i.LINEAR,[If]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},z={[jy]:i.NEVER,[Qy]:i.ALWAYS,[$y]:i.LESS,[Bv]:i.LEQUAL,[Yy]:i.EQUAL,[Ky]:i.GEQUAL,[Zy]:i.GREATER,[qy]:i.NOTEQUAL};function ae(L,E){if(E.type===Tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===or||E.magFilter===If||E.magFilter===Jl||E.magFilter===Ns||E.minFilter===or||E.minFilter===If||E.minFilter===Jl||E.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,se[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qi||E.minFilter!==Jl&&E.minFilter!==Ns||E.type===Tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function De(L,E){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const xe=E.source;let _e=g.get(xe);_e===void 0&&(_e={},g.set(xe,_e));const me=Y(E);if(me!==L.__cacheKey){_e[me]===void 0&&(_e[me]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),_e[me].usedTimes++;const Ke=_e[L.__cacheKey];Ke!==void 0&&(_e[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(E)),L.__cacheKey=me,L.__webglTexture=_e[me].texture}return ie}function oe(L,E,ie){let xe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=i.TEXTURE_3D);const _e=De(L,E),me=E.source;t.bindTexture(xe,L.__webglTexture,i.TEXTURE0+ie);const Ke=s.get(me);if(me.version!==Ke.__version||_e===!0){t.activeTexture(i.TEXTURE0+ie);const Ie=Ht.getPrimaries(Ht.workingColorSpace),Ve=E.colorSpace===ts?null:Ht.getPrimaries(E.colorSpace),vt=E.colorSpace===ts||Ie===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Te=w(E.image,!1,o.maxTextureSize);Te=Rt(E,Te);const je=l.convert(E.format,E.colorSpace),Ze=l.convert(E.type);let ot=P(E.internalFormat,je,Ze,E.colorSpace,E.isVideoTexture);ae(xe,E);let We;const yt=E.mipmaps,mt=E.isVideoTexture!==!0,zt=Ke.__version===void 0||_e===!0,K=me.dataReady,Pe=D(E,Te);if(E.isDepthTexture)ot=A(E.format===Fo,E.type),zt&&(mt?t.texStorage2D(i.TEXTURE_2D,1,ot,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,ot,Te.width,Te.height,0,je,Ze,null));else if(E.isDataTexture)if(yt.length>0){mt&&zt&&t.texStorage2D(i.TEXTURE_2D,Pe,ot,yt[0].width,yt[0].height);for(let he=0,ge=yt.length;he<ge;he++)We=yt[he],mt?K&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,We.width,We.height,je,Ze,We.data):t.texImage2D(i.TEXTURE_2D,he,ot,We.width,We.height,0,je,Ze,We.data);E.generateMipmaps=!1}else mt?(zt&&t.texStorage2D(i.TEXTURE_2D,Pe,ot,Te.width,Te.height),K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,je,Ze,Te.data)):t.texImage2D(i.TEXTURE_2D,0,ot,Te.width,Te.height,0,je,Ze,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){mt&&zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ot,yt[0].width,yt[0].height,Te.depth);for(let he=0,ge=yt.length;he<ge;he++)if(We=yt[he],E.format!==Zi)if(je!==null)if(mt){if(K)if(E.layerUpdates.size>0){const Oe=kg(We.width,We.height,E.format,E.type);for(const Ue of E.layerUpdates){const ct=We.data.subarray(Ue*Oe/We.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/We.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ue,We.width,We.height,1,je,ct)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,We.width,We.height,Te.depth,je,We.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ot,We.width,We.height,Te.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,We.width,We.height,Te.depth,je,Ze,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ot,We.width,We.height,Te.depth,0,je,Ze,We.data)}else{mt&&zt&&t.texStorage2D(i.TEXTURE_2D,Pe,ot,yt[0].width,yt[0].height);for(let he=0,ge=yt.length;he<ge;he++)We=yt[he],E.format!==Zi?je!==null?mt?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,We.width,We.height,je,We.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ot,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?K&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,We.width,We.height,je,Ze,We.data):t.texImage2D(i.TEXTURE_2D,he,ot,We.width,We.height,0,je,Ze,We.data)}else if(E.isDataArrayTexture)if(mt){if(zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ot,Te.width,Te.height,Te.depth),K)if(E.layerUpdates.size>0){const he=kg(Te.width,Te.height,E.format,E.type);for(const ge of E.layerUpdates){const Oe=Te.data.subarray(ge*he/Te.data.BYTES_PER_ELEMENT,(ge+1)*he/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,Te.width,Te.height,1,je,Ze,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,je,Ze,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,Te.width,Te.height,Te.depth,0,je,Ze,Te.data);else if(E.isData3DTexture)mt?(zt&&t.texStorage3D(i.TEXTURE_3D,Pe,ot,Te.width,Te.height,Te.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,je,Ze,Te.data)):t.texImage3D(i.TEXTURE_3D,0,ot,Te.width,Te.height,Te.depth,0,je,Ze,Te.data);else if(E.isFramebufferTexture){if(zt)if(mt)t.texStorage2D(i.TEXTURE_2D,Pe,ot,Te.width,Te.height);else{let he=Te.width,ge=Te.height;for(let Oe=0;Oe<Pe;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ot,he,ge,0,je,Ze,null),he>>=1,ge>>=1}}else if(yt.length>0){if(mt&&zt){const he=Ye(yt[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ot,he.width,he.height)}for(let he=0,ge=yt.length;he<ge;he++)We=yt[he],mt?K&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,je,Ze,We):t.texImage2D(i.TEXTURE_2D,he,ot,je,Ze,We);E.generateMipmaps=!1}else if(mt){if(zt){const he=Ye(Te);t.texStorage2D(i.TEXTURE_2D,Pe,ot,he.width,he.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,Ze,Te)}else t.texImage2D(i.TEXTURE_2D,0,ot,je,Ze,Te);M(E)&&y(xe),Ke.__version=me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,ie){if(E.image.length!==6)return;const xe=De(L,E),_e=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+ie);const me=s.get(_e);if(_e.version!==me.__version||xe===!0){t.activeTexture(i.TEXTURE0+ie);const Ke=Ht.getPrimaries(Ht.workingColorSpace),Ie=E.colorSpace===ts?null:Ht.getPrimaries(E.colorSpace),Ve=E.colorSpace===ts||Ke===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const vt=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,je=[];for(let ge=0;ge<6;ge++)!vt&&!Te?je[ge]=w(E.image[ge],!0,o.maxCubemapSize):je[ge]=Te?E.image[ge].image:E.image[ge],je[ge]=Rt(E,je[ge]);const Ze=je[0],ot=l.convert(E.format,E.colorSpace),We=l.convert(E.type),yt=P(E.internalFormat,ot,We,E.colorSpace),mt=E.isVideoTexture!==!0,zt=me.__version===void 0||xe===!0,K=_e.dataReady;let Pe=D(E,Ze);ae(i.TEXTURE_CUBE_MAP,E);let he;if(vt){mt&&zt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,yt,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){he=je[ge].mipmaps;for(let Oe=0;Oe<he.length;Oe++){const Ue=he[Oe];E.format!==Zi?ot!==null?mt?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,Ue.width,Ue.height,ot,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,yt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,Ue.width,Ue.height,ot,We,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,yt,Ue.width,Ue.height,0,ot,We,Ue.data)}}}else{if(he=E.mipmaps,mt&&zt){he.length>0&&Pe++;const ge=Ye(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,yt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){mt?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,je[ge].width,je[ge].height,ot,We,je[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,je[ge].width,je[ge].height,0,ot,We,je[ge].data);for(let Oe=0;Oe<he.length;Oe++){const ct=he[Oe].image[ge].image;mt?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,ct.width,ct.height,ot,We,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,yt,ct.width,ct.height,0,ot,We,ct.data)}}else{mt?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ot,We,je[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,ot,We,je[ge]);for(let Oe=0;Oe<he.length;Oe++){const Ue=he[Oe];mt?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,ot,We,Ue.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,yt,ot,We,Ue.image[ge])}}}M(E)&&y(i.TEXTURE_CUBE_MAP),me.__version=_e.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ce(L,E,ie,xe,_e,me){const Ke=l.convert(ie.format,ie.colorSpace),Ie=l.convert(ie.type),Ve=P(ie.internalFormat,Ke,Ie,ie.colorSpace),vt=s.get(E),Te=s.get(ie);if(Te.__renderTarget=E,!vt.__hasExternalTextures){const je=Math.max(1,E.width>>me),Ze=Math.max(1,E.height>>me);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,me,Ve,je,Ze,E.depth,0,Ke,Ie,null):t.texImage2D(_e,me,Ve,je,Ze,0,Ke,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),gt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,_e,Te.__webglTexture,0,Tt(E)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,_e,Te.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(L,E,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const xe=E.depthTexture,_e=xe&&xe.isDepthTexture?xe.type:null,me=A(E.stencilBuffer,_e),Ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Tt(E);gt(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,me,E.width,E.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ke,i.RENDERBUFFER,L)}else{const xe=E.textures;for(let _e=0;_e<xe.length;_e++){const me=xe[_e],Ke=l.convert(me.format,me.colorSpace),Ie=l.convert(me.type),Ve=P(me.internalFormat,Ke,Ie,me.colorSpace),vt=Tt(E);ie&&gt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Ve,E.width,E.height):gt(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,Ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const _e=xe.__webglTexture,me=Tt(E);if(E.depthTexture.format===bo)gt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Fo)gt(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function He(L){const E=s.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const xe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",_e)};xe.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=xe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Re(E.__webglFramebuffer,L)}else if(ie){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=i.createRenderbuffer(),ye(E.__webglDepthbuffer[xe],L,!1);else{const _e=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,me)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ye(E.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,E,ie){const xe=s.get(L);E!==void 0&&Ce(xe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&He(L)}function Ft(L){const E=L.texture,ie=s.get(L),xe=s.get(E);L.addEventListener("dispose",k);const _e=L.textures,me=L.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=E.version,c.memory.textures++),me){ie.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer[Ie]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)ie.__webglFramebuffer[Ie][Ve]=i.createFramebuffer()}else ie.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)ie.__webglFramebuffer[Ie]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Ke)for(let Ie=0,Ve=_e.length;Ie<Ve;Ie++){const vt=s.get(_e[Ie]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&gt(L)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ie=0;Ie<_e.length;Ie++){const Ve=_e[Ie];ie.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie]);const vt=l.convert(Ve.format,Ve.colorSpace),Te=l.convert(Ve.type),je=P(Ve.internalFormat,vt,Te,Ve.colorSpace,L.isXRRenderTarget===!0),Ze=Tt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,je,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ie.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ae(i.TEXTURE_CUBE_MAP,E);for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Ce(ie.__webglFramebuffer[Ie][Ve],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ve);else Ce(ie.__webglFramebuffer[Ie],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);M(E)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ie=0,Ve=_e.length;Ie<Ve;Ie++){const vt=_e[Ie],Te=s.get(vt);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),ae(i.TEXTURE_2D,vt),Ce(ie.__webglFramebuffer,L,vt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),M(vt)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,xe.__webglTexture),ae(Ie,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)Ce(ie.__webglFramebuffer[Ve],L,E,i.COLOR_ATTACHMENT0,Ie,Ve);else Ce(ie.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,Ie,0);M(E)&&y(Ie),t.unbindTexture()}L.depthBuffer&&He(L)}function wt(L){const E=L.textures;for(let ie=0,xe=E.length;ie<xe;ie++){const _e=E[ie];if(M(_e)){const me=U(L),Ke=s.get(_e).__webglTexture;t.bindTexture(me,Ke),y(me),t.unbindTexture()}}}const Gt=[],j=[];function wn(L){if(L.samples>0){if(gt(L)===!1){const E=L.textures,ie=L.width,xe=L.height;let _e=i.COLOR_BUFFER_BIT;const me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=s.get(L),Ie=E.length>1;if(Ie)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ve]);const vt=s.get(E[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,ie,xe,0,0,ie,xe,_e,i.NEAREST),d===!0&&(Gt.length=0,j.length=0,Gt.push(i.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Gt.push(me),j.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ve]);const vt=s.get(E[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Tt(L){return Math.min(o.maxSamples,L.samples)}function gt(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function tt(L){const E=c.render.frame;m.get(L)!==E&&(m.set(L,E),L.update())}function Rt(L,E){const ie=L.colorSpace,xe=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==ko&&ie!==ts&&(Ht.getTransfer(ie)===$t?(xe!==Zi||_e!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=de,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=O,this.rebindTextures=nt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=gt}function XT(i,e){function t(s,o=ts){let l;const c=Ht.getTransfer(o);if(s===Rr)return i.UNSIGNED_BYTE;if(s===fh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Lv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===bv)return i.BYTE;if(s===Pv)return i.SHORT;if(s===Ia)return i.UNSIGNED_SHORT;if(s===uh)return i.INT;if(s===Us)return i.UNSIGNED_INT;if(s===Tr)return i.FLOAT;if(s===za)return i.HALF_FLOAT;if(s===Dv)return i.ALPHA;if(s===Iv)return i.RGB;if(s===Zi)return i.RGBA;if(s===Nv)return i.LUMINANCE;if(s===Uv)return i.LUMINANCE_ALPHA;if(s===bo)return i.DEPTH_COMPONENT;if(s===Fo)return i.DEPTH_STENCIL;if(s===Fv)return i.RED;if(s===hh)return i.RED_INTEGER;if(s===kv)return i.RG;if(s===ph)return i.RG_INTEGER;if(s===mh)return i.RGBA_INTEGER;if(s===Cc||s===Rc||s===bc||s===Pc)if(c===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===Cd||s===Rd||s===bd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Ld||s===Dd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Pd||s===Ld)return c===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Dd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Id||s===Nd||s===Ud||s===Fd||s===kd||s===Od||s===zd||s===Bd||s===Hd||s===Vd||s===Gd||s===Wd||s===Xd||s===jd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Id)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Od)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jd)return c===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lc||s===$d||s===Yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Lc)return c===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ov||s===Zd||s===qd||s===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Lc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Uo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const jT={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const M=t.getJointPose(w,s),y=this._getHandJoint(h,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),_=.02,S=.005;h.inputState.pinching&&g>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ba;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const $T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YT=`
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

}`;class ZT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new ui,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new as({vertexShader:$T,fragmentShader:YT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends Bo{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,v=null,g=null,_=null,S=null;const w=new ZT,M=t.getContextAttributes();let y=null,U=null;const P=[],A=[],D=new Vt;let B=null;const k=new Li;k.viewport=new vn;const $=new Li;$.viewport=new vn;const b=[k,$],R=new gS;let H=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let pe=P[oe];return pe===void 0&&(pe=new cd,P[oe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(oe){let pe=P[oe];return pe===void 0&&(pe=new cd,P[oe]=pe),pe.getGripSpace()},this.getHand=function(oe){let pe=P[oe];return pe===void 0&&(pe=new cd,P[oe]=pe),pe.getHandSpace()};function V(oe){const pe=A.indexOf(oe.inputSource);if(pe===-1)return;const Ce=P[pe];Ce!==void 0&&(Ce.update(oe.inputSource,oe.frame,h||c),Ce.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Y(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",Q);for(let oe=0;oe<P.length;oe++){const pe=A[oe];pe!==null&&(A[oe]=null,P[oe].disconnect(pe))}H=null,de=null,w.reset(),e.setRenderTarget(y),_=null,g=null,v=null,o=null,U=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(D.width,D.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(D),o.renderState.layers===void 0){const pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),U=new Fs(_.framebufferWidth,_.framebufferHeight,{format:Zi,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let pe=null,Ce=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?Fo:bo,Ce=M.stencil?Uo:Us);const Re={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};v=new XRWebGLBinding(o,t),g=v.createProjectionLayer(Re),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new Fs(g.textureWidth,g.textureHeight,{format:Zi,type:Rr,depthTexture:new Jv(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),De.setContext(o),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Q(oe){for(let pe=0;pe<oe.removed.length;pe++){const Ce=oe.removed[pe],ye=A.indexOf(Ce);ye>=0&&(A[ye]=null,P[ye].disconnect(Ce))}for(let pe=0;pe<oe.added.length;pe++){const Ce=oe.added[pe];let ye=A.indexOf(Ce);if(ye===-1){for(let He=0;He<P.length;He++)if(He>=A.length){A.push(Ce),ye=He;break}else if(A[He]===null){A[He]=Ce,ye=He;break}if(ye===-1)break}const Re=P[ye];Re&&Re.connect(Ce)}}const G=new le,ee=new le;function O(oe,pe,Ce){G.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(Ce.matrixWorld);const ye=G.distanceTo(ee),Re=pe.projectionMatrix.elements,He=Ce.projectionMatrix.elements,nt=Re[14]/(Re[10]-1),Ft=Re[14]/(Re[10]+1),wt=(Re[9]+1)/Re[5],Gt=(Re[9]-1)/Re[5],j=(Re[8]-1)/Re[0],wn=(He[8]+1)/He[0],Tt=nt*j,gt=nt*wn,tt=ye/(-j+wn),Rt=tt*-j;if(pe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Rt),oe.translateZ(tt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Re[10]===-1)oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=nt+tt,L=Ft+tt,E=Tt-Rt,ie=gt+(ye-Rt),xe=wt*Ft/L*Ye,_e=Gt*Ft/L*Ye;oe.projectionMatrix.makePerspective(E,ie,xe,_e,Ye,L),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function te(oe,pe){pe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(pe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let pe=oe.near,Ce=oe.far;w.texture!==null&&(w.depthNear>0&&(pe=w.depthNear),w.depthFar>0&&(Ce=w.depthFar)),R.near=$.near=k.near=pe,R.far=$.far=k.far=Ce,(H!==R.near||de!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,de=R.far),k.layers.mask=oe.layers.mask|2,$.layers.mask=oe.layers.mask|4,R.layers.mask=k.layers.mask|$.layers.mask;const ye=oe.parent,Re=R.cameras;te(R,ye);for(let He=0;He<Re.length;He++)te(Re[He],ye);Re.length===2?O(R,k,$):R.projectionMatrix.copy(k.projectionMatrix),se(oe,R,ye)};function se(oe,pe,Ce){Ce===null?oe.matrix.copy(pe.matrixWorld):(oe.matrix.copy(Ce.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(pe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Na*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let z=null;function ae(oe,pe){if(m=pe.getViewerPose(h||c),S=pe,m!==null){const Ce=m.views;_!==null&&(e.setRenderTargetFramebuffer(U,_.framebuffer),e.setRenderTarget(U));let ye=!1;Ce.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let He=0;He<Ce.length;He++){const nt=Ce[He];let Ft=null;if(_!==null)Ft=_.getViewport(nt);else{const Gt=v.getViewSubImage(g,nt);Ft=Gt.viewport,He===0&&(e.setRenderTargetTextures(U,Gt.colorTexture,g.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(U))}let wt=b[He];wt===void 0&&(wt=new Li,wt.layers.enable(He),wt.viewport=new vn,b[He]=wt),wt.matrix.fromArray(nt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(nt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),He===0&&(R.matrix.copy(wt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(wt)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const He=v.getDepthInformation(Ce[0]);He&&He.isValid&&He.texture&&w.init(e,He,o.renderState)}}for(let Ce=0;Ce<P.length;Ce++){const ye=A[Ce],Re=P[Ce];ye!==null&&Re!==void 0&&Re.update(ye,pe,h||c)}z&&z(oe,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),S=null}const De=new s0;De.setAnimationLoop(ae),this.setAnimationLoop=function(oe){z=oe},this.dispose=function(){}}}const Rs=new ar,KT=new dn;function QT(i,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,qv(i)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,U,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),v(M,y)):y.isMeshPhongMaterial?(l(M,y),m(M,y)):y.isMeshStandardMaterial?(l(M,y),g(M,y),y.isMeshPhysicalMaterial&&_(M,y,A)):y.isMeshMatcapMaterial?(l(M,y),S(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),w(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?d(M,y,U,P):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ci&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ci&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=e.get(y),P=U.envMap,A=U.envMapRotation;P&&(M.envMap.value=P,Rs.copy(A),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),M.envMapRotation.value.setFromMatrix4(KT.makeRotationFromEuler(Rs)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,U,P){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=P*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function _(M,y,U){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ci&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const U=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function JT(i,e,t,s){let o={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,P){const A=P.program;s.uniformBlockBinding(U,A)}function h(U,P){let A=o[U.id];A===void 0&&(S(U),A=m(U),o[U.id]=A,U.addEventListener("dispose",M));const D=P.program;s.updateUBOMapping(U,D);const B=e.render.frame;l[U.id]!==B&&(g(U),l[U.id]=B)}function m(U){const P=v();U.__bindingPointIndex=P;const A=i.createBuffer(),D=U.__size,B=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,A),A}function v(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(U){const P=o[U.id],A=U.uniforms,D=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let B=0,k=A.length;B<k;B++){const $=Array.isArray(A[B])?A[B]:[A[B]];for(let b=0,R=$.length;b<R;b++){const H=$[b];if(_(H,B,b,D)===!0){const de=H.__offset,V=Array.isArray(H.value)?H.value:[H.value];let Y=0;for(let Q=0;Q<V.length;Q++){const G=V[Q],ee=w(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,de+Y,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,de,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(U,P,A,D){const B=U.value,k=P+"_"+A;if(D[k]===void 0)return typeof B=="number"||typeof B=="boolean"?D[k]=B:D[k]=B.clone(),!0;{const $=D[k];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return D[k]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function S(U){const P=U.uniforms;let A=0;const D=16;for(let k=0,$=P.length;k<$;k++){const b=Array.isArray(P[k])?P[k]:[P[k]];for(let R=0,H=b.length;R<H;R++){const de=b[R],V=Array.isArray(de.value)?de.value:[de.value];for(let Y=0,Q=V.length;Y<Q;Y++){const G=V[Y],ee=w(G),O=A%D,te=O%ee.boundary,se=O+te;A+=te,se!==0&&D-se<ee.storage&&(A+=D-se),de.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=A,A+=ee.storage}}}const B=A%D;return B>0&&(A+=D-B),U.__size=A,U.__cache={},this}function w(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function M(U){const P=U.target;P.removeEventListener("dispose",M);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const U in o)i.deleteBuffer(o[U]);c=[],o={},l={}}return{bind:d,update:h,dispose:y}}class eA{constructor(e={}){const{canvas:t=gM(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let _;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=s.getContextAttributes().alpha}else _=c;const S=new Uint32Array(4),w=new Int32Array(4);let M=null,y=null;const U=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pi,this.toneMapping=ss,this.toneMappingExposure=1;const A=this;let D=!1,B=0,k=0,$=null,b=-1,R=null;const H=new vn,de=new vn;let V=null;const Y=new It(0);let Q=0,G=t.width,ee=t.height,O=1,te=null,se=null;const z=new vn(0,0,G,ee),ae=new vn(0,0,G,ee);let De=!1;const oe=new vh;let pe=!1,Ce=!1;const ye=new dn,Re=new dn,He=new le,nt=new vn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Gt(){return $===null?O:1}let j=s;function wn(C,J){return t.getContext(C,J)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),j===null){const J="webgl2";if(j=wn(J,C),j===null)throw wn(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Tt,gt,tt,Rt,Ye,L,E,ie,xe,_e,me,Ke,Ie,Ve,vt,Te,je,Ze,ot,We,yt,mt,zt,K;function Pe(){Tt=new cw(j),Tt.init(),mt=new XT(j,Tt),gt=new iw(j,Tt,e,mt),tt=new GT(j,Tt),gt.reverseDepthBuffer&&g&&tt.buffers.depth.setReversed(!0),Rt=new dw(j),Ye=new PT,L=new WT(j,Tt,tt,Ye,gt,mt,Rt),E=new sw(A),ie=new lw(A),xe=new _S(j),zt=new tw(j,xe),_e=new uw(j,xe,Rt,zt),me=new pw(j,_e,xe,Rt),ot=new hw(j,gt,L),Te=new rw(Ye),Ke=new bT(A,E,ie,Tt,gt,zt,Te),Ie=new QT(A,Ye),Ve=new DT,vt=new OT(Tt),Ze=new ew(A,E,ie,tt,me,_,d),je=new HT(A,me,gt),K=new JT(j,Rt,gt,tt),We=new nw(j,Tt,Rt),yt=new fw(j,Tt,Rt),Rt.programs=Ke.programs,A.capabilities=gt,A.extensions=Tt,A.properties=Ye,A.renderLists=Ve,A.shadowMap=je,A.state=tt,A.info=Rt}Pe();const he=new qT(A,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(G,ee,!1))},this.getSize=function(C){return C.set(G,ee)},this.setSize=function(C,J,ce=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,ee=J,t.width=Math.floor(C*O),t.height=Math.floor(J*O),ce===!0&&(t.style.width=C+"px",t.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(G*O,ee*O).floor()},this.setDrawingBufferSize=function(C,J,ce){G=C,ee=J,O=ce,t.width=Math.floor(C*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,J,ce,ue){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,J,ce,ue),tt.viewport(H.copy(z).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,J,ce,ue){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,J,ce,ue),tt.scissor(de.copy(ae).multiplyScalar(O).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){tt.setScissorTest(De=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,J=!0,ce=!0){let ue=0;if(C){let Z=!1;if($!==null){const Ee=$.texture.format;Z=Ee===mh||Ee===ph||Ee===hh}if(Z){const Ee=$.texture.type,Le=Ee===Rr||Ee===Us||Ee===Ia||Ee===Uo||Ee===fh||Ee===dh,ze=Ze.getClearColor(),Xe=Ze.getClearAlpha(),dt=ze.r,ut=ze.g,Je=ze.b;Le?(S[0]=dt,S[1]=ut,S[2]=Je,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(w[0]=dt,w[1]=ut,w[2]=Je,w[3]=Xe,j.clearBufferiv(j.COLOR,0,w))}else ue|=j.COLOR_BUFFER_BIT}J&&(ue|=j.DEPTH_BUFFER_BIT),ce&&(ue|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Ze.dispose(),Ve.dispose(),vt.dispose(),Ye.dispose(),E.dispose(),ie.dispose(),me.dispose(),zt.dispose(),K.dispose(),Ke.dispose(),he.dispose(),he.removeEventListener("sessionstart",Fi),he.removeEventListener("sessionend",fi),$n.stop()};function ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Rt.autoReset,J=je.enabled,ce=je.autoUpdate,ue=je.needsUpdate,Z=je.type;Pe(),Rt.autoReset=C,je.enabled=J,je.autoUpdate=ce,je.needsUpdate=ue,je.type=Z}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const J=C.target;J.removeEventListener("dispose",ct),xt(J)}function xt(C){hn(C),Ye.remove(C)}function hn(C){const J=Ye.get(C).programs;J!==void 0&&(J.forEach(function(ce){Ke.releaseProgram(ce)}),C.isShaderMaterial&&Ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ce,ue,Z,Ee){J===null&&(J=Ft);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,ze=Pr(C,J,ce,ue,Z);tt.setMaterial(ue,Le);let Xe=ce.index,dt=1;if(ue.wireframe===!0){if(Xe=_e.getWireframeAttribute(ce),Xe===void 0)return;dt=2}const ut=ce.drawRange,Je=ce.attributes.position;let ht=ut.start*dt,Nt=(ut.start+ut.count)*dt;Ee!==null&&(ht=Math.max(ht,Ee.start*dt),Nt=Math.min(Nt,(Ee.start+Ee.count)*dt)),Xe!==null?(ht=Math.max(ht,0),Nt=Math.min(Nt,Xe.count)):Je!=null&&(ht=Math.max(ht,0),Nt=Math.min(Nt,Je.count));const Ut=Nt-ht;if(Ut<0||Ut===1/0)return;zt.setup(Z,ue,ze,ce,Xe);let Yt,bt=We;if(Xe!==null&&(Yt=xe.get(Xe),bt=yt,bt.setIndex(Yt)),Z.isMesh)ue.wireframe===!0?(tt.setLineWidth(ue.wireframeLinewidth*Gt()),bt.setMode(j.LINES)):bt.setMode(j.TRIANGLES);else if(Z.isLine){let it=ue.linewidth;it===void 0&&(it=1),tt.setLineWidth(it*Gt()),Z.isLineSegments?bt.setMode(j.LINES):Z.isLineLoop?bt.setMode(j.LINE_LOOP):bt.setMode(j.LINE_STRIP)}else Z.isPoints?bt.setMode(j.POINTS):Z.isSprite&&bt.setMode(j.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const it=Z._multiDrawStarts,sn=Z._multiDrawCounts,Ct=Z._multiDrawCount,Tn=Xe?xe.get(Xe).bytesPerElement:1,ei=Ye.get(ue).currentProgram.getUniforms();for(let X=0;X<Ct;X++)ei.setValue(j,"_gl_DrawID",X),bt.render(it[X]/Tn,sn[X])}else if(Z.isInstancedMesh)bt.renderInstances(ht,Ut,Z.count);else if(ce.isInstancedBufferGeometry){const it=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,sn=Math.min(ce.instanceCount,it);bt.renderInstances(ht,Ut,sn)}else bt.render(ht,Ut)};function _t(C,J,ce){C.transparent===!0&&C.side===wr&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,br(C,J,ce),C.side=os,C.needsUpdate=!0,br(C,J,ce),C.side=wr):br(C,J,ce)}this.compile=function(C,J,ce=null){ce===null&&(ce=C),y=vt.get(ce),y.init(J),P.push(y),ce.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),C!==ce&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ue=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const ze=Ee[Le];_t(ze,ce,Z),ue.add(ze)}else _t(Ee,ce,Z),ue.add(Ee)}),P.pop(),y=null,ue},this.compileAsync=function(C,J,ce=null){const ue=this.compile(C,J,ce);return new Promise(Z=>{function Ee(){if(ue.forEach(function(Le){Ye.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){Z(C);return}setTimeout(Ee,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let jt=null;function rn(C){jt&&jt(C)}function Fi(){$n.stop()}function fi(){$n.start()}const $n=new s0;$n.setAnimationLoop(rn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(C){jt=C,he.setAnimationLoop(C),C===null?$n.stop():$n.start()},he.addEventListener("sessionstart",Fi),he.addEventListener("sessionend",fi),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(J),J=he.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,J,$),y=vt.get(C,P.length),y.init(J),P.push(y),Re.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),oe.setFromProjectionMatrix(Re),Ce=this.localClippingEnabled,pe=Te.init(this.clippingPlanes,Ce),M=Ve.get(C,U.length),M.init(),U.push(M),he.enabled===!0&&he.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&Bn(Ee,J,-1/0,A.sortObjects)}Bn(C,J,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(te,se),wt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,wt&&Ze.addToRenderList(M,C),this.info.render.frame++,pe===!0&&Te.beginShadows();const ce=y.state.shadowsArray;je.render(ce,C,J),pe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=M.opaque,Z=M.transmissive;if(y.setupLights(),J.isArrayCamera){const Ee=J.cameras;if(Z.length>0)for(let Le=0,ze=Ee.length;Le<ze;Le++){const Xe=Ee[Le];lr(ue,Z,C,Xe)}wt&&Ze.render(C);for(let Le=0,ze=Ee.length;Le<ze;Le++){const Xe=Ee[Le];kn(M,C,Xe,Xe.viewport)}}else Z.length>0&&lr(ue,Z,C,J),wt&&Ze.render(C),kn(M,C,J);$!==null&&(L.updateMultisampleRenderTarget($),L.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(A,C,J),zt.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],pe===!0&&Te.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function Bn(C,J,ce,ue){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){ue&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Le=me.update(C),ze=C.material;ze.visible&&M.push(C,Le,ze,ce,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){const Le=me.update(C),ze=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),nt.copy(Le.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(ze)){const Xe=Le.groups;for(let dt=0,ut=Xe.length;dt<ut;dt++){const Je=Xe[dt],ht=ze[Je.materialIndex];ht&&ht.visible&&M.push(C,Le,ht,ce,nt.z,Je)}}else ze.visible&&M.push(C,Le,ze,ce,nt.z,null)}}const Ee=C.children;for(let Le=0,ze=Ee.length;Le<ze;Le++)Bn(Ee[Le],J,ce,ue)}function kn(C,J,ce,ue){const Z=C.opaque,Ee=C.transmissive,Le=C.transparent;y.setupLightsView(ce),pe===!0&&Te.setGlobalState(A.clippingPlanes,ce),ue&&tt.viewport(H.copy(ue)),Z.length>0&&di(Z,J,ce),Ee.length>0&&di(Ee,J,ce),Le.length>0&&di(Le,J,ce),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function lr(C,J,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ue.id]===void 0&&(y.state.transmissionRenderTarget[ue.id]=new Fs(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?za:Rr,minFilter:Ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const Ee=y.state.transmissionRenderTarget[ue.id],Le=ue.viewport||H;Ee.setSize(Le.z,Le.w);const ze=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(Y),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),wt&&Ze.render(ce);const Xe=A.toneMapping;A.toneMapping=ss;const dt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),y.setupLightsView(ue),pe===!0&&Te.setGlobalState(A.clippingPlanes,ue),di(C,ce,ue),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Je=0,ht=J.length;Je<ht;Je++){const Nt=J[Je],Ut=Nt.object,Yt=Nt.geometry,bt=Nt.material,it=Nt.group;if(bt.side===wr&&Ut.layers.test(ue.layers)){const sn=bt.side;bt.side=ci,bt.needsUpdate=!0,Yn(Ut,ce,ue,Yt,bt,it),bt.side=sn,bt.needsUpdate=!0,ut=!0}}ut===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}A.setRenderTarget(ze),A.setClearColor(Y,Q),dt!==void 0&&(ue.viewport=dt),A.toneMapping=Xe}function di(C,J,ce){const ue=J.isScene===!0?J.overrideMaterial:null;for(let Z=0,Ee=C.length;Z<Ee;Z++){const Le=C[Z],ze=Le.object,Xe=Le.geometry,dt=ue===null?Le.material:ue,ut=Le.group;ze.layers.test(ce.layers)&&Yn(ze,J,ce,Xe,dt,ut)}}function Yn(C,J,ce,ue,Z,Ee){C.onBeforeRender(A,J,ce,ue,Z,Ee),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(A,J,ce,ue,C,Ee),Z.transparent===!0&&Z.side===wr&&Z.forceSinglePass===!1?(Z.side=ci,Z.needsUpdate=!0,A.renderBufferDirect(ce,J,ue,Z,C,Ee),Z.side=os,Z.needsUpdate=!0,A.renderBufferDirect(ce,J,ue,Z,C,Ee),Z.side=wr):A.renderBufferDirect(ce,J,ue,Z,C,Ee),C.onAfterRender(A,J,ce,ue,Z,Ee)}function br(C,J,ce){J.isScene!==!0&&(J=Ft);const ue=Ye.get(C),Z=y.state.lights,Ee=y.state.shadowsArray,Le=Z.state.version,ze=Ke.getParameters(C,Z.state,Ee,J,ce),Xe=Ke.getProgramCacheKey(ze);let dt=ue.programs;ue.environment=C.isMeshStandardMaterial?J.environment:null,ue.fog=J.fog,ue.envMap=(C.isMeshStandardMaterial?ie:E).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,dt===void 0&&(C.addEventListener("dispose",ct),dt=new Map,ue.programs=dt);let ut=dt.get(Xe);if(ut!==void 0){if(ue.currentProgram===ut&&ue.lightsStateVersion===Le)return qt(C,ze),ut}else ze.uniforms=Ke.getUniforms(C),C.onBeforeCompile(ze,A),ut=Ke.acquireProgram(ze,Xe),dt.set(Xe,ut),ue.uniforms=ze.uniforms;const Je=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=Te.uniform),qt(C,ze),ue.needsLights=Lr(C),ue.lightsStateVersion=Le,ue.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.directionalShadowMap.value=Z.state.directionalShadowMap,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotShadowMap.value=Z.state.spotShadowMap,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMap.value=Z.state.pointShadowMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ue.currentProgram=ut,ue.uniformsList=null,ut}function Os(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=Dc.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function qt(C,J){const ce=Ye.get(C);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.batchingColor=J.batchingColor,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function Pr(C,J,ce,ue,Z){J.isScene!==!0&&(J=Ft),L.resetTextureUnits();const Ee=J.fog,Le=ue.isMeshStandardMaterial?J.environment:null,ze=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ko,Xe=(ue.isMeshStandardMaterial?ie:E).get(ue.envMap||Le),dt=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Je=!!ce.morphAttributes.position,ht=!!ce.morphAttributes.normal,Nt=!!ce.morphAttributes.color;let Ut=ss;ue.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const Yt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,bt=Yt!==void 0?Yt.length:0,it=Ye.get(ue),sn=y.state.lights;if(pe===!0&&(Ce===!0||C!==R)){const st=C===R&&ue.id===b;Te.setState(ue,C,st)}let Ct=!1;ue.version===it.__version?(it.needsLights&&it.lightsStateVersion!==sn.state.version||it.outputColorSpace!==ze||Z.isBatchedMesh&&it.batching===!1||!Z.isBatchedMesh&&it.batching===!0||Z.isBatchedMesh&&it.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&it.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&it.instancing===!1||!Z.isInstancedMesh&&it.instancing===!0||Z.isSkinnedMesh&&it.skinning===!1||!Z.isSkinnedMesh&&it.skinning===!0||Z.isInstancedMesh&&it.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&it.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&it.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&it.instancingMorph===!1&&Z.morphTexture!==null||it.envMap!==Xe||ue.fog===!0&&it.fog!==Ee||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Te.numPlanes||it.numIntersection!==Te.numIntersection)||it.vertexAlphas!==dt||it.vertexTangents!==ut||it.morphTargets!==Je||it.morphNormals!==ht||it.morphColors!==Nt||it.toneMapping!==Ut||it.morphTargetsCount!==bt)&&(Ct=!0):(Ct=!0,it.__version=ue.version);let Tn=it.currentProgram;Ct===!0&&(Tn=br(ue,J,Z));let ei=!1,X=!1,N=!1;const ve=Tn.getUniforms(),rt=it.uniforms;if(tt.useProgram(Tn.program)&&(ei=!0,X=!0,N=!0),ue.id!==b&&(b=ue.id,X=!0),ei||R!==C){tt.buffers.depth.getReversed()?(ye.copy(C.projectionMatrix),xM(ye),_M(ye),ve.setValue(j,"projectionMatrix",ye)):ve.setValue(j,"projectionMatrix",C.projectionMatrix),ve.setValue(j,"viewMatrix",C.matrixWorldInverse);const Lt=ve.map.cameraPosition;Lt!==void 0&&Lt.setValue(j,He.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&ve.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ve.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,X=!0,N=!0)}if(Z.isSkinnedMesh){ve.setOptional(j,Z,"bindMatrix"),ve.setOptional(j,Z,"bindMatrixInverse");const st=Z.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),ve.setValue(j,"boneTexture",st.boneTexture,L))}Z.isBatchedMesh&&(ve.setOptional(j,Z,"batchingTexture"),ve.setValue(j,"batchingTexture",Z._matricesTexture,L),ve.setOptional(j,Z,"batchingIdTexture"),ve.setValue(j,"batchingIdTexture",Z._indirectTexture,L),ve.setOptional(j,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ve.setValue(j,"batchingColorTexture",Z._colorsTexture,L));const ft=ce.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&ot.update(Z,ce,Tn),(X||it.receiveShadow!==Z.receiveShadow)&&(it.receiveShadow=Z.receiveShadow,ve.setValue(j,"receiveShadow",Z.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(rt.envMap.value=Xe,rt.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&J.environment!==null&&(rt.envMapIntensity.value=J.environmentIntensity),X&&(ve.setValue(j,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&ls(rt,N),Ee&&ue.fog===!0&&Ie.refreshFogUniforms(rt,Ee),Ie.refreshMaterialUniforms(rt,ue,O,ee,y.state.transmissionRenderTarget[C.id]),Dc.upload(j,Os(it),rt,L)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Dc.upload(j,Os(it),rt,L),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ve.setValue(j,"center",Z.center),ve.setValue(j,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(j,"normalMatrix",Z.normalMatrix),ve.setValue(j,"modelMatrix",Z.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const st=ue.uniformsGroups;for(let Lt=0,pn=st.length;Lt<pn;Lt++){const Ge=st[Lt];K.update(Ge,Tn),K.bind(Ge,Tn)}}return Tn}function ls(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Lr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,J,ce){Ye.get(C.texture).__webglTexture=J,Ye.get(C.depthTexture).__webglTexture=ce;const ue=Ye.get(C);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,J){const ce=Ye.get(C);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ce=0){$=C,B=J,k=ce;let ue=!0,Z=null,Ee=!1,Le=!1;if(C){const Xe=Ye.get(C);if(Xe.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(j.FRAMEBUFFER,null),ue=!1;else if(Xe.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Xe.__hasExternalTextures)L.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Xe.__boundDepthTexture!==Je){if(Je!==null&&Ye.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Le=!0);const ut=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[J])?Z=ut[J][ce]:Z=ut[J],Ee=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Z=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?Z=ut[ce]:Z=ut,H.copy(C.viewport),de.copy(C.scissor),V=C.scissorTest}else H.copy(z).multiplyScalar(O).floor(),de.copy(ae).multiplyScalar(O).floor(),V=De;if(tt.bindFramebuffer(j.FRAMEBUFFER,Z)&&ue&&tt.drawBuffers(C,Z),tt.viewport(H),tt.scissor(de),tt.setScissorTest(V),Ee){const Xe=Ye.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xe.__webglTexture,ce)}else if(Le){const Xe=Ye.get(C.texture),dt=J||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,ce||0,dt)}b=-1},this.readRenderTargetPixels=function(C,J,ce,ue,Z,Ee,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){tt.bindFramebuffer(j.FRAMEBUFFER,ze);try{const Xe=C.texture,dt=Xe.format,ut=Xe.type;if(!gt.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ue&&ce>=0&&ce<=C.height-Z&&j.readPixels(J,ce,ue,Z,mt.convert(dt),mt.convert(ut),Ee)}finally{const Xe=$!==null?Ye.get($).__webglFramebuffer:null;tt.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,J,ce,ue,Z,Ee,Le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){const Xe=C.texture,dt=Xe.format,ut=Xe.type;if(!gt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=C.width-ue&&ce>=0&&ce<=C.height-Z){tt.bindFramebuffer(j.FRAMEBUFFER,ze);const Je=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.bufferData(j.PIXEL_PACK_BUFFER,Ee.byteLength,j.STREAM_READ),j.readPixels(J,ce,ue,Z,mt.convert(dt),mt.convert(ut),0);const ht=$!==null?Ye.get($).__webglFramebuffer:null;tt.bindFramebuffer(j.FRAMEBUFFER,ht);const Nt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await vM(j,Nt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ee),j.deleteBuffer(Je),j.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,J=null,ce=0){C.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1]);const ue=Math.pow(2,-ce),Z=Math.floor(C.image.width*ue),Ee=Math.floor(C.image.height*ue),Le=J!==null?J.x:0,ze=J!==null?J.y:0;L.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Le,ze,Z,Ee),tt.unbindTexture()};const hi=j.createFramebuffer(),cs=j.createFramebuffer();this.copyTextureToTexture=function(C,J,ce=null,ue=null,Z=0,Ee=null){C.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,C=arguments[1],J=arguments[2],Ee=arguments[3]||0,ce=null),Ee===null&&(Z!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Z,Z=0):Ee=0);let Le,ze,Xe,dt,ut,Je,ht,Nt,Ut;const Yt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(ce!==null)Le=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,dt=ce.min.x,ut=ce.min.y,Je=ce.isBox3?ce.min.z:0;else{const ft=Math.pow(2,-Z);Le=Math.floor(Yt.width*ft),ze=Math.floor(Yt.height*ft),C.isDataArrayTexture?Xe=Yt.depth:C.isData3DTexture?Xe=Math.floor(Yt.depth*ft):Xe=1,dt=0,ut=0,Je=0}ue!==null?(ht=ue.x,Nt=ue.y,Ut=ue.z):(ht=0,Nt=0,Ut=0);const bt=mt.convert(J.format),it=mt.convert(J.type);let sn;J.isData3DTexture?(L.setTexture3D(J,0),sn=j.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(L.setTexture2DArray(J,0),sn=j.TEXTURE_2D_ARRAY):(L.setTexture2D(J,0),sn=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment);const Ct=j.getParameter(j.UNPACK_ROW_LENGTH),Tn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ei=j.getParameter(j.UNPACK_SKIP_PIXELS),X=j.getParameter(j.UNPACK_SKIP_ROWS),N=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Yt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Yt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,dt),j.pixelStorei(j.UNPACK_SKIP_ROWS,ut),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Je);const ve=C.isDataArrayTexture||C.isData3DTexture,rt=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const ft=Ye.get(C),st=Ye.get(J),Lt=Ye.get(ft.__renderTarget),pn=Ye.get(st.__renderTarget);tt.bindFramebuffer(j.READ_FRAMEBUFFER,Lt.__webglFramebuffer),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Ge=0;Ge<Xe;Ge++)ve&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,Z,Je+Ge),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(J).__webglTexture,Ee,Ut+Ge)),j.blitFramebuffer(dt,ut,Le,ze,ht,Nt,Le,ze,j.DEPTH_BUFFER_BIT,j.NEAREST);tt.bindFramebuffer(j.READ_FRAMEBUFFER,null),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Ye.has(C)){const ft=Ye.get(C),st=Ye.get(J);tt.bindFramebuffer(j.READ_FRAMEBUFFER,hi),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,cs);for(let Lt=0;Lt<Xe;Lt++)ve?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ft.__webglTexture,Z,Je+Lt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ft.__webglTexture,Z),rt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.__webglTexture,Ee,Ut+Lt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,st.__webglTexture,Ee),Z!==0?j.blitFramebuffer(dt,ut,Le,ze,ht,Nt,Le,ze,j.COLOR_BUFFER_BIT,j.NEAREST):rt?j.copyTexSubImage3D(sn,Ee,ht,Nt,Ut+Lt,dt,ut,Le,ze):j.copyTexSubImage2D(sn,Ee,ht,Nt,dt,ut,Le,ze);tt.bindFramebuffer(j.READ_FRAMEBUFFER,null),tt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else rt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(sn,Ee,ht,Nt,Ut,Le,ze,Xe,bt,it,Yt.data):J.isCompressedArrayTexture?j.compressedTexSubImage3D(sn,Ee,ht,Nt,Ut,Le,ze,Xe,bt,Yt.data):j.texSubImage3D(sn,Ee,ht,Nt,Ut,Le,ze,Xe,bt,it,Yt):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ee,ht,Nt,Le,ze,bt,it,Yt.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ee,ht,Nt,Yt.width,Yt.height,bt,Yt.data):j.texSubImage2D(j.TEXTURE_2D,Ee,ht,Nt,Le,ze,bt,it,Yt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ct),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ei),j.pixelStorei(j.UNPACK_SKIP_ROWS,X),j.pixelStorei(j.UNPACK_SKIP_IMAGES,N),Ee===0&&J.generateMipmaps&&j.generateMipmap(sn),tt.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ce=null,ue=null,Z=0){return C.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,C=arguments[2],J=arguments[3],Z=arguments[4]||0),To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,J,ce,ue,Z)},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),tt.unbindTexture()},this.resetState=function(){B=0,k=0,$=null,tt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}const tA=-1.35,nA=1.35;function iA(i){return Math.min(nA,Math.max(tA,i))}function rA(i){return i.triangles.reduce((e,t)=>(t.forEach(s=>{e.minX=Math.min(e.minX,s.x),e.maxX=Math.max(e.maxX,s.x),e.minY=Math.min(e.minY,s.y),e.maxY=Math.max(e.maxY,s.y),e.minZ=Math.min(e.minZ,s.z),e.maxZ=Math.max(e.maxZ,s.z)}),e),{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0,minZ:1/0,maxZ:-1/0})}function sA(i){return Number.isFinite(i.minX)?{x:Math.round((i.minX+i.maxX)/2*1e3)/1e3,y:Math.round((i.minY+i.maxY)/2*1e3)/1e3,z:Math.round((i.minZ+i.maxZ)/2*1e3)/1e3}:{x:0,y:0,z:0}}function oA(i,e){const t=rA(i);if(!Number.isFinite(t.minX))return{x:0,y:0,z:0};const s=Xc(e);return s.enabled&&(t.maxY+=e.height*(s.stackCount-1)),sA(t)}function aA(i,e,t){return{x:Math.round((i.x+e)*1e3)/1e3,y:Math.round((i.y+t)*1e3)/1e3}}const Ga={solid:"#6f8580",transparent:"#6f8580",edge:"#9fb1ac",strongEdge:"#d6e2df",stackPreview:"#9fb1ac"},lA=new _h({color:Ga.solid,roughness:.76,metalness:.02}),cA=new _h({color:Ga.transparent,roughness:.76,metalness:.02,opacity:.58,transparent:!0,depthWrite:!1}),uA=new Yc({color:Ga.edge,transparent:!0,opacity:.82}),fA=new Yc({color:Ga.strongEdge,transparent:!0,opacity:.95}),dA=new _h({color:Ga.stackPreview,roughness:.82,metalness:.02,opacity:.28,transparent:!0,depthWrite:!1});function hA(i){const e=Xc(i);return e.enabled?Array.from({length:e.stackCount-1},(t,s)=>i.height*(s+1)):[]}function pA(i){const e=new Float32Array(i.triangles.length*9);i.triangles.forEach((s,o)=>{s.forEach((l,c)=>{const f=o*9+c*3;e[f]=l.x,e[f+1]=l.y,e[f+2]=l.z})});const t=new Qi;return t.setAttribute("position",new Ki(e,3)),t.computeVertexNormals(),t}function mA({settings:i,mesh:e,resetToken:t,viewMode:s}){const o=ke.useRef(null),l=ke.useRef(null),c=ke.useRef({mode:"none",x:0,y:0,yaw:-.78,pitch:.62}),f=ke.useRef({x:0,y:0}),d=ke.useRef({width:1,height:1}),h=ke.useRef(178),m=ke.useMemo(()=>oA(e,i),[e,i]),v=ke.useRef(m),g=ke.useMemo(()=>Math.max(i.width,i.depth),[i.width,i.depth]);return ke.useEffect(()=>{const _=o.current;if(!_)return;const S=new VM;S.background=new It("#d8dcde");const w=new Li(42,1,.1,1200),M=new eA({antialias:!0});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=Ql.showModelShadows,_.appendChild(M.domElement);const y=new ba;S.add(y);const U=new dS("#ffffff","#8ea0a8",2.2);S.add(U);const P=new mS("#ffffff",2.4);P.position.set(80,120,90),P.castShadow=Ql.showModelShadows,S.add(P);const A=new vS(28);A.position.set(g/2+22,.5,g/2+20),S.add(A);const D=()=>{const{width:Q,height:G}=d.current,{x:ee,y:O}=f.current;w.clearViewOffset(),(Math.abs(ee)>.01||Math.abs(O)>.01)&&w.setViewOffset(Q,G,-ee,-O,Q,G),w.updateProjectionMatrix()},B=()=>{const{yaw:Q,pitch:G}=c.current,ee=h.current,O=v.current,te=new le(O.x,O.y,O.z),se=Math.cos(G)*ee;w.position.set(te.x+Math.sin(Q)*se,te.y+Math.sin(G)*ee,te.z+Math.cos(Q)*se),w.lookAt(te)},k=()=>{const{width:Q,height:G}=_.getBoundingClientRect();M.setSize(Q,G),w.aspect=Q/Math.max(1,G),d.current={width:Math.max(1,Math.round(Q)),height:Math.max(1,Math.round(G))},D(),B(),M.render(S,w)},$=()=>{D(),B(),M.render(S,w)},b=Q=>{Q.button!==0&&Q.button!==2||(Q.preventDefault(),c.current.mode=Q.button===2?"pan":"rotate",c.current.x=Q.clientX,c.current.y=Q.clientY,M.domElement.setPointerCapture(Q.pointerId))},R=Q=>{if(c.current.mode==="none")return;const G=Q.clientX-c.current.x,ee=Q.clientY-c.current.y;c.current.x=Q.clientX,c.current.y=Q.clientY,c.current.mode==="pan"?f.current=aA(f.current,G,ee):(c.current.yaw-=G*.006,c.current.pitch=iA(c.current.pitch+ee*.004)),$()},H=Q=>{c.current.mode="none",M.domElement.hasPointerCapture(Q.pointerId)&&M.domElement.releasePointerCapture(Q.pointerId)},de=Q=>{Q.preventDefault()},V=Q=>{Q.preventDefault(),h.current=mM.clamp(h.current+Q.deltaY*.12,92,290),$()};M.domElement.addEventListener("pointerdown",b),M.domElement.addEventListener("pointermove",R),M.domElement.addEventListener("pointerup",H),M.domElement.addEventListener("pointercancel",H),M.domElement.addEventListener("contextmenu",de),M.domElement.addEventListener("wheel",V,{passive:!1});const Y=new ResizeObserver(k);return Y.observe(_),l.current={camera:w,model:y,render:$,renderer:M,scene:S},k(),()=>{Y.disconnect(),M.domElement.removeEventListener("pointerdown",b),M.domElement.removeEventListener("pointermove",R),M.domElement.removeEventListener("pointerup",H),M.domElement.removeEventListener("pointercancel",H),M.domElement.removeEventListener("contextmenu",de),M.domElement.removeEventListener("wheel",V),_.removeChild(M.domElement),M.dispose()}},[g]),ke.useEffect(()=>{const _=l.current;_&&(c.current={mode:"none",x:0,y:0,yaw:-.78,pitch:.62},f.current={x:0,y:0},h.current=178,_.render())},[t]),ke.useEffect(()=>{var _;v.current=m,(_=l.current)==null||_.render()},[m]),ke.useEffect(()=>{const _=l.current;if(!_)return;_.model.traverse(M=>{M instanceof Ii&&M.geometry.dispose(),M instanceof Qd&&M.geometry.dispose()}),_.model.clear();const S=pA(e),w=new Ii(S,s==="transparent"?cA:lA);if(w.castShadow=Ql.showModelShadows,w.receiveShadow=Ql.showModelShadows,_.model.add(w),hA(i).forEach(M=>{const y=new Ii(S,dA);y.position.y=M,y.castShadow=!1,y.receiveShadow=!1,_.model.add(y)}),s!=="solid"){const M=new Qd(new jM(S,24),s==="edges"?fA:uA);_.model.add(M)}_.renderer.render(_.scene,_.camera)},[e,i,s]),F.jsxs("section",{className:"viewport-shell","aria-label":"3D tray preview",children:[F.jsx("div",{ref:o,className:"three-canvas"}),null]})}const gA=[{icon:xv,key:"solid",label:"ソリッド"},{icon:v_,key:"edges",label:"エッジ"},{icon:c_,key:"transparent",label:"透過"}];function vA({mode:i,onModeChange:e,onResetView:t}){return F.jsxs("div",{className:"view-toolbar","aria-label":"表示操作",children:[F.jsx("div",{className:"view-mode-group",role:"group","aria-label":"表示モード",children:gA.map(s=>{const o=s.icon;return F.jsxs("button",{"aria-pressed":i===s.key,className:i===s.key?"selected":"",title:s.label,type:"button",onClick:()=>e(s.key),children:[F.jsx(o,{size:17,"aria-hidden":"true"}),F.jsx("span",{children:s.label})]},s.key)})}),F.jsxs("button",{className:"view-reset","aria-label":"表示をリセット",title:"表示をリセット",type:"button",onClick:t,children:[F.jsx(yv,{size:17,"aria-hidden":"true"}),F.jsx("span",{children:"リセット"})]})]})}function xA(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function u0(i,e,t){const s=xA(e,t),o=[];let l=-i/2;for(let c=0;c<e-1;c+=1)l+=i*s[c],o.push(l);return o}const li=i=>Number.isInteger(i)?`${i}`:i.toFixed(4).replace(/0+$/,"").replace(/\.$/,"");function lv(i,e){return{x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}}function _A(i,e){return{x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x}}function yA(i){const e=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/e,y:i.y/e,z:i.z/e}}function Jn(i,e="asc"){const t=[...i].sort((s,o)=>e==="asc"?s-o:o-s);return t.filter((s,o)=>o===0||Math.abs(s-t[o-1])>1e-4)}function Jt(i,e){const t=i[i.length-1];t&&Math.abs(t.x-e.x)<1e-4&&Math.abs(t.z-e.z)<1e-4||i.push(e)}function MA(i,e,t,s,o){const l=i/2,c=e/2,f=Math.min(Math.max(t,0),l-.001,c-.001),d=[];if(f<=0){const D=Jn(s.filter(b=>b>-l&&b<l)),B=[...D].reverse(),k=Jn(o.filter(b=>b>-c&&b<c)),$=[...k].reverse();return Jt(d,{x:l,z:-c}),k.forEach(b=>Jt(d,{x:l,z:b})),Jt(d,{x:l,z:c}),B.forEach(b=>Jt(d,{x:b,z:c})),Jt(d,{x:-l,z:c}),$.forEach(b=>Jt(d,{x:-l,z:b})),Jt(d,{x:-l,z:-c}),D.forEach(b=>Jt(d,{x:b,z:-c})),d}const h=l-f,m=c-f,v=Jn(s.filter(D=>D>-h&&D<h)),g=[...v].reverse(),_=Jn(o.filter(D=>D>-m&&D<m)),S=[..._].reverse(),w=D=>Array.from({length:9},(B,k)=>D+k/8*(Math.PI/2)),M=(D,B,k,$=[])=>Jn([...w(k),...$]).map(b=>({x:D+Math.cos(b)*f,z:B+Math.sin(b)*f})),y=s.filter(D=>D>h&&D<l).map(D=>Math.acos((D-h)/f)),U=s.filter(D=>D>-l&&D<-h).map(D=>Math.acos((D+h)/f)),P=o.filter(D=>D>m&&D<c).map(D=>Math.asin((D-m)/f)),A=o.filter(D=>D>-c&&D<-m).map(D=>Math.asin((D+m)/f));return M(h,-m,-Math.PI/2,[...y.map(D=>-D),...A]).forEach(D=>Jt(d,D)),_.forEach(D=>Jt(d,{x:l,z:D})),M(h,m,0,[...y,...P]).forEach(D=>Jt(d,D)),g.forEach(D=>Jt(d,{x:D,z:c})),M(-h,m,Math.PI/2,[...U,...P.map(D=>Math.PI-D)]).forEach(D=>Jt(d,D)),S.forEach(D=>Jt(d,{x:-l,z:D})),M(-h,-m,Math.PI,[...U.map(D=>Math.PI*2-D),...A.map(D=>Math.PI-D)]).forEach(D=>Jt(d,D)),v.forEach(D=>Jt(d,{x:D,z:-c})),d}function f0(i){let e=0;for(let t=0;t<i.length;t+=1){const s=i[t],o=i[(t+1)%i.length];e+=s.x*o.z-o.x*s.z}return e/2}function cv(i){return Math.abs(f0(i))}function Da(i,e){return f0(i)<0===e?i:[...i].reverse()}function Yi(i,e){return{x:i.x,y:e,z:i.z}}function ud(i,e,t){const s=[],o=i.map(c=>Yi(c,e)),l=i.map(c=>Yi(c,t));for(let c=0;c<i.length;c+=1){const f=(c+1)%i.length;s.push([o[c],l[c],l[f]]),s.push([o[c],l[f],o[f]])}return s}function fd(i,e,t,s=!1){const o=Da(i,!1),l=e.map(d=>Da(d,!0)),c=[...o,...l.flat()];return xh.triangulateShape(o.map(d=>new Vt(d.x,d.z)),l.map(d=>d.map(h=>new Vt(h.x,h.z)))).map(([d,h,m])=>s?[Yi(c[d],t),Yi(c[m],t),Yi(c[h],t)]:[Yi(c[d],t),Yi(c[h],t),Yi(c[m],t)])}function Mh(i,e){const t=[];if(i.length<3)return t;for(let s=1;s<i.length-1;s+=1){const o=[Yi(i[0],e),Yi(i[s],e),Yi(i[s+1],e)],[,l,c]=o,f=(l.z-o[0].z)*(c.x-o[0].x)-(l.x-o[0].x)*(c.z-o[0].z);t.push(f>0?o:[o[0],o[2],o[1]])}return t}function sr(i,e,t,s,o){return Mh([i,e,t,s],o)}function SA(i,e,t,s){return[{x:i,z:t},{x:e,z:t},{x:e,z:s},{x:i,z:s}]}function nh(i,e,t,s,o,l){const c=Jn(o.filter(v=>v>i&&v<e)),f=[...c].reverse(),d=Jn(l.filter(v=>v>t&&v<s)),h=[...d].reverse(),m=[];return Jt(m,{x:i,z:t}),c.forEach(v=>Jt(m,{x:v,z:t})),Jt(m,{x:e,z:t}),d.forEach(v=>Jt(m,{x:e,z:v})),Jt(m,{x:e,z:s}),f.forEach(v=>Jt(m,{x:v,z:s})),Jt(m,{x:i,z:s}),h.forEach(v=>Jt(m,{x:i,z:v})),m}function Bc(i,e,t,s){const o=[],l=i/2;let c=-l;return u0(i,e,t).forEach(f=>{const d=Math.max(-l,f-s/2),h=Math.min(l,f+s/2);d-c>.001&&o.push([c,d]),c=Math.max(c,h)}),l-c>.001&&o.push([c,l]),o}function Hc(i,e,t,s){return u0(i,e,t).flatMap(o=>[o-s/2,o+s/2])}function EA(i,e,t=[],s=[]){const o=i.width/2,l=i.depth/2,c=i.width/2-i.wallThickness,f=i.depth/2-i.wallThickness,d=Math.min(Math.max(i.cornerRadius,0),o-.001,l-.001),h=d<=0?o:o-d,m=d<=0?l:l-d,v=c,g=f,_=i.width-i.wallThickness*2,S=i.depth-i.wallThickness*2,w=Hc(_,i.columns,i.columnRatios,i.wallThickness),M=Hc(S,i.rows,i.rowRatios,i.wallThickness),y=Jn([-c,c,...w,...t]),U=Jn([-f,f,...M,...s]),P=Jn([-v,v,...y.filter(G=>G>=-v&&G<=v)]),A=Jn([-g,g,...U.filter(G=>G>=-g&&G<=g)]),D=Bc(_,i.columns,i.columnRatios,i.wallThickness),B=Bc(S,i.rows,i.rowRatios,i.wallThickness),k=[],$=(G,ee)=>D.some(([O,te])=>G>O&&G<te)&&B.some(([O,te])=>ee>O&&ee<te),b=G=>{if(d<=0||Math.abs(G)<=h)return-l;const ee=Math.sign(G)*h;return-m-Math.sqrt(Math.max(0,d**2-(G-ee)**2))},R=G=>-b(G),H=G=>{if(d<=0||Math.abs(G)<=m)return o;const ee=Math.sign(G)*m;return h+Math.sqrt(Math.max(0,d**2-(G-ee)**2))},de=G=>-H(G);for(let G=0;G<y.length-1;G+=1)for(let ee=0;ee<U.length-1;ee+=1){const O=y[G],te=y[G+1],se=U[ee],z=U[ee+1];$((O+te)/2,(se+z)/2)||k.push(...sr({x:O,z:se},{x:te,z:se},{x:te,z},{x:O,z},i.height))}for(let G=0;G<P.length-1;G+=1){const ee=P[G],O=P[G+1];k.push(...sr({x:ee,z:-f},{x:O,z:-f},{x:O,z:b(O)},{x:ee,z:b(ee)},i.height),...sr({x:O,z:f},{x:ee,z:f},{x:ee,z:R(ee)},{x:O,z:R(O)},i.height))}for(let G=0;G<A.length-1;G+=1){const ee=A[G],O=A[G+1];k.push(...sr({x:c,z:ee},{x:H(ee),z:ee},{x:H(O),z:O},{x:c,z:O},i.height),...sr({x:-c,z:O},{x:de(O),z:O},{x:de(ee),z:ee},{x:-c,z:ee},i.height))}const V=new Map(e.map(G=>[`${li(G.x)},${li(G.z)}`,G])),Y=(G,ee)=>V.get(`${li(G)},${li(ee)}`)??{x:G,z:ee};return[[{x:c,z:-f},{x:v,z:-f},Y(v,b(v)),...e.filter(G=>G.x>v&&G.z<-g),Y(H(-g),-g),{x:c,z:-g}],[{x:c,z:f},{x:c,z:g},Y(H(g),g),...e.filter(G=>G.x>v&&G.z>g),Y(v,R(v)),{x:v,z:f}],[{x:-c,z:f},{x:-v,z:f},Y(-v,R(-v)),...e.filter(G=>G.x<-v&&G.z>g),Y(de(g),g),{x:-c,z:g}],[{x:-c,z:-f},{x:-c,z:-g},Y(de(-g),-g),...e.filter(G=>G.x<-v&&G.z<-g),Y(-v,b(-v)),{x:-v,z:-f}]].forEach(G=>{const ee=[];G.forEach(se=>Jt(ee,se));const O=ee[0],te=ee[ee.length-1];O&&te&&Math.abs(O.x-te.x)<1e-4&&Math.abs(O.z-te.z)<1e-4&&ee.pop(),k.push(...Mh(ee,i.height))}),k}function wA(i){var l;if((l=i.layout)!=null&&l.length)return TA(i,i.layout);const e=i.width-i.wallThickness*2,t=i.depth-i.wallThickness*2,s=Bc(e,i.columns,i.columnRatios,i.wallThickness),o=Bc(t,i.rows,i.rowRatios,i.wallThickness);return s.flatMap(([c,f])=>o.map(([d,h])=>SA(c,f,d,h)))}function TA(i,e){const t=En(e)??[],s=i.width-i.wallThickness*2,o=i.depth-i.wallThickness*2,l=s/2,c=o/2,f=i.wallThickness/2,d=1e-4,h=t.flatMap(g=>{const _=-l+g.x*s,S=-l+(g.x+g.width)*s,w=-c+g.y*o,M=-c+(g.y+g.height)*o,y=_+(g.x<=d?0:f),U=S-(g.x+g.width>=1-d?0:f),P=w+(g.y<=d?0:f),A=M-(g.y+g.height>=1-d?0:f);return U-y<=.5||A-P<=.5?[]:[{minX:y,maxX:U,minZ:P,maxZ:A}]}),m=h.flatMap(g=>[g.minX,g.maxX]),v=h.flatMap(g=>[g.minZ,g.maxZ]);return h.map(g=>nh(g.minX,g.maxX,g.minZ,g.maxZ,m,v))}function ih(i){return i.reduce((e,t)=>({minX:Math.min(e.minX,t.x),maxX:Math.max(e.maxX,t.x),minZ:Math.min(e.minZ,t.z),maxZ:Math.max(e.maxZ,t.z)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0})}function uv(i,e,t,s=i.height,o=[],l=[]){const c=i.width/2,f=i.depth/2,d=i.width/2-i.wallThickness,h=i.depth/2-i.wallThickness,m=Math.min(Math.max(i.cornerRadius,0),c-.001,f-.001),v=m<=0?c:c-m,g=m<=0?f:f-m,_=d,S=h,w=e.map(ih),M=Jn([-d,d,...o,...w.flatMap(V=>[V.minX,V.maxX])]),y=Jn([-h,h,...l,...w.flatMap(V=>[V.minZ,V.maxZ])]),U=(V,Y)=>w.some(Q=>V>Q.minX&&V<Q.maxX&&Y>Q.minZ&&Y<Q.maxZ),P=[];for(let V=0;V<M.length-1;V+=1)for(let Y=0;Y<y.length-1;Y+=1){const Q=M[V],G=M[V+1],ee=y[Y],O=y[Y+1];G-Q<=.001||O-ee<=.001||U((Q+G)/2,(ee+O)/2)||P.push(...sr({x:Q,z:ee},{x:G,z:ee},{x:G,z:O},{x:Q,z:O},s))}const A=Jn([-_,_,...M.filter(V=>V>=-_&&V<=_)]),D=Jn([-S,S,...y.filter(V=>V>=-S&&V<=S)]),B=V=>{if(m<=0||Math.abs(V)<=v)return-f;const Y=Math.sign(V)*v;return-g-Math.sqrt(Math.max(0,m**2-(V-Y)**2))},k=V=>-B(V),$=V=>{if(m<=0||Math.abs(V)<=g)return c;const Y=Math.sign(V)*g;return v+Math.sqrt(Math.max(0,m**2-(V-Y)**2))},b=V=>-$(V);for(let V=0;V<A.length-1;V+=1){const Y=A[V],Q=A[V+1];P.push(...sr({x:Y,z:-h},{x:Q,z:-h},{x:Q,z:B(Q)},{x:Y,z:B(Y)},s),...sr({x:Q,z:h},{x:Y,z:h},{x:Y,z:k(Y)},{x:Q,z:k(Q)},s))}for(let V=0;V<D.length-1;V+=1){const Y=D[V],Q=D[V+1];P.push(...sr({x:d,z:Y},{x:$(Y),z:Y},{x:$(Q),z:Q},{x:d,z:Q},s),...sr({x:-d,z:Q},{x:b(Q),z:Q},{x:b(Y),z:Y},{x:-d,z:Y},s))}const R=new Map(t.map(V=>[`${li(V.x)},${li(V.z)}`,V])),H=(V,Y)=>R.get(`${li(V)},${li(Y)}`)??{x:V,z:Y};return[[{x:d,z:-h},{x:_,z:-h},H(_,B(_)),...t.filter(V=>V.x>_&&V.z<-S),H($(-S),-S),{x:d,z:-S}],[{x:d,z:h},{x:d,z:S},H($(S),S),...t.filter(V=>V.x>_&&V.z>S),H(_,k(_)),{x:_,z:h}],[{x:-d,z:h},{x:-_,z:h},H(-_,k(-_)),...t.filter(V=>V.x<-_&&V.z>S),H(b(S),S),{x:-d,z:S}],[{x:-d,z:-h},{x:-d,z:-S},H(b(-S),-S),...t.filter(V=>V.x<-_&&V.z<-S),H(-_,B(-_)),{x:-_,z:-h}]].forEach(V=>{const Y=[];V.forEach(ee=>Jt(Y,ee));const Q=Y[0],G=Y[Y.length-1];Q&&G&&Math.abs(Q.x-G.x)<1e-4&&Math.abs(Q.z-G.z)<1e-4&&Y.pop(),P.push(...Mh(Y,s))}),P}function AA(i){const[e,t,s]=i,o=yA(_A(lv(t,e),lv(s,e))),l=c=>`      vertex ${li(c.x)} ${li(c.y)} ${li(c.z)}`;return[`  facet normal ${li(o.x)} ${li(o.y)} ${li(o.z)}`,"    outer loop",l(e),l(t),l(s),"    endloop","  endfacet"].join(`
`)}const CA=i=>[i.x,i.y,i.z].map(e=>Math.round(e*1e4)/1e4).join(",");function RA(i){const e=new Map;return i.forEach(t=>{const s=t.map(CA);[[s[0],s[1]],[s[1],s[2]],[s[2],s[0]]].forEach(([o,l])=>{const c=o<l?`${o}|${l}`:`${l}|${o}`;e.set(c,(e.get(c)??0)+1)})}),[...e.values()].filter(t=>t!==2).length}function bA(i){const[e,t,s]=i,o={x:t.x-e.x,z:t.z-e.z},l={x:s.x-e.x,z:s.z-e.z};return o.z*l.x-o.x*l.z}function PA(i){return i.filter(e=>e.every(s=>Math.abs(s.y-e[0].y)<1e-4)&&e[0].y>0&&bA(e)<=0).length}function LA(i,e){return i.map(t=>t.map(s=>({x:s.x+e.x,y:s.y+e.y,z:s.z+e.z})))}function DA(i){return i.map(([e,t,s])=>[e,s,t])}const IA=i=>Math.max(0,i.maxX-i.minX)*Math.max(0,i.maxZ-i.minZ),Vc=i=>i.maxX-i.minX>.4&&i.maxZ-i.minZ>.4;function fv(i,e){return(e==null?void 0:e.length)===i?e:Array(i).fill(1/i)}function NA(i){const e=fv(i.columns,i.columnRatios),t=fv(i.rows,i.rowRatios),s=[0],o=[0];e.forEach(c=>{s.push(s[s.length-1]+c)}),t.forEach(c=>{o.push(o[o.length-1]+c)});const l=[];for(let c=0;c<i.rows;c+=1)for(let f=0;f<i.columns;f+=1)l.push({id:`stack-cell-${l.length+1}`,x:s[f],y:o[c],width:s[f+1]-s[f],height:o[c+1]-o[c]});return En(l)??[]}function UA(i){var e;return(e=i.layout)!=null&&e.length?En(i.layout)??[]:NA(i)}function FA(i,e){const t=Math.max(e.wallThickness,e.width-e.wallThickness*2),s=Math.max(e.wallThickness,e.depth-e.wallThickness*2),o=e.wallThickness/2;if(i.axis==="vertical"){const c=-t/2+i.position*t;return{minX:c-o,maxX:c+o,minZ:-s/2+i.start*s,maxZ:-s/2+i.end*s}}const l=-s/2+i.position*s;return{minX:-t/2+i.start*t,maxX:-t/2+i.end*t,minZ:l-o,maxZ:l+o}}const dv=(i,e)=>Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)>1e-4&&Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ)>1e-4;function kA(i){const e=i.stackingClearance??.6,t=Math.max(i.wallThickness*3,i.width-i.wallThickness*2-e*2),s=Math.max(i.wallThickness*3,i.depth-i.wallThickness*2-e*2),o=Math.max(i.wallThickness,t-i.wallThickness*2),l=Math.max(i.wallThickness,s-i.wallThickness*2),c=-t/2,f=t/2,d=-s/2,h=s/2,m=-o/2,v=o/2,g=-l/2,_=l/2,S=.01,w=[{orientation:"horizontal",minX:c,maxX:f,minZ:d,maxZ:g},{orientation:"horizontal",minX:c,maxX:f,minZ:_,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:_-S},{orientation:"vertical",minX:v,maxX:f,minZ:g+S,maxZ:_-S}];if(i.stackingFootMode!=="short")return w.filter(Vc);const M=Math.min(Math.min(t,s)*.24,Math.max(i.wallThickness*8,18));return[{orientation:"horizontal",minX:c,maxX:c+M,minZ:d,maxZ:g},{orientation:"horizontal",minX:f-M,maxX:f,minZ:d,maxZ:g},{orientation:"horizontal",minX:c,maxX:c+M,minZ:_,maxZ:h},{orientation:"horizontal",minX:f-M,maxX:f,minZ:_,maxZ:h},{orientation:"vertical",minX:c,maxX:m,minZ:g+S,maxZ:g+M},{orientation:"vertical",minX:c,maxX:m,minZ:_-M,maxZ:_-S},{orientation:"vertical",minX:v,maxX:f,minZ:g+S,maxZ:g+M},{orientation:"vertical",minX:v,maxX:f,minZ:_-M,maxZ:_-S}].filter(Vc)}function hv(i,e,t){const s=t.map(([c,f])=>[Math.max(i,c),Math.min(e,f)]).filter(([c,f])=>f-c>1e-4).sort(([c],[f])=>c-f),o=[];let l=i;return s.forEach(([c,f])=>{c-l>.4&&o.push([l,c]),l=Math.max(l,f)}),e-l>.4&&o.push([l,e]),o}function OA(i){const e=kA(i),t=UA(i),s=zo(t).map(l=>FA(l,i)),o=i.wallThickness+(i.stackingGrooveClearance??.6)*2;return e.flatMap(l=>{if(l.orientation==="horizontal"){const f=s.filter(d=>dv(l,d)).map(d=>{const h=(d.minX+d.maxX)/2;return[h-o/2,h+o/2]});return hv(l.minX,l.maxX,f).map(([d,h])=>({minX:d,maxX:h,minZ:l.minZ,maxZ:l.maxZ})).filter(Vc)}const c=s.filter(f=>dv(l,f)).map(f=>{const d=(f.minZ+f.maxZ)/2;return[d-o/2,d+o/2]});return hv(l.minZ,l.maxZ,c).map(([f,d])=>({minX:l.minX,maxX:l.maxX,minZ:f,maxZ:d})).filter(Vc)})}function zA(i){const e=Oa(i),t=[i.wallThickness<1.6?{id:"wall-thickness",label:"壁厚",level:"warning",message:"壁厚が1.6 mm未満です。"}:{id:"wall-thickness",label:"壁厚",level:"ok",message:"壁厚は印刷しやすい値です。"},i.floorThickness<1.6?{id:"floor-thickness",label:"床厚",level:"warning",message:"床厚が1.6 mm未満です。"}:{id:"floor-thickness",label:"床厚",level:"ok",message:"床厚は印刷しやすい値です。"}];return e.hasInterference&&t.push({id:"stacking-interference",label:"スタック干渉",level:"warning",message:`スタック脚が仕切りと干渉する可能性があります。推奨逃げ幅 ${e.recommendedReliefGapMm} mm。`}),t}function pv(i,e={}){var de,V;const t=Ni(i),s={...t,cornerRadius:Math.min(t.cornerRadius,t.wallThickness)},o=s.width-s.wallThickness*2,l=s.depth-s.wallThickness*2,c=wA(s),f=(de=s.layout)!=null&&de.length?c.map(ih):void 0,d=f?f.flatMap(Y=>[Y.minX,Y.maxX]):Hc(o,s.columns,s.columnRatios,s.wallThickness),h=f?f.flatMap(Y=>[Y.minZ,Y.maxZ]):Hc(l,s.rows,s.rowRatios,s.wallThickness),m=e.includeStackingLip&&s.stackingLip?OA(s):[],v=m.flatMap(Y=>[Y.minX,Y.maxX]),g=m.flatMap(Y=>[Y.minZ,Y.maxZ]),_=Da(MA(s.width,s.depth,s.cornerRadius,[...d,...v,-o/2,o/2],[...h,...g,-l/2,l/2]),!1),S=s.height-s.floorThickness,w=m.length?s.stackingLipHeight??3:0,M=m.map(Y=>nh(Y.minX,Y.maxX,Y.minZ,Y.maxZ,v,g)),y=c.map(Y=>{const Q=ih(Y);return nh(Q.minX,Q.maxX,Q.minZ,Q.maxZ,[...d,...v],[...h,...g])}),U=(V=s.layout)!=null&&V.length?uv(s,y,_,s.height,v,g):EA(s,_,v,g),P=M.length?DA(uv(s,M,_,0,[...d,...v],[...h,...g])):fd(_,[],0),A=ud(_,0,s.height),D=y.flatMap(Y=>ud(Da(Y,!0),s.floorThickness,s.height)),B=y.flatMap(Y=>fd(Y,[],s.floorThickness,!0)),k=M.flatMap(Y=>[...ud(Da(Y,!1),-w,0),...fd(Y,[],-w)]),$=[...U,...P,...A,...D,...B,...k],b=cv(_),R=y.reduce((Y,Q)=>Y+cv(Q),0),H=m.reduce((Y,Q)=>Y+IA(Q),0);return{triangles:$,estimatedVolumeMm3:b*s.floorThickness+(b-R)*S+H*w}}function BA(i){const e=Ni(i),t=pv(e,{includeStackingLip:!0}),s=[...t.triangles];let o=t.estimatedVolumeMm3;if(e.includeLid){const l=Ni({...e,kind:"tray",width:e.width+e.lidClearance*2+e.wallThickness*2,depth:e.depth+e.lidClearance*2+e.wallThickness*2,height:e.lidHeight,floorThickness:Math.min(e.floorThickness,e.lidHeight/2),cornerRadius:e.cornerRadius+e.wallThickness,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,includeLid:!1,stackingLip:!1}),c=pv(l),f={x:e.width/2+l.width/2+18,y:0,z:0};s.push(...LA(c.triangles,f)),o+=c.estimatedVolumeMm3}return{triangles:s,stats:{estimatedVolumeMm3:o,nonManifoldEdgeCount:RA(s),topFaceDownwardCount:PA(s),triangleCount:s.length},checks:zA(e)}}function HA(i,e="hako-forge"){const t=e.replace(/[^\w.-]/g,"-"),s=i.triangles.map(AA).join(`
`);return[`solid ${t}`,s,`endsolid ${t}`,""].join(`
`)}function mv(i){return typeof i=="object"&&i!==null}function VA(i){const e={app:"Hako-Forge",version:1,settings:Ni(i)};return`${JSON.stringify(e,null,2)}
`}function GA(i){const e=JSON.parse(i);if(!mv(e)||e.app!=="Hako-Forge"||e.version!==1)throw new Error("Hako-ForgeのプロジェクトJSONではありません。");if(!mv(e.settings))throw new Error("プロジェクト設定が見つかりません。");return Ni(e.settings)}const d0=1.75;function WA(i,e=d0){const t=e/2,s=Math.PI*t**2;return Math.round(i/s)}function XA(i){return i.replace(/\.stl$/i,"-print-report.json")}function jA(i,e){if(!e.ok)return`レイアウトに問題があります。${e.issues.map(s=>s.message).join(" ")}`;const t=Oa(i);return t.hasInterference?`スタック干渉があります。レイアウトで強調表示された壁を調整するか、スタック脚を無効にしてからSTL出力してください。推奨逃げ幅 ${t.recommendedReliefGapMm} mm。`:""}function $A(i,e,t=d0){const o={app:"Hako-Forge",version:1,units:"mm",printReadiness:e.checks.some(l=>l.level==="warning")||e.stats.nonManifoldEdgeCount>0||e.stats.topFaceDownwardCount>0?"check":"ready",settings:Ni(i),mesh:e.stats,stackingPreview:Xc(i),stackingInterference:Oa(i),material:{filamentDiameterMm:t,estimatedFilamentLengthMm:WA(e.stats.estimatedVolumeMm3,t),estimatedVolumeMm3:Math.round(e.stats.estimatedVolumeMm3)},checks:e.checks};return`${JSON.stringify(o,null,2)}
`}function YA(){const[i,e]=ke.useState("size"),[t,s]=ke.useState(q_),[o,l]=ke.useState(""),[c,f]=ke.useState("solid"),[d,h]=ke.useState(0),m=ke.useMemo(()=>BA(t),[t]),v=ke.useMemo(()=>Ev(t.layout??Fn(t.columns,t.rows)),[t.columns,t.layout,t.rows]),g=(A,D)=>{s(B=>Ni({...B,[A]:D})),l("")},_=A=>{s(D=>Ni({...D,layout:A,columns:A?Math.min(8,Math.max(1,A.length)):D.columns,rows:A?1:D.rows})),l("")},S=()=>{s(A=>Ni({...A,columns:1,rows:1,columnRatios:void 0,rowRatios:void 0,layout:void 0})),l("")},w=(A,D,B)=>{const k=new Blob([D],{type:B}),$=URL.createObjectURL(k),b=document.createElement("a");b.href=$,b.download=A,document.body.appendChild(b),b.click(),b.remove(),window.setTimeout(()=>URL.revokeObjectURL($),0)},M=()=>{try{const A=jA(t,v);if(A){e("download"),l(A);return}const D=Kl(t),B=HA(m,D.replace(/\.stl$/,""));w(D,B,"model/stl;charset=utf-8")}catch(A){l(A instanceof Error?A.message:"STLファイルを作成できませんでした。")}},y=()=>{try{w(Kl(t).replace(/\.stl$/,".hako-forge.json"),VA(t),"application/json;charset=utf-8"),l("")}catch(A){l(A instanceof Error?A.message:"プロジェクトファイルを作成できませんでした。")}},U=()=>{try{const A=Kl(t);w(XA(A),$A(t,m),"application/json;charset=utf-8"),l("")}catch(A){l(A instanceof Error?A.message:"印刷品質レポートを作成できませんでした。")}},P=A=>{const D=new FileReader;D.addEventListener("load",()=>{try{s(GA(String(D.result??""))),l("")}catch(B){l(B instanceof Error?B.message:"プロジェクトファイルを読み込めませんでした。")}}),D.addEventListener("error",()=>{l("プロジェクトファイルを読み込めませんでした。")}),D.readAsText(A)};return F.jsxs("main",{className:"app-shell",children:[F.jsx(mA,{settings:t,mesh:m,resetToken:d,viewMode:c}),F.jsxs("header",{className:"topbar","aria-label":"モデル作成ワークフロー",children:[null,F.jsxs("button",{className:"export-button",type:"button",onClick:M,children:[F.jsx(sh,{size:18,"aria-hidden":"true"}),"STL出力"]})]}),F.jsx(vA,{mode:c,onModeChange:f,onResetView:()=>h(A=>A+1)}),null,F.jsxs("section",{className:"work-panel","aria-label":"モデル設定",children:[F.jsx("div",{className:"panel-header",children:F.jsx(fy,{activeStep:i,onChange:e})}),i==="download"?F.jsxs(F.Fragment,{children:[F.jsx(ly,{error:o,fileName:Kl(t),checks:m.checks,layoutValidation:v,stats:m.stats,settings:t,onDisableStacking:()=>g("stackingLip",!1),onDownload:M,onLoadProject:P,onOpenLayout:()=>e("grid"),onSaveReport:U,onSaveProject:y}),F.jsx(cy,{checks:m.checks,stats:m.stats})]}):F.jsx(ay,{activeStep:i,settings:t,onChange:g,onLayoutChange:_,onResetLayout:S})]})]})}Jx.createRoot(document.getElementById("root")).render(F.jsx(jx.StrictMode,{children:F.jsx(YA,{})}));
