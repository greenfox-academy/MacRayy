'use strict'

const express = require('express')

const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function functionName() {
    console.log('server is running');
})
