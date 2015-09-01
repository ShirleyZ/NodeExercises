// learnyounode exercise 6

var mymod = require('./lun_ex6_mod.js')

function callback(err, filesWithExt) {
  //console.log(filesWithExt);

  for (i = 0; filesWithExt[i] != null; i++) {
    console.log(filesWithExt[i])
  }
}

var filesWithExt = mymod(process.argv[2], process.argv[3], callback)

