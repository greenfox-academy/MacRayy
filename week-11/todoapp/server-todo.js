'use strict'

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

let todos

app.use('/public', express.static('public'));

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

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/todos', (req, res) => {
    conn.query('SELECT * FROM todos ORDER BY completed DESC', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            todos = rows;
        }
        res.send(todos);
    });
});

app.get('/todos/:id', (req, res) => {
    const todoID = req.params.id;
    conn.query('SELECT * FROM todos WHERE ID = ?', todoID, (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            todos = rows;
            if (todos.length > 0) {
                res.send(todos);
            } else {
                res.send('No such todo')
            }
        }
    });
});

app.listen(3000, () => {
    console.log('server is running');
});
