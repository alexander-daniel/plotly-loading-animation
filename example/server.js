var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname })
).listen(9999);

console.log('Listening on :9999');
