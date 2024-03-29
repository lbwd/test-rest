var http = require('http');

var app = http.createServer(function(req, res) {
  console.log(req.url);
  var body = [];
  req
    .on('data', function(chunk) {
      body.push(chunk);
    })
    .on('end', function() {
      body = Buffer.concat(body).toString();
      if (body) {
        let curl =
          "curl --user \"***CREDENTIALS***\" -X POST 'http://127.0.0.1:8080/mgn-services/addevent' -H 'Cache-Control: no-cache' -H 'Content-Type: application/json' -d \"" +
          body +
          '"';
        console.log(curl.trim().replace(/(\r\n|\n|\r)/gm, ''));
      }
      res.end();
    });
});
app.listen(process.env.PORT || 5000);
