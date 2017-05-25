'use strict'

const AudioControll = function() {

    const addsEventListeners = function(tracksData, renderHead) {
        const allTracks = document.querySelectorAll('.tracklist .track');
        allTracks.forEach((track) => {
            track.addEventListener('click', () => {
                const trackIndex = Array.from(track.parentNode.children).indexOf(track);
                changeSong(tracksData, trackIndex, renderHead);
            });
        });
    };

    const changeSong = function(tracksData, trackIndex, renderHead) {
        const audio = document.querySelector('.audio');
        audio.setAttribute('src', tracksData[trackIndex].path);
        renderHead(tracksData[trackIndex].album, tracksData[trackIndex].artist);
    };

    return {
        addsEventListeners
    }
};
