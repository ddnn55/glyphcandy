var express = require('express');

var app = express(express.logger());

var max = 2000;

console.log("dumping first "+max+" unicode chars to html...");
var html = "<!doctype html><body style=\"word-wrap: break-word; font-size: 8em;\">";
for(var c = 33; c < max; c++)
{
  html += String.fromCharCode(c) + " ";
}
html += '<a href="https://github.com/gimlids/glyphcandy"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a></body></html>';
console.log("...done");

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
