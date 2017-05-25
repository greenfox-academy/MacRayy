'use strict'

const express = require('express');
const mysql = require('mysql');

const app = express();

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

const playlistsData = [
	{ "id": 1, "title": "Favorites", "system": 1},
	{ "id": 2, "title": "Music for programming", "system": 0},
	{ "id": 3, "title": "Driving", "system": 0},
	{ "id": 5, "title": "Fox house", "system": 0},
];
const tracksData = [
	{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "assets/talisco-run/04 Follow Me.mp3" },
	{ "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "assets/talisco-run/03 The Keys.mp3" }
];

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', (req, res) => {
    res.send(playlistsData);
});

app.get('/playlist-tracks', (req, res) => {
    res.send(tracksData);
});

app.listen(3000, () => {
    console.log('server is running');
});
