'use strict'

const AudioControll = function() {

    const addsEventListeners = function(tracksData) {
        const allTracks = document.querySelectorAll('.tracklist .track');
        allTracks.forEach((track) => {
            track.addEventListener('click', () => {
                const trackIndex = Array.from(track.parentNode.children).indexOf(track);
                console.log(tracksData[trackIndex].path);
                changeSong(tracksData, trackIndex);
            });
        });
    };

    const changeSong = function(tracksData, trackIndex) {
        const audio = document.querySelector('.audio');
        audio.setAttribute('src', tracksData[trackIndex].path);
    };

    return {
        addsEventListeners
    }
};
