'use strict'

const createView = function () {
    const playlist = document.querySelector('.container__playlists');
    const tracklist = document.querySelector('.tracklist');
    const album = document.querySelector('.album-title');
    const artist = document.querySelector('.artist');

    const renderPlaylists = function(response) {
        const outputPlaylists = Mustache.render('{{#playlists}} <li class="list-item playlist"> {{title}}<span class="x">&#x02A2F;</span></li> {{/playlists}}', {playlists: response});
        playlist.innerHTML = outputPlaylists;
    };

    const renderTracks = function(response) {
        const tracks = {tracks: response}
        Handlebars.registerHelper("inc", (value, options) => {
            return parseInt(value) + 1;
        });
        const outputTracks = '{{#tracks}} <li class="track list-item">{{inc @index}} {{title}} ({{artist}})<span>{{duration}}</span></li> {{/tracks}}';
        const compiledTracks = Handlebars.compile(outputTracks);
        const generatedHTML = compiledTracks(tracks);
        tracklist.innerHTML = generatedHTML;
        album.innerText = response[0].album;
        artist.innerText = response[0].artist;
    };

    return {
        album,
        artist,
        renderPlaylists,
        renderTracks
    }
};
