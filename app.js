var express = require('express');

var app = express(express.logger());

var max = 2000;

console.log("dumping first "+max+" unicode chars to html...");
var html = "<!doctype html><body style=\"word-wrap: break-word; font-size: 8em;\">";
for(var c = 33; c < max; c++)
{
  html += String.fromCharCode(c) + " ";
}
html += "</body></html>";
console.log("...done");

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
