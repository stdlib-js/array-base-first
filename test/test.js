/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex64Array = require( '@stdlib/array-complex64' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var first = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof first, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the first element of an array-like object', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3 ];
	expected = 1;
	actual = first( x );

	t.equal( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the first element of an array-like object (accessors)', function test( t ) {
	var actual;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	actual = first( x );

	t.strictEqual( realf( actual ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( actual ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `undefined` if provided an empty array', function test( t ) {
	var actual = first( [] );
	t.strictEqual( actual, void 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `undefined` if provided an empty array (accessors)', function test( t ) {
	var actual = first( new Complex64Array( 0 ) );
	t.strictEqual( actual, void 0, 'returns expected value' );
	t.end();
});
