// Funsies 1

var fs = require('fs');

fs.readFile('funsies_inputFile1.txt', 'utf8', function doneRead(err, contents) {
  console.log(contents);
  console.log("Type " + typeof(contents));
  
  var lines = contents.split('\n');
  console.log(lines);
  lines.forEach(function (files) {
    console.log(files);
  })
  
});