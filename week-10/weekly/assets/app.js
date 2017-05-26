'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createView();
    const audio =  AudioControll();

    view.addPlaylist.addEventListener('click', () => {
        view.displayForm();
    });

    view.button.addEventListener('click', () => {
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
