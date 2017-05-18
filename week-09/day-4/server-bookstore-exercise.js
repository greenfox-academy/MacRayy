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

const country = 'USA'
const city = 'Atlanta'

app.get('/', function get(req, res) {
    conn.query("SELECT * FROM author WHERE country = ? AND home_city = ?", [country, city], (err, rows) => {
        console.log(err);
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log("Data received from Db:\n");
            rows.forEach(row => {
                console.log(row.aut_name);
            });
        }
    });
    res.send('yolo')
});

app.get('/get', function get(req, res) {
    conn.query("SELECT * FROM author WHERE country = ? AND home_city = ?", [country, city], (err, rows) => {
        console.log(err);
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log("Data received from Db:\n");
            rows.forEach(row => {
                console.log(row.aut_name);
            });
        }
    });
    res.send('yolo')
});


app.listen(3000, () => {
    console.log('server is running');
});
