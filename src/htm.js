/**
 * @author Jeff Fohl / http://fohl.com/
 *
 */

// Utilities
var util = require('util');
var debug = require('./util/debug.js');
var Stream = require('./examples/sdr_stream.js');

// Model
var Region = require('./model/Region.js');


// Tests
var myParameters = {
	"columnCount" : {
		value : 2048 
	}
};

var myRegion = Region.create(myParameters);

Stream.init(100,101);

Stream.stream.pipe(process.stdout);



