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
      if (body) console.log(JSON.parse(body));
      res.end();
    });
});
app.listen(process.env.PORT || 5000);
