'use strict'

const express = require('express')
const sum = require('./calculate.js')
const factorio = require('./calculate.js')

const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

app.get('/doubling', function(req, res) {
    if (req.query === {} || req.query.input === undefined) {
        res.send( {
            error: 'Please provide an input!'
        });
    } else {
        res.send( {
            received: parseInt(req.query.input),
            result: req.query.input * 2
        });
    }
});

app.get('/greeter', function(req, res) {
    if (req.query.name === undefined) {
        res.send( {
            error: 'Please provide a name!'
        });
    } else if (req.query.title === undefined) {
        res.send( {
            error: 'Please provide a title!'
        });
    } else {
        res.send( {
            welcome_message: 'Oh, hi there ' + req.query.name + ', my dear ' + req.query.title +'!'
        });
    }
});

app.get('/appenda/:a', (req, res) => {
    res.send( {
        appended: req.params.a + 'a'
    });
});

app.get('/dountil/:what', (req, res) => {
    console.log(req.params);
    console.log(req.params.what);

    res.send( {

    })
});

app.listen(8080, function functionName() {
    console.log('server is running');
});
