'use strict'

const AudioControll = function() {

    const audio = document.querySelector('.audio');


    const addClickToSong = function(tracksData, renderAlbumTitle) {
        const allTracks = document.querySelectorAll('.tracklist .track');

        audio.addEventListener('ended', (event) => {
            allTracks.forEach((track) => {
                const trackIndex = Array.from(track.parentNode.children).indexOf(track);
                console.log(trackIndex);
            });
            // changeSong(tracksData);
        });

        allTracks.forEach((track) => {
            track.addEventListener('click', () => {
                const trackIndex = Array.from(track.parentNode.children).indexOf(track);
                changeSong(tracksData, trackIndex, renderAlbumTitle);
            });
        });
    };

    const changeSong = function(tracksData, trackIndex, renderAlbumTitle) {
        audio.setAttribute('src', tracksData[trackIndex].path);
        renderAlbumTitle(tracksData[trackIndex].album, tracksData[trackIndex].artist);
    };

    return {
        addClickToSong
    }
};
