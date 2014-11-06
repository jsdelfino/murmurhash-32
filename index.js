'use strict';

// An optimized JavaScript implementation of the MurmurHash algorithms.

var murmurhash2 = require('./murmurhash2_gc');
var murmurhash3 = require('./murmurhash3_gc');

module.exports = murmurhash3;
module.exports.murmurhash3 = murmurhash3;
module.exports.murmurhash2 = murmurhash2;

