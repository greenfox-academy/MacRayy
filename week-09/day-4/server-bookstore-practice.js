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
                HTML += '<li>' + row.book_name + '</li>';
            });
        }
        HTML += '</ul>'
        res.send(HTML);
    });
});


app.get('/table', (req, res) => {
    let HTML = '<table>';
    conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id', (err, rows) => {
        console.log('table');
        if (err) {
            console.log('Error: ', err);
        } else {
            rows.forEach(row => {
                HTML += '<tr><td>' + row.book_name + '</td>';
                HTML += '<td>' + row.aut_name + '</td>'
                HTML += '<td>' + row.cate_descrip + '</td>'
                HTML += '<td>' + row.pub_name + '</td>'
                HTML += '<td>' + row.book_price + '</td></tr>';
            });
        }
        HTML += '</table>'
        res.send(HTML)
    })

});

app.get('/table/books', (req, res) => {
    let sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';
    let queryParts = [];
    let result = '<table>';
    if (req.query.category) {
        let category = 'cate_descrip = ' + '"' + req.query.category + '"';
        queryParts.push(category);
    }
    if (req.query.publisher) {
        let publisher = 'aut_name = ' + '"' + req.query.publisher + '"';
        queryParts.push(publisher);
    }
    if (req.query.plt) {

    }
    if (req.query.pgt) {

    }
    if (queryParts.length !== 0) {
        sql += ' WHERE ' + queryParts.join(' AND ');
    }
    console.log('\n' + sql + '\n');
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            rows.forEach(row => {
                result += '<tr><td>' + row.book_name + '</td>';
                result += '<td>' + row.aut_name + '</td>';
                result += '<td>' + row.cate_descrip + '</td>';
                result += '<td>' + row.pub_name + '</td>';
                result += '<td>' + row.book_price + '</td></tr>';
            });
        }
        result += '</table>';
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('server is running');
});
