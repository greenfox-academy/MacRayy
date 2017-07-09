'use strict'

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

let todos

app.use(bodyParser.json());
app.use('/public', express.static('public'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

conn.connect(err => {
  if(err){
    console.error("Error connecting to Db");
    return;
  }
  console.log("Connection established\n");
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/todos', (req, res) => {
    conn.query('SELECT * FROM todos ORDER BY completed DESC', (err, rows) => {
        if (err) {
            console.error('Error: ', err);
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
            console.error('Error: ', err);
        } else {
            todos = rows;
            if (todos.length > 0) {
                res.send(todos);
            } else {
                res.send('No such todo');
            }
        }
    });
});

app.post('/post-todo', (req, res) => {
    const newTodo = req.body.newTodo;
    conn.query('INSERT INTO todos (todo_name) VALUES ("' + newTodo + '")', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            res.send(todos);
        }
    });
});

app.put('/update-todo', (req, res) => {
    const update = req.body.TodoID;
    conn.query('UPDATE todos SET completed = "1" WHERE id = ?'), update, (err, rows) => {
        if (err) {
            console.error('Error: ', err);
        } else {
            res.send(todos);
        }
    };
});

app.listen(3000, () => console.log('server is running'));
