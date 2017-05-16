'use strict'

const express = require('express');
const five = require('five')

const app = express();

app.get('/', function(req, res) {
    // res.send('<a href="#">ez itt a fooldal</a>')
    console.log(req.url); //kiirja az url-t
    console.log(req.query); //objektumot csinal a beirt query stringbol
    res.send({
        name: "Balazs",
        age: 12,
        banon: req.query.banon //beteszi az objektumba az url-be irt erteket
    })
});

// app.get('/five', function(req, res) {
//     const lang = req.query.lang || 'klingon';
//     const fiveFunc = five[lang];
//     res.send(fiveFunc());
//     //ha beirod a nyelvet akkor kiirja azon a nyelven hogy 5
// });

app.get('/five/:lang', function(req, res) {
    const lang = req.params.lang;
    const fiveFunc = five[lang];
    res.send(fiveFunc());
});

app.listen(4000);
