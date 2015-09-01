// learnyounode exercise 4
var fs = require('fs');

// Method 1
/*
fs.readFile(process.argv[2], function doneRead(err, fileContents) {
  if (err) {
    console.error(err);
  }
  fileContents = fileContents.toString();
  var lines = fileContents.split('\n');

  console.log(lines.length-1);
});
*/
// Method 2

function doneRead(err, fileContents) {
  if (err) {
    console.error(err);
  }
  fileContents = fileContents.toString();
  var lines = fileContents.split('\n');

  console.log(lines.length-1);
}

fs.readFile(process.argv[2], doneRead);

/* Official solution */
/*
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length -1;
  console.log(lines);
}

*/