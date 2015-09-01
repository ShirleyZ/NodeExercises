// learnyounode exercise 6



module.exports = function findFiles (dirName, fileExt, callback) {
	//console.log("Called function");
  var fs = require('fs');
  var path = require('path');
  
  var filesWithExt = [];
  //console.log("Calling readdir");


	function doneRead (err, files) {
	  // Sorting files that end with .txt
	  //console.log("Got callback");
	  if (err)
	    return callback(err)

	  //console.log("No errors");
	  files.forEach(function (file) {
	  	//console.log("new node");
	  	if (path.extname(file) === "." + fileExt) {
	  		filesWithExt.push(file);
	  		//console.log(file);
	  	}
	  
	  })
		callback(err, filesWithExt);
	  //console.log("done each node")
	}
 	fs.readdir(dirName, doneRead);

  //console.log(filesWithExt);
	//console.log("Returning");
	// return filesWithExt;
}
