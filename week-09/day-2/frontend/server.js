'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const sum = require('./sum.js');
const factorio = require('./factorio.js');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));
app.use(bodyParser.json())

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


app.post('/dountil/:what', (req, res) => {
    if (req.params.what === 'sum') {
        res.send( {
            result: sum(req.body.until)
        });
    } else if (req.params.what === 'factor') {
        res.send( {
            result: factorio(req.body.until)
        });
    } else {
        res.send( {
            error: "Please provide a number!"
        });
    }
});

app.listen(8080, () => {
    console.log('server is running');
});
