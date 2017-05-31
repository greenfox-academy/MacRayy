'use strict'

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

let todos

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

conn.connect(err => {
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established\n");
});

app.get('/todos', (req, res) => {
    conn.query('SELECT * FROM todos', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            todos = rows;
        }
        res.send(todos);
    });
});

app.listen(3000, () => {
    console.log('server is running');
});
