'use strict'

const AudioControll = function() {

    const addsEventListeners = function(tracksData, renderAlbumTitle) {
        const allTracks = document.querySelectorAll('.tracklist .track');
        allTracks.forEach((track) => {
            track.addEventListener('click', () => {
                const trackIndex = Array.from(track.parentNode.children).indexOf(track);
                changeSong(tracksData, trackIndex, renderAlbumTitle);
            });
        });
    };

    const changeSong = function(tracksData, trackIndex, renderAlbumTitle) {
        const audio = document.querySelector('.audio');
        audio.setAttribute('src', tracksData[trackIndex].path);
        renderAlbumTitle(tracksData[trackIndex].album, tracksData[trackIndex].artist);
    };

    return {
        addsEventListeners
    }
};
