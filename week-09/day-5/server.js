'use strict'
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let result = {"posts": 0};

app.use(cors())
app.use(bodyParser.json())

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

app.get('/redditmain', (req, res) => {
    conn.query('SELECT * FROM posts', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            result.posts = rows;
        }
        res.send(result);
    });
});

app.post('/redditmain', (req, res) => {
    let timestamp = Math.floor(Date.now() / 1000);
    conn.query('INSERT INTO Reddit (href, timestamp, title) VALUES ("' + req.body.url + '", "' + timestamp + '", "' + req.body.title + '")', (err, rows) => {

    });
});
// ([column], [column]) VALUES ('[value]', [value]')

const port = 3000;
app.listen(port, () => {
    console.log('server running on ' + port);
})
