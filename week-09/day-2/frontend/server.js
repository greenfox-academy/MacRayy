'use strict'

const express = require('express')

const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.use('/assets', express.static('assets'));

app.get('/doubling', function(req, res) {
    console.log(req.query);
    console.log(req.query.input);
    if (req.query === {} || req.query.input === undefined) {
        res.send( {
            error: "Please provide an input!"
        })
    } else {
        res.send( {
            received: parseInt(req.query.input),
            result: req.query.input * 2
        })
    }
})

app.listen(8080, function functionName() {
    console.log('server is running');
})
