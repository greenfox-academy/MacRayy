'use strict'

const playlist = document.querySelector('.container__playlists');
const tracklist = document.querySelector('.tracklist');

const ajax = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const rsp = JSON.parse(xhr.response);
                callback(rsp);
                console.log(rsp);
            } else {
                console.log('error:' + xhr.status);
            }
        }
    };
    xhr.send();
};

const getPlaylists = () => {
    const endpoint = 'http://localhost:3000/playlists';
    ajax(endpoint, 'GET', (response) => {
        renderPlaylists(response);
    });
};

const getTracks = () => {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    ajax(endpoint, 'GET', (response) => {
        renderTracks(response);
    });
};

const renderPlaylists = function(response) {
    const outputPlaylists = Mustache.render('{{#playlists}} <li class="list-item"> {{title}}<span class="x">&#x02A2F;</span></li> {{/playlists}}', {playlists: response});
    playlist.innerHTML = outputPlaylists;
};

const renderTracks = function(response) {
    const outputTracks = Mustache.render('{{#tracks}} <li class="list-item">{{title}} ({{artist}})<span>{{duration}}</span></li> {{/tracks}}', {tracks: response});
    console.log(outputTracks);
    tracklist.innerHTML = outputTracks;
}

getPlaylists();
getTracks();
