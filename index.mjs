// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";function n(r,n,s,a,i){var o,f,d,m,l,u;if(r<=0)return NaN;for(d=s<0?(1-r)*s:0,m=i<0?(1-r)*i:0,u=0;u<r&&((l=n[d])!=l||0!==a[m]);u++)d+=s,m+=i;if(u===r)return NaN;for(o=f=l,u+=1;u<r;u++)d+=s,a[m+=i]||(l=n[d],e(l)||(l<f?f=l:l>o&&(o=l)));return t(o-f)}function s(r,n,s,a,i,o,f){var d,m,l,u,j,p;if(r<=0)return NaN;for(l=a,u=f,p=0;p<r&&((j=n[l])!=j||0!==i[u]);p++)l+=s,u+=o;if(p===r)return NaN;for(d=m=j,p+=1;p<r;p++)l+=s,i[u+=o]||(j=n[l],e(j)||(j<m?m=j:j>d&&(d=j)));return t(d-m)}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
