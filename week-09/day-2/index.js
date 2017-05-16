'use strict'

let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log(request);
    response.end('hello');
}

server.listen(4000);
