// learnyounode exercise 5

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], doneRead);

function doneRead (err, files) {
  // Sorting files that end with .txt
  var fileExt = "." + process.argv[3].toString();
  
  var filesWithExt = [];
  
  for (i = 0; i < files.length; i++) {
    if (path.extname(files[i]) == fileExt) {
      filesWithExt.push(files[i]);
    }
  }
  
  printList(filesWithExt);
}

function printList(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

// Official Solution
// Wow fuck me

/*
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})



*/