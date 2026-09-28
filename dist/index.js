"use strict";var f=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var d=f(function(E,g){
var N=require('@stdlib/math-base-assert-is-positive-zero/dist'),P=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist');function b(i,a,u,o){var n,v,t,s,r,e,c;if(n=a.data,v=a.accessors[0],i===1||u===0)return e=v(n,o),m(e)?NaN:e;for(r=o,s=v(n,r),t=s,c=1;c<i;c++){if(r+=u,e=v(n,r),m(e))return e;e<s||e===s&&P(e)?s=e:(e>t||e===t&&N(e))&&(t=e)}return(t+s)/2}g.exports=b
});var q=f(function(F,x){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),k=require('@stdlib/math-base-assert-is-negative-zero/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),R=d();function h(i,a,u,o){var n,v,t,s,r,e;if(i<=0)return NaN;if(s=O(a),s.accessorProtocol)return R(i,s,u,o);if(i===1||u===0)return r=a[o],l(r)?NaN:r;for(t=o,v=a[t],n=v,e=1;e<i;e++){if(t+=u,r=a[t],l(r))return r;r<v||r===v&&k(r)?v=r:(r>n||r===n&&j(r))&&(n=r)}return(n+v)/2}x.exports=h
});var p=f(function(G,y){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=q();function A(i,a,u){return z(i,a,u,w(i,u))}y.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=p(),C=q();B(Z,"ndarray",C);module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
