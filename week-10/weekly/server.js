'use strict'

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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

app.post('/create-playlist', (req, res) => {
    conn.query('INSERT INTO Playlists (title, system) VALUES ("' + req.body.newPlaylist + ', 0");', (err, rows) => {
        conn.query('SELECT * FROM Playlists', (err, rows) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                playlistsData = rows;
            }
            res.send(playlistsData);
        });
    });
    console.log('playlist added to server');
});

app.listen(3000, () => {
    console.log('server is running');
});
