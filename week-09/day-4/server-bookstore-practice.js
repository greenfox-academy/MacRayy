'use strict'

const mysql = require('mysql');
const express = require('express')

const app = express()

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
});

conn.connect(err => {
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established\n");
});

app.get('/', (req, res) => {
    let HTML = '<ul>';
    conn.query("SELECT book_name FROM book_mast", (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            rows.forEach(row => {
                HTML += '<li>' + (row.book_name) + '</li>';
            });
        }
        HTML += '</ul>'
        res.send(HTML);
    });
});

app.listen(3000, () => {
    console.log('server is running');
});
