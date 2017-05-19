'use strict'

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Reddit'
});

conn.connect(err => {
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established\n");
});

app.get('/hello', (req, res) => {
    const hello = function() {
        return 'hello world';
    }
    res.send(hello());
});

app.get('/post', (req, res) => {
    let result = {"post": 0};
    conn.query('SELECT * FROM posts', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            result = rows;
        }
        res.send(result);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('server running on ' + port);
})
