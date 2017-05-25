'use strict'

const AudioControll = function() {


    const addsEventListeners = function() {
        const allTracks = document.querySelectorAll('.tracklist .track');
        allTracks.forEach((track) => {
            track.addEventListener('click', () => {
                Array.from(track.parentNode.children).indexOf(track);
                console.log(track);
            });
        });
    };

    return {
        addsEventListeners
    }
};
