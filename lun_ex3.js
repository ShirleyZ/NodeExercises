// learnyounode exercise 3
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

buf = buf.toString();
var buffed = buf.split('\n');

console.log(buffed.length-1);

/* Official solution */
/*
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length -1;

console.log(lines);

// Note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1;

*/