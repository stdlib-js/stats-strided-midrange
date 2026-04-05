"use strict";var f=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var d=f(function(E,g){
var N=require('@stdlib/math-base-assert-is-positive-zero/dist'),P=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist');function b(i,a,s,o){var v,u,n,t,r,e,c;if(v=a.data,u=a.accessors[0],i===1||s===0)return e=u(v,o),m(e)?NaN:e;for(r=o,t=u(v,r),n=t,c=1;c<i;c++){if(r+=s,e=u(v,r),m(e))return e;e<t||e===t&&P(e)?t=e:(e>n||e===n&&N(e))&&(n=e)}return(n+t)/2}g.exports=b
});var q=f(function(F,x){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),k=require('@stdlib/math-base-assert-is-negative-zero/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),R=d();function h(i,a,s,o){var v,u,n,t,r,e;if(i<=0)return NaN;if(t=O(a),t.accessorProtocol)return R(i,t,s,o);if(i===1||s===0)return r=a[o],l(r)?NaN:r;for(n=o,u=a[n],v=u,e=1;e<i;e++){if(n+=s,r=a[n],l(r))return r;r<u||r===u&&k(r)?u=r:(r>v||r===v&&j(r))&&(v=r)}return(v+u)/2}x.exports=h
});var p=f(function(G,y){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=q();function A(i,a,s){return z(i,a,s,w(i,s))}y.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=p(),C=q();B(Z,"ndarray",C);module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
