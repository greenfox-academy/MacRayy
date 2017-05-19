'use strict'

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/hello', (req, res) => {
    const hello = function() {
        return 'hello world';
    }
    res.send(hello());
});

const port = 3000;
app.listen(port, () => {
    console.log('server running on ' + port);
})
