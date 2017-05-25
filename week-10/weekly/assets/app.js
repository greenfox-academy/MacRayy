'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createView();
    const audio =  AudioControll();

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
            audio.addsEventListeners();
        });
    };

    return {
        getPlaylists,
        getTracks
    }
};

const app = createController();
app.getPlaylists();
app.getTracks();
