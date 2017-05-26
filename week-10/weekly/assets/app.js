'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createView();
    const audio =  AudioControll();
    let newPlaylist = view.input.value;

    view.addPlaylist.addEventListener('click', () => {
        view.displayForm();
    });

    view.button.addEventListener('click', () => {
        console.log(view.input.value);
        console.log(newPlaylist);
        postPlaylist(view.input.value);
        view.hideForm();
    });

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
            console.log();
        });
    };

    const postPlaylist = function(input) {
        const endpoint = 'http://localhost:3000/create-playlist';
        ajax.ajax(endpoint, 'POST', (response) => {
            getPlaylists();
        }, input);
    }

    const setAlbumTitle = function(albumTitle, artistName) {
        view.renderAlbumAndArtist(albumTitle, artistName);
    };


    return {
        getPlaylists,
        getTracks
    }
};

const app = createController();
app.getPlaylists();
app.getTracks();
