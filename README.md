<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# snanmskrange

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [range][range] of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
snanmskrange = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-snanmskrange@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var snanmskrange = require( 'path/to/vendor/umd/stats-base-snanmskrange/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-snanmskrange@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.snanmskrange;
})();
</script>
```

#### snanmskrange( N, x, strideX, mask, strideMask )

Computes the [range][range] of a single-precision floating-point strided array `x` according to a `mask`, ignoring `NaN` values.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );

var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

var v = snanmskrange( x.length, x, 1, mask, 1 );
// returns 4.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8]. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.
-   **strideMask**: index increment for `mask`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the [range][range] of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = snanmskrange( N, x, 2, mask, 2 );
// returns 11.0
```

Note that indexing is relative to the first index. To introduce offsets, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var mask0 = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = snanmskrange( N, x1, 2, mask1, 2 );
// returns 6.0
```

#### snanmskrange.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask )

Computes the [range][range] of a single-precision floating-point strided array according to a `mask`, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );

var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

var v = snanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
// returns 4.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the [range][range] for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, 5.0, 6.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 1, 1 ] );
var N = floor( x.length / 2 );

var v = snanmskrange.ndarray( N, x, 2, 1, mask, 2, 1 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-snanmskrange@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var mask;
var x;
var i;

x = new Float32Array( 10 );
mask = new Uint8Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        mask[ i ] = 1;
    } else {
        mask[ i ] = 0;
    }
    if ( randu() < 0.1 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
console.log( x );
console.log( mask );

var v = snanmskrange( x.length, x, 1, mask, 1 );
console.log( v );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dnanmskrange`][@stdlib/stats/base/dnanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmskrange`][@stdlib/stats/base/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/smskrange`][@stdlib/stats/base/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanrange`][@stdlib/stats/base/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmskmax`][@stdlib/stats/base/snanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmskmin`][@stdlib/stats/base/snanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-snanmskrange.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-snanmskrange

[test-image]: https://github.com/stdlib-js/stats-base-snanmskrange/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-snanmskrange/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-snanmskrange/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-snanmskrange?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-snanmskrange.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-snanmskrange/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-snanmskrange/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-snanmskrange/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-snanmskrange/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-snanmskrange/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-snanmskrange/main/LICENSE

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dnanmskrange]: https://github.com/stdlib-js/stats-base-dnanmskrange/tree/umd

[@stdlib/stats/base/nanmskrange]: https://github.com/stdlib-js/stats-base-nanmskrange/tree/umd

[@stdlib/stats/base/smskrange]: https://github.com/stdlib-js/stats-base-smskrange/tree/umd

[@stdlib/stats/base/snanrange]: https://github.com/stdlib-js/stats-base-snanrange/tree/umd

[@stdlib/stats/base/snanmskmax]: https://github.com/stdlib-js/stats-base-snanmskmax/tree/umd

[@stdlib/stats/base/snanmskmin]: https://github.com/stdlib-js/stats-base-snanmskmin/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
