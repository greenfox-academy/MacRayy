'use strict'

const express = require('express');
const mysql = require('mysql');

const app = express();

let playlistsData;
let tracksData;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Musicplayer'
});

conn.connect(err => {
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established\n");
});

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', (req, res) => {
    conn.query('SELECT * FROM Playlists', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            playlistsData = rows;
        }
        res.send(playlistsData);
    });
});

app.get('/playlist-tracks', (req, res) => {
    conn.query('SELECT * FROM Tracks', (err, rows) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            tracksData = rows;
        }
        res.send(tracksData);
    });
});

app.listen(3000, () => {
    console.log('server is running');
});
