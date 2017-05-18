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
    const tableData = 'book_name, aut_name, cate_descrip, pub_name, book_price';
    const bookTable = 'book_mast';
    const authorTable = 'author';
    const categoryTable = 'category';
    const publisherTable = 'publisher';
    const authorID = 'book_mast.aut_id = author.aut_id';
    const categoryID = 'book_mast.cate_id = category.cate_id';
    const publisherID = 'book_mast.pub_id = publisher.pub_id';
    const sql = 'SELECT ? FROM ? INNER JOIN ? ON ? INNER JOIN ? ON ? INNER JOIN ? ON ?'
    const sqlData = [tableData, bookTable, authorTable, authorID, categoryTable, categoryID, publisherTable, publisherID]
    let HTML = '<table>';
    // conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id', (err, rows) => {
    conn.query(sql, sqlData, (err, rows) => {
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

app.listen(3000, () => {
    console.log('server is running');
});
