// learnyounode ex 8

var http = require('http');

http.get(process.argv[2], callback);


function callback(response) {
  var datas = "";

  response.setEncoding('utf8');

  response.on("data", function(data) {
    datas+= data;
  });

  response.on("end", function(data) {
    console.log(datas.length);
    console.log(datas);
  })

  response.on("error", console.error);

}

/* Solution

    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/