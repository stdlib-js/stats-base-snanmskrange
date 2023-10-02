"use strict";var c=function(a,u){return function(){return u||a((u={exports:{}}).exports,u),u.exports}};var p=c(function(H,x){
var T=require('@stdlib/number-float64-base-to-float32/dist'),_=require('@stdlib/math-base-assert-is-nanf/dist');function E(a,u,t,m,o){var s,q,n,i,r,e;if(a<=0)return NaN;for(t<0?n=(1-a)*t:n=0,o<0?i=(1-a)*o:i=0,e=0;e<a&&(r=u[n],!(r===r&&m[i]===0));e++)n+=t,i+=o;if(e===a)return NaN;for(q=r,s=q,e+=1,e;e<a;e++)n+=t,i+=o,!m[i]&&(r=u[n],!_(r)&&(r<q?q=r:r>s&&(s=r)));return T(s-q)}x.exports=E
});var y=c(function(I,g){
var O=require('@stdlib/number-float64-base-to-float32/dist'),h=require('@stdlib/math-base-assert-is-nanf/dist');function k(a,u,t,m,o,s,q){var n,i,r,e,v,f;if(a<=0)return NaN;for(r=m,e=q,f=0;f<a&&(v=u[r],!(v===v&&o[e]===0));f++)r+=t,e+=s;if(f===a)return NaN;for(i=v,n=i,f+=1,f;f<a;f++)r+=t,e+=s,!o[e]&&(v=u[r],!h(v)&&(v<i?i=v:v>n&&(n=v)));return O(n-i)}g.exports=k
});var F=c(function(J,b){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),z=y();w(j,"ndarray",z);b.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=F(),l,R=B(A(__dirname,"./native.js"));C(R)?l=D:l=R;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
