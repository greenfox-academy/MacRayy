'use strict'

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('hello');
    res.send('hello');
});

app.listen(3000, () => {
    console.log('server is running');
});
