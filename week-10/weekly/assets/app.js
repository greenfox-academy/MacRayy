'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createView();
    const audio =  AudioControll();

    view.addPlaylist.addEventListener('click', () => {
        view.displayForm();
    });

    view.button.addEventListener('click', () => {
        postPlaylist(getInput);
        view.hideForm();
    })

    const getPlaylists = () => {
        const endpoint = 'http://localhost:3000/playlists';
        ajax.ajax(endpoint, 'GET', (response) => {
            view.renderPlaylists(response);
        });

    };

    const getTracks = () => {
        const endpoint = 'http://localhost:3000/playlist-tracks';
        ajax.ajax(endpoint, 'GET', (response) => {
            view.renderTracks(response);
            audio.addClickToSong(response, setAlbumTitle);
        });
    };

    const postPlaylist = function(input) {
        const endpoint = 'http://localhost:3000/create-playlist';
        ajax.ajax(endpoint, 'POST', (response) => {
            view.renderPlaylists(response);
        }, input);
    }

    const setAlbumTitle = function(albumTitle, artistName) {
        view.renderAlbumAndArtist(albumTitle, artistName);
    };

    const getInput = function() {
        const newPlaylist = view.input;
        return newPlaylist
    }

    return {
        getPlaylists,
        getTracks
    }
};

const app = createController();
app.getPlaylists();
app.getTracks();
